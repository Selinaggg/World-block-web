# Partner integration — 30 September 2026

## What the provided package actually contains

`../../worldblocks-partner-handoff-v1` provides a normalized input client, fixtures, a local SSE simulator, contract documentation and tests. Its README explicitly excludes the previous complete web frontend and image-generation implementation. The original package was left unchanged; `dist/src/input/partner/worldblocks-client.mjs` is a verbatim copy. That limitation applied to the first handoff. The subsequently supplied WorldBlocks_Test now provides the generator, integrated below.

## Run and use

1. In `worldblocks`, run `npm run dev`; open `http://127.0.0.1:5188/`.
2. Manual starts with the white empty base. Add elements, change type, drag, or hold Height/Position controls as before.
3. For a safe simulated connection, run `npm run mock:input` in another terminal. Choose Connection demo and Connect (port 8790). The demo cycles empty, placed, stacked, moved, attention, offline, recovering and recovered states. Its badge explicitly says MOCK.
4. For the real model, the hardware owner must run their existing local service on the computer connected to the model. Choose Physical model and Connect to its URL (default `http://127.0.0.1:8787`). No serial or firmware command is implemented here. Do not publicly expose that unauthenticated local service. The service must allow the local webpage's origin for SSE.
5. Apply the C0–C5 code meanings to match the team's actual codebook. The supplied defaults are provisional: C0 water, C1 fire, C2 earth, C3 human, C4 animal, C5 support. They are not inferred from the partner's legacy label strings.
6. Live mode is read-only. **Add to manual draft** appends a reliable live arrangement to the retained manual draft, then switches to editable Manual mode. Switching to Manual without copying simply restores the draft. Drafts and mappings last for this page session only.

## Input integrity

The unchanged partner client owns snapshot normalization, GET/SSE transport, reconnection and watchdog behavior. Complete snapshots replace the current live world; they never append. `column.id`, layer, port, logical coordinates, code and bottom-to-top stack index remain in `block.physical`. `slot_key` identifies a position, not a uniquely tracked physical piece. IDs include boot/topology scope. C5 remains a real layer; unidentified layers remain neutral unknown modules rather than being dropped. Unknown/contact/height problems are shown and prevent generation/copying until reliable.

The client already applies the half-layer offset. The app maps its final logical coordinates once into the current OBJ sandbox. Grid layout uses all reported columns, so modules do not jump just because another column becomes empty. The lowest L0 module uses the OBJ's seated recess height. This is a visual grid mapping, not a measured millimetre calibration of the hardware. The supplied contract exposes tile/column logical positions, not a physical CAD registration for every recess.

Transport interruption, physical device offline, recovery and column uncertainty are separate states. Cached modules stay visible but cannot be generated from while stale. Switching connections invalidates old callbacks. Reading/generation captures an immutable arrangement and buffers subsequent live changes until returning to Build.

## WorldBlocks_Test generation integration

The later-provided `WorldBlocks_Test` supplies the actual terrain, image and animation implementation. Its original folder remains untouched. The production generator now uses reviewed copies under `server/partner`; `SOURCE.json` records source hashes and adaptations. The older generic `/api/generate` gateway remains only for compatibility.

### Coordinates and semantics

`WorldState` + `spatialAnalysis.normalizedPositions` are captured together. Current scene X/Z map continuously to partner terrain X/Y in [0, 3], anchored to the full base. No cell snapping or occupied-layout auto-fit occurs. Current height level maps to partner elevation `(heightLevel - 1) / 2`, retaining half layers. Physical column IDs group stacks; manual modules at equal horizontal coordinates (four decimal places in scene units) share a stack. Every module keeps its own ID. Structural C5 supports remain in the saved layout and preserve the elevations of modules above, but do not invent a sixth terrain meaning. Unknown codes and unreliable physical snapshots cannot generate.

The partner height weighting, natural terrain/life-overlay split, noise, influence blending, terrain grammar, habitat failure rules and VERSION2 prompts are reused. Custom influence nodes extend the old fixed grid to continuous positions. Each request passes its own positions instead of changing global board state. The fixed terrain interpretation domain means this is a composition mapping, not a new physical millimetre calibration.

### Runtime and credentials

Install `Pillow` and `google-genai` from `requirements.txt`; run `npm run dev`. Streamlit is not needed for this frontend. Configuration priority is server environment, `worldblocks/.env`, then the explicitly identified sibling `WorldBlocks_Test/.env`. Variables are `GEMINI_API_KEY` and optional `GEMINI_MODEL`. Only readiness reaches the browser. Existing credentials are read locally without being copied into source or output files.

The default style reference is copied from `WorldBlocks_Test/VERSION2.jpeg`. The original prompt builders were extracted from the Streamlit UI without importing or launching that UI. Image requests use Control Map + style reference for pass 1, then pass-1 image + reference for pass 2. The original human-only/animal-only failed habitats skip pass 2. Users can turn off two-pass refinement before generating. No live-input event calls the model automatically.

### HTTP and saved jobs

- `GET /api/config`: pipeline readiness and video-disabled status, without credentials.
- `POST /api/worlds`: validate and capture `{worldState, analysis, options: {twoPass: true}}`, start one background job, return its ID. One job runs at a time.
- `GET /api/worlds/<id>`: status/stage, public result metadata and artifact URLs.
- `POST /api/worlds/<id>/retry`: retry only the image step, reuse an existing first-pass image.
- `GET /api/worlds/<id>/<artifact>`: allowlisted mask, image, layout, region and prompt files only.
- `POST /api/worlds/<id>/video`: explicitly rejected; never calls Veo.

Stages are control, image, style, complete; terminal failures retain all completed artifacts. Jobs save layout, package, terrain grammar, prompts, mask, first-pass/final images and status under `worldblocks/outputs/<id>/`. Internal package and job files are not directly served. A server restart marks an interrupted job rather than claiming it finished. Outputs are excluded from version control.

### Video entry

The result page's Video options panel provides the generated image as the future start frame and the partner's terrain-aware, locked-camera animation prompt. The provider implementation is retained for later activation, but both the UI generation action and HTTP execution path are disabled. Opening the panel or downloading the prompt spends no video credits.

### Verified and remaining limits

An actual manual three-module arrangement completed the local Control Map and both Gemini image passes on 30 September. No video API was called. The real physical bridge still needs device-side validation on the hardware owner's running service; the normalized physical path is covered by simulator and automated tests. Generated images follow semantic/layout guidance probabilistically. History in the page lasts for the session; saved generation artifacts persist on disk. The Open saved world link (`?world=<id>`) restores the captured layout and result without new model calls. It re-renders the arrangement using the default camera; the original orbit view is not persisted.
