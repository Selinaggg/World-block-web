import * as THREE from '../../vendor/three.module.js';
import {TownWalker} from '../town/Walkability.js';
import {TOWN_SCALE as S} from '../town/scale.js';

const MOVE_KEYS=new Set(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight']);
/** An alternative camera over the existing scene. Never writes generation data. */
export class TownExploreController {
  constructor(orbitCamera,controls,canvas,onChange=()=>{}){
    this.orbitCamera=orbitCamera;this.controls=controls;this.canvas=canvas;this.onChange=onChange;
    this.camera=new THREE.PerspectiveCamera(S.fieldOfView,1,S.nearPlane,150);
    this.mode='diorama';this.keys=new Set();this.abort=new AbortController();
    const listen=(target,type,fn)=>target.addEventListener(type,fn,{signal:this.abort.signal});
    listen(document,'keydown',e=>{
      if(this.mode!=='explore'||this.transition)return;
      if(e.code==='Escape'){this.release();return;}
      if(MOVE_KEYS.has(e.code)){e.preventDefault();this.keys.add(e.code);}
    });
    listen(document,'keyup',e=>this.keys.delete(e.code));
    listen(window,'blur',()=>this.release());
    listen(document,'visibilitychange',()=>{if(document.hidden)this.release();});
    listen(document,'pointerlockchange',()=>{this.keys.clear();this.drag=null;if(this.mode!=='explore'&&document.pointerLockElement===canvas)document.exitPointerLock();this.emit();});
    listen(document,'pointerlockerror',()=>this.pointerUnavailable());
    listen(canvas,'pointerdown',e=>{
      if(this.mode!=='explore'||this.transition)return;
      this.drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);
      if(e.pointerType==='mouse'&&!this.dragLook)this.requestPointer();
    });
    listen(document,'pointermove',e=>{
      if(this.mode!=='explore'||this.transition)return;
      const locked=document.pointerLockElement===canvas;
      if(!locked&&(!this.drag||this.drag.id!==e.pointerId))return;
      const dx=locked?e.movementX:e.clientX-this.drag.x,dy=locked?e.movementY:e.clientY-this.drag.y;
      if(this.drag){this.drag.x=e.clientX;this.drag.y=e.clientY;}
      this.yaw-=dx*.0025;this.pitch=Math.max(-1.35,Math.min(1.35,this.pitch-dy*.0025));
    });
    for(const event of ['pointerup','pointercancel','lostpointercapture'])listen(canvas,event,()=>{this.drag=null;});
  }
  setWorld(result){this.exit(true);this.result=result;this.walker=result.settlementPlan?.exploration?new TownWalker(result):null;}
  get available(){return !!this.result?.settlementPlan?.exploration?.defaultSpawn;}
  get active(){return this.mode!=='diorama';}
  get activeCamera(){return this.active?this.camera:this.orbitCamera;}
  emit(){this.onChange({mode:this.mode,transition:!!this.transition,locked:document.pointerLockElement===this.canvas,dragLook:!!this.dragLook,moved:!!this.moved,position:this.position,camera:this.activeCamera.position,ground:this.position?.y,collision:this.walker?.lastCollision||'',district:this.position?this.walker.district(this.position):''});}
  requestPointer(){
    if(!this.canvas.requestPointerLock||matchMedia('(pointer:coarse)').matches){this.dragLook=true;this.emit();return;}
    try{const request=this.canvas.requestPointerLock();request?.catch(()=>this.pointerUnavailable());}catch{this.pointerUnavailable();}
  }
  pointerUnavailable(){if(this.mode==='explore'&&!this.disposed){this.dragLook=true;this.emit();}}
  release(){this.keys.clear();this.drag=null;if(document.pointerLockElement===this.canvas)document.exitPointerLock();this.emit();}
  hold(code,down){if(this.mode==='explore'&&!this.transition){if(down)this.keys.add(code);else this.keys.delete(code);}}
  enter(){
    if(!this.available||this.active)return false;
    // Drain orbit damping once so the preserved overview does not drift after returning.
    const damping=this.controls.enableDamping;this.controls.enableDamping=false;this.controls.update();this.controls.enableDamping=damping;this.controls.enabled=false;
    const spawn=this.result.settlementPlan.exploration.defaultSpawn;
    this.position={x:spawn.x,y:spawn.y,z:spawn.z};this.yaw=spawn.yaw;this.pitch=-.015;this.moved=false;this.keys.clear();
    this.gaitPhase=0;this.gaitWeight=0;this.eyeY=spawn.y+S.eyeHeight;this.motionPreference=matchMedia('(prefers-reduced-motion:reduce)');
    this.mode='explore';this.camera.copy(this.orbitCamera);this.camera.near=S.nearPlane;
    const end=new THREE.Vector3(spawn.x,spawn.y+S.eyeHeight,spawn.z),rotation=new THREE.Quaternion().setFromEuler(new THREE.Euler(this.pitch,this.yaw,0,'YXZ'));
    this.beginTransition(end,rotation,S.fieldOfView,()=>{this.transition=null;this.emit();});
    this.requestPointer();this.emit();return true;
  }
  beginTransition(position,rotation,fov,done){
    this.transition={start:performance.now(),duration:matchMedia('(prefers-reduced-motion:reduce)').matches?0:950,from:this.camera.position.clone(),to:position.clone(),rotationFrom:this.camera.quaternion.clone(),rotationTo:rotation.clone(),fovFrom:this.camera.fov,fovTo:fov,done};
  }
  exit(immediate=false){
    if(!this.active)return;
    this.release();
    const finish=()=>{this.mode='diorama';this.transition=null;this.controls.enabled=true;this.emit();};
    if(immediate){finish();return;}
    this.mode='returning';this.beginTransition(this.orbitCamera.position,this.orbitCamera.quaternion,this.orbitCamera.fov,finish);this.emit();
  }
  update(dt,now){
    if(!this.active)return;
    if(this.transition){const t=this.transition,p=t.duration?Math.min(1,(now-t.start)/t.duration):1,e=p*p*(3-2*p);
      this.camera.position.lerpVectors(t.from,t.to,e);this.camera.quaternion.slerpQuaternions(t.rotationFrom,t.rotationTo,e);this.camera.fov=t.fovFrom+(t.fovTo-t.fovFrom)*e;this.camera.updateProjectionMatrix();if(p===1)t.done();return;}
    const has=(...keys)=>keys.some(k=>this.keys.has(k)),forward=Number(has('KeyW','ArrowUp'))-Number(has('KeyS','ArrowDown')),side=Number(has('KeyD','ArrowRight'))-Number(has('KeyA','ArrowLeft'));
    const len=Math.hypot(forward,side),speed=has('ShiftLeft','ShiftRight')?S.fastSpeed:S.walkSpeed;
    const stepDt=Math.max(0,Math.min(dt,.05));let travelled=0;
    if(len){const amount=Math.min(dt,.05)*speed/len,dx=(-Math.sin(this.yaw)*forward+Math.cos(this.yaw)*side)*amount,dz=(-Math.cos(this.yaw)*forward-Math.sin(this.yaw)*side)*amount;
      const previous=this.position;this.position=this.walker.move(previous,dx,dz);travelled=Math.hypot(previous.x-this.position.x,previous.z-this.position.z);if(travelled>.00001)this.moved=true;}
    // Footfall cadence follows actual distance, so blocked movement never bobs in place.
    const reduced=this.motionPreference.matches,walking=travelled>.00001;
    if(walking&&!reduced)this.gaitPhase=(this.gaitPhase+travelled/S.gaitStride*Math.PI*2)%(Math.PI*2);
    const intensity=walking?Math.min(1.2,travelled/Math.max(.0001,stepDt*S.walkSpeed)):0;
    this.gaitWeight=reduced?0:THREE.MathUtils.lerp(this.gaitWeight,intensity,1-Math.exp(-12*stepDt));
    if(this.gaitWeight<.0001)this.gaitWeight=0;
    const sway=Math.sin(this.gaitPhase)*S.gaitSway*this.gaitWeight;
    const lift=Math.sin(this.gaitPhase*2)*S.gaitLift*this.gaitWeight;
    this.eyeY=THREE.MathUtils.lerp(this.eyeY,this.position.y+S.eyeHeight,1-Math.exp(-18*stepDt));
    this.camera.position.set(this.position.x+Math.cos(this.yaw)*sway,this.eyeY+lift,this.position.z-Math.sin(this.yaw)*sway);
    this.camera.rotation.set(this.pitch,this.yaw,Math.sin(this.gaitPhase)*.003*this.gaitWeight,'YXZ');
    if(!this.lastEmit||now-this.lastEmit>200){this.lastEmit=now;this.emit();}
  }
  resize(aspect){this.camera.aspect=aspect;this.camera.updateProjectionMatrix();}
  dispose(){this.disposed=true;this.exit(true);this.abort.abort();}
}
