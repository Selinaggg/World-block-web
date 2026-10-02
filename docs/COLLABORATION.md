# 内容管理与协作

## 修改边界

每个体验拥有自己的 `demos/<name>/`。现有三个 demo 的 `worldblocks/dist/src/` 是实际网页源码，不能因为目录叫 dist 就当作可删除的构建产物。生成逻辑、素材、主题、后端和测试保留在各体验内。

`portal`、`launcher`、`shared` 和 `hardware-service` 建议指定维护者。共享修改需复测所有 ready demo。每人使用自己的功能分支，通过 Pull Request 合并；文件夹隔离不能代替分支和审阅。

## 加入新 demo

1. 在预留目录加入项目，推荐以 `worldblocks/` 为项目根。
2. 当前启动器支持现有 Python 服务模式：`server/app.py` 提供 `make_handler()`，静态根为 `dist/`。不同框架或服务需要增加启动适配器，不能只把 status 改成 ready。
3. 更新自己目录的 `demo.json`：保留稳定 id/order，填写 title/description、status、root、entry、独立 port。新端口推荐 5190、5194、5195；不能重复。
4. 使用共用硬件接口：C0–C5、完整状态替换、稳定列 ID、自底向上的层序。玩法含义在自己的 demo 内定义。
5. 不复制虚拟环境、密钥、识别数据库和生成结果。重启入口后自动发现清单，无需编辑首页。

## 共用客户端

统一启动时，各原 demo 的 `/src/input/partner/worldblocks-client.mjs` URL 由包装服务指向 `shared/hardware-client/worldblocks-client.mjs`。原文件保留，独立启动与原测试仍可使用。当前内容逐字一致。

今后变更客户端时，同步接入文档、fixture、测试、版本记录，以及独立运行使用的副本。不随意改变硬件协议。

## 保存边界

设备设置保存在 `runtime/settings.json`。Terrain/Basic/Town 共用已确认的实物含义；网页内临时映射仍只影响当前会话，持久修改请到首页设备设置。

各体验的端口和页面环境独立，原有保存规则不变。Basic/Town 的许多状态只在内存中，离开或刷新会丢失；需要临时保留可使用「独立窗口」。Particle 保留原有 localStorage 草稿。

切换体验卸载旧 iframe 并关闭订阅，硬件后台持续运行。不会因切换页面自动重置底板；Basic/Town/Particle 的生成仍由原有按钮触发。Terrain 本地程序化地形随完整硬件状态实时更新，不调用图片或视频生成服务。

Terrain 的 React 源码在 `demos/demo0-terrain/worldblocks/src/`，`dist/` 为随仓库提供的构建结果。修改后在该项目中执行 `npm ci` 和 `npm run build`；正常启动入口不需要 Node。它使用自己的订阅，不注入 Basic/Town 的连接按钮脚本。
