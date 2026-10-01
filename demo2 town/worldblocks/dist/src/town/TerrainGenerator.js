import {valueNoise,hash} from '../generation/threeD/random.js';
import {sampleTerrain} from '../generation/threeD/TerrainGenerator.js';
import {clamp} from './spatial.js';
export function influence(p,x,z,config){
  const rule=config[p.type];if(!rule)return 0;
  const level=Math.min(p.heightLevel-1,5),radius=rule.radius*(1+level*.065);
  return rule.strength*(1+level*rule.heightGain)*Math.exp(-((x-p.x)**2+(z-p.z)**2)/(2*radius**2));
}
export function generateTerrain(points,config){
  const geo=points.filter(p=>['earth','water','fire'].includes(p.type)),seed=hash(JSON.stringify(geo));
  const n=config.resolution,heights=new Float32Array(n*n),span=1+config.margin*2;
  for(let row=0;row<n;row++)for(let col=0;col<n;col++){
    const x=-config.margin+col/(n-1)*span,z=-config.margin+row/(n-1)*span;
    // A common buildable island exists before any settlement; Humans never raise terrain.
    const edge=clamp((Math.max(Math.abs(x-.5),Math.abs(z-.5))-.43)/.17);
    let land=config.baseHeight,water=0;
    for(const p of geo){const f=influence(p,x,z,config);if(p.type==='water')water+=f;else land+=f;}
    heights[row*n+col]=config.seaLevel+(1-edge)*config.maxElevation*Math.tanh(land/config.maxElevation)-water-edge*.65+valueNoise(x*15,z*15,seed)*config.noiseAmplitude*(1-edge);
  }
  return {resolution:n,size:config.size,margin:config.margin,seaLevel:config.seaLevel,heights};
}
export const getTerrainHeightAt=(terrain,x,z)=>sampleTerrain(terrain,x,z).height;
export {sampleTerrain};
export function buildable(terrain,p,config,radius=0){
  const samples=[[0,0],[radius,0],[-radius,0],[0,radius],[0,-radius]].map(([dx,dz])=>sampleTerrain(terrain,p.x+dx,p.z+dz));
  return p.x>=.025&&p.x<=.975&&p.z>=.025&&p.z<=.975&&samples.every(s=>s.height>config.seaLevel+config.minLand&&s.slope<config.maxSlope);
}
export function nearestLand(terrain,p,config,radius=.028,limit=.28){
  if(buildable(terrain,p,config,radius))return {...p};
  let best=null,score=Infinity;
  for(let r=.015;r<=limit;r+=.015)for(let i=0;i<32;i++){
    const a=i/32*Math.PI*2,q={x:p.x+Math.cos(a)*r,z:p.z+Math.sin(a)*r};
    if(buildable(terrain,q,config,radius)){const s=r+sampleTerrain(terrain,q.x,q.z).slope*.025;if(s<score){best=q;score=s;}}
  }
  return best;
}
