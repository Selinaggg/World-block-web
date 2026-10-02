const TYPES=['water','fire','earth','human','animal'];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export class WebInputAdapter {
  constructor(store,metadata,moduleTemplate=store.getWorldState().blocks[0]){this.store=store;this.metadata=metadata;this.moduleTemplate=moduleTemplate;this.initial=store.snapshot();this.locked=false;}
  getWorldState(){return this.store.getWorldState();}
  subscribe(cb){return this.store.subscribe(cb);}
  setLocked(value){this.locked=!!value;}
  commit(blocks){if(this.locked)throw new Error('Finish reading this world before editing.');this.store.replace({...this.getWorldState(),blocks});}
  update(id,patch){
    if(!this.getWorldState().blocks.some(b=>b.id===id))throw new Error('Module not found.');
    this.commit(this.getWorldState().blocks.map(b=>b.id===id?{...b,...patch}:b));
  }
  move(id,{x,z}){
    if(!Number.isFinite(x)||!Number.isFinite(z))throw new Error('Position must contain finite X and Z values.');
    const b=this.getWorldState().blocks.find(b=>b.id===id);if(!b)throw new Error('Module not found.');
    const {bounds,diameter}=this.metadata,margin=diameter/2;
    const next={...b.position,x:clamp(x,bounds.minX+margin,bounds.maxX-margin),z:clamp(z,bounds.minZ+margin,bounds.maxZ-margin)};
    if(next.x===b.position.x&&next.z===b.position.z)return false;
    this.update(id,{position:next});return true;
  }
  setType(id,type){if(!TYPES.includes(type))throw new Error('Unknown element type.');this.update(id,{type});}
  setHeight(id,heightLevel){
    if(!Number.isInteger(heightLevel)||heightLevel<1||heightLevel>this.metadata.maxHeight)throw new Error('Height is outside the available levels.');
    const b=this.getWorldState().blocks.find(b=>b.id===id);if(!b)throw new Error('Module not found.');
    // Move in discrete steps while preserving the original export's sub-level offset.
    this.update(id,{heightLevel,position:{...b.position,y:b.position.y+(heightLevel-b.heightLevel)*this.metadata.stackStep}});
  }
  add(type){
    if(!TYPES.includes(type))throw new Error('Unknown element type.');
    const {diameter,bounds,firstCenterY,baseSeats=[]}=this.metadata,blocks=this.getWorldState().blocks;
    if(!this.moduleTemplate)throw new Error('No source module geometry is available.');
    let candidate={x:0,z:0},best=Infinity;
    // Use genuine ground-level seating locations from the source OBJ first.
    const candidates=baseSeats.length?baseSeats:[];
    if(!candidates.length){
      for(let x=bounds.minX+diameter/2;x<=bounds.maxX-diameter/2;x+=diameter*.5)
        for(let z=bounds.minZ+diameter/2;z<=bounds.maxZ-diameter/2;z+=diameter*.5)candidates.push({x,z});
    }
    for(const {x,z} of candidates){
      const overlap=blocks.filter(b=>Math.abs(b.position.y-firstCenterY)<diameter*.7&&Math.hypot(b.position.x-x,b.position.z-z)<diameter*.8).length;
      const score=overlap*100+Math.hypot(x,z);if(score<best){best=score;candidate={x,z};}
    }
    const block={id:`added_${crypto.randomUUID()}`,sourceObjectName:this.moduleTemplate.sourceObjectName,type,position:{x:candidate.x,y:firstCenterY,z:candidate.z},rotation:{x:0,y:0,z:0},heightLevel:1};
    this.commit([...blocks,block]);return block.id;
  }
  remove(id){if(!this.getWorldState().blocks.some(b=>b.id===id))throw new Error('Module not found.');this.commit(this.getWorldState().blocks.filter(b=>b.id!==id));}
  reset(){if(this.locked)throw new Error('Finish reading this world before resetting.');this.store.replace(this.initial);}
}
