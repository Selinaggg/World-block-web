import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { displayCoordinate, normalizeLayout } from "./layout.js";

const MODULE_ROWS = 2;
const MODULE_COLS = 4;
const CELL_SCALE = 0.24;
const GRID_STEP = CELL_SCALE * 4;
const STACK_STEP = GRID_STEP;
const HALF_LAYER_STEP = GRID_STEP / 2;

function permutations(values) {
  const result = [];
  const used = Array(values.length).fill(false);

  function walk(path) {
    if (path.length === values.length) {
      result.push(path);
      return;
    }
    for (let index = 0; index < values.length; index += 1) {
      if (used[index]) continue;
      used[index] = true;
      walk([...path, values[index]]);
      used[index] = false;
    }
  }

  walk([]);
  return result;
}

function truncatedOctahedronVertices() {
  const unique = new Map();
  for (const firstSign of [-1, 1]) {
    for (const secondSign of [-1, 1]) {
      for (const point of permutations([0, firstSign, secondSign * 2])) {
        unique.set(point.join(","), point);
      }
    }
  }
  return [...unique.values()];
}

function sortedFace(points, expectedNormal) {
  const normal = new THREE.Vector3(...expectedNormal).normalize();
  const center = points
    .reduce((sum, point) => sum.add(point), new THREE.Vector3())
    .divideScalar(points.length);
  const reference = Math.abs(normal.y) < 0.9
    ? new THREE.Vector3(0, 1, 0)
    : new THREE.Vector3(1, 0, 0);
  const horizontal = new THREE.Vector3().crossVectors(reference, normal).normalize();
  const vertical = new THREE.Vector3().crossVectors(normal, horizontal).normalize();
  const sorted = [...points].sort((left, right) => {
    const leftDelta = left.clone().sub(center);
    const rightDelta = right.clone().sub(center);
    return Math.atan2(leftDelta.dot(vertical), leftDelta.dot(horizontal))
      - Math.atan2(rightDelta.dot(vertical), rightDelta.dot(horizontal));
  });
  const faceNormal = new THREE.Vector3()
    .crossVectors(sorted[1].clone().sub(sorted[0]), sorted[2].clone().sub(sorted[0]))
    .normalize();
  if (faceNormal.dot(normal) < 0) sorted.reverse();
  return sorted;
}

function createGeometry(scale = CELL_SCALE) {
  const vertices = truncatedOctahedronVertices();
  const positions = [];

  function addFace(face, normal) {
    const points = sortedFace(
      face.map((point) => new THREE.Vector3(
        point[0] * scale,
        point[1] * scale,
        point[2] * scale
      )),
      normal
    );
    for (let index = 1; index < points.length - 1; index += 1) {
      for (const point of [points[0], points[index], points[index + 1]]) {
        positions.push(point.x, point.y, point.z);
      }
    }
  }

  for (let axis = 0; axis < 3; axis += 1) {
    for (const sign of [-1, 1]) {
      const normal = [0, 0, 0];
      normal[axis] = sign;
      addFace(vertices.filter((point) => point[axis] === sign * 2), normal);
    }
  }
  for (const x of [-1, 1]) {
    for (const y of [-1, 1]) {
      for (const z of [-1, 1]) {
        addFace(
          vertices.filter((point) => x * point[0] + y * point[1] + z * point[2] === 3),
          [x, y, z]
        );
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

function makeMaterial(color, opacity = 1) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.8,
    metalness: 0.02,
    flatShading: true,
    transparent: opacity < 1,
    opacity
  });
}

function makeEdges(scale, color, opacity = 1) {
  const sourceGeometry = createGeometry(scale);
  const edgeGeometry = new THREE.EdgesGeometry(sourceGeometry, 12);
  sourceGeometry.dispose();
  return new THREE.LineSegments(
    edgeGeometry,
    new THREE.LineBasicMaterial({
      color,
      transparent: opacity < 1,
      opacity
    })
  );
}

function disposeObject(object) {
  object.traverse((node) => {
    node.geometry?.dispose();
    const materials = Array.isArray(node.material) ? node.material : [node.material];
    for (const material of materials) {
      material?.map?.dispose();
      material?.dispose();
    }
  });
}

function clearGroup(group) {
  const children = [...group.children];
  group.clear();
  for (const child of children) disposeObject(child);
}

function createModuleLabel(label) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  context.fillStyle = "rgba(28, 45, 48, 0.9)";
  context.beginPath();
  context.roundRect(24, 22, 208, 84, 18);
  context.fill();
  context.strokeStyle = "rgba(255, 255, 255, 0.82)";
  context.lineWidth = 5;
  context.stroke();
  context.fillStyle = "#ffffff";
  context.font = "800 58px ui-monospace, SFMono-Regular, Menlo, monospace";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(label, 128, 65);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false
  }));
  sprite.scale.set(0.78, 0.39, 1);
  sprite.renderOrder = 20;
  return sprite;
}

function logicalPosition(column, moduleLayout, topology) {
  const halfLayer = column.layer === "L0.5";
  const display = displayCoordinate(column, moduleLayout, topology);
  return {
    gridX: display.col,
    gridZ: display.row,
    baseY: halfLayer ? HALF_LAYER_STEP : 0
  };
}

export default function LiveBoardScene({
  topology,
  moduleLayout,
  board,
  latestColumnId,
  faultedColumnIds,
  unitMeta
}) {
  const mountRef = useRef(null);
  const groupRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const rotationRef = useRef({ x: -0.56, y: 0.72 });
  const dragRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#111111");

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);
    camera.position.set(0, 7, 10);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight("#ffffff", "#aaa49a", 2.6));
    const key = new THREE.DirectionalLight("#ffffff", 3.1);
    key.position.set(5, 10, 7);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    scene.add(key);
    const fill = new THREE.DirectionalLight("#bddcff", 0.85);
    fill.position.set(-6, 4, -5);
    scene.add(fill);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 80),
      new THREE.ShadowMaterial({ opacity: 0.1 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.62;
    ground.receiveShadow = true;
    scene.add(ground);

    const group = new THREE.Group();
    group.rotation.set(rotationRef.current.x, rotationRef.current.y, 0);
    groupRef.current = group;
    scene.add(group);

    function resize() {
      const bounds = mount.getBoundingClientRect();
      renderer.setSize(bounds.width, Math.max(bounds.height, 1));
      camera.aspect = bounds.width / Math.max(bounds.height, 1);
      camera.updateProjectionMatrix();
    }

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    let frame = 0;
    function render() {
      frame = requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
    render();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      clearGroup(group);
      disposeObject(ground);
      key.shadow.map?.dispose();
      renderer.renderLists.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      groupRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
    };
  }, []);

  useEffect(() => {
    const group = groupRef.current;
    const camera = cameraRef.current;
    if (!group || !camera || !topology?.columns?.length) return;
    clearGroup(group);

    const activeLayout = normalizeLayout(moduleLayout, topology);
    const positioned = topology.columns.map((column) => ({
      column,
      ...logicalPosition(column, activeLayout, topology)
    }));
    const minX = Math.min(...positioned.map((item) => item.gridX));
    const maxX = Math.max(...positioned.map((item) => item.gridX));
    const minZ = Math.min(...positioned.map((item) => item.gridZ));
    const maxZ = Math.max(...positioned.map((item) => item.gridZ));
    const centerX = (minX + maxX) / 2;
    const centerZ = (minZ + maxZ) / 2;
    const boardWidth = (maxX - minX + 1.5) * GRID_STEP;
    const boardDepth = (maxZ - minZ + 1.5) * GRID_STEP;
    const maxStack = Math.max(1, ...Object.values(board || {}).map((stack) => stack.length));
    const faultedColumns = new Set(faultedColumnIds);

    for (const item of positioned) {
      const { column, baseY } = item;
      const x = (item.gridX - centerX) * GRID_STEP;
      const z = (item.gridZ - centerZ) * GRID_STEP;
      const stack = board?.[column.id] || [];

      if (stack.length === 0) {
        const placeholder = makeEdges(
          CELL_SCALE,
          column.layer === "L0.5" ? "#87999e" : "#aaa8a2",
          column.layer === "L0.5" ? 0.28 : 0.2
        );
        placeholder.position.set(x, baseY, z);
        group.add(placeholder);
      }

      stack.forEach((unit, stackIndex) => {
        const meta = unitMeta[unit] || { color: "#777777" };
        const y = baseY + stackIndex * STACK_STEP;
        const mesh = new THREE.Mesh(createGeometry(), makeMaterial(meta.color));
        mesh.position.set(x, y, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        group.add(mesh);

        const outline = makeEdges(CELL_SCALE * 1.003, "#171717", 0.72);
        outline.position.copy(mesh.position);
        group.add(outline);

        const pin = new THREE.Mesh(
          new THREE.CylinderGeometry(0.055, 0.055, 0.014, 20),
          makeMaterial(meta.color)
        );
        pin.position.set(x, y + CELL_SCALE * 2 + 0.012, z);
        group.add(pin);
      });

      if (faultedColumns.has(column.id) || column.id === latestColumnId) {
        const y = baseY + Math.max(0, stack.length - 1) * STACK_STEP;
        const highlight = makeEdges(
          CELL_SCALE * 1.15,
          faultedColumns.has(column.id) ? "#d5482f" : "#00c9f0"
        );
        highlight.position.set(x, y, z);
        group.add(highlight);
      }
    }

    const plate = new THREE.Mesh(
      new THREE.BoxGeometry(boardWidth, 0.16, boardDepth),
      makeMaterial("#b9bbb5")
    );
    plate.position.set(0, -CELL_SCALE * 2 - 0.12, 0);
    plate.receiveShadow = true;
    plate.castShadow = true;
    group.add(plate);
    const plateOutline = new THREE.LineSegments(
      new THREE.EdgesGeometry(plate.geometry),
      new THREE.LineBasicMaterial({ color: "#262624" })
    );
    plateOutline.position.copy(plate.position);
    group.add(plateOutline);

    activeLayout.slots.forEach((port, slotIndex) => {
      const moduleRow = Math.floor(slotIndex / activeLayout.grid_cols);
      const moduleCol = slotIndex % activeLayout.grid_cols;
      const moduleGridX = moduleCol * MODULE_COLS + MODULE_COLS / 2 - 0.25;
      const moduleGridZ = moduleRow * MODULE_ROWS + MODULE_ROWS / 2 - 0.25;
      const x = (moduleGridX - centerX) * GRID_STEP;
      const z = (moduleGridZ - centerZ) * GRID_STEP;
      const boundaryGeometry = new THREE.BoxGeometry(
        MODULE_COLS * GRID_STEP,
        0.025,
        MODULE_ROWS * GRID_STEP
      );
      const boundary = new THREE.LineSegments(
        new THREE.EdgesGeometry(boundaryGeometry),
        new THREE.LineBasicMaterial({ color: "#285d68", transparent: true, opacity: 0.72 })
      );
      boundaryGeometry.dispose();
      boundary.position.set(x, plate.position.y + 0.095, z);
      group.add(boundary);

      const label = createModuleLabel(port);
      label.position.set(x, plate.position.y + 0.38, z);
      group.add(label);
    });

    const extent = Math.max(boardWidth, boardDepth, 4);
    const height = maxStack * STACK_STEP;
    const distance = extent * 1.65 + height * 0.45;
    camera.position.set(0, distance * 0.72, distance);
    camera.lookAt(0, Math.min(height * 0.3, 2.4), 0);
    camera.updateProjectionMatrix();
  }, [topology, moduleLayout, board, latestColumnId, faultedColumnIds, unitMeta]);

  function pointerDown(event) {
    dragRef.current = {
      pointerId: event.pointerId,
      x: event.clientX,
      y: event.clientY
    };
    event.currentTarget.setPointerCapture?.(event.pointerId);
  }

  function pointerMove(event) {
    const drag = dragRef.current;
    const group = groupRef.current;
    if (!drag || drag.pointerId !== event.pointerId || !group) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    rotationRef.current.y += dx * 0.006;
    rotationRef.current.x = Math.max(
      -1.25,
      Math.min(0.35, rotationRef.current.x + dy * 0.004)
    );
    group.rotation.set(rotationRef.current.x, rotationRef.current.y, 0);
    drag.x = event.clientX;
    drag.y = event.clientY;
  }

  function pointerUp(event) {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragRef.current = null;
  }

  function wheel(event) {
    const camera = cameraRef.current;
    if (!camera) return;
    event.preventDefault();
    const factor = event.deltaY > 0 ? 1.08 : 0.92;
    const next = camera.position.clone().multiplyScalar(factor);
    if (next.length() >= 3 && next.length() <= 80) camera.position.copy(next);
  }

  return (
    <div
      ref={mountRef}
      className="live-board-scene"
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
      onPointerCancel={pointerUp}
      onWheel={wheel}
    />
  );
}
