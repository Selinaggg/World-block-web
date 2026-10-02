I am building an interactive web prototype for my project **WorldBlocks**.

Please read the entire instruction before making changes.

The goal is to create a working end-to-end website prototype now, while keeping the architecture ready for integration with our physical hardware later.

---

# 0. Project concept

WorldBlocks is a tangible AI world-building system.

In the final physical installation, users arrange and stack physical modules on a sandbox/table. The system reads:

- element type;
- quantity;
- position;
- distance;
- neighbourhood relationships;
- height / stacking;
- spatial composition.

These spatial relationships are then interpreted and used to generate a possible world.

The core interaction loop is:

```text
Physical arrangement
        ↓
System reads spatial relationships
        ↓
World interpretation
        ↓
Generated world
        ↓
User sees the feedback
        ↓
User changes the arrangement
        ↓
World changes again
```

The website should simulate this entire interaction before the hardware is connected.

---

# 1. Important information about my 3D model

I currently have **one OBJ model**.

The model looks like this conceptually:

```text
many small low-poly modules
        ●
    ● ● ●
  ● ● ● ● ●
● ● ● ● ● ●

────────────────
sandbox / base
```

It contains:

1. one larger sandbox / base;
2. many small low-poly faceted modules;
3. the modules are stacked at different heights;
4. the small modules use the same or very similar geometry;
5. the OBJ currently has no meaningful colours or textures;
6. Water / Fire / Earth / Human / Animal are semantic categories, not necessarily different 3D shapes.

The visual character of the supplied model is important.

The modules have a **low-poly / faceted geometric appearance**.

Do not smooth the geometry.

Preserve the faceted visual style using appropriate material settings such as:

```js
flatShading: true
```

Do not redesign the geometry.

---

# 2. First inspect the existing project

Before implementing anything:

1. inspect the existing repository structure;
2. check what frontend framework is already being used;
3. check whether Three.js, React Three Fiber, Drei, or another 3D framework already exists;
4. reuse the existing architecture when reasonable;
5. do not rewrite unrelated files.

If the project already uses React:

Prefer:

- Three.js
- `@react-three/fiber`
- `@react-three/drei`

If it is not a React project, standard Three.js is acceptable.

Do not unnecessarily migrate the project to a different framework.

---

# 3. Load the OBJ

Use the OBJ model I provide.

Keep its path configurable.

For example:

```text
/public/models/worldblocks.obj
```

Do not assume this exact filename if a different OBJ already exists in the repository. Locate the supplied asset first.

Load the model and inspect its object hierarchy.

During development, log:

- Object3D names;
- Group names;
- Mesh names;
- child hierarchy;
- bounding boxes;
- approximate sizes.

I need to understand how the exported OBJ is structured.

---

# 4. Detect the sandbox and individual modules

The sandbox/base is a fixed environment object.

It must:

- remain stationary;
- never become draggable;
- never be treated as an element;
- act as the world-building surface;
- define the approximate movement boundary.

The smaller low-poly objects are the interactive modules.

If the OBJ already contains separate objects/groups/meshes:

Use those objects directly.

If object names are useful, preserve them.

Example:

```text
Base
Object_001
Object_002
Object_003
...
```

Create a clean internal representation for each module.

---

# 5. Important fallback if the OBJ is merged

First check whether the small modules are actually separate objects.

If the OBJ is one completely merged mesh, do not silently pretend that the modules are independently editable.

If technically safe, you may detect disconnected geometry islands / connected components and convert those islands into independent module objects.

However:

- do not destroy the original geometry;
- do not permanently edit the OBJ;
- keep this logic isolated;
- print a clear development warning that the OBJ was imported as merged geometry;
- if reliable separation is impossible, clearly tell me that the OBJ should be re-exported with separate objects.

The preferred source structure is:

```text
Sandbox
Module_001
Module_002
Module_003
...
```

---

# 6. Automatically identify the base

Because the sandbox is significantly larger and flatter than the small modules, use geometry size / bounding box information as one possible fallback for detecting the base.

For example:

- the largest horizontal object is likely the sandbox;
- small roughly similar objects are likely modules.

Keep this detection logic configurable.

Do not scatter geometry assumptions throughout the code.

Create one module/object classification utility.

---

# 7. Module semantic types

The physical modules represent five possible semantic categories:

```text
Water
Fire
Earth
Human
Animal
```

The original OBJ contains no semantic information.

Therefore geometry and semantic meaning must be separated.

Every module should have data similar to:

```js
{
  id: "module_001",

  sourceObjectName: "Object_001",

  type: "water",

  position: {
    x: 0,
    y: 0,
    z: 0
  },

  rotation: {
    x: 0,
    y: 0,
    z: 0
  },

  heightLevel: 1
}
```

The important principle is:

```text
3D Geometry
      ↓
Module Instance
      ↓
Semantic Type
      ↓
Visual Material
      ↓
WorldState
```

Do NOT encode semantic meaning inside geometry.

---

# 8. Temporary automatic type assignment

Because the OBJ currently contains no Water / Fire / Earth / Human / Animal metadata, create a temporary development strategy.

Priority:

### Strategy A — use names

If object names already contain words such as:

```text
water
fire
earth
human
animal
```

use them.

### Strategy B — configuration mapping

Support a configuration file:

```js
const MODULE_TYPE_MAP = {
  Object_001: "water",
  Object_002: "water",
  Object_003: "earth",
  Object_004: "human"
};
```

### Strategy C — automatic temporary assignment

If no mapping exists yet, automatically assign types deterministically.

For example, cycle through:

```text
Water
Fire
Earth
Human
Animal
```

based on a stable sorted module index.

Do NOT use random assignment on every page refresh.

The same OBJ should receive the same temporary category mapping every time.

This assignment is only for the web prototype.

It will later be replaced by physical hardware data.

---

# 9. Allow manual type reassignment

Because automatic assignment is temporary, clicking a module should allow me to change its type.

When a module is selected, display a small inspector:

```text
MODULE 018

Type

[ Water ]
[ Fire ]
[ Earth ]
[ Human ]
[ Animal ]

Height
−   2   +

Delete
```

Changing the type should immediately:

1. update `WorldState`;
2. update the module colour;
3. update the system-reading results.

Keep this interaction simple and visually minimal.

---

# 10. Colour system

The original physical model has no colour coding.

For the website, use colour as a temporary semantic visualisation system.

Use a restrained, sophisticated, slightly desaturated palette.

Use approximately:

```js
const ELEMENT_STYLES = {
  water: {
    color: "#9FB8C1"
  },

  fire: {
    color: "#D8876A"
  },

  earth: {
    color: "#A88F6B"
  },

  human: {
    color: "#B6A3AD"
  },

  animal: {
    color: "#8DAA8B"
  }
};

const BASE_STYLE = {
  color: "#AAA1A1"
};
```

These exact values may be adjusted slightly for accessibility and visual harmony.

The desired aesthetic is:

- muted;
- calm;
- tactile;
- architectural;
- low-poly;
- not game-like;
- not neon;
- not overly saturated.

Use something similar to:

```js
new THREE.MeshStandardMaterial({
  color,
  roughness: 0.8,
  metalness: 0,
  flatShading: true
});
```

The faceted surfaces should remain visible.

---

# 11. Lighting

Use soft neutral studio-style lighting.

Suggested approach:

- ambient / hemisphere light;
- one soft directional light;
- subtle contact / environment shadows if performance allows.

Avoid:

- dramatic cinematic lighting;
- coloured lights;
- strong glossy reflections;
- black backgrounds.

The model should feel similar to a clean design prototype / museum installation.

---

# 12. Background

Use a very light warm grey / off-white environment.

Example direction:

```text
#F3F2F1
```

The base and modules should remain clearly readable against it.

---

# 13. Camera

Start with a three-quarter perspective similar to the supplied reference model.

The user should be able to:

- orbit;
- zoom;
- pan only if necessary.

Use OrbitControls or equivalent.

Set sensible limits:

- prevent the camera from going underneath the sandbox;
- prevent extreme zoom;
- keep the object easy to inspect.

Camera controls must not fight with block dragging.

While dragging a module:

Temporarily disable orbiting.

---

# 14. Initial state

On first load:

Show the arrangement imported from the OBJ.

Do not automatically flatten the structure.

The original stacked composition should be visible.

This allows the OBJ itself to act as a sample world.

Users can then modify it.

---

# 15. Selection

Users must be able to click an individual small module.

Selected state must be clearly visible.

Do not replace the semantic colour with a selection colour.

Instead use one of:

- subtle outline;
- small emissive increase;
- thin selection ring;
- bounding highlight.

Selection must preserve the Water / Fire / Earth / Human / Animal colour.

Clicking empty space deselects.

The sandbox itself is not selectable.

---

# 16. Dragging

Users should be able to drag modules.

Primary interaction:

```text
click module
↓
drag
↓
change X/Z position
```

The module should remain within the sandbox boundary.

Use raycasting / pointer-to-plane intersection.

Do not directly map raw mouse pixels to world coordinates.

During normal dragging:

- X changes;
- Z changes;
- Y remains at the current height level.

---

# 17. Height / stacking

Height is important to this project.

For the first stable version, do not build a complex physics engine.

Use discrete height levels.

For example:

```text
Height Level 1
Height Level 2
Height Level 3
...
```

The selected module inspector should include:

```text
Height

−    2    +
```

Changing height should update Y position using a configurable module step.

For example:

```js
y = baseSurfaceY + heightLevel * STACK_STEP;
```

Calculate `STACK_STEP` from the average module size when possible.

Do not hard-code arbitrary scene units everywhere.

Keep it configurable.

---

# 18. Optional snapping

If straightforward and stable:

When a module is moved close to another module, allow subtle snapping.

Possible behaviours:

- snap near another block;
- snap above another block when height is increased;
- show a subtle temporary relationship line.

Do NOT introduce unstable complex rigid-body physics just to achieve this.

A stable prototype is more important than physically perfect stacking.

---

# 19. Add new modules

Users should be able to add modules even if the OBJ initially contains a fixed number.

Create an element tray:

```text
ELEMENTS

● Water
● Fire
● Earth
● Human
● Animal
```

Clicking an element adds a new module to the sandbox.

Reuse a suitable existing module geometry from the OBJ.

Do not create a completely different new shape.

Clone the reusable module geometry.

Each added object receives:

```text
new unique ID
semantic type
default heightLevel = 1
default position near centre
```

Multiple modules of each type are allowed.

---

# 20. Delete

The selected module can be removed using:

- visible Delete control;
- Delete / Backspace keyboard key when appropriate.

Never allow the sandbox/base to be deleted.

---

# 21. Reset

Provide:

```text
Reset
```

Reset restores the original imported OBJ arrangement and its initial semantic type assignments.

Do not simply delete everything unless the initial OBJ was empty.

---

# 22. WorldState — critical architecture requirement

This is the most important technical requirement.

Do NOT tightly couple generation logic to Three.js mouse interaction.

The web interaction is only one **input adapter**.

Maintain a central state structure:

```js
const worldState = {
  version: 1,

  inputMode: "web",

  blocks: [
    {
      id: "module_001",
      sourceObjectName: "Object_001",
      type: "water",

      position: {
        x: 1.2,
        y: 0.8,
        z: -0.4
      },

      rotation: {
        x: 0,
        y: 0,
        z: 0
      },

      heightLevel: 2
    }
  ]
};
```

All downstream logic must consume `WorldState`.

The architecture should conceptually be:

```text
CURRENT

WebInputAdapter
      ↓
WorldState
      ↓
Spatial Analysis
      ↓
World Logic
      ↓
World Generator
      ↓
Generated Result
```

Future:

```text
PhysicalInputAdapter
      ↓
WorldState
      ↓
Spatial Analysis
      ↓
World Logic
      ↓
World Generator
      ↓
Generated Result
```

The physical input must eventually replace the web input without rewriting the rest of the website.

---

# 23. Input adapter structure

Create an explicit adapter boundary.

For example:

```text
/input
  WebInputAdapter
  PhysicalInputAdapter.placeholder
```

Do not implement real hardware integration yet.

The placeholder should only document the expected interface.

For example:

```js
interface WorldInputAdapter {
  getWorldState(): WorldState;
  subscribe(callback): () => void;
}
```

Adapt this to the actual project language/framework.

---

# 24. Debug mode

Create a small development-only debug panel.

It should be collapsible.

Show:

```text
Input: Web Simulator

43 modules

Water: 9
Fire: 8
Earth: 9
Human: 8
Animal: 9
```

When a module is selected:

```text
Module_018

Source:
Object_018

Type:
Water

x: 1.42
y: 0.85
z: -0.63

Height:
2
```

Also include an optional raw JSON view of `WorldState`.

This debug UI must be easy to hide for final presentation.

---

# 25. Spatial analysis layer

Create a separate utility layer.

Do not place relationship calculations directly inside rendering components.

We will later replace / expand these rules.

Prepare utilities such as:

```js
getDistance(blockA, blockB)

getHorizontalDistance(blockA, blockB)

getNearbyBlocks(block, threshold)

getNearestBlock(block)

getBlocksByType(type)

getTypeCounts(worldState)

getDominantTypes(worldState)

getHeightRange(worldState)

getHighestBlocks(worldState)

getSpatialRelationships(worldState)
```

Distances should preferably use X/Z horizontal distance separately from Y/height.

---

# 26. Configurable relationship thresholds

Keep spatial thresholds in configuration.

For example:

```js
const SPATIAL_THRESHOLDS = {
  near: 1.5,
  medium: 3,
  far: 6
};
```

Do not treat these exact values as final.

Calculate or normalise them relative to:

- average module diameter;
- sandbox dimensions;

when appropriate.

---

# 27. Normalised coordinates

Because future physical hardware may use a completely different coordinate scale, introduce the concept of normalised sandbox coordinates.

Example:

```text
left edge   = x 0
right edge  = x 1

front edge  = z 0
back edge   = z 1
```

Keep world-space Three.js coordinates internally when needed, but expose normalised values for generation logic.

This will make hardware integration much easier later.

---

# 28. Main website flow

The prototype should support this complete loop:

```text
BUILD
↓
READ
↓
GENERATE
↓
EXPLAIN
↓
CHANGE
↓
REGENERATE
```

Do not split this into many unrelated pages.

Prefer one coherent experience.

---

# 29. Section 1 — Build your world

The 3D sandbox is the main focus.

Suggested desktop layout:

```text
WorldBlocks

Build a world without words.


ELEMENTS                YOUR WORLD

● Water                 ┌────────────────────────┐
● Fire                  │                        │
● Earth                 │       3D WORLD         │
● Human                 │                        │
● Animal                └────────────────────────┘


                        [ Generate World ]
```

Keep the controls visually secondary to the 3D model.

---

# 30. Primary copy

Use:

```text
WorldBlocks

Build a world without words.
```

Supporting copy may be:

```text
Arrange, combine and stack elements to create a possible world.
```

Keep text minimal.

---

# 31. Generate World action

Main CTA:

```text
Generate World
```

Do not enable it if there are no valid modules.

On click:

1. capture a snapshot of the current `WorldState`;
2. calculate spatial relationships;
3. transition into a short System Reading state;
4. generate the prototype result.

---

# 32. System Reading

Do not immediately jump from arrangement to a generated result.

Show a short intermediate interpretation state.

Example:

```text
READING YOUR WORLD

43 modules detected

Water × 9
Fire × 8
Earth × 9
Human × 8
Animal × 9
```

Then show a few meaningful relationships.

For example:

```text
Water ↔ Earth
Near

Animal ↔ Water
Near

Human ↔ Fire
Far

Earth
Highest concentration
```

Only show the most useful 3–5 observations.

Do not create a giant table.

---

# 33. Visual relationship feedback

Where practical, briefly highlight the related modules in the 3D scene while showing a relationship.

For example:

```text
Water  ─────  Animal
       NEAR
```

Use subtle lines or highlights.

Keep them temporary and visually restrained.

---

# 34. World generation architecture

Create a generator interface separate from the UI.

For example:

```js
WorldGenerator.generate(worldState, analysis)
```

The website currently does NOT necessarily have a real AI API configured.

Therefore create:

```text
MockWorldGenerator
```

and reserve:

```text
ApiWorldGenerator
```

for later.

Never hard-code generation directly into the React/Three.js view.

---

# 35. Mock generation mode

The prototype must run end-to-end without requiring an API key.

If no real generation endpoint is configured:

Use a clearly internal mock generator.

It may return:

```js
{
  title: "Prototype World 01",

  summary:
    "A possible world derived from the current spatial arrangement.",

  observations: [
    "...",
    "..."
  ]
}
```

Do NOT pretend that a placeholder is a real AI generated result.

The UI may visibly mark development mode when necessary.

---

# 36. Future real AI generation

Prepare one place for future API integration.

For example:

```text
/services/worldGenerator
```

The final request should eventually receive something like:

```json
{
  "worldState": {},
  "analysis": {}
}
```

and return:

```json
{
  "title": "",
  "description": "",
  "imageUrl": "",
  "reasoningSummary": []
}
```

Do not put API secrets into frontend code.

Use environment variables / backend endpoint when real generation is connected later.

---

# 37. Generated World section

After generation, show:

```text
YOUR ARRANGEMENT            GENERATED WORLD

[ 3D snapshot ]      →      [ generated visual ]
```

If no AI image endpoint exists yet, provide a tasteful placeholder result area rather than a broken image.

Keep the component prepared for a future `imageUrl`.

---

# 38. Why this world?

Below the generated result, provide:

```text
Why this world?
```

This must NOT expose hidden AI reasoning.

Instead show clear, user-facing system interpretation based on calculated state.

Example structure:

```text
YOUR INPUT

Water × 9
Earth × 9
Animal × 9

        ↓

KEY RELATIONSHIPS

Water ↔ Animal
Near

Earth
High vertical concentration

Human ↔ Fire
Far

        ↓

WORLD CHARACTERISTICS

High ecological density
Strong vertical terrain
Separated human/fire regions
```

These statements must be derived from explicit configured rules or observable spatial data.

Do not invent complex final project meaning if rules have not yet been supplied.

---

# 39. Change your world

The main follow-up action should NOT be:

```text
Regenerate
```

as a primary button.

The important interaction is:

```text
Change Your World
```

Supporting copy:

```text
Move, add or stack an element and see how the world responds.
```

Clicking this returns focus to the interactive sandbox without discarding the current result.

---

# 40. Regeneration behaviour

When the user changes one or more blocks and generates again:

Create a new state snapshot.

Conceptually:

```text
World 01
      ↓
user changes arrangement
      ↓
World 02
```

This interaction is central to the project.

---

# 41. Before / after comparison

If possible, keep the previous generated state.

Show a minimal comparison:

```text
PREVIOUS WORLD              CURRENT WORLD

Arrangement 01              Arrangement 02

Result 01                   Result 02
```

Do not turn this into a large analytics dashboard.

Its purpose is simply to make the feedback loop visible.

---

# 42. World history data

Prepare a lightweight history structure:

```js
worldHistory = [
  {
    id,
    createdAt,
    worldStateSnapshot,
    analysis,
    generatedResult
  }
];
```

A full gallery is not necessary yet.

Keeping the last 2–5 states is sufficient.

---

# 43. Visual style of the website

The website should feel:

- minimal;
- experimental;
- design-led;
- spatial;
- refined;
- contemporary;
- suitable for a UCL design project;
- closer to an interactive exhibition than a SaaS dashboard.

Avoid:

- gradients everywhere;
- glassmorphism;
- gaming UI;
- bright neon;
- excessive cards;
- heavy shadows;
- dashboard widgets;
- large amounts of instructional text.

Use:

- large areas of whitespace;
- restrained typography;
- thin dividers;
- calm neutral surfaces;
- strong visual hierarchy.

The 3D model should remain the hero.

---

# 44. Preserve the character of the reference model

The supplied reference model has:

- irregular low-poly modules;
- faceted surfaces;
- dense clustered stacking;
- soft muted colours;
- neutral background;
- an architectural / sculptural appearance.

Preserve this feeling.

The web version should NOT look like:

- coloured plastic toys;
- glossy marbles;
- generic game objects;
- Minecraft blocks.

---

# 45. Responsive behaviour

Desktop is the first priority.

However, ensure the layout remains usable on tablet and mobile.

On narrow screens:

```text
3D World

↓

Element tray

↓

Selected module controls

↓

Generate World
```

Do not make the 3D canvas unusably small.

---

# 46. Performance

The model contains many modules.

Please:

- reuse geometry where possible;
- clone materials intentionally;
- avoid unnecessary material creation every render;
- memoise static geometry;
- limit expensive raycasts;
- avoid rebuilding the whole Three.js scene on every state update.

If the small modules share the same geometry, consider reusable geometry or instancing only if it does not prevent individual selection and dragging.

Correct interaction is more important than premature optimisation.

---

# 47. Model normalisation

OBJ exports can contain inconvenient scale/origin values.

After loading:

- calculate the total bounding box;
- centre the model sensibly;
- calculate an appropriate display scale;
- keep the original proportions.

Do not permanently alter the OBJ.

Create a scene transform layer.

---

# 48. Module pivot issues

If a module pivot/origin is far away from its actual geometry:

Do not allow dragging to behave incorrectly.

Create wrapper Groups around modules when needed:

```text
ModuleWrapper
    ↓
OriginalMesh
```

Use the wrapper as the interactive transform object.

This allows the visual geometry to remain unchanged while giving the module a usable interaction pivot.

---

# 49. Sandbox boundary

Calculate the sandbox boundary based on the base geometry.

Clamp movable modules to that boundary.

An approximate X/Z bounding rectangle is acceptable for the MVP.

Do not allow modules to disappear far outside the world.

---

# 50. Collision

Do not implement a full physics engine unless the project already uses one.

For MVP:

Use bounding boxes / bounding spheres where necessary.

Prevent obviously invalid positions if practical.

Do not spend disproportionate time building perfect collision simulation.

---

# 51. Accessibility / alternative controls

Dragging is the main interaction, but also provide simple selected-module controls.

Example:

```text
Position

← → ↑ ↓

Height
− +
```

These may be hidden inside the inspector and visually secondary.

This also makes debugging easier.

---

# 52. Suggested code structure

Adapt this to the existing repository instead of blindly creating it:

```text
src/

  components/
    WorldScene
    Sandbox
    Module
    ElementTray
    ModuleInspector
    SystemReading
    GeneratedWorld
    WorldExplanation
    WorldHistory
    DebugPanel

  world/
    types
    worldState
    worldStore
    elementStyles
    moduleTypeMap
    spatialConfig
    spatialAnalysis
    worldRules

  input/
    WebInputAdapter
    PhysicalInputAdapter.placeholder

  generation/
    WorldGenerator
    MockWorldGenerator
    ApiWorldGenerator.placeholder

  model/
    loadWorldBlocksModel
    classifyOBJObjects
    normaliseModel
```

Keep responsibilities separated.

---

# 53. Final interaction flow

The complete prototype should feel like:

```text
1

LOAD

Original OBJ arrangement appears.


2

EXPLORE

User rotates the camera and clicks modules.


3

EDIT

User:
moves modules
changes type
adds modules
deletes modules
changes height


4

BUILD

The arrangement updates WorldState in real time.


5

GENERATE

User presses:

Generate World


6

READ

The system displays:

element counts
height information
important distances
important relationships


7

RESULT

Generated World appears.


8

EXPLAIN

Why this world?

shows the relationships responsible for the result.


9

CHANGE

User selects:

Change Your World


10

FEEDBACK LOOP

User modifies the arrangement and generates again.
```

This loop is the central product experience.

---

# 54. Do not invent final research rules

I already have a separate World Generation Logic for the academic project.

That logic will be supplied later.

Until I provide it:

Do NOT invent a large speculative rule system.

Only calculate objective spatial facts such as:

- counts;
- distances;
- neighbours;
- height;
- distribution;
- dominant categories.

Keep the rule layer replaceable.

---

# 55. Important development principle

Separate:

```text
WHAT THE USER DOES
```

from:

```text
WHAT THE WORLD MEANS
```

Web dragging is temporary.

WorldState is permanent.

The future physical prototype should be able to produce the same WorldState.

---

# 56. Acceptance criteria

Before considering this iteration complete, verify all of the following:

### OBJ

- OBJ loads successfully.
- Original faceted geometry remains intact.
- Sandbox is identified.
- Individual modules are identified where technically possible.

### Visuals

- Sandbox is neutral.
- Five semantic types use five muted colours.
- Flat shading remains visible.
- Lighting is soft.
- Scene visually resembles a design model rather than a game.

### Interaction

- Camera orbit works.
- Clicking individual modules works.
- Selection is visible.
- Dragging works.
- Camera controls do not conflict with dragging.
- Height can be changed.
- Type can be changed.
- New blocks can be added.
- Blocks can be deleted.
- Reset works.

### Data

- Every change updates WorldState.
- WorldState can be inspected.
- Spatial analysis works independently of rendering.
- WorldState snapshots can be stored.

### Generation flow

- Generate World works in mock mode.
- System Reading appears.
- Why this world? appears.
- Change Your World returns to editing.
- A second generation creates a new state/history entry.

### Architecture

- Web input is separated from WorldState.
- Physical hardware can later replace WebInputAdapter.
- Generator implementation is replaceable.
- Final world rules are replaceable.

---

# 57. Implementation order

Please do not attempt everything simultaneously.

Work in this order:

## Phase 1

Load OBJ correctly.

Identify:

```text
base
modules
hierarchy
bounding boxes
```

Confirm the 3D scene looks correct.

## Phase 2

Apply semantic colour system.

Preserve flat-shaded geometry.

## Phase 3

Implement:

```text
selection
camera
dragging
height
type reassignment
```

## Phase 4

Create central WorldState.

Make the scene synchronise with it.

## Phase 5

Implement spatial analysis.

## Phase 6

Create:

```text
Generate World
System Reading
Mock World Generator
Why this world?
```

## Phase 7

Implement:

```text
Change Your World
world snapshots
basic before/after history
```

## Phase 8

Clean up visual design and responsive behaviour.

At the end of each phase, make sure the application still runs.

Do not rewrite working unrelated functionality.

---

# 58. When something about the OBJ is unclear

Inspect the actual file first.

Do not guess its hierarchy.

If an important technical limitation is caused by the way the OBJ was exported, clearly tell me:

1. what you found;
2. what prevents the intended interaction;
3. what needs to change in the source model.

Prefer adapting to the existing OBJ when technically reasonable.

---

# 59. Final result

The first version should already feel like a usable **digital twin of the physical WorldBlocks interaction**.

The website is not simply a 3D model viewer.

It is an interactive prototype of:

```text
ARRANGE
↓
READ
↓
GENERATE
↓
UNDERSTAND
↓
CHANGE
```

Build the simplest stable implementation that demonstrates this loop clearly while keeping the system modular enough for future physical hardware integration.