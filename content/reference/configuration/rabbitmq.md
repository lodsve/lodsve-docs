---
title: RabbitMQ 配置
description: Lodsve Boot RabbitMQ 配置的完整配置项、默认值、示例值和枚举说明。
---

`queues` 的 Map 键是队列名称；Broker 连接使用 `spring.rabbitmq.*`。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.rabbit.queues.<queue>.exchange-type` | `ExchangeType` | `DIRECT` | `TOPIC` | 交换器类型。 |
| `lodsve.rabbit.queues.<queue>.exchange-name` | `String` | 无 | `user.events` | 交换器名称。 |
| `lodsve.rabbit.queues.<queue>.routing-key` | `String` | 无 | `user.created` | DIRECT/TOPIC 绑定键；FANOUT 不使用。 |
| `lodsve.rabbit.queues.<queue>.durable` | `boolean` | `true` | `true` | 队列是否持久化。 |
| `lodsve.rabbit.queues.<queue>.exclusive` | `boolean` | `false` | `false` | 是否由当前连接独占。 |
| `lodsve.rabbit.queues.<queue>.auto-delete` | `boolean` | `false` | `false` | 无消费者后是否自动删除。 |

### `ExchangeType`

| 值 | 含义 | 实现状态 |
|---|---|---|
| `DIRECT` | 精确匹配 Routing Key。 | 支持 |
| `TOPIC` | 通配符匹配 Routing Key。 | 支持 |
| `FANOUT` | 广播到绑定队列。 | 支持 |
| `HEADERS` | 按消息 Header 匹配。 | 枚举存在，但当前实现明确不支持 |
