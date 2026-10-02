import test from 'node:test';
import assert from 'node:assert/strict';
import {HumanTownGenerator} from '../dist/src/town/HumanTownGenerator.js';
import {elementInfluenceAt,resolveArchitecture} from '../dist/src/town/BuildingGrammar.js';
import {ARCHITECTURE_FIXTURES,ARCHITECTURE_METADATA,architectureState} from '../dist/src/town/architectureFixtures.js';
import {buildTown} from '../dist/src/town/TownMeshes.js';
import {disposeWorld} from '../dist/src/generation/threeD/WorldMeshes.js';
import {TownWalker} from '../dist/src/town/Walkability.js';
import {Generated3DWorld} from '../dist/src/components/Generated3DWorld.js';
const towns=Object.fromEntries(await Promise.all(Object.keys(ARCHITECTURE_FIXTURES).map(async key=>[key,await new HumanTownGenerator().generate(architectureState(key),ARCHITECTURE_METADATA)])));
const configs=r=>r.settlementPlan.buildingPlots.map(p=>p.config);

test('five controlled arrangements have different architectural silhouettes, materials, props and landmark hierarchies',()=>{
 const expected={human:['town_house','bell_tower'],water:['waterfront_house','lighthouse'],earth:['terraced_house','windmill'],fire:['craft_house','kiln_tower'],animal:['farmhouse','silo']};
 const signatures=[];
 for(const [key,r] of Object.entries(towns)){
  const buildings=configs(r),plan=r.settlementPlan;
  assert.ok(buildings.some(b=>b.archetype===expected[key][0]),key);
  assert.equal(plan.landmarks.filter(l=>l.rank==='primary').length,1);assert.ok(plan.landmarks.length<=3);assert.equal(plan.landmarks[0].kind,expected[key][1]);
  assert.deepEqual(plan.exploration.unreachable,[],`${key}: functional areas remain accessible`);assert.ok(new TownWalker(r).at(plan.exploration.defaultSpawn).valid);
  signatures.push([...new Set(buildings.map(b=>`${b.roofType}/${b.foundation}/${b.width.toFixed(1)}/${b.floors}`))].sort().join(','));
  for(const plot of plan.buildingPlots){assert.deepEqual(Object.keys(plot.influence).sort(),['animal','earth','fire','human','water']);assert.ok(Object.values(plot.influence).every(v=>v>=0&&v<=1));}
 }
 assert.equal(new Set(signatures).size,5,'differences survive without colour or labels');
 assert.ok(configs(towns.water).some(b=>b.foundation==='stilts'&&b.hasDeck&&b.roofType==='wide_gable'));
 assert.ok(towns.water.environment.boats.length>0);assert.ok(towns.water.settlementPlan.docks.length>0);
 assert.ok(configs(towns.earth).some(b=>b.foundation==='terrace'&&b.hasTerrace));assert.ok(towns.earth.settlementPlan.fields.length>0);
 assert.ok(configs(towns.fire).some(b=>b.hasWorkshopExtension&&b.hasKiln&&b.props.includes('smoke')));
 assert.ok(configs(towns.animal).some(b=>b.hasStable&&b.width/b.depth>1.6));assert.ok(towns.animal.environment.animals.length>0);
 const rural=configs(towns.animal).filter(b=>b.dominantElement==='animal'),human=configs(towns.human).filter(b=>b.dominantElement==='human');
 assert.ok(Math.min(...rural.map(b=>b.layout.spacing))>Math.max(...human.map(b=>b.layout.spacing))*1.8);
});

test('influences change continuously by distance and strength; hybrids combine geometry rather than palette alone',()=>{
 const p={type:'water',x:.5,z:.5,heightLevel:1},near=elementInfluenceAt({x:.55,z:.5},[p]),far=elementInfluenceAt({x:.9,z:.5},[p]),next=elementInfluenceAt({x:.55001,z:.5},[p]);
 assert.ok(near.water>far.water);assert.ok(Math.abs(next.water-near.water)<.0001);assert.ok(elementInfluenceAt({x:.55,z:.5},[{...p,heightLevel:4}]).water>near.water);
 const common={human:.8,water:.05,earth:.1,fire:.03,animal:.02};
 const profiles=[resolveArchitecture('residential',common),resolveArchitecture('residential',{...common,water:.75}),resolveArchitecture('residential',{...common,earth:.75},{slope:.4}),resolveArchitecture('residential',{...common,fire:.75}),resolveArchitecture('residential',{...common,animal:.75})];
 assert.equal(new Set(profiles.map(b=>b.archetype)).size,5);
 const hybrid=resolveArchitecture('residential',{...common,water:.75,fire:.69});assert.equal(hybrid.archetype,'harbour_workshop');assert.ok(hybrid.hasDeck&&hybrid.hasWorkshopExtension&&hybrid.hasKiln&&hybrid.hasChimney);assert.equal(hybrid.foundation,'stilts');
});

test('a mixed waterfront and fire arrangement actually places hybrid architecture, and source movement changes its influence',async()=>{
 const state=architectureState('water');state.blocks.push({id:'craft',sourceObjectName:'module',type:'fire',heightLevel:3,position:{x:.56,y:3,z:.60},rotation:{x:0,y:0,z:0}});
 const r=await new HumanTownGenerator().generate(state,ARCHITECTURE_METADATA);assert.ok(configs(r).some(b=>b.archetype==='harbour_workshop'));
 const before=elementInfluenceAt({x:.46,z:.5},r.points);const fire=r.points.find(p=>p.type==='fire');fire.x=.95;fire.z=.95;const after=elementInfluenceAt({x:.46,z:.5},r.points);assert.ok(after.fire<before.fire*.25);
});

test('stronger Human increases both floor mix and street connectivity without high-rise buildings',async()=>{
 const make=height=>({version:1,inputMode:'web',blocks:[{id:'human',sourceObjectName:'module',type:'human',heightLevel:height,position:{x:.5,y:height,z:.5},rotation:{x:0,y:0,z:0}}]});
 const low=await new HumanTownGenerator().generate(make(1),ARCHITECTURE_METADATA),high=await new HumanTownGenerator().generate(make(4),ARCHITECTURE_METADATA);
 const mean=r=>configs(r).reduce((v,b)=>v+b.floors,0)/configs(r).length;
 assert.ok(configs(high).length>configs(low).length);assert.ok(mean(high)>mean(low));assert.ok(high.settlementPlan.roads.length>low.settlementPlan.roads.length);assert.ok(configs(high).every(b=>b.floors<=2));
});

test('all five render distinct finite geometry and debug colours restore original materials without recolouring terrain',()=>{
 for(const [key,r] of Object.entries(towns)){
  const root=buildTown(r),byPlot=new Map(),coloured=[];root.traverse(o=>{if(o.userData.architecture)byPlot.set(o.userData.plotId,o);if(o.isMesh){for(const value of o.geometry.attributes.position.array)assert.ok(Number.isFinite(value));if(o.userData.influenceElement&&!o.material.transparent)coloured.push([o,o.material]);}});
  assert.equal(byPlot.size,r.settlementPlan.buildingPlots.length);assert.ok(coloured.length>20);
  const terrain=root.children.find(o=>o.userData.label?.startsWith('Land')),terrainMaterial=terrain.material;
  const viewer={world:root,influenceMaterials:new Map()};Generated3DWorld.prototype.setInfluenceDebug.call(viewer,true);
  assert.equal(terrain.material,terrainMaterial);assert.ok(coloured.every(([o,m])=>o.material!==m));Generated3DWorld.prototype.setInfluenceDebug.call(viewer,false);assert.ok(coloured.every(([o,m])=>o.material===m));
  if(key==='fire')assert.ok(root.userData.smoke.length>=3);
  for(const material of viewer.influenceMaterials.values())material.dispose();disposeWorld(root);
 }
});
