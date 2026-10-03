import {buildGraph,extents,seed} from './graph.mjs';
export const META={number:'04',title:'OCEAN',subtitle:'A quiet world, alive with possibility.',kind:'ocean'};
export const TYPES=[
  {id:'C0',name:'Reef',color:'#759eac',description:'Stone, shelter and surfaces for life.'},
  {id:'C1',name:'Meadow',color:'#7cbd9b',description:'Seagrass and kelp respond to nearby currents.'},
  {id:'C2',name:'Shoal',color:'#efc276',description:'Fish adapt to reefs, meadows and moving water.'},
  {id:'C3',name:'Symbiosis',color:'#d89eab',description:'Small lives inhabit the reef and seabed.'},
  {id:'C4',name:'Luminance',color:'#a8daed',description:'Jellies in open water; anemones beside low reefs.'},
  {id:'C5',name:'Current',color:'#82cdd6',description:'A living flow connects motion across the habitat.'}
];
export const SAMPLES=[
  {name:'Luminous sanctuary',stacks:[['C0','C0'],['C0','C1'],['C5'],['C4'],['C1'],['C2'],['C3'],['C0','C4'],['C0','C1'],['C2'],['C5'],['C4'],['C3'],['C1'],['C0'],['C2']]},
  {name:'Kelp & currents',stacks:[['C1','C1'],['C1','C1','C1'],['C5'],['C5'],['C1'],['C2'],['C2'],['C4'],['C1','C1'],['C2'],['C5'],['C4'],['C3'],['C1'],['C2'],[]]},
  {name:'Night reef',stacks:[['C0','C0'],['C4'],['C0','C0','C0'],['C4'],['C3'],['C0'],['C4'],['C3'],['C4'],['C3'],['C0','C4'],['C2'],[],['C0'],['C4'],[]]}
];
export function derive(blocks){
  const graph=buildGraph(blocks),events=new Set();
  const colonies=buildGraph(blocks.filter(b=>b.code==='C0')).groups,reefData=new Map();
  for(const group of colonies){
    const members=group.map(({id,x,y,z})=>({id,x,y,z})).sort((a,b)=>a.id.localeCompare(b.id));
    const links=group.flatMap(n=>n.neighbors.filter(id=>n.id.localeCompare(id)<0).map(id=>[n.id,id]));
    if(members.length>1)events.add('Living reef');
    for(const n of group)reefData.set(n.id,{reefColony:members[0].id,reefSize:members.length,
      reefSurface:n.id===members[0].id?{members,links}:null,
      reefExposed:!group.some(b=>b.x===n.x&&b.z===n.z&&b.y===n.y+1)});
  }
  const nodes=graph.nodes.map(n=>{
    const adjacent=n.neighbors.map(id=>graph.byId.get(id)),has=code=>adjacent.some(b=>b.code===code);
    const same=adjacent.filter(b=>b.code===n.code).length;
    const reef=has('C0'),meadow=has('C1'),current=has('C5');
    let form=['reef','seagrass','open-shoal','seastar','jelly','flow'][Number(n.code[1])];
    if(n.code==='C0'&&meadow){form='coral-reef';events.add('Coral garden');}
    if(n.code==='C1'&&(same||n.index>0))form='kelp';
    if(n.code==='C2')form=reef?'reef-fish':meadow?'grass-fish':current?'ribbon-shoal':'open-shoal';
    if(n.code==='C2'&&reef&&meadow)events.add('Nursery habitat');
    if(n.code==='C3')form=reef?'reef-crab':meadow?'grazing-snail':'seastar';
    if(n.code==='C4'&&reef&&n.y<=.5){form='anemone';events.add('Luminous garden');}
    if(n.code==='C0'&&has('C3')&&has('C4'))events.add('Night reef');
    if(n.code==='C5'&&same)events.add('Current corridor');
    const flow=adjacent.find(b=>b.code==='C5'),flowNeighbor=n.code==='C5'?flow:null;
    const flowNeighbors=n.code==='C5'?adjacent.filter(b=>b.code==='C5').map(b=>({id:b.id,x:b.x,y:b.y,z:b.z})):[];
    const direction=flow?Math.atan2(flow.z-n.z,flow.x-n.x):seed(n.id)*Math.PI*2;
    return {...n,...reefData.get(n.id),form,same,reef,meadow,current,direction,flowNeighbors,flowNeighbor:flowNeighbor?{id:flowNeighbor.id,x:flowNeighbor.x,y:flowNeighbor.y,z:flowNeighbor.z}:null,
      nursery:n.code==='C2'&&reef&&meadow,night:n.code==='C0'&&has('C3')&&has('C4'),seed:seed(n.id)};
  });
  return {nodes,events:[...events].sort(),bounds:extents(blocks),links:nodes.reduce((sum,n)=>sum+n.neighbors.length,0)/2};
}
