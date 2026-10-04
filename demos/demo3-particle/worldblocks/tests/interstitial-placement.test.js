import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {OBJLoader} from '../dist/vendor/OBJLoader.js';
import {prepareWorldBlocksModel} from '../dist/src/model/loadWorldBlocksModel.js';
import {createWorldStore} from '../dist/src/world/worldStore.js';
import {DreamInputAdapter} from '../dist/src/dream/DreamInputAdapter.js';
import {DREAM_TYPES} from '../dist/src/dream/config.js';
import {interstitialSeats,modulesIntersect,availableSeats,supportedGap} from '../dist/src/input/interstitialPlacement.js';
const model=prepareWorldBlocksModel(new OBJLoader().parse(readFileSync(new URL('../dist/models/worldblocks.obj',import.meta.url),'utf8'))),m=model.metadata;
const all=m.baseSeats.map((s,i)=>({...model.initialBlocks[0],id:`base-${i}`,type:'shell',position:{...s,y:m.firstCenterY},heightLevel:1}));
const gap=interstitialSeats(all,m).sort((a,b)=>Math.hypot(a.x,a.z)-Math.hypot(b.x,b.z))[0];
const four=all.filter(b=>gap.supportIds.includes(b.id));
function setup(blocks=four){const store=createWorldStore({version:1,mode:'dreamscape',inputMode:'web',blocks:structuredClone(blocks)});return {store,input:new DreamInputAdapter(store,m,model.initialBlocks[0],{types:DREAM_TYPES})};}
function placed(){const s=setup(),id=s.input.add('graft');assert.equal(s.input.move(id,gap),true);return {...s,id};}
function assertSupported(blocks){for(const b of blocks)if(b.placement)assert.ok(supportedGap(b,blocks,m),`Unsupported ${b.id}`);}
test('four real OBJ neighbours expose a face-contact seat at their centre',()=>{
 assert.equal(four.length,4);assert.equal(interstitialSeats(four.slice(0,3),m).length,0);
 assert.ok(gap.y>m.firstCenterY+.4&&gap.y<m.firstCenterY+.7);
 for(const b of four){assert.equal(modulesIntersect(gap,b.position,m,0),false);
  // The nearest separating face is in contact within the original export's
  // small, measured grid irregularities, rather than a box-based half-height.
  const separations=m.moduleContactPlanes.map(p=>Math.abs(p.x*(gap.x-b.position.x)+p.y*(gap.y-b.position.y)+p.z*(gap.z-b.position.z))-p.span);
  const faceGap=Math.max(...separations);assert.ok(faceGap>=-1e-6&&faceGap<.025);
 }
});
test('dragging adds exactly one fragment at the interstitial seat, without changing its neighbours',()=>{
 const {store,id}=placed(),blocks=store.snapshot().blocks,b=blocks.find(b=>b.id===id);
 assert.equal(blocks.length,5);assert.equal(b.placement.kind,'interstitial');assert.equal(b.heightLevel,2);
 assert.ok(Math.hypot(b.position.x-gap.x,b.position.z-gap.z)<1e-8);assert.equal(b.position.y,gap.y);
 assert.deepEqual(blocks.filter(b=>b.id!==id),four);assertSupported(blocks);
});
test('position arrows visit a supported gap one snapped position at a time',()=>{
 const {input,store}=setup(),id=input.add('drift');
 // Start on top of a corner, retaining the original four supporting modules.
 input.move(id,four[0].position);const before=store.snapshot().blocks.find(b=>b.id===id);
 const direction=gap.x>before.position.x?'right':'left';assert.equal(input.moveStep(id,direction),true);
 const after=store.snapshot().blocks.find(b=>b.id===id);assert.ok(after.placement);assert.equal(after.position.y,gap.y);assertSupported(store.snapshot().blocks);
});
test('interlocking columns retain real vertical face spacing and enforce their minimum height',()=>{
 const {store,input,id}=placed();assert.equal(input.minimumHeight(id),2);assert.throws(()=>input.setHeight(id,1));
 input.setHeight(id,4);let column=store.snapshot().blocks.filter(b=>b.placement).sort((a,b)=>a.position.y-b.position.y);
 assert.equal(column.length,3);assert.equal(column[0].heightLevel,2);assert.equal(column[2].heightLevel,4);
 for(let i=1;i<column.length;i++)assert.ok(Math.abs(column[i].position.y-column[i-1].position.y-m.placementStackStep)<1e-8);
 input.setHeight(id,2);assertSupported(store.snapshot().blocks);
 input.remove(id);column=store.snapshot().blocks.filter(b=>b.placement);assert.equal(column.length,2);assert.ok(column.some(b=>b.position.y===gap.y));assertSupported(store.snapshot().blocks);
});
test('removing or moving a support is atomic and cannot leave a floating interlocking fragment',()=>{
 const {store,input}=placed(),before=store.snapshot();
 assert.throws(()=>input.remove(four[0].id),/supports an interlocking/);assert.deepEqual(store.snapshot(),before);
 assert.throws(()=>input.move(four[0].id,m.baseSeats.find(s=>Math.hypot(s.x-gap.x,s.z-gap.z)>4)),/supports an interlocking/);assert.deepEqual(store.snapshot(),before);
});
test('moving back to a base seat removes the interlocking metadata and restores normal height controls',()=>{
 const {store,input,id}=placed(),seat=m.baseSeats.find(s=>Math.hypot(s.x-gap.x,s.z-gap.z)>4);
 input.move(id,seat);const b=store.snapshot().blocks.find(b=>b.id===id);assert.equal(b.placement,undefined);assert.equal(b.heightLevel,1);assert.equal(input.minimumHeight(id),1);
 input.setHeight(id,2);assert.equal(store.snapshot().blocks.find(b=>b.id===id).heightLevel,2);
});
test('upper sets of four also expose usable staggered seats, and occupied gaps are not offered twice',()=>{
 const elevated=four.flatMap(b=>[b,{...b,id:`upper-${b.id}`,position:{...b.position,y:b.position.y+m.placementStackStep},heightLevel:2}]);
 const slots=interstitialSeats(elevated,m);assert.ok(slots.some(s=>Math.abs(s.y-gap.y-m.placementStackStep)<1e-8));
 const {store,id}=placed(),b=store.snapshot().blocks.find(b=>b.id===id),open=availableSeats(store.snapshot().blocks,m);
 assert.ok(!open.some(s=>Math.hypot(s.x-b.position.x,s.z-b.position.z)<.001&&Math.abs(s.y-b.position.y)<.001));
 assert.ok(open.some(s=>Math.hypot(s.x-b.position.x,s.z-b.position.z)<.001&&Math.abs(s.y-b.position.y-m.placementStackStep)<.001));
 // A saved V2 WorldState keeps its support geometry and remains editable.
 const restored=setup(store.snapshot().blocks);assert.equal(restored.input.minimumHeight(id),2);assertSupported(restored.store.snapshot().blocks);
});
