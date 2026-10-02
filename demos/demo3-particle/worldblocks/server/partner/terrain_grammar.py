from __future__ import annotations

from collections import Counter, defaultdict, deque
from typing import Optional


NATURAL_ELEMENTS = {"earth", "water", "fire"}
LIFE_ELEMENTS = {"human", "animal"}

BASE_WORLD_RULES = {
    "earth": (
        "land",
        "Earth dominates the bottom layer, so the base world is land. Small water becomes lakes, ponds, rivers, or wetlands. Small fire becomes scorched land, volcanic cracks, or burnt areas.",
    ),
    "water": (
        "water",
        "Water dominates the bottom layer, so the base world is sea, lake, or large water. Small earth becomes islands, rocks, or shorelines. Small fire becomes steam vents, hot springs, underwater volcanic traces, or volcanic islands.",
    ),
    "fire": (
        "fire",
        "Fire dominates the bottom layer, so the base world is volcanic wasteland, lava field, scorched plain, or ash land. Small earth becomes black rock or volcanic highland. Small water becomes steam pools, hot springs, cooled lava edges, or boiling ponds.",
    ),
}

VERTICAL_REPEAT_FEATURES = {
    "earth": {
        2: "hill, ridge, highland, or plateau",
        3: "mountain, mountain range, ridge, highland, or plateau",
    },
    "water": {
        2: "deeper water, deep lake, strong water source, or larger water body",
        3: "deep lake, strong water source, larger water body, or deep basin",
    },
    "fire": {
        2: "stronger fire, lava pool, volcanic vent, or disaster core",
        3: "eruption centre, lava pool, volcanic vent, or disaster core",
    },
}

STACK_PATTERNS = [
    (("water", "earth", "water"), "island waterfall, spring, cliff stream, or highland water source"),
    (("earth", "earth", "water"), "mountain lake, highland spring, or waterfall source"),
    (("earth", "earth", "fire"), "volcano, mountain crater, or volcanic peak"),
    (("earth", "water", "fire"), "volcanic lake, hot spring valley, steam canyon, obsidian wetland, or volcanic island depending on the base world"),
    (("water", "earth"), "island, rock, reef, or raised wetland"),
    (("earth", "water"), "lake, spring, river source, or wetland"),
    (("earth", "fire"), "scorched land, burned soil, volcanic hill, or hot rock"),
    (("fire", "earth"), "cooled lava, black rock, obsidian, or volcanic crust"),
    (("water", "fire"), "steam, hot spring, boiling water, cooled lava edge, or obsidian shore"),
    (("fire", "water"), "steam explosion, cooled lava, black stone, or geyser"),
]

SPECIES_BY_HABITAT = {
    "plains": ["deer", "rabbits", "wild horses", "antelopes", "foxes"],
    "grassland": ["deer", "rabbits", "wild horses", "antelopes", "foxes"],
    "forest": ["deer", "foxes", "bears", "owls", "squirrels"],
    "hills": ["goats", "foxes", "rabbits", "eagles"],
    "mountains": ["mountain goats", "eagles", "wolves", "vultures"],
    "cliffs": ["mountain goats", "eagles", "wolves", "vultures"],
    "lake": ["fish", "ducks", "frogs", "otters", "water birds"],
    "river": ["fish", "ducks", "frogs", "otters", "water birds"],
    "wetland": ["cranes", "frogs", "snakes", "otters", "insects"],
    "marsh": ["cranes", "frogs", "snakes", "otters", "insects"],
    "sea": ["fish", "seabirds", "crabs", "turtles", "seals"],
    "coast": ["fish", "seabirds", "crabs", "turtles", "seals"],
    "island": ["seabirds", "turtles", "lizards", "small mammals"],
    "waterfall": ["fish", "birds", "mountain animals"],
    "mountain lake": ["fish", "birds", "mountain animals"],
    "hot spring": ["monkeys", "birds", "amphibians"],
    "volcanic edge": ["sparse lizards", "vultures", "crows"],
    "cooled lava": ["sparse lizards", "vultures", "crows"],
}

LETHAL_TERMS = (
    "lava",
    "eruption",
    "volcanic crater",
    "disaster core",
    "central scorched wasteland",
    "deep water without land",
    "steam cracks",
)


def interpret_terrain_grammar(pieces: dict[str, Optional[str]], positions: list[dict]) -> dict:
    occupied = [(pos, pieces.get(pos["id"])) for pos in positions if pieces.get(pos["id"])]
    natural_occupied = [(pos, element) for pos, element in occupied if element in NATURAL_ELEMENTS]
    life_occupied = [(pos, element) for pos, element in occupied if element in LIFE_ELEMENTS]

    if not natural_occupied and life_occupied:
        return _failed_habitat_result(life_occupied)

    if not occupied:
        return _empty_result()

    bottom_counts = Counter(
        element
        for pos, element in natural_occupied
        if pos.get("stack_index") == 0
    )
    if bottom_counts:
        base_element = _dominant_from_counter(bottom_counts)
    elif natural_occupied:
        natural_counts = Counter(element for _pos, element in natural_occupied)
        base_element = _dominant_from_counter(natural_counts)
    else:
        base_element = "earth"

    base_world, base_description = BASE_WORLD_RULES[base_element]
    stacks = _build_stacks(occupied)
    terrain_features = _terrain_features(base_element, natural_occupied)
    horizontal_features = _horizontal_features(natural_occupied)
    vertical_features = _vertical_features(stacks)
    mixed_features = _mixed_features(stacks)
    human_outcomes = _life_outcomes("human", life_occupied, stacks, base_world)
    animal_outcomes = _life_outcomes("animal", life_occupied, stacks, base_world)
    animal_species = _animal_species(animal_outcomes)

    summary_parts = [
        base_description,
        _summary_line("Terrain features", terrain_features),
        _summary_line("Horizontal expansion", horizontal_features),
        _summary_line("Vertical stacking", vertical_features),
        _summary_line("Mixed stacks", mixed_features),
        _summary_line("Human outcomes", human_outcomes),
        _summary_line("Animal outcomes", animal_outcomes),
        _summary_line("Animal species", animal_species),
    ]

    return {
        "base_world": base_world,
        "base_element": base_element,
        "base_description": base_description,
        "terrain_features": terrain_features,
        "vertical_features": vertical_features,
        "horizontal_features": horizontal_features,
        "mixed_features": mixed_features,
        "human_outcomes": human_outcomes,
        "animal_outcomes": animal_outcomes,
        "animal_species": animal_species,
        "failed_habitat": False,
        "prompt_summary": " ".join(part for part in summary_parts if part),
    }


def _empty_result() -> dict:
    return {
        "base_world": "empty",
        "base_element": None,
        "base_description": "No units are present yet, so the grammar has no terrain to interpret.",
        "terrain_features": [],
        "vertical_features": [],
        "horizontal_features": [],
        "mixed_features": [],
        "human_outcomes": [],
        "animal_outcomes": [],
        "animal_species": [],
        "failed_habitat": False,
        "prompt_summary": "No units are present yet; keep the map quiet and unshaped.",
    }


def _failed_habitat_result(life_occupied: list[tuple[dict, str]]) -> dict:
    life_counts = Counter(element for _pos, element in life_occupied)
    human_present = life_counts.get("human", 0) > 0
    animal_present = life_counts.get("animal", 0) > 0

    if human_present and animal_present:
        failed_kind = "human_animal"
        failed_text = (
            "dark / black / charcoal barren background with both tombstones / grave markers and animal bones / skeletal remains as the main visual outcome; "
            "optional broken fences, abandoned camp traces, and empty tracks; no normal settlement, no living humans, and no living animals"
        )
        human_outcomes = [
            "tombstones / grave markers on a dark charcoal failed-habitat ground; optional abandoned camp traces, broken fences, and no normal settlement or living humans"
        ]
        animal_outcomes = [
            "animal bones / skeletal remains on a dark charcoal failed-habitat ground; optional empty tracks, broken fences, and no living animals or healthy habitat"
        ]
    elif human_present:
        failed_kind = "human_only"
        failed_text = (
            "dark / black / charcoal barren background with scattered tombstones / grave markers as the main visual outcome; "
            "optional abandoned settlement traces, broken path fragments, or collapsed camp traces; no normal village, no farms, no active civilization, and no living humans"
        )
        human_outcomes = [
            "scattered tombstones / grave markers on a dark charcoal failed-habitat ground; optional abandoned settlement traces, broken path fragments, collapsed camp traces, and no living humans"
        ]
        animal_outcomes = []
    else:
        failed_kind = "animal_only"
        failed_text = (
            "dark / black / charcoal barren background with animal bones / skeletal remains as the main visual outcome; "
            "optional empty nests or broken tracks; no living animals and no healthy habitat"
        )
        human_outcomes = []
        animal_outcomes = [
            "animal bones / skeletal remains on a dark charcoal failed-habitat ground; optional empty nests or broken tracks, and no living animals or healthy habitat"
        ]

    base_description = (
        "No earth, water, or fire units are present. Human and animal are life overlays and cannot create terrain by themselves, "
        "so this should become a dark / black / charcoal barren failed-habitat background."
    )
    return {
        "base_world": "failed_habitat",
        "base_element": None,
        "base_description": base_description,
        "terrain_features": ["dark / black / charcoal barren failed-habitat background"],
        "vertical_features": [],
        "horizontal_features": [],
        "mixed_features": [],
        "human_outcomes": human_outcomes,
        "animal_outcomes": animal_outcomes,
        "animal_species": [],
        "failed_habitat": True,
        "failed_habitat_kind": failed_kind,
        "prompt_summary": f"{base_description} Render {failed_text}. Keep the tone poetic and map-like, not horror and not gore.",
    }


def _dominant_from_counter(counter: Counter) -> str:
    order = {"earth": 0, "water": 1, "fire": 2}
    return max(counter, key=lambda key: (counter[key], -order.get(key, 99)))


def _build_stacks(occupied: list[tuple[dict, str]]) -> dict[int, list[tuple[dict, str]]]:
    stacks: dict[int, list[tuple[dict, str]]] = defaultdict(list)
    for pos, element in occupied:
        stacks[int(pos["slot"])].append((pos, element))
    for slot in list(stacks):
        stacks[slot].sort(key=lambda item: item[0].get("stack_index", 0))
    return dict(stacks)


def _terrain_features(base_element: str, natural_occupied: list[tuple[dict, str]]) -> list[str]:
    counts = Counter(element for _pos, element in natural_occupied)
    features = []
    for element, count in sorted(counts.items()):
        if element == base_element:
            continue
        if base_element == "earth" and element == "water":
            features.append(f"{count} water unit(s) read as lakes, ponds, rivers, or wetlands inside land")
        elif base_element == "earth" and element == "fire":
            features.append(f"{count} fire unit(s) read as scorched land, volcanic cracks, or burnt areas inside land")
        elif base_element == "water" and element == "earth":
            features.append(f"{count} earth unit(s) read as islands, rocks, reefs, or shorelines inside water")
        elif base_element == "water" and element == "fire":
            features.append(f"{count} fire unit(s) read as steam vents, hot springs, underwater volcanic traces, or volcanic islands")
        elif base_element == "fire" and element == "earth":
            features.append(f"{count} earth unit(s) read as black rock, volcanic crust, or volcanic highland")
        elif base_element == "fire" and element == "water":
            features.append(f"{count} water unit(s) read as steam pools, hot springs, cooled lava edges, or boiling ponds")
    return features or [f"{base_element} forms the main terrain foundation"]


def _horizontal_features(natural_occupied: list[tuple[dict, str]]) -> list[str]:
    features = []
    by_element: dict[str, list[dict]] = defaultdict(list)
    for pos, element in natural_occupied:
        by_element[element].append(pos)

    for element, element_positions in by_element.items():
        components = _connected_components(element_positions)
        for component in components:
            if len(component) < 2:
                continue
            max_height = max(pos.get("stack_index", 0) for pos in component) + 1
            if element == "water":
                features.append(f"{len(component)} adjacent water unit(s) expand into a larger lake, water system, river network, sea bay, or wetland")
            elif element == "earth":
                if max_height >= 3:
                    form = "highland, mountain range, or broad ridge"
                else:
                    form = "broader land, plains, hills, or highland"
                features.append(f"{len(component)} adjacent earth unit(s) expand into {form}")
            elif element == "fire":
                features.append(f"{len(component)} adjacent fire unit(s) expand into larger scorched land, lava belt, volcanic field, or disaster zone")
    return features


def _connected_components(positions: list[dict]) -> list[list[dict]]:
    components = []
    remaining = set(range(len(positions)))
    while remaining:
        start = remaining.pop()
        queue = deque([start])
        component = [positions[start]]
        while queue:
            current = queue.popleft()
            for candidate in list(remaining):
                if _are_adjacent(positions[current], positions[candidate]):
                    remaining.remove(candidate)
                    queue.append(candidate)
                    component.append(positions[candidate])
        components.append(component)
    return components


def _are_adjacent(a: dict, b: dict) -> bool:
    if a.get("slot") == b.get("slot"):
        return False
    dx = float(a.get("x", 0.0)) - float(b.get("x", 0.0))
    dy = float(a.get("y", 0.0)) - float(b.get("y", 0.0))
    return (dx * dx + dy * dy) ** 0.5 <= 1.05


def _vertical_features(stacks: dict[int, list[tuple[dict, str]]]) -> list[str]:
    features = []
    for slot, stack in stacks.items():
        sequence = [element for _pos, element in stack if element in NATURAL_ELEMENTS]
        if not sequence:
            continue
        run_element = sequence[0]
        run_count = 1
        for element in sequence[1:] + [None]:
            if element == run_element:
                run_count += 1
                continue
            if run_count >= 2:
                threshold = 3 if run_count >= 3 else 2
                features.append(f"slot {slot}: {run_element} + {run_element} vertically becomes {VERTICAL_REPEAT_FEATURES[run_element][threshold]}")
            run_element = element
            run_count = 1
    return features


def _mixed_features(stacks: dict[int, list[tuple[dict, str]]]) -> list[str]:
    features = []
    for slot, stack in stacks.items():
        sequence = tuple(element for _pos, element in stack if element in NATURAL_ELEMENTS)
        if len(sequence) < 2:
            continue
        for pattern, feature in STACK_PATTERNS:
            if _contains_ordered_pattern(sequence, pattern):
                features.append(f"slot {slot}: {' + '.join(pattern)} becomes {feature}")
                break
    return features


def _contains_ordered_pattern(sequence: tuple[str, ...], pattern: tuple[str, ...]) -> bool:
    if len(pattern) > len(sequence):
        return False
    for start in range(0, len(sequence) - len(pattern) + 1):
        if sequence[start : start + len(pattern)] == pattern:
            return True
    return False


def _life_outcomes(
    life_element: str,
    life_occupied: list[tuple[dict, str]],
    stacks: dict[int, list[tuple[dict, str]]],
    base_world: str,
) -> list[str]:
    outcomes = []
    for pos, element in life_occupied:
        if element != life_element:
            continue
        terrain = _local_terrain_for_life(pos, stacks, base_world)
        if life_element == "human":
            if _is_lethal_terrain(terrain):
                outcomes.append(f"{pos['compact']}: lethal terrain ({terrain}); show abandoned camp, tombstones, ruins, broken road, collapsed bridge, burned huts, failed settlement, or death traces")
            else:
                outcomes.append(f"{pos['compact']}: habitable edge ({terrain}); show sparse settlement, paths, bridge, camp, farm edge, port, or hot-spring shelter")
        else:
            if _is_lethal_terrain(terrain):
                outcomes.append(f"{pos['compact']}: lethal terrain ({terrain}); show bones, abandoned nests, broken tracks, migration traces, fleeing animals, or dead habitat")
            else:
                outcomes.append(f"{pos['compact']}: suitable habitat ({terrain}); show sparse symbolic wildlife and habitat traces")
    return outcomes


def _local_terrain_for_life(pos: dict, stacks: dict[int, list[tuple[dict, str]]], base_world: str) -> str:
    stack = stacks.get(int(pos["slot"]), [])
    natural_sequence = [element for _stack_pos, element in stack if element in NATURAL_ELEMENTS]
    mixed = _feature_for_sequence(tuple(natural_sequence))
    if mixed:
        return mixed

    natural_counts = Counter(natural_sequence)
    if natural_counts:
        dominant = _dominant_from_counter(natural_counts)
        height = len(natural_sequence)
        if dominant == "earth":
            return "mountains / cliffs" if height >= 3 else "plains, grassland, hills, forests, or mountain foot"
        if dominant == "water":
            return "deep water without land" if base_world == "water" and "earth" not in natural_counts else "lake, river, wetland, or coast"
        if dominant == "fire":
            return "lava field, volcanic crater, central scorched wasteland, or steam cracks" if height >= 2 else "volcanic edge, cooled lava, or scorched ground"

    if base_world == "water":
        return "deep water without land"
    if base_world == "fire":
        return "central scorched wasteland"
    return "plains, grassland, hills, or riverbank edge"


def _feature_for_sequence(sequence: tuple[str, ...]) -> str | None:
    for pattern, feature in STACK_PATTERNS:
        if _contains_ordered_pattern(sequence, pattern):
            return feature
    return None


def _is_lethal_terrain(terrain: str) -> bool:
    text = terrain.lower()
    if "volcanic edge" in text or "hot spring" in text or "cooled lava" in text:
        return False
    return any(term in text for term in LETHAL_TERMS)


def _animal_species(animal_outcomes: list[str]) -> list[str]:
    species = []
    seen = set()
    for outcome in animal_outcomes:
        text = outcome.lower()
        if "lethal terrain" in text:
            continue
        for habitat, habitat_species in SPECIES_BY_HABITAT.items():
            if habitat in text:
                for animal in habitat_species:
                    if animal not in seen:
                        seen.add(animal)
                        species.append(animal)
    return species[:12]


def _summary_line(label: str, values: list[str]) -> str:
    if not values:
        return ""
    return f"{label}: " + "; ".join(values[:6]) + "."
