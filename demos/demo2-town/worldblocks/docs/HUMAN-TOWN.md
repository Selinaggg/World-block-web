# Human Town demo

Build a town without a blueprint.

## Audit and reuse

The application is vanilla ES modules with vendored Three.js and OrbitControls, not React/R3F. No framework or new dependency was introduced. The OBJ loader still imports 217 independent module meshes and four fixed base pieces with the original faceted geometry. WebInputAdapter and the real PhysicalInputAdapter both feed the immutable worldStore through WorldInputs. Dragging, selection, press-and-hold position/height, code mapping and physical snapshot validation are retained.

The original image branch remains WorldPipelineGenerator → local Python server → partner terrain/Control Map → Gemini image, with a paused video entry. The new 3D branch replaces the generic island entry in app.js, without modifying the image API or server generation logic. Historical island code remains for compatibility and its regression tests. The archived basic demo.zip is unchanged.

## New 3D branch

WorldState snapshot → normalized coordinates → Human clusters and resource relationships → 64×64 height field → SettlementPlan → terrain-aware road graph → roadside plots and modular buildings → instanced environment → Three.js scene.

- `dist/src/town/config.js`: centralized terrain, distance, placement and content limits.
- `spatial.js`: conversion helpers, clusters, weighted centroids and cardinal relationships. Uses the existing sandbox X/Z normalization (X grows to the right, Z grows toward the front). Presentation labels call positive Z south and negative Z north, independent of orbit angle.
- `TerrainGenerator.js`: baseline buildable land, positive Earth, negative Water, slight Fire terrain influence; Human/Animal never change terrain. Reuses exact rendered-triangle height sampling.
- `SettlementPlanner.js`: dominant Human centre, neighbourhoods, shore-facing waterfronts, edge production, nearby/outlying rural zones and Earth-assisted fields. Roads precede building placement. Occupancy prevents overlapping footprints and planting into roads or plots.
- `RoadGenerator.js`: a small deterministic A* grid with water/slope costs, a connecting graph and residential lanes. Necessary short water crossings receive raised wooden decks. Unsupported long crossings are reported in debug rather than forced.
- `BuildingGrammar.js`: continuous five-element influence at each plot, resolved into explicit residential, waterfront, hillside, craft and rural architectural profiles. Shapes, foundations, layout spacing, props and architectural palettes respond together. `ArchitectureMeshes.js` builds the corresponding geometry and contextual landmarks.
- `EnvironmentGenerator.js`: terrain-sampled trees, rocks, livestock within agricultural enclosures, and low-poly boats beside docks.
- `TownMeshes.js`: actual geometry for all terrain, water, architecture, roads, fences, docks and animals. Shared materials and instanced trees/rocks; foundations meet sloped terrain.
- `HumanTownGenerator.js`: immutable snapshot, seeded variation, real stage callbacks and concise rule-based summary.

The same snapshot produces the same plan and geometry, excluding creation timestamps. IDs/order and hardware transport metadata do not affect the seed. Building density responds to Human height while buildings stay one or two floors. Animal height scales agricultural plots; Fire height changes workshop count. A no-Human arrangement generates terrain and a gentle “A town needs people” message, with no town buildings.

## Element-based architecture

`elementInfluenceAt()` samples Human, Water, Earth, Fire and Animal continuously using distance and stack strength. `resolveArchitecture(function, influence, terrainContext, settlementContext)` keeps building function separate from its architectural profile. Geometry variation is bounded; element relationships choose the main silhouette.

- Human: compact houses, framed windows, porches, shop awnings and upper-floor balconies. Strong Human adds two-storey buildings and connected streets.
- Water: broad pitched roofs, timber stilt houses, decks, railings, barrels and waterfront details.
- Earth: stepped volumes, stone plinths, retaining edges, roof terraces, stairs and fields.
- Fire: asymmetric workshop roofs, lower side wings, kilns, chimneys, crates, woodpiles and restrained smoke.
- Animal: long low barns, green roofs, stable doors, hay, troughs and open paddocks.

Water and Fire can combine into a harbour workshop with both a raised deck and a kiln wing. Each settlement selects one primary and up to two secondary landmarks from bell towers, striped lighthouses, windmills, kiln towers and silos. `BuildingSite.js` shares foundation and entrance positions between rendering and walking; exterior footprints remain conservative collision boundaries rather than walkable interiors. Smoke respects reduced-motion preferences.

The architectural reference informs silhouettes and details only. Existing workspace background, water, terrain and lighting colours are retained.

`architecture-lab.html` is a development comparison page containing five controlled arrangements, using the same generator and renderer as the application. Add `?debug` to expose the optional influence-colour overlay there or in the main application's Development details. Normal presentation retains architectural materials; switching off the overlay restores them.

## Interface

Generate 2.5D and Generate 3D Town are separate explicit actions. 3D is local and makes no generation API calls. The bright tabletop studio replaces the dark exhibition shell for this experimental demo. Desktop shows the enlarged model or town on a full-viewport canvas behind floating controls. The town result hides the source comparison; Model / Change Your Town returns to the arrangement. “Why this town?” lists observable relationships. Recent towns keeps the last five snapshots/plans/configs in memory; selecting one does not overwrite the editable draft. Change Your Town returns to that draft and retains generated results. Clear screen shows only the current generated result; Escape restores controls.

Examples demonstrate a waterside craft village, two separated neighbourhoods and an outlying farm. They populate genuine OBJ seat positions and generate locally. Browser refresh clears local 3D history; existing server image URLs remain supported. On narrow screens the input/output stack vertically with normal page scrolling so neither canvas becomes unusably small. Desktop stays one screen.

## Validation

Run `npm test` and `python3 -m unittest discover -s tests -p 'test_*.py'` from worldblocks. Backend tests use fake upstream image providers and need permission to bind localhost ports. They do not spend image credits.

Town tests cover cardinal resource zones (A), two connected Human clusters (B), close/far waterfront and rural relationships (C/D/E), deterministic physical/web input, immutable snapshots, no-Human state, height causality, occupancy, finite real mesh construction and unit conversion. Example tests use actual OBJ seats and verify local generation without fetch.

## Scope / limits

This is a procedural spatial interpretation, not a city simulation. Placement and slope handling are approximate. Overcrowded, flooded or very steep arrangements may omit plots; Development details lists the omissions. The latest five town results are session-local. Hardware plumbing is regression-tested, but this task does not validate a live physical installation. No new paid Gemini request or video generation is performed during validation.

Earlier baseline verification on 1 October 2026: all 54 JavaScript cases (including 10 dedicated town cases) and 8 Python backend cases passed. Browser checks covered the waterside and two-neighbourhood examples, manual edit/regenerate, prior/current town switching, Why this town expansion, immersive view, and a 390×844 stacked layout. Final desktop preview showed the 14-building waterside example with no browser error logs. No paid image/video generation was requested.

Architecture update verified on 1 October 2026: all 67 JavaScript cases pass, including five new architecture cases covering continuous influences, hybrid placement, Human density/connectivity, landmark hierarchy, finite meshes and debug-material restoration. All five controlled arrangements were visually inspected; street-level exploration and the main example flow were checked. Backend code is unchanged; Python backend tests were not rerun for this architecture-only update.

## Lightweight dynamic life

The generated town now shares one `TownDynamics` layer between diorama and Explore Town. Background, terrain colours, source editing, physical input and 2.5D generation are unchanged.

- **Ambient:** a small shader displacement/shimmer on the water; up to two moored boats gently bob and rock; selected instanced canopies and small cloth details sway.
- **Living:** Animal-influenced pastures receive sheep, cows and chickens. `TownLifePlan` creates deterministic local routes, validates complete segments against terrain, water, fences and building/prop colliders, then stores simple walk/pause/graze loops. Herds are bounded to five per field and twenty per town. Small or obstructed fields may contain fewer animals. Animals are visual life, not solid player obstacles or an AI simulation.
- **Functional:** selected residential chimneys emit two lighter puffs; selected workshops emit three larger puffs and show a subdued emissive kiln opening. Existing windmill rotors turn slowly. Smoke is capped at 36 puffs and uses no volume simulation or dynamic lights.

All route and selection decisions happen at generation time with seeded randomness. Frame updates use transform loops, one water time uniform, and selected canopy instance matrices at 20 Hz. Animal height samples follow the existing terrain surface. No sound, NPC crowds, game systems or new network services are introduced.

Hidden canvases and background tabs pause the animation clock. Reduced-motion preferences freeze animal/windmill playback, flatten water/boat/sway motion and hide looping smoke. `architecture-lab.html?debug` provides a Pause life checkbox and visible frame/counter/position readings for verification; these diagnostics do not appear in the normal studio.

Dynamic-life validation on 1 October 2026: 71 JavaScript tests pass. New coverage checks reproducibility after input reordering, bounded district content, sampled animal routes over three minutes, moving render transforms without snapshot mutation, reduced-motion freeze/resume and shader bounds. Browser checks covered the standard example flow, pasture animals, residential/workshop smoke, water/boat updates and waterfront Explore mode, with no captured console errors. Short measurements in the local comparison page were approximately 47–56 fps after settling at its normal 1280×720 viewport; these are local observations, not a cross-device performance guarantee. Backend generation was not changed or invoked.

Explore walking refinement: normal speed is 0.28 world units/second (75% faster), Shift speed is 0.46. A distance-driven gait adds up to 4.5 mm of camera lift and 2.5 mm of lateral sway in renderer units (4.5 cm / 2.5 cm at the town's scale), with a small roll and smooth start/stop envelope. Blocked movement stops the gait; reduced-motion preferences disable it. Collision movement and terrain height remain independent of the visual camera offset. All 71 JavaScript cases pass, including gait amplitude, blocked-motion settling and reduced-motion checks.


## Grid placement and example presentation refinement

Manual dragging snaps to genuine OBJ base seats. Direction controls move to one adjacent seat per click, retaining press-and-hold repetition. Moving into an occupied seat places the module on that column; moving/removing a lower module settles the remainder. Raising a module adds matching-element support blocks as needed, while lowering reorders it within the existing column. These are real editable blocks, included in generation. Incoming physical snapshots keep their original hardware semantics.

All example snapshots now include every layer below an elevated block. Example controls sit beside the existing generation actions, with no floating caption panel over the canvas. A completed arrangement remains visible while the local town is generated; a 950 ms image crossfade reveals the ready scene, then removes its temporary overlay. Reduced motion switches immediately. Return to my arrangement remains available.

Normal walking is now 0.42 units/second, Shift is 0.68, and vertical gait amplitude is 0.008 units (up to 0.0096 during fast walking). Camera sway still depends on actual movement and settles at walls or when stopped. Validation: all 74 JavaScript tests pass, including grid snapping, neighbour steps, support continuity after movement/removal, every example playback step and gait bounds. Browser checks verified supported stacks, an unobstructed Model view, one-cell movement and the live handoff overlay.
