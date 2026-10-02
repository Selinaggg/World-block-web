// Provisional presentation rules, not final research semantics.
export const ISLAND_CONFIG = {
  version: 1, resolution: 64, size: 12, margin: .15, seaLevel: 0,
  seabed: -.55, maxElevation: 4.5, noiseAmplitude: .065,
  earth: {strength: 1.8, radius: .17, heightGain: .45, radiusGain: .009},
  water: {strength: 1.7, radius: .14, heightGain: .3, radiusGain: .006},
  fire: {strength: 2.3, radius: .075, heightGain: .65, radiusGain: .003},
  semantic: {radius: .22, maxSlope: 1.25, housesPerAnchor: 3, animalsPerAnchor: 5, maxHouses: 45, maxAnimals: 70, houseSpacing: .95, animalSpacing: .65},
  content: {attempts: 2400, maxTrees: 70, maxRocks: 70, treeSlope: .85, landClearance: .1, spacing: .3},
};
export const GENERATION_MODE = Object.freeze({IMAGE:'2.5d',ISLAND:'3d'});
export function islandConfig(overrides={}){
  const c={...ISLAND_CONFIG,...overrides};
  for(const key of ['earth','water','fire','content','semantic'])c[key]={...ISLAND_CONFIG[key],...overrides[key]};
  if(![64,128].includes(c.resolution))throw new Error('Terrain resolution must be 64 or 128.');
  for(const value of [c.size,c.maxElevation,...['earth','water','fire'].flatMap(t=>[c[t].radius,c[t].strength])])if(!Number.isFinite(value)||value<=0)throw new Error('Invalid terrain configuration.');
  if(!Number.isFinite(c.seaLevel))throw new Error('Invalid sea level.');
  return c;
}
