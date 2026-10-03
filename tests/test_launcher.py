import json
import sys
import tempfile
import threading
import unittest
from http.server import ThreadingHTTPServer
from pathlib import Path
from unittest.mock import Mock, patch
from urllib.error import HTTPError
from urllib.request import Request, urlopen

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'launcher'))
from configuration import DEFAULT_MAP, choose_port, discover_demos, load_settings, save_settings, validate_settings
from start import HardwareSupervisor, portal_handler
from demo_server import integrated_handler


def settings():
    return dict(module_count=2, grid_cols=2, slots=['A0','A1'], code_map=DEFAULT_MAP.copy(),
                serial_port='auto', serial_number=None, confirmed=True)


class ConfigurationTests(unittest.TestCase):
    def test_discovery_includes_six_isolated_demos(self):
        demos = discover_demos()
        self.assertEqual([d['id'] for d in demos], ['demo0-terrain','demo1-basic','demo2-town','demo3-particle','demo4-ocean','demo5-architecture'])
        self.assertEqual(sum(d['status']=='ready' for d in demos), 6)
        self.assertEqual(demos[3]['entry'], '/dream.html')
        self.assertEqual(demos[3]['hardware'], 'pending')

    def test_settings_validate_and_roundtrip(self):
        for change in [dict(confirmed=False),dict(module_count=3),dict(grid_cols=3),dict(slots=['A0','A0']),dict(code_map={'C0':'water'}),dict(serial_port='/tmp/device')]:
            with self.subTest(change=change), self.assertRaises(ValueError):
                validate_settings({**settings(),**change})
        with tempfile.TemporaryDirectory() as path:
            runtime=Path(path)
            self.assertIsNone(load_settings(runtime))
            self.assertEqual(save_settings(runtime, settings()), load_settings(runtime))

    def test_usb_ambiguity_and_stable_identity(self):
        a=dict(device='/dev/cu.usbmodem1',vid=0x2341,serial_number='board-a')
        b=dict(device='/dev/cu.usbmodem2',vid=0x2341,serial_number='board-b')
        self.assertIsNone(choose_port([], settings())[0])
        self.assertEqual(choose_port([a],settings())[0],a['device'])
        self.assertIsNone(choose_port([a,b],settings())[0])
        selected={**settings(),'serial_port':a['device'],'serial_number':'board-a'}
        moved={**a,'device':'/dev/cu.usbmodem9'}
        self.assertEqual(choose_port([moved,b],selected)[0],moved['device'])
        self.assertIsNone(choose_port([b],selected)[0])

    def test_no_serial_process_until_user_has_configured(self):
        with tempfile.TemporaryDirectory() as path:
            supervisor=HardwareSupervisor(Path(path))
            supervisor.scan=lambda:[dict(device='/dev/cu.usbmodem1',vid=0x2341)]
            with patch('start.subprocess.Popen') as popen:
                supervisor.step()
                popen.assert_not_called()
                self.assertEqual(supervisor.state['status'],'setup')

    def test_unplug_replug_restarts_only_owned_service_without_reset(self):
        with tempfile.TemporaryDirectory() as path:
            supervisor=HardwareSupervisor(Path(path));supervisor.configure(settings())
            port=dict(device='/dev/cu.usbmodem1',vid=0x2341)
            supervisor.scan=lambda:[port]
            child=Mock();child.poll.return_value=None
            with patch('start.subprocess.Popen',return_value=child) as popen, patch('start.available_port',return_value=True), patch('start.read_json',side_effect=OSError):
                supervisor.step();self.assertEqual(popen.call_count,1)
                supervisor.step();self.assertEqual(popen.call_count,1)
                supervisor.scan=lambda:[];supervisor.step();child.terminate.assert_called_once()
                supervisor.scan=lambda:[port];supervisor.step();self.assertEqual(popen.call_count,2)
                command=popen.call_args.args[0];self.assertIn('--module-layout',command);self.assertNotIn('RESET',command)
                supervisor.stop_child()


class PortalTests(unittest.TestCase):
    def test_ready_pages_use_only_their_own_connection_bootstrap(self):
        root = Path(__file__).resolve().parents[1]
        for demo in discover_demos():
            if demo['status'] != 'ready':
                continue
            with self.subTest(demo=demo['id']):
                project = root / 'demos' / demo['id'] / demo['root']
                server = ThreadingHTTPServer(('127.0.0.1', 0), integrated_handler(project, 5180))
                thread = threading.Thread(target=server.serve_forever, daemon=True)
                thread.start()
                try:
                    entry = demo['entry'].split('#')[0] or '/'
                    with urlopen(f'http://127.0.0.1:{server.server_port}{entry}?_wb=refresh-check') as response:
                        page = response.read().decode()
                        self.assertEqual(response.headers.get('Cache-Control'), 'no-store')
                    self.assertEqual('/__hub/bridge.mjs' in page, demo['id'] in ('demo1-basic','demo2-town'))
                finally:
                    server.shutdown(); server.server_close(); thread.join()

    def test_catalog_settings_origin_check_and_private_files(self):
        with tempfile.TemporaryDirectory() as path:
            hardware=HardwareSupervisor(Path(path),False)
            server=ThreadingHTTPServer(('127.0.0.1',0),portal_handler(discover_demos(),hardware,{}))
            thread=threading.Thread(target=server.serve_forever,daemon=True);thread.start()
            base=f'http://127.0.0.1:{server.server_port}'
            try:
                with urlopen(base+'/api/hub/demos') as r:self.assertEqual(len(json.load(r)),6)
                with urlopen(base+'/demos/demo1-basic/') as r:self.assertIn(b'demo-frame',r.read())
                for route in ['/runtime/settings.json','/.env','/../README.md']:
                    with self.assertRaises(HTTPError) as error:urlopen(base+route)
                    self.assertEqual(error.exception.code,404)
                request=Request(base+'/api/hub/settings',data=json.dumps(settings()).encode(),headers={'Content-Type':'application/json','Origin':'http://elsewhere.invalid'})
                with self.assertRaises(HTTPError) as error:urlopen(request)
                self.assertEqual(error.exception.code,403)
                request.headers['Origin']=base
                with urlopen(request) as r:self.assertTrue(json.load(r)['settings']['confirmed'])
            finally:
                server.shutdown();server.server_close();thread.join()
