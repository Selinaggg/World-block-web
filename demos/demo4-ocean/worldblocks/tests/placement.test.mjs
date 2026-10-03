import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyBoard,editBoard,stateFromBoard,blocksFromState,TEST_COLUMNS} from '../src/input.mjs';
import {derive} from '../src/rules.mjs';
import {worldPosition,shouldAutoFrame} from '../src/scenePlacement.mjs';
test('adding and removing a distant board leaves existing world positions and camera framing unchanged',()=>{
 const near=TEST_COLUMNS[0].id,far=TEST_COLUMNS.find(c=>c.port==='A7').id;
 const first=editBoard(emptyBoard(),near,'add','C0');
 const before=derive(blocksFromState(stateFromBoard(first)));
 const second=editBoard(first,far,'add','C0'),after=derive(blocksFromState(stateFromBoard(second)));
 assert.notEqual(before.bounds.cx,after.bounds.cx);
 assert.deepEqual(worldPosition(before.nodes[0],2.45,.25),worldPosition(after.nodes.find(n=>n.id===before.nodes[0].id),2.45,.25));
 assert.equal(shouldAutoFrame(true,1,2),false);
 assert.equal(shouldAutoFrame(true,2,1),false);
 const restored=derive(blocksFromState(stateFromBoard(editBoard(second,far,'remove'))));
 assert.deepEqual(worldPosition(before.nodes[0],2.45,.25),worldPosition(restored.nodes[0],2.45,.25));
 assert.equal(shouldAutoFrame(false,0,0),true);
 assert.equal(shouldAutoFrame(true,0,1),true);
});
