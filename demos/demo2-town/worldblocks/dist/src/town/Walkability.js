import {TOWN_SCALE as S,fenceSegments} from './scale.js';
import {sampleTerrain} from './TerrainGenerator.js';
import {toWorld,fromWorld} from './spatial.js';
import {buildingSite} from './BuildingSite.js';

const mix=(a,b,t)=>a+(b-a)*t;
export function projectSegment(p,a,b){
  const dx=b.x-a.x,dz=b.z-a.z,t=Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/(dx*dx+dz*dz||1)));
  return {t,distance:Math.hypot(p.x-mix(a.x,b.x,t),p.z-mix(a.z,b.z,t))};
}
export function hitsCollider(p,c,r=S.playerRadius){
  if(c.kind==='circle')return Math.hypot(p.x-c.x,p.z-c.z)<c.radius+r;
  if(c.kind==='fence')return projectSegment(p,c.a,c.b).distance<c.radius+r;
  const dx=p.x-c.x,dz=p.z-c.z,co=Math.cos(c.rotation),si=Math.sin(c.rotation);
  const x=dx*co-dz*si,z=dx*si+dz*co;
  return Math.hypot(Math.max(0,Math.abs(x)-c.halfWidth),Math.max(0,Math.abs(z)-c.halfDepth))<r;
}

/** Lightweight world-unit metadata, independent of the render tree. */
export function walkGeometry(result){
  const {settlementPlan:p,terrainConfig:c,terrain,environment:env}=result,blockedZones=[],walkableZones=[];
  for(const b of p.buildingPlots){
    const w=toWorld(b,c),cfg=b.config;
    const body={kind:'building',id:b.id,...w,rotation:b.rotation,halfWidth:(cfg.width+.03)/2,halfDepth:(cfg.depth+.03)/2};
    b.collider={...body};blockedZones.push(body);
    walkableZones.push(...buildingSite(b,terrain,c).steps);
    if(cfg.hasPorch||cfg.hasAwning){
      const d=cfg.depth/2+.09;
      blockedZones.push({...body,id:`${b.id}-porch`,x:w.x+Math.sin(b.rotation)*d,z:w.z+Math.cos(b.rotation)*d,halfWidth:cfg.width*.48,halfDepth:.10});
    }
    if(cfg.hasKiln)blockedZones.push({kind:'circle',id:`${b.id}-kiln`,x:w.x+Math.cos(b.rotation)*cfg.width*.31+Math.sin(b.rotation)*cfg.depth*.25,z:w.z-Math.sin(b.rotation)*cfg.width*.31+Math.cos(b.rotation)*cfg.depth*.25,radius:.125});
  }
  for(const [type,items,radius] of [['tree',env.trees,S.trunkRadius],['rock',env.rocks,S.rockRadius]])for(const [i,item] of items.entries())blockedZones.push({kind:'circle',id:`${type}-${i}`,...toWorld(item,c),radius:radius*(item.scale||1)});
  for(const f of p.fields)for(const segment of fenceSegments(f))blockedZones.push({kind:'fence',id:'pasture fence',a:toWorld(segment.a,c),b:toWorld(segment.b,c),radius:.018});
  for(const road of p.roads)for(let i=1;i<road.points.length;i++){
    const a={...toWorld(road.points[i-1],c),y:road.points[i-1].y},b={...toWorld(road.points[i],c),y:road.points[i].y};
    const width=road.width*c.size,bridge=!!(road.points[i-1].bridge&&road.points[i].bridge);
    walkableZones.push({kind:'path',id:road.id,a,b,width,bridge});
    if(bridge){const len=Math.hypot(b.x-a.x,b.z-a.z);if(len)for(const sign of [-1,1]){
      const x=-(b.z-a.z)/len*width/2*sign,z=(b.x-a.x)/len*width/2*sign;
      blockedZones.push({kind:'fence',id:'bridge rail',a:{x:a.x+x,z:a.z+z},b:{x:b.x+x,z:b.z+z},radius:.0125});
    }}
  }
  for(const n of p.neighbourhoods)walkableZones.push({kind:'plaza',id:n.id,...toWorld(n,c),radius:S.plazaRadius,y:sampleTerrain(terrain,n.x,n.z).height+.0525});
  for(const d of p.docks)walkableZones.push({kind:'dock',id:'pier',a:{...toWorld(d.a,c),y:d.y+.02},b:{...toWorld(d.b,c),y:d.y+.02},width:S.dockWidth});
  return {blockedZones,walkableZones};
}

/** Spatial hash keeps collision and surface queries local, even in dense towns. */
function spatialIndex(items,bounds){
  const cells=new Map(),key=(x,z)=>`${x},${z}`,cell=.5;
  for(const item of items){const b=bounds(item);for(let x=Math.floor(b.x0/cell);x<=Math.floor(b.x1/cell);x++)for(let z=Math.floor(b.z0/cell);z<=Math.floor(b.z1/cell);z++){const k=key(x,z);if(!cells.has(k))cells.set(k,[]);cells.get(k).push(item);}}
  return p=>cells.get(key(Math.floor(p.x/cell),Math.floor(p.z/cell)))||[];
}
export class TownWalker {
  constructor(result,geometry=result.settlementPlan.exploration){
    this.result=result;this.geometry=geometry;this.lastCollision='';
    const bounds=i=>{const r=(i.radius||i.width/2||Math.hypot(i.halfWidth,i.halfDepth))+S.playerRadius;
      return i.a?{x0:Math.min(i.a.x,i.b.x)-r,x1:Math.max(i.a.x,i.b.x)+r,z0:Math.min(i.a.z,i.b.z)-r,z1:Math.max(i.a.z,i.b.z)+r}:{x0:i.x-r,x1:i.x+r,z0:i.z-r,z1:i.z+r};};
    this.obstacles=spatialIndex(geometry.blockedZones,bounds);this.surfaces=spatialIndex(geometry.walkableZones,bounds);
  }
  surface(p){
    const {terrain,terrainConfig:c}=this.result,n=fromWorld(p,c);
    if(n.x<.015||n.x>.985||n.z<.015||n.z>.985)return {valid:false,reason:'boundary'};
    const ground=sampleTerrain(terrain,n.x,n.z);let y=ground.height,slope=ground.slope,kind='terrain';
    for(const s of this.surfaces(p)){
      if(s.kind==='step'){
        if(hitsCollider(p,s,.001)&&s.y>=y){y=s.y;slope=0;kind='step';}
      }else if(s.kind==='plaza'){
        // An inscribed octagon matches the visible plaza rather than its bounding circle.
        const dx=Math.abs(p.x-s.x),dz=Math.abs(p.z-s.z),r=s.radius-S.playerRadius;
        if(dx<=r*.924&&dz<=r*.924&&dx+dz<=r*1.306&&s.y>=y){y=s.y;slope=0;kind='plaza';}
      }else{
        const q=projectSegment(p,s.a,s.b),sy=mix(s.a.y,s.b.y,q.t);
        if(s.kind==='dock'){
          const len=Math.hypot(s.b.x-s.a.x,s.b.z-s.a.z),along=((p.x-s.a.x)*(s.b.x-s.a.x)+(p.z-s.a.z)*(s.b.z-s.a.z))/len;
          if(along<-.008||along>len+.008)continue;
        }
        if(q.distance<=s.width/2-S.playerRadius&&sy>=y-.003){y=sy;slope=Math.abs(s.b.y-s.a.y)/Math.max(.001,Math.hypot(s.b.x-s.a.x,s.b.z-s.a.z));kind=s.kind;}
      }
    }
    if(y<=c.seaLevel+.025)return {valid:false,y,reason:'water'};
    if(slope>S.maxSlope+.001)return {valid:false,y,reason:'slope'};
    return {valid:true,y,kind,slope};
  }
  at(p){
    const s=this.surface(p);if(!s.valid)return s;
    const hit=this.obstacles(p).find(c=>hitsCollider(p,c));
    return hit?{...s,valid:false,reason:hit.id}:s;
  }
  canStep(a,b){
    const s=this.at(b),h=this.surface(a);
    if(!s.valid)return s;
    const maxRise=S.maxStep+Math.hypot(a.x-b.x,a.z-b.z)*S.maxSlope;
    return Math.abs(s.y-h.y)>maxRise?{...s,valid:false,reason:'step'}:s;
  }
  move(position,dx,dz){
    const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/(S.playerRadius*.45))),p={...position};this.lastCollision='';
    for(let i=0;i<steps;i++){
      const q={x:p.x+dx/steps,z:p.z+dz/steps},s=this.canStep(p,q);
      if(s.valid){Object.assign(p,q,{y:s.y});continue;}
      this.lastCollision=s.reason;
      // Slide along boundaries instead of sticking at oblique wall contacts.
      for(const [x,z] of [[dx/steps,0],[0,dz/steps]]){if(!x&&!z)continue;const v={x:p.x+x,z:p.z+z},t=this.canStep(p,v);if(t.valid)Object.assign(p,v,{y:t.y});}
    }
    return p;
  }
  clearPath(a,b){
    const count=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.018));let prev=a;
    if(!this.at(a).valid)return false;
    for(let i=1;i<=count;i++){const p={x:mix(a.x,b.x,i/count),z:mix(a.z,b.z,i/count)};if(!this.canStep(prev,p).valid)return false;prev=p;}return true;
  }
  district(p){
    const nodes=this.result.settlementPlan.nodes;if(!nodes.length)return 'Open land';
    const nearest=nodes.reduce((a,b)=>{const aw=toWorld(a,this.result.terrainConfig),bw=toWorld(b,this.result.terrainConfig);return Math.hypot(p.x-aw.x,p.z-aw.z)<Math.hypot(p.x-bw.x,p.z-bw.z)?a:b;});
    return nearest.id===this.result.settlementPlan.centre?.id?'Town Centre':({residential:'Residential',waterfront:'Waterfront',production:'Workshop',agriculture:'Farm / Pasture'}[nearest.kind]||'Open land');
  }
}

/** Validate physical road corridors, not just graph edges, before offering exploration. */
export function planExploration(result){
  const {settlementPlan:p,terrainConfig:c}=result,geometry=walkGeometry(result),walker=new TownWalker(result,geometry),centre=p.centre;
  const exploration={...geometry,defaultSpawn:null,importantDestinations:[],reachableRoads:[],unreachable:[]};
  if(!centre)return exploration;
  const origin=toWorld(centre,c),candidates=[origin];
  for(let r=.08;r<=.4;r+=.06)for(let k=0;k<16;k++)candidates.push({x:origin.x+Math.cos(k*Math.PI/8)*r,z:origin.z+Math.sin(k*Math.PI/8)*r});
  const spawn=candidates.find(q=>walker.at(q).valid&&[[.05,0],[-.05,0],[0,.05],[0,-.05]].every(([x,z])=>walker.clearPath(q,{x:q.x+x,z:q.z+z})));
  if(!spawn)return exploration;
  const goodRoads=p.roads.filter(r=>r.points.slice(1).every((b,i)=>walker.clearPath(toWorld(r.points[i],c),toWorld(b,c))));
  const reached=new Set([centre.id]);
  for(let i=0;i<p.nodes.length+1;i++)for(const r of goodRoads){if(reached.has(r.from))reached.add(r.to);if(reached.has(r.to))reached.add(r.from);}
  exploration.reachableRoads=goodRoads.filter(r=>reached.has(r.from)&&reached.has(r.to)).map(r=>r.id);
  for(const n of p.nodes){const q=toWorld(n,c),s=walker.at(q);exploration.importantDestinations.push({id:n.id,kind:n.kind,...q,y:s.y,reachable:reached.has(n.id)&&s.valid});}
  exploration.unreachable=exploration.importantDestinations.filter(n=>!n.reachable).map(n=>n.id);
  const street=goodRoads.find(r=>r.from===centre.id||r.to===centre.id),line=street?.points;
  const target=line?toWorld(line[0].x===centre.x&&line[0].z===centre.z?line[Math.min(3,line.length-1)]:line[Math.max(0,line.length-4)],c):{x:spawn.x,z:spawn.z-1};
  exploration.defaultSpawn={...spawn,y:walker.at(spawn).y,yaw:Math.atan2(-(target.x-spawn.x),-(target.z-spawn.z))};
  return exploration;
}
