import {normalizePosition} from '../world/spatialAnalysis.js';
export const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
export const clamp=(n,a=0,b=1)=>Math.max(a,Math.min(b,n));
export const toWorld=(p,config)=>({x:(p.x-.5)*config.size,z:(p.z-.5)*config.size});
export const fromWorld=(p,config)=>({x:p.x/config.size+.5,z:p.z/config.size+.5});
export const fromNormalized=(p,bounds)=>({x:bounds.minX+p.x*(bounds.maxX-bounds.minX),z:bounds.minZ+p.z*(bounds.maxZ-bounds.minZ)});
export function normalizedBlocks(state,metadata){
  return state.blocks.filter(b=>!['unknown','support'].includes(b.type)).map(b=>({type:b.type,...normalizePosition(b.position,metadata.bounds),heightLevel:b.heightLevel})).sort((a,b)=>a.type.localeCompare(b.type)||a.x-b.x||a.z-b.z||a.heightLevel-b.heightLevel);
}
export function weightedCentroid(blocks){
  const weight=p=>1+Math.min(5,p.heightLevel-1)*.4,total=blocks.reduce((s,b)=>s+weight(b),0);
  return {x:blocks.reduce((s,b)=>s+b.x*weight(b),0)/total,z:blocks.reduce((s,b)=>s+b.z*weight(b),0)/total,weight:total};
}
export function clusters(points,threshold){
  const remaining=new Set(points),out=[];
  while(remaining.size){const seed=remaining.values().next().value,group=[seed];remaining.delete(seed);
    for(let i=0;i<group.length;i++)for(const p of remaining)if(distance(p,group[i])<=threshold){group.push(p);remaining.delete(p);}
    out.push({blocks:group,...weightedCentroid(group),maxHeight:Math.max(...group.map(p=>p.heightLevel))});
  }
  return out.sort((a,b)=>b.weight-a.weight||a.x-b.x||a.z-b.z);
}
export function direction(a,b){const dx=b.x-a.x,dz=b.z-a.z;if(Math.hypot(dx,dz)<.035)return 'near the centre';return Math.abs(dx)>Math.abs(dz)?(dx>0?'east':'west'):(dz>0?'south':'north');}
export function analyzeTown(points,config){
  const counts=Object.fromEntries(['human','water','earth','fire','animal'].map(t=>[t,points.filter(p=>p.type===t).length]));
  const humanClusters=clusters(points.filter(p=>p.type==='human'),config.clusterDistance).map((c,i)=>({...c,id:`neighbourhood-${i}`}));
  const relationships=humanClusters.flatMap(c=>['water','earth','fire','animal'].map(type=>{
    const resource=points.filter(p=>p.type===type).sort((a,b)=>distance(c,a)-distance(c,b))[0];
    return resource?{cluster:c.id,type,distance:distance(c,resource),direction:direction(c,resource),resource}:null;
  }).filter(Boolean));
  return {counts,humanClusters,dominant:humanClusters[0]||null,relationships};
}
