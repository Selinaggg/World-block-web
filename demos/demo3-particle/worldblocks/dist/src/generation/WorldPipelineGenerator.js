import {describeSpatialFacts} from '../world/worldRules.js';

export class WorldPipelineGenerator {
  constructor({fetchImpl=fetch,onProgress=()=>{},pollMs=1200}={}){this.fetch=(...args)=>fetchImpl(...args);this.onProgress=onProgress;this.pollMs=pollMs;}
  async request(url,options={}){
    const response=await this.fetch(url,{...options,signal:AbortSignal.timeout(30000)});
    const data=await response.json();
    if(!response.ok)throw new Error(data.error||'The local generation service is unavailable.');
    return data;
  }
  async generate(worldState,analysis,{twoPass=true}={}){
    const job=await this.request('/api/worlds',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({worldState,analysis,options:{twoPass}})});
    return this.watch(job,analysis);
  }
  async retry(runId,analysis){return this.watch(await this.request(`/api/worlds/${encodeURIComponent(runId)}/retry`,{method:'POST'}),analysis);}
  async watch(job,analysis){
    this.onProgress(job);
    const until=Date.now()+15*60*1000;
    while(job.status==='running'){
      if(Date.now()>until)throw new Error('The server is still working. The job link above retains this generation; check it before starting another.');
      await new Promise(resolve=>setTimeout(resolve,this.pollMs));
      job=await this.request(`/api/worlds/${encodeURIComponent(job.id)}`);this.onProgress(job);
    }
    return {...job,mode:'pipeline',reasoningSummary:describeSpatialFacts(analysis)};
  }
}
