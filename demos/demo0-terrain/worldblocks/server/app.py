"""Local static host for the prebuilt terrain app; no generation or device writes."""
import json
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit

DIST = Path(__file__).resolve().parents[1] / 'dist'
HUB_AUTO_CONNECT = False


def make_handler():
    class Handler(SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(DIST), **kwargs)

        def do_GET(self):
            if urlsplit(self.path).path == '/api/config':
                payload = json.dumps({'demo': 'terrain', 'realtime': True}).encode()
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Content-Length', str(len(payload)))
                self.end_headers()
                self.wfile.write(payload)
                return
            return super().do_GET()

    return Handler


if __name__ == '__main__':
    ThreadingHTTPServer(('127.0.0.1', 5190), make_handler()).serve_forever()
