import * as T from 'three';
import {mesh,box,rod,material,rng,batch,dispose} from './drawing.js';
import {generateCells} from './generativeCells.mjs';
import {WORLD_ORIGIN} from './scenePlacement.mjs';

const SPACING=1.6,BASE=.69;
function cubeLines(out,x,y,z,size,diagonal=false){
  const h=size/2,pts=[];for(const a of [-1,1])for(const b of [-1,1])for(const c of [-1,1])pts.push([x+a*h,y+b*h,z+c*h]);
  for(let i=0;i<8;i++)for(let j=i+1;j<8;j++)if([0,1,2].filter(k=>pts[i][k]!==pts[j][k]).length===1)out.push(...pts[i],...pts[j]);
  if(diagonal){out.push(...pts[0],...pts[7],...pts[1],...pts[6]);}
}
function lineMesh(group,points,color,opacity=1){
  if(!points.length)return;
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(points,3));
  const lines=new T.LineSegments(g,new T.LineBasicMaterial({color,transparent:opacity<1,opacity}));group.add(lines);return lines;
}
function foldedSkin(group,mat,random,axis){
  const positions=[],segments=10;
  for(let i=0;i<segments;i++){
    const a=-.60+i*.12,b=a+.12,depth=.025+(i%2)*.085;
    let quad=[[a,-.59,.6+depth],[b,-.59,.6+.11-depth],[b,.59,.6+.11-depth],[a,.59,.6+depth]];
    if(axis===1)quad=quad.map(([x,y,z])=>[z,y,x]);
    if(axis===2)quad=quad.map(([x,y,z])=>[x,z-.03,y]);
    if(random()<.18)continue;
    for(const k of [0,1,2,0,2,3])positions.push(...quad[k]);
  }
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.computeVertexNormals();mesh(group,g,mat);
}
function membrane(group,mat,n){
  const size=.63,segments=18;
  for(let sheet=0;sheet<3;sheet++){
    const points=[],indices=[];
    for(let y=0;y<=segments;y++)for(let x=0;x<=segments;x++){
      const u=(x/segments-.5)*2,v=(y/segments-.5)*2;
      points.push(u*size,v*size,Math.sin(u*Math.PI)*Math.cos(v*Math.PI)*.19+(sheet-1)*.34);
    }
    for(let y=0;y<segments;y++)for(let x=0;x<segments;x++){
      // Perforated bands leave genuinely open cells through the membrane.
      if((x+2*y+sheet)%5===0||((x-9)**2+(y-9)**2<7))continue;
      const a=y*(segments+1)+x;indices.push(a,a+1,a+segments+2,a,a+segments+2,a+segments+1);
    }
    const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(points,3));g.setIndex(indices);g.computeVertexNormals();
    const skin=mesh(group,g,mat);skin.rotation.y=(n.seed-.5)*.5;
  }
}
function building(n,model){
  const group=new T.Group(),random=rng(n.id+':generative'),cells=generateCells(n);
  const concrete=material(n.code==='C1'?'#41484b':'#d4d4cb',{roughness:.72,metalness:.08});
  const dark=material('#222a2e',{roughness:.64,metalness:.24});
  const silver=material('#aab6b9',{roughness:.34,metalness:.65});
  const light=material('#d9eeee',{emissive:'#a4c4c6',emissiveIntensity:.42,roughness:.32});
  const glass=new T.MeshPhysicalMaterial({color:'#acc7cb',metalness:.18,roughness:.28,transparent:true,opacity:.22,side:T.DoubleSide,depthWrite:false});
  const fine=[],framework=[];
  for(const cell of cells){
    const {x,y,z,size}=cell;
    if(cell.solid){
      box(group,cell.value>.25?concrete:dark,x,y,z,size,size,size);
      // Recessed horizontal cuts give the inhabited mass an architectural scale.
      if(n.code==='C0'&&z>.1)box(group,n.light?light:dark,x,y+.02,z+size*.502,size*.75,.026,.007);
    }else if(cell.frame){cubeLines(fine,x,y,z,size,cell.diagonal&&(n.code==='C4'||n.code==='C3'));}
    if(cell.light)box(group,light,x,y-size*.4,z,size*.72,.009,.011);
  }
  cubeLines(framework,0,0,0,1.25,false);
  if(n.code==='C4'){
    // Two nested scales form an open space-frame, rather than an opaque cube.
    for(const cell of cells.filter(c=>c.value>.72)){
      for(const dx of [-1,1])for(const dy of [-1,1])for(const dz of [-1,1])cubeLines(fine,cell.x+dx*cell.size/4,cell.y+dy*cell.size/4,cell.z+dz*cell.size/4,cell.size/2,true);
    }
    for(const y of [-.59,0,.59])box(group,dark,0,y,0,1.26,.028,1.26);
    if(n.publicRoom)box(group,light,0,.02,.63,.65,.05,.008);
  }
  if(n.code==='C1'){
    for(const y of [-.60,.60])box(group,concrete,0,y,0,1.28,.065,1.28);
    for(const x of [-.54,.54])rod(group,silver,[x,-.6,-.54],[x,.6,.54],.018);
  }
  if(n.code==='C2'){
    membrane(group,n.light?glass:material('#7e9389',{roughness:.65,metalness:.2,side:T.DoubleSide}),n);
    for(let i=0;i<12;i++){
      const x=(random()-.5)*1.05,z=(random()-.5)*1.05,h=.12+random()*.23;
      const leaf=mesh(group,new T.ConeGeometry(.035,h,4),material('#657e70'),x,-.5+h/2,z);leaf.rotation.z=(random()-.5)*.45;
    }
    box(group,dark,0,-.61,0,1.26,.04,1.26);
  }
  if(n.code==='C3'){
    for(let i=0;i<13;i++)box(group,silver,-.49+i*.077,-.57+i*.09,0,.13,.025,.44);
    rod(group,silver,[-.59,-.59,-.26],[.59,.59,-.26],.012);
    rod(group,silver,[-.59,-.59,.26],[.59,.59,.26],.012);
  }
  if(n.code==='C5'){
    foldedSkin(group,glass,random,0);foldedSkin(group,glass,random,1);foldedSkin(group,glass,random,2);
    for(let i=0;i<4;i++)box(group,light,-.43+i*.28,0,0,.014,1.18,.014);
  }
  if(n.code==='C0'&&n.garden){
    for(let i=0;i<3;i++)box(group,material('#6c8177'),-.36+i*.34,.64,.4,.26,.06,.23);
  }
  // Explicit adjacency creates a connector spanning the gap, including offset levels.
  for(const c of n.connections){
    if(n.id.localeCompare(c.id)>0)continue;
    const end=[c.dx*SPACING,c.dy*SPACING,c.dz*SPACING];
    for(const sign of [-1,1])rod(group,silver,[0,-.25,sign*.19],[end[0],end[1]-.25,end[2]+sign*.19],.011);
    if(n.code==='C3'||c.code==='C3'){
      const a=new T.Vector3(0,-.33,0),b=new T.Vector3(...end).add(new T.Vector3(0,-.33,0)),delta=b.clone().sub(a);
      const deck=box(group,dark,...a.clone().add(b).multiplyScalar(.5).toArray(),.38,.035,delta.length());deck.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),delta.normalize());
    }
  }
  if(n.index===0){
    const height=n.y*SPACING;
    for(const x of [-.46,.46])for(const z of [-.46,.46])rod(group,dark,[x,-.61,z],[x,-.68-height,z],.018);
  }
  // Batch opaque solids; line work remains crisp at every scale.
  batch(group);lineMesh(group,fine,n.code==='C4'?'#d0d8d8':'#77898e',n.code==='C4'?.78:.48);lineMesh(group,framework,'#b4c3c7',.7);
  for(const m of [concrete,dark,silver,light,glass])if(!group.children.some(o=>o.material===m))m.dispose();
  return group;
}
export function createWorld(scene,root,renderer){
  scene.background=new T.Color('#101619');scene.fog=new T.Fog('#101619',22,65);
  scene.add(new T.HemisphereLight('#d8e3e7','#111b24',1.65));
  const sun=new T.DirectionalLight('#f3f2e8',3.3);sun.position.set(-5,10,7);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:.1,far:60});sun.shadow.normalBias=.025;sun.shadow.radius=5;scene.add(sun);
  const rim=new T.DirectionalLight('#92b7c4',2.4);rim.position.set(6,7,-8);scene.add(rim);
  const floor=mesh(scene,new T.PlaneGeometry(180,180),material('#161e22',{roughness:.77,metalness:.2}),0,-.025,0);floor.rotation.x=-Math.PI/2;floor.castShadow=false;
  const site=new T.Group();scene.add(site);let signature='';
  function update(model){
    const b=model.bounds,key=[b.cx,b.cz,b.width,b.depth,...model.courtyards.flatMap(p=>[p.x,p.z])].join(',');if(key===signature)return;signature=key;dispose(site);
    const cx=(b.cx-WORLD_ORIGIN.x)*SPACING,cz=(b.cz-WORLD_ORIGIN.z)*SPACING;
    const width=b.width*SPACING,depth=b.depth*SPACING;
    const mat=material('#252f33',{roughness:.65,metalness:.3});box(site,mat,cx,-.04,cz,width,.06,depth);
    const lines=[];
    for(let i=0;i<=Math.ceil(width);i++){const x=cx-width/2+i;lines.push(x,0,cz-depth/2,x,0,cz+depth/2);}
    for(let i=0;i<=Math.ceil(depth);i++){const z=cz-depth/2+i;lines.push(cx-width/2,0,z,cx+width/2,0,z);}
    lineMesh(site,lines,'#708087',.12);
    for(const p of model.courtyards)box(site,material('#60736b'),(p.x-WORLD_ORIGIN.x)*SPACING,.025,(p.z-WORLD_ORIGIN.z)*SPACING,.8,.025,.8);
  }
  return {spacing:SPACING,baseY:BASE,build:building,update,dispose:()=>sun.shadow.map?.dispose()};
}
