import json
import unittest
from types import SimpleNamespace
from backend.worldblocks.events import EventHub
from backend.worldblocks.server import build_handler

class Runtime:
    def __init__(self):
        self.event_hub = EventHub(); self.calls = 0
    def set_module_layout_provider(self, provider): pass
    def snapshot(self):
        # build_handler itself reads a snapshot when no layout store is passed.
        self.calls += 1
        if self.calls == 1:
            assert len(self.event_hub._subscribers) == 1
            self.event_hub.publish({'type': 'state', 'snapshot': {'connected': False, 'version': 0}})
        return {'connected': True, 'version': self.calls}

class Output:
    def __init__(self): self.messages = []
    def write(self, data): self.messages.append(json.loads(data.decode()[6:].strip()))
    def flush(self):
        if len(self.messages) == 2: raise BrokenPipeError()

class SseTests(unittest.TestCase):
    def test_subscribe_before_initial_and_emit_current_not_queued_old_state(self):
        runtime = Runtime()
        handler_class = build_handler(runtime, None, SimpleNamespace(snapshot=lambda: {}))
        handler = handler_class.__new__(handler_class)
        handler.send_response = lambda *_: None
        handler.send_header = lambda *_: None
        handler.end_headers = lambda: None
        handler.wfile = Output()
        handler._serve_events()
        self.assertEqual([m['snapshot']['version'] for m in handler.wfile.messages], [1, 2])
        self.assertEqual(handler.wfile.messages[1]['type'], 'state')
        self.assertEqual(len(runtime.event_hub._subscribers), 0)
