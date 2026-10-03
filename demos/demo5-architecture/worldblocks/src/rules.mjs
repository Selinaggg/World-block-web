import {buildGraph,extents,seed} from './graph.mjs';
export const META={number:'05',title:'ARCHITECTURE',subtitle:'Matter, void, and the spaces between.',kind:'architecture'};
export const TYPES=[
  {id:'C0',name:'Living',color:'#e5e4dc',description:'Dense inhabited volumes, carved by neighboring public space.'},
  {id:'C1',name:'Commons',color:'#7d868c',description:'Shared voids open galleries through adjacent volumes.'},
  {id:'C2',name:'Garden',color:'#83938a',description:'Porous living membranes become glazed conservatories near light.'},
  {id:'C3',name:'Passage',color:'#b0b8bd',description:'Exposed structure and bridges connect the inhabited field.'},
  {id:'C4',name:'Atelier',color:'#d4d9da',description:'Recursive lattice workshops unfold into public galleries.'},
  {id:'C5',name:'Lantern',color:'#c8dfdf',description:'Folded luminous skins introduce light and translucency.'}
];
export const SAMPLES=[
  {name:'Porous monolith',stacks:[['C0','C0','C2'],['C3','C1','C0','C2'],['C0','C4','C5'],['C2'],['C1','C0'],['C3','C1','C0'],['C1','C4'],['C1'],['C0','C2'],['C1','C0','C2'],['C3','C4'],['C2'],['C2'],['C0'],['C4','C5'],[]]},
  {name:'Distributed atelier',stacks:[['C4','C5'],['C1'],['C4','C0'],['C2'],['C4'],['C3','C1'],['C4','C5'],['C0'],['C3'],['C1','C2'],['C3'],['C4'],['C2'],['C0'],['C2'],[]]},
  {name:'Living lattice',stacks:[['C2','C2','C5'],['C5','C2','C5'],['C0'],['C2'],['C0','C2'],['C3','C1'],['C0','C5'],[],['C5','C2'],['C2','C5'],['C3'],[],['C0'],['C1'],[],[]]}
];
export function derive(blocks){
  const graph=buildGraph(blocks),events=new Set();
  const greenhouse=new Set();
  for(const first of graph.nodes.filter(n=>n.code==='C2')){
    const chain=[],seen=new Set([first.id]),queue=[first];let lit=false;
    while(queue.length){const n=queue.pop();chain.push(n);for(const id of n.neighbors){const b=graph.byId.get(id);if(b.code==='C5')lit=true;if(b.code==='C2'&&b.x===n.x&&b.z===n.z&&!seen.has(b.id)){seen.add(b.id);queue.push(b);}}}
    if(lit)for(const n of chain)greenhouse.add(n.id);
  }
  const nodes=graph.nodes.map(n=>{
    const neighbors=n.neighbors.map(id=>graph.byId.get(id)),has=code=>neighbors.some(b=>b.code===code);
    const roof=!neighbors.some(b=>b.x===n.x&&b.z===n.z&&b.y>n.y);
    const garden=has('C2'),light=has('C5')||greenhouse.has(n.id),publicRoom=has('C1'),passage=has('C3'),work=has('C4');
    let form=['home','common-room','terrace','stair','atelier','lantern'][Number(n.code[1])];
    if(n.code==='C0'&&garden){form='garden-home';events.add('Garden living');}
    if(n.code==='C0'&&has('C4'))events.add('Live / work');
    if(n.code==='C1'&&light){form='light-hall';events.add('Daylit commons');}
    if(n.code==='C2'){form=light?'conservatory':roof?'terrace':'winter-garden';if(light)events.add('Conservatory');}
    if(n.code==='C4'&&publicRoom){form='gallery';events.add('Open studios');}
    if(n.code==='C4'&&light)events.add('North-light atelier');
    const connections=neighbors.map(b=>({id:b.id,code:b.code,dx:b.x-n.x,dy:b.y-n.y,dz:b.z-n.z}));
    const same=neighbors.filter(b=>b.code===n.code).length;
    const density=Math.max(.20,Math.min(.85,.57+same*.055-(publicRoom?.18:0)-(light?.08:0)));
    if(n.code==='C0'&&same>=2)events.add('Aggregated mass');
    if(n.code==='C4'&&passage)events.add('Structural weave');
    return {...n,density,same,form,garden,light,publicRoom,passage,work,roof,connections,seed:seed(n.id)};
  });
  for(const group of graph.groups){
    const counts=Object.fromEntries(TYPES.map(t=>[t.id,group.filter(n=>n.code===t.id).length]));
    if(counts.C0>=2&&counts.C3>=2)events.add('Vertical neighborhood');
    if(counts.C0&&counts.C1&&counts.C2)events.add('Neighborhood commons');
    if(counts.C4&&counts.C1&&counts.C3)events.add('Makers’ street');
    if(group.some(n=>n.code==='C2'&&greenhouse.has(n.id)&&n.neighbors.some(id=>{const b=graph.byId.get(id);return b.code==='C2'&&b.x===n.x&&b.z===n.z&&b.y!==n.y;})))events.add('Vertical greenhouse');
  }
  // A courtyard requires a real empty grid cell surrounded on four sides.
  const ground=new Map(nodes.filter(n=>n.y===0).map(n=>[[n.x,n.z].join(','),n]));
  const courtyards=[];
  for(const n of ground.values()){
    const x=n.x+1,z=n.z,key=[x,z].join(',');
    if(!ground.has(key)&&[[x-1,z],[x+1,z],[x,z-1],[x,z+1]].every(p=>ground.has(p.join(','))))courtyards.push({x,z});
  }
  if(courtyards.length)events.add('Sheltered courtyard');
  return {nodes,events:[...events].sort(),courtyards,bounds:extents(blocks),links:nodes.reduce((sum,n)=>sum+n.neighbors.length,0)/2};
}
