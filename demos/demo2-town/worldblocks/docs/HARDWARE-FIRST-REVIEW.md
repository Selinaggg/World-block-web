# Hardware-first review — 2026-10-04

Approved for local promotion on 2026-10-04. This version has replaced the official local demo folder, based on teammate commit `7442f74`. It has not been pushed to GitHub. The three ZIP archives remain unchanged. The original review worktree and its preview ports remain available.

## Preview

Open http://127.0.0.1:5202/hardware.html while its preview server runs.
From the worktree root, restart this demo with:

```sh
python3 launcher/demo_server.py --project demos/demo2-town/worldblocks --port 5202 --hub-port 5180
```

The initial page waits for physical input. Hardware requires the existing shared launcher on port 5180, confirmed connection settings, and the existing hardware service. Without these, the page reports its disconnected status and does not generate a fabricated board.

## No-device testing

1. Open **Test view**, then **Load sample**.
2. Select a type and **Add unit**, or expand **Precise placement & board layout** to choose a board, base/offset position and stack layer.
3. Add/remove blocks, replace a layer, move a stack, or drag a stack in **Block monitor** to an empty grid column. The world updates automatically.
4. **Undo** reverses test edits. **Clear test board** only clears the simulated board; **Clear screen** only hides UI.
5. **Return to hardware** restores the latest physical snapshot. Hiding Test view alone keeps simulation active, with its status label visible.

Original free-arrangement editors remain linked inside Test view. Their arrangement is separate from the physical-format test board.

## Preserved capabilities and limits

Existing scene generators and renderers are reused. Basic retains its island world; Town retains its architecture, animated life and first-person exploration; Dreamscape retains the latest dense pink/blue architectural particle world and exploration. Town/Dream updates wait until exploration ends before replacing the world under the camera.

Basic/Town image generation remains an explicit **Generate 2.5D** action through the existing Control Map → image pipeline. Snapshot changes never trigger paid image/video generation. The video entry remains a placeholder.

Validation: all existing and new Node suites passed (Basic 50, Town 82, Dream 101; total 233). Browser checks covered local sample generation, input isolation, precision edits, clear screen, and exploration. No physical device was connected and no paid generation was invoked. Real hardware and paid image generation remain unverified in this review.
