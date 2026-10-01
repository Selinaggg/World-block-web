# Website integration

Read README.md, docs/interface.md and docs/integration.md first.
Use client/worldblocks-client.mjs. Start with mock/server.py; connect real hardware
through the hardware owner's local service. Do not implement electrical decoding,
request firmware, or infer stack order from a scalar measurement in the website.
Website design and gameplay are intentionally unspecified. Keep C0–C5 meaning maps
in application code. Preserve stable column IDs and bottom-to-top stack order.
Show transport loss, hardware disconnection and uncertain columns distinctly.
Do not automatically reset/calibrate hardware, send raw serial commands, or launch
paid generation on every state event. Event stream snapshots replace state.
Use separate configuration for mock/real mode and display mock mode clearly.
Do not search outside this package for assets or private project context.
After editing the client/contract, update fixtures, tests and CHANGELOG.md together.
