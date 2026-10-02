from pathlib import Path

SEMANTIC_RULES = """
Semantic rules to preserve:
- Water = rivers, lakes, wetlands, canals or water systems.
- Fire = burnt land, lava cracks, furnaces, smoke, heat or disaster zones.
- Earth = plains, forests, hills, mountains, rocks, farmland potential or stable terrain.
- Human = settlements, roads, bridges, farms, ports, mines, factories, dams, ruins or civic infrastructure.
- Human-overlapped areas must clearly show human activity transforming the landscape.
- Animal = ecological life, habitat potential, nesting zones, burrows, migration paths, and sparse wildlife traces.
- Animal should first create habitat/ecological zones, then infer a few representative animals from the environment.
- Keep animal signs subtle and sparse; do not overcrowd the map with many animals.
""".strip()

VERSION2_STYLE_INSTRUCTIONS = """
VERSION2 style target:
- Match VERSION2.jpeg as the primary visual style reference.
- Use a flat 2.5D illustrated civilisation-map look.
- Use an editorial infographic style with clean, readable map symbols.
- Use top-down or slightly angled world-map perspective, not first-person scenery.
- Use simplified geometric terrain, stylised terrain patches, and clear region silhouettes.
- Use simplified block-like or diagrammatic buildings, roads, bridges, fields, rivers, factories, and civic infrastructure.
- Use a bright, vivid low-poly palette close to the reference image: clear olive greens, golden ochres, sandy browns, bright lake blues, turquoise water transitions, and crisp readable highlights.
- Increase color clarity and local contrast compared with a gray/desaturated map. The final image should look fresh, clean, and legible at a glance.
- Avoid dark navy/black backgrounds, harsh saturated primary colors, neon accents, gloomy roguelike colors, or high-contrast fantasy-map darkness.
- Keep lighting simple, with minimal shadows and no cinematic drama.
- Keep the map spacious, tidy, playful, and designed.
- Prefer sparse representative symbol clusters over dense repeated texture fills.
- Forests should be small tree groups, settlements should be a few spaced buildings, and industrial areas should be one or two clear structures.
- Do not make it photorealistic, anime, pixel art, Dwarf Fortress style, dark roguelike terrain, or cinematic concept art.
""".strip()

STYLE_DENSITY_READABILITY_CONTROL = """
Density and readability control:
Treat trees, buildings, rocks, factories, farms, paths, and animals as sparse map
symbols, not dense texture fills. Leave visible breathing space between terrain
features. The final image should feel clean, curated, spacious, and readable like an
editorial 2.5D map.
Low-influence background terrain may have subtle low-poly facets, gentle Perlin-noise
height variation, and broad tonal patches, but it must remain lower-detail and calmer
than placed-unit regions.
""".strip()

CONTROL_MAP_TRANSLATION_RULES = """
Control-map translation rules:
- Image 1 is a semantic mask, not final artwork. Never copy its raw blue, brown, red, green, teal, or ochre blobs directly into the generated image.
- Translate each colored region into low-poly terrain materials, shoreline bands, slopes, paths, structures, vegetation, or water features that match VERSION2's palette.
- Remove visible control-map seams. No flat pasted color patches, no hard mask borders, no unprocessed dark blue or dark brown areas.
- Where a control region touches the background, create an environmental transition: shoreline, grass-to-dirt gradient, slope, sand bank, wetland edge, rocky edge, or sparse vegetation.
- Water features must have believable continuity. A river or canal should connect to a lake, pond, spring, wetland, sea, delta, waterfall, culvert, or continue off-map with a visible mouth; it must not simply stop at a region edge or image boundary.
- If water is not the dominant background, make water a local lake, pond, wetland, river, or canal embedded in land, not a copied blue island-shaped blob.
""".strip()

def background_generation_rule(background_element: str, background_description: str) -> str:
    if background_element == "water":
        return (
            f"The low-influence background is water-dominant: {background_description}. "
            "It may be a calm sea or broad lake. Placed-unit regions may read as islands, shore settlements, wetlands, volcanic islets, or habitat patches."
        )
    if background_element == "fire":
        return (
            f"The low-influence background is fire-dominant: {background_description}. "
            "Do not make it ocean. Water units should appear only as small lakes, springs, pools, canals, or rivers within the wasteland."
        )
    return (
        f"The low-influence background is earth-dominant: {background_description}. "
        "Do not make the whole map an island in the sea. Do not surround the world with ocean. Water units should appear as local lakes, ponds, wetlands, canals, or rivers only."
    )

def build_final_prompt(base_prompt: str, pieces: dict, package: dict) -> str:
    has_human = any(value == "human" for value in pieces.values())
    background_element = package.get("background_element", "earth")
    background_description = package.get(
        "background_description",
        "quiet earth, dry grassland, sparse plain, low hills, or barren land",
    )
    background_rule = background_generation_rule(background_element, background_description)
    life_overlay_rule = (
        "- Treat earth, water, and fire as the broad natural terrain foundation; treat animal and human as smaller overlays, traces, and map symbols.\n"
        if has_human
        else "- Treat earth, water, and fire as the broad natural terrain foundation; treat animal as smaller ecological overlays and map symbols.\n"
    )
    no_human_rule = ""
    if not has_human:
        no_human_rule = (
            "- Do not add towns, roads, bridges, factories, farms, houses, civic buildings, or engineered infrastructure unless human units are present.\n"
        )

    return (
        "PASS 1: Generate a structurally correct world image in the VERSION2 visual direction.\n\n"
        "Input roles:\n"
        "- Image 1 is the control map generated from the captured WorldBlocks arrangement. It defines layout, broad biome placement, low-detail background terrain, and elemental relationships only.\n"
        "- Image 2 is VERSION2.jpeg or a replacement style reference. Use it for visual style only: bright low-poly palette, faceted terrain simplification, symbol language, building design, and overall map finish. Do not copy its island/sea composition unless the generated board is water-dominant.\n\n"
        "Layout rules:\n"
        "- Follow the approximate positions, proportions, transitions, and high-influence unit regions from Image 1.\n"
        "- Do not copy the flat control-map colors, hard polygon borders, visible grid, or heatmap appearance from Image 1.\n"
        f"- Low-influence/unplaced areas are not empty void. {background_rule}\n"
        "- Low-influence background terrain should not be a perfectly flat solid color. Add subtle broad low-poly facets, gentle terrain undulation, and small tonal variation, while keeping it sparse and low-detail.\n"
        "- Placed-unit regions should contain richer details, structures, habitats, terrain symbols, and feature clusters than unplaced regions.\n"
        "- Stack height should read as elevation: ridges, highlands, cliffs, peaks, layered slopes, or raised plateaus.\n"
        "- The layout should remain recognizable, but transitions between placed-unit regions and the base terrain must be soft, irregular, eroded, feathered, and map-like.\n"
        "- Avoid hard island cutouts, black void boundaries, sticker-like silhouettes, copied pixel stair-steps, and rigid mask edges.\n\n"
        + CONTROL_MAP_TRANSLATION_RULES
        + "\n\n"
        "World layering rules:\n"
        + life_overlay_rule
        + no_human_rule
        + "\n"
        + VERSION2_STYLE_INSTRUCTIONS
        + "\n\n"
        + STYLE_DENSITY_READABILITY_CONTROL
        + "\n\n"
        + SEMANTIC_RULES
        + "\n\n"
        + "World logic prompt:\n"
        + base_prompt
    )

def build_style_restyle_prompt(pass1_output_path: Path, package: dict) -> str:
    background_description = package.get(
        "background_description",
        "quiet earth, dry grassland, sparse plain, low hills, or barren land",
    )
    background_element = package.get("background_element", "earth")
    background_rule = background_generation_rule(background_element, background_description)
    return f"""
PASS 2: Restyle the first-pass world image with stronger VERSION2 fidelity.

Input roles:
- Image 1 ({pass1_output_path.name}) = preserve content, structure, world arrangement, roads, rivers, region relationships, settlements, infrastructure, terrain logic, and low-detail background terrain.
- Image 2 = VERSION2.jpeg or replacement style reference only.

Preserve the world structure, layout, roads, rivers, region relationships, settlements,
civic infrastructure, terrain logic, and overall arrangement from Image 1. Do not invent
a new map layout.

Do not turn the low-influence background into black void or into a sea by default.
{background_rule}
Placed-unit regions should
remain richer and more detailed than this background. Soften rigid borders between
feature-rich regions and the base terrain.
The background may contain subtle broad low-poly facets and gentle tonal terrain
variation, but it must stay visually quieter and less detailed than placed-unit areas.

Repair any artifacts from Image 1 that look like copied control-map colors. Replace
flat dark blue, flat deep brown, hard teal bands, or raw mask-shaped blobs with
finished low-poly terrain, water, shorelines, slopes, and soft transitions.

Use Image 2 only for visual style. Match the visual language of the style reference
more strongly than Pass 1: bright low-poly color palette, simplified faceted terrain
treatment, blocky building language, icon-like map features, sparse symbol density,
and clean designed-map finish. Do not copy Image 2's sea/island composition unless the
board's dominant background is water.

Keep the world content original, but make the visual treatment clearly resemble the
style reference image. Preserve content and layout, but restyle the whole image.

{VERSION2_STYLE_INSTRUCTIONS}

{CONTROL_MAP_TRANSLATION_RULES}

{STYLE_DENSITY_READABILITY_CONTROL}

{SEMANTIC_RULES}

Output expectation:
Create the final world image. It should preserve the generated world's structure and
logic while visually resembling the style reference much more strongly than Pass 1.
""".strip()

def should_skip_pass2(prompt_package: dict | None) -> bool:
    grammar = (prompt_package or {}).get("terrain_grammar", {})
    return grammar.get("failed_habitat_kind") in {
        "human_only",
        "animal_only",
        "human_animal",
    }
