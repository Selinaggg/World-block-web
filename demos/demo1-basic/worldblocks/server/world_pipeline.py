"""Captured arrangement -> partner terrain mask -> Gemini image; video is intentionally disabled."""
from __future__ import annotations
import copy
import importlib.util
import json
import math
import os
import threading
import uuid
from pathlib import Path
from partner import world_logic, image_api
from partner.animation_logic import build_animation_prompt
from partner.style_prompts import build_final_prompt, build_style_restyle_prompt, should_skip_pass2

ROOT = Path(__file__).resolve().parents[1]
PARTNER = ROOT.parent / 'WorldBlocks_Test'
TYPES = {'earth', 'water', 'fire', 'human', 'animal'}
FILES = {'control_map.png', 'generated_world.png', 'generated_world_pass1.png', 'layout.json', 'regions.json', 'prompt.txt', 'animation_prompt.txt', 'world_description.txt'}


def settings():
    # Read only the known project credential locations, never expose values to the browser.
    def value(name, default=''):
        return os.getenv(name) or image_api.read_env_value_from_file(ROOT / '.env', name) or image_api.read_env_value_from_file(PARTNER / '.env', name) or default
    try:
        sdk = importlib.util.find_spec('google.genai') is not None
    except ModuleNotFoundError:
        sdk = False
    return {'key': value('GEMINI_API_KEY'), 'model': value('GEMINI_MODEL', 'gemini-2.5-flash-image'), 'sdk': sdk}


def public_config():
    cfg = settings()
    return {'generation': {'pipeline': 'control-map-image-v1', 'configured': bool(cfg['key']) and cfg['sdk'],
            'reason': 'ready' if cfg['key'] and cfg['sdk'] else 'missing_key' if not cfg['key'] else 'missing_sdk',
            'styleUrl': '/assets/world-style.jpeg', 'twoPassDefault': True},
            'video': {'enabled': False, 'reason': 'Video generation is paused to preserve credits.'}}


def adapt_layout(payload):
    state, analysis = payload.get('worldState'), payload.get('analysis')
    if not isinstance(state, dict) or state.get('version') != 1 or state.get('inputMode') not in ('web', 'physical'):
        raise ValueError('Invalid WorldState.')
    blocks = state.get('blocks')
    if not isinstance(blocks, list) or not 1 <= len(blocks) <= 512 or not isinstance(analysis, dict):
        raise ValueError('Provide between 1 and 512 modules and their spatial analysis.')
    normalized = analysis.get('normalizedPositions', [])
    if not isinstance(normalized, list) or len(normalized) != len(blocks):
        raise ValueError('Every module needs a normalized position.')
    positions_by_id = {p['id']: p for p in normalized if isinstance(p, dict) and isinstance(p.get('id'), str)}
    if len(positions_by_id) != len(blocks):
        raise ValueError('Duplicate or missing position IDs.')
    if state.get('inputMode') == 'physical':
        info = state.get('input', {})
        if info.get('status') != 'live' or not info.get('connected') or info.get('issues'):
            raise ValueError('Reconnect and resolve physical input issues before generating.')
    ids, positions, pieces, slots, excluded = set(), [], {}, {}, []
    for b in blocks:
        if not isinstance(b, dict) or not isinstance(b.get('id'), str) or len(b['id']) > 512 or b['id'] in ids:
            raise ValueError('Invalid or duplicate module ID.')
        ids.add(b['id'])
        if b.get('type') not in TYPES | {'support'}:
            raise ValueError('Assign a known element to each unidentified module first.')
        p = positions_by_id.get(b['id']);level = b.get('heightLevel')
        if not p or not isinstance(level, int) or isinstance(level, bool) or not 1 <= level <= 128:
            raise ValueError('Invalid module height.')
        if any(not isinstance(p.get(k), (int, float)) or isinstance(p[k], bool) or not math.isfinite(p[k]) or not 0 <= p[k] <= 1 for k in ('x', 'z')):
            raise ValueError('Module positions must be within the base.')
        raw = b.get('position', {})
        if any(not isinstance(raw.get(k), (int, float)) or not math.isfinite(raw[k]) for k in ('x', 'y', 'z')):
            raise ValueError('Invalid module coordinates.')
        # Current X/Z horizontal -> partner X/Y horizontal. Level spacing is half a module.
        x, y, height = p['x'] * 3, p['z'] * 3, (level - 1) / 2
        physical = b.get('physical') if state['inputMode'] == 'physical' else None
        key = ('physical', physical['columnId']) if physical else ('manual', round(raw['x'], 4), round(raw['z'], 4))
        slot = slots.setdefault(key, len(slots))
        half = physical and physical.get('layer') == 'L0.5'
        index = physical.get('index', int(height)) if physical else height
        if not isinstance(index, (int, float)) or index < 0:
            raise ValueError('Invalid stack index.')
        pos = {'id': b['id'], 'slot': slot, 'hardware_layer': 'L0.5' if half else 'L0', 'kind': 'half' if half else 'base',
               'x': x, 'y': y, 'z': height, 'stack_index': index, 'row': y, 'col': x, 'n': 4,
               'compact': f'{b["type"]} ({x:.2f},{y:.2f},{height:.1f})', 'label': b['id']}
        if b['type'] == 'support':
            excluded.append({'id': b['id'], 'reason': 'Structural support, no terrain meaning', 'position': pos})
            continue
        positions.append(pos);pieces[b['id']] = b['type']
    if not pieces:
        raise ValueError('Add at least one terrain or life element. Supports alone do not define a world.')
    options = payload.get('options', {})
    if not isinstance(options, dict) or not isinstance(options.get('twoPass', True), bool):
        raise ValueError('Invalid image settings.')
    return pieces, positions, excluded


class Pipeline:
    def __init__(self, output_root=None, image_generate=None, control_builder=None):
        self.output_root = Path(output_root or ROOT / 'outputs')
        self.jobs = {};self.lock = threading.RLock();self.active = None
        self.image_generate = image_generate or image_api.generate_image_with_gemini
        self.control_builder = control_builder or world_logic.build_prompt_package

    def update(self, run_id, **fields):
        with self.lock:
            self.jobs[run_id].update(fields)
            self._save(run_id)

    def _save(self, run_id):
        job = self.jobs[run_id]
        (self.output_root / run_id / 'job.json').write_text(json.dumps(job, ensure_ascii=False, indent=2))

    def get(self, run_id):
        if not isinstance(run_id, str) or len(run_id) != 32 or any(c not in '0123456789abcdef' for c in run_id):
            raise KeyError('Unknown generation.')
        with self.lock:
            if run_id not in self.jobs:
                file = self.output_root / run_id / 'job.json'
                if not file.exists():raise KeyError('Unknown generation.')
                job = json.loads(file.read_text())
                if job['status'] == 'running':
                    job.update(status='error', stage='interrupted', error='The server restarted. Your saved control map is preserved; retry the image step.')
                self.jobs[run_id] = job
            return copy.deepcopy(self.jobs[run_id])

    def start(self, payload):
        pieces, positions, excluded = adapt_layout(payload)
        with self.lock:
            if self.active:raise RuntimeError('A world is already generating. Wait for it to finish.')
            run_id = uuid.uuid4().hex
            folder = self.output_root / run_id;folder.mkdir(parents=True)
            self.jobs[run_id] = {'id': run_id, 'status': 'running', 'stage': 'control', 'title': 'Your possible world',
                'description': '', 'twoPass': payload.get('options', {}).get('twoPass', True), 'videoEnabled': False,
                'controlMapUrl': None, 'imageUrl': None, 'error': None, 'excludedSupports': len(excluded)}
            snapshot = copy.deepcopy(payload)
            (folder / 'layout.json').write_text(json.dumps({'snapshot': snapshot, 'positions': positions, 'pieces': pieces, 'excluded': excluded},ensure_ascii=False,indent=2))
            self.active = run_id;self._save(run_id)
            threading.Thread(target=self._run, args=(run_id, pieces, positions), daemon=True).start()
            return self.get(run_id)

    def _run(self, run_id, pieces, positions):
        folder = self.output_root / run_id
        try:
            package = self.control_builder(pieces, positions)
            package['control_image'].save(folder / 'control_map.png')
            prompt = build_final_prompt(package['prompt'], pieces, package)
            (folder / 'prompt.txt').write_text(prompt)
            (folder / 'regions.json').write_text(json.dumps({'regions':package['regions'],'terrain_grammar':package['terrain_grammar']},ensure_ascii=False,indent=2))
            (folder / 'world_description.txt').write_text(package['description'])
            (folder / 'animation_prompt.txt').write_text(build_animation_prompt(package))
            (folder / 'package.json').write_text(json.dumps({k:v for k,v in package.items() if k!='control_image'},ensure_ascii=False))
            self.update(run_id, controlMapUrl=f'/api/worlds/{run_id}/control_map.png', description=package['description'],
                        terrainGrammar=package['terrain_grammar'], animationPromptUrl=f'/api/worlds/{run_id}/animation_prompt.txt')
            self._image(run_id, package)
        except Exception as exc:
            # SDK exceptions may echo credential-bearing requests. Never publish raw exceptions.
            self.update(run_id, status='error', error='Generation failed. The saved layout and any completed images are preserved. Retry the image step or check the local image-service configuration.', errorType=type(exc).__name__)
        finally:
            with self.lock:self.active = None

    def _image(self, run_id, package):
        cfg = settings();folder = self.output_root / run_id
        if not cfg['key'] or not cfg['sdk']:
            self.update(run_id,status='needs_configuration',stage='control_ready',error='Control Map is ready. Configure GEMINI_API_KEY and google-genai on the local server to generate the image.')
            return
        style = ROOT / 'dist/assets/world-style.jpeg'
        pass1 = folder / 'generated_world_pass1.png'
        self.update(run_id,stage='image',error=None)
        if not pass1.exists():
            self.image_generate(prompt=(folder/'prompt.txt').read_text(),image_paths=[folder/'control_map.png',style],output_path=pass1,api_key=cfg['key'],model=cfg['model'])
        self.update(run_id,pass1Url=f'/api/worlds/{run_id}/generated_world_pass1.png')
        target = folder / 'generated_world.png'
        if self.jobs[run_id]['twoPass'] and not should_skip_pass2(package):
            self.update(run_id,stage='style')
            self.image_generate(prompt=build_style_restyle_prompt(pass1,package),image_paths=[pass1,style],output_path=target,api_key=cfg['key'],model=cfg['model'])
        else:target.write_bytes(pass1.read_bytes())
        self.update(run_id,status='complete',stage='complete',imageUrl=f'/api/worlds/{run_id}/generated_world.png',error=None)

    def retry(self, run_id):
        with self.lock:
            job = self.get(run_id)
            if self.active:raise RuntimeError('A world is already generating.')
            if job['status'] == 'complete':return job
            folder = self.output_root / run_id
            if not (folder/'package.json').exists():raise ValueError('Control Map is incomplete. Generate a new world from your arrangement.')
            package = json.loads((folder/'package.json').read_text())
            self.active = run_id;self.update(run_id,status='running',stage='image',error=None)
            threading.Thread(target=self._retry, args=(run_id,package),daemon=True).start()
            return self.get(run_id)

    def _retry(self, run_id, package):
        try:self._image(run_id,package)
        except Exception as exc:self.update(run_id,status='error',error='Image generation failed. Your Control Map and completed first pass are preserved.',errorType=type(exc).__name__)
        finally:
            with self.lock:self.active = None
