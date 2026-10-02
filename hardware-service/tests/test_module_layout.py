from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from backend.worldblocks.module_layout import (
    ModuleLayoutError,
    ModuleLayoutStore,
    default_module_layout,
    validate_module_layout,
)


class ModuleLayoutTests(unittest.TestCase):
    def test_default_layout_preserves_the_canonical_vertical_strip(self) -> None:
        layout = default_module_layout(4)
        self.assertEqual(layout["grid_rows"], 4)
        self.assertEqual(layout["grid_cols"], 1)
        self.assertEqual(layout["slots"], ["A0", "A1", "A2", "A3"])

    def test_rectangular_port_permutations_are_valid(self) -> None:
        layout = validate_module_layout(
            {
                "module_count": 6,
                "grid_rows": 2,
                "grid_cols": 3,
                "slots": ["A2", "A0", "A5", "A1", "A4", "A3"],
            }
        )
        self.assertEqual(layout["grid_rows"], 2)
        self.assertEqual(layout["slots"][0], "A2")

    def test_single_module_can_target_any_arduino_port(self) -> None:
        layout = validate_module_layout(
            {
                "module_count": 1,
                "grid_rows": 1,
                "grid_cols": 1,
                "slots": ["A2"],
            }
        )
        self.assertEqual(layout["slots"], ["A2"])

    def test_holes_duplicate_ports_and_unsupported_counts_are_rejected(self) -> None:
        with self.assertRaises(ModuleLayoutError):
            validate_module_layout(
                {
                    "module_count": 4,
                    "grid_rows": 2,
                    "grid_cols": 2,
                    "slots": ["A0", "A1", "A1", "A3"],
                }
            )
        with self.assertRaises(ModuleLayoutError):
            default_module_layout(3)

    def test_store_persists_layout_atomically(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "module_layout.json"
            store = ModuleLayoutStore(path, fallback_count=2)
            saved = store.save(
                {
                    "module_count": 2,
                    "grid_rows": 1,
                    "grid_cols": 2,
                    "slots": ["A1", "A0"],
                }
            )
            self.assertEqual(saved["slots"], ["A1", "A0"])
            self.assertEqual(json.loads(path.read_text())["grid_cols"], 2)
            self.assertEqual(ModuleLayoutStore(path).snapshot(), saved)


if __name__ == "__main__":
    unittest.main()
