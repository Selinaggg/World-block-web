import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {OBJLoader} from '../dist/vendor/OBJLoader.js';
import {prepareWorldBlocksModel} from '../dist/src/model/loadWorldBlocksModel.js';
import {normalizeSnapshot} from '../dist/src/input/partner/worldblocks-client.mjs';
import {PhysicalInputAdapter,toPhysicalWorld} from '../dist/src/input/PhysicalInputAdapter.js';
import {WorldInputs} from '../dist/src/input/WorldInputs.js';
import {createWorldStore} from '../dist/src/world/worldStore.js';
import {ApiWorldGenerator} from '../dist/src/generation/ApiWorldGenerator.js';
import {getSpatialRelationships} from '../dist/src/world/spatialAnalysis.js';
const model=prepareWorldBlocksModel(new OBJLoader().parse(readFileSync(new URL('../dist/models/worldblocks.obj',import.meta.url),'utf8')));
const fixture=()=>JSON.parse(readFileSync(new URL('./fixtures/partner-empty.json',import.meta.url),'utf8'));
const norm=raw=>normalizeSnapshot(raw,{source:'mock'});
function setup(){
  const store=createWorldStore({version:1,inputMode:'web',blocks:[]});let callbacks,closed=0;
  const input=new WorldInputs(store,model.metadata,model.initialBlocks[0],()=>{},{connector:options=>{callbacks=options;options.onConnection('connecting');return{close(){closed++;options.onConnection('stopped');},reconnect(){options.onConnection('connecting');}};}});
  return{input,store,emit(raw){callbacks.onConnection('live');callbacks.onState(norm(raw));},disconnect(){callbacks.onConnection('reconnecting');},closed:()=>closed};
}
test('partner contract preserves ordered C5/unknown layers, canonical half offsets and column identity',()=>{
  const raw=fixture();raw.board['L0.5-r2-c1']=['type_0','type_5','type_3','unrecognized'];
  const world=toPhysicalWorld(norm(raw),model.metadata,model.initialBlocks[0].sourceObjectName);
  assert.deepEqual(world.blocks.map(b=>b.type),['water','support','human','unknown']);
  assert.deepEqual(world.blocks.map(b=>b.physical.index),[0,1,2,3]);
  assert.deepEqual(world.blocks.map(b=>b.heightLevel),[2,4,6,8]);
  assert.deepEqual(world.blocks[0].physical.logicalPosition,{x:5.5,y:.5,z:.5});
  assert.equal(world.blocks[0].position.y,model.metadata.firstCenterY+model.metadata.stackStep);
  assert.ok(world.blocks.every(b=>b.physical.columnId==='L0.5-r2-c1'&&b.physical.needsAttention));
});
test('complete snapshots replace, identical events do not append and moved columns remove prior slots',()=>{
  const{input,store,emit}=setup();input.setMode('mock');input.connect('http://127.0.0.1:8790');
  const raw=fixture();raw.board['L0-r0-c0']=['type_0','type_3'];emit(raw);const ids=store.snapshot().blocks.map(b=>b.id);emit(raw);
  assert.deepEqual(store.snapshot().blocks.map(b=>b.id),ids);assert.equal(store.getWorldState().blocks.length,2);
  delete raw.board['L0-r0-c0'];raw.board['L0-r0-c1']=['type_0'];emit(raw);
  assert.equal(store.getWorldState().blocks.length,1);assert.equal(store.getWorldState().blocks[0].physical.columnId,'L0-r0-c1');
  raw.board={};emit(raw);assert.equal(store.getWorldState().blocks.length,0);input.close();
});
test('layout changes preserve slot identity; new boot sessions replace prior identity',()=>{
  const raw=fixture();raw.board['L0-r0-c0']=['type_0'];const first=toPhysicalWorld(norm(raw),model.metadata,'template');
  raw.module_layout.slots.reverse();const second=toPhysicalWorld(norm(raw),model.metadata,'template');
  assert.equal(first.blocks[0].id,second.blocks[0].id);assert.notEqual(first.blocks[0].position.x,second.blocks[0].position.x);
  raw.topology.boot_id='new-boot';assert.notEqual(toPhysicalWorld(norm(raw),model.metadata,'template').blocks[0].id,first.blocks[0].id);
});
test('manual edits survive mode changes; copying physical adds to the draft and remains editable',()=>{
  const{input,store,emit}=setup();const id=input.add('fire');input.setHeight(id,3);const manual=store.snapshot();
  input.setMode('mock');input.connect('http://127.0.0.1:8790');const raw=fixture();raw.board['L0-r0-c0']=['type_0','type_5'];emit(raw);
  assert.throws(()=>input.add('water'),/Finish reading/);
  input.setMode('manual');assert.deepEqual(store.snapshot(),manual);
  input.setMode('mock');input.connect('http://127.0.0.1:8790');emit(raw);assert.equal(input.copyToManual(),2);
  assert.equal(store.getWorldState().blocks.length,manual.blocks.length+2);assert.equal(store.getWorldState().blocks[0].heightLevel,3);
  const imported=store.getWorldState().blocks.find(b=>b.origin);assert.ok(imported.origin);assert.equal(imported.physical,undefined);
  input.setType(imported.id,'animal');input.move(imported.id,{x:1,z:1});assert.equal(store.getWorldState().blocks.find(b=>b.id===imported.id).type,'animal');input.reset();assert.equal(store.getWorldState().blocks.length,0);
});
test('transport loss, hardware offline, recovery, unknown and validated-height faults block generation without clearing cached stacks',()=>{
  const{input,store,emit,disconnect}=setup();input.setMode('mock');input.connect('http://127.0.0.1:8790');const raw=fixture();raw.board['L0-r0-c0']=['type_0'];emit(raw);assert.equal(input.canGenerate(),true);
  disconnect();assert.equal(input.canGenerate(),false);assert.equal(store.getWorldState().blocks.length,1);
  raw.connected=false;emit(raw);assert.equal(input.status.transport,'live');assert.equal(input.status.hardware,'offline');assert.equal(input.canGenerate(),false);
  raw.connected=true;raw.recovery.status='restoring';emit(raw);assert.equal(input.status.hardware,'recovering');assert.equal(input.canGenerate(),false);
  raw.recovery.status='idle';raw.active_faults['L0-r0-c0']={reason:'contact'};emit(raw);assert.equal(store.getWorldState().blocks.length,1);assert.equal(input.canGenerate(),false);
  raw.active_faults={};raw.board['L0-r0-c0']=Array(8).fill('type_0');emit(raw);assert.equal(input.status.hardware,'live');assert.equal(input.canGenerate(),false);assert.ok(input.status.issues.some(i=>i.reason==='beyond_validated_height'));
  raw.board['L0-r0-c0']=['unknown'];emit(raw);assert.equal(store.getWorldState().blocks[0].type,'unknown');assert.equal(input.canGenerate(),false);input.close();
});
test('physical mode requires a chosen code map and generation uses an immutable snapshot while live events buffer',()=>{
  const{input,store,emit}=setup();input.setMode('hardware');input.connect('http://127.0.0.1:8787');const raw=fixture();raw.board['L0-r0-c0']=['type_0'];emit(raw);assert.equal(input.canGenerate(),false);
  input.mappingConfirmed=true;assert.equal(input.canGenerate(),true);
  const captured=store.snapshot();input.setLocked(true);raw.board['L0-r0-c0'].push('type_3');emit(raw);
  assert.equal(store.getWorldState().blocks.length,1);input.setLocked(false);assert.equal(store.getWorldState().blocks.length,2);assert.equal(captured.blocks.length,1);input.close();
});
test('API generator posts captured data only on explicit calls and rejects missing images and service errors',async()=>{
  const{input,store}=setup();input.add('water');const snapshot=store.snapshot(),analysis=getSpatialRelationships(snapshot,model.metadata);let count=0;
  const generator=new ApiWorldGenerator({fetchImpl:async(url,options)=>{count++;assert.equal(url,'/api/generate');assert.deepEqual(JSON.parse(options.body),{worldState:snapshot,analysis});return{ok:true,json:async()=>({title:'Test world',description:'Transport fixture',imageUrl:'https://example.com/test.png'})};}});
  assert.equal(count,0);const result=await generator.generate(snapshot,analysis);assert.equal(count,1);assert.equal(result.mode,'api');assert.equal(result.imageUrl,'https://example.com/test.png');
  const bad=new ApiWorldGenerator({fetchImpl:async()=>({ok:true,json:async()=>({title:'No image'})})});await assert.rejects(()=>bad.generate(snapshot,analysis),/valid image/);
  const failed=new ApiWorldGenerator({fetchImpl:async()=>({ok:false,json:async()=>({error:'Image service unavailable'})})});await assert.rejects(()=>failed.generate(snapshot,analysis),/unavailable/);
});

test('callbacks from a closed connection cannot replace the new source or status',()=>{
  const callbacks=[],worlds=[];
  const adapter=new PhysicalInputAdapter({metadata:model.metadata,sourceObjectName:model.initialBlocks[0].sourceObjectName,onWorld:world=>worlds.push(world),onStatus:()=>{},connector:options=>{callbacks.push(options);return{close(){},reconnect(){}};}});
  adapter.connect('http://127.0.0.1:8790','mock');
  adapter.connect('http://127.0.0.1:8787','hardware');
  const raw=fixture();raw.board['L0-r0-c0']=['type_0'];
  callbacks[0].onConnection('live');callbacks[0].onState(norm(raw));
  assert.equal(worlds.length,0);assert.equal(adapter.status.source,'hardware');
  callbacks[1].onConnection('live');callbacks[1].onState(normalizeSnapshot(raw,{source:'hardware'}));
  assert.equal(worlds.length,1);assert.equal(worlds[0].input.source,'hardware');
  adapter.close();callbacks[1].onState(normalizeSnapshot(raw,{source:'hardware'}));assert.equal(worlds.length,1);
});
