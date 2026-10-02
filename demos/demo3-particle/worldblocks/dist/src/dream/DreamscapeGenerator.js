import {validateWorldState} from '../world/worldStore.js';
import {analyzeDream,generateDreamFields} from './DreamFieldGenerator.js';
import {generateDreamStructure} from './DreamStructureGenerator.js';
import {planDreamNavigation} from './DreamNavigationPlanner.js';
import {buildDreamParticles} from './DreamParticleSystem.js';
export function generateDreamscape(worldState,metadata,options={}){
  validateWorldState(worldState);
  if(worldState.mode!=='dreamscape')throw new Error('Choose Dreamscape forces before generating.');
  if(worldState.blocks.some(b=>b.type==='unknown'))throw new Error('Identify every physical module before generating.');
  const analysis=analyzeDream(worldState,metadata);
  if(!analysis.total)throw new Error('Place a dream fragment to begin.');
  const fieldData=generateDreamFields(analysis),structuralPlan=generateDreamStructure(analysis,fieldData),navigationPlan=planDreamNavigation(structuralPlan);
  const particles=buildDreamParticles(structuralPlan,fieldData,analysis.seed,options);
  const explanations=[];
  if(analysis.counts.anchor)explanations.push('Anchor steadies the floor and defines the route.');
  if(analysis.counts.memory)explanations.push(`Memory leaves ${structuralPlan.nodes.filter(n=>n.isMemory).length} remembered chamber traces.`);
  if(analysis.counts.emotion)explanations.push('Emotion breathes magenta into nearby spaces.');
  if(analysis.counts.desire)explanations.push('Desire draws the route toward luminous openings.');
  if(analysis.counts.fear)explanations.push('Fear tears the outer walls and narrows the path.');
  return {mode:'dreamscape',worldStateSnapshot:structuredClone(worldState),seed:analysis.seed,analysis,fieldData,structuralPlan,navigationPlan,particles,particleConfig:{count:particles.count,layers:particles.layers},explanations};
}
