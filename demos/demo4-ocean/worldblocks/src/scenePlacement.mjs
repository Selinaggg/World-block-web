// The scene uses one permanent origin, never the occupied-block bounding box.
export const WORLD_ORIGIN = Object.freeze({x:1.75,z:.75});
export function worldPosition(node,spacing,baseY=0){
  return [(node.x-WORLD_ORIGIN.x)*spacing,baseY+node.y*spacing,(node.z-WORLD_ORIGIN.z)*spacing];
}
export function shouldAutoFrame(framed,previousCount,nextCount){
  return !framed || (previousCount===0 && nextCount>0);
}
