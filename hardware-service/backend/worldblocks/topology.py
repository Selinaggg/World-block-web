from __future__ import annotations

from dataclasses import dataclass
from typing import Any


class TopologyError(ValueError):
    pass


@dataclass(frozen=True)
class LayerTopology:
    id: str
    rows: int
    cols: int


@dataclass(frozen=True)
class ColumnTopology:
    id: str
    layer: str
    row: int
    col: int
    module: int
    mux: int
    channel: int
    port: str
    enabled: bool = True


@dataclass(frozen=True)
class BoardTopology:
    topology_id: str
    boot_id: str
    module_count: int
    max_stack: int
    tracking_capacity: int
    adc_bits: int
    layers: tuple[LayerTopology, ...]
    columns: tuple[ColumnTopology, ...]

    @property
    def columns_by_id(self) -> dict[str, ColumnTopology]:
        return {column.id: column for column in self.columns}

    def validate(self) -> None:
        if not self.topology_id:
            raise TopologyError("topology_id is required")
        if self.module_count < 1:
            raise TopologyError("module_count must be positive")
        if self.max_stack < 1:
            raise TopologyError("max_stack must be positive")
        if self.tracking_capacity < self.max_stack:
            raise TopologyError("tracking_capacity must be at least max_stack")
        if self.adc_bits < 8:
            raise TopologyError("adc_bits is implausibly small")

        layer_by_id = {layer.id: layer for layer in self.layers}
        if len(layer_by_id) != len(self.layers):
            raise TopologyError("layer IDs must be unique")

        seen_ids: set[str] = set()
        seen_coordinates: set[tuple[str, int, int]] = set()
        for column in self.columns:
            if column.id in seen_ids:
                raise TopologyError(f"duplicate column ID: {column.id}")
            seen_ids.add(column.id)

            layer = layer_by_id.get(column.layer)
            if layer is None:
                raise TopologyError(f"unknown layer for {column.id}: {column.layer}")
            if not (0 <= column.row < layer.rows and 0 <= column.col < layer.cols):
                raise TopologyError(f"column outside layer bounds: {column.id}")

            coordinate = (column.layer, column.row, column.col)
            if coordinate in seen_coordinates:
                raise TopologyError(f"duplicate coordinate: {coordinate}")
            seen_coordinates.add(coordinate)

        expected = sum(layer.rows * layer.cols for layer in self.layers)
        if len(self.columns) != expected:
            raise TopologyError(
                f"topology declares {expected} coordinates but supplied {len(self.columns)} columns"
            )


class TopologyAssembler:
    """Build a topology from bounded line-sized protocol messages."""

    def __init__(self) -> None:
        self._header: dict[str, Any] | None = None
        self._channels: list[dict[str, Any]] = []

    def begin(self, data: dict[str, Any]) -> None:
        self._header = dict(data)
        self._channels = []

    def add_channel(self, data: dict[str, Any]) -> None:
        if self._header is None:
            raise TopologyError("channel received before topology")
        if data.get("topology_id") != self._header.get("topology_id"):
            raise TopologyError("channel topology_id does not match active topology")
        self._channels.append(dict(data))

    def finish(self, data: dict[str, Any]) -> BoardTopology:
        if self._header is None:
            raise TopologyError("topology_end received before topology")
        if data.get("topology_id") != self._header.get("topology_id"):
            raise TopologyError("topology_end does not match active topology")

        header = self._header
        try:
            layers = tuple(
                LayerTopology(id=str(layer["id"]), rows=int(layer["rows"]), cols=int(layer["cols"]))
                for layer in header["layers"]
            )
            columns = tuple(
                ColumnTopology(
                    id=str(channel["column_id"]),
                    layer=str(channel["layer"]),
                    row=int(channel["row"]),
                    col=int(channel["col"]),
                    module=int(channel.get("module", 0)),
                    mux=int(channel.get("mux", 0)),
                    channel=int(channel.get("channel", 0)),
                    port=str(
                        channel.get("port")
                        or f"A{int(channel.get('module', 0))}"
                    ),
                    enabled=bool(channel.get("enabled", True)),
                )
                for channel in self._channels
            )
            topology = BoardTopology(
                topology_id=str(header["topology_id"]),
                boot_id=str(header["boot_id"]),
                module_count=int(header["module_count"]),
                max_stack=int(header.get("validated_max_stack", header["max_stack"])),
                tracking_capacity=int(
                    header.get("tracking_capacity", header["max_stack"])
                ),
                adc_bits=int(header["adc_bits"]),
                layers=layers,
                columns=columns,
            )
        except (KeyError, TypeError, ValueError) as exc:
            raise TopologyError(f"invalid topology payload: {exc}") from exc

        topology.validate()
        self._header = None
        self._channels = []
        return topology
