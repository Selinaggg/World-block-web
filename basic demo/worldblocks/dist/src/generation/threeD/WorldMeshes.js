import {WORLD_PALETTE as palette} from './palette.js';
import {addSemanticMeshes} from './SemanticMeshes.js';
import * as THREE from '../../../vendor/three.module.js';
import {seededRandom} from './random.js';
import {fieldsAt} from './TerrainGenerator.js';
const material=color=>new THREE.MeshStandardMaterial({color,roughness:.88,flatShading:true});
export function buildIsland(result){
  const group=new THREE.Group(),{terrain,terrainConfig:config,layers}=result,{resolution:n,heights,margin,size,seaLevel}=terrain;
  const span=(1+2*margin)*size,vertices=[],colors=[];
  const sand=new THREE.Color(palette.sand),land=new THREE.Color(palette.grass),stone=new THREE.Color(palette.highland),volcanic=new THREE.Color(palette.volcanic);
  for(let row=0;row<n-1;row++)for(let col=0;col<n-1;col++){
    for(const ids of [[row*n+col,(row+1)*n+col,row*n+col+1],[row*n+col+1,(row+1)*n+col,(row+1)*n+col+1]]){
      const y=ids.reduce((sum,i)=>sum+heights[i],0)/3;
      const f=fieldsAt(result.points,-margin+(col+.5)/(n-1)*(1+2*margin),-margin+(row+.5)/(n-1)*(1+2*margin),config);
      const color=(y<seaLevel+.25?sand:f.fire>f.earth&&f.fire>.5?volcanic:y>seaLevel+1.9?stone:land);
      for(const id of ids){vertices.push((id%n/(n-1)-.5)*span,heights[id],(Math.floor(id/n)/(n-1)-.5)*span);colors.push(color.r,color.g,color.b);}
    }
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.computeVertexNormals();
  const ground=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({vertexColors:true,roughness:.95,flatShading:true}));ground.receiveShadow=true;ground.userData.label='Terrain · shaped by Earth, Water and Fire';group.add(ground);
  const waterGeometry=new THREE.PlaneGeometry(span,span,n-1,n-1),waterColors=[];
  const blue=new THREE.Color(palette.water),shallow=new THREE.Color(palette.shallows),deep=new THREE.Color(palette.deepWater);
  // Match the reference's aqua coastal band; only colour varies, not sea level.
  for(const height of heights){const depth=seaLevel-height,c=depth<.24?shallow:depth>.85?deep:blue;waterColors.push(c.r,c.g,c.b);}
  waterGeometry.setAttribute('color',new THREE.Float32BufferAttribute(waterColors,3));
  const water=new THREE.Mesh(waterGeometry,new THREE.MeshStandardMaterial({vertexColors:true,transparent:true,opacity:.94,roughness:.6,metalness:0,side:THREE.DoubleSide}));water.rotation.x=-Math.PI/2;water.position.y=seaLevel;water.userData.label='Water · shared sea level';group.add(water);
  const plinth=new THREE.Mesh(new THREE.BoxGeometry(span,.35,span),material(palette.base));plinth.position.y=seaLevel+config.seabed-.19;group.add(plinth);
  const transform=new THREE.Object3D();
  function instances(geometry,mat,items,label,offset,scale){
    if(!items.length){geometry.dispose();mat.dispose();return;}
    const mesh=new THREE.InstancedMesh(geometry,mat,items.length);
    items.forEach((p,i)=>{transform.position.set(p.x,p.y+offset*p.scale,p.z);transform.rotation.set(0,p.rotation,0);transform.scale.setScalar(p.scale*scale);transform.updateMatrix();mesh.setMatrixAt(i,transform.matrix);});
    mesh.instanceMatrix.needsUpdate=true;mesh.castShadow=true;mesh.receiveShadow=true;mesh.userData.label=label;group.add(mesh);
  }
  const trees=layers.environment.trees;
  instances(new THREE.CylinderGeometry(.035,.055,.5,5),material(palette.trunk),trees,'Trees · low-poly trunks',.25,1);
  instances(new THREE.ConeGeometry(.25,.62,6),material(palette.canopy),trees,'Trees · terrain-aware canopy',.65,1);
  instances(new THREE.ConeGeometry(.19,.5,6),material(palette.canopyTip),trees,'Trees · terrain-aware canopy',.94,1);
  for(let variant=0;variant<3;variant++){
    const geo=new THREE.IcosahedronGeometry(.22,0),random=seededRandom(470+variant),pos=geo.attributes.position;
    // Hash by vertex coordinates so duplicated face vertices remain joined.
    const deformations=new Map();for(let i=0;i<pos.count;i++){
      const key=[pos.getX(i),pos.getY(i),pos.getZ(i)].join(',');if(!deformations.has(key))deformations.set(key,.75+random()*.5);
      const s=deformations.get(key);pos.setXYZ(i,pos.getX(i)*s,pos.getY(i)*s*.75,pos.getZ(i)*s);
    }geo.computeVertexNormals();
    instances(geo,material(palette.rocks[variant]),layers.environment.rocks.filter(p=>p.variant===variant),'Rocks · Earth / Fire and exposed slopes',.11,1);
  }
  addSemanticMeshes(group,layers);
  return group;
}
export function disposeWorld(group){const geometries=new Set(),materials=new Set();group.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}
