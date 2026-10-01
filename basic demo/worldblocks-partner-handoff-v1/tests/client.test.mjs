import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { normalizeSnapshot, connectWorldBlocks } from "../client/worldblocks-client.mjs";
const fixture = () => JSON.parse(readFileSync(new URL("../fixtures/empty.snapshot.json", import.meta.url)));

test("all positions, dynamic code mapping and offset coordinates", () => {
  const raw = fixture(); raw.board["L0.5-r2-c1"] = ["type_0", "type_5", "type_3"];
  const state = normalizeSnapshot(raw, { source: "mock" });
  assert.equal(state.columns.length, 32); assert.equal(state.source, "mock");
  const c = state.columns.find(c => c.id === "L0.5-r2-c1");
  assert.deepEqual(c.position, { x: 5.5, y: 0.5, z: 0.5 });
  assert.deepEqual(c.stack.map(b => b.code_id), ["C0", "C5", "C3"]);
  assert.deepEqual(c.stack[2].position, { x: 5.5, y: 2.5, z: 0.5 });
  assert.equal(state.status, "live");
});
test("layout swaps preserve identity while moving display coordinates", () => {
  const raw = fixture(); const before = normalizeSnapshot(raw);
  raw.module_layout.slots.reverse(); const after = normalizeSnapshot(raw);
  assert.equal(after.columns[0].id, before.columns[0].id);
  assert.equal(after.columns[0].position.x, before.columns[0].position.x + 4);
});
test("disconnection and recovery remain separate from retained content", () => {
  const raw = fixture(); raw.board["L0-r0-c0"] = ["type_1"];
  raw.connected = false; let state = normalizeSnapshot(raw);
  assert.equal(state.status, "offline"); assert.equal(state.columns[0].stack[0].code_id, "C1");
  raw.connected = true; raw.recovery.status = "restoring";
  assert.equal(normalizeSnapshot(raw).status, "recovering");
});
test("unknown types and faulted columns are not silently cleared", () => {
  const raw = fixture(); raw.board["L0-r0-c0"] = ["invalid", "type_2"];
  const state = normalizeSnapshot(raw);
  assert.equal(state.status, "attention"); assert.equal(state.columns[0].stack.length, 2);
  assert.equal(state.columns[0].stack[0].code_id, null);
  raw.board["L0-r0-c0"] = ["type_2"]; raw.active_faults["L0-r0-c0"] = { reason: "contact" };
  assert.equal(normalizeSnapshot(raw).columns[0].needs_attention, true);
});
test("partial startup and invalid layout", () => {
  assert.equal(normalizeSnapshot({ connected: true }).status, "waiting");
  const raw = fixture(); raw.module_layout.slots = ["A0", "A0"];
  assert.throws(() => normalizeSnapshot(raw));
});
test("SSE consumes complete states; reconnect and cleanup close old streams", () => {
  const old = globalThis.EventSource; const streams = [];
  globalThis.EventSource = class {
    constructor(url) { this.url = url; streams.push(this); }
    close() { this.closed = true; }
  };
  let connection;
  try {
    const states = []; const links = []; const errors = [];
    connection = connectWorldBlocks({ baseUrl: "http://localhost:8790/", source: "mock",
      onState: s => states.push(s), onConnection: s => links.push(s), onError: e => errors.push(e) });
    assert.equal(streams[0].url, "http://localhost:8790/api/events");
    streams[0].onmessage({ data: JSON.stringify({ snapshot: fixture() }) });
    assert.equal(states.length, 1); assert.equal(links.at(-1), "live");
    streams[0].onerror(); assert.equal(links.at(-1), "reconnecting");
    connection.reconnect(); assert.equal(streams[0].closed, true);
    streams[1].onmessage({ data: "broken-json" }); assert.equal(errors.length, 1);
    connection.close(); assert.equal(streams[1].closed, true); assert.equal(links.at(-1), "stopped");
  } finally { connection?.close(); globalThis.EventSource = old; }
});
