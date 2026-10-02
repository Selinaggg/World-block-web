export function registerWorldTools(adapter,select){
  if(!document.modelContext?.registerTool)return;
  const lifecycle=new AbortController();
  const tools=[{
    name:'read_worldblocks_state',title:'Read WorldBlocks arrangement',description:'Read the current editable module arrangement and semantic types.',
    inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true},
    execute(){return structuredClone(adapter.getWorldState());}
  },{
    name:'add_worldblocks_module',title:'Add a WorldBlocks module',description:'Add one module to the current arrangement and select it in the visible inspector.',
    inputSchema:{type:'object',properties:{type:{type:'string',enum:['water','fire','earth','human','animal']}},required:['type'],additionalProperties:false},annotations:{readOnlyHint:false},
    execute(input){if(!input||typeof input!=='object'||Object.keys(input).some(k=>k!=='type'))throw new Error('Expected only an element type.');const id=adapter.add(input.type);select(id);return{id,count:adapter.getWorldState().blocks.length};}
  }];
  for(const tool of tools){try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(e=>console.warn('WorldBlocks tools unavailable',e));}catch(e){console.warn('WorldBlocks tools unavailable',e);}}
  window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}
