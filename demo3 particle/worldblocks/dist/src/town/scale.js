/** Renderer units: 0.1 unit = one metre. Shared by architecture and walking. */
export const TOWN_SCALE = Object.freeze({
  unitsPerMetre:.1, humanHeight:.17, eyeHeight:.16, doorHeight:.21,
  residentialFloorHeight:.30, roadWidth:.228, pathWidth:.16, bridgeWidth:.228,
  dockWidth:.23, plazaRadius:.32, trunkRadius:.042, rockRadius:.13,
  playerRadius:.028, walkSpeed:.42, fastSpeed:.68, maxSlope:.8,
  gaitStride:.32, gaitLift:.008, gaitSway:.003,
  maxStep:.055, nearPlane:.005, fieldOfView:68,
});

/** The same segments drive visible fences and collision; the north gate stays open. */
export function fenceSegments(f){
  const r=f.radius*.84,corners=[{x:f.x-r,z:f.z-r},{x:f.x+r,z:f.z-r},{x:f.x+r,z:f.z+r},{x:f.x-r,z:f.z+r}],segments=[];
  for(let edge=0;edge<4;edge++)for(let k=0;k<4;k++){
    if(edge===0&&k===1)continue;
    const a=corners[edge],b=corners[(edge+1)%4],at=t=>({x:a.x+(b.x-a.x)*t,z:a.z+(b.z-a.z)*t});
    segments.push({a:at(k/4),b:at((k+1)/4)});
  }
  return segments;
}
