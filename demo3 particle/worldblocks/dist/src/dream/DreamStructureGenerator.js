import {DREAM_CONFIG} from './config.js';
import {sampleFields,clamp,distance} from './DreamFieldGenerator.js';
export function generateDreamStructure(analysis,fields){
  const nodes=[];
  // Co-located forces combine within one chamber, rather than duplicating rooms.
  for(const s of [...analysis.sources].sort((a,b)=>b.strength-a.strength||a.id.localeCompare(b.id))){
    const near=nodes.find(n=>distance(n,s)<2.8);
    if(near){near.sources.push(s.id);continue;}
    if(nodes.length<DREAM_CONFIG.maxNodes)nodes.push({id:`node-${nodes.length}`,x:s.x,z:s.z,sources:[s.id],type:s.type});
  }
  for(const n of nodes){const f=sampleFields(fields,n.x,n.z);n.fields=f;
    n.radius=2.5+clamp(f.emotion,0,3)*.35+clamp(f.structure,0,3)*.25;
    n.height=4.2+clamp(f.structure,0,4)*.65;
    n.coherence=clamp(.24+f.structure*.18+f.stability*.13-f.distortion*.16,.12,.96);
    n.fracture=clamp(f.distortion/(1+f.stability*.55),0,3);
    n.isMemory=analysis.sources.some(s=>s.type==='memory'&&distance(n,s)<3);
    n.isAttractor=analysis.sources.some(s=>s.type==='desire'&&distance(n,s)<3);
  }
  let entry=[...nodes].sort((a,b)=>(b.fields.stability-b.fields.distortion)-(a.fields.stability-a.fields.distortion)||a.z-b.z)[0];
  // Start just before the force field if there is no stable Anchor available.
  if(!analysis.counts.anchor||nodes.length===1){
    const first=entry;entry={id:'entry',x:first.x-5.5,z:first.z+5.5,type:'anchor',sources:[],radius:2,height:3.8,fields:sampleFields(fields,first.x-5.5,first.z+5.5),coherence:.8,fracture:0,synthetic:true};nodes.unshift(entry);
  }
  const desires=nodes.filter(n=>n.isAttractor&&n!==entry);
  const destination=[...desires].sort((a,b)=>distance(entry,b)-distance(entry,a))[0]||[...nodes].sort((a,b)=>distance(entry,b)-distance(entry,a))[0];
  const unvisited=nodes.filter(n=>n!==entry&&n!==destination),route=[entry];
  while(unvisited.length){unvisited.sort((a,b)=>distance(route.at(-1),a)-distance(route.at(-1),b));route.push(unvisited.shift());}
  if(destination!==entry)route.push(destination);
  const edges=route.slice(1).map((to,i)=>{const from=route[i],f=sampleFields(fields,(from.x+to.x)/2,(from.z+to.z)/2);
    return {id:`path-${i}`,from:from.id,to:to.id,a:{x:from.x,z:from.z},b:{x:to.x,z:to.z},width:clamp(1.55+f.stability*.22-f.distortion*.19,.9,2.6),height:4.3+clamp(f.structure,0,3)*.6,fields:f,fracture:clamp(f.distortion/(1+f.stability*.55),0,3)};
  });
  return {nodes,edges,route:route.map(n=>n.id),entry:entry.id,destination:destination.id};
}
