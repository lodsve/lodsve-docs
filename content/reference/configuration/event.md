---
title: Event 配置
description: Lodsve Boot Event 配置的完整配置项、默认值、示例值和枚举说明。
---

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---:|---:|---|
| `lodsve.event.core-pool-size` | `int` | `1` | `4` | 事件执行器核心线程数。 |
| `lodsve.event.max-pool-size` | `int` | `Integer.MAX_VALUE` | `32` | 最大线程数。 |
| `lodsve.event.keep-alive-seconds` | `int` | `60` | `60` | 非核心线程存活时间，单位秒。 |
| `lodsve.event.allow-core-thread-time-out` | `boolean` | `false` | `false` | 是否允许核心线程超时退出。 |
| `lodsve.event.queue-capacity` | `int` | `Integer.MAX_VALUE` | `500` | 等待队列容量。 |
| `lodsve.event.expose-unconfigurable-executor` | `boolean` | `false` | `false` | 是否暴露不可配置的 Executor。 |
