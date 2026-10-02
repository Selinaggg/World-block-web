import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import Delaunator from "delaunator";
import { displayCoordinate, normalizeLayout } from "./layout.js";
import { FALLBACK_TOPOLOGY, ruleForUnit, topVisibleUnit, visibleLayers } from "./terrainRules.js";

const STEP = 1.05;
const BASE_RADIUS = 0.62;
const TOP_RADIUS = 0.5;
const LAYER_HEIGHT = 0.62;
const HALF_LAYER_OFFSET = LAYER_HEIGHT * 0.5;
const SEGMENTS = 14;
const WATER_SURFACE = "water";
const SEA_LEVEL = -0.08;

function makeMat(color, roughness = 0.84, opacity = 1) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0.02,
    flatShading: true,
    transparent: opacity < 1,
    opacity,
    side: THREE.DoubleSide
  });
}

function makeSurfaceMat(color, roughness = 0.35, opacity = 0.85) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0.02,
    flatShading: true,
    transparent: opacity < 1,
    opacity,
    side: THREE.FrontSide,
    depthWrite: true
  });
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

function hashValue(text, salt = 0) {
  let hash = 2166136261 + salt;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return ((hash >>> 0) % 10000) / 10000;
}

function irregularRing(id, radius, options = {}) {
  const points = [];
  const { stretch = [], softness = 0.055, y = 0, angleJitter = 0 } = options;
  for (let index = 0; index < SEGMENTS; index += 1) {
    const angle = (index / SEGMENTS) * Math.PI * 2 + (hashValue(id, 300 + index) - 0.5) * angleJitter;
    const direction = new THREE.Vector2(Math.cos(angle), Math.sin(angle));
    const organic = 1 + (hashValue(id, index) - 0.5) * softness;
    const extension = stretch.reduce((sum, neighbor) => {
      const influence = Math.max(0, direction.dot(neighbor.direction));
      return sum + neighbor.amount * Math.pow(influence, 3);
    }, 0);
    const finalRadius = radius * organic + extension;
    points.push(new THREE.Vector3(
      Math.cos(angle) * finalRadius,
      y,
      Math.sin(angle) * finalRadius
    ));
  }
  return points;
}

function shiftedRing(id, radius, x, z, options = {}) {
  return irregularRing(id, radius, options).map((point) => (
    new THREE.Vector3(point.x + x, point.y, point.z + z)
  ));
}

function cross(origin, a, b) {
  return (a.x - origin.x) * (b.z - origin.z) - (a.z - origin.z) * (b.x - origin.x);
}

function convexHull(points) {
  const sorted = [...points].sort((a, b) => a.x === b.x ? a.z - b.z : a.x - b.x);
  if (sorted.length <= 3) return sorted;

  const lower = [];
  for (const point of sorted) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) {
      lower.pop();
    }
    lower.push(point);
  }

  const upper = [];
  for (let index = sorted.length - 1; index >= 0; index -= 1) {
    const point = sorted[index];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) {
      upper.pop();
    }
    upper.push(point);
  }

  lower.pop();
  upper.pop();
  return lower.concat(upper);
}

function clusterCenter(items) {
  return items.reduce(
    (sum, item) => ({
      x: sum.x + item.worldX / items.length,
      z: sum.z + item.worldZ / items.length
    }),
    { x: 0, z: 0 }
  );
}

function expandedHull(hull, center, amount, id) {
  return hull.map((point, index) => {
    const dx = point.x - center.x;
    const dz = point.z - center.z;
    const length = Math.max(0.001, Math.hypot(dx, dz));
    const organic = amount * (0.82 + hashValue(id, 700 + index) * 0.36);
    return new THREE.Vector3(
      point.x + (dx / length) * organic,
      point.y,
      point.z + (dz / length) * organic
    );
  });
}

function organicClusterHull(items, center, radiusForItem, id, y) {
  const sampleCount = Math.max(28, Math.min(52, 24 + items.length * 7));
  let radialSamples = [];

  for (let index = 0; index < sampleCount; index += 1) {
    const angle = (index / sampleCount) * Math.PI * 2;
    const directionX = Math.cos(angle);
    const directionZ = Math.sin(angle);
    let farthest = 0;

    items.forEach((item, itemIndex) => {
      const phase = hashValue(`${id}:${item.column?.id || itemIndex}`, 710) * Math.PI * 2;
      const organicScale = 1
        + Math.cos(angle - phase * 0.41) * 0.075
        + Math.sin(angle * 2 + phase) * 0.09
        + Math.sin(angle * 3 - phase * 0.63) * 0.055
        + Math.sin(angle * 5 + phase * 0.27) * 0.025;
      const radius = Math.max(0.04, radiusForItem(item, itemIndex) * organicScale);
      const offsetX = item.worldX - center.x;
      const offsetZ = item.worldZ - center.z;
      const alongRay = offsetX * directionX + offsetZ * directionZ;
      const perpendicularSquared = offsetX * offsetX + offsetZ * offsetZ - alongRay * alongRay;
      const discriminant = radius * radius - perpendicularSquared;
      if (discriminant < 0) return;
      farthest = Math.max(farthest, alongRay + Math.sqrt(discriminant));
    });

    if (farthest <= 0) {
      farthest = Math.max(...items.map((item, itemIndex) => {
        const offsetX = item.worldX - center.x;
        const offsetZ = item.worldZ - center.z;
        return offsetX * directionX + offsetZ * directionZ + radiusForItem(item, itemIndex);
      }));
    }
    radialSamples.push(Math.max(0.06, farthest));
  }

  for (let pass = 0; pass < 1; pass += 1) {
    radialSamples = radialSamples.map((radius, index) => {
      const previous = radialSamples[(index - 1 + radialSamples.length) % radialSamples.length];
      const next = radialSamples[(index + 1) % radialSamples.length];
      return radius * 0.68 + (previous + next) * 0.16;
    });
  }

  return radialSamples.map((radius, index) => {
    const angle = (index / sampleCount) * Math.PI * 2;
    return new THREE.Vector3(
      center.x + Math.cos(angle) * radius,
      y,
      center.z + Math.sin(angle) * radius
    );
  });
}

function islandDiskGeometry(hull, y, center, id, centerLift = 0.02) {
  const vertices = [center.x, y + centerLift, center.z];
  for (let index = 0; index < hull.length; index += 1) {
    const point = hull[index];
    const edgeLift = (hashValue(id, 810 + index) - 0.5) * 0.045;
    vertices.push(point.x, y + edgeLift, point.z);
  }
  const indices = [];
  for (let index = 0; index < hull.length; index += 1) {
    indices.push(0, ((index + 1) % hull.length) + 1, index + 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function variableDiskGeometry(hull, center, id, centerLift = 0.01) {
  const centerY = hull.reduce((sum, point) => sum + point.y / hull.length, 0);
  const vertices = [center.x, centerY + centerLift, center.z];
  for (let index = 0; index < hull.length; index += 1) {
    const point = hull[index];
    const edgeLift = (hashValue(id, 1180 + index) - 0.5) * 0.012;
    vertices.push(point.x, point.y + edgeLift, point.z);
  }
  const indices = [];
  for (let index = 0; index < hull.length; index += 1) {
    indices.push(0, ((index + 1) % hull.length) + 1, index + 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function flatDiskGeometry(hull, center) {
  const vertices = [center.x, center.y, center.z];
  for (const point of hull) vertices.push(point.x, center.y, point.z);
  const indices = [];
  for (let index = 0; index < hull.length; index += 1) {
    indices.push(0, ((index + 1) % hull.length) + 1, index + 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function flatSurfaceWithHolesGeometry(hull, holes, y) {
  const contour = hull.map((point) => new THREE.Vector2(point.x, point.z));
  if (!THREE.ShapeUtils.isClockWise(contour)) contour.reverse();
  const holeContours = holes.map((hole) => {
    const points = hole.map((point) => new THREE.Vector2(point.x, point.z));
    if (THREE.ShapeUtils.isClockWise(points)) points.reverse();
    return points;
  });
  const faces = THREE.ShapeUtils.triangulateShape(contour, holeContours);
  const allPoints = contour.concat(...holeContours);
  const vertices = allPoints.flatMap((point) => [point.x, y, point.y]);
  const indices = [];
  for (const face of faces) {
    const [a, b, c] = face;
    const ax = vertices[b * 3] - vertices[a * 3];
    const az = vertices[b * 3 + 2] - vertices[a * 3 + 2];
    const bx = vertices[c * 3] - vertices[a * 3];
    const bz = vertices[c * 3 + 2] - vertices[a * 3 + 2];
    if (az * bx - ax * bz > 0) indices.push(a, b, c);
    else indices.push(a, c, b);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function islandSideGeometry(topHull, center, yTop, yBottom, id) {
  const bottomHull = topHull.map((point, index) => {
    const dx = point.x - center.x;
    const dz = point.z - center.z;
    const scale = 0.82 + hashValue(id, 900 + index) * 0.08;
    return new THREE.Vector3(center.x + dx * scale, yBottom, center.z + dz * scale);
  });

  const vertices = [];
  for (const point of topHull) vertices.push(point.x, yTop, point.z);
  for (const point of bottomHull) vertices.push(point.x, point.y, point.z);

  const indices = [];
  for (let index = 0; index < topHull.length; index += 1) {
    const next = (index + 1) % topHull.length;
    indices.push(index, next, topHull.length + next);
    indices.push(index, topHull.length + next, topHull.length + index);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function floatingUndersideGeometry(topRing, baseY, id) {
  const lowerY = baseY - (0.34 + hashValue(id, 1420) * 0.22);
  const lowerRing = topRing.map((point, index) => {
    const scale = 0.34 + hashValue(id, 1430 + index) * 0.16;
    return new THREE.Vector3(point.x * scale, lowerY + (hashValue(id, 1440 + index) - 0.5) * 0.08, point.z * scale);
  });
  const vertices = [];
  for (const point of topRing) vertices.push(point.x * 0.98, baseY + 0.018, point.z * 0.98);
  for (const point of lowerRing) vertices.push(point.x, point.y, point.z);
  const lowerCenter = vertices.length / 3;
  vertices.push(0, lowerY - 0.06, 0);

  const indices = [];
  for (let index = 0; index < topRing.length; index += 1) {
    const next = (index + 1) % topRing.length;
    indices.push(index, next, topRing.length + next);
    indices.push(index, topRing.length + next, topRing.length + index);
    indices.push(lowerCenter, topRing.length + index, topRing.length + next);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function prismGeometry(bottomRing, topRing, y0, y1, centerLift = 0) {
  const vertices = [];
  for (const point of bottomRing) vertices.push(point.x, y0, point.z);
  for (const point of topRing) vertices.push(point.x, y1, point.z);
  vertices.push(0, y0, 0);
  vertices.push(0, y1 + centerLift, 0);

  const bottomCenter = SEGMENTS * 2;
  const topCenter = bottomCenter + 1;
  const indices = [];

  for (let index = 0; index < SEGMENTS; index += 1) {
    const next = (index + 1) % SEGMENTS;
    indices.push(index, next, SEGMENTS + next);
    indices.push(index, SEGMENTS + next, SEGMENTS + index);
    indices.push(topCenter, SEGMENTS + index, SEGMENTS + next);
    indices.push(bottomCenter, next, index);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function diskGeometry(ring, y, centerLift = 0) {
  const vertices = [0, y + centerLift, 0];
  for (const point of ring) vertices.push(point.x, y, point.z);
  const indices = [];
  for (let index = 0; index < ring.length; index += 1) {
    indices.push(0, index + 1, ((index + 1) % ring.length) + 1);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

function moundGeometry(rings, topCenterLift, materialForBand, topMaterialIndex) {
  const vertices = [];
  for (const ring of rings) {
    for (const point of ring) vertices.push(point.x, point.y, point.z);
  }

  const topRingOffset = (rings.length - 1) * SEGMENTS;
  const topY = rings[rings.length - 1][0].y;
  const topCenterIndex = vertices.length / 3;
  vertices.push(0, topY + topCenterLift, 0);

  const indices = [];
  const groups = [];

  for (let band = 0; band < rings.length - 1; band += 1) {
    const groupStart = indices.length;
    const lowerOffset = band * SEGMENTS;
    const upperOffset = (band + 1) * SEGMENTS;
    for (let index = 0; index < SEGMENTS; index += 1) {
      const next = (index + 1) % SEGMENTS;
      indices.push(lowerOffset + index, lowerOffset + next, upperOffset + next);
      indices.push(lowerOffset + index, upperOffset + next, upperOffset + index);
    }
    groups.push({
      start: groupStart,
      count: indices.length - groupStart,
      materialIndex: materialForBand(band)
    });
  }

  const topStart = indices.length;
  for (let index = 0; index < SEGMENTS; index += 1) {
    indices.push(topCenterIndex, topRingOffset + index, topRingOffset + ((index + 1) % SEGMENTS));
  }
  groups.push({
    start: topStart,
    count: indices.length - topStart,
    materialIndex: topMaterialIndex
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.clearGroups();
  for (const group of groups) geometry.addGroup(group.start, group.count, group.materialIndex);
  geometry.computeVertexNormals();
  return geometry;
}

function visualRuleForLayer(unit, isTopLayer) {
  const rule = ruleForUnit(unit);
  if (rule.surface === WATER_SURFACE) {
    return {
      ...ruleForUnit("earth"),
      color: isTopLayer ? "#cda764" : "#b5874e",
      side: "#8f6c42"
    };
  }
  return rule;
}

function neighborStretch(item, positioned, surfaceById, wantedSurface, amount) {
  const stretch = [];
  for (const other of positioned) {
    if (other.column.id === item.column.id) continue;
    if (surfaceById.get(other.column.id) !== wantedSurface) continue;
    const dx = other.worldX - item.worldX;
    const dz = other.worldZ - item.worldZ;
    const distance = Math.hypot(dx, dz);
    if (distance > 0 && distance < STEP * 1.18) {
      stretch.push({
        direction: new THREE.Vector2(dx / distance, dz / distance),
        amount: amount * (1 - Math.min(1, distance / (STEP * 1.18)) * 0.25)
      });
    }
  }
  return stretch;
}

function columnYOffset(item) {
  return item.column.layer === "L0.5" ? HALF_LAYER_OFFSET : 0;
}

function terrainStretch(item, positioned, amount) {
  const stretch = [];
  for (const other of positioned) {
    if (other.column.id === item.column.id) continue;
    const dx = other.worldX - item.worldX;
    const dz = other.worldZ - item.worldZ;
    const distance = Math.hypot(dx, dz);
    if (distance > 0 && distance < STEP * 1.22) {
      stretch.push({
        direction: new THREE.Vector2(dx / distance, dz / distance),
        amount: amount * (1 - Math.min(1, distance / (STEP * 1.22)) * 0.18)
      });
    }
  }
  return stretch;
}

function connectedClusters(items, canConnect = () => true) {
  const remaining = new Set(items.map((item) => item.column.id));
  const byId = new Map(items.map((item) => [item.column.id, item]));
  const clusters = [];

  while (remaining.size) {
    const firstId = remaining.values().next().value;
    const queue = [byId.get(firstId)];
    const cluster = [];
    remaining.delete(firstId);

    while (queue.length) {
      const item = queue.shift();
      cluster.push(item);
      for (const otherId of [...remaining]) {
        const other = byId.get(otherId);
        const distance = Math.hypot(other.worldX - item.worldX, other.worldZ - item.worldZ);
        if (distance < STEP * 1.24 && canConnect(item, other)) {
          remaining.delete(otherId);
          queue.push(other);
        }
      }
    }

    clusters.push(cluster);
  }

  return clusters;
}

function terrainColumnsCanConnect(a, b, board) {
  const aProfile = verticalProfile(a, board[a.column.id] || []);
  const bProfile = verticalProfile(b, board[b.column.id] || []);
  if (!aProfile || !bProfile || aProfile.floating !== bProfile.floating) return false;
  if (!aProfile.floating) return true;
  const aBaseY = aProfile.baseY + columnYOffset(a);
  const bBaseY = bProfile.baseY + columnYOffset(b);
  return Math.abs(aBaseY - bBaseY) < LAYER_HEIGHT * 0.58;
}

function verticalProfile(item, stack) {
  const layers = visibleLayers(stack);
  if (!layers.length) return null;
  const clusterSeed = item.clusterId || item.column.id;
  const heightScale = 0.9 + hashValue(`${clusterSeed}:${item.column.id}`, 1200) * 0.2;
  const layerHeight = LAYER_HEIGHT * heightScale;
  const halfLevel = item.column.layer === "L0.5" ? 0.5 : 0;
  const baseLevel = layers[0].index + halfLevel;
  const baseY = layers[0].index * layerHeight;
  const visibleHeight = layers.length * layerHeight;
  return {
    baseLevel,
    baseY,
    floating: layers[0].index > 0,
    layerHeight,
    layers,
    topLevel: baseLevel + layers.length,
    topY: baseY + visibleHeight,
    visibleHeight
  };
}

function surfaceRuns(layers, wantedSurface) {
  const runs = [];
  let index = 0;
  while (index < layers.length) {
    if (ruleForUnit(layers[index].unit).surface !== wantedSurface) {
      index += 1;
      continue;
    }
    const start = index;
    while (
      index + 1 < layers.length
      && ruleForUnit(layers[index + 1].unit).surface === wantedSurface
    ) {
      index += 1;
    }
    runs.push({ count: index - start + 1, end: index, start });
    index += 1;
  }
  return runs;
}

function topSurfaceRunLength(layers, surface) {
  if (!layers.length || ruleForUnit(layers[layers.length - 1].unit).surface !== surface) return 0;
  const runs = surfaceRuns(layers, surface);
  return runs.length ? runs[runs.length - 1].count : 0;
}

function addClusterIsland(group, cluster, board) {
  const id = cluster.map((item) => item.column.id).sort().join("|");
  const center = clusterCenter(cluster);
  const profiles = cluster
    .map((item) => verticalProfile(item, board[item.column.id] || []))
    .filter(Boolean);
  const baseY = profiles.length ? Math.min(...profiles.map((profile) => profile.baseY)) : 0;
  const floating = profiles.some((profile) => profile.floating);
  if (floating) return;
  const outlinePoints = cluster.flatMap((item, index) => {
    const radius = 0.62 + hashValue(item.column.id, 1000 + index) * 0.12;
    return shiftedRing(`${item.column.id}-cluster`, radius, item.worldX, item.worldZ, {
      softness: 0.22
    });
  });
  const hull = expandedHull(convexHull(outlinePoints), center, 0.16, id);
  if (hull.length < 3) return;

  const shore = new THREE.Mesh(
    islandDiskGeometry(hull, baseY - 0.025, center, id, 0.035),
    makeMat("#d7b463", 0.9)
  );
  shore.castShadow = true;
  shore.receiveShadow = false;
  group.add(shore);

  const underwater = new THREE.Mesh(
    islandSideGeometry(hull, center, baseY - 0.03, floating ? baseY - 0.48 : -0.62, id),
    makeMat(floating ? "#9b7a4e" : "#1bb0b3", 0.46, floating ? 0.95 : 0.32)
  );
  underwater.receiveShadow = false;
  group.add(underwater);
}

function addLayeredBase(plot, item, stack, topSurface, occupiedPositioned) {
  const profile = verticalProfile(item, stack);
  if (!profile) return null;
  const clusterSeed = item.clusterId || item.column.id;
  const terrainLinks = terrainStretch(item, occupiedPositioned, 0.36);
  const platformSurface = topSurface === "human" || topSurface === "vegetation" || topSurface === "volcanic" || topSurface === WATER_SURFACE;
  const liquidSurface = topSurface === WATER_SURFACE;
  const topPlatformRadius = topSurface === "human"
    ? 0.38
    : topSurface === "vegetation"
      ? 0.32
      : topSurface === "volcanic"
        ? 0.36
        : liquidSurface
          ? 0.4
          : 0.22;
  const ringCount = Math.max(4, profile.layers.length + 3);
  const widthScale = 0.9 + hashValue(`${clusterSeed}:${item.column.id}`, 1300) * 0.2;
  const baseRadius = BASE_RADIUS * widthScale;
  const rings = [];
  let finalRadius = topPlatformRadius;

  for (let index = 0; index < ringCount; index += 1) {
    const progress = index / (ringCount - 1);
    const eased = Math.pow(progress, 1.15);
    const y = profile.baseY + profile.visibleHeight * eased;
    const naturalTerrace = Math.sin(progress * Math.PI * Math.max(1, profile.layers.length)) * 0.025;
    const radiusFalloff = Math.pow(progress, platformSurface ? 1.45 : 1.22);
    const radius = Math.max(
      topPlatformRadius,
      baseRadius * (1 - 0.62 * radiusFalloff) + naturalTerrace
    );
    if (index === ringCount - 1) finalRadius = radius;
    const stretchFade = 1 - progress * 0.68;
    const stretch = terrainLinks.map((entry) => ({ ...entry, amount: entry.amount * stretchFade }));
    rings.push(irregularRing(`${clusterSeed}-${item.column.id}-mound-${index}`, radius, {
      y,
      stretch,
      softness: 0.24 - progress * 0.08,
      angleJitter: 0.16
    }).map((point, pointIndex) => {
      if (index === 0 || index === ringCount - 1) return point;
      const waviness = (hashValue(`${clusterSeed}:${item.column.id}:layer`, index * 50 + pointIndex) - 0.5) * 0.12;
      return new THREE.Vector3(point.x, point.y + waviness, point.z);
    }));
  }

  const topRule = visualRuleForLayer(profile.layers[profile.layers.length - 1].unit, true);
  const capColor = topSurface === "human"
    ? "#d8b977"
    : topSurface === "volcanic"
    ? "#42352f"
    : topSurface === WATER_SURFACE
      ? "#cda764"
      : topRule.color;
  const materials = [
    ...profile.layers.map((layer, index) => {
      const rule = visualRuleForLayer(layer.unit, index === profile.layers.length - 1);
      return makeMat(index === profile.layers.length - 1 ? rule.side : rule.color, 0.88);
    }),
    makeMat(capColor, 0.9)
  ];
  const topMaterialIndex = materials.length - 1;
  const geometry = moundGeometry(
    rings,
    platformSurface ? 0.004 : 0.045,
    (band) => Math.min(profile.layers.length - 1, Math.floor((band / Math.max(1, ringCount - 2)) * profile.layers.length)),
    topMaterialIndex
  );
  if (profile.floating) {
    const underside = new THREE.Mesh(
      floatingUndersideGeometry(rings[0], profile.baseY, `${clusterSeed}:${item.column.id}:float`),
      makeMat("#8e693f", 0.88)
    );
    underside.castShadow = true;
    underside.receiveShadow = false;
    plot.add(underside);
  }
  const mesh = new THREE.Mesh(geometry, materials);
  mesh.castShadow = true;
  mesh.receiveShadow = false;
  plot.add(mesh);
  const topRing = rings[rings.length - 1];
  return {
    baseY: profile.baseY,
    floating: profile.floating,
    platformRadius: finalRadius,
    topRing,
    topSurface,
    topY: profile.topY
  };
}

function addLiquid(plot, item, positioned, surfaceById, surface, height) {
  const lava = surface === "lava";
  const stretch = neighborStretch(item, positioned, surfaceById, surface, 0.34);
  const ring = irregularRing(`${item.column.id}-${surface}`, 0.32, {
    stretch,
    softness: 0.2
  });
  const liquid = new THREE.Mesh(
    diskGeometry(ring, height + 0.036, lava ? 0.012 : 0.006),
    makeMat(lava ? "#f05832" : "#45aee1", lava ? 0.54 : 0.38, lava ? 0.96 : 0.82)
  );
  liquid.receiveShadow = true;
  plot.add(liquid);

  const highlightRing = irregularRing(`${item.column.id}-${surface}-glow`, 0.16, {
    stretch: stretch.map((entry) => ({ ...entry, amount: entry.amount * 0.7 })),
    softness: 0.12
  });
  const highlight = new THREE.Mesh(
    diskGeometry(highlightRing, height + 0.047, 0.004),
    makeMat(lava ? "#ffc05e" : "#c9f4ff", 0.35, lava ? 0.78 : 0.5)
  );
  plot.add(highlight);
}

function addVegetation(plot, columnId, platform) {
  const height = platform.topY;
  const maxRadius = Math.max(0.08, platform.platformRadius - 0.12);
  const count = 3 + Math.floor(hashValue(columnId, 38) * 4);
  for (let index = 0; index < count; index += 1) {
    const angle = (index / count) * Math.PI * 2 + hashValue(columnId, 40) * 1.7;
    const radius = 0.04 + hashValue(columnId, 50 + index) * maxRadius;
    const stemHeight = 0.14 + hashValue(columnId, 60 + index) * 0.24;
    const tall = hashValue(columnId, 90 + index) > 0.45;

    if (tall) {
      const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.024, stemHeight * 0.85, 5),
        makeMat("#8a6841", 0.88)
      );
      trunk.position.set(Math.cos(angle) * radius, height + stemHeight * 0.43 - 0.012, Math.sin(angle) * radius);
      trunk.castShadow = true;
      plot.add(trunk);

      const tree = new THREE.Mesh(
        new THREE.ConeGeometry(0.06 + hashValue(columnId, 94 + index) * 0.035, stemHeight * 1.45, 5),
        makeMat(index % 2 ? "#d7a334" : "#7fae38", 0.84)
      );
      tree.position.set(trunk.position.x, height + stemHeight * 1.08 + 0.035, trunk.position.z);
      tree.castShadow = true;
      plot.add(tree);
      continue;
    }

    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 0.017, stemHeight, 5),
      makeMat("#4f8b46", 0.9)
    );
    stem.position.set(Math.cos(angle) * radius, height + stemHeight / 2 - 0.012, Math.sin(angle) * radius);
    plot.add(stem);

    const flowerColor = ["#f4d85c", "#f07a91", "#f2efe2", "#d69b36"][index % 4];
    const flower = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.04 + hashValue(columnId, 70 + index) * 0.03, 0),
      makeMat(flowerColor, 0.78)
    );
    flower.position.set(stem.position.x, height + stemHeight + 0.06, stem.position.z);
    flower.castShadow = true;
    plot.add(flower);
  }
}

function addBuildingCluster(plot, columnId, platform) {
  const height = platform.topY;
  const layerCount = platform.layerCount || Math.max(1, Math.round(height / LAYER_HEIGHT));
  const highPlatform = layerCount >= 3 || height >= LAYER_HEIGHT * 2.8;
  const count = highPlatform || platform.platformRadius < 0.3
    ? 1
    : 2 + Math.floor(hashValue(columnId, 168) * 2);
  for (let index = 0; index < count; index += 1) {
    const angle = (index / count) * Math.PI * 2 + hashValue(columnId, 170) * 0.9;
    const radiusLimit = Math.max(0.08, platform.platformRadius - 0.12);
    const radius = count === 1
      ? 0
      : Math.min(radiusLimit, 0.09 + hashValue(columnId, 180 + index) * 0.045);
    const groupScale = count === 1 ? 1 : 0.76;
    const width = (0.12 + hashValue(columnId, 190 + index) * 0.07) * groupScale;
    const depth = (0.12 + hashValue(columnId, 200 + index) * 0.07) * groupScale;
    const houseHeight = count === 1
      ? 0.2 + hashValue(columnId, 210 + index) * 0.28
      : 0.16 + hashValue(columnId, 210 + index) * 0.16;
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(width, houseHeight, depth),
      makeMat(index % 3 === 0 ? "#f2ead4" : "#fff7df", 0.86)
    );
    base.position.set(Math.cos(angle) * radius, height + houseHeight / 2 - 0.006, Math.sin(angle) * radius);
    base.rotation.y = angle + Math.PI / 4;
    base.castShadow = true;
    base.receiveShadow = false;
    plot.add(base);

    const roofColor = ["#d9952f", "#e47f32", "#c06d2d", "#b78a42"][index % 4];
    const roof = new THREE.Mesh(
      new THREE.ConeGeometry(Math.max(width, depth) * 0.78, 0.1 + houseHeight * 0.18, 4),
      makeMat(roofColor, 0.76)
    );
    roof.rotation.y = base.rotation.y + Math.PI / 4;
    roof.position.set(base.position.x, height + houseHeight + 0.075, base.position.z);
    roof.castShadow = true;
    plot.add(roof);

    const windowPanel = new THREE.Mesh(
      new THREE.BoxGeometry(width * 0.12, houseHeight * 0.34, 0.006),
      makeMat("#1d93a3", 0.55)
    );
    const front = new THREE.Vector3(Math.sin(base.rotation.y), 0, Math.cos(base.rotation.y));
    windowPanel.position.set(
      base.position.x + front.x * depth * 0.52,
      height + houseHeight * 0.58,
      base.position.z + front.z * depth * 0.52
    );
    windowPanel.rotation.y = base.rotation.y;
    plot.add(windowPanel);
  }
}

function addAnimal(plot, height) {
  const body = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.13, 0),
    makeMat("#9f784d", 0.9)
  );
  body.scale.set(1.45, 0.78, 0.82);
  body.position.set(0, height + 0.15, 0);
  body.castShadow = true;
  plot.add(body);

  const head = new THREE.Mesh(
    new THREE.DodecahedronGeometry(0.07, 0),
    makeMat("#7d5d3d", 0.9)
  );
  head.position.set(0.18, height + 0.17, 0.03);
  head.castShadow = true;
  plot.add(head);

  for (const x of [-0.08, 0.08]) {
    for (const z of [-0.05, 0.08]) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.011, 0.014, 0.12, 5),
        makeMat("#5e4933", 0.9)
      );
      leg.position.set(x, height + 0.055, z);
      plot.add(leg);
    }
  }
}

function addVolcanicCracks(plot, columnId, platform) {
  const height = platform.topY;
  const maxRadius = Math.max(0.08, platform.platformRadius - 0.14);
  const count = 3 + Math.floor(hashValue(columnId, 240) * 4);
  for (let index = 0; index < count; index += 1) {
    const length = 0.12 + hashValue(columnId, 250 + index) * 0.18;
    const width = 0.01 + hashValue(columnId, 260 + index) * 0.008;
    const crack = new THREE.Mesh(
      new THREE.BoxGeometry(width, 0.01, length),
      makeMat(index % 2 ? "#ff7a35" : "#f24a2e", 0.46, 0.92)
    );
    const angle = hashValue(columnId, 270 + index) * Math.PI * 2;
    const radius = hashValue(columnId, 280 + index) * maxRadius;
    crack.position.set(Math.cos(angle) * radius, height + 0.012, Math.sin(angle) * radius);
    crack.rotation.y = angle + (hashValue(columnId, 290 + index) - 0.5) * 0.9;
    plot.add(crack);
  }
}

function addWaterBodies(group, platforms) {
  const waterPlatforms = platforms.filter((platform) => platform.topSurface === WATER_SURFACE);
  for (const cluster of connectedClusters(waterPlatforms)) {
    const id = `water:${cluster.map((platform) => platform.column.id).sort().join("|")}`;
    const center = clusterCenter(cluster);
    const outlinePoints = cluster.flatMap((platform) => {
      const y = platform.topY + platform.yOffset + 0.012;
      return platform.topRing.map((point) => new THREE.Vector3(
        platform.worldX + point.x * (cluster.length > 1 ? 0.62 : 0.52),
        y,
        platform.worldZ + point.z * (cluster.length > 1 ? 0.62 : 0.52)
      ));
    });
    const hull = expandedHull(convexHull(outlinePoints), center, cluster.length > 1 ? 0.04 : 0.01, id);
    if (hull.length < 3) continue;
    const water = new THREE.Mesh(
      variableDiskGeometry(hull, center, id, 0.012),
      makeMat("#58c9ed", 0.26, 0.82)
    );
    water.receiveShadow = false;
    group.add(water);

    const glintHull = expandedHull(hull, center, -0.42, `${id}:glint`);
    if (glintHull.length >= 3) {
      const glint = new THREE.Mesh(
        variableDiskGeometry(
          glintHull.map((point) => new THREE.Vector3(point.x, point.y + 0.018, point.z)),
          center,
          `${id}:glint`,
          0.004
        ),
        makeMat("#c9f4ff", 0.28, 0.42)
      );
      group.add(glint);
    }
  }
}

function makeVertexMat() {
  return new THREE.MeshStandardMaterial({
    roughness: 0.86,
    metalness: 0.02,
    flatShading: true,
    side: THREE.DoubleSide,
    vertexColors: true
  });
}

function terrainColorForSurface(surface) {
  if (surface === "vegetation") return new THREE.Color("#86aa52");
  if (surface === "volcanic") return new THREE.Color("#302b27");
  if (surface === "human") return new THREE.Color("#d0ad68");
  if (surface === WATER_SURFACE) return new THREE.Color("#ad8055");
  return new THREE.Color("#c79756");
}

function structuralSurfaceForLayer(layers, layerIndex) {
  const surface = ruleForUnit(layers[layerIndex].unit).surface;
  if (surface !== "human") return surface;

  for (let index = layerIndex - 1; index >= 0; index -= 1) {
    const supportingSurface = ruleForUnit(layers[index].unit).surface;
    if (supportingSurface === "human" || supportingSurface === "void") continue;
    if (supportingSurface === WATER_SURFACE) return "earth";
    return supportingSurface;
  }
  return "earth";
}

function terrainColorForSample(sample, x, z, clusterId) {
  const profile = sample.nearest.profile;
  const layers = profile.layers;
  const phase = hashValue(`${clusterId}:${sample.nearest.column.id}`, 2310) * Math.PI * 2;
  const boundaryWave = (
    Math.sin(x * 1.18 + phase) * 0.055
    + Math.cos(z * 1.42 - phase * 0.73) * 0.04
    + Math.sin((x + z) * 0.86 + phase * 1.31) * 0.025
  );
  const rawLayerPosition = (sample.height - sample.nearest.baseY) / profile.layerHeight + boundaryWave;
  const layerPosition = Math.max(0, Math.min(layers.length - 0.001, rawLayerPosition));
  const layerIndex = Math.floor(layerPosition);
  const surface = structuralSurfaceForLayer(layers, layerIndex);
  const isTopLayer = layerIndex === layers.length - 1;

  if (surface === WATER_SURFACE) {
    return new THREE.Color(isTopLayer ? "#ad8055" : "#916848");
  }
  if (surface === "volcanic") {
    return new THREE.Color("#302b27");
  }
  return terrainColorForSurface(surface);
}

function continuousTerrainNoise(x, z, clusterId) {
  const phaseA = hashValue(clusterId, 1800) * Math.PI * 2;
  const phaseB = hashValue(clusterId, 1801) * Math.PI * 2;
  return (
    Math.sin(x * 1.08 + phaseA) * 0.48
    + Math.cos(z * 1.26 - phaseB) * 0.34
    + Math.sin((x + z) * 0.62 + phaseA * 0.37) * 0.18
  );
}

function darkerColor(color, amount = 0.72) {
  return color.clone().multiplyScalar(amount);
}

function sideColorForSurface(surface, floating) {
  if (surface === "volcanic") return new THREE.Color("#28221e");
  if (surface === "vegetation") return new THREE.Color("#5f7438");
  if (surface === "human") return new THREE.Color("#94713f");
  if (surface === WATER_SURFACE) return new THREE.Color("#7e5b42");
  return new THREE.Color(floating ? "#8d6840" : "#9a7244");
}

function smoothClosedHull(hull, strength = 0.22, iterations = 2) {
  let current = hull.map((point) => point.clone());
  for (let pass = 0; pass < iterations; pass += 1) {
    current = current.map((point, index) => {
      const previous = current[(index - 1 + current.length) % current.length];
      const next = current[(index + 1) % current.length];
      return new THREE.Vector3(
        point.x * (1 - strength) + ((previous.x + next.x) / 2) * strength,
        point.y,
        point.z * (1 - strength) + ((previous.z + next.z) / 2) * strength
      );
    });
  }
  return current;
}

function smoothTerrainBoundary(vertices, points, boundaryPairs) {
  const adjacency = new Map();
  for (const [a, b] of boundaryPairs) {
    if (!adjacency.has(a)) adjacency.set(a, new Set());
    if (!adjacency.has(b)) adjacency.set(b, new Set());
    adjacency.get(a).add(b);
    adjacency.get(b).add(a);
  }

  for (let pass = 0; pass < 3; pass += 1) {
    const updates = new Map();
    for (const [index, neighbors] of adjacency) {
      if (neighbors.size !== 2) continue;
      const neighborPoints = [...neighbors].map((neighbor) => points[neighbor]);
      updates.set(index, {
        x: points[index].x * 0.68 + ((neighborPoints[0].x + neighborPoints[1].x) / 2) * 0.32,
        z: points[index].z * 0.68 + ((neighborPoints[0].z + neighborPoints[1].z) / 2) * 0.32
      });
    }
    for (const [index, update] of updates) {
      points[index].x = update.x;
      points[index].z = update.z;
      vertices[index * 3] = update.x;
      vertices[index * 3 + 2] = update.z;
    }
  }
}

function settleTerrainBoundaryAtSea(vertices, points, boundaryPairs, clusterId) {
  const boundary = new Set(boundaryPairs.flat());
  for (const index of boundary) {
    const ripple = (hashValue(`${clusterId}:shore:${index}`, 2360) - 0.5) * 0.025;
    const shorelineY = SEA_LEVEL + 0.095 + ripple;
    const currentY = vertices[index * 3 + 1];
    const settledY = Math.min(currentY, shorelineY);
    vertices[index * 3 + 1] = settledY;
    points[index].sample.height = settledY;
  }
}

function makeFacetedColorGeometry(geometry) {
  const faceted = geometry.toNonIndexed();
  const colors = faceted.getAttribute("color");
  for (let vertex = 0; vertex < colors.count; vertex += 3) {
    const faceColors = [0, 1, 2].map((corner) => new THREE.Color(
      colors.getX(vertex + corner),
      colors.getY(vertex + corner),
      colors.getZ(vertex + corner)
    ));
    const pairs = [[0, 1], [1, 2], [0, 2]];
    const [first, second] = pairs.reduce((closest, pair) => {
      const colorDistance = (a, b) => (
        (a.r - b.r) ** 2 + (a.g - b.g) ** 2 + (a.b - b.b) ** 2
      );
      const distance = colorDistance(faceColors[pair[0]], faceColors[pair[1]]);
      const closestDistance = colorDistance(faceColors[closest[0]], faceColors[closest[1]]);
      return distance < closestDistance ? pair : closest;
    });
    const red = (faceColors[first].r + faceColors[second].r) / 2;
    const green = (faceColors[first].g + faceColors[second].g) / 2;
    const blue = (faceColors[first].b + faceColors[second].b) / 2;
    for (let corner = 0; corner < 3; corner += 1) {
      colors.setXYZ(vertex + corner, red, green, blue);
    }
  }
  colors.needsUpdate = true;
  faceted.computeVertexNormals();
  geometry.dispose();
  return faceted;
}

function itemMeta(item, board) {
  const stack = board[item.column.id] || [];
  const topUnit = topVisibleUnit(stack);
  if (!topUnit) return null;
  const profile = verticalProfile(item, stack);
  if (!profile) return null;
  const surface = ruleForUnit(topUnit).surface;
  const tallBaseExpansion = Math.min(0.22, Math.max(0, profile.layers.length - 2) * 0.07);
  return {
    ...item,
    baseY: profile.baseY + columnYOffset(item),
    floating: profile.floating,
    profile,
    radius: 0.78 + hashValue(`${item.clusterId}:${item.column.id}`, 1700) * 0.12 + tallBaseExpansion,
    surface,
    topRunLength: topSurfaceRunLength(profile.layers, surface),
    topY: profile.topY + columnYOffset(item)
  };
}

function pointInHull(x, z, hull) {
  let inside = false;
  for (let index = 0, previous = hull.length - 1; index < hull.length; previous = index, index += 1) {
    const a = hull[index];
    const b = hull[previous];
    const crosses = (a.z > z) !== (b.z > z)
      && x < ((b.x - a.x) * (z - a.z)) / (b.z - a.z) + a.x;
    if (crosses) inside = !inside;
  }
  return inside;
}

function distanceToHull(x, z, hull) {
  let closest = Infinity;
  for (let index = 0; index < hull.length; index += 1) {
    const a = hull[index];
    const b = hull[(index + 1) % hull.length];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const lengthSquared = dx * dx + dz * dz;
    const progress = lengthSquared > 0
      ? Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / lengthSquared))
      : 0;
    const nearestX = a.x + dx * progress;
    const nearestZ = a.z + dz * progress;
    closest = Math.min(closest, Math.hypot(x - nearestX, z - nearestZ));
  }
  return closest;
}

function closestPointOnHull(hull, targetX, targetZ) {
  let closest = null;
  let closestDistance = Infinity;
  for (let index = 0; index < hull.length; index += 1) {
    const a = hull[index];
    const b = hull[(index + 1) % hull.length];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const lengthSquared = dx * dx + dz * dz;
    const progress = lengthSquared > 0
      ? Math.max(0, Math.min(1, ((targetX - a.x) * dx + (targetZ - a.z) * dz) / lengthSquared))
      : 0;
    const x = a.x + dx * progress;
    const z = a.z + dz * progress;
    const distance = Math.hypot(targetX - x, targetZ - z);
    if (distance < closestDistance) {
      closestDistance = distance;
      closest = new THREE.Vector3(x, a.y, z);
    }
  }
  return closest;
}

function stepChannelSampleAt(x, z, channel) {
  let closest = null;
  for (let index = 0; index < channel.sections.length - 1; index += 1) {
    const a = channel.sections[index];
    const b = channel.sections[index + 1];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const lengthSquared = dx * dx + dz * dz;
    const progress = lengthSquared > 0
      ? Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / lengthSquared))
      : 0;
    const nearestX = a.x + dx * progress;
    const nearestZ = a.z + dz * progress;
    const distance = Math.hypot(x - nearestX, z - nearestZ);
    if (!closest || distance < closest.distance) {
      closest = {
        distance,
        width: THREE.MathUtils.lerp(a.width, b.width, progress),
        y: THREE.MathUtils.lerp(a.y, b.y, progress)
      };
    }
  }
  return closest;
}

function shapeTerrainForBasins(x, z, height, basins, clusterId) {
  let shapedHeight = height;
  for (const basin of basins) {
    if (basin.kind === "step-channel") {
      const sample = stepChannelSampleAt(x, z, basin);
      if (!sample || sample.distance >= sample.width + basin.bankWidth) continue;
      if (sample.distance <= sample.width) {
        const lateralProgress = sample.distance / Math.max(0.001, sample.width);
        const floorY = sample.y - basin.depth + lateralProgress * 0.012;
        shapedHeight = Math.min(shapedHeight, floorY);
      } else {
        const influence = 1 - (sample.distance - sample.width) / basin.bankWidth;
        const eased = influence * influence * (3 - 2 * influence);
        const bankHeight = sample.y + 0.025;
        shapedHeight = THREE.MathUtils.lerp(shapedHeight, Math.max(shapedHeight, bankHeight), eased * 0.8);
      }
      continue;
    }
    const inside = pointInHull(x, z, basin.hull);
    const distance = distanceToHull(x, z, basin.hull);
    if (inside) {
      const basinFloor = basin.levelY - (basin.surface === WATER_SURFACE ? 0.055 : 0.045);
      if (basin.shoreWidth && distance <= basin.shoreWidth) {
        const progress = distance / basin.shoreWidth;
        const eased = progress * progress * (3 - 2 * progress);
        shapedHeight = THREE.MathUtils.lerp(basin.levelY + 0.038, basin.levelY - 0.006, eased);
      } else if (basin.shoreWidth && distance <= basin.shoreWidth + basin.innerSlopeWidth) {
        const progress = (distance - basin.shoreWidth) / basin.innerSlopeWidth;
        const eased = progress * progress * (3 - 2 * progress);
        shapedHeight = THREE.MathUtils.lerp(basin.levelY - 0.006, basinFloor, eased);
      } else {
        shapedHeight = Math.min(shapedHeight, basinFloor);
      }
      continue;
    }
    if (distance >= basin.bankWidth) continue;
    const bankInfluence = 1 - distance / basin.bankWidth;
    const easedInfluence = bankInfluence * bankInfluence * (3 - 2 * bankInfluence);
    const bankNoise = continuousTerrainNoise(x, z, `${clusterId}:${basin.id}:bank`) * 0.012;
    const bankHeight = basin.levelY + 0.04 + easedInfluence * 0.045 + bankNoise * easedInfluence;
    shapedHeight = Math.max(shapedHeight, bankHeight);
  }
  return shapedHeight;
}

function shapeTerrainForTopSupports(x, z, height, metas, clusterId) {
  let shapedHeight = height;
  for (const meta of metas) {
    if (meta.surface !== "human" && meta.surface !== "vegetation") continue;
    const distance = Math.hypot(x - meta.worldX, z - meta.worldZ);
    const human = meta.surface === "human";
    const coreRadius = human ? 0.34 : 0.24;
    const transitionRadius = human ? 0.62 : 0.56;
    if (distance >= transitionRadius) continue;

    const surfaceNoise = human
      ? 0
      : continuousTerrainNoise(x, z, `${clusterId}:${meta.column.id}:green-support`) * 0.025;
    const supportY = meta.topY + 0.002 + surfaceNoise;
    if (distance <= coreRadius) {
      shapedHeight = Math.max(shapedHeight, supportY);
      continue;
    }

    const progress = (transitionRadius - distance) / (transitionRadius - coreRadius);
    const influence = progress * progress * (3 - 2 * progress);
    shapedHeight = Math.max(shapedHeight, THREE.MathUtils.lerp(height, supportY, influence));
  }
  return shapedHeight;
}

function shapeTerrainForIntermediateTerraces(x, z, height, terraces) {
  let shapedHeight = height;
  for (const terrace of terraces) {
    if (!pointInHull(x, z, terrace.hull)) {
      const outerDistance = distanceToHull(x, z, terrace.hull);
      if (outerDistance >= terrace.outerBankWidth) continue;
      const influence = 1 - outerDistance / terrace.outerBankWidth;
      const easedInfluence = influence * influence * (3 - 2 * influence);
      const bankNoise = continuousTerrainNoise(x, z, `${terrace.id}:outer-bank`) * 0.01;
      const bankHeight = terrace.levelY + 0.035 + 0.04 * easedInfluence + bankNoise * easedInfluence;
      shapedHeight = Math.max(shapedHeight, bankHeight);
      continue;
    }
    const floorDepth = terrace.surface === WATER_SURFACE ? 0.055 : 0.045;
    const outerBankDistance = distanceToHull(x, z, terrace.hull);
    if (outerBankDistance < terrace.outerBankWidth) {
      const progress = outerBankDistance / terrace.outerBankWidth;
      const eased = progress * progress * (3 - 2 * progress);
      const raisedEdge = terrace.levelY + (terrace.surface === WATER_SURFACE ? 0.052 : 0.045);
      const submergedFloor = terrace.levelY - floorDepth;
      shapedHeight = THREE.MathUtils.lerp(raisedEdge, submergedFloor, eased);
      continue;
    }
    if (terrace.islandHull && pointInHull(x, z, terrace.islandHull)) {
      const bankDistance = distanceToHull(x, z, terrace.islandHull);
      if (bankDistance >= terrace.islandBankWidth) continue;
      const progress = bankDistance / terrace.islandBankWidth;
      const eased = progress * progress * (3 - 2 * progress);
      const submergedEdge = terrace.levelY - floorDepth;
      shapedHeight = Math.min(shapedHeight, THREE.MathUtils.lerp(submergedEdge, shapedHeight, eased));
      continue;
    }
    shapedHeight = Math.min(shapedHeight, terrace.levelY - floorDepth);
  }
  return shapedHeight;
}

function terrainAt(x, z, metas, clusterId, basins = [], terraces = []) {
  let weightSum = 0;
  let heightSum = 0;
  let nearest = metas[0];
  let nearestDistance = Infinity;
  let strongest = 0;
  const baseY = Math.min(...metas.map((meta) => meta.baseY));

  for (const meta of metas) {
    const distance = Math.hypot(x - meta.worldX, z - meta.worldZ);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = meta;
    }
    const normalized = distance / meta.radius;
    if (normalized < 1) {
      const weight = Math.pow(1 - normalized * normalized, 2);
      weightSum += weight;
      heightSum += meta.topY * weight;
      strongest = Math.max(strongest, weight);
    }
  }

  if (weightSum <= 0) return null;
  const averaged = heightSum / weightSum;
  const edgeFade = Math.min(1, weightSum * 1.15);
  const taperPower = 1 + Math.max(0, nearest.profile.layers.length - 2) * 0.16;
  const taperedFade = Math.pow(edgeFade, taperPower);
  const tallNoiseScale = 0.07 + Math.min(0.06, Math.max(0, nearest.profile.layers.length - 2) * 0.025);
  const noise = continuousTerrainNoise(x, z, clusterId) * tallNoiseScale;
  const naturalHeight = baseY + (averaged - baseY) * taperedFade + noise * taperedFade;
  const basinHeight = shapeTerrainForBasins(x, z, naturalHeight, basins, clusterId);
  const terraceHeight = shapeTerrainForIntermediateTerraces(x, z, basinHeight, terraces);
  const height = shapeTerrainForTopSupports(x, z, terraceHeight, metas, clusterId);
  return {
    baseY,
    edgeFade: taperedFade,
    height,
    nearest,
    strongest,
    surface: nearest.surface
  };
}

function buildClusterTerrainGeometry(metas, clusterId, basins = [], terraces = []) {
  const pointSpacing = 0.2;
  const rowSpacing = pointSpacing * Math.sqrt(3) / 2;
  const minX = Math.min(...metas.map((meta) => meta.worldX - meta.radius)) - 0.18;
  const maxX = Math.max(...metas.map((meta) => meta.worldX + meta.radius)) + 0.18;
  const minZ = Math.min(...metas.map((meta) => meta.worldZ - meta.radius)) - 0.18;
  const maxZ = Math.max(...metas.map((meta) => meta.worldZ + meta.radius)) + 0.18;
  const points = [];
  const pointBuckets = new Map();
  const bucketSize = 0.05;

  function bucketCoordinates(x, z) {
    return [Math.floor(x / bucketSize), Math.floor(z / bucketSize)];
  }

  function supportLockedAt(x, z) {
    return metas.some((meta) => {
      if (meta.surface !== "human" && meta.surface !== "vegetation") return false;
      const radius = meta.surface === "human" ? 0.36 : 0.27;
      return Math.hypot(x - meta.worldX, z - meta.worldZ) <= radius;
    });
  }

  function addPoint(x, z, feature = false) {
    const sample = terrainAt(x, z, metas, clusterId, basins, terraces);
    if (!sample) return null;
    const [bucketX, bucketZ] = bucketCoordinates(x, z);
    for (let offsetX = -1; offsetX <= 1; offsetX += 1) {
      for (let offsetZ = -1; offsetZ <= 1; offsetZ += 1) {
        const bucket = pointBuckets.get(`${bucketX + offsetX}:${bucketZ + offsetZ}`) || [];
        const existingIndex = bucket.find((index) => (
          Math.hypot(points[index].x - x, points[index].z - z) < 0.036
        ));
        if (existingIndex !== undefined) {
          if (feature) points[existingIndex].feature = true;
          if (supportLockedAt(x, z)) points[existingIndex].locked = true;
          return existingIndex;
        }
      }
    }

    const index = points.length;
    points.push({
      feature,
      locked: supportLockedAt(x, z),
      sample,
      x,
      z
    });
    const bucketKey = `${bucketX}:${bucketZ}`;
    const bucket = pointBuckets.get(bucketKey) || [];
    bucket.push(index);
    pointBuckets.set(bucketKey, bucket);
    return index;
  }

  const rowCount = Math.ceil((maxZ - minZ) / rowSpacing) + 1;
  const colCount = Math.ceil((maxX - minX) / pointSpacing) + 2;
  for (let row = 0; row < rowCount; row += 1) {
    const zBase = minZ + row * rowSpacing;
    for (let col = 0; col < colCount; col += 1) {
      const stagger = row % 2 ? pointSpacing * 0.5 : 0;
      const xBase = minX + col * pointSpacing + stagger;
      const jitterX = (hashValue(`${clusterId}:sample-x:${row}:${col}`, 2500) - 0.5) * pointSpacing * 0.22;
      const jitterZ = (hashValue(`${clusterId}:sample-z:${row}:${col}`, 2510) - 0.5) * rowSpacing * 0.18;
      addPoint(xBase + jitterX, zBase + jitterZ);
    }
  }

  function addCircularFeature(meta, radius, count, id) {
    const phase = hashValue(id, 2520) * Math.PI * 2;
    for (let index = 0; index < count; index += 1) {
      const angle = (index / count) * Math.PI * 2;
      const variation = 1
        + Math.sin(angle * 3 + phase) * 0.045
        + Math.cos(angle * 2 - phase * 0.61) * 0.025;
      addPoint(
        meta.worldX + Math.cos(angle) * radius * variation,
        meta.worldZ + Math.sin(angle) * radius * variation,
        true
      );
    }
  }

  for (const meta of metas) {
    addPoint(meta.worldX, meta.worldZ, true);
    addCircularFeature(meta, meta.radius * 0.94, 18, `${clusterId}:${meta.column.id}:outline`);
    if (meta.surface === "human" || meta.surface === "vegetation") {
      addCircularFeature(
        meta,
        meta.surface === "human" ? 0.36 : 0.27,
        12,
        `${clusterId}:${meta.column.id}:support`
      );
    }
    for (let ordinal = 1; ordinal < meta.profile.layers.length; ordinal += 1) {
      const levelY = meta.baseY + ordinal * meta.profile.layerHeight;
      const radius = contourRadiusAtLevel(meta, levelY);
      if (radius > 0.08) {
        addCircularFeature(meta, radius, 12, `${clusterId}:${meta.column.id}:layer:${ordinal}`);
      }
    }
  }

  function addHullFeature(hull) {
    if (!hull?.length) return;
    for (let index = 0; index < hull.length; index += 1) {
      const start = hull[index];
      const end = hull[(index + 1) % hull.length];
      const length = Math.hypot(end.x - start.x, end.z - start.z);
      const segmentCount = Math.max(1, Math.ceil(length / (pointSpacing * 0.72)));
      for (let segment = 0; segment < segmentCount; segment += 1) {
        const progress = segment / segmentCount;
        addPoint(
          THREE.MathUtils.lerp(start.x, end.x, progress),
          THREE.MathUtils.lerp(start.z, end.z, progress),
          true
        );
      }
    }
  }

  for (const basin of basins) {
    addHullFeature(basin.hull);
    addHullFeature(basin.liquidHull);
    if (basin.kind === "step-channel") {
      for (const section of basin.sections) addPoint(section.x, section.z, true);
    }
  }
  for (const terrace of terraces) {
    addHullFeature(terrace.hull);
    addHullFeature(terrace.islandHull);
    addHullFeature(terrace.liquidHull);
    addHullFeature(terrace.liquidHoleHull);
  }

  for (let pass = 0; pass < 4; pass += 1) {
    if (points.length < 3) break;
    const draft = Delaunator.from(points, (point) => point.x, (point) => point.z);
    const edges = new Set();
    for (let index = 0; index < draft.triangles.length; index += 3) {
      const triangle = [
        draft.triangles[index],
        draft.triangles[index + 1],
        draft.triangles[index + 2]
      ];
      for (let edge = 0; edge < 3; edge += 1) {
        const a = triangle[edge];
        const b = triangle[(edge + 1) % 3];
        edges.add(a < b ? `${a}:${b}` : `${b}:${a}`);
      }
    }

    const pointCountBeforePass = points.length;
    for (const edge of edges) {
      const [aIndex, bIndex] = edge.split(":").map(Number);
      const a = points[aIndex];
      const b = points[bIndex];
      const horizontalLength = Math.hypot(a.x - b.x, a.z - b.z);
      const verticalDifference = Math.abs(a.sample.height - b.sample.height);
      if (horizontalLength < 0.042 || verticalDifference < 0.22) continue;
      addPoint((a.x + b.x) / 2, (a.z + b.z) / 2, true);
      if (points.length - pointCountBeforePass >= 1800) break;
    }
    if (points.length === pointCountBeforePass) break;
  }

  if (points.length < 3) {
    return { geometry: new THREE.BufferGeometry() };
  }

  const delaunay = Delaunator.from(points, (point) => point.x, (point) => point.z);
  const triangles = [];
  const maxEdgeLength = pointSpacing * 3.15;

  function insideTerrain(x, z) {
    return Boolean(terrainAt(x, z, metas, clusterId, basins, terraces));
  }

  for (let index = 0; index < delaunay.triangles.length; index += 3) {
    let a = delaunay.triangles[index];
    let b = delaunay.triangles[index + 1];
    let c = delaunay.triangles[index + 2];
    const pointA = points[a];
    const pointB = points[b];
    const pointC = points[c];
    const edgeAB = Math.hypot(pointA.x - pointB.x, pointA.z - pointB.z);
    const edgeBC = Math.hypot(pointB.x - pointC.x, pointB.z - pointC.z);
    const edgeCA = Math.hypot(pointC.x - pointA.x, pointC.z - pointA.z);
    const maxEdge = Math.max(edgeAB, edgeBC, edgeCA);
    const twiceArea = Math.abs(cross(pointA, pointB, pointC));
    const minimumAltitude = twiceArea / Math.max(0.001, maxEdge);
    if (maxEdge > maxEdgeLength || twiceArea < 0.00022 || maxEdge / Math.max(0.0005, minimumAltitude) > 9.2) {
      continue;
    }

    const probes = [
      [(pointA.x + pointB.x + pointC.x) / 3, (pointA.z + pointB.z + pointC.z) / 3],
      [(pointA.x + pointB.x) / 2, (pointA.z + pointB.z) / 2],
      [(pointB.x + pointC.x) / 2, (pointB.z + pointC.z) / 2],
      [(pointC.x + pointA.x) / 2, (pointC.z + pointA.z) / 2]
    ];
    if (!probes.every(([x, z]) => insideTerrain(x, z))) continue;

    if (cross(pointA, pointB, pointC) > 0) [b, c] = [c, b];
    triangles.push([a, b, c]);
  }

  const adjacency = new Map(points.map((_point, index) => [index, new Set()]));
  for (const [a, b, c] of triangles) {
    adjacency.get(a).add(b).add(c);
    adjacency.get(b).add(a).add(c);
    adjacency.get(c).add(a).add(b);
  }

  for (let pass = 0; pass < 2; pass += 1) {
    const updates = new Map();
    for (let index = 0; index < points.length; index += 1) {
      const point = points[index];
      const neighbors = [...adjacency.get(index)];
      if (point.locked || neighbors.length < 3) continue;
      const heights = neighbors.map((neighbor) => points[neighbor].sample.height);
      const mean = heights.reduce((sum, height) => sum + height, 0) / heights.length;
      const range = Math.max(...heights, point.sample.height) - Math.min(...heights, point.sample.height);
      const smoothing = point.feature ? 0.08 : range > 0.34 ? 0.24 : 0.14;
      const candidate = THREE.MathUtils.lerp(point.sample.height, mean, smoothing);
      updates.set(index, THREE.MathUtils.clamp(candidate, point.sample.height - 0.1, point.sample.height + 0.1));
    }
    for (const [index, height] of updates) points[index].sample.height = height;
  }

  const edgeCounts = new Map();
  function addEdge(a, b) {
    const key = a < b ? `${a}:${b}` : `${b}:${a}`;
    edgeCounts.set(key, (edgeCounts.get(key) || 0) + 1);
  }
  for (const [a, b, c] of triangles) {
    addEdge(a, b);
    addEdge(b, c);
    addEdge(c, a);
  }

  const center = clusterCenter(metas);
  const floating = metas.some((meta) => meta.floating);
  const baseY = Math.min(...metas.map((meta) => meta.baseY));
  const bottomY = floating ? baseY - 0.5 : SEA_LEVEL - 0.035;
  const boundaryPairs = [...edgeCounts.entries()]
    .filter(([, count]) => count === 1)
    .map(([key]) => key.split(":").map(Number));
  if (!floating) {
    const vertices = points.flatMap((point) => [point.x, point.sample.height, point.z]);
    settleTerrainBoundaryAtSea(vertices, points, boundaryPairs, clusterId);
  }

  const positions = [];
  const colors = [];
  const lightDirection = new THREE.Vector3(0.38, 0.88, 0.28).normalize();

  function faceColor(baseColor, a, b, c, id, strength = 1) {
    const edgeA = new THREE.Vector3(b.x - a.x, b.y - a.y, b.z - a.z);
    const edgeB = new THREE.Vector3(c.x - a.x, c.y - a.y, c.z - a.z);
    const normal = edgeA.cross(edgeB).normalize();
    const light = Math.max(0, normal.dot(lightDirection));
    const steepness = 1 - Math.abs(normal.y);
    const variation = (hashValue(`${clusterId}:face:${id}`, 2630) - 0.5) * (0.045 + steepness * 0.07);
    return baseColor.clone().multiplyScalar((0.84 + light * 0.16 + variation) * strength);
  }

  function pushFace(a, b, c, baseColor, id, strength = 1) {
    const color = faceColor(baseColor, a, b, c, id, strength);
    positions.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
    for (let corner = 0; corner < 3; corner += 1) colors.push(color.r, color.g, color.b);
  }

  for (let index = 0; index < triangles.length; index += 1) {
    const [aIndex, bIndex, cIndex] = triangles[index];
    const sourceA = points[aIndex];
    const sourceB = points[bIndex];
    const sourceC = points[cIndex];
    const a = { x: sourceA.x, y: sourceA.sample.height, z: sourceA.z };
    const b = { x: sourceB.x, y: sourceB.sample.height, z: sourceB.z };
    const c = { x: sourceC.x, y: sourceC.sample.height, z: sourceC.z };
    const centroidX = (a.x + b.x + c.x) / 3;
    const centroidZ = (a.z + b.z + c.z) / 3;
    const sample = terrainAt(centroidX, centroidZ, metas, clusterId, basins, terraces) || sourceA.sample;
    sample.height = (a.y + b.y + c.y) / 3;
    pushFace(a, b, c, terrainColorForSample(sample, centroidX, centroidZ, clusterId), `top:${index}`);
  }

  function boundaryLoops() {
    const boundaryAdjacency = new Map();
    const remaining = new Set();
    const edgeKey = (a, b) => a < b ? `${a}:${b}` : `${b}:${a}`;
    for (const [a, b] of boundaryPairs) {
      if (!boundaryAdjacency.has(a)) boundaryAdjacency.set(a, []);
      if (!boundaryAdjacency.has(b)) boundaryAdjacency.set(b, []);
      boundaryAdjacency.get(a).push(b);
      boundaryAdjacency.get(b).push(a);
      remaining.add(edgeKey(a, b));
    }

    const loops = [];
    while (remaining.size) {
      const [startText, nextText] = remaining.values().next().value.split(":");
      const start = Number(startText);
      let previous = start;
      let current = Number(nextText);
      const loop = [start];
      remaining.delete(edgeKey(previous, current));
      let guard = 0;
      while (current !== start && guard < boundaryPairs.length + 2) {
        loop.push(current);
        const candidates = (boundaryAdjacency.get(current) || [])
          .filter((candidate) => candidate !== previous && remaining.has(edgeKey(current, candidate)));
        if (!candidates.length) break;
        const next = candidates[0];
        remaining.delete(edgeKey(current, next));
        previous = current;
        current = next;
        guard += 1;
      }
      if (current === start && loop.length >= 3) loops.push(loop);
    }
    return loops;
  }

  function outwardSideFace(a, b, c, color, id, strength = 1) {
    const edgeA = new THREE.Vector3(b.x - a.x, b.y - a.y, b.z - a.z);
    const edgeB = new THREE.Vector3(c.x - a.x, c.y - a.y, c.z - a.z);
    const normal = edgeA.cross(edgeB);
    const centroidX = (a.x + b.x + c.x) / 3 - center.x;
    const centroidZ = (a.z + b.z + c.z) / 3 - center.z;
    if (normal.x * centroidX + normal.z * centroidZ < 0) {
      pushFace(a, c, b, color, id, strength);
    } else {
      pushFace(a, b, c, color, id, strength);
    }
  }

  function connectRings(upper, lower, colorForIndex, id) {
    for (let index = 0; index < upper.length; index += 1) {
      const next = (index + 1) % upper.length;
      const color = colorForIndex(index);
      if (hashValue(`${clusterId}:${id}:diagonal:${index}`, 2670) > 0.5) {
        outwardSideFace(upper[index], upper[next], lower[next], color, `${id}:${index}:a`, 0.95);
        outwardSideFace(upper[index], lower[next], lower[index], color, `${id}:${index}:b`, 0.95);
      } else {
        outwardSideFace(upper[index], upper[next], lower[index], color, `${id}:${index}:a`, 0.95);
        outwardSideFace(upper[next], lower[next], lower[index], color, `${id}:${index}:b`, 0.95);
      }
    }
  }

  const loops = boundaryLoops();
  for (let loopIndex = 0; loopIndex < loops.length; loopIndex += 1) {
    const loop = loops[loopIndex];
    const topRing = loop.map((index) => ({
      sample: points[index].sample,
      x: points[index].x,
      y: points[index].sample.height,
      z: points[index].z
    }));

    const colorForIndex = (index) => {
      const sample = topRing[index].sample;
      const lowestLayer = sample.nearest.profile.layers[0];
      return sideColorForSurface(ruleForUnit(lowestLayer.unit).surface, floating);
    };

    if (!floating) {
      const seaRing = topRing.map((point) => {
        const dx = point.x - center.x;
        const dz = point.z - center.z;
        const length = Math.max(0.001, Math.hypot(dx, dz));
        const extension = 0.11;
        return {
          x: point.x + dx / length * extension,
          y: bottomY,
          z: point.z + dz / length * extension
        };
      });
      connectRings(topRing, seaRing, colorForIndex, `ground:${loopIndex}`);
      continue;
    }

    function contractedRing(scale, yOffset, salt) {
      return topRing.map((point, index) => ({
        x: center.x + (point.x - center.x) * scale,
        y: baseY + yOffset + (hashValue(`${clusterId}:float:${salt}:${index}`, 2690) - 0.5) * 0.045,
        z: center.z + (point.z - center.z) * scale
      }));
    }

    const shoulderRing = contractedRing(0.78, -0.13, "shoulder");
    const lowerRing = contractedRing(0.48, -0.34, "lower");
    const baseRing = contractedRing(0.23, -0.5, "base");
    connectRings(topRing, shoulderRing, colorForIndex, `float:${loopIndex}:shoulder`);
    connectRings(shoulderRing, lowerRing, colorForIndex, `float:${loopIndex}:lower`);
    connectRings(lowerRing, baseRing, () => new THREE.Color("#765837"), `float:${loopIndex}:base`);

    const contour = baseRing.map((point) => new THREE.Vector2(point.x, point.z));
    const capFaces = THREE.ShapeUtils.triangulateShape(contour, []);
    for (let faceIndex = 0; faceIndex < capFaces.length; faceIndex += 1) {
      const [a, b, c] = capFaces[faceIndex];
      pushFace(baseRing[a], baseRing[c], baseRing[b], new THREE.Color("#6e5134"), `float-cap:${loopIndex}:${faceIndex}`, 0.9);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  return { geometry };
}

function createLiquidBasins(metas, surface, clusterId) {
  const basins = [];
  const targets = metas.filter((meta) => meta.surface === surface);
  for (const cluster of connectedClusters(
    targets,
    (a, b) => Math.abs(a.profile.topLevel - b.profile.topLevel) < 0.01
  )) {
    const id = `${surface}:${cluster.map((meta) => meta.column.id).sort().join("|")}`;
    const center = clusterCenter(cluster);
    const stackedTop = cluster.some((meta) => meta.topRunLength >= 2);
    const levelY = Math.min(...cluster.map((meta) => meta.topY)) - (surface === WATER_SURFACE ? 0.022 : 0.016);
    const hull = organicClusterHull(
      cluster,
      center,
      (meta) => {
        const baseRadius = meta.topRunLength >= 2
          ? surface === WATER_SURFACE ? 0.27 : 0.25
          : surface === WATER_SURFACE ? 0.47 : 0.45;
        const variation = meta.topRunLength >= 2 ? 0.035 : 0.07;
        return baseRadius + (hashValue(`${clusterId}:${id}:${meta.column.id}`, 2380) - 0.5) * variation;
      },
      id,
      levelY
    );
    if (hull.length < 3) continue;
    const shoreWidth = stackedTop
      ? surface === WATER_SURFACE ? 0.12 : 0.11
      : surface === WATER_SURFACE ? 0.105 : 0.095;
    const liquidHull = smoothClosedHull(
      expandedHull(hull, center, -shoreWidth, `${id}:liquid-edge`)
        .map((point) => new THREE.Vector3(point.x, levelY, point.z)),
      0.14,
      1
    );
    if (liquidHull.length < 3) continue;
    basins.push({
      bankWidth: stackedTop
        ? surface === WATER_SURFACE ? 0.17 : 0.16
        : surface === WATER_SURFACE ? 0.27 : 0.24,
      center: new THREE.Vector3(center.x, levelY, center.z),
      color: surface === WATER_SURFACE ? "#55c6ea" : "#f45c31",
      columnIds: cluster.map((meta) => meta.column.id),
      hull,
      id,
      innerSlopeWidth: surface === WATER_SURFACE ? 0.1 : 0.085,
      levelY,
      liquidHull,
      logicalLevel: cluster[0].profile.topLevel,
      opacity: surface === WATER_SURFACE ? 0.88 : 0.96,
      shoreWidth,
      surface
    });
  }
  return basins;
}

function createHalfStepChannels(metas, basins, surface, clusterId) {
  const targets = metas.filter((meta) => meta.surface === surface);
  const channels = [];
  const connectedBasinPairs = new Set();

  for (let firstIndex = 0; firstIndex < targets.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < targets.length; secondIndex += 1) {
      const first = targets[firstIndex];
      const second = targets[secondIndex];
      const distance = Math.hypot(first.worldX - second.worldX, first.worldZ - second.worldZ);
      if (distance >= STEP * 1.24) continue;

      const ordered = [first, second].sort((a, b) => a.profile.topLevel - b.profile.topLevel);
      const [lowMeta, highMeta] = ordered;
      if (
        Math.abs(lowMeta.profile.topLevel - 1) >= 0.01
        || Math.abs(highMeta.profile.topLevel - 1.5) >= 0.01
      ) continue;

      const lowBasin = basins.find((basin) => basin.columnIds?.includes(lowMeta.column.id));
      const highBasin = basins.find((basin) => basin.columnIds?.includes(highMeta.column.id));
      if (!lowBasin || !highBasin || lowBasin.id === highBasin.id) continue;
      const pairId = [lowBasin.id, highBasin.id].sort().join("<->");
      if (connectedBasinPairs.has(pairId)) continue;
      connectedBasinPairs.add(pairId);

      const highEdge = closestPointOnHull(
        highBasin.liquidHull,
        lowBasin.center.x,
        lowBasin.center.z
      );
      const lowEdge = closestPointOnHull(
        lowBasin.liquidHull,
        highBasin.center.x,
        highBasin.center.z
      );
      if (!highEdge || !lowEdge) continue;

      const start = highEdge.clone().lerp(highBasin.center, 0.09);
      const end = lowEdge.clone().lerp(lowBasin.center, 0.09);
      const directionX = end.x - start.x;
      const directionZ = end.z - start.z;
      const directionLength = Math.max(0.001, Math.hypot(directionX, directionZ));
      const perpendicularX = -directionZ / directionLength;
      const perpendicularZ = directionX / directionLength;
      const id = `${surface}:half-step:${pairId}`;
      const bend = (hashValue(`${clusterId}:${id}:bend`, 2880) - 0.5) * 0.12;
      const sections = [];
      const sectionCount = 8;

      for (let index = 0; index <= sectionCount; index += 1) {
        const progress = index / sectionCount;
        const heightProgress = progress * progress * (3 - 2 * progress);
        const sideways = Math.sin(progress * Math.PI) * bend;
        const baseWidth = surface === WATER_SURFACE ? 0.075 : 0.085;
        const width = baseWidth * (
          0.92
          + Math.sin(progress * Math.PI) * 0.32
          + (hashValue(`${id}:width:${index}`, 2890) - 0.5) * 0.12
        );
        sections.push({
          width,
          x: THREE.MathUtils.lerp(start.x, end.x, progress) + perpendicularX * sideways,
          y: THREE.MathUtils.lerp(highBasin.levelY, lowBasin.levelY, heightProgress),
          z: THREE.MathUtils.lerp(start.z, end.z, progress) + perpendicularZ * sideways
        });
      }

      const left = sections.map((section) => new THREE.Vector3(
        section.x + perpendicularX * section.width,
        section.y,
        section.z + perpendicularZ * section.width
      ));
      const right = sections.map((section) => new THREE.Vector3(
        section.x - perpendicularX * section.width,
        section.y,
        section.z - perpendicularZ * section.width
      ));
      const reversedRight = [...right].reverse();
      channels.push({
        bankWidth: surface === WATER_SURFACE ? 0.09 : 0.1,
        color: surface === WATER_SURFACE ? "#55c6ea" : "#f45c31",
        depth: surface === WATER_SURFACE ? 0.035 : 0.04,
        hull: [...left, ...reversedRight],
        id,
        kind: "step-channel",
        liquidHull: [...left, ...reversedRight],
        opacity: surface === WATER_SURFACE ? 0.9 : 0.97,
        perpendicularX,
        perpendicularZ,
        sections,
        surface
      });
    }
  }

  return channels;
}

function contourRadiusAtLevel(meta, levelY) {
  const heightRange = Math.max(0.001, meta.topY - meta.baseY);
  const heightProgress = Math.max(0.02, Math.min(0.96, (levelY - meta.baseY) / heightRange));
  const edgeWeight = Math.max(0.02, Math.min(0.96, heightProgress / 1.15));
  const normalizedRadius = Math.sqrt(Math.max(0.02, 1 - Math.sqrt(edgeWeight)));
  return meta.radius * normalizedRadius;
}

function createIntermediateLiquidTerraces(metas, surface, clusterId) {
  const layersByLevel = new Map();
  for (const meta of metas) {
    const layers = meta.profile.layers;
    for (const run of surfaceRuns(layers, surface)) {
      if (run.count >= 2 || run.start >= layers.length - 1) continue;
      const levelIndex = meta.profile.baseLevel + run.start + 1;
      const descriptor = {
        ...meta,
        column: { ...meta.column, id: `${meta.column.id}:terrace:${run.start}` },
        levelIndex,
        levelY: meta.baseY + (run.start + 1) * meta.profile.layerHeight - 0.008,
        ordinal: run.start,
        runLength: run.count,
        sourceMeta: meta
      };
      const levelKey = levelIndex.toFixed(1);
      const group = layersByLevel.get(levelKey) || [];
      group.push(descriptor);
      layersByLevel.set(levelKey, group);
    }
  }

  const terraces = [];
  for (const [levelKey, descriptors] of layersByLevel) {
    for (const cluster of connectedClusters(descriptors)) {
      const id = `${surface}:terrace:${levelKey}:${cluster.map((item) => item.column.id).sort().join("|")}`;
      const center = clusterCenter(cluster);
      const levelY = Math.min(...cluster.map((item) => item.levelY));
      const contourItems = cluster.map((item) => {
        const contourRadius = contourRadiusAtLevel(item.sourceMeta, levelY);
        const minimumIslandRadius = item.runLength >= 2
          ? 0.38
          : item.sourceMeta.surface === "human" ? 0.34 : 0.24;
        const islandRadius = Math.max(minimumIslandRadius, Math.min(item.sourceMeta.radius * 0.5, contourRadius - 0.08));
        const liquidWidth = item.runLength >= 2
          ? surface === WATER_SURFACE ? 0.28 : 0.25
          : surface === WATER_SURFACE ? 0.24 : 0.21;
        const outerRadius = Math.min(
          item.sourceMeta.radius * 0.9,
          Math.max(item.sourceMeta.radius * 0.68, islandRadius + liquidWidth)
        );
        return { ...item, islandRadius, outerRadius };
      });
      const hull = organicClusterHull(
        contourItems,
        center,
        (item) => item.outerRadius,
        `${id}:outer`,
        levelY
      );
      const islandHull = organicClusterHull(
        contourItems,
        center,
        (item) => item.islandRadius,
        `${id}:island`,
        levelY
      );
      if (hull.length < 3 || islandHull.length < 3) continue;
      const liquidHoleHull = smoothClosedHull(
        expandedHull(islandHull, center, -0.055, `${id}:liquid-hole`)
          .map((point) => new THREE.Vector3(point.x, levelY, point.z)),
        0.16,
        1
      );
      const liquidHull = smoothClosedHull(
        expandedHull(hull, center, surface === WATER_SURFACE ? -0.085 : -0.075, `${id}:liquid-edge`)
          .map((point) => new THREE.Vector3(point.x, levelY, point.z)),
        0.14,
        1
      );
      terraces.push({
        center: new THREE.Vector3(center.x, levelY, center.z),
        color: surface === WATER_SURFACE ? "#55c6ea" : "#f45c31",
        hull,
        id,
        islandBankWidth: 0.14,
        islandHull,
        levelY,
        liquidHoleHull,
        liquidHull,
        opacity: surface === WATER_SURFACE ? 0.88 : 0.96,
        outerBankWidth: surface === WATER_SURFACE ? 0.22 : 0.2,
        surface
      });
    }
  }
  return terraces;
}

function createLiquidFalls(metas, surface, clusterId) {
  const center = clusterCenter(metas);
  const falls = [];

  for (const meta of metas) {
    for (const run of surfaceRuns(meta.profile.layers, surface)) {
      if (run.count < 2 || run.end !== meta.profile.layers.length - 1) continue;

      let directionX = meta.worldX - center.x;
      let directionZ = meta.worldZ - center.z;
      let directionLength = Math.hypot(directionX, directionZ);
      if (directionLength < 0.08) {
        const angle = hashValue(`${clusterId}:${meta.column.id}:${surface}:fall`, 2850) * Math.PI * 2;
        directionX = Math.cos(angle);
        directionZ = Math.sin(angle);
        directionLength = 1;
      }

      falls.push({
        bottomY: meta.baseY + run.start * meta.profile.layerHeight + 0.045,
        color: surface === WATER_SURFACE ? "#55c6ea" : "#f45c31",
        directionX: directionX / directionLength,
        directionZ: directionZ / directionLength,
        id: `${surface}:fall:${meta.column.id}:${run.start}:${run.end}`,
        meta,
        opacity: surface === WATER_SURFACE ? 0.9 : 0.98,
        surface,
        topY: meta.baseY + (run.end + 1) * meta.profile.layerHeight
          - (surface === WATER_SURFACE ? 0.022 : 0.016)
      });
    }
  }

  return falls;
}

function addLiquidBasins(group, basins) {
  for (const basin of basins) {
    const mesh = new THREE.Mesh(
      basin.islandHull
        ? flatSurfaceWithHolesGeometry(basin.liquidHull || basin.hull, [basin.liquidHoleHull || basin.islandHull], basin.levelY)
        : flatDiskGeometry(basin.liquidHull || basin.hull, basin.center),
      makeSurfaceMat(basin.color, basin.surface === WATER_SURFACE ? 0.22 : 0.4, basin.opacity)
    );
    mesh.renderOrder = 2;
    mesh.receiveShadow = false;
    group.add(mesh);
  }
}

function addHalfStepChannels(group, channels) {
  for (const channel of channels) {
    const positions = [];
    const indices = [];
    for (let index = 0; index < channel.sections.length; index += 1) {
      const section = channel.sections[index];
      const surfaceY = section.y + 0.006;
      const leftX = section.x + channel.perpendicularX * section.width;
      const leftZ = section.z + channel.perpendicularZ * section.width;
      const rightX = section.x - channel.perpendicularX * section.width;
      const rightZ = section.z - channel.perpendicularZ * section.width;
      positions.push(
        leftX, surfaceY, leftZ,
        rightX, surfaceY, rightZ,
        leftX, surfaceY - channel.depth, leftZ,
        rightX, surfaceY - channel.depth, rightZ
      );

      if (index === 0) continue;
      const previous = (index - 1) * 4;
      const current = index * 4;
      indices.push(
        previous, previous + 1, current,
        previous + 1, current + 1, current,
        previous + 2, previous, current + 2,
        previous, current, current + 2,
        previous + 1, previous + 3, current + 1,
        previous + 3, current + 3, current + 1,
        previous + 3, previous + 2, current + 3,
        previous + 2, current + 2, current + 3
      );
    }

    const end = (channel.sections.length - 1) * 4;
    indices.push(
      2, 0, 3,
      0, 1, 3,
      end + 2, end + 3, end,
      end, end + 3, end + 1
    );

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const material = makeMat(
      channel.color,
      channel.surface === WATER_SURFACE ? 0.24 : 0.4,
      channel.opacity
    );
    material.polygonOffset = true;
    material.polygonOffsetFactor = -1;
    material.polygonOffsetUnits = -1;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = 3;
    mesh.receiveShadow = false;
    group.add(mesh);
  }
}

function addLiquidFalls(group, falls, metas, clusterId, basins, terraces) {
  for (const fall of falls) {
    const segmentCount = 14;
    const positions = [];
    const indices = [];
    const topRadius = fall.surface === WATER_SURFACE ? 0.16 : 0.15;
    const bottomRadius = fall.meta.radius * 0.93;
    const perpendicularX = -fall.directionZ;
    const perpendicularZ = fall.directionX;

    for (let index = 0; index <= segmentCount; index += 1) {
      const progress = index / segmentCount;
      const eased = progress * progress * (3 - 2 * progress);
      const radius = THREE.MathUtils.lerp(topRadius, bottomRadius, eased);
      const bend = Math.sin(progress * Math.PI) * (
        hashValue(`${fall.id}:bend`, 2860) - 0.5
      ) * 0.16;
      const centerX = fall.meta.worldX + fall.directionX * radius + perpendicularX * bend;
      const centerZ = fall.meta.worldZ + fall.directionZ * radius + perpendicularZ * bend;
      const gravityY = THREE.MathUtils.lerp(fall.topY, fall.bottomY, Math.pow(progress, 0.78));
      const width = THREE.MathUtils.lerp(
        fall.surface === WATER_SURFACE ? 0.065 : 0.07,
        fall.surface === WATER_SURFACE ? 0.13 : 0.14,
        progress
      );
      const irregularWidth = width * (
        0.92 + hashValue(`${fall.id}:width:${index}`, 2870) * 0.16
      );
      const leftX = centerX + perpendicularX * irregularWidth;
      const leftZ = centerZ + perpendicularZ * irregularWidth;
      const rightX = centerX - perpendicularX * irregularWidth;
      const rightZ = centerZ - perpendicularZ * irregularWidth;
      const terrainHeights = [-1, -0.5, 0, 0.5, 1]
        .map((offset) => terrainAt(
          centerX + perpendicularX * irregularWidth * offset,
          centerZ + perpendicularZ * irregularWidth * offset,
          metas,
          clusterId,
          basins,
          terraces
        ))
        .filter(Boolean)
        .map((sample) => sample.height);
      const attachedY = terrainHeights.length
        ? Math.max(...terrainHeights) + 0.028
        : gravityY;
      const sectionY = index === 0
        ? fall.topY + 0.006
        : Math.min(fall.topY + 0.015, attachedY);
      const thickness = THREE.MathUtils.lerp(0.022, 0.038, progress);

      positions.push(
        leftX, sectionY, leftZ,
        rightX, sectionY, rightZ,
        leftX, sectionY - thickness, leftZ,
        rightX, sectionY - thickness, rightZ
      );

      if (index > 0) {
        const previous = (index - 1) * 4;
        const current = index * 4;
        const previousTopLeft = previous;
        const previousTopRight = previous + 1;
        const previousBottomLeft = previous + 2;
        const previousBottomRight = previous + 3;
        const topLeft = current;
        const topRight = current + 1;
        const bottomLeft = current + 2;
        const bottomRight = current + 3;
        indices.push(
          previousTopLeft, previousTopRight, topLeft,
          previousTopRight, topRight, topLeft,
          previousBottomLeft, previousTopLeft, bottomLeft,
          previousTopLeft, topLeft, bottomLeft,
          previousTopRight, previousBottomRight, topRight,
          previousBottomRight, bottomRight, topRight,
          previousBottomRight, previousBottomLeft, bottomRight,
          previousBottomLeft, bottomLeft, bottomRight
        );
      }
    }

    const end = segmentCount * 4;
    indices.push(
      2, 0, 3,
      0, 1, 3,
      end + 2, end + 3, end,
      end, end + 3, end + 1
    );

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    const material = makeMat(
      fall.color,
      fall.surface === WATER_SURFACE ? 0.24 : 0.4,
      fall.opacity
    );
    material.polygonOffset = true;
    material.polygonOffsetFactor = -2;
    material.polygonOffsetUnits = -2;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = 3;
    mesh.receiveShadow = false;
    group.add(mesh);
  }
}

function addClusterDecorations(group, metas, faultedColumns) {
  for (const meta of metas) {
    const platform = {
      layerCount: meta.profile.layers.length,
      platformRadius: 0.34,
      topSurface: meta.surface,
      topY: meta.topY
    };
    const plot = new THREE.Group();
    plot.position.set(meta.worldX, 0, meta.worldZ);
    if (meta.surface === "vegetation") {
      addVegetation(plot, meta.column.id, platform);
    } else if (meta.surface === "human") {
      addBuildingCluster(plot, `${meta.clusterId}:${meta.column.id}`, platform);
    }
    if (faultedColumns.has(meta.column.id)) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.42, 0.014, 6, 40),
        makeMat("#e84737", 0.44)
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = meta.topY + 0.04;
      plot.add(ring);
    }
    group.add(plot);
  }
}

function addUnifiedTerrainCluster(group, cluster, board, faultedColumns) {
  const metas = cluster.map((item) => itemMeta(item, board)).filter(Boolean);
  if (!metas.length) return;
  const clusterId = metas.map((meta) => meta.column.id).sort().join("|");
  for (const meta of metas) meta.clusterId = clusterId;
  const basins = [
    ...createLiquidBasins(metas, WATER_SURFACE, clusterId),
    ...createLiquidBasins(metas, "volcanic", clusterId)
  ];
  const terraces = [
    ...createIntermediateLiquidTerraces(metas, WATER_SURFACE, clusterId),
    ...createIntermediateLiquidTerraces(metas, "volcanic", clusterId)
  ];
  const halfStepChannels = [
    ...createHalfStepChannels(metas, basins, WATER_SURFACE, clusterId),
    ...createHalfStepChannels(metas, basins, "volcanic", clusterId)
  ];
  const terrainBasins = [...basins, ...halfStepChannels];
  const { geometry } = buildClusterTerrainGeometry(metas, clusterId, terrainBasins, terraces);
  const terrainMesh = new THREE.Mesh(geometry, makeVertexMat());
  terrainMesh.castShadow = true;
  terrainMesh.receiveShadow = false;
  group.add(terrainMesh);
  addLiquidBasins(group, [...terraces, ...basins]);
  addHalfStepChannels(group, halfStepChannels);
  addClusterDecorations(group, metas, faultedColumns);
}

function addPlot(group, item, positioned, board, surfaceById, latestColumnId, faultedColumns) {
  const stack = board[item.column.id] || [];
  if (!stack.length) return;
  const topUnit = topVisibleUnit(stack);
  if (!topUnit) return;
  const surface = ruleForUnit(topUnit).surface;
  const plot = new THREE.Group();
  plot.position.set(item.worldX, columnYOffset(item), item.worldZ);

  const platform = addLayeredBase(plot, item, stack, surface, positioned);
  if (!platform) return null;

  if (surface === "vegetation") {
    addVegetation(plot, item.column.id, platform);
  } else if (surface === "human") {
    addBuildingCluster(plot, `${item.clusterId}:${item.column.id}`, platform);
  } else if (surface === "volcanic") {
    addVolcanicCracks(plot, `${item.clusterId}:${item.column.id}`, platform);
  }

  if (faultedColumns.has(item.column.id)) {
    const color = "#e84737";
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.6, 0.016, 6, 56),
      makeMat(color, 0.44)
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = platform.topY + 0.065;
    plot.add(ring);
  }

  group.add(plot);
  return {
    ...platform,
    column: item.column,
    columnId: item.column.id,
    worldX: item.worldX,
    worldZ: item.worldZ,
    yOffset: columnYOffset(item)
  };
}

export default function TerrainScene({ snapshot, latestColumnId, dark = false }) {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const terrainRef = useRef(null);
  const cameraTargetRef = useRef(new THREE.Vector3(0, 0.7, 0));
  const orbitRef = useRef({ azimuth: 0.62, elevation: 0.58, radius: 9.4 });
  const dragRef = useRef(null);

  const topology = snapshot.topology || FALLBACK_TOPOLOGY;
  const board = snapshot.board || {};
  const activeFaults = snapshot.active_faults || {};
  const moduleLayout = useMemo(
    () => normalizeLayout(snapshot.module_layout, topology),
    [snapshot.module_layout, topology]
  );

  function updateCameraOrbit() {
    const camera = cameraRef.current;
    if (!camera) return;
    const target = cameraTargetRef.current;
    const orbit = orbitRef.current;
    const horizontalRadius = Math.cos(orbit.elevation) * orbit.radius;
    camera.position.set(
      target.x + Math.sin(orbit.azimuth) * horizontalRadius,
      target.y + Math.sin(orbit.elevation) * orbit.radius,
      target.z + Math.cos(orbit.azimuth) * horizontalRadius
    );
    camera.lookAt(target);
  }

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(dark ? "#080808" : "#12aeb7");
    scene.fog = new THREE.Fog(dark ? "#080808" : "#12aeb7", 10, 28);

    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 120);
    cameraRef.current = camera;
    updateCameraOrbit();

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight("#fff7e4", "#0e8f99", 2.35));
    const sun = new THREE.DirectionalLight("#ffffff", 3.1);
    sun.position.set(5.5, 9, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    scene.add(sun);
    const coolFill = new THREE.DirectionalLight("#d0e6ff", 0.78);
    coolFill.position.set(-5, 3, -4);
    scene.add(coolFill);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(90, 90, 1, 1),
      makeSurfaceMat(dark ? "#080808" : "#12b9bd", 0.58, 1)
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = SEA_LEVEL;
    floor.receiveShadow = true;
    scene.add(floor);

    const terrain = new THREE.Group();
    terrainRef.current = terrain;
    scene.add(terrain);

    function resize() {
      const bounds = mount.getBoundingClientRect();
      renderer.setSize(bounds.width, Math.max(1, bounds.height));
      camera.aspect = bounds.width / Math.max(1, bounds.height);
      camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    function render() {
      frame = requestAnimationFrame(render);
      renderer.render(scene, camera);
    }
    render();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      clearGroup(terrain);
      disposeObject(floor);
      renderer.renderLists.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    const terrain = terrainRef.current;
    const camera = cameraRef.current;
    if (!terrain || !camera || !topology?.columns?.length) return;
    clearGroup(terrain);

    const rawPositioned = topology.columns.map((column) => {
      const display = displayCoordinate(column, moduleLayout, topology);
      return { column, gridX: display.col, gridZ: display.row };
    });
    const rawFramedItems = rawPositioned.filter((item) => {
      const stack = board[item.column.id] || [];
      return visibleLayers(stack).length > 0;
    });
    const centerSource = rawFramedItems.length ? rawFramedItems : rawPositioned;
    const center = {
      x: (Math.min(...centerSource.map((item) => item.gridX)) + Math.max(...centerSource.map((item) => item.gridX))) / 2,
      z: (Math.min(...centerSource.map((item) => item.gridZ)) + Math.max(...centerSource.map((item) => item.gridZ))) / 2
    };
    const positioned = rawPositioned.map((item) => ({
      ...item,
      worldX: (item.gridX - center.x) * STEP,
      worldZ: (item.gridZ - center.z) * STEP
    }));

    const occupiedPositioned = positioned.filter((item) => {
      const stack = board[item.column.id] || [];
      return visibleLayers(stack).length > 0;
    });
    const faultedColumns = new Set(Object.keys(activeFaults));

    const terrainClusters = connectedClusters(
      occupiedPositioned,
      (a, b) => terrainColumnsCanConnect(a, b, board)
    );
    for (const cluster of terrainClusters) {
      addUnifiedTerrainCluster(terrain, cluster, board, faultedColumns);
    }

    const framedItems = occupiedPositioned.length ? occupiedPositioned : positioned;
    const maxSpan = Math.max(
      Math.max(...framedItems.map((item) => item.gridX)) - Math.min(...framedItems.map((item) => item.gridX)) + 1,
      Math.max(...framedItems.map((item) => item.gridZ)) - Math.min(...framedItems.map((item) => item.gridZ)) + 1
    );
    const tallest = Math.max(1, ...Object.values(board).map((stack) => stack.length));
    const distance = Math.max(7.2, maxSpan * 1.18 + tallest * 0.7);
    cameraTargetRef.current.set(0, Math.min(2.6, tallest * LAYER_HEIGHT * 0.45), 0);
    orbitRef.current.radius = distance * 1.12;
    updateCameraOrbit();
    camera.updateProjectionMatrix();
  }, [topology, moduleLayout, board, activeFaults, latestColumnId]);

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
    if (!drag || drag.pointerId !== event.pointerId || !terrainRef.current) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    orbitRef.current.azimuth -= dx * 0.006;
    orbitRef.current.elevation = Math.max(0.12, Math.min(1.28, orbitRef.current.elevation + dy * 0.004));
    updateCameraOrbit();
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
    if (!cameraRef.current) return;
    event.preventDefault();
    const factor = event.deltaY > 0 ? 1.08 : 0.92;
    const nextRadius = orbitRef.current.radius * factor;
    if (nextRadius > 3.2 && nextRadius < 42) {
      orbitRef.current.radius = nextRadius;
      updateCameraOrbit();
    }
  }

  return (
    <div
      ref={mountRef}
      className="terrain-scene"
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onPointerUp={pointerUp}
      onPointerCancel={pointerUp}
      onWheel={wheel}
    />
  );
}
