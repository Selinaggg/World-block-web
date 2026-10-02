import {seededRandom} from './random.js';
import {sampleTerrain,worldCoordinate} from './TerrainGenerator.js';
const clamp=v=>Math.max(.02,Math.min(.98,v));
/** Local habitat/settlement rules, replaceable independently of terrain. */
export function createSemanticContent(points,terrain,config,seed){
  const random=seededRandom(seed^0x61c88647),houses=[],animals=[],paths=[],rule=config.semantic;
  const world=(x,z)=>({x:worldCoordinate(x,config),z:worldCoordinate(z,config)});
  const footprint=(x,z,r)=>[-1,1].flatMap(a=>[-1,1].map(b=>sampleTerrain(terrain,x+a*r/config.size,z+b*r/config.size).height));
  function choose(anchor,existing,spacing,extent,index){
    const candidates=[];
    for(let i=0;i<160;i++){
      const angle=random()*Math.PI*2,r=i===0&&index===0?0:Math.sqrt(random())*rule.radius;
      const x=clamp(anchor.x+Math.cos(angle)*r),z=clamp(anchor.z+Math.sin(angle)*r),p=world(x,z),sample=sampleTerrain(terrain,x,z),corners=footprint(x,z,extent);
      if(existing.some(b=>Math.hypot(b.x-p.x,b.z-p.z)<spacing))continue;
      const dry=Math.min(...corners)>config.seaLevel+config.content.landClearance;
      const variation=Math.max(...corners)-Math.min(...corners);
      candidates.push({...p,u:x,v:z,dry,height:Math.max(...corners,sample.height),floor:Math.min(...corners),distance:Math.hypot(x-anchor.x,z-anchor.z),variation,slope:sample.slope});
    }
    candidates.sort((a,b)=>(a.distance+a.slope*.025)-(b.distance+b.slope*.025));
    return candidates.find(p=>p.dry&&p.slope<rule.maxSlope&&p.variation<extent*.8)||candidates.find(p=>p.height<config.seaLevel+.12)||candidates.find(p=>p.variation<extent*1.8);
  }
  for(const [anchorIndex,anchor] of points.entries()){
    if(anchor.type==='human'){
      const settlement=[];
      for(let i=0;i<rule.housesPerAnchor&&houses.length<rule.maxHouses;i++){
        const p=choose(anchor,houses,rule.houseSpacing,.4,i);if(!p)continue;
        const stilt=!p.dry,y=Math.max(config.seaLevel+.25,p.height+.04);
        const house={...p,y,stilt,anchorIndex,rotation:0,scale:.9+random()*.15,variant:houses.length%3};houses.push(house);settlement.push(house);
      }
      // Follow the terrain in short segments; omit any path crossing water or a cliff.
      for(let i=1;i<settlement.length;i++){
        const a=settlement[i-1],b=settlement[i],segments=[];
        const count=Math.ceil(Math.hypot(a.x-b.x,a.z-b.z)/.12);
        for(let j=0;j<=count;j++){
          const t=j/count,x=a.x+(b.x-a.x)*t,z=a.z+(b.z-a.z)*t,s=sampleTerrain(terrain,x/config.size+.5,z/config.size+.5);
          if(s.height<config.seaLevel+.06||s.slope>rule.maxSlope){segments.length=0;break;}
          segments.push({x,y:s.height+.025,z});
        }
        if(segments.length)paths.push(segments);
      }
    }
  }
  for(const [anchorIndex,anchor] of points.entries()){
    if(anchor.type!=='animal')continue;
    for(let i=0;i<rule.animalsPerAnchor&&animals.length<rule.maxAnimals;i++){
      const p=choose(anchor,[...houses,...animals],rule.animalSpacing,.2,i);if(!p)continue;
      const aquatic=!p.dry;
      animals.push({...p,y:aquatic?Math.max(config.seaLevel+.055,p.height+.035):p.height+.015,kind:aquatic?'duck':i%2?'deer':'sheep',anchorIndex,rotation:random()*Math.PI*2,scale:.95+random()*.2});
    }
  }
  return {life:{anchors:points.filter(p=>p.type==='animal'),objects:animals},civilisation:{anchors:points.filter(p=>p.type==='human'),objects:houses,paths}};
}
