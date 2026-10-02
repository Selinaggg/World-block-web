import test from 'node:test';
import assert from 'node:assert/strict';
import {applySavedInput} from '../shared/hardware-client/auto-connect.mjs';

test('bootstrap waits for confirmation and initialized UI, then applies mapping before connection',()=>{
  const calls=[],nodes=new Map();
  const doc={querySelector:s=>nodes.get(s),querySelectorAll:()=>selectors};
  const selectors=Array.from({length:6},(_,i)=>({dataset:{code:`C${i}`},value:''}));
  const settings={confirmed:true,code_map:{C0:'earth',C1:'fire',C2:'animal',C3:'human',C4:'water',C5:'support'}};
  assert.equal(applySavedInput(doc,null),false);assert.equal(applySavedInput(doc,settings),false);
  for(const [selector,action] of [['[data-input="hardware"]','hardware'],['#connect-input','connect'],['#apply-code-map','mapping'],['#close-settings','close']]){
    nodes.set(selector,{onclick(){},click(){calls.push(action);if(action==='connect'){assert.deepEqual(Object.fromEntries(selectors.map(s=>[s.dataset.code,s.value])),settings.code_map);}}});
  }
  nodes.set('#connection-url',{value:''});
  nodes.get('#connect-input').disabled=true;assert.equal(applySavedInput(doc,settings),false);assert.equal(calls.length,0);
  nodes.get('#connect-input').disabled=false;
  assert.equal(applySavedInput(doc,settings),true);assert.deepEqual(calls,['hardware','mapping','connect','close']);
  assert.equal(nodes.get('#connection-url').value,'http://127.0.0.1:8787');
});
