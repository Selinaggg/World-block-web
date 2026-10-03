import { pickTestPosition } from './randomPlacement.mjs';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useWorldBlocksSnapshot } from './api.js';
import LiveBoardScene from './LiveBoardScene.jsx';
import TerrainScene from './TerrainScene.jsx';
import { FALLBACK_TOPOLOGY, UNIT_RULES, terrainStats } from './terrainRules.js';
import { DEFAULT_MAP, emptyTestSnapshot, editTestBoard, sampleTestSnapshot, toTerrainSnapshot, TEST_PORTS, TEST_TOPOLOGY, layoutTestBoard } from './terrainInput.mjs';

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
  const [slot, setSlot] = useState(TEST_TOPOLOGY.columns[0].id);
  const [port,setPort]=useState('A0');
  const [code, setCode] = useState('C0');
  const toggleRef = useRef(null);
  const testSnapshot = useMemo(() => toTerrainSnapshot(testBoard, DEFAULT_MAP), [testBoard]);
  const snapshot = mode === 'test' ? testSnapshot : hardware.snapshot;
  const stats = useMemo(() => terrainStats(snapshot.board), [snapshot.board]);
  const faults = useMemo(() => Object.keys(snapshot.active_faults || {}), [snapshot.active_faults]);
  const latestColumnId = snapshot.detections?.[0]?.column_id || null;
  const testStack = testBoard.board[slot] || [];
  const history=useRef([]),[lastAdded,setLastAdded]=useState('');
  function commitBoard(next){history.current.push(testBoard);if(history.current.length>100)history.current.shift();setTestBoard(next);setLastAdded('');}
  function addRandom(){const id=pickTestPosition(testBoard);if(!id)return;commitBoard(editTestBoard(testBoard,id,'add',code));setSlot(id);setPort(TEST_TOPOLOGY.columns.find(c=>c.id===id).port);setLastAdded(`${code} added · ${id} · layer ${(testBoard.board[id]?.length||0)+1}`);}
  function undo(){const previous=history.current.pop();if(previous){setTestBoard(previous);setLastAdded('Last change undone');}}

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
          {mode==='test'&&<button onClick={()=>{setMode('hardware');setTestOpen(false);}}>Return to hardware</button>}
          <button ref={toggleRef} aria-expanded={testOpen} aria-controls="test-panel" onClick={() => {if(!testOpen)setMode('test');setTestOpen(!testOpen);}}>{testOpen ? 'Hide test view' : 'Test view'}</button>
        </div>
      </header>
      <section className="world-stage" aria-label="Real-time terrain">
        <TerrainScene snapshot={snapshot} latestColumnId={latestColumnId} dark />
        {!stats.occupied && <div className="empty-state"><span className="empty-symbol">⬡</span><h2>A world begins with a block.</h2><p>{mode === 'test' ? 'Add blocks in the test view.' : hardware.status === 'setup' ? 'Confirm Hardware settings above, then connect your board.' : 'Place a block on your board. The landscape responds instantly.'}</p></div>}
        {mode === 'hardware' && stats.occupied > 0 && !isLive && <p className="stale-notice">{STATUS[hardware.status]} · Showing the last received board</p>}
        <div className="stage-caption"><span>{mode === 'test' ? 'SIMULATED INPUT' : 'REAL-TIME LANDSCAPE'}</span><span>Drag to orbit · Scroll to zoom</span></div>
      </section>
      {testOpen && <aside id="test-panel" className="test-panel" aria-label="Test view">
        <div className="panel-heading"><div><span className="eyebrow">SIMULATED INPUT</span><h2>Test playground</h2></div><button aria-label="Close test view" onClick={closeTest}>×</button></div>
        <details className="monitor-toggle"><summary>Block monitor</summary><LiveBoardScene topology={snapshot.topology || FALLBACK_TOPOLOGY} moduleLayout={snapshot.module_layout} board={snapshot.board || {}}
          latestColumnId={latestColumnId} faultedColumnIds={faults} unitMeta={PHYSICAL_META} /></details>
        <div className="test-stats" aria-live="polite"><span>{stats.totalUnits} blocks</span><span>{stats.tallest} layers</span><span>{faults.length} issues</span></div>
        <div className="test-content">
          <>
            <p className="test-note">8 boards · 64 base + 64 offset positions. Edits update instantly.</p>
            <div className="unit-picker" role="group" aria-label="Unit type">{Object.entries(DEFAULT_MAP).map(([id,unit])=><button key={id} aria-pressed={code===id} onClick={()=>setCode(id)}>{UNIT_RULES[unit==='support'?'spacer':unit].short}<small>{id}</small></button>)}</div>
            <div className="edit-buttons"><button disabled={!TEST_TOPOLOGY.columns.some(c=>(testBoard.board[c.id]?.length||0)<TEST_TOPOLOGY.max_stack)} onClick={addRandom}>Add unit</button><button disabled={!history.current.length} onClick={undo}>Undo</button></div>
            <p className="random-feedback" role="status">{lastAdded||'Choose a unit, then add. Mostly central, occasionally scattered.'}</p>
            <details className="manual-test"><summary>Precise placement & board layout</summary>
            <label>Board layout<select value={testBoard.module_layout.grid_cols} onChange={e=>commitBoard(layoutTestBoard(testBoard,Number(e.target.value)))}>{[1,2,4,8].map(cols=><option key={cols} value={cols}>{8/cols} rows × {cols} columns</option>)}</select></label>
            <div className="board-map" role="group" aria-label="Select a board" style={{gridTemplateColumns:`repeat(${testBoard.module_layout.grid_cols},1fr)`}}>{TEST_PORTS.map(p=><button key={p} aria-pressed={port===p} onClick={()=>{setPort(p);setSlot(TEST_TOPOLOGY.columns.find(c=>c.port===p).id);}}>{p}<small>{TEST_TOPOLOGY.columns.filter(c=>c.port===p).reduce((sum,c)=>sum+(testBoard.board[c.id]?.length||0),0)} blocks</small></button>)}</div>
            <label>Position<select value={slot} onChange={event => setSlot(event.target.value)}>{TEST_TOPOLOGY.columns.filter(c=>c.port===port).map(c => <option key={c.id} value={c.id}>{c.layer} · row {c.row%2+1} / col {c.col+1}</option>)}</select></label>
            <div className="edit-buttons"><button disabled={testStack.length >= TEST_TOPOLOGY.max_stack} onClick={() => commitBoard(editTestBoard(testBoard, slot, 'add', code))}>Add block</button><button disabled={!testStack.length} onClick={() => commitBoard(editTestBoard(testBoard, slot, 'remove'))}>Remove top</button></div>
            <p className="stack-readout">Bottom → top: {testStack.length ? testStack.map(unit => 'C' + unit.slice(5)).join(' / ') : 'Empty'}</p>
            </details>
            <div className="utility-buttons"><button onClick={() => {commitBoard(layoutTestBoard(sampleTestSnapshot(),testBoard.module_layout.grid_cols));setPort('A0');setSlot(TEST_TOPOLOGY.columns[0].id);}}>Load sample</button><button onClick={() => commitBoard(layoutTestBoard(emptyTestSnapshot(),testBoard.module_layout.grid_cols))}>Clear test board</button></div>
          </>
          <div className="legend">{Object.entries(UNIT_RULES).map(([id, rule]) => <span key={id}><i style={{ background: PHYSICAL_META[id].color }} />{rule.short}</span>)}</div>
        </div>
      </aside>}
    </main>
  );
}
