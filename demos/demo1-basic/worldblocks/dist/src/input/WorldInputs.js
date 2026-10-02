import {WebInputAdapter} from './WebInputAdapter.js';
import {PhysicalInputAdapter} from './PhysicalInputAdapter.js';

/** Manual drafts and complete live snapshots never overwrite one another implicitly. */
export class WorldInputs {
  constructor(store,metadata,template,onStatus=()=>{},options={}){
    this.store=store;this.mode='manual';this.mappingConfirmed=false;this.busy=false;this.manualDraft=store.snapshot();this.latestPhysical=null;this.status={transport:'stopped',hardware:'waiting',issues:[]};
    this.web=new WebInputAdapter(store,metadata,template);
    this.physical=new PhysicalInputAdapter({metadata,sourceObjectName:template.sourceObjectName,...options,
      onWorld:world=>{this.latestPhysical=world;if(this.mode!=='manual'&&!this.busy)store.replace(world);onStatus(this.status);},
      onStatus:status=>{this.status=status;onStatus(status);}});
  }
  getWorldState(){return this.store.getWorldState();}
  subscribe(cb){return this.store.subscribe(cb);}
  setLocked(value){this.busy=!!value;this.web.setLocked(this.busy||this.mode!=='manual');if(!this.busy&&this.mode!=='manual'&&this.latestPhysical)this.store.replace(this.latestPhysical);}
  setMode(mode){
    if(this.busy)throw new Error('Finish the current generation before changing input.');
    if(!['manual','hardware','mock'].includes(mode))throw new Error('Unknown input mode.');
    if(mode===this.mode)return;
    if(this.mode==='manual')this.manualDraft=this.store.snapshot();
    this.physical.close();this.mode=mode;this.latestPhysical=null;
    this.web.setLocked(mode!=='manual');
    this.store.replace(mode==='manual'?this.manualDraft:{version:1,inputMode:'physical',blocks:[]});
  }
  connect(url){if(this.mode==='manual')throw new Error('Select physical input or the connection demo first.');this.physical.connect(url,this.mode);}
  reconnect(){this.physical.reconnect();}
  canGenerate(){
    const state=this.store.getWorldState();
    if(!state.blocks.length||state.blocks.some(b=>b.type==='unknown'))return false;
    return this.mode==='manual'||((this.mode==='mock'||this.mappingConfirmed)&&this.status.transport==='live'&&this.status.hardware==='live'&&!this.status.issues.length&&!!this.latestPhysical);
  }
  copyToManual(){
    if(this.busy||this.mode==='manual'||!this.canGenerate())throw new Error('Wait for a reliable connected arrangement before copying.');
    const imported=this.store.snapshot().blocks.map(b=>{const {physical,...module}=b;return{...module,id:`imported_${crypto.randomUUID()}`,origin:{...physical,source:this.mode}};});
    this.manualDraft={...this.manualDraft,blocks:[...this.manualDraft.blocks,...imported]};
    this.setMode('manual');return imported.length;
  }
  add(type){return this.web.add(type);}
  move(id,position){return this.web.move(id,position);}
  setHeight(id,height){return this.web.setHeight(id,height);}
  setType(id,type){return this.web.setType(id,type);}
  remove(id){return this.web.remove(id);}
  reset(){return this.web.reset();}
  close(){this.physical.close();}
}
