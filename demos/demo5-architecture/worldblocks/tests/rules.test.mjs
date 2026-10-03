import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {VERTICES,FACES} from '../src/polyhedron.mjs';
import {emptyBoard,editBoard,blocksFromState,stateFromBoard,sampleBoard} from '../src/input.mjs';
import {derive,SAMPLES} from '../src/rules.mjs';
import {touching} from '../src/graph.mjs';
import {createWorld} from '../src/world.js';
import {dispose} from '../src/drawing.js';
const b=(id,code,x,y=0,z=0)=>({id,column:id,code,x,y,z,index:Math.floor(y),attention:false});

test('digital hardware monitor preserves the truncated-octahedron input representation',()=>{
  assert.equal(VERTICES.length,24);assert.equal(FACES.length,14);
  assert.equal(FACES.filter(f=>f.vertices.length===4).length,6);
  assert.equal(FACES.filter(f=>f.vertices.length===6).length,8);
});
test('every layer retains its function and only face-adjacent cells open connections',()=>{
  let raw=emptyBoard();const id=raw.topology.columns[0].id;
  for(const code of ['C0','C2','C5'])raw=editBoard(raw,id,'add',code);
  const blocks=blocksFromState(stateFromBoard(raw)),model=derive(blocks);
  assert.deepEqual(model.nodes.map(n=>n.code),['C0','C2','C5']);
  assert.equal(model.nodes[0].roof,false);assert.equal(model.nodes[1].form,'conservatory');
  assert.equal(model.links,2);
  assert.equal(touching(b('a','C0',0),b('b','C0',.5,.5,.5)),true);
  assert.equal(touching(b('a','C0',0),b('b','C0',.5,0,.5)),false);
});
test('removing an upper cell exposes a roof and removing the lantern changes the garden',()=>{
  const lower=b('a','C0',0),garden=b('b','C2',0,1),light=b('c','C5',0,2);
  assert.equal(derive([lower,garden,light]).nodes[1].form,'conservatory');
  const reduced=derive([lower,garden]);assert.equal(reduced.nodes[1].form,'terrace');
  assert.equal(derive([lower]).nodes[0].roof,true);
});
test('lantern light propagates through a vertical garden, but not across disconnected gardens',()=>{
  const model=derive([b('a','C2',0),b('b','C2',0,1),b('c','C5',0,2),b('d','C2',3)]);
  assert.equal(model.nodes[0].form,'conservatory');assert.equal(model.nodes[1].form,'conservatory');assert.equal(model.nodes[3].form,'terrace');
  assert.ok(model.events.includes('Vertical greenhouse'));
});
test('context changes details without reassigning the original architectural role',()=>{
  const atelier=b('a','C4',0),publicRoom=b('b','C1',1),passage=b('c','C3',2);
  const model=derive([atelier,publicRoom,passage]);
  assert.equal(model.nodes[0].form,'gallery');assert.equal(model.nodes[0].code,'C4');
  assert.ok(model.events.includes('Makers’ street'));
  assert.ok(!derive([atelier,passage]).events.includes('Makers’ street'));
});
test('a courtyard needs a genuinely enclosed empty position',()=>{
  const surround=[b('a','C0',0,0,1),b('b','C0',2,0,1),b('c','C1',1,0,0),b('d','C2',1,0,2)];
  assert.deepEqual(derive(surround).courtyards,[{x:1,z:1}]);
  assert.equal(derive([...surround,b('e','C0',1,0,1)]).courtyards.length,0);
});
test('all sample buildings generate finite surfaces, windows and interior geometry',()=>{
  const scene=new T.Scene(),root=new T.Group();scene.add(root);const world=createWorld(scene,root,{});
  for(const sample of SAMPLES){const blocks=blocksFromState(stateFromBoard(sampleBoard(sample.stacks))),model=derive(blocks);assert.equal(model.nodes.length,blocks.length);world.update(model);
    for(const n of model.nodes){const object=world.build(n,model);let vertices=0;object.traverse(o=>{if(o.geometry){const p=o.geometry.attributes.position;vertices+=p.count;assert.ok([...p.array].every(Number.isFinite));}});assert.ok(vertices>0);dispose(object);}
  }
  world.dispose();dispose(scene);
});
