---
title: Redis 数据访问
kicker: Component
description: Redis 单实例、哨兵和集群连接配置、多实例切换及序列化支持。
---

## 连接模型

组件通过自定义属性创建单实例、Sentinel 或 Cluster 连接，也支持多连接实例。单实例字段位于 `singleton`，高可用连接位于 `sentinel` 或 `cluster`；多实例使用 `singletons`、`sentinels`、`clusters` 映射，并可设置默认名称。连接池配置根据 Jedis/Lettuce 客户端分别放在对应分支。

## 动态切换和序列化

`SwitchRedis` 与动态连接工厂支持在业务调用边界选择 Redis 连接。切换依赖组件拦截/上下文机制，异步线程边界应显式处理连接名称。序列化实现包括 Jackson/Gson 适配；应用应让写入和读取使用一致协议，并考虑旧缓存数据迁移。

属性、TTL 单位及多实例 YAML 见[Redis 配置示例](/examples/configuration/redis/)，接入见[Redis Starter](/starters/redis/)。`lodsve.redis` 是组件连接配置；Spring Data Redis 常规属性和本组件自定义数据源不是同一配置模型。

连接失败检查模式配置、节点列表、密码、数据库索引和网络；缓存 TTL 不符检查 Cache 名称映射和秒单位；切换无效检查切面是否经过 Spring 代理、是否在事务连接创建前选择数据源。

完整配置项请查看[该模块配置参考](/reference/configuration/redis/)，带注释示例见[该模块配置示例](/examples/configuration/redis/)。
