import * as T from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {seed} from './graph.mjs';
export const rng=id=>{let i=0;return ()=>seed(id+':'+i++);};
export const material=(color,extras={})=>new T.MeshStandardMaterial({color,roughness:.78,metalness:0,...extras});
export function mesh(group,geometry,mat,x=0,y=0,z=0,scale){const m=new T.Mesh(geometry,mat);m.position.set(x,y,z);if(scale)m.scale.set(...scale);m.castShadow=true;m.receiveShadow=true;group.add(m);return m;}
export function ball(group,mat,x,y,z,sx,sy=sx,sz=sx,detail=1){return mesh(group,new T.IcosahedronGeometry(1,detail),mat,x,y,z,[sx,sy,sz]);}
export function box(group,mat,x,y,z,sx,sy,sz){return mesh(group,new T.BoxGeometry(sx,sy,sz),mat,x,y,z);}
export function rod(group,mat,a,b,r1=.02,r2=r1){const av=new T.Vector3(...a),bv=new T.Vector3(...b),delta=bv.clone().sub(av);const m=mesh(group,new T.CylinderGeometry(r2,r1,delta.length(),7),mat,...av.clone().add(bv).multiplyScalar(.5).toArray());m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.normalize());return m;}
export function tube(group,mat,points,r=.02,segments=24){return mesh(group,new T.TubeGeometry(new T.CatmullRomCurve3(points.map(p=>new T.Vector3(...p))),segments,r,5,false),mat);}
export function dispose(group){const geometries=new Set(),materials=new Set();group.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])materials.add(m);});geometries.forEach(g=>g.dispose());materials.forEach(m=>{for(const key of ['map','bumpMap','roughnessMap','normalMap'])m[key]?.dispose();m.dispose();});group.clear();}
export function batch(group){
  group.updateMatrixWorld(true);const bundles=new Map(),old=[];
  group.traverse(o=>{if(o.isMesh&&!Array.isArray(o.material)){const g=o.geometry.clone().applyMatrix4(o.matrixWorld);const key=o.material.uuid;if(!bundles.has(key))bundles.set(key,{mat:o.material,geometries:[]});bundles.get(key).geometries.push(g.index?g.toNonIndexed():g);old.push(o);}});
  for(const o of old){o.removeFromParent();o.geometry.dispose();}
  for(const {mat,geometries} of bundles.values()){
    // All builders supply position, normal and UV. Normalize unused UV attributes.
    for(const g of geometries)if(!g.getAttribute('uv'))g.setAttribute('uv',new T.BufferAttribute(new Float32Array(g.getAttribute('position').count*2),2));
    const geometry=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());if(geometry)mesh(group,geometry,mat);
  }
  return group;
}
export function plant(group,random,x,y,z,size=.3,palette=['#6e8b54','#91a761','#c3c887']){
  const stem=material('#736745'),leaf=material(palette[Math.floor(random()*palette.length)],{roughness:.9});
  rod(group,stem,[x,y,z],[x,y+size*1.2,z],size*.045);
  for(let i=0;i<5;i++){const a=i*2.4+random(),r=size*.3;ball(group,leaf,x+Math.cos(a)*r,y+size*(.5+i*.14),z+Math.sin(a)*r,size*.35,size*.24,size*.28,1);}
}
