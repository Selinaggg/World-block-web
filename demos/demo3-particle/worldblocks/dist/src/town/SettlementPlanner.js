import {distance,direction,clamp} from './spatial.js';
import {nearestLand,sampleTerrain,buildable} from './TerrainGenerator.js';
import {generateRoads,roadDistance,route} from './RoadGenerator.js';
import {buildingGrammar,elementInfluenceAt,selectLandmarks} from './BuildingGrammar.js';
export class Occupancy {
  constructor(){this.items=[];}
  free(p,r){return this.items.every(q=>distance(p,q)>r+q.radius);}
  add(p,r,kind){this.items.push({x:p.x,z:p.z,radius:r,kind});}
}
export function planSettlement(points,analysis,terrain,config){
  const plan={elementSources:points.map(p=>({...p})),centre:null,neighbourhoods:[],waterfrontZones:[],productionZones:[],agriculturalZones:[],nodes:[],roads:[],buildingPlots:[],landmarks:[],fields:[],docks:[],explanations:[],unplaced:[]};
  if(!analysis.dominant)return plan;
  for(const c of analysis.humanClusters){
    const p=nearestLand(terrain,c,config,.035);
    if(!p){plan.unplaced.push({type:'human',reason:'No gentle dry land close to this Human cluster.'});continue;}
    plan.neighbourhoods.push({...c,...p,source:{x:c.x,z:c.z},kind:'residential'});
  }
  plan.centre=plan.neighbourhoods[0]||null;if(!plan.centre)return plan;
  plan.nodes.push(...plan.neighbourhoods);
  plan.explanations.push(`${analysis.counts.human} Human block${analysis.counts.human===1?'':'s'} form${analysis.counts.human===1?'s':''} ${plan.neighbourhoods.length} neighbourhood${plan.neighbourhoods.length===1?'':'s'}. The weighted centre anchors the public square.`);
  if(analysis.dominant.maxHeight>1)plan.explanations.push('Stacked Human increases the centre’s importance and the number of low-rise homes.');
  function zone(type,p,index){
    const human=plan.neighbourhoods.reduce((a,b)=>distance(b,p)<distance(a,p)?b:a),d=distance(human,p);
    let anchor={x:p.x,z:p.z};
    if(type==='earth'&&d>config.medium)return;
    if(type==='water'){
      if(d>config.medium)return;
      // Find actual dry shore, preferring the bank that faces the nearest Human cluster.
      let best=null,bestScore=Infinity;
      for(let k=0;k<64;k++)for(let r=.045;r<=.30;r+=.014){
        const a=k/64*Math.PI*2,q={x:p.x+Math.cos(a)*r,z:p.z+Math.sin(a)*r};
        if(!buildable(terrain,q,config,.028))continue;
        const toward={x:q.x+(p.x-q.x)*.20,z:q.z+(p.z-q.z)*.20};
        if(sampleTerrain(terrain,toward.x,toward.z).height>config.seaLevel+.08)continue;
        const score=distance(human,q)+r*.15;if(score<bestScore){best=q;bestScore=score;}
      }
      if(!best)return;anchor=best;
    }else if(type==='fire'&&d<.13){
      const dx=p.x-human.x,dz=p.z-human.z,len=Math.hypot(dx,dz)||1;
      anchor={x:human.x+(dx||.5)/len*.14,z:human.z+dz/len*.14};
    }
    const place=nearestLand(terrain,anchor,config,type==='animal'?.045:.03,.20);if(!place){plan.unplaced.push({type,reason:'No suitable land close to this resource.'});return;}
    const kind=type==='water'?'waterfront':type==='fire'?'production':'agriculture';
    const item={id:`${kind}-${index}`,...place,kind,source:{...p},humanId:human.id,distance:d,importance:Math.min(4,p.heightLevel),rural:d>config.near,earthInfluence:type==='earth'||points.some(e=>e.type==='earth'&&distance(e,p)<config.near)};
    plan.nodes.push(item);plan[kind==='waterfront'?'waterfrontZones':kind==='production'?'productionZones':'agriculturalZones'].push(item);
    plan.explanations.push(type==='water'?`Human near Water creates a waterfront on the ${direction(plan.centre,item)} side.`:type==='fire'?`Fire ${direction(plan.centre,p)} places workshops toward that edge.`:type==='earth'?`Earth ${direction(plan.centre,p)} supports terraced farming near the settlement.`:`Animal ${direction(plan.centre,p)} creates ${item.rural?'an outlying pasture':'a domestic farm'}${item.earthInfluence?' beside Earth-influenced land':''}.`);
  }
  for(const type of ['water','fire','animal'])points.filter(p=>p.type===type).slice(0,config.maxZones).forEach((p,i)=>zone(type,p,i));
  points.filter(p=>p.type==='earth'&&!points.some(a=>a.type==='animal'&&distance(a,p)<config.near)).slice(0,3).forEach((p,i)=>zone('earth',p,`earth-${i}`));
  const earth=points.filter(p=>p.type==='earth').sort((a,b)=>b.heightLevel-a.heightLevel)[0];
  if(earth)plan.explanations.push(`Earth ${direction(plan.centre,earth)} raises the land; its height controls the strength of the hill.`);
  return plan;
}
export function layRoads(plan,terrain,config){plan.roads=generateRoads(plan,terrain,config);return plan;}
export function placeBuildings(plan,terrain,config,random){
  const occupied=new Occupancy();
  for(const n of plan.neighbourhoods)occupied.add(n,.028,'square');
  let index=0;
  function add(family,anchor,goal,limit=.14){
    let count=0;
    for(let attempt=0;attempt<180&&count<goal&&plan.buildingPlots.length<config.maxBuildings;attempt++){
      const angle=attempt*2.399963,rad=.04+Math.sqrt(attempt/180)*limit;
      const p={x:anchor.x+Math.cos(angle)*rad,z:anchor.z+Math.sin(angle)*rad};
      const influence=elementInfluenceAt(p,plan.elementSources),terrainContext=sampleTerrain(terrain,p.x,p.z);
      const b=buildingGrammar(family,index,random,influence,terrainContext,{importance:anchor.weight||anchor.importance});
      const r=(Math.hypot(b.width,b.depth)/2+b.layout.spacing)/config.size;
      if(!buildable(terrain,p,config,r)||!occupied.free(p,r))continue;
      const rd=roadDistance(p,plan.roads);
      if(rd<r+config.roadWidth/2||rd>r+.045)continue;
      // Point the door toward the nearest road sample.
      const near=plan.roads.flatMap(r=>r.points).reduce((a,b)=>distance(p,b)<distance(p,a)?b:a);
      const y=sampleTerrain(terrain,p.x,p.z).height;
      let rotation=Math.atan2(near.x-p.x,near.z-p.z);
      if(b.hasDeck){const waters=plan.elementSources.filter(q=>q.type==='water');if(waters.length){const water=waters.reduce((a,b)=>distance(p,a)<distance(p,b)?a:b);rotation=Math.atan2(water.x-p.x,water.z-p.z);}}
      else if(b.hasTerrace){const dx=sampleTerrain(terrain,p.x+.006,p.z).height-sampleTerrain(terrain,p.x-.006,p.z).height,dz=sampleTerrain(terrain,p.x,p.z+.006).height-sampleTerrain(terrain,p.x,p.z-.006).height;if(Math.hypot(dx,dz)>.003)rotation=Math.atan2(-dx,-dz);}
      const plot={id:`building-${index}`,x:p.x,z:p.z,y,rotation,radius:r,node:anchor.id,influence,config:b};
      plan.buildingPlots.push(plot);occupied.add(p,r,'building');index++;count++;
    }
    if(count<goal)plan.unplaced.push({type:family,reason:`Placed ${count} of ${goal}; remaining plots lacked safe roadside space.`});
  }
  // The civic footprint is set beside the square, not over its converging road junction.
  if(plan.centre&&plan.centre.weight>=1.8){add('civic',plan.centre,1,.10);}
  for(const n of plan.waterfrontZones){add('waterfront',n,Math.min(3,1+n.importance),.10);
    let endpoint=null;for(let t=.05;t<=1;t+=.05){const p={x:n.x+(n.source.x-n.x)*t,z:n.z+(n.source.z-n.z)*t};if(sampleTerrain(terrain,p.x,p.z).height<config.seaLevel-.08){endpoint=p;break;}}
    if(endpoint&&distance(n,endpoint)<.14)plan.docks.push({a:{x:n.x,z:n.z},b:endpoint,y:Math.max(config.seaLevel+.18,sampleTerrain(terrain,n.x,n.z).height+.02)});
  }
  for(const n of plan.productionZones)add('production',n,Math.min(3,n.importance),.10);
  for(const n of plan.agriculturalZones){
    add('rural',n,n.source.type==='animal'&&n.rural?2:1,n.rural?.16:.10);
    const radius=(n.rural?.059:.043)*(1+Math.min(n.importance-1,3)*.10);
    for(let i=0;i<80;i++){
      const a=i*2.399963,r=.055+i*.0015,p={x:n.x+Math.cos(a)*r,z:n.z+Math.sin(a)*r};
      if(!buildable(terrain,p,config,radius)||!occupied.free(p,radius)||roadDistance(p,plan.roads)<radius+.012)continue;
      plan.fields.push({...p,radius,y:sampleTerrain(terrain,p.x,p.z).height,kind:n.earthInfluence?'field':'pasture',livestock:n.source.type==='animal',node:n.id});occupied.add(p,radius,'field');break;
    }
  }
  for(const n of plan.neighbourhoods)add('residential',n,Math.min(16,4+Math.round(n.weight*2)+Math.min(n.maxHeight,4)),.135);
  selectLandmarks(plan,plan.elementSources);
  return occupied;
}
