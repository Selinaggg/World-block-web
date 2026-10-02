import test from 'node:test';
import assert from 'node:assert/strict';
import {HumanTownGenerator} from '../dist/src/town/HumanTownGenerator.js';
import {sampleTerrain} from '../dist/src/town/TerrainGenerator.js';
import {distance,fromNormalized,normalizedBlocks} from '../dist/src/town/spatial.js';
import {roadDistance} from '../dist/src/town/RoadGenerator.js';
import {TOWN_ARRANGEMENTS} from '../dist/src/examples/presets.js';
import {buildTown} from '../dist/src/town/TownMeshes.js';
import {disposeWorld} from '../dist/src/generation/threeD/WorldMeshes.js';
const metadata={bounds:{minX:0,maxX:1,minZ:0,maxZ:1},diameter:.08};
const state=entries=>({version:1,inputMode:'web',blocks:entries.map(([type,x,z,heightLevel=1],i)=>({id:`test-${i}`,type,sourceObjectName:'module',position:{x,y:heightLevel,z},rotation:{x:0,y:0,z:0},heightLevel}))});
const generate=entries=>new HumanTownGenerator().generate(state(entries),metadata);
const directional=TOWN_ARRANGEMENTS.coast;
test('A: cardinal resources create directional zones, roads and five building families',async()=>{
 const r=await generate(directional),p=r.settlementPlan;
 assert.ok(p.waterfrontZones[0].x>p.centre.x);assert.ok(p.productionZones[0].z>p.centre.z);assert.ok(p.agriculturalZones[0].x<p.centre.x);
 assert.ok(sampleTerrain(r.terrain,.48,.22).height>sampleTerrain(r.terrain,.1,.6).height);
 assert.deepEqual(new Set(p.buildingPlots.map(b=>b.config.family)),new Set(['civic','residential','production','rural','waterfront']));
 assert.ok(p.roads.length>=4);assert.ok(p.fields.length);assert.ok(p.docks.length);assert.ok(r.environment.animals.length);
 assert.ok(new Set(p.buildingPlots.map(b=>b.config.archetype)).size>=4);
});
test('B: separated Human clusters create two connected neighbourhoods',async()=>{
 const r=await generate(TOWN_ARRANGEMENTS.settlement),p=r.settlementPlan;assert.equal(p.neighbourhoods.length,2);
 const reached=new Set(['neighbourhood-0']);for(let i=0;i<p.nodes.length;i++)for(const road of p.roads){if(reached.has(road.from))reached.add(road.to);if(reached.has(road.to))reached.add(road.from);}assert.ok(reached.has('neighbourhood-1'));
 for(const n of p.neighbourhoods)assert.ok(p.buildingPlots.some(b=>b.config.family==='residential'&&b.node===n.id));
});
test('C/D/E: distance changes waterfront, farm scale and production location',async()=>{
 const close=await generate([['human',.5,.5,2],['water',.70,.5],['animal',.4,.5],['fire',.5,.7]]);
 const far=await generate([['human',.3,.3,2],['water',.88,.88],['animal',.7,.3],['fire',.3,.8]]);
 assert.ok(close.settlementPlan.waterfrontZones.length);assert.equal(far.settlementPlan.waterfrontZones.length,0);
 assert.equal(close.settlementPlan.agriculturalZones[0].rural,false);assert.equal(far.settlementPlan.agriculturalZones[0].rural,true);assert.ok(far.settlementPlan.productionZones[0].z>.65);
});
test('deterministic across order, IDs and input transport without mutating the input',async()=>{
 const g=new HumanTownGenerator(),s=state(directional),original=structuredClone(s),a=await g.generate(s,metadata);assert.deepEqual(s,original);
 s.blocks.reverse().forEach((b,i)=>b.id='other'+i);s.inputMode='physical';s.input={connected:true,status:'live',issues:[]};
 const b=await g.generate(s,metadata);assert.equal(a.seed,b.seed);assert.deepEqual(a.settlementPlan,b.settlementPlan);assert.deepEqual(a.environment,b.environment);
});
test('Human moves settlement, not terrain; no Human produces a gentle empty state',async()=>{
 const a=await generate([['earth',.5,.5]]),b=await generate([['earth',.5,.5],['human',.5,.5,3]]);
 assert.deepEqual(a.terrain.heights,b.terrain.heights);assert.equal(a.settlementPlan.buildingPlots.length,0);assert.match(a.summary,/Add a Human/);assert.ok(b.settlementPlan.buildingPlots.length);
 const moved=await generate([['earth',.5,.5],['human',.75,.75,3]]);assert.ok(distance(b.settlementPlan.centre,moved.settlementPlan.centre)>.2);
});
test('stacking strengthens water carving, Earth elevation and Human density',async()=>{
 const a=await generate([['human',.5,.5]]),b=await generate([['human',.5,.5,4]]);assert.ok(b.settlementPlan.buildingPlots.length>a.settlementPlan.buildingPlots.length);
 const low=await generate([['earth',.3,.3],['water',.75,.75]]),high=await generate([['earth',.3,.3,3],['water',.75,.75,3]]);
 assert.ok(sampleTerrain(high.terrain,.3,.3).height>sampleTerrain(low.terrain,.3,.3).height);assert.ok(sampleTerrain(high.terrain,.75,.75).height<sampleTerrain(low.terrain,.75,.75).height);
});
test('plots are dry, spaced and roadside; trees avoid roads and buildings',async()=>{
 const r=await generate(directional),p=r.settlementPlan,c=r.terrainConfig;
 for(const [i,b] of p.buildingPlots.entries()){
  const s=sampleTerrain(r.terrain,b.x,b.z);assert.ok(s.height>c.seaLevel+c.minLand);assert.ok(s.slope<c.maxSlope);assert.ok(roadDistance(b,p.roads)>b.radius);assert.ok(roadDistance(b,p.roads)<b.radius+.05);
  for(const other of p.buildingPlots.slice(i+1))assert.ok(distance(b,other)>b.radius+other.radius);
 }
 for(const t of r.environment.trees){assert.ok(roadDistance(t,p.roads)>=.025);assert.ok(p.buildingPlots.every(b=>distance(b,t)>b.radius+.013));assert.equal(t.y,sampleTerrain(r.terrain,t.x,t.z).height);}
});
test('town renders as finite Three.js geometry with instanced environment',async()=>{
 const root=buildTown(await generate(directional));let meshes=0,instances=0;
 root.traverse(o=>{if(o.isMesh){meshes++;for(const n of o.geometry.attributes.position.array)assert.ok(Number.isFinite(n));}if(o.isInstancedMesh)instances++;});assert.ok(meshes>100);assert.ok(instances>=3);disposeWorld(root);
});
test('explicit coordinate conversions preserve physical-unit independence',()=>{
 const bounds={minX:-12,maxX:18,minZ:-3,maxZ:7},s=state(directional),scaled=structuredClone(s);scaled.blocks.forEach(b=>Object.assign(b.position,fromNormalized(b.position,bounds)));
 const p=normalizedBlocks(s,metadata),q=normalizedBlocks(scaled,{bounds});for(let i=0;i<p.length;i++){assert.ok(Math.abs(p[i].x-q[i].x)<1e-9);assert.ok(Math.abs(p[i].z-q[i].z)<1e-9);}
});
test('a necessary narrow water crossing creates a raised bridge',async()=>{
 const {route}=await import('../dist/src/town/RoadGenerator.js');
 const {townConfig}=await import('../dist/src/town/config.js');
 const c=townConfig({margin:0}),n=64,heights=new Float32Array(n*n);
 for(let z=0;z<n;z++)for(let x=0;x<n;x++)heights[z*n+x]=x>=30&&x<=33?-.30:.30;
 const terrain={resolution:n,size:c.size,margin:0,seaLevel:0,heights};
 const path=route({x:.3,z:.5},{x:.7,z:.5},terrain,c);assert.ok(path);const deck=path.filter(p=>p.bridge);assert.ok(deck.length);assert.ok(deck.every(p=>p.y>=.30));
});
