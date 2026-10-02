"""One local portal, isolated demo servers, and one supervised USB service."""
import argparse
import json
import signal
import socket
import subprocess
import sys
import threading
import time
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit
from urllib.request import urlopen

from configuration import ROOT, DEFAULT_MAP, choose_port, discover_demos, load_settings, save_settings


def stop_process(process):
    if process is None or process.poll() is not None:
        return
    process.terminate()
    try:
        process.wait(timeout=5)
    except subprocess.TimeoutExpired:
        process.kill()
        process.wait()


def available_port(port):
    with socket.socket() as sock:
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        try:
            sock.bind(('127.0.0.1', port))
            return True
        except OSError:
            return False


def read_json(url, timeout=1):
    with urlopen(url, timeout=timeout) as response:
        return json.load(response)


class HardwareSupervisor:
    def __init__(self, runtime, enabled=True):
        self.runtime, self.enabled = runtime, enabled
        self.lock = threading.RLock()
        self.settings = load_settings(runtime)
        self.ports = []
        self.state = {'status': 'waiting', 'message': 'Waiting for hardware settings.'}
        self.process = None
        self.process_key = None
        self.stop_event = threading.Event()
        self.thread = threading.Thread(target=self.run, daemon=True)
        self.log = None

    def configure(self, data):
        with self.lock:
            self.settings = save_settings(self.runtime, data)
            return self.settings

    def snapshot(self):
        with self.lock:
            return {'settings': self.settings, 'ports': self.ports, **self.state}

    def scan(self):
        from serial.tools import list_ports
        return [dict(device=p.device, description=p.description, vid=p.vid, pid=p.pid,
                     serial_number=p.serial_number) for p in list_ports.comports()
                if p.vid is not None or 'usb' in p.device.lower()]

    def stop_child(self):
        stop_process(self.process)
        self.process = None
        self.process_key = None
        if self.log:
            self.log.close()
            self.log = None

    def step(self):
        ports = self.scan()
        with self.lock:
            self.ports = ports
            settings = self.settings
        if not self.enabled:
            self.state = {'status': 'disabled', 'message': 'Hardware disabled · Preview mode'}
            return
        if not settings:
            self.state = {'status': 'setup', 'message': 'Confirm your board layout and element meanings.'}
            return
        port, reason = choose_port(ports, settings)
        if not port:
            self.stop_child()
            self.state = {'status': 'waiting', 'message': reason}
            return
        key = (port, settings['module_count'], settings['grid_cols'], tuple(settings['slots']))
        if self.process_key != key or self.process is None or self.process.poll() is not None:
            self.stop_child()
            if not available_port(8787):
                self.state = {'status': 'attention', 'message': 'Port 8787 is in use. Close the previous hardware service.'}
                return
            layout = dict(module_count=settings['module_count'], grid_cols=settings['grid_cols'],
                          grid_rows=settings['module_count'] // settings['grid_cols'], slots=settings['slots'])
            layout_path = self.runtime / 'module_layout.json'
            layout_path.write_text(json.dumps(layout))
            self.log = (self.runtime / 'hardware.log').open('a')
            self.process = subprocess.Popen([
                sys.executable, '-B', '-m', 'backend.worldblocks', '--serial-port', port,
                '--modules', str(settings['module_count']), '--module-layout', str(layout_path),
                '--database', str(self.runtime / 'worldblocks.sqlite'),
            ], cwd=ROOT / 'hardware-service', stdout=self.log, stderr=subprocess.STDOUT)
            self.process_key = key
        self.state = {'status': 'connecting', 'message': f'Connecting {port}. Waiting for board data…', 'port': port}
        try:
            raw = read_json('http://127.0.0.1:8787/api/snapshot', timeout=.7)
            connected = raw.get('connected') is True
            topology = raw.get('topology')
            recovery = raw.get('recovery', {}).get('status')
            recovering = raw.get('hello', {}).get('recovery_mode') or recovery in ('starting', 'restoring', 'stopping')
            faults = raw.get('active_faults') or {}
            overheight = bool(topology) and any(len(stack) > topology.get('max_stack', 7) for stack in raw.get('board', {}).values())
            status = 'offline' if not connected else 'waiting' if not topology else 'recovering' if recovering else 'attention' if faults or overheight or recovery in ('attention', 'failed') else 'live'
            labels = {'offline': 'Hardware disconnected', 'waiting': 'USB connected. Waiting for board data',
                      'recovering': 'Recovering. Check the physical arrangement', 'attention': 'Some positions need attention', 'live': 'Hardware connected'}
            self.state = {'status': status, 'message': labels[status], 'port': port,
                          'module_count': topology.get('module_count') if topology else None,
                          'blocks': sum(len(stack) for stack in raw.get('board', {}).values())}
        except (OSError, ValueError):
            if self.process.poll() is not None:
                self.state = {'status': 'attention', 'message': 'Hardware service stopped. Check runtime/hardware.log.'}

    def run(self):
        try:
            while not self.stop_event.is_set():
                try:
                    self.step()
                except ImportError:
                    self.state = {'status': 'attention', 'message': 'Missing pyserial. Run the launcher to install dependencies.'}
                except Exception as error:
                    self.state = {'status': 'attention', 'message': f'Connection check failed: {error}'}
                self.stop_event.wait(1)
        finally:
            self.stop_child()

    def close(self):
        self.stop_event.set()
        if self.thread.is_alive():
            self.thread.join(timeout=10)


def portal_handler(demos, hardware, processes):
    class Handler(BaseHTTPRequestHandler):
        def log_message(self, *args):
            pass

        def respond(self, payload, content_type='application/json; charset=utf-8', status=200):
            if not isinstance(payload, bytes):
                payload = json.dumps(payload, ensure_ascii=False).encode()
            self.send_response(status)
            self.send_header('Content-Type', content_type)
            self.send_header('Content-Length', str(len(payload)))
            self.send_header('Cache-Control', 'no-store')
            self.send_header('X-Content-Type-Options', 'nosniff')
            self.end_headers()
            self.wfile.write(payload)

        def do_GET(self):
            path = urlsplit(self.path).path
            if path == '/api/hub/demos':
                return self.respond(demos)
            if path == '/api/hub/settings':
                return self.respond({'settings': hardware.snapshot()['settings'], 'default_map': DEFAULT_MAP})
            if path == '/api/hub/status':
                return self.respond({'app': 'worldblocks-hub-v1', 'workspace': str(ROOT),
                    'hardware': hardware.snapshot(), 'services': {key: p.poll() is None for key, p in processes.items()}})
            if path in ('/', '/index.html') or (path.startswith('/demos/') and path.strip('/').split('/')[-1] in {d['id'] for d in demos}):
                return self.respond((ROOT / 'portal/index.html').read_bytes(), 'text/html; charset=utf-8')
            assets = {'/portal/app.js': 'app.js', '/portal/style.css': 'style.css'}
            if path in assets:
                return self.respond((ROOT / 'portal' / assets[path]).read_bytes(),
                    'text/javascript; charset=utf-8' if path.endswith('.js') else 'text/css; charset=utf-8')
            return self.respond({'error': 'Not found'}, status=404)

        def do_POST(self):
            if urlsplit(self.path).path != '/api/hub/settings':
                return self.respond({'error': 'Not found'}, status=404)
            origin = self.headers.get('Origin')
            if not origin or urlsplit(origin).netloc != self.headers.get('Host'):
                return self.respond({'error': 'Save settings from the local WorldBlocks portal.'}, status=403)
            try:
                size = int(self.headers.get('Content-Length', 0))
                if not 0 < size <= 8192:
                    raise ValueError('Invalid settings payload size.')
                data = json.loads(self.rfile.read(size))
                settings = hardware.configure(data)
                return self.respond({'settings': settings})
            except (ValueError, TypeError, AttributeError) as error:
                return self.respond({'error': str(error)}, status=400)

    return Handler


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=5180)
    parser.add_argument('--no-browser', action='store_true')
    parser.add_argument('--no-hardware', action='store_true', help='Do not open any serial device')
    parser.add_argument('--no-mock', action='store_true')
    parser.add_argument('--runtime', type=Path, default=ROOT / 'runtime')
    args = parser.parse_args()
    url = f'http://127.0.0.1:{args.port}'
    if not available_port(args.port):
        try:
            existing = read_json(url + '/api/hub/status')
        except (OSError, ValueError):
            existing = {}
        if existing.get('app') == 'worldblocks-hub-v1' and existing.get('workspace') == str(ROOT):
            print(f'WorldBlocks 已经运行：{url}', flush=True)
            if not args.no_browser:
                webbrowser.open(url)
            return
        raise SystemExit(f'{args.port} 端口已被其他程序占用。')
    demos = discover_demos()
    ports = [d['port'] for d in demos if d['status'] == 'ready'] + ([] if args.no_mock else [8790])
    if args.port in ports or any(not available_port(p) for p in ports):
        raise SystemExit('Demo 或模拟服务端口冲突。请关闭旧服务后重试；不要同时运行旧的 npm run dev/mock。')
    runtime = args.runtime.resolve()
    runtime.mkdir(parents=True, exist_ok=True)
    hardware = HardwareSupervisor(runtime, not args.no_hardware)
    processes, logs = {}, []
    server = ThreadingHTTPServer(('127.0.0.1', args.port), portal_handler(demos, hardware, processes))
    server.daemon_threads = True
    def interrupted(*_):
        raise KeyboardInterrupt
    signal.signal(signal.SIGTERM, interrupted)
    try:
        for demo in demos:
            if demo['status'] != 'ready':
                continue
            project = ROOT / 'demos' / demo['id'] / demo['root']
            log = (runtime / f"{demo['id']}.log").open('a')
            logs.append(log)
            processes[demo['id']] = subprocess.Popen([sys.executable, '-B', str(ROOT / 'launcher/demo_server.py'),
                '--project', str(project), '--port', str(demo['port']), '--hub-port', str(args.port)],
                cwd=project, stdout=log, stderr=subprocess.STDOUT)
        if not args.no_mock:
            log = (runtime / 'mock.log').open('a')
            logs.append(log)
            processes['mock'] = subprocess.Popen([sys.executable, '-B', str(ROOT / 'shared/integration/mock/server.py')],
                                                cwd=ROOT, stdout=log, stderr=subprocess.STDOUT)
        deadline = time.monotonic() + 20
        pending = [d for d in demos if d['status'] == 'ready']
        while pending and time.monotonic() < deadline:
            for demo in pending[:]:
                if processes[demo['id']].poll() is not None:
                    raise RuntimeError(f"{demo['id']} 启动失败，请查看 runtime/{demo['id']}.log。")
                try:
                    read_json(f"http://127.0.0.1:{demo['port']}/api/config", timeout=.3)
                    pending.remove(demo)
                except (OSError, ValueError):
                    pass
            if pending:
                time.sleep(.15)
        if pending:
            raise RuntimeError('Demo 启动超时，请查看 runtime/ 中的日志。')
        hardware.thread.start()
        print(f'WorldBlocks: {url}\n首次使用请在首页确认设备设置。Control+C 停止全部服务。', flush=True)
        if not args.no_browser:
            webbrowser.open(url)
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n正在关闭本次启动的服务…', flush=True)
    finally:
        hardware.close()
        for process in processes.values():
            stop_process(process)
        for log in logs:
            log.close()
        server.server_close()


if __name__ == '__main__':
    main()
