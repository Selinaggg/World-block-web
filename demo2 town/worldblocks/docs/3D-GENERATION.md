# Procedural 3D output

## Entry and shared source
`dist/src/app.js` binds Generate 2.5D to the original `generate()` function and Generate 3D to `generateThree()`. Both capture `store.snapshot()`. WebInputAdapter and PhysicalInputAdapter already feed this store; there is no second editable block model. The original `WorldPipelineGenerator`, API, Python pipeline, prompt generation and image assets are unchanged.

`generation/threeD/IslandGenerator.js` validates and clones the snapshot, reuses `world/spatialAnalysis.js`, then builds derived influences, terrain and content. It imports no image API client and performs no fetch. Loading stages yield browser frames without adding artificial multi-second delays.

## Coordinate and height rules
Use existing normalized X/Z from the base bounds. The renderer maps `(normalized - 0.5) * size`, preserving the source scene's axes and initial camera orientation. The domain extends 15% past each edge to keep edge modules inside a water border. Source heightLevel already accounts for the adapter's half-module stack steps, including physical half layers.

Earth and Fire raise a configurable seabed; Water lowers it. Gaussian influence fields add together, then bounded elevation and low-amplitude seeded value noise produce a 64×64 height grid. 128×128 is supported through config. Earth is broader; Fire more local; higher levels increase strength/radius with a cap. Human/Animal never affect elevation. Geography noise excludes life/IDs so adding life cannot reroll terrain.

## Determinism and content
Canonical sorted semantic locations/heights seed content; transport metadata, block IDs and input array order do not alter the result. Noise is much weaker than the terrain influences. Tree candidates require dry land, manageable slopes and semantic influence; rocks favour exposed slopes and Earth/Fire. Spacing avoids uniform carpet placement. Surface sampling uses the same triangle diagonal as the visible mesh, not bilinear height interpolation.

`WorldContentGenerator` returns environment, life and civilisation layers. The layers include trees, rocks, Human houses/paths and Animal sheep/deer/water birds. SemanticContent.js places up to three homes and five animals per corresponding influence point, within a configurable local radius. Houses prefer dry, moderate slopes; waterfront fallback homes sit on stilts. Animals prefer suitable nearby land, using water birds when no suitable dry site is found. Foundations account for footprint heights, paths sample the terrain and skip water/cliffs, and environmental instances leave clearings around semantic content. Animal can also encourage nearby vegetation. These are provisional visual behaviours, not final research conclusions. Future GLB providers can replace procedural mesh factories without changing terrain generation or source state.

## Rendering and lifecycle
`WorldMeshes.js` constructs actual triangle terrain, a water plane, base, instanced tree trunks/canopies and three deterministically distorted rock variants. No generated image is used as island geometry or texture. `Generated3DWorld` owns the output renderer, controls, lighting, inspection and GPU cleanup on replacement. The former source-preview renderer is removed. Both the editable WorldScene and Generated3DWorld now live in a fixed full-viewport canvas layer below the interactive UI. Only the current view is visible, and hidden renderers stop drawing. Floating controls intercept clicks while empty overlay areas allow canvas interactions. SemanticMeshes.js builds actual instanced house parts and animal parts; no human character model is created.

`StageView` holds the image job and a separate 3D result reference. New image jobs do not clear the 3D result. New 3D jobs do not clear the image job. Editing marks old 3D output as a previous generation and never regenerates it until requested. Errors stay in the 3D panel; old 3D output is retained. Mode constants live in threeD/config.js. API-backed image persistence is unchanged; 3D output currently lasts for the browser session and can be reconstructed from snapshot/config/seed. No server persistence/export UI has been added for 3D.

## Tunable parameters
Edit `dist/src/generation/threeD/config.js`: resolution, domain, seaLevel, seabed, noiseAmplitude, maximum elevation; Earth/Water/Fire strength, radius and height gains; content counts, slope limit, land clearance and spacing; semantic radius, slope limit, house/animal counts and spacing. No physics engine, external asset dependency or AI director is required.

## Validation
`npm test` covers existing pipelines plus deterministic equality, immutable snapshots, spatial correspondence, height growth, merging Earth, Water carving, sharper Fire, life/elevation separation, dry-land and slope placement, actual Three.js instancing/triangles, physical-source validation, 128-grid generation, independent stage results, and zero fetch calls from 3D. Python API tests use local fake upstreams rather than paid providers.
