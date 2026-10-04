import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {seededRandom} from '../dist/src/generation/threeD/random.js';
import {OBJLoader} from '../dist/vendor/OBJLoader.js';
import {prepareWorldBlocksModel} from '../dist/src/model/loadWorldBlocksModel.js';
import {createWorldStore} from '../dist/src/world/worldStore.js';
import {WebInputAdapter} from '../dist/src/input/WebInputAdapter.js';
import {DREAM_TYPES,toDreamWorldState,migrateDreamDraft} from '../dist/src/dream/config.js';
import {DREAM_PRESETS,createDreamPreset} from '../dist/src/dream/presets.js';
import {generateDreamscape} from '../dist/src/dream/DreamscapeGenerator.js';
import {sampleFields,analyzeDream,generateDreamFields} from '../dist/src/dream/DreamFieldGenerator.js';
import {isDreamWalkable,moveInDream,dreamFloorCandidates} from '../dist/src/dream/DreamNavigationPlanner.js';
const model=prepareWorldBlocksModel(new OBJLoader().parse(readFileSync(new URL('../dist/models/worldblocks.obj',import.meta.url),'utf8')));
const preset=id=>createDreamPreset(id,model.metadata,model.initialBlocks[0]);
const generate=state=>generateDreamscape(state,model.metadata,{budget:12000});
const fixtures=Object.fromEntries(DREAM_PRESETS.map(p=>[p.id,generate(preset(p.id))]));

test('six forces share WorldState, physical seating and grid editing without leaking into Town',()=>{
 const store=createWorldStore({version:1,mode:'dreamscape',inputMode:'web',blocks:[]}),input=new WebInputAdapter(store,model.metadata,model.initialBlocks[0],{types:DREAM_TYPES});
 assert.equal(DREAM_TYPES.length,6);const id=input.add('shell');input.setHeight(id,3);assert.equal(store.getWorldState().blocks.length,3);
 const column=store.getWorldState().blocks.slice().sort((a,b)=>a.heightLevel-b.heightLevel);
 assert.ok(Math.abs(column[2].position.y-column[1].position.y-model.metadata.placementStackStep)<1e-10);
 input.moveStep(id,'right');assert.equal(store.getWorldState().blocks.find(b=>b.id===id).heightLevel,1);
 assert.throws(()=>input.add('human'));assert.throws(()=>createWorldStore({...store.snapshot(),mode:undefined}));
});
test('fixed input produces identical semantic geometry and particles independent of IDs and block order',()=>{
 const state=preset('dream'),before=structuredClone(state),a=fixtures.dream,b=generate({...state,blocks:state.blocks.slice().reverse().map((v,i)=>({...v,id:`new-${i}`}))});
 assert.equal(a.seed,b.seed);assert.deepEqual(a.structuralPlan,b.structuralPlan);assert.deepEqual(a.particles,b.particles);assert.deepEqual(state,before);
});
test('local position, distance and stacking affect fields, relationships and architecture',()=>{
 const base=preset('chamber'),analysis=analyzeDream(base,model.metadata),fields=generateDreamFields(analysis),source=analysis.sources.find(s=>s.type==='glow');
 assert.ok(sampleFields(fields,source.x,source.z).glow>sampleFields(fields,source.x+20,source.z+20).glow*5);
 const shifted=structuredClone(base);shifted.blocks.filter(b=>b.type==='glow').forEach(b=>b.position.x+=30);
 const changed=generate(shifted);assert.notEqual(changed.seed,fixtures.chamber.seed);
 assert.ok(changed.structuralPlan.relationships.zones.length<fixtures.chamber.structuralPlan.relationships.zones.length);
 const flat={...base,blocks:base.blocks.filter(b=>b.heightLevel===1)};
 assert.ok(fields.peaks.glow>generateDreamFields(analyzeDream(flat,model.metadata)).peaks.glow);
 assert.ok(generate(flat).structuralPlan.zones.length<fixtures.chamber.structuralPlan.zones.length);
});
test('A–H comparisons resolve actual different architecture, including pair and triple emergence',()=>{
 const kinds=id=>fixtures[id].structuralPlan.objects.map(o=>o.kind);
 assert.ok(kinds('shell').includes('room'));assert.ok(kinds('shell').includes('inhabitable-stairs'));
 assert.ok(kinds('veil').includes('hanging-veil'));assert.ok(kinds('drift').includes('drifting-door'));
 assert.ok(fixtures.graft.structuralPlan.objects.filter(o=>o.force==='graft').length>=3);
 assert.ok(kinds('glow').includes('embedded-light-chamber'));assert.ok(kinds('flow').includes('directional-passage'));
 assert.ok(kinds('circulation').includes('impossible-circulation'));assert.ok(kinds('chamber').includes('living-chamber'));
 assert.equal(new Set(Object.values(fixtures).map(r=>JSON.stringify(r.structuralPlan.objects))).size,9);
});
test('particles sample resolved geometry in three bounded layers with a configurable near reserve',()=>{
 for(const r of Object.values(fixtures)){
  const p=r.particles;assert.equal(p.count,12000);assert.equal(p.layers.structural,7920);assert.equal(p.layers.edges,2640);assert.equal(p.layers.atmosphere,1440);
  for(const buffer of [p.positions,p.colors,p.motion,p.flow,p.detail])for(const value of buffer)assert.ok(Number.isFinite(value));
  assert.ok(r.structuralPlan.objects.every(o=>o.surfaces.length||o.lines.length));
  let reserve=0;for(let i=0;i<p.count;i++){if(p.detail[i*4+1]){reserve++;assert.equal(p.detail[i*4],0);}}
  assert.ok(reserve>1000&&reserve<3000);
 }
 const r=generateDreamscape(preset('shell'),model.metadata,{budget:12000,lod:{near:5,reserve:0}});assert.equal(r.particles.lod.near,5);
 for(let i=0;i<r.particles.count;i++)assert.equal(r.particles.detail[i*4+1],0);
});
function travel(nav,p,target){
 const steps=Math.ceil(Math.hypot(target.x-p.x,target.z-p.z)/.04),dx=(target.x-p.x)/steps,dz=(target.z-p.z)/steps;
 for(let i=0;i<steps;i++)p=moveInDream(nav,p,dx,dz);
 assert.ok(Math.hypot(target.x-p.x,target.z-p.z)<.13,`Could not reach ${JSON.stringify(target)} from ${JSON.stringify(p)}`);
 assert.ok(Math.abs(target.y-p.y)<.22,`Wrong floor ${p.y} expected ${target.y}`);return p;
}
test('every example has a reachable destination and stairs that change the actual walking height',()=>{
 for(const r of Object.values(fixtures)){
  const nav=r.navigationPlan;assert.ok(isDreamWalkable(nav,nav.spawn));let p={...nav.spawn};
  for(const e of r.structuralPlan.edges){p=travel(nav,p,e.a);p=travel(nav,p,e.b);const n=r.structuralPlan.nodes.find(n=>n.id===e.to);p=travel(nav,p,n);}
  for(const e of nav.segments){if(e.id.startsWith('route-'))continue;let q={...e.a};assert.ok(isDreamWalkable(nav,q));q=travel(nav,q,e.b);assert.ok(q.y>e.a.y+1);}
  assert.ok(!isDreamWalkable(nav,{x:100,z:100}));
  assert.ok(r.structuralPlan.objects.filter(o=>o.force==='graft'||o.force==='drift'||o.force==='veil').every(o=>!o.walkable));
 }
});
test('movement cannot jump between disconnected floors or leave the supported route',()=>{
 const nav=fixtures.shell.navigationPlan;let p={...nav.spawn};for(let i=0;i<1000;i++){const old=p;p=moveInDream(nav,p,.17,.13);assert.ok(isDreamWalkable(nav,p));assert.ok(Math.abs(old.y-p.y)<.3);}
 assert.ok(!isDreamWalkable(nav,{...nav.spawn,y:20}));
});
test('each lone force retains a safe entry and finite architecture, empty input is rejected',()=>{
 for(const type of DREAM_TYPES){const state=preset('shell');state.blocks=state.blocks.slice(0,1).map(b=>({...b,type,heightLevel:1}));const r=generate(state);assert.ok(isDreamWalkable(r.navigationPlan,r.navigationPlan.spawn));assert.ok(r.structuralPlan.objects.length>0);}
 assert.throws(()=>generate({...preset('shell'),blocks:[]}));
});
test('physical code interpretation is explicit and does not alter the original snapshot',()=>{
 const physical={version:1,inputMode:'physical',blocks:[{...model.initialBlocks[0],type:'C5'}]},before=structuredClone(physical),dream=toDreamWorldState(physical);
 assert.equal(dream.blocks[0].type,'flow');assert.deepEqual(physical,before);createWorldStore(dream);generate(dream);
 assert.throws(()=>generate({...dream,blocks:[{...dream.blocks[0],type:'unknown'}]}));
});
test('legacy drafts migrate without destroying their source or allowing old force names in V2',()=>{
 const old={...preset('shell'),blocks:preset('shell').blocks.map(b=>({...b,type:'memory'}))},before=structuredClone(old),next=migrateDreamDraft(old);
 assert.deepEqual(old,before);assert.ok(next.blocks.every(b=>b.type==='shell'));createWorldStore(next);assert.throws(()=>createWorldStore(old));
});

test('first-person camera walks inside the same dream and returns without regeneration',async()=>{
 const THREE=await import('../dist/vendor/three.module.js'),{DreamExploreController}=await import('../dist/src/dream/DreamExploreController.js');
 const original={document:globalThis.document,window:globalThis.window,matchMedia:globalThis.matchMedia};
 const doc=new EventTarget(),win=new EventTarget(),canvas=new EventTarget();doc.pointerLockElement=null;canvas.setPointerCapture=()=>{};
 doc.exitPointerLock=()=>doc.pointerLockElement=null;let reduced=true;
 globalThis.document=doc;globalThis.window=win;globalThis.matchMedia=()=>({matches:reduced});
 let controller;
 try{
  const camera=new THREE.PerspectiveCamera(49,1,.06,200);camera.position.set(10,20,30);const saved=camera.position.clone(),controls={target:new THREE.Vector3(),enabled:true,enableDamping:true,update(){}};
  controller=new DreamExploreController(camera,controls,canvas,()=>{});const r=fixtures.glow,immutable=structuredClone(r.navigationPlan);controller.setNavigation(r.navigationPlan);controller.enter();controller.update(.016,performance.now(),reduced);
  assert.equal(controller.active,true);assert.equal(controls.enabled,false);assert.ok(Math.abs(camera.position.y-controller.position.y-1.65)<1e-10);
  const start={...controller.position};controller.hold('KeyW',true);for(let i=0;i<30;i++)controller.update(.016,performance.now(),reduced);controller.hold('KeyW',false);
  assert.ok(Math.hypot(controller.position.x-start.x,controller.position.z-start.z)>.5);assert.ok(isDreamWalkable(r.navigationPlan,controller.position));assert.ok(Math.abs(camera.position.y-controller.position.y-1.65)<1e-10);
  reduced=false;controller.hold('KeyW',true);controller.update(.016,performance.now(),reduced);assert.notEqual(camera.position.y,controller.position.y+1.65);
  win.dispatchEvent(new Event('blur'));assert.equal(controller.keys.size,0);
  controller.exit(true);assert.equal(controller.active,false);assert.ok(camera.position.equals(saved));assert.equal(controls.enabled,true);assert.deepEqual(r.navigationPlan,immutable);
 }finally{controller?.dispose();for(const [key,value] of Object.entries(original)){if(value===undefined)delete globalThis[key];else globalThis[key]=value;}}
});

test('close and irregular arrangements retain a continuous main route',()=>{
 const random=seededRandom(50),metadata={bounds:{minX:-10,maxX:10,minZ:-10,maxZ:10}};
 for(let trial=0;trial<30;trial++){
  const state={version:1,mode:'dreamscape',inputMode:'web',blocks:Array.from({length:4},(_,i)=>({id:`b${i}`,type:i===3?'glow':'shell',sourceObjectName:'x',heightLevel:1+Math.floor(random()*5),position:{x:(random()-.5)*15,y:0,z:(random()-.5)*15},rotation:{x:0,y:0,z:0}}))};
  const r=generateDreamscape(state,metadata,{budget:300}),nav=r.navigationPlan;let p={...nav.spawn};
  for(const e of r.structuralPlan.edges)for(const target of [e.a,e.b,r.structuralPlan.nodes.find(n=>n.id===e.to)])p=travel(nav,p,target);
 }
});
