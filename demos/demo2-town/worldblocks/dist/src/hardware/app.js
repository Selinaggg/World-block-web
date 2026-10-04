import {MODE,NUMBER,TITLE} from './settings.js';
import {loadWorldBlocksModel} from '../model/loadWorldBlocksModel.js';
import {WorldScene} from '../components/WorldScene.js';
import {ELEMENTS} from '../config.js';
import {DEFAULT_CODE_MAP,validateCodeMap} from '../input/hardwareConfig.js';
import {InputSession,LatestGeneration,compositionKey} from './InputSession.js';
import {CODES,PORTS,COLUMNS,emptyBoard,editBoard,layoutBoard,sampleBoard,moveStack,normalizeBoard} from './TestBoard.js';
import {pickTestPosition} from './randomPlacement.js';
import {followHardware} from './connection.js';
import {createOutput,generateLocal} from './renderer.js';
import {WorldPipelineGenerator} from '../generation/WorldPipelineGenerator.js';
import {getSpatialRelationships} from '../world/spatialAnalysis.js';
const $=s=>document.querySelector(s);
const STATUS={setup:'Hardware setup needed','launcher-offline':'Launcher unavailable',waiting:'Waiting for board',offline:'Board disconnected',connecting:'Connecting',reconnecting:'Reconnecting',attention:'Input needs attention',recovering:'Restoring board','invalid-data':'Invalid input',live:'Live input'};
let model,monitor,output,session,queue,connection,result=null,shownKey='',requestedKey='',hardwareStatus='connecting';
let board=emptyBoard(),history=[],port='A0',slot=COLUMNS[0].id,code='C0',panel=null,view='world',mediaJob=null,imageAnalysis=null,imageBusy=false,followMedia=false;
let meanings=ELEMENTS,mapping={...DEFAULT_CODE_MAP};
function fail(message=''){$('#error').textContent=message;$('#error').hidden=!message;}
function safe(action){try{fail();return action();}catch(e){fail(e.message);}}
function badge(){const test=session?.mode==='test';$('#status').textContent=test?'Test board · simulated':STATUS[hardwareStatus]||hardwareStatus;$('#return-hardware').hidden=!test;$('#input-label').textContent=`${test?'SIMULATED':'HARDWARE'} INPUT / ${session?.current?.blocks.length||0} MODULES`;}
function setPanel(next){panel=next;$('#test-panel').hidden=next!=='test';$('#guide').hidden=next!=='guide';$('#test-toggle').setAttribute('aria-expanded',String(next==='test'));$('#guide-toggle').setAttribute('aria-expanded',String(next==='guide'));$('#test-toggle').textContent=next==='test'?'Hide test view':'Test view';document.body.classList.toggle('panel-open',!!next);if(next==='test'){renderBoard();requestAnimationFrame(()=>monitor?.resize());}}
function setView(next,automatic=false){if(!automatic)followMedia=false;view=next;$('#output').hidden=next!=='world';$('#media').hidden=next==='world';$('#video-note').hidden=next!=='video';$('#media-image').hidden=next==='video';const url=next==='control'?mediaJob?.controlMapUrl:mediaJob?.imageUrl;if(url)$('#media-image').src=url;document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===next)));output?.resize();}
function immersion(value){document.body.classList.toggle('immersive',value);$('#show-controls').hidden=!value;}
function exploreChanged(){const active=!!output?.explore.active;document.body.classList.toggle('exploring',active);$('#explore-help').hidden=!active;queue?.pause(active);if(!active){badge();}}
function showEmpty(message){result=null;shownKey='';output?.explore?.exit(true);output?.dispose();output=null;$('#output').replaceChildren();document.body.classList.remove('has-world');$('#empty').hidden=false;$('#empty p').textContent=message;$('#reset-view').disabled=true;$('#clear-screen').disabled=!mediaJob;$('#explore').disabled=true;$('#why').textContent='';}
async function publish(next,world){
 // createOutput may import code asynchronously; re-check input after that boundary.
 const key=compositionKey(world,session.mode);
 if(!output)output=await createOutput($('#output'),exploreChanged);
 if(key!==compositionKey(session.current,session.mode))return;
 const camera=result?output.camera.position.clone():null,target=result?output.controls.target.clone():null;
 output.setWorld(next);
 if(camera){output.camera.position.copy(camera);output.controls.target.copy(target);output.controls.update();if(MODE==='dream')output.autoFrame=false;}
 if(MODE==='dream'){output.revealing=false;output.material.uniforms.uReveal.value=1.12;}
 result=next;shownKey=key;document.body.classList.add('has-world');$('#empty').hidden=true;$('#reset-view').disabled=false;$('#clear-screen').disabled=false;
 $('#explore').disabled=MODE==='basic'||(MODE==='town'&&!output.explore.available);$('#why').textContent=MODE==='dream'?next.explanations.join(' '):next.summary||next.note;
 $('#caption').textContent=session.mode==='test'?'Test board updated. Drag to orbit · Scroll to zoom':'Your physical board, interpreted live.';
}
function acceptWorld(world,mode){
 badge();monitor?.setEditable(mode==='test');monitor?.sync(world||{version:1,inputMode:'web',blocks:[]});
 $('#image-generate').disabled=MODE==='dream'||imageBusy||!session.reliable||!world?.blocks.some(b=>!['unknown','support'].includes(b.type));
 const key=compositionKey(world,mode)+':'+session.reliable;if(key===requestedKey)return;requestedKey=key;
 queue?.invalidate();
 if(!world||!world.blocks.length){showEmpty(mode==='test'?'Add a unit or load a sample in Test view.':'Place a block on your board, or open Test view.');$('#caption').textContent='Waiting for an arrangement.';return;}
 if(!session.reliable){$('#caption').textContent='Input needs attention. Last reliable world remains visible.';return;}
 if(world.blocks.every(b=>b.type==='support')){showEmpty('Add an element alongside the support blocks.');return;}
 $('#caption').textContent=output?.explore.active?'Board changed. The new world will appear when you return to overview.':'Updating the world…';
 queue.request(world);
}
function commit(next,message='Test board updated.'){if(next===board)return;history.push(board);if(history.length>100)history.shift();board=next;session.accept(normalizeBoard(board),'test');renderBoard();$('#feedback').textContent=message;}
function selectSlot(id){slot=id;port=COLUMNS.find(c=>c.id===id)?.port||port;renderBoard();}
function renderBoard(){
 const stack=board.board[slot]||[];
 $('#unit-picker').replaceChildren(...CODES.map(c=>{const type=mapping[c],meta=meanings[type]||ELEMENTS.unknown,b=document.createElement('button');b.setAttribute('aria-pressed',String(c===code));b.style.setProperty('--color',meta.color);const dot=document.createElement('i');dot.setAttribute('aria-hidden','true');b.append(dot,document.createTextNode(meta.label));const small=document.createElement('small');small.textContent=c;b.append(small);b.onclick=()=>{code=c;renderBoard();};return b;}));
 $('#board-map').replaceChildren(...PORTS.map(p=>{const b=document.createElement('button');b.textContent=p;b.setAttribute('aria-pressed',String(p===port));b.onclick=()=>selectSlot(COLUMNS.find(c=>c.port===p).id);return b;}));
 $('#board-map').style.gridTemplateColumns=`repeat(${board.module_layout.grid_cols},1fr)`;
 $('#board-layout').value=board.module_layout.grid_cols;
 $('#slot').replaceChildren(...COLUMNS.filter(c=>c.port===port).map(c=>new Option(`${c.layer} · row ${c.row%2+1} / col ${c.col+1}`,c.id)));$('#slot').value=slot;
 const oldLayer=$('#layer').value;$('#layer').replaceChildren(...stack.map((c,i)=>new Option(`${i+1} · ${meanings[mapping[c]].label}`,String(i))));if(stack[oldLayer])$('#layer').value=oldLayer;
 $('#move-target').replaceChildren(...COLUMNS.filter(c=>c.id!==slot&&!board.board[c.id]?.length).map(c=>new Option(`${c.port} / ${c.layer} / ${c.row%2+1}, ${c.col+1}`,c.id)));
 $('#stack').textContent='Bottom → top: '+(stack.map(c=>meanings[mapping[c]].label).join(' / ')||'Empty');
 $('#add-block').disabled=stack.length>=7;$('#add-unit').disabled=!COLUMNS.some(c=>(board.board[c.id]?.length||0)<7);$('#remove-top').disabled=!stack.length;$('#replace-type').disabled=!stack.length;$('#move-stack').disabled=!stack.length;$('#undo').disabled=!history.length;
 const count=Object.values(board.board).reduce((n,s)=>n+s.length,0);$('#test-stats').textContent=`${count} blocks · 8 boards · 64 base + 64 offset positions`;
}
function renderGuide(){$('#meanings').replaceChildren(...CODES.map(c=>{const p=document.createElement('p'),m=meanings[mapping[c]];p.textContent=`${c} / ${m.label}${m.meaning?' · '+m.meaning:''}`;return p;}));$('#mapping-note').textContent=MODE==='dream'?'Dreamscape interprets C0–C5 as six dream forces; the device protocol is unchanged.':'Uses the confirmed hardware element mapping. Without the launcher, Test view uses Water, Fire, Earth, Human, Animal, Support.';}
function updateMedia(job){mediaJob=job;document.querySelector('[data-view=control]').disabled=!job.controlMapUrl;document.querySelector('[data-view=image]').disabled=!job.imageUrl;document.querySelector('[data-view=video]').disabled=!job.imageUrl;$('#image-retry').hidden=imageBusy||!job.controlMapUrl||!!job.imageUrl;$('#clear-screen').disabled=!result&&!job.controlMapUrl;if(followMedia){if(job.imageUrl)setView('image',true);else if(job.controlMapUrl)setView('control',true);}if(job.error)fail(job.error);}
async function generateImage(retry=false){if(imageBusy||(!retry&&!session.reliable))return;imageBusy=true;followMedia=true;$('#image-generate').disabled=true;$('#image-retry').hidden=true;$('#caption').textContent='Creating Control Map, then image…';fail();try{const world=structuredClone(session.current);if(!retry)imageAnalysis=getSpatialRelationships(world,model.metadata);const analysis=imageAnalysis;const pipeline=new WorldPipelineGenerator({onProgress:updateMedia});updateMedia(retry?await pipeline.retry(mediaJob.id,analysis):await pipeline.generate(world,analysis));}catch(e){fail(e.message);}finally{imageBusy=false;$('#image-generate').disabled=!session.reliable||!session.current?.blocks.length;$('#image-retry').hidden=!mediaJob?.controlMapUrl||!!mediaJob?.imageUrl;}}
async function boot(){
 document.body.classList.add(MODE);$('#title').textContent=TITLE;$('#demo-number').textContent=NUMBER;document.title=`WorldBlocks · ${TITLE}`;
 $('#headline').textContent={basic:'Small pieces. Possible worlds.',town:'People. Places. Possibilities.',dream:'Rooms. Traces. Impossibilities.'}[MODE];$('#subtitle').textContent='A world shaped by the blocks you place.';
 if(MODE==='dream'){const cfg=await import('../dream/config.js');meanings={...cfg.DREAM_ELEMENTS,unknown:ELEMENTS.unknown};mapping=cfg.PHYSICAL_DREAM_MAP;$('#original-editor').href='./dream.html';$('#image-generate').hidden=true;$('#views').hidden=true;}else if(MODE==='town')$('#views button').textContent='3D Town';
 $('#explore').hidden=MODE==='basic';
 try{
 model=await loadWorldBlocksModel();
 session=new InputSession({metadata:model.metadata,template:model.initialBlocks[0],dream:MODE==='dream',onChange:acceptWorld});
 queue=new LatestGeneration({generate:world=>generateLocal(world,model.metadata),apply:publish,onError:e=>{fail(e.message);$('#caption').textContent='The world could not update. Change the board to try again.';}});
 monitor=new WorldScene($('#model-preview'),model,{elements:meanings,idleMotion:false,select:id=>{const b=session.test?.blocks.find(b=>b.id===id);if(b)selectSlot(b.physical.columnId);},move:(id,position)=>{const b=session.test?.blocks.find(b=>b.id===id);if(!b||session.mode!=='test')return;const state=normalizeBoard(board);for(const c of state.columns)c.stack=[{code_id:'C0',slot_key:c.id+':0',index:0,position:c.position}];const candidates=session.world(state).blocks.filter(c=>!board.board[c.physical.columnId]?.length||c.physical.columnId===b.physical.columnId);const closest=candidates.sort((a,b)=>Math.hypot(a.position.x-position.x,a.position.z-position.z)-Math.hypot(b.position.x-position.x,b.position.z-position.z))[0];if(closest){const target=closest.physical.columnId;selectSlot(target);commit(moveStack(board,b.physical.columnId,target));}}});monitor.setEditable(true);monitor.sync({version:1,inputMode:'web',blocks:[]});
 session.accept(normalizeBoard(board),'test');renderBoard();renderGuide();badge();
 connection=followHardware({onState:state=>safe(()=>session.accept(state)),onStatus:status=>{hardwareStatus=status;session.status=status;if(session.mode==='hardware'){badge();if(status!=='live'){queue.invalidate();requestedKey='';$('#image-generate').disabled=true;}if(status!=='live'){$('#caption').textContent=result?'Last received board · '+(STATUS[status]||status):STATUS[status]||status;}}},onSettings:settings=>{if(MODE!=='dream'){session.mapping=validateCodeMap(settings.code_map);mapping={...session.mapping};session.accept(normalizeBoard(board),'test');renderBoard();renderGuide();}}});
 $('#test-toggle').onclick=()=>{if(panel==='test'){setPanel(null);return;}if(session.mode!=='test'){output?.explore?.exit(true);requestedKey='';showEmpty('Opening test board…');session.select('test');setView('world');}setPanel('test');$('#close-test').focus();};
 $('#close-test').onclick=()=>{setPanel(null);$('#test-toggle').focus();};
 $('#return-hardware').onclick=()=>{output?.explore?.exit(true);setPanel(null);requestedKey='';showEmpty('Waiting for physical input.');session.select('hardware');setView('world');};
 $('#guide-toggle').onclick=()=>{setPanel(panel==='guide'?null:'guide');if(panel)$('#close-guide').focus();};$('#close-guide').onclick=()=>{setPanel(null);$('#guide-toggle').focus();};
 $('#monitor').ontoggle=()=>{if($('#monitor').open)requestAnimationFrame(()=>{monitor.resize();monitor.home();});};
 $('#slot').onchange=e=>selectSlot(e.target.value);$('#board-layout').onchange=e=>commit(layoutBoard(board,Number(e.target.value)));
 $('#add-unit').onclick=()=>safe(()=>{const id=pickTestPosition(board);if(!id)return;slot=id;port=COLUMNS.find(c=>c.id===id).port;commit(editBoard(board,id,'add',code),`${meanings[mapping[code]].label} added · ${id}`);});
 $('#add-block').onclick=()=>commit(editBoard(board,slot,'add',code));$('#remove-top').onclick=()=>commit(editBoard(board,slot,'remove'));
 $('#replace-type').onclick=()=>commit(editBoard(board,slot,'type',code,Number($('#layer').value)));
 $('#move-stack').onclick=()=>{const target=$('#move-target').value,next=moveStack(board,slot,target);selectSlot(target);commit(next);};
 $('#undo').onclick=()=>{const previous=history.pop();if(previous){board=previous;session.accept(normalizeBoard(board),'test');renderBoard();$('#feedback').textContent='Last change undone.';}};
 $('#sample').onclick=()=>commit(layoutBoard(sampleBoard(MODE),board.module_layout.grid_cols),'Sample loaded. Move or stack units to reshape it.');
 $('#clear-test').onclick=()=>commit(layoutBoard(emptyBoard(),board.module_layout.grid_cols),'Test board cleared. Undo restores it.');
 $('#reset-view').onclick=()=>output?.home();$('#clear-screen').onclick=()=>immersion(true);$('#show-controls').onclick=()=>immersion(false);
 $('#explore').onclick=()=>{setPanel(null);setView('world');output?.explore.enter();};$('#exit-explore').onclick=()=>output?.explore.exit();
 $('#fullscreen').onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen();}catch{fail('Use the browser full-screen control.');}};
 $('#image-generate').onclick=()=>generateImage();$('#image-retry').onclick=()=>generateImage(true);document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(panel){setPanel(null);$('#test-toggle').focus();}immersion(false);}});
 window.addEventListener('pagehide',()=>{queue.close();connection.close();monitor.dispose?.();output?.dispose();},{once:true});
 }catch(e){fail(e.message);$('#status').textContent='Could not open the world';}
}
boot();
