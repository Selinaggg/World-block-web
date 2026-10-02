export const CONTRACT_VERSION = "worldblocks-input-v1";
const KNOWN_CODES = new Set(["C0", "C1", "C2", "C3", "C4", "C5"]);

// All coordinates are logical grid units, not millimetres.
export function normalizeSnapshot(raw, { source = "hardware" } = {}) {
  if (!raw || typeof raw !== "object" || !["hardware", "mock"].includes(source)) {
    throw new Error("Invalid snapshot or source");
  }
  const topology = raw.topology;
  const mapping = new Map((raw.codebook?.codes || []).map(c => [c.unit, c.id]));
  const issues = [];
  const count = topology?.module_count || 0;
  const layout = raw.module_layout || {
    module_count: count, grid_rows: count, grid_cols: 1,
    slots: Array.from({ length: count }, (_, i) => `A${i}`)
  };
  if (topology && (!Number.isInteger(layout.grid_cols) || layout.grid_cols < 1
      || layout.module_count !== count || layout.grid_rows * layout.grid_cols !== count
      || !Array.isArray(layout.slots) || layout.slots.length !== count
      || new Set(layout.slots).size !== count)) {
    throw new Error("Invalid or mismatched module layout; do not guess coordinates");
  }
  const columns = (topology?.columns || []).map(column => {
    const id = column.id;
    const port = column.port || `A${column.module}`;
    const slot = layout.slots.indexOf(port);
    if (slot < 0 || !["L0", "L0.5"].includes(column.layer)) {
      throw new Error(`Unmapped position ${id}`);
    }
    const offset = column.layer === "L0.5" ? 0.5 : 0;
    const x = (slot % layout.grid_cols) * 4 + column.col + offset;
    const z = Math.floor(slot / layout.grid_cols) * 2 + (column.row % 2) + offset;
    let unknown = false;
    const stack = (raw.board?.[id] || []).map((unit, index) => {
      const code = mapping.get(unit);
      const code_id = KNOWN_CODES.has(code) ? code : null;
      if (!code_id) unknown = true;
      return { slot_key: `${id}:${index}`, code_id, index, position: { x, y: index + offset, z } };
    });
    const fault = raw.active_faults?.[id];
    if (fault || unknown) issues.push({ column_id: id, reason: unknown ? "unknown_type" : "hardware_attention" });
    return { id, port, layer: column.layer, enabled: column.enabled !== false,
      position: { x, y: offset, z }, stack,
      needs_attention: Boolean(fault || unknown), beyond_validated_height: stack.length > topology.max_stack };
  });
  const connected = raw.connected === true;
  const recovering = Boolean(raw.hello?.recovery_mode)
    || ["starting", "restoring", "stopping"].includes(raw.recovery?.status);
  const status = !connected ? "offline" : !topology ? "waiting"
    : recovering ? "recovering" : issues.length || ["attention", "failed"].includes(raw.recovery?.status)
      ? "attention" : "live";
  return { contract: CONTRACT_VERSION, source, connected, status,
    boot_id: topology?.boot_id || raw.hello?.boot_id || null,
    topology_id: topology?.topology_id || null,
    module_count: count, validated_max_stack: topology?.max_stack ?? null,
    columns, issues };
}

export function connectWorldBlocks({ baseUrl, source = "hardware", onState,
  onConnection = () => {}, onError = () => {}, watchdogMs = 45000 }) {
  if (!baseUrl || typeof onState !== "function") throw new Error("baseUrl and onState are required");
  const base = baseUrl.replace(/\/$/, "");
  let events, timer, stopped = false, lastMessage = Date.now();
  function open() {
    if (stopped) return;
    events?.close();
    lastMessage = Date.now();
    onConnection("connecting");
    events = new EventSource(`${base}/api/events`);
    events.onmessage = event => {
      lastMessage = Date.now();
      let state;
      try {
        const message = JSON.parse(event.data);
        if (!message.snapshot) return;
        state = normalizeSnapshot(message.snapshot, { source });
      } catch (error) { onError(error); onConnection("invalid-data"); return; }
      onConnection("live"); // Transport is live; state.status describes the hardware.
      onState(state);
    };
    events.onerror = () => { if (!stopped) onConnection("reconnecting"); };
  }
  open();
  timer = setInterval(() => {
    if (Date.now() - lastMessage > watchdogMs) open();
  }, Math.min(5000, watchdogMs));
  return { reconnect: open, close() {
    stopped = true; events?.close(); clearInterval(timer); onConnection("stopped");
  } };
}
