import {useEffect,useState} from 'react';
import {blocksFromState,connectWorldBlocks} from './input.mjs';
export function useInput() {
  const [blocks,setBlocks]=useState([]),[status,setStatus]=useState('connecting');
  useEffect(()=>{
    let active=true,timer,connection,signature='';const abort=new AbortController();
    async function start(){try{
      const response=await fetch('/__hub/settings',{signal:abort.signal});
      if(!response.ok)throw new Error();
      const {settings}=await response.json();if(!active)return;
      if(!settings?.confirmed){setStatus('setup');timer=setTimeout(start,2000);return;}
      connection=connectWorldBlocks({baseUrl:'http://127.0.0.1:8787',onState:state=>{
        if(!active)return;
        try{const next=blocksFromState(state),key=JSON.stringify(next);if(key!==signature){signature=key;setBlocks(next);}setStatus(state.status);}
        catch{setStatus('invalid-data');}
      },onConnection:value=>{if(active&&value!=='live')setStatus(value);},onError:()=>{if(active)setStatus('invalid-data');}});
    }catch{if(active){setStatus('launcher-offline');timer=setTimeout(start,3000);}}}
    start();return()=>{active=false;abort.abort();clearTimeout(timer);connection?.close();};
  },[]);
  return {blocks,status};
}
