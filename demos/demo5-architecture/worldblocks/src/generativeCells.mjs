import {seed} from './graph.mjs';

// A stable voxel grammar, independent of frame rate and arrival order.
export function generateCells(node){
  const resolution=node.code==='C4'?4:3,cells=[],step=1.22/resolution;
  for(let y=0;y<resolution;y++)for(let z=0;z<resolution;z++)for(let x=0;x<resolution;x++){
    const edge=x===0||x===resolution-1||z===0||z===resolution-1;
    const value=seed(`${node.id}:cell:${x}:${y}:${z}`);
    const core=x===Math.floor(resolution/2)&&z===Math.floor(resolution/2);
    let solid=value<node.density;
    if(node.code==='C1')solid=edge&&y!==1&&value<.72;
    if(node.code==='C2'||node.code==='C3'||node.code==='C4')solid=false;
    if(node.code==='C5')solid=edge&&value<.20;
    // A shared public neighbor cuts a central gallery through the volume.
    if(node.publicRoom&&y===1&&z===1)solid=false;
    if(node.code==='C0'&&core&&!node.publicRoom)solid=true;
    cells.push({x:(x-(resolution-1)/2)*step,y:(y-(resolution-1)/2)*step,z:(z-(resolution-1)/2)*step,
      size:step*.96,solid,frame:!solid&&(edge||node.code==='C4'||core),diagonal:value>.52,
      light:!solid&&node.light&&value>.7,value});
  }
  return cells;
}
