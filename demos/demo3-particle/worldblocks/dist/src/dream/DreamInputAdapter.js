import {WebInputAdapter} from '../input/WebInputAdapter.js';
import {sameSeat} from '../input/gridPlacement.js';
import {availableSeats,nearestPlacement,nextPlacement,supportedGap,placementLevel,interstitialSeats} from '../input/interstitialPlacement.js';
const heightStep=m=>m.placementStackStep??m.stackStep;
export class DreamInputAdapter extends WebInputAdapter{
  commit(blocks){
    // Transactional support checks: never silently leave a suspended fragment or
    // relocate the user's composition after its supporting block is removed.
    const gaps=blocks.some(b=>b.placement)?interstitialSeats(blocks,this.metadata):[];
    for(const b of blocks)if(b.placement?.kind==='interstitial'&&!supportedGap(b,blocks,this.metadata,gaps))throw new Error('This module supports an interlocking fragment. Move or remove the upper fragment first.');
    super.commit(blocks);
  }
  minimumHeight(id){
    const b=this.getWorldState().blocks.find(b=>b.id===id);if(!b?.placement)return 1;
    return placementLevel(b.placement.baseY,this.metadata);
  }
  settle(blocks,seat){
    const column=blocks.filter(b=>sameSeat(b.position,seat)).sort((a,b)=>a.position.y-b.position.y);
    if(!column.length)return blocks;
    const baseY=column[0].placement?.baseY??this.metadata.firstCenterY;
    const map=new Map(column.map((b,i)=>{const y=baseY+i*heightStep(this.metadata);return [b.id,{...b,position:{...b.position,y},heightLevel:placementLevel(y,this.metadata)}];}));
    return blocks.map(b=>map.get(b.id)||b);
  }
  seatsWithout(id){const blocks=this.getWorldState().blocks,b=blocks.find(b=>b.id===id);return availableSeats(this.settle(blocks.filter(v=>v.id!==id),b.position),this.metadata);}
  move(id,{x,z}){
    if(!Number.isFinite(x)||!Number.isFinite(z))throw new Error('Position must contain finite X and Z values.');
    const b=this.getWorldState().blocks.find(b=>b.id===id);if(!b)throw new Error('Module not found.');
    const seat=nearestPlacement({x,z,y:b.position.y},this.seatsWithout(id));
    if(!seat||sameSeat(seat,b.position))return false;
    return this.place(id,seat);
  }
  moveStep(id,direction){
    const b=this.getWorldState().blocks.find(b=>b.id===id);if(!b)return false;
    const seat=nextPlacement(b.position,direction,this.seatsWithout(id),this.metadata.diameter*1.08);return seat?this.place(id,seat):false;
  }
  place(id,seat){
    const blocks=this.getWorldState().blocks,b=blocks.find(b=>b.id===id);
    const remaining=this.settle(blocks.filter(v=>v.id!==id),b.position);
    const column=remaining.filter(v=>sameSeat(v.position,seat));
    const moved={...b,position:{x:seat.x,y:seat.y,z:seat.z},heightLevel:seat.heightLevel};
    delete moved.placement;
    if(seat.kind==='interstitial')moved.placement={kind:'interstitial',baseY:column[0]?.placement?.baseY??seat.y};
    const byId=new Map([...remaining,moved].map(v=>[v.id,v]));this.commit(blocks.map(v=>byId.get(v.id)));return true;
  }
  setHeight(id,level){
    const b=this.getWorldState().blocks.find(b=>b.id===id);if(!b)throw new Error('Module not found.');
    if(!b.placement)return super.setHeight(id,level);
    const min=this.minimumHeight(id);
    if(!Number.isInteger(level)||level<min||level>this.metadata.maxHeight)throw new Error(`This interlocking seat starts at level ${min}. Move to a base seat to lower it further.`);
    if(level===b.heightLevel)return false;
    const blocks=[...this.getWorldState().blocks],column=blocks.filter(v=>v.id!==id&&sameSeat(v.position,b.position)).sort((a,b)=>a.position.y-b.position.y);
    const index=level-min;
    while(column.length<index){const support={...b,id:`added_${crypto.randomUUID()}`};column.push(support);blocks.push(support);}
    column.splice(index,0,b);
    if(min+column.length-1>this.metadata.maxHeight)return false;
    const byId=new Map(column.map((v,i)=>{const y=b.placement.baseY+i*heightStep(this.metadata);return [v.id,{...v,heightLevel:placementLevel(y,this.metadata),position:{...v.position,y}}];}));
    this.commit(blocks.map(v=>byId.get(v.id)||v));return true;
  }
  remove(id){const blocks=this.getWorldState().blocks,b=blocks.find(b=>b.id===id);if(!b)throw new Error('Module not found.');this.commit(this.settle(blocks.filter(v=>v.id!==id),b.position));}
}
