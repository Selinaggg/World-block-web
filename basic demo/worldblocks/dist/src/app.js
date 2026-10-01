import {EXAMPLES,createExample} from './examples/presets.js';
import {ExampleSession} from './examples/ExampleSession.js';
import {IslandGenerator} from './generation/threeD/IslandGenerator.js';
import {GENERATION_MODE} from './generation/threeD/config.js';
import {Generated3DWorld} from './components/Generated3DWorld.js';
import {WorldPipelineGenerator} from './generation/WorldPipelineGenerator.js';
import {StageView} from './components/StageView.js';
import {ELEMENTS,TYPES,DEBUG,SPATIAL_CONFIG} from './config.js';
import {loadWorldBlocksModel} from './model/loadWorldBlocksModel.js?seating=2';
import {WorldScene} from './components/WorldScene.js';
import {createWorldStore} from './world/worldStore.js';
import {WorldInputs} from './input/WorldInputs.js';
import {DEFAULT_CODE_MAP,INPUT_URLS,HARDWARE_TYPES} from './input/hardwareConfig.js';
import {ApiWorldGenerator} from './generation/ApiWorldGenerator.js';
import {getSpatialRelationships,getTypeCounts,getHeightRange,normalizePosition} from './world/spatialAnalysis.js';
import {describeSpatialFacts} from './world/worldRules.js';
import {MockWorldGenerator} from './generation/MockWorldGenerator.js';
import {registerWorldTools} from './components/webMcp.js';
import {bindPressAndHold} from './components/pressAndHold.js';
const $=s=>document.querySelector(s),escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const swatch=t=>`<i class="swatch" style="--element-color:${ELEMENTS[t].color}" aria-hidden="true"></i>`;
const name=b=>b.physical?`${b.physical.columnId} · ${b.physical.index+1}`:b.id.startsWith('module_')?`Module ${b.id.slice(7)}`:`Added ${ELEMENTS[b.type].label.toLowerCase()}`;
let immersive=false;
let examplesReady=false,welcomeDismissed=false,exampleOutputBackup=null;
try{welcomeDismissed=localStorage.getItem('worldblocks-welcome-seen')==='1';}catch{}
let exampleCaption='';
const exampleSession=new ExampleSession({apply:world=>store.replace(world),onStep:(caption,index,total)=>{exampleCaption=`${index} / ${total} · ${caption}`;renderExamples();},onComplete:()=>{exampleCaption='Blocks become a world. Drag to explore it.';setPhase('build');generateThree();}});
let model,store,adapter,scene,selected=null,phase='build',history=[],toastTimer,displayedResult=null,optionSignature='',inspectorSignature='',stopControlHold=()=>{};
let generator=new MockWorldGenerator(),generationConfigured=false,pipelineAvailable=false,pipelineImage=null;
const editable=()=>phase==='build'&&adapter?.mode==='manual'&&!immersive&&document.body.dataset.page!=='home';
const stageView=new StageView();
let generationMode=GENERATION_MODE.IMAGE,threeScene;
const threeState={result:null,error:null,loading:false,message:''};
const islandGenerator=new IslandGenerator({onProgress:message=>{threeState.message=message;renderStage();}});
const emptyInspector=$('#inspector').innerHTML;
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2200);}
function select(id){if(id&&phase==='build')setView('model');stopControlHold();selected=id;scene.setSelected(id);$('#module-select').value=id||'';renderInspector();renderDebug();}
function renderInspector(){
  if(stageView.view==='three'){
    inspectorSignature='';$('#inspector').innerHTML='<div class="section-label">03 / SPATIAL WORLD</div><div class="inspector-empty"><span class="selection-glyph" aria-hidden="true">⌖</span><h2>Same blocks.<br>New terrain.</h2><p>Earth builds land. Water carves it. Fire sharpens peaks. Human leaves homes; Animal brings life.</p><p>Orbit and zoom to explore. Change your blocks to reshape the island.</p></div>';return;
  }
  const b=store.getWorldState().blocks.find(b=>b.id===selected);
  if(!b){inspectorSignature='';$('#inspector').innerHTML=examplesReady&&!welcomeDismissed&&!exampleSession.backup&&adapter.mode==='manual'&&!store.getWorldState().blocks.length&&phase==='build'?'<div class="section-label">START HERE</div><div class="inspector-empty welcome"><h2>A world.<br>Made by you.</h2><p>Add elements, move or stack them, then generate a world. Start freely or watch an example.</p><button class="secondary" data-welcome="examples">Try an example ↗</button><button class="text-button" data-welcome="free">Build freely</button></div>':emptyInspector;return;}
  if(adapter.mode!=='manual'){
    inspectorSignature='';const p=b.physical;
    $('#inspector').innerHTML=`<div class="section-label">LIVE INPUT</div><h2 class="module-title">${escape(ELEMENTS[b.type].label)}</h2><p class="physical-info">Column ${escape(p.columnId)}<br>${escape(p.codeId||'Unknown code')} · Stack position ${p.index+1}<br>${escape(p.layer)} · ${escape(p.port)}</p><p class="physical-info">${p.needsAttention?'This column needs attention. Its last reported layers remain visible.':'Move the physical module to update this position.'}</p><p class="physical-info">Use “Add to manual draft” to edit a copy on screen.</p>`;return;
  }
  const signature=[b.id,b.type,phase].join(':');
  if(signature===inspectorSignature){
    $('#inspector output').textContent=b.heightLevel;
    $('#inspector [data-action=lower]').disabled=phase!=='build'||b.heightLevel<=1;
    $('#inspector [data-action=raise]').disabled=phase!=='build'||b.heightLevel>=model.metadata.maxHeight;
    const position=normalizePosition(b.position,model.metadata.bounds);
    $('#inspector .coordinates').innerHTML=`X ${position.x.toFixed(2)} <span>Z ${position.z.toFixed(2)}</span>`;
    return;
  }
  inspectorSignature=signature;
  const active=document.activeElement?.closest('#inspector')?document.activeElement?.dataset.action:null;
  const n=normalizePosition(b.position,model.metadata.bounds);
  $('#inspector').innerHTML=`<div class="section-label">02 / SELECTED UNIT<button class="text-button" data-action="deselect" aria-label="Deselect module">✕</button></div><h2 class="module-title">${escape(name(b))}</h2><div class="inspector-field">Element type</div><div class="type-picker">${TYPES.map(type=>[type,ELEMENTS[type]]).map(([type,style])=>`<button data-action="type-${type}" data-type="${type}" class="type-option ${b.type===type?'chosen':''}" aria-pressed="${b.type===type}">${swatch(type)}${style.label}<span>${b.type===type?'✓':''}</span></button>`).join('')}</div><div class="height-control"><span>Height level<small>Hold + / − to repeat</small></span><div><button data-action="lower" aria-label="Lower module" ${b.heightLevel<=1?'disabled':''}>−</button><output>${b.heightLevel}</output><button data-action="raise" aria-label="Raise module" ${b.heightLevel>=model.metadata.maxHeight?'disabled':''}>+</button></div></div><div class="position-label">Position <span>Hold arrows to move</span></div><div class="position-controls"><button data-action="left" aria-label="Move left">←</button><button data-action="back" aria-label="Move back">↑</button><button data-action="front" aria-label="Move forward">↓</button><button data-action="right" aria-label="Move right">→</button></div><div class="coordinates">X ${n.x.toFixed(2)} <span>Z ${n.z.toFixed(2)}</span></div><button class="delete-button" data-action="delete">Remove module <span>×</span></button>`;
  if(phase!=='build')$('#inspector').querySelectorAll('button').forEach(b=>b.disabled=true);
  if(active)$('#inspector').querySelector(`[data-action="${active}"]`)?.focus({preventScroll:true});
}
function renderState(state){
  if(phase==='build'&&displayedResult&&JSON.stringify(state.blocks)!==JSON.stringify(displayedResult.worldStateSnapshot.blocks))stageView.dirty=true;
  if(selected&&!state.blocks.some(b=>b.id===selected))selected=null;scene.setSelected(selected);scene.sync(state);const counts=getTypeCounts(state),range=getHeightRange(state);
  $('#module-count').textContent=state.blocks.length?`${state.blocks.length} modules · up to level ${range.max}`:(adapter.mode==='manual'?'Empty base · Add your first element':'No modules in this input');
  $('#live-summary').textContent=state.blocks.length?`${state.blocks.length} elements · ${Object.values(counts).filter(Boolean).length} types · ${new Set(state.blocks.map(b=>b.heightLevel)).size} occupied levels`:'An open world. Add an element to begin.';
  $('#count-strip').innerHTML=Object.entries(counts).map(([type,count])=>`<span class="count-item" title="${ELEMENTS[type].label}: ${count}">${swatch(type)}<span class="count-name">${ELEMENTS[type].label}</span><strong>${count}</strong></span>`).join('');
  $('#generate').disabled=phase!=='build'||!adapter.canGenerate();$('#generate-3d').disabled=$('#generate').disabled;
  const signature=state.blocks.map(b=>b.id+':'+b.type).join('|');
  if(signature!==optionSignature){optionSignature=signature;$('#module-select').innerHTML='<option value="">Select a module…</option>'+state.blocks.map(b=>`<option value="${escape(b.id)}">${escape(name(b))} · ${ELEMENTS[b.type].label}</option>`).join('');}$('#module-select').value=selected||'';
  renderInspector();renderDebug();renderConnection();renderStage();
}
function renderDebug(){
  if(!DEBUG||!store)return;$('#debug').hidden=false;if(!$('#debug').open)return;
  const b=store.getWorldState().blocks.find(b=>b.id===selected);
  $('#debug-content').innerHTML=`<p>Input: ${escape(adapter.mode)} · ${store.getWorldState().blocks.length} modules · ${model.fixed.length} fixed base sections</p><p>${Object.entries(getTypeCounts(store.getWorldState())).map(([k,v])=>`${ELEMENTS[k].label}: ${v}`).join(' · ')}</p>${b?`<pre>${escape(JSON.stringify(b,null,2))}</pre>`:''}<details><summary>Raw WorldState JSON</summary><pre>${escape(JSON.stringify(store.getWorldState(),null,2))}</pre></details><details><summary>OBJ hierarchy and bounds</summary><pre>${escape(JSON.stringify(model.diagnostics,null,2))}</pre></details>`;
}
function setPhase(next){stopControlHold();phase=next;adapter.setLocked(next!=='build');scene.setEditable(editable());
  document.querySelectorAll('#element-tray button').forEach(b=>b.disabled=!editable());$('#module-select').disabled=next!=='build';document.querySelectorAll('[data-input],#connect-input,#apply-code-map,#connection-url,.code-map select,#two-pass').forEach(b=>b.disabled=next!=='build');$('#generate').disabled=next!=='build'||!adapter.canGenerate();$('#generate-3d').disabled=$('#generate').disabled;renderInspector();renderConnection();
  const historySelect=$('#history-select');if(historySelect)historySelect.disabled=next==='reading'||next==='demo';
  $('#generation-choice').hidden=next==='result';$('#generate').hidden=false;$('#change-world').hidden=next!=='result';$('#retry-image').hidden=generationMode===GENERATION_MODE.ISLAND||!displayedResult||next==='reading'||!stageView.job?.controlMapUrl||!!stageView.job?.imageUrl;
  renderStage();
}
function setView(view){if(phase==='demo')return;if(!stageView.select(view))return;if(view==='three')generationMode=GENERATION_MODE.ISLAND;else if(view!=='model')generationMode=GENERATION_MODE.IMAGE;stopControlHold();$('#settings-panel').hidden=true;$('#open-settings').setAttribute('aria-expanded','false');renderStage();}
function renderStage(){
  if(!scene)return;
  const job=stageView.job,view=stageView.view;
  renderInspector();renderImmersiveControl();$('#generation-service').hidden=view==='three';
  document.body.dataset.worldView=view;$('#scene').hidden=view!=='model';$('#three-world-scene').hidden=view!=='three';
  $('#stage').dataset.view=view;$('#stage').setAttribute('aria-labelledby',`view-${view}`);
  document.querySelectorAll('[data-view]').forEach(button=>{if(button.tagName!=='BUTTON')return;button.disabled=phase==='demo'||!stageView.available(button.dataset.view);button.setAttribute('aria-selected',String(button.dataset.view===view));button.tabIndex=button.dataset.view===view?0:-1;});
  $('#scene').setAttribute('aria-hidden',String(view!=='model'));$('#scene').inert=view!=='model';
  $('#stage-output').hidden=view==='model'||view==='three';$('#three-result').hidden=view!=='three';$('#video-placeholder').hidden=view!=='video';
  const image=stageView.image;if(view!=='model'&&view!=='three'&&image){const img=$('#stage-image');if(img.getAttribute('src')!==image)img.src=image;img.alt=view==='control'?'Control Map from the captured arrangement':'Generated VERSION2-style world';}
  $('#home-view').hidden=view!=='model';
  $('#view-caption').textContent=view==='model'?(phase==='build'?'Drag modules to move · Drag space to orbit':'Captured arrangement · drag to orbit'):(stageView.dirty?'Previous generation · ': '')+(view==='control'?'Terrain & life influence':view==='video'?'Video generation paused':job?.imageUrl?'VERSION2-style world':'First pass · refining style');
  const download=$('#download-current');download.hidden=view==='model'||view==='three'||view==='video'||!image;if(image){download.href=image;download.download=view==='control'?'control_map.png':'generated_world.png';}
  if(job?.animationPromptUrl)$('#animation-download').href=job.animationPromptUrl;
  const pending=phase==='reading';$('#stage-progress').hidden=!pending;$('#stage-progress').textContent=threeState.loading?threeState.message:stageLabel(job);
  $('#stage-progress').hidden=threeState.loading?false:!pending;
  if(view==='three'){
    const result=threeState.result,dirty=result&&JSON.stringify(store.getWorldState().blocks)!==JSON.stringify(result.worldStateSnapshot.blocks);
    $('#view-caption').textContent=dirty?'Previous 3D generation · regenerate to apply changes':'3D island · local procedural generation';
    $('#three-note').textContent=result?((dirty?'Previous generation. ':'')+result.note):'Building an interactive world from your blocks.';
    $('#three-error').hidden=!threeState.error;$('#three-error p').textContent=threeState.error||'';
    $('#three-retry').disabled=phase==='reading';$('#three-reset').disabled=!result;
    $('#retry-image').hidden=true;
    $('#saved-world').hidden=true;
  }else if(displayedResult?.generatedResult?.id){$('#saved-world').hidden=false;}
  $('#change-world').textContent=exampleSession.backup?'Modify this world ↗':view==='three'?'Change Your World':'Edit arrangement ↗';
  renderExamples();
  scene.setEditable(editable()&&view==='model'&&$('#settings-panel').hidden&&$('#example-picker').hidden);
}

function dismissWelcome(){welcomeDismissed=true;try{localStorage.setItem('worldblocks-welcome-seen','1');}catch{}renderInspector();}
function renderExamples(){
  const active=!!exampleSession.backup,busy=phase==='reading'||phase==='demo';
  $('#open-examples').disabled=!examplesReady||adapter.mode!=='manual'||busy;
  $('#open-examples').title=adapter.mode==='manual'?'Explore a ready-made arrangement':'Switch to Manual to try an example';
  $('#example-session').hidden=!active||adapter.mode!=='manual';
  $('#example-caption').textContent=active?`${exampleSession.example.title} · ${exampleCaption}`:'';
  $('#skip-example').hidden=!exampleSession.playing;
  $('#return-draft').disabled=phase==='reading';
  // Input switching would otherwise replace the recoverable example draft.
  if(active)document.querySelectorAll('[data-input]').forEach(b=>b.disabled=true);
}
function openExamples(){
  if(adapter.mode!=='manual'||phase==='reading'||phase==='demo')return;
  closeSettings();$('#example-picker').hidden=false;$('#open-examples').setAttribute('aria-expanded','true');
  scene.setEditable(false);$('#example-options button').focus({preventScroll:true});
}
function closeExamples({focus=true}={}){
  $('#example-picker').hidden=true;$('#open-examples').setAttribute('aria-expanded','false');
  scene.setEditable(editable()&&stageView.view==='model'&&$('#settings-panel').hidden);
  if(focus)$('#open-examples').focus({preventScroll:true});
}
function startExample(id){
  if(adapter.mode!=='manual'||phase==='reading'||phase==='demo')return;
  const example=createExample(id,model.metadata,model.initialBlocks[0]),draft=store.snapshot();
  if(!exampleSession.backup)exampleOutputBackup={three:threeState.result,dirty:stageView.dirty};
  dismissWelcome();closeExamples({focus:false});select(null);stageView.view='model';stageView.dirty=!!stageView.job;setPhase('demo');scene.home();
  $('#generate').textContent='Generate 2.5D';$('#flow').innerHTML='<p>Watch the arrangement become a 3D world.</p>';
  exampleSession.start(example,draft,{instant:matchMedia('(prefers-reduced-motion: reduce)').matches});
  renderExamples();(exampleSession.playing?$('#skip-example'):$('#return-draft')).focus({preventScroll:true});
}
function returnToDraft(){
  if(phase==='reading'||!exampleSession.backup)return;
  const draft=exampleSession.restore(),output=exampleOutputBackup;exampleOutputBackup=null;
  closeExamples({focus:false});stageView.view='model';threeState.result=output.three;threeState.error=null;stageView.threeDResult=output.three;
  if(output.three)threeScene?.setWorld(output.three);
  store.replace(draft);setPhase('build');editArrangement();stageView.dirty=output.dirty;
  scene.home();renderStage();$('#open-examples').focus({preventScroll:true});toast('Your arrangement is restored.');
}
function initExamples(){
  $('#example-options').innerHTML=EXAMPLES.map(e=>`<button class="example-option" data-example="${e.id}"><span class="example-swatches">${e.types.map(swatch).join('')}</span><span><strong>${e.title}</strong><small>${e.description}</small></span><span aria-hidden="true">↗</span></button>`).join('');
  $('#open-examples').onclick=()=>$('#example-picker').hidden?openExamples():closeExamples();
  $('#close-examples').onclick=()=>closeExamples();
  $('#example-options').onclick=e=>{const b=e.target.closest('[data-example]');if(b)startExample(b.dataset.example);};
  $('#skip-example').onclick=()=>{exampleSession.skip();$('#return-draft').focus({preventScroll:true});};
  $('#return-draft').onclick=returnToDraft;
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#example-picker').hidden){e.preventDefault();closeExamples();}});
  document.addEventListener('pointerdown',e=>{if(!$('#example-picker').hidden&&!e.target.closest('#example-picker,#open-examples,[data-welcome]'))closeExamples({focus:false});});
  examplesReady=true;renderInspector();renderExamples();
}

function stageLabel(job){return ({control:'Creating Control Map…',image:'Generating image…',style:'Refining VERSION2 style…',complete:'World ready',control_ready:'Control Map ready',interrupted:'Generation interrupted'})[job?.stage]||'Reading your arrangement…';}
function showPipelineProgress(job){
  stageView.update(job);renderStage();
  $('#flow').innerHTML=`<p>${escape(stageLabel(job))}</p>`;$('#generate').textContent=stageLabel(job);
}
function renderResult(entry){
  generationMode=GENERATION_MODE.IMAGE;
  displayedResult=entry;const result=entry.generatedResult;
  stageView.update(result,{final:true});
  renderState(entry.worldStateSnapshot);
  $('#flow').innerHTML=`<p>${result.imageUrl?'Your world is ready.':result.controlMapUrl?'Control Map ready.':'Spatial reading ready.'}</p>${result.error?`<p class="error" role="alert">${escape(result.error)}</p>`:''}`;
  $('#retry-image').hidden=!result.controlMapUrl||!!result.imageUrl||phase==='reading';
  $('#saved-world').hidden=!result.id;if(result.id)$('#saved-world').href=`?world=${encodeURIComponent(result.id)}`;
  renderStage();
}
function editArrangement(){
  setPhase('build');scene.showRelationship(null);renderState(store.getWorldState());setView('model');
  $('#generate').textContent='Generate 2.5D';$('#retry-image').hidden=true;
  $('#flow').innerHTML='<p>Arrange, then generate a new world.</p>';
  if(exampleSession.backup){exampleCaption='Try raising Earth, then generate 3D again.';renderExamples();}
}
// Presentation only: never mutate a WorldState or reset either camera.
function immersiveTarget(){
  if(['three','image','control'].includes(stageView.view)&&stageView.available(stageView.view))return stageView.view;
  if(generationMode===GENERATION_MODE.ISLAND&&threeState.result)return 'three';
  if(stageView.available('image'))return 'image';
  if(threeState.result)return 'three';
  return stageView.available('control')?'control':null;
}
function renderImmersiveControl(){
  $('#reset').disabled=phase==='reading'||phase==='demo'||!immersiveTarget();
  $('#reset').title=immersiveTarget()?'Hide the interface and explore your generated world':'Generate a world to view it without controls';
}
function clearScreen(){
  const target=immersiveTarget();if(!target||phase==='reading'||phase==='demo')return;
  closeExamples({focus:false});closeSettings();setView(target);stopControlHold();
  immersive=true;document.body.classList.add('is-immersive');
  $('.site-header').inert=true;$('main').inert=true;$('#example-session').inert=true;
  const showImage=target!=='three';$('#immersive-image').hidden=!showImage;
  if(showImage){const image=$('#immersive-image img');image.src=stageView.image;image.alt=target==='control'?'Control Map of your world':'Your generated world';}
  $('#exit-immersive').hidden=false;$('#exit-immersive').focus({preventScroll:true});
}
function exitImmersive({focus=true}={}){
  if(!immersive)return;immersive=false;document.body.classList.remove('is-immersive');
  const home=document.body.dataset.page==='home';$('.site-header').inert=home;$('main').inert=home;$('#example-session').inert=home;
  $('#immersive-image').hidden=true;$('#exit-immersive').hidden=true;
  if(focus&&!home)$('#reset').focus({preventScroll:true});
}
async function retryImage(){
  generationMode=GENERATION_MODE.IMAGE;
  const entry=displayedResult;if(!entry||phase==='reading')return;
  closeSettings();setPhase('reading');
  try{entry.generatedResult=await generator.retry(entry.generatedResult.id,entry.analysis);}
  catch(error){entry.generatedResult={...entry.generatedResult,status:'error',error:error.message};}
  setPhase('result');renderResult(entry);
}
function renderHistory(){
  $('#history').hidden=history.length<2;if(history.length<2)return;
  $('#history').innerHTML=`<label for="history-select">Recent worlds</label><select id="history-select">${history.map(e=>`<option value="${escape(e.id)}" ${e.id===displayedResult?.id?'selected':''}>World ${e.sequence} · ${e.analysis.total} elements</option>`).join('')}</select>`;
  $('#history-select').disabled=phase==='reading';
  $('#history-select').onchange=e=>{const entry=history.find(h=>h.id===e.target.value);if(entry){setPhase('result');renderResult(entry);}};
}
async function generate(){
  if(phase!=='build'||!adapter.canGenerate())return;
  generationMode=GENERATION_MODE.IMAGE;
  closeSettings();select(null);const snapshot=store.snapshot(),analysis=getSpatialRelationships(snapshot,model.metadata,SPATIAL_CONFIG),image=scene.snapshot();pipelineImage=image;
  stageView.reset();displayedResult=null;setPhase('reading');renderHistory();$('#saved-world').hidden=true;
  $('#flow').innerHTML='<p>Reading your arrangement…</p>';$('#generate').textContent='Generating…';
  try{
    const generatedResult=await generator.generate(snapshot,analysis,{twoPass:$('#two-pass').checked});
    const entry={id:crypto.randomUUID(),sequence:(history.at(-1)?.sequence||0)+1,createdAt:new Date().toISOString(),worldStateSnapshot:snapshot,analysis,generatedResult,image};
    history.push(entry);history=history.slice(-5);setPhase('result');scene.showRelationship(null);renderResult(entry);renderHistory();
  }catch(error){setPhase('build');scene.showRelationship(null);$('#generate').textContent='Generate 2.5D';$('#flow').innerHTML=`<p class="error" role="alert">${escape(error.message||'Generation failed. Your arrangement is preserved.')}</p>`;renderHistory();}
}

async function generateThree(){
  if(phase!=='build'||!adapter.canGenerate())return;
  generationMode=GENERATION_MODE.ISLAND;closeSettings();select(null);
  const snapshot=store.snapshot();threeState.loading=true;threeState.error=null;threeState.message='Reading your arrangement';
  setPhase('reading');stageView.view='three';renderStage();
  try{
    const result=await islandGenerator.generate(snapshot,model.metadata);
    if(!threeScene)threeScene=new Generated3DWorld($('#three-world-scene'),label=>$('#three-inspect').textContent=label);
    threeScene.setWorld(result);
    threeState.result=result;stageView.setThreeD(result);
    $('#three-inspect').textContent='Drag to orbit · Scroll to zoom · Click to inspect';
    $('#three-debug').hidden=!DEBUG;
    $('#three-debug pre').textContent=JSON.stringify({resolution:result.terrain.resolution,seaLevel:result.terrain.seaLevel,seed:result.seed,influences:{earth:result.analysis.counts.earth,water:result.analysis.counts.water,fire:result.analysis.counts.fire},trees:result.layers.environment.trees.length,rocks:result.layers.environment.rocks.length,homes:result.layers.civilisation.objects.length,animals:result.layers.life.objects.length},null,2);
    $('#flow').innerHTML='<p>Your 3D world is ready.</p>';
  }catch(error){threeState.error='The 3D world could not be generated. '+(error.message||'Please try again.');}
  finally{threeState.loading=false;setPhase('result');renderStage();if(exampleSession.backup)$('#change-world').focus({preventScroll:true});}
}

function openSettings(section='image'){
  $('#settings-panel').hidden=false;$('#open-settings').setAttribute('aria-expanded','true');
  document.querySelectorAll('[data-settings]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.settings===section)));
  $('#settings-image').hidden=section!=='image';$('#settings-connection').hidden=section!=='connection';
  $('#close-settings').focus({preventScroll:true});renderStage();
}
function closeSettings(){$('#settings-panel').hidden=true;$('#open-settings').setAttribute('aria-expanded','false');$('#open-settings').focus({preventScroll:true});renderStage();}
function renderConnection(){
  if(!adapter||!scene)return;
  const mode=adapter.mode,status=adapter.status;
  $('#input-badge').innerHTML=`<i></i> ${mode==='manual'?'Manual editing':mode==='mock'?'MOCK · Connection demo':'Physical model'}`;
  document.querySelectorAll('[data-input]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.input===mode)));
  $('#connection-settings').hidden=mode==='manual';$('#connection-manual-note').hidden=mode!=='manual';
  $('#copy-physical').hidden=mode==='manual';$('#copy-physical').disabled=phase!=='build'||!adapter.canGenerate();
  $('#reconnect-input').disabled=phase!=='build'||!adapter.physical.link;
  $('#generate').disabled=phase!=='build'||!adapter.canGenerate();$('#generate-3d').disabled=$('#generate').disabled;
  const transport={stopped:'Not connected',connecting:'Connecting to service…',reconnecting:'Network interrupted · cached view', 'invalid-data':'Invalid data · cached view',live:'Service connected'};
  const hardware={waiting:'Waiting for hardware state',offline:'Physical device disconnected · cached view',recovering:'Hardware recovering',attention:'Some columns need attention',live:mode==='mock'?'Simulated input live':'Physical model live'};
  $('#connection-status').textContent=mode==='manual'?'Your editable world':`${mode==='mock'?'MOCK · ':''}${status.transport==='live'?(hardware[status.hardware]||status.hardware):(transport[status.transport]||status.transport)}`;
  $('#connection-status').dataset.state=mode==='manual'?'live':status.transport==='live'?status.hardware:'offline';
  const detail=$('#connection-detail');detail.hidden=mode==='manual';
  detail.textContent=status.error||(mode==='mock'?'Simulated input only. No physical device is connected by this demo.':status.transport!=='live'?'Open the hardware owner’s local service, then connect here. Cached modules are not live readings.':!adapter.mappingConfirmed?'Apply the C0–C5 meanings below before generating or copying physical input.':'Live input is read-only here. Add it to your manual draft to keep editing a copy.');
  const issues=status.issues||[];$('#connection-issues').hidden=mode==='manual'||!issues.length;
  const reasons={unknown_type:'Unrecognized code',unassigned_code:'Element meaning is unassigned',hardware_attention:'Hardware contact needs attention',beyond_validated_height:'Above the validated stack height',disabled_column_has_content:'Disabled position still reports layers'};
  $('#connection-issues').innerHTML=issues.map(i=>`<li><strong>${escape(i.column_id)}</strong> ${escape(reasons[i.reason]||i.reason)}</li>`).join('');
}
function initConnections(){
  $('#code-map-fields').innerHTML=Object.entries(DEFAULT_CODE_MAP).map(([code,type])=>`<label>${code}<select data-code="${code}" aria-label="Meaning of ${code}">${HARDWARE_TYPES.map(t=>`<option value="${t}" ${t===type?'selected':''}>${ELEMENTS[t].label}</option>`).join('')}</select></label>`).join('');
  document.querySelectorAll('[data-input]').forEach(button=>button.onclick=()=>{
    select(null);adapter.setMode(button.dataset.input);setPhase('build');setView('model');$('#generate').textContent='Generate 2.5D';if(adapter.mode==='manual')closeSettings();
    if(adapter.mode!=='manual'){$('#connection-url').value=INPUT_URLS[adapter.mode];openSettings('connection');}
    renderConnection();
  });
  $('#connect-input').onclick=()=>{try{adapter.connect($('#connection-url').value);renderConnection();}catch(error){$('#connection-detail').textContent=error.message;}};
  $('#reconnect-input').onclick=()=>adapter.reconnect();
  $('#apply-code-map').onclick=()=>{const mapping=Object.fromEntries([...document.querySelectorAll('[data-code]')].map(select=>[select.dataset.code,select.value]));adapter.physical.setCodeMap(mapping);adapter.mappingConfirmed=true;$('#mapping-note').textContent='Code mapping applied for this session. C5 and unidentified layers keep their positions.';renderConnection();};
  $('#copy-physical').onclick=()=>{try{const count=adapter.copyToManual();select(null);setPhase('build');toast(`${count} modules added to your manual draft.`);}catch(error){toast(error.message);}};
  renderConnection();
}
$('#element-tray').innerHTML=TYPES.map(key=>[key,ELEMENTS[key]]).map(([key,item])=>`<button class="element-button" data-type="${key}" aria-label="Add ${item.label} module" disabled>${swatch(key)}${item.label}<span class="add">+</span></button>`).join('');
try{
  model=await loadWorldBlocksModel();store=createWorldStore({version:1,inputMode:'web',blocks:[]});adapter=new WorldInputs(store,model.metadata,model.initialBlocks[0],()=>renderConnection());
  scene=new WorldScene($('#scene'),model,{select,move:(id,position)=>adapter.move(id,position)});$('#loading').remove();
  store.subscribe(renderState);renderState(store.getWorldState());setPhase('build');
  $('#home-view').onclick=()=>scene.home();
  $('#change-world').onclick=editArrangement;$('#retry-image').onclick=retryImage;
  $('#open-settings').onclick=()=>$('#settings-panel').hidden?openSettings(adapter.mode==='manual'?'image':'connection'):closeSettings();$('#close-settings').onclick=closeSettings;
  document.querySelectorAll('[data-settings]').forEach(b=>b.onclick=()=>openSettings(b.dataset.settings));
  document.querySelectorAll('button[data-view]').forEach(b=>{b.onclick=()=>setView(b.dataset.view);b.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const buttons=[...document.querySelectorAll('button[data-view]')].filter(t=>!t.disabled),index=buttons.indexOf(b),next=e.key==='Home'?0:e.key==='End'?buttons.length-1:(index+(e.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;setView(buttons[next].dataset.view);buttons[next].focus({preventScroll:true});};});
  $('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{toast('Use your browser’s full-screen control for projection.');}};
  document.addEventListener('fullscreenchange',()=>$('#fullscreen').textContent=document.fullscreenElement?'Exit full screen ↙':'Full screen ↗');
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#settings-panel').hidden)closeSettings();});$('#reset').onclick=clearScreen;$('#exit-immersive').onclick=()=>exitImmersive();
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&immersive){e.preventDefault();e.stopImmediatePropagation();exitImmersive();}});
  window.addEventListener('worldblocks:pagechange',()=>{exitImmersive({focus:false});stopControlHold();if(document.body.dataset.page==='home')closeExamples({focus:false});else {setPhase(phase);renderStage();}});
  const changeHeight=action=>{const b=store.getWorldState().blocks.find(b=>b.id===selected);if(!editable()||!b)return false;const next=b.heightLevel+(action==='raise'?1:-1);if(next<1||next>model.metadata.maxHeight)return false;adapter.setHeight(b.id,next);return true;};
  const changeControl=action=>{
    if(action==='raise'||action==='lower')return changeHeight(action);
    const b=store.getWorldState().blocks.find(b=>b.id===selected);if(!editable()||!b)return false;
    const step=model.metadata.diameter*.25,offset={left:[-step,0],right:[step,0],front:[0,step],back:[0,-step]}[action];
    return offset?adapter.move(selected,{x:b.position.x+offset[0],z:b.position.z+offset[1]}):false;
  };
  stopControlHold=bindPressAndHold($('#inspector'),changeControl);
  $('#module-select').onchange=e=>select(e.target.value||null);
  $('#element-tray').onclick=e=>{const b=e.target.closest('[data-type]');if(!b||b.disabled)return;dismissWelcome();const id=adapter.add(b.dataset.type);select(id);toast(`${ELEMENTS[b.dataset.type].label} added to your world.`);};
  $('#inspector').onclick=e=>{
    const welcome=e.target.closest('[data-welcome]');if(welcome){dismissWelcome();if(welcome.dataset.welcome==='examples')openExamples();else $('#element-tray button').focus({preventScroll:true});return;}
    const button=e.target.closest('[data-action]');if(!button||button.disabled||!editable())return;
    const action=button.dataset.action,b=store.getWorldState().blocks.find(b=>b.id===selected);if(!b)return;
    if(action==='deselect')return select(null);
    if(action.startsWith('type-'))return adapter.setType(selected,button.dataset.type);
    if(['raise','lower','left','right','front','back'].includes(action))return changeControl(action);
    if(action==='delete'){adapter.remove(selected);select(null);toast('Module removed.');$('#module-select').focus();return;}
  };
  document.addEventListener('keydown',e=>{if(!editable()||!selected||e.target.closest('input,textarea,select,[contenteditable="true"]'))return;if(['Backspace','Delete'].includes(e.key)){e.preventDefault();adapter.remove(selected);select(null);toast('Module removed.');$('#module-select').focus();}if(e.key==='Escape')select(null);});
  $('#generate').onclick=generate;$('#generate-3d').onclick=generateThree;$('#three-retry').onclick=()=>{if(phase==='result')setPhase('build');generateThree();};
  $('#three-reset').onclick=()=>{threeScene?.home();$('#three-inspect').textContent='Drag to orbit · Scroll to zoom · Click to inspect';};
  $('#debug').addEventListener('toggle',()=>{if($('#debug').open)renderDebug();});
  initConnections();
  registerWorldTools(adapter,select);
  window.addEventListener('pagehide',()=>{exampleSession.cancel();adapter.close();},{once:true});
  try{const response=await fetch('/api/config');if(response.ok){const config=await response.json();generationConfigured=config.generation?.configured===true;pipelineAvailable=config.generation?.pipeline==='control-map-image-v1';}}catch{}
  generator=pipelineAvailable?new WorldPipelineGenerator({onProgress:showPipelineProgress}):generationConfigured?new ApiWorldGenerator():new MockWorldGenerator();
  $('#generation-settings').hidden=!pipelineAvailable;
  $('#generation-service').textContent=pipelineAvailable?(generationConfigured?'Control Map → image · video paused':'Control Map ready to use · image service needs configuration'):generationConfigured?'Image service connected · generates on click':'Start the local server to connect the Control Map pipeline';
  const savedRun=new URL(location.href).searchParams.get('world');
  if(pipelineAvailable&&savedRun&&/^[a-f0-9]{32}$/.test(savedRun)){
    try{
      const [job,layout]=await Promise.all([generator.request(`/api/worlds/${savedRun}`),generator.request(`/api/worlds/${savedRun}/layout.json`)]);
      const captured=layout.snapshot;$('#two-pass').checked=job.twoPass;
      adapter.setMode(captured.worldState.inputMode==='physical'?(captured.worldState.input?.source==='mock'?'mock':'hardware'):'manual');
      store.replace(captured.worldState);pipelineImage=scene.snapshot();
      const entry={id:job.id,sequence:1,createdAt:new Date().toISOString(),worldStateSnapshot:captured.worldState,analysis:captured.analysis,image:pipelineImage,generatedResult:{...job,mode:'pipeline',reasoningSummary:describeSpatialFacts(captured.analysis)}};
      if(job.status==='running'){setPhase('reading');entry.generatedResult=await generator.watch(job,captured.analysis);}
      history.push(entry);setPhase('result');renderResult(entry);$('#generate').textContent=entry.generatedResult.imageUrl?'World generated ✓':'Control Map ready';
      renderHistory();
    }catch(error){toast('This saved world could not be opened. Your editable base is available.');setPhase('build');}
  }

  initExamples();
}catch(error){
  const loading=$('#loading');if(loading){loading.textContent=`The model could not open. ${error.message}`;const retry=document.createElement('button');retry.className='text-button';retry.textContent='Try again';retry.onclick=()=>location.reload();loading.append(retry);loading.setAttribute('role','alert');}console.error(error);
}
