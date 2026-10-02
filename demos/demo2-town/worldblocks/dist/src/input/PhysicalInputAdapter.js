import {connectWorldBlocks} from './partner/worldblocks-client.mjs';
import {DEFAULT_CODE_MAP,validateCodeMap} from './hardwareConfig.js';

/** Map the normalized contract once. No firmware logic and no second half-layer offset. */
export function toPhysicalWorld(state,metadata,sourceObjectName,codeMap=DEFAULT_CODE_MAP){
  if(state.contract!=='worldblocks-input-v1')throw new Error('Unsupported physical input contract.');
  validateCodeMap(codeMap);
  const columns=state.columns;
  const coords=columns.map(c=>c.position);
  if(coords.some(p=>!p||!['x','y','z'].every(k=>Number.isFinite(p[k]))))throw new Error('Invalid physical coordinates.');
  const xValues=coords.map(p=>p.x),zValues=coords.map(p=>p.z);
  const minX=coords.length?Math.min(...xValues):0,maxX=coords.length?Math.max(...xValues):0;
  const minZ=coords.length?Math.min(...zValues):0,maxZ=coords.length?Math.max(...zValues):0;
  const {bounds,diameter,firstCenterY,stackStep}=metadata;
  const availableX=bounds.maxX-bounds.minX-diameter,availableZ=bounds.maxZ-bounds.minZ-diameter;
  const horizontalStep=Math.min(diameter,availableX/Math.max(1,maxX-minX),availableZ/Math.max(1,maxZ-minZ));
  const centerX=(bounds.minX+bounds.maxX)/2,centerZ=(bounds.minZ+bounds.maxZ)/2;
  const session=`${state.boot_id||'pending'}/${state.topology_id||'pending'}`;
  const issues=[...state.issues],blocks=[];
  for(const column of columns){
    if(column.beyond_validated_height)issues.push({column_id:column.id,reason:'beyond_validated_height'});
    if(!column.enabled&&column.stack.length)issues.push({column_id:column.id,reason:'disabled_column_has_content'});
    for(const unit of column.stack){
      if(!unit.position||!['x','y','z'].every(k=>Number.isFinite(unit.position[k]))||unit.position.y<0)throw new Error('Invalid physical stack position.');
      const type=unit.code_id===null?'unknown':codeMap[unit.code_id]||'unknown';
      if(type==='unknown'&&!issues.some(i=>i.column_id===column.id&&i.reason==='unassigned_code'))issues.push({column_id:column.id,reason:'unassigned_code'});
      const attention=column.needs_attention||column.beyond_validated_height||!column.enabled||type==='unknown';
      blocks.push({id:`physical:${session}:${unit.slot_key}`,sourceObjectName,type,
        position:{x:centerX+(unit.position.x-(minX+maxX)/2)*horizontalStep,y:firstCenterY+unit.position.y*stackStep*2,z:centerZ+(unit.position.z-(minZ+maxZ)/2)*horizontalStep},
        rotation:{x:0,y:0,z:0},heightLevel:Math.round(unit.position.y*2)+1,
        physical:{columnId:column.id,slotKey:unit.slot_key,codeId:unit.code_id,index:unit.index,layer:column.layer,port:column.port,needsAttention:attention,logicalPosition:{...unit.position}}});
    }
  }
  return {version:1,inputMode:'physical',blocks,input:{source:state.source,status:state.status,connected:state.connected,bootId:state.boot_id,topologyId:state.topology_id,moduleCount:state.module_count,validatedMaxStack:state.validated_max_stack,issues,codeMap:{...codeMap},coordinates:'logical-grid',horizontalStep}};
}

export class PhysicalInputAdapter {
  constructor({metadata,sourceObjectName,onWorld,onStatus,connector=connectWorldBlocks}){
    this.metadata=metadata;this.sourceObjectName=sourceObjectName;this.onWorld=onWorld;this.onStatus=onStatus;this.connector=connector;this.codeMap={...DEFAULT_CODE_MAP};this.link=null;this.latest=null;this.currentWorld=null;
    this.connectionEpoch=0;this.status={transport:'stopped',hardware:'waiting',source:null,issues:[],error:null};
  }
  publishStatus(patch){this.status={...this.status,...patch};this.onStatus(this.status);}
  connect(baseUrl,source){
    if(!['hardware','mock'].includes(source))throw new Error('Choose hardware or mock explicitly.');
    const url=new URL(baseUrl);if(!['http:','https:'].includes(url.protocol)||url.username||url.password)throw new Error('Use an HTTP service URL without credentials.');
    this.close();this.latest=null;this.currentWorld=null;this.publishStatus({source,hardware:'waiting',issues:[],error:null});
    const epoch=this.connectionEpoch;
    this.link=this.connector({baseUrl:url.href.replace(/\/$/,''),source,
      onConnection:transport=>{if(epoch===this.connectionEpoch)this.publishStatus({transport});},
      onError:()=>{if(epoch===this.connectionEpoch)this.publishStatus({error:'The service sent an invalid snapshot. Retaining the last valid view.'});},
      onState:state=>{if(epoch!==this.connectionEpoch)return;try{this.accept(state);}catch{this.publishStatus({transport:'invalid-data',error:'Physical data could not be mapped safely. Retaining the last valid view.'});}}});
  }
  accept(state){
    // Waiting/offline packets without topology cannot erase the last reliable arrangement.
    if(!state.topology_id&&!state.columns.length){this.publishStatus({hardware:state.status,error:null});return;}
    const world=toPhysicalWorld(state,this.metadata,this.sourceObjectName,this.codeMap);
    this.latest=state;this.currentWorld=world;
    this.publishStatus({hardware:state.status,issues:world.input.issues,error:null,receivedAt:Date.now()});
    this.onWorld(world);
  }
  setCodeMap(map){this.codeMap=validateCodeMap(map);if(this.latest)this.accept(this.latest);}
  reconnect(){this.link?.reconnect();}
  close(){this.connectionEpoch++;this.link?.close();this.link=null;this.publishStatus({transport:'stopped'});}
}
