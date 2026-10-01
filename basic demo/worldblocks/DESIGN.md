# WorldBlocks design

A researcher demonstrates a tactile sculpture in a full-screen exhibition workspace. The user’s 30 September reference establishes a near-black, minimal, futuristic editorial direction, superseding the original light studio presentation.

Preserve original low-poly faceted shapes, proportions and arrangement capabilities. The existing OBJ is the primary visual asset; no raster substitute is needed. A larger orthographic model sits directly against the dark background, with a pale base, subtle sharp-edge lines, restrained semantic colours and soft cool illumination.

Use Helvetica Neue / system sans, bold uppercase editorial headings and small monospaced specimen labels. Remove structural panel frames. Use pill navigation and actions, circular movement controls, thin translucent outlines and limited glass effects. Keep large areas of dark negative space; avoid neon and heavy shadows.

Desktop retains left element controls, a dominant central stage and a contextual right inspector. All generated stages replace the same central view. Short desktop windows move generation to a bottom pill toolbar. Preserve single-screen operation and existing responsive layout rules below.

Idle-only slow orbit starts after ten seconds without selection or pointer interaction. Selecting, dragging, orbiting or entering the canvas stops it. Subtle pointer-responsive fill lighting and a brief fade/slide arrival follow reduced-motion preferences. Never animate module positions or change their physical coordinates.

## Current interaction update

Start with only the white fixed base, not the imported stacked arrangement. Add elements from the tray and drag them into place. Clear screen hides the interface to present a generated world; it never removes modules. Preserve the OBJ geometry as the source library. Height controls support single-step clicks and press-and-hold repetition, stopping on release or at a limit.

Base readability: white faces with fine grey sharp-edge lines. Level 1 uses original recessed seating height and new modules spawn at source seating locations. Both height and Position arrows repeat while held.


## Live input controls
Keep the manual/physical/demo choice above the existing workspace. Show transport interruption, hardware offline/recovery and column attention distinctly. The mock badge must remain visible. Connection URL and provisional code mapping belong in a collapsible panel. Live modules are read-only; the explicit Add to manual draft action preserves manual work and enables existing editing controls. Generation always requires a deliberate user action and captures a fixed arrangement.


## Control Map and styled image integration
The actual WorldBlocks_Test generation pipeline supersedes the earlier mock-only image stage. Generate captures either manual or physical input, computes a Control Map, then renders a VERSION2-style Gemini image with optional two-pass refinement. Present the arrangement, mask and final image in order; expose concise terrain reasoning and downloads. Preserve completed stages on errors. Video remains a visible, paused next step with a prepared animation prompt; never generate it automatically.


## Single-screen projection workspace
The exhibition/TV workspace now fills the viewport without document scrolling. A compact top bar holds input mode, settings and fullscreen. The left rail adds/selects modules; the right rail keeps editing and generation actions visible. One central stage switches between Model, Control Map, Image and Video. New control/image artifacts automatically advance the stage; polling cannot override a deliberate user tab selection until a new artifact arrives. Prior results remain accessible while editing and are labelled as previous generations when the layout changes. Settings replace the central stage in place; image style and physical connection use separate subpanels. Video remains paused. Desktop/TV layouts target 1280×720 and 1920×1080; very narrow phone layouts use compact panels.


## Windowed display adaptation
At desktop widths above 800px and available heights up to 760px, move generation into a full-width bottom toolbar. The right column then belongs to module editing, avoiding overlap when browser chrome or zoom reduces available space. At heights up to 620px use three compact element-type columns. Preserve readable controls instead of scaling the whole interface. At taller heights retain the right-hand generation area. Inspector children cannot flex-shrink over each other; bounded internal overflow protects unusually small or enlarged-text windows.

## Element colour refinement
Five element accents now use brighter, more saturated hues against the dark shell: Water #37BFF4, Fire #FF814B, Earth #F1C44D, Human #D989C3 and Animal #78CF87. The shared element configuration drives both 3D materials and UI swatches; do not desaturate the swatches. Neutral base and background stay unchanged.

## Dual generation entry and 3D result
Keep the original image pipeline behind Generate 2.5D. A neighbouring Generate 3D pill has equal prominence and distinct supporting copy. Desktop choices are adjacent; narrow choices stack. The 3D World tab is separate from Control Map/Image/Video. It shows only the generated island; the input comparison has been removed per the subsequent user request. Both Model and 3D World render on a full-viewport canvas behind floating controls, outside the central stage clipping box. The input tray yields space to the island when viewing the result; returning to Model restores it. Reset view resets the current renderer. 3D has no idle auto-rotation. Soft edge/bottom dark gradients keep controls readable over light geometry; UI buttons intercept input, while noninteractive text regions allow orbit/drag gestures to reach the canvas.

Generated terrain/environment follow the sunlit low-poly palette in WorldBlocks_Test outputs 22/26/27: cyan water with aqua shallows, pale golden sand, yellow-green grass and foliage, ochre highlands, warm terracotta rock and roofs, and cream walls. Palette values are centralized in generation/threeD/palette.js, separate from source module accents. Debug details are collapsed and limited to development hosts. Existing 2.5D error and retry UI remains separate from the local 3D error panel.

## Clear screen / immersive presentation
Clear screen is a presentation action, not a data reset. It shows the current generated image, Control Map or 3D world with all editor UI and edge scrims hidden. From Model, it opens an available generated result. 3D orbit and zoom remain usable with the same camera. Images expand to the viewport with contain sizing to preserve the whole composition. A quiet Show controls button and Escape restore the interface. Disable entry until a generated artifact is available and during generation/example playback. Support manual and physical results equally. No WorldState, generated file, history or camera is reset.

## Home page
The root URL opens a full-viewport home with only WORLDBLOCKS, “Shape a world with the blocks you place.” and an Enter WorldBlocks pill. Backgrounds are unmodified existing WorldBlocks_Test outputs 22, 26 and 27, copied into dist/assets/home. Homepage images align right and fill the viewport height, occupying exactly 60% of the viewport width. Cover sizing fills this region without distortion. Only the left edge fades into the near-black page; the top, bottom and right edges remain flush with the viewport. The smaller title, introduction and entry pill align left with a responsive 7vw inset. Images crossfade over 1.6 seconds on a 5-second interval, pause when hidden, and remain static for reduced motion. Workspace code loads only on entry. Home / Studio hash navigation preserves the in-memory workspace and browser back/forward behavior. Existing ?world links still open their saved result directly. The workspace wordmark returns home without resetting the draft. Page entry does not programmatically focus the wordmark; keyboard focus indicators remain available through Tab navigation.

### Optional example onboarding
First-time empty manual workspaces show an inline invitation in the inspector, never an automatic modal. The left-side Examples pill opens a compact chooser for Coast, Settlement and Habitat. Playback assembles the real editable model with short captions and Skip / Return controls, then generates local 3D only. Results offer Modify this world; the original draft remains recoverable across example changes. The preview uses actual OBJ seat coordinates and existing element colors. Reduced-motion users receive the completed arrangement immediately. Physical inputs remain separate; return from the example before switching input source.
