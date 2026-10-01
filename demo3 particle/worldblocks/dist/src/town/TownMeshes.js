import {animateWater,motionRegistry} from './TownDynamics.js';
import * as THREE from '../../vendor/three.module.js';
import {TOWN_SCALE as S,fenceSegments} from './scale.js';
import {buildArchitecture,buildBoat} from './ArchitectureMeshes.js';
import {toWorld} from './spatial.js';
import {sampleTerrain} from './TerrainGenerator.js';
const COLORS={grass:'#9EC76A',sand:'#EADFB8',stone:'#DCD8C4',water:'#48BECD',deep:'#38ACBE',wood:'#AA8057',path:'#EAD5B1',trunk:'#93704C',leaf:'#66A167',leaf2:'#87B964'};
export function buildTown(result){
  const root=new THREE.Group(),{terrain,terrainConfig:c,settlementPlan:plan,environment:env}=result;
  const materials=new Map();
  function mat(color){if(!materials.has(color))materials.set(color,new THREE.MeshStandardMaterial({color,roughness:.92,flatShading:true}));return materials.get(color);}
  function mesh(parent,geo,color,x=0,y=0,z=0,label=''){const m=new THREE.Mesh(geo,mat(color));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;m.userData.label=label;parent.add(m);return m;}
  const box=(g,w,h,d,color,x=0,y=0,z=0,label='')=>mesh(g,new THREE.BoxGeometry(w,h,d),color,x,y,z,label);
  function beam(parent,a,b,width,color,label=''){const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),m=box(parent,width,av.distanceTo(bv),width,color,...av.clone().add(bv).multiplyScalar(.5).toArray(),label);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),bv.sub(av).normalize());return m;}
  const {resolution:n,heights,margin,size,seaLevel}=terrain,span=(1+margin*2)*size,vertices=[],colors=[];
  const palette=Object.fromEntries(Object.entries(COLORS).map(([k,v])=>[k,new THREE.Color(v)]));
  for(let row=0;row<n-1;row++)for(let col=0;col<n-1;col++)for(const ids of [[row*n+col,(row+1)*n+col,row*n+col+1],[row*n+col+1,(row+1)*n+col,(row+1)*n+col+1]]){
    const y=ids.reduce((s,i)=>s+heights[i],0)/3,delta=Math.max(...ids.map(i=>heights[i]))-Math.min(...ids.map(i=>heights[i]));
    const color=(y<seaLevel+.20?palette.sand:delta>.11||y>1.25?palette.stone:palette.grass).clone().multiplyScalar(.97+((col*17+row*13)%7)*.009);
    for(const i of ids){vertices.push((i%n/(n-1)-.5)*span,heights[i],(Math.floor(i/n)/(n-1)-.5)*span);colors.push(color.r,color.g,color.b);}
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geo.computeVertexNormals();
  const ground=new THREE.Mesh(geo,new THREE.MeshStandardMaterial({vertexColors:true,flatShading:true,roughness:1}));ground.receiveShadow=true;ground.userData.label='Land · Earth raises the surface; Water carves it';root.add(ground);
  // A compact shallow basin, rather than a limitless plane.
  const water=mesh(root,new THREE.PlaneGeometry(span,span,32,32),COLORS.water,0,seaLevel,0,'Water · a shared, level surface');water.rotation.x=-Math.PI/2;water.castShadow=false;animateWater(water,root);
  box(root,span,.27,span,'#D2DDD1',0,-.81,0);
  const sideVerts=[];
  for(let k=0;k<n-1;k++)for(const [a,b] of [[k,k+1],[(n-1)*n+k,(n-1)*n+k+1],[k*n,(k+1)*n],[k*n+n-1,(k+1)*n+n-1]]){
    const p=i=>[(i%n/(n-1)-.5)*span,heights[i],(Math.floor(i/n)/(n-1)-.5)*span],pa=p(a),pb=p(b),aa=[pa[0],-.68,pa[2]],bb=[pb[0],-.68,pb[2]];
    sideVerts.push(...pa,...pb,...aa,...pb,...bb,...aa);
  }
  const sides=new THREE.BufferGeometry();sides.setAttribute('position',new THREE.Float32BufferAttribute(sideVerts,3));sides.computeVertexNormals();const sideMaterial=new THREE.MeshStandardMaterial({color:COLORS.stone,side:THREE.DoubleSide,flatShading:true});root.add(new THREE.Mesh(sides,sideMaterial));
  function path(points,width,label){
    for(let i=1;i<points.length;i++){
      const a=points[i-1],b=points[i],aw=toWorld(a,c),bw=toWorld(b,c),dx=bw.x-aw.x,dz=bw.z-aw.z,len=Math.hypot(dx,dz);if(len<.0001)continue;
      const ox=-dz/len*width/2,oz=dx/len*width/2,bridge=a.bridge&&b.bridge;
      const v=[aw.x+ox,a.y,aw.z+oz,aw.x-ox,a.y,aw.z-oz,bw.x+ox,b.y,bw.z+oz,aw.x-ox,a.y,aw.z-oz,bw.x-ox,b.y,bw.z-oz,bw.x+ox,b.y,bw.z+oz];
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(v,3));g.computeVertexNormals();const m=mesh(root,g,bridge?COLORS.wood:COLORS.path,0,0,0,label);m.castShadow=false;m.material.side=THREE.DoubleSide;
      if(bridge){for(const sign of [-1,1]){beam(root,[aw.x+ox*sign,a.y+.15,aw.z+oz*sign],[bw.x+ox*sign,b.y+.15,bw.z+oz*sign],.025,COLORS.wood,'Wooden bridge');box(root,.032,.2,.032,COLORS.wood,aw.x+ox*sign,a.y+.08,aw.z+oz*sign);}}
    }
  }
  for(const road of plan.roads)path(road.points,road.width*c.size,'Path · connects settlement and resource areas');
  for(const node of plan.neighbourhoods){const p=toWorld(node,c),s=sampleTerrain(terrain,node.x,node.z);const square=mesh(root,new THREE.CylinderGeometry(S.plazaRadius,S.plazaRadius,.055,8),COLORS.path,p.x,s.height+.025,p.z,'Public square · Human cluster centre');square.receiveShadow=true;}
  function roof(parent,w,d,h,type,color,y){
    if(type==='flat'){box(parent,w,.065,d,color,0,y,0);return;}
    if(type==='shed'){const r=box(parent,w,.065,d,color,0,y+h*.4,0);r.rotation.x=.18;return;}
    const v=[[-w/2,0,-d/2],[w/2,0,-d/2],[w/2,0,d/2],[-w/2,0,d/2],[0,h,-d/2],[0,h,d/2]],ids=[0,4,1,3,2,5,0,3,5,0,5,4,1,4,5,1,5,2,0,1,2,0,2,3];
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(ids.flatMap(i=>v[i]),3));g.computeVertexNormals();mesh(parent,g,color,0,y,0);
  }
  for(const plot of plan.buildingPlots)buildArchitecture(root,plot,result,{mesh,box,beam,roof});
  for(const boat of env.boats||[])buildBoat(root,boat,c,{mesh,box});
  for(const dock of plan.docks){
    const a=toWorld(dock.a,c),b=toWorld(dock.b,c),len=Math.hypot(b.x-a.x,b.z-a.z),count=Math.ceil(len/.09);
    const g=new THREE.Group();g.position.set(a.x,dock.y,a.z);g.rotation.y=Math.atan2(b.x-a.x,b.z-a.z);root.add(g);
    for(let k=0;k<=count;k++)box(g,S.dockWidth,.04,.073,COLORS.wood,0,0,k/count*len,'Pier · Human close to Water');
    for(const z of [0,len*.5,len])for(const x of [-.13,.13])box(g,.045,.48,.045,COLORS.wood,x,-.13,z);
  }
  for(const f of plan.fields){
    const r=f.radius,p=toWorld(f,c);
    // Surface tiles and fence segments independently sample terrain.
    for(let i=0;i<6;i++)for(let j=0;j<6;j++){
      const x=f.x+(i/5-.5)*r*1.5,z=f.z+(j/5-.5)*r*1.5,y=sampleTerrain(terrain,x,z).height;
      if(f.kind==='field'&&i%2===0)box(root,r*size*.29,.025,.022,'#B5AC93',(x-.5)*size,y+.013,(z-.5)*size-r*size*.14);
      box(root,r*size*.29,.025,r*size*.29,f.kind==='field'?(i%2?'#BCC46B':'#CFB774'):'#ADCF78',(x-.5)*size,y+.012,(z-.5)*size,'Agriculture · Animal and Earth influence');
    }
    for(const {a:pa,b:pb} of fenceSegments(f)){
      const wa=toWorld(pa,c),wb=toWorld(pb,c),ya=sampleTerrain(terrain,pa.x,pa.z).height,yb=sampleTerrain(terrain,pb.x,pb.z).height;
      box(root,.035,.20,.035,COLORS.wood,wa.x,ya+.1,wa.z,'Pasture fence');for(const h of [.08,.17])beam(root,[wa.x,ya+h,wa.z],[wb.x,yb+h,wb.z],.023,COLORS.wood);
    }
  }
  function instances(geo,color,items,fn,label){if(!items.length){geo.dispose();return;}const m=new THREE.InstancedMesh(geo,mat(color),items.length),o=new THREE.Object3D();items.forEach((p,i)=>{const w=toWorld(p,c);o.position.set(w.x,p.y,w.z);o.rotation.set(0,p.rotation,0);o.scale.setScalar(p.scale||1);fn(o,p);o.updateMatrix();m.setMatrixAt(i,o.matrix);});m.castShadow=true;m.receiveShadow=true;m.userData.label=label;root.add(m);
    if(label==='Faceted canopy'){const bases=[];items.forEach((p,i)=>{if(i%5===0){const matrix=new THREE.Matrix4();m.getMatrixAt(i,matrix);bases.push({index:i,matrix,phase:p.x*31+p.z*17});}});motionRegistry(root).ambient.foliage.push({mesh:m,bases});}
  }
  instances(new THREE.CylinderGeometry(.026,S.trunkRadius,.37,5),COLORS.trunk,env.trees,(o,p)=>o.position.y+=.18*p.scale,'Trees · open land outside streets');
  for(let variant=0;variant<3;variant++)instances(variant===0?new THREE.ConeGeometry(.22,.57,6):new THREE.IcosahedronGeometry(.23,0),variant===1?COLORS.leaf:COLORS.leaf2,env.trees.filter(p=>p.variant===variant),(o,p)=>{o.position.y+=.49*p.scale;if(variant===2)o.scale.y*=1.5;},'Faceted canopy');
  instances(new THREE.DodecahedronGeometry(S.rockRadius,0),'#AEAEA0',env.rocks,(o,p)=>{o.position.y+=.075*p.scale;o.scale.y*=.65;},'Low-poly stones');
  for(const a of env.animals){
    const g=new THREE.Group(),p=toWorld(a,c),bird=a.species==='chicken',cow=a.species==='cow',legs=[];
    g.position.set(p.x,a.y+.027,p.z);g.rotation.y=a.rotation;g.scale.setScalar(a.scale||1);root.add(g);
    const body=mesh(g,new THREE.IcosahedronGeometry(bird?.045:cow?.095:.084,1),cow?'#D8BC91':'#F3EACE',0,bird?.07:.12,0);body.scale.set(1,cow?.95:1,bird?1.35:1.55);
    if(cow)for(const z of [-.055,.045]){const patch=mesh(g,new THREE.IcosahedronGeometry(.044,0),'#685548',.072,.145,z);patch.scale.set(.3,.8,1);}
    const head=new THREE.Group();head.position.set(0,bird?.10:.16,bird?.055:.11);g.add(head);
    mesh(head,new THREE.IcosahedronGeometry(bird?.026:.041,0),cow?'#8C7357':bird?'#F2DCB3':'#646E62',0,0,.023);
    if(bird){box(head,.017,.013,.035,'#D9A13E',0,-.003,.054);box(head,.014,.021,.018,'#BE6149',0,.029,.020);}
    else for(const x of [-.041,.041]){const ear=mesh(head,new THREE.IcosahedronGeometry(.021,0),cow?'#D8BC91':'#646E62',x,.009,.014);ear.scale.set(1,.4,.55);}
    for(const x of bird?[-.018,.018]:[-.045,.045])for(const z of bird?[0]:[-.065,.065]){const limb=new THREE.Group();limb.position.set(x,bird?.04:.085,z);g.add(limb);box(limb,bird?.008:.018,bird?.042:.084,bird?.009:.021,bird?'#C49649':'#646E62',0,bird?-.021:-.042,0);legs.push(limb);}
    g.traverse(o=>{if(o.isMesh)o.userData.label=`${a.species||'Sheep'} · local pasture life`;});
    motionRegistry(root).living.animals.push({mesh:g,head,legs,plan:a});
  }
  return root;
}
