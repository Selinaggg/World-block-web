# Validation, 28 September 2026

## Automated checks

Six Node tests pass against the actual OBJ and pure data pipeline:

1. 217 modules and 4 fixed base pieces; original normalized centres and triangle counts preserved.
2. Deterministic semantic assignments and explicit merged-model failure.
3. Position bounds, preserved Y during movement, height steps, type changes, adding, removal, immutable snapshots and exact reset.
4. 3D vs horizontal distances, normalized coordinates, highest blocks and empty-world handling.
5. Data-only mock generation, independent snapshots and before/after comparisons.
6. Validation rejects duplicate IDs and invalid input modes without damaging state.

Original and copied OBJ SHA-256:
`2a46f55920509cd1de51849f43f7506d7e8ffe10b5cfacc5972e652d6727bc0b`

## Browser checks

- Desktop viewport 1440 × 1000: original stacked faceted model and controls render.
- Mobile viewport 390 × 844: document width equals viewport width; canvas is 480px high and the full model fits.
- Added Water; changed to Animal; raised from level 1 to 2; moved right; removed. State read-back confirmed each operation.
- Dragged visible Module 079: only that module changed X/Z, with Y exactly preserved at 9.224195626311554.
- Orbit gesture worked. Reset restored a state byte-for-byte equivalent to the initial state. Reset view clears orbit damping before restoring the camera.
- First generation displayed intermediate objective reading and a labelled mock result with arrangement snapshot and “Why this world?”.
- Change Your World unlocked editing. Added and raised Earth; generated a second world. History showed 217 vs 218 elements and “1 added,” with prior/current labels.
- Browser error and warning log was empty.
- Both WebMCP tools registered. Valid add returned a new ID and 218 modules; read-back matched visible state. Invalid element type was rejected.

No external AI endpoint or physical hardware was tested: neither is connected in this prototype.

## Empty-base and hold-control update

The initial stacked presentation above is superseded by an empty white base. Eleven tests now pass, including empty-state add/reset and press-and-hold timing, upper/lower limits, pointer release/cancel/leave, selection changes, window blur and keyboard release. Browser checks confirmed the white base with zero modules, disabled generation while empty, adding a module, one step per click or Enter press, dragging with height preserved, lower-limit disabling and reset to empty. Browser error logs remain empty.

## Recess seating, Position hold and base outlines

18 automated tests pass. A vertical ray against the actual base verifies that a new level-1 module bottom is within 1% of module height above the recess floor and below the ridge top. Position hold/release is tested in all four directions, and repeated movement stops at the bounded base edge without changing height. Edge geometry excludes coplanar triangle diagonals. Browser checks confirm source-seat coordinates, one-step pointer/keyboard movement, raise/lower returning to level 1, and visible base outlines at two camera angles, with no browser errors.


## Partner integration — 30 September 2026

26 Node tests and 2 Python gateway tests pass. New coverage includes full-snapshot replacement, C5 and unknown layers, half offsets, column/boot identity, mode switching and draft retention, editable imports, network/device/fault gating, mapping confirmation, captured generation snapshots, rejection of stale callbacks and image API failures. The gateway uses a local fake upstream: no paid image provider was called. The partner package's own 6 JavaScript and 2 Python tests also pass. Vendored client SHA-256 matches the source exactly: `9abe7314c5ed8e70a74ec97fdc3cb5c4c76b4b70f39e4f3ef0a4aa1f1a8726f8`.

Browser checks confirm the 8790 simulator updates the scene, live mode disables manual edits, switching back restores the manual draft, and Add to manual draft appends physical modules without discarding existing modules. An imported water module was changed to Animal, raised and moved; the reading flow used the edited three-module snapshot. Desktop input-panel layout was visually checked. At a 390 × 844 mobile viewport, the connection controls fit with no horizontal overflow. The mock result and return-to-edit flow completed, and final browser error/warning logs were empty. The page was returned to its default empty Manual view.

The real service on 127.0.0.1:8787 was unavailable. Actual hardware and AI-generated image output remain unverified. The partner README excludes the legacy frontend and generation implementation; the gateway is ready for that missing service but does not implement a provider.


## WorldBlocks_Test Control Map / image integration — 30 September 2026

28 Node tests and 8 Python tests pass. Added coverage: continuous positions and half-height preservation, physical column stack grouping, support exclusion without compressing elevation, unknown/offline rejection, original failed-habitat rules, local masks without credentials, two-pass failure recovery reusing pass 1, sanitized error responses, immutable requests, staged browser client polling, private-artifact restrictions and server-side video blocking. Loopback HTTP tests require permission to bind local sockets; they pass with that permission.

Actual browser generation was completed with three newly placed manual elements (earth, water and human). Run `6d6a038a50844c5ead80f534266d56d0` produced a 768 × 768 local Control Map, a first-pass Gemini image and a final 1024 × 1024 VERSION2-style image. Both image passes used the existing local Gemini configuration. No video provider call was made. Original WorldBlocks_Test output files were not reused as generated results.

Desktop and 390 × 844 mobile layouts were inspected. All three displayed images loaded, and mobile document width matched its available viewport width. Video options expands, its prompt link is available, and Generate video remains disabled. Reopening the saved-world URL loads the saved layout and images without starting another generation. Change Your World restores editing; an earth module was raised and moved successfully. Final browser warning/error logs were empty.

Real hardware is still not connected in this environment. Hardware coordinate/type validation is automated; the supplied mock bridge was tested in the preceding integration. Provider image fidelity is probabilistic, and Control Map positions are a continuous composition mapping into the partner's terrain domain rather than exact CAD-to-physical calibration.


## Single-screen projection update — 30 September 2026

31 Node tests pass, including three new stage-state tests: automatic model→mask→image advancement, manual view selection surviving unchanged polling, and new-job/dirty-result isolation. Existing hold-control, state, hardware adapter and pipeline tests remain green.

Browser checks used the previously generated world; no new paid image/video generation was requested for this layout change. At 1920×1080, the full image and both side rails fit the screen. At 1280×720, the document dimensions are exactly 1280×720; selected-module type, height, position, removal and generation controls all remain inside the viewport (the reset action ends below 669px). Physical connection settings also fit their 552px-high central panel without scrolling. Model, Control Map and Video switching works; the video-generation action is disabled. Raising/moving the model marks the retained Control Map as a previous generation. Settings use the central stage rather than adding document height. The saved-world route and return-to-edit behavior continue to work.


## Windowed sidebar correction — 30 September 2026
Reproduced the reported overlap at 1140×580: the editor had 222px available for 359px of content and its Remove button extended below the generation panel's top. Reflowing generation into a bottom toolbar at shorter desktop heights resolves this without shrinking the whole page. Browser measurements at 900×500, 1024×600, 1140×580, 1366×650, 1440×800 and 1920×1080 confirm no editor scrolling or overlap, all generation controls in view, and document dimensions equal the viewport. Only layout/style files changed; no image/video generation was invoked.

## Dark exhibition restyle — 30 September 2026

Replaced the light frame-based presentation with a near-black editorial shell, translucent pill controls, circular adjustment buttons, uppercase headings and small specimen labels. The original OBJ geometry is unchanged; camera framing is larger, lighting is cooler, and base edges are subtler. Idle orbit pauses during selection/interaction and respects reduced motion. Pointer motion only adjusts fill lighting, never module coordinates.

31 Node tests pass. Browser checks confirmed raise/lower round-trip, saved Control Map and image switching, disabled video generation and readable settings. At 900×500, 1140×580, 1280×720, 1440×900 and 1920×1080, document bounds match the viewport and the selected inspector fits without scrolling. The 900×500 left rail was tightened after an initial overflow finding and rechecked at 380px content/380px available. Browser warning/error logs were empty. Temporary viewport overrides were reset. No paid image/video request was made; existing saved artifacts were used for visual checks.

## Separate 2.5D / procedural 3D modes — 30 September 2026

38 Node tests and 8 Python tests pass. The Python gateway tests initially hit the sandbox's loopback bind restriction; rerunning with loopback access passed all eight using local fake services, with no paid provider call. The existing 2.5D generator/API/prompt pipeline files were not modified.

New automated coverage checks canonical seeded output (including reordered/renamed equivalent blocks), immutable capture, position-linked elevation, merging Earth, higher stacks, Water carving, sharper Fire, Human/Animal elevation exclusion, dry/slope-aware tree and rock placement, actual triangle geometry and InstancedMesh content, 128×128 output, physical validity, independent results, and no fetch calls from 3D.

Browser: generated an island from the saved three-block arrangement (26 trees and 9 rocks in the original level-1 run); orbit, zoom and reset work. Raised Earth twice and moved it left, then regenerated a visibly larger/higher landmass. Returning to editing and moving a block leaves the prior island intact with a Previous generation label. The saved 2.5D image is still available through Image. Source snapshot and island render side by side at desktop size and stacked on narrow screens. At 900×500, 1280×720 and 1440×900 both generation buttons are in view and inspector/left-rail content fits without internal scrolling. At 390×844 an initial generation overflow was fixed by removing redundant counts in that breakpoint; both buttons and the result's Change Your World fit, with page bounds 390×844. Temporary viewport overrides were removed. Final browser warning/error logs are empty. Test arrangement edits were restored to the saved layout; the tab is left showing its new 3D output.

Actual physical hardware was not connected. The shared physical-input contract is covered by existing adapter and new generator validation tests. 3D rules are provisional and configurable; settlements and animal meshes are future layers. 3D results currently remain in memory for the session, while the original image-history persistence remains unchanged.

## Homes, animals and unframed canvases — 30 September 2026

40 Node tests pass, including new checks for deterministic nearby human/animal content, actual instanced semantic meshes, absence when those module types are absent, and water-only raised homes/water birds. An Earth/Human/Animal fixture produces three houses, two paths and five sheep/deer. A browser fixture with Earth/Water/Human/Animal produces three homes and five water birds near the corresponding influence zones. These remain configurable presentation rules.

Browser checks confirm the Model canvas fills 1440×900 rather than its former central column; a water drag changed normalized X/Z from .56/.56 to .70/.58 and the reverse gesture restored the original displayed position. Generate 3D remains the hit target above the canvas. Clicking a bird reports “Animals · water birds”; orbit and camera reset work. Image switching hides both full-viewport 3D hosts and retains the original saved image URL. No YOUR BLOCKS preview or source renderer remains. At 900×500 and 390×844, canvas/document dimensions match the viewport and both generation buttons remain visible and receive clicks. Updated gradients protect UI contrast without reinstating frame clipping. No image API or video generation was invoked.

## Reference-based 3D palette — 30 September 2026
Updated terrain, water, foliage, rocks, homes and animal materials to the supplied generated_world.png references (outputs 22/26/27). Water remains at the same sea level; vertex colours use existing height samples to show aqua shallows against cyan/deeper blue water. All nine island tests pass. Browser preview confirms brighter grass, trees, sand, water and roofs with homes/animals retained; warning/error log is empty. No terrain influences, placement rules, source-module palette or image-generation pipeline changed.

## Clear screen / undo — 30 September 2026
Browser checked Clear screen from the saved image result and from a newly generated 3D result: both return to Model with zero blocks and an empty base. Undo clear restores the three captured blocks. Previous 3D output remains accessible after clearing. At 390×844 the clear button ends at y=792.5 and is the pointer hit target; page bounds remain 390×844. No paid generation was run. New-user examples were evaluated as a product proposal only, not implemented in this change.

## Optional example walkthroughs (2026-10-01)
- Added Coast, Settlement and Habitat with real OBJ seating, stacked Earth and local-only 3D generation. No automatic image/video request.
- Added controller tests for skip, stale callbacks, mid-playback cancellation, original-draft preservation across multiple examples, reduced motion, and complete playback. Preset tests load the real OBJ and verify settlement/animal content without fetch.
- Browser checked 1280×800, 900×500 and 390×844: chooser, full playback, skip, switching examples, returning to the original saved three-module draft, and Modify this world. Short desktop panel and page both fit without scrolling.
- First visit checked on localhost with fresh origin storage: inline invitation, optional chooser, mobile local 3D result. Existing saved 2.5D image remains available; no paid generation invoked.
- Draft recovery is in-memory for the current page session, matching the existing editor. The first-run dismissal is stored locally when storage is available.

## Home and immersive presentation correction (2026-10-01)
Supersedes the earlier Clear screen / Undo clear behavior: Clear screen now only hides the UI and presents an available result. The module-clearing event handler and undo UI were removed.
- Browser checked saved image immersion and Escape exit; only the image and Show controls remain accessible.
- Generated a local 3D result, entered immersion, dragged to orbit and scrolled to zoom, then restored controls. Original three-module layout remained intact; camera changes persisted on exit.
- Root URL opens the minimal image-backed home. Desktop 1280×800 and phone 390×844 verified. Existing saved-world deep links open directly in the workspace.
- Background carousel loaded all three original generated images and visibly advanced from island to coast. Reduced-motion preference disables its interval and fade; hidden-page playback stops.
- Home ↔ Studio uses hash navigation and retains the existing in-memory arrangement and result. Workspace module loads only on entry. No paid image/video requests were made.
- All 44 existing Node tests pass; app.js and entry.js syntax checks pass. Backend and physical connection protocol are unchanged.
