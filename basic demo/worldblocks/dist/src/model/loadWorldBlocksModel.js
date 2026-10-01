import * as THREE from '../../vendor/three.module.js';
import { OBJLoader } from '../../vendor/OBJLoader.js';
import { classifyOBJObjects } from './classifyOBJObjects.js';
import { MODEL_CONFIG, MODULE_TYPE_MAP, TYPES, DEBUG } from '../config.js';

export async function loadWorldBlocksModel(config = MODEL_CONFIG) {
  const root = await new OBJLoader().loadAsync(config.url);
  return prepareWorldBlocksModel(root, config);
}

export function prepareWorldBlocksModel(root, config = MODEL_CONFIG) {
  // One rigid orientation and uniform display scale, never change the source OBJ.
  if (config.sourceUp === 'z') root.rotation.x = -Math.PI / 2;
  root.updateMatrixWorld(true);
  const originalBounds = new THREE.Box3().setFromObject(root);
  const originalSize = originalBounds.getSize(new THREE.Vector3());
  const scale = config.displayWidth / Math.max(originalSize.x, originalSize.z);
  const originalCenter = originalBounds.getCenter(new THREE.Vector3());
  root.scale.setScalar(scale);
  root.position.set(-originalCenter.x*scale, -originalBounds.min.y*scale, -originalCenter.z*scale);
  root.updateMatrixWorld(true);
  const { bases, modules } = classifyOBJObjects(root, config);
  const baseBounds = new THREE.Box3();
  bases.forEach(item => baseBounds.union(item.bounds));
  const diameter = modules.reduce((s,m) => s+Math.max(m.size.x,m.size.z),0)/modules.length;
  const moduleHeight = modules.reduce((s,m) => s+m.size.y,0)/modules.length;
  const stackStep = moduleHeight * config.stackStepRatio;
  // The lowest source modules are seated inside the sculpted recesses, below the ridge tops.
  const firstCenterY = Math.min(...modules.map(m => m.bounds.getCenter(new THREE.Vector3()).y));
  const geometries = new Map();
  function centeredGeometry(item) {
    const center = item.bounds.getCenter(new THREE.Vector3());
    const geometry = item.object.geometry.clone().applyMatrix4(item.object.matrixWorld);
    geometry.translate(-center.x,-center.y,-center.z);
    geometry.deleteAttribute('color');
    geometry.computeVertexNormals();
    return { geometry, center };
  }
  const fixed = bases.map(item => ({ ...centeredGeometry(item), name: item.object.name }));
  const initialBlocks = modules.sort((a,b) => a.object.name.localeCompare(b.object.name,'en',{numeric:true})).map((item,index) => {
    const { geometry, center } = centeredGeometry(item);
    const id = `module_${String(index+1).padStart(3,'0')}`;
    geometries.set(id,geometry);
    const typeFromName = TYPES.find(t => item.object.name.toLowerCase().includes(t));
    const mapped = MODULE_TYPE_MAP[item.object.name];
    return { id, sourceObjectName: item.object.name, type: typeFromName || (TYPES.includes(mapped) ? mapped : TYPES[index%TYPES.length]),
      position: {x:center.x,y:center.y,z:center.z}, rotation:{x:0,y:0,z:0},
      heightLevel: Math.round((center.y-firstCenterY)/stackStep)+1 };
  });
  const bounds = {minX:baseBounds.min.x,maxX:baseBounds.max.x,minZ:baseBounds.min.z,maxZ:baseBounds.max.z};
  const baseSeats = initialBlocks.filter(b => b.heightLevel === 1).map(b => ({x:b.position.x,z:b.position.z}));
  const metadata = {baseSeats,bounds,diameter,moduleHeight,stackStep,firstCenterY,baseSurfaceY:baseBounds.max.y,maxHeight:config.maxHeight,sourceScale:scale};
  const diagnostics = { source:config.url, sourceUp:config.sourceUp, moduleCount:modules.length, baseCount:bases.length,
    hierarchy: root.children.map(o => ({name:o.name,type:o.type,children:o.children.length})),
    objects:[...bases,...modules].map(i=>({name:i.object.name,kind:bases.includes(i)?'base':'module',size:i.size.toArray(),min:i.bounds.min.toArray(),max:i.bounds.max.toArray()})),metadata};
  if (DEBUG) { console.info('WorldBlocks OBJ hierarchy',root);console.table(diagnostics.objects); console.info('WorldBlocks model diagnostics',diagnostics); }
  return {fixed,geometries,initialBlocks,metadata,diagnostics};
}
