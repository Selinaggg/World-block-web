from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any

from .topology import BoardTopology


UNIT_TYPES = {"earth", "human", "water", "fire", "animal", "spacer"}


class DetectionError(ValueError):
    pass


@dataclass
class BoardState:
    topology: BoardTopology
    stacks: dict[str, list[str]] = field(init=False)
    last_seq: int = 0
    applied_detection_ids: set[str] = field(default_factory=set)

    def __post_init__(self) -> None:
        self.stacks = {column.id: [] for column in self.topology.columns}

    def apply_detection(self, detection: dict[str, Any]) -> bool:
        """Apply one committed detection; return False for an exact duplicate."""

        detection_id = str(detection.get("detection_id") or "")
        if not detection_id:
            raise DetectionError("detection_id is required")
        if detection_id in self.applied_detection_ids:
            return False

        try:
            seq = int(detection["seq"])
        except (KeyError, TypeError, ValueError) as exc:
            raise DetectionError("valid seq is required") from exc
        if seq <= self.last_seq:
            raise DetectionError(f"non-monotonic sequence: {seq} <= {self.last_seq}")

        column_id = str(detection.get("column_id") or "")
        if column_id not in self.stacks:
            raise DetectionError(f"unknown column_id: {column_id}")

        event = str(detection.get("event") or "")
        stack = self.stacks[column_id]
        if event == "add":
            unit = str(detection.get("unit") or "")
            if unit not in UNIT_TYPES:
                raise DetectionError(f"unknown unit type: {unit}")
            if len(stack) >= self.topology.tracking_capacity:
                raise DetectionError(f"tracking capacity reached at {column_id}")
            stack.append(unit)
        elif event == "remove":
            if not stack:
                raise DetectionError(f"cannot remove from empty column {column_id}")
            expected_unit = detection.get("unit")
            if expected_unit and str(expected_unit) != stack[-1]:
                raise DetectionError(
                    f"remove type mismatch at {column_id}: expected {stack[-1]}, got {expected_unit}"
                )
            stack.pop()
        elif event == "clear":
            stack.clear()
        else:
            raise DetectionError(f"unsupported event: {event}")

        self.applied_detection_ids.add(detection_id)
        self.last_seq = seq
        return True

    def replace_stack(self, column_id: str, units: list[str]) -> None:
        if column_id not in self.stacks:
            raise DetectionError(f"unknown column_id: {column_id}")
        if len(units) > self.topology.tracking_capacity:
            raise DetectionError(
                f"correction exceeds tracking capacity at {column_id}"
            )
        invalid = [unit for unit in units if unit not in UNIT_TYPES]
        if invalid:
            raise DetectionError(f"unknown unit type in correction: {invalid[0]}")
        self.stacks[column_id] = list(units)

    def replace_board(self, stacks: dict[str, list[str]]) -> None:
        unknown = set(stacks) - set(self.stacks)
        if unknown:
            raise DetectionError(f"unknown column_id: {sorted(unknown)[0]}")
        replacement = {column_id: [] for column_id in self.stacks}
        for column_id, units in stacks.items():
            if len(units) > self.topology.tracking_capacity:
                raise DetectionError(
                    f"state exceeds tracking capacity at {column_id}"
                )
            invalid = [unit for unit in units if unit not in UNIT_TYPES]
            if invalid:
                raise DetectionError(f"unknown unit type in state: {invalid[0]}")
            replacement[column_id] = list(units)
        self.stacks = replacement

    def snapshot(self) -> dict[str, list[str]]:
        return {column_id: list(stack) for column_id, stack in self.stacks.items() if stack}
