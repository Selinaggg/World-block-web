# 硬件连接服务（硬件维护方）

本服务运行在 USB 连接 Arduino Mega 2560 的电脑上。浏览器通过 HTTP/SSE 读取状态。
保留现有识别和恢复实现；本副本只调整事件流：先订阅再发送初始状态，并每 15 秒发送完整状态保活。
没有更改电阻值、接线、识别阈值或固件。

## 启动

需要 Python 3.10+。在本目录中执行：

```sh
python3 -m venv .venv
# macOS / Linux
source .venv/bin/activate
# Windows PowerShell 使用 .venv\Scripts\Activate.ps1
python -m pip install -r backend/requirements.txt
python -m serial.tools.list_ports
python -m backend.worldblocks --serial-port YOUR_PORT --modules 2
```

将 YOUR_PORT 换成真实串口（macOS 通常 /dev/cu.usbmodem...，Windows 通常 COM3）。
--modules 必须等于启用的底板数量，可选 1、2、4、6、8；每块底板有 16 个位置。
如 runtime/module_layout.json 已存在，以保存配置为准；改变数量由维护方明确操作。
默认接口 http://127.0.0.1:8787。不要与旧服务同时占用端口或串口；关闭 Arduino Serial Monitor。
GET /api/health 的 ok 表示服务可访问，不保证硬件已连接；另看 snapshot.connected 和 topology。

## 对应固件和接线

`firmware/worldblocks_mega_sensing/` 中 .ino 和两个 .h 必须放在同一目录。
Arduino IDE 选择 Mega 2560。仅在确实需要更新固件时上传；连接现有设备不必反复烧录。
串口速率 115200；CD74HC4067 的 S0–S3 共用 D2–D5，SIG 分别连接 A0–A7；
有源低电平蜂鸣器 D13。电气配置在 config/，不要根据网页玩法改电阻或通道映射。

物理输入依赖连续识别。首次演示建议空板启动，再逐个放置，观察网页与实物是否一致。
七层是当前使用边界；更高的 tracking_capacity 不是可靠性承诺。
重启后保存状态需通过电气核对；离线改动的堆叠顺序可能无法自动恢复。

## 显示布局与恢复

默认底板按 A0、A1…纵向排列。维护方可 POST /api/module-layout，例如两块横排：
{"module_count":2,"grid_rows":1,"grid_cols":2,"slots":["A0","A1"]}。
端口集合应为从 A0 连续到 A(N-1)，排列必须对应实物；更改数量会重新配置硬件。
C0–C5 的旧 unit 别名保留在内部兼容代码中，网站只使用接入层转换后的 code_id。

重新连接事件流只刷新网页。POST /api/board/reset 会重建识别状态，不能在刷新页面时自动调用。
复杂堆叠无法仅凭一次电阻读数恢复顺序；故障时保留已知状态，人工核对并顺序重建。
完整底层 API 供维护方使用，网站端默认只读。

## 软件检查

```sh
python -m unittest discover -s tests
```

这些是代码检查，不代表已完成当前设备的实物联调。交付前按合作检查单跑一次真实放置、
堆叠、移除、重连和底板方向检查。诊断数据库在 runtime/，无需发给网站开发方。
服务为本地开发用途，没有认证，默认保持 127.0.0.1；不要直接发布到公网。
