# Architecture

这个 demo 使用独立脚本和素材，与其他体验隔离。规则请阅读 [RULES.md](RULES.md)。

视觉采用黑白聚合立方体、开放桁架、穿孔表皮与半透明灯塔。实体密度、公共空廊及跨模块通道由邻接关系实时决定。

## 打开体验

运行仓库根目录的 Start WorldBlocks.command，在首页选择 Architecture。
独立页面端口：`http://127.0.0.1:5195/`。

默认使用真实硬件输入；首次需在首页确认 Hardware settings。
所有输入变化实时生效，没有生成按钮。

没有硬件时：**Test view → 选择 Unit → Add unit**。
也可选择 Position 和 Module，通过 Add block / Remove top 逐步搭建。
Block monitor 默认收起；Field guide 解释六类模块并显示当前涌现结果。
清空测试板不会操作真实硬件。样例和手动编辑只保存在当前页面内存。

## 开发与构建

网页源码位于 `worldblocks/src/`。正常启动使用已提供的 `worldblocks/dist/`，无需安装 Node。
源码修改后：

```sh
cd demos/demo5-architecture/worldblocks
npm ci
npm test
npm run build
```

提交源码及重新生成的 dist。各体验保有本地输入适配和绘图辅助代码副本，避免一个 demo 的美术调整影响另一个。
只共用仓库现有的标准硬件客户端；固件、协议和共享服务未修改。

## 验证

- 规则、邻接、全层保留、几何有效性测试通过。
- 生产构建通过；Three.js 体积产生常规的大包提醒，不影响本机运行。
- 已在浏览器检查空场景、样例、测试窗口和实时组合。
- 真实设备未连接验证；高模块数量在实际电脑上的帧率需要实测。
