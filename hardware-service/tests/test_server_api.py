from __future__ import annotations

import json
import tempfile
import threading
import unittest
import urllib.parse
import urllib.request
from http.server import ThreadingHTTPServer
from pathlib import Path

from backend.worldblocks.codebook import CodebookResolver
from backend.worldblocks.journal import Journal
from backend.worldblocks.runtime import BoardRuntime
from backend.worldblocks.server import build_handler, build_parser


def protocol_line(data: dict) -> str:
    return "WB_JSON:" + json.dumps({"protocol": 2, **data}, separators=(",", ":"))


class FakeTransport:
    def __init__(self) -> None:
        self.commands: list[str] = []

    def send(self, command: str) -> None:
        if not command:
            raise ValueError("command is required")
        self.commands.append(command)


class ServerApiTests(unittest.TestCase):
    def setUp(self) -> None:
        self.directory = tempfile.TemporaryDirectory()
        self.journal = Journal(Path(self.directory.name) / "api.sqlite")
        root = Path(__file__).resolve().parents[1]
        codebook = CodebookResolver.load(
            root / "config" / "electrical_codebook.json",
            root / "config" / "type_mapping.json",
        )
        self.runtime = BoardRuntime(self.journal, codebook=codebook)
        for payload in (
            {"kind": "hello", "boot_id": "mega-test"},
            {
                "kind": "topology",
                "topology_id": "t",
                "boot_id": "mega-test",
                "module_count": 1,
                "max_stack": 7,
                "tracking_capacity": 16,
                "adc_bits": 10,
                "layers": [{"id": "L0", "rows": 1, "cols": 1}],
            },
            {
                "kind": "channel",
                "topology_id": "t",
                "column_id": "L0-r0-c0",
                "layer": "L0",
                "row": 0,
                "col": 0,
                "module": 0,
                "mux": 0,
                "channel": 0,
            },
            {"kind": "topology_end", "topology_id": "t"},
            {
                "kind": "detection",
                "boot_id": "mega-test",
                "detection_id": "mega-test:1",
                "seq": 1,
                "event": "add",
                "column_id": "L0-r0-c0",
                "unit": "earth",
            },
        ):
            self.runtime.ingest_line(protocol_line(payload))

        self.transport = FakeTransport()
        self.runtime.set_command_sender(self.transport.send)
        self.server = ThreadingHTTPServer(
            ("127.0.0.1", 0), build_handler(self.runtime, self.transport)
        )
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()
        host, port = self.server.server_address
        self.base_url = f"http://{host}:{port}"

    def tearDown(self) -> None:
        self.server.shutdown()
        self.server.server_close()
        self.thread.join(timeout=2)
        self.journal.close()
        self.directory.cleanup()

    def post(self, path: str, body: dict) -> dict:
        request = urllib.request.Request(
            self.base_url + path,
            data=json.dumps(body).encode("utf-8"),
            headers={"Content-Type": "application/json"},
            method="POST",
        )
        with urllib.request.urlopen(request, timeout=2) as response:
            return json.load(response)

    def test_url_encoded_detection_id_can_be_annotated(self) -> None:
        encoded = urllib.parse.quote("mega-test:1", safe="")
        response = self.post(
            f"/api/detections/{encoded}/annotation",
            {"incorrect": True, "note": "integration regression"},
        )
        self.assertTrue(response["ok"])
        self.assertEqual(response["annotation"]["detection_id"], "mega-test:1")
        latest = self.runtime.snapshot()["detections"][0]["annotation"]
        self.assertTrue(latest["incorrect"])

    def test_debug_command_is_queued(self) -> None:
        response = self.post("/api/command", {"command": "SIM ADD L0 0 0 earth"})
        self.assertTrue(response["ok"])
        self.assertEqual(self.transport.commands, ["SIM ADD L0 0 0 earth"])

    def test_faulted_column_correction_is_queued_for_firmware(self) -> None:
        self.runtime.ingest_line(
            protocol_line(
                {
                    "kind": "fault",
                    "boot_id": "mega-test",
                    "fault_id": "mega-test:fault:1",
                    "status": "active",
                    "severity": "error",
                    "code": "test_fault",
                    "message": "needs correction",
                    "column_id": "L0-r0-c0",
                }
            )
        )
        encoded = urllib.parse.quote("L0-r0-c0", safe="")
        response = self.post(
            f"/api/columns/{encoded}/correction",
            {"stack": ["earth", "water"]},
        )
        self.assertTrue(response["ok"])
        self.assertEqual(response["correction"]["status"], "pending")
        self.assertRegex(
            self.transport.commands[-1],
            r"^RECONCILE [0-9a-f]{12} L0-r0-c0 C0,C4$",
        )

    def test_board_reset_is_queued_for_firmware(self) -> None:
        response = self.post("/api/board/reset", {})
        self.assertTrue(response["ok"])
        self.assertEqual(response["board_reset"]["status"], "pending")
        self.assertRegex(
            self.transport.commands[-1],
            r"^RESET_BOARD [0-9a-f]{32}$",
        )

    def test_active_recovery_can_be_stopped(self) -> None:
        checkpoint = self.post(
            "/api/recovery/checkpoint", {"source": "api-stop-test"}
        )["checkpoint"]
        started = self.post(
            "/api/recovery/start",
            {"checkpoint_id": checkpoint["checkpoint_id"]},
        )
        recovery_id = started["recovery"]["recovery_id"]
        self.assertTrue(self.transport.commands[-1].startswith("RESTORE "))

        stopped = self.post("/api/recovery/stop", {})
        self.assertTrue(stopped["ok"])
        self.assertEqual(stopped["recovery"]["status"], "stopping")
        self.assertEqual(
            self.transport.commands[-1],
            f"RECOVERY_CANCEL {recovery_id}",
        )

    def test_module_layout_is_in_snapshot_and_can_be_rearranged(self) -> None:
        with urllib.request.urlopen(self.base_url + "/api/snapshot", timeout=2) as response:
            snapshot = json.load(response)
        self.assertEqual(snapshot["module_layout"]["slots"], ["A0"])
        response = self.post(
            "/api/module-layout",
            {
                "module_count": 1,
                "grid_rows": 1,
                "grid_cols": 1,
                "slots": ["A0"],
            },
        )
        self.assertTrue(response["ok"])
        self.assertFalse(response["reconfiguring"])

    def test_empty_board_can_change_module_count(self) -> None:
        self.runtime._state.replace_board({})
        response = self.post(
            "/api/module-layout",
            {
                "module_count": 2,
                "grid_rows": 1,
                "grid_cols": 2,
                "slots": ["A1", "A0"],
            },
        )
        self.assertTrue(response["reconfiguring"])
        self.assertEqual(self.transport.commands[-1], "CONFIG 2 4 4")

        retry = self.post(
            "/api/module-layout",
            {
                "module_count": 2,
                "grid_rows": 1,
                "grid_cols": 2,
                "slots": ["A1", "A0"],
            },
        )
        self.assertTrue(retry["reconfiguring"])
        self.assertEqual(self.transport.commands[-1], "CONFIG 2 4 4")

    def test_occupied_board_can_change_module_count(self) -> None:
        self.runtime._recovery.update(
            {
                "status": "restoring",
                "recovery_id": "stale-eight-module-recovery",
                "pending": {"old-request": "L0-r0-c0"},
                "restore_queue": ["RESTORE old-request L0-r0-c0 -"],
            }
        )
        response = self.post(
            "/api/module-layout",
            {
                "module_count": 2,
                "grid_rows": 2,
                "grid_cols": 1,
                "slots": ["A0", "A1"],
            },
        )
        self.assertTrue(response["reconfiguring"])
        self.assertEqual(self.runtime.snapshot()["module_layout"]["module_count"], 2)
        self.assertEqual(self.transport.commands[-1], "CONFIG 2 4 4")
        self.assertEqual(self.runtime._expected_module_count, 2)
        self.assertTrue(self.runtime.snapshot()["hello"]["recovery_mode"])
        self.assertEqual(self.runtime.snapshot()["recovery"]["status"], "idle")

    def test_two_modules_are_the_cli_default(self) -> None:
        arguments = build_parser().parse_args([])
        self.assertEqual(arguments.modules, 2)
        self.assertEqual(arguments.layer_cols, 4)
        self.assertIsNone(arguments.layer_rows)


if __name__ == "__main__":
    unittest.main()
