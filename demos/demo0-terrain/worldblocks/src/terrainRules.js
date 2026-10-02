export const UNIT_RULES = {
  earth: {
    label: "棕色土地",
    short: "Land",
    color: "#c49352",
    side: "#8b6338",
    accent: "#f0cf89",
    surface: "earth"
  },
  water: {
    label: "水坑 / 河流",
    short: "Water",
    color: "#47a9d9",
    side: "#b79a6a",
    accent: "#b9ecff",
    surface: "water"
  },
  fire: {
    label: "火山地貌",
    short: "Volcano",
    color: "#39312c",
    side: "#241f1d",
    accent: "#ff5a36",
    surface: "volcanic"
  },
  spacer: {
    label: "空层 / 浮空",
    short: "Void",
    color: "#f5f0dc",
    side: "#d8ceb7",
    accent: "#ffffff",
    surface: "void"
  },
  animal: {
    label: "绿色草地和植物",
    short: "Grass",
    color: "#77b85a",
    side: "#6f8f47",
    accent: "#e9f49b",
    surface: "vegetation"
  },
  human: {
    label: "人的房子",
    short: "House",
    color: "#d9bb82",
    side: "#ad8654",
    accent: "#d9952f",
    surface: "human"
  }
};

export const FALLBACK_TOPOLOGY = {
  module_count: 1,
  max_stack: 7,
  tracking_capacity: 16,
  layers: [
    { id: "L0", rows: 2, cols: 4 },
    { id: "L0.5", rows: 2, cols: 4 }
  ],
  columns: ["L0", "L0.5"].flatMap((layer) =>
    Array.from({ length: 8 }, (_value, index) => ({
      id: `${layer}-r${Math.floor(index / 4)}-c${index % 4}`,
      layer,
      row: Math.floor(index / 4),
      col: index % 4,
      module: 0,
      mux: 0,
      channel: index,
      port: "A0",
      enabled: true
    }))
  )
};

export function ruleForUnit(unit) {
  return UNIT_RULES[String(unit || "").toLowerCase()] || {
    label: unit || "Unknown",
    short: "?",
    color: "#9aa0a6",
    side: "#747a7f",
    accent: "#ffffff",
    surface: "earth"
  };
}

export function isVoidUnit(unit) {
  return ruleForUnit(unit).surface === "void";
}

export function visibleLayers(stack) {
  return (stack || [])
    .map((unit, index) => ({ unit, index }))
    .filter((layer) => !isVoidUnit(layer.unit));
}

export function topVisibleUnit(stack) {
  const layers = visibleLayers(stack);
  return layers.length ? layers[layers.length - 1].unit : null;
}

export function terrainStats(board) {
  const stacks = Object.values(board || {});
  const occupied = stacks.filter((stack) => visibleLayers(stack).length).length;
  const totalUnits = stacks.reduce((sum, stack) => sum + stack.length, 0);
  const tallest = stacks.reduce((max, stack) => Math.max(max, stack.length), 0);
  const topSurfaces = stacks.reduce((counts, stack) => {
    const top = topVisibleUnit(stack);
    if (!top) return counts;
    const surface = ruleForUnit(top).surface;
    counts[surface] = (counts[surface] || 0) + 1;
    return counts;
  }, {});
  return { occupied, totalUnits, tallest, topSurfaces };
}
