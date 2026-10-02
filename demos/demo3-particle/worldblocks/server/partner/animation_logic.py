from __future__ import annotations


ANIMATION_STYLE_RULES = {
    "Auto from Terrain Grammar": "Choose only the motion cues that match the terrain grammar and visible regions.",
    "Water / Waterfall Motion": "Prioritize water motion: ripples, slow flow, shoreline waves, springs, and waterfalls.",
    "Wildlife Motion": "Prioritize sparse symbolic wildlife motion where habitat is suitable.",
    "Settlement Motion": "Prioritize small settlement motion only where human outcomes are habitable.",
    "Fire / Steam Motion": "Prioritize lava glow, smoke, embers, heat shimmer, hot springs, and rising steam.",
    "Failed Habitat Motion": "Prioritize drifting dust, abandoned traces, empty tracks, bones, tombstones, and no thriving life.",
}


MOTION_STRENGTH_RULES = {
    "Subtle": "Keep motion very subtle and loop-like. The image should almost feel like a living illustration.",
    "Medium": "Use moderate local motion while keeping the map composition stable and readable.",
    "Strong": "Use stronger local element motion, but do not move the camera, redesign terrain, or add large new objects.",
}


def build_animation_prompt(
    package: dict,
    animation_style: str = "Auto from Terrain Grammar",
    motion_strength: str = "Subtle",
    lock_camera: bool = True,
) -> str:
    grammar = package.get("terrain_grammar", {}) if package else {}
    regions = package.get("regions", []) if package else []
    style_rule = ANIMATION_STYLE_RULES.get(animation_style, ANIMATION_STYLE_RULES["Auto from Terrain Grammar"])
    strength_rule = MOTION_STRENGTH_RULES.get(motion_strength, MOTION_STRENGTH_RULES["Subtle"])

    terrain_features = grammar.get("terrain_features", [])
    vertical_features = grammar.get("vertical_features", [])
    horizontal_features = grammar.get("horizontal_features", [])
    mixed_features = grammar.get("mixed_features", [])
    human_outcomes = grammar.get("human_outcomes", [])
    animal_outcomes = grammar.get("animal_outcomes", [])
    animal_species = grammar.get("animal_species", [])
    failed_habitat = grammar.get("failed_habitat", False)

    region_lines = []
    for region in regions[:8]:
        region_lines.append(
            f"- {region.get('region', 'region')}: terrain {region.get('terrain_dominant') or 'none'}, "
            f"life {region.get('life_dominant') or 'none'}, feature {region.get('feature', 'mixed terrain')}."
        )
    if not region_lines:
        region_lines.append("- No strong generated regions; keep motion minimal.")

    camera_lock_text = (
        "Use a fully locked camera. Keep the exact same framing throughout the whole video. "
        "Only animate local scene elements. No panning, zooming, dolly, orbit, tilt, or reframing."
        if lock_camera
        else "Use a stable fixed map viewpoint. Any motion must remain local to scene elements and must not recompose the map."
    )

    return (
        "Animate the attached generated_world.png as a short low-poly map animation.\n\n"
        "Locked camera requirement:\n"
        f"- {camera_lock_text}\n"
        "- No camera movement. No panning. No zooming. No dolly. No orbit. No tilt. No reframing. No full-image drifting. No scene translation.\n"
        "- Keep the exact same top-down / isometric map framing from the first frame to the final frame.\n"
        "- The whole image must remain spatially registered to the starting frame; only local elements inside the map may move.\n\n"
        "Preservation rules:\n"
        "- Preserve the exact composition, layout, terrain shapes, colors, region silhouettes, and VERSION2-style low-poly illustrated map look.\n"
        "- Do not translate, scale, rotate, tilt, drift, crop, or reframe the map. No cinematic camera moves, no cuts, no scene redesign.\n"
        "- Do not add labels, UI, text, captions, new large objects, new buildings, or dramatic transformations.\n"
        "- The output should feel like the existing still map gently coming alive.\n\n"
        "Motion style controls:\n"
        f"- Requested animation style: {animation_style}. {style_rule}\n"
        f"- Requested motion strength: {motion_strength}. {strength_rule}\n\n"
        "Layered terrain grammar summary:\n"
        f"- Base world: {grammar.get('base_world', 'unknown')}.\n"
        f"- Summary: {grammar.get('prompt_summary', 'Use only terrain-appropriate micro-motion.')}\n"
        + _lines("Terrain features", terrain_features)
        + _lines("Horizontal features", horizontal_features)
        + _lines("Vertical features", vertical_features)
        + _lines("Mixed features", mixed_features)
        + _lines("Human outcomes", human_outcomes)
        + _lines("Animal outcomes", animal_outcomes)
        + _lines("Animal species", animal_species)
        + f"- Failed habitat: {failed_habitat}.\n\n"
        "Region cues:\n"
        + "\n".join(region_lines)
        + "\n\n"
        "Animation rules:\n"
        "- Water, lake, or sea: gentle ripples, flowing water, and shoreline waves.\n"
        "- Waterfall or island waterfall: visible waterfall or spring stream flowing into surrounding water.\n"
        "- River or canal: slow directional water flow.\n"
        "- Fire, lava, or volcano: lava glow, smoke, embers, and heat shimmer.\n"
        "- Hot spring, steam, or obsidian: rising steam and soft thermal shimmer.\n"
        "- Forest or earth: trees gently sway, grass moves, and small clouds or dust drift.\n"
        "- Settlement or human survival: chimney smoke, tiny lights, small boats, water wheel, windmill, carts, or subtle road activity.\n"
        "- Failed human habitat: tombstones, abandoned camp, drifting dust, no living settlement motion.\n"
        "- Animals on suitable terrain: sparse symbolic motion such as deer walking, birds flying, fish ripples, ducks gliding, goats on mountains, or crabs and turtles on coasts.\n"
        "- Animals on lethal terrain: no living animals; show only bones, abandoned nests, fading tracks, fleeing traces, or crows/vultures circling.\n\n"
        "Final output: a short animated preview that preserves the still map with a fully locked camera and adds only terrain-appropriate local micro-motion."
    )


def _lines(label: str, values: list[str]) -> str:
    if not values:
        return f"- {label}: none.\n"
    return f"- {label}: " + "; ".join(str(value) for value in values[:8]) + ".\n"
