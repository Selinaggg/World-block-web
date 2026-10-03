import test from 'node:test';
import assert from 'node:assert/strict';
import {derive} from '../src/rules.mjs';
import {generateCells} from '../src/generativeCells.mjs';
const node=(id,code,x=0,y=0,z=0)=>({id,code,x,y,z,index:y,column:id});
test('voxel grammar is deterministic and public space cuts through neighboring mass',()=>{
 const home=node('home','C0'),alone=derive([home]).nodes[0];
 assert.deepEqual(generateCells(alone),generateCells(alone));
 const opened=derive([home,node('commons','C1',1)]).nodes[0];
 assert.ok(opened.density<alone.density);
 assert.ok(generateCells(opened).filter(c=>c.solid).length<generateCells(alone).filter(c=>c.solid).length);
 assert.equal(generateCells(opened).filter(c=>c.y===0&&c.z===0&&c.solid).length,0);
});
test('structure and membranes retain their type even in dense connected groups',()=>{
 for(const code of ['C2','C3','C4']){
  const model=derive([node('a',code),node('b',code,1),node('c',code,0,1)]);
  assert.ok(generateCells(model.nodes[0]).every(c=>!c.solid));
 }
 const atelier=derive([node('a','C4')]).nodes[0];assert.equal(generateCells(atelier).length,64);
});
