---
title: RocketMQ 配置
description: Lodsve Boot RocketMQ 配置的完整配置项、默认值、示例值和枚举说明。
---

NameServer、Topic 等使用 RocketMQ 客户端自身属性；Lodsve 消费者通过 `@MessageHandler` 和 `@MessageListener` 注册。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.rocketmq.charset` | `String` | `UTF-8` | `UTF-8` | 消息体转换字符集。 |
| `lodsve.rocketmq.consumer.group` | `String` | `DefaultConsumer` | `demo-consumer` | 默认消费者组。 |
| `lodsve.rocketmq.consumer.consume-thread-min` | `int` | `20` | `20` | 消费线程最小数。 |
| `lodsve.rocketmq.consumer.consume-thread-max` | `int` | `64` | `64` | 消费线程最大数。 |
