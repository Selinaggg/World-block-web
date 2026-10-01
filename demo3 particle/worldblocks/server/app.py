"""Local WorldBlocks host and optional server-side generation gateway. No provider is assumed."""
import argparse
import json
import os
import sys
import mimetypes
from pathlib import Path
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError
from urllib.parse import urlparse

sys.path.insert(0, str(Path(__file__).resolve().parent))
from world_pipeline import Pipeline, public_config, FILES

ROOT = Path(__file__).resolve().parents[1] / 'dist'
MAX_REQUEST = 2 * 1024 * 1024
MAX_RESPONSE = 24 * 1024 * 1024

def make_handler(generation_url=None, api_key=None, pipeline_instance=None):
    upstream = generation_url if generation_url is not None else os.getenv('WORLDBLOCKS_GENERATION_URL', '')
    secret = api_key if api_key is not None else os.getenv('WORLDBLOCKS_GENERATION_API_KEY', '')
    pipeline = pipeline_instance if pipeline_instance is not None else Pipeline() if generation_url is None else None
    class Handler(SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(ROOT), **kwargs)
        def end_headers(self):
            self.send_header('Cache-Control', 'no-store')
            self.send_header('X-Content-Type-Options', 'nosniff')
            super().end_headers()
        def send_json(self, status, data):
            payload = json.dumps(data).encode()
            self.send_response(status)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(payload)))
            self.end_headers()
            self.wfile.write(payload)
        def do_GET(self):
            route = urlparse(self.path).path
            if route == '/api/config':
                return self.send_json(200, public_config() if pipeline else {'generation': {'configured': bool(upstream)}})
            if pipeline and route.startswith('/api/worlds/'):
                parts = route.strip('/').split('/')
                try:
                    job = pipeline.get(parts[2])
                    if len(parts) == 3:return self.send_json(200, job)
                    if len(parts) != 4 or parts[3] not in FILES:raise KeyError()
                    file = pipeline.output_root / parts[2] / parts[3]
                    if not file.is_file():raise KeyError()
                    data = file.read_bytes()
                    self.send_response(200)
                    self.send_header('Content-Type', mimetypes.guess_type(file.name)[0] or 'application/octet-stream')
                    self.send_header('Content-Length', str(len(data)))
                    self.end_headers();self.wfile.write(data);return
                except (KeyError, IndexError):return self.send_json(404, {'error': 'Unknown generation artifact.'})
            return super().do_GET()
        def do_POST(self):
            if pipeline and urlparse(self.path).path.startswith('/api/worlds'):
                return self.handle_world_request()
            if self.path != '/api/generate':
                return self.send_json(404, {'error': 'Unknown endpoint.'})
            origin = self.headers.get('Origin')
            if origin and urlparse(origin).netloc != self.headers.get('Host'):
                return self.send_json(403, {'error': 'Use the WorldBlocks page to generate.'})
            if not upstream:
                return self.send_json(503, {'error': 'Image generation is not connected. The handoff package contains no generation endpoint.'})
            try:
                size = int(self.headers.get('Content-Length', '0'))
                if size <= 0 or size > MAX_REQUEST:
                    return self.send_json(413, {'error': 'Invalid request size.'})
                payload = json.loads(self.rfile.read(size))
                state, analysis = payload['worldState'], payload['analysis']
                if state.get('version') != 1 or not isinstance(state.get('blocks'), list) or not state['blocks'] or not isinstance(analysis, dict):
                    raise ValueError('Invalid world state')
                if any(b.get('type') == 'unknown' for b in state['blocks']):
                    raise ValueError('Unknown module type')
            except (ValueError, KeyError, TypeError, AttributeError):
                return self.send_json(400, {'error': 'Provide a valid, nonempty WorldState and spatial analysis.'})
            headers = {'Content-Type': 'application/json'}
            if secret:
                headers['Authorization'] = 'Bearer ' + secret
            request = Request(upstream, data=json.dumps({'worldState': state, 'analysis': analysis}).encode(), headers=headers, method='POST')
            try:
                with urlopen(request, timeout=180) as response:
                    content = response.read(MAX_RESPONSE + 1)
                if len(content) > MAX_RESPONSE:
                    raise ValueError('Response too large')
                result = json.loads(content)
                image = result.get('imageUrl')
                if not isinstance(image, str) or not image.startswith(('https://', 'http://', 'data:image/png;base64,', 'data:image/jpeg;base64,', 'data:image/webp;base64,')):
                    raise ValueError('Missing imageUrl')
                # Return only the documented public result fields, never upstream diagnostics/secrets.
                return self.send_json(200, {'title': result.get('title', 'Your generated world'), 'description': result.get('description', ''), 'imageUrl': image})
            except (HTTPError, URLError, TimeoutError, ValueError, TypeError, AttributeError):
                return self.send_json(502, {'error': 'The image service did not return a usable result. Your arrangement is preserved; check the configured service.'})
        def handle_world_request(self):
            origin = self.headers.get('Origin')
            if origin and urlparse(origin).netloc != self.headers.get('Host'):
                return self.send_json(403, {'error': 'Use the WorldBlocks page to generate.'})
            parts = urlparse(self.path).path.strip('/').split('/')
            try:
                if len(parts) == 4 and parts[3] == 'video':
                    return self.send_json(409, {'error': 'Video generation is disabled to preserve credits. No video request was made.'})
                if len(parts) == 4 and parts[3] == 'retry':
                    return self.send_json(202, pipeline.retry(parts[2]))
                if parts != ['api', 'worlds']:
                    return self.send_json(404, {'error': 'Unknown endpoint.'})
                size = int(self.headers.get('Content-Length', '0'))
                if not 0 < size <= MAX_REQUEST:
                    return self.send_json(413, {'error': 'Invalid request size.'})
                payload = json.loads(self.rfile.read(size))
                return self.send_json(202, pipeline.start(payload))
            except (ValueError, KeyError, TypeError, AttributeError):
                return self.send_json(400, {'error': 'Invalid or incomplete arrangement. Check module types, positions and live input status.'})
            except RuntimeError as exc:
                return self.send_json(409, {'error': str(exc)})

    return Handler

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=5188)
    args = parser.parse_args()
    server = ThreadingHTTPServer(('127.0.0.1', args.port), make_handler())
    server.daemon_threads = True
    print(f'WorldBlocks: http://127.0.0.1:{args.port}/', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
