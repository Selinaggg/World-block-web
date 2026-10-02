from __future__ import annotations

import dataclasses
import math
import threading
import time
import uuid
from collections.abc import Callable
from typing import Any

from .codebook import CodebookError, CodebookResolver
from .events import EventHub
from .journal import Journal
from .protocol import ProtocolMessage, parse_protocol_line
from .state import BoardState, DetectionError
from .topology import BoardTopology, TopologyAssembler, TopologyError


CORRECTION_REQUEST_ID_HEX_LENGTH = 12
JITTER_VALIDATION_TIMEOUT_NS = 3_000_000_000
JITTER_NET_UNIT_TOLERANCE_US = 12.0
MULTIPOP_CONTACT_BOUNCE_WINDOW_NS = 1_000_000_000
SMALL_CONTACT_JITTER_THRESHOLD_US = 15.0
SMALL_CONTACT_JITTER_GRACE_NS = 600_000_000
MEGA_SAFE_COMMAND_BYTES = 63


class BoardRuntime:
    def __init__(
        self,
        journal: Journal,
        event_hub: EventHub | None = None,
        codebook: CodebookResolver | None = None,
    ) -> None:
        self.journal = journal
        self.event_hub = event_hub or EventHub()
        self.codebook = codebook
        self._lock = threading.RLock()
        self._assembler = TopologyAssembler()
        self._topology: BoardTopology | None = None
        self._state: BoardState | None = None
        self._hello: dict[str, Any] | None = None
        self._connected = False
        self._port: str | None = None
        self._last_error: str | None = None
        self._last_message_wall_ns: int | None = None
        self._active_faults: dict[str, dict[str, Any]] = {}
        self._incoming_state: dict[str, list[str]] | None = None
        self._visible_since_wall_ns: int | None = None
        self._command_sender: Callable[[str], None] | None = None
        self._module_layout_provider: Callable[[], dict[str, Any]] | None = None
        self._recent_multipops: dict[str, dict[str, Any]] = {}
        self._pending_jitter_validations: dict[str, dict[str, Any]] = {}
        self._suppressed_jitter_fault_ids: set[str] = set()
        self._deferred_faults: dict[str, dict[str, Any]] = {}
        self._expected_module_count: int | None = None
        self._suppress_next_state_checkpoint = False
        self._recovery: dict[str, Any] = {
            "status": "idle",
            "recovery_id": None,
            "checkpoint_id": None,
            "pending": {},
            "results": {},
            "accepted_count": 0,
            "rejected_count": 0,
            "expected_by_column": {},
        }

    def set_command_sender(self, sender: Callable[[str], None]) -> None:
        self._command_sender = sender

    def set_expected_module_count(
        self, module_count: int, *, reset_recovery: bool = False
    ) -> None:
        with self._lock:
            self._expected_module_count = int(module_count)
            if reset_recovery:
                if self._hello is not None:
                    self._hello["recovery_mode"] = True
                self._incoming_state = None
                self._suppress_next_state_checkpoint = False
                self._recovery = {
                    "status": "idle",
                    "recovery_id": None,
                    "checkpoint_id": None,
                    "pending": {},
                    "results": {},
                    "accepted_count": 0,
                    "rejected_count": 0,
                    "expected_by_column": {},
                    "restore_queue": [],
                }

    def set_module_layout_provider(
        self, provider: Callable[[], dict[str, Any]]
    ) -> None:
        self._module_layout_provider = provider

    def set_connection(self, connected: bool, port: str, error: str | None = None) -> None:
        with self._lock:
            self._connected = connected
            self._port = port
            self._last_error = error
        self.event_hub.publish({"type": "connection", "snapshot": self.snapshot()})

    def ingest_line(self, raw_line: str) -> ProtocolMessage | None:
        received_wall_ns = time.time_ns()
        received_monotonic_ns = time.monotonic_ns()
        message = parse_protocol_line(raw_line)
        self.journal.record_transport(
            message, raw_line.rstrip("\r\n"), received_wall_ns, received_monotonic_ns
        )
        with self._lock:
            self._last_message_wall_ns = received_wall_ns
        if message is None:
            return None

        try:
            self._apply_message(message, received_wall_ns, received_monotonic_ns)
        except (
            CodebookError,
            DetectionError,
            TopologyError,
            KeyError,
            TypeError,
            ValueError,
        ) as exc:
            with self._lock:
                self._last_error = str(exc)
            self.event_hub.publish(
                {"type": "runtime_error", "message": str(exc), "raw_line": message.raw_line}
            )
        return message

    def _apply_message(
        self,
        message: ProtocolMessage,
        received_wall_ns: int,
        received_monotonic_ns: int,
    ) -> None:
        self._expire_jitter_validations(received_monotonic_ns)
        self._expire_deferred_faults(received_monotonic_ns)
        data = message.data
        if message.kind == "hello":
            with self._lock:
                previous_boot = self._hello.get("boot_id") if self._hello else None
                self._hello = dict(data)
                if previous_boot and previous_boot != data.get("boot_id"):
                    self._topology = None
                    self._state = None
                    self._active_faults = {}
                    self._incoming_state = None
                    self._visible_since_wall_ns = None
                    self._recent_multipops = {}
                    self._pending_jitter_validations = {}
                    self._suppressed_jitter_fault_ids = set()
                    self._deferred_faults = {}
            self.event_hub.publish({"type": "hello", "hello": data})
            return

        if message.kind == "state_begin":
            with self._lock:
                if self._state is None:
                    raise DetectionError("state snapshot received before topology")
                self._incoming_state = {}
            return

        if message.kind == "state_column":
            column_id = str(data.get("column_id") or "")
            raw_stack = data.get("stack")
            if not isinstance(raw_stack, list):
                raise DetectionError("state column stack must be a list")
            with self._lock:
                if self._incoming_state is None:
                    raise DetectionError("state_column received before state_begin")
                self._incoming_state[column_id] = [str(code_id) for code_id in raw_stack]
            return

        if message.kind == "state_end":
            with self._lock:
                if self._state is None or self._incoming_state is None:
                    raise DetectionError("state_end received before state_begin")
                encoded_state = self._incoming_state
                self._incoming_state = None
            resolved_state: dict[str, list[str]] = {}
            for column_id, code_ids in encoded_state.items():
                if self.codebook is None:
                    raise DetectionError("state snapshots require a configured codebook")
                enriched = self.codebook.enrich_correction({"stack": code_ids})
                resolved_state[column_id] = list(enriched["units"])
            with self._lock:
                self._state.replace_board(resolved_state)
                self._state.last_seq = max(
                    self._state.last_seq, int(data.get("seq", self._state.last_seq))
                )
                self._last_error = None
                self._recent_multipops = {}
                self._pending_jitter_validations = {}
                self._suppressed_jitter_fault_ids = set()
                self._deferred_faults = {}
                suppress_checkpoint = self._suppress_next_state_checkpoint
                self._suppress_next_state_checkpoint = False
            if not suppress_checkpoint:
                self._save_automatic_checkpoint()
            self.event_hub.publish({"type": "state", "snapshot": self.snapshot()})
            return

        if message.kind == "topology":
            self._assembler.begin(data)
            return
        if message.kind == "channel":
            self._assembler.add_channel(data)
            return
        if message.kind == "topology_end":
            topology = self._assembler.finish(data)
            with self._lock:
                same_topology = (
                    self._topology is not None
                    and self._topology.topology_id == topology.topology_id
                    and self._state is not None
                )
                self._topology = topology
                if not same_topology:
                    self._state = BoardState(topology)
                    self._active_faults = {}
                    self._recent_multipops = {}
                    self._pending_jitter_validations = {}
                    self._suppressed_jitter_fault_ids = set()
                    self._deferred_faults = {}
                expected_recovery_columns = set(
                    self._recovery.get("expected_by_column") or {}
                )
                live_columns = {column.id for column in topology.columns}
                if (
                    self._recovery.get("status")
                    in {"starting", "restoring", "stopping"}
                    and expected_recovery_columns
                    and expected_recovery_columns != live_columns
                ):
                    self._recovery = {
                        "status": "idle",
                        "recovery_id": None,
                        "checkpoint_id": None,
                        "pending": {},
                        "results": {},
                        "accepted_count": 0,
                        "rejected_count": 0,
                        "expected_by_column": {},
                        "restore_queue": [],
                    }
                self._last_error = None
            if (
                bool((self._hello or {}).get("recovery_mode"))
                and self._command_sender is not None
                and (
                    self._expected_module_count is None
                    or topology.module_count == self._expected_module_count
                )
                and self._recovery.get("status") not in {"restoring", "starting"}
            ):
                checkpoint = self.journal.latest_recovery_checkpoint(
                    module_count=topology.module_count,
                    electrical_codebook_id=(
                        self.codebook.electrical_id if self.codebook else ""
                    ),
                    columns=[column.id for column in topology.columns],
                    protected=False,
                )
                self._start_recovery(checkpoint, automatic=True)
            self.event_hub.publish({"type": "topology", "snapshot": self.snapshot()})
            return

        if message.kind == "detection":
            resolved_data = dict(data)
            if self.codebook is not None:
                firmware_codebook_id = (
                    self._hello.get("electrical_codebook_id") if self._hello else None
                )
                if (
                    firmware_codebook_id
                    and firmware_codebook_id != self.codebook.electrical_id
                ):
                    raise CodebookError(
                        "firmware electrical codebook "
                        f"{firmware_codebook_id} does not match backend "
                        f"{self.codebook.electrical_id}"
                    )
                resolved_data = self.codebook.enrich_detection(data)
            detection_id = str(resolved_data.get("detection_id") or "")
            with self._lock:
                if self._state is None:
                    raise DetectionError("detection received before a complete topology")
                if detection_id in self._state.applied_detection_ids:
                    return
            if self.journal.detection_exists(detection_id):
                raise DetectionError(
                    "detection ID collision: "
                    f"{detection_id} already exists in the journal; firmware "
                    f"boot ID {resolved_data.get('boot_id') or 'unknown'} was "
                    "reused. Upload firmware 0.3.4 or newer and reboot the Arduino."
                )
            with self._lock:
                if self._state is None:
                    raise DetectionError("detection received before a complete topology")
                column_id = str(resolved_data.get("column_id") or "")
                before_stack = list(self._state.stacks.get(column_id, []))
                previous_last_seq = self._state.last_seq
                applied = self._state.apply_detection(resolved_data)
                after_stack = list(self._state.stacks.get(column_id, []))
            inserted = self.journal.record_detection(
                resolved_data, received_wall_ns, received_monotonic_ns
            )
            if applied and not inserted:
                with self._lock:
                    if self._state is not None:
                        self._state.stacks[column_id] = before_stack
                        self._state.last_seq = previous_last_seq
                        self._state.applied_detection_ids.discard(detection_id)
                raise DetectionError(
                    f"detection ID collision while recording {detection_id}; "
                    "the board update was rolled back"
                )
            if applied and inserted:
                with self._lock:
                    self._last_error = None
                self._track_grouped_removal(
                    resolved_data,
                    before_stack,
                    after_stack,
                    received_monotonic_ns,
                )
                self._save_automatic_checkpoint()
                self.event_hub.publish(
                    {
                        "type": "detection",
                        "detection": resolved_data,
                        "snapshot": self.snapshot(),
                    }
                )
            return

        if message.kind == "fault":
            fault = dict(data)
            fault.setdefault("fault_id", f"{fault.get('boot_id', 'unknown')}:fault:{received_wall_ns}")
            fault.setdefault("status", "active")
            fault.setdefault("severity", "error")
            fault.setdefault("code", "unspecified_fault")
            column_id = str(fault.get("column_id") or "")
            if (
                str(fault.get("code") or "") == "recovery_mismatch"
                and column_id in self._recovery.get("expected_by_column", {})
            ):
                saved_stack = self._units_for_codes(
                    self._recovery["expected_by_column"][column_id]
                )
                fault["saved_stack"] = saved_stack
                fault["trusted_stack"] = saved_stack
            with self._lock:
                if column_id and self._state is not None and column_id in self._state.stacks:
                    fault.setdefault("trusted_stack", list(self._state.stacks[column_id]))
                if (
                    fault["status"] == "resolved"
                    and str(fault["fault_id"]) in self._suppressed_jitter_fault_ids
                ):
                    self._suppressed_jitter_fault_ids.discard(str(fault["fault_id"]))
                    return
                deferred = (
                    self._deferred_faults.pop(str(fault["fault_id"]), None)
                    if fault["status"] == "resolved"
                    else None
                )
            if deferred is not None:
                candidate = deferred.get("candidate")
                if candidate is not None:
                    self._rearm_multipop_candidate(
                        candidate, received_monotonic_ns
                    )
                self.event_hub.publish(
                    {
                        "type": "jitter",
                        "status": "self_resolved",
                        "column_id": column_id,
                        "snapshot": self.snapshot(),
                    }
                )
                return
            if self._start_jitter_validation(
                fault, received_wall_ns, received_monotonic_ns
            ):
                return
            if self._is_small_contact_jitter(fault):
                self._defer_fault(
                    fault, received_wall_ns, received_monotonic_ns
                )
                return
            self._record_and_publish_fault(
                fault, received_wall_ns, received_monotonic_ns
            )
            return

        if message.kind == "correction":
            correction = dict(data)
            if self._handle_jitter_correction(
                correction, received_wall_ns, received_monotonic_ns
            ):
                return
            if self.codebook is not None:
                correction = self.codebook.enrich_correction(correction)
            if str(correction.get("status")) == "accepted":
                with self._lock:
                    if self._state is None:
                        raise DetectionError("correction received before a complete topology")
                    self._state.replace_stack(
                        str(correction.get("column_id") or ""),
                        list(correction.get("units") or []),
                    )
                    self._last_error = None
                self._save_automatic_checkpoint()
            recorded = self.journal.record_correction(
                correction, received_wall_ns, received_monotonic_ns
            )
            self.event_hub.publish(
                {
                    "type": "correction",
                    "correction": recorded,
                    "snapshot": self.snapshot(),
                }
            )
            return

        if message.kind == "recovery":
            recovery = dict(data)
            recorded = self.journal.record_recovery(
                recovery, received_wall_ns, received_monotonic_ns
            )
            status = str(recovery.get("status") or "")
            request_id = str(recovery.get("request_id") or "")
            column_id = str(recovery.get("column_id") or "")
            if status == "accepted" and column_id:
                stack_codes = [str(code) for code in recovery.get("stack") or []]
                with self._lock:
                    if self._state is None:
                        raise DetectionError(
                            "recovery response received before topology"
                        )
                    self._state.replace_stack(
                        column_id, self._units_for_codes(stack_codes)
                    )
            completed_successfully = False
            next_command: str | None = None
            with self._lock:
                was_pending = bool(
                    request_id and request_id in self._recovery["pending"]
                )
                if request_id:
                    self._recovery["pending"].pop(request_id, None)
                if was_pending and status == "accepted":
                    self._recovery["accepted_count"] = (
                        int(self._recovery.get("accepted_count") or 0) + 1
                    )
                if column_id and status == "rejected":
                    self._recovery["results"][column_id] = {
                        **recorded,
                        "stack": list(recovery.get("stack") or []),
                    }
                    if was_pending:
                        self._recovery["rejected_count"] = (
                            int(self._recovery.get("rejected_count") or 0) + 1
                        )
                pending_empty = not self._recovery["pending"]
                restoring = self._recovery.get("status") == "restoring"
                recovery_id = str(self._recovery.get("recovery_id") or "")
                if restoring and was_pending and status in {"accepted", "rejected"}:
                    if status == "rejected":
                        self._recovery["status"] = "failed"
                        self._recovery["pending"] = {}
                        self._recovery["restore_queue"] = []
                        next_command = f"RECOVERY_END {recovery_id}"
                    else:
                        restore_queue = self._recovery.get("restore_queue") or []
                        if restore_queue:
                            next_command = restore_queue.pop(0)
                        elif pending_empty:
                            next_command = f"RECOVERY_END {recovery_id}"
                if status == "complete":
                    completed_successfully = not bool(
                        self._recovery.get("rejected_count")
                    )
                    self._recovery["status"] = (
                        "complete" if completed_successfully else "attention"
                    )
                    if self._hello is not None:
                        self._hello["recovery_mode"] = False
                    self._suppress_next_state_checkpoint = True
                elif status == "cancelled":
                    if self._hello is not None:
                        self._hello["recovery_mode"] = False
                    self._suppress_next_state_checkpoint = True
                    self._recovery = {
                        "status": "idle",
                        "recovery_id": None,
                        "checkpoint_id": None,
                        "pending": {},
                        "results": {},
                        "accepted_count": 0,
                        "rejected_count": 0,
                        "expected_by_column": {},
                        "restore_queue": [],
                    }
            if next_command is not None and self._command_sender is not None:
                self._command_sender(next_command)
            if completed_successfully:
                # Persist the validated board, then discard the bulky transient
                # recovery state before publishing the completion event. The
                # monitor can resume normal live updates immediately.
                self._save_automatic_checkpoint(publish_event=False)
                with self._lock:
                    if (
                        self._recovery.get("recovery_id") == recovery_id
                        and self._recovery.get("status") == "complete"
                    ):
                        self._recovery = {
                            "status": "idle",
                            "recovery_id": None,
                            "checkpoint_id": None,
                            "pending": {},
                            "results": {},
                            "accepted_count": 0,
                            "rejected_count": 0,
                            "expected_by_column": {},
                            "restore_queue": [],
                        }
            elif status == "complete":
                with self._lock:
                    if self._recovery.get("recovery_id") == recovery_id:
                        self._recovery = {
                            "status": "idle",
                            "recovery_id": None,
                            "checkpoint_id": None,
                            "pending": {},
                            "results": {},
                            "accepted_count": 0,
                            "rejected_count": 0,
                            "expected_by_column": {},
                            "restore_queue": [],
                        }
            self.event_hub.publish(
                {"type": "recovery", "recovery": recorded, "snapshot": self.snapshot()}
            )
            return

        if message.kind == "board_reset":
            reset = dict(data)
            recorded = self.journal.record_board_reset(
                reset, received_wall_ns, received_monotonic_ns
            )
            if str(reset.get("status")) == "accepted":
                with self._lock:
                    self._visible_since_wall_ns = received_wall_ns
                    self._last_error = None
                    self._recent_multipops = {}
                    self._pending_jitter_validations = {}
                    self._suppressed_jitter_fault_ids = set()
                    self._deferred_faults = {}
            self.event_hub.publish(
                {
                    "type": "board_reset",
                    "board_reset": recorded,
                    "snapshot": self.snapshot(),
                }
            )
            return

    def _track_grouped_removal(
        self,
        detection: dict[str, Any],
        before_stack: list[str],
        after_stack: list[str],
        received_monotonic_ns: int,
    ) -> None:
        column_id = str(detection.get("column_id") or "")
        try:
            operation_index = int(detection.get("operation_index", 1))
            operation_size = int(detection.get("operation_size", 1))
        except (TypeError, ValueError):
            operation_index = 1
            operation_size = 1
        operation_id = str(detection.get("operation_id") or "")
        is_grouped_remove = (
            str(detection.get("event") or "") == "remove"
            and operation_size > 1
            and 1 <= operation_index <= operation_size
            and bool(operation_id)
        )
        with self._lock:
            if not is_grouped_remove:
                candidate = self._recent_multipops.get(column_id)
                if candidate is not None and self._is_transient_post_pop_detection(
                    candidate,
                    detection,
                    before_stack,
                    after_stack,
                    received_monotonic_ns,
                ):
                    return
                if str(detection.get("event") or "") == "add":
                    self._recent_multipops = {}
                else:
                    self._recent_multipops.pop(column_id, None)
                return
            if operation_index == 1:
                if len(before_stack) < operation_size or after_stack != before_stack[:-1]:
                    self._recent_multipops.pop(column_id, None)
                    return
                original_g_us = None
                after_g_us = None
                try:
                    filtered_g_us = float(detection["filtered_g_us"])
                    delta_g_us = float(detection["delta_g_us"])
                    if math.isfinite(filtered_g_us) and math.isfinite(delta_g_us):
                        after_g_us = filtered_g_us
                        original_g_us = filtered_g_us - delta_g_us
                except (KeyError, TypeError, ValueError):
                    pass
                self._recent_multipops[column_id] = {
                    "column_id": column_id,
                    "operation_id": operation_id,
                    "operation_size": operation_size,
                    "last_operation_index": 1,
                    "original_stack": list(before_stack),
                    "original_g_us": original_g_us,
                    "after_g_us": after_g_us,
                    "after_stack": list(after_stack),
                    "completed_monotonic_ns": None,
                }
            else:
                candidate = self._recent_multipops.get(column_id)
                if (
                    candidate is None
                    or candidate["operation_id"] != operation_id
                    or candidate["operation_size"] != operation_size
                    or candidate["last_operation_index"] + 1 != operation_index
                    or after_stack
                    != candidate["original_stack"][: len(candidate["original_stack"]) - operation_index]
                ):
                    self._recent_multipops.pop(column_id, None)
                    return
                candidate["last_operation_index"] = operation_index
                candidate["after_stack"] = list(after_stack)
            candidate = self._recent_multipops.get(column_id)
            if candidate is not None and operation_index == operation_size:
                popped_stack = candidate["original_stack"][
                    len(candidate["after_stack"]) :
                ]
                candidate["popped_stack"] = list(popped_stack)
                candidate["popped_expected_g_us"] = sum(
                    self.codebook.codes_by_id[
                        self.codebook.code_ids_by_unit[unit]
                    ].target_g_us
                    for unit in popped_stack
                ) if self.codebook is not None else None
                try:
                    popped_g_us = float(candidate["original_g_us"]) - float(
                        candidate["after_g_us"]
                    )
                    candidate["popped_g_us"] = (
                        popped_g_us if math.isfinite(popped_g_us) else None
                    )
                except (KeyError, TypeError, ValueError):
                    candidate["popped_g_us"] = None
                candidate["completed_monotonic_ns"] = received_monotonic_ns

    @staticmethod
    def _is_transient_post_pop_detection(
        candidate: dict[str, Any],
        detection: dict[str, Any],
        before_stack: list[str],
        after_stack: list[str],
        received_monotonic_ns: int,
    ) -> bool:
        completed_ns = candidate.get("completed_monotonic_ns")
        if (
            completed_ns is None
            or received_monotonic_ns - int(completed_ns) < 0
            or received_monotonic_ns - int(completed_ns)
            > MULTIPOP_CONTACT_BOUNCE_WINDOW_NS
        ):
            return False

        post_pop_stack = candidate["after_stack"]
        transient_stack = candidate.get("transient_stack")
        event = str(detection.get("event") or "")
        if (
            event == "add"
            and transient_stack is None
            and before_stack == post_pop_stack
            and after_stack[:-1] == post_pop_stack
        ):
            candidate["transient_stack"] = list(after_stack)
            return True
        if (
            event == "remove"
            and transient_stack is not None
            and before_stack == transient_stack
            and after_stack == post_pop_stack
        ):
            candidate.pop("transient_stack", None)
            return True
        return False

    def _start_jitter_validation(
        self,
        fault: dict[str, Any],
        received_wall_ns: int,
        received_monotonic_ns: int,
    ) -> bool:
        if (
            self.codebook is None
            or self._command_sender is None
            or str(fault.get("status") or "") != "active"
            or str(fault.get("code") or "") != "unclassified_add"
        ):
            return False
        column_id = str(fault.get("column_id") or "")
        same_column_candidate: dict[str, Any] | None = None
        transfer_candidate: dict[str, Any] | None = None
        transfer_target_stack: list[str] | None = None
        with self._lock:
            candidate = self._recent_multipops.get(column_id)
            completed_ns = (
                int(candidate["completed_monotonic_ns"])
                if candidate and candidate.get("completed_monotonic_ns") is not None
                else None
            )
            if (
                candidate is not None
                and completed_ns is not None
                and received_monotonic_ns - completed_ns >= 0
                and self._state is not None
                and self._state.stacks.get(column_id) == candidate["after_stack"]
                and len(candidate.get("popped_stack") or []) >= 2
            ):
                same_column_candidate = candidate
            else:
                transfer_candidate = self._matching_transfer_candidate_locked(
                    column_id, fault, received_monotonic_ns
                )
                if transfer_candidate is not None and self._state is not None:
                    transfer_target_stack = [
                        *self._state.stacks.get(column_id, []),
                        *list(transfer_candidate["popped_stack"]),
                    ]
        selected_candidate = same_column_candidate or transfer_candidate
        if selected_candidate is None:
            with self._lock:
                self._recent_multipops = {}
            return False
        started = self._queue_jitter_validation(
            selected_candidate,
            fault,
            fault_received_wall_ns=received_wall_ns,
            fault_received_monotonic_ns=received_monotonic_ns,
            queued_wall_ns=received_wall_ns,
            queued_monotonic_ns=received_monotonic_ns,
            attempt=1,
            target_stack_override=transfer_target_stack,
            transfer_source_column=(
                str(transfer_candidate["column_id"])
                if transfer_candidate is not None
                else None
            ),
        )
        source_column_id = str(selected_candidate.get("column_id") or "")
        with self._lock:
            if self._recent_multipops.get(source_column_id) is selected_candidate:
                self._recent_multipops.pop(source_column_id, None)
        return started

    def _matching_transfer_candidate_locked(
        self,
        target_column_id: str,
        fault: dict[str, Any],
        received_monotonic_ns: int,
    ) -> dict[str, Any] | None:
        if self._state is None or self._topology is None:
            return None
        try:
            added_g_us = float(fault["delta_g_us"])
        except (KeyError, TypeError, ValueError):
            return None
        if not math.isfinite(added_g_us) or added_g_us <= 0:
            return None

        target_stack = self._state.stacks.get(target_column_id)
        if target_stack is None:
            return None
        matches: list[tuple[float, int, dict[str, Any]]] = []
        for source_column_id, candidate in self._recent_multipops.items():
            if source_column_id == target_column_id:
                continue
            completed_ns = candidate.get("completed_monotonic_ns")
            popped_stack = list(candidate.get("popped_stack") or [])
            if (
                completed_ns is None
                or len(popped_stack) < 2
                or received_monotonic_ns - int(completed_ns) < 0
                or self._state.stacks.get(source_column_id)
                != candidate.get("after_stack")
                or len(target_stack) + len(popped_stack)
                > self._topology.tracking_capacity
            ):
                continue
            popped_g_us = candidate.get("popped_g_us")
            if popped_g_us is None:
                popped_g_us = candidate.get("popped_expected_g_us")
            try:
                residual_g_us = abs(added_g_us - float(popped_g_us))
            except (TypeError, ValueError):
                continue
            if (
                math.isfinite(residual_g_us)
                and residual_g_us <= JITTER_NET_UNIT_TOLERANCE_US
            ):
                matches.append(
                    (residual_g_us, -int(completed_ns), candidate)
                )
        if not matches:
            return None
        matches.sort(key=lambda item: (item[0], item[1]))
        return matches[0][2]

    def _queue_jitter_validation(
        self,
        candidate: dict[str, Any],
        fault: dict[str, Any],
        *,
        fault_received_wall_ns: int,
        fault_received_monotonic_ns: int,
        queued_wall_ns: int,
        queued_monotonic_ns: int,
        attempt: int,
        require_classified: bool = False,
        target_stack_override: list[str] | None = None,
        transfer_source_column: str | None = None,
    ) -> bool:
        if self.codebook is None or self._command_sender is None:
            return False
        if target_stack_override is None:
            (
                target_stack,
                net_event,
                net_unit,
                net_delta_g_us,
                classification,
            ) = self._infer_jitter_restore(candidate, fault)
        else:
            target_stack = list(target_stack_override)
            net_event = "transfer"
            net_unit = None
            try:
                net_delta_g_us = float(fault["delta_g_us"])
            except (KeyError, TypeError, ValueError):
                net_delta_g_us = None
            classification = "transfer"
        if require_classified and classification not in {"exact", "add", "remove"}:
            return False
        column_id = str(fault.get("column_id") or "")
        code_ids = self.codebook.code_ids_for_units(target_stack)
        request_id = uuid.uuid4().hex[:CORRECTION_REQUEST_ID_HEX_LENGTH]
        code_list = ",".join(code_ids) if code_ids else "-"
        command = f"RECONCILE {request_id} {column_id} {code_list}"
        if len((command + "\n").encode("utf-8")) > MEGA_SAFE_COMMAND_BYTES:
            return False
        pending_correction = {
            "kind": "correction",
            "request_id": request_id,
            "boot_id": str(self._hello.get("boot_id") if self._hello else ""),
            "column_id": column_id,
            "fault_id": str(fault.get("fault_id") or ""),
            "status": "pending",
            "stack": code_ids,
            "units": target_stack,
            "electrical_codebook_id": self.codebook.electrical_id,
            "type_mapping_id": self.codebook.mapping_id,
            "mapping_source": "backend_codebook",
            "reconciliation_source": (
                "automatic_multipop_transfer"
                if transfer_source_column
                else "automatic_jitter_validation"
            ),
            "jitter_validation_attempt": attempt,
            "jitter_classification": classification,
            "jitter_net_event": net_event,
            "jitter_net_unit": net_unit,
            "jitter_net_delta_g_us": net_delta_g_us,
            "jitter_transfer_source_column": transfer_source_column,
            "jitter_transfer_units": (
                list(candidate.get("popped_stack") or [])
                if transfer_source_column
                else None
            ),
        }
        pending = {
            "fault": dict(fault),
            "fault_received_wall_ns": fault_received_wall_ns,
            "fault_received_monotonic_ns": fault_received_monotonic_ns,
            "started_monotonic_ns": queued_monotonic_ns,
            "candidate": {
                **candidate,
                "original_stack": list(candidate["original_stack"]),
                "after_stack": list(candidate["after_stack"]),
                "popped_stack": list(candidate.get("popped_stack") or []),
            },
            "attempt": attempt,
            "classification": classification,
            "target_stack": target_stack,
            "net_event": net_event,
            "net_unit": net_unit,
            "net_delta_g_us": net_delta_g_us,
            "transfer_source_column": transfer_source_column,
            "pending_correction": pending_correction,
        }
        with self._lock:
            self._pending_jitter_validations[request_id] = pending
        try:
            self._command_sender(command)
        except Exception:
            with self._lock:
                self._pending_jitter_validations.pop(request_id, None)
            return False
        self.journal.record_correction(
            pending_correction, queued_wall_ns, queued_monotonic_ns
        )
        self.event_hub.publish(
            {
                "type": "jitter_validation",
                "column_id": column_id,
                "attempt": attempt,
                "snapshot": self.snapshot(),
            }
        )
        return True

    def _infer_jitter_restore(
        self,
        candidate: dict[str, Any],
        fault: dict[str, Any],
    ) -> tuple[list[str], str | None, str | None, float | None, str]:
        original_stack = list(candidate["original_stack"])
        original_g_us = candidate.get("original_g_us")
        try:
            observed_g_us = float(fault["observed_g_us"])
            original_g_us = float(original_g_us)
        except (KeyError, TypeError, ValueError):
            return original_stack, None, None, None, "exact_fallback"
        if not math.isfinite(observed_g_us) or not math.isfinite(original_g_us):
            return original_stack, None, None, None, "exact_fallback"

        net_delta_g_us = observed_g_us - original_g_us
        if abs(net_delta_g_us) <= JITTER_NET_UNIT_TOLERANCE_US:
            return original_stack, None, None, net_delta_g_us, "exact"

        if net_delta_g_us > 0:
            closest = min(
                self.codebook.codes,
                key=lambda code: abs(net_delta_g_us - code.target_g_us),
            )
            if (
                abs(net_delta_g_us - closest.target_g_us)
                <= JITTER_NET_UNIT_TOLERANCE_US
                and (
                    self._topology is None
                    or len(original_stack) < self._topology.tracking_capacity
                )
            ):
                unit = self.codebook.mapping[closest.id]
                return (
                    [*original_stack, unit],
                    "add",
                    unit,
                    net_delta_g_us,
                    "add",
                )
        elif original_stack:
            removed_unit = original_stack[-1]
            removed_code_id = self.codebook.code_ids_by_unit[removed_unit]
            removed_target = self.codebook.codes_by_id[removed_code_id].target_g_us
            if (
                abs(abs(net_delta_g_us) - removed_target)
                <= JITTER_NET_UNIT_TOLERANCE_US
            ):
                return (
                    original_stack[:-1],
                    "remove",
                    removed_unit,
                    net_delta_g_us,
                    "remove",
                )
        return original_stack, None, None, net_delta_g_us, "unclassified"

    def _handle_jitter_correction(
        self,
        correction: dict[str, Any],
        received_wall_ns: int,
        received_monotonic_ns: int,
    ) -> bool:
        request_id = str(correction.get("request_id") or "")
        with self._lock:
            pending = self._pending_jitter_validations.pop(request_id, None)
        if pending is None:
            return False
        if self.codebook is not None:
            correction = self.codebook.enrich_correction(correction)
        correction.update(
            {
                "jitter_validation_attempt": pending["attempt"],
                "jitter_classification": pending["classification"],
                "jitter_net_event": pending["net_event"],
                "jitter_net_unit": pending["net_unit"],
                "jitter_net_delta_g_us": pending["net_delta_g_us"],
                "jitter_transfer_source_column": pending.get(
                    "transfer_source_column"
                ),
                "jitter_transfer_units": (
                    list(pending["candidate"].get("popped_stack") or [])
                    if pending.get("transfer_source_column")
                    else None
                ),
                "reconciliation_source": pending["pending_correction"][
                    "reconciliation_source"
                ],
            }
        )
        recorded = self.journal.record_correction(
            correction, received_wall_ns, received_monotonic_ns
        )
        accepted = (
            str(correction.get("status") or "") == "accepted"
            and list(correction.get("units") or []) == pending["target_stack"]
        )
        if accepted:
            column_id = str(correction.get("column_id") or "")
            with self._lock:
                if self._state is None:
                    raise DetectionError("jitter correction received before topology")
                self._state.replace_stack(column_id, list(pending["target_stack"]))
                self._suppressed_jitter_fault_ids.add(
                    str(pending["fault"].get("fault_id") or "")
                )
                self._last_error = None
            self._save_automatic_checkpoint()
            self.event_hub.publish(
                {
                    "type": "jitter",
                    "status": "suppressed",
                    "column_id": column_id,
                    "source_column_id": pending.get("transfer_source_column"),
                    "net_event": pending["net_event"],
                    "unit": pending["net_unit"],
                    "correction": recorded,
                    "snapshot": self.snapshot(),
                }
            )
            return True

        candidate = pending["candidate"]
        if pending.get("transfer_source_column"):
            self._defer_fault(
                pending["fault"],
                pending["fault_received_wall_ns"],
                pending["fault_received_monotonic_ns"],
                deferred_at_monotonic_ns=received_monotonic_ns,
            )
            self.event_hub.publish(
                {
                    "type": "jitter_validation",
                    "status": "transfer_rejected_waiting_for_recovery",
                    "correction": recorded,
                    "snapshot": self.snapshot(),
                }
            )
            return True
        if self._correction_returned_to_post_pop(candidate, correction):
            with self._lock:
                self._suppressed_jitter_fault_ids.add(
                    str(pending["fault"].get("fault_id") or "")
                )
            self._rearm_multipop_candidate(candidate, received_monotonic_ns)
            self.event_hub.publish(
                {
                    "type": "jitter",
                    "status": "returned_to_post_pop",
                    "column_id": str(pending["fault"].get("column_id") or ""),
                    "correction": recorded,
                    "snapshot": self.snapshot(),
                }
            )
            return True

        if pending["attempt"] < 2 and correction.get("observed_g_us") is not None:
            retry_candidate = self._candidate_with_firmware_baseline(
                pending, correction
            )
            retry_fault = {
                **pending["fault"],
                "observed_g_us": correction["observed_g_us"],
            }
            if self._queue_jitter_validation(
                retry_candidate,
                retry_fault,
                fault_received_wall_ns=pending["fault_received_wall_ns"],
                fault_received_monotonic_ns=pending[
                    "fault_received_monotonic_ns"
                ],
                queued_wall_ns=received_wall_ns,
                queued_monotonic_ns=received_monotonic_ns,
                attempt=2,
                require_classified=True,
            ):
                return True

        self._defer_fault(
            pending["fault"],
            pending["fault_received_wall_ns"],
            pending["fault_received_monotonic_ns"],
            candidate=candidate,
            deferred_at_monotonic_ns=received_monotonic_ns,
        )
        self.event_hub.publish(
            {
                "type": "jitter_validation",
                "status": "rejected_waiting_for_recovery",
                "correction": recorded,
                "snapshot": self.snapshot(),
            }
        )
        return True

    def _candidate_with_firmware_baseline(
        self,
        pending: dict[str, Any],
        correction: dict[str, Any],
    ) -> dict[str, Any]:
        candidate = {
            **pending["candidate"],
            "original_stack": list(pending["candidate"]["original_stack"]),
            "after_stack": list(pending["candidate"]["after_stack"]),
        }
        try:
            original_g_us = float(correction["expected_g_us"])
            net_unit = pending.get("net_unit")
            if net_unit:
                code_id = self.codebook.code_ids_by_unit[str(net_unit)]
                target_g_us = self.codebook.codes_by_id[code_id].target_g_us
                if pending.get("net_event") == "add":
                    original_g_us -= target_g_us
                elif pending.get("net_event") == "remove":
                    original_g_us += target_g_us
            if math.isfinite(original_g_us):
                candidate["original_g_us"] = original_g_us
        except (KeyError, TypeError, ValueError):
            pass
        return candidate

    def _correction_returned_to_post_pop(
        self,
        candidate: dict[str, Any],
        correction: dict[str, Any],
    ) -> bool:
        try:
            observed_g_us = float(correction["observed_g_us"])
            after_g_us = float(candidate["after_g_us"])
        except (KeyError, TypeError, ValueError):
            return False
        return (
            math.isfinite(observed_g_us)
            and math.isfinite(after_g_us)
            and abs(observed_g_us - after_g_us)
            <= JITTER_NET_UNIT_TOLERANCE_US
        )

    def _rearm_multipop_candidate(
        self,
        candidate: dict[str, Any],
        received_monotonic_ns: int,
    ) -> None:
        column_id = str(candidate.get("column_id") or "")
        refreshed = {
            **candidate,
            "original_stack": list(candidate["original_stack"]),
            "after_stack": list(candidate["after_stack"]),
            "completed_monotonic_ns": received_monotonic_ns,
        }
        with self._lock:
            if (
                self._state is not None
                and self._state.stacks.get(column_id) == refreshed["after_stack"]
            ):
                self._recent_multipops[column_id] = refreshed

    @staticmethod
    def _is_small_contact_jitter(fault: dict[str, Any]) -> bool:
        if (
            str(fault.get("status") or "") != "active"
            or str(fault.get("code") or "")
            not in {"remove_suffix_mismatch", "unclassified_add"}
        ):
            return False
        try:
            delta_g_us = float(fault["delta_g_us"])
        except (KeyError, TypeError, ValueError):
            return False
        return (
            math.isfinite(delta_g_us)
            and abs(delta_g_us) <= SMALL_CONTACT_JITTER_THRESHOLD_US
        )

    def _defer_fault(
        self,
        fault: dict[str, Any],
        received_wall_ns: int,
        received_monotonic_ns: int,
        *,
        candidate: dict[str, Any] | None = None,
        deferred_at_monotonic_ns: int | None = None,
    ) -> None:
        deferred_at = deferred_at_monotonic_ns or received_monotonic_ns
        with self._lock:
            self._deferred_faults[str(fault.get("fault_id") or "")] = {
                "fault": dict(fault),
                "fault_received_wall_ns": received_wall_ns,
                "fault_received_monotonic_ns": received_monotonic_ns,
                "deadline_monotonic_ns": (
                    deferred_at + SMALL_CONTACT_JITTER_GRACE_NS
                ),
                "candidate": candidate,
            }

    def _expire_deferred_faults(self, now_monotonic_ns: int) -> None:
        expired: list[dict[str, Any]] = []
        with self._lock:
            for fault_id, deferred in list(self._deferred_faults.items()):
                if now_monotonic_ns >= deferred["deadline_monotonic_ns"]:
                    expired.append(deferred)
                    self._deferred_faults.pop(fault_id, None)
        for deferred in expired:
            self._record_and_publish_fault(
                deferred["fault"],
                deferred["fault_received_wall_ns"],
                deferred["fault_received_monotonic_ns"],
            )

    def _expire_jitter_validations(self, now_monotonic_ns: int) -> None:
        expired: list[dict[str, Any]] = []
        with self._lock:
            for request_id, pending in list(self._pending_jitter_validations.items()):
                if (
                    now_monotonic_ns - pending["started_monotonic_ns"]
                    >= JITTER_VALIDATION_TIMEOUT_NS
                ):
                    expired.append(pending)
                    self._pending_jitter_validations.pop(request_id, None)
        for pending in expired:
            self._record_and_publish_fault(
                pending["fault"],
                pending["fault_received_wall_ns"],
                pending["fault_received_monotonic_ns"],
            )

    def _record_and_publish_fault(
        self,
        fault: dict[str, Any],
        received_wall_ns: int,
        received_monotonic_ns: int,
    ) -> dict[str, Any]:
        recorded = self.journal.record_fault(
            fault, received_wall_ns, received_monotonic_ns
        )
        column_id = str(fault.get("column_id") or "")
        with self._lock:
            if column_id and fault["status"] == "active":
                self._active_faults[column_id] = recorded
            elif column_id and fault["status"] == "resolved":
                active = self._active_faults.get(column_id)
                if active is None or active.get("fault_id") == fault["fault_id"]:
                    self._active_faults.pop(column_id, None)
        self.event_hub.publish(
            {"type": "fault", "fault": recorded, "snapshot": self.snapshot()}
        )
        return recorded

    def annotate(self, detection_id: str, incorrect: bool, note: str = "") -> dict[str, Any]:
        annotation = self.journal.annotate(detection_id, incorrect, note)
        self.event_hub.publish({"type": "annotation", "annotation": annotation})
        return annotation

    def _units_for_codes(self, code_ids: list[str]) -> list[str]:
        if self.codebook is None:
            raise DetectionError("recovery requires a configured codebook")
        return list(self.codebook.enrich_correction({"stack": code_ids})["units"])

    def _encoded_board(self) -> dict[str, list[str]]:
        if self._state is None or self.codebook is None:
            return {}
        return {
            column_id: self.codebook.code_ids_for_units(stack)
            for column_id, stack in self._state.snapshot().items()
        }

    def _checkpoint_current(
        self, *, source: str, protected: bool, publish_event: bool = True
    ) -> dict[str, Any]:
        with self._lock:
            if self._state is None or self._topology is None or self.codebook is None:
                raise DetectionError("board topology is not available")
            boot_id = str(self._hello.get("boot_id") if self._hello else "")
            columns = [column.id for column in self._topology.columns]
            if protected:
                checkpoint_id = f"E3-{uuid.uuid4().hex[:12]}"
            else:
                checkpoint_id = (
                    f"automatic-m{self._topology.module_count}-"
                    f"{self.codebook.electrical_id}"
                )
            checkpoint = self.journal.save_recovery_checkpoint(
                checkpoint_id=checkpoint_id,
                boot_id=boot_id,
                module_count=self._topology.module_count,
                electrical_codebook_id=self.codebook.electrical_id,
                type_mapping_id=self.codebook.mapping_id,
                source=source,
                protected=protected,
                columns=columns,
                board=self._encoded_board(),
            )
        if publish_event:
            self.event_hub.publish(
                {
                    "type": "recovery_checkpoint",
                    "checkpoint": checkpoint,
                    "snapshot": self.snapshot(),
                }
            )
        return checkpoint

    def _save_automatic_checkpoint(self, *, publish_event: bool = True) -> None:
        with self._lock:
            recovery_status = str(self._recovery.get("status") or "idle")
            if (
                self._state is None
                or self._topology is None
                or self.codebook is None
                or recovery_status in {"starting", "restoring"}
                or (
                    bool((self._hello or {}).get("recovery_mode"))
                    and recovery_status == "idle"
                )
            ):
                return
        self._checkpoint_current(
            source="automatic",
            protected=False,
            publish_event=publish_event,
        )

    def create_recovery_checkpoint(
        self, source: str = "operator"
    ) -> dict[str, Any]:
        return self._checkpoint_current(source=source, protected=True)

    def _start_recovery(
        self, checkpoint: dict[str, Any] | None, *, automatic: bool
    ) -> dict[str, Any]:
        if self.codebook is None:
            raise DetectionError("recovery requires a configured codebook")
        with self._lock:
            if self._state is None or self._topology is None:
                raise DetectionError("board topology is not available")
            columns = [column.id for column in self._topology.columns]
            if checkpoint is not None:
                if checkpoint["columns"] != columns:
                    raise DetectionError("checkpoint topology does not match live columns")
                if (
                    checkpoint["electrical_codebook_id"]
                    != self.codebook.electrical_id
                ):
                    raise DetectionError("checkpoint electrical codebook does not match")
                board = {
                    str(column_id): [str(code) for code in stack]
                    for column_id, stack in checkpoint["board"].items()
                }
            else:
                board = {}
            recovery_id = f"recovery-{uuid.uuid4().hex[:10]}"
            pending: dict[str, str] = {}
            commands: list[str] = []
            for column_id in columns:
                request_id = uuid.uuid4().hex[:CORRECTION_REQUEST_ID_HEX_LENGTH]
                code_ids = board.get(column_id, [])
                code_list = ",".join(code_ids) if code_ids else "-"
                command = f"RESTORE {request_id} {column_id} {code_list}"
                if len((command + "\n").encode("utf-8")) > MEGA_SAFE_COMMAND_BYTES:
                    raise DetectionError(
                        f"recovery command exceeds Mega serial buffer at {column_id}"
                    )
                pending[request_id] = column_id
                commands.append(command)
            self._recovery = {
                "status": "restoring",
                "recovery_id": recovery_id,
                "checkpoint_id": (
                    checkpoint.get("checkpoint_id") if checkpoint else None
                ),
                "automatic": bool(automatic),
                "pending": pending,
                "results": {},
                "accepted_count": 0,
                "rejected_count": 0,
                "expected_by_column": {
                    column_id: list(board.get(column_id, []))
                    for column_id in columns
                },
                "restore_queue": list(commands[1:]),
                "started_wall_ns": time.time_ns(),
            }
        if self._command_sender is None:
            raise DetectionError("serial command sender is unavailable")
        self._command_sender(f"RECOVERY_BEGIN {recovery_id}")
        if commands:
            self._command_sender(commands[0])
        else:
            self._command_sender(f"RECOVERY_END {recovery_id}")
        self.event_hub.publish({"type": "recovery", "snapshot": self.snapshot()})
        return self.snapshot()["recovery"]

    def cancel_recovery(self) -> tuple[dict[str, Any], str]:
        with self._lock:
            status = str(self._recovery.get("status") or "idle")
            recovery_id = str(self._recovery.get("recovery_id") or "")
            if status not in {"starting", "restoring"} or not recovery_id:
                raise DetectionError("there is no active validation to stop")
            self._recovery["status"] = "stopping"
            self._recovery["restore_queue"] = []
            recovery = {
                key: dict(value) if isinstance(value, dict) else value
                for key, value in self._recovery.items()
                if key not in {"expected_by_column", "restore_queue"}
            }
        self.event_hub.publish({"type": "recovery", "snapshot": self.snapshot()})
        return recovery, f"RECOVERY_CANCEL {recovery_id}"

    def request_recovery(
        self, checkpoint_id: str | None = None
    ) -> dict[str, Any]:
        checkpoint = (
            self.journal.recovery_checkpoint(checkpoint_id)
            if checkpoint_id
            else None
        )
        if checkpoint_id and checkpoint is None:
            raise DetectionError(f"unknown recovery checkpoint: {checkpoint_id}")
        if checkpoint is None:
            with self._lock:
                if self._topology is None or self.codebook is None:
                    raise DetectionError("board topology is not available")
                checkpoint = self.journal.latest_recovery_checkpoint(
                    module_count=self._topology.module_count,
                    electrical_codebook_id=self.codebook.electrical_id,
                    columns=[column.id for column in self._topology.columns],
                    protected=False,
                )
        return self._start_recovery(checkpoint, automatic=False)

    def request_correction(
        self, column_id: str, units: list[str]
    ) -> tuple[dict[str, Any], str]:
        if self.codebook is None:
            raise DetectionError("corrections require a configured codebook")
        normalized_units = [str(unit).lower() for unit in units]
        with self._lock:
            if self._state is None or self._topology is None:
                raise DetectionError("board topology is not available")
            if column_id not in self._state.stacks:
                raise DetectionError(f"unknown column_id: {column_id}")
            if column_id not in self._active_faults:
                raise DetectionError(f"column does not require correction: {column_id}")
            fault_id = str(self._active_faults[column_id].get("fault_id") or "")
            if len(normalized_units) > self._topology.tracking_capacity:
                raise DetectionError(
                    f"correction exceeds {self._topology.tracking_capacity}-layer capacity"
                )
            boot_id = str(self._hello.get("boot_id") if self._hello else "")
        code_ids = self.codebook.code_ids_for_units(normalized_units)
        # Keep the complete RECONCILE line below the Mega's 64-byte serial RX
        # buffer for validated stacks of up to seven two-character code IDs.
        request_id = uuid.uuid4().hex[:CORRECTION_REQUEST_ID_HEX_LENGTH]
        correction = {
            "kind": "correction",
            "request_id": request_id,
            "boot_id": boot_id,
            "column_id": column_id,
            "fault_id": fault_id,
            "status": "pending",
            "stack": code_ids,
            "units": normalized_units,
            "electrical_codebook_id": self.codebook.electrical_id,
            "type_mapping_id": self.codebook.mapping_id,
            "mapping_source": "operator_request",
        }
        recorded = self.journal.record_correction(correction)
        code_list = ",".join(code_ids) if code_ids else "-"
        command = f"RECONCILE {request_id} {column_id} {code_list}"
        self.event_hub.publish(
            {
                "type": "correction",
                "correction": recorded,
                "snapshot": self.snapshot(),
            }
        )
        return recorded, command

    def request_board_reset(self) -> tuple[dict[str, Any], str]:
        with self._lock:
            if self._state is None or self._topology is None:
                raise DetectionError("board topology is not available")
            boot_id = str(self._hello.get("boot_id") if self._hello else "")
        request_id = uuid.uuid4().hex
        reset = {
            "kind": "board_reset",
            "request_id": request_id,
            "boot_id": boot_id,
            "status": "pending",
            "reason": "operator_request",
        }
        recorded = self.journal.record_board_reset(reset)
        self.event_hub.publish(
            {
                "type": "board_reset",
                "board_reset": recorded,
                "snapshot": self.snapshot(),
            }
        )
        return recorded, f"RESET_BOARD {request_id}"

    def snapshot(self) -> dict[str, Any]:
        with self._lock:
            topology = dataclasses.asdict(self._topology) if self._topology else None
            board = self._state.snapshot() if self._state else {}
            boot_id = self._hello.get("boot_id") if self._hello else None
            visible_since = self._visible_since_wall_ns
            snapshot = {
                "connected": self._connected,
                "port": self._port,
                "last_error": self._last_error,
                "last_message_wall_ns": self._last_message_wall_ns,
                "hello": dict(self._hello) if self._hello else None,
                "topology": topology,
                "board": board,
                "last_seq": self._state.last_seq if self._state else 0,
                "codebook": self.codebook.metadata() if self.codebook else None,
                "active_faults": {
                    column_id: dict(fault)
                    for column_id, fault in self._active_faults.items()
                },
                "recovery": {
                    key: (
                        dict(value)
                        if isinstance(value, dict)
                        else value
                    )
                    for key, value in self._recovery.items()
                    if key not in {"expected_by_column", "restore_queue"}
                },
                "module_layout": (
                    self._module_layout_provider()
                    if self._module_layout_provider is not None
                    else None
                ),
            }
        detections = self.journal.recent_detections(100, boot_id=boot_id)
        faults = self.journal.recent_faults(100, boot_id=boot_id)
        corrections = self.journal.recent_corrections(100, boot_id=boot_id)
        if visible_since is not None:
            detections = [item for item in detections if item["received_wall_ns"] >= visible_since]
            faults = [item for item in faults if item["received_wall_ns"] >= visible_since]
            corrections = [item for item in corrections if item["received_wall_ns"] >= visible_since]
        snapshot["detections"] = detections
        snapshot["faults"] = faults
        snapshot["corrections"] = corrections
        snapshot["board_resets"] = self.journal.recent_board_resets(20, boot_id=boot_id)
        return snapshot
