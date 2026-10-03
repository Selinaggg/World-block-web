import { normalizeSnapshot } from '../../../../shared/hardware-client/worldblocks-client.mjs';

// Only chooses a simulated slot. The existing adapter owns codes and stack edits.
export function pickTestPosition(raw, random = Math.random) {
  const columns = normalizeSnapshot(raw, {source: 'mock'}).columns.filter(c => c.enabled);
  if (!columns.length) return null;
  const xs = columns.map(c => c.position.x), zs = columns.map(c => c.position.z);
  const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
  const cz = (Math.min(...zs) + Math.max(...zs)) / 2;
  const sx = Math.max(1, (Math.max(...xs) - Math.min(...xs)) / 2);
  const sz = Math.max(1, (Math.max(...zs) - Math.min(...zs)) / 2);
  const radius = c => Math.hypot((c.position.x-cx)/sx, (c.position.z-cz)/sz);
  const available = columns.filter(c => c.stack.length < raw.topology.max_stack);
  if (!available.length) return null;
  // 82% central cluster, 18% peripheral scatter. Occasional stacks add height.
  const scatter = random() < .18;
  let pool = available.filter(c => scatter ? radius(c) > .65 : radius(c) <= .8);
  if (!pool.length) pool = available;
  const stack = random() < .28;
  const preferred = pool.filter(c => stack ? c.stack.length > 0 : !c.stack.length);
  if (preferred.length) pool = preferred;
  const occupied = columns.filter(c => c.stack.length);
  const weights = pool.map(c => {
    const near = occupied.some(n => Math.hypot(c.position.x-n.position.x,c.position.z-n.position.z) <= 1.1);
    return scatter ? 1 : (.15 + Math.exp(-3*radius(c)**2)) * (near ? 1.7 : 1) / (1+c.stack.length*.35);
  });
  let ticket = random() * weights.reduce((a,b) => a+b,0);
  for (let i=0;i<pool.length;i++) {ticket -= weights[i]; if (ticket < 0) return pool[i].id;}
  return pool.at(-1).id;
}
