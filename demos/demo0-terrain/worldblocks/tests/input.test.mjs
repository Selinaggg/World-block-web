import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { DEFAULT_MAP, CODEBOOK, emptyTestSnapshot, editTestBoard, toTerrainSnapshot, subscribeTerrain } from '../src/terrainInput.mjs';
import { displayCoordinate } from '../src/layout.js';
import { visibleLayers, topVisibleUnit } from '../src/terrainRules.js';

const hash = text => createHash('sha256').update(text).digest('hex');

test('original terrain generation and block geometry are preserved except the requested background', () => {
  const manifest = JSON.parse(readFileSync(new URL('../../source-hashes.json', import.meta.url)));
  for (const [name, expected] of Object.entries(manifest)) {
    let text = readFileSync(new URL('../src/' + name, import.meta.url), 'utf8');
    text = text.replace('latestColumnId, dark = false })', 'latestColumnId })')
      .replace('dark ? "#080808" : "#12aeb7"', '"#12aeb7"')
      .replace('dark ? "#080808" : "#12aeb7"', '"#12aeb7"')
      .replace('dark ? "#080808" : "#12b9bd"', '"#12b9bd"');
    if (name === 'LiveBoardScene.jsx') text = text.replace('new THREE.Color("#111111")', 'new THREE.Color("#ecebe7")');
    assert.equal(hash(text), expected, name);
  }
});

test('six physical codes keep the original terrain meanings and layer order', () => {
  const raw = emptyTestSnapshot(), id = raw.topology.columns[0].id;
  raw.board[id] = CODEBOOK.codes.map(c => c.unit);
  assert.deepEqual(toTerrainSnapshot(raw, DEFAULT_MAP).board[id], ['earth','fire','animal','human','water','spacer']);
  const mapped = toTerrainSnapshot(raw, { ...DEFAULT_MAP, C0:'water', C4:'earth' });
  assert.equal(mapped.board[id][0], 'water');
  assert.equal(mapped.board[id][4], 'earth');
  assert.equal(topVisibleUnit(['earth','spacer']), 'earth');
  assert.deepEqual(visibleLayers(['spacer','human']), [{ unit:'human', index:1 }]);
});

test('legacy aliases and neutral type names produce exactly the same terrain board', () => {
  const raw = emptyTestSnapshot(), id = raw.topology.columns[1].id;
  raw.board[id] = ['type_0','type_2','type_5'];
  const legacy = { ...raw, codebook: { codes: CODEBOOK.codes.map((c,i) => ({ ...c, unit:['earth','fire','animal','human','water','spacer'][i] })) }, board:{ [id]:['earth','animal','spacer'] } };
  assert.deepEqual(toTerrainSnapshot(legacy, DEFAULT_MAP).board, toTerrainSnapshot(raw, DEFAULT_MAP).board);
});

test('full replacements handle additions, two layers, top removal, moving and an empty board', () => {
  let raw = emptyTestSnapshot();
  const [a,b] = raw.topology.columns.map(c => c.id);
  raw = editTestBoard(raw,a,'add','C0');
  raw = editTestBoard(raw,a,'add','C2');
  let scene = toTerrainSnapshot(raw, DEFAULT_MAP);
  assert.deepEqual(scene.board[a], ['earth','animal']);
  raw = editTestBoard(raw,a,'remove');
  scene = toTerrainSnapshot(raw, DEFAULT_MAP, scene);
  assert.deepEqual(scene.board[a], ['earth']);
  raw = editTestBoard(editTestBoard(raw,a,'clear'),b,'add','C0');
  scene = toTerrainSnapshot(raw, DEFAULT_MAP, scene);
  assert.equal(scene.board[a], undefined);
  assert.deepEqual(scene.board[b], ['earth']);
  assert.deepEqual(toTerrainSnapshot(emptyTestSnapshot(),DEFAULT_MAP,scene).board, {});
});

test('board order and half-layer coordinates are preserved without applying offsets twice', () => {
  const raw = JSON.parse(readFileSync(new URL('../../../../shared/integration/fixtures/empty.snapshot.json', import.meta.url)));
  raw.module_layout.slots = ['A1','A0'];
  raw.board['L0.5-r2-c0'] = ['type_0','type_4'];
  const scene = toTerrainSnapshot(raw, DEFAULT_MAP);
  assert.equal(scene.topology, raw.topology);
  assert.equal(scene.module_layout, raw.module_layout);
  const column = scene.topology.columns.find(c => c.id === 'L0.5-r2-c0');
  assert.deepEqual(displayCoordinate(column,scene.module_layout,scene.topology),{ row:.5,col:.5,port:'A1' });
  assert.deepEqual(scene.board[column.id],['earth','water']);
});

test('unchanged heartbeats keep scene references stable; invalid types/layout do not invent terrain', () => {
  const raw = emptyTestSnapshot(), before = toTerrainSnapshot(raw, DEFAULT_MAP);
  const heartbeat = toTerrainSnapshot(structuredClone(raw), DEFAULT_MAP, before);
  for (const key of ['board','topology','module_layout','active_faults']) assert.equal(heartbeat[key],before[key]);
  assert.throws(() => toTerrainSnapshot({ ...raw, board:{ [raw.topology.columns[0].id]:['not-a-code'] } },DEFAULT_MAP));
  assert.throws(() => toTerrainSnapshot({ ...raw, module_layout:{ ...raw.module_layout, slots:['A9'] } },DEFAULT_MAP));
});

test('SSE updates immediately, marks disconnects, replaces on reconnect, and closes cleanly', () => {
  let events; const snapshots=[], statuses=[];
  class FakeEvents {
    constructor(url) { this.url=url;events=this; }
    close() { this.closed=true; }
    send(snapshot) { this.onmessage({ data:JSON.stringify({snapshot}) }); }
  }
  const close = subscribeTerrain({baseUrl:'http://127.0.0.1:8787',codeMap:DEFAULT_MAP,
    EventSourceClass:FakeEvents,onSnapshot:s=>snapshots.push(s),onStatus:s=>statuses.push(s)});
  try {
    const raw=emptyTestSnapshot(), id=raw.topology.columns[0].id;
    events.send(editTestBoard(raw,id,'add','C1'));
    assert.deepEqual(snapshots.at(-1).board[id],['fire']);
    events.onerror(); assert.equal(statuses.at(-1),'reconnecting');
    assert.deepEqual(snapshots.at(-1).board[id],['fire']);
    events.send(raw);assert.deepEqual(snapshots.at(-1).board,{});
    assert.equal(statuses.at(-1),'live');
    events.send({...raw,connected:false});assert.equal(statuses.at(-1),'offline');
    events.onmessage({data:'invalid'});assert.equal(statuses.at(-1),'invalid-data');
    assert.equal(snapshots.length,3);
  } finally { close(); }
  assert.equal(events.closed,true);
  events.send(emptyTestSnapshot());assert.equal(snapshots.length,3);
});
