import {normalizeSnapshot} from '../input/partner/worldblocks-client.mjs';
export const CODES=['C0','C1','C2','C3','C4','C5'];
export const PORTS=Array.from({length:8},(_,i)=>'A'+i);
export const COLUMNS=PORTS.flatMap((port,module)=>['L0','L0.5'].flatMap(layer=>Array.from({length:8},(_,i)=>({id:`${layer}-r${module*2+Math.floor(i/4)}-c${i%4}`,layer,row:module*2+Math.floor(i/4),col:i%4,module,port,enabled:true}))));
export function emptyBoard(){return {connected:true,topology:{module_count:8,max_stack:7,boot_id:'test',topology_id:'test-128',columns:COLUMNS},module_layout:{module_count:8,grid_rows:4,grid_cols:2,slots:PORTS},codebook:{codes:CODES.map(id=>({id,unit:id}))},board:{},active_faults:{}};}
export const normalizeBoard=raw=>normalizeSnapshot(raw,{source:'mock'});
export function editBoard(raw,id,action,code='C0',index=null){
 if(!COLUMNS.some(c=>c.id===id))return raw;
 const board=structuredClone(raw.board),stack=board[id]||[];
 if(action==='add'&&CODES.includes(code)&&stack.length<7)stack.push(code);
 else if(action==='remove')stack.pop();
 else if(action==='type'&&CODES.includes(code)&&index>=0&&index<stack.length)stack[index]=code;
 else return raw;
 if(stack.length)board[id]=stack;else delete board[id];return {...raw,board};
}
export function layoutBoard(raw,cols){return [1,2,4,8].includes(cols)?{...raw,module_layout:{...raw.module_layout,grid_cols:cols,grid_rows:8/cols}}:raw;}
export function sampleBoard(kind){const raw=emptyBoard();const entries=kind==='dream'?[['L0-r2-c2',['C0','C0']],['L0-r2-c3',['C0']],['L0-r3-c2',['C1']],['L0-r3-c3',['C3']],['L0-r4-c0',['C4']],['L0-r4-c1',['C5']],['L0-r5-c0',['C2']]]:[['L0-r2-c2',['C3','C3']],['L0-r2-c3',['C3']],['L0-r3-c2',['C2','C2']],['L0-r3-c3',['C4']],['L0-r4-c0',['C0']],['L0-r4-c1',['C0']],['L0-r5-c0',['C1']]];raw.board=Object.fromEntries(entries);return raw;}
export function moveStack(raw,from,to){if(from===to||!COLUMNS.some(c=>c.id===to)||raw.board[to]?.length||!raw.board[from]?.length)return raw;const board=structuredClone(raw.board);board[to]=board[from];delete board[from];return {...raw,board};}
