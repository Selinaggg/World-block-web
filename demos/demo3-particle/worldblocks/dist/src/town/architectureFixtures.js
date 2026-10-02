/** Controlled comparisons: identical Human anchors, one changed resource relationship. */
const human=[['human',.44,.48,2],['human',.49,.54,1]];
export const ARCHITECTURE_FIXTURES={
  human:{title:'Human · Civic streets',blocks:[...human,['human',.52,.47,3]]},
  water:{title:'Human + Water · Waterfront',blocks:[...human,['water',.68,.49,3]]},
  earth:{title:'Human + Earth · Hillside',blocks:[...human,['earth',.62,.44,3]]},
  fire:{title:'Human + Fire · Craft quarter',blocks:[...human,['fire',.65,.52,3]]},
  animal:{title:'Human + Animal · Rural edge',blocks:[...human,['animal',.77,.58,3]]},
};
export const ARCHITECTURE_METADATA={bounds:{minX:0,maxX:1,minZ:0,maxZ:1},diameter:.08};
export function architectureState(key){return {version:1,inputMode:'web',blocks:ARCHITECTURE_FIXTURES[key].blocks.map(([type,x,z,heightLevel],i)=>({id:`architecture-${i}`,type,sourceObjectName:'module',position:{x,y:heightLevel,z},rotation:{x:0,y:0,z:0},heightLevel}))};}
