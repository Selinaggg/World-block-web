import { useEffect, useState } from 'react';
import { subscribeTerrain } from './terrainInput.mjs';

export function useWorldBlocksSnapshot() {
  const [snapshot, setSnapshot] = useState({ board: {}, active_faults: {} });
  const [status, setStatus] = useState('connecting');
  useEffect(() => {
    let active = true, retry, unsubscribe;
    const controller = new AbortController();
    async function connect() {
      try {
        const response = await fetch('/__hub/settings', { signal: controller.signal });
        if (!response.ok) throw new Error('Settings unavailable');
        const { settings } = await response.json();
        if (!active) return;
        if (!settings?.confirmed) {
          setStatus('setup');
          retry = setTimeout(connect, 2000);
          return;
        }
        unsubscribe = subscribeTerrain({ baseUrl: 'http://127.0.0.1:8787', codeMap: settings.code_map,
          onSnapshot: value => { if (active) setSnapshot(value); },
          onStatus: value => { if (active) setStatus(value); } });
      } catch {
        if (!active) return;
        setStatus('launcher-offline');
        retry = setTimeout(connect, 3000);
      }
    }
    connect();
    return () => { active = false; controller.abort(); clearTimeout(retry); unsubscribe?.(); };
  }, []);
  return { snapshot, status };
}
