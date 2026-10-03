import test from 'node:test';
import assert from 'node:assert/strict';
import {pickTestPosition} from '../src/randomPlacement.mjs';
import {normalizeSnapshot} from '../../../../shared/hardware-client/worldblocks-client.mjs';
import {emptyTestSnapshot as empty,layoutTestBoard as layout,editTestBoard as edit} from '../src/terrainInput.mjs';
function rng(){let s=9147;return ()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};}
test('random placement clusters centrally while retaining peripheral placements in every layout',()=>{
  for(const cols of [1,2,4,8]){
    const raw=layout(empty(),cols),random=rng(),columns=normalizeSnapshot(raw).columns;
    const maxX=Math.max(...columns.map(c=>c.position.x)),maxZ=Math.max(...columns.map(c=>c.position.z));
    let outer=0,totalRadius=0;
    for(let i=0;i<3000;i++){
      const id=pickTestPosition(raw,random),p=columns.find(c=>c.id===id).position;
      const radius=Math.hypot((p.x-maxX/2)/Math.max(1,maxX/2),(p.z-maxZ/2)/Math.max(1,maxZ/2));
      totalRadius+=radius;if(radius>.8)outer++;
    }
    assert.ok(totalRadius/3000<.65, 'central bias');
    assert.ok(outer/3000>.06&&outer/3000<.25, 'peripheral scattering');
    assert.deepEqual(raw.board,{}, 'selection never edits the input');
  }
});
test('random add preserves existing stacks, chosen types, and eventually fills every available slot safely',()=>{
  let raw=empty();const random=rng();
  for(let i=0;i<896;i++){
    const id=pickTestPosition(raw,random);assert.ok(id);
    const old=raw,code='C'+i%6;raw=edit(raw,id,'add',code);
    const state=normalizeSnapshot(raw),column=state.columns.find(c=>c.id===id);
    assert.equal(column.stack.at(-1).code_id,code);
    assert.equal(raw.board[id].length,(old.board[id]?.length||0)+1);
    assert.ok(raw.board[id].length<=7);
    for(const key of Object.keys(old.board))if(key!==id)assert.deepEqual(raw.board[key],old.board[key]);
  }
  assert.equal(pickTestPosition(raw,random),null);
});
