# Dreamscape Demo

Open `http://127.0.0.1:5188/dream.html` with the existing server (`npm run dev`). No build, external service, API key or generation credit is needed. Human Town and the image pipeline remain at the original URL. Home and the town header link to Dreamscape in another tab to preserve the town's live in-memory draft. The `basic demo.zip` and `demo2 town.zip` archives are untouched.

## Experience

Add Anchor, Memory, Emotion, Desire or Fear to the original OBJ sandbox. Selection, type assignment, drag, cell-based arrows, held movement and held intensity controls reuse the existing editor. Raising creates real supporting blocks and uses the corrected full module face-to-face height. In the output, stacking means field intensity rather than building height.

Try a composition contains the five controlled comparisons plus a combined composition. Arrange example loads editable blocks; Generate Dreamscape creates their result. The first pre-example draft remains available through Return to my arrangement in that session. The current Dreamscape draft persists locally under `worldblocks-dream-draft`, separately from Town.

Generation reads a fixed snapshot on a module worker. A 2.8-second GPU reveal progressively forms the actual particles; it is an animation, not an artificial server delay. Reduced motion completes immediately and disables jitter and walking bob. Overview supports orbit and zoom. Enter dream moves the same camera smoothly to a stable entry. WASD/arrows walk, Shift moves faster, mouse drag looks around; clicking the canvas requests pointer lock where supported. Escape releases it. Return to overview preserves the prior camera and generated data. Clear screen hides UI, never deletes blocks; Show controls or Escape restores it.

## Pipeline and causality

`WorldState → analyzeDream → generateDreamFields → generateDreamStructure → buildDreamParticles → planDreamNavigation → DreamScene`

The shared store validates dream types only when `mode: 'dreamscape'` is present. The shared WebInputAdapter accepts an optional type palette and WorldScene accepts optional materials. Their default town semantics remain unchanged. No town generator is called by Dreamscape.

- Seed derives from sorted type, normalized X/Z and height, excluding transient IDs or array order.
- Co-located modules aggregate into sources. Height and quantity strengthen smooth Gaussian fields.
- Neighbouring forces blend continuously. Anchor strengthens continuity and path width, Memory controls room completion and ceiling/stair traces, Emotion forms breathing ellipsoidal colour fields, Desire terminates the route at bright threshold traces, Fear removes coherent wall patches, adds red fractures and narrows passage width.
- At most 12 chamber nodes form a short connected route. Nearby sources combine within one chamber. In larger arrangements all sources still contribute fields even if they do not each create another node.
- Navigation is a union of chamber discs and corridor capsules. Invisible boundaries constrain movement, with substeps and sliding. The centre route remains traversable through high Fear. Floor height is stable and stacking does not create cliffs.
- Point layers: floor/path, remembered structure, atmosphere, attractor, fracture. Seeded CPU geometry is uploaded once; breathing, local jitter, destination drift and reveal run in a shader. No visible solid town/room meshes are rendered. Fine points, black background and selective electric blue, white, magenta, red and cyan follow the supplied references.

## Performance and debug

Desktop uses at most 125,000 points; narrow screens use 72,000. One point-cloud draw call, shared shader, capped pixel ratio, worker generation, and paused hidden rendering keep per-frame CPU work small. Replacing a result disposes the old GPU geometry/material and worker. Actual frame rate depends on the display/GPU; no fixed frame-rate claim is made.

Field study is available on localhost or with `?debug`. It shows seed, strengths, particle layer counts, route, spawn, node locations, attractors and fractures. A selector overlays each influence field. Clear screen and first-person entry remove the overlay. Production presentation hides developer controls.

Physical compatibility is at the WorldState boundary: `toDreamWorldState` maps an existing physical snapshot into dream semantics without mutating it. Current defaults are Earth→Anchor, Human→Memory, Animal→Emotion, Water→Desire, Fire→Fear; this is an application mapping that must match a future hardware codebook. Unknown modules are rejected. Dreamscape does not open a live physical connection itself; the existing Town connection UI is unchanged.

## Verification

`npm test` runs existing regression coverage plus Dreamscape tests for grid/stack reuse, mode isolation, deterministic geometry, positional and intensity effects, the five distinct compositions, route continuity, bounded walking, a lone force, physical snapshot conversion and camera entry/exit without regeneration. Browser checks cover generation reveal, overview, first-person entry/return, editing/regeneration and console errors.
