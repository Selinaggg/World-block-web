export const ELEMENTS = {
  water: { label: 'Water', color: '#37BFF4', symbol: '≈' },
  fire: { label: 'Fire', color: '#FF814B', symbol: '△' },
  earth: { label: 'Earth', color: '#F1C44D', symbol: '◇' },
  human: { label: 'Human', color: '#D989C3', symbol: '○' },
  animal: { label: 'Animal', color: '#78CF87', symbol: '⋈' },
  support: {label:'Support',color:'#C0BDB5',symbol:'□'},
  unknown: {label:'Unidentified',color:'#9D9B96',symbol:'?'},
};
export const TYPES = ['water','fire','earth','human','animal'];
export const MODEL_CONFIG = {
  url: './models/worldblocks.obj', sourceUp: 'z', displayWidth: 10,
  baseNames: [], baseWidthRatio: 2.5, baseFlatness: 0.3,
  baseColor: '#DBDFE5', baseEdgeColor: '#7C8799', baseEdgeOpacity: 0.22, baseEdgeAngle: 20, maxHeight: 24, stackStepRatio: 0.5,
};
export const MODULE_TYPE_MAP = {};
export const SPATIAL_CONFIG = { nearDiameters: 1.6, mediumDiameters: 3, farDiameters: 6 };
export const DEBUG = typeof location !== 'undefined' && (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || new URLSearchParams(location.search).has('debug'));
