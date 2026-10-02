from __future__ import annotations

import json
import math
import re
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any


CODE_ID_RE = re.compile(r"^[A-Z][A-Z0-9_-]*$")
SEMANTIC_TYPES = {"earth", "human", "water", "fire", "animal", "spacer"}


class CodebookError(ValueError):
    pass


@dataclass(frozen=True)
class ElectricalCode:
    id: str
    nominal_ohms: float
    target_g_us: float


class CodebookResolver:
    """Resolve stable electrical code IDs into session-specific semantics."""

    def __init__(
        self,
        electrical_id: str,
        mapping_id: str,
        codes: tuple[ElectricalCode, ...],
        mapping: dict[str, str],
    ) -> None:
        self.electrical_id = electrical_id
        self.mapping_id = mapping_id
        self.codes = codes
        self.mapping = dict(mapping)
        self.codes_by_id = {code.id: code for code in codes}
        self.code_ids_by_unit = {unit: code_id for code_id, unit in self.mapping.items()}
        self._validate()

    @classmethod
    def load(
        cls,
        electrical_path: str | Path,
        mapping_path: str | Path,
    ) -> "CodebookResolver":
        electrical_path = Path(electrical_path)
        mapping_path = Path(mapping_path)
        try:
            electrical_data = json.loads(electrical_path.read_text(encoding="utf-8"))
            mapping_data = json.loads(mapping_path.read_text(encoding="utf-8"))
            codes = tuple(
                ElectricalCode(
                    id=str(item["id"]).upper(),
                    nominal_ohms=float(item["nominal_ohms"]),
                    target_g_us=float(item["target_g_us"]),
                )
                for item in electrical_data["codes"]
            )
            electrical_id = str(electrical_data["id"])
            mapping_id = str(mapping_data["id"])
            expected_electrical_id = str(mapping_data["electrical_codebook_id"])
            mapping = {
                str(code_id).upper(): str(unit).lower()
                for code_id, unit in mapping_data["mapping"].items()
            }
        except (OSError, json.JSONDecodeError, KeyError, TypeError, ValueError) as exc:
            raise CodebookError(f"could not load codebook configuration: {exc}") from exc

        if expected_electrical_id != electrical_id:
            raise CodebookError(
                "type mapping targets electrical codebook "
                f"{expected_electrical_id}, but loaded {electrical_id}"
            )
        return cls(electrical_id, mapping_id, codes, mapping)

    def _validate(self) -> None:
        if not self.electrical_id or not self.mapping_id:
            raise CodebookError("electrical and mapping IDs are required")
        if not self.codes:
            raise CodebookError("at least one electrical code is required")
        if len(self.codes_by_id) != len(self.codes):
            raise CodebookError("electrical code IDs must be unique")

        for code in self.codes:
            if not CODE_ID_RE.fullmatch(code.id):
                raise CodebookError(f"invalid electrical code ID: {code.id}")
            if code.nominal_ohms <= 0 or code.target_g_us <= 0:
                raise CodebookError(f"electrical values must be positive for {code.id}")
            calculated_g_us = 1_000_000.0 / code.nominal_ohms
            if not math.isclose(code.target_g_us, calculated_g_us, rel_tol=0.002):
                raise CodebookError(
                    f"target conductance for {code.id} does not match nominal resistance"
                )

        code_ids = set(self.codes_by_id)
        mapping_ids = set(self.mapping)
        if mapping_ids != code_ids:
            missing = sorted(code_ids - mapping_ids)
            unknown = sorted(mapping_ids - code_ids)
            raise CodebookError(
                f"mapping/code mismatch; missing={missing}, unknown={unknown}"
            )
        invalid_types = sorted(set(self.mapping.values()) - SEMANTIC_TYPES)
        if invalid_types:
            raise CodebookError(f"unsupported semantic types: {invalid_types}")
        if len(set(self.mapping.values())) != len(self.mapping):
            raise CodebookError("each electrical code must map to a unique semantic type")

    def enrich_detection(self, detection: dict[str, Any]) -> dict[str, Any]:
        enriched = dict(detection)
        raw_code_id = enriched.get("code_id")
        if raw_code_id is None:
            if str(enriched.get("event") or "").lower() == "clear":
                enriched.update(
                    {
                        "electrical_codebook_id": self.electrical_id,
                        "type_mapping_id": self.mapping_id,
                        "mapping_source": "not_applicable",
                    }
                )
                return enriched
            # Protocol-v1/early-v2 compatibility: semantic events can continue
            # through the reducer, but they are not electrically auditable.
            if enriched.get("unit"):
                enriched["mapping_source"] = "legacy_semantic"
                return enriched
            raise CodebookError("detection contains neither code_id nor unit")

        code_id = str(raw_code_id).upper()
        code = self.codes_by_id.get(code_id)
        if code is None:
            raise CodebookError(f"unknown electrical code_id: {code_id}")
        semantic_type = self.mapping[code_id]
        firmware_unit = enriched.get("unit")
        if firmware_unit and str(firmware_unit).lower() != semantic_type:
            raise CodebookError(
                f"firmware semantic type conflicts with backend mapping for {code_id}"
            )

        enriched.update(
            {
                "code_id": code_id,
                "unit": semantic_type,
                "nominal_ohms": code.nominal_ohms,
                "target_g_us": code.target_g_us,
                "electrical_codebook_id": self.electrical_id,
                "type_mapping_id": self.mapping_id,
                "mapping_source": "backend_codebook",
            }
        )
        return enriched

    def code_ids_for_units(self, units: list[str]) -> list[str]:
        code_ids = []
        for raw_unit in units:
            unit = str(raw_unit).lower()
            code_id = self.code_ids_by_unit.get(unit)
            if code_id is None:
                raise CodebookError(f"unknown semantic unit: {unit}")
            code_ids.append(code_id)
        return code_ids

    def enrich_correction(self, correction: dict[str, Any]) -> dict[str, Any]:
        enriched = dict(correction)
        raw_stack = enriched.get("stack")
        if not isinstance(raw_stack, list):
            raise CodebookError("correction stack must be a list of code IDs")
        code_ids = [str(code_id).upper() for code_id in raw_stack]
        unknown = [code_id for code_id in code_ids if code_id not in self.codes_by_id]
        if unknown:
            raise CodebookError(f"unknown electrical code_id: {unknown[0]}")
        enriched.update(
            {
                "stack": code_ids,
                "units": [self.mapping[code_id] for code_id in code_ids],
                "electrical_codebook_id": self.electrical_id,
                "type_mapping_id": self.mapping_id,
                "mapping_source": "backend_codebook",
            }
        )
        return enriched

    def metadata(self) -> dict[str, Any]:
        return {
            "electrical_codebook_id": self.electrical_id,
            "type_mapping_id": self.mapping_id,
            "codes": [
                {**asdict(code), "unit": self.mapping[code.id]}
                for code in self.codes
            ],
        }
