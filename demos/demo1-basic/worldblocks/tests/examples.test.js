import test from 'node:test';
import {readFileSync} from 'node:fs';
import {OBJLoader} from '../dist/vendor/OBJLoader.js';
import {prepareWorldBlocksModel} from '../dist/src/model/loadWorldBlocksModel.js';
import assert from 'node:assert/strict';
import {EXAMPLES,createExample} from '../dist/src/examples/presets.js';
import {ExampleSession} from '../dist/src/examples/ExampleSession.js';
import {IslandGenerator} from '../dist/src/generation/threeD/IslandGenerator.js';
import {createWorldStore} from '../dist/src/world/worldStore.js';
const model=prepareWorldBlocksModel(new OBJLoader().parse(readFileSync(new URL('../dist/models/worldblocks.obj',import.meta.url),'utf8')));
const metadata=model.metadata,template=model.initialBlocks[0];
const empty={version:1,inputMode:'web',blocks:[]};
const preset=id=>createExample(id,metadata,template);
function setup(){
  const queue=[],worlds=[];let completions=0;
  const session=new ExampleSession({apply:w=>worlds.push(w),onStep:()=>{},onComplete:()=>completions++,schedule:fn=>{queue.push(fn);return queue.length;},unschedule:()=>{}});
  return {session,queue,worlds,get completions(){return completions;}};
}
test('presets seat on the OBJ grid, stack at real spacing, validate and generate meaningful local content',async t=>{
  t.mock.method(globalThis,'fetch',()=>{throw new Error('Examples must remain local');});
  for(const e of EXAMPLES){
    const p=preset(e.id);assert.deepEqual(p,preset(e.id));createWorldStore(p.world);
    for(const b of p.world.blocks){assert.ok(metadata.baseSeats.some(s=>s.x===b.position.x&&s.z===b.position.z));assert.equal(b.position.y,metadata.firstCenterY+(b.heightLevel-1)*metadata.stackStep);}
    const result=await new IslandGenerator().generate(p.world,metadata);
    if(e.id==='settlement')assert.ok(result.layers.civilisation.objects.length>=3);
    if(e.id==='habitat')assert.ok(result.layers.life.objects.length>=5);
    assert.equal(p.steps.at(-1).world.blocks.length,p.world.blocks.length);
  }
  assert.equal(globalThis.fetch.mock.calls.length,0);
});
test('skip applies exactly the final snapshot and completes once despite stale scheduled callbacks',()=>{
  const h=setup();h.session.start(preset('coast'),empty);h.session.skip();h.session.skip();h.queue.forEach(fn=>fn());
  assert.equal(h.completions,1);assert.deepEqual(h.worlds.at(-1),preset('coast').world);
});
test('restoring during playback cancels queued writes and preserves the original draft across example changes',()=>{
  const h=setup(),draft=preset('habitat').world,original=structuredClone(draft);
  h.session.start(preset('coast'),draft);draft.blocks[0].position.x=100;
  h.session.start(preset('settlement'),preset('coast').world);
  const recovered=h.session.restore(),count=h.worlds.length;h.queue.forEach(fn=>fn());
  assert.deepEqual(recovered,original);assert.equal(h.worlds.length,count);assert.equal(h.completions,0);assert.equal(h.session.backup,null);
});
test('full playback and reduced-motion completion agree; subsequent runs keep the original empty draft',()=>{
  const h=setup();h.session.start(preset('habitat'),empty);
  for(let i=0;i<h.queue.length;i++)h.queue[i]();
  assert.equal(h.completions,1);assert.deepEqual(h.worlds.at(-1),preset('habitat').world);
  h.session.start(preset('coast'),preset('habitat').world,{instant:true});
  assert.equal(h.completions,2);assert.deepEqual(h.worlds.at(-1),preset('coast').world);assert.deepEqual(h.session.restore(),empty);
});
