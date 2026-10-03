import { normalizeSnapshot, connectWorldBlocks } from '../../../../shared/hardware-client/worldblocks-client.mjs';

export const CODES = ['C0','C1','C2','C3','C4','C5'];
export const TEST_PORTS = Array.from({length:8},(_,i)=>'A'+i);
export const TEST_COLUMNS = TEST_PORTS.flatMap((port,module)=>['L0','L0.5'].flatMap(layer => Array.from({length:8}, (_,i) => ({id:layer+'-r'+(module*2+Math.floor(i/4))+'-c'+i%4,layer,row:module*2+Math.floor(i/4),col:i%4,module,port,enabled:true}))));
export function emptyBoard() {
  return {connected:true,topology:{module_count:8,max_stack:7,columns:TEST_COLUMNS},
    module_layout:{module_count:8,grid_rows:4,grid_cols:2,slots:TEST_PORTS},
    codebook:{codes:CODES.map(id=>({id,unit:id}))},board:{},active_faults:{}};
}
export function layoutBoard(raw,cols) {
  if (![1,2,4,8].includes(cols)) return raw;
  return {...raw,module_layout:{...raw.module_layout,grid_rows:8/cols,grid_cols:cols}};
}
export function editBoard(raw,id,action,code='C0') {
  if (!raw.topology.columns.some(c=>c.id===id)) return raw;
  const board={...raw.board}, stack=[...(board[id]||[])];
  if(action==='add' && CODES.includes(code) && stack.length<7) stack.push(code);
  if(action==='remove') stack.pop();
  if(stack.length)board[id]=stack;else delete board[id];
  return {...raw,board};
}
export function sampleBoard(stacks) {
  const raw=emptyBoard();raw.board=Object.fromEntries(TEST_COLUMNS.map((c,i)=>[c.id,stacks[i]||[]]));return raw;
}
export function blocksFromState(state) {
  const blocks=[];
  for(const column of state.columns||[]) {
    if(!column.enabled)continue;
    for(const block of column.stack) {
      if(!CODES.includes(block.code_id))throw new Error('Unknown input code');
      blocks.push({id:block.slot_key,column:column.id,code:block.code_id,index:block.index,...block.position,attention:column.needs_attention});
    }
  }
  return blocks.sort((a,b)=>a.id.localeCompare(b.id));
}
export const stateFromBoard = raw => normalizeSnapshot(raw,{source:'mock'});
export { connectWorldBlocks };
