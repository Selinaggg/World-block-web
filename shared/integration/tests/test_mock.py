import importlib.util
import json
import threading
import unittest
import urllib.request
from pathlib import Path
from http.server import ThreadingHTTPServer
spec = importlib.util.spec_from_file_location("mock_server", Path(__file__).resolve().parents[1] / "mock/server.py")
mock = importlib.util.module_from_spec(spec); spec.loader.exec_module(mock)

class MockTests(unittest.TestCase):
    def test_scenarios_are_independent_and_include_recovery(self):
        states = [mock.make_snapshot(i) for i in range(8)]
        self.assertEqual(states[0]["board"], {})
        self.assertEqual(states[2]["board"]["L0-r0-c0"], ["type_0", "type_3"])
        self.assertEqual(states[3]["board"]["L0.5-r2-c1"], ["type_3"])
        self.assertFalse(states[5]["connected"])
        self.assertEqual(states[6]["recovery"]["status"], "restoring")
        self.assertFalse(states[7]["hello"]["recovery_mode"])

    def test_http_and_initial_sse(self):
        server = ThreadingHTTPServer(("127.0.0.1", 0), mock.make_handler(.05))
        server.daemon_threads = True
        thread = threading.Thread(target=server.serve_forever, daemon=True); thread.start()
        base = f"http://127.0.0.1:{server.server_port}"
        try:
            with urllib.request.urlopen(base + "/api/snapshot", timeout=2) as response:
                self.assertEqual(len(json.load(response)["topology"]["columns"]), 32)
            with urllib.request.urlopen(base + "/api/events", timeout=2) as response:
                line = response.readline().decode()
                self.assertTrue(line.startswith("data: "))
                self.assertIn("snapshot", json.loads(line[6:]))
        finally: server.shutdown(); server.server_close(); thread.join()
