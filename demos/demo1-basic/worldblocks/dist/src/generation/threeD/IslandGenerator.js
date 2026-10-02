import {validateWorldState} from '../../world/worldStore.js';
import {getSpatialRelationships} from '../../world/spatialAnalysis.js';
import {islandConfig,GENERATION_MODE} from './config.js';
import {hash} from './random.js';
import {createTerrain} from './TerrainGenerator.js';
import {createContent} from './WorldContentGenerator.js';
const yieldFrame=()=>new Promise(resolve=>typeof requestAnimationFrame==='function'?requestAnimationFrame(()=>setTimeout(resolve,0)):setTimeout(resolve,0));
export class IslandGenerator {
  constructor({onProgress=()=>{},config={}}={}){this.onProgress=onProgress;this.config=islandConfig(config);}
  async generate(worldState,metadata){
    const snapshot=structuredClone(worldState);validateWorldState(snapshot);
    if(!snapshot.blocks.length||snapshot.blocks.some(b=>b.type==='unknown'))throw new Error('Add known elements before generating a 3D world.');
    if(snapshot.inputMode==='physical'&&(!snapshot.input?.connected||snapshot.input.status!=='live'||snapshot.input.issues?.length))throw new Error('Reconnect reliable physical input before generating.');
    this.onProgress('Reading your arrangement');await yieldFrame();
    const analysis=getSpatialRelationships(snapshot,metadata),byId=new Map(analysis.normalizedPositions.map(p=>[p.id,p]));
    const points=snapshot.blocks.filter(b=>b.type!=='support').map(b=>({type:b.type,x:byId.get(b.id).x,z:byId.get(b.id).z,heightLevel:b.heightLevel}));
    if(!points.length)throw new Error('Supports alone do not define a world.');
    if(points.some(p=>![p.x,p.z].every(v=>Number.isFinite(v)&&v>=0&&v<=1)))throw new Error('Modules must be within the base bounds.');
    points.sort((a,b)=>a.type.localeCompare(b.type)||a.x-b.x||a.z-b.z||a.heightLevel-b.heightLevel);
    const seed=hash(JSON.stringify(points));
    this.onProgress('Forming terrain');await yieldFrame();
    const terrain=createTerrain(points,this.config);
    this.onProgress('Growing the world');await yieldFrame();
    const layers=createContent(points,terrain,this.config,seed);
    return {mode:GENERATION_MODE.ISLAND,worldStateSnapshot:snapshot,analysis,seed,terrainConfig:structuredClone(this.config),points,terrain,layers,
      note:Math.max(...terrain.heights)<=this.config.seaLevel?'Open water. Add Earth or Fire to form land.':'Move, add or stack a block to reshape the world.'};
  }
}
