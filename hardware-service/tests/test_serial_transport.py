from __future__ import annotations

import unittest

from backend.worldblocks.serial_transport import SerialTransport


class SerialTransportTests(unittest.TestCase):
    def test_defaults_support_fast_acknowledged_recovery(self) -> None:
        transport = SerialTransport(
            "/dev/null",
            lambda _line: None,
            lambda _connected, _port, _error: None,
        )
        self.assertEqual(transport.read_timeout, 0.02)
        self.assertEqual(transport.quiet_before_write, 0.01)


if __name__ == "__main__":
    unittest.main()
