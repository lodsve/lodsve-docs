---
title: Countdown 倒计时
kicker: Component
description: 基于 Redis Key 过期通知触发倒计时事件和业务处理器。
---

## 能力与工作流程

Countdown 监听 Redis Key 过期事件，将 Redis 通知解析为组件事件，再分发给应用注册的 `CountdownEventHandler`。应用通过 `CountdownPublisher` 登记倒计时信息；超时后处理器收到事件。它适合订单保留、验证码过期等最终一致性场景，不适合作为精确到毫秒的定时调度器。

启用前需要 Redis 服务允许 Keyspace Notifications，并确保应用连接的数据库编号包含在 `lodsve.countdown.database` 中。自动配置默认关闭，需显式设 `lodsve.countdown.enabled: true`；倒计时自动配置要求 Spring 容器中存在唯一的 `RedisConnectionFactory`。Redis 通知可能重复或因断连丢失，处理器须幂等，并让业务状态本身能够兜底。

## 处理器与排错

实现 `CountdownEventHandler` 并注册为 Spring Bean，在回调中重新读取并校验业务记录状态，再执行过期动作。不要只依赖事件载荷判断业务状态，也不要在回调中执行长时间阻塞操作。

完整配置见[组件配置示例](/examples/configuration/countdown/)，依赖接入见[Countdown Starter](/starters/countdown/)。事件未触发时检查 Redis 通知设置、数据库编号、Starter 依赖、自动配置开关和 Redis 连接；重复触发时检查处理器幂等。

完整配置项请查看[该模块配置参考](/reference/configuration/countdown/)，带注释示例见[该模块配置示例](/examples/configuration/countdown/)。
