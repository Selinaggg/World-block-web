import {generateDreamscape} from './DreamscapeGenerator.js';
self.onmessage=({data})=>{
  try {const result=generateDreamscape(data.worldState,data.metadata,data.options);const p=result.particles;self.postMessage({result},[p.positions.buffer,p.colors.buffer,p.motion.buffer,p.flow.buffer]);}
  catch(error){self.postMessage({error:error.message});}
};
