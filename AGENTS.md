# Collaboration rules

Read README.md and docs/COLLABORATION.md before editing.
Keep generation, visuals, assets and tests inside each demo's own folder.
Do not change another demo to implement a feature in your assigned demo.
Shared infrastructure changes require regression checks against all ready demos.
Do not change firmware, electrical settings, sensing, recovery or protocol to fit a visual demo.
Use shared/hardware-client/worldblocks-client.mjs and the C0–C5 contract.
Never auto-reset hardware or start image/video generation on snapshot events.
Keep settings, databases, logs, credentials and generated output out of Git.
Preserve archived manifests as historical records.
Do not claim real-device validation based only on mocks or unit tests.
