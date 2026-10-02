const MODULE_ROWS = 2;
const MODULE_COLS = 4;

function defaultLayout(moduleCount = 1) {
  return {
    version: 1,
    module_count: moduleCount,
    grid_rows: moduleCount,
    grid_cols: 1,
    slots: Array.from({ length: moduleCount }, (_value, index) => `A${index}`)
  };
}

export function normalizeLayout(layout, topology) {
  const moduleCount = Number(topology?.module_count || 1);
  if (
    !layout
    || !Array.isArray(layout.slots)
    || Number(layout.module_count) < 1
    || Number(layout.grid_rows) * Number(layout.grid_cols) !== Number(layout.module_count)
  ) {
    return defaultLayout(moduleCount);
  }
  return layout;
}

export function portForColumn(column) {
  return column.port || `A${Number(column.module || 0)}`;
}

export function displayCoordinate(column, layout, topology) {
  const normalized = normalizeLayout(layout, topology);
  const port = portForColumn(column);
  let slotIndex = normalized.slots.indexOf(port);
  if (slotIndex < 0) slotIndex = Number(column.module || 0);
  const moduleRow = Math.floor(slotIndex / normalized.grid_cols);
  const moduleCol = slotIndex % normalized.grid_cols;
  const halfLayer = column.layer === "L0.5";
  return {
    row: moduleRow * MODULE_ROWS + (Number(column.row) % MODULE_ROWS) + (halfLayer ? 0.5 : 0),
    col: moduleCol * MODULE_COLS + Number(column.col) + (halfLayer ? 0.5 : 0),
    port
  };
}

