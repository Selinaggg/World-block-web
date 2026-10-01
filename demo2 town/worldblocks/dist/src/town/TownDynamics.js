import * as THREE from '../../vendor/three.module.js';
import {sampleAnimal} from './TownLifePlan.js';
import {sampleTerrain} from './TerrainGenerator.js';
import {toWorld} from './spatial.js';
/** One bounded animation layer shared by diorama and first-person cameras.
 * Registrations are render-only; generated snapshots contain data, never meshes.
 */
export function motionRegistry(root){
  return root.userData.dynamics??={ambient:{boats:[],water:[],foliage:[],cloth:[]},living:{animals:[]},functional:{rotors:[],glows:[]}};
}

export function animateWater(mesh,root){
  const uniforms={time:{value:0},strength:{value:1}};
  mesh.material=mesh.material.clone();
  mesh.material.onBeforeCompile=shader=>{
    shader.uniforms.lifeTime=uniforms.time;shader.uniforms.lifeStrength=uniforms.strength;
    shader.vertexShader='uniform float lifeTime;\nuniform float lifeStrength;\nvarying float lifeRipple;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
      lifeRipple = sin(position.x * 3.2 + lifeTime * .6) * cos(position.y * 2.6 - lifeTime * .4);
      transformed.z += lifeRipple * .004 * lifeStrength;`);
    shader.fragmentShader='uniform float lifeStrength;\nvarying float lifeRipple;\n'+shader.fragmentShader;
    shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      diffuseColor.rgb *= 1.0 + lifeRipple * .035 * lifeStrength;`);
  };
  mesh.material.customProgramCacheKey=()=> 'town-water-life-v1';
  motionRegistry(root).ambient.water.push(uniforms);
}

export class TownDynamics {
  constructor(root,result){this.root=root;this.result=result;this.time=0;this.registry=motionRegistry(root);this.reduced=false;this.foliageTick=-1;this.matrix=new THREE.Matrix4();this.sway=new THREE.Matrix4();}
  update(dt,{reducedMotion=false}={}){
    // Stop rather than jump ahead when the canvas is hidden or a tab is suspended.
    if(!reducedMotion)this.time+=Math.max(0,Math.min(.05,dt));
    const t=this.time,r=this.registry,strength=reducedMotion?0:1;
    for(const u of r.ambient.water){u.time.value=t;u.strength.value=strength;}
    for(const boat of r.ambient.boats){const phase=t*.8+boat.phase;boat.mesh.position.y=boat.y+Math.sin(phase)*.008*strength;boat.mesh.rotation.x=Math.sin(phase*.87)*.024*strength;boat.mesh.rotation.z=Math.cos(phase*.71)*.033*strength;boat.mesh.rotation.y=boat.heading+Math.sin(phase*.43)*.018*strength;}
    for(const puff of this.root.userData.smoke||[]){
      const phase=(t*puff.speed+puff.phase)%1;puff.mesh.visible=!reducedMotion;
      puff.mesh.position.set(puff.x+phase*puff.drift,puff.y+phase*puff.rise,puff.z+phase*.016);
      puff.mesh.scale.setScalar(.6+phase*.85);puff.mesh.material.opacity=puff.opacity*Math.sin(Math.PI*phase);
    }
    if(!reducedMotion)for(const animal of r.living.animals){
      const state=sampleAnimal(animal.plan,t),p=toWorld(state,this.result.terrainConfig);
      animal.mesh.position.set(p.x,sampleTerrain(this.result.terrain,state.x,state.z).height+.027,p.z);
      animal.mesh.rotation.y=state.heading;animal.head.rotation.x=state.graze;
      animal.legs.forEach((leg,i)=>{leg.rotation.x=state.stride*(i%2?-.25:.25);});
    }
    for(const cloth of r.ambient.cloth)cloth.mesh.rotation[cloth.axis]=cloth.base+Math.sin(t*.85+cloth.phase)*cloth.amount*strength;
    for(const rotor of r.functional.rotors)rotor.mesh.rotation.z=rotor.base+t*rotor.speed;
    for(const glow of r.functional.glows)glow.material.emissiveIntensity=.38+(.07*Math.sin(t*2.1+glow.phase)+.025*Math.sin(t*4.7))*strength;
    // A few canopy instances at 20 Hz, retaining shared geometry and draw calls.
    const tick=Math.floor(t*20);
    if(tick!==this.foliageTick||reducedMotion!==this.reduced){
      for(const canopy of r.ambient.foliage){for(const b of canopy.bases){this.sway.makeRotationZ(Math.sin(t*.65+b.phase)*.022*strength);this.matrix.copy(b.matrix).multiply(this.sway);canopy.mesh.setMatrixAt(b.index,this.matrix);}canopy.mesh.instanceMatrix.needsUpdate=true;}
      this.foliageTick=tick;
    }
    this.reduced=reducedMotion;
  }
}
