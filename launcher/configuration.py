"""Hub configuration only; sensing and electrical decoding remain unchanged."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COUNTS = (1, 2, 4, 6, 8)
MEANINGS = ('earth', 'fire', 'animal', 'human', 'water', 'support')
DEFAULT_MAP = dict(zip((f'C{i}' for i in range(6)), MEANINGS))


def validate_settings(data):
    count = data.get('module_count')
    cols = data.get('grid_cols')
    if type(count) is not int or count not in COUNTS:
        raise ValueError('Choose 1, 2, 4, 6 or 8 boards.')
    if type(cols) is not int or cols < 1 or count % cols:
        raise ValueError('The number of columns must divide the board count.')
    slots = data.get('slots')
    if not isinstance(slots, list) or len(slots) != count or sorted(slots) != [f'A{i}' for i in range(count)]:
        raise ValueError('Include each board from A0 to A(N-1) exactly once.')
    mapping = data.get('code_map')
    if not isinstance(mapping, dict) or set(mapping) != set(DEFAULT_MAP) or any(v not in MEANINGS for v in mapping.values()):
        raise ValueError('Choose a meaning for each code from C0 to C5.')
    if data.get('confirmed') is not True:
        raise ValueError('Check the physical layout and confirm the settings.')
    port = data.get('serial_port', 'auto')
    if not isinstance(port, str) or (port != 'auto' and not re.fullmatch(r'/dev/(?:cu|tty)\.[\w.\-]+|COM\d+', port)):
        raise ValueError('Choose a valid serial port.')
    identity = data.get('serial_number')
    if identity is not None and (not isinstance(identity, str) or len(identity) > 200):
        raise ValueError('Invalid serial device identity.')
    return dict(module_count=count, grid_cols=cols, slots=slots, code_map=mapping,
                serial_port=port, serial_number=identity, confirmed=True)


def load_settings(runtime):
    path = runtime / 'settings.json'
    if not path.exists():
        return None
    return validate_settings(json.loads(path.read_text()))


def save_settings(runtime, data):
    settings = validate_settings(data)
    runtime.mkdir(parents=True, exist_ok=True)
    temporary = runtime / 'settings.tmp'
    temporary.write_text(json.dumps(settings, ensure_ascii=False, indent=2) + '\n')
    temporary.replace(runtime / 'settings.json')
    return settings


def discover_demos(root=ROOT):
    demos, ports = [], set()
    for file in sorted((root / 'demos').glob('*/demo.json')):
        data = json.loads(file.read_text())
        if data.get('id') != file.parent.name or not re.fullmatch(r'demo\d+-[a-z0-9-]+', data['id']):
            raise ValueError(f'Invalid demo identity: {file}')
        if data.get('status') not in ('ready', 'planned'):
            raise ValueError(f'Invalid demo status: {file}')
        if data['status'] == 'ready':
            project = (file.parent / data['root']).resolve()
            if not project.is_relative_to(file.parent.resolve()) or not (project / 'server/app.py').is_file():
                raise ValueError(f'Missing local demo server: {file}')
            port = data['port']
            if type(port) is not int or not 1024 <= port <= 65535 or port in ports or port in (8787, 8790):
                raise ValueError(f'Invalid/duplicate demo port: {file}')
            if not re.fullmatch(r'/[a-zA-Z0-9_./-]*(?:#[a-zA-Z0-9_-]+)?', data['entry']) or '..' in data['entry']:
                raise ValueError(f'Invalid local demo entry: {file}')
            ports.add(port)
        demos.append(data)
    return sorted(demos, key=lambda d: (d.get('order', 99), d['id']))


def choose_port(ports, settings):
    """Never guess when multiple suitable boards are attached."""
    if settings['serial_port'] != 'auto':
        identity = settings.get('serial_number')
        matches = [p for p in ports if p.get('serial_number') == identity] if identity else [p for p in ports if p['device'] == settings['serial_port']]
    else:
        matches = [p for p in ports if p.get('vid') in (0x2341, 0x2A03, 0x1A86, 0x0403, 0x10C4)]
    if len(matches) == 1:
        return matches[0]['device'], None
    return None, 'Multiple devices found. Select a USB device in settings.' if len(matches) > 1 else 'Waiting for USB. Select an unrecognized device in settings.'

