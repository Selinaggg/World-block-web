# Hardware-first review (2026-10-04)

The new hardware.html entry defaults to live physical input. An optional side panel holds a separate simulated test board, matching demos 00, 04 and 05. Local 3D regenerates on input changes; paid image/video generation never starts from snapshots. The original free-placement editor remains accessible. Preserve each demo’s existing visual style and procedural generator. This is a review worktree, pending approval before replacing the main project.

# Product

## Register
product

## Users
WorldBlocks is a desktop-first UCL research and design prototype, also usable on tablets and phones. It simulates the tangible installation described in docs/PROJECT-BRIEF.md. The initial audience assumption is research demonstrations; this can be revised after user feedback.

## Product Purpose
Arrange physical-like modules, read objective spatial facts, generate a clearly identified mock world, understand its relationship to the arrangement, and change the arrangement again. Geometry comes from the supplied OBJ: 217 modules and four fixed base sections.

## Brand Personality
Calm, tactile, experimental. A working exhibition surface with the model as its focus.

## Anti-references
No gaming appearance, glossy plastic, neon colours, generic dashboard widgets or excessive cards. The user’s 30 September dark exhibition direction supersedes the original brief’s light surface and glassmorphism restriction: restrained translucent pill controls and slow idle motion are now intentional.

## Design Principles
Preserve the imported sculpture. Keep controls secondary. Separate spatial input from interpretation. Make each world explainable through observable facts. Preserve the edit/read/generate/change loop.

## Accessibility & Inclusion
Visible labels accompany semantic colours. Keyboard-operable module selection and movement controls complement dragging. Responsive layout, visible focus, reduced motion and readable contrast support demonstrations on different devices.

## Current interaction update

Start with only the white fixed base, not the imported stacked arrangement. Add elements from the tray and drag them into place. Clear screen hides the interface to present a generated world; it never removes modules. Preserve the OBJ geometry as the source library. Height controls support single-step clicks and press-and-hold repetition, stopping on release or at a limit.


## Partner input integration
Manual remains the default empty-base editor. Physical model and explicitly labelled Connection demo provide separate live inputs. Switching preserves the session manual draft; a reliable snapshot can be appended to it for editing. Real hardware requires confirmed C0–C5 semantics. Image generation remains a labelled spatial preview until a compatible server-side image service is configured. The supplied partner package contains input plumbing, not the missing generation implementation.


## Control Map and styled image integration
The actual WorldBlocks_Test generation pipeline supersedes the earlier mock-only image stage. Generate captures either manual or physical input, computes a Control Map, then renders a VERSION2-style Gemini image with optional two-pass refinement. Present the arrangement, mask and final image in order; expose concise terrain reasoning and downloads. Preserve completed stages on errors. Video remains a visible, paused next step with a prepared animation prompt; never generate it automatically.


## Single-screen projection workspace
The exhibition/TV workspace now fills the viewport without document scrolling. A compact top bar holds input mode, settings and fullscreen. The left rail adds/selects modules; the right rail keeps editing and generation actions visible. One central stage switches between Model, Control Map, Image and Video. New control/image artifacts automatically advance the stage; polling cannot override a deliberate user tab selection until a new artifact arrives. Prior results remain accessible while editing and are labelled as previous generations when the layout changes. Settings replace the central stage in place; image style and physical connection use separate subpanels. Video remains paused. Desktop/TV layouts target 1280×720 and 1920×1080; very narrow phone layouts use compact panels.

## Dual output modes
The generation choice now explicitly offers Generate 2.5D and Generate 3D. Both capture the existing WorldState, including physical inputs, and reuse spatialAnalysis. 2.5D retains its existing server pipeline. 3D runs locally with no AI or network dependency, producing a deterministic faceted height field, water, instanced trees, rocks, homes and animals. The generated island now occupies its own full-viewport canvas behind floating controls; the former source comparison is removed. Change Your World returns to editing; results remain available until replaced in their own mode. 3D results are session-local, not saved to the existing server image-history URLs. Human creates local houses and terrain-following paths (no people); Animal creates sheep/deer on suitable land or water birds near water. Both layers retain configurable local placement rules, with raised waterfront homes as a water-only fallback.
