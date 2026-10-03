export function seed(text) {let n=2166136261;for(const c of text)n=Math.imul(n^c.charCodeAt(0),16777619);return (n>>>0)/4294967295;}
export function touching(a,b) {
  const d=[Math.abs(a.x-b.x),Math.abs(a.y-b.y),Math.abs(a.z-b.z)];
  return (d.filter(v=>Math.abs(v-1)<.001).length===1&&d.filter(v=>v<.001).length===2)||d.every(v=>Math.abs(v-.5)<.001);
}
export function buildGraph(blocks) {
  const nodes=blocks.map(b=>({...b,neighbors:[]}));
  // Coordinate lookup avoids quadratic scans on multi-board installations.
  const at=new Map(nodes.map(b=>[[b.x,b.y,b.z].join(','),b]));
  const offsets=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];
  for(const x of [-.5,.5])for(const y of [-.5,.5])for(const z of [-.5,.5])offsets.push([x,y,z]);
  for(const n of nodes)for(const [x,y,z] of offsets){const other=at.get([n.x+x,n.y+y,n.z+z].join(','));if(other)n.neighbors.push(other.id);}
  const byId=new Map(nodes.map(n=>[n.id,n]));
  const groups=[],visited=new Set();
  for(const n of nodes){if(visited.has(n.id))continue;const group=[],todo=[n.id];visited.add(n.id);while(todo.length){const id=todo.pop(),current=byId.get(id);group.push(current);for(const next of current.neighbors)if(!visited.has(next)){visited.add(next);todo.push(next);}}groups.push(group);}
  return {nodes,byId,groups};
}
export function extents(blocks) {
  if(!blocks.length)return {cx:1.75,cz:.75,width:6,depth:4,height:1};
  const xs=blocks.map(b=>b.x),zs=blocks.map(b=>b.z);
  return {cx:(Math.min(...xs)+Math.max(...xs))/2,cz:(Math.min(...zs)+Math.max(...zs))/2,
    width:Math.max(...xs)-Math.min(...xs)+3,depth:Math.max(...zs)-Math.min(...zs)+3,height:Math.max(...blocks.map(b=>b.y))+1};
}
