import test from 'node:test';
import assert from 'node:assert/strict';
import {TEST_TOPOLOGY,DEFAULT_MAP,emptyTestSnapshot,editTestBoard,layoutTestBoard,sampleTestSnapshot,toTerrainSnapshot} from '../src/terrainInput.mjs';
import {displayCoordinate} from '../src/layout.js';
test('eight terrain boards have 128 unique positions across both logical layers',()=>{
 const raw=emptyTestSnapshot();assert.equal(raw.topology.module_count,8);assert.equal(raw.topology.columns.length,128);
 for(const layer of ['L0','L0.5'])assert.equal(raw.topology.columns.filter(c=>c.layer===layer).length,64);
 for(const cols of [1,2,4,8]){
  const next=layoutTestBoard(raw,cols);
  const positions=next.topology.columns.map(c=>{const p=displayCoordinate(c,next.module_layout,next.topology);return [p.col,p.row,c.layer].join(':');});
  assert.equal(new Set(positions).size,128);
 }
});
test('last board edits survive layout changes; samples remain on the first board',()=>{
 const id=TEST_TOPOLOGY.columns.at(-1).id;
 const raw=editTestBoard(emptyTestSnapshot(),id,'add','C4');
 const changed=layoutTestBoard(raw,4);
 assert.deepEqual(toTerrainSnapshot(changed,DEFAULT_MAP).board[id],['water']);
 assert.deepEqual(changed.board,raw.board);
 assert.deepEqual(toTerrainSnapshot(editTestBoard(changed,id,'remove'),DEFAULT_MAP).board,{});
 const sample=sampleTestSnapshot();assert.ok(Object.values(sample.board).some(s=>s.length));
 for(const column of sample.topology.columns.filter(c=>c.port!=='A0'))assert.equal(sample.board[column.id].length,0);
});
