export const DREAM_ELEMENTS = {
  shell:{code:'C0',label:'Shell',color:'#D8ECFF',meaning:'Floors, rooms and open archways.'},
  veil:{code:'C1',label:'Veil',color:'#AECFEA',meaning:'Suspend a living skin from the architecture.'},
  drift:{code:'C2',label:'Drift',color:'#438CFF',meaning:'Let architectural fragments move together.'},
  graft:{code:'C3',label:'Graft',color:'#EC5ACE',meaning:'Attach an impossible room or passage.'},
  glow:{code:'C4',label:'Glow',color:'#55F1EE',meaning:'Light a chamber deep inside the dream.'},
  flow:{code:'C5',label:'Flow',color:'#397DFF',meaning:'Connect spaces and direct movement.'},
};
export const DREAM_TYPES=Object.keys(DREAM_ELEMENTS);
export const FIELD_NAMES=Object.fromEntries(DREAM_TYPES.map(t=>[t,t]));
export const DREAM_CONFIG={width:27,depth:23,maxNodes:12,maxParticles:320000,mobileParticles:160000,eyeHeight:1.65,walkSpeed:3.8,fastSpeed:6.2,
  lod:{near:9,far:21,reserve:.16,nearJitter:.18,nearAtmosphere:.24}};
// These are demo semantics only; no firmware or shared hardware mapping is changed.
export const PHYSICAL_DREAM_MAP={C0:'shell',C1:'veil',C2:'drift',C3:'graft',C4:'glow',C5:'flow'};
export function toDreamWorldState(state,map=PHYSICAL_DREAM_MAP){return {...structuredClone(state),mode:'dreamscape',blocks:state.blocks.map(b=>({...structuredClone(b),type:DREAM_TYPES.includes(b.type)?b.type:map[b.type]||'unknown'}))};}
const LEGACY={anchor:'shell',memory:'shell',emotion:'veil',desire:'glow',fear:'graft'};
export function migrateDreamDraft(state){if(state?.mode!=='dreamscape')return null;return {...structuredClone(state),blocks:state.blocks.map(b=>({...b,type:LEGACY[b.type]||b.type}))};}
