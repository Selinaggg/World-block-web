import {planTownLife} from './TownLifePlan.js';
import {planExploration} from './Walkability.js';
import {validateWorldState} from '../world/worldStore.js';
import {getSpatialRelationships} from '../world/spatialAnalysis.js';
import {hash,seededRandom} from '../generation/threeD/random.js';
import {townConfig} from './config.js';
import {normalizedBlocks,analyzeTown} from './spatial.js';
import {generateTerrain} from './TerrainGenerator.js';
import {planSettlement,layRoads,placeBuildings} from './SettlementPlanner.js';
import {generateEnvironment} from './EnvironmentGenerator.js';
const nextFrame=()=>new Promise(resolve=>typeof requestAnimationFrame==='function'?requestAnimationFrame(()=>setTimeout(resolve,0)):setTimeout(resolve,0));
export class HumanTownGenerator {
  constructor({onProgress=()=>{},config={}}={}){this.onProgress=onProgress;this.config=townConfig(config);}
  async stage(message){this.onProgress(message);await nextFrame();}
  async generate(worldState,metadata){
    const snapshot=structuredClone(worldState);validateWorldState(snapshot);
    if(snapshot.blocks.some(b=>b.type==='unknown'))throw new Error('Resolve unknown elements before generating.');
    if(snapshot.inputMode==='physical'&&(!snapshot.input?.connected||snapshot.input.status!=='live'||snapshot.input.issues?.length))throw new Error('Reconnect reliable physical input before generating.');
    await this.stage('Reading your settlement');
    const points=normalizedBlocks(snapshot,metadata);
    if(points.some(p=>![p.x,p.z].every(v=>Number.isFinite(v)&&v>=0&&v<=1)))throw new Error('Keep blocks within the sandbox.');
    const seed=hash(JSON.stringify(points)),random=seededRandom(seed),analysis=getSpatialRelationships(snapshot,metadata),spatial=analyzeTown(points,this.config);
    await this.stage('Shaping the land');const terrain=generateTerrain(points,this.config);
    const plan=planSettlement(points,spatial,terrain,this.config);
    await this.stage('Connecting the town');layRoads(plan,terrain,this.config);
    await this.stage('Growing buildings');const occupied=placeBuildings(plan,terrain,this.config,random);
    await this.stage('Bringing the town to life');const environment=generateEnvironment(points,plan,terrain,this.config,occupied,random);
    const title=!spatial.counts.human?'A town needs people.':!plan.neighbourhoods.length?'A place to settle.':plan.waterfrontZones.length?(plan.productionZones.length?'Waterside craft village':'Waterside neighbourhood'):plan.neighbourhoods.length>1?'Connected neighbourhoods':plan.agriculturalZones.length?'Pasture village':'A small settlement';
    const summary=!spatial.counts.human?'Add a Human block to begin a settlement.':!plan.neighbourhoods.length?'Move Human toward gentler land or add Earth near it.':`${plan.neighbourhoods.length===1?'A settlement':`${plan.neighbourhoods.length} neighbourhoods`} of ${plan.buildingPlots.length} buildings, linked by paths${plan.waterfrontZones.length?' along the water':''}${plan.agriculturalZones.length?' and rural edges':''}.`;
    const result={mode:'3d',kind:'human-town',createdAt:new Date().toISOString(),worldStateSnapshot:snapshot,analysis,spatial,seed,terrainConfig:structuredClone(this.config),points,terrain,settlementPlan:plan,environment,title,summary,note:'Move, add or stack a block to see how the settlement changes.'};
    await this.stage('Checking walkable streets');
    plan.exploration=planExploration(result);
    planTownLife(result);
    return result;
  }
}
