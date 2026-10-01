export function hash(value){let h=2166136261;for(const c of String(value)){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;}
export function seededRandom(seed){let n=seed>>>0;return()=>{n+=0x6D2B79F5;let t=n;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296;};}
const smooth=t=>t*t*(3-2*t);
export function valueNoise(x,z,seed){
  const ix=Math.floor(x),iz=Math.floor(z),fx=smooth(x-ix),fz=smooth(z-iz);
  const at=(a,b)=>hash(`${seed}:${a}:${b}`)/4294967295*2-1;
  const a=at(ix,iz)*(1-fx)+at(ix+1,iz)*fx,b=at(ix,iz+1)*(1-fx)+at(ix+1,iz+1)*fx;
  return a*(1-fz)+b*fz;
}
