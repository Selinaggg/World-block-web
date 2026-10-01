import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import * as THREE from '../dist/vendor/three.module.js';
import {OBJLoader} from '../dist/vendor/OBJLoader.js';
import {prepareWorldBlocksModel} from '../dist/src/model/loadWorldBlocksModel.js';
import {createExample,EXAMPLES} from '../dist/src/examples/presets.js';
import {HumanTownGenerator} from '../dist/src/town/HumanTownGenerator.js';
import {TownWalker,hitsCollider,planExploration} from '../dist/src/town/Walkability.js';
import {TownExploreController} from '../dist/src/components/TownExploreController.js';
import {TOWN_SCALE as S,fenceSegments} from '../dist/src/town/scale.js';
import {toWorld} from '../dist/src/town/spatial.js';
import {route} from '../dist/src/town/RoadGenerator.js';
import {townConfig} from '../dist/src/town/config.js';
import {buildingSite} from '../dist/src/town/BuildingSite.js';

const model=prepareWorldBlocksModel(new OBJLoader().parse(readFileSync(new URL('../dist/models/worldblocks.obj',import.meta.url),'utf8')));
const towns=await Promise.all(EXAMPLES.map(e=>new HumanTownGenerator().generate(createExample(e.id,model.metadata,model.initialBlocks[0]).world,model.metadata)));
function flatResult(height=.3){const c=townConfig({margin:0}),terrain={resolution:64,size:c.size,margin:0,seaLevel:0,heights:new Float32Array(64*64).fill(height)};
 return {terrain,terrainConfig:c,environment:{trees:[],rocks:[],animals:[]},settlementPlan:{centre:null,nodes:[],neighbourhoods:[],buildingPlots:[],roads:[],fields:[],docks:[]}};
}
function geometry(blockedZones=[],walkableZones=[]){return {blockedZones,walkableZones};}

test('all real OBJ examples have a safe spawn, reachable districts, and physically traversable streets',()=>{
 for(const r of towns){const p=r.settlementPlan,e=p.exploration,w=new TownWalker(r),spawn=e.defaultSpawn;
  assert.ok(spawn);assert.ok(w.at(spawn).valid);assert.deepEqual(e.unreachable,[]);assert.equal(e.reachableRoads.length,p.roads.length);
  assert.ok(e.importantDestinations.some(d=>d.kind==='residential'&&d.reachable));assert.ok(e.importantDestinations.some(d=>d.kind!=='residential'&&d.reachable));
  const departure=w.move(spawn,.08,0);assert.ok(Math.hypot(departure.x-spawn.x,departure.z-spawn.z)>.07);
  for(const road of p.roads){let position=toWorld(road.points[0],r.terrainConfig);position.y=w.at(position).y;
   for(const point of road.points.slice(1)){const target=toWorld(point,r.terrainConfig);position=w.move(position,target.x-position.x,target.z-position.z);assert.ok(Math.hypot(position.x-target.x,position.z-target.z)<.002,road.id);assert.ok(Math.abs(position.y-w.surface(position).y)<1e-6);}
  }
 }
});

test('building bodies, porches, kilns, trunks and rocks block movement without canopy-sized collision',()=>{
 const r=towns[0],e=r.settlementPlan.exploration,w=new TownWalker(r);
 for(const plot of r.settlementPlan.buildingPlots){assert.equal(w.at(toWorld(plot,r.terrainConfig)).valid,false);assert.equal(plot.collider.id,plot.id);}
 assert.ok(e.blockedZones.some(c=>c.id.endsWith('-porch')));assert.ok(e.blockedZones.some(c=>c.id.endsWith('-kiln')));
 const tree=e.blockedZones.find(c=>c.id.startsWith('tree-'));assert.ok(tree.radius<.09);assert.ok(!hitsCollider({x:tree.x+.20,z:tree.z},tree));
 const result=flatResult(),body={kind:'building',id:'house',x:0,z:0,rotation:Math.PI/4,halfWidth:.3,halfDepth:.2},walker=new TownWalker(result,geometry([body]));
 const end=walker.move({x:-2,z:0,y:.3},4,0);assert.ok(end.x<0,'substeps prevent tunnelling through an entire building');assert.ok(!hitsCollider(end,body));
 const rock=new TownWalker(result,geometry([{kind:'circle',id:'rock',x:0,z:0,radius:.13}]));assert.ok(rock.move({x:-1,z:0,y:.3},2,0).x<-.15);
});

test('fences use visible gate openings and block their other spans',()=>{
 const r=flatResult(),f={x:.5,z:.5,radius:.05};r.settlementPlan.fields=[f];r.settlementPlan.exploration=planExploration(r);
 const w=new TownWalker(r),north=-f.radius*.84*12,gateX=-f.radius*.84*12*.25;
 assert.equal(fenceSegments(f).length,15);
 assert.ok(w.clearPath({x:gateX,z:north-.15},{x:gateX,z:north+.15}));
 assert.equal(w.clearPath({x:.35,z:north-.15},{x:.35,z:north+.15}),false);
});

test('deep water, steep ground and world edges stop walking; bridges and docks support it at deck height',()=>{
 const r=flatResult(-.3),w=new TownWalker(r,geometry());assert.equal(w.at({x:0,z:0}).reason,'water');assert.equal(w.at({x:20,z:0}).reason,'boundary');
 const deck={kind:'path',id:'bridge',a:{x:-1,z:0,y:.35},b:{x:1,z:0,y:.35},width:S.bridgeWidth,bridge:true};
 const bridge=new TownWalker(r,geometry([], [deck]));assert.ok(bridge.clearPath({x:-1,z:0},{x:1,z:0}));assert.equal(bridge.surface({x:0,z:0}).y,.35);assert.equal(bridge.at({x:0,z:.3}).reason,'water');
 const dock=new TownWalker(r,geometry([],[{...deck,kind:'dock',width:S.dockWidth}]));assert.ok(dock.at({x:.9,z:0}).valid);assert.equal(dock.at({x:1.04,z:0}).valid,false,'cannot float beyond the last dock board');
 const steep=flatResult();for(let z=0;z<64;z++)for(let x=0;x<64;x++)steep.terrain.heights[z*64+x]=1+x/63*12*1.2;
 assert.equal(new TownWalker(steep,geometry()).at({x:0,z:0}).reason,'slope');
});

test('short water crossings produce continuously walkable deck approaches, and cliffs do not get primary roads',()=>{
 const r=flatResult(),n=64;for(let z=0;z<n;z++)for(let x=30;x<=33;x++)r.terrain.heights[z*n+x]=-.3;
 const points=route({x:.3,z:.5},{x:.7,z:.5},r.terrain,r.terrainConfig);assert.ok(points?.some(p=>p.bridge));
 r.settlementPlan.roads=[{id:'crossing',from:'a',to:'b',width:S.bridgeWidth/12,points}];r.settlementPlan.exploration=planExploration(r);const w=new TownWalker(r);
 for(let i=1;i<points.length;i++)assert.ok(w.clearPath(toWorld(points[i-1],r.terrainConfig),toWorld(points[i],r.terrainConfig)));
 const cliff=flatResult();for(let z=0;z<n;z++)for(let x=32;x<n;x++)cliff.terrain.heights[z*n+x]=3;
 assert.equal(route({x:.3,z:.5},{x:.7,z:.5},cliff.terrain,cliff.terrainConfig),null);
});

test('street-level architecture uses human scale, grounded entries and no balconies on single-storey roofs',()=>{
 assert.ok(S.doorHeight>S.humanHeight);assert.ok(S.eyeHeight<S.humanHeight);assert.ok(S.pathWidth>S.playerRadius*4);
 for(const r of towns)for(const plot of r.settlementPlan.buildingPlots){if(plot.config.floors===1)assert.equal(plot.config.hasBalcony,false);
  const site=buildingSite(plot,r.terrain,r.terrainConfig);assert.ok(site.top>site.bottom);
  for(const step of site.steps){assert.ok(step.height>0);assert.ok(r.settlementPlan.exploration.walkableZones.some(s=>s.id===step.id&&s.y===step.y));}
 }
});

test('controller supports movement, faster walking, look, Escape, blur and exact camera return without changing the town',async()=>{
 const saved=new Map(['document','window','matchMedia'].map(k=>[k,Object.getOwnPropertyDescriptor(globalThis,k)]));
 const doc=new EventTarget(),win=new EventTarget(),canvas=new EventTarget();doc.pointerLockElement=null;canvas.setPointerCapture=()=>{};
 doc.exitPointerLock=()=>{doc.pointerLockElement=null;doc.dispatchEvent(new Event('pointerlockchange'));};
 canvas.requestPointerLock=()=>{doc.pointerLockElement=canvas;doc.dispatchEvent(new Event('pointerlockchange'));return Promise.resolve();};
 const emit=(target,type,properties)=>{const e=new Event(type,{cancelable:true});Object.assign(e,properties);target.dispatchEvent(e);return e;};
 Object.defineProperty(globalThis,'document',{configurable:true,value:doc});Object.defineProperty(globalThis,'window',{configurable:true,value:win});Object.defineProperty(globalThis,'matchMedia',{configurable:true,value:()=>({matches:false})});
 let controller;
 try{
  const camera=new THREE.PerspectiveCamera(36,1.6,.1,150);camera.position.set(9,13,22);camera.lookAt(0,.25,0);
  const controls={enabled:true,enableDamping:true,update(){}},originalCamera=camera.clone();
  controller=new TownExploreController(camera,controls,canvas);
  const r=towns[0],snapshot=JSON.stringify(r);controller.setWorld(r);assert.equal(controller.mode,'diorama');assert.ok(controller.enter());assert.equal(controls.enabled,false);
  controller.update(.016,performance.now()+2000);assert.equal(controller.transition,null);assert.equal(controller.camera.fov,S.fieldOfView);assert.ok(Math.abs(controller.camera.position.y-controller.position.y-S.eyeHeight)<1e-8);
  const initial={...controller.position},t0=performance.now();emit(doc,'keydown',{code:'KeyW'});for(let i=0;i<10;i++)controller.update(.02,t0+i*20);emit(doc,'keyup',{code:'KeyW'});
  const normal=Math.hypot(controller.position.x-initial.x,controller.position.z-initial.z);assert.ok(Math.abs(normal-S.walkSpeed*.2)<.001);
  const second={...controller.position};emit(doc,'keydown',{code:'ArrowUp'});emit(doc,'keydown',{code:'ShiftLeft'});for(let i=0;i<10;i++)controller.update(.02,t0+300+i*20);
  const fast=Math.hypot(controller.position.x-second.x,controller.position.z-second.z);assert.ok(fast>normal*1.5);
  // A flat unobstructed corridor isolates gait from uneven-ground smoothing.
  const actualWalker=controller.walker;controller.walker={move:(p,dx,dz)=>({...p,x:p.x+dx,z:p.z+dz}),district:()=> 'Test corridor'};
  controller.keys.clear();controller.hold('KeyW',true);controller.eyeY=controller.position.y+S.eyeHeight;
  const offsets=[];for(let i=0;i<100;i++){controller.update(.02,t0+600+i*20);offsets.push(controller.camera.position.y-controller.position.y-S.eyeHeight);}
  assert.ok(Math.max(...offsets)>.006&&Math.min(...offsets)<-.006,'walking has visible but small footfall lift');
  assert.ok(offsets.every(v=>Math.abs(v)<.010),'head movement stays below ten centimetres');
  const blockedPhase=controller.gaitPhase;controller.walker.move=p=>({...p});
  for(let i=0;i<100;i++)controller.update(.02,t0+3000+i*20);
  assert.equal(controller.gaitPhase,blockedPhase,'pushing into a wall does not keep stepping');assert.equal(controller.gaitWeight,0);
  controller.walker=actualWalker;controller.keys.clear();
  const yaw=controller.yaw;emit(doc,'pointermove',{movementX:40,movementY:20});assert.notEqual(controller.yaw,yaw);
  emit(doc,'keydown',{code:'Escape'});assert.equal(doc.pointerLockElement,null);assert.equal(controller.keys.size,0);assert.equal(controller.mode,'explore');
  emit(doc,'keydown',{code:'KeyW'});emit(win,'blur',{});assert.equal(controller.keys.size,0);
  controller.exit();controller.update(.016,performance.now()+2000);assert.equal(controller.mode,'diorama');assert.equal(controls.enabled,true);
  assert.deepEqual(camera.position,originalCamera.position);assert.deepEqual(camera.quaternion.toArray(),originalCamera.quaternion.toArray());assert.equal(JSON.stringify(r),snapshot);
  // Unsupported pointer lock must still allow drag-look; touch hold reuses movement inputs.
  canvas.requestPointerLock=()=>Promise.reject(new Error('Unsupported'));
  controller.enter();await Promise.resolve();controller.update(.016,performance.now()+2000);assert.equal(controller.dragLook,true);
  const oldYaw=controller.yaw;emit(canvas,'pointerdown',{pointerId:1,pointerType:'touch',clientX:10,clientY:20});emit(doc,'pointermove',{pointerId:1,clientX:70,clientY:30});assert.notEqual(controller.yaw,oldYaw);
  controller.hold('KeyW',true);assert.ok(controller.keys.has('KeyW'));controller.hold('KeyW',false);assert.equal(controller.keys.size,0);
  controller.exit(true);assert.equal(controller.activeCamera,camera);
  // A new result while entering cancels old input and cannot carry the old spawn forward.
  controller.enter();controller.setWorld(towns[1]);assert.equal(controller.mode,'diorama');assert.equal(controller.result,towns[1]);
  Object.defineProperty(globalThis,'matchMedia',{configurable:true,value:q=>({matches:q.includes('reduced-motion')})});
  controller.enter();controller.update(.016,performance.now());assert.equal(controller.transition,null,'reduced motion enters without camera travel');
  controller.hold('KeyW',true);for(let i=0;i<10;i++)controller.update(.02,performance.now()+i*20);assert.equal(controller.gaitWeight,0);assert.equal(controller.camera.rotation.z,0,'reduced motion has no gait roll');
  controller.exit();controller.update(.016,performance.now());assert.equal(controller.mode,'diorama');
 }finally{controller?.dispose();for(const [key,descriptor] of saved)if(descriptor)Object.defineProperty(globalThis,key,descriptor);else delete globalThis[key];}
});

test('without Human, terrain stays available in diorama but has no invalid first-person spawn',async()=>{
 const r=await new HumanTownGenerator().generate({version:1,inputMode:'web',blocks:[]},model.metadata);assert.equal(r.settlementPlan.exploration.defaultSpawn,null);
});
