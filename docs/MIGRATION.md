# 六个 demo 入口迁移

- basic demo → demos/demo1-basic
- demo2 town → demos/demo2-town
- demo3 particle → demos/demo3-particle
- 新增 demo0-terrain、demo4-architecture、demo5-creature，仅含清单和说明。

原有网页源码、模型、素材、生成算法、图片后端与测试保留原内容。三个 package.json 仅修改 mock:input 路径，指向共用模拟服务。

启动器在运行时给 index.html 注入可选自动连接脚本，并将客户端 URL 指向共享文件；没有改写原 HTML 或 app.js。dream.html 不注入，因为原粒子页面尚未实现实时硬件输入。

三个 app.py 在独立进程运行，保持各自绝对路径 API、模块环境和 outputs 目录。门户使用 iframe 承载，提供独立窗口入口。

硬件服务复制自外层工作区，识别、固件、电气配置未改。内外两份不会自动同步，今后需比较后明确同步。本入口使用仓库内副本。

original-demo-hashes.json 记录迁移前文件 SHA-256；test_preservation.py 核对原文件，只允许 package.json 启动路径改变。原 ARCHIVE.json 和说明中的旧路径保留为历史记录，当前启动以根 README 为准。
