// Application meanings, not electrical decoding. Provisional until the team confirms them.
export const DEFAULT_CODE_MAP = {C0:'water',C1:'fire',C2:'earth',C3:'human',C4:'animal',C5:'support'};
export const INPUT_URLS = {hardware:'http://127.0.0.1:8787',mock:'http://127.0.0.1:8790'};
export const HARDWARE_TYPES = ['water','fire','earth','human','animal','support','unknown'];
export function validateCodeMap(map){
  if(!map||Object.keys(DEFAULT_CODE_MAP).some(code=>!HARDWARE_TYPES.includes(map[code])))throw new Error('Assign a valid meaning to every code, C0–C5.');
  return {...map};
}
