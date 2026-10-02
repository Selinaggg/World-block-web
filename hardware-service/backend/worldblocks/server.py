from __future__ import annotations

import argparse
import json
import queue
import re
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import unquote

from .codebook import CodebookError, CodebookResolver
from .events import EventHub
from .journal import Journal
from .module_layout import (
    ModuleLayoutError,
    ModuleLayoutStore,
)
from .runtime import BoardRuntime
from .serial_transport import SerialTransport
from .state import DetectionError


ANNOTATION_PATH = re.compile(r"^/api/detections/([^/]+)/annotation$")
COLUMN_CORRECTION_PATH = re.compile(r"^/api/columns/([^/]+)/correction$")
APP_ROOT = Path(__file__).resolve().parents[2]


def build_handler(
    runtime: BoardRuntime,
    transport: SerialTransport,
    module_layout_store: ModuleLayoutStore | None = None,
):
    if module_layout_store is None:
        topology = runtime.snapshot().get("topology")
        fallback_count = int(topology["module_count"]) if topology else 2
        module_layout_store = ModuleLayoutStore(None, fallback_count=fallback_count)
    runtime.set_module_layout_provider(module_layout_store.snapshot)

    class ApiHandler(BaseHTTPRequestHandler):
        server_version = "WorldBlocks/0.1"

        def log_message(self, format: str, *args: object) -> None:
            return

        def _cors(self) -> None:
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")
            self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")

        def _json(self, status: int, data: dict[str, Any]) -> None:
            payload = json.dumps(data, ensure_ascii=False).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(payload)))
            self._cors()
            self.end_headers()
            self.wfile.write(payload)

        def _read_json(self) -> dict[str, Any]:
            length = int(self.headers.get("Content-Length", "0"))
            if length > 65536:
                raise ValueError("request body too large")
            raw = self.rfile.read(length)
            data = json.loads(raw.decode("utf-8")) if raw else {}
            if not isinstance(data, dict):
                raise ValueError("JSON body must be an object")
            return data

        def do_OPTIONS(self) -> None:
            self.send_response(HTTPStatus.NO_CONTENT)
            self._cors()
            self.end_headers()

        def do_GET(self) -> None:
            if self.path == "/api/health":
                self._json(HTTPStatus.OK, {"ok": True, "snapshot": runtime.snapshot()})
                return
            if self.path == "/api/snapshot":
                self._json(HTTPStatus.OK, runtime.snapshot())
                return
            if self.path == "/api/events":
                self._serve_events()
                return
            self._json(HTTPStatus.NOT_FOUND, {"ok": False, "error": "not found"})

        def do_POST(self) -> None:
            try:
                body = self._read_json()
                if self.path == "/api/command":
                    command = str(body.get("command") or "").strip()
                    transport.send(command)
                    self._json(HTTPStatus.ACCEPTED, {"ok": True, "command": command})
                    return

                if self.path == "/api/board/reset":
                    board_reset, command = runtime.request_board_reset()
                    transport.send(command)
                    self._json(
                        HTTPStatus.ACCEPTED,
                        {"ok": True, "board_reset": board_reset},
                    )
                    return

                if self.path == "/api/recovery/checkpoint":
                    checkpoint = runtime.create_recovery_checkpoint(
                        str(body.get("source") or "operator")
                    )
                    self._json(
                        HTTPStatus.CREATED,
                        {"ok": True, "checkpoint": checkpoint},
                    )
                    return

                if self.path == "/api/recovery/start":
                    recovery = runtime.request_recovery(
                        str(body.get("checkpoint_id") or "") or None
                    )
                    self._json(
                        HTTPStatus.ACCEPTED,
                        {"ok": True, "recovery": recovery},
                    )
                    return

                if self.path == "/api/recovery/stop":
                    recovery, command = runtime.cancel_recovery()
                    transport.send(command)
                    self._json(
                        HTTPStatus.ACCEPTED,
                        {"ok": True, "recovery": recovery},
                    )
                    return

                if self.path == "/api/module-layout":
                    proposed = module_layout_store.validate(body)
                    current = module_layout_store.snapshot()
                    count_changed = (
                        proposed["module_count"] != current["module_count"]
                    )
                    topology = runtime.snapshot().get("topology")
                    hardware_mismatch = (
                        topology is not None
                        and int(topology["module_count"]) != proposed["module_count"]
                    )
                    should_configure = count_changed or hardware_mismatch
                    layout = module_layout_store.save(proposed)
                    runtime.set_expected_module_count(
                        layout["module_count"],
                        reset_recovery=should_configure,
                    )
                    command = None
                    if should_configure:
                        configure = getattr(transport, "configure_modules", None)
                        if callable(configure):
                            command = configure(layout["module_count"])
                        else:
                            command = (
                                f"CONFIG {layout['module_count']} "
                                f"{layout['module_count'] * 2} 4"
                            )
                            transport.send(command)
                    runtime.event_hub.publish(
                        {"type": "module_layout", "snapshot": runtime.snapshot()}
                    )
                    self._json(
                        HTTPStatus.ACCEPTED if should_configure else HTTPStatus.OK,
                        {
                            "ok": True,
                            "layout": layout,
                            "reconfiguring": should_configure,
                            "command": command,
                        },
                    )
                    return

                match = ANNOTATION_PATH.match(self.path)
                if match:
                    detection_id = unquote(match.group(1))
                    annotation = runtime.annotate(
                        detection_id,
                        bool(body.get("incorrect", True)),
                        str(body.get("note") or ""),
                    )
                    self._json(HTTPStatus.CREATED, {"ok": True, "annotation": annotation})
                    return

                match = COLUMN_CORRECTION_PATH.match(self.path)
                if match:
                    stack = body.get("stack")
                    if not isinstance(stack, list) or not all(
                        isinstance(unit, str) for unit in stack
                    ):
                        raise ValueError("stack must be a list of unit names")
                    correction, command = runtime.request_correction(
                        unquote(match.group(1)), stack
                    )
                    transport.send(command)
                    self._json(
                        HTTPStatus.ACCEPTED,
                        {"ok": True, "correction": correction},
                    )
                    return
                self._json(HTTPStatus.NOT_FOUND, {"ok": False, "error": "not found"})
            except KeyError:
                self._json(HTTPStatus.NOT_FOUND, {"ok": False, "error": "detection not found"})
            except (
                CodebookError,
                DetectionError,
                ModuleLayoutError,
                ValueError,
                queue.Full,
            ) as exc:
                self._json(HTTPStatus.BAD_REQUEST, {"ok": False, "error": str(exc)})

        def _serve_events(self) -> None:
            self.send_response(HTTPStatus.OK)
            self.send_header("Content-Type", "text/event-stream")
            self.send_header("Cache-Control", "no-cache")
            self.send_header("Connection", "keep-alive")
            self._cors()
            self.end_headers()
            try:
                with runtime.event_hub.subscribe() as subscriber:
                    def send_state(event_type="snapshot"):
                        payload = json.dumps(
                            {"type": event_type, "snapshot": runtime.snapshot()},
                            ensure_ascii=False,
                        )
                        self.wfile.write(f"data: {payload}\n\n".encode("utf-8"))
                        self.wfile.flush()

                    send_state()
                    while True:
                        try:
                            event = subscriber.get(timeout=15)
                            # Send current full state, including recovery and connection changes.
                            # Queued events must not roll the website back to an older snapshot.
                            send_state(event.get("type", "snapshot"))
                        except queue.Empty:
                            send_state("heartbeat")
            except (BrokenPipeError, ConnectionResetError):
                return

    return ApiHandler


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="WorldBlocks event-driven board service")
    parser.add_argument("--serial-port", default="/dev/ttyACM0")
    parser.add_argument("--baudrate", type=int, default=115200)
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--http-port", type=int, default=8787)
    parser.add_argument("--database", default="runtime/worldblocks.sqlite")
    parser.add_argument(
        "--electrical-codebook",
        default=str(APP_ROOT / "config" / "electrical_codebook.json"),
    )
    parser.add_argument(
        "--type-mapping",
        default=str(APP_ROOT / "config" / "type_mapping.json"),
    )
    parser.add_argument("--modules", type=int, default=2)
    parser.add_argument(
        "--layer-rows",
        type=int,
        help="Rows in each logical layer; defaults to modules * 2",
    )
    parser.add_argument("--layer-cols", type=int, default=4)
    parser.add_argument(
        "--module-layout",
        default="runtime/module_layout.json",
        help="Persistent rectangular module-layout JSON",
    )
    return parser


def main() -> None:
    args = build_parser().parse_args()
    layer_rows = args.layer_rows if args.layer_rows is not None else args.modules * 2
    if args.modules not in (1, 2, 4, 6, 8):
        raise SystemExit("--modules must be one of 1, 2, 4, 6, or 8")
    if args.layer_cols != 4 or layer_rows != args.modules * 2:
        raise SystemExit("module sensing requires --layer-rows modules*2 and --layer-cols 4")
    try:
        codebook = CodebookResolver.load(args.electrical_codebook, args.type_mapping)
    except CodebookError as exc:
        raise SystemExit(f"invalid codebook configuration: {exc}") from exc
    try:
        module_layout_store = ModuleLayoutStore(
            args.module_layout, fallback_count=args.modules
        )
    except ModuleLayoutError as exc:
        raise SystemExit(str(exc)) from exc
    configured_module_count = module_layout_store.snapshot()["module_count"]
    layer_rows = configured_module_count * 2
    journal = Journal(args.database)
    hub = EventHub()
    runtime = BoardRuntime(journal, hub, codebook)
    runtime.set_expected_module_count(configured_module_count)
    transport = SerialTransport(
        args.serial_port,
        runtime.ingest_line,
        runtime.set_connection,
        baudrate=args.baudrate,
        module_count=configured_module_count,
        layer_rows=layer_rows,
        layer_cols=4,
    )
    runtime.set_command_sender(transport.send)
    server = ThreadingHTTPServer(
        (args.host, args.http_port),
        build_handler(runtime, transport, module_layout_store),
    )
    transport.start()
    print(f"WorldBlocks API listening on http://{args.host}:{args.http_port}")
    print(f"Serial transport: {args.serial_port} at {args.baudrate}")
    print(
        f"Codebook: {codebook.electrical_id}; semantic mapping: {codebook.mapping_id}"
    )
    print(
        f"Configured topology: {configured_module_count} modules, "
        f"4x{layer_rows} per layer"
    )
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
        transport.stop()
        journal.close()


if __name__ == "__main__":
    main()
