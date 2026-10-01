import importlib.util
import json
import threading
import tempfile
import unittest
from pathlib import Path
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.request import Request, urlopen
from urllib.error import HTTPError

spec = importlib.util.spec_from_file_location('worldblocks_server', Path(__file__).parents[1] / 'server/app.py')
app = importlib.util.module_from_spec(spec)
spec.loader.exec_module(app)

class GatewayTests(unittest.TestCase):
    def serve(self, handler):
        server = ThreadingHTTPServer(('127.0.0.1', 0), handler)
        server.daemon_threads = True
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        self.addCleanup(server.server_close)
        self.addCleanup(server.shutdown)
        return f'http://127.0.0.1:{server.server_port}'

    def test_unconfigured_is_explicit_and_static_assets_are_not_cached(self):
        base = self.serve(app.make_handler(generation_url=''))
        with urlopen(base + '/api/config') as response:
            self.assertEqual(json.load(response), {'generation': {'configured': False}})
        with urlopen(base + '/') as response:
            self.assertEqual(response.headers['Cache-Control'], 'no-store')
            self.assertIn(b'WorldBlocks', response.read())
        with self.assertRaises(HTTPError) as ctx:
            urlopen(Request(base + '/api/generate', data=b'{}', headers={'Content-Type': 'application/json'}))
        self.assertEqual(ctx.exception.code, 503)
        ctx.exception.close()

    def test_server_forwards_only_on_post_and_keeps_secret_server_side(self):
        calls = []
        class Upstream(BaseHTTPRequestHandler):
            def log_message(self, *args): pass
            def do_POST(self):
                calls.append((self.headers.get('Authorization'), json.loads(self.rfile.read(int(self.headers['Content-Length'])))))
                result = json.dumps({'title':'Fixture image', 'imageUrl':'https://example.com/fixture.png', 'privateDiagnostic':'must not forward'}).encode()
                self.send_response(200);self.send_header('Content-Length', str(len(result)));self.end_headers();self.wfile.write(result)
        upstream = self.serve(Upstream)
        base = self.serve(app.make_handler(generation_url=upstream, api_key='test-only-key'))
        with urlopen(base + '/api/config') as response:
            self.assertNotIn('test-only-key', response.read().decode())
        self.assertEqual(calls, [])
        payload={'worldState':{'version':1,'inputMode':'web','blocks':[{'id':'a','type':'water'}]},'analysis':{'total':1}}
        with urlopen(Request(base + '/api/generate', data=json.dumps(payload).encode(), headers={'Content-Type':'application/json'})) as response:
            result=json.load(response)
        self.assertEqual(result['imageUrl'], 'https://example.com/fixture.png')
        self.assertNotIn('privateDiagnostic', result)
        self.assertEqual(calls, [('Bearer test-only-key', payload)])
        with self.assertRaises(HTTPError) as ctx:
            urlopen(Request(base + '/api/generate', data=json.dumps(payload).encode(), headers={'Origin':'https://unrelated.invalid'}))
        self.assertEqual(ctx.exception.code,403)
        ctx.exception.close()
        self.assertEqual(len(calls),1)

    def test_pipeline_routes_serve_control_artifacts_and_video_is_disabled(self):
        from unittest.mock import patch
        from world_pipeline import Pipeline
        with tempfile.TemporaryDirectory() as folder:
            pipeline=Pipeline(folder)
            run='a'*32
            path=Path(folder)/run;path.mkdir()
            pipeline.jobs[run]={'id':run,'status':'complete','stage':'complete','imageUrl':None}
            (path/'control_map.png').write_bytes(b'fixture-map')
            (path/'package.json').write_text('private internal package')
            base=self.serve(app.make_handler(pipeline_instance=pipeline))
            with urlopen(base+'/api/worlds/'+run+'/control_map.png') as response:self.assertEqual(response.read(),b'fixture-map')
            for endpoint,expected in [('/api/worlds/'+run+'/package.json',404),('/api/worlds/'+run+'/video',409)]:
                with self.assertRaises(HTTPError) as ctx:
                    request=Request(base+endpoint,data=b'{}') if endpoint.endswith('/video') else base+endpoint
                    urlopen(request)
                self.assertEqual(ctx.exception.code,expected);ctx.exception.close()
            with self.assertRaises(HTTPError) as ctx:
                urlopen(Request(base+'/api/worlds',data=b'{}',headers={'Origin':'https://unrelated.invalid'}))
            self.assertEqual(ctx.exception.code,403);ctx.exception.close()
            with self.assertRaises(HTTPError) as ctx:
                urlopen(Request(base+'/api/worlds',data=b'{}'))
            self.assertEqual(ctx.exception.code,400);ctx.exception.close()
            self.assertIsNone(pipeline.active)

if __name__ == '__main__': unittest.main()
