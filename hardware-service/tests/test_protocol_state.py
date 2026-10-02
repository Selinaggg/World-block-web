from __future__ import annotations

import unittest

from backend.worldblocks.protocol import parse_protocol_line
from backend.worldblocks.state import BoardState, DetectionError
from backend.worldblocks.topology import TopologyAssembler, TopologyError


def build_topology(rows: int = 2, cols: int = 4, module_count: int = 1):
    assembler = TopologyAssembler()
    topology_id = "boot-1:topology-1"
    assembler.begin(
        {
            "kind": "topology",
            "topology_id": topology_id,
            "boot_id": "boot-1",
            "module_count": module_count,
            "max_stack": 7,
            "tracking_capacity": 16,
            "adc_bits": 10,
            "layers": [
                {"id": "L0", "rows": rows, "cols": cols},
                {"id": "L0.5", "rows": rows, "cols": cols},
            ],
        }
    )
    index = 0
    for layer in ("L0", "L0.5"):
        for row in range(rows):
            for col in range(cols):
                assembler.add_channel(
                    {
                        "topology_id": topology_id,
                        "column_id": f"{layer}-r{row}-c{col}",
                        "layer": layer,
                        "row": row,
                        "col": col,
                        "module": row // 2,
                        "mux": row // 2,
                        "channel": index % 16,
                    }
                )
                index += 1
    return assembler.finish({"topology_id": topology_id})


class ProtocolTests(unittest.TestCase):
    def test_v2_message(self) -> None:
        message = parse_protocol_line(
            'WB_JSON:{"protocol":2,"kind":"hello","boot_id":"boot-1"}'
        )
        self.assertIsNotNone(message)
        self.assertEqual(message.kind, "hello")
        self.assertEqual(message.protocol, 2)
        self.assertFalse(message.legacy)

    def test_legacy_message(self) -> None:
        message = parse_protocol_line(
            'EVENT_JSON:{"event":"add","slot":0,"unit":"earth"}'
        )
        self.assertIsNotNone(message)
        self.assertEqual(message.kind, "legacy_event")
        self.assertTrue(message.legacy)

    def test_diagnostic_and_broken_lines_are_ignored(self) -> None:
        self.assertIsNone(parse_protocol_line("Ready."))
        self.assertIsNone(parse_protocol_line("WB_JSON:{broken"))


class TopologyTests(unittest.TestCase):
    def test_one_module_has_two_4x2_layers(self) -> None:
        topology = build_topology()
        self.assertEqual(topology.module_count, 1)
        self.assertEqual(len(topology.columns), 16)
        self.assertEqual({(layer.rows, layer.cols) for layer in topology.layers}, {(2, 4)})
        self.assertEqual({column.port for column in topology.columns}, {"A0"})

    def test_two_modules_have_two_4x4_layers(self) -> None:
        topology = build_topology(rows=4, module_count=2)
        self.assertEqual(topology.module_count, 2)
        self.assertEqual(len(topology.columns), 32)
        self.assertEqual({(layer.rows, layer.cols) for layer in topology.layers}, {(4, 4)})

    def test_four_modules_have_two_8x4_layers(self) -> None:
        topology = build_topology(rows=8, module_count=4)
        self.assertEqual(topology.module_count, 4)
        self.assertEqual(len(topology.columns), 64)
        self.assertEqual(
            {(layer.rows, layer.cols) for layer in topology.layers},
            {(8, 4)},
        )
        self.assertEqual({column.module for column in topology.columns}, {0, 1, 2, 3})

    def test_missing_channel_is_rejected(self) -> None:
        assembler = TopologyAssembler()
        assembler.begin(
            {
                "topology_id": "t",
                "boot_id": "b",
                "module_count": 1,
                "max_stack": 7,
                "adc_bits": 10,
                "layers": [{"id": "L0", "rows": 1, "cols": 2}],
            }
        )
        assembler.add_channel(
            {
                "topology_id": "t",
                "column_id": "L0-r0-c0",
                "layer": "L0",
                "row": 0,
                "col": 0,
            }
        )
        with self.assertRaises(TopologyError):
            assembler.finish({"topology_id": "t"})


class BoardStateTests(unittest.TestCase):
    def test_ordered_push_pop_and_duplicate(self) -> None:
        state = BoardState(build_topology())
        add_earth = {
            "detection_id": "boot-1:1",
            "seq": 1,
            "event": "add",
            "column_id": "L0-r0-c0",
            "unit": "earth",
        }
        self.assertTrue(state.apply_detection(add_earth))
        self.assertFalse(state.apply_detection(add_earth))
        state.apply_detection(
            {
                "detection_id": "boot-1:2",
                "seq": 2,
                "event": "add",
                "column_id": "L0-r0-c0",
                "unit": "water",
            }
        )
        state.apply_detection(
            {
                "detection_id": "boot-1:3",
                "seq": 3,
                "event": "remove",
                "column_id": "L0-r0-c0",
                "unit": "water",
            }
        )
        self.assertEqual(state.snapshot(), {"L0-r0-c0": ["earth"]})

    def test_wrong_top_type_is_rejected(self) -> None:
        state = BoardState(build_topology())
        state.apply_detection(
            {
                "detection_id": "boot-1:1",
                "seq": 1,
                "event": "add",
                "column_id": "L0-r0-c0",
                "unit": "earth",
            }
        )
        with self.assertRaises(DetectionError):
            state.apply_detection(
                {
                    "detection_id": "boot-1:2",
                    "seq": 2,
                    "event": "remove",
                    "column_id": "L0-r0-c0",
                    "unit": "water",
                }
            )

    def test_grouped_multipop_records_reduce_in_top_first_order(self) -> None:
        state = BoardState(build_topology())
        for seq, unit in enumerate(("earth", "water", "fire"), start=1):
            state.apply_detection(
                {
                    "detection_id": f"boot-1:{seq}",
                    "seq": seq,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "unit": unit,
                }
            )
        for seq, unit, operation_index in ((4, "fire", 1), (5, "water", 2)):
            state.apply_detection(
                {
                    "detection_id": f"boot-1:{seq}",
                    "seq": seq,
                    "event": "remove",
                    "column_id": "L0-r0-c0",
                    "unit": unit,
                    "operation_id": "boot-1:op:4",
                    "operation_index": operation_index,
                    "operation_size": 2,
                }
            )
        self.assertEqual(state.snapshot(), {"L0-r0-c0": ["earth"]})

    def test_tracking_continues_above_validated_height(self) -> None:
        state = BoardState(build_topology())
        for seq in range(1, 9):
            state.apply_detection(
                {
                    "detection_id": f"boot-1:{seq}",
                    "seq": seq,
                    "event": "add",
                    "column_id": "L0-r0-c0",
                    "unit": "earth",
                }
            )
        self.assertEqual(len(state.snapshot()["L0-r0-c0"]), 8)


if __name__ == "__main__":
    unittest.main()
