import * as THREE from 'three';

export function createAtmosphere(scene,renderer){
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.12;
  scene.background=new THREE.Color('#788f9a');
  scene.fog=new THREE.Fog('#536e79',14,58);
  renderer.shadowMap.type=THREE.VSMShadowMap;
  const time={value:0};
  const skyMaterial=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,fog:false,
    uniforms:{time},vertexShader:`varying vec3 direction;void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,
    fragmentShader:`varying vec3 direction;uniform float time;
      float hash(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
      float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
        return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
      float cloud(vec3 p){return noise(p)*.57+noise(p*2.07)*.27+noise(p*4.13)*.12+noise(p*8.17)*.04;}
      void main(){
        vec3 d=normalize(direction);float h=smoothstep(-.78,.65,d.y);
        vec3 color=mix(vec3(.095,.15,.17),vec3(.012,.035,.075),h);
        float glow=pow(max(0.,dot(d,normalize(vec3(-.6,.12,-.8)))),7.);
        color+=vec3(.10,.057,.02)*glow;
        float c=cloud(d*vec3(3.5,12.,3.5)+vec3(time*.003,0.,0.));
        float haze=smoothstep(.48,.72,c)*smoothstep(-.85,-.2,d.y)*(1.-smoothstep(.38,.8,d.y));
        color=mix(color,vec3(.14,.19,.20),haze*.25);
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`});
  const sky=new THREE.Mesh(new THREE.SphereGeometry(90,48,28),skyMaterial);scene.add(sky);
  const hemi=new THREE.HemisphereLight('#c0d6e3','#55504c',1.75);scene.add(hemi);
  const sun=new THREE.DirectionalLight('#ffe1b7',1.8);sun.position.set(-7,10,5);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);
  Object.assign(sun.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:.5,far:70});sun.shadow.normalBias=.025;sun.shadow.radius=5;sun.shadow.blurSamples=8;scene.add(sun);
  const fill=new THREE.DirectionalLight('#8fb9c9',1.65);fill.position.set(4,5,-8);scene.add(fill);
  const positions=[];for(let i=0;i<160;i++){const h=v=>{const x=Math.sin(i*127.1+v*311.7)*43758.5453;return x-Math.floor(x);};positions.push((h(1)-.5)*40,.8+h(2)*13,(h(3)-.5)*40);}
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  const dustMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:{time},
    vertexShader:`uniform float time;void main(){vec3 p=position;p.x+=sin(time*.035+position.z)*.3;p.y+=sin(time*.07+position.x)*.15;vec4 view=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*view;gl_PointSize=clamp(24./-view.z,1.,2.5);}`,
    fragmentShader:`void main(){float r=length(gl_PointCoord-.5);gl_FragColor=vec4(.85,.85,.70,smoothstep(.5,.05,r)*.12);}`});
  const dust=new THREE.Points(geometry,dustMaterial);scene.add(dust);
  const started=performance.now();
  const reduced=typeof window!=='undefined'&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return {tick:()=>{time.value=reduced?0:(performance.now()-started)/1000;},dispose:()=>{sky.geometry.dispose();skyMaterial.dispose();geometry.dispose();dustMaterial.dispose();sun.shadow.map?.dispose();for(const o of [sky,hemi,sun,fill,dust])scene.remove(o);}};
}
