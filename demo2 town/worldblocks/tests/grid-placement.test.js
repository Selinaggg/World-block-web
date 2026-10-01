import test from 'node:test';
import assert from 'node:assert/strict';
import {WebInputAdapter} from '../dist/src/input/WebInputAdapter.js';
import {createWorldStore} from '../dist/src/world/worldStore.js';
import {createExample,EXAMPLES} from '../dist/src/examples/presets.js';
const metadata={baseSeats:Array.from({length:25},(_,i)=>({x:i%5-2,z:Math.floor(i/5)-2})),bounds:{minX:-2.5,maxX:2.5,minZ:-2.5,maxZ:2.5},diameter:.9,firstCenterY:.45,stackStep:.8,maxHeight:8};
const template={sourceObjectName:'module'};
function setup(){const store=createWorldStore({version:1,inputMode:'web',blocks:[]});return {store,adapter:new WebInputAdapter(store,metadata,template)};}
function supported(blocks){
 for(const b of blocks){assert.ok(metadata.baseSeats.some(p=>p.x===b.position.x&&p.z===b.position.z));assert.equal(b.position.y,metadata.firstCenterY+(b.heightLevel-1)*metadata.stackStep);
 for(let level=1;level<b.heightLevel;level++)assert.ok(blocks.some(other=>other.heightLevel===level&&other.position.x===b.position.x&&other.position.z===b.position.z));
 assert.equal(blocks.filter(other=>other.heightLevel===b.heightLevel&&other.position.x===b.position.x&&other.position.z===b.position.z).length,1);}
}
test('drag snaps to a genuine seat; arrow clicks advance exactly one cell and stop at bounds',()=>{
 const {store,adapter}=setup(),id=adapter.add('water');adapter.move(id,{x:.73,z:.15});assert.deepEqual(store.getWorldState().blocks[0].position,{x:1,y:.45,z:0});
 assert.ok(adapter.moveStep(id,'right'));assert.equal(store.getWorldState().blocks[0].position.x,2);assert.equal(adapter.moveStep(id,'right'),false);
 assert.ok(adapter.moveStep(id,'back'));assert.equal(store.getWorldState().blocks[0].position.z,-1);supported(store.getWorldState().blocks);
});
test('raising fills support; dragging or deleting a lower block settles the remaining stack without gaps',()=>{
 const {store,adapter}=setup(),id=adapter.add('human');adapter.setHeight(id,4);assert.equal(store.getWorldState().blocks.length,4);supported(store.getWorldState().blocks);
 const base=store.getWorldState().blocks.find(b=>b.heightLevel===1);adapter.moveStep(base.id,'right');supported(store.getWorldState().blocks);
 assert.equal(store.getWorldState().blocks.find(b=>b.id===id).heightLevel,3);
 adapter.move(base.id,{x:0,z:0});supported(store.getWorldState().blocks);assert.equal(store.getWorldState().blocks.find(b=>b.id===base.id).heightLevel,4);
 adapter.remove(id);supported(store.getWorldState().blocks);adapter.setHeight(base.id,1);supported(store.getWorldState().blocks);assert.equal(store.getWorldState().blocks.find(b=>b.id===base.id).heightLevel,1);
});
test('every example playback step has complete support, including its final arrangement',()=>{
 for(const e of EXAMPLES){const example=createExample(e.id,metadata,template);for(const step of example.steps)supported(step.world.blocks);supported(example.world.blocks);}
});
