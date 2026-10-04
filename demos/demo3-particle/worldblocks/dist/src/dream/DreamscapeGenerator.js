import {validateWorldState} from '../world/worldStore.js';
import {analyzeDream,generateDreamFields} from './DreamFieldGenerator.js';
import {generateDreamStructure} from './DreamStructureGenerator.js';
import {planDreamNavigation} from './DreamNavigationPlanner.js';
import {buildDreamParticles} from './DreamParticleSystem.js';
export function generateDreamscape(worldState,metadata,options={}){
 validateWorldState(worldState);
 if(worldState.mode!=='dreamscape')throw new Error('Choose Dreamscape forces before generating.');
 if(worldState.blocks.some(b=>b.type==='unknown'))throw new Error('Identify every module before generating.');
 const analysis=analyzeDream(worldState,metadata);if(!analysis.total)throw new Error('Place a dream fragment to begin.');
 const fieldData=generateDreamFields(analysis),structuralPlan=generateDreamStructure(analysis,fieldData),navigationPlan=planDreamNavigation(structuralPlan);
 const particles=buildDreamParticles(structuralPlan,fieldData,analysis.seed,options);
 const text={shell:'Shell leaves open rooms, archways and inhabitable floors.',veil:'Veil suspends a gently moving skin from nearby rooms.',drift:'Drift loosens doors, windows and platforms into coherent moving fragments.',graft:'Graft attaches impossible stairways, tilted rooms and inverted arcades.',glow:'Glow embeds luminous rooms and openings along the journey.',flow:'Flow extends circulation and directs nearby membranes and fragments.'};
 const combo={'impossible-circulation':'Shell + Graft + Flow extend stairs into a suspended, impossible room.','living-chamber':'Shell + Veil + Glow create a luminous, breathing chamber.','moving-architecture':'Shell + Drift + Flow release a moving colonnade.','dream-curtain':'Veil + Glow + Flow stretch light into a dream curtain.','surreal-core':'Shell + Graft + Glow place an impossible luminous core inside the structure.'};
 const explanations=Object.entries(analysis.counts).filter(([,v])=>v).map(([t])=>text[t]);
 for(const kind of new Set(structuralPlan.relationships.zones.map(z=>z.kind)))explanations.push(combo[kind]);
 return {mode:'dreamscape',version:2,worldStateSnapshot:structuredClone(worldState),seed:analysis.seed,analysis,fieldData,structuralPlan,navigationPlan,particles,particleConfig:{count:particles.count,layers:particles.layers,lod:particles.lod},explanations};
}
