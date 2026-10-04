import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {OBJLoader} from '../dist/vendor/OBJLoader.js';
import {prepareWorldBlocksModel} from '../dist/src/model/loadWorldBlocksModel.js';
import {MODE} from '../dist/src/hardware/settings.js';
import {InputSession,LatestGeneration} from '../dist/src/hardware/InputSession.js';
import {COLUMNS,emptyBoard,normalizeBoard,editBoard,layoutBoard,sampleBoard,moveStack} from '../dist/src/hardware/TestBoard.js';
const model=prepareWorldBlocksModel(new OBJLoader().parse(readFileSync(new URL('../dist/models/worldblocks.obj',import.meta.url),'utf8')));
const make=onChange=>new InputSession({metadata:model.metadata,template:model.initialBlocks[0],dream:MODE==='dream',onChange});
test('hardware defaults, complete snapshots and test drafts stay independent across switches',()=>{
 const seen=[],s=make((w,mode)=>seen.push([w,mode]));assert.equal(s.mode,'hardware');
 const raw=sampleBoard(MODE),real=normalizeBoard(raw);real.source='hardware';s.accept(real);const hardware=s.hardware;
 s.accept(normalizeBoard(emptyBoard()),'test');assert.equal(s.current,hardware);
 s.select('test');assert.equal(s.current.blocks.length,0);s.accept(normalizeBoard(editBoard(emptyBoard(),COLUMNS[0].id,'add','C0')),'test');
 const draft=s.current;s.accept(real);assert.equal(s.current,draft);s.select('hardware');assert.equal(s.current.blocks.length,hardware.blocks.length);s.select('test');assert.equal(s.current,draft);
 s.select('hardware');s.accept({...real,columns:real.columns.map(c=>({...c,stack:[]}))});assert.equal(s.current.blocks.length,0);assert.ok(seen.length>3);
});
test('all base and offset stacks retain exact logical coordinates and all layers across board layouts',()=>{
 for(const cols of [1,2,4,8]){let raw=layoutBoard(emptyBoard(),cols);const base=COLUMNS[0].id,offset=COLUMNS[8].id;for(let i=0;i<7;i++){raw=editBoard(raw,base,'add','C0');raw=editBoard(raw,offset,'add','C3');}const state=normalizeBoard(raw),s=make();s.accept(state);assert.equal(s.current.blocks.length,14);const a=s.current.blocks.find(b=>b.physical.columnId===base),b=s.current.blocks.find(b=>b.physical.columnId===offset);assert.equal(b.physical.logicalPosition.y-a.physical.logicalPosition.y,.5);assert.ok(Math.abs(b.position.y-a.position.y-model.metadata.stackStep)<1e-9);assert.ok(s.reliable);}
});
test('invalid/offline snapshots retain cached hardware but cannot generate, recovery resumes safely',()=>{
 const s=make(),state=normalizeBoard(sampleBoard(MODE));s.accept(state);const cached=s.current;
 s.accept({...state,columns:[],topology_id:null,status:'offline',connected:false});assert.equal(s.current,cached);assert.equal(s.reliable,false);
 assert.throws(()=>s.accept({...state,columns:[{...state.columns[0],position:{x:NaN,y:0,z:0}}]}));assert.equal(s.current,cached);
 s.accept({...state,status:'attention',issues:[{column_id:COLUMNS[0].id,reason:'hardware_attention'}]});assert.equal(s.reliable,false);s.accept(state);assert.equal(s.reliable,true);
});
test('test edits move complete stacks, replace layers and never mutate previous snapshots',()=>{
 const a=COLUMNS[0].id,b=COLUMNS[1].id,raw=editBoard(editBoard(emptyBoard(),a,'add','C0'),a,'add','C1');
 const moved=moveStack(raw,a,b);assert.deepEqual(raw.board[a],['C0','C1']);assert.equal(moved.board[a],undefined);assert.deepEqual(moved.board[b],['C0','C1']);
 const changed=editBoard(moved,b,'type','C4',0);assert.deepEqual(changed.board[b],['C4','C1']);assert.deepEqual(moved.board[b],['C0','C1']);assert.equal(editBoard(raw,'bad','add'),raw);
});
test('latest-only generation discards stale results, coalesces rapid changes, and pauses for exploration',async()=>{
 let complete;const applied=[];const q=new LatestGeneration({delay:100000,generate:w=>new Promise(resolve=>{complete=()=>resolve(w);}),apply:r=>applied.push(r.id)});
 q.request({id:1});const first=q.flush();q.request({id:2});q.request({id:3});complete();await first;assert.deepEqual(applied,[]);
 const latest=q.flush();complete();await latest;assert.deepEqual(applied,[3]);q.pause(true);q.request({id:4});await q.flush();assert.deepEqual(applied,[3]);q.invalidate();q.pause(false);q.close();
});
test('real generators accept the same normalized test contract without dropping codes or mutating it',async()=>{
 const s=make();s.accept(normalizeBoard(sampleBoard(MODE)));const snapshot=structuredClone(s.current);
 let result;if(MODE==='dream'){const {generateDreamscape}=await import('../dist/src/dream/DreamscapeGenerator.js');result=generateDreamscape(snapshot,model.metadata,{budget:3000});assert.deepEqual(new Set(snapshot.blocks.map(b=>b.type)),new Set(['shell','veil','drift','graft','glow','flow']));assert.ok(result.navigationPlan.spawn);}
 else if(MODE==='town'){const {HumanTownGenerator}=await import('../dist/src/town/HumanTownGenerator.js');result=await new HumanTownGenerator().generate(snapshot,model.metadata);assert.ok(result.settlementPlan.buildingPlots.length);}
 else{const {IslandGenerator}=await import('../dist/src/generation/threeD/IslandGenerator.js');result=await new IslandGenerator().generate(snapshot,model.metadata);assert.ok(result.terrain.heights.length);}
 assert.deepEqual(snapshot,s.current);assert.deepEqual(result.worldStateSnapshot,snapshot);
});
