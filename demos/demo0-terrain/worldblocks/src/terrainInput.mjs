import { normalizeSnapshot } from '../../../../shared/hardware-client/worldblocks-client.mjs';
import { FALLBACK_TOPOLOGY, UNIT_RULES } from './terrainRules.js';

export const DEFAULT_MAP = Object.freeze({ C0: 'earth', C1: 'fire', C2: 'animal', C3: 'human', C4: 'water', C5: 'support' });
export const CODEBOOK = { codes: Object.keys(DEFAULT_MAP).map((id, index) => ({ id, unit: `type_${index}` })) };

export const TEST_PORTS=Array.from({length:8},(_,i)=>`A${i}`);
export const TEST_TOPOLOGY={...FALLBACK_TOPOLOGY,module_count:8,tracking_capacity:128,
  layers:FALLBACK_TOPOLOGY.layers.map(layer=>({...layer,rows:16})),
  columns:TEST_PORTS.flatMap((port,module)=>FALLBACK_TOPOLOGY.columns.map(c=>({...c,
    id:`${c.layer}-r${module*2+c.row}-c${c.col}`,row:module*2+c.row,module,port})))
};
export function layoutTestBoard(raw,cols){
  if(![1,2,4,8].includes(cols))return raw;
  return {...raw,module_layout:{...raw.module_layout,grid_cols:cols,grid_rows:8/cols}};
}

export function emptyTestSnapshot() {
  return { connected: true, topology: TEST_TOPOLOGY, board: {}, codebook: CODEBOOK,
    module_layout: { module_count: 8, grid_rows: 4, grid_cols: 2, slots: TEST_PORTS }, active_faults: {}, detections: [] };
}

export function toTerrainSnapshot(raw, codeMap, previous = null) {
  const input = normalizeSnapshot(raw);
  const board = {};
  for (const column of input.columns) {
    if (!column.enabled || !column.stack.length) continue;
    board[column.id] = column.stack.map(block => {
      const meaning = codeMap[block.code_id];
      const unit = meaning === 'support' ? 'spacer' : meaning;
      if (!block.code_id || !UNIT_RULES[unit]) throw new Error('Unknown block code. Check the input mapping.');
      return unit;
    });
  }
  // Preserve IDs, layout and layer order: these also seed the original meshes.
  // Do not feed already-offset coordinates to layout.js.
  const result = { ...raw, board, inputStatus: input.status };
  // Heartbeats must not rebuild geometry or reset a user's camera zoom.
  for (const key of ['board', 'topology', 'module_layout', 'active_faults']) {
    if (previous && JSON.stringify(previous[key]) === JSON.stringify(result[key])) result[key] = previous[key];
  }
  return result;
}

export function editTestBoard(raw, columnId, action, code = 'C0') {
  const column = raw.topology.columns.find(item => item.id === columnId && item.enabled !== false);
  if (!column) return raw;
  const stack = [...(raw.board[columnId] || [])];
  if (action === 'add' && CODEBOOK.codes.some(item => item.id === code) && stack.length < raw.topology.max_stack) {
    stack.push(CODEBOOK.codes.find(item => item.id === code).unit);
  } else if (action === 'remove') stack.pop();
  else if (action === 'clear') stack.length = 0;
  const board = { ...raw.board };
  if (stack.length) board[columnId] = stack;
  else delete board[columnId];
  return { ...raw, board, detections: [{ column_id: columnId }] };
}

export function sampleTestSnapshot() {
  const raw = emptyTestSnapshot();
  const stacks = [
    ['C0', 'C3'], ['C0', 'C0', 'C2'], ['C2'], ['C2', 'C2'],
    ['C0', 'C4'], ['C0', 'C3'], ['C1', 'C1'], ['C1'],
    ['C0'], ['C0', 'C2'], [], [],
    ['C0', 'C3'], ['C0', 'C4'], ['C2'], ['C1', 'C3']
  ];
  return { ...raw, board: Object.fromEntries(raw.topology.columns.map((c, i) =>
    [c.id, (stacks[i]||[]).map(code => CODEBOOK.codes.find(item => item.id === code).unit)])) };
}

// SSE starts with a full snapshot and sends full heartbeats. No parallel GET
// can overwrite a more recent event. This subscription never writes to a device.
export function subscribeTerrain({ baseUrl, codeMap, onSnapshot, onStatus, EventSourceClass = globalThis.EventSource }) {
  let stream, stopped = false, lastMessage = Date.now(), previous = null;
  function open() {
    if (stopped) return;
    stream?.close();
    lastMessage = Date.now();
    onStatus('connecting');
    stream = new EventSourceClass(`${baseUrl}/api/events`);
    stream.onmessage = event => {
      if (stopped) return;
      lastMessage = Date.now();
      try {
        const message = JSON.parse(event.data);
        if (!message.snapshot) return;
        previous = toTerrainSnapshot(message.snapshot, codeMap, previous);
        onSnapshot(previous);
        onStatus(previous.inputStatus);
      } catch {
        onStatus('invalid-data');
      }
    };
    stream.onerror = () => { if (!stopped) onStatus('reconnecting'); };
  }
  open();
  const timer = setInterval(() => { if (Date.now() - lastMessage > 45000) open(); }, 5000);
  return () => { stopped = true; stream.close(); clearInterval(timer); };
}
