from __future__ import annotations

import json
import sqlite3
import threading
import time
from pathlib import Path
from typing import Any

from .protocol import ProtocolMessage


SCHEMA = """
CREATE TABLE IF NOT EXISTS transport_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    received_wall_ns INTEGER NOT NULL,
    received_monotonic_ns INTEGER NOT NULL,
    kind TEXT,
    protocol INTEGER,
    boot_id TEXT,
    sequence INTEGER,
    raw_line TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS detections (
    detection_id TEXT PRIMARY KEY,
    boot_id TEXT NOT NULL,
    sequence INTEGER NOT NULL,
    received_wall_ns INTEGER NOT NULL,
    received_monotonic_ns INTEGER NOT NULL,
    device_us INTEGER,
    signal_us INTEGER,
    commit_us INTEGER,
    column_id TEXT NOT NULL,
    event TEXT NOT NULL,
    code_id TEXT,
    unit TEXT,
    nominal_ohms REAL,
    target_g_us REAL,
    electrical_codebook_id TEXT,
    type_mapping_id TEXT,
    confidence REAL,
    payload_json TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS annotations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    detection_id TEXT NOT NULL,
    incorrect INTEGER NOT NULL,
    note TEXT NOT NULL DEFAULT '',
    created_wall_ns INTEGER NOT NULL,
    FOREIGN KEY (detection_id) REFERENCES detections(detection_id)
);

CREATE TABLE IF NOT EXISTS faults (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fault_id TEXT NOT NULL,
    boot_id TEXT NOT NULL,
    received_wall_ns INTEGER NOT NULL,
    received_monotonic_ns INTEGER NOT NULL,
    column_id TEXT,
    status TEXT NOT NULL,
    code TEXT NOT NULL,
    severity TEXT NOT NULL,
    payload_json TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS corrections (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    correction_id TEXT,
    request_id TEXT NOT NULL,
    boot_id TEXT NOT NULL,
    received_wall_ns INTEGER NOT NULL,
    received_monotonic_ns INTEGER NOT NULL,
    column_id TEXT NOT NULL,
    status TEXT NOT NULL,
    payload_json TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS board_resets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    reset_id TEXT,
    request_id TEXT NOT NULL,
    boot_id TEXT NOT NULL,
    received_wall_ns INTEGER NOT NULL,
    received_monotonic_ns INTEGER NOT NULL,
    status TEXT NOT NULL,
    payload_json TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS recovery_checkpoints (
    checkpoint_id TEXT PRIMARY KEY,
    created_wall_ns INTEGER NOT NULL,
    boot_id TEXT NOT NULL,
    module_count INTEGER NOT NULL,
    electrical_codebook_id TEXT NOT NULL,
    type_mapping_id TEXT NOT NULL,
    source TEXT NOT NULL,
    protected INTEGER NOT NULL DEFAULT 0,
    columns_json TEXT NOT NULL,
    board_json TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS recovery_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    recovery_id TEXT NOT NULL,
    request_id TEXT,
    boot_id TEXT NOT NULL,
    received_wall_ns INTEGER NOT NULL,
    received_monotonic_ns INTEGER NOT NULL,
    column_id TEXT,
    status TEXT NOT NULL,
    payload_json TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_transport_received ON transport_log(received_wall_ns);
CREATE INDEX IF NOT EXISTS idx_detections_sequence ON detections(boot_id, sequence);
CREATE INDEX IF NOT EXISTS idx_annotations_detection ON annotations(detection_id, id);
CREATE INDEX IF NOT EXISTS idx_faults_boot_received ON faults(boot_id, received_wall_ns);
CREATE INDEX IF NOT EXISTS idx_corrections_boot_received ON corrections(boot_id, received_wall_ns);
CREATE INDEX IF NOT EXISTS idx_corrections_request ON corrections(request_id, id);
CREATE INDEX IF NOT EXISTS idx_board_resets_boot_received ON board_resets(boot_id, received_wall_ns);
CREATE INDEX IF NOT EXISTS idx_recovery_checkpoints_match
ON recovery_checkpoints(module_count, electrical_codebook_id, created_wall_ns);
CREATE INDEX IF NOT EXISTS idx_recovery_events_received
ON recovery_events(recovery_id, received_wall_ns);
"""


class Journal:
    def __init__(self, path: str | Path) -> None:
        self.path = Path(path)
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self._lock = threading.RLock()
        self._connection = sqlite3.connect(self.path, check_same_thread=False)
        self._connection.row_factory = sqlite3.Row
        self._connection.execute("PRAGMA journal_mode=WAL")
        self._connection.execute("PRAGMA foreign_keys=ON")
        self._connection.executescript(SCHEMA)
        self._migrate_detection_columns()
        self._connection.commit()

    def _migrate_detection_columns(self) -> None:
        existing = {
            str(row["name"])
            for row in self._connection.execute("PRAGMA table_info(detections)").fetchall()
        }
        required = {
            "code_id": "TEXT",
            "nominal_ohms": "REAL",
            "target_g_us": "REAL",
            "electrical_codebook_id": "TEXT",
            "type_mapping_id": "TEXT",
        }
        for column, column_type in required.items():
            if column not in existing:
                self._connection.execute(
                    f"ALTER TABLE detections ADD COLUMN {column} {column_type}"
                )

    def close(self) -> None:
        with self._lock:
            self._connection.close()

    def record_transport(
        self,
        message: ProtocolMessage | None,
        raw_line: str,
        received_wall_ns: int,
        received_monotonic_ns: int,
    ) -> int:
        data = message.data if message else {}
        sequence = data.get("seq")
        with self._lock:
            cursor = self._connection.execute(
                """
                INSERT INTO transport_log (
                    received_wall_ns, received_monotonic_ns, kind, protocol,
                    boot_id, sequence, raw_line
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    received_wall_ns,
                    received_monotonic_ns,
                    message.kind if message else None,
                    message.protocol if message else None,
                    data.get("boot_id"),
                    int(sequence) if sequence is not None else None,
                    raw_line,
                ),
            )
            self._connection.commit()
            return int(cursor.lastrowid)

    def record_detection(
        self,
        data: dict[str, Any],
        received_wall_ns: int,
        received_monotonic_ns: int,
    ) -> bool:
        with self._lock:
            cursor = self._connection.execute(
                """
                INSERT OR IGNORE INTO detections (
                    detection_id, boot_id, sequence, received_wall_ns,
                    received_monotonic_ns, device_us, signal_us, commit_us,
                    column_id, event, code_id, unit, nominal_ohms, target_g_us,
                    electrical_codebook_id, type_mapping_id, confidence, payload_json
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    str(data["detection_id"]),
                    str(data["boot_id"]),
                    int(data["seq"]),
                    received_wall_ns,
                    received_monotonic_ns,
                    data.get("device_us"),
                    data.get("signal_us"),
                    data.get("commit_us"),
                    str(data["column_id"]),
                    str(data["event"]),
                    data.get("code_id"),
                    data.get("unit"),
                    data.get("nominal_ohms"),
                    data.get("target_g_us"),
                    data.get("electrical_codebook_id"),
                    data.get("type_mapping_id"),
                    data.get("confidence"),
                    json.dumps(data, ensure_ascii=False, separators=(",", ":")),
                ),
            )
            self._connection.commit()
            return cursor.rowcount > 0

    def detection_exists(self, detection_id: str) -> bool:
        with self._lock:
            row = self._connection.execute(
                "SELECT 1 FROM detections WHERE detection_id=?",
                (str(detection_id),),
            ).fetchone()
        return row is not None

    def annotate(self, detection_id: str, incorrect: bool, note: str = "") -> dict[str, Any]:
        created_wall_ns = time.time_ns()
        with self._lock:
            exists = self._connection.execute(
                "SELECT 1 FROM detections WHERE detection_id = ?", (detection_id,)
            ).fetchone()
            if not exists:
                raise KeyError(detection_id)
            cursor = self._connection.execute(
                """
                INSERT INTO annotations (detection_id, incorrect, note, created_wall_ns)
                VALUES (?, ?, ?, ?)
                """,
                (detection_id, int(incorrect), note.strip(), created_wall_ns),
            )
            self._connection.commit()
        return {
            "annotation_id": int(cursor.lastrowid),
            "detection_id": detection_id,
            "incorrect": bool(incorrect),
            "note": note.strip(),
            "created_wall_ns": created_wall_ns,
        }

    def record_fault(
        self,
        data: dict[str, Any],
        received_wall_ns: int,
        received_monotonic_ns: int,
    ) -> dict[str, Any]:
        item = dict(data)
        item.setdefault("fault_id", f"{item.get('boot_id', 'unknown')}:fault:unidentified")
        item.setdefault("status", "active")
        item.setdefault("code", "unspecified_fault")
        item.setdefault("severity", "error")
        with self._lock:
            cursor = self._connection.execute(
                """
                INSERT INTO faults (
                    fault_id, boot_id, received_wall_ns, received_monotonic_ns,
                    column_id, status, code, severity, payload_json
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    str(item["fault_id"]),
                    str(item.get("boot_id") or "unknown"),
                    received_wall_ns,
                    received_monotonic_ns,
                    item.get("column_id"),
                    str(item["status"]),
                    str(item["code"]),
                    str(item["severity"]),
                    json.dumps(item, ensure_ascii=False, separators=(",", ":")),
                ),
            )
            self._connection.commit()
        item["journal_id"] = int(cursor.lastrowid)
        item["received_wall_ns"] = received_wall_ns
        return item

    def record_correction(
        self,
        data: dict[str, Any],
        received_wall_ns: int | None = None,
        received_monotonic_ns: int | None = None,
    ) -> dict[str, Any]:
        item = dict(data)
        received_wall_ns = received_wall_ns or time.time_ns()
        received_monotonic_ns = received_monotonic_ns or time.monotonic_ns()
        with self._lock:
            cursor = self._connection.execute(
                """
                INSERT INTO corrections (
                    correction_id, request_id, boot_id, received_wall_ns,
                    received_monotonic_ns, column_id, status, payload_json
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    item.get("correction_id"),
                    str(item["request_id"]),
                    str(item["boot_id"]),
                    received_wall_ns,
                    received_monotonic_ns,
                    str(item["column_id"]),
                    str(item["status"]),
                    json.dumps(item, ensure_ascii=False, separators=(",", ":")),
                ),
            )
            self._connection.commit()
        item["journal_id"] = int(cursor.lastrowid)
        item["received_wall_ns"] = received_wall_ns
        return item

    def record_board_reset(
        self,
        data: dict[str, Any],
        received_wall_ns: int | None = None,
        received_monotonic_ns: int | None = None,
    ) -> dict[str, Any]:
        item = dict(data)
        received_wall_ns = received_wall_ns or time.time_ns()
        received_monotonic_ns = received_monotonic_ns or time.monotonic_ns()
        with self._lock:
            cursor = self._connection.execute(
                """
                INSERT INTO board_resets (
                    reset_id, request_id, boot_id, received_wall_ns,
                    received_monotonic_ns, status, payload_json
                ) VALUES (?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    item.get("reset_id"),
                    str(item["request_id"]),
                    str(item["boot_id"]),
                    received_wall_ns,
                    received_monotonic_ns,
                    str(item["status"]),
                    json.dumps(item, ensure_ascii=False, separators=(",", ":")),
                ),
            )
            self._connection.commit()
        item["journal_id"] = int(cursor.lastrowid)
        item["received_wall_ns"] = received_wall_ns
        return item

    def recent_detections(
        self, limit: int = 100, boot_id: str | None = None
    ) -> list[dict[str, Any]]:
        limit = max(1, min(int(limit), 1000))
        where = "WHERE d.boot_id = ?" if boot_id else ""
        parameters: tuple[Any, ...] = (boot_id, limit) if boot_id else (limit,)
        with self._lock:
            rows = self._connection.execute(
                f"""
                SELECT d.*,
                       a.incorrect AS annotated_incorrect,
                       a.note AS annotation_note,
                       a.id AS annotation_id
                FROM detections d
                LEFT JOIN annotations a ON a.id = (
                    SELECT a2.id FROM annotations a2
                    WHERE a2.detection_id = d.detection_id
                    ORDER BY a2.id DESC LIMIT 1
                )
                {where}
                ORDER BY d.received_wall_ns DESC
                LIMIT ?
                """,
                parameters,
            ).fetchall()
        detections = []
        for row in rows:
            item = json.loads(row["payload_json"])
            item["received_wall_ns"] = row["received_wall_ns"]
            item["annotation"] = None
            if row["annotation_id"] is not None:
                item["annotation"] = {
                    "annotation_id": row["annotation_id"],
                    "incorrect": bool(row["annotated_incorrect"]),
                    "note": row["annotation_note"],
                }
            detections.append(item)
        return detections

    def recent_faults(
        self, limit: int = 100, boot_id: str | None = None
    ) -> list[dict[str, Any]]:
        limit = max(1, min(int(limit), 1000))
        where = "WHERE boot_id = ?" if boot_id else ""
        parameters: tuple[Any, ...] = (boot_id, limit) if boot_id else (limit,)
        with self._lock:
            rows = self._connection.execute(
                f"""
                SELECT * FROM faults
                {where}
                ORDER BY received_wall_ns DESC, id DESC
                LIMIT ?
                """,
                parameters,
            ).fetchall()
        result = []
        for row in rows:
            item = json.loads(row["payload_json"])
            item["journal_id"] = row["id"]
            item["received_wall_ns"] = row["received_wall_ns"]
            result.append(item)
        return result

    def recent_corrections(
        self, limit: int = 100, boot_id: str | None = None
    ) -> list[dict[str, Any]]:
        limit = max(1, min(int(limit), 1000))
        where = "WHERE boot_id = ?" if boot_id else ""
        parameters: tuple[Any, ...] = (boot_id, limit) if boot_id else (limit,)
        with self._lock:
            rows = self._connection.execute(
                f"""
                SELECT * FROM corrections
                {where}
                ORDER BY received_wall_ns DESC, id DESC
                LIMIT ?
                """,
                parameters,
            ).fetchall()
        result = []
        for row in rows:
            item = json.loads(row["payload_json"])
            item["journal_id"] = row["id"]
            item["received_wall_ns"] = row["received_wall_ns"]
            result.append(item)
        return result

    def recent_board_resets(
        self, limit: int = 20, boot_id: str | None = None
    ) -> list[dict[str, Any]]:
        limit = max(1, min(int(limit), 100))
        where = "WHERE boot_id = ?" if boot_id else ""
        parameters: tuple[Any, ...] = (boot_id, limit) if boot_id else (limit,)
        with self._lock:
            rows = self._connection.execute(
                f"""
                SELECT * FROM board_resets
                {where}
                ORDER BY received_wall_ns DESC, id DESC
                LIMIT ?
                """,
                parameters,
            ).fetchall()
        result = []
        for row in rows:
            item = json.loads(row["payload_json"])
            item["journal_id"] = row["id"]
            item["received_wall_ns"] = row["received_wall_ns"]
            result.append(item)
        return result

    def save_recovery_checkpoint(
        self,
        *,
        checkpoint_id: str,
        boot_id: str,
        module_count: int,
        electrical_codebook_id: str,
        type_mapping_id: str,
        source: str,
        protected: bool,
        columns: list[str],
        board: dict[str, list[str]],
        created_wall_ns: int | None = None,
    ) -> dict[str, Any]:
        created = int(created_wall_ns or time.time_ns())
        payload = {
            "checkpoint_id": checkpoint_id,
            "created_wall_ns": created,
            "boot_id": boot_id,
            "module_count": int(module_count),
            "electrical_codebook_id": electrical_codebook_id,
            "type_mapping_id": type_mapping_id,
            "source": source,
            "protected": bool(protected),
            "columns": list(columns),
            "board": {
                str(column_id): list(stack)
                for column_id, stack in board.items()
                if stack
            },
        }
        with self._lock:
            self._connection.execute(
                """
                INSERT OR REPLACE INTO recovery_checkpoints (
                    checkpoint_id, created_wall_ns, boot_id, module_count,
                    electrical_codebook_id, type_mapping_id, source, protected,
                    columns_json, board_json
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    checkpoint_id,
                    created,
                    boot_id,
                    int(module_count),
                    electrical_codebook_id,
                    type_mapping_id,
                    source,
                    int(bool(protected)),
                    json.dumps(columns, separators=(",", ":")),
                    json.dumps(payload["board"], separators=(",", ":")),
                ),
            )
            self._connection.commit()
        return payload

    def recovery_checkpoint(self, checkpoint_id: str) -> dict[str, Any] | None:
        with self._lock:
            row = self._connection.execute(
                """
                SELECT * FROM recovery_checkpoints WHERE checkpoint_id = ?
                """,
                (checkpoint_id,),
            ).fetchone()
        return self._checkpoint_dict(row) if row else None

    def latest_recovery_checkpoint(
        self,
        *,
        module_count: int,
        electrical_codebook_id: str,
        columns: list[str],
        protected: bool | None = None,
    ) -> dict[str, Any] | None:
        with self._lock:
            if protected is None:
                rows = self._connection.execute(
                    """
                    SELECT * FROM recovery_checkpoints
                    WHERE module_count = ? AND electrical_codebook_id = ?
                    ORDER BY created_wall_ns DESC LIMIT 100
                    """,
                    (int(module_count), electrical_codebook_id),
                ).fetchall()
            else:
                rows = self._connection.execute(
                    """
                    SELECT * FROM recovery_checkpoints
                    WHERE module_count = ? AND electrical_codebook_id = ?
                      AND protected = ?
                    ORDER BY created_wall_ns DESC LIMIT 100
                    """,
                    (
                        int(module_count),
                        electrical_codebook_id,
                        int(bool(protected)),
                    ),
                ).fetchall()
        expected = list(columns)
        for row in rows:
            checkpoint = self._checkpoint_dict(row)
            if checkpoint["columns"] == expected:
                return checkpoint
        return None

    def recent_recovery_checkpoints(self, limit: int = 20) -> list[dict[str, Any]]:
        limit = max(1, min(int(limit), 100))
        with self._lock:
            rows = self._connection.execute(
                """
                SELECT * FROM recovery_checkpoints
                ORDER BY created_wall_ns DESC LIMIT ?
                """,
                (limit,),
            ).fetchall()
        return [self._checkpoint_dict(row) for row in rows]

    @staticmethod
    def _checkpoint_dict(row: sqlite3.Row) -> dict[str, Any]:
        return {
            "checkpoint_id": str(row["checkpoint_id"]),
            "created_wall_ns": int(row["created_wall_ns"]),
            "boot_id": str(row["boot_id"]),
            "module_count": int(row["module_count"]),
            "electrical_codebook_id": str(row["electrical_codebook_id"]),
            "type_mapping_id": str(row["type_mapping_id"]),
            "source": str(row["source"]),
            "protected": bool(row["protected"]),
            "columns": json.loads(row["columns_json"]),
            "board": json.loads(row["board_json"]),
        }

    def record_recovery(
        self,
        data: dict[str, Any],
        received_wall_ns: int | None = None,
        received_monotonic_ns: int | None = None,
    ) -> dict[str, Any]:
        wall = int(received_wall_ns or time.time_ns())
        monotonic = int(received_monotonic_ns or time.monotonic_ns())
        item = dict(data)
        item.setdefault("recovery_id", "unknown")
        item.setdefault("status", "reported")
        item.setdefault("boot_id", "unknown")
        with self._lock:
            cursor = self._connection.execute(
                """
                INSERT INTO recovery_events (
                    recovery_id, request_id, boot_id, received_wall_ns,
                    received_monotonic_ns, column_id, status, payload_json
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    str(item["recovery_id"]),
                    item.get("request_id"),
                    str(item["boot_id"]),
                    wall,
                    monotonic,
                    item.get("column_id"),
                    str(item["status"]),
                    json.dumps(item, separators=(",", ":")),
                ),
            )
            self._connection.commit()
        item["journal_id"] = int(cursor.lastrowid)
        item["received_wall_ns"] = wall
        return item

    def recent_recoveries(
        self, limit: int = 200, recovery_id: str | None = None
    ) -> list[dict[str, Any]]:
        limit = max(1, min(int(limit), 1000))
        where = "WHERE recovery_id = ?" if recovery_id else ""
        parameters: tuple[Any, ...] = (
            (recovery_id, limit) if recovery_id else (limit,)
        )
        with self._lock:
            rows = self._connection.execute(
                f"""
                SELECT * FROM recovery_events
                {where}
                ORDER BY received_wall_ns DESC, id DESC LIMIT ?
                """,
                parameters,
            ).fetchall()
        result = []
        for row in rows:
            item = json.loads(row["payload_json"])
            item["journal_id"] = int(row["id"])
            item["received_wall_ns"] = int(row["received_wall_ns"])
            result.append(item)
        return result
