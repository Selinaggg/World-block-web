# WorldBlocks 网站接入包 v1

这份包用于对接实体模块输入。网站的主题、交互和视觉由你自由设计。
无需 Arduino 固件或底层识别源码；开发时使用模拟服务，联调时连接硬件方运行的服务。
当前包没有网站成品，也不包含生成模型调用。

## 从这里开始

1. 阅读 `docs/interface.md`（数据）和 `docs/integration.md`（接入与联调）。
2. 需要 Python 3.10+，在本目录运行 `python3 mock/server.py`。
3. 将 `client/worldblocks-client.mjs` 放入网站源码，参考 `examples/subscribe.mjs` 使用。
4. 开发地址设为 `http://127.0.0.1:8790`；实物联调改为 `http://127.0.0.1:8787`。

模拟服务不需要 pip/npm 包，循环演示空板、放置、堆叠、移动、异常及连接中断。
它模拟硬件连接状态中断；停止/重启模拟进程还可以测试真正的网络断开。
没有硬件时不能把模拟成功当成实物测试完成。

## 检查

```sh
node --test tests/client.test.mjs
python3 -m unittest discover -s tests -p 'test_*.py'
```

JavaScript 检查需要 Node 18+。浏览器客户端使用原生 fetch 和 EventSource，兼容框架不限。
`fixtures/` 都是人工构造的模拟数据。`FILE_MANIFEST.json` 列出本包文件及校验值。
