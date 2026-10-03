const $ = selector => document.querySelector(selector);
const meanings = {earth:'Earth',fire:'Fire',animal:'Animal',human:'Human',water:'Water',support:'Support'};
let demos=[], saved=null, ports=[], lastPortSignature='', activeDemo=null, pollTimer;
async function api(path, options) {
  const response=await fetch(path,options), data=await response.json();
  if(!response.ok) throw new Error(data.error||'Connection failed. Please try again.');
  return data;
}
function element(tag,className,text){const node=document.createElement(tag);node.className=className;if(text)node.textContent=text;return node;}
function renderCatalog(){
  const grid=$('#demo-grid');grid.replaceChildren();
  for(const demo of demos){
    const ready=demo.status==='ready',card=element(ready?'a':'article',`demo-card ${ready?'ready':'planned'}`);
    if(ready)card.href=`/demos/${demo.id}/`;
    card.append(element('span','number',String(demo.order).padStart(2,'0')),element('span','badge',!ready?'Coming soon':demo.hardware==='available'?'Physical input':'Manual input'),element('h3','',demo.title),element('p','',demo.description));
    if(ready)card.append(element('span','arrow','↗'));
    grid.append(card);
  }
}
function renderRoute(){
  const match=location.pathname.match(/^\/demos\/([^/]+)\/?$/);
  activeDemo=match&&demos.find(d=>d.id===match[1]&&d.status==='ready');
  $('#home').hidden=!!activeDemo;$('#experience').hidden=!activeDemo;document.body.dataset.view=activeDemo?'demo':'home';
  if(!activeDemo)return;
  $('#experience-title').textContent=activeDemo.id;
  $('#experience-note').textContent=activeDemo.hardware==='available'?'Physical input · Confirm hardware settings before first use':'Dreamscape · Manual input';
  // A parent-page refresh must also fetch the current iframe entry document.
  // Keep hash routes and any existing query parameters intact.
  const entryUrl=new URL(activeDemo.entry,`http://127.0.0.1:${activeDemo.port}`);
  entryUrl.searchParams.set('_wb',String(Date.now()));
  const url=entryUrl.href;
  $('#demo-frame').src=url;$('#demo-frame').title=activeDemo.title;$('#open-separately').href=url;
}
function updateColumns(value){
  const count=Number($('#module-count').value),select=$('#grid-cols');select.replaceChildren();
  if(!count){select.add(new Option('Choose a count first',''));return;}
  for(let i=1;i<=count;i++)if(count%i===0)select.add(new Option(`${i} columns × ${count/i} rows`,String(i)));
  select.value=String(value||1);
}
function updatePorts(){
  const signature=JSON.stringify(ports);if(signature===lastPortSignature)return;lastPortSignature=signature;
  const select=$('#serial-port'),previous=select.value||saved?.serial_port||'auto';select.replaceChildren(new Option('Auto-detect a single device','auto'));
  for(const port of ports)select.add(new Option(`${port.description} — ${port.device}`,port.device));
  if(previous!=='auto'&&!ports.some(p=>p.device===previous))select.add(new Option(`${previous} (disconnected)`,previous));
  select.value=previous;
  $('#port-help').textContent=ports.length?'Device list updated. Select a device if more than one is connected.':'No USB device found. Connect your board to continue.';
}
async function showSetup(){
  try{
    const data=await api('/api/hub/settings');saved=data.settings;
    $('#module-count').value=saved?.module_count||'';updateColumns(saved?.grid_cols);
    $('#slots').value=saved?.slots?.join(',')||'';
    $('#code-map').replaceChildren();
    for(const [code,value] of Object.entries(saved?.code_map||data.default_map)){
      const label=element('label','',code),select=document.createElement('select');select.dataset.code=code;
      for(const [id,title] of Object.entries(meanings))select.add(new Option(title,id));select.value=value;label.append(select);$('#code-map').append(label);
    }
    lastPortSignature='';updatePorts();
    if(saved?.serial_port){if(![...$('#serial-port').options].some(o=>o.value===saved.serial_port))$('#serial-port').add(new Option(`${saved.serial_port} (disconnected)`,saved.serial_port));$('#serial-port').value=saved.serial_port;}
    $('#confirmed').checked=false;$('#setup-message').textContent='';$('#setup-dialog').showModal();
  }catch(error){$('#setup-message').textContent=`Settings could not be opened: ${error.message}`;if(!$('#setup-dialog').open)$('#setup-dialog').showModal();}
}
$('#module-count').onchange=()=>{updateColumns();$('#slots').value=Array.from({length:Number($('#module-count').value)},(_,i)=>`A${i}`).join(',');$('#confirmed').checked=false;};
$('#setup-button').onclick=showSetup;$('#close-setup').onclick=()=>$('#setup-dialog').close();
$('#setup-form').onsubmit=async event=>{
  event.preventDefault();const submit=event.submitter;submit.disabled=true;
  try{
    const selected=$('#serial-port').value,port=ports.find(p=>p.device===selected);
    const data={module_count:Number($('#module-count').value),grid_cols:Number($('#grid-cols').value),slots:$('#slots').value.split(',').map(s=>s.trim()),serial_port:selected,
      serial_number:port?.serial_number||(selected===saved?.serial_port?saved?.serial_number:null),confirmed:$('#confirmed').checked,
      code_map:Object.fromEntries([...document.querySelectorAll('#code-map select')].map(s=>[s.dataset.code,s.value]))};
    saved=(await api('/api/hub/settings',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})).settings;
    $('#setup-message').textContent='Saved. Reopen the experience from All worlds to apply these settings.';
    // Do not reload an active demo: that would discard its in-memory draft.
    if(!activeDemo)$('#setup-dialog').close();
  }catch(error){$('#setup-message').textContent=error.message;}finally{submit.disabled=false;}
};
async function poll(){
  try{
    const data=await api('/api/hub/status'),hardware=data.hardware;ports=hardware.ports||[];updatePorts();
    const status=$('#hardware-status');status.dataset.status=hardware.status;status.replaceChildren(element('i',''),document.createTextNode(hardware.message));status.title=hardware.port||'';
    if(activeDemo){const failed=!data.services[activeDemo.id];$('#frame-error').hidden=!failed;$('#frame-error').textContent=failed?'This experience has stopped. Check the launcher window and restart.':'';}
  }catch{const status=$('#hardware-status');status.dataset.status='offline';status.replaceChildren(element('i',''),document.createTextNode('Launcher stopped. Open it again to reconnect.'));}
  pollTimer=setTimeout(poll,2000);
}
try{demos=await api('/api/hub/demos');renderCatalog();renderRoute();poll();}catch(error){$('#demo-grid').textContent=error.message;}
window.addEventListener('pagehide',()=>clearTimeout(pollTimer),{once:true});
