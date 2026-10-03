import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyBoard,editBoard,layoutBoard,blocksFromState,stateFromBoard,TEST_COLUMNS} from '../src/input.mjs';
import {touching} from '../src/graph.mjs';
test('eight boards expose 64 base and 64 offset positions without coordinate collisions',()=>{
 const raw=emptyBoard(),state=stateFromBoard(raw);
 assert.equal(state.module_count,8);assert.equal(state.columns.length,128);
 for(const layer of ['L0','L0.5'])assert.equal(state.columns.filter(c=>c.layer===layer).length,64);
 for(const cols of [1,2,4,8]){
  const mapped=stateFromBoard(layoutBoard(raw,cols));
  assert.equal(new Set(mapped.columns.map(c=>JSON.stringify(c.position))).size,128);
 }
});
test('board boundaries connect and layout changes preserve every stack on its board',()=>{
 let raw=emptyBoard();const a=TEST_COLUMNS.find(c=>c.port==='A0'&&c.layer==='L0'&&c.col===3&&c.row===0),b=TEST_COLUMNS.find(c=>c.port==='A1'&&c.layer==='L0'&&c.col===0);
 raw=editBoard(editBoard(raw,a.id,'add','C0'),b.id,'add','C0');
 assert.equal(touching(...blocksFromState(stateFromBoard(raw))),true);
 const moved=layoutBoard(raw,1);assert.deepEqual(moved.board,raw.board);
 assert.equal(touching(...blocksFromState(stateFromBoard(moved))),false);
 const last=TEST_COLUMNS.at(-1);raw=editBoard(raw,last.id,'add','C4');
 assert.equal(blocksFromState(stateFromBoard(raw)).find(b=>b.column===last.id).code,'C4');
});
