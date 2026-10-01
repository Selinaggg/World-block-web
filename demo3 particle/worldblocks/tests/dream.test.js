import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {OBJLoader} from '../dist/vendor/OBJLoader.js';
import {prepareWorldBlocksModel} from '../dist/src/model/loadWorldBlocksModel.js';
import {createWorldStore} from '../dist/src/world/worldStore.js';
import {WebInputAdapter} from '../dist/src/input/WebInputAdapter.js';
import {DREAM_TYPES,toDreamWorldState} from '../dist/src/dream/config.js';
import {DREAM_PRESETS,createDreamPreset} from '../dist/src/dream/presets.js';
import {generateDreamscape} from '../dist/src/dream/DreamscapeGenerator.js';
import {sampleFields,analyzeDream,generateDreamFields} from '../dist/src/dream/DreamFieldGenerator.js';
import {isDreamWalkable,moveInDream} from '../dist/src/dream/DreamNavigationPlanner.js';
const model=prepareWorldBlocksModel(new OBJLoader().parse(readFileSync(new URL('../dist/models/worldblocks.obj',import.meta.url),'utf8')));
const preset=id=>createDreamPreset(id,model.metadata,model.initialBlocks[0]);
const generate=state=>generateDreamscape(state,model.metadata,{budget:12000});
const fixtures=Object.fromEntries(DREAM_PRESETS.map(p=>[p.id,generate(preset(p.id))]));

test('Dreamscape shares WorldState and grid editing without permitting dream types in a town state',()=>{
 const store=createWorldStore({version:1,mode:'dreamscape',inputMode:'web',blocks:[]}),input=new WebInputAdapter(store,model.metadata,model.initialBlocks[0],{types:DREAM_TYPES});
 const id=input.add('memory');input.setHeight(id,3);assert.equal(store.getWorldState().blocks.length,3);
 const column=store.getWorldState().blocks.slice().sort((a,b)=>a.heightLevel-b.heightLevel);
 assert.ok(Math.abs(column[2].position.y-column[1].position.y-model.metadata.placementStackStep)<1e-10);
 input.moveStep(id,'right');assert.equal(store.getWorldState().blocks.find(b=>b.id===id).heightLevel,1);
 assert.throws(()=>input.add('human'));assert.throws(()=>createWorldStore({...store.snapshot(),mode:undefined}));
});
test('fixed input produces identical structure and particles independent of IDs and block order',()=>{
 const state=preset('dream'),before=structuredClone(state),a=fixtures.dream,b=generate({...state,blocks:state.blocks.slice().reverse().map((v,i)=>({...v,id:`new-${i}`}))});
 assert.equal(a.seed,b.seed);assert.deepEqual(a.structuralPlan,b.structuralPlan);assert.deepEqual(a.particles.positions,b.particles.positions);assert.deepEqual(a.particles.colors,b.particles.colors);assert.deepEqual(state,before);
 assert.equal(a.mode,'dreamscape');assert.equal(a.worldStateSnapshot.mode,'dreamscape');
});
test('positions and stacking intensities have spatial consequences with smooth field falloff',()=>{
 const base=preset('light'),analysis=analyzeDream(base,model.metadata),fields=generateDreamFields(analysis),source=analysis.sources.find(s=>s.type==='desire');
 assert.ok(sampleFields(fields,source.x,source.z).attraction>sampleFields(fields,source.x+20,source.z+20).attraction*5);
 const shifted=structuredClone(base);shifted.blocks.filter(b=>b.type==='desire').forEach(b=>b.position.x-=3);
 const changed=generate(shifted);assert.notEqual(changed.seed,fixtures.light.seed);assert.notDeepEqual(changed.navigationPlan,fixtures.light.navigationPlan);
 const flat={...base,blocks:base.blocks.filter(b=>b.heightLevel===1)},flatFields=generateDreamFields(analyzeDream(flat,model.metadata));assert.ok(fields.peaks.attraction>flatFields.peaks.attraction);
});
test('five controlled arrangements have different structures, atmosphere, fractures and destinations',()=>{
 const {remember:A,feeling:B,fracture:C,light:D,edge:E}=fixtures;
 const mean=(r,key)=>r.structuralPlan.nodes.reduce((s,n)=>s+n[key],0)/r.structuralPlan.nodes.length;
 assert.ok(mean(A,'coherence')>mean(C,'coherence'));assert.ok(mean(C,'fracture')>mean(A,'fracture')+.5);
 assert.ok(B.particles.layers.atmosphere>A.particles.layers.atmosphere);assert.equal(A.particles.layers.attractor,0);
 assert.ok(D.particles.layers.attractor>0);assert.ok(E.particles.layers.fracture>0);assert.ok(E.particles.layers.attractor>0);
 assert.equal(D.structuralPlan.destination,D.structuralPlan.nodes.find(n=>n.isAttractor).id);
 assert.ok(Math.min(...E.structuralPlan.edges.map(e=>e.width))<Math.min(...D.structuralPlan.edges.map(e=>e.width)));
 assert.equal(new Set(Object.values(fixtures).map(r=>JSON.stringify(r.particleConfig.layers))).size,6);
});
test('every composition has a continuous walkable journey, valid spawn and bounded navigation',()=>{
 for(const r of Object.values(fixtures)){
  const nav=r.navigationPlan;assert.ok(isDreamWalkable(nav,nav.spawn));assert.equal(r.structuralPlan.route.length,r.structuralPlan.nodes.length);
  for(const e of nav.segments){for(let i=0;i<=100;i++){const t=i/100;assert.ok(isDreamWalkable(nav,{x:e.a.x+(e.b.x-e.a.x)*t,z:e.a.z+(e.b.z-e.a.z)*t}));}}
  let p={...nav.spawn};for(let i=0;i<1000;i++){p=moveInDream(nav,p,.2,.13);assert.ok(isDreamWalkable(nav,p));}
  assert.ok(!isDreamWalkable(nav,{x:100,z:100}));
  assert.ok(r.particles.count<=12000);for(const value of r.particles.positions)assert.ok(Number.isFinite(value));
 }
});
test('a lone force and a fear-only arrangement retain an entry and usable destination',()=>{
 const state=preset('edge');state.blocks=state.blocks.filter(b=>b.type==='fear').slice(0,1);const r=generate(state);
 assert.equal(r.structuralPlan.nodes.length,2);assert.equal(r.structuralPlan.edges.length,1);assert.ok(isDreamWalkable(r.navigationPlan,r.navigationPlan.spawn));
 assert.throws(()=>generate({...state,blocks:[]}));
});
test('physical snapshots adapt at the semantic boundary without changing original input',()=>{
 const physical={version:1,inputMode:'physical',blocks:[{...model.initialBlocks[0],type:'human'}]},before=structuredClone(physical),dream=toDreamWorldState(physical);
 assert.equal(dream.blocks[0].type,'memory');assert.equal(dream.inputMode,'physical');assert.deepEqual(physical,before);createWorldStore(dream);generate(dream);
 assert.throws(()=>generate({...dream,blocks:[{...dream.blocks[0],type:'unknown'}]}));
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
  controller=new DreamExploreController(camera,controls,canvas,()=>{});const r=fixtures.light,immutable=structuredClone(r.navigationPlan);controller.setNavigation(r.navigationPlan);controller.enter();controller.update(.016,performance.now(),reduced);
  assert.equal(controller.active,true);assert.equal(controls.enabled,false);assert.ok(Math.abs(camera.position.y-1.65)<1e-10);
  const start={...controller.position};controller.hold('KeyW',true);for(let i=0;i<30;i++)controller.update(.016,performance.now(),reduced);controller.hold('KeyW',false);
  assert.ok(Math.hypot(controller.position.x-start.x,controller.position.z-start.z)>.5);assert.ok(isDreamWalkable(r.navigationPlan,controller.position));assert.ok(Math.abs(camera.position.y-1.65)<1e-10);
  reduced=false;controller.hold('KeyW',true);controller.update(.016,performance.now(),reduced);assert.notEqual(camera.position.y,1.65);
  win.dispatchEvent(new Event('blur'));assert.equal(controller.keys.size,0);
  controller.exit(true);assert.equal(controller.active,false);assert.ok(camera.position.equals(saved));assert.equal(controls.enabled,true);assert.deepEqual(r.navigationPlan,immutable);
 }finally{controller?.dispose();for(const [key,value] of Object.entries(original)){if(value===undefined)delete globalThis[key];else globalThis[key]=value;}}
});
