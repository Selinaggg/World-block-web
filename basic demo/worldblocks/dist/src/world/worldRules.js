// Replace this fact-only layer when the academic World Generation Logic arrives.
const label=t=>t[0].toUpperCase()+t.slice(1);
export function describeSpatialFacts(analysis){
  const facts=[];
  facts.push({title:`${analysis.occupiedLevels.length} occupied height levels`,description:`The arrangement spans level ${analysis.heightRange.min} to ${analysis.heightRange.max}.`});
  if(analysis.dominantTypes.length)facts.push({title:`${analysis.dominantTypes.map(label).join(' & ')} ${analysis.dominantTypes.length>1?'share the lead':'is most numerous'}`,description:`${analysis.counts[analysis.dominantTypes[0]]} modules per leading type. Counts use the current element mapping.`});
  const pair=analysis.nearestTypePairs.find(p=>p.types.includes('water')&&p.types.includes('animal'))||analysis.nearestTypePairs[0];
  if(pair)facts.push({title:`${pair.types.map(label).join(' ↔ ')}: ${pair.relation.toLowerCase()}`,description:`The closest pair is ${pair.distanceInDiameters.toFixed(2)} module diameters apart in 3D.`,pair});
  facts.push({title:`${analysis.averageNeighbours.toFixed(1)} neighbours per module`,description:`On average, within ${(analysis.thresholds.near/analysis.diameter).toFixed(1)} module diameters. Height is included.`});
  return facts;
}
