import {WORLD_PALETTE as palette} from './palette.js';
import * as THREE from '../../../vendor/three.module.js';
export function addSemanticMeshes(group,layers){
  const cube=new THREE.BoxGeometry(1,1,1),round=new THREE.IcosahedronGeometry(1,1),roof=new THREE.ConeGeometry(1,1,4);
  const materials=new Map(),base=new THREE.Object3D(),part=new THREE.Object3D(),matrix=new THREE.Matrix4();
  const material=color=>{if(!materials.has(color))materials.set(color,new THREE.MeshStandardMaterial({color,flatShading:true,roughness:.85}));return materials.get(color);};
  function add(items,geometry,color,position,scale,label,rotation=0){
    if(!items.length)return;
    const mesh=new THREE.InstancedMesh(geometry,material(color),items.length);mesh.userData.label=label;mesh.userData.semantic=true;
    items.forEach((p,i)=>{
      base.position.set(p.x,p.y,p.z);base.rotation.set(0,p.rotation,0);base.scale.setScalar(p.scale);base.updateMatrix();
      const pos=typeof position==='function'?position(p):position,s=typeof scale==='function'?scale(p):scale;
      part.position.set(...pos);part.scale.set(...s);part.rotation.set(0,rotation,0);part.updateMatrix();matrix.multiplyMatrices(base.matrix,part.matrix);mesh.setMatrixAt(i,matrix);
    });mesh.instanceMatrix.needsUpdate=true;mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);
  }
  const houses=layers.civilisation.objects;
  for(let variant=0;variant<3;variant++){
    const items=houses.filter(p=>p.variant===variant),label='Homes · traces of human habitation';
    add(items,cube,palette.walls[variant],[0,.27,0],[.62,.54,.56],label);
    add(items,roof,palette.roofs[variant],[0,.69,0],[.58,.38,.54],label,Math.PI/4);
  }
  add(houses,cube,palette.wood,[0,.15,.289],[.14,.3,.025],'Homes · doorways');
  for(const x of [-.2,.2])add(houses,cube,palette.windows,[x,.35,.289],[.105,.14,.025],'Homes · windows');
  add(houses,cube,palette.chimney,[.17,.71,-.1],[.08,.3,.09],'Homes · chimneys');
  const ground=houses.filter(p=>!p.stilt),stilts=houses.filter(p=>p.stilt);
  add(ground,cube,palette.foundation,p=>[0,-(p.y-p.floor)/p.scale/2,0],p=>[.7,(p.y-p.floor)/p.scale,.64],'Homes · stone foundations');
  add(stilts,cube,palette.deck,[0,-.03,0],[.9,.08,.83],'Homes · raised decks');
  for(const x of [-.32,.32])for(const z of [-.28,.28])add(stilts,cube,palette.stilts,p=>[x,-(p.y-p.floor+.2)/p.scale/2,z],p=>[.045,(p.y-p.floor+.2)/p.scale,.045],'Homes · waterfront stilts');
  const sheep=layers.life.objects.filter(p=>p.kind==='sheep'),deer=layers.life.objects.filter(p=>p.kind==='deer'),ducks=layers.life.objects.filter(p=>p.kind==='duck');
  for(const [items,body,face,label] of [[sheep,'#F5EACD','#686055','Animals · sheep'],[deer,'#C69153','#95613A','Animals · deer']]){
    for(const x of [-.17,.17])for(const z of [-.085,.085])add(items,cube,face,[x,.115,z],[.045,.23,.045],label);
    add(items,round,body,[0,.34,0],[.29,.18,.145],label);
    add(items,round,face,[.26,.43,0],[.125,.12,.1],label);
    for(const z of [-.11,.11])add(items,round,body,[.24,.51,z],[.06,.035,.045],label);
    add(items,round,body,[-.29,.37,0],[.08,.04,.04],label);
    for(const z of [-.091,.091])add(items,round,'#343B38',[.315,.455,z],[.016,.016,.012],label);
  }
  for(const z of [-.055,.055])add(deer,cube,'#75634D',[.24,.61,z],[.025,.22,.025],'Animals · deer antlers');
  add(ducks,round,'#F5E9BF',[0,.12,0],[.24,.14,.145],'Animals · water birds');
  add(ducks,round,'#3E9075',[.18,.29,0],[.095,.105,.09],'Animals · water birds');
  add(ducks,cube,'#EEAB37',[.295,.28,0],[.13,.045,.065],'Animals · bills');
  for(const z of [-.135,.135])add(ducks,round,'#CAD49A',[-.02,.155,z],[.145,.065,.027],'Animals · wings');
  for(const z of [-.078,.078])add(ducks,round,'#343B38',[.218,.315,z],[.012,.012,.012],'Animals · water birds');
  const vertices=[];
  for(const path of layers.civilisation.paths)for(let i=1;i<path.length;i++){
    const a=path[i-1],b=path[i],length=Math.hypot(b.x-a.x,b.z-a.z)||1,dx=-(b.z-a.z)/length*.075,dz=(b.x-a.x)/length*.075;
    vertices.push(a.x-dx,a.y,a.z-dz,a.x+dx,a.y,a.z+dz,b.x-dx,b.y,b.z-dz,b.x-dx,b.y,b.z-dz,a.x+dx,a.y,a.z+dz,b.x+dx,b.y,b.z+dz);
  }
  if(vertices.length){const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.computeVertexNormals();const mesh=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color:palette.path,roughness:1,side:THREE.DoubleSide}));mesh.userData.label='Paths · links between nearby homes';group.add(mesh);}
  // Unused shared primitives are not retained by the scene.
  for(const geometry of [cube,round,roof])if(!group.children.some(m=>m.geometry===geometry))geometry.dispose();
}
