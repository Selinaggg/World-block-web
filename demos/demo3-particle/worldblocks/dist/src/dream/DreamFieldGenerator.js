import {DREAM_TYPES,FIELD_NAMES,DREAM_CONFIG} from './config.js';
import {normalizePosition} from '../world/spatialAnalysis.js';
import {hash} from '../generation/threeD/random.js';
export const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
export const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
export function analyzeDream(state,metadata){
  const blocks=state.blocks.filter(b=>DREAM_TYPES.includes(b.type)).map(b=>{
    const n=normalizePosition(b.position,metadata.bounds);
    return {type:b.type,x:clamp(n.x),z:clamp(n.z),level:b.heightLevel};
  }).sort((a,b)=>a.type.localeCompare(b.type)||a.x-b.x||a.z-b.z||a.level-b.level);
  const signature=blocks.map(b=>[b.type,+b.x.toFixed(5),+b.z.toFixed(5),b.level]);
  const seed=hash(JSON.stringify(signature)),groups=new Map();
  for(const b of blocks){const key=`${b.type}:${b.x.toFixed(5)}:${b.z.toFixed(5)}`;
    const g=groups.get(key)||{type:b.type,normalizedPosition:{x:b.x,z:b.z},x:(b.x-.5)*DREAM_CONFIG.width,z:(b.z-.5)*DREAM_CONFIG.depth,count:0,height:1};
    g.count++;g.height=Math.max(g.height,b.level);groups.set(key,g);
  }
  const sources=[...groups.values()].map((g,i)=>({...g,id:`force-${i}`,strength:1+Math.log2(g.height)*.65+Math.log2(g.count)*.3,radius:4.8+Math.min(3.5,Math.sqrt(g.height)*.6)}));
  const counts=Object.fromEntries(DREAM_TYPES.map(t=>[t,blocks.filter(b=>b.type===t).length]));
  const neighbours=[];
  sources.forEach((a,i)=>sources.slice(i+1).forEach(b=>{const d=distance(a,b);if(d<11)neighbours.push({a:a.id,b:b.id,distance:d,types:[a.type,b.type]});}));
  return {seed,sources,counts,neighbours,total:blocks.length};
}
export function generateDreamFields(analysis){
  const fields={sources:analysis.sources,peaks:{}};
  for(const t of DREAM_TYPES)fields.peaks[FIELD_NAMES[t]]=Math.max(0,...analysis.sources.filter(s=>s.type===t).map(s=>s.strength));
  return fields;
}
export function sampleFields(fields,x,z){
  const value=Object.fromEntries(DREAM_TYPES.map(t=>[t,0]));
  for(const s of fields.sources){const d2=(s.x-x)**2+(s.z-z)**2;value[FIELD_NAMES[s.type]]+=s.strength*Math.exp(-d2/(2*s.radius*s.radius));}
  return value;
}
