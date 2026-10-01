const TYPES=['water','fire','earth','human','animal'];
export const getDistance=(a,b)=>Math.hypot(a.position.x-b.position.x,a.position.y-b.position.y,a.position.z-b.position.z);
export const getHorizontalDistance=(a,b)=>Math.hypot(a.position.x-b.position.x,a.position.z-b.position.z);
export const getBlocksByType=(state,type)=>state.blocks.filter(b=>b.type===type);
export const getNearbyBlocks=(state,block,threshold)=>state.blocks.filter(b=>b.id!==block.id&&getDistance(block,b)<=threshold);
export function getNearestBlock(state,block){return state.blocks.filter(b=>b.id!==block.id).reduce((best,b)=>!best||getDistance(block,b)<getDistance(block,best)?b:best,null);}
export const getTypeCounts=state=>Object.fromEntries([...TYPES,...['support','unknown'].filter(t=>state.blocks.some(b=>b.type===t))].map(t=>[t,getBlocksByType(state,t).length]));
export function getDominantTypes(state){const counts=getTypeCounts(state),max=Math.max(...TYPES.map(t=>counts[t]));return max?TYPES.filter(t=>counts[t]===max):[];}
export function getHeightRange(state){const levels=state.blocks.map(b=>b.heightLevel);return levels.length?{min:Math.min(...levels),max:Math.max(...levels)}:{min:0,max:0};}
export function getHighestBlocks(state){const {max}=getHeightRange(state);return state.blocks.filter(b=>b.heightLevel===max);}
export function normalizePosition(position,bounds){return{x:(position.x-bounds.minX)/(bounds.maxX-bounds.minX),z:(position.z-bounds.minZ)/(bounds.maxZ-bounds.minZ)};}
export function getSpatialRelationships(state,metadata,config={nearDiameters:1.6,mediumDiameters:3,farDiameters:6}){
  const pairs=new Map(),neighbours=new Map(state.blocks.map(b=>[b.id,0]));let neighbourPairs=0;
  const near=metadata.diameter*config.nearDiameters;
  for(let i=0;i<state.blocks.length;i++)for(let j=i+1;j<state.blocks.length;j++){
    const a=state.blocks[i],b=state.blocks[j],distance=getDistance(a,b),horizontal=getHorizontalDistance(a,b);
    if(distance<=near){neighbourPairs++;neighbours.set(a.id,neighbours.get(a.id)+1);neighbours.set(b.id,neighbours.get(b.id)+1);}
    if(a.type===b.type||!TYPES.includes(a.type)||!TYPES.includes(b.type))continue;
    const types=[a.type,b.type].sort(),key=types.join(':');
    if(!pairs.has(key)||distance<pairs.get(key).distance)pairs.set(key,{types,a:a.id,b:b.id,distance,horizontal,vertical:Math.abs(a.position.y-b.position.y),distanceInDiameters:distance/metadata.diameter,relation:distance<=near?'Near':distance<=metadata.diameter*config.mediumDiameters?'Separated':'Far'});
  }
  const positions=state.blocks.map(b=>({id:b.id,...normalizePosition(b.position,metadata.bounds),heightLevel:b.heightLevel}));
  return {counts:getTypeCounts(state),dominantTypes:getDominantTypes(state),heightRange:getHeightRange(state),highestBlocks:getHighestBlocks(state).map(b=>b.id),
    occupiedLevels:[...new Set(state.blocks.map(b=>b.heightLevel))].sort((a,b)=>a-b),total:state.blocks.length,neighbourPairs,
    averageNeighbours:state.blocks.length?neighbourPairs*2/state.blocks.length:0,nearestTypePairs:[...pairs.values()].sort((a,b)=>a.distance-b.distance),normalizedPositions:positions,
    thresholds:{near,medium:metadata.diameter*config.mediumDiameters,far:metadata.diameter*config.farDiameters},diameter:metadata.diameter};
}
export function compareWorlds(previous,current){
  const prev=new Map(previous.blocks.map(b=>[b.id,b])),curr=new Map(current.blocks.map(b=>[b.id,b]));
  return{added:current.blocks.filter(b=>!prev.has(b.id)).length,removed:previous.blocks.filter(b=>!curr.has(b.id)).length,
    moved:current.blocks.filter(b=>prev.has(b.id)&&getDistance(prev.get(b.id),b)>.00001).length,
    retyped:current.blocks.filter(b=>prev.has(b.id)&&prev.get(b.id).type!==b.type).length};
}
