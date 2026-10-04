# Dreamscape V2: surreal particle architecture

This version lives only in demo3-particle. Open `dream.html` through the unified
launcher (port 5193) or its standalone server. Basic, Town, Terrain, shared hardware
and historical archive manifests are unchanged. No image/video API is called.

## Six forces

| Demo code | Force | Spatial role |
| --- | --- | --- |
| C0 | Shell | Open rooms, columns, arches, true window apertures, floors, upper rooms and stairs |
| C1 | Veil | Hanging, curved membranes; attach to Shell, stretch along Flow, light near Glow |
| C2 | Drift | Coherently moving doors, windows and platforms; directed by Flow |
| C3 | Graft | Cantilevered rooms, inverted arcades, sideways doors, stairs to nowhere |
| C4 | Glow | Embedded light chambers, portals and reachable destinations |
| C5 | Flow | Connected circulation, directional traces, extended bridges and local motion vectors |

These are **demo-local semantic codes**, not a firmware remapping. Dreamscape still
uses manual input. `toDreamWorldState` provides an explicit code boundary for future
integration; no live connection or real-device validation is claimed.

Height 1 Shell creates a fragment; height 2 a room; height 3+ adds upper levels.
Positions, local distances, direction, height, density and deterministic seed affect
the result. Pair relationships require overlapping influence. Five named triple
combinations resolve into additional semantic architecture, not only colour changes.

## Implementation

`WorldState → analyzeDream → continuous fields + local relationships → semantic
architecture → navigation + surface/edge sampling → GPU particles and motion`.

- `DreamRelationships.js`: pair distances/weights, direction, triple zones, Flow vectors.
- `DreamArchitecture.js`: explicit quads, curves, arches, pierced rooms, treads, rails.
- `DreamStructureGenerator.js`: seeded resolver, floor elevations, optional branches,
  paired effects and emergent rooms/circulation.
- `DreamParticleSystem.js`: 66% structural surfaces, 22% edges, 12% atmosphere.
  320k desktop / 160k narrow viewport samples maximum. Persistent buffer geometry.
- `DreamNavigationPlanner.js`: room floors and corridor/stair surfaces at real
  elevations, substepped movement, active-surface tracking through crossings.
- `DreamScene.js`: one generated world for overview and first-person, ordered reveal,
  diagnostic overlays. No duplicate solid world is generated for exploration.

GPU motion preserves whole Drift fragments, waves Veil surfaces, pulses Glow and
slightly shimmers Shell. Reduced motion stops displacement and skips the reveal.
The palette uses near-black voids, saturated red/magenta walls, electric-blue floors and circulation, cyan lights and sparse white highlights. Occasional warm light punctuates Glow chambers. This supersedes the earlier pale structural colors.
Colors are converted from sRGB to linear before entering the shader to preserve saturation.
No opaque replacement meshes or bloom.

Near-camera settings live in `DREAM_CONFIG.lod`: near/far distances, reserve sample
fraction, close-range jitter and atmosphere. A reserved subset of structural points
fades in nearby; point size, jitter and atmospheric opacity decrease. No CPU resampling
occurs while walking. Semantic surfaces intentionally remain permeable scan traces.

## Navigation and bounds

Shell floors and connecting corridors form the main walkable route. Upper rooms
have real stair tread geometry and matching sloped navigation surfaces. Visual-only
Graft/Drift/Veil elements are not included in the walkable floor plan. The visitor
cannot walk into unsupported voids or jump to a disconnected floor at a crossing.
This is lightweight floor navigation, not a general rigid-body collision simulator.

To keep the existing bounded demo behavior, at most 12 Shell source rooms and 8
additional Flow/Glow thresholds are resolved. Each source has at most 3 usable levels;
Graft branches are visual only. All input still contributes to influence fields.

## Editing and compatibility

The existing OBJ editor, snapped seats, true supporting stack modules, held movement
controls, saved draft, overview, Enter Dream and Clear screen remain. V2 writes
`worldblocks-dream-v2-draft`; the old `worldblocks-dream-draft` is preserved. On first
use of V2 on the same origin, legacy Anchor/Memory map to Shell, Emotion to Veil,
Desire to Glow and Fear to Graft. No old draft is overwritten.

Examples A–H match the requested comparisons, with I combining all six forces.
“Return to my arrangement” restores the session draft after example experimentation.
Developer-only Architecture study can show six fields, Flow direction, combination
zones, semantic geometry, walkable surfaces and visual-only geometry. Clear screen
and entering the dream remove these overlays.

## Verification

`npm test` covers the existing app and V2 generation, seeded repeatability, original
OBJ seating, all examples, pair/triple resolution, height changes, continuous travel
to destinations and upper floors, bounded movement, particle budgets and near-sample
attributes, legacy migration and the enter/walk/return controller. Browser checks
cover real WebGL rendering, generation, diagnostics, editing and first-person views.

## Interlocking module placement

Dreamscape uses `DreamInputAdapter` on top of the original grid adapter. Four
adjacent modules on the same layer unlock the central staggered seat. The contact
height comes from the imported module's convex face normals and projection widths,
not a guessed half of its bounding-box height. Tiny original OBJ/grid tolerances
are allowed; unsupported or intersecting seats are excluded.

Dragging and Position arrows both use these seats. Arrows take one neighbouring
step, including the diagonal half-grid position, and keep press-and-hold support.
A gap column can extend vertically with full face spacing; its minimum level is
shown by the disabled lower button. Moving back onto the base restores normal
height controls. WorldState saves the gap column's base elevation.

Moving or removing a supporting module is rejected if it would leave an interlocking
fragment suspended; move the upper fragment first. Ordinary vertical stacks still
settle as before. This rule is confined to Dreamscape; the other demos and hardware
input contract are unchanged. Geometry tests use the actual OBJ and include upper
layer seats, four-support contact, collision, snapped movement, persistence and
transactional support protection.
