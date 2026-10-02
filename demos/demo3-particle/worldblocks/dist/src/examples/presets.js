export const EXAMPLES = [
  {id:'coast',title:'Waterside craft village',types:['human','water','earth','fire','animal'],description:'People at the centre. Water east, pasture west, workshops south.'},
  {id:'settlement',title:'Two neighbourhoods',types:['human','earth','water'],description:'Separated Human clusters become connected neighbourhoods.'},
  {id:'habitat',title:'Rural edge',types:['human','animal','earth','fire'],description:'Move Animal away from home to grow an outlying farm.'},
];
export const TOWN_ARRANGEMENTS={
  coast:[['human',.47,.49,2],['human',.55,.51,1],['water',.77,.48,2],['animal',.24,.51,1],['fire',.49,.76,2],['earth',.48,.22,2]],
  settlement:[['human',.25,.30,1],['human',.30,.35,2],['human',.72,.69,1],['human',.77,.64,1],['earth',.50,.50,1],['water',.88,.27,1]],
  habitat:[['human',.43,.44,2],['human',.51,.45,1],['animal',.80,.72,2],['earth',.79,.76,1],['fire',.20,.28,1]],
};
/** Snap these normalized arrangements to actual OBJ seats, as manual placement does. */
export function createExample(id,metadata,template){
  const example=EXAMPLES.find(e=>e.id===id);if(!example)throw new Error('Unknown example');
  const {bounds,firstCenterY,baseSeats}=metadata,stackStep=metadata.placementStackStep??metadata.stackStep;
  const seat=(u,v)=>{const x=bounds.minX+u*(bounds.maxX-bounds.minX),z=bounds.minZ+v*(bounds.maxZ-bounds.minZ);return baseSeats.reduce((best,p)=>Math.hypot(p.x-x,p.z-z)<Math.hypot(best.x-x,best.z-z)?p:best);};
  const captions={human:'Human anchors a settlement. Stack it to increase its importance.',water:'Water carves the land and gives nearby homes a waterfront.',earth:'Earth raises land. Keep its position in mind as the town grows.',fire:'Fire guides workshops toward this part of town.',animal:'Animal creates a farm or pasture close to this position.'};
  const blocks=[],steps=[];TOWN_ARRANGEMENTS[id].forEach(([type,u,v,height],i)=>{
    const {x,z}=seat(u,v),existing=blocks.filter(b=>Math.hypot(b.position.x-x,b.position.z-z)<.0001).length;
    for(let level=1;level<=height;level++){const heightLevel=existing+level;blocks.push({id:`example_${id}_${i}_${level}`,type,sourceObjectName:template.sourceObjectName,position:{x,y:firstCenterY+(heightLevel-1)*stackStep,z},rotation:{x:0,y:0,z:0},heightLevel});
      // Reveal one block per tick, always placing its support first.
      steps.push({caption:captions[type],world:{version:1,inputMode:'web',blocks:structuredClone(blocks)}});
    }
  });
  return {...example,steps,world:structuredClone(steps.at(-1).world)};
}
