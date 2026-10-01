import * as THREE from '../../vendor/three.module.js';
export function classifyOBJObjects(root, config) {
  const items = [];
  root.updateMatrixWorld(true);
  root.traverse(object => {
    if (!object.isMesh) return;
    const bounds = new THREE.Box3().setFromObject(object);
    const size = bounds.getSize(new THREE.Vector3());
    items.push({ object, bounds, size });
  });
  if (items.length < 2) {
    console.warn('WorldBlocks: OBJ is merged; individual editing cannot be guaranteed.');
    throw new Error('This OBJ is merged. Re-export the sandbox and modules as separate objects.');
  }
  const sorted = items.map(x => Math.max(x.size.x, x.size.z)).sort((a,b) => a-b);
  const median = sorted[Math.floor(sorted.length/2)];
  const bases = [], modules = [];
  for (const item of items) {
    const horizontal = Math.max(item.size.x, item.size.z);
    const isBase = config.baseNames.includes(item.object.name) ||
      (horizontal > median * config.baseWidthRatio && item.size.y / horizontal < config.baseFlatness);
    (isBase ? bases : modules).push(item);
  }
  if (!bases.length || !modules.length) throw new Error('Unable to identify a fixed base. Set MODEL_CONFIG.baseNames for this OBJ.');
  return { bases, modules };
}
