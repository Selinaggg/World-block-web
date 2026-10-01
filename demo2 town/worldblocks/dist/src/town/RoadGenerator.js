import {TOWN_SCALE as S} from './scale.js';
import {sampleTerrain} from './TerrainGenerator.js';
import {distance,clamp} from './spatial.js';
export function segmentDistance(p,a,b){const dx=b.x-a.x,dz=b.z-a.z,t=clamp(((p.x-a.x)*dx+(p.z-a.z)*dz)/(dx*dx+dz*dz||1));return distance(p,{x:a.x+t*dx,z:a.z+t*dz});}
export const roadDistance=(p,roads)=>roads.reduce((best,r)=>Math.min(best,...r.points.slice(1).map((b,i)=>segmentDistance(p,r.points[i],b))),Infinity);
/** Terrain-aware grid A*: expensive water cells encourage shore routes, short crossings become bridges. */
export function route(a,b,terrain,config){
  const n=49,index=p=>Math.round(clamp(p.z)*(n-1))*n+Math.round(clamp(p.x)*(n-1)),pos=i=>({x:i%n/(n-1),z:Math.floor(i/n)/(n-1)});
  const start=index(a),end=index(b),cost=new Float64Array(n*n).fill(Infinity),parent=new Int32Array(n*n).fill(-1),open=new Set([start]),closed=new Set();cost[start]=0;
  let found=false;
  while(open.size){let current=-1,best=Infinity;for(const i of open){const s=cost[i]+distance(pos(i),pos(end));if(s<best){best=s;current=i;}}
    if(current===end){found=true;break;}open.delete(current);closed.add(current);
    const p=pos(current),h=sampleTerrain(terrain,p.x,p.z);
    for(const [dx,dz] of [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]]){
      const cx=current%n+dx,cz=Math.floor(current/n)+dz;if(cx<0||cz<0||cx>=n||cz>=n)continue;
      const next=cz*n+cx;if(closed.has(next))continue;const q=pos(next),s=sampleTerrain(terrain,q.x,q.z);
      const dry=h.height>config.seaLevel+.09&&s.height>config.seaLevel+.09;
      if(dry&&Math.abs(h.height-s.height)/(distance(p,q)*config.size)>S.maxSlope*.9)continue;
      const nextCost=cost[current]+distance(p,q)*(1+(s.height<=config.seaLevel+.04?18:0)+s.slope*3)+Math.abs(h.height-s.height)*.03;
      if(nextCost<cost[next]){cost[next]=nextCost;parent[next]=current;open.add(next);}
    }
  }
  if(!found)return null;
  const path=[];for(let i=end;i!==-1;i=parent[i]){path.push(pos(i));if(i===start)break;}path.reverse();path[0]={x:a.x,z:a.z};path[path.length-1]={x:b.x,z:b.z};
  // Only narrow crossings are bridged; do not span entire lakes with implausible boardwalks.
  let run=0,maxRun=0;for(let i=1;i<path.length;i++){if(sampleTerrain(terrain,path[i].x,path[i].z).height<=config.seaLevel+.04)run+=distance(path[i-1],path[i]);else run=0;maxRun=Math.max(run,maxRun);}
  if(maxRun>.14)return null;
  const points=path.map(p=>({...p,y:sampleTerrain(terrain,p.x,p.z).height+.035}));
  // Carry a bridge deck between its two shore landings, with no step down into water.
  for(let i=0;i<points.length;i++)if(points[i].y<=config.seaLevel+.09){const start=Math.max(0,i-1);while(i<points.length&&points[i].y<=config.seaLevel+.09)i++;const end=Math.min(points.length-1,i),deck=Math.max(config.seaLevel+.20,points[start].y,points[end].y);for(let k=start;k<=end;k++){points[k].y=deck;points[k].bridge=true;}}
  // Grade the approach to each raised deck into a short, walkable ramp.
  for(let pass=0;pass<2;pass++)for(let i=1;i<points.length;i++){
    const a=points[pass?points.length-i:i-1],b=points[pass?points.length-i-1:i];
    b.y=Math.max(b.y,a.y-distance(a,b)*config.size*S.maxSlope*.85);
  }
  if(points.slice(1).some((b,i)=>Math.abs(b.y-points[i].y)>distance(b,points[i])*config.size*S.maxSlope+.001))return null;
  return points;
}
export function generateRoads(plan,terrain,config){
  const nodes=plan.nodes,roads=[];if(!nodes.length)return roads;
  const connected=[nodes[0]],pending=nodes.slice(1);
  while(pending.length){
    // Try other connected neighbours when the closest route crosses a cliff or wide lake.
    const pairs=connected.flatMap(a=>pending.map(b=>({a,b,d:distance(a,b)}))).sort((a,b)=>a.d-b.d);
    let linked=false;
    for(const {a,b} of pairs){const points=route(a,b,terrain,config);if(!points)continue;
      roads.push({id:`road-${roads.length}`,from:a.id,to:b.id,points,width:config.roadWidth});
      connected.push(b);pending.splice(pending.indexOf(b),1);linked=true;break;
    }
    if(!linked){for(const b of pending)plan.unplaced.push({type:'road',reason:`No walkable crossing to ${b.id}.`});break;}
  }
  // Residential lanes are laid out before plots, in four directions around each cluster.
  for(const node of plan.neighbourhoods)for(let k=0;k<4;k++){
    const angle=k*Math.PI/2+.18,target={x:clamp(node.x+Math.cos(angle)*.115,.04,.96),z:clamp(node.z+Math.sin(angle)*.115,.04,.96)};
    if(sampleTerrain(terrain,target.x,target.z).height<=config.seaLevel+.12)continue;
    const points=route(node,target,terrain,config);if(points)roads.push({id:`lane-${node.id}-${k}`,from:node.id,to:`lane-end-${k}`,points,width:S.pathWidth/config.size});
  }
  // Strong Human centres get a connected outer street, not simply taller houses.
  for(const node of plan.neighbourhoods)if(node.weight>=3||node.maxHeight>=3){
    const ends=roads.filter(r=>r.id.startsWith(`lane-${node.id}-`)).map(r=>r.points.at(-1));
    for(let i=0;i<ends.length;i++){const a=ends[i],b=ends[(i+1)%ends.length],points=route(a,b,terrain,config);if(points)roads.push({id:`street-${node.id}-${i}`,from:node.id,to:node.id,points,width:S.pathWidth/config.size});}
  }
  // Plazas are level platforms. Grade streets into their edges instead of leaving a lip.
  for(const road of roads){
    for(const p of road.points)for(const node of plan.neighbourhoods){
      const d=distance(p,node)*config.size,y=sampleTerrain(terrain,node.x,node.z).height+.0525;
      p.y=Math.max(p.y,y-Math.max(0,d-S.plazaRadius)*S.maxSlope*.8);
    }
    for(let pass=0;pass<2;pass++)for(let i=1;i<road.points.length;i++){
      const a=road.points[pass?road.points.length-i:i-1],b=road.points[pass?road.points.length-i-1:i];
      b.y=Math.max(b.y,a.y-distance(a,b)*config.size*S.maxSlope*.85);
    }
  }
  return roads;
}
