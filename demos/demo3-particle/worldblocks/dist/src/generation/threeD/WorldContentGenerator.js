import {createSemanticContent} from './SemanticContent.js';
import {seededRandom} from './random.js';
import {fieldsAt,sampleTerrain,worldCoordinate} from './TerrainGenerator.js';
export function createContent(points,terrain,config,seed){
  const random=seededRandom(seed),trees=[],rocks=[],rule=config.content;
  const semantic=createSemanticContent(points,terrain,config,seed);
  const occupied=[...semantic.civilisation.objects,...semantic.life.objects];
  for(let i=0;i<rule.attempts;i++){
    const x=random(),z=random(),sample=sampleTerrain(terrain,x,z);
    if(sample.height<config.seaLevel+rule.landClearance)continue;
    const f=fieldsAt(points,x,z,config),worldX=worldCoordinate(x,config),worldZ=worldCoordinate(z,config);
    if(occupied.some(p=>Math.hypot(p.x-worldX,p.z-worldZ)<(p.kind ? .38 : .78)))continue;
    if(semantic.civilisation.paths.some(path=>path.some(p=>Math.hypot(p.x-worldX,p.z-worldZ)<.22)))continue;
    const treeChance=Math.min(.85,(f.earth*.24+f.animal*.5+Math.min(f.water,.5)*.2)/(1+f.fire*4+f.human));
    const tree=trees.length<rule.maxTrees&&sample.slope<rule.treeSlope&&random()<treeChance;
    const rock=!tree&&rocks.length<rule.maxRocks&&random()<Math.min(.75,f.fire*.3+f.earth*.06+sample.slope*.15);
    if(!tree&&!rock)continue;
    if([...trees,...rocks].some(p=>Math.hypot(p.x-worldX,p.z-worldZ)<rule.spacing))continue;
    (tree?trees:rocks).push({x:worldX,y:sample.height,z:worldZ,scale:.7+random()*.7,rotation:random()*Math.PI*2,variant:Math.floor(random()*3)});
  }
  return {environment:{trees,rocks},...semantic};
}
