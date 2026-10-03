import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {emptyBoard,editBoard,blocksFromState,stateFromBoard,sampleBoard} from '../src/input.mjs';
import {touching,buildGraph} from '../src/graph.mjs';
import {derive,SAMPLES,TYPES} from '../src/rules.mjs';
import {createWorld} from '../src/world.js';
import {dispose} from '../src/drawing.js';
const b=(id,code,x,y=0,z=0)=>({id,column:id,code,x,y,z,index:Math.floor(y),attention:false});

test('all stack layers survive input conversion, removal and cross-position moves',()=>{
  let raw=emptyBoard();const [a,c]=raw.topology.columns;
  raw=editBoard(editBoard(raw,a.id,'add','C0'),a.id,'add','C4');
  assert.deepEqual(blocksFromState(stateFromBoard(raw)).map(b=>b.code),['C0','C4']);
  raw=editBoard(raw,a.id,'remove');assert.equal(blocksFromState(stateFromBoard(raw)).length,1);
  raw=editBoard(editBoard(raw,a.id,'remove'),c.id,'add','C0');
  assert.equal(blocksFromState(stateFromBoard(raw))[0].column,c.id);
  assert.equal(blocksFromState(stateFromBoard(emptyBoard())).length,0);
});
test('links are actual square or hexagonal face neighbors, not arbitrary proximity',()=>{
  assert.equal(touching(b('a','C0',0),b('b','C1',1)),true);
  assert.equal(touching(b('a','C0',0),b('b','C1',.5,.5,.5)),true);
  assert.equal(touching(b('a','C0',0),b('b','C1',.5,0,.5)),false);
  const graph=buildGraph([b('a','C0',0),b('b','C1',1),b('c','C2',4)]);
  assert.deepEqual(graph.byId.get('a').neighbors,['b']);assert.equal(graph.groups.length,2);
});
test('a shoal changes habitat and combines motion/nursery traits without losing any layer',()=>{
  const fish=b('fish','C2',0),reef=b('reef','C0',1),grass=b('grass','C1',0,0,1),current=b('flow','C5',-1);
  assert.equal(derive([fish]).nodes[0].form,'open-shoal');
  assert.equal(derive([fish,grass]).nodes[0].form,'grass-fish');
  const world=derive([fish,reef,grass,current]);
  assert.equal(world.nodes[0].form,'reef-fish');assert.equal(world.nodes[0].nursery,true);assert.equal(world.nodes[0].current,true);
  assert.ok(world.events.includes('Nursery habitat'));assert.equal(world.nodes.length,4);
  assert.equal(derive([fish,current]).nodes[0].form,'ribbon-shoal');
});
test('low luminous blocks attach to reefs; high ones remain floating, currents link deterministically',()=>{
  assert.equal(derive([b('l','C4',0),b('r','C0',1)]).nodes[0].form,'anemone');
  assert.equal(derive([b('l','C4',0,1),b('r','C0',0,0)]).nodes[0].form,'jelly');
  const input=[b('a','C5',0),b('b','C5',1)];
  assert.deepEqual(derive(input),derive(input));assert.ok(derive(input).events.includes('Current corridor'));
  assert.equal(derive([input[0]]).nodes[0].flowNeighbor,null);
  const branch=derive([...input,b('c','C5',0,0,1)]);
  assert.equal(branch.nodes[0].flowNeighbors.length,2);
});
test('unknown physical codes are rejected instead of creating a species',()=>{
  const state=stateFromBoard(emptyBoard());state.columns[0].stack=[{slot_key:'bad',code_id:null,index:0,position:{x:0,y:0,z:0}}];
  assert.throws(()=>blocksFromState(state));
});
test('all sample habitats generate finite renderable geometry and keep every input module',()=>{
  const scene=new T.Scene(),root=new T.Group();scene.add(root);const world=createWorld(scene,root,{});
  for(const sample of SAMPLES){const blocks=blocksFromState(stateFromBoard(sampleBoard(sample.stacks))),model=derive(blocks);assert.equal(model.nodes.length,blocks.length);
    for(const n of model.nodes){const object=world.build(n,model);let vertices=0;object.traverse(o=>{if(o.geometry){const p=o.geometry.attributes.position;vertices+=p.count;assert.ok([...p.array].every(Number.isFinite));}});assert.ok(vertices>0||(n.code==='C0'&&!n.reefExposed&&!n.reefSurface));object.userData.tick?.(1);dispose(object);}
  }
  world.dispose();dispose(scene);
});

test('reef colonies fuse only through reef face links and split after removal',()=>{
 const a=b('a','C0',0),middle=b('b','C0',1),c=b('c','C0',2);
 const joined=derive([a,middle,c]);assert.equal(joined.nodes.filter(n=>n.reefSurface).length,1);
 assert.equal(joined.nodes[0].reefSurface.members.length,3);assert.equal(joined.nodes[0].reefSurface.links.length,2);
 assert.ok(joined.events.includes('Living reef'));
 const split=derive([a,c]);assert.equal(split.nodes.filter(n=>n.reefSurface).length,2);assert.ok(!split.events.includes('Living reef'));
 assert.equal(derive([a,{...middle,code:'C1'},c]).nodes.filter(n=>n.reefSurface).length,2);
 assert.equal(derive([a,b('up','C0',0,1)]).nodes[0].reefExposed,false);
 assert.equal(derive([a,b('offset','C0',.5,.5,.5)]).nodes.filter(n=>n.reefSurface).length,1);
 assert.equal(derive([a,b('near','C0',.5,0,.5)]).nodes.filter(n=>n.reefSurface).length,2);
});
