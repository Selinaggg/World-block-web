from __future__ import annotations

import json
from dataclasses import dataclass
from typing import Any


PROTOCOL_PREFIX = "WB_JSON:"
LEGACY_STATE_PREFIX = "BOARD_STATE_JSON:"
LEGACY_EVENT_PREFIX = "EVENT_JSON:"


@dataclass(frozen=True)
class ProtocolMessage:
    kind: str
    data: dict[str, Any]
    raw_line: str
    protocol: int
    legacy: bool = False


def _decode_payload(prefix: str, line: str) -> dict[str, Any] | None:
    try:
        payload = json.loads(line[len(prefix) :].strip())
    except (json.JSONDecodeError, TypeError):
        return None
    return payload if isinstance(payload, dict) else None


def parse_protocol_line(raw_line: str) -> ProtocolMessage | None:
    """Parse one complete transport line.

    Unknown diagnostic text and incomplete JSON are intentionally ignored. The
    transport owns line buffering, so this function never tries to join chunks.
    """

    line = raw_line.strip()
    if not line:
        return None

    if line.startswith(PROTOCOL_PREFIX):
        data = _decode_payload(PROTOCOL_PREFIX, line)
        if data is None:
            return None
        kind = str(data.get("kind") or "unknown")
        try:
            protocol = int(data.get("protocol", 0))
        except (TypeError, ValueError):
            protocol = 0
        return ProtocolMessage(kind=kind, data=data, raw_line=line, protocol=protocol)

    if line.startswith(LEGACY_STATE_PREFIX):
        data = _decode_payload(LEGACY_STATE_PREFIX, line)
        if data is None:
            return None
        return ProtocolMessage(
            kind="legacy_state",
            data=data,
            raw_line=line,
            protocol=1,
            legacy=True,
        )

    if line.startswith(LEGACY_EVENT_PREFIX):
        data = _decode_payload(LEGACY_EVENT_PREFIX, line)
        if data is None:
            return None
        return ProtocolMessage(
            kind="legacy_event",
            data=data,
            raw_line=line,
            protocol=1,
            legacy=True,
        )

    return None

