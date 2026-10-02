# WorldBlocks

A desktop-first, responsive 3D prototype built from the supplied Shapr3D OBJ. The scene starts with an empty white base; users add and arrange modules from the element tray. No build pipeline or runtime CDN is required. Control Maps run locally; styled images use the Gemini configuration from WorldBlocks_Test. Vendored Three.js 0.180.0 is included with its MIT license.

## Run

Install the Python dependencies with `python3 -m pip install -r requirements.txt` if needed. From this folder, run `npm run dev`, then open http://127.0.0.1:5188. Run `npm test` for the model, state, adapter, spatial analysis and generation checks.

## Source model findings

- 221 separate named OBJ groups: **217 faceted modules and 4 fixed base sections**.
- Each module has 44 exported triangle faces; the base pieces each have 588.
- Z is the source vertical axis. The scene uses a rigid −90° X rotation plus a uniform scale and translation. Source positions and all vertex geometry are retained.
- Exported vertex colours exist but do not encode reliable semantic categories. They are ignored for rendering; types use deterministic sorted-name assignment, preceded by name matching and an optional configuration map.
- The lowest original modules sit inside the sculpted base recesses. Their exact source offset is retained in the imported model data. New user-added modules use the original seated centre height, with their bottom near the recess floor rather than above the ridge tops. They spawn at available source seating locations near the centre. Half a module height is the level step because the arrangement includes half-height staggered layers. There are 14 occupied levels spanning 1–15.
- The original OBJ outside this folder is untouched. `dist/models/worldblocks.obj` is a byte-identical copy.

## Architecture

`WorldInputs (WebInputAdapter / PhysicalInputAdapter) → WorldState store → spatialAnalysis → worldRules → WorldPipelineGenerator → local terrain pipeline → Gemini`

- `dist/src/config.js`: asset URL, source-up axis, base classification, colours, semantic overrides, level limits and proximity thresholds.
- `dist/src/model/`: loads, classifies and normalizes objects. Merged models fail explicitly with a re-export instruction rather than pretending independent modules exist.
- `dist/src/components/WorldScene.js`: renderer and pointer-to-plane interaction. Base geometry is excluded from selection/raycast targets. Orbiting is suspended while a module is dragged.
- `dist/src/world/worldStore.js`: validates and freezes serializable WorldState. Snapshots are independent copies.
- `dist/src/input/`: manual editor, separate manual/live state coordinator, hardware adapter and the verbatim partner client.
- `dist/src/world/spatialAnalysis.js`: pure data-only utilities, 3D and horizontal distances, counts, height, neighbours, normalized X/Z coordinates and comparisons.
- `dist/src/world/worldRules.js`: replaceable objective observations only. No final academic interpretation rules are invented.
- `dist/src/generation/`: asynchronous Control Map/image job client, progressive result UI, and older compatibility clients. `server/world_pipeline.py` runs the imported partner terrain logic and Gemini calls; secrets stay server-side.
- `dist/src/app.js`: UI composition, reading phase, immutable generation snapshots and last-five session history.

## Interaction

Select modules by clicking or using “Find a module.” Drag on a module to move at its current height; drag empty canvas to orbit; scroll to zoom. Inspector controls change semantic type, discrete height and X/Z position. Hold a height + / − button or any Position arrow to repeat: one immediate step, a 350ms delay, then one step every 110ms. Mouse, touch and keyboard hold are supported. Release, move off the button, blur the window or reach a height or movement boundary to stop. Remove a module using its button or Delete/Backspace when focus is outside input fields. Escape deselects. Reset world returns to the empty base. The original stacked OBJ remains unchanged and is used as the source geometry library. Reset view restores the camera.

Generate captures an immutable state and model image, shows spatial facts, then creates a real local Control Map and a Gemini image in the VERSION2 style. Two-pass style refinement defaults on, matching WorldBlocks_Test; a checkbox allows a single pass. Video generation is paused, with its starting image and animation prompt available. Live input updates are buffered during generation. No input event automatically calls the image service. Change Your World unlocks editing without discarding the result. Subsequent generations keep up to five snapshots with previous/current change counts. History is in memory for the current page session, not persisted across refreshes.

## Prototype limits

No rigid-body physics or collision solver: modules can intersect or float when edited. Movement is bounded by the combined base rectangle, with a module-radius inset. Semantic types are provisional. Hardware input is integrated and tested with the partner mock. Actual device validation requires the hardware owner’s local service. WorldBlocks_Test supplies the terrain, Gemini and Veo logic. Control Map/image generation is integrated; no Veo call is enabled. Free coordinates are continuously mapped into the original terrain domain, rather than snapped into its old fixed board. Image content remains generative, so exact placement fidelity is not guaranteed.

The developer panel is visible on localhost and with `?debug`; ordinary hosted presentation hides it. It contains source hierarchy, bounds, selected module state and raw WorldState JSON. Browser WebMCP support is feature-detected; the same state and add action are available to compatible agents.

The white base has a depth-tested fine grey edge overlay. It follows sharp geometry edges (20-degree threshold) and omits coplanar triangle diagonals. Colour, opacity and edge threshold are configurable in `MODEL_CONFIG`.


## Partner integration (30 September)

The input bar provides **Manual**, **Physical model**, and **Connection demo**. Switching inputs retains the manual draft in memory. A reliable live arrangement can be added to that draft and then freely edited. Physical snapshots are read-only until copied, so incoming events cannot overwrite manual edits. C0–C5 meanings are editable and explicitly provisional; apply the team's codebook before using real input for generation.

Run `npm run mock:input` in a second terminal, choose Connection demo and click Connect to exercise the partner simulator on port 8790. Physical model defaults to the owner's existing service on port 8787. The website itself runs on port 5188.

See [docs/INTEGRATION.md](docs/INTEGRATION.md) for the exact input semantics, image gateway contract and remaining integration requirements. Use `python3 -m unittest discover -s tests -p 'test_*.py'` for the local gateway tests, in addition to `npm test`.


## Control Map → image → video entry

The current pipeline reads `GEMINI_API_KEY` and optional `GEMINI_MODEL` from server environment variables, `worldblocks/.env`, or the known sibling `WorldBlocks_Test/.env`, in that priority. Credentials never enter browser code. The original WorldBlocks_Test files and experiment outputs remain untouched.

Press **Generate World** with a nonempty manual arrangement or reliable physical snapshot. The page shows the captured arrangement, then the locally computed 768 × 768 Control Map, then the generated image. The reference is `VERSION2.jpeg`, copied to `dist/assets/world-style.jpeg`. By default the service makes two image calls, except the original life-only failed-habitat cases which skip pass 2. **Video options** exposes the prepared locked-camera animation prompt; **Generate video** stays disabled, and the server rejects video-generation requests.

Every run is saved in `outputs/<run-id>/` with its layout, mask, terrain grammar, prompts, first-pass and final images. Failed image steps retain the control map; Retry image generation reuses a completed first pass. Image-generation errors do not silently become mock results. See [docs/INTEGRATION.md](docs/INTEGRATION.md).


## TV / projection layout

The main interface is a single viewport: all primary adding, selection, height/position, input switching and generation controls stay on screen. The center stage has **Model / Control Map / Image / Video** tabs. Generation replaces the stage content as artifacts become ready; it does not append a result page or scroll. **Edit arrangement** returns to the existing editable model. Older generated views remain accessible and are marked when the model has changed. **Settings** opens inside the stage, with image and physical-connection sections. **Full screen** uses the browser's fullscreen action when available. Recent session generations use a compact selector in the left rail. Video remains disabled.
