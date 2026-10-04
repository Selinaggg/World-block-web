// Semantic surfaces and edges precede sampling. Coordinates are shared by
// particles, diagnostics and navigation; visual-only anomalies never become floors.
export const point=(x,y,z)=>({x,y,z});
export const lerp=(a,b,t)=>point(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t,a.z+(b.z-a.z)*t);
export function primitive(plan,kind,force,options={}){
  const object={id:`architecture-${plan.objects.length}`,kind,force,walkable:false,surfaces:[],lines:[],phase:plan.random()*Math.PI*2,amplitude:0,vector:{x:0,z:0},stage:force==='shell'?0:force==='glow'?.62:.38,...options};
  plan.objects.push(object);return object;
}
export function line(o,...points){o.lines.push(points);}
export function quad(o,a,b,c,d,edges=false){o.surfaces.push([a,b,c,d]);if(edges)line(o,a,b,c,d,a);}
export function floor(o,x,y,z,w,d){quad(o,point(x-w,y,z-d),point(x+w,y,z-d),point(x+w,y,z+d),point(x-w,y,z+d),true);}
export function box(o,x,y,z,w,h,d){
  const a=point(x-w,y,z-d),b=point(x+w,y,z-d),c=point(x+w,y,z+d),e=point(x-w,y,z+d);
  const top=p=>({...p,y:p.y+h});quad(o,a,b,top(b),top(a),true);quad(o,b,c,top(c),top(b),true);quad(o,c,e,top(e),top(c),true);quad(o,e,a,top(a),top(e),true);quad(o,top(a),top(b),top(c),top(e),true);
}
export function arch(o,center,width,height,angle=0,thickness=.13){
  const at=(u,y)=>point(center.x+Math.cos(angle)*u,center.y+y,center.z+Math.sin(angle)*u),spring=height-width;
  const inner=[at(-width,0),at(-width,spring)],outer=[at(-width-thickness,0),at(-width-thickness,spring)];
  for(let i=0;i<=24;i++){const t=Math.PI-i/24*Math.PI;inner.push(at(Math.cos(t)*width,spring+Math.sin(t)*width));outer.push(at(Math.cos(t)*(width+thickness),spring+Math.sin(t)*(width+thickness)));}
  inner.push(at(width,0));outer.push(at(width+thickness,0));
  line(o,...inner);line(o,...outer);for(let i=1;i<inner.length;i++)quad(o,inner[i-1],inner[i],outer[i],outer[i-1]);
}
export function bridge(o,a,b,width,{stairs=false,rails=true}={}){
  const length=Math.hypot(b.x-a.x,b.z-a.z),ux=-(b.z-a.z)/(length||1)*width,uz=(b.x-a.x)/(length||1)*width;
  const side=(p,s)=>point(p.x+ux*s,p.y,p.z+uz*s);
  if(stairs&&Math.abs(b.y-a.y)>.1){
    const steps=Math.max(3,Math.ceil(Math.abs(b.y-a.y)/.16));
    for(let i=0;i<steps;i++){
      const p=lerp(a,b,i/steps),q=lerp(a,b,(i+1)/steps),start={...p,y:q.y};
      quad(o,side(start,-1),side(start,1),side(q,1),side(q,-1));
      quad(o,side(p,-1),side(p,1),side(start,1),side(start,-1));line(o,side(start,-1),side(start,1));
    }
  }else quad(o,side(a,-1),side(a,1),side(b,1),side(b,-1));
  for(const s of [-1,1]){
    line(o,side(a,s),side(b,s));
    if(rails){line(o,{...side(a,s),y:a.y+.82},{...side(b,s),y:b.y+.82});
      for(let t=0;t<=length;t+=.9){const p=side(lerp(a,b,t/(length||1)),s);line(o,p,{...p,y:p.y+.82});}}
  }
}
export function room(plan,n,{force='shell',visualOnly=false,roof=false}={}){
  const o=primitive(plan,visualOnly?'suspended-room':'room',force,{walkable:!visualOnly,nodeId:n.id});
  const {x,y,z,radius:r,height:h}=n;floor(o,x,y,z,r,r);
  // Columns, split wall piers, transoms and arches leave open doors in every
  // direction. The front cutaway exposes the interior rather than a solid box.
  for(const sx of [-1,1])for(const sz of [-1,1])box(o,x+sx*r,y,z+sz*r,.11,h,.11);
  for(const sx of [-1,1]){
    box(o,x+sx*r,y+h-.24,z,.12,.24,r);
    for(const sz of [-1,1]){
      const cz=z+sz*r*.72,span=r*.19,hole=r*.12;
      const at=(u,v)=>point(x+sx*r,y+v,cz+u);
      // Four pieces leave a real window aperture, rather than drawing a frame
      // over a solid sampled wall.
      quad(o,at(-span,0),at(span,0),at(span,.9),at(-span,.9),true);
      quad(o,at(-span,2.2),at(span,2.2),at(span,h*.75),at(-span,h*.75),true);
      for(const side of [-1,1])quad(o,at(side*span,.9),at(side*hole,.9),at(side*hole,2.2),at(side*span,2.2),true);
      arch(o,point(x+sx*r,y+.9,cz),hole,1.3,Math.PI/2,.065);
    }
    arch(o,point(x+sx*r,y,z),r*.38,h*.81,Math.PI/2,.12);
  }
  for(const sz of [-1,1]){
    box(o,x,y+h-.22,z+sz*r,r,.22,.10);
    arch(o,point(x,y,z+sz*r),r*.68,h*.92,0,.13);
  }
  // Ceiling ribs describe volume while retaining the scanned cutaway quality.
  for(let k=-r;k<=r;k+=.65)line(o,point(x-r,y+h,z+k),point(x+r,y+h,z+k));
  if(roof)floor(o,x,y+h,z,r,r);
  return o;
}
export function transformObject(o,center,angle){
  const transform=p=>{const x=p.x-center.x,y=p.y-center.y;return point(center.x+x*Math.cos(angle)-y*Math.sin(angle),center.y+x*Math.sin(angle)+y*Math.cos(angle),p.z);};
  o.surfaces=o.surfaces.map(s=>s.map(transform));o.lines=o.lines.map(l=>l.map(transform));
}
