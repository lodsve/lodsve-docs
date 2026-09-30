---
title: Countdown 配置
description: Lodsve Boot Countdown 配置的完整配置项、默认值、示例值和枚举说明。
---

自动配置还要求唯一的 `RedisConnectionFactory`、相关类和 Redis Keyspace Notifications。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.countdown.enabled` | `boolean` | `false` | `true` | 倒计时自动配置开关。 |
| `lodsve.countdown.database` | `List<Integer>` | 无 | `[0]` | 监听 Redis Key 过期事件的数据库编号。 |

`CountdownPublisher.countdown` 的 `ttl` 单位是秒；事件可能重复或丢失，处理器必须幂等。
