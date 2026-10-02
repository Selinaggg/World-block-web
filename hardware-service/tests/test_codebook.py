from __future__ import annotations

import json
import tempfile
import unittest
from pathlib import Path

from backend.worldblocks.codebook import CodebookError, CodebookResolver


ROOT = Path(__file__).resolve().parents[1]
ELECTRICAL_PATH = ROOT / "config" / "electrical_codebook.json"
MAPPING_PATH = ROOT / "config" / "type_mapping.json"


class CodebookTests(unittest.TestCase):
    def test_default_mapping_resolves_electrical_identity(self) -> None:
        resolver = CodebookResolver.load(ELECTRICAL_PATH, MAPPING_PATH)
        detection = resolver.enrich_detection({"event": "add", "code_id": "c0"})
        self.assertEqual(detection["code_id"], "C0")
        self.assertEqual(detection["unit"], "earth")
        self.assertEqual(detection["nominal_ohms"], 8250.0)
        self.assertEqual(detection["mapping_source"], "backend_codebook")

    def test_semantics_can_change_without_changing_electrical_codebook(self) -> None:
        mapping = json.loads(MAPPING_PATH.read_text(encoding="utf-8"))
        mapping["id"] = "terrain-earth-water-swapped"
        mapping["mapping"]["C0"] = "water"
        mapping["mapping"]["C4"] = "earth"
        with tempfile.TemporaryDirectory() as directory:
            alternate_path = Path(directory) / "mapping.json"
            alternate_path.write_text(json.dumps(mapping), encoding="utf-8")
            resolver = CodebookResolver.load(ELECTRICAL_PATH, alternate_path)

        self.assertEqual(resolver.enrich_detection({"code_id": "C0"})["unit"], "water")
        self.assertEqual(resolver.enrich_detection({"code_id": "C4"})["unit"], "earth")
        self.assertEqual(resolver.electrical_id, "e96-2026-07-19")

    def test_unknown_code_is_rejected(self) -> None:
        resolver = CodebookResolver.load(ELECTRICAL_PATH, MAPPING_PATH)
        with self.assertRaisesRegex(CodebookError, "unknown electrical code_id"):
            resolver.enrich_detection({"event": "add", "code_id": "C99"})

    def test_clear_event_does_not_require_a_code(self) -> None:
        resolver = CodebookResolver.load(ELECTRICAL_PATH, MAPPING_PATH)
        detection = resolver.enrich_detection({"event": "clear", "code_id": None})
        self.assertNotIn("unit", detection)
        self.assertEqual(detection["mapping_source"], "not_applicable")

    def test_units_can_be_mapped_to_codes_for_correction(self) -> None:
        resolver = CodebookResolver.load(ELECTRICAL_PATH, MAPPING_PATH)
        self.assertEqual(resolver.code_ids_for_units(["earth", "water"]), ["C0", "C4"])
        correction = resolver.enrich_correction({"stack": ["c0", "c4"]})
        self.assertEqual(correction["units"], ["earth", "water"])


if __name__ == "__main__":
    unittest.main()
