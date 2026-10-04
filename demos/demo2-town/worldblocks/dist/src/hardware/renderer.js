import {MODE} from './settings.js';
export async function createOutput(host,onExplore){
 if(MODE==='dream'){const {DreamScene}=await import('../dream/DreamScene.js');return new DreamScene(host,{onChange:onExplore});}
 const {Generated3DWorld}=await import('../components/Generated3DWorld.js');return new Generated3DWorld(host,()=>{},onExplore);
}
export async function generateLocal(world,metadata){
 if(MODE==='dream')return new Promise((resolve,reject)=>{const worker=new Worker(new URL('../dream/worker.js',import.meta.url),{type:'module'});worker.onmessage=({data})=>{worker.terminate();data.error?reject(Error(data.error)):resolve(data.result);};worker.onerror=e=>{worker.terminate();reject(Error(e.message));};worker.postMessage({worldState:world,metadata,options:{budget:innerWidth<700?160000:320000}});});
 const generator=MODE==='town'?new (await import('../town/HumanTownGenerator.js')).HumanTownGenerator():new (await import('../generation/threeD/IslandGenerator.js')).IslandGenerator();return generator.generate(world,metadata);
}
