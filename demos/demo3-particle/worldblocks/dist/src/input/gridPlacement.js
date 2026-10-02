const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
export const sameSeat=(a,b)=>distance(a,b)<.0001;
export function nearestSeat(p,metadata){return metadata.baseSeats.reduce((best,s)=>distance(p,s)<distance(p,best)?s:best);}
export function nextSeat(p,direction,metadata){
  const [dx,dz]={left:[-1,0],right:[1,0],front:[0,1],back:[0,-1]}[direction]||[0,0];
  // Prefer the next cell in the same row; staggered rows can use the nearest diagonal.
  return metadata.baseSeats.filter(s=>{const x=s.x-p.x,z=s.z-p.z;return x*dx+z*dz>.0001&&Math.abs(x*dz-z*dx)<(x*dx+z*dz)*1.01;}).sort((a,b)=>distance(a,p)-distance(b,p)||Math.abs((a.x-p.x)*dz-(a.z-p.z)*dx)-Math.abs((b.x-p.x)*dz-(b.z-p.z)*dx))[0];
}
export function settleColumn(blocks,seat,metadata,ordered){
  const column=ordered||blocks.filter(b=>sameSeat(b.position,seat)).sort((a,b)=>a.heightLevel-b.heightLevel);
  const levels=new Map(column.map((b,i)=>[b.id,i+1]));
  return blocks.map(b=>levels.has(b.id)?{...b,heightLevel:levels.get(b.id),position:{x:seat.x,z:seat.z,y:metadata.firstCenterY+(levels.get(b.id)-1)*(metadata.placementStackStep??metadata.stackStep)}}:b);
}
