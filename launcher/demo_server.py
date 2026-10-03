"""Host an unchanged partner server, adding only shared input/bootstrap routes."""
import argparse
import importlib.util
import json
import sys
from http.server import ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import urlopen

ROOT = Path(__file__).resolve().parents[1]


def integrated_handler(project, hub_port):
    sys.path.insert(0, str(project / 'server'))
    spec = importlib.util.spec_from_file_location('partner_app', project / 'server/app.py')
    app = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(app)
    original = app.make_handler()

    class Handler(original):
        def end_headers(self):
            # HTML entry points change on every rebuild; hashed assets can keep
            # their normal cache behavior. This also covers standalone visits.
            route = urlsplit(self.path).path
            if route == '/' or route.endswith(('.html', '.htm')):
                self.send_header('Cache-Control', 'no-store')
            super().end_headers()

        def bytes_response(self, payload, content_type, status=200):
            self.send_response(status)
            self.send_header('Content-Type', content_type)
            self.send_header('Content-Length', str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)

        def do_GET(self):
            route = urlsplit(self.path).path
            if route == '/__hub/settings':
                try:
                    with urlopen(f'http://127.0.0.1:{hub_port}/api/hub/settings', timeout=3) as response:
                        return self.bytes_response(response.read(), 'application/json')
                except OSError:
                    return self.bytes_response(b'{"settings":null}', 'application/json', 503)
            shared_routes = {
                '/__hub/bridge.mjs': ROOT / 'shared/hardware-client/auto-connect.mjs',
                '/src/input/partner/worldblocks-client.mjs': ROOT / 'shared/hardware-client/worldblocks-client.mjs',
            }
            if route in shared_routes:
                return self.bytes_response(shared_routes[route].read_bytes(), 'text/javascript; charset=utf-8')
            # Only add bootstrap to the existing basic/town page. Dreamscape is
            # deliberately unchanged until its live-input integration is developed.
            if route in ('/', '/index.html') and getattr(app, 'HUB_AUTO_CONNECT', True):
                page = (project / 'dist/index.html').read_text()
                page = page.replace('</head>', '<script type="module" src="/__hub/bridge.mjs"></script></head>')
                return self.bytes_response(page.encode(), 'text/html; charset=utf-8')
            return super().do_GET()

    return Handler


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--project', type=Path, required=True)
    parser.add_argument('--port', type=int, required=True)
    parser.add_argument('--hub-port', type=int, required=True)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), integrated_handler(args.project.resolve(), args.hub_port))
    server.daemon_threads = True
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()

