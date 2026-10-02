import * as THREE from '../../vendor/three.module.js';
import {OrbitControls} from '../../vendor/OrbitControls.js';
import {DreamExploreController} from './DreamExploreController.js';
import {dreamVertexShader,dreamFragmentShader} from './DreamParticleSystem.js';
import {sampleFields} from './DreamFieldGenerator.js';
export class DreamScene{
  constructor(host,{onChange=()=>{},onReveal=()=>{}}={}){
    this.host=host;this.onReveal=onReveal;this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#030408');this.motion=matchMedia('(prefers-reduced-motion:reduce)');
    this.renderer=new THREE.WebGLRenderer({antialias:false,alpha:false});this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));this.renderer.outputColorSpace=THREE.SRGBColorSpace;host.append(this.renderer.domElement);
    this.renderer.domElement.setAttribute('role','img');this.renderer.domElement.setAttribute('aria-label','Dreamscape particle environment. Drag to orbit, scroll to zoom.');
    this.camera=new THREE.PerspectiveCamera(49,1,.06,200);this.camera.position.set(23,22,30);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enableDamping=true;this.controls.minDistance=5;this.controls.maxDistance=100;this.controls.maxPolarAngle=Math.PI*.49;this.controls.enablePan=false;
    this.explore=new DreamExploreController(this.camera,this.controls,this.renderer.domElement,onChange);
    this.observer=new ResizeObserver(()=>this.resize());this.observer.observe(host);this.resize();let last=performance.now();this.time=0;
    this.renderer.setAnimationLoop(now=>{
      const dt=Math.min(.045,Math.max(0,(now-last)/1000));last=now;if(document.hidden||host.hidden)return;
      this.time+=dt;
      if(this.material){this.material.uniforms.uTime.value=this.time;this.material.uniforms.uMotion.value=this.motion.matches?0:1;
        if(this.revealing){const p=this.motion.matches?1:Math.min(1,(this.time-this.revealStart)/2.8);this.material.uniforms.uReveal.value=p*1.12;this.onReveal(p);if(p===1)this.revealing=false;}}
      this.explore.update(dt,now,this.motion.matches);if(!this.explore.active)this.controls.update();this.renderer.render(this.scene,this.camera);
    });
  }
  resize(){const w=this.host.clientWidth,h=this.host.clientHeight;if(!w||!h)return;this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.setSize(w,h);if(this.material)this.material.uniforms.uScale.value=h*.25;}
  setWorld(result){
    this.explore.exit(true);this.result=result;
    if(this.points){this.scene.remove(this.points);this.points.geometry.dispose();this.material.dispose();}
    this.setDebug('');
    const p=result.particles,g=new THREE.BufferGeometry();
    g.setAttribute('position',new THREE.BufferAttribute(p.positions,3));g.setAttribute('color',new THREE.BufferAttribute(p.colors,3));g.setAttribute('motion',new THREE.BufferAttribute(p.motion,4));g.setAttribute('flow',new THREE.BufferAttribute(p.flow,3));g.computeBoundingSphere();
    this.material=new THREE.ShaderMaterial({vertexShader:dreamVertexShader,fragmentShader:dreamFragmentShader,transparent:true,depthWrite:false,blending:THREE.NormalBlending,uniforms:{uTime:{value:0},uReveal:{value:0},uPixelRatio:{value:this.renderer.getPixelRatio()},uScale:{value:this.host.clientHeight*.25},uMotion:{value:1}}});
    this.points=new THREE.Points(g,this.material);this.points.frustumCulled=false;this.scene.add(this.points);this.revealStart=this.time;this.revealing=true;
    this.explore.setNavigation(result.navigationPlan);this.home();
  }
  home(){
    if(!this.result)return;this.explore.exit(true);
    const box=new THREE.Box3().setFromBufferAttribute(this.points.geometry.attributes.position),center=box.getCenter(new THREE.Vector3());
    const direction=new THREE.Vector3(.48,.48,.92).normalize(),right=new THREE.Vector3(direction.z,0,-direction.x).normalize(),up=new THREE.Vector3().crossVectors(direction,right),tan=Math.tan(THREE.MathUtils.degToRad(this.camera.fov/2));
    center.y+=.45;let d=12;
    // Fit the point cloud itself. A diagonal route leaves large empty corners in
    // its bounding box; fitting that box would unnecessarily shrink the dream.
    const positions=this.points.geometry.attributes.position;
    for(let i=0;i<positions.count;i++){
      const x=positions.getX(i)-center.x,y=positions.getY(i)-center.y,z=positions.getZ(i)-center.z;
      const depth=x*direction.x+y*direction.y+z*direction.z;
      d=Math.max(d,depth+Math.abs(x*right.x+y*right.y+z*right.z)/(tan*this.camera.aspect*.88),depth+Math.abs(x*up.x+y*up.y+z*up.z)/(tan*.69));
    }
    this.controls.target.copy(center);this.camera.position.copy(center).addScaledVector(direction,d);this.controls.update();
  }
  setDebug(field){
    if(this.debug){this.scene.remove(this.debug);this.debug.geometry.dispose();this.debug.material.dispose();this.debug=null;}
    if(!field||!this.result)return;
    const pos=[],colors=[],palette={stability:'#D8ECFF',structure:'#438CFF',emotion:'#EC5ACE',attraction:'#55F1EE',distortion:'#FF365E'},c=new THREE.Color(palette[field]);
    for(let x=-20;x<=20;x+=.6)for(let z=-18;z<=18;z+=.6){const v=sampleFields(this.result.fieldData,x,z)[field],b=Math.min(1,v/2.5);pos.push(x,.08+Math.min(4,v),z);colors.push(c.r*b,c.g*b,c.b*b);}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    this.debug=new THREE.Points(g,new THREE.PointsMaterial({size:.16,vertexColors:true,transparent:true,opacity:.9,depthTest:false}));this.scene.add(this.debug);
  }
  dispose(){this.explore.dispose();this.controls.dispose();this.observer.disconnect();this.renderer.setAnimationLoop(null);this.points?.geometry.dispose();this.material?.dispose();this.renderer.dispose();}
}
