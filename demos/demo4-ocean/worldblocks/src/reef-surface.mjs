import * as T from 'three';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
import {seed} from './graph.mjs';
import {MarchingCubes} from 'three/addons/objects/MarchingCubes.js';

// One continuous isosurface per connected reef. Capsules bridge only verified
// face links, so distant reefs and diagonal near-misses never fuse accidentally.
export function reefPrimitives(members,links,spacing=2.45){
  const origin=members[0],at=new Map(members.map(n=>[n.id,[(n.x-origin.x)*spacing,(n.y-origin.y)*spacing,(n.z-origin.z)*spacing]]));
  const shapes=[];
  for(const n of members){
    const center=at.get(n.id),random=key=>seed(n.id+':reef:'+key);
    const a=center.map((v,i)=>v+(random('shift'+i)-.5)*.27);
    shapes.push({a,b:a,r:1.01+random('radius')*.15});
    // Unequal lobes interrupt the repeated spherical outline without moving
    // the hardware position or the ecological attachment point.
    for(let i=0;i<5;i++){
      const az=random(i+'az')*Math.PI*2,y=random(i+'height')*1.5-.7,r=.56+random(i+'reach')*.26;
      const p=[a[0]+Math.cos(az)*r,a[1]+y,a[2]+Math.sin(az)*r];
      shapes.push({a:p,b:p,r:.39+random(i+'size')*.25});
    }
  }
  for(const [a,b] of links){
    const start=at.get(a),end=at.get(b),middle=start.map((v,i)=>(v+end[i])/2+(seed(a+':'+b+':bend:'+i)-.5)*.22);
    const r=.79+seed(a+':'+b+':neck')*.09;
    shapes.push({a:start,b:middle,r},{a:middle,b:end,r});
  }
  return shapes;
}
function distanceToSegment(p,a,b){
  const d=b.map((v,i)=>v-a[i]),length=d.reduce((s,v)=>s+v*v,0);
  const t=length?Math.max(0,Math.min(1,d.reduce((s,v,i)=>s+(p[i]-a[i])*v,0)/length)):0;
  return Math.hypot(...p.map((v,i)=>v-a[i]-d[i]*t));
}
export function reefField(p,shapes){
  let value=-1;
  for(const s of shapes){const next=s.r-distanceToSegment(p,s.a,s.b),h=Math.max(.34-Math.abs(value-next),0)/.34;value=Math.max(value,next)+h*h*.085;}
  return value;
}
export function reefGeometry(members,links){
  const shapes=reefPrimitives(members,links),min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];
  for(const s of shapes)for(let i=0;i<3;i++){min[i]=Math.min(min[i],s.a[i]-s.r-1,s.b[i]-s.r-1);max[i]=Math.max(max[i],s.a[i]+s.r+1,s.b[i]+s.r+1);}
  const center=min.map((v,i)=>(v+max[i])/2),size=Math.max(...max.map((v,i)=>v-min[i]));
  const resolution=Math.max(28,Math.min(88,Math.ceil(size/.18))),step=size/resolution;
  const scratch=new T.MeshBasicMaterial(),march=new MarchingCubes(resolution,scratch,false,false,120000);march.isolation=0;march.field.fill(-1);
  // Stamp compact fields instead of evaluating every reef against every voxel.
  for(const s of shapes){
    const lo=s.a.map((v,i)=>Math.max(1,Math.floor((Math.min(v,s.b[i])-s.r-.45-center[i]+size/2)/step)));
    const hi=s.a.map((v,i)=>Math.min(resolution-2,Math.ceil((Math.max(v,s.b[i])+s.r+.45-center[i]+size/2)/step)));
    for(let z=lo[2];z<=hi[2];z++)for(let y=lo[1];y<=hi[1];y++)for(let x=lo[0];x<=hi[0];x++){
      const p=[x,y,z].map((v,i)=>center[i]-size/2+v*step),i=x+resolution*(y+resolution*z),v=s.r-distanceToSegment(p,s.a,s.b),old=march.field[i],h=Math.max(.34-Math.abs(old-v),0)/.34;
      march.field[i]=Math.max(old,v)+h*h*.085;
    }
  }
  march.update();
  const geometry=new T.BufferGeometry();
  for(const name of ['position','normal'])geometry.setAttribute(name,new T.BufferAttribute(march.geometry.attributes[name].array.slice(0,march.count*3),3));
  geometry.scale(size/2,size/2,size/2);geometry.translate(...center);
  // Global coordinates anchor relief to the board, including when ownership
  // of a connected surface changes after removal of its first module.
  const p=geometry.attributes.position,n=geometry.attributes.normal,origin=members[0];
  for(let i=0;i<p.count;i++){
    const x=p.getX(i),y=p.getY(i),z=p.getZ(i),wx=x+origin.x*2.45,wy=y+origin.y*2.45,wz=z+origin.z*2.45;
    const d=(stoneNoise(wx*2.6,wy*2.6,wz*2.6)-.5)*.32
      +(stoneNoise(wx*6.7+11,wy*6.7,wz*6.7)-.5)*.13
      +(stoneNoise(wx*15,wy*15+7,wz*15)-.5)*.035;
    p.setXYZ(i,x+n.getX(i)*d,y+n.getY(i)*d,z+n.getZ(i)*d);
  }
  // Recompute normals after deformation; otherwise lighting still describes
  // the old smooth blobs and hides the actual surface relief.
  geometry.deleteAttribute('normal');
  const welded=mergeVertices(geometry,1e-4);welded.computeVertexNormals();welded.computeBoundingSphere();
  geometry.dispose();march.geometry.dispose();scratch.dispose();return welded;
}
function stoneNoise(x,y,z){
  const ix=Math.floor(x),iy=Math.floor(y),iz=Math.floor(z),smooth=t=>t*t*(3-2*t),u=smooth(x-ix),v=smooth(y-iy),w=smooth(z-iz);
  const hash=(a,b,c)=>{const t=Math.sin(a*127.1+b*311.7+c*74.7)*43758.5453;return t-Math.floor(t);};
  const mix=(a,b,t)=>a+(b-a)*t;
  return mix(mix(mix(hash(ix,iy,iz),hash(ix+1,iy,iz),u),mix(hash(ix,iy+1,iz),hash(ix+1,iy+1,iz),u),v),mix(mix(hash(ix,iy,iz+1),hash(ix+1,iy,iz+1),u),mix(hash(ix,iy+1,iz+1),hash(ix+1,iy+1,iz+1),u),v),w);

}
