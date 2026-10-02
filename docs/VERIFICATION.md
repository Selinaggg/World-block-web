# Migration verification

Verified on 2026-10-02:

- Original demo JavaScript tests: Basic 44, Town 76, Particle 84; all 204 passed.
- Hardware service regression suite: 57 passed, using simulated transports.
- Integration client: 6 passed. Integration mock HTTP/SSE suite: 2 passed.
- New launcher, configuration, portal HTTP and preservation tests: 9 passed.
- New auto-connect ordering/confirmation test: 1 passed.
- Original file SHA-256 checks passed; the only original file edits are the three mock:input script paths in package.json.
- Copied hardware source, firmware and configuration match the outer workspace.
- Browser checks: six-entry portal, empty placeholders, Basic/Town/Particle page loading, hardware settings save, Basic auto-selecting physical mode with the saved mapping, explicitly labelled simulated input connection.
- New portal/navigation/settings are monochrome and English. A source scan found no Chinese text in portal files or demo manifests. Original experience pages remain unchanged.

UI settings were exercised in a separate temporary runtime with serial access disabled. Those sample settings were not copied into the real runtime. The normal launcher now waits for the user's actual board layout and mappings.

No real serial device was opened, no firmware was uploaded, and no paid generation API was called. The original image-backend Python suite was not rerun in this session after its separate execution request was declined. Real hardware reliability, electrical mapping and reconnect recovery still require the physical checklist.

The runtime browser injection affects input startup only. Dreamscape remains a manual experience; its future live-input integration is explicitly marked as pending.


## Terrain integration and compact portal — 2026-10-02

- Reused `creative-terrain-demo` geometry, layout and element rules. A source-hash
  test reverses only the explicit dark-background edits and verifies byte equality.
- Seven Terrain tests pass: C0–C5 mapping, old/neutral aliases, stack order,
  add/remove/move/empty transitions, multi-board/half-layer placement, heartbeat
  identity, invalid input and disconnect/reconnect subscription lifecycle.
- Existing Basic 44, Town 76 and Particle 84 JavaScript tests pass (204 total).
- Launcher/configuration/partner-preservation suite: 10 pass. Shared input and
  bootstrap JavaScript suite: 7 pass.
- Terrain production build passes. Browser check: hidden monitor by default;
  adding two layers updates terrain immediately; removing the top restores the
  lower terrain; sample rendering, monitor hiding and simulated-input labels work.
- Portal: all six cards fit within 1280 × 720, 390 × 844 and 844 × 390 viewports.
  Scroll dimensions equal viewport dimensions; the original large headline is
  removed. The narrow-screen layout was also visually inspected.
- Real serial hardware has not been tested. Real runtime settings were not changed.
