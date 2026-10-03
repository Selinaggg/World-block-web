import * as T from 'three';
import {reefGeometry,reefPrimitives,reefField} from './reef-surface.mjs';
import {reefMaterial} from './reef-material.mjs';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
import {mesh,ball,rod,tube,material,rng,batch,dispose} from './drawing.js';

const SPACING=2.45;
function stoneTexture(){
  const size=64,data=new Uint8Array(size*size*4),random=rng('porous-stone');
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){const i=(y*size+x)*4,value=Math.round(120+Math.sin(x*.8+Math.cos(y*.4))*22+random()*70);data[i]=data[i+1]=data[i+2]=value;data[i+3]=255;}
  const texture=new T.DataTexture(data,size,size,T.RGBAFormat);texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.repeat.set(3,3);texture.magFilter=T.LinearFilter;texture.needsUpdate=true;return texture;
}
function rock(group,random,x,y,z,s=1,color='#476d79'){
  const geometry=mergeVertices(new T.IcosahedronGeometry(1,4)),p=geometry.attributes.position;
  for(let i=0;i<p.count;i++){const v=new T.Vector3().fromBufferAttribute(p,i);const f=1+.06*Math.sin(v.x*9+v.y*7+v.z*13)+.07*Math.cos(v.z*4-v.y*6);v.multiplyScalar(f);p.setXYZ(i,v.x,v.y,v.z);}geometry.computeVertexNormals();
  const m=mesh(group,geometry,material(color,{roughness:.97,bumpMap:stoneTexture(),bumpScale:.07}),x,y,z,[s*(.8+random()*.3),s*(.7+random()*.5),s*(.7+random()*.4)]);m.rotation.set(random()*.2,random()*6,random()*.2);return m;
}
function shellCoral(group,random,x,y,z,s=1){
  const outer=material('#88afb9',{side:T.DoubleSide,roughness:.62}),edge=material('#bcdddd',{roughness:.55,emissive:'#366c75',emissiveIntensity:.12});
  for(let j=0;j<9;j++){
    const leaf=new T.Group();leaf.position.set(x+(random()-.5)*s*.5,y,z+(random()-.5)*s*.5);leaf.rotation.y=j*2.4;leaf.rotation.z=(random()-.5)*.25;group.add(leaf);
    const shape=new T.Shape();shape.moveTo(0,0);const height=(.45+random()*.4)*s;
    shape.bezierCurveTo(-height*.65,height*.35,-height*.46,height*.95,0,height);shape.bezierCurveTo(height*.46,height*.95,height*.65,height*.35,0,0);
    mesh(leaf,new T.ShapeGeometry(shape,18),outer);
    const contour=shape.getPoints(24).map(p=>[p.x,p.y,.005]);tube(leaf,edge,contour,.012*s,40);
    rod(leaf,edge,[0,0,.015],[0,height*.85,.015],.007*s);
  }
}
function coral(group,random,x,y,z,scale=1,color='#79b5bd',glow=false){
  const m=material(color,{roughness:.65,emissive:glow?'#78e9e0':'#143e44',emissiveIntensity:glow?1.1:.08});
  const tip=material('#c5f8e6',{emissive:'#88f3d5',emissiveIntensity:glow?1.5:.2,roughness:.3});
  const branches=5;
  for(let i=0;i<branches;i++){
    const a=i*2.4+random(),h=(.45+random()*.5)*scale,r=(.13+random()*.16)*scale;
    const end=[x+Math.cos(a)*r,y+h,z+Math.sin(a)*r];
    tube(group,m,[[x,y,z],[x+Math.cos(a)*r*.25,y+h*.5,z+Math.sin(a)*r*.25],end],.042*scale,10);
    for(let j=0;j<2;j++){const q=[end[0]+Math.cos(a+j*2)*.22*scale,end[1]+.22*scale,end[2]+Math.sin(a+j*2)*.22*scale];rod(group,m,[end[0],end[1]-.2*scale,end[2]],q,.026*scale,.012*scale);ball(group,tip,...q,.034*scale,.045*scale,.034*scale,0);}
  }
}
function fan(group,random,x,y,z,s=1){
  const mat=material('#a3c8cd',{side:T.DoubleSide,roughness:.55,emissive:'#2b5960',emissiveIntensity:.14});
  const center=[x,y,z];
  for(let i=0;i<13;i++){
    const a=-1.25+i/12*2.5,h=s*(.85+random()*.15),end=[x+Math.sin(a)*h,y+Math.cos(a)*h,z];
    tube(group,mat,[center,[x+Math.sin(a)*h*.55,y+h*.5,z+.03],end],s*.017,10);
    if(i){const shape=new T.Shape();shape.moveTo(0,0);shape.lineTo(Math.sin(a)*h,Math.cos(a)*h);shape.lineTo(Math.sin(a-.17)*h,Math.cos(a-.17)*h);shape.closePath();const leaf=mesh(group,new T.ShapeGeometry(shape),mat,x,y,z);leaf.rotation.y=.15;}
  }
}
function seaweed(group,random,x,y,z,height=1.5,color='#408e81'){
  const pivot=new T.Group();pivot.position.set(x,y,z);group.add(pivot);
  const mat=material(color,{side:T.DoubleSide,roughness:.52,emissive:'#12483d',emissiveIntensity:.17});
  for(let j=0;j<4;j++){
    const geometry=new T.PlaneGeometry(.16+random()*.17,height*(.65+random()*.35),4,24);geometry.translate(0,height*.5,0);
    const p=geometry.attributes.position;
    for(let i=0;i<p.count;i++){const yy=p.getY(i)/height;p.setX(i,p.getX(i)*(Math.sin(Math.PI*yy)*.7+.18)+Math.sin(yy*4+j)*height*.12);p.setZ(i,Math.sin(yy*4+j)*.06+p.getX(i)*Math.sin(yy*6+j)*.55);}
    geometry.computeVertexNormals();const leaf=mesh(pivot,geometry,mat);leaf.rotation.y=j*2.4;leaf.rotation.z=(random()-.5)*.25;
  }
  return pivot;
}
function fish(random,form){
  const g=new T.Group();
  const colors=form==='reef-fish'?['#dda052','#d89b96','#57a0c7']:form==='grass-fish'?['#94bba0','#d8d0a4']:['#b5e1df','#ecbc8c','#78b6c7'];
  const skin=material(colors[Math.floor(random()*colors.length)],{roughness:.4,metalness:.12});
  const dark=material('#214955',{roughness:.45}),fin=material('#c1e3d1',{side:T.DoubleSide,transparent:true,opacity:.76,roughness:.6});
  const length=form==='grass-fish'?.32:.27;
  ball(g,skin,0,0,0,length,form==='grass-fish'?.055:.125,.065,2);
  ball(g,dark,length*.75,.025,.062,.019,.02,.01,1);
  ball(g,dark,length*.75,.025,-.062,.019,.02,.01,1);
  const tail=new T.Group();tail.position.x=-length*.8;g.add(tail);
  const shape=new T.Shape();shape.moveTo(0,0);shape.lineTo(-.18,.12);shape.lineTo(-.18,-.12);shape.closePath();mesh(tail,new T.ShapeGeometry(shape),fin);
  const top=new T.Shape();top.moveTo(-.12,.06);top.lineTo(.06,.08);top.lineTo(-.08,.2);top.closePath();mesh(g,new T.ShapeGeometry(top),fin);
  const stripe=mesh(g,new T.TorusGeometry(.1,.009,4,16),dark,-.015,0,0,[1,.72,1]);stripe.rotation.y=Math.PI/2;
  g.userData.tail=tail;return g;
}
function jelly(group,random,position,s=1){
  const pivot=new T.Group();pivot.position.set(...position);group.add(pivot);
  const skin=new T.MeshPhysicalMaterial({color:'#b5e5ef',roughness:.12,metalness:.1,transparent:true,opacity:.58,side:T.DoubleSide,emissive:'#4e9cac',emissiveIntensity:.55,depthWrite:false});
  mesh(pivot,new T.SphereGeometry(.36*s,24,16,0,Math.PI*2,0,Math.PI*.58),skin,0,.07,0,[1,.65,1]);
  const rim=material('#a9f1df',{emissive:'#73e3df',emissiveIntensity:1.65,roughness:.3});
  const ring=mesh(pivot,new T.TorusGeometry(.35*s,.015*s,5,36),rim,0,.0,0);ring.rotation.x=Math.PI/2;
  ball(pivot,material('#fcecc1',{emissive:'#cdeec4',emissiveIntensity:2.5}),0,.12*s,0,.085*s);
  const strands=[];
  for(let j=0;j<7;j++){const a=j/7*Math.PI*2,r=.23*s;const strand=tube(pivot,rim,[[Math.cos(a)*r,0,Math.sin(a)*r],[Math.cos(a)*r*1.3,-.35*s,Math.sin(a)*r],[Math.cos(a)*r*.4,-.8*s,Math.sin(a)*r*.8],[Math.cos(a+.4)*r,-1.12*s,Math.sin(a+.4)*r]],.009*s,18);strands.push(strand);}
  return pivot;
}
function seabed(){
  const geo=new T.PlaneGeometry(100,100,160,160);geo.rotateX(-Math.PI/2);const p=geo.attributes.position;
  for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i);p.setY(i,-.48+Math.sin(x*.28+z*.17)*.25+Math.cos(z*.41-x*.12)*.12);}geo.computeVertexNormals();
  const mat=material('#497f80',{roughness:.96});
  const time={value:0};mat.onBeforeCompile=shader=>{shader.uniforms.uTime=time;shader.vertexShader='varying vec3 vBed;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvBed=position;');shader.fragmentShader='uniform float uTime;varying vec3 vBed;\n'+shader.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\nfloat a=sin(vBed.x*2.8+sin(vBed.z*2.1+uTime*.33))*sin(vBed.z*2.6+sin(vBed.x*1.7-uTime*.25));float c=pow(max(0.,1.-abs(a)),20.);float grain=fract(sin(dot(vBed.xz,vec2(127.1,311.7)))*43758.5453);diffuseColor.rgb*=.89+grain*.12;diffuseColor.rgb+=vec3(.025,.075,.065)*c;');};
  return {object:new T.Mesh(geo,mat),time};
}
export function createWorld(scene,root,renderer){
  scene.background=new T.Color('#073440');scene.fog=new T.FogExp2('#174b58',.029);
  scene.add(new T.HemisphereLight('#aee8f0','#153e4b',1.65));
  const sun=new T.DirectionalLight('#bceaf0',3.4);sun.position.set(-10,18,8);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-18;sun.shadow.camera.right=18;sun.shadow.camera.top=18;sun.shadow.camera.bottom=-18;sun.shadow.normalBias=.06;sun.shadow.bias=-.0002;scene.add(sun);
  const fill=new T.DirectionalLight('#48aaa7',1.7);fill.position.set(7,4,-8);scene.add(fill);
  const ground=seabed();ground.object.receiveShadow=true;scene.add(ground.object);
  const environment=new T.Group();scene.add(environment);const random=rng('ocean-environment-v1');
  // Scenic backdrop is present on an empty board; it never represents live input.
  for(let i=0;i<13;i++){
    const x=(i-6)*3.7,z=-14-random()*9,h=4+random()*9;
    rock(environment,random,x,h*.35-1,z,h*.52,'#315a6a');
  }
  const arch=new T.CatmullRomCurve3([new T.Vector3(-13,-1,-7),new T.Vector3(-12,6,-8),new T.Vector3(-7,9,-10),new T.Vector3(-2,11,-13)]);
  const archMesh=mesh(environment,new T.TubeGeometry(arch,44,1.6,20,false),material('#345c6c',{roughness:1}));archMesh.castShadow=true;
  const weeds=[];
  for(let i=0;i<65;i++){
    const side=i%2?1:-1,x=side*(5.4+random()*10),z=-6+random()*12;
    if(i%4===0)rock(environment,random,x,-.15,z,.45+random()*.9,'#3b7078');
    if(i%3===0)fan(environment,random,x,-.3,z,.8+random()*1.2);
    else weeds.push(seaweed(environment,random,x,-.35,z,.8+random()*2.8,i%2?'#3f837b':'#568e88'));
  }
  for(let i=0;i<20;i++){const x=(i%2?1:-1)*(5.5+random()*5),z=-5+random()*9;coral(environment,random,x,-.25,z,.5+random()*.5,'#a0cace',i%3===0);}
  for(let i=0;i<12;i++){const x=(i%2?1:-1)*(5.3+random()*4),z=-3+random()*9;shellCoral(environment,random,x,-.3,z,.7+random()*.7);}
  const count=450,positions=new Float32Array(count*3),colors=new Float32Array(count*3);
  for(let i=0;i<count;i++){positions[i*3]=(random()-.5)*45;positions[i*3+1]=random()*15;positions[i*3+2]=(random()-.5)*35;colors.set([.45+random()*.3,.78,.79],i*3);}
  const particlesGeo=new T.BufferGeometry();particlesGeo.setAttribute('position',new T.BufferAttribute(positions,3));particlesGeo.setAttribute('color',new T.BufferAttribute(colors,3));
  const particles=new T.Points(particlesGeo,new T.PointsMaterial({size:.026,vertexColors:true,transparent:true,opacity:.65,depthWrite:false}));scene.add(particles);
  // Soft light shafts, tapered and feathered; additive light rather than opaque cones.
  for(let i=0;i<5;i++){
    const mat=new T.ShaderMaterial({transparent:true,depthWrite:false,side:T.DoubleSide,blending:T.AdditiveBlending,uniforms:{},vertexShader:'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv;void main(){float a=pow(max(0.,1.-abs(vUv.x-.5)*2.),2.)*sin(vUv.y*3.14159)*.075;gl_FragColor=vec4(.38,.77,.79,a);}'});
    const beam=mesh(scene,new T.PlaneGeometry(2+i*.4,22),mat,-8+i*4,8,-4-i*2);beam.rotation.z=-.28;beam.castShadow=false;beam.receiveShadow=false;
  }
  function build(n,model){
    const group=new T.Group(),random=rng(n.id+':'+n.form),animations=[];
    const detail=model.nodes.length>90?.55:1;
    if(n.code==='C0'){
      if(n.reefSurface){const geometry=reefGeometry(n.reefSurface.members,n.reefSurface.links);mesh(group,geometry,reefMaterial(n.reefSurface.members[0]));}
      if(n.reefExposed){
      // Sponge tubes and rimmed openings give reef forms a porous silhouette.
      const sponge=material('#719f9f',{roughness:1,bumpMap:stoneTexture(),bumpScale:.045}),inside=material('#153f4a'),rim=material('#94c7bf');
      const scatter=rng(n.id+':reef-life'),localShapes=reefPrimitives([{...n,x:0,y:0,z:0}],[]),count=3+Math.floor(scatter()*4);
      for(let i=0;i<count;i++){
        const a=scatter()*Math.PI*2,r=Math.sqrt(scatter())*.78,h=.28+scatter()*.67,x=Math.cos(a)*r,z=Math.sin(a)*r,width=.085+scatter()*.08;
        let top=1.9;while(top>-.2&&reefField([x,top,z],localShapes)<0)top-=.04;
        const growth=new T.Group();group.add(growth);growth.position.set(x,top-.18,z);growth.rotation.set((scatter()-.5)*.35,scatter()*6,(scatter()-.5)*.35);
        mesh(growth,new T.CylinderGeometry(width,width*1.4,h,9,1,true),sponge,0,h/2,0);
        const hole=mesh(growth,new T.CircleGeometry(width*.93,12),inside,0,h,0);hole.rotation.x=-Math.PI/2;
        const lip=mesh(growth,new T.TorusGeometry(width,.019,4,12),rim,0,h,0);lip.rotation.x=Math.PI/2;
      }
      if(n.form==='coral-reef'||n.night){for(let i=0;i<4;i++)coral(group,random,(random()-.5)*1.5,.65,(random()-.5)*1.3,.55+random()*.5,n.night?'#b1dbdc':'#83b9b8',n.night);}
      else fan(group,random,.25,.85,0,.7);
      if(n.form==='coral-reef')shellCoral(group,random,-.4,.3,.5,.8);
      }
      batch(group);
    }
    if(n.code==='C1'){
      const h=n.form==='kelp'?2.2+Math.min(n.same,3)*.35:1.0;
      for(let i=0;i<Math.round(10*detail);i++){
        const a=i*2.4,r=Math.sqrt(random())*.8;const weed=seaweed(group,random,Math.cos(a)*r,-.22,Math.sin(a)*r,h*(.55+random()*.45),i%3?'#5aaa91':'#88b8a4');
        animations.push(t=>{weed.rotation.z=Math.sin(t*(n.current?.85:.48)+i)*.08+(n.current?.1:0);weed.rotation.x=Math.cos(t*.36+i)*.06;});
      }
      for(let i=0;i<5;i++)ball(group,material('#57756a'),(random()-.5)*1.6,-.18,(random()-.5)*1.6,.2,.12,.15);
    }
    if(n.code==='C2'){
      const amount=Math.round((n.nursery?12:8+Math.min(n.same,3)*2)*detail);
      for(let i=0;i<amount;i++){
        const f=fish(random,n.form),phase=random()*Math.PI*2,radius=.75+random()*.9,alt=.2+random()*.8;group.add(f);const small=n.nursery?.65:1;f.scale.setScalar(small);
        animations.push(t=>{const a=t*(n.current?.48:.24)+phase,dir=n.current?n.direction:0,rx=Math.cos(a)*radius,rz=Math.sin(a)*radius*.55,dx=-Math.sin(a)*radius,dz=Math.cos(a)*radius*.55;f.position.set(rx*Math.cos(dir)-rz*Math.sin(dir),.5+alt+Math.sin(a*1.7)*.18,rx*Math.sin(dir)+rz*Math.cos(dir));f.rotation.y=-Math.atan2(dx*Math.sin(dir)+dz*Math.cos(dir),dx*Math.cos(dir)-dz*Math.sin(dir));f.rotation.z=Math.sin(t+phase)*.035;f.userData.tail.rotation.y=Math.sin(t*8+phase)*.45;});
      }
    }
    if(n.code==='C3'){
      const flesh=material(n.form==='reef-crab'?'#d7a494':n.form==='grazing-snail'?'#b7ccad':'#d8b4ac'),shell=material('#829d92');
      for(let i=0;i<4;i++){
        const critter=new T.Group(),x=(random()-.5)*1.5,z=(random()-.5)*1.5;group.add(critter);critter.position.set(x,n.reef?.4:-.13,z);
        if(n.form==='seastar'){for(let j=0;j<5;j++){const a=j/5*Math.PI*2;const arm=ball(critter,flesh,Math.cos(a)*.1,.02,Math.sin(a)*.1,.14,.035,.06,1);arm.rotation.y=-a;}ball(critter,flesh,0,.03,0,.09,.035,.09);}
        else if(n.form==='reef-crab'){ball(critter,flesh,0,0,0,.15,.07,.11);for(let j=0;j<6;j++){const s=j<3?-1:1,zz=(j%3-1)*.075;rod(critter,flesh,[s*.09,0,zz],[s*.23,-.05,zz+.06],.015); }ball(critter,shell,.08,.08,.06,.025);ball(critter,shell,.08,.08,-.06,.025);}
        else{ball(critter,flesh,0,0,0,.2,.035,.08);ball(critter,shell,-.035,.08,0,.12,.13,.1);}
        animations.push(t=>{critter.position.x=x+Math.sin(t*.14+i)*.16;critter.rotation.y=Math.sin(t*.13+i)*.4;});
      }
    }
    if(n.code==='C4'){
      if(n.form==='anemone'){
        for(let i=0;i<5;i++)coral(group,random,(random()-.5)*1.3,.15,(random()-.5)*1.3,.8,'#bbe6d7',true);
      }else for(let i=0;i<3;i++){
        const x=(random()-.5)*1.6,z=(random()-.5)*1.4,alt=.85+random();const j=jelly(group,random,[x,alt,z],.65+random()*.35);
        animations.push(t=>{j.position.y=alt+Math.sin(t*.65+i)*.2;j.position.x=x+Math.sin(t*.17+i)*(n.current?.55:.15)*Math.cos(n.direction);j.position.z=z+Math.sin(t*.17+i)*(n.current?.55:.15)*Math.sin(n.direction);j.scale.set(1+Math.sin(t*1.3+i)*.07,1-Math.sin(t*1.3+i)*.06,1+Math.sin(t*1.3+i)*.07);});
      }
    }
    if(n.code==='C5'){
      const mat=material('#8edbdd',{transparent:true,opacity:.28,emissive:'#65c4cf',emissiveIntensity:1.2,depthWrite:false});
      for(const neighbor of n.flowNeighbors){
        if(n.id>=neighbor.id)continue;
        const destination=[(neighbor.x-n.x)*SPACING,(neighbor.y-n.y)*SPACING,(neighbor.z-n.z)*SPACING];
        tube(group,mat,[[0,.35,0],[destination[0]*.5,destination[1]*.5+.7,destination[2]*.5], [destination[0],destination[1]+.35,destination[2]]],.018,30);
      }
      const strength=1+Math.min(n.same,3)*.2;for(let i=0;i<Math.round(14*detail*strength);i++){const phase=random(),dot=ball(group,mat,0,0,0,.025+random()*.025,undefined,undefined,1);animations.push(t=>{const q=(t*.13+phase)%1,a=q*Math.PI*2;dot.position.set(Math.cos(a)*(1+phase*.3),q*1.6*strength-.2,Math.sin(a)*(1+phase*.3));});}
    }
    if(n.attention){const ring=mesh(group,new T.TorusGeometry(1.05,.025,6,48),material('#e6af76',{emissive:'#b6632c',emissiveIntensity:.5}));ring.rotation.x=Math.PI/2;}
    group.userData.tick=t=>{for(const animate of animations)animate(t+n.seed*20);};return group;
  }
  return {spacing:SPACING,baseY:.25,build,
    tick:t=>{ground.time.value=t;particles.position.x=Math.sin(t*.03)*1.3;particles.position.y=Math.sin(t*.05)*.4;weeds.forEach((w,i)=>{w.rotation.z=Math.sin(t*.4+i)*.045;});},
    dispose:()=>{sun.shadow.map?.dispose();}};
}
