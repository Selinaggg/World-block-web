import {describeSpatialFacts} from '../world/worldRules.js';
export class MockWorldGenerator {
  async generate(worldState,analysis){
    if(!worldState.blocks.length)throw new Error('Add an element before generating a world.');
    return{mode:'mock',title:`A world in ${analysis.occupiedLevels.length} layers`,description:`${analysis.total} elements form this arrangement, from level ${analysis.heightRange.min} to ${analysis.heightRange.max}. Change their positions, types or heights to see a different spatial reading.`,imageUrl:null,reasoningSummary:describeSpatialFacts(analysis)};
  }
}
