import test from 'node:test';
import assert from 'node:assert/strict';
import {StageView} from '../dist/src/components/StageView.js';
test('one stage advances from model to control map to image as real artifacts arrive',()=>{
 const stage=new StageView();assert.equal(stage.view,'model');assert.equal(stage.select('image'),false);
 stage.update({id:'a',stage:'control'});assert.equal(stage.view,'model');
 stage.update({id:'a',stage:'image',controlMapUrl:'map.png'});assert.equal(stage.view,'control');
 stage.update({id:'a',stage:'style',controlMapUrl:'map.png',pass1Url:'first.png'});assert.equal(stage.view,'image');assert.equal(stage.image,'first.png');
 stage.update({id:'a',stage:'complete',controlMapUrl:'map.png',pass1Url:'first.png',imageUrl:'final.png'});assert.equal(stage.image,'final.png');assert.equal(stage.available('video'),true);
});
test('polling cannot undo a user view switch; all captured views remain available',()=>{
 const stage=new StageView(),job={id:'a',stage:'image',controlMapUrl:'map.png'};stage.update(job);stage.select('model');stage.update({...job});assert.equal(stage.view,'model');
 stage.update({...job,imageUrl:'final.png'});assert.equal(stage.view,'image');stage.select('control');stage.update({...job,imageUrl:'final.png'});assert.equal(stage.view,'control');assert.equal(stage.image,'map.png');
 stage.select('video');assert.equal(stage.image,'final.png');
});
test('new jobs clear old outputs and editing can mark prior results without losing them',()=>{
 const stage=new StageView();stage.update({id:'a',controlMapUrl:'old-map',imageUrl:'old-image'},{final:true});stage.dirty=true;stage.select('model');assert.equal(stage.available('control'),true);
 stage.update({id:'b',controlMapUrl:'new-map'});assert.equal(stage.view,'control');assert.equal(stage.available('image'),false);assert.equal(stage.dirty,false);
 stage.reset();assert.equal(stage.available('video'),false);assert.equal(stage.view,'model');
});
