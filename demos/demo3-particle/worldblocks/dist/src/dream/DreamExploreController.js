import * as THREE from '../../vendor/three.module.js';
import {moveInDream} from './DreamNavigationPlanner.js';
import {DREAM_CONFIG as C} from './config.js';
const MOVEMENT=new Set(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight']);
export class DreamExploreController{
  constructor(camera,controls,canvas,onChange){
    Object.assign(this,{camera,controls,canvas,onChange,keys:new Set(),active:false,yaw:0,pitch:0,gait:0});
    this.abort=new AbortController();const listen=(o,e,f)=>o.addEventListener(e,f,{signal:this.abort.signal});
    listen(document,'keydown',e=>{if(!this.active||this.transition||e.target?.closest?.('input,select,textarea'))return;if(e.code==='Escape'){this.release();return;}if(MOVEMENT.has(e.code)){e.preventDefault();this.keys.add(e.code);}});
    listen(document,'keyup',e=>this.keys.delete(e.code));
    listen(window,'blur',()=>this.release());listen(document,'visibilitychange',()=>{if(document.hidden)this.release();});
    listen(document,'pointerlockchange',()=>{this.keys.clear();this.drag=null;this.onChange();});
    listen(document,'pointerlockerror',()=>{this.dragLook=true;this.onChange();});
    listen(canvas,'pointerdown',e=>{if(!this.active||this.transition)return;this.drag={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);
      if(e.pointerType==='mouse'&&!this.dragLook)this.requestPointer();});
    listen(document,'pointermove',e=>{
      if(!this.active||this.transition)return;const locked=document.pointerLockElement===canvas;
      if(!locked&&this.drag?.id!==e.pointerId)return;
      const dx=locked?e.movementX:e.clientX-this.drag.x,dy=locked?e.movementY:e.clientY-this.drag.y;
      if(this.drag){this.drag.x=e.clientX;this.drag.y=e.clientY;}
      this.yaw-=dx*.0022;this.pitch=THREE.MathUtils.clamp(this.pitch-dy*.0022,-1.3,1.3);
    });
    for(const event of ['pointerup','pointercancel','lostpointercapture'])listen(canvas,event,()=>this.drag=null);
  }
  requestPointer(){if(!this.canvas.requestPointerLock||matchMedia('(pointer:coarse)').matches){this.dragLook=true;return;}
    try{this.canvas.requestPointerLock()?.catch(()=>{this.dragLook=true;this.onChange();});}catch{this.dragLook=true;}}
  release(){this.keys.clear();this.drag=null;if(document.pointerLockElement===this.canvas)document.exitPointerLock();}
  setNavigation(nav){this.exit(true);this.nav=nav;}
  hold(code,down){if(!this.active||this.transition)return;if(down)this.keys.add(code);else this.keys.delete(code);}
  enter(){
    if(!this.nav||this.active)return;
    const damping=this.controls.enableDamping;this.controls.enableDamping=false;this.controls.update();this.controls.enableDamping=damping;
    this.saved={position:this.camera.position.clone(),quaternion:this.camera.quaternion.clone(),target:this.controls.target.clone()};
    this.controls.enabled=false;this.active=true;this.position={x:this.nav.spawn.x,y:this.nav.spawn.y,z:this.nav.spawn.z};this.yaw=this.nav.spawn.yaw;this.pitch=0;this.gait=0;
    this.transitionTo(new THREE.Vector3(this.position.x,C.eyeHeight+this.position.y,this.position.z),new THREE.Quaternion().setFromEuler(new THREE.Euler(0,this.yaw,0,'YXZ')));
    this.onChange();
  }
  transitionTo(position,rotation,done=()=>{}){this.transition={start:performance.now(),duration:matchMedia('(prefers-reduced-motion:reduce)').matches?0:1100,from:this.camera.position.clone(),to:position,fromRotation:this.camera.quaternion.clone(),rotation,done};}
  exit(immediate=false){
    if(!this.active)return;this.release();const done=()=>{this.active=false;this.controls.enabled=true;this.controls.target.copy(this.saved.target);this.onChange();};
    if(immediate){this.camera.position.copy(this.saved.position);this.camera.quaternion.copy(this.saved.quaternion);this.transition=null;done();}
    else {this.transitionTo(this.saved.position,this.saved.quaternion,done);this.onChange();}
  }
  update(dt,now,reduced){
    if(!this.active)return;
    if(this.transition){const t=this.transition,p=t.duration?Math.min(1,(now-t.start)/t.duration):1,e=p*p*(3-2*p);this.camera.position.lerpVectors(t.from,t.to,e);this.camera.quaternion.slerpQuaternions(t.fromRotation,t.rotation,e);if(p===1){this.transition=null;t.done();this.onChange();}return;}
    const has=(...k)=>k.some(v=>this.keys.has(v)),f=Number(has('KeyW','ArrowUp'))-Number(has('KeyS','ArrowDown')),s=Number(has('KeyD','ArrowRight'))-Number(has('KeyA','ArrowLeft')),l=Math.hypot(f,s);
    let d=0;if(l){const amount=dt*(has('ShiftLeft','ShiftRight')?C.fastSpeed:C.walkSpeed)/l,old=this.position;
      this.position=moveInDream(this.nav,old,(-Math.sin(this.yaw)*f+Math.cos(this.yaw)*s)*amount,(-Math.cos(this.yaw)*f-Math.sin(this.yaw)*s)*amount);d=Math.hypot(this.position.x-old.x,this.position.z-old.z);}
    this.gait+=d*7;const weight=reduced?0:Math.min(1,d/Math.max(.001,dt*C.walkSpeed));
    this.camera.position.set(this.position.x,C.eyeHeight+this.position.y+Math.sin(this.gait*2)*.055*weight,this.position.z);this.camera.rotation.set(this.pitch,this.yaw,Math.sin(this.gait)*.002*weight,'YXZ');
  }
  dispose(){this.exit(true);this.abort.abort();}
}
