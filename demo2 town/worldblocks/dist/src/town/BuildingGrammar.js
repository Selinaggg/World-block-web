import {distance} from './spatial.js';
/** Architecture colours only: terrain, lighting and the workspace backdrop are unchanged. */
export const BUILDING_PALETTES={
  village:{wall:'#F5E4BF',roof:'#D97458',accent:'#4A8586',wood:'#976746',stone:'#C5BCA3'},
  waterfront:{wall:'#EBC9A0',roof:'#C66951',accent:'#36969D',wood:'#956947',stone:'#D7D1BA'},
  hillside:{wall:'#E6D6AF',roof:'#BBA16A',accent:'#768C68',wood:'#90704D',stone:'#B3AEA0'},
  craft:{wall:'#C78A63',roof:'#985443',accent:'#E6AB54',wood:'#78533E',stone:'#A9A290'},
  rural:{wall:'#B67C55',roof:'#577A62',accent:'#EDD4A1',wood:'#805C3D',stone:'#C8BCA1'},
};
export const INFLUENCE_COLORS={human:'#D98BBC',water:'#32B7D2',earth:'#DAB554',fire:'#E87548',animal:'#75B964'};
const types=Object.keys(INFLUENCE_COLORS);
/** Smooth, bounded influence, with no district boundary or dependence on input transport/IDs. */
export function elementInfluenceAt(plot,points){
  const sums=Object.fromEntries(types.map(t=>[t,0]));
  for(const p of points){if(!(p.type in sums))continue;const radius=p.type==='human'?.22:p.type==='earth'?.24:.20;
    sums[p.type]+=Math.exp(-.5*(distance(plot,p)/radius)**2)*(.8+Math.min(p.heightLevel,5)*.26);
  }
  return Object.fromEntries(types.map(t=>[t,1-Math.exp(-sums[t])]));
}
export function resolveArchitecture(buildingFunction,influence,terrain={},settlement={}){
  const i={human:0,water:0,earth:0,fire:0,animal:0,...influence},index=settlement.index||0;
  const resources=['water','earth','fire','animal'].sort((a,b)=>i[b]-i[a]);
  let element=resources[0],archetype='town_house';
  if(i[element]<.34)element='human';
  if(buildingFunction==='civic')element='human';
  else if(buildingFunction==='waterfront')element='water';
  else if(buildingFunction==='production')element='fire';
  else if(buildingFunction==='rural')element=i.animal>i.earth?'animal':'earth';
  const b={family:buildingFunction,archetype,influence:{...i},dominantElement:element,width:.43,depth:.38,floors:(i.human>.73||index%3===1)?2:1,roofType:'gable',foundation:'ground',paletteId:'village',roofDirection:index%2,hasPorch:index%3===0,hasBalcony:false,hasAwning:index%3===2,hasChimney:false,hasDeck:false,hasKiln:false,hasWorkshopExtension:false,props:['sign','bench'],layout:{spacing:.12,pattern:'street-facing'}};
  if(element==='water')Object.assign(b,{archetype:buildingFunction==='waterfront'?'dock_house':'waterfront_house',width:.60,depth:.44,floors:index%3===0?2:1,roofType:'wide_gable',foundation:'stilts',paletteId:'waterfront',hasDeck:true,hasAwning:true,hasPorch:true,props:['barrel','rope','lifebuoy'],layout:{spacing:.15,pattern:'shore-facing'}});
  if(element==='earth')Object.assign(b,{archetype:buildingFunction==='rural'?'farm_house':'terraced_house',width:.64,depth:.49,floors:1,roofType:'terrace',foundation:'terrace',paletteId:'hillside',hasPorch:false,hasAwning:false,hasTerrace:true,props:['retaining_wall','planter','steps'],layout:{spacing:.15,pattern:'contour-stepped'}});
  if(element==='fire')Object.assign(b,{archetype:buildingFunction==='production'?(index%2?'bakery':'forge'):'craft_house',width:.74,depth:.47,floors:1,roofType:'shed',foundation:'stone',paletteId:'craft',hasChimney:true,hasKiln:true,hasWorkshopExtension:true,hasPorch:false,hasAwning:true,props:['kiln','crates','woodpile','smoke'],layout:{spacing:.18,pattern:'work-court'}});
  if(element==='animal')Object.assign(b,{archetype:buildingFunction==='rural'?'barn':'farmhouse',width:.76,depth:.40,floors:1,roofType:'long_gable',foundation:'stone',paletteId:'rural',hasPorch:false,hasAwning:false,hasStable:true,props:['hay','trough','fence'],layout:{spacing:.27,pattern:'open-paddock'}});
  // Hybrid silhouettes: a working harbour has both a raised timber deck and a kiln wing.
  if(buildingFunction!=='civic'&&i.water>.38&&i.fire>.38&&['water','fire'].includes(element))Object.assign(b,{archetype:'harbour_workshop',dominantElement:i.water>=i.fire?'water':'fire',width:.78,depth:.49,roofType:'shed',foundation:'stilts',paletteId:'waterfront',hasDeck:true,hasPorch:true,hasAwning:true,hasChimney:true,hasKiln:true,hasWorkshopExtension:true,floors:1,props:['barrel','rope','kiln','crates','smoke'],layout:{spacing:.20,pattern:'shore-court'}});
  // Secondary influences leave readable details without replacing the underlying function.
  if(element!=='earth'&&element!=='water'&&i.earth>.42&&terrain.slope>.12){b.foundation='terrace';b.props.push('retaining_wall');}
  if(element==='human'&&i.animal>.30)b.props.push('planter');
  if(buildingFunction==='civic')Object.assign(b,{archetype:'community_hall',width:.59,depth:.48,floors:2,roofType:'gable',hasPorch:true,hasAwning:true,props:['sign','bench','clock']});
  b.hasBalcony=b.floors>1&&(element==='human'||element==='water');
  b.roofDirection=['long_gable','terrace','shed'].includes(b.roofType)?1:b.roofDirection;
  return b;
}
export function buildingGrammar(family,index,random,influence,terrain,settlement={}){
  const b=resolveArchitecture(family,influence,terrain,{...settlement,index});
  const variation=.96+random()*.08;b.width*=variation;b.depth*=variation;
  // Fixed plot order and local influences select a calm subset, never per-frame randomness.
  const workshop=b.hasChimney;
  if(!workshop&&b.dominantElement==='human'&&family==='residential'&&index%3===0)b.hasChimney=true;
  b.smoke=workshop?(index%2===0?'workshop':null):(b.hasChimney?'home':null);
  return b;
}

/** One primary and at most two quieter landmarks, chosen from actual element relationships. */
export function selectLandmarks(plan,points){
  const kinds={human:'bell_tower',water:'lighthouse',earth:'windmill',fire:'kiln_tower',animal:'silo'};
  const scores=types.map(element=>({element,score:points.filter(p=>p.type===element).reduce((v,p)=>v+Math.min(4,p.heightLevel)*(element==='human'?.38:1),0)})).filter(e=>e.score>0).sort((a,b)=>b.score-a.score||types.indexOf(a.element)-types.indexOf(b.element));
  plan.landmarks=[];
  for(const {element,score} of scores){
    if(plan.landmarks.length>=3)break;
    const options=plan.buildingPlots.filter(p=>!p.config.landmark&&(element==='human'?p.config.family==='civic'||p.config.dominantElement==='human':p.config.dominantElement===element));
    options.sort((a,b)=>(b.influence[element]||0)-(a.influence[element]||0));
    const plot=options[0];if(!plot)continue;
    if(plan.landmarks.length&&score<scores[0].score*.5)continue;
    const landmark={kind:kinds[element],element,rank:plan.landmarks.length?'secondary':'primary',plotId:plot.id};
    plot.config.landmark=landmark;
    if(element==='water')Object.assign(plot.config,{foundation:'stone',hasDeck:false,hasPorch:false,hasAwning:false,hasChimney:false,hasKiln:false,hasWorkshopExtension:false,hasTerrace:false,hasStable:false,smoke:null,props:['lantern','gallery','weather_vane']});
    plan.landmarks.push(landmark);
  }
  if(!plan.landmarks.length&&plan.buildingPlots.length){const plot=plan.buildingPlots[0],landmark={kind:'bell_tower',element:'human',rank:'primary',plotId:plot.id};plot.config.landmark=landmark;plan.landmarks.push(landmark);}
}
