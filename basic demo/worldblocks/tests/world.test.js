import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {OBJLoader} from '../dist/vendor/OBJLoader.js';
import {Box3,Vector3,Mesh,MeshBasicMaterial,Raycaster,DoubleSide,EdgesGeometry,WireframeGeometry} from '../dist/vendor/three.module.js';
import {prepareWorldBlocksModel} from '../dist/src/model/loadWorldBlocksModel.js';
import {MODEL_CONFIG} from '../dist/src/config.js';
import {createWorldStore} from '../dist/src/world/worldStore.js';
import {WebInputAdapter} from '../dist/src/input/WebInputAdapter.js';
import * as spatial from '../dist/src/world/spatialAnalysis.js';
import {MockWorldGenerator} from '../dist/src/generation/MockWorldGenerator.js';
const text=readFileSync(new URL('../dist/models/worldblocks.obj',import.meta.url),'utf8');
const model=prepareWorldBlocksModel(new OBJLoader().parse(text));
const initial={version:1,inputMode:'web',blocks:model.initialBlocks};
function setup(){const store=createWorldStore(initial);return{store,adapter:new WebInputAdapter(store,model.metadata)};}

test('actual OBJ: 217 independent modules, 4 fixed sections, exact arrangement and triangle counts survive normalization',()=>{
  assert.equal(model.initialBlocks.length,217);assert.equal(model.fixed.length,4);
  const source=new OBJLoader().parse(text);source.rotation.x=-Math.PI/2;source.updateMatrixWorld(true);
  const bounds=new Box3().setFromObject(source),center=bounds.getCenter(new Vector3()),scale=model.metadata.sourceScale;
  for(const b of model.initialBlocks){const mesh=source.children.find(o=>o.name===b.sourceObjectName);const c=new Box3().setFromObject(mesh).getCenter(new Vector3());
    assert.ok(Math.abs(b.position.x-(c.x-center.x)*scale)<1e-6);
    assert.ok(Math.abs(b.position.y-(c.y-bounds.min.y)*scale)<1e-6);
    assert.ok(Math.abs(b.position.z-(c.z-center.z)*scale)<1e-6);
    assert.equal(model.geometries.get(b.id).attributes.position.count,mesh.geometry.attributes.position.count);
  }
  assert.ok(Math.max(...model.initialBlocks.map(b=>b.position.y))>9);
});
test('semantic assignment is deterministic and merged geometry fails explicitly',()=>{
  const again=prepareWorldBlocksModel(new OBJLoader().parse(text));assert.deepEqual(again.initialBlocks,model.initialBlocks);
  assert.deepEqual(spatial.getTypeCounts(initial),{water:44,fire:44,earth:43,human:43,animal:43});
  const one=new OBJLoader().parse('v 0 0 0\nv 1 0 0\nv 0 1 0\nf 1 2 3\n');
  assert.throws(()=>prepareWorldBlocksModel(one),/merged/);
});
test('drag clamp, discrete height, semantic edits, deletion and reset preserve immutable snapshots',()=>{
  const{store,adapter}=setup(),original=store.snapshot(),id=original.blocks[0].id;let calls=0;const unsubscribe=store.subscribe(()=>calls++);
  adapter.move(id,{x:1e6,z:-1e6});let b=store.getWorldState().blocks[0];
  assert.equal(b.position.y,original.blocks[0].position.y);assert.ok(b.position.x<model.metadata.bounds.maxX);assert.ok(b.position.z>model.metadata.bounds.minZ);
  adapter.setHeight(id,2);b=store.getWorldState().blocks[0];assert.ok(Math.abs(b.position.y-original.blocks[0].position.y-model.metadata.stackStep)<1e-10);
  adapter.setType(id,'animal');assert.equal(store.getWorldState().blocks[0].type,'animal');assert.equal(original.blocks[0].type,'water');
  const added=adapter.add('earth');assert.equal(store.getWorldState().blocks.length,218);assert.equal(store.getWorldState().blocks.at(-1).heightLevel,1);
  adapter.remove(added);adapter.remove(id);assert.equal(store.getWorldState().blocks.length,216);
  adapter.reset();assert.deepEqual(store.snapshot(),original);assert.equal(calls,7);unsubscribe();
  assert.throws(()=>adapter.move('base',{x:1,z:1}),/not found/);assert.throws(()=>adapter.setType(id,'neon'),/Unknown/);
  assert.throws(()=>adapter.setHeight(id,0),/outside/);assert.throws(()=>adapter.move(id,{x:NaN,z:0}),/finite/);
  adapter.setLocked(true);assert.throws(()=>adapter.add('water'),/Finish reading/);assert.deepEqual(store.snapshot(),original);
});
test('objective spatial facts distinguish horizontal distance from elevation and handle empty worlds',()=>{
  const make=(id,type,x,y,z,h)=>({id,type,sourceObjectName:id,position:{x,y,z},rotation:{x:0,y:0,z:0},heightLevel:h});
  const a=make('a','water',0,0,0,1),b=make('b','animal',3,4,0,5),state={version:1,inputMode:'web',blocks:[a,b]};
  assert.equal(spatial.getDistance(a,b),5);assert.equal(spatial.getHorizontalDistance(a,b),3);
  assert.equal(spatial.getNearbyBlocks(state,a,4).length,0);assert.equal(spatial.getNearestBlock(state,a).id,'b');
  const meta={diameter:1,bounds:{minX:0,maxX:10,minZ:0,maxZ:10}};
  const analysis=spatial.getSpatialRelationships(state,meta);assert.equal(analysis.neighbourPairs,0);assert.equal(analysis.nearestTypePairs[0].relation,'Far');
  assert.deepEqual(spatial.normalizePosition({x:5,z:5},meta.bounds),{x:.5,z:.5});assert.deepEqual(spatial.getHighestBlocks(state).map(b=>b.id),['b']);
  const empty=spatial.getSpatialRelationships({...state,blocks:[]},meta);assert.equal(empty.averageNeighbours,0);assert.deepEqual(empty.heightRange,{min:0,max:0});assert.deepEqual(empty.dominantTypes,[]);
});
test('generation accepts data only; edits create distinct snapshots and before/after changes',async()=>{
  const{store,adapter}=setup(),generator=new MockWorldGenerator(),first=store.snapshot();
  const firstResult=await generator.generate(first,spatial.getSpatialRelationships(first,model.metadata));
  adapter.setType(first.blocks[0].id,'animal');adapter.setHeight(first.blocks[0].id,2);adapter.add('human');
  const second=store.snapshot(),secondResult=await generator.generate(second,spatial.getSpatialRelationships(second,model.metadata));
  assert.equal(first.blocks.length,217);assert.equal(second.blocks.length,218);assert.notEqual(firstResult.description,secondResult.description);
  assert.equal(firstResult.mode,'mock');assert.equal(firstResult.imageUrl,null);assert.deepEqual(spatial.compareWorlds(first,second),{added:1,removed:0,moved:1,retyped:1});
  await assert.rejects(()=>generator.generate({...first,blocks:[]},{}),/Add an element/);
});
test('invalid hardware payloads cannot replace valid state',()=>{
  const{store}=setup();assert.throws(()=>store.replace({...initial,blocks:[initial.blocks[0],initial.blocks[0]]}),/unique/);
  assert.throws(()=>store.replace({...initial,inputMode:'untrusted'}),/envelope/);assert.equal(store.getWorldState().blocks.length,217);
});

test('empty sandbox adds modules inside genuine base recesses and resets back to empty',()=>{
  const store=createWorldStore({version:1,inputMode:'web',blocks:[]});
  const adapter=new WebInputAdapter(store,model.metadata,model.initialBlocks[0]);
  assert.equal(store.getWorldState().blocks.length,0);
  for(const type of ['water','fire','earth','human','animal'])adapter.add(type);
  assert.equal(store.getWorldState().blocks.length,5);
  for(const b of store.getWorldState().blocks){
    assert.equal(b.sourceObjectName,model.initialBlocks[0].sourceObjectName);
    assert.equal(b.heightLevel,1);
    assert.equal(b.position.y,model.metadata.firstCenterY);
    assert.ok(model.metadata.baseSeats.some(seat=>seat.x===b.position.x&&seat.z===b.position.z));
    assert.ok(b.position.y-model.metadata.moduleHeight/2<model.metadata.baseSurfaceY);
  }
  adapter.move(store.getWorldState().blocks[0].id,{x:2,z:1});
  adapter.reset();assert.deepEqual(store.getWorldState().blocks,[]);
  adapter.add('water');assert.equal(store.getWorldState().blocks.length,1);
});


test('lowest module bottom meets the actual recess floor, not the ridge-top bounding box',()=>{
  const store=createWorldStore({version:1,inputMode:'web',blocks:[]});
  const adapter=new WebInputAdapter(store,model.metadata,model.initialBlocks[0]);
  adapter.add('water');const block=store.getWorldState().blocks[0];
  const meshes=model.fixed.map(p=>{const mesh=new Mesh(p.geometry,new MeshBasicMaterial({side:DoubleSide}));mesh.position.copy(p.center);mesh.updateMatrixWorld();return mesh;});
  const ray=new Raycaster(new Vector3(block.position.x,10,block.position.z),new Vector3(0,-1,0));
  const floor=ray.intersectObjects(meshes,false)[0].point.y;
  const bottom=block.position.y-model.metadata.moduleHeight/2;
  assert.ok(bottom>=floor&&bottom-floor<model.metadata.moduleHeight*.01);
  assert.ok(model.metadata.baseSurfaceY-floor>model.metadata.moduleHeight*.4);
  adapter.setHeight(block.id,4);adapter.setHeight(block.id,1);
  assert.ok(Math.abs(store.getWorldState().blocks[0].position.y-block.position.y)<1e-10);
});
test('position repeat can stop at each sandbox boundary without changing height',()=>{
  const{store,adapter}=setup();const id=store.getWorldState().blocks[0].id,y=store.getWorldState().blocks[0].position.y;
  for(const [x,z] of [[1e6,0],[-1e6,0],[0,1e6],[0,-1e6]]){
    adapter.move(id,{x,z});const snapshot=store.getWorldState();
    assert.equal(adapter.move(id,{x,z}),false);assert.equal(store.getWorldState(),snapshot);
    assert.equal(store.getWorldState().blocks[0].position.y,y);
  }
});
test('base outline follows sharp facets without drawing coplanar triangle diagonals',()=>{
  for(const p of model.fixed){
    const edges=new EdgesGeometry(p.geometry,MODEL_CONFIG.baseEdgeAngle),wire=new WireframeGeometry(p.geometry);
    assert.ok(edges.attributes.position.count>0);assert.ok(edges.attributes.position.count<wire.attributes.position.count);
    edges.dispose();wire.dispose();
  }
});
