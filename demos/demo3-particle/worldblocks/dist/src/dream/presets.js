import {nearestSeat,settleColumn} from '../input/gridPlacement.js';
export const DREAM_PRESETS=[
 {id:'remember',label:'01 · A place remembered',description:'Anchor + Memory',forces:[['anchor',.2,.76,2],['memory',.34,.52,3],['memory',.64,.35,2],['anchor',.8,.2,2]]},
 {id:'feeling',label:'02 · The colour of a memory',description:'Memory + Emotion',forces:[['memory',.2,.75,2],['memory',.55,.45,3],['emotion',.57,.55,4],['emotion',.8,.2,2]]},
 {id:'fracture',label:'03 · A room coming apart',description:'Memory + Fear',forces:[['memory',.2,.75,3],['memory',.5,.5,3],['fear',.52,.48,4],['fear',.8,.25,2]]},
 {id:'light',label:'04 · Follow the light',description:'Anchor + Desire',forces:[['anchor',.2,.8,3],['anchor',.45,.55,2],['desire',.75,.2,4]]},
 {id:'edge',label:'05 · Beyond the fracture',description:'Fear + Desire',forces:[['fear',.2,.75,3],['fear',.48,.5,4],['desire',.8,.2,4]]},
 {id:'dream',label:'06 · Between waking and dreaming',description:'All five forces',forces:[['anchor',.2,.8,2],['memory',.32,.55,3],['emotion',.5,.48,2],['fear',.72,.4,2],['desire',.8,.16,3]]},
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
