import React,{useEffect,useRef} from 'react';
import * as T from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {ConvexGeometry} from 'three/addons/geometries/ConvexGeometry.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {createWorld} from './world.js';
import {VERTICES} from './polyhedron.mjs';
import {dispose,material,mesh} from './drawing.js';
import {META,TYPES} from './rules.mjs';
import {worldPosition,shouldAutoFrame} from './scenePlacement.mjs';

export default function Scene({model,monitor=false,reset=0,onError}){
  const host=useRef(null),engine=useRef(null),latest=useRef(model);latest.current=model;
  useEffect(()=>{
    const mount=host.current,scene=new T.Scene();let renderer,world,composer,bloom,controls,observer,frame=0;
    try{
      renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio,monitor?1.5:1.75));renderer.shadowMap.enabled=!monitor;renderer.shadowMap.type=META.kind==='architecture'?T.VSMShadowMap:T.PCFSoftShadowMap;
      renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=META.kind==='ocean'?1.05:1.02;
      mount.appendChild(renderer.domElement);
      const camera=new T.PerspectiveCamera(monitor?38:36,1,.1,180);
      controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.065;controls.enablePan=!monitor;controls.minDistance=monitor?3:5;controls.maxDistance=85;controls.maxPolarAngle=Math.PI*.475;controls.minPolarAngle=.12;
      const root=new T.Group();scene.add(root);
      const entries=new Map();let elapsed=0,previousTime=performance.now(),framed=false,lastModel;
      if(monitor){scene.background=new T.Color('#10171b');scene.add(new T.HemisphereLight('#ffffff','#334047',2.5));const key=new T.DirectionalLight('#ffffff',3);key.position.set(4,8,6);scene.add(key);}
      else world=createWorld(scene,root,renderer);
      const frameModel=()=>{
        const b=latest.current.bounds,scale=monitor?1.44:world.spacing;
        const size=Math.max(b.width,b.depth,b.height+2)*scale;
        const distance=Math.max(monitor?8:META.kind==='ocean'?17:12,size*(META.kind==='ocean'&&!monitor?1.08:monitor?1.7:1.4))*(camera.aspect<1?1/camera.aspect*.75:1);
        const targetY=monitor?.7:META.kind==='ocean'?1.7:Math.max(.8,b.height*.66);
        const [targetX,,targetZ]=worldPosition({x:b.cx,y:0,z:b.cz},scale);
        controls.target.set(targetX,targetY,targetZ);
        camera.position.set(targetX+distance*(META.kind==='ocean'&&!monitor?.38:.66),targetY+distance*(META.kind==='ocean'&&!monitor?.32:.62),targetZ+distance*.92);
        controls.update();framed=true;
      };
      const sync=next=>{
        const autoFrame=shouldAutoFrame(framed,lastModel?.nodes.length||0,next.nodes.length);lastModel=next;const spacing=monitor?1.44:world.spacing;
        const ids=new Set(next.nodes.map(n=>n.id));
        for(const [id,entry] of entries)if(!ids.has(id)){entry.removing=true;entries.delete(id);retiring.push(entry);}
        for(const n of next.nodes){const signature=JSON.stringify(n);const existing=entries.get(n.id);if(existing?.signature===signature)continue;
          if(existing){root.remove(existing.object);dispose(existing.object);entries.delete(n.id);}
          let object;
          if(monitor){object=new T.Group();mesh(object,new ConvexGeometry(VERTICES.map(v=>new T.Vector3(...v).multiplyScalar(.34))),material(TYPES[Number(n.code[1])].color));}
          else object=world.build(n,next);
          object.position.set(...worldPosition(n,spacing,monitor?.72:world.baseY));object.scale.setScalar(.01);root.add(object);entries.set(n.id,{object,signature,birth:elapsed});
        }
        world?.update?.(next);if(autoFrame)frameModel();
      };
      const retiring=[];
      function resize(){const w=mount.clientWidth,h=mount.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();composer?.setSize(w,h);}
      if(!monitor&&META.kind==='ocean'){
        composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
        bloom=new UnrealBloomPass(new T.Vector2(1,1),.32,.65,1.15);composer.addPass(bloom);composer.addPass(new OutputPass());
      }
      observer=new ResizeObserver(resize);observer.observe(mount);resize();
      engine.current={sync,frameModel};sync(latest.current);
      const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      function render(now){frame=requestAnimationFrame(render);const dt=Math.min((now-previousTime)/1000,.05);previousTime=now;elapsed+=dt;
        controls.update();
        for(const e of entries.values()){const s=Math.min(1,(elapsed-e.birth)/.5);e.object.scale.setScalar(1-Math.pow(1-s,3));e.object.userData.tick?.(reduced?0:elapsed,dt);}
        for(let i=retiring.length-1;i>=0;i--){const e=retiring[i];e.object.scale.multiplyScalar(Math.exp(-dt*12));if(e.object.scale.x<.025){root.remove(e.object);dispose(e.object);retiring.splice(i,1);}}
        world?.tick?.(reduced?0:elapsed,dt);if(composer)composer.render();else renderer.render(scene,camera);
      }
      frame=requestAnimationFrame(render);
      const contextLost=e=>{e.preventDefault();onError?.('The graphics context was interrupted. Reload this page to restore the scene.');};
      renderer.domElement.addEventListener('webglcontextlost',contextLost);
      return()=>{cancelAnimationFrame(frame);observer.disconnect();controls.dispose();world?.dispose?.();dispose(scene);bloom?.dispose();composer?.dispose();renderer.dispose();renderer.domElement.remove();engine.current=null;};
    }catch(error){onError?.('This scene needs WebGL. Try reopening it in Chrome or another browser.');cancelAnimationFrame(frame);observer?.disconnect();controls?.dispose();dispose(scene);renderer?.dispose();renderer?.domElement.remove();}
  },[monitor]);
  useEffect(()=>{engine.current?.sync(model);},[model]);
  useEffect(()=>{if(reset)engine.current?.frameModel();},[reset]);
  return <div className="canvas-host" ref={host} aria-label={monitor?'Digital block reconstruction':'Interactive rendered world'}/>;
}
