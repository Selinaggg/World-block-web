import {seededRandom} from '../generation/threeD/random.js';
import {sampleFields,distance} from './DreamFieldGenerator.js';
import {resolveDreamRelationships,flowAt} from './DreamRelationships.js';
import {primitive,point,lerp,line,quad,floor,box,arch,bridge,room,transformObject} from './DreamArchitecture.js';
import {DREAM_CONFIG} from './config.js';

export function generateDreamStructure(analysis,fields){
  const random=seededRandom(analysis.seed),relationships=resolveDreamRelationships(analysis);
  const plan={version:2,objects:[],nodes:[],edges:[],route:[],walkways:[],zones:[],relationships,random};
  const shells=analysis.sources.filter(s=>s.type==='shell');
  const seeds=(shells.length?shells:analysis.sources.slice(0,1)).slice(0,DREAM_CONFIG.maxNodes);
  // Without Shell, a small neutral threshold supports exploration of the force;
  // it does not silently generate an entire Shell building.
  for(const s of seeds){
    const n={id:`room-${plan.nodes.length}`,sourceId:s.id,x:s.x,z:s.z,y:0,radius:2.35+Math.min(.55,s.height*.09),height:3.5+Math.min(1.1,s.height*.16)+random()*.35,profile:Math.floor(random()*3),levels:s.type==='shell'?Math.min(3,Math.ceil(s.height/2)):1,fields:sampleFields(fields,s.x,s.z),fragment:s.type==='shell'&&s.height===1};
    n.localDensity=analysis.sources.filter(a=>distance(a,s)<7).length;
    n.height+=Math.min(.65,(n.localDensity-1)*.09);
    plan.nodes.push(n);
  }
  // Glow defines a destination near its actual input position. Flow extends the
  // walkable sequence, rather than creating an unrelated decorative object.
  for(const s of analysis.sources.filter(s=>s.type==='glow'||s.type==='flow').slice(0,8)){
    const nearest=plan.nodes.slice().sort((a,b)=>distance(a,s)-distance(b,s))[0];
    if(distance(nearest,s)<3.9){if(s.type==='glow')nearest.isAttractor=true;continue;}
    plan.nodes.push({id:`room-${plan.nodes.length}`,sourceId:s.id,x:s.x,z:s.z,y:0,radius:s.type==='glow'?2.1:1.45,height:3.7,levels:1,fields:sampleFields(fields,s.x,s.z),isAttractor:s.type==='glow',threshold:true});
  }
  if(plan.nodes.length===1){const n=plan.nodes[0];plan.nodes.unshift({id:'entry',x:n.x,z:n.z+7,y:0,radius:1.65,height:3.2,levels:1,fields:sampleFields(fields,n.x,n.z+7),threshold:true});}
  // Connected entry floors share a datum, including closely placed modules.
  // Height adds reachable upper rooms with separately resolved stair surfaces.
  const remaining=plan.nodes.slice().sort((a,b)=>Number(a.isAttractor)-Number(b.isAttractor)||b.z-a.z);
  const ordered=[remaining.shift()];
  while(remaining.length){remaining.sort((a,b)=>Number(a.isAttractor)-Number(b.isAttractor)||distance(a,ordered.at(-1))-distance(b,ordered.at(-1)));ordered.push(remaining.shift());}
  ordered.forEach((n,i)=>{
    n.y=0;
    n.fields=sampleFields(fields,n.x,n.z);plan.zones.push({id:n.id,x:n.x,z:n.z,y:n.y,halfX:n.radius-.16,halfZ:n.radius-.16});
  });
  plan.route=ordered.map(n=>n.id);plan.entry=ordered[0].id;plan.destination=ordered.at(-1).id;
  for(let i=1;i<ordered.length;i++){
    const a=ordered[i-1],b=ordered[i],len=distance(a,b),dx=(b.x-a.x)/(len||1),dz=(b.z-a.z)/(len||1);
    // Intersect the room's square perimeter, so paths never float or stop short.
    const da=(a.radius-.1)/Math.max(Math.abs(dx),Math.abs(dz)),db=(b.radius-.1)/Math.max(Math.abs(dx),Math.abs(dz));
    const start=point(a.x+dx*Math.min(da,len*.3),a.y,a.z+dz*Math.min(da,len*.3));
    const end=point(b.x-dx*Math.min(db,len*.3),b.y,b.z-dz*Math.min(db,len*.3));
    const f=sampleFields(fields,(a.x+b.x)/2,(a.z+b.z)/2),width=1.05+Math.min(.35,f.flow*.1);
    const edge={from:a.id,to:b.id,a:start,b:end,width,height:3.35,stairs:Math.abs(a.y-b.y)>.1};plan.edges.push(edge);plan.walkways.push({...edge,id:`route-${i}`});
    const o=primitive(plan,edge.stairs?'stairway':'bridge',f.flow>.25?'flow':'shell',{walkable:true,stage:.16});bridge(o,start,end,width,{stairs:edge.stairs});
    for(let t=1;t<distance(start,end);t+=1.8){const c=lerp(start,end,t/distance(start,end));arch(o,c,width,3.35,Math.atan2(dz,dx)+Math.PI/2,.065);}
  }
  for(const n of plan.nodes){
    if(n.threshold){const o=primitive(plan,'threshold','shell',{walkable:true});floor(o,n.x,n.y,n.z,n.radius,n.radius);arch(o,point(n.x,n.y,n.z-n.radius),n.radius*.8,n.height);continue;}
    if(n.fragment){const o=primitive(plan,'room-fragment','shell',{walkable:true});floor(o,n.x,n.y,n.z,n.radius,n.radius);arch(o,point(n.x,n.y,n.z),n.radius*.72,n.height);box(o,n.x-n.radius,n.y,n.z,.12,n.height,.12);continue;}
    room(plan,n);
    if(n.profile===1){
      const arcade=primitive(plan,'receding-arcade','shell',{stage:.06});
      for(let k=-1;k<=1;k++)arch(arcade,point(n.x,n.y,n.z+k*n.radius*.7),n.radius*.72,n.height,0,.065);
    }else if(n.profile===2){
      const vault=primitive(plan,'cross-vault','shell',{stage:.08});
      for(let k=-1;k<=1;k++)arch(vault,point(n.x+k*n.radius*.7,n.y,n.z),n.radius*.74,n.height+.3,Math.PI/2,.07);
    }
    // Upper rooms are offset across an external switchback stair, creating a
    // layered cutaway and a physically reachable balcony in the same world.
    let lower=n;
    for(let level=1;level<n.levels;level++){
      const upper={...n,id:`${n.id}-upper-${level}`,x:n.x+(level%2?1:-1)*.7,y:n.y+level*3.55,z:n.z-6.2*level,radius:n.radius*.85,height:3.4};
      room(plan,upper,{roof:level===n.levels-1});
      plan.zones.push({id:upper.id,x:upper.x,z:upper.z,y:upper.y,halfX:upper.radius-.16,halfZ:upper.radius-.16});
      const start=point(lower.x+lower.radius-.55,lower.y,lower.z),end=point(upper.x+upper.radius-.55,upper.y,upper.z+upper.radius-.2);
      const o=primitive(plan,'inhabitable-stairs','shell',{walkable:true,stage:.1});bridge(o,start,end,.57,{stairs:true});
      plan.walkways.push({id:o.id,a:start,b:end,width:.57,stairs:true});lower=upper;
    }
  }
  const nearby=(source,type)=>relationships.pairs.filter(p=>(p.a===source.id||p.b===source.id)&&p.types.includes(type));
  for(const s of analysis.sources.filter(s=>s.type!=='shell')){
    const owner=plan.nodes.filter(n=>!n.threshold).sort((a,b)=>distance(a,s)-distance(b,s))[0]||plan.nodes[0];
    const attached=nearby(s,'shell').length>0,base=attached?owner:{...owner,x:s.x,z:s.z,radius:2.1,y:0};
    const f=sampleFields(fields,s.x,s.z),v=flowAt(relationships,s.x,s.z),height=Math.min(5,s.height),r=base.radius;
    if(s.type==='veil'){
      const count=2+height;
      for(let j=0;j<count;j++){
        const y=base.y+base.height+.5+j*.08,z=base.z-r+j/count*r*2,stretch=1+Math.min(.85,v.strength*.35);
        const o=primitive(plan,v.strength>.4?'flowing-veil':'hanging-veil','veil',{amplitude:.16+height*.04,vector:v,luminous:nearby(s,'glow').length>0,stage:.4});
        // Curved cloth is a tessellated semantic surface, not a particle blob.
        for(let u=0;u<28;u++)for(let k=0;k<12;k++){
          const at=(a,b)=>{const x=(a/28*2-1)*r*stretch,drop=b/12*(2+height*.25);return point(base.x+x+v.x*drop*.3,y-drop+.18*Math.cos(x*1.4),z+Math.sin(x*1.15)*.2+v.z*drop*.3);};
          quad(o,at(u,k),at(u+1,k),at(u+1,k+1),at(u,k+1));
          if(k===0||k===11)line(o,at(u,k),at(u+1,k));
        }
      }
    }
    if(s.type==='drift'){
      for(let j=0;j<2+height;j++){
        const angle=j*2.399,x=base.x+Math.cos(angle)*(r+1.0),z=base.z+Math.sin(angle)*(r+1),y=base.y+1.4+j*.6;
        const o=primitive(plan,['drifting-door','drifting-window','drifting-platform'][j%3],'drift',{phase:random()*6.28,amplitude:.22+height*.12,vector:v,luminous:nearby(s,'glow').length>0});
        if(j%3===0)arch(o,point(x,y,z),.65,2.2,angle,.1);
        else if(j%3===1){box(o,x,y,z,.85,1.3,.045);o.surfaces=[];line(o,point(x,y,z),point(x,y+1.3,z));}
        else {floor(o,x,y,z,1.1,.6);box(o,x,y,z,.07,1,.07);}
      }
    }
    if(s.type==='graft'){
      const variant=Math.floor(random()*4),angle=Math.atan2(s.z-base.z,s.x-base.x)||.4;
      const attach=point(base.x+Math.cos(angle)*r,base.y+base.height*.8,base.z+Math.sin(angle)*r);
      for(let j=0;j<Math.min(4,1+height);j++){
        const k=(variant+j)%4,o=primitive(plan,['stairs-to-nowhere','cantilevered-room','inverted-arcade','wall-door'][k],'graft',{amplitude:.025,stage:.38,luminous:nearby(s,'glow').length>0});
        const c=point(attach.x+Math.cos(angle)*(j*1.4+1),attach.y+j*1.4,attach.z+Math.sin(angle)*(j*1.4+1));
        if(k===0){bridge(o,c,point(c.x+3,c.y+2.6,c.z-2),.65,{stairs:true,rails:false});}
        if(k===1){floor(o,c.x,c.y,c.z,1.8,1.35);arch(o,c,1.35,3.4,angle);box(o,c.x-1.8,c.y,c.z,.08,3.4,1.35);transformObject(o,c,-.17);}
        if(k===2){for(let a=0;a<3;a++)arch(o,point(c.x,c.y+a*.8,c.z),1.7,3.6,angle);transformObject(o,c,Math.PI*.8);}
        if(k===3){arch(o,c,1,2.8,angle);transformObject(o,c,Math.PI/2);bridge(o,attach,c,.4,{rails:false});}
        if(nearby(s,'flow').length){
          const extension=primitive(plan,'grafted-flow-bridge','graft',{stage:.44});
          const end=point(c.x+v.x*(2.8+height*.45),c.y+.7,c.z+v.z*(2.8+height*.45));
          bridge(extension,c,end,.45,{stairs:j%2===0});arch(extension,end,.65,2.5,Math.atan2(v.z,v.x)+Math.PI/2,.06);
        }
        if(nearby(s,'veil').length){const skin=primitive(plan,'grafted-skin','veil',{amplitude:.16,vector:v,stage:.45});quad(skin,c,point(c.x+3,c.y+1,c.z),point(c.x+3,c.y-1.5,c.z+.4),point(c.x,c.y-2,c.z+.4),true);}
      }
    }
    if(s.type==='glow'){
      const n=plan.nodes.slice().sort((a,b)=>distance(a,s)-distance(b,s))[0],x=n.x,z=n.z-n.radius*.62,y=n.y;
      const variant=Math.floor(random()*3);
      const o=primitive(plan,attached?'embedded-light-chamber':'light-well','glow',{stage:.66,luminous:true,amplitude:.035,variant,intensity:height});
      const w=1.0+height*.13;
      for(let j=0;j<5;j++)arch(o,point(x,y,z-j*.17),w,3.2+height*.15,0,.05);
      floor(o,x,y+.015,z,w,1.1);quad(o,point(x-w,y,z-.75),point(x+w,y,z-.75),point(x+w,y+3.5,z-.75),point(x-w,y+3.5,z-.75));
      if(variant===1){
        // A hollow luminous volume hangs above the opening, not a solid lamp.
        for(let j=0;j<4;j++)arch(o,point(x,y+1.5+j*.18,z),w*.85,2.8,j*Math.PI/2,.05);
      }else if(variant===2){
        // An open cylindrical light well with a slowly pulsing inner lining.
        for(let j=0;j<6;j++){
          const ring=[];for(let i=0;i<=48;i++){const a=i/48*Math.PI*2;ring.push(point(x+Math.cos(a)*w,y+2.8+j*.23,z+Math.sin(a)*w));}line(o,...ring);
        }
      }
      n.isAttractor=true;
    }
  }
  // Relationship-specific emergence is explicit and inspectable, not merely a
  // changed colour applied to independently generated objects.
  for(const zone of relationships.zones){
    const n=plan.nodes.slice().sort((a,b)=>distance(a,zone)-distance(b,zone))[0];
    if(zone.kind==='impossible-circulation'){
      const a=point(n.x+n.radius,n.y+n.height,n.z),b=point(a.x+3.8,a.y+2.4,a.z-3),c=point(b.x-1.7,b.y,b.z-4);
      const o=primitive(plan,'impossible-circulation','graft',{stage:.43});bridge(o,a,b,.7,{stairs:true});bridge(o,b,c,.65);
      const floating=room(plan,{id:o.id,x:c.x,y:c.y,z:c.z-1.5,radius:1.65,height:3.1},{force:'graft',visualOnly:true});floating.stage=.43;
    }else if(zone.kind==='living-chamber'||zone.kind==='dream-curtain'){
      const o=primitive(plan,zone.kind,'veil',{luminous:true,amplitude:.22,vector:flowAt(relationships,n.x,n.z),stage:.6});
      for(let j=0;j<20;j++){const a=j/20*Math.PI,b=(j+1)/20*Math.PI;
        quad(o,point(n.x+Math.cos(a)*n.radius,n.y+3+Math.sin(a)*1.3,n.z-n.radius),point(n.x+Math.cos(b)*n.radius,n.y+3+Math.sin(b)*1.3,n.z-n.radius),point(n.x+Math.cos(b)*n.radius,n.y+3+Math.sin(b)*1.3,n.z+n.radius),point(n.x+Math.cos(a)*n.radius,n.y+3+Math.sin(a)*1.3,n.z+n.radius));}
    }else if(zone.kind==='moving-architecture'){
      const v=flowAt(relationships,n.x,n.z);for(let i=0;i<4;i++){const o=primitive(plan,'moving-colonnade','drift',{vector:v,amplitude:.75,phase:1,stage:.46});arch(o,point(n.x+i*.7,n.y+1,n.z-n.radius-1-i*.8),1.3,3.7,0,.08);}
    }else if(zone.kind==='surreal-core'){
      const o=primitive(plan,'surreal-core','glow',{luminous:true,stage:.68});for(let i=0;i<5;i++){arch(o,point(n.x,n.y+2+i*.25,n.z),1.9,4,Math.PI*i/5,.045);}
    }
  }
  // Direction is visible as parallel, converging traces on actual circulation.
  for(const e of plan.edges){if(sampleFields(fields,(e.a.x+e.b.x)/2,(e.a.z+e.b.z)/2).flow<.2)continue;
    const lit=sampleFields(fields,(e.a.x+e.b.x)/2,(e.a.z+e.b.z)/2).glow>.3;
    const o=primitive(plan,lit?'luminous-passage':'directional-passage','flow',{vector:flowAt(relationships,e.a.x,e.a.z),stage:.22,luminous:lit});
    if(lit)for(let t=.2;t<1;t+=.2){const a=lerp(e.a,e.b,t);arch(o,a,e.width,3.4,Math.atan2(e.b.z-e.a.z,e.b.x-e.a.x)+Math.PI/2,.045);}
    for(const side of [-.7,0,.7])line(o,point(e.a.x+side,e.a.y+.025,e.a.z),point(e.b.x+side,e.b.y+.025,e.b.z));
  }
  delete plan.random;return plan;
}
