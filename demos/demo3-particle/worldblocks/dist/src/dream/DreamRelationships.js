import {distance} from './DreamFieldGenerator.js';
const COMBINATIONS=[
 ['impossible-circulation',['shell','graft','flow']],['living-chamber',['shell','veil','glow']],
 ['moving-architecture',['shell','drift','flow']],['dream-curtain',['veil','glow','flow']],
 ['surreal-core',['shell','graft','glow']],
];
export function resolveDreamRelationships(analysis){
  const sources=analysis.sources,pairs=[];
  sources.forEach((a,i)=>sources.slice(i+1).forEach(b=>{
    const d=distance(a,b),reach=(a.radius+b.radius)*.92;
    if(d>reach||a.type===b.type)return;
    pairs.push({a:a.id,b:b.id,types:[a.type,b.type].sort(),distance:d,weight:(1-d/reach)*Math.sqrt(a.strength*b.strength),direction:{x:(b.x-a.x)/(d||1),z:(b.z-a.z)/(d||1)},heightDelta:b.height-a.height});
  }));
  const zones=[];
  for(const [kind,types] of COMBINATIONS){
    for(const anchor of sources.filter(s=>s.type===types[0])){
      const selected=[anchor];
      for(const type of types.slice(1)){
        const nearby=sources.filter(s=>s.type===type&&selected.every(a=>pairs.some(p=>p.a===a.id&&p.b===s.id||p.b===a.id&&p.a===s.id))).sort((a,b)=>distance(a,anchor)-distance(b,anchor))[0];
        if(nearby)selected.push(nearby);
      }
      if(selected.length===3)zones.push({kind,sourceIds:selected.map(s=>s.id),x:selected.reduce((v,s)=>v+s.x,0)/3,z:selected.reduce((v,s)=>v+s.z,0)/3,strength:selected.reduce((v,s)=>v+s.strength,0)/3});
    }
  }
  const vectors=sources.filter(s=>s.type==='flow').map(s=>{
    const targets=sources.filter(t=>t.id!==s.id).sort((a,b)=>(a.type==='glow'?-4:0)+distance(s,a)-(b.type==='glow'?-4:0)-distance(s,b));
    const t=targets[0],d=t?distance(s,t):1;
    return {id:s.id,x:s.x,z:s.z,dx:t?(t.x-s.x)/(d||1):0,dz:t?(t.z-s.z)/(d||1):-1,strength:s.strength,radius:s.radius*(1+s.height*.12)};
  });
  return {pairs,zones,vectors};
}
export function flowAt(relationships,x,z){
  let dx=0,dz=0,weight=0;
  for(const v of relationships.vectors){const w=v.strength*Math.exp(-((x-v.x)**2+(z-v.z)**2)/(2*v.radius**2));dx+=v.dx*w;dz+=v.dz*w;weight+=w;}
  const length=Math.hypot(dx,dz)||1;return {x:dx/length,z:dz/length,strength:weight};
}
