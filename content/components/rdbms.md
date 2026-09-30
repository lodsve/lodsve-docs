---
title: RDBMS 数据源
kicker: Component
description: 多数据源创建、默认数据源选择、运行期路由以及连接池适配。
---

## 数据源生命周期

RDBMS 根据 `lodsve.rdbms.data-source` 中的具名配置创建数据源，并依据 `default-data-source-name` 确定默认项；未指定时使用配置映射中的第一项。每项包含 JDBC 驱动、URL、账号密码和 `pool-setting`。连接池类型支持 Hikari 与 Druid。

## 数据源切换

组件提供 `@SwitchDataSource`、动态切换 AOP 和线程上下文 Holder。路由必须发生在获取连接之前；事务开启后才切换通常无法更换已经绑定的连接。异步任务不会自动携带线程上下文，需自行明确路由策略。默认数据源仍应能满足未标注调用的回退。

## 连接池与监控

连接池设置以字段名约定的单位生效；`pool-setting` 中部分属性只适用于特定连接池。Druid 监控 Servlet、Web Filter 和 Stat/Wall 等 Filter 都有独立启用条件，配置参考见[RDBMS 与 Druid 示例](/examples/configuration/rdbms/)。不要在公网暴露无认证的监控页。

数据源创建失败先核对驱动依赖、JDBC URL、池类型和占位符；切换无效时确认切换切面生效、方法调用经过代理且发生在事务前。应用配置见[RDBMS Starter](/starters/rdbms/)。

完整配置项请查看[该模块配置参考](/reference/configuration/rdbms/)，带注释示例见[该模块配置示例](/examples/configuration/rdbms/)。
