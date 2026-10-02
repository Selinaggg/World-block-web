import {seededRandom} from '../generation/threeD/random.js';
import {elementInfluenceAt} from './BuildingGrammar.js';
import {sampleTerrain} from './TerrainGenerator.js';
import {hitsCollider} from './Walkability.js';
import {toWorld} from './spatial.js';

/** Generation-time route validation. No pathfinding or random decisions in the frame loop. */
export function animalPointSafe(result,p,zone,radius){
  const c=result.terrainConfig,s=sampleTerrain(result.terrain,p.x,p.z);
  if(Math.abs(p.x-zone.x)>zone.halfSize||Math.abs(p.z-zone.z)>zone.halfSize)return false;
  if(p.x<.02||p.x>.98||p.z<.02||p.z>.98||s.height<c.seaLevel+.055||s.slope>.75)return false;
  const w=toWorld(p,c);
  return !result.settlementPlan.exploration.blockedZones.some(o=>hitsCollider(w,o,radius));
}
export function animalSegmentSafe(result,a,b,zone,radius){
  const steps=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)*result.terrainConfig.size/.025));
  for(let k=0;k<=steps;k++){const t=k/steps;if(!animalPointSafe(result,{x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t},zone,radius))return false;}
  return true;
}
export function planTownLife(result){
  const random=seededRandom(result.seed^0x51f15e),animals=[],c=result.terrainConfig;
  for(const [fieldIndex,f] of result.settlementPlan.fields.entries()){
    if(!f.livestock)continue;
    const influence=elementInfluenceAt(f,result.points),count=Math.min(5,2+Math.floor(influence.animal*4));
    // Each animal has its own small activity patch. All routes stay well inside fences.
    for(let i=0;i<count&&animals.length<20;i++){
      const species=['sheep','cow','chicken'][(fieldIndex+i)%3],radius=species==='cow'?.18:species==='sheep'?.14:.075;
      const zone={x:f.x,z:f.z,halfSize:f.radius*.78-radius/c.size};
      if(zone.halfSize<=0)continue;
      const anchors=[];
      for(let k=0;k<120&&anchors.length<1;k++){
        const p={x:f.x+(random()*2-1)*zone.halfSize*.8,z:f.z+(random()*2-1)*zone.halfSize*.8};
        if(animalPointSafe(result,p,zone,radius)&&animals.every(a=>Math.hypot(a.x-p.x,a.z-p.z)*c.size>radius+a.radius+.035))anchors.push(p);
      }
      if(!anchors.length)continue;
      const origin=anchors[0],reach=Math.min(.18/c.size,zone.halfSize*.38),points=[origin];
      for(let k=0;k<24&&points.length<4;k++){
        const angle=random()*Math.PI*2,r=reach*(.4+random()*.6),p={x:origin.x+Math.cos(angle)*r,z:origin.z+Math.sin(angle)*r};
        if(animalSegmentSafe(result,points.at(-1),p,zone,radius)&&animalSegmentSafe(result,p,origin,zone,radius))points.push(p);
      }
      const route=points.map(p=>({...p,y:sampleTerrain(result.terrain,p.x,p.z).height}));
      const speed=species==='chicken'?.042:.027,idle=4+random()*4,legs=route.map((p,k)=>({travel:Math.max(1.5,Math.hypot(p.x-route[(k+1)%route.length].x,p.z-route[(k+1)%route.length].z)*c.size/speed),idle}));
      animals.push({...origin,y:route[0].y,rotation:random()*6.28,species,scale:species==='cow'?1:species==='sheep'?.8:.7,radius,zone,route,legs,phase:random()*25,fieldIndex});
    }
  }
  result.environment.animals=animals;
  result.dynamics={version:1,categories:['ambient','living','functional'],animalCount:animals.length,boatCount:result.environment.boats.length};
}

/** Pure repeatable walk → pause / graze → turn cycle, independent of rendering. */
export function sampleAnimal(a,time){
  if(!a.route||a.route.length<2)return {...a,walking:false,graze:.35,heading:a.rotation,stride:0};
  const duration=a.legs.reduce((s,l)=>s+l.travel+l.idle,0);let t=(Math.max(0,time)+a.phase)%duration;
  for(let k=0;k<a.route.length;k++){
    const l=a.legs[k],p=a.route[k],q=a.route[(k+1)%a.route.length],next=a.route[(k+2)%a.route.length];
    if(t>l.travel+l.idle){t-=l.travel+l.idle;continue;}
    const walking=t<l.travel,u=Math.min(1,t/l.travel),v=u*u*(3-2*u),heading=Math.atan2(q.x-p.x,q.z-p.z),nextHeading=Math.atan2(next.x-q.x,next.z-q.z);
    const rest=Math.max(0,t-l.travel)/l.idle,turn=Math.max(0,(rest-.75)/.25),delta=Math.atan2(Math.sin(nextHeading-heading),Math.cos(nextHeading-heading));
    return {x:p.x+(q.x-p.x)*v,z:p.z+(q.z-p.z)*v,walking,heading:heading+delta*turn,graze:walking?0:Math.sin(Math.PI*Math.min(1,rest/.75))*.65,stride:walking?Math.sin(t*7)*Math.sin(Math.PI*u):0};
  }
}
