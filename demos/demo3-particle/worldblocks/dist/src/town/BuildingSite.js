import {sampleTerrain} from './TerrainGenerator.js';
import {toWorld} from './spatial.js';

/** Shared foundation and entry geometry for rendering and ground following. */
export function buildingSite(plot,terrain,c){
  const b=plot.config,w=toWorld(plot,c),co=Math.cos(plot.rotation),si=Math.sin(plot.rotation);
  const world=(x,z)=>({x:w.x+x*co+z*si,z:w.z-x*si+z*co});
  const ground=(x,z)=>{const p=world(x,z);return sampleTerrain(terrain,p.x/c.size+.5,p.z/c.size+.5).height;};
  const corners=[];for(const x of [-b.width/2,b.width/2])for(const z of [-b.depth/2,b.depth/2])corners.push(ground(x,z));
  const bottom=Math.min(...corners)-.05,top=Math.max(...corners)+.025+(b.foundation==='stilts'?.12:b.foundation==='terrace'?.06:0),porch=b.hasPorch||b.hasAwning;
  const deck=b.hasDeck,entryX=b.hasTerrace?-b.width*.24:b.hasWorkshopExtension?-b.width*.16:0;
  const front=deck||b.hasWorkshopExtension||b.hasTerrace?b.depth/2+.008:b.hasStable?b.depth*.37+.008:b.depth*.45+(porch?.185:.02);
  const landing=top+(deck?.0255:porch&&!b.hasWorkshopExtension?.0475:0),street=ground(entryX,front+.10),rise=landing-street,steps=[];
  if(rise>.025){const count=Math.min(8,Math.ceil(rise/.035));for(let i=0;i<count;i++){
    const z=front+.023+i*.042,height=rise*(count-i)/count;
    steps.push({kind:'step',id:`${plot.id}-step-${i}`,...world(entryX,z),rotation:plot.rotation,halfWidth:.08,halfDepth:.0225,y:street+height,height,localX:entryX,localZ:z,localY:street-top+height/2});
  }}
  return {bottom,top,steps,ground};
}
