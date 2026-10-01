import * as THREE from '../../vendor/three.module.js';
import { OrbitControls } from '../../vendor/OrbitControls.js';
import { ELEMENTS, MODEL_CONFIG } from '../config.js';

export class WorldScene {
  constructor(host, model, callbacks = {}) {
    this.host=host;this.model=model;this.callbacks=callbacks;this.meshes=new Map();this.selected=null;this.editable=true;
    this.scene=new THREE.Scene();this.motionPreference=matchMedia('(prefers-reduced-motion: reduce)');this.lastInteraction=performance.now();this.pointerInside=false;this.userOrbit=false;
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
    this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.setClearColor('#0B0D12',0);
    host.append(this.renderer.domElement);this.renderer.domElement.setAttribute('aria-label','Interactive WorldBlocks model. Select a module to edit, drag empty space to orbit, and scroll to zoom.');
    this.renderer.domElement.setAttribute('role','img');
    this.camera=new THREE.OrthographicCamera(-9,9,9,-9,0.1,100);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement);
    this.controls.enableDamping=true;this.controls.enablePan=false;this.controls.minZoom=.65;this.controls.maxZoom=2.7;
    this.controls.minPolarAngle=.12;this.controls.maxPolarAngle=Math.PI*.49;
    this.home();
    this.scene.add(new THREE.HemisphereLight('#E4EAF3','#333B4A',1.75));
    const light=new THREE.DirectionalLight('#F4F1EA',2.8);light.position.set(-8,18,10);light.castShadow=true;
    light.shadow.mapSize.set(2048,2048);Object.assign(light.shadow.camera,{left:-10,right:10,top:13,bottom:-10,near:1,far:45});
    light.shadow.normalBias=.03;light.shadow.bias=-.00015;light.shadow.radius=4;this.scene.add(light);
    this.fillLight=new THREE.DirectionalLight('#B5C3DE',1.1);this.fillLight.position.set(7,8,-7);this.scene.add(this.fillLight);this.lightTarget=new THREE.Vector3(7,8,-7);
    const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({opacity:.10}));
    floor.rotation.x=-Math.PI/2;floor.position.y=-.035;floor.receiveShadow=true;this.scene.add(floor);
    this.materials=Object.fromEntries(Object.entries(callbacks.elements||ELEMENTS).map(([type,s])=>[type,new THREE.MeshStandardMaterial({color:s.color,roughness:.53,metalness:.13,flatShading:true})]));
    const baseMat=new THREE.MeshStandardMaterial({color:MODEL_CONFIG.baseColor,roughness:.48,metalness:.18,flatShading:true,polygonOffset:true,polygonOffsetFactor:1,polygonOffsetUnits:1});
    const edgeMat=new THREE.LineBasicMaterial({color:MODEL_CONFIG.baseEdgeColor,transparent:true,opacity:MODEL_CONFIG.baseEdgeOpacity,depthWrite:false,toneMapped:false});
    for(const piece of model.fixed){ const mesh=new THREE.Mesh(piece.geometry,baseMat);mesh.position.copy(piece.center);mesh.castShadow=true;mesh.receiveShadow=true;
      const edges=new THREE.LineSegments(new THREE.EdgesGeometry(piece.geometry,MODEL_CONFIG.baseEdgeAngle),edgeMat);
      edges.renderOrder=1;mesh.add(edges);this.scene.add(mesh); }
    this.outline=new THREE.Box3Helper(new THREE.Box3(),new THREE.Color('#C6D1E1'));this.outline.visible=false;this.scene.add(this.outline);
    this.raycaster=new THREE.Raycaster();this.pointer=new THREE.Vector2();this.dragPlane=new THREE.Plane();this.intersection=new THREE.Vector3();
    this.controls.autoRotateSpeed=.16;
    this.controls.addEventListener('start',()=>{this.userOrbit=true;this.lastInteraction=performance.now();});
    this.controls.addEventListener('end',()=>{this.userOrbit=false;this.lastInteraction=performance.now();});
    this.renderer.domElement.addEventListener('pointerenter',()=>{this.pointerInside=true;this.lastInteraction=performance.now();});
    this.renderer.domElement.addEventListener('pointerleave',()=>{this.pointerInside=false;this.lastInteraction=performance.now();this.lightTarget.set(7,8,-7);});
    this.renderer.domElement.addEventListener('pointerdown',e=>this.pointerDown(e),true);
    this.renderer.domElement.addEventListener('pointermove',e=>this.pointerMove(e));
    for(const event of ['pointerup','pointercancel','lostpointercapture'])this.renderer.domElement.addEventListener(event,e=>this.pointerUp(e));
    this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);
    this.sync({blocks:[]});this.resize();
    let previous=performance.now();
    this.renderer.setAnimationLoop(now=>{
      const delta=Math.min((now-previous)/1000,.05);previous=now;
      const visible=!document.hidden&&!this.host.closest('[hidden]')&&this.host.getAttribute('aria-hidden')!=='true';
      this.controls.autoRotate=this.callbacks.idleMotion!==false&&visible&&!this.motionPreference.matches&&!this.selected&&!this.drag&&!this.pointerInside&&!this.userOrbit&&now-this.lastInteraction>10000;
      if(!visible)return;
      if(!this.motionPreference.matches)this.fillLight.position.lerp(this.lightTarget,1-Math.exp(-delta*2.5));
      this.controls.update(delta);this.renderer.render(this.scene,this.camera);
    });
  }
  home(){this.lastInteraction=performance.now();this.controls.autoRotate=false;const damping=this.controls.enableDamping;this.controls.enableDamping=false;this.controls.update();const top=Math.max(this.model.metadata.baseSurfaceY,...[...this.meshes.values()].map(m=>m.position.y+this.model.metadata.moduleHeight/2));const targetY=top/2;this.viewHalf=Math.max(4.65,top*.56);this.camera.position.set(8,targetY+14,20);this.controls.target.set(0,targetY,0);this.camera.zoom=1;this.camera.updateProjectionMatrix();this.controls.update();this.controls.enableDamping=damping;this.resize();}
  resize(){const w=this.host.clientWidth,h=this.host.clientHeight;if(!w||!h)return;const aspect=w/h,half=Math.max(this.viewHalf||4.65,(this.callbacks.frameWidth||5.8)/aspect);this.camera.left=-half*aspect;this.camera.right=half*aspect;this.camera.top=half;this.camera.bottom=-half;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h);}
  sync(state){
    const ids=new Set(state.blocks.map(b=>b.id));
    for(const [id,mesh] of this.meshes)if(!ids.has(id)){this.scene.remove(mesh);if(mesh.userData.attentionEdges){mesh.userData.attentionEdges.geometry.dispose();mesh.userData.attentionEdges.material.dispose();}this.meshes.delete(id);}
    for(const block of state.blocks){let mesh=this.meshes.get(block.id);if(!mesh){const geometry=this.model.geometries.get(block.id)||this.model.geometries.values().next().value;mesh=new THREE.Mesh(geometry,this.materials[block.type]);mesh.userData.id=block.id;mesh.castShadow=true;mesh.receiveShadow=true;this.scene.add(mesh);this.meshes.set(block.id,mesh);}mesh.material=this.materials[block.type];
      const needsAttention=!!block.physical?.needsAttention;
      if(needsAttention&&!mesh.userData.attentionEdges){const edges=new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry,20),new THREE.LineBasicMaterial({color:'#A87533',depthTest:true}));mesh.add(edges);mesh.userData.attentionEdges=edges;}
      if(mesh.userData.attentionEdges)mesh.userData.attentionEdges.visible=needsAttention;
      mesh.position.set(block.position.x,block.position.y,block.position.z);mesh.rotation.set(block.rotation.x,block.rotation.y,block.rotation.z);}
    this.setSelected(this.selected);
  }
  setSelected(id){if(id!==this.selected)this.lastInteraction=performance.now();this.selected=id;const mesh=this.meshes.get(id);this.outline.visible=!!mesh;if(mesh){mesh.updateMatrixWorld();this.outline.box.setFromObject(mesh).expandByScalar(.055);}}
  setEditable(value){this.editable=value;if(!value)this.pointerUp();}
  ray(e){const r=this.renderer.domElement.getBoundingClientRect();this.pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);this.raycaster.setFromCamera(this.pointer,this.camera);}
  pointerDown(e){
    if(!this.editable||e.button!==0)return;this.ray(e);const hit=this.raycaster.intersectObjects([...this.meshes.values()],false)[0];
    this.down={x:e.clientX,y:e.clientY};if(!hit)return;
    e.stopImmediatePropagation();this.controls.enabled=false;
    this.renderer.domElement.setPointerCapture(e.pointerId);
    const mesh=hit.object;this.drag={id:mesh.userData.id,pointerId:e.pointerId,offset:new THREE.Vector3(),moved:false};
    this.dragPlane.setFromNormalAndCoplanarPoint(new THREE.Vector3(0,1,0),mesh.position);
    if(this.raycaster.ray.intersectPlane(this.dragPlane,this.intersection))this.drag.offset.copy(mesh.position).sub(this.intersection);
    this.callbacks.select?.(this.drag.id);this.host.classList.add('dragging');
  }
  pointerMove(e){
    if(!this.motionPreference.matches){const r=this.renderer.domElement.getBoundingClientRect();this.lightTarget.set(7+(e.clientX-r.left)/r.width*3,8+(1-(e.clientY-r.top)/r.height)*2,-7);}
    if(!this.drag)return;if(Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)<4&&!this.drag.moved)return;
    this.drag.moved=true;this.ray(e);
    if(this.raycaster.ray.intersectPlane(this.dragPlane,this.intersection))this.callbacks.move?.(this.drag.id,{x:this.intersection.x+this.drag.offset.x,z:this.intersection.z+this.drag.offset.z});
  }
  pointerUp(e){
    if(this.drag){const id=this.drag.pointerId;this.drag=null;if(this.renderer.domElement.hasPointerCapture(id))this.renderer.domElement.releasePointerCapture(id);}
    else if(e?.type==='pointerup'&&this.editable&&this.down&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)<4)this.callbacks.select?.(null);
    this.down=null;this.controls.enabled=true;this.host.classList.remove('dragging');
  }
  showRelationship(pair){
    if(this.relationship){this.scene.remove(this.relationship);this.relationship.geometry.dispose();this.relationship.material.dispose();this.relationship=null;}
    if(!pair)return;const a=this.meshes.get(pair.a),b=this.meshes.get(pair.b);if(!a||!b)return;
    const geometry=new THREE.BufferGeometry().setFromPoints([a.position,b.position]);
    this.relationship=new THREE.Line(geometry,new THREE.LineDashedMaterial({color:'#505b51',dashSize:.12,gapSize:.08,depthTest:false,transparent:true,opacity:.8}));this.relationship.computeLineDistances();this.scene.add(this.relationship);
  }
  snapshot(){this.renderer.render(this.scene,this.camera);return this.renderer.domElement.toDataURL('image/png');}
}
