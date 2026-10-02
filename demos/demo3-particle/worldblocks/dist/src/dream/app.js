import {loadWorldBlocksModel} from '../model/loadWorldBlocksModel.js';
import {WorldScene} from '../components/WorldScene.js';
import {createWorldStore} from '../world/worldStore.js';
import {WebInputAdapter} from '../input/WebInputAdapter.js';
import {bindPressAndHold} from '../components/pressAndHold.js';
import {DREAM_ELEMENTS as E,DREAM_TYPES as TYPES} from './config.js';
import {DREAM_PRESETS,createDreamPreset} from './presets.js';
import {DreamScene} from './DreamScene.js';
const $=s=>document.querySelector(s),empty=()=>({version:1,mode:'dreamscape',inputMode:'web',blocks:[]});
let model,store,input,modelScene,dreamScene,result,worker,selected=null,view='arrange',busy=false,backup=null,stopHold=()=>{},generationId=0;
const debug=location.hostname==='localhost'||location.hostname==='127.0.0.1'||new URLSearchParams(location.search).has('debug');
function error(message){$('#error').hidden=!message;$('#error').textContent=message||'';}
function safe(action){try{error('');return action();}catch(e){error(e.message);return false;}}
function select(id){stopHold();selected=id||null;modelScene.setSelected(selected);renderInspector();$('#module-select').value=selected||'';}
function renderInspector(){
 const b=store.getWorldState().blocks.find(b=>b.id===selected);$('#empty-inspector').hidden=!!b;$('#selected-inspector').hidden=!b;if(!b)return;
 $('#fragment-title').textContent=E[b.type].label;$('#fragment-type').value=b.type;$('#intensity').textContent=b.heightLevel;
 $('[data-action=lower]').disabled=busy||b.heightLevel<=1;$('[data-action=raise]').disabled=busy||b.heightLevel>=model.metadata.maxHeight;
}
function render(){
 const state=store.getWorldState(),count=state.blocks.length;
 if(selected&&!state.blocks.some(b=>b.id===selected))selected=null;
 modelScene.sync(state);modelScene.setSelected(selected);modelScene.setEditable(view==='arrange'&&!busy);
 $('#fragment-count').textContent=`${String(count).padStart(2,'0')} FRAGMENTS / ${new Set(state.blocks.map(b=>b.type)).size} FORCES`;
 const chosen=selected;$('#module-select').replaceChildren(new Option('Select a fragment…',''),...state.blocks.map((b,i)=>new Option(`${String(i+1).padStart(2,'0')} · ${E[b.type].label} · Level ${b.heightLevel}`,b.id)));$('#module-select').value=chosen||'';
 $('#generate').disabled=!count||busy;$('#load-example').disabled=busy;$('#module-select').disabled=busy||!count;
 $('#forces').querySelectorAll('button').forEach(b=>b.disabled=busy);$('#view-overview').disabled=!result||busy;$('#enter-dream').disabled=!result||busy;
 $('#view-arrange').disabled=busy;$('#restore-draft').hidden=!backup;$('#restore-draft').disabled=busy;
 $('#reset-view').disabled=busy;$('#fragment-type').disabled=busy;
 renderInspector();try{localStorage.setItem('worldblocks-dream-draft',JSON.stringify(state));}catch{}
}
function setView(next){
 if(busy)return;stopHold();if(next==='overview'&&!result)return;
 dreamScene?.explore.exit(true);view=next;document.body.dataset.view=next;
 $('#dream-model').hidden=next!=='arrange';$('#dream-output').hidden=next!=='overview';
 $('#view-arrange').setAttribute('aria-pressed',String(next==='arrange'));$('#view-overview').setAttribute('aria-pressed',String(next==='overview'));
 $('#dream-details').hidden=next!=='overview';$('#generate').hidden=next!=='arrange';$('#edit').hidden=next!=='overview';$('#clear-screen').hidden=next!=='overview';
 const dirty=result&&JSON.stringify(result.worldStateSnapshot.blocks)!==JSON.stringify(store.getWorldState().blocks);
 $('#status').textContent=next==='arrange'?'Position shapes space. Stacking intensifies it.':dirty?'Earlier dream. Generate again to apply your changes.':'Your dream is ready to enter.';
 $('#scene-note').textContent=next==='arrange'?'Drag fragments to place · Drag space to orbit':'Drag to orbit · Scroll to approach';
 modelScene.resize();dreamScene?.resize();render();
}
function onExploreChange(){
 const exploring=!!dreamScene?.explore.active;document.body.classList.toggle('exploring',exploring);$('#explore-help').hidden=!exploring;
 $('#explore-instructions').textContent=document.pointerLockElement?'WASD / arrows to walk · Mouse to look · Shift faster · Esc releases mouse':'WASD / arrows to walk · Drag to look · Click the scene for mouse look';
 $('#exit-dream').disabled=!!dreamScene?.explore.transition;
}
function immersive(on){document.body.classList.toggle('immersive',on);$('#show-controls').hidden=!on;if(on){dreamScene.setDebug('');$('#field-view').value='';}}
function step(action){
 const b=store.getWorldState().blocks.find(b=>b.id===selected);if(!b||busy||view!=='arrange')return false;
 return safe(()=>action==='raise'||action==='lower'?input.setHeight(b.id,b.heightLevel+(action==='raise'?1:-1)):input.moveStep(b.id,action));
}
function finishReveal(p){
 if(!busy||!result)return;
 const stages=['Gathering fragments','Forming paths','Remembering space','Distorting the edges','Revealing the dream'];
 $('#status').textContent=stages[Math.min(4,Math.floor(p*5))]+'…';
 if(p===1){busy=false;input.setLocked(false);document.body.classList.remove('busy');setView('overview');}
}
async function generate(){
 if(busy||!store.getWorldState().blocks.length)return;
 busy=true;input.setLocked(true);stopHold();document.body.classList.add('busy');render();error('');$('#status').textContent='Reading your dream…';
 const token=++generationId,snapshot=store.snapshot();
 try{
   const next=await new Promise((resolve,reject)=>{
     worker?.terminate();worker=new Worker(new URL('./worker.js',import.meta.url),{type:'module'});
     worker.onmessage=({data})=>data.error?reject(new Error(data.error)):resolve(data.result);
     worker.onerror=e=>reject(new Error(e.message||'The dream could not form. Please try again.'));
     worker.postMessage({worldState:snapshot,metadata:model.metadata,options:{budget:innerWidth<700?72000:125000}});
   });
   if(token!==generationId)return;worker.terminate();worker=null;
   if(!dreamScene)dreamScene=new DreamScene($('#dream-output'),{onChange:onExploreChange,onReveal:finishReveal});
   result=next;view='overview';document.body.dataset.view='overview';$('#dream-model').hidden=true;$('#dream-output').hidden=false;
   $('#dream-details').hidden=false;$('#dream-number').textContent=`DREAM / ${result.seed.toString(16).toUpperCase().padStart(8,'0')}`;
   $('#explanations').replaceChildren(...result.explanations.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
   $('#debug').hidden=!debug;$('#debug-data').textContent=JSON.stringify({seed:result.seed,particles:result.particleConfig,fields:result.fieldData.peaks,nodes:result.structuralPlan.nodes.map(n=>({id:n.id,x:n.x,z:n.z,fracture:n.fracture,attractor:!!n.isAttractor})),route:result.structuralPlan.route,spawn:result.navigationPlan.spawn},null,2);
   $('#field-view').value='';$('#generate').hidden=true;$('#edit').hidden=true;$('#reset-view').disabled=true;
   $('#scene-note').textContent='Fragments are finding their place.';dreamScene.resize();dreamScene.setWorld(result);
   $('#view-arrange').setAttribute('aria-pressed','false');$('#view-overview').setAttribute('aria-pressed','true');
 }catch(e){worker?.terminate();worker=null;busy=false;input.setLocked(false);document.body.classList.remove('busy');error(e.message);setView('arrange');}
}
async function boot(){
 try{
   model=await loadWorldBlocksModel();let initial=empty();
   try{const saved=JSON.parse(localStorage.getItem('worldblocks-dream-draft'));if(saved?.mode==='dreamscape'&&saved.inputMode==='web')initial=createWorldStore(saved).snapshot();}catch{}
   store=createWorldStore(initial);input=new WebInputAdapter(store,model.metadata,model.initialBlocks[0],{types:TYPES});
   modelScene=new WorldScene($('#dream-model'),model,{elements:E,idleMotion:false,select,move:(id,p)=>safe(()=>input.move(id,p))});
   $('#loading').remove();
   $('#forces').innerHTML=TYPES.map(t=>`<button data-force="${t}" style="--force:${E[t].color}" aria-label="Add ${E[t].label}" title="${E[t].meaning}"><i class="force-dot" aria-hidden="true"></i><span>${E[t].label}</span><span aria-hidden="true">+</span></button>`).join('');
   $('#fragment-type').replaceChildren(...TYPES.map(t=>new Option(E[t].label,t)));
   $('#example-select').replaceChildren(...DREAM_PRESETS.map(p=>new Option(p.label,p.id)));$('#example-description').textContent=DREAM_PRESETS[0].description;
   $('#example-select').onchange=e=>$('#example-description').textContent=DREAM_PRESETS.find(p=>p.id===e.target.value).description;
   $('#forces').onclick=e=>{const b=e.target.closest('[data-force]');if(b)safe(()=>select(input.add(b.dataset.force)));};
   $('#module-select').onchange=e=>select(e.target.value);$('#fragment-type').onchange=e=>safe(()=>input.setType(selected,e.target.value));
   $('#deselect').onclick=()=>select(null);$('#remove-fragment').onclick=()=>safe(()=>input.remove(selected));
   stopHold=bindPressAndHold($('#selected-inspector'),step);$('#selected-inspector').addEventListener('click',e=>{const b=e.target.closest('[data-action]');if(b)step(b.dataset.action);});
   $('#load-example').onclick=()=>safe(()=>{if(!backup)backup=store.snapshot();selected=null;store.replace(createDreamPreset($('#example-select').value,model.metadata,model.initialBlocks[0]));modelScene.home();$('#status').textContent='A starting point. Move a fragment, or generate this dream.';});
   $('#restore-draft').onclick=()=>{if(!backup)return;selected=null;const previous=backup;backup=null;store.replace(previous);modelScene.home();};
   $('#generate').onclick=generate;$('#edit').onclick=()=>setView('arrange');$('#view-arrange').onclick=()=>setView('arrange');$('#view-overview').onclick=()=>setView('overview');
   $('#enter-dream').onclick=()=>{if(!result||busy)return;setView('overview');dreamScene.setDebug('');$('#field-view').value='';dreamScene.explore.enter();};
   $('#exit-dream').onclick=()=>dreamScene.explore.exit();$('#reset-view').onclick=()=>view==='arrange'?modelScene.home():dreamScene.home();
   $('#field-view').onchange=e=>dreamScene?.setDebug(e.target.value);$('#clear-screen').onclick=()=>immersive(true);$('#show-controls').onclick=()=>immersive(false);
   document.addEventListener('keydown',e=>{if(e.code==='Escape'&&document.body.classList.contains('immersive'))immersive(false);});
   $('#full-screen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{error('Use your browser’s full-screen control for this display.');}};
   document.addEventListener('fullscreenchange',()=>$('#full-screen').textContent=document.fullscreenElement?'Exit full screen ↙':'Full screen ↗');
   document.querySelectorAll('[data-walk]').forEach(b=>{b.onpointerdown=e=>{e.preventDefault();b.setPointerCapture(e.pointerId);dreamScene?.explore.hold(b.dataset.walk,true);};for(const name of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(name,()=>dreamScene?.explore.hold(b.dataset.walk,false));});
   store.subscribe(render);render();modelScene.home();
   window.addEventListener('pagehide',()=>{worker?.terminate();dreamScene?.explore.release();});
 }catch(e){error(`Could not load Dreamscape. ${e.message}`);$('#loading').textContent='Refresh to load the workspace again.';}
}
boot();
