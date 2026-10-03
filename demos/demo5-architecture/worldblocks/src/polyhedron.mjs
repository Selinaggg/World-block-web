// Truncated octahedron: permutations of (0, ±1, ±2), with 6 squares and 8 hexagons.
export const VERTICES=[];
for(const a of [-1,1])for(const b of [-2,2])for(const v of [[0,a,b],[0,b,a],[a,0,b],[b,0,a],[a,b,0],[b,a,0]])
  if(!VERTICES.some(p=>p.every((n,i)=>n===v[i])))VERTICES.push(v);
export const NORMALS=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
for(const x of [-1,1])for(const y of [-1,1])for(const z of [-1,1])NORMALS.push([x/Math.sqrt(3),y/Math.sqrt(3),z/Math.sqrt(3)]);
export const FACES=NORMALS.map(normal=>{
  const distance=Math.max(...VERTICES.map(v=>v.reduce((s,n,i)=>s+n*normal[i],0)));
  return {normal,distance,vertices:VERTICES.filter(v=>Math.abs(v.reduce((s,n,i)=>s+n*normal[i],0)-distance)<1e-6)};
});
