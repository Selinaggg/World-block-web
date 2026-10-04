import {seededRandom} from '../generation/threeD/random.js';
import {DREAM_CONFIG} from './config.js';
import {lerp} from './DreamArchitecture.js';
// Shader attributes are linear; the renderer converts them to display sRGB.
const linearColor=hex=>hex.match(/[0-9a-f]{2}/gi).map(v=>{const c=parseInt(v,16)/255;return c<=.04045?c/12.92:((c+.055)/1.055)**2.4;});
const PALETTE=Object.fromEntries(Object.entries({white:'DBF1FF',blue:'2366F5',deepBlue:'1243C1',cyan:'30DEFF',pink:'ED248F',red:'FF175A',warm:'FFC65A'}).map(([key,value])=>[key,linearColor(value)]));
function horizontal(q){const [a,b,c]=q,u=[b.x-a.x,b.y-a.y,b.z-a.z],v=[c.x-a.x,c.y-a.y,c.z-a.z],n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];return Math.abs(n[1])>Math.hypot(...n)*.75;}
const mix=(a,b,t)=>a.map((v,i)=>v*(1-t)+b[i]*t);
const length=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);
function area(q){const tri=(a,b,c)=>{const u=[b.x-a.x,b.y-a.y,b.z-a.z],v=[c.x-a.x,c.y-a.y,c.z-a.z];return Math.hypot(u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0])*.5;};return tri(q[0],q[1],q[2])+tri(q[0],q[2],q[3]);}
function weighted(items){let total=0;return {items:items.map(i=>({...i,end:total+=i.weight})),total};}
function choose(table,r){let lo=0,hi=table.items.length-1,target=r*table.total;while(lo<hi){const m=(lo+hi)>>1;if(target<table.items[m].end)hi=m;else lo=m+1;}return table.items[lo];}
/** Geometry is resolved first. Sampling only interprets its semantic surfaces. */
export function buildDreamParticles(plan,fields,seed,{budget=DREAM_CONFIG.maxParticles,lod={}}={}){
  const random=seededRandom(seed^0x73891),settings={...DREAM_CONFIG.lod,...lod};
  budget=Math.max(300,Math.min(DREAM_CONFIG.maxParticles,Math.floor(budget)));
  const surfaces=[],edges=[];
  for(const o of plan.objects){
    const floorY=Math.min(...o.surfaces.flat().map(p=>p.y));
    for(const q of o.surfaces){const weight=area(q)*(o.force==='veil'?.6:1);if(weight>.0001)surfaces.push({o,q,weight,horizontal:horizontal(q)});}
    for(const l of o.lines)for(let i=1;i<l.length;i++){const weight=length(l[i-1],l[i]);if(weight>.0001)edges.push({o,a:l[i-1],b:l[i],weight,horizontal:Math.max(l[i-1].y,l[i].y)<floorY+.12});}
  }
  const surfaceTable=weighted(surfaces),edgeTable=weighted(edges);
  const structureCount=Math.floor(budget*.66),edgeCount=Math.floor(budget*.22),atmosphereCount=budget-structureCount-edgeCount;
  const positions=new Float32Array(budget*3),colors=new Float32Array(budget*3),motion=new Float32Array(budget*4),flow=new Float32Array(budget*3),detail=new Float32Array(budget*4);
  const kinds={shell:0,veil:1,drift:2,graft:3,glow:4,flow:5};
  for(let i=0;i<budget;i++){
    const layer=i<structureCount?0:i<structureCount+edgeCount?1:2;
    const entry=choose(layer===1?edgeTable:surfaceTable,random()),o=entry.o;
    let p;if(layer===1)p=lerp(entry.a,entry.b,random());else{const [a,b,c,d]=entry.q,u=random(),v=random();p=lerp(lerp(a,b,u),lerp(d,c,u),v);}
    // A scan has missing flecks and tiny surface variation, not a volumetric fog.
    const jitter=layer===2?.28:.006;
    p.x+=(random()-.5)*jitter;p.y+=(random()-.5)*jitter;p.z+=(random()-.5)*jitter;
    if(layer===2){p.y+=random()*.7;}
    // Red/pink walls against blue walking surfaces make the scan readable at a
    // distance. Force-specific veils, circulation and lights retain their identity.
    let tint=entry.horizontal?PALETTE.blue:PALETTE.red;
    if(o.force==='graft')tint=entry.horizontal?PALETTE.deepBlue:PALETTE.pink;
    else if(o.force==='flow'||o.force==='drift')tint=PALETTE.blue;
    else if(o.force==='glow')tint=random()<.1?PALETTE.warm:PALETTE.cyan;
    else if(o.force==='veil')tint=random()<.75?PALETTE.pink:PALETTE.cyan;
    let col=tint;
    if(layer===1&&random()<.035)col=mix(tint,PALETTE.white,.65);
    if(o.luminous&&o.force!=='glow'&&random()<.12)col=PALETTE.cyan;
    const brightness=layer===1?.92:layer===2?.48:.68+random()*.32;
    col=col.map(v=>v*brightness);
    positions.set([p.x,p.y,p.z],i*3);colors.set(col,i*3);
    motion.set([o.amplitude||.007,o.luminous?.15:.035,o.phase,kinds[o.force]],i*4);
    flow.set([o.vector?.x||0,Math.min(2,o.vector?.strength||0),o.vector?.z||0],i*3);
    // Reserve samples become visible nearby without reallocating any geometry.
    detail.set([layer,layer===0&&random()<settings.reserve?1:0,(layer===2?.84:layer===1?Math.max(.17,o.stage):o.stage),random()],i*4);
  }
  return {positions,colors,motion,flow,detail,count:budget,layers:{structural:structureCount,edges:edgeCount,atmosphere:atmosphereCount},lod:settings};
}
export const dreamVertexShader=`
attribute vec3 color;
attribute vec4 motion;
attribute vec3 flow;
attribute vec4 detail;
uniform float uTime, uReveal, uPixelRatio, uMotion, uScale;
uniform vec4 uLod;
varying vec3 vColor;
varying float vAlpha;
void main(){
 float kind=motion.w; float t=uTime; float phase=motion.z;
 float dist=length((modelViewMatrix*vec4(position,1.)).xyz);
 float nearWeight=1.-smoothstep(uLod.x,uLod.y,dist);
 float stable=mix(1.,uLod.z,nearWeight);
 vec3 p=position;
 // All samples of a drifting fragment share phase and displacement, preserving
 // its recognizable shape. Veil alone has position-dependent cloth movement.
 if(kind>1.5 && kind<2.5){
   vec3 axis=flow.y>.1?vec3(flow.x,0.,flow.z):vec3(cos(phase),0.,sin(phase));
   p+=axis*sin(t*.24+phase)*motion.x*uMotion;
   p.y+=cos(t*.31+phase)*motion.x*.3*uMotion;
 }else if(kind>.5 && kind<1.5){
   p.z+=sin(position.x*1.2+t*.42+phase)*motion.x*uMotion;
   p.x+=sin(position.y*.8+t*.3+phase)*motion.x*.32*uMotion;
 }else if(kind>2.5 && kind<3.5){p.x+=sin(t*.3+position.y)*motion.x*uMotion;}
 else{p+=vec3(sin(t*.65+position.y*3.),cos(t*.6+position.x*2.),sin(t*.7+phase))*motion.x*.4*stable*uMotion;}
 float born=detail.z+detail.w*.07;
 float appear=smoothstep(born,born+.16,uReveal);
 vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;
 float edge=step(.5,detail.x)*(1.-step(1.5,detail.x));
 float atmosphere=step(1.5,detail.x);
 gl_PointSize=clamp((.72+edge*.14)*uScale/max(1.,-mv.z),.68,mix(2.05,1.4,nearWeight))*uPixelRatio;
 vColor=color*(1.+edge*.12+sin(t*.65+phase)*motion.y*uMotion);
 vAlpha=appear*mix(.73,.96,edge);
 vAlpha*=mix(1.,nearWeight,detail.y);
 vAlpha*=mix(1.,mix(.7,uLod.w,nearWeight),atmosphere);
 vAlpha*=1.-smoothstep(80.,160.,dist);
 if(kind>4.5)vAlpha*=.72+.28*sin(t*.8-position.x*.5-position.z*.5)*uMotion;
}`;
export const dreamFragmentShader=`
varying vec3 vColor;
varying float vAlpha;
void main(){float d=length(gl_PointCoord-.5);if(d>.5||vAlpha<.005)discard;
 gl_FragColor=vec4(vColor,vAlpha*(1.-smoothstep(.24,.5,d)));
 #include <colorspace_fragment>
}`;
