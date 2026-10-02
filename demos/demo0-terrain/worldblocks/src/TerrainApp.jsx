import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useWorldBlocksSnapshot } from './api.js';
import LiveBoardScene from './LiveBoardScene.jsx';
import TerrainScene from './TerrainScene.jsx';
import { FALLBACK_TOPOLOGY, UNIT_RULES, terrainStats } from './terrainRules.js';
import { DEFAULT_MAP, emptyTestSnapshot, editTestBoard, sampleTestSnapshot, toTerrainSnapshot } from './terrainInput.mjs';

const PHYSICAL_META = {
  earth: { color: '#a06d3f' }, water: { color: '#2f8fd3' }, fire: { color: '#d5482f' },
  spacer: { color: '#f4f0df' }, animal: { color: '#6eb64b' }, human: { color: '#9b62c7' }
};
const STATUS = {
  live: 'Live input', setup: 'Hardware setup needed', connecting: 'Connecting', offline: 'Board disconnected',
  waiting: 'Waiting for board', recovering: 'Restoring board', attention: 'Check board input',
  reconnecting: 'Reconnecting', 'invalid-data': 'Input needs attention', 'launcher-offline': 'Launcher unavailable'
};

export default function TerrainApp() {
  const hardware = useWorldBlocksSnapshot();
  const [testOpen, setTestOpen] = useState(false);
  const [mode, setMode] = useState('hardware');
  const [testBoard, setTestBoard] = useState(emptyTestSnapshot);
  const [slot, setSlot] = useState(FALLBACK_TOPOLOGY.columns[0].id);
  const [code, setCode] = useState('C0');
  const toggleRef = useRef(null);
  const testSnapshot = useMemo(() => toTerrainSnapshot(testBoard, DEFAULT_MAP), [testBoard]);
  const snapshot = mode === 'test' ? testSnapshot : hardware.snapshot;
  const stats = useMemo(() => terrainStats(snapshot.board), [snapshot.board]);
  const faults = useMemo(() => Object.keys(snapshot.active_faults || {}), [snapshot.active_faults]);
  const latestColumnId = snapshot.detections?.[0]?.column_id || null;
  const testStack = testBoard.board[slot] || [];
  const isLive = mode === 'hardware' && hardware.status === 'live';

  function closeTest() { setTestOpen(false); toggleRef.current?.focus(); }
  useEffect(() => {
    function escape(event) { if (event.key === 'Escape' && testOpen) closeTest(); }
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [testOpen]);

  return (
    <main className="terrain-shell">
      <header className="terrain-toolbar">
        <div className="wordmark"><span>00</span><h1>TERRAIN</h1></div>
        <div className="controls">
          <span className={`input-status ${isLive ? 'live' : ''}`} role="status"><i />{mode === 'test' ? 'Test board · simulated' : STATUS[hardware.status]}</span>
          <button ref={toggleRef} aria-expanded={testOpen} aria-controls="test-panel" onClick={() => setTestOpen(!testOpen)}>{testOpen ? 'Hide test view' : 'Test view'}</button>
        </div>
      </header>
      <section className="world-stage" aria-label="Real-time terrain">
        <TerrainScene snapshot={snapshot} latestColumnId={latestColumnId} dark />
        {!stats.occupied && <div className="empty-state"><span className="empty-symbol">⬡</span><h2>A world begins with a block.</h2><p>{mode === 'test' ? 'Add blocks in the test view.' : hardware.status === 'setup' ? 'Confirm Hardware settings above, then connect your board.' : 'Place a block on your board. The landscape responds instantly.'}</p></div>}
        {mode === 'hardware' && stats.occupied > 0 && !isLive && <p className="stale-notice">{STATUS[hardware.status]} · Showing the last received board</p>}
        <div className="stage-caption"><span>{mode === 'test' ? 'SIMULATED INPUT' : 'REAL-TIME LANDSCAPE'}</span><span>Drag to orbit · Scroll to zoom</span></div>
      </section>
      {testOpen && <aside id="test-panel" className="test-panel" aria-label="Test view">
        <div className="panel-heading"><div><span className="eyebrow">INPUT MONITOR</span><h2>Block view</h2></div><button aria-label="Close test view" onClick={closeTest}>×</button></div>
        <div className="source-switch" aria-label="Input source">
          <button aria-pressed={mode === 'hardware'} onClick={() => setMode('hardware')}>Hardware</button>
          <button aria-pressed={mode === 'test'} onClick={() => setMode('test')}>Test board</button>
        </div>
        <LiveBoardScene topology={snapshot.topology || FALLBACK_TOPOLOGY} moduleLayout={snapshot.module_layout} board={snapshot.board || {}}
          latestColumnId={latestColumnId} faultedColumnIds={faults} unitMeta={PHYSICAL_META} />
        <div className="test-stats" aria-live="polite"><span>{stats.totalUnits} blocks</span><span>{stats.tallest} layers</span><span>{faults.length} issues</span></div>
        <div className="test-content">
          {mode === 'test' ? <>
            <p className="test-note">Local simulation · edits update the terrain instantly.</p>
            <label>Position<select value={slot} onChange={event => setSlot(event.target.value)}>{FALLBACK_TOPOLOGY.columns.map(c => <option key={c.id} value={c.id}>{c.id}</option>)}</select></label>
            <label>Block<select value={code} onChange={event => setCode(event.target.value)}>{Object.entries(DEFAULT_MAP).map(([id, unit]) => <option key={id} value={id}>{id} · {UNIT_RULES[unit === 'support' ? 'spacer' : unit].short}</option>)}</select></label>
            <div className="edit-buttons"><button disabled={testStack.length >= FALLBACK_TOPOLOGY.max_stack} onClick={() => setTestBoard(raw => editTestBoard(raw, slot, 'add', code))}>Add block</button><button disabled={!testStack.length} onClick={() => setTestBoard(raw => editTestBoard(raw, slot, 'remove'))}>Remove top</button></div>
            <p className="stack-readout">Bottom → top: {testStack.length ? testStack.map(unit => 'C' + unit.slice(5)).join(' / ') : 'Empty'}</p>
            <div className="utility-buttons"><button onClick={() => setTestBoard(sampleTestSnapshot())}>Load sample</button><button onClick={() => setTestBoard(emptyTestSnapshot())}>Clear test board</button></div>
          </> : <p className="test-note">A live reconstruction of your physical blocks. Place, stack or remove a block to update the landscape.</p>}
          <div className="legend">{Object.entries(UNIT_RULES).map(([id, rule]) => <span key={id}><i style={{ background: PHYSICAL_META[id].color }} />{rule.short}</span>)}</div>
        </div>
      </aside>}
    </main>
  );
}
