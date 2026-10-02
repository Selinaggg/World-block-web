from __future__ import annotations

import queue
import threading
import time
from collections.abc import Callable


class SerialTransport:
    """Blocking serial reader with paced writes and automatic reconnect."""

    def __init__(
        self,
        port: str,
        on_line: Callable[[str], object],
        on_connection: Callable[[bool, str, str | None], object],
        baudrate: int = 115200,
        reconnect_delay: float = 1.0,
        quiet_before_write: float = 0.01,
        read_timeout: float = 0.02,
        module_count: int = 2,
        layer_rows: int = 4,
        layer_cols: int = 4,
    ) -> None:
        self.port = port
        self.baudrate = baudrate
        self.on_line = on_line
        self.on_connection = on_connection
        self.reconnect_delay = reconnect_delay
        self.quiet_before_write = quiet_before_write
        self.read_timeout = read_timeout
        self.module_count = module_count
        self.layer_rows = layer_rows
        self.layer_cols = layer_cols
        self._commands: queue.Queue[str] = queue.Queue(256)
        self._stop = threading.Event()
        self._thread: threading.Thread | None = None

    def start(self) -> None:
        if self._thread and self._thread.is_alive():
            return
        self._stop.clear()
        self._thread = threading.Thread(target=self._run, name="worldblocks-serial", daemon=True)
        self._thread.start()

    def stop(self) -> None:
        self._stop.set()
        if self._thread and self._thread.is_alive():
            self._thread.join(timeout=3)

    def send(self, command: str) -> None:
        command = command.strip()
        if not command or "\n" in command or "\r" in command:
            raise ValueError("command must be one non-empty line")
        self._commands.put_nowait(command)

    def configure_modules(self, module_count: int) -> str:
        if module_count not in (1, 2, 4, 6, 8):
            raise ValueError("module count must be one of 1, 2, 4, 6, or 8")
        self.module_count = module_count
        self.layer_rows = module_count * 2
        self.layer_cols = 4
        command = f"CONFIG {module_count} {self.layer_rows} {self.layer_cols}"
        self.send(command)
        return command

    def _run(self) -> None:
        try:
            import serial
        except ImportError:
            self.on_connection(False, self.port, "pyserial is not installed")
            return

        while not self._stop.is_set():
            disconnect_error: str | None = None
            try:
                with serial.Serial(
                    self.port, self.baudrate, timeout=self.read_timeout
                ) as connection:
                    self.on_connection(True, self.port, None)
                    last_receive = time.monotonic()
                    last_write = 0.0
                    opened_at = time.monotonic()
                    handshake_queued = False

                    while not self._stop.is_set():
                        raw = connection.readline()
                        now = time.monotonic()
                        if raw:
                            last_receive = now
                            self.on_line(raw.decode("utf-8", errors="replace"))

                        if not handshake_queued and now - opened_at >= 2.0:
                            self.send(
                                f"CONFIG {self.module_count} {self.layer_rows} {self.layer_cols}"
                            )
                            self.send("HELLO")
                            self.send("TOPOLOGY")
                            self.send("STATE")
                            handshake_queued = True

                        if (
                            not self._commands.empty()
                            and now - last_receive >= self.quiet_before_write
                            and now - last_write >= self.quiet_before_write
                        ):
                            command = self._commands.get_nowait()
                            connection.write((command + "\n").encode("utf-8"))
                            connection.flush()
                            last_write = now
            except Exception as exc:
                disconnect_error = str(exc)
                if not self._stop.wait(self.reconnect_delay):
                    continue
            finally:
                self.on_connection(False, self.port, disconnect_error)
