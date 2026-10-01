export const DREAM_ELEMENTS = {
  anchor:{label:'Anchor',color:'#D8ECFF',meaning:'Ground the dream.'},
  memory:{label:'Memory',color:'#438CFF',meaning:'Remember a space.'},
  emotion:{label:'Emotion',color:'#EC5ACE',meaning:'Give it a feeling.'},
  desire:{label:'Desire',color:'#55F1EE',meaning:'Draw yourself closer.'},
  fear:{label:'Fear',color:'#FF365E',meaning:'Disturb the edges.'},
};
export const DREAM_TYPES=Object.keys(DREAM_ELEMENTS);
export const FIELD_NAMES={anchor:'stability',memory:'structure',emotion:'emotion',desire:'attraction',fear:'distortion'};
export const DREAM_CONFIG={width:32,depth:26,maxNodes:12,maxParticles:125000,eyeHeight:1.65,walkSpeed:3.1,fastSpeed:5.1};
// Explicit semantic boundary for future physical input. C5 support is retained;
// unidentified hardware is rejected at generation, never silently interpreted.
export const PHYSICAL_DREAM_MAP={earth:'anchor',human:'memory',animal:'emotion',water:'desire',fire:'fear',support:'support',unknown:'unknown'};
export function toDreamWorldState(state,map=PHYSICAL_DREAM_MAP){return {...structuredClone(state),mode:'dreamscape',blocks:state.blocks.map(b=>({...structuredClone(b),type:DREAM_TYPES.includes(b.type)?b.type:map[b.type]||'unknown'}))};}
