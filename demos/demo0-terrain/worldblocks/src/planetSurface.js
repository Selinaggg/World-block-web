import * as THREE from 'three';

// A broad, grounded cap curves into a planet below the existing landscape.
// Its contact area stays at the old sea level, preserving all block heights.
export function createPlanetSurface(seaLevel) {
  const material = new THREE.MeshStandardMaterial({
    vertexColors: true, roughness: .86, metalness: .02, flatShading: true
  });
  const surface = new THREE.Mesh(new THREE.BufferGeometry(), material);
  surface.receiveShadow = true;
  let signature = '';
  surface.userData.setFootprint = positions => {
    const extent = Math.max(1.5, ...positions.map(p => Math.hypot(p.worldX, p.worldZ))) + 1.25;
    const next = positions.map(p => `${p.worldX},${p.worldZ}`).join('|');
    if (next === signature && surface.geometry.attributes.position) return;
    signature = next;
    const radius = Math.max(5.5, extent * 1.5 + 1.8);
    const geometry = new THREE.SphereGeometry(radius, 112, 72);
    const p = geometry.attributes.position, colors = [];
    const earth = new THREE.Color('#c79756'), root = new THREE.Color('#9a7244');
    for (let i = 0; i < p.count; i++) {
      const x=p.getX(i), y=p.getY(i), z=p.getZ(i), r=Math.hypot(x,z);
      let height = y-radius+seaLevel+.018;
      if (y >= 0) {
        const t=THREE.MathUtils.clamp((r-extent)/(radius-extent),0,1);
        const blend=t*t*(3-2*t);
        const relief=(Math.sin(x*1.73+Math.cos(z*.81))*.025+Math.sin(z*2.1+x*.67)*.02);
        height=seaLevel+.018+(y-radius)*blend+relief*(.3+blend*1.7);
      }
      p.setY(i,height);
      const nearest=Math.min(20,...positions.map(b=>Math.hypot(x-b.worldX,z-b.worldZ)));
      const contact=Math.exp(-nearest*nearest/1.4)*.50;
      const color=earth.clone().lerp(root,contact);
      color.multiplyScalar(.96+.035*Math.sin(x*2.7+z*1.8)+.025*Math.cos(z*3.1-x*.8));
      colors.push(color.r,color.g,color.b);
    }
    geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    geometry.computeVertexNormals();geometry.computeBoundingSphere();
    surface.geometry.dispose();surface.geometry=geometry;
  };
  surface.userData.setFootprint([]);
  return surface;
}
