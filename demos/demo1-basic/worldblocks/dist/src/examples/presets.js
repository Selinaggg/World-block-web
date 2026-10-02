export const EXAMPLES = [
  {id:'coast',title:'Coast',types:['earth','water'],description:'Stack land. Carve a shoreline.'},
  {id:'settlement',title:'Settlement',types:['earth','water','human'],description:'Place Human to leave a trace of home.'},
  {id:'habitat',title:'Habitat',types:['earth','water','animal'],description:'Place Animal to bring the landscape to life.'},
];

/** Use the actual OBJ seats and vertical spacing, just like manual placement. */
export function createExample(id,metadata,template){
  const example=EXAMPLES.find(e=>e.id===id);
  if(!example)throw new Error('Unknown example');
  const {bounds,firstCenterY,stackStep,baseSeats}=metadata;
  const seat=(u,v)=>{
    const x=bounds.minX+u*(bounds.maxX-bounds.minX),z=bounds.minZ+v*(bounds.maxZ-bounds.minZ);
    return baseSeats.reduce((best,p)=>Math.hypot(p.x-x,p.z-z)<Math.hypot(best.x-x,best.z-z)?p:best);
  };
  const entries=[
    ['earth',.39,.43,1,'Earth builds land.'],
    ['earth',.39,.43,3,'Stack Earth to raise the terrain.'],
    ['earth',.52,.55,1,'Nearby Earth joins into a landscape.'],
    ['water',.63,.42,1,'Water shapes the shore.'],
  ];
  if(id==='settlement')entries.push(['human',.64,.74,1,'Human adds homes, paths and signs of living.']);
  if(id==='habitat')entries.push(['animal',.58,.74,1,'Animal adds wildlife near its position.']);
  const blocks=[],steps=entries.map(([type,u,v,heightLevel,caption],i)=>{
    const {x,z}=seat(u,v);
    blocks.push({id:`example_${id}_${i}`,type,sourceObjectName:template.sourceObjectName,position:{x,y:firstCenterY+(heightLevel-1)*stackStep,z},rotation:{x:0,y:0,z:0},heightLevel});
    return {caption,world:{version:1,inputMode:'web',blocks:structuredClone(blocks)}};
  });
  return {...example,steps,world:structuredClone(steps.at(-1).world)};
}
