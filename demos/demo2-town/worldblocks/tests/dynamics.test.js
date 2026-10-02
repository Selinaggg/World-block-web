import test from 'node:test';
import assert from 'node:assert/strict';
import {HumanTownGenerator} from '../dist/src/town/HumanTownGenerator.js';
import {ARCHITECTURE_METADATA,architectureState} from '../dist/src/town/architectureFixtures.js';
import {buildTown} from '../dist/src/town/TownMeshes.js';
import {TownDynamics} from '../dist/src/town/TownDynamics.js';
import {sampleAnimal,animalPointSafe,animalSegmentSafe} from '../dist/src/town/TownLifePlan.js';
import {disposeWorld} from '../dist/src/generation/threeD/WorldMeshes.js';
const generate=key=>new HumanTownGenerator().generate(architectureState(key),ARCHITECTURE_METADATA);
const towns=Object.fromEntries(await Promise.all(['human','water','earth','fire','animal'].map(async k=>[k,await generate(k)])));

test('life selection is reproducible, district-specific and bounded; generation remains serializable',async()=>{
 const again=await generate('animal');assert.deepEqual(again.environment,towns.animal.environment);
 const reordered=architectureState('animal');reordered.blocks.reverse();reordered.blocks.forEach((b,i)=>b.id='changed-'+i);
 const reversed=await new HumanTownGenerator().generate(reordered,ARCHITECTURE_METADATA);assert.deepEqual(reversed.environment,again.environment);
 const smoke=r=>r.settlementPlan.buildingPlots.filter(p=>p.config.smoke).map(p=>p.config.smoke);
 assert.ok(smoke(towns.human).includes('home'));assert.ok(smoke(towns.fire).includes('workshop'));
 assert.ok(smoke(towns.human).length<towns.human.settlementPlan.buildingPlots.length);
 assert.equal(towns.human.environment.boats.length,0);assert.ok(towns.water.environment.boats.length>0&&towns.water.environment.boats.length<=2);
 assert.equal(towns.human.environment.animals.length,0);assert.ok(towns.animal.environment.animals.length>=3&&towns.animal.environment.animals.length<=20);
 assert.ok(new Set(towns.animal.environment.animals.map(a=>a.species)).size>=2);
 assert.doesNotThrow(()=>JSON.stringify(again));
});

test('every animal route and sampled activity stays inside safe pasture space, with walking and grazing',()=>{
 let walking=0,grazing=0,moving=0;
 for(const a of towns.animal.environment.animals){
  for(let i=0;i<a.route.length;i++)assert.ok(animalSegmentSafe(towns.animal,a.route[i],a.route[(i+1)%a.route.length],a.zone,a.radius));
  const poses=[];
  for(let t=0;t<180;t+=.2){const p=sampleAnimal(a,t);assert.ok(animalPointSafe(towns.animal,p,a.zone,a.radius));assert.ok(Number.isFinite(p.heading));walking+=p.walking?1:0;grazing+=p.graze>.2?1:0;poses.push(p);}
  if(poses.some(p=>Math.hypot(p.x-poses[0].x,p.z-poses[0].z)>.003))moving++;
 }
 assert.ok(walking>0&&grazing>0&&moving>0);
});

test('shared dynamics move boats, smoke, water, animals and functional details without changing the generated snapshot',()=>{
 for(const [key,result] of Object.entries(towns)){
  const before=JSON.stringify(result),root=buildTown(result),d=new TownDynamics(root,result),r=d.registry;
  const boat=r.ambient.boats[0],startY=boat?.mesh.position.y,animal=r.living.animals[0],start=animal?.mesh.position.clone(),rotor=r.functional.rotors[0];
  for(let k=0;k<300;k++)d.update(1/30);
  assert.equal(JSON.stringify(result),before);assert.ok(r.ambient.water[0].time.value>9);
  if(boat){assert.notEqual(boat.mesh.position.y,startY);assert.ok(Math.abs(boat.mesh.position.y-boat.y)<=.0081);}
  if(animal)assert.ok(animal.mesh.position.distanceTo(start)>.001);
  if(rotor)assert.ok(rotor.mesh.rotation.z>rotor.base+1);
  for(const puff of root.userData.smoke||[]){assert.ok(puff.mesh.material.opacity>=0&&puff.mesh.material.opacity<=.45);assert.ok(puff.mesh.position.y>=puff.y);}
  if(key==='fire'){assert.ok(r.functional.glows.length>0);assert.ok(root.userData.smoke.some(p=>p.kind==='workshop'));}
  // Same animation layer freezes regardless of which camera views it.
  const t=d.time;d.update(.05,{reducedMotion:true});const frozen=animal?.mesh.position.clone();
  for(let i=0;i<10;i++)d.update(.05,{reducedMotion:true});assert.equal(d.time,t);assert.equal(r.ambient.water[0].strength.value,0);
  if(animal)assert.ok(animal.mesh.position.equals(frozen));if(boat)assert.equal(boat.mesh.position.y,boat.y);
  assert.ok((root.userData.smoke||[]).every(p=>!p.mesh.visible));
  d.update(.02);assert.ok(d.time>t);assert.ok((root.userData.smoke||[]).every(p=>p.mesh.visible));
  disposeWorld(root);
 }
});

test('water shader adds tiny bounded waves without changing the base water colour',()=>{
 const root=buildTown(towns.water),water=root.children.find(o=>o.userData.label?.startsWith('Water ·'));
 const shader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <color_fragment>'};water.material.onBeforeCompile(shader);
 assert.ok(shader.uniforms.lifeTime);assert.match(shader.vertexShader,/\.004/);assert.match(shader.fragmentShader,/\.035/);assert.equal(water.material.color.getHexString(),'48becd');
 disposeWorld(root);
});
