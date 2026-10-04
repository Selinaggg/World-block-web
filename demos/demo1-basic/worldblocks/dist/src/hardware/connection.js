import {connectWorldBlocks} from '../input/partner/worldblocks-client.mjs';
export function followHardware({onState,onStatus,onSettings}){
 let stopped=false,timer,connection;const abort=new AbortController();
 async function start(){try{const response=await fetch('/__hub/settings',{signal:abort.signal});if(!response.ok)throw Error();const {settings}=await response.json();if(stopped)return;if(!settings?.confirmed){onStatus('setup');timer=setTimeout(start,3000);return;}onSettings(settings);connection=connectWorldBlocks({baseUrl:'http://127.0.0.1:8787',onState:s=>{if(!stopped){onState(s);onStatus(s.status);}},onConnection:s=>{if(!stopped&&s!=='live')onStatus(s);},onError:()=>onStatus('invalid-data')});}catch{if(!stopped){onStatus('launcher-offline');timer=setTimeout(start,4000);}}}
 start();return {close(){stopped=true;abort.abort();clearTimeout(timer);connection?.close();}};
}
