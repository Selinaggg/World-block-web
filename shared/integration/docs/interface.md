# 输入接口 v1

网站使用 client 中 normalizeSnapshot 转换后的数据，contract 为 `worldblocks-input-v1`。
这是网页接入层的版本，与串口协议版本分开。原始后端 HTTP 接口保留兼容字段。

## 传输

- GET `/api/snapshot`：当前完整状态，适合手工检查。
- GET `/api/events`：SSE。每条 `data:` 是 JSON，其中 `snapshot` 是完整状态。
- GET `/api/health`：服务状态。`ok` 不等于硬件已准备完成。

client 直接等待 SSE 的初始 snapshot，避免“先 GET、后订阅”造成时间差。
合作版服务每 15 秒发送完整状态保活；原生 EventSource 自动重连并接收新的完整状态。
不要把 snapshot 当增量反复 append；每次替换。没有完整事件重放保证，适合当前状态驱动的 Demo。
不要只用检测序号丢弃重复消息，连接、布局或恢复状态也可能独立变化。

## 规范化状态

| 字段 | 含义 |
|---|---|
| source | hardware 或 mock，由接入配置明确指定 |
| connected | 串口连接状态；不等于网络状态或所有位置都可信 |
| status | offline / waiting / recovering / attention / live |
| boot_id、topology_id | 会话和拓扑标识；变化后重建网站的输入缓存 |
| module_count | 底板数量；每块底板 16 个位置 |
| validated_max_stack | 当前可靠使用范围，不能用 tracking_capacity 代替 |
| columns | 包含所有位置，空位置的 stack 也是空数组 |
| issues | 需要关注的位置及原因 |

每个 column 包含稳定 id、端口 port、layer、逻辑 position、stack、needs_attention。
stack 自底向上排列。每个元素有 code_id（C0–C5）、index（从 0 开始）、position 和 slot_key。
slot_key 表示“这个位置的这一层”，没有物理个体身份含义。
未知类型保留层数但 code_id 为 null，并标记异常，不能静默改成其他类型。
C5 是可识别的真实块；玩法可以把它定义为留空、支撑或其他功能，不要直接删除它导致上层高度改变。

## 坐标

坐标是逻辑网格单位：x 沿列，z 沿行，y 为堆叠高度。不是毫米，也不包含朝向。
每块底板的每个子网格为 4 列 × 2 行；L0.5 相对 L0 在 x/z/y 上各偏移 0.5。
同列层 index 每增加 1，y 增加 1。实际模型尺寸及轴方向可在渲染层统一变换。

module_layout.slots 按显示底板网格行优先排列。不要把 Arduino A0/A1 的编号当作屏幕位置。
client 已将 canonical row/col 按底板排列换算；不要对结果再次添加 0.5 偏移。
column.id 不随显示布局改变。横向两块底板的例子已包含在 fixtures 中。

## 原始类型兼容

旧传输层可能用 earth、fire 等字符串表示 stack 内部别名。这些只是兼容标识。
通过 snapshot.codebook.codes 的 unit→id 映射还原 C0–C5，client 已实现；不要硬编码旧名称与玩法关系。
本包模拟数据故意使用 type_0 等不同别名，确保网站确实按元数据解析。

## 状态解释

onConnection 是浏览器到服务的链路状态；state.status 是服务看到的硬件状态。
网络断线时缓存画面可以保留，但需显示过期/断开；不能当作实时输入。
attention 列可能保留最后已知堆叠，不能当作空列。其他无异常列可以继续显示。
recovering 时等待；不自动发送重置。现有硬件不报告朝向、任意离线重排或每块实体的唯一 ID。
