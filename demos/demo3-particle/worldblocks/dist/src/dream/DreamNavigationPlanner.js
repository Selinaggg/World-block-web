export function closestOnSegment(p,a,b){const dx=b.x-a.x,dz=b.z-a.z,l=dx*dx+dz*dz,t=l?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/l)):0;return {x:a.x+t*dx,z:a.z+t*dz,y:(a.y||0)+((b.y||0)-(a.y||0))*t,t};}
export function planDreamNavigation(plan){
 const entry=plan.nodes.find(n=>n.id===plan.entry),next=plan.nodes.find(n=>n.id===plan.route[1]);
 return {spawn:{x:entry.x,z:entry.z,y:entry.y,yaw:Math.atan2(-(next.x-entry.x),-(next.z-entry.z))},
 zones:plan.zones,segments:plan.walkways.map(e=>({...e,width:Math.max(.24,e.width-.13)})),destination:plan.destination};
}
function surfacesAt(nav,p){
 const floors=[];
 for(const e of nav.segments){const q=closestOnSegment(p,e.a,e.b);if(Math.hypot(p.x-q.x,p.z-q.z)<=e.width)floors.push({id:e.id,y:q.y,segment:true,t:q.t,dx:e.b.x-e.a.x,dz:e.b.z-e.a.z});}
 for(const z of nav.zones)if(Math.abs(z.x-p.x)<=z.halfX&&Math.abs(z.z-p.z)<=z.halfZ)floors.push({id:z.id,y:z.y});
 return floors;
}
export function dreamFloorCandidates(nav,p){return surfacesAt(nav,p).map(s=>s.y);}
export function isDreamWalkable(nav,p){const floors=dreamFloorCandidates(nav,p);return p.y==null?!!floors.length:floors.some(y=>Math.abs(y-p.y)<.22);}
export function moveInDream(nav,p,dx,dz){
 const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.08));let next={...p,y:p.y??dreamFloorCandidates(nav,p)[0]??0};
 const tryMove=q=>{
  const candidates=surfacesAt(nav,q).filter(s=>Math.abs(s.y-next.y)<.2);
  // Stay on a stair's own surface at crossings. A flat room yields to a ramp
  // only where their heights meet, so overpasses cannot teleport the visitor.
  const current=candidates.find(s=>s.id===next.surface&&s.segment);
  const aligned=candidates.filter(s=>s.segment).sort((a,b)=>Math.abs(b.dx*dx+b.dz*dz)/Math.hypot(b.dx,b.dz)-Math.abs(a.dx*dx+a.dz*dz)/Math.hypot(a.dx,a.dz));
  const chosen=current||aligned[0]||candidates[0];
  if(!chosen)return false;next={...q,y:chosen.y,surface:chosen.id};return true;
 };
 for(let i=0;i<steps;i++){
  const x=next.x+dx/steps,z=next.z+dz/steps;
  if(!tryMove({x,z})){tryMove({x,z:next.z});tryMove({x:next.x,z});}
 }
 return next;
}
