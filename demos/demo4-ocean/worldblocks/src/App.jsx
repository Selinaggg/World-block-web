import {pickTestPosition} from './randomPlacement.mjs';
import React,{useMemo,useRef,useState,useEffect} from 'react';
import {useInput} from './useInput.js';
import {emptyBoard,editBoard,sampleBoard,stateFromBoard,blocksFromState,TEST_COLUMNS,TEST_PORTS,layoutBoard} from './input.mjs';
import {META,TYPES,SAMPLES,derive} from './rules.mjs';
import Scene from './Scene.jsx';
const LABELS={live:'Live input',setup:'Hardware setup needed',connecting:'Connecting',reconnecting:'Reconnecting',offline:'Board disconnected',waiting:'Waiting for board',recovering:'Restoring board',attention:'Check input','invalid-data':'Input needs attention','launcher-offline':'Launcher unavailable'};
export default function App(){
  const hardware=useInput(),[mode,setMode]=useState('hardware'),[panel,setPanel]=useState(null),[board,setBoard]=useState(emptyBoard);
  const [slot,setSlot]=useState(TEST_COLUMNS[0].id),[code,setCode]=useState('C0'),[sample,setSample]=useState('0'),[view,setView]=useState(0);
  const [port,setPort]=useState('A0');
  const [error,setError]=useState(''),toggle=useRef(null);
  const testBlocks=useMemo(()=>blocksFromState(stateFromBoard(board)),[board]);
  const blocks=mode==='test'?testBlocks:hardware.blocks;
  const model=useMemo(()=>derive(blocks),[blocks]);
  const stack=board.board[slot]||[];
  const history=useRef([]),[lastAdded,setLastAdded]=useState('');
  function commitBoard(next){history.current.push(board);if(history.current.length>100)history.current.shift();setBoard(next);setLastAdded('');}
  function addRandom(){const id=pickTestPosition(board);if(!id)return;commitBoard(editBoard(board,id,'add',code));setSlot(id);setPort(TEST_COLUMNS.find(c=>c.id===id).port);setLastAdded(`${code} added · ${id} · layer ${(board.board[id]?.length||0)+1}`);}
  function undo(){const previous=history.current.pop();if(previous){setBoard(previous);setLastAdded('Last change undone');}}

  const close=()=>{setPanel(null);toggle.current?.focus();};
  useEffect(()=>{const handler=e=>{if(e.key==='Escape')close();};window.addEventListener('keydown',handler);return()=>window.removeEventListener('keydown',handler);},[]);
  return <main className={'app '+META.kind}>
    <header className="bar"><div className="brand"><span>{META.number}</span><h1>{META.title}</h1></div><div className="actions">
      <span className="status" role="status"><i className={mode==='hardware'&&hardware.status==='live'?'live':''}/>{mode==='test'?'Test board · simulated':LABELS[hardware.status]||'Waiting'}</span>
      {mode==='test'&&<button onClick={()=>{setMode('hardware');setPanel(null);}}>Return to hardware</button>}
      <button onClick={()=>setPanel(panel==='guide'?null:'guide')}>Field guide</button>
      <button ref={toggle} aria-controls="test-panel" aria-expanded={panel==='test'} onClick={()=>{if(panel!=='test')setMode('test');setPanel(panel==='test'?null:'test');}}>{panel==='test'?'Hide test view':'Test view'}</button>
    </div></header>
    <section className="stage" aria-label={META.title+' real-time scene'}>
      <Scene model={model} reset={view} onError={setError}/>
      <div className="scene-label"><p>WORLDBLOCKS / EXPERIMENT {META.number}</p><h2>{META.kind==='ocean'?'Below the surface.':'Form follows connection.'}</h2><span>{META.subtitle}</span></div>
      {!blocks.length&&<div className="invitation">{mode==='test'?'Add a block, or load a sample in Test view.':hardware.status==='setup'?'Confirm Hardware settings to bring your blocks to life.':'Place a block. Watch the world respond.'}</div>}
      {error&&<p className="scene-error" role="alert">{error}</p>}
      {mode==='hardware'&&blocks.length>0&&hardware.status!=='live'&&<p className="connection-note">{LABELS[hardware.status]} · Last received board</p>}
      <div className="scene-footer"><span>{mode==='test'?'SIMULATED INPUT':'HARDWARE INPUT'}<b> / </b>{blocks.length} MODULES</span><div><span>Drag to orbit · Scroll to zoom</span><button onClick={()=>setView(v=>v+1)}>Reset view ↗</button></div></div>
      {!!model.events.length&&<div className="emergence" aria-live="polite"><span>EMERGING</span>{model.events.slice(0,3).map(e=><p key={e}>{e}</p>)}{model.events.length>3&&<p>+{model.events.length-3} more in Field guide</p>}</div>}
    </section>
    {panel&&<aside id="test-panel" className="panel" aria-label={panel==='test'?'Test view':'Field guide'}>
      <div className="panel-title"><div><small>{panel==='test'?'SIMULATED INPUT':'HOW THIS WORLD WORKS'}</small><h2>{panel==='test'?'Test playground':'Field guide'}</h2></div><button aria-label="Close panel" onClick={close}>×</button></div>
      <div className="panel-content">{panel==='test'?<>
        
        <details className="monitor-toggle"><summary>Block monitor</summary><div className="input-preview"><Scene model={model} monitor onError={setError}/></div></details>
        <div className="metrics"><span>{blocks.length} blocks</span><span>{model.links} links</span><span>{blocks.filter(b=>b.attention).length} issues</span></div>
        <><p className="note">8 boards · 64 base + 64 offset positions. Every layer remains active.</p>
          <div className="unit-picker" role="group" aria-label="Unit type">{TYPES.map(t=><button key={t.id} aria-pressed={code===t.id} onClick={()=>setCode(t.id)}>{t.name}<small>{t.id}</small></button>)}</div>
          <div className="edit-row"><button disabled={!TEST_COLUMNS.some(c=>(board.board[c.id]?.length||0)<7)} onClick={addRandom}>Add unit</button><button disabled={!history.current.length} onClick={undo}>Undo</button></div>
          <p className="random-feedback" role="status">{lastAdded||'Choose a unit, then add. Mostly central, occasionally scattered.'}</p>
          <details className="manual-test"><summary>Precise placement & board layout</summary>
          <label>Board layout<select value={board.module_layout.grid_cols} onChange={e=>commitBoard(layoutBoard(board,Number(e.target.value)))}>{[1,2,4,8].map(cols=><option key={cols} value={cols}>{8/cols} rows × {cols} columns</option>)}</select></label>
          <div className="board-map" role="group" aria-label="Select a board" style={{gridTemplateColumns:`repeat(${board.module_layout.grid_cols},1fr)`}}>{TEST_PORTS.map(p=><button key={p} aria-pressed={port===p} onClick={()=>{setPort(p);setSlot(TEST_COLUMNS.find(c=>c.port===p).id);}}>{p}<small>{TEST_COLUMNS.filter(c=>c.port===p).reduce((sum,c)=>sum+(board.board[c.id]?.length||0),0)} blocks</small></button>)}</div>
          <label>Position<select value={slot} onChange={e=>setSlot(e.target.value)}>{TEST_COLUMNS.filter(c=>c.port===port).map(c=><option key={c.id} value={c.id}>{c.layer} · row {c.row%2+1} / col {c.col+1}</option>)}</select></label>
          <div className="edit-row"><button disabled={stack.length>=7} onClick={()=>commitBoard(editBoard(board,slot,'add',code))}>Add block</button><button disabled={!stack.length} onClick={()=>commitBoard(editBoard(board,slot,'remove'))}>Remove top</button></div>
          <p className="stack">Bottom → top: {stack.join(' / ')||'Empty'}</p>
          </details>
          <label>Example<select value={sample} onChange={e=>setSample(e.target.value)}>{SAMPLES.map((s,i)=><option key={s.name} value={i}>{s.name}</option>)}</select></label>
          <div className="edit-row secondary"><button onClick={()=>{commitBoard(layoutBoard(sampleBoard(SAMPLES[Number(sample)].stacks),board.module_layout.grid_cols));setPort('A0');setSlot(TEST_COLUMNS[0].id);setView(v=>v+1);}}>Load sample</button><button onClick={()=>commitBoard(layoutBoard(emptyBoard(),board.module_layout.grid_cols))}>Clear test board</button></div>
        </>
        <div className="legend">{TYPES.map(t=><span key={t.id}><i style={{background:t.color}}/>{t.id} {t.name}</span>)}</div>
      </>:<><p className="note">Six roles. Countless connections. Neighboring modules shape each other; every layer contributes.</p>{TYPES.map(t=><div className="type" key={t.id}><i style={{background:t.color}}/><div><h3>{t.id} / {t.name}</h3><p>{t.description}</p></div></div>)}
        <h3 className="section-label">IN THIS COMPOSITION</h3>{model.events.length?model.events.map(e=><p className="event" key={e}>{e}</p>):<p className="note">Connect different modules to discover a habitat or a shared space.</p>}
        <p className="note">Links follow face-adjacent positions and stack heights. Moving the camera does not change them.</p>
      </>}</div>
    </aside>}
  </main>;
}
