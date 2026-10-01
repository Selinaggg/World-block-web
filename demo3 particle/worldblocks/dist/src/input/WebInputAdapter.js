import {nearestSeat,nextSeat,sameSeat,settleColumn} from './gridPlacement.js';
const TYPES=['water','fire','earth','human','animal'];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export class WebInputAdapter {
  constructor(store,metadata,moduleTemplate=store.getWorldState().blocks[0],options={}){this.types=options.types||TYPES;this.store=store;this.metadata=metadata;this.moduleTemplate=moduleTemplate;this.initial=store.snapshot();this.locked=false;}
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
    if(this.metadata.baseSeats?.length){
      const seat=nearestSeat({x,z},this.metadata);if(sameSeat(b.position,seat))return false;
      const blocks=this.getWorldState().blocks,target=blocks.filter(item=>item.id!==id&&sameSeat(item.position,seat));
      if(target.length>=this.metadata.maxHeight)return false;
      let next=settleColumn(blocks.filter(item=>item.id!==id),b.position,this.metadata);
      next.push({...b,position:{...b.position,...seat},heightLevel:target.length+1});
      next=settleColumn(next,seat,this.metadata);
      // Preserve list identity/order for selection and saved snapshots.
      const byId=new Map(next.map(item=>[item.id,item]));this.commit(blocks.map(item=>byId.get(item.id)));return true;
    }
    const {bounds,diameter}=this.metadata,margin=diameter/2;
    const next={...b.position,x:clamp(x,bounds.minX+margin,bounds.maxX-margin),z:clamp(z,bounds.minZ+margin,bounds.maxZ-margin)};
    if(next.x===b.position.x&&next.z===b.position.z)return false;
    this.update(id,{position:next});return true;
  }
  moveStep(id,direction){const b=this.getWorldState().blocks.find(b=>b.id===id);if(!b)return false;const seat=nextSeat(b.position,direction,this.metadata);return seat?this.move(id,seat):false;}
  setType(id,type){if(!this.types.includes(type))throw new Error('Unknown element type.');this.update(id,{type});}
  setHeight(id,heightLevel){
    if(!Number.isInteger(heightLevel)||heightLevel<1||heightLevel>this.metadata.maxHeight)throw new Error('Height is outside the available levels.');
    const b=this.getWorldState().blocks.find(b=>b.id===id);if(!b)throw new Error('Module not found.');
    if(this.metadata.baseSeats?.length){
      if(heightLevel===b.heightLevel)return false;
      const seat=nearestSeat(b.position,this.metadata),blocks=[...this.getWorldState().blocks];
      const column=blocks.filter(item=>item.id!==id&&sameSeat(item.position,b.position)).sort((a,b)=>a.heightLevel-b.heightLevel);
      // A raised module needs actual blocks below it, using the selected element.
      while(column.length<heightLevel-1){const support={...b,id:`added_${crypto.randomUUID()}`,position:{...b.position},heightLevel:column.length+1};column.push(support);blocks.push(support);}
      column.splice(heightLevel-1,0,b);this.commit(settleColumn(blocks,seat,this.metadata,column));return true;
    }
    // Move in discrete steps while preserving the original export's sub-level offset.
    this.update(id,{heightLevel,position:{...b.position,y:b.position.y+(heightLevel-b.heightLevel)*(this.metadata.placementStackStep??this.metadata.stackStep)}});
  }
  add(type){
    if(!this.types.includes(type))throw new Error('Unknown element type.');
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
      const overlap=blocks.filter(b=>sameSeat(b.position,{x,z})).length;if(overlap>=this.metadata.maxHeight)continue;
      const score=overlap*100+Math.hypot(x,z);if(score<best){best=score;candidate={x,z};}
    }
    if(!Number.isFinite(best))throw new Error('This grid is full. Remove a module to make room.');
    const column=blocks.filter(b=>sameSeat(b.position,candidate));if(column.length>=this.metadata.maxHeight)throw new Error('This grid is full. Remove a module to make room.');
    const level=column.length+1;
    const block={id:`added_${crypto.randomUUID()}`,sourceObjectName:this.moduleTemplate.sourceObjectName,type,position:{x:candidate.x,y:firstCenterY+(level-1)*(this.metadata.placementStackStep??this.metadata.stackStep),z:candidate.z},rotation:{x:0,y:0,z:0},heightLevel:level};
    this.commit([...blocks,block]);return block.id;
  }
  remove(id){if(!this.getWorldState().blocks.some(b=>b.id===id))throw new Error('Module not found.');const blocks=this.getWorldState().blocks,b=blocks.find(b=>b.id===id),remaining=blocks.filter(b=>b.id!==id);this.commit(this.metadata.baseSeats?.length?settleColumn(remaining,b.position,this.metadata):remaining);}
  reset(){if(this.locked)throw new Error('Finish reading this world before resetting.');this.store.replace(this.initial);}
}
