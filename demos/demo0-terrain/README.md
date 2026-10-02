# 00 · Terrain

Imported from the existing `creative-terrain-demo`. The original terrain builders,
layout math, element rules, materials, lights, camera and block geometry are retained.
Only the scene background/fog/sea-plane color and the block-view background changed
for the dark interface. `source-hashes.json` and the preservation test document this boundary.
The original source project and the three partner demos are unchanged.

## Use

Open the repository launcher and choose **00 Terrain**. Hardware mode is the default.
After confirming the portal Hardware settings, the app subscribes to full snapshots
from the hardware service and updates immediately, without a Generate button.
The saved C0–C5 meanings are converted into the original terrain vocabulary;
Support becomes Spacer, retaining its layer position and height.

**Test view** toggles the digital block window. **Hardware** shows real input.
**Test board** uses a separate, in-memory one-board simulation. Choose a position and
block, then use **Add block** or **Remove top**; edits immediately change the terrain.
**Load sample** loads a local example, and **Clear test board** clears only that simulation.
Closing the test window leaves the chosen input mode active and visibly labelled.
Switching back to Hardware immediately shows the latest physical snapshot.
No control here resets or writes to the physical board.

Disconnected streams reconnect automatically. Until a new snapshot arrives, the
last received terrain remains visible with a connection notice. Invalid codes are
reported rather than silently reinterpreted as land. Unchanged heartbeats retain
scene references to avoid repeatedly rebuilding geometry and resetting camera zoom.

## Development

The launcher serves the included `worldblocks/dist/` using Python; normal use needs
no Node installation or build. After source edits:

```sh
cd demos/demo0-terrain/worldblocks
npm ci
npm test
npm run build
```

Commit both source and rebuilt `dist/`. `npm run dev` is optional for development;
its settings proxy expects the hub on port 5180. Terrain is served on port 5190 by
the regular launcher. The React/Three.js dependencies retain the original lockfile.

Software checks do not replace testing with the physical board.
