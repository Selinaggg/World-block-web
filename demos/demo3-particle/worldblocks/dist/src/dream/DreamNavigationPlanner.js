import {distance} from './DreamFieldGenerator.js';
export function closestOnSegment(p,a,b){const dx=b.x-a.x,dz=b.z-a.z,l=dx*dx+dz*dz,t=l?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.z-a.z)*dz)/l)):0;return {x:a.x+t*dx,z:a.z+t*dz};}
export function planDreamNavigation(plan){
  const entry=plan.nodes.find(n=>n.id===plan.entry),next=plan.nodes.find(n=>n.id===plan.route[1]);
  return {spawn:{x:entry.x,z:entry.z,y:0,yaw:Math.atan2(-(next.x-entry.x),-(next.z-entry.z))},
    zones:plan.nodes.map(n=>({id:n.id,x:n.x,z:n.z,radius:Math.max(1.4,n.radius-.35)})),
    segments:plan.edges.map(e=>({a:e.a,b:e.b,width:e.width-.25})),destination:plan.destination};
}
export function isDreamWalkable(nav,p){return nav.zones.some(n=>distance(n,p)<=n.radius)||nav.segments.some(e=>distance(p,closestOnSegment(p,e.a,e.b))<=e.width);}
export function moveInDream(nav,p,dx,dz){
  // Substeps prevent tunnelling across voids, even after a delayed frame.
  const steps=Math.max(1,Math.ceil(Math.hypot(dx,dz)/.12));let next={...p};
  for(let i=0;i<steps;i++){
    const full={x:next.x+dx/steps,z:next.z+dz/steps};
    if(isDreamWalkable(nav,full))next=full;
    else {const x={x:full.x,z:next.z};if(isDreamWalkable(nav,x))next=x;const z={x:next.x,z:full.z};if(isDreamWalkable(nav,z))next=z;}
  }
  return next;
}
