import {TOWN_SCALE} from './scale.js';
/** All distances are fractions of the sandbox; elevations are renderer units. */
export const TOWN_CONFIG = Object.freeze({
  version:1, resolution:64, size:12, margin:.12, seaLevel:0,
  baseHeight:.62, maxElevation:2.1, noiseAmplitude:.025,
  near:.20, medium:.38, clusterDistance:.18,
  earth:{strength:1.0,radius:.16,heightGain:.30},
  water:{strength:1.4,radius:.095,heightGain:.32},
  fire:{strength:.13,radius:.07,heightGain:.12},
  minLand:.12, maxSlope:.85, houseRadius:.029, roadWidth:TOWN_SCALE.roadWidth/12,
  maxBuildings:75, maxTrees:65, maxRocks:38, maxZones:12,
});
export function townConfig(overrides={}){
  const c={...TOWN_CONFIG,...overrides};
  for(const t of ['earth','water','fire'])c[t]={...TOWN_CONFIG[t],...overrides[t]};
  if(![64,128].includes(c.resolution)||!Number.isFinite(c.size)||c.size<=0)throw new Error('Invalid town configuration');
  return c;
}
