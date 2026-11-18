---
title: "RocketMQ configuration"
description: "Complete configuration items, default values, example values, and enumeration descriptions for Lodsve Boot RocketMQ configuration."
---

NameServer, Topic, etc. use RocketMQ client's own properties; Lodsve consumers are registered through `@MessageHandler` and `@MessageListener`.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.rocketmq.charset` | `String` | `UTF-8` | `UTF-8` | Message body conversion character set. |
| `lodsve.rocketmq.consumer.group` | `String` | `DefaultConsumer` | `demo-consumer` | Default consumer group. |
| `lodsve.rocketmq.consumer.consume-thread-min` | `int` | `20` | `20` | Minimum number of consumer threads. |
| `lodsve.rocketmq.consumer.consume-thread-max` | `int` | `64` | `64` | The maximum number of consumer threads. |
