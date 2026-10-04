import {toPhysicalWorld} from '../input/PhysicalInputAdapter.js';
import {DEFAULT_CODE_MAP} from '../input/hardwareConfig.js';
// Input identities and session snapshots stay separate even while a renderer is busy.
export class InputSession {
 constructor({metadata,template,dream=false,onChange=()=>{}}){Object.assign(this,{metadata,template,dream,onChange});this.mode='hardware';this.hardware=null;this.test=null;this.mapping={...DEFAULT_CODE_MAP};this.status='waiting';}
 world(state){const world=toPhysicalWorld(state,this.metadata,this.template.sourceObjectName,this.dream?DEFAULT_CODE_MAP:this.mapping);if(this.dream){world.mode='dreamscape';const types=['shell','veil','drift','graft','glow','flow'];for(const b of world.blocks)b.type=types[Number(b.physical.codeId?.slice(1))]||'unknown';}return world;}
 accept(state,source='hardware'){if(source==='hardware'&&!state.columns?.length&&!state.topology_id){this.status=state.status;if(this.mode==='hardware')this.onChange(this.hardware,this.mode);return this.hardware;}const next=this.world(state);this[source]=next;if(source==='hardware')this.status=state.status;if(this.mode===source)this.onChange(next,this.mode);return next;}
 select(mode){if(!['hardware','test'].includes(mode))throw Error('Unknown input');this.mode=mode;this.onChange(this.current,mode);}
 get current(){return this[this.mode];}
 get reliable(){const w=this.current;return (this.mode==='test'||this.status==='live')&&!!w&&w.input.status==='live'&&w.input.connected&&!w.input.issues.length;}
}
export function compositionKey(world,mode){return JSON.stringify([mode,world?.mode,world?.blocks.map(b=>[b.id,b.type,b.position,b.heightLevel])||[]]);}
// A newer input invalidates in-flight work; there is at most one generation at a time.
export class LatestGeneration {
 constructor({generate,apply,onError=()=>{},delay=300}){Object.assign(this,{generate,apply,onError,delay});this.version=0;this.pending=null;this.running=false;this.paused=false;this.closed=false;}
 request(world){this.version++;this.pending=structuredClone(world);clearTimeout(this.timer);this.timer=setTimeout(()=>this.flush(),this.delay);}
 invalidate(){this.version++;this.pending=null;clearTimeout(this.timer);}
 async flush(){clearTimeout(this.timer);if(this.closed||this.running||this.paused||!this.pending)return;const world=this.pending,version=this.version;this.pending=null;this.running=true;try{const result=await this.generate(world);if(!this.closed&&version===this.version)await this.apply(result,world);}catch(e){if(!this.closed&&version===this.version)this.onError(e);}finally{this.running=false;clearTimeout(this.timer);if(this.pending&&!this.closed&&!this.paused)this.timer=setTimeout(()=>this.flush(),this.delay);}}
 pause(value){this.paused=value;if(!value)this.flush();}
 close(){this.closed=true;this.invalidate();}
}
