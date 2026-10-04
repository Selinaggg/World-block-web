import {nearestSeat,settleColumn} from '../input/gridPlacement.js';
const shell=[['shell',.37,.64,3],['shell',.67,.37,2]];
export const DREAM_PRESETS=[
 {id:'shell',label:'A · The open shell',description:'Shell: layered rooms, open arches and inhabited stairs.',forces:shell},
 {id:'veil',label:'B · A room wearing a veil',description:'Shell + Veil: a suspended skin follows the architecture.',forces:[...shell,['veil',.44,.55,3]]},
 {id:'drift',label:'C · The room comes loose',description:'Shell + Drift: recognizable windows and doors drift together.',forces:[...shell,['drift',.44,.55,3]]},
 {id:'graft',label:'D · The impossible annex',description:'Shell + Graft: rooms tilt, arcades invert, stairs lead nowhere.',forces:[...shell,['graft',.44,.55,3]]},
 {id:'glow',label:'E · Light inside the room',description:'Shell + Glow: embedded luminous rooms become destinations.',forces:[...shell,['glow',.44,.55,3]]},
 {id:'flow',label:'F · A passage through rooms',description:'Shell + Flow: circulation extends toward a new threshold.',forces:[...shell,['flow',.53,.52,2],['flow',.82,.2,3]]},
 {id:'circulation',label:'G · The impossible journey',description:'Shell + Graft + Flow: stairs, a suspended bridge and an impossible room.',forces:[...shell,['graft',.46,.5,3],['flow',.57,.56,3]]},
 {id:'chamber',label:'H · The living chamber',description:'Shell + Veil + Glow: a softly breathing luminous interior.',forces:[...shell,['veil',.44,.55,3],['glow',.56,.47,3]]},
 {id:'dream',label:'I · Architecture of a dream',description:'All six forces form a layered, suspended dream. Enter to explore its rooms.',forces:[...shell,['veil',.43,.57,3],['drift',.62,.57,2],['graft',.45,.43,3],['glow',.61,.38,3],['flow',.56,.57,2]]},
];
export function createDreamPreset(id,metadata,template){
 const preset=DREAM_PRESETS.find(p=>p.id===id);if(!preset)throw new Error('Unknown dream example.');const {bounds}=metadata;let blocks=[];
 preset.forces.forEach(([type,x,z,height],i)=>{
   const seat=nearestSeat({x:bounds.minX+x*(bounds.maxX-bounds.minX),z:bounds.minZ+z*(bounds.maxZ-bounds.minZ)},metadata);
   const existing=blocks.filter(b=>b.position.x===seat.x&&b.position.z===seat.z).length;
   for(let h=1;h<=height;h++)blocks.push({id:`dream_${id}_${i}_${h}`,sourceObjectName:template.sourceObjectName,type,position:{...seat,y:0},rotation:{x:0,y:0,z:0},heightLevel:existing+h});
   blocks=settleColumn(blocks,seat,metadata);
 });return {version:1,mode:'dreamscape',inputMode:'web',blocks};
}
