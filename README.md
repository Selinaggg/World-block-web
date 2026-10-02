# WorldBlocks · Collaboration Studio

一个本地网站入口、六个独立 demo 目录、一套硬件连接服务。

## 在 Mac 上启动

1. 双击根目录 **Start WorldBlocks.command**。需要 Python 3.10+；首次启动会联网安装依赖到本仓库 `.venv`，后续复用。
2. 浏览器自动打开 **http://127.0.0.1:5180**。保留终端窗口；按 Control+C 停止这次启动的全部服务。若 Finder 阻止打开脚本，可在终端执行 `zsh "Start WorldBlocks.command"`。
3. 首次在首页「设备设置」选择底板数量、排列、串口及 C0–C5 实物含义，并确认。设置仅保存在本机 `runtime/settings.json`。
4. 保持空板并插入 USB，等待「硬件在线」，进入 **demo1-basic** 验证输入。Terrain/Basic/Town 自动应用保存的映射并连接；仍可切回 Manual 或 Connection demo。

先关闭旧硬件服务和 Arduino Serial Monitor。启动器不烧录固件、不发送板面重置命令；需要设备已有兼容固件。连接时沿用原服务的 CONFIG/HELLO/TOPOLOGY/STATE 握手。修改底板配置前请核对实物并保持空板。

没有硬件也能运行网站。未完成设备设置时不会打开串口；可以使用 Manual。模拟服务随启动器运行，Connection demo 始终明确标为模拟。

## 六个独立目录

| 目录 | 当前内容 | 实体输入 |
| --- | --- | --- |
| `demos/demo0-terrain/` | 原有实时地形 demo；精简深色界面，可切换测试窗口 | 实时订阅，待实物联调 |
| `demos/demo1-basic/` | 原 basic demo，含归档说明和旧接入包 | 已有适配器；支持自动连接，待实物联调 |
| `demos/demo2-town/` | 原 Human Town | 同上 |
| `demos/demo3-particle/` | 原粒子梦境，保留原小镇入口 | 梦境仍为手动输入 |
| `demos/demo4-architecture/` | 预留，无体验代码 | 待接入 |
| `demos/demo5-creature/` | 预留，无体验代码 | 待接入 |

Terrain 无需点击生成：放置、堆叠、移除积木立即更新地形。数字积木窗口默认隐藏，点击 **Test view** 显示；其中 **Test board** 是独立的本地模拟，可用 Add block / Remove top 测试。切回 **Hardware** 恢复真实输入。

首页自动读取各目录的 `demo.json`。入口地址为 `/demos/<目录名>/`；未完成的体验只显示「等待加入」。

## 工作区结构

- `portal/`：统一首页、硬件设置、体验容器。
- `launcher/`：进程启动和退出清理、USB 发现、原 demo 服务包装。
- `shared/hardware-client/`：统一输入客户端及可选自动连接脚本。
- `shared/integration/`：接口文档、模拟服务、样例和测试。
- `hardware-service/`：现有硬件服务副本；固件、感知、协议和电气配置未修改。
- `demos/`：各体验自己的源码、素材、生成器和测试。
- `runtime/`：本机设置、识别数据库及日志，不提交 Git。

统一入口在 5180；Terrain 在 5190；Basic/Town/Particle 原服务分别在 5191/5192/5193；硬件在 8787，模拟在 8790。门户通过 iframe 保持原页面、绝对路径 API 和存储环境独立。所有服务仅监听本机；这不是公网部署方案。

每个原 demo 保留 `npm run dev` 独立运行方式（默认 5188，一次启动一个）。统一入口不依赖 Node。图片生成需要在对应 demo 的服务端配置 Gemini 密钥；本地 3D 和硬件输入不需要密钥。图片和视频生成规则未更改。

## 验证和协作

请阅读 [协作约定](docs/COLLABORATION.md)、[硬件联调步骤](docs/HARDWARE-CHECK.md) 和 [迁移记录](docs/MIGRATION.md)。

```sh
.venv/bin/python -B -m unittest discover -s tests
node --test tests/auto-connect.test.mjs
# 不打开串口、不自动打开浏览器：
.venv/bin/python -B launcher/start.py --no-hardware --no-browser
```

各 demo 原测试保留在 `worldblocks/tests/`，使用 `npm test`；硬件及接入包测试见各目录 README。软件检查不代表真实设备联调通过。
