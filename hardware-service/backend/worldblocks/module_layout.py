from __future__ import annotations

import copy
import json
import re
import threading
from pathlib import Path
from typing import Any


ALLOWED_MODULE_COUNTS = (1, 2, 4, 6, 8)
MODULE_CELL_ROWS = 2
MODULE_CELL_COLS = 4


class ModuleLayoutError(ValueError):
    pass


def module_port(index: int) -> str:
    return f"A{index}"


def default_module_layout(module_count: int) -> dict[str, Any]:
    if module_count not in ALLOWED_MODULE_COUNTS:
        raise ModuleLayoutError(
            f"module_count must be one of {', '.join(map(str, ALLOWED_MODULE_COUNTS))}"
        )
    return {
        "version": 1,
        "module_count": module_count,
        "grid_rows": module_count,
        "grid_cols": 1,
        "slots": [module_port(index) for index in range(module_count)],
    }


def validate_module_layout(data: dict[str, Any]) -> dict[str, Any]:
    try:
        module_count = int(data["module_count"])
        grid_rows = int(data["grid_rows"])
        grid_cols = int(data["grid_cols"])
        slots = [str(port) for port in data["slots"]]
    except (KeyError, TypeError, ValueError) as exc:
        raise ModuleLayoutError(f"invalid module layout: {exc}") from exc

    if module_count not in ALLOWED_MODULE_COUNTS:
        raise ModuleLayoutError(
            f"module_count must be one of {', '.join(map(str, ALLOWED_MODULE_COUNTS))}"
        )
    if grid_rows < 1 or grid_cols < 1 or grid_rows * grid_cols != module_count:
        raise ModuleLayoutError("grid_rows × grid_cols must equal module_count")
    if len(slots) != module_count:
        raise ModuleLayoutError("slots must contain exactly one entry per module")

    if (
        len(set(slots)) != len(slots)
        or any(re.fullmatch(r"A[0-7]", port) is None for port in slots)
    ):
        raise ModuleLayoutError(
            "slots must contain unique Arduino ports from A0 through A7"
        )

    return {
        "version": 1,
        "module_count": module_count,
        "grid_rows": grid_rows,
        "grid_cols": grid_cols,
        "slots": slots,
    }


class ModuleLayoutStore:
    def __init__(self, path: str | Path | None, fallback_count: int = 2) -> None:
        self.path = Path(path) if path is not None else None
        self._lock = threading.RLock()
        self._layout = default_module_layout(fallback_count)
        if self.path is not None and self.path.exists():
            try:
                loaded = json.loads(self.path.read_text(encoding="utf-8"))
                if not isinstance(loaded, dict):
                    raise ModuleLayoutError("saved module layout must be a JSON object")
                self._layout = validate_module_layout(loaded)
            except (OSError, json.JSONDecodeError, ModuleLayoutError) as exc:
                raise ModuleLayoutError(
                    f"cannot load module layout {self.path}: {exc}"
                ) from exc

    def snapshot(self) -> dict[str, Any]:
        with self._lock:
            return copy.deepcopy(self._layout)

    def validate(self, data: dict[str, Any]) -> dict[str, Any]:
        return validate_module_layout(data)

    def save(self, data: dict[str, Any]) -> dict[str, Any]:
        normalized = validate_module_layout(data)
        with self._lock:
            if self.path is not None:
                self.path.parent.mkdir(parents=True, exist_ok=True)
                temporary = self.path.with_suffix(self.path.suffix + ".tmp")
                temporary.write_text(
                    json.dumps(normalized, indent=2) + "\n", encoding="utf-8"
                )
                temporary.replace(self.path)
            self._layout = normalized
            return copy.deepcopy(self._layout)
