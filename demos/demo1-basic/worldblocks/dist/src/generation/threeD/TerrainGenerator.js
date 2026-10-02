import {hash,valueNoise} from './random.js';
const clamp=(x,min,max)=>Math.max(min,Math.min(max,x));
export const worldCoordinate=(u,config)=>(u-.5)*config.size;
export function influenceAt(point,x,z,config){
  const rule=config[point.type];if(!rule)return 0;
  const level=Math.min(point.heightLevel-1,16),radius=rule.radius+rule.radiusGain*level;
  return rule.strength*(1+level*rule.heightGain)*Math.exp(-((x-point.x)**2+(z-point.z)**2)/(2*radius**2));
}
export function fieldsAt(points,x,z,config){
  const f={earth:0,water:0,fire:0,animal:0,human:0};
  for(const p of points){
    if(config[p.type])f[p.type]+=influenceAt(p,x,z,config);
    else if(p.type==='animal'||p.type==='human')f[p.type]+=Math.exp(-((x-p.x)**2+(z-p.z)**2)/(.15**2*2));
  }
  return f;
}
export function createTerrain(points,config){
  // Geography seed deliberately excludes life, IDs and input transport metadata.
  const geo=points.filter(p=>config[p.type]),seed=hash(JSON.stringify(geo.map(({type,x,z,heightLevel})=>({type,x,z,heightLevel}))));
  const n=config.resolution,heights=new Float32Array(n*n),span=1+config.margin*2;
  for(let row=0;row<n;row++)for(let col=0;col<n;col++){
    const x=-config.margin+col/(n-1)*span,z=-config.margin+row/(n-1)*span,f=fieldsAt(geo,x,z,config);
    const land=f.earth+f.fire;
    const edge=clamp(Math.min(x+config.margin,z+config.margin,1+config.margin-x,1+config.margin-z)/.10,0,1);
    const noise=valueNoise(x*16,z*16,seed)*config.noiseAmplitude*Math.min(1,land);
    const elevation=config.maxElevation*Math.tanh((land-f.water)/config.maxElevation);
    heights[row*n+col]=config.seaLevel+config.seabed+(elevation+noise)*edge;
  }
  return {resolution:n,size:config.size,margin:config.margin,seaLevel:config.seaLevel,heights};
}
export function sampleTerrain(terrain,x,z){
  const {resolution:n,margin,heights,size}=terrain,span=1+margin*2;
  const gx=clamp((x+margin)/span*(n-1),0,n-1),gz=clamp((z+margin)/span*(n-1),0,n-1);
  const col=Math.min(n-2,Math.floor(gx)),row=Math.min(n-2,Math.floor(gz)),u=gx-col,v=gz-row;
  const a=heights[row*n+col],b=heights[row*n+col+1],c=heights[(row+1)*n+col],d=heights[(row+1)*n+col+1];
  // Same diagonal as the rendered triangles; content sits on the actual surface.
  const height=u+v<=1?a+(b-a)*u+(c-a)*v:d+(c-d)*(1-u)+(b-d)*(1-v);
  const dx=u+v<=1?b-a:d-c,dz=u+v<=1?c-a:d-b;
  return{height,slope:Math.hypot(dx,dz)/(span*size/(n-1))};
}
