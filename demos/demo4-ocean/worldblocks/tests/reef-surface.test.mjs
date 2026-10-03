import test from 'node:test';
import assert from 'node:assert/strict';
import {reefPrimitives,reefField,reefGeometry} from '../src/reef-surface.mjs';
test('fused reef has solid continuous necks in horizontal, vertical and offset directions',()=>{
 for(const [x,y,z] of [[1,0,0],[0,1,0],[.5,.5,.5]]){
  const members=[{id:'a',x:0,y:0,z:0},{id:'b',x,y,z}],links=[['a','b']],shapes=reefPrimitives(members,links);
  for(let i=0;i<=20;i++)assert.ok(reefField([x,y,z].map(v=>v*2.45*i/20),shapes)>.5);
  const geometry=reefGeometry(members,links);assert.ok(geometry.attributes.position.count>100);
  assert.ok([...geometry.attributes.position.array].every(Number.isFinite));geometry.dispose();
 }
 const shapes=reefPrimitives([{id:'a',x:0,y:0,z:0},{id:'b',x:3,y:0,z:0}],[]);
 assert.ok(reefField([3.675,0,0],shapes)<0);
});

test('organic variation is stable for the same positions and differs between modules',()=>{
 const a=[{id:'slot-a',x:0,y:0,z:0}],b=[{id:'slot-b',x:0,y:0,z:0}];
 assert.deepEqual(reefPrimitives(a,[]),reefPrimitives(a,[]));
 assert.notDeepEqual(reefPrimitives(a,[]),reefPrimitives(b,[]));
 const first=reefGeometry(a,[]),again=reefGeometry(a,[]);
 assert.deepEqual(first.attributes.position.array,again.attributes.position.array);
 assert.ok([...first.attributes.normal.array].every(Number.isFinite));
 first.dispose();again.dispose();
});
