import * as THREE from '../../vendor/three.module.js';
import {OrbitControls} from '../../vendor/OrbitControls.js';
import {buildIsland,disposeWorld} from '../generation/threeD/WorldMeshes.js';
/** Read-only output renderer. No source WorldState edits and no image-service access. */
export class Generated3DWorld {
  constructor(host,onInspect=()=>{}){
    this.host=host;this.scene=new THREE.Scene();this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.renderer.setClearColor('#0B0D12',0);this.renderer.shadowMap.enabled=true;
    this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;host.append(this.renderer.domElement);
    this.renderer.domElement.setAttribute('role','img');this.renderer.domElement.setAttribute('aria-label','Generated 3D island. Drag to orbit, scroll to zoom, click terrain, homes or animals to inspect.');
    this.camera=new THREE.PerspectiveCamera(36,1,.1,150);this.controls=new OrbitControls(this.camera,this.renderer.domElement);
    this.controls.enableDamping=true;this.controls.minDistance=7;this.controls.maxDistance=48;this.controls.maxPolarAngle=Math.PI*.48;this.controls.enablePan=false;
    this.scene.add(new THREE.HemisphereLight('#E6EAF1','#414344',2));const sun=new THREE.DirectionalLight('#FFF0D8',2.5);sun.position.set(-8,18,10);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);Object.assign(sun.shadow.camera,{left:-10,right:10,top:10,bottom:-10});sun.shadow.normalBias=.03;this.scene.add(sun);
    this.scene.add(new THREE.AmbientLight('#B8CCD6',.3));
    this.raycaster=new THREE.Raycaster();this.pointer=new THREE.Vector2();
    this.renderer.domElement.addEventListener('pointerdown',e=>{this.down=[e.clientX,e.clientY];});
    this.renderer.domElement.addEventListener('pointerup',e=>{if(!this.down||Math.hypot(e.clientX-this.down[0],e.clientY-this.down[1])>5||!this.world)return;const r=host.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.raycaster.setFromCamera(this.pointer,this.camera);const hit=this.raycaster.intersectObjects(this.world.children,true).find(h=>h.object.userData.label);if(hit)onInspect(hit.object.userData.label);});
    this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);
    this.renderer.setAnimationLoop(()=>{if(document.hidden||!host.clientWidth||host.closest('[hidden]'))return;this.controls.update();this.renderer.render(this.scene,this.camera);});this.home();
  }
  setWorld(result){const next=buildIsland(result);if(this.world){this.scene.remove(this.world);disposeWorld(this.world);}this.world=next;this.scene.add(next);this.home();}
  home(){this.controls.reset();const aspect=this.host.clientWidth/Math.max(1,this.host.clientHeight);const distance=Math.max(16.5,13/Math.max(.35,aspect));this.camera.position.set(distance*.45,distance*.65,distance);this.controls.target.set(0,.25,0);this.controls.update();this.resize();}
  resize(){const w=this.host.clientWidth,h=this.host.clientHeight;if(!w||!h)return;this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h);}
  dispose(){this.observer.disconnect();this.controls.dispose();if(this.world)disposeWorld(this.world);this.renderer.setAnimationLoop(null);this.renderer.dispose();this.renderer.domElement.remove();}
}
