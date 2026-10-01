import test from 'node:test';
import assert from 'node:assert/strict';
import {IslandGenerator} from '../dist/src/generation/threeD/IslandGenerator.js';
import {islandConfig} from '../dist/src/generation/threeD/config.js';
import {createTerrain,sampleTerrain} from '../dist/src/generation/threeD/TerrainGenerator.js';
import {buildIsland,disposeWorld} from '../dist/src/generation/threeD/WorldMeshes.js';
import {StageView} from '../dist/src/components/StageView.js';
const metadata={diameter:1,bounds:{minX:-5,maxX:5,minZ:-5,maxZ:5}};
const block=(type,x=0,z=0,level=1,id=type)=>({id,type,sourceObjectName:'module',position:{x,y:level,z},heightLevel:level,rotation:{x:0,y:0,z:0}});
const state=blocks=>({version:1,inputMode:'web',blocks});
const point=(type,x=.5,z=.5,heightLevel=1)=>({type,x,z,heightLevel});
const config=islandConfig({noiseAmplitude:0});
test('same snapshot yields identical geometry and content, independent of IDs/order/input envelope',async()=>{
  const g=new IslandGenerator(),input=state([block('earth'),block('animal',1,0)]),before=structuredClone(input);
  const a=await g.generate(input,metadata),b=await g.generate(input,metadata);
  assert.deepEqual(a.terrain,b.terrain);assert.deepEqual(a.layers,b.layers);assert.deepEqual(input,before);
  const reordered=state([...input.blocks].reverse().map((p,i)=>({...p,id:'new-'+i})));
  const c=await g.generate(reordered,metadata);assert.equal(c.seed,a.seed);assert.deepEqual(c.terrain,a.terrain);assert.deepEqual(c.layers,a.layers);
  input.blocks[0].position.x=4;assert.equal(a.worldStateSnapshot.blocks[0].position.x,0);
});
test('Earth follows positions, stacks grow taller, nearby Earth merges',()=>{
  const left=createTerrain([point('earth',.25,.5)],config),right=createTerrain([point('earth',.75,.5)],config);
  assert.ok(sampleTerrain(left,.25,.5).height>sampleTerrain(right,.25,.5).height+1);
  assert.ok(sampleTerrain(right,.75,.5).height>sampleTerrain(left,.75,.5).height+1);
  const tall=createTerrain([point('earth',.25,.5,4)],config);assert.ok(sampleTerrain(tall,.25,.5).height>sampleTerrain(left,.25,.5).height);
  const merged=createTerrain([point('earth',.4,.5),point('earth',.6,.5)],config);assert.ok(sampleTerrain(merged,.5,.5).height>config.seaLevel);
});
test('Water cuts terrain; Fire is sharper; life never adds elevation',()=>{
  const earth=createTerrain([point('earth')],config),wet=createTerrain([point('earth'),point('water')],config),fire=createTerrain([point('fire')],config);
  assert.ok(sampleTerrain(wet,.5,.5).height<sampleTerrain(earth,.5,.5).height-1);
  const earthDrop=sampleTerrain(earth,.5,.5).height-sampleTerrain(earth,.64,.5).height;
  assert.ok(sampleTerrain(fire,.5,.5).height-sampleTerrain(fire,.64,.5).height>earthDrop);
  assert.deepEqual(createTerrain([point('earth'),point('human'),point('animal')],config),earth);
});
test('trees and rocks use dry land and slope rules and produce real instanced 3D geometry',async()=>{
  const result=await new IslandGenerator().generate(state([block('earth'),block('animal',1,0),block('fire',-2,1)]),metadata);
  const {trees,rocks}=result.layers.environment;assert.ok(trees.length>0);assert.ok(rocks.length>0);
  for(const p of [...trees,...rocks]){const s=sampleTerrain(result.terrain,p.x/12+.5,p.z/12+.5);assert.ok(p.y>result.terrain.seaLevel);assert.ok(Math.abs(p.y-s.height)<1e-5);}
  for(const p of trees)assert.ok(sampleTerrain(result.terrain,p.x/12+.5,p.z/12+.5).slope<=result.terrainConfig.content.treeSlope);
  const group=buildIsland(result);assert.ok(group.children.some(m=>m.isInstancedMesh&&m.count===trees.length));
  const terrain=group.children[0];assert.equal(terrain.geometry.attributes.position.count,63*63*6);assert.ok(terrain.geometry.attributes.normal);
  const ys=Array.from(terrain.geometry.attributes.position.array).filter((_,i)=>i%3===1);assert.ok(Math.max(...ys)-Math.min(...ys)>1);disposeWorld(group);
});
test('local generation stages, physical input, 128 grid, and isolated validation failures',async()=>{
  const stages=[],g=new IslandGenerator({onProgress:s=>stages.push(s),config:{resolution:128}});
  const input={...state([block('earth')]),inputMode:'physical',input:{connected:true,status:'live',issues:[]}};
  const result=await g.generate(input,metadata);assert.equal(result.terrain.heights.length,128*128);assert.equal(stages.length,3);
  await assert.rejects(g.generate({...input,input:{connected:false}},metadata),/physical/);
  await assert.rejects(g.generate(state([block('unknown')]),metadata),/known/);
  await assert.rejects(g.generate(state([block('support')]),metadata),/Supports/);
  assert.equal(result.mode,'3d');
});
test('2.5D and 3D stages remain separate when switching, editing, failing or starting a new image',()=>{
  const s=new StageView(),image={id:'image',imageUrl:'actual.png'};s.update(image);const result={seed:42};s.setThreeD(result);
  assert.equal(s.view,'three');assert.equal(s.job,image);s.select('image');assert.equal(s.image,'actual.png');assert.equal(s.threeDResult,result);
  s.reset();assert.equal(s.available('three'),true);assert.equal(s.available('image'),false);assert.equal(s.threeDResult,result);
});
test('3D requires no fetch and keeps noise smaller than semantic terrain changes',async t=>{
  t.mock.method(globalThis,'fetch',()=>{throw new Error('3D must not request image API');});
  const g=new IslandGenerator(),a=await g.generate(state([block('earth')]),metadata),b=await g.generate(state([block('earth',0,0,2)]),metadata);
  assert.ok(sampleTerrain(b.terrain,.5,.5).height-sampleTerrain(a.terrain,.5,.5).height>a.terrainConfig.noiseAmplitude*2);
  assert.equal(globalThis.fetch.mock.calls.length,0);
});
test('Human produces nearby homes and Animal produces nearby real animal meshes, deterministically',async()=>{
  const input=state([block('earth',0,0,4),block('human',-.7,0),block('animal',.9,0)]),g=new IslandGenerator();
  const a=await g.generate(input,metadata),b=await g.generate(input,metadata);
  assert.deepEqual(a.layers.civilisation,b.layers.civilisation);assert.deepEqual(a.layers.life,b.layers.life);
  assert.ok(a.layers.civilisation.objects.length>0);assert.ok(a.layers.life.objects.length>0);
  for(const p of [...a.layers.civilisation.objects,...a.layers.life.objects]){
    const anchor=a.points[p.anchorIndex];assert.ok(Math.hypot(p.u-anchor.x,p.v-anchor.z)<=a.terrainConfig.semantic.radius+.001);
    assert.ok(p.y>=sampleTerrain(a.terrain,p.u,p.v).height);
  }
  const group=buildIsland(a);assert.ok(group.children.some(m=>m.isInstancedMesh&&m.userData.label.startsWith('Homes')));assert.ok(group.children.some(m=>m.isInstancedMesh&&m.userData.label.startsWith('Animals')));disposeWorld(group);
});
test('water-only life/human inputs retain their locations with water birds and raised homes',async()=>{
  const result=await new IslandGenerator().generate(state([block('water'),block('human',-2,0),block('animal',2,0)]),metadata);
  assert.equal(result.layers.civilisation.objects.length,3);assert.equal(result.layers.life.objects.length,5);
  assert.ok(result.layers.civilisation.objects.every(h=>h.stilt));assert.ok(result.layers.life.objects.every(a=>a.kind==='duck'));
  assert.ok(result.layers.life.objects.every(a=>a.y>result.terrain.seaLevel));
  const noLife=await new IslandGenerator().generate(state([block('earth')]),metadata);assert.equal(noLife.layers.civilisation.objects.length,0);assert.equal(noLife.layers.life.objects.length,0);
});
