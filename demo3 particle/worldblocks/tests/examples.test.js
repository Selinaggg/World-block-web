import test from 'node:test';
import {readFileSync} from 'node:fs';
import {OBJLoader} from '../dist/vendor/OBJLoader.js';
import {prepareWorldBlocksModel} from '../dist/src/model/loadWorldBlocksModel.js';
import assert from 'node:assert/strict';
import {EXAMPLES,createExample} from '../dist/src/examples/presets.js';
import {ExampleSession} from '../dist/src/examples/ExampleSession.js';
import {HumanTownGenerator} from '../dist/src/town/HumanTownGenerator.js';
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
    for(const b of p.world.blocks){assert.ok(metadata.baseSeats.some(s=>s.x===b.position.x&&s.z===b.position.z));assert.equal(b.position.y,metadata.firstCenterY+(b.heightLevel-1)*metadata.placementStackStep);}
    const result=await new HumanTownGenerator().generate(p.world,metadata);
    if(e.id==='settlement')assert.ok(result.settlementPlan.buildingPlots.length>=3);
    if(e.id==='habitat')assert.ok(result.environment.animals.length>=3);
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

test('normal example playback reveals exactly one supported module per tick',()=>{
  for(const e of EXAMPLES){
    const h=setup(),example=preset(e.id);h.session.start(example,empty);
    for(let i=0;i<h.queue.length;i++)h.queue[i]();
    assert.equal(h.worlds[0].blocks.length,0);
    for(let i=1;i<h.worlds.length;i++){
      const before=h.worlds[i-1].blocks,after=h.worlds[i].blocks;
      assert.equal(after.length,before.length+1,`${e.id}: one module per tick`);
      assert.deepEqual(after.slice(0,-1),before,'existing modules do not change');
      const added=after.at(-1);
      if(added.heightLevel>1)assert.ok(before.some(b=>b.position.x===added.position.x&&b.position.z===added.position.z&&b.heightLevel===added.heightLevel-1),'support must already be present');
    }
    assert.deepEqual(h.worlds.at(-1),example.world);assert.equal(h.completions,1);
  }
});

test('vertical example stacks meet at real mesh faces without volume overlap or gaps',()=>{
 const geometry=model.geometries.values().next().value;geometry.computeBoundingBox();const {min,max}=geometry.boundingBox;
 assert.ok(Math.abs(metadata.placementStackStep-(max.y-min.y))<1e-10);
 assert.ok(metadata.placementStackStep>metadata.stackStep*1.99,'source half-layers are not vertical stack spacing');
 const vertices=geometry.attributes.position;
 const face=y=>[...new Set(Array.from({length:vertices.count},(_,i)=>i).filter(i=>Math.abs(vertices.getY(i)-y)<1e-6).map(i=>`${vertices.getX(i).toFixed(5)},${vertices.getZ(i).toFixed(5)}`))].sort();
 assert.ok(face(max.y).length>=3);assert.deepEqual(face(max.y),face(min.y),'top and bottom contact faces align');
 let pairs=0;
 for(const e of EXAMPLES)for(const upper of preset(e.id).world.blocks){
  if(upper.heightLevel===1)continue;
  const lower=preset(e.id).world.blocks.find(b=>b.position.x===upper.position.x&&b.position.z===upper.position.z&&b.heightLevel===upper.heightLevel-1);
  assert.ok(lower);assert.ok(Math.abs(lower.position.y+max.y-(upper.position.y+min.y))<1e-8,`${e.id}: contact at one plane`);pairs++;
 }
 assert.ok(pairs>0);
});
