from __future__ import annotations

import math
import random
from typing import Optional

from PIL import Image

from .terrain_grammar import interpret_terrain_grammar


ELEMENTS = {
    "earth": {
        "label": "土",
        "mark": "土",
        "color": "#a98645",
        "terrain": "soil, hills, rocks, grassland, mountain ridges",
    },
    "human": {
        "label": "人",
        "mark": "人",
        "color": "#facc15",
        "terrain": "settlements, roads, camps, workshops, cultivated land, ruins",
    },
    "water": {
        "label": "水",
        "mark": "水",
        "color": "#42aee0",
        "terrain": "water, lakes, rivers, wetlands",
    },
    "fire": {
        "label": "火",
        "mark": "火",
        "color": "#d56f3d",
        "terrain": "lava, scorched land, volcanic cracks, hot fire terrain",
    },
    "animal": {
        "label": "动物",
        "mark": "兽",
        "color": "#6fa83f",
        "terrain": "wild habitat, animal trails, nests, dens, grazing fields, forests",
    },
}
ELEMENT_ORDER = ["earth", "human", "water", "fire", "animal"]
NATURAL_ELEMENTS = ["earth", "water", "fire"]
LIFE_ELEMENTS = ["animal", "human"]

UNIT_NAMES = ["earth", "human", "water", "fire", "animal"]
DEFAULT_UNIT_ELEMENT_MAP = {
    "earth": "earth",
    "human": "human",
    "water": "water",
    "fire": "fire",
    "animal": "animal",
    "A": "earth",
    "B": "human",
    "C": "water",
    "D": "fire",
    "E": "animal",
}
UNIT_RESISTANCE_MAP = {
    220: "earth",
    440: "human",
    1000: "water",
    2000: "fire",
    10000: "animal",
}

BASE_GRID_SIZE = 4
HALF_GRID_SIZE = 3
MAX_STACK = 8
TOTAL_HARDWARE_SLOTS = BASE_GRID_SIZE * BASE_GRID_SIZE + HALF_GRID_SIZE * HALF_GRID_SIZE

CONTROL_SIZE = 96
CONTROL_SCALE = 8
EMPTY_COLOR = "#0f172a"
BACKGROUND_TERRAIN_COLORS = {
    "earth": "#b7a85f",
    "water": "#36a7c4",
    "fire": "#9f7045",
    "failed_habitat": "#111111",
}
BACKGROUND_NOISE_AMOUNT = 0.075
BACKGROUND_NOISE_FREQUENCY = 7.0
EMPTY_INFLUENCE_THRESHOLD = 0.18
CONTROL_EDGE_FEATHER = 0.14
BOUNDARY_NOISE_STRENGTH = 0.32
CONTROL_DOMAIN_WARP = 0.30
LIFE_AREA_WEIGHT = 0.38
LIFE_SPREAD_WEIGHT = 0.16
HALF_LAYER_SPREAD_WEIGHT = 0.35


def height_weight(z: float) -> float:
    return round(1.0 + float(z) * 0.75, 3)


def build_positions(max_stack: int = MAX_STACK) -> list[dict]:
    positions = []

    for layer in range(max_stack):
        for row in range(BASE_GRID_SIZE):
            for col in range(BASE_GRID_SIZE):
                slot = row * BASE_GRID_SIZE + col
                positions.append(
                    {
                        "id": f"L0-S{slot}-Z{layer}",
                        "slot": slot,
                        "hardware_layer": "L0",
                        "kind": "base",
                        "z": float(layer),
                        "stack_index": layer,
                        "row": row,
                        "col": col,
                        "n": BASE_GRID_SIZE,
                        "x": float(col),
                        "y": float(row),
                        "compact": f"L0[{col},{row}]/{layer + 1}",
                        "label": f"L0 Slot {slot} · layer {layer + 1} · ({col}, {row}, {layer})",
                    }
                )

    for layer in range(max_stack):
        for row in range(HALF_GRID_SIZE):
            for col in range(HALF_GRID_SIZE):
                slot = BASE_GRID_SIZE * BASE_GRID_SIZE + row * HALF_GRID_SIZE + col
                z = layer + 0.5
                positions.append(
                    {
                        "id": f"L05-S{slot - BASE_GRID_SIZE * BASE_GRID_SIZE}-Z{layer}",
                        "slot": slot,
                        "hardware_layer": "L0.5",
                        "kind": "half",
                        "z": z,
                        "stack_index": layer,
                        "row": row,
                        "col": col,
                        "n": HALF_GRID_SIZE,
                        "x": col + 0.5,
                        "y": row + 0.5,
                        "compact": f"L0.5[{col},{row}]/{layer + 1}",
                        "label": f"L0.5 Slot {slot - 16} · layer {layer + 1} · ({col + 0.5}, {row + 0.5}, {z})",
                    }
                )

    return sorted(positions, key=lambda p: (p["z"], p["hardware_layer"], p["row"], p["col"]))


POSITIONS = build_positions()
POSITION_BY_ID = {p["id"]: p for p in POSITIONS}
POSITION_BY_SLOT_LAYER = {(p["slot"], p["stack_index"]): p for p in POSITIONS}
LAYERS = sorted({p["z"] for p in POSITIONS})


def create_empty_pieces() -> dict[str, Optional[str]]:
    return {p["id"]: None for p in POSITIONS}


def get_layer_positions(z: float) -> list[dict]:
    return [p for p in POSITIONS if p["z"] == z]


def toggle_piece(pieces: dict[str, Optional[str]], position_id: str, active_element: str) -> dict[str, Optional[str]]:
    new_pieces = dict(pieces)
    current = new_pieces.get(position_id)
    new_pieces[position_id] = None if current == active_element else active_element
    return new_pieces


def has_physical_support(pos: dict, pieces: dict[str, Optional[str]]) -> bool:
    if pos["stack_index"] == 0:
        return True

    below = POSITION_BY_SLOT_LAYER.get((pos["slot"], pos["stack_index"] - 1))
    return bool(below and pieces.get(below["id"]))


def create_physical_random_layout(seed: Optional[int] = None) -> dict[str, Optional[str]]:
    rng = random.Random(seed)
    pieces = create_empty_pieces()
    type_counts = {key: 0 for key in ELEMENT_ORDER}

    def pick_balanced_element() -> str:
        minimum = min(type_counts.values())
        candidates = [key for key in ELEMENT_ORDER if type_counts[key] <= minimum + 1]
        chosen = rng.choice(candidates)
        type_counts[chosen] += 1
        return chosen

    for slot in range(TOTAL_HARDWARE_SLOTS):
        stack_height = rng.choices([0, 1, 2, 3, 4, 5], weights=[1, 5, 5, 3, 2, 1])[0]
        for layer in range(stack_height):
            pos = POSITION_BY_SLOT_LAYER.get((slot, layer))
            if pos:
                pieces[pos["id"]] = pick_balanced_element()

    return pieces


def pieces_from_hardware_board(
    board: dict[int, list[str]],
    unit_element_map: dict[str, str] | None = None,
) -> dict[str, Optional[str]]:
    unit_element_map = unit_element_map or DEFAULT_UNIT_ELEMENT_MAP
    pieces = create_empty_pieces()

    for slot, stack in board.items():
        for layer, unit_name in enumerate(stack[:MAX_STACK]):
            pos = POSITION_BY_SLOT_LAYER.get((slot, layer))
            element = unit_element_map.get(unit_name)
            if pos and element in ELEMENTS:
                pieces[pos["id"]] = element

    return pieces


def empty_element_values() -> dict[str, float]:
    return {key: 0.0 for key in ELEMENT_ORDER}


def empty_values(keys: list[str]) -> dict[str, float]:
    return {key: 0.0 for key in keys}


def normalized(values: dict[str, float], keys: list[str]) -> dict[str, float]:
    total = sum(values.get(key, 0.0) for key in keys)
    if total <= 0:
        return empty_values(keys)
    return {key: values.get(key, 0.0) / total for key in keys}


def build_world_nodes(pieces: dict[str, Optional[str]], positions=None) -> list[dict]:
    positions = POSITIONS if positions is None else positions
    nodes = []

    for y in range(BASE_GRID_SIZE):
        for x in range(BASE_GRID_SIZE):
            nodes.append(
                {
                    "id": f"B-{x}-{y}",
                    "kind": "base",
                    "x": float(x),
                    "y": float(y),
                    "elements": empty_element_values(),
                    "direct_elements": empty_element_values(),
                    "terrain_elements": empty_values(NATURAL_ELEMENTS),
                    "life_elements": empty_values(LIFE_ELEMENTS),
                    "direct_terrain_elements": empty_values(NATURAL_ELEMENTS),
                    "direct_life_elements": empty_values(LIFE_ELEMENTS),
                    "elevation": 0.0,
                    "direct_elevation": 0.0,
                }
            )

    for y in range(HALF_GRID_SIZE):
        for x in range(HALF_GRID_SIZE):
            nodes.append(
                {
                    "id": f"H-{x + 0.5}-{y + 0.5}",
                    "kind": "half",
                    "x": x + 0.5,
                    "y": y + 0.5,
                    "elements": empty_element_values(),
                    "direct_elements": empty_element_values(),
                    "terrain_elements": empty_values(NATURAL_ELEMENTS),
                    "life_elements": empty_values(LIFE_ELEMENTS),
                    "direct_terrain_elements": empty_values(NATURAL_ELEMENTS),
                    "direct_life_elements": empty_values(LIFE_ELEMENTS),
                    "elevation": 0.0,
                    "direct_elevation": 0.0,
                }
            )

    # Free placements retain continuous coordinates; no snapping or dropped cells.
    import copy
    existing = {(n["kind"], n["x"], n["y"]) for n in nodes}
    for pos in positions:
        key = (pos["kind"], float(pos["x"]), float(pos["y"]))
        if key not in existing:
            node = copy.deepcopy(nodes[0])
            node.update(id=f"P-{len(nodes)}", kind=key[0], x=key[1], y=key[2])
            nodes.append(node)
            existing.add(key)
    node_by_key = {f"{n['kind']}:{n['x']}:{n['y']}": n for n in nodes}

    for pos in positions:
        element = pieces.get(pos["id"])
        if not element:
            continue

        weight = height_weight(pos["z"])
        kind = pos["kind"]
        key = f"{kind}:{float(pos['x'])}:{float(pos['y'])}"
        area_weight = 1.0 if element in NATURAL_ELEMENTS else LIFE_AREA_WEIGHT
        if key in node_by_key:
            node_by_key[key]["elements"][element] += weight * area_weight
            node_by_key[key]["direct_elements"][element] += weight
            node_by_key[key]["elevation"] += weight
            node_by_key[key]["direct_elevation"] += weight
            if element in NATURAL_ELEMENTS:
                node_by_key[key]["terrain_elements"][element] += weight
                node_by_key[key]["direct_terrain_elements"][element] += weight
            elif element in LIFE_ELEMENTS:
                node_by_key[key]["life_elements"][element] += weight * LIFE_AREA_WEIGHT
                node_by_key[key]["direct_life_elements"][element] += weight

        if pos["kind"] == "half":
            sx = int(math.floor(pos["x"]))
            sy = int(math.floor(pos["y"]))
            for bx, by in [(sx, sy), (sx + 1, sy), (sx, sy + 1), (sx + 1, sy + 1)]:
                base_key = f"base:{float(bx)}:{float(by)}"
                if base_key in node_by_key:
                    spread_weight = HALF_LAYER_SPREAD_WEIGHT if element in NATURAL_ELEMENTS else LIFE_SPREAD_WEIGHT
                    spread = weight * spread_weight
                    node_by_key[base_key]["elements"][element] += spread
                    node_by_key[base_key]["elevation"] += weight * HALF_LAYER_SPREAD_WEIGHT
                    if element in NATURAL_ELEMENTS:
                        node_by_key[base_key]["terrain_elements"][element] += spread
                    elif element in LIFE_ELEMENTS:
                        node_by_key[base_key]["life_elements"][element] += spread

    for node in nodes:
        total = sum(node["elements"].values())
        direct_total = sum(node["direct_elements"].values())
        terrain_total = sum(node["terrain_elements"].values())
        life_total = sum(node["life_elements"].values())
        direct_terrain_total = sum(node["direct_terrain_elements"].values())
        direct_life_total = sum(node["direct_life_elements"].values())
        node["total"] = total
        node["direct_total"] = direct_total
        node["terrain_total"] = terrain_total
        node["life_total"] = life_total
        node["direct_terrain_total"] = direct_terrain_total
        node["direct_life_total"] = direct_life_total
        if total > 0:
            node["ratios"] = {key: node["elements"][key] / total for key in ELEMENT_ORDER}
        else:
            node["ratios"] = empty_element_values()
        if direct_total > 0:
            node["direct_ratios"] = {key: node["direct_elements"][key] / direct_total for key in ELEMENT_ORDER}
        else:
            node["direct_ratios"] = empty_element_values()
        node["terrain_ratios"] = normalized(node["terrain_elements"], NATURAL_ELEMENTS)
        node["life_ratios"] = normalized(node["life_elements"], LIFE_ELEMENTS)
        node["direct_terrain_ratios"] = normalized(node["direct_terrain_elements"], NATURAL_ELEMENTS)
        node["direct_life_ratios"] = normalized(node["direct_life_elements"], LIFE_ELEMENTS)

    return nodes



def describe_feature(ratios: dict[str, float]) -> str:
    if all(ratios[key] > 0.12 for key in ELEMENT_ORDER):
        return "dense living frontier with settlements, wild habitat, water, earth, and fire pressure"
    if ratios["human"] > 0.25 and ratios["animal"] > 0.20:
        return "frontier village, animal paths, pens, hunting grounds, and contested wild edges"
    if ratios["human"] > 0.25 and ratios["water"] > 0.20:
        return "riverside settlement, docks, canals, wells, farms, and wet streets"
    if ratios["human"] > 0.25 and ratios["earth"] > 0.25:
        return "stone settlement, roads, quarries, farms, walls, and workshops"
    if ratios["human"] > 0.20 and ratios["fire"] > 0.20:
        return "forge town, furnaces, scorched workshops, fire-lit streets, and ruins"
    if ratios["animal"] > 0.25 and ratios["water"] > 0.20:
        return "wetland habitat, animal trails, nests, watering holes, and marsh life"
    if ratios["animal"] > 0.25 and ratios["earth"] > 0.25:
        return "wild grassland, dens, burrows, forests, and grazing fields"
    if ratios["animal"] > 0.20 and ratios["fire"] > 0.20:
        return "burned wilderness, fleeing herds, ash forest, and dangerous lairs"
    if ratios["water"] > 0.20 and ratios["fire"] > 0.20 and ratios["earth"] > 0.20:
        return "hot springs, volcanic lake, rocky wet shoreline"
    if ratios["water"] > 0.25 and ratios["earth"] > 0.25:
        return "forest, marsh, mossy wetland"
    if ratios["water"] > 0.20 and ratios["fire"] > 0.20:
        return "steam rocks, obsidian, cooled lava shore"
    if ratios["fire"] > 0.25 and ratios["earth"] > 0.25:
        return "volcanic hills and cracked dry ground"
    return "single-element terrain"


def describe_layered_feature(
    terrain: dict[str, float],
    life: dict[str, float],
    terrain_total: float,
    life_total: float,
    elevation: float,
) -> str:
    terrain_parts = []
    if terrain_total > 0:
        dominant_terrain = max(NATURAL_ELEMENTS, key=lambda key: terrain.get(key, 0.0))
        if dominant_terrain == "earth":
            terrain_parts.append("earth-shaped ground, hills, rock, grassland, or mountain ridges")
        elif dominant_terrain == "water":
            terrain_parts.append("water-shaped basins, rivers, lakes, or wetlands")
        elif dominant_terrain == "fire":
            terrain_parts.append("fire-shaped lava, scorched land, volcanic cracks, or heated rock")

        if terrain.get("water", 0.0) > 0.25 and terrain.get("earth", 0.0) > 0.20:
            terrain_parts.append("wet earth transitions such as marsh, moss, or shoreline")
        if terrain.get("fire", 0.0) > 0.25 and terrain.get("earth", 0.0) > 0.20:
            terrain_parts.append("dry volcanic highland or cracked stone")
        if terrain.get("water", 0.0) > 0.20 and terrain.get("fire", 0.0) > 0.18:
            terrain_parts.append("steam, cooled lava, obsidian, or hot spring edges")
    else:
        terrain_parts.append("very small life-marked area with no broad natural terrain base")

    if elevation >= 5:
        terrain_parts.append("very high stacked relief, cliffs, peaks, or elevated plateaus")
    elif elevation >= 2.5:
        terrain_parts.append("raised terrain, ridges, highland, or layered slopes")

    life_parts = []
    if life_total > 0:
        if life.get("animal", 0.0) > 0.30:
            life_parts.append("small animal traces such as tracks, dens, nests, grazing marks, or habitat pockets")
        if life.get("human", 0.0) > 0.30:
            life_parts.append("limited human modifications such as paths, huts, workshops, farms, walls, or ruins")

    return "; ".join(terrain_parts + life_parts)


def control_color_for_ratios(ratios: dict[str, float]) -> str:
    if all(ratios[key] > 0.12 for key in ELEMENT_ORDER):
        return "#a77bd6"
    if ratios["human"] > 0.25 and ratios["animal"] > 0.20:
        return "#a8c957"
    if ratios["human"] > 0.25 and ratios["water"] > 0.20:
        return "#58c7d6"
    if ratios["human"] > 0.25 and ratios["earth"] > 0.25:
        return "#d6a64d"
    if ratios["human"] > 0.20 and ratios["fire"] > 0.20:
        return "#df8744"
    if ratios["animal"] > 0.25 and ratios["water"] > 0.20:
        return "#4fb8a8"
    if ratios["animal"] > 0.25 and ratios["earth"] > 0.25:
        return "#8aaa4a"
    if ratios["animal"] > 0.20 and ratios["fire"] > 0.20:
        return "#a45f3e"
    if ratios["water"] > 0.25 and ratios["earth"] > 0.25:
        return "#72b06a"
    if ratios["water"] > 0.20 and ratios["fire"] > 0.20:
        return "#8b8d85"

    dominant = max(ELEMENT_ORDER, key=lambda key: ratios[key])
    return ELEMENTS[dominant]["color"]


def _hex_to_rgb(color: str) -> tuple[int, int, int]:
    color = color.lstrip("#")
    return int(color[0:2], 16), int(color[2:4], 16), int(color[4:6], 16)


def _rgb_to_hex(rgb: tuple[int, int, int]) -> str:
    return "#" + "".join(f"{max(0, min(255, value)):02x}" for value in rgb)


def blend_colors(base: str, overlay: str, amount: float) -> str:
    amount = max(0.0, min(1.0, amount))
    br, bg, bb = _hex_to_rgb(base)
    or_, og, ob = _hex_to_rgb(overlay)
    return _rgb_to_hex(
        (
            round(br * (1 - amount) + or_ * amount),
            round(bg * (1 - amount) + og * amount),
            round(bb * (1 - amount) + ob * amount),
        )
    )


def adjust_color_lightness(color: str, amount: float) -> str:
    r, g, b = _hex_to_rgb(color)
    if amount >= 0:
        target = (255, 255, 255)
        mix = min(1.0, amount)
    else:
        target = (0, 0, 0)
        mix = min(1.0, -amount)
    return _rgb_to_hex(
        (
            round(r * (1 - mix) + target[0] * mix),
            round(g * (1 - mix) + target[1] * mix),
            round(b * (1 - mix) + target[2] * mix),
        )
    )


def dominant_background_element(pieces: dict[str, Optional[str]], positions=None) -> str:
    positions = POSITIONS if positions is None else positions
    counts = {
        key: sum(1 for value in pieces.values() if value == key)
        for key in NATURAL_ELEMENTS
    }
    if any(counts.values()):
        return max(NATURAL_ELEMENTS, key=lambda key: (counts[key], -NATURAL_ELEMENTS.index(key)))

    if any(value in LIFE_ELEMENTS for value in pieces.values()):
        return "earth"

    return "earth"



def background_color_at(background_element: str, gx: float, gy: float, size: int) -> str:
    base_color = BACKGROUND_TERRAIN_COLORS.get(background_element, BACKGROUND_TERRAIN_COLORS["earth"])
    x = gx / max(1, size - 1)
    y = gy / max(1, size - 1)
    broad = _value_noise(x, y, BACKGROUND_NOISE_FREQUENCY, 101) - 0.5
    small = _value_noise(x, y, BACKGROUND_NOISE_FREQUENCY * 2.0, 131) - 0.5
    amount = (broad * 0.75 + small * 0.25) * BACKGROUND_NOISE_AMOUNT
    return adjust_color_lightness(base_color, amount)


def background_terrain_description(background_element: str) -> str:
    if background_element == "failed_habitat":
        return (
            "dark / black / charcoal barren failed-habitat background; life-overlay units cannot create terrain by themselves"
        )
    if background_element == "water":
        return (
            "open sea or broad calm water; placed unit regions become islands, "
            "wetlands, settlements, volcanic rocks, or habitats rising from the water"
        )
    if background_element == "fire":
        return (
            "barren scorched ground, ash plain, dry volcanic soil, or muted wasteland; "
            "placed unit regions become richer terrain features on top"
        )
    return (
        "quiet earth, dry grassland, sparse plain, low hills, or barren land; "
        "placed unit regions become richer terrain features on top"
    )


def natural_terrain_color(terrain: dict[str, float]) -> str:
    earth = terrain.get("earth", 0.0)
    water = terrain.get("water", 0.0)
    fire = terrain.get("fire", 0.0)
    if water >= 0.52:
        return ELEMENTS["water"]["color"]
    if fire >= 0.52:
        return ELEMENTS["fire"]["color"]
    if earth >= 0.60:
        return ELEMENTS["earth"]["color"]
    if water > 0.25 and fire > 0.20 and earth > 0.15:
        return "#8b8d85"
    if water > 0.30 and earth > 0.22:
        return "#4fb8a8"
    if fire > 0.28 and earth > 0.22:
        return "#a8683c"
    if water > 0.25 and fire > 0.20:
        return "#7d858c"
    dominant = max(NATURAL_ELEMENTS, key=lambda key: terrain.get(key, 0.0))
    return ELEMENTS[dominant]["color"]


def control_color_for_layers(
    terrain: dict[str, float],
    life: dict[str, float],
    terrain_density: float,
    life_density: float,
    elevation: float,
) -> str:
    if terrain_density <= 0 and life_density <= 0:
        return EMPTY_COLOR

    if terrain_density > 0:
        color = natural_terrain_color(terrain)
    else:
        color = blend_colors(ELEMENTS["earth"]["color"], EMPTY_COLOR, 0.35)

    life_ratio = life_density / max(terrain_density + life_density, 0.001)
    life_strength = min(0.52, 0.12 + life_ratio * 0.62) if life_density > 0.08 else 0.0
    if life_strength > 0.05:
        if life.get("human", 0.0) > 0.58:
            color = blend_colors(color, ELEMENTS["human"]["color"], life_strength)
        elif life.get("animal", 0.0) > 0.58:
            color = blend_colors(color, ELEMENTS["animal"]["color"], life_strength)
        else:
            color = blend_colors(color, "#84cc16", life_strength)

    if elevation >= 3.2:
        color = blend_colors(color, "#f8fafc", 0.18)
    elif elevation >= 1.8:
        color = blend_colors(color, "#cbd5e1", 0.10)
    return color


def _world_xy(gx: float, gy: float, size: int) -> tuple[float, float]:
    margin = 0.85
    span = (BASE_GRID_SIZE - 1) + margin * 2
    wx = (gx / (size - 1)) * span - margin
    wy = ((size - 1 - gy) / (size - 1)) * span - margin
    return wx, wy


def _warped_world_xy(gx: float, gy: float, size: int) -> tuple[float, float]:
    wx, wy = _world_xy(gx, gy, size)
    x = gx / max(1, size - 1)
    y = gy / max(1, size - 1)
    warp_x = (
        _value_noise(x, y, 3.0, 101) * 0.55
        + _value_noise(x, y, 7.0, 103) * 0.30
        + _value_noise(x, y, 15.0, 107) * 0.15
        - 0.5
    )
    warp_y = (
        _value_noise(x, y, 3.0, 211) * 0.55
        + _value_noise(x, y, 7.0, 223) * 0.30
        + _value_noise(x, y, 15.0, 227) * 0.15
        - 0.5
    )
    return wx + warp_x * CONTROL_DOMAIN_WARP, wy + warp_y * CONTROL_DOMAIN_WARP


def influence_at(nodes: list[dict], gx: float, gy: float, size: int) -> tuple[dict[str, float], float]:
    wx, wy = _warped_world_xy(gx, gy, size)
    values = empty_element_values()
    density = 0.0

    for node in nodes:
        if node["total"] <= 0:
            continue

        dx = wx - node["x"]
        dy = wy - node["y"]
        dist2 = dx * dx + dy * dy
        sigma = 0.54 if node["kind"] == "base" else 0.42
        influence = math.exp(-dist2 / (2 * sigma * sigma)) * node["total"]
        density += influence
        for key in ELEMENT_ORDER:
            values[key] += influence * node["ratios"][key]

    total = sum(values.values())
    if total <= 0:
        return empty_element_values(), 0.0
    return {key: values[key] / total for key in ELEMENT_ORDER}, density


def influence_layers_at(nodes: list[dict], gx: float, gy: float, size: int) -> dict:
    wx, wy = _warped_world_xy(gx, gy, size)
    terrain_values = empty_values(NATURAL_ELEMENTS)
    life_values = empty_values(LIFE_ELEMENTS)
    terrain_density = 0.0
    life_density = 0.0
    elevation = 0.0

    for node in nodes:
        if node["terrain_total"] <= 0 and node["life_total"] <= 0:
            continue

        dx = wx - node["x"]
        dy = wy - node["y"]
        dist2 = dx * dx + dy * dy

        natural_sigma = 0.64 if node["kind"] == "base" else 0.50
        life_sigma = 0.34 if node["kind"] == "base" else 0.26
        natural_influence = math.exp(-dist2 / (2 * natural_sigma * natural_sigma)) * node["terrain_total"]
        life_influence = math.exp(-dist2 / (2 * life_sigma * life_sigma)) * node["life_total"]

        terrain_density += natural_influence
        life_density += life_influence
        elevation += math.exp(-dist2 / (2 * natural_sigma * natural_sigma)) * node["elevation"]

        for key in NATURAL_ELEMENTS:
            terrain_values[key] += natural_influence * node["terrain_ratios"][key]
        for key in LIFE_ELEMENTS:
            life_values[key] += life_influence * node["life_ratios"][key]

    return {
        "terrain": normalized(terrain_values, NATURAL_ELEMENTS),
        "life": normalized(life_values, LIFE_ELEMENTS),
        "terrain_density": terrain_density,
        "life_density": life_density,
        "density": terrain_density + life_density * LIFE_AREA_WEIGHT,
        "elevation": elevation,
    }


def influence_ratios_at(nodes: list[dict], gx: float, gy: float, size: int) -> dict[str, float]:
    ratios, _density = influence_at(nodes, gx, gy, size)
    return ratios


def _hash_noise(ix: int, iy: int, seed: int = 9176) -> float:
    value = math.sin(ix * 127.1 + iy * 311.7 + seed * 17.17) * 43758.5453
    return value - math.floor(value)


def _smoothstep(value: float) -> float:
    value = max(0.0, min(1.0, value))
    return value * value * (3 - 2 * value)


def _value_noise(x: float, y: float, frequency: float, seed: int) -> float:
    sx = x * frequency
    sy = y * frequency
    x0 = math.floor(sx)
    y0 = math.floor(sy)
    tx = _smoothstep(sx - x0)
    ty = _smoothstep(sy - y0)
    n00 = _hash_noise(x0, y0, seed)
    n10 = _hash_noise(x0 + 1, y0, seed)
    n01 = _hash_noise(x0, y0 + 1, seed)
    n11 = _hash_noise(x0 + 1, y0 + 1, seed)
    nx0 = n00 * (1 - tx) + n10 * tx
    nx1 = n01 * (1 - tx) + n11 * tx
    return nx0 * (1 - ty) + nx1 * ty


def boundary_noise(gx: float, gy: float, size: int) -> float:
    x = gx / max(1, size - 1)
    y = gy / max(1, size - 1)
    coarse = _value_noise(x, y, 5.0, 11)
    medium = _value_noise(x, y, 11.0, 23)
    fine = _value_noise(x, y, 23.0, 37)
    return coarse * 0.55 + medium * 0.30 + fine * 0.15 - 0.5


def generate_control_map(
    nodes: list[dict],
    background_element: str = "earth",
    size: int = CONTROL_SIZE,
    scale: int = CONTROL_SCALE,
) -> Image.Image:
    nodes = [n for n in nodes if n["terrain_total"] > 0 or n["life_total"] > 0]
    output_size = size * scale
    background_color = BACKGROUND_TERRAIN_COLORS.get(background_element, BACKGROUND_TERRAIN_COLORS["earth"])
    image = Image.new("RGB", (output_size, output_size), background_color)
    pixels = image.load()

    for py in range(output_size):
        gy = py / scale
        for px in range(output_size):
            gx = px / scale
            layers = influence_layers_at(nodes, gx, gy, size)
            threshold = EMPTY_INFLUENCE_THRESHOLD + boundary_noise(gx, gy, size) * BOUNDARY_NOISE_STRENGTH
            background_pixel_color = background_color_at(background_element, gx, gy, size)
            if layers["density"] < threshold:
                color = background_pixel_color
            else:
                color = control_color_for_layers(
                    layers["terrain"],
                    layers["life"],
                    layers["terrain_density"],
                    layers["life_density"],
                    layers["elevation"],
                )
                feather = min(1.0, max(0.0, (layers["density"] - threshold) / CONTROL_EDGE_FEATHER))
                if feather < 1.0:
                    color = blend_colors(background_pixel_color, color, feather)

            pixels[px, py] = _hex_to_rgb(color)

    return image


def region_name(node: dict) -> str:
    vertical = "north" if node["y"] > 2.0 else "south" if node["y"] < 1.0 else "center"
    horizontal = "west" if node["x"] < 1.0 else "east" if node["x"] > 2.0 else "center"
    if horizontal == "center" and vertical == "center":
        return "central region"
    if horizontal == "center":
        return vertical
    if vertical == "center":
        return horizontal
    return f"{horizontal}-{vertical}"


def build_regions(nodes: list[dict]) -> list[dict]:
    regions = []

    for node in nodes:
        if node.get("direct_total", 0) <= 0:
            continue

        terrain_ratios = node["direct_terrain_ratios"]
        life_ratios = node["direct_life_ratios"]
        terrain_total = node["direct_terrain_total"]
        life_total = node["direct_life_total"]
        direct_merged = node["direct_ratios"]

        sorted_elements = sorted(
            [{"key": key, "ratio": direct_merged[key]} for key in ELEMENT_ORDER],
            key=lambda item: item["ratio"],
            reverse=True,
        )
        dominant = sorted_elements[0]["key"]
        secondary_item = next(
            (item for item in sorted_elements[1:] if item["ratio"] > 0.01),
            None,
        )
        secondary = secondary_item["key"] if secondary_item else None
        terrain_dominant = (
            max(NATURAL_ELEMENTS, key=lambda key: terrain_ratios[key])
            if terrain_total > 0
            else None
        )
        life_dominant = (
            max(LIFE_ELEMENTS, key=lambda key: life_ratios[key])
            if life_total > 0
            else None
        )
        feature = describe_layered_feature(
            terrain_ratios,
            life_ratios,
            terrain_total,
            life_total,
            node["direct_elevation"],
        )

        regions.append(
            {
                "id": node["id"],
                "region": region_name(node),
                "x": node["x"],
                "y": node["y"],
                "kind": node["kind"],
                "dominant": dominant,
                "dominant_label": ELEMENTS[dominant]["label"],
                "secondary": secondary,
                "secondary_label": ELEMENTS[secondary]["label"] if secondary else "",
                "terrain_dominant": terrain_dominant,
                "terrain_dominant_label": ELEMENTS[terrain_dominant]["label"] if terrain_dominant else "",
                "life_dominant": life_dominant,
                "life_dominant_label": ELEMENTS[life_dominant]["label"] if life_dominant else "",
                "terrain_ratios": {key: round(terrain_ratios[key], 3) for key in NATURAL_ELEMENTS},
                "life_ratios": {key: round(life_ratios[key], 3) for key in LIFE_ELEMENTS},
                "ratios": {key: round(direct_merged[key], 3) for key in ELEMENT_ORDER},
                "elevation": round(node["direct_elevation"], 3),
                "feature": feature,
                "control_color": control_color_for_layers(
                    terrain_ratios,
                    life_ratios,
                    terrain_total,
                    life_total,
                    node["direct_elevation"],
                ),
            }
        )

    return sorted(regions, key=lambda r: (r["y"], r["x"], r["kind"]))


def build_world_description(pieces: dict[str, Optional[str]], nodes: list[dict], regions: list[dict], positions=None) -> str:
    positions = POSITIONS if positions is None else positions
    occupied = [p for p in positions if pieces.get(p["id"])]
    if not occupied:
        return "这个世界还没有被硬件 unit 塑形。请先从 Arduino 读取实体原型状态。"

    counts = {key: sum(1 for p in occupied if pieces[p["id"]] == key) for key in ELEMENT_ORDER}
    natural_counts = {key: counts[key] for key in NATURAL_ELEMENTS}
    life_counts = {key: counts[key] for key in LIFE_ELEMENTS}
    sorted_natural = sorted(natural_counts.items(), key=lambda item: item[1], reverse=True)
    sorted_life = sorted(life_counts.items(), key=lambda item: item[1], reverse=True)

    max_z = max(p["z"] for p in occupied)
    layer_count = len({p["z"] for p in occupied})

    features = []
    for region in regions:
        if region["feature"] not in features:
            features.append(region["feature"])

    important_regions = regions[:4]
    region_text = "；".join(
        [
            f"{r['region']} 的自然基底为 "
            f"{ELEMENTS[r['terrain_dominant']]['label'] if r['terrain_dominant'] else '空/未塑形'}，"
            f"生命覆盖为 {ELEMENTS[r['life_dominant']]['label'] if r['life_dominant'] else '无'}，"
            f"形成 {r['feature']}"
            for r in important_regions
        ]
    )

    if max_z >= 5:
        height_note = "实体结构向高处堆叠，顶部 unit 对地貌影响非常强。"
    elif max_z >= 2:
        height_note = "实体结构形成中等高度，元素影响从底部向上扩散。"
    else:
        height_note = "实体结构主要停留在低层，地貌更接近底面分布。"

    natural_text = "、".join(
        f"{ELEMENTS[key]['label']} {count}" for key, count in sorted_natural if count > 0
    ) or "无"
    life_text = "、".join(
        f"{ELEMENTS[key]['label']} {count}" for key, count in sorted_life if count > 0
    ) or "无"
    if counts["human"] > 0:
        life_layer_text = "动物和人作为高阶生命元素，只在自然基底上形成较小范围的生态痕迹或文明改造"
    else:
        life_layer_text = "动物作为高阶生命元素，只在自然基底上形成较小范围的生态痕迹"

    return (
        f"这个世界由当前布局中的 {len(occupied)} 个 unit 生成，覆盖 {layer_count} 个高度层，最高达到 Z={max_z}。"
        f"水、火、土先生成自然地形基底：{natural_text}。"
        f"{life_layer_text}：{life_text}。"
        f"{height_note}"
        f"主要区域关系为：{region_text}。"
        f"综合地貌特征包括：{'、'.join(features[:4])}。"
    )



def build_image_prompt(
    pieces: dict[str, Optional[str]],
    regions: list[dict],
    background_element: str,
    terrain_grammar: dict | None = None,
    positions=None,
) -> str:
    positions = POSITIONS if positions is None else positions
    occupied = [p for p in positions if pieces.get(p["id"])]
    present_elements = {pieces[p["id"]] for p in occupied if pieces.get(p["id"])}
    has_human = "human" in present_elements

    region_lines = []
    for region in regions:
        terrain_text = (
            f"natural terrain base {region['terrain_dominant']} ({ELEMENTS[region['terrain_dominant']]['terrain']})"
            if region.get("terrain_dominant")
            else "no broad natural terrain base"
        )
        life_text = (
            f"life overlay {region['life_dominant']} ({ELEMENTS[region['life_dominant']]['terrain']})"
            if region.get("life_dominant")
            else "no life overlay"
        )
        active_terrain_ratios = {
            key: value
            for key, value in region["terrain_ratios"].items()
            if value > 0.01
        }
        active_life_ratios = {
            key: value
            for key, value in region["life_ratios"].items()
            if value > 0.01
        }
        region_lines.append(
            f"- {region['region']}: {terrain_text}; {life_text}; stack elevation {region['elevation']}; "
            f"feature {region['feature']}; control color {region['control_color']}; "
            f"natural terrain ratios {active_terrain_ratios}; life overlay ratios {active_life_ratios}."
        )

    if not region_lines:
        region_lines.append("- Empty world, no placed units.")

    background_description = background_terrain_description(background_element)
    background_color = BACKGROUND_TERRAIN_COLORS.get(background_element, BACKGROUND_TERRAIN_COLORS["earth"])

    legend_lines = [
        f"- muted background color {background_color} means low-detail base terrain: {background_description}",
        "- brown means earth as natural terrain base: soil, hills, rocky ground, stone, mountain ridges",
        "- blue means water as natural terrain base: lakes, rivers, basins, wetlands",
        "- red or orange means fire as natural terrain base: lava, scorched land, volcanic cracks, heat",
        "- green is a small animal life overlay on top of the natural base: tracks, dens, nests, trails, grazing pockets",
        "- teal means water terrain base with animal life overlay: wetland habitat, watering holes, marsh life",
        "- olive means earth terrain base with animal life overlay: wild grassland, dens, burrows, forests, grazing pockets",
        "- dark red means fire terrain base with animal life overlay: burned wilderness, ash forest, dangerous lairs",
        "- gray means water + fire interaction: steam rocks, obsidian, cooled lava, rocky shore",
        "- pale highlights mean higher stacked terrain: ridges, highlands, cliffs, peaks, raised plateaus",
    ]
    if has_human:
        legend_lines.extend(
            [
                "- yellow means a small human life overlay on top of the natural base: settlements, paths, camps, workshops, farms, ruins",
                "- cyan means water terrain base with limited human modification: riverside settlement, docks, canals, wells, wet streets",
                "- ochre means earth terrain base with limited human modification: stone settlement, roads, quarries, farms, walls",
                "- orange means fire terrain base with limited human modification: forge town, furnaces, scorched workshops, fire-lit streets",
            ]
        )

    detected_type_text = ", ".join(sorted(present_elements)) if present_elements else "none"
    no_human_rule = ""
    if not has_human:
        no_human_rule = (
            "\nConstruction rule:\n"
            "- Do not include artificial, inhabited, engineered, or constructed features of any kind.\n"
            "- The map must read as natural terrain and animal habitat only.\n\n"
        )
        empty_fill_rule = (
            "- Keep low-influence background regions mostly plain and low-detail, with no creature marks, dense texture, roads, or structures.\n"
        )
    else:
        empty_fill_rule = (
            "- Keep low-influence background regions mostly plain and low-detail, with no dense forests, roads, structures, creatures, "
            "decorative symbols, or active settlement detail unless a placed unit influences that area.\n"
        )
    if has_human:
        life_hierarchy_rule = (
            "- Animal and human are higher-order life elements. They do not create broad terrain by themselves; they only add smaller ecological traces or civilization modifications on top of the natural foundation.\n"
            "- Animal and human areas must occupy less area than nearby natural terrain elements, even when animal or human units are present.\n"
        )
    else:
        life_hierarchy_rule = (
            "- Animal is a higher-order life element. It does not create broad terrain by itself; it only adds smaller ecological traces on top of the natural foundation.\n"
            "- Animal areas must occupy less area than nearby natural terrain elements, even when animal units are present.\n"
        )

    style_target = (
        "Render this as a bright low-poly 2.5D illustrated map with clean faceted terrain planes: "
        "simple geometric landforms, sparse symbolic natural features, vivid olive greens, golden ochres, sandy browns, bright lake blues, and turquoise water, "
        "clear color separation, crisp local contrast, "
        "orthographic/isometric map feeling, no labels, no UI panels, no text. The image should feel like a designed low-poly infographic map, not a realistic landscape and not a colored heatmap. "
        "It should preserve the control map layout while replacing flat control colors with simple low-poly terrain surfaces and soft transitions."
    )
    if has_human:
        style_target = (
            "Render this as a bright low-poly 2.5D illustrated settlement-and-terrain map with clean faceted terrain planes: "
            "simple geometric landforms, sparse symbolic settlement traces, block-like buildings, vivid olive greens, golden ochres, sandy browns, bright lake blues, and turquoise water, "
            "clear color separation, crisp local contrast, "
            "orthographic/isometric map feeling, no labels, no UI panels, no text. The image should feel like a designed low-poly infographic map, not a realistic landscape and not a colored heatmap. "
            "It should preserve the control map layout while replacing flat control colors with simple low-poly terrain surfaces and soft transitions."
        )

    grammar_section = build_terrain_grammar_prompt_section(terrain_grammar)

    prompt = (
        "Use the attached control map image as the spatial layout reference. "
        "Preserve the approximate position, scale, and transitions of every colored high-influence biome region. "
        "Do not draw visible grid borders. Do not make a chart. Create a natural top-down map.\n\n"
        + "Control map legend:\n"
        + "\n".join(legend_lines)
        + "\n\n"
        + "World source data:\n"
        + "- The source is a captured WorldBlocks arrangement, from manual placement or normalized physical input.\n"
        + "- Horizontal positions are continuously mapped to the reference terrain domain, without snapping.\n"
        + "- Every hardware slot can contain a vertical stack of units. Stack height primarily controls terrain elevation: higher stacks create ridges, highlands, cliffs, peaks, or raised plateaus.\n"
        + "- Offset L0.5 slots blend into the surrounding 4x4 base cells.\n"
        + f"- Empty hardware slots become the broad low-detail background terrain: {background_description}.\n"
        + "- Placed units create richer islands, districts, habitats, terrain patches, or feature clusters on top of that background.\n"
        + "- If the background is earth-dominant, do not make the whole map an island in the sea; water units become local lakes, ponds, wetlands, canals, or rivers.\n"
        + "- If the background is water-dominant, placed unit regions may become islands or shore features.\n"
        + "- The generated world should not have a hard black void or cutout boundary around placed-unit influence.\n"
        + "- Earth, water, and fire are base natural elements. They generate the broad terrain foundation first.\n"
        + life_hierarchy_rule
        + f"- Detected unit types in this board state: {detected_type_text}.\n"
        + f"- Current detected unit count: {len(occupied)}.\n\n"
        + "Control-map translation rule:\n"
        + "- The attached control map is a semantic mask, not final artwork. Do not copy raw blue, brown, red, green, teal, or ochre blobs directly into the generated image.\n"
        + "- Translate control-map colors into finished low-poly terrain materials, shorelines, slopes, paths, structures, vegetation, water, or landforms.\n"
        + "- Remove visible seams between control regions. No flat pasted color patches, no hard mask borders, no unprocessed dark blue or dark brown areas.\n"
        + "- If water reaches a region edge, continue it logically into a lake, pond, river, wetland, delta, culvert, waterfall, or off-map mouth. Do not let rivers or canals simply disappear at a boundary.\n\n"
        + "Background-region rule:\n"
        + f"- Low-influence areas shown as the muted background color should become {background_description}.\n"
        + empty_fill_rule
        + "- Keep background regions visually quiet, broad, and barren compared with placed-unit regions, but not perfectly flat: add subtle low-poly facets, gentle Perlin-noise terrain undulation, and small tonal patches.\n"
        + "- Background detail must stay low complexity; placed-unit regions must still be clearly richer and more information-dense.\n"
        + "- Avoid hard clipped island edges, black void edges, sticker-like outlines, and pixel stair-steps. Blend placed-unit regions softly into the base terrain.\n\n"
        + no_human_rule
        + grammar_section
        + "Regional biome instructions:\n"
        + "\n".join(region_lines)
        + "\n\n"
        + "Style target:\n"
        + style_target
    )
    return prompt



def build_terrain_grammar_prompt_section(grammar: dict | None) -> str:
    if not grammar:
        return ""

    def lines_for(label: str, values: list[str]) -> str:
        if not values:
            return f"- {label}: none.\n"
        return f"- {label}: " + "; ".join(values[:8]) + ".\n"

    failed_rule = ""
    if grammar.get("failed_habitat"):
        kind = grammar.get("failed_habitat_kind", "")
        if kind == "human_only":
            failed_rule = (
                "Failed habitat enforcement:\n"
                "- This layout contains only human life-overlay units and no earth, water, or fire terrain primitives.\n"
                "- Use a dark / black / charcoal barren background.\n"
                "- The main visual outcome must be scattered tombstones / grave markers.\n"
                "- Optional details: a few abandoned settlement traces, broken path fragments, or collapsed camp traces.\n"
                "- Do not show a normal village, farm, active civilization, or living humans.\n"
                "- Keep the tone map-like and poetic, not horror or gore.\n\n"
            )
        elif kind == "animal_only":
            failed_rule = (
                "Failed habitat enforcement:\n"
                "- This layout contains only animal life-overlay units and no earth, water, or fire terrain primitives.\n"
                "- Use a dark / black / charcoal barren background.\n"
                "- The main visual outcome must be animal bones / skeletal remains.\n"
                "- Optional details: a few empty nests or broken tracks.\n"
                "- Do not show living animals or a healthy habitat.\n"
                "- Keep the tone map-like and poetic, not horror or gore.\n\n"
            )
        else:
            failed_rule = (
                "Failed habitat enforcement:\n"
                "- This layout contains only human and animal life-overlay units and no earth, water, or fire terrain primitives.\n"
                "- Use a dark / black / charcoal barren background.\n"
                "- The main visual outcome must include both tombstones / grave markers and animal bones / skeletal remains.\n"
                "- Optional details: broken fences, abandoned camp traces, and empty tracks.\n"
                "- Do not show a normal settlement, living humans, or living animals.\n"
                "- Keep the tone map-like and poetic, not horror or gore.\n\n"
            )

    return (
        "Layered Terrain Grammar:\n"
        "- The control map defines spatial placement and influence. The layered terrain grammar defines how stacked, adjacent, and sequential elements should be interpreted semantically.\n"
        f"- Base world: {grammar.get('base_world', 'unknown')}.\n"
        f"- Grammar summary: {grammar.get('prompt_summary', '')}\n"
        + lines_for("Terrain features", grammar.get("terrain_features", []))
        + lines_for("Horizontal features", grammar.get("horizontal_features", []))
        + lines_for("Vertical features", grammar.get("vertical_features", []))
        + lines_for("Mixed stack features", grammar.get("mixed_features", []))
        + lines_for("Human outcomes", grammar.get("human_outcomes", []))
        + lines_for("Animal outcomes", grammar.get("animal_outcomes", []))
        + lines_for("Animal species", grammar.get("animal_species", []))
        + f"- Failed habitat: {grammar.get('failed_habitat', False)}.\n\n"
        + failed_rule
    )


def build_prompt_package(pieces: dict[str, Optional[str]], positions=None) -> dict:
    positions = POSITIONS if positions is None else positions
    nodes = build_world_nodes(pieces, positions)
    regions = build_regions(nodes)
    terrain_grammar = interpret_terrain_grammar(pieces, positions)
    background_element = "failed_habitat" if terrain_grammar.get("failed_habitat") else dominant_background_element(pieces, positions)
    control_image = generate_control_map(nodes, background_element=background_element)
    prompt = build_image_prompt(pieces, regions, background_element, terrain_grammar, positions)
    description = build_world_description(pieces, nodes, regions, positions)

    return {
        "nodes": nodes,
        "regions": regions,
        "terrain_grammar": terrain_grammar,
        "control_image": control_image,
        "prompt": prompt,
        "description": description,
        "background_element": background_element,
        "background_description": background_terrain_description(background_element),
    }



def export_layout_json(
    pieces: dict[str, Optional[str]],
    package: dict | None = None,
    source_board: dict[int, list[str]] | None = None,
    unit_element_map: dict[str, str] | None = None,
) -> dict:
    occupied = []
    for pos in POSITIONS:
        element = pieces.get(pos["id"])
        if not element:
            continue
        occupied.append(
            {
                "id": pos["id"],
                "slot": pos["slot"],
                "hardware_layer": pos["hardware_layer"],
                "kind": pos["kind"],
                "stack_index": pos["stack_index"],
                "coordinate": [pos["x"], pos["y"], pos["z"]],
                "element": element,
                "element_label": ELEMENTS[element]["label"],
                "supported": has_physical_support(pos, pieces),
            }
        )

    return {
        "source": "arduino_hardware_serial",
        "hardware_slots": TOTAL_HARDWARE_SLOTS,
        "max_stack": MAX_STACK,
        "occupied_count": len(occupied),
        "height_weight_formula": "1.0 + z * 0.75",
        "unit_element_map": unit_element_map or DEFAULT_UNIT_ELEMENT_MAP,
        "raw_hardware_board": {str(k): v for k, v in (source_board or {}).items()},
        "pieces": occupied,
        "regions": package["regions"] if package else [],
        "terrain_grammar": package.get("terrain_grammar", {}) if package else {},
        "world_description": package["description"] if package else "",
    }
