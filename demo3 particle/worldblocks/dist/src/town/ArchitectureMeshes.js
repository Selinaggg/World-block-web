import {motionRegistry} from './TownDynamics.js';
import * as THREE from '../../vendor/three.module.js';
import {BUILDING_PALETTES} from './BuildingGrammar.js';
import {buildingSite} from './BuildingSite.js';
import {toWorld} from './spatial.js';
import {TOWN_SCALE as S} from './scale.js';

/** Readable silhouettes and large crafted details, all inside reserved plot envelopes. */
export function buildArchitecture(root,plot,result,{mesh,box,beam,roof}){
  const {terrain,terrainConfig:c}=result,b=plot.config,p=BUILDING_PALETTES[b.paletteId],site=buildingSite(plot,terrain,c),loc=toWorld(plot,c),w=b.width,d=b.depth;
  const g=new THREE.Group();g.position.set(loc.x,site.top,loc.z);g.rotation.y=plot.rotation;root.add(g);
  g.userData.plotId=plot.id;g.userData.architecture=b.archetype;g.userData.influence=plot.influence;
  const wood=p.wood,cream='#F3E5C8',glass='#3F8793',dark='#4C5148',floor=S.residentialFloorHeight;
  const cylinder=(group,rt,rb,h,col,x,y,z,n=8)=>mesh(group,new THREE.CylinderGeometry(rt,rb,h,n),col,x,y,z);
  function localRoof(x,y,z,rw,rd,rh,type,col,alongX=false){const rg=new THREE.Group();rg.position.set(x,y,z);if(alongX)rg.rotation.y=Math.PI/2;g.add(rg);roof(rg,alongX?rd:rw,alongX?rw:rd,rh,type,col,0);return rg;}
  function window(x,y,z,wide=.10,heading=0){const frame=new THREE.Group();frame.position.set(x,y,z);frame.rotation.y=heading;g.add(frame);box(frame,wide+.027,.12,.012,cream);box(frame,wide,.091,.018,glass,0,0,.01);box(frame,.012,.1,.020,cream,0,0,.022);}
  function door(x,z,width=.10){box(g,width,S.doorHeight,.020,p.accent,x,S.doorHeight/2,z);box(g,width+.025,.022,.030,cream,x,S.doorHeight+.009,z+.006);box(g,.012,.012,.024,'#E5BB65',x+width*.28,.10,z+.018);}
  function barrel(x,z,y=0){cylinder(g,.045,.042,.10,wood,x,y+.05,z);for(const h of [.025,.077])cylinder(g,.047,.047,.010,dark,x,y+h,z);}
  function crate(x,z){box(g,.09,.09,.085,wood,x,.045,z);for(const h of [.02,.07])box(g,.096,.012,.089,p.accent,x,h,z);beam(g,[x-.035,.01,z+.047],[x+.035,.08,z+.047],.009,cream);}
  function railing(a,z,width,y=.13){beam(g,[a-width/2,y,z],[a+width/2,y,z],.015,wood);for(const x of [a-width/2,a,a+width/2])box(g,.015,y,.015,wood,x,y/2,z);}
  function chimney(x,z,base,rank=false){
    const height=rank==='primary'?.67:rank==='secondary'?.50:.38;box(g,.09,height,.10,p.roof,x,base+height/2,z);box(g,.12,.032,.13,cream,x,base+height,z);box(g,.07,.004,.078,dark,x,base+height+.018,z);
    if(b.smoke&&(root.userData.smoke?.length||0)<36){const workshop=b.smoke==='workshop',count=workshop?3:2;
      for(let k=0;k<count;k++){const puff=mesh(g,new THREE.IcosahedronGeometry(workshop?.044:.034,0),'#F1F1E9',x,base+height+.045,z);puff.material=new THREE.MeshStandardMaterial({color:'#F1F1E9',roughness:1,flatShading:true,transparent:true,opacity:0,depthWrite:false});puff.castShadow=false;
        (root.userData.smoke??=[]).push({mesh:puff,x,y:base+height+.045,z,phase:k/count+(plot.x*.7)%1,speed:workshop?.18:.12,rise:workshop?.44:.30,drift:workshop?.065:.045,opacity:workshop?.44:.30,kind:b.smoke});}
    }
  }
  function deck(){
    for(let k=0;k<10;k++)box(g,w*.96,.035,d/10*.91,wood,0,.008,-d*.5+(k+.5)*d/10);
    for(const x of [-w*.44,w*.44])for(const z of [-d*.43,d*.43]){const bottom=site.ground(x,z)-site.top;box(g,.038,-bottom+.035,.038,wood,x,bottom/2,z);}
    for(const x of [-w*.44,w*.44]){box(g,.018,.13,.018,wood,x,.065,d*.46);beam(g,[x,.13,d*.46],[x,.13,0],.015,wood);}
    railing(-w*.31,d*.46,w*.22);railing(w*.31,d*.46,w*.22);
  }
  if(b.foundation==='stilts')deck();
  else{
    box(g,w+.025,site.top-site.bottom,d+.025,p.stone,0,-(site.top-site.bottom)/2,0);
    if(b.foundation==='terrace')for(let k=0;k<3;k++)box(g,w+.075-k*.025,.026,d+.075-k*.025,k%2?p.stone:'#D8CFB7',0,-.065+k*.023,0);
  }

  const landmark=b.landmark,primary=landmark?.rank==='primary';
  if(landmark?.kind==='lighthouse'){
    const h=primary?1.05:.77;
    // Broad striped tapered tower, lantern gallery and a crisp conical cap.
    for(let k=0;k<5;k++)cylinder(g,.16-(k+1)*.011,.16-k*.011,h/5,k%2?'#F2E8D0':'#C95348',0,(k+.5)*h/5,0);
    cylinder(g,.18,.18,.035,cream,0,h+.012,0);cylinder(g,.095,.095,.13,'#81BFC0',0,h+.095,0);
    for(let k=0;k<8;k++){const a=k/8*Math.PI*2,x=Math.sin(a)*.166,z=Math.cos(a)*.166;box(g,.012,.12,.012,dark,x,h+.08,z);const a2=(k+1)/8*Math.PI*2;beam(g,[x,h+.14,z],[Math.sin(a2)*.166,h+.14,Math.cos(a2)*.166],.012,dark);}
    cylinder(g,0,.16,.17,'#C95348',0,h+.23,0);box(g,.012,.16,.012,dark,0,h+.39,0);const flag=box(g,.11,.035,.007,'#DFB84D',.05,h+.44,0);motionRegistry(root).ambient.cloth.push({mesh:flag,axis:'y',base:0,phase:plot.x*17,amount:.06});
    box(g,.09,S.doorHeight,.023,wood,0,S.doorHeight/2,.15);window(0,h*.63,.128,.045);
  }else if(b.hasTerrace){
    box(g,w*.48,floor,d*.78,p.wall,-w*.24,floor/2,0);localRoof(-w*.24,floor+.012,0,w*.53,d*.86,.13,'gable',p.roof);
    box(g,w*.46,.22,d*.76,'#D6C39C',w*.23,.11,0);localRoof(w*.23,.23,0,w*.49,d*.81,.025,'flat',p.stone);
    window(-w*.24,.18,-d*.40,.10,Math.PI);window(-w*.49,.18,0,.09,-Math.PI/2);window(w*.47,.14,0,.10,Math.PI/2);
    door(-w*.24,d*.4);window(w*.22,.14,d*.39,.12);window(-w*.34,.18,d*.40,.07);
    // The lower wing becomes a planted roof terrace with a stone parapet.
    for(const x of [w*.04,w*.43])box(g,.025,.065,d*.77,p.stone,x,.277,0);
    box(g,w*.39,.065,.025,p.stone,w*.235,.277,-d*.39);
    for(let k=0;k<3;k++){box(g,.065,.04,.06,p.roof,w*.15+k*.07,.277,-d*.20);mesh(g,new THREE.IcosahedronGeometry(.04,0),'#799B55',w*.15+k*.07,.31,-d*.20);}
  }else if(b.hasWorkshopExtension){
    const x=-w*.16,bw=w*.61,bd=d*.73;
    box(g,bw,floor,bd,p.wall,x,floor/2,-d*.06);localRoof(x,floor+.015,-d*.06,bw+.08,bd+.08,.12,'shed',p.roof);
    box(g,w*.28,.20,d*.41,'#D2AA7D',w*.31,.10,-d*.17);localRoof(w*.31,.21,-d*.17,w*.33,d*.48,.07,'shed',p.accent);
    window(x,.18,-d*.43,.14,Math.PI);window(x-bw/2-.014,.18,-d*.05,.10,-Math.PI/2);
    box(g,bw*.40,.21,.02,dark,x,.105,d*.31);box(g,bw*.46,.025,.045,cream,x,.22,d*.33);window(x-bw*.32,.20,d*.315,.065);
    cylinder(g,.095,.125,.17,'#B76347',w*.31,.085,d*.25);cylinder(g,.078,.091,.035,cream,w*.31,.187,d*.25);const opening=box(g,.065,.072,.014,dark,w*.31,.065,d*.25+.115);if(b.smoke==='workshop'){opening.material=opening.material.clone();opening.material.emissive.set('#D77735');opening.material.emissiveIntensity=.4;motionRegistry(root).functional.glows.push({material:opening.material,phase:plot.z*23});}
    const canopy=box(g,bw*.75,.02,.15,p.accent,x,.26,d*.34);canopy.rotation.x=.14;if(b.smoke)motionRegistry(root).ambient.cloth.push({mesh:canopy,axis:'x',base:.14,phase:plot.x*19,amount:.018});for(const sx of [x-bw*.34,x+bw*.34])box(g,.018,.26,.018,wood,sx,.13,d*.47);
    chimney(-w*.33,-d*.20,floor,landmark?.kind==='kiln_tower'?landmark.rank:false);
    crate(-w*.36,d*.39);crate(-w*.24,d*.39);
    for(let k=0;k<3;k++){const log=cylinder(g,.014,.014,.14,wood,w*.33,.025+k*.025,-d*.42,6);log.rotation.z=Math.PI/2;}
    if(b.hasDeck){barrel(w*.38,d*.38);railing(-w*.30,d*.47,w*.24);}
  }else if(b.hasStable){
    const h=.27;box(g,w*.90,h,d*.72,p.wall,0,h/2,0);localRoof(0,h+.01,0,w+.06,d*.84,.18,'gable',p.roof,true);
    box(g,w*.28,.22,.022,dark,0,.11,d*.37);for(const x of [-w*.14,w*.14])box(g,.018,.23,.028,cream,x,.115,d*.39);
    beam(g,[-w*.125,.015,d*.397],[w*.125,.215,d*.397],.012,cream);beam(g,[w*.125,.015,d*.398],[-w*.125,.215,d*.398],.012,cream);
    for(const x of [-w*.33,w*.33]){window(x,.18,d*.37,.095);window(x,.18,-d*.37,.095,Math.PI);}
    window(w*.46,.18,0,.07,Math.PI/2);window(-w*.46,.18,0,.07,-Math.PI/2);
    for(const x of [-w*.30,-w*.19]){const hay=cylinder(g,.042,.042,.075,'#D9BD65',x,.05,d*.46,6);hay.rotation.z=Math.PI/2;}
    box(g,.14,.045,.055,wood,w*.30,.03,d*.46);box(g,.12,.008,.04,'#687564',w*.30,.056,d*.46);
  }else{
    const water=b.hasDeck,bw=w*(water?.80:.94),bd=d*(water?.64:.9),h=b.floors*floor,cz=water?-d*.12:0;
    box(g,bw,h,bd,p.wall,0,h/2,cz);localRoof(0,h+.012,cz,bw+(water?.14:.08),bd+.10,water?.17:.16,'gable',p.roof,b.roofDirection===1);
    const front=cz+bd/2;door(0,front+.016);
    for(let level=0;level<b.floors;level++)for(const x of [-bw*.30,bw*.30])window(x,.18+level*floor,front+.014,.08);
    for(let level=0;level<b.floors;level++){window(0,.18+level*floor,cz-bd/2-.014,.11,Math.PI);for(const sign of [-1,1])window(sign*(bw/2+.014),.18+level*floor,cz,.10,sign*Math.PI/2);}
    // Timber framing and shutters make the references readable at street level.
    for(const x of [-bw*.48,bw*.48])box(g,.021,h,.024,water?wood:p.wall,x,h/2,front+.01);
    if(water)for(const y of [.08,.23])box(g,bw*.96,.012,.018,wood,0,y,front+.026);
    if(b.hasBalcony){box(g,bw*.88,.025,.13,wood,0,floor+.016,front+.055);railing(0,front+.12,bw*.84,floor+.13);for(const x of [-bw*.40,bw*.40])box(g,.018,.12,.018,wood,x,floor+.07,front+.12);}
    if(b.hasAwning||b.hasPorch){
      const z=water?d*.34:front+.10;box(g,bw*.88,.035,.17,wood,0,.025,z);
      for(const x of [-bw*.39,bw*.39]){const bottom=site.ground(x,z+.05)-site.top;box(g,.022,.28-bottom,.022,wood,x,(.28+bottom)/2,z+.05);}
      for(let k=0;k<5;k++){const awning=box(g,bw*.94/5,.018,.21,k%2?(water?'#EFD9AB':p.accent):cream,-bw*.47+(k+.5)*bw*.94/5,.27,z);awning.rotation.x=.13;if(k===2&&b.smoke==='home')motionRegistry(root).ambient.cloth.push({mesh:awning,axis:'x',base:.13,phase:plot.x*19,amount:.016});}
    }
    if(water){barrel(w*.38,d*.24);const life=mesh(g,new THREE.TorusGeometry(.037,.012,5,12),'#EEDBC2',w*.38,.16,d*.27);life.rotation.y=.3;mesh(g,new THREE.TorusGeometry(.039,.007,4,10),wood,-w*.39,.027,d*.28).rotation.x=Math.PI/2;}
    else{box(g,.12,.065,.018,wood,-bw*.32,.24,front+.07);box(g,.087,.014,.025,cream,-bw*.32,.24,front+.08);box(g,.13,.022,.047,wood,bw*.33,.06,front+.12);for(const x of [bw*.22,bw*.43])box(g,.015,.06,.037,wood,x,.03,front+.12);}
    if(b.hasChimney)chimney(-bw*.30,cz-bd*.23,h);
    if(landmark?.kind==='bell_tower'){
      const th=primary?.40:.24;box(g,.19,th,.19,cream,0,h+th/2,0);localRoof(0,h+th,0,.27,.27,.15,'gable',p.roof);box(g,.085,.115,.021,dark,0,h+th*.67,.103);cylinder(g,.033,.046,.065,'#DBB552',0,h+th*.63,.11);
    }
  }
  if(landmark?.kind==='windmill'){
    const h=primary?.65:.44;cylinder(g,.105,.15,h,cream,0,h/2+.26,0);localRoof(0,h+.27,0,.27,.27,.16,'gable',p.roof);
    const windRig=new THREE.Group();windRig.rotation.y=-plot.rotation;g.add(windRig);const rotor=new THREE.Group();rotor.position.set(0,h+.18,.16);rotor.rotation.z=.36;windRig.add(rotor);motionRegistry(root).functional.rotors.push({mesh:rotor,base:.36,speed:.16});
    for(let k=0;k<4;k++){const arm=new THREE.Group();arm.rotation.z=k*Math.PI/2;rotor.add(arm);box(arm,.025,.37,.022,wood,0,.18,0);box(arm,.075,.23,.012,cream,.037,.24,.016);for(let j=0;j<3;j++)box(arm,.08,.008,.019,wood,.037,.15+j*.075,.022);}
    cylinder(windRig,.035,.035,.045,wood,0,h+.18,.20).rotation.x=Math.PI/2;
  }
  if(landmark?.kind==='silo'){
    const h=primary?.59:.40,x=w*.29,z=-d*.20;cylinder(g,.10,.12,h,'#DECFA9',x,h/2,z);cylinder(g,0,.13,.13,p.roof,x,h+.065,z);
    for(const y of [.12,.26,.4])if(y<h)cylinder(g,.117,.117,.014,wood,x,y,z);
  }
  // Entries retain the exact same ground data as the first-person walker.
  for(const step of site.steps)box(g,.16,step.height,.045,p.stone,step.localX,step.localY,step.localZ);
  g.traverse(o=>{if(o.isMesh){o.userData.label=`${b.archetype.replaceAll('_',' ')}${landmark?' · '+landmark.kind.replaceAll('_',' '):''}`;o.userData.influenceElement=Object.entries(plot.influence||b.influence).sort((a,b)=>b[1]-a[1])[0][0];o.userData.plotId=plot.id;}});
  return g;
}

export function buildBoat(root,item,c,{mesh,box}){
  const p=toWorld(item,c),g=new THREE.Group();g.position.set(p.x,c.seaLevel+.025,p.z);g.rotation.y=item.rotation;root.add(g);
  const shape=new THREE.Shape();shape.moveTo(0,.19);shape.lineTo(-.065,.10);shape.lineTo(-.065,-.13);shape.lineTo(0,-.17);shape.lineTo(.065,-.13);shape.lineTo(.065,.10);shape.closePath();
  const hull=mesh(g,new THREE.ExtrudeGeometry(shape,{depth:.055,bevelEnabled:false}),'#CE765C');hull.rotation.x=Math.PI/2;
  box(g,.10,.01,.24,'#8D6B49',0,-.009,0);for(const z of [-.09,.035])box(g,.12,.015,.036,'#E7CD95',0,.018,z);
  g.traverse(o=>{if(o.isMesh)o.userData.label='Rowboat · waterfront life';});
  motionRegistry(root).ambient.boats.push({mesh:g,y:g.position.y,heading:item.rotation,phase:(item.x*17+item.z*11)%6.28});
}
