from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from backend.worldblocks.codebook import CodebookResolver
from backend.worldblocks.journal import Journal
from backend.worldblocks.runtime import BoardRuntime


def line(data: dict) -> str:
    return "WB_JSON:" + json.dumps({"protocol": 2, **data}, separators=(",", ":"))


class RuntimeJournalTests(unittest.TestCase):
    def setUp(self) -> None:
        self.directory = tempfile.TemporaryDirectory()
        self.journal = Journal(Path(self.directory.name) / "test.sqlite")
        root = Path(__file__).resolve().parents[1]
        self.codebook = CodebookResolver.load(
            root / "config" / "electrical_codebook.json",
            root / "config" / "type_mapping.json",
        )
        self.runtime = BoardRuntime(self.journal, codebook=self.codebook)
        self.runtime.ingest_line(line({"kind": "hello", "boot_id": "boot-a"}))
        self.runtime.ingest_line(
            line(
                {
                    "kind": "topology",
                    "topology_id": "top-a",
                    "boot_id": "boot-a",
                    "module_count": 1,
                    "max_stack": 7,
                    "tracking_capacity": 16,
                    "adc_bits": 10,
                    "layers": [{"id": "L0", "rows": 1, "cols": 2}],
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "channel",
                    "topology_id": "top-a",
                    "column_id": "L0-r0-c0",
                    "layer": "L0",
                    "row": 0,
                    "col": 0,
                    "module": 0,
                    "mux": 0,
                    "channel": 0,
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "channel",
                    "topology_id": "top-a",
                    "column_id": "L0-r0-c1",
                    "layer": "L0",
                    "row": 0,
                    "col": 1,
                    "module": 0,
                    "mux": 0,
                    "channel": 1,
                }
            )
        )
        self.runtime.ingest_line(line({"kind": "topology_end", "topology_id": "top-a"}))

    def tearDown(self) -> None:
        self.journal.close()
        self.directory.cleanup()

    def ingest_four_unit_stack_and_multipop(self) -> None:
        for seq, code_id in enumerate(("C0", "C4", "C1", "C2"), start=1):
            self.runtime.ingest_line(
                line(
                    {
                        "kind": "detection",
                        "boot_id": "boot-a",
                        "detection_id": f"boot-a:{seq}",
                        "seq": seq,
                        "event": "add",
                        "column_id": "L0-r0-c0",
                        "code_id": code_id,
                    }
                )
            )
        for seq, code_id, operation_index in (
            (5, "C2", 1),
            (6, "C1", 2),
            (7, "C4", 3),
        ):
            self.runtime.ingest_line(
                line(
                    {
                        "kind": "detection",
                        "boot_id": "boot-a",
                        "detection_id": f"boot-a:{seq}",
                        "seq": seq,
                        "event": "remove",
                        "column_id": "L0-r0-c0",
                        "code_id": code_id,
                        "operation_id": "boot-a:op:pop",
                        "operation_index": operation_index,
                        "operation_size": 3,
                        "filtered_g_us": 121.212121,
                        "delta_g_us": -223.264820,
                    }
                )
            )

    def test_detection_is_reduced_and_journaled(self) -> None:
        detection = {
            "kind": "detection",
            "boot_id": "boot-a",
            "detection_id": "boot-a:1",
            "seq": 1,
            "event": "add",
            "column_id": "L0-r0-c0",
            "unit": "earth",
            "confidence": 0.93,
        }
        self.runtime.ingest_line(line(detection))
        snapshot = self.runtime.snapshot()
        self.assertEqual(snapshot["board"], {"L0-r0-c0": ["earth"]})
        self.assertEqual(snapshot["detections"][0]["detection_id"], "boot-a:1")

    def test_journal_detection_id_collision_does_not_mutate_board(self) -> None:
        self.assertTrue(
            self.journal.record_detection(
                {
                    "detection_id": "boot-a:1",
                    "boot_id": "boot-a",
                    "seq": 1,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "unit": "earth",
                },
                1,
                1,
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:1",
                    "seq": 1,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "code_id": "C1",
                }
            )
        )
        snapshot = self.runtime.snapshot()
        self.assertEqual(snapshot["board"], {})
        self.assertIn("detection ID collision", snapshot["last_error"])
        self.assertIn("firmware 0.3.4", snapshot["last_error"])

    def test_same_runtime_duplicate_remains_an_idempotent_noop(self) -> None:
        detection = {
            "kind": "detection",
            "boot_id": "boot-a",
            "detection_id": "boot-a:1",
            "seq": 1,
            "event": "add",
            "column_id": "L0-r0-c0",
            "code_id": "C0",
        }
        self.runtime.ingest_line(line(detection))
        self.runtime.ingest_line(line(detection))
        snapshot = self.runtime.snapshot()
        self.assertEqual(snapshot["board"], {"L0-r0-c0": ["earth"]})
        self.assertIsNone(snapshot["last_error"])
        self.assertEqual(
            sum(
                item["detection_id"] == "boot-a:1"
                for item in snapshot["detections"]
            ),
            1,
        )

    def test_electrical_code_is_resolved_before_reduction_and_logging(self) -> None:
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:1",
                    "seq": 1,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "code_id": "c2",
                    "confidence": 0.97,
                }
            )
        )
        snapshot = self.runtime.snapshot()
        detection = snapshot["detections"][0]
        self.assertEqual(snapshot["board"], {"L0-r0-c0": ["animal"]})
        self.assertEqual(detection["code_id"], "C2")
        self.assertEqual(detection["unit"], "animal")
        self.assertEqual(detection["mapping_source"], "backend_codebook")
        self.assertEqual(snapshot["codebook"]["type_mapping_id"], "terrain-default-v1")

    def test_fault_and_operator_correction_are_journaled_and_reduced(self) -> None:
        self.runtime.ingest_line(
            line(
                {
                    "kind": "fault",
                    "boot_id": "boot-a",
                    "fault_id": "boot-a:fault:1",
                    "status": "active",
                    "severity": "error",
                    "code": "remove_suffix_mismatch",
                    "message": "does not match",
                    "column_id": "L0-r0-c0",
                }
            )
        )
        requested, command = self.runtime.request_correction(
            "L0-r0-c0", ["earth", "water"]
        )
        self.assertEqual(requested["status"], "pending")
        self.assertEqual(len(requested["request_id"]), 12)
        self.assertIn("L0-r0-c0 C0,C4", command)

        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:1",
                    "request_id": requested["request_id"],
                    "status": "accepted",
                    "reason": "aggregate_validated",
                    "column_id": "L0-r0-c0",
                    "stack": ["C0", "C4"],
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "fault",
                    "boot_id": "boot-a",
                    "fault_id": "boot-a:fault:1",
                    "status": "resolved",
                    "severity": "error",
                    "code": "operator_correction",
                    "message": "validated",
                    "column_id": "L0-r0-c0",
                }
            )
        )
        snapshot = self.runtime.snapshot()
        self.assertEqual(snapshot["board"], {"L0-r0-c0": ["earth", "water"]})
        self.assertEqual(snapshot["active_faults"], {})
        self.assertEqual([item["status"] for item in snapshot["corrections"][:2]], ["accepted", "pending"])
        self.assertEqual([item["status"] for item in snapshot["faults"][:2]], ["resolved", "active"])

    def test_seven_module_correction_fits_mega_serial_rx_buffer(self) -> None:
        self.runtime.ingest_line(
            line(
                {
                    "kind": "fault",
                    "boot_id": "boot-a",
                    "fault_id": "boot-a:fault:seven",
                    "status": "active",
                    "severity": "error",
                    "code": "unclassified_add",
                    "message": "bulk placement",
                    "column_id": "L0-r0-c0",
                }
            )
        )
        requested, command = self.runtime.request_correction(
            "L0-r0-c0", ["earth"] * 7
        )
        self.assertEqual(requested["stack"], ["C0"] * 7)
        self.assertEqual(command.rsplit(" ", 1)[1], ",".join(["C0"] * 7))
        self.assertLessEqual(len((command + "\n").encode("utf-8")), 63)

    def test_quick_multipop_restore_is_validated_without_exposing_fault(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        self.assertEqual(
            self.runtime.snapshot()["board"], {"L0-r0-c0": ["earth"]}
        )

        fault = {
            "kind": "fault",
            "boot_id": "boot-a",
            "fault_id": "boot-a:fault:jitter",
            "status": "active",
            "severity": "error",
            "code": "unclassified_add",
            "message": "bulk add",
            "column_id": "L0-r0-c0",
        }
        self.runtime.ingest_line(line(fault))

        validating = self.runtime.snapshot()
        self.assertEqual(validating["active_faults"], {})
        self.assertEqual(validating["faults"], [])
        self.assertEqual(len(commands), 1)
        self.assertRegex(
            commands[0],
            r"^RECONCILE [0-9a-f]{12} L0-r0-c0 C0,C4,C1,C2$",
        )
        request_id = commands[0].split()[1]
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:jitter",
                    "request_id": request_id,
                    "status": "accepted",
                    "reason": "aggregate_validated",
                    "column_id": "L0-r0-c0",
                    "stack": ["C0", "C4", "C1", "C2"],
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    **fault,
                    "status": "resolved",
                    "code": "operator_correction",
                    "message": "validated",
                }
            )
        )

        restored = self.runtime.snapshot()
        self.assertEqual(
            restored["board"],
            {"L0-r0-c0": ["earth", "water", "fire", "animal"]},
        )
        self.assertEqual(restored["active_faults"], {})
        self.assertEqual(restored["faults"], [])
        self.assertEqual(
            [item["status"] for item in restored["corrections"][:2]],
            ["accepted", "pending"],
        )

    def test_multipop_can_transfer_to_another_column_without_exposing_fault(
        self,
    ) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        self.runtime._recent_multipops["L0-r0-c0"][
            "completed_monotonic_ns"
        ] -= 60_000_000_000

        fault = {
            "kind": "fault",
            "boot_id": "boot-a",
            "fault_id": "boot-a:fault:cross-column-transfer",
            "status": "active",
            "severity": "error",
            "code": "unclassified_add",
            "message": "bulk add on another column",
            "column_id": "L0-r0-c1",
            "observed_g_us": 223.264820,
            "delta_g_us": 223.264820,
        }
        self.runtime.ingest_line(line(fault))

        validating = self.runtime.snapshot()
        self.assertEqual(validating["active_faults"], {})
        self.assertEqual(validating["faults"], [])
        self.assertEqual(len(commands), 1)
        self.assertRegex(
            commands[0],
            r"^RECONCILE [0-9a-f]{12} L0-r0-c1 C4,C1,C2$",
        )
        request_id = commands[0].split()[1]
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:cross-column-transfer",
                    "request_id": request_id,
                    "status": "accepted",
                    "reason": "aggregate_validated",
                    "column_id": "L0-r0-c1",
                    "stack": ["C4", "C1", "C2"],
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    **fault,
                    "status": "resolved",
                    "code": "operator_correction",
                    "message": "validated",
                }
            )
        )

        transferred = self.runtime.snapshot()
        self.assertEqual(
            transferred["board"],
            {
                "L0-r0-c0": ["earth"],
                "L0-r0-c1": ["water", "fire", "animal"],
            },
        )
        self.assertEqual(transferred["active_faults"], {})
        self.assertEqual(transferred["faults"], [])
        self.assertEqual(
            transferred["corrections"][0]["jitter_classification"],
            "transfer",
        )
        self.assertEqual(
            transferred["corrections"][0]["reconciliation_source"],
            "automatic_multipop_transfer",
        )
        self.assertEqual(
            transferred["corrections"][0]["jitter_transfer_source_column"],
            "L0-r0-c0",
        )
        self.assertEqual(
            transferred["corrections"][0]["jitter_transfer_units"],
            ["water", "fire", "animal"],
        )

    def test_classified_push_consumes_pending_multipop_transfer(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:8",
                    "seq": 8,
                    "event": "add",
                    "column_id": "L0-r0-c1",
                    "code_id": "C3",
                }
            )
        )
        self.assertEqual(self.runtime._recent_multipops, {})

        self.runtime.ingest_line(
            line(
                {
                    "kind": "fault",
                    "boot_id": "boot-a",
                    "fault_id": "boot-a:fault:after-classified-push",
                    "status": "active",
                    "severity": "error",
                    "code": "unclassified_add",
                    "message": "later bulk add",
                    "column_id": "L0-r0-c1",
                    "observed_g_us": 283.870881,
                    "delta_g_us": 223.264820,
                }
            )
        )
        snapshot = self.runtime.snapshot()
        self.assertEqual(commands, [])
        self.assertEqual(
            snapshot["active_faults"]["L0-r0-c1"]["fault_id"],
            "boot-a:fault:after-classified-push",
        )

    def test_cross_column_transfer_requires_matching_popped_value(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        self.runtime.ingest_line(
            line(
                {
                    "kind": "fault",
                    "boot_id": "boot-a",
                    "fault_id": "boot-a:fault:different-cross-column-add",
                    "status": "active",
                    "severity": "error",
                    "code": "unclassified_add",
                    "message": "different bulk add",
                    "column_id": "L0-r0-c1",
                    "observed_g_us": 180.0,
                    "delta_g_us": 180.0,
                }
            )
        )

        snapshot = self.runtime.snapshot()
        self.assertEqual(commands, [])
        self.assertEqual(
            snapshot["active_faults"]["L0-r0-c1"]["fault_id"],
            "boot-a:fault:different-cross-column-add",
        )

    def test_rejected_multipop_restore_exposes_original_fault(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        fault = {
            "kind": "fault",
            "boot_id": "boot-a",
            "fault_id": "boot-a:fault:not-jitter",
            "status": "active",
            "severity": "error",
            "code": "unclassified_add",
            "message": "bulk add",
            "column_id": "L0-r0-c0",
        }
        self.runtime.ingest_line(line(fault))
        request_id = commands[0].split()[1]
        with patch(
            "backend.worldblocks.runtime.SMALL_CONTACT_JITTER_GRACE_NS", 0
        ):
            self.runtime.ingest_line(
                line(
                    {
                        "kind": "correction",
                        "boot_id": "boot-a",
                        "correction_id": "boot-a:correction:not-jitter",
                        "request_id": request_id,
                        "status": "rejected",
                        "reason": "aggregate_mismatch",
                        "column_id": "L0-r0-c0",
                        "stack": ["C0", "C4", "C1", "C2"],
                    }
                )
            )
            self.runtime.ingest_line(
                line(
                    {
                        "kind": "sample",
                        "boot_id": "boot-a",
                        "column_id": "L0-r0-c0",
                    }
                )
            )

        snapshot = self.runtime.snapshot()
        self.assertEqual(
            snapshot["active_faults"]["L0-r0-c0"]["fault_id"],
            "boot-a:fault:not-jitter",
        )
        self.assertEqual(snapshot["faults"][0]["status"], "active")
        self.assertEqual(snapshot["corrections"][0]["status"], "rejected")

    def test_rejected_validation_retries_with_newly_stable_unit_type(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        original_g_us = 344.476941
        fault = {
            "kind": "fault",
            "boot_id": "boot-a",
            "fault_id": "boot-a:fault:retry",
            "status": "active",
            "severity": "error",
            "code": "unclassified_add",
            "message": "bulk add",
            "column_id": "L0-r0-c0",
            "observed_g_us": original_g_us + 99.35,
        }
        self.runtime.ingest_line(line(fault))
        self.assertRegex(
            commands[0],
            r"^RECONCILE [0-9a-f]{12} L0-r0-c0 C0,C4,C1,C2,C1$",
        )
        first_request_id = commands[0].split()[1]
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:retry-1",
                    "request_id": first_request_id,
                    "status": "rejected",
                    "reason": "aggregate_mismatch",
                    "column_id": "L0-r0-c0",
                    "stack": ["C0", "C4", "C1", "C2", "C1"],
                    "observed_g_us": original_g_us + 120.55,
                }
            )
        )
        self.assertEqual(len(commands), 2)
        self.assertRegex(
            commands[1],
            r"^RECONCILE [0-9a-f]{12} L0-r0-c0 C0,C4,C1,C2,C0$",
        )
        second_request_id = commands[1].split()[1]
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:retry-2",
                    "request_id": second_request_id,
                    "status": "accepted",
                    "reason": "aggregate_validated",
                    "column_id": "L0-r0-c0",
                    "stack": ["C0", "C4", "C1", "C2", "C0"],
                    "observed_g_us": original_g_us + 121.1,
                }
            )
        )

        snapshot = self.runtime.snapshot()
        self.assertEqual(
            snapshot["board"],
            {"L0-r0-c0": ["earth", "water", "fire", "animal", "earth"]},
        )
        self.assertEqual(snapshot["active_faults"], {})
        self.assertEqual(snapshot["faults"], [])
        self.assertEqual(snapshot["corrections"][0]["jitter_validation_attempt"], 2)
        self.assertEqual(snapshot["corrections"][0]["jitter_net_unit"], "earth")

    def test_return_to_post_pop_rearms_context_for_next_bounce(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        original_g_us = 344.476941
        first_fault = {
            "kind": "fault",
            "boot_id": "boot-a",
            "fault_id": "boot-a:fault:bounce-1",
            "status": "active",
            "severity": "error",
            "code": "unclassified_add",
            "message": "bulk add",
            "column_id": "L0-r0-c0",
            "observed_g_us": original_g_us,
        }
        self.runtime.ingest_line(line(first_fault))
        first_request_id = commands[0].split()[1]
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:bounce-1",
                    "request_id": first_request_id,
                    "status": "rejected",
                    "reason": "aggregate_mismatch",
                    "column_id": "L0-r0-c0",
                    "stack": ["C0", "C4", "C1", "C2"],
                    "observed_g_us": 121.212121,
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    **first_fault,
                    "status": "resolved",
                    "code": "returned_to_trusted_state",
                    "observed_g_us": 121.212121,
                }
            )
        )
        second_fault = {
            **first_fault,
            "fault_id": "boot-a:fault:bounce-2",
            "observed_g_us": original_g_us,
        }
        self.runtime.ingest_line(line(second_fault))

        self.assertEqual(len(commands), 2)
        self.assertEqual(self.runtime.snapshot()["active_faults"], {})
        self.assertEqual(self.runtime.snapshot()["faults"], [])

    def test_retry_uses_firmware_baseline_to_detect_missing_top_unit(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        fault = {
            "kind": "fault",
            "boot_id": "boot-a",
            "fault_id": "boot-a:fault:baseline-retry",
            "status": "active",
            "severity": "error",
            "code": "unclassified_add",
            "message": "bulk add",
            "column_id": "L0-r0-c0",
            "observed_g_us": 344.476941,
        }
        self.runtime.ingest_line(line(fault))
        first_request_id = commands[0].split()[1]
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:baseline-1",
                    "request_id": first_request_id,
                    "status": "rejected",
                    "reason": "aggregate_mismatch",
                    "column_id": "L0-r0-c0",
                    "stack": ["C0", "C4", "C1", "C2"],
                    "observed_g_us": 280.0,
                    "expected_g_us": 350.0,
                }
            )
        )

        self.assertEqual(len(commands), 2)
        self.assertRegex(
            commands[1],
            r"^RECONCILE [0-9a-f]{12} L0-r0-c0 C0,C4,C1$",
        )
        second_request_id = commands[1].split()[1]
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:baseline-2",
                    "request_id": second_request_id,
                    "status": "accepted",
                    "reason": "aggregate_validated",
                    "column_id": "L0-r0-c0",
                    "stack": ["C0", "C4", "C1"],
                    "observed_g_us": 280.0,
                    "expected_g_us": 269.354839,
                }
            )
        )
        snapshot = self.runtime.snapshot()
        self.assertEqual(
            snapshot["board"],
            {"L0-r0-c0": ["earth", "water", "fire"]},
        )
        self.assertEqual(snapshot["active_faults"], {})
        self.assertEqual(snapshot["faults"], [])
        self.assertEqual(snapshot["corrections"][0]["jitter_net_event"], "remove")
        self.assertEqual(snapshot["corrections"][0]["jitter_net_unit"], "animal")

    def test_small_contact_fault_that_self_resolves_is_not_exposed(self) -> None:
        active = {
            "kind": "fault",
            "boot_id": "boot-a",
            "fault_id": "boot-a:fault:small",
            "status": "active",
            "severity": "error",
            "code": "remove_suffix_mismatch",
            "message": "small contact movement",
            "column_id": "L0-r0-c0",
            "delta_g_us": -9.5,
        }
        self.runtime.ingest_line(line(active))
        self.assertEqual(self.runtime.snapshot()["active_faults"], {})
        self.runtime.ingest_line(
            line(
                {
                    **active,
                    "status": "resolved",
                    "code": "returned_to_trusted_state",
                }
            )
        )
        self.assertEqual(self.runtime.snapshot()["active_faults"], {})
        self.assertEqual(self.runtime.snapshot()["faults"], [])

    def test_multipop_restore_plus_one_detects_added_type_without_fault(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        fault = {
            "kind": "fault",
            "boot_id": "boot-a",
            "fault_id": "boot-a:fault:plus-one",
            "status": "active",
            "severity": "error",
            "code": "unclassified_add",
            "message": "bulk add",
            "column_id": "L0-r0-c0",
            "observed_g_us": 405.083002,
        }
        self.runtime.ingest_line(line(fault))
        self.assertRegex(
            commands[0],
            r"^RECONCILE [0-9a-f]{12} L0-r0-c0 C0,C4,C1,C2,C3$",
        )
        request_id = commands[0].split()[1]
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:plus-one",
                    "request_id": request_id,
                    "status": "accepted",
                    "reason": "aggregate_validated",
                    "column_id": "L0-r0-c0",
                    "stack": ["C0", "C4", "C1", "C2", "C3"],
                }
            )
        )

        snapshot = self.runtime.snapshot()
        self.assertEqual(
            snapshot["board"],
            {"L0-r0-c0": ["earth", "water", "fire", "animal", "human"]},
        )
        self.assertEqual(snapshot["active_faults"], {})
        self.assertEqual(snapshot["faults"], [])
        self.assertEqual(snapshot["corrections"][0]["jitter_net_event"], "add")
        self.assertEqual(snapshot["corrections"][0]["jitter_net_unit"], "human")

    def test_multipop_restore_minus_one_detects_removed_type_without_fault(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        fault = {
            "kind": "fault",
            "boot_id": "boot-a",
            "fault_id": "boot-a:fault:minus-one",
            "status": "active",
            "severity": "error",
            "code": "unclassified_add",
            "message": "bulk add",
            "column_id": "L0-r0-c0",
            "observed_g_us": 263.831780,
        }
        self.runtime.ingest_line(line(fault))
        self.assertRegex(
            commands[0],
            r"^RECONCILE [0-9a-f]{12} L0-r0-c0 C0,C4,C1$",
        )
        request_id = commands[0].split()[1]
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:minus-one",
                    "request_id": request_id,
                    "status": "accepted",
                    "reason": "aggregate_validated",
                    "column_id": "L0-r0-c0",
                    "stack": ["C0", "C4", "C1"],
                }
            )
        )

        snapshot = self.runtime.snapshot()
        self.assertEqual(
            snapshot["board"],
            {"L0-r0-c0": ["earth", "water", "fire"]},
        )
        self.assertEqual(snapshot["active_faults"], {})
        self.assertEqual(snapshot["faults"], [])
        self.assertEqual(snapshot["corrections"][0]["jitter_net_event"], "remove")
        self.assertEqual(snapshot["corrections"][0]["jitter_net_unit"], "animal")

    def test_transient_add_remove_after_multipop_preserves_jitter_context(self) -> None:
        commands: list[str] = []
        self.runtime.set_command_sender(commands.append)
        self.ingest_four_unit_stack_and_multipop()
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:8",
                    "seq": 8,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "code_id": "C0",
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:9",
                    "seq": 9,
                    "event": "remove",
                    "column_id": "L0-r0-c0",
                    "code_id": "C0",
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "fault",
                    "boot_id": "boot-a",
                    "fault_id": "boot-a:fault:transient-detection-bounce",
                    "status": "active",
                    "severity": "error",
                    "code": "unclassified_add",
                    "message": "bulk add after transient detection",
                    "column_id": "L0-r0-c0",
                    "observed_g_us": 263.831780,
                }
            )
        )

        self.assertEqual(len(commands), 1)
        self.assertRegex(
            commands[0],
            r"^RECONCILE [0-9a-f]{12} L0-r0-c0 C0,C4,C1$",
        )
        snapshot = self.runtime.snapshot()
        self.assertEqual(snapshot["active_faults"], {})
        self.assertEqual(snapshot["faults"], [])
        self.assertEqual(snapshot["board"], {"L0-r0-c0": ["earth"]})

    def test_rejected_correction_keeps_last_trusted_state(self) -> None:
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:1",
                    "seq": 1,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "code_id": "C0",
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "fault",
                    "boot_id": "boot-a",
                    "fault_id": "boot-a:fault:1",
                    "status": "active",
                    "severity": "error",
                    "code": "unclassified_add",
                    "message": "does not match",
                    "column_id": "L0-r0-c0",
                }
            )
        )
        requested, _command = self.runtime.request_correction(
            "L0-r0-c0", ["water"]
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "correction",
                    "boot_id": "boot-a",
                    "correction_id": "boot-a:correction:1",
                    "request_id": requested["request_id"],
                    "status": "rejected",
                    "reason": "aggregate_mismatch",
                    "column_id": "L0-r0-c0",
                    "stack": ["C4"],
                }
            )
        )
        snapshot = self.runtime.snapshot()
        self.assertEqual(snapshot["board"], {"L0-r0-c0": ["earth"]})
        self.assertIn("L0-r0-c0", snapshot["active_faults"])
        self.assertEqual(
            snapshot["active_faults"]["L0-r0-c0"]["trusted_stack"], ["earth"]
        )
        self.assertEqual(snapshot["corrections"][0]["status"], "rejected")

    def test_accepted_board_reset_archives_visible_history_and_applies_state(self) -> None:
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:1",
                    "seq": 1,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "code_id": "C0",
                }
            )
        )
        requested, command = self.runtime.request_board_reset()
        self.assertRegex(command, r"^RESET_BOARD [0-9a-f]{32}$")
        self.runtime.ingest_line(
            line(
                {
                    "kind": "board_reset",
                    "boot_id": "boot-a",
                    "request_id": requested["request_id"],
                    "reset_id": "boot-a:reset:1",
                    "status": "accepted",
                    "reason": "static_single_layer_rebuild",
                    "issue_count": 0,
                    "issue_columns": [],
                }
            )
        )
        self.runtime.ingest_line(line({"kind": "state_begin", "boot_id": "boot-a", "seq": 1}))
        self.runtime.ingest_line(
            line(
                {
                    "kind": "state_column",
                    "boot_id": "boot-a",
                    "column_id": "L0-r0-c0",
                    "stack": ["C4"],
                }
            )
        )
        self.runtime.ingest_line(line({"kind": "state_end", "boot_id": "boot-a", "seq": 1}))
        snapshot = self.runtime.snapshot()
        self.assertEqual(snapshot["board"], {"L0-r0-c0": ["water"]})
        self.assertEqual(snapshot["detections"], [])
        self.assertEqual(
            [item["status"] for item in snapshot["board_resets"][:2]],
            ["accepted", "pending"],
        )

    def test_board_reset_with_issues_archives_history_and_exposes_fault(self) -> None:
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:1",
                    "seq": 1,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "code_id": "C0",
                }
            )
        )
        requested, _command = self.runtime.request_board_reset()
        self.runtime.ingest_line(
            line(
                {
                    "kind": "board_reset",
                    "boot_id": "boot-a",
                    "request_id": requested["request_id"],
                    "reset_id": "boot-a:reset:1",
                    "status": "accepted",
                    "reason": "best_effort_rebuild_with_issues",
                    "issue_count": 1,
                    "issue_columns": ["L0-r0-c0"],
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "fault",
                    "boot_id": "boot-a",
                    "fault_id": "boot-a:fault:reset-issue",
                    "status": "active",
                    "severity": "error",
                    "code": "reset_ambiguous_stack",
                    "message": "enter ordered nodes",
                    "column_id": "L0-r0-c0",
                }
            )
        )
        self.runtime.ingest_line(
            line({"kind": "state_begin", "boot_id": "boot-a", "seq": 1})
        )
        self.runtime.ingest_line(
            line({"kind": "state_end", "boot_id": "boot-a", "seq": 1})
        )
        snapshot = self.runtime.snapshot()
        self.assertEqual(snapshot["board"], {})
        self.assertEqual(snapshot["detections"], [])
        self.assertEqual(snapshot["board_resets"][0]["status"], "accepted")
        self.assertEqual(
            snapshot["active_faults"]["L0-r0-c0"]["code"],
            "reset_ambiguous_stack",
        )

    def test_firmware_codebook_mismatch_rejects_detection(self) -> None:
        self.runtime.ingest_line(
            line(
                {
                    "kind": "hello",
                    "boot_id": "boot-a",
                    "electrical_codebook_id": "different-codebook",
                }
            )
        )
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:1",
                    "seq": 1,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "code_id": "C0",
                }
            )
        )
        snapshot = self.runtime.snapshot()
        self.assertEqual(snapshot["board"], {})
        self.assertEqual(snapshot["detections"], [])
        self.assertIn("does not match backend", snapshot["last_error"])

    def test_annotation_is_append_only_and_latest_is_returned(self) -> None:
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:1",
                    "seq": 1,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "unit": "earth",
                }
            )
        )
        first = self.runtime.annotate("boot-a:1", True, "wrong type")
        second = self.runtime.annotate("boot-a:1", False, "undo")
        self.assertLess(first["annotation_id"], second["annotation_id"])
        latest = self.runtime.snapshot()["detections"][0]["annotation"]
        self.assertEqual(latest["incorrect"], False)
        self.assertEqual(latest["note"], "undo")

    def test_unknown_detection_annotation_is_rejected(self) -> None:
        with self.assertRaises(KeyError):
            self.runtime.annotate("missing", True)

    def test_snapshot_only_lists_current_boot_detections(self) -> None:
        self.runtime.ingest_line(
            line(
                {
                    "kind": "detection",
                    "boot_id": "boot-a",
                    "detection_id": "boot-a:1",
                    "seq": 1,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "unit": "earth",
                }
            )
        )
        self.runtime.ingest_line(line({"kind": "hello", "boot_id": "boot-b"}))
        self.assertEqual(self.runtime.snapshot()["detections"], [])


if __name__ == "__main__":
    unittest.main()
