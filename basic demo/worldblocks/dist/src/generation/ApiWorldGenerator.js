import {describeSpatialFacts} from '../world/worldRules.js';
export function validImageUrl(value){
  if(typeof value!=='string'||!value)return false;
  if(/^data:image\/(png|jpeg|webp);base64,[a-zA-Z0-9+/=]+$/.test(value))return true;
  try{return ['http:','https:'].includes(new URL(value).protocol);}catch{return false;}
}
export class ApiWorldGenerator {
  constructor({endpoint='/api/generate',fetchImpl=fetch}={}){this.endpoint=endpoint;this.fetch=(...args)=>fetchImpl(...args);}
  async generate(worldState,analysis){
    const response=await this.fetch(this.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({worldState,analysis}),signal:AbortSignal.timeout(190000)});
    const data=await response.json();
    if(!response.ok)throw new Error(data.error||'Image generation failed. Your arrangement is preserved.');
    if(!validImageUrl(data.imageUrl))throw new Error('The image service did not return a valid image.');
    return {mode:'api',title:typeof data.title==='string'?data.title:'Your generated world',description:typeof data.description==='string'?data.description:'Generated from this arrangement.',imageUrl:data.imageUrl,reasoningSummary:describeSpatialFacts(analysis)};
  }
}
