// Face-to-face seats for the imported convex module, not a bounding-box half step.
import {sameSeat} from './gridPlacement.js';
const EPS=.0001;
const horizontal=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
const step=m=>m.placementStackStep??m.stackStep;
export const placementLevel=(y,m)=>Math.max(1,Math.ceil((y-m.firstCenterY-EPS)/step(m))+1);
export function contactRise(dx,dz,m){
  const planes=m.moduleContactPlanes.filter(p=>p.y>EPS);
  return Math.min(...planes.map(p=>(p.span-p.x*dx-p.z*dz)/p.y));
}
export function modulesIntersect(a,b,m,tolerance=.008){
  const dx=a.x-b.x,dy=a.y-b.y,dz=a.z-b.z;
  return m.moduleContactPlanes.every(p=>Math.abs(p.x*dx+p.y*dy+p.z*dz)<p.span-tolerance);
}
function withinBoard(p,m){return p.x>=m.bounds.minX+m.diameter*.45&&p.x<=m.bounds.maxX-m.diameter*.45&&p.z>=m.bounds.minZ+m.diameter*.45&&p.z<=m.bounds.maxZ-m.diameter*.45;}
export function interstitialSeats(blocks,m){
  if(!m.moduleContactPlanes?.length)return [];
  const seats=[],pitch=m.diameter;
  // Each lower-left module looks for three face-adjacent partners on the same
  // floor. Both lattice parities work, including gaps above existing gap seats.
  for(const a of blocks){
    const right=blocks.filter(b=>Math.abs(b.position.y-a.position.y)<.02&&Math.abs(b.position.z-a.position.z)<.02&&Math.abs(b.position.x-a.position.x-pitch)<.035);
    const forward=blocks.filter(b=>Math.abs(b.position.y-a.position.y)<.02&&Math.abs(b.position.x-a.position.x)<.02&&Math.abs(b.position.z-a.position.z-pitch)<.035);
    for(const b of right)for(const c of forward){
      const d=blocks.find(v=>Math.abs(v.position.x-b.position.x)<.02&&Math.abs(v.position.z-c.position.z)<.02&&Math.abs(v.position.y-a.position.y)<.02);if(!d)continue;
      const supports=[a,b,c,d],x=supports.reduce((v,s)=>v+s.position.x,0)/4,z=supports.reduce((v,s)=>v+s.position.z,0)/4;
      const contacts=supports.map(s=>s.position.y+contactRise(x-s.position.x,z-s.position.z,m));
      const y=Math.max(...contacts)+.00002;
      // The exported seat grid has tiny modelling tolerances; reject genuinely
      // uneven supports, while accommodating its sub-centimetre face deviations.
      if(Math.max(...contacts)-Math.min(...contacts)>.025||!withinBoard({x,z},m))continue;
      if(seats.some(s=>sameSeat(s,{x,z})&&Math.abs(s.y-y)<.02))continue;
      seats.push({x,y,z,heightLevel:placementLevel(y,m),kind:'interstitial',supportIds:supports.map(s=>s.id)});
    }
  }
  return seats;
}
export function supportedGap(block,blocks,m,seats=interstitialSeats(blocks,m)){
  const below=blocks.find(b=>b.id!==block.id&&sameSeat(b.position,block.position)&&Math.abs(block.position.y-b.position.y-step(m))<.02);
  if(below)return true;
  return seats.some(s=>sameSeat(s,block.position)&&Math.abs(s.y-block.position.y)<.025);
}
export function availableSeats(blocks,m){
  const candidates=m.baseSeats.map(s=>{
    const column=blocks.filter(b=>sameSeat(b.position,s));
    const y=column.length?Math.max(...column.map(b=>b.position.y))+step(m):m.firstCenterY;
    return {...s,y,heightLevel:placementLevel(y,m),kind:'base'};
  });
  candidates.push(...interstitialSeats(blocks,m));
  // Existing interstitial columns can continue vertically as well.
  for(const b of blocks.filter(b=>b.placement?.kind==='interstitial')){
    if(blocks.some(v=>sameSeat(v.position,b.position)&&v.position.y>b.position.y+EPS))continue;
    const y=b.position.y+step(m);candidates.push({x:b.position.x,z:b.position.z,y,heightLevel:placementLevel(y,m),kind:'interstitial'});
  }
  return candidates.filter(s=>s.heightLevel<=m.maxHeight&&!blocks.some(b=>modulesIntersect(s,b.position,m,.008)));
}
export function nearestPlacement(p,seats){return seats.slice().sort((a,b)=>horizontal(p,a)-horizontal(p,b)||Math.abs((p.y??a.y)-a.y)-Math.abs((p.y??b.y)-b.y))[0];}
export function nextPlacement(p,direction,seats,maxStep=Infinity){
  const [dx,dz]={left:[-1,0],right:[1,0],front:[0,1],back:[0,-1]}[direction]||[0,0];
  return seats.filter(s=>{const x=s.x-p.x,z=s.z-p.z,forward=x*dx+z*dz;return forward>EPS&&horizontal(p,s)<=maxStep&&Math.abs(x*dz-z*dx)<=forward*1.06;}).sort((a,b)=>horizontal(a,p)-horizontal(b,p)||Math.abs(a.y-p.y)-Math.abs(b.y-p.y))[0];
}
