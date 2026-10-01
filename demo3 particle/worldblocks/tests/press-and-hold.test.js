import test from 'node:test';
import assert from 'node:assert/strict';
import {bindPressAndHold} from '../dist/src/components/pressAndHold.js';

// A minimal event surface keeps these timing tests independent of WebGL and browser tooling.
function surface(){
  const listeners=new Map();
  return {addEventListener(type,fn){if(!listeners.has(type))listeners.set(type,[]);listeners.get(type).push(fn);},
    emit(type,props={}){let stopped=false;const event={type,preventDefault(){},stopImmediatePropagation(){stopped=true;},...props};for(const fn of listeners.get(type)||[]){fn(event);if(stopped)break;}}};
}
function setup(t,action='raise'){
  t.mock.timers.enable({apis:['setTimeout']});
  const previous={document:globalThis.document,window:globalThis.window};
  globalThis.document=surface();globalThis.window=surface();
  t.after(()=>{for(const key of ['document','window']){if(previous[key]===undefined)delete globalThis[key];else globalThis[key]=previous[key];}});
  const container=surface(),captures=new Set();
  container.setPointerCapture=id=>captures.add(id);container.hasPointerCapture=id=>captures.has(id);container.releasePointerCapture=id=>captures.delete(id);
  const button={dataset:{action},isConnected:true,disabled:false,focus(){},classList:{add(){},remove(){}},getBoundingClientRect:()=>({left:0,top:0,right:40,bottom:40})};
  button.closest=()=>button;
  let level=['left','back'].includes(action)?6:1,calls=0;
  const cancel=bindPressAndHold(container,action=>{const next=level+(['raise','right','front'].includes(action)?1:-1);if(next<1||next>6)return false;level=next;calls++;button.disabled=level===(['raise','right','front'].includes(action)?6:1);return true;});
  const press=()=>container.emit('pointerdown',{target:button,pointerId:1,isPrimary:true,button:0});
  return {container,button,cancel,press,level:()=>level,calls:()=>calls,captures};
}
test('short click advances once; holding repeats after the delay and pointer release stops it',t=>{
  const h=setup(t);h.press();assert.equal(h.level(),2);
  t.mock.timers.tick(349);assert.equal(h.level(),2);
  t.mock.timers.tick(1);assert.equal(h.level(),3);
  t.mock.timers.tick(110);assert.equal(h.level(),4);
  h.container.emit('pointerup');t.mock.timers.tick(1000);assert.equal(h.level(),4);assert.equal(h.captures.size,0);
  let extraClicks=0;h.container.addEventListener('click',()=>extraClicks++);
  h.container.emit('click',{target:h.button,detail:1});assert.equal(extraClicks,0);
  h.container.emit('click',{target:h.button,detail:0});assert.equal(extraClicks,1);
});
test('repeat stops at the height limit without overflow',t=>{
  const h=setup(t);h.press();t.mock.timers.tick(350);
  for(let i=0;i<10;i++)t.mock.timers.tick(110);
  assert.equal(h.level(),6);assert.equal(h.calls(),5);assert.equal(h.captures.size,0);
  h.button.dataset.action='lower';h.button.disabled=false;h.press();t.mock.timers.tick(350);
  for(let i=0;i<10;i++)t.mock.timers.tick(110);
  assert.equal(h.level(),1);assert.equal(h.calls(),10);assert.equal(h.captures.size,0);
});
test('leaving the button, pointer cancellation, selection changes and window blur cancel repeat',t=>{
  const h=setup(t);
  for(const stop of [()=>h.container.emit('pointermove',{pointerId:1,clientX:90,clientY:20}),()=>h.container.emit('pointercancel'),h.cancel,()=>window.emit('blur')]){
    h.button.disabled=false;h.press();const before=h.level();stop();t.mock.timers.tick(1000);assert.equal(h.level(),before);assert.equal(h.captures.size,0);
  }
});
test('keyboard holding repeats and key release stops it',t=>{
  const h=setup(t);h.container.emit('keydown',{target:h.button,key:' ',repeat:false});assert.equal(h.level(),2);
  t.mock.timers.tick(350);assert.equal(h.level(),3);
  h.container.emit('keydown',{target:h.button,key:' ',repeat:true});assert.equal(h.level(),3);
  document.emit('keyup',{key:' '});t.mock.timers.tick(1000);assert.equal(h.level(),3);
});

for(const action of ['left','right','front','back'])test(`position ${action} repeats while held and stops on release`,t=>{
  const h=setup(t,action),initial=h.level(),direction=['right','front'].includes(action)?1:-1;
  h.press();t.mock.timers.tick(350);t.mock.timers.tick(110);
  assert.equal(h.level(),initial+direction*3);
  h.container.emit('pointerup');t.mock.timers.tick(2000);
  assert.equal(h.level(),initial+direction*3);
});
