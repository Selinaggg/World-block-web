const DREAM_TYPES=['shell','veil','drift','graft','glow','flow','support','unknown'];
const TYPES=['water','fire','earth','human','animal','support','unknown'];
const deepFreeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.freeze(value);Object.values(value).forEach(deepFreeze);}return value;};
export function validateWorldState(state){
  if(state?.version!==1||!['web','physical'].includes(state.inputMode)||!Array.isArray(state.blocks))throw new Error('Invalid WorldState envelope.');
  const ids=new Set();
  for(const b of state.blocks){
    if(typeof b.id!=='string'||!b.id||ids.has(b.id))throw new Error('Each module needs a unique ID.');ids.add(b.id);
    if(!(state.mode==='dreamscape'?DREAM_TYPES:TYPES).includes(b.type)||typeof b.sourceObjectName!=='string')throw new Error('Invalid module type or source.');
    if(!Number.isInteger(b.heightLevel)||b.heightLevel<1)throw new Error('Invalid height level.');
    for(const vector of [b.position,b.rotation])if(!vector||!['x','y','z'].every(k=>Number.isFinite(vector[k])))throw new Error('Invalid module coordinates.');
  }
  return true;
}
export function createWorldStore(initial){
  validateWorldState(initial);let state=deepFreeze(structuredClone(initial));const subscribers=new Set();
  return { getWorldState:()=>state, snapshot:()=>structuredClone(state),
    replace(next){validateWorldState(next);state=deepFreeze(structuredClone(next));for(const cb of subscribers)cb(state);},
    subscribe(cb){subscribers.add(cb);return()=>subscribers.delete(cb);},
  };
}
