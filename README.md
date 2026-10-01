# WorldBlocks demos

Three independent snapshots of the WorldBlocks web prototype. Each folder preserves the original archive contents; no ZIP files are required.

| Folder | Version |
| --- | --- |
| [basic demo](basic%20demo/) | Original WorldBlocks demo; includes the partner handoff and archive notes supplied with this snapshot. |
| [demo2 town](demo2%20town/) | Human Town demo with first-person exploration and dynamic town elements. |
| [demo3 particle](demo3%20particle/) | Dreamscape particle demo alongside Human Town. |

## Run a version

Open the selected version's `worldblocks` folder. Follow its `README.md` for Python dependencies and optional service configuration, then start the server:

```sh
cd "demo3 particle/worldblocks"
npm run dev
```

Use the URL printed by the server. Human Town is at `/`; the third snapshot also has Dreamscape at `/dream.html`.

Run one version at a time on the default port. The local 3D demos do not require an image-generation API key. AI image generation and physical hardware connections require the separate services described in the individual versions.

These are independent snapshots, so shared assets are intentionally repeated across version folders.
