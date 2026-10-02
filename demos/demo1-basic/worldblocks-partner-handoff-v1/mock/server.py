"""Synthetic HTTP/SSE source. No serial, hardware or third-party packages."""
import argparse
import copy
import json
import time
from pathlib import Path
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
BASE = json.loads((Path(__file__).resolve().parents[1] / "fixtures/empty.snapshot.json").read_text())
SCENARIOS = ("empty", "placed", "stacked", "moved", "attention", "offline", "recovering", "recovered")

def make_snapshot(index):
    state = copy.deepcopy(BASE)
    step = index % len(SCENARIOS)
    state["mock_scenario"] = SCENARIOS[step]
    if step >= 1:
        state["board"]["L0-r0-c0"] = ["type_0"]
    if step >= 2:
        state["board"]["L0-r0-c0"].append("type_3")
    if step >= 3:
        state["board"]["L0-r0-c0"].pop()
        state["board"]["L0.5-r2-c1"] = ["type_3"]
    if step == 4:
        state["active_faults"]["L0.5-r2-c1"] = {"reason": "synthetic_contact_issue"}
    if step == 5:
        state["connected"] = False
    if step == 6:
        state["recovery"]["status"] = "restoring"
        state["hello"]["recovery_mode"] = True
    return state

def make_handler(interval=2.0):
    started = time.monotonic()
    def current(): return make_snapshot(int((time.monotonic() - started) / interval))
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *args): pass
        def do_GET(self):
            if self.path not in ("/api/events", "/api/snapshot", "/api/health"):
                self.send_error(404); return
            self.send_response(200)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Cache-Control", "no-cache")
            if self.path != "/api/events":
                state = current()
                data = {"ok": True, "source": "mock", "snapshot": state} if self.path == "/api/health" else state
                payload = json.dumps(data).encode()
                self.send_header("Content-Type", "application/json")
                self.send_header("Content-Length", str(len(payload)))
                self.end_headers(); self.wfile.write(payload); return
            self.send_header("Content-Type", "text/event-stream")
            self.end_headers()
            try:
                while True:
                    payload = json.dumps({"type": "snapshot", "snapshot": current()})
                    self.wfile.write(f"data: {payload}\n\n".encode()); self.wfile.flush()
                    time.sleep(interval)
            except (BrokenPipeError, ConnectionResetError): pass
    return Handler

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=8790)
    args = parser.parse_args()
    server = ThreadingHTTPServer(("127.0.0.1", args.port), make_handler())
    server.daemon_threads = True
    print(f"MOCK input only: http://127.0.0.1:{args.port}", flush=True)
    try: server.serve_forever()
    except KeyboardInterrupt: pass
    finally: server.server_close()
