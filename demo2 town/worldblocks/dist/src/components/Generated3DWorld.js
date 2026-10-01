import {TownDynamics} from '../town/TownDynamics.js';
import {INFLUENCE_COLORS} from '../town/BuildingGrammar.js';
import {TownExploreController} from './TownExploreController.js';
import {buildTown} from '../town/TownMeshes.js';
import * as THREE from '../../vendor/three.module.js';
import {OrbitControls} from '../../vendor/OrbitControls.js';
import {buildIsland,disposeWorld} from '../generation/threeD/WorldMeshes.js';
/** Read-only output renderer. No source WorldState edits and no image-service access. */
export class Generated3DWorld {
  constructor(host,onInspect=()=>{},onExplore=()=>{}){
    this.host=host;this.influenceMaterials=new Map();this.reducedMotion=matchMedia('(prefers-reduced-motion:reduce)');this.scene=new THREE.Scene();this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.renderer.setClearColor('#E9EFE8',0);this.renderer.shadowMap.enabled=true;
    this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;host.append(this.renderer.domElement);
    this.renderer.domElement.setAttribute('role','img');this.renderer.domElement.setAttribute('aria-label','Generated 3D town. Drag to orbit, scroll to zoom, click terrain, homes or animals to inspect.');
    this.camera=new THREE.PerspectiveCamera(36,1,.1,150);this.controls=new OrbitControls(this.camera,this.renderer.domElement);
    this.controls.enableDamping=true;this.controls.minDistance=7;this.controls.maxDistance=48;this.controls.maxPolarAngle=Math.PI*.48;this.controls.enablePan=false;
    this.scene.add(new THREE.HemisphereLight('#E6EAF1','#A4AE93',2));const sun=new THREE.DirectionalLight('#FFF5E4',2.2);sun.position.set(-8,18,10);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-10,right:10,top:10,bottom:-10});sun.shadow.normalBias=.03;this.scene.add(sun);
    this.scene.add(new THREE.AmbientLight('#B8CCD6',.3));
    this.explore=new TownExploreController(this.camera,this.controls,this.renderer.domElement,onExplore);
    this.raycaster=new THREE.Raycaster();this.pointer=new THREE.Vector2();
    this.renderer.domElement.addEventListener('pointerdown',e=>{this.down=[e.clientX,e.clientY];});
    this.renderer.domElement.addEventListener('pointerup',e=>{if(this.explore.active||!this.down||Math.hypot(e.clientX-this.down[0],e.clientY-this.down[1])>5||!this.world)return;const r=host.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.raycaster.setFromCamera(this.pointer,this.camera);const hit=this.raycaster.intersectObjects(this.world.children,true).find(h=>h.object.userData.label);if(hit)onInspect(hit.object.userData.label);});
    this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);
    this.renderer.setAnimationLoop(now=>{const dt=Math.min(.05,(now-(this.lastFrame||now))/1000);this.lastFrame=now;if(document.hidden||!host.clientWidth||host.hidden||host.closest('[hidden]'))return;if(this.explore.active)this.explore.update(dt,now);else this.controls.update();this.dynamics?.update(dt,{reducedMotion:this.reducedMotion.matches||this.motionPaused});
      this.renderer.render(this.scene,this.explore.activeCamera);});this.home();
  }
  setWorld(result){const debug=this.influenceDebug;this.setInfluenceDebug(false);this.explore.setWorld(result);const next=result.kind==='human-town'?buildTown(result):buildIsland(result);if(this.world){this.scene.remove(this.world);disposeWorld(this.world);}this.world=next;this.dynamics=result.kind==='human-town'?new TownDynamics(next,result):null;this.scene.add(next);this.setInfluenceDebug(debug);this.home();}
  setInfluenceDebug(enabled){
    this.influenceDebug=!!enabled;
    this.world?.traverse(o=>{const element=o.userData.influenceElement;if(!o.isMesh||!element||o.material.transparent)return;
      if(enabled){o.userData.normalMaterial??=o.material;if(!this.influenceMaterials.has(element))this.influenceMaterials.set(element,new THREE.MeshStandardMaterial({color:INFLUENCE_COLORS[element],roughness:1,flatShading:true}));o.material=this.influenceMaterials.get(element);}
      else if(o.userData.normalMaterial){o.material=o.userData.normalMaterial;delete o.userData.normalMaterial;}
    });
  }
  home(){this.explore?.exit(true);this.controls.reset();const aspect=this.host.clientWidth/Math.max(1,this.host.clientHeight);const distance=Math.max(18,22/Math.max(.35,aspect));this.fitDistance=distance;this.camera.position.set(distance*.45,distance*.65,distance);this.controls.target.set(0,.25,0);this.controls.update();this.resize();}
  resize(){const w=this.host.clientWidth,h=this.host.clientHeight;if(!w||!h)return;const fit=Math.max(18,22/Math.max(.35,w/h));if(!this.explore.active&&this.fitDistance&&Math.abs(fit-this.fitDistance)>.01){this.camera.position.sub(this.controls.target).multiplyScalar(fit/this.fitDistance).add(this.controls.target);}if(!this.explore.active)this.fitDistance=fit;this.explore.resize(w/h);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h);}
  dispose(){this.dynamics=null;this.setInfluenceDebug(false);for(const material of this.influenceMaterials.values())material.dispose();this.explore.dispose();this.observer.disconnect();this.controls.dispose();if(this.world)disposeWorld(this.world);this.renderer.setAnimationLoop(null);this.renderer.dispose();this.renderer.domElement.remove();}
}
