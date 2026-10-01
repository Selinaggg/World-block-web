import {seededRandom} from '../generation/threeD/random.js';
import {sampleFields,clamp,distance} from './DreamFieldGenerator.js';
import {closestOnSegment} from './DreamNavigationPlanner.js';
import {DREAM_CONFIG} from './config.js';

const PALETTE={white:[.83,.92,1],blue:[.07,.27,1],cyan:[.12,.93,1],pink:[1,.12,.65],red:[1,.025,.12],warm:[1,.84,.53]};
const mix=(a,b,t)=>a.map((v,i)=>v*(1-t)+b[i]*t);
/** CPU builds stable geometry once; breathing, jitter, reveal and drift run on GPU. */
export function buildDreamParticles(plan,fields,seed,{budget=DREAM_CONFIG.maxParticles}={}){
  const random=seededRandom(seed),layers=Array.from({length:5},()=>[]);
  function put(x,y,z,kind,f,clarity=1,flow=[0,0,0]){
    if(!f)f=sampleFields(fields,x,z);
    const fear=clamp(f.distortion/(1+f.stability*.6),0,3);
    if(kind===1&&random()>clarity)return;
    // Fear cuts coherent missing patches into walls, while the centre path survives.
    if(kind===1&&fear>.45&&Math.sin(x*.9+z*.5)*Math.cos(y*1.5+z*.4)>.67-fear*.13)return;
    let color=kind===0?PALETTE.blue:PALETTE.white;
    if(kind===2)color=f.emotion>.1?PALETTE.pink:PALETTE.blue;
    if(kind===3)color=random()>.87?PALETTE.warm:PALETTE.cyan;
    if(kind===4)color=PALETTE.red;
    if(kind<=1){const dominance=Math.max(f.distortion,f.emotion,f.attraction);
      if(dominance>.3&&random()<clamp(dominance*.32,.1,.8))color=mix(color,dominance===f.distortion?PALETTE.red:dominance===f.emotion?PALETTE.pink:PALETTE.cyan,.93);
      if(kind===0&&random()<.09+clamp(f.stability*.07,0,.24))color=PALETTE.white;
    }
    const brightness=(.48+random()*.65)*(kind===2?.65:1);
    const jitter=kind===0?.012:(.017+fear*.07+clamp(f.emotion,0,3)*.013)/(1+f.stability*.5);
    const pulse=kind===2?.5:clamp(f.emotion*.13,.035,.28);
    layers[kind].push([x,y,z,...color.map(c=>c*brightness),jitter,pulse,random()*Math.PI*2,kind,...flow]);
  }
  for(const e of plan.edges){
    const len=distance(e.a,e.b),dx=(e.b.x-e.a.x)/len,dz=(e.b.z-e.a.z)/len;
    const width=e.width;
    // Floor is dense enough to navigate, with fine scan-line traces at the edges.
    const count=Math.ceil(len*(210+e.fields.stability*45));
    for(let i=0;i<count;i++){const t=random()*len,l=(random()*2-1)*width,x=e.a.x+dx*t-dz*l,z=e.a.z+dz*t+dx*l;
      put(x,(random()-.5)*.045,z,0);
    }
    const wallCount=Math.ceil(len*(140+clamp(e.fields.structure,0,4)*65));
    for(let i=0;i<wallCount;i++){
      const t=random()*len,y=random()*e.height,side=random()<.5?-1:1,l=width*side;
      const x=e.a.x+dx*t-dz*l,z=e.a.z+dz*t+dx*l;
      const f=sampleFields(fields,x,z),clarity=clamp(.18+f.structure*.18+f.stability*.1-f.distortion*.07,.1,.9);
      if(random()<.84)put(x,y,z,1,f,clarity);
      else put(e.a.x+dx*t-dz*(random()*2-1)*width,e.height+(random()-.5)*.04,e.a.z+dz*t+dx*(random()*2-1)*width,1,f,clarity*.7);
    }
    // Repeated incomplete thresholds give a strong perspective in first person.
    for(let t=.8;t<len;t+=2.1){const f=sampleFields(fields,e.a.x+dx*t,e.a.z+dz*t);
      for(let j=0;j<200;j++){const q=random(),l=j%3===0?(random()*2-1)*width:(j%3===1?-width:width),y=j%3===0?e.height:q*e.height;
        put(e.a.x+dx*t-dz*l,y,e.a.z+dz*t+dx*l,1,f,clamp(.45+f.structure*.15-f.distortion*.07,.2,.98));}
    }
  }
  for(const n of plan.nodes){
    const r=n.radius,h=n.height,f=n.fields;
    for(let i=0;i<2400+f.stability*450;i++){const a=random()*Math.PI*2,d=Math.sqrt(random())*r;put(n.x+Math.cos(a)*d,(random()-.5)*.04,n.z+Math.sin(a)*d,0);}
    const links=plan.edges.filter(e=>e.from===n.id||e.to===n.id);
    const isOpening=(x,z)=>links.some(e=>distance({x,z},closestOnSegment({x,z},e.a,e.b))<e.width+.18);
    // Memory rooms have rectilinear wall traces, window recesses, high ribs and stair residue.
    for(let i=0;i<4200+clamp(f.structure,0,4)*1600;i++){
      const side=i%4,u=(random()*2-1)*r,y=random()*h;
      const x=n.x+(side<2?(side?1:-1)*r:u),z=n.z+(side>=2?(side===2?1:-1)*r:u);
      if(isOpening(x,z)&&y<3.05)continue;
      if(Math.abs(u)<r*.29&&y>1.3&&y<2.8&&side%2===0)continue;
      put(x+(random()-.5)*.025,y,z+(random()-.5)*.025,1,f,n.coherence);
    }
    if(n.isMemory){
      for(let rib=-r;rib<=r;rib+=.7)for(let j=0;j<130;j++){
        const u=(random()*2-1)*r;put(n.x+u,h,n.z+rib,1,f,n.coherence*.8);
      }
      for(let step=0;step<7;step++)for(let j=0;j<65;j++)put(n.x+r*.8-random()*.8,step*.12,n.z-r*.85+step*.2+random()*.12,1,f,n.coherence);
    }
    // Emotion is a breathing ellipsoidal field, not another solid object.
    const atmosphere=Math.floor(500+clamp(f.emotion,0,5)*1500);
    for(let i=0;i<atmosphere;i++){const a=random()*Math.PI*2,v=random()*2-1,d=r*(.65+random()*.7),s=Math.sqrt(1-v*v);
      put(n.x+Math.cos(a)*s*d,h*.6+v*h*.6,n.z+Math.sin(a)*s*d,2,f);
    }
    if(n.isAttractor){
      // A luminous opening oriented toward the arriving path, with converging traces.
      const link=links.at(-1),other=link.from===n.id?link.b:link.a,angle=Math.atan2(other.z-n.z,other.x-n.x),ux=-Math.sin(angle),uz=Math.cos(angle);
      const strength=clamp(f.attraction,0,5),height=3.5+strength*.2,w=1+strength*.12;
      for(let i=0;i<1200+strength*360;i++){
        const edge=i%3,t=random(),depth=(random()-.5)*.35;
        const u=edge===0?(t*2-1)*w:(edge===1?-w:w)+(random()-.5)*.08,y=edge===0?height+(random()-.5)*.07:t*height;
        put(n.x+ux*u+Math.cos(angle)*depth,y,n.z+uz*u+Math.sin(angle)*depth,3,f);
      }
      for(let i=0;i<1300;i++){const u=(random()*2-1)*r,depth=random()*r*1.4;
        put(n.x+ux*u+Math.cos(angle)*depth,random()*height,n.z+uz*u+Math.sin(angle)*depth,3,f,1,[-Math.cos(angle)*.55,0,-Math.sin(angle)*.55]);}
    }
    if(n.fracture>.35){
      for(let i=0;i<Math.min(6500,n.fracture*1700);i++){
        const a=random()*Math.PI*2,d=r*(1.02+random()*.38),y=random()*h;
        if(Math.sin(a*5+y)>-.3)put(n.x+Math.cos(a)*d,y,n.z+Math.sin(a)*d,4,f);
      }
    }
  }
  const total=layers.reduce((sum,l)=>sum+l.length,0),scale=Math.min(1,budget/total),rows=[],counts=[];
  layers.forEach((layer,k)=>{const keep=Math.floor(layer.length*scale);counts[k]=keep;for(let i=0;i<keep;i++)rows.push(layer[Math.floor(i*layer.length/keep)]);});
  const positions=new Float32Array(rows.length*3),colors=new Float32Array(rows.length*3),motion=new Float32Array(rows.length*4),flow=new Float32Array(rows.length*3);
  rows.forEach((p,i)=>{positions.set(p.slice(0,3),i*3);colors.set(p.slice(3,6),i*3);motion.set(p.slice(6,10),i*4);flow.set(p.slice(10,13),i*3);});
  return {positions,colors,motion,flow,count:rows.length,layers:Object.fromEntries(['path','structure','atmosphere','attractor','fracture'].map((n,i)=>[n,counts[i]]))};
}

export const dreamVertexShader=`
attribute vec3 color;
attribute vec4 motion;
attribute vec3 flow;
uniform float uTime;
uniform float uReveal;
uniform float uPixelRatio;
uniform float uMotion;
uniform float uScale;
varying vec3 vColor;
varying float vAlpha;
void main(){
 float phase=motion.z;float kind=motion.w;
 float born=kind*.135+fract(phase*7.37)*.23;
 float appear=smoothstep(born,born+.19,uReveal);
 vec3 p=position;
 float t=uTime;
 p+=vec3(sin(t*.8+phase+p.z*1.8),cos(t*.65+phase+p.x*1.1),sin(t*.73+phase+p.y*1.5))*motion.x*uMotion;
 p.y+=sin(t*.7+phase*.15)*motion.y*.12*uMotion;
 p+=flow*fract(t*.13+phase)*uMotion;
 p.y+=(1.-appear)*(2.+sin(phase)*1.1);
 p.xz*=1.+(1.-appear)*.065;
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 float size=kind>1.5?1.45:1.05;
 gl_PointSize=clamp(size*uScale/max(1.,-mv.z),.7,2.1)*uPixelRatio;
 vColor=color*(.9+sin(t*1.4+phase)*motion.y*uMotion);
 vAlpha=appear*(.84+.16*sin(phase+t*.6*uMotion));
 vAlpha*=1.-smoothstep(45.,105.,-mv.z);
}`;
export const dreamFragmentShader=`
varying vec3 vColor;
varying float vAlpha;
void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;
 float edge=1.-smoothstep(.28,.5,d);
 gl_FragColor=vec4(vColor,vAlpha*edge);
 #include <colorspace_fragment>
}`;
