import {elementInfluenceAt} from './BuildingGrammar.js';
import {sampleTerrain,buildable} from './TerrainGenerator.js';
import {roadDistance} from './RoadGenerator.js';
import {distance} from './spatial.js';
export function generateEnvironment(points,plan,terrain,config,occupied,random){
  const environment={trees:[],rocks:[],animals:[],boats:[]};
  for(let i=0;i<1800;i++){
    const p={x:random(),z:random()},s=sampleTerrain(terrain,p.x,p.z),radius=.013;
    if(!buildable(terrain,p,config,radius)||!occupied.free(p,radius)||roadDistance(p,plan.roads)<.025)continue;
    const nearCentre=plan.neighbourhoods.some(n=>distance(p,n)<.14);
    const rock=s.slope>.45||random()<.22;
    if(rock&&environment.rocks.length<config.maxRocks){environment.rocks.push({...p,y:s.height,scale:.65+random()*.6,rotation:random()*6.28});occupied.add(p,radius,'rock');}
    else if(!nearCentre&&environment.trees.length<config.maxTrees){environment.trees.push({...p,y:s.height,scale:.65+random()*.65,rotation:random()*6.28,variant:Math.floor(random()*3)});occupied.add(p,.024,'tree');}
  }
  for(const dock of plan.docks){
    if(environment.boats.length>=2)break;
    const influence=elementInfluenceAt(dock.a,points);
    if(influence.water<.30||influence.human<.15)continue;
    const dx=dock.b.x-dock.a.x,dz=dock.b.z-dock.a.z,len=Math.hypot(dx,dz)||1;
    let placed=false;
    for(const advance of [0,.018,.035,.055,.075]){for(const sign of [-1,1]){const p={x:dock.b.x+dx/len*advance-dz/len*.022*sign,z:dock.b.z+dz/len*advance+dx/len*.022*sign};
      if([[0,0],[.018,0],[-.018,0],[0,.018],[0,-.018]].every(([x,z])=>sampleTerrain(terrain,p.x+x,p.z+z).height<config.seaLevel-.02)){environment.boats.push({...p,rotation:Math.atan2(dx,dz)+.25*sign});placed=true;break;}
    }if(placed)break;}

  }
  return environment;
}
