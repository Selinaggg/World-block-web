import test from 'node:test';
import assert from 'node:assert/strict';
import {WorldPipelineGenerator} from '../dist/src/generation/WorldPipelineGenerator.js';
const analysis={occupiedLevels:[1],heightRange:{min:1,max:1},dominantTypes:[],nearestTypePairs:[],averageNeighbours:0,thresholds:{near:1},diameter:1};
test('pipeline posts one snapshot, follows control/image/style and returns completed artifacts',async()=>{
  const phases=['control','image','style','complete'],calls=[],progress=[];
  const generator=new WorldPipelineGenerator({pollMs:0,onProgress:job=>progress.push(job.stage),fetchImpl:async function(url,options){assert.equal(this,undefined);calls.push([url,options]);const stage=phases.shift();return{ok:true,json:async()=>({id:'a'.repeat(32),status:stage==='complete'?'complete':'running',stage,imageUrl:stage==='complete'?'/api/worlds/a/generated_world.png':null})};}});
  const state={version:1,blocks:[{id:'one'}]};const result=await generator.generate(state,analysis,{twoPass:false});
  assert.deepEqual(progress,['control','image','style','complete']);assert.equal(calls.filter(([,o])=>o.method==='POST').length,1);
  assert.deepEqual(JSON.parse(calls[0][1].body),{worldState:state,analysis,options:{twoPass:false}});assert.equal(result.mode,'pipeline');
});
test('image failure preserves control map and retry uses the same job without creating a new world',async()=>{
  const calls=[];const generator=new WorldPipelineGenerator({fetchImpl:async(url)=>{calls.push(url);return{ok:true,json:async()=>({id:'b'.repeat(32),status:'error',stage:'image',controlMapUrl:'/api/worlds/b/control_map.png',error:'Failed'})};}});
  const result=await generator.retry('b'.repeat(32),analysis);assert.equal(result.status,'error');assert.ok(result.controlMapUrl);assert.equal(calls.length,1);assert.ok(calls[0].endsWith('/retry'));
});
