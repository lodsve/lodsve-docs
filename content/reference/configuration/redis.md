---
title: Redis 配置
description: Lodsve Boot Redis 配置的完整配置项、默认值、示例值和枚举说明。
---

`singleton`、`sentinel`、`cluster` 三种单数据源模式互斥；多数据源使用对应复数 Map。Cache 的 `default-expiration` 和 `key-ttl` 单位是秒，连接 `Duration` 支持 `2s`、`100ms` 等写法。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.redis.default-name` | `String` | 无 | `primary` | 多数据源默认名称；不填取第一个。 |
| `lodsve.redis.ssl` | `boolean` | `false` | `true` | 是否启用 SSL。 |
| `lodsve.redis.timeout` | `Duration` | 无 | `2s` | Redis 超时时间。 |
| `lodsve.redis.client-name` | `String` | 无 | `lodsve-app` | Redis `CLIENT SETNAME` 名称。 |
| `lodsve.redis.singleton` | 对象 | 无 | 见下表 | 单 Redis 实例。 |
| `lodsve.redis.sentinel` | 对象 | 无 | 见下表 | Sentinel 实例。 |
| `lodsve.redis.cluster` | 对象 | 无 | 见下表 | Cluster 实例。 |
| `lodsve.redis.singletons.<name>` | 对象 | 无 | `cache:` | 多个单实例。 |
| `lodsve.redis.sentinels.<name>` | 对象 | 无 | `ha:` | 多个 Sentinel 实例。 |
| `lodsve.redis.clusters.<name>` | 对象 | 无 | `cluster:` | 多个 Cluster 实例。 |
| `lodsve.redis.key-ttl.<cache-name>` | `Map<String,Long>` | 无 | `shortCache: 60` | 指定 Cache TTL，单位秒。 |
| `lodsve.redis.default-expiration` | `long` | `0` | `3600` | 默认 Cache TTL，单位秒；`0` 表示永久。 |

### Redis 连接对象

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.redis.singleton.host` | `String` | 无 | `127.0.0.1` | Redis 主机。 |
| `lodsve.redis.singleton.password` | `String` | 无 | `${REDIS_PASSWORD}` | Redis 密码。 |
| `lodsve.redis.singleton.port` | `int` | `6379` | `6379` | Redis 端口。 |
| `lodsve.redis.singleton.database` | `int` | `0` | `0` | Redis 数据库编号。 |
| `lodsve.redis.sentinel.master` | `String` | 无 | `mymaster` | Sentinel 主节点名称。 |
| `lodsve.redis.sentinel.nodes` | `List<String>` | 无 | `[127.0.0.1:26379]` | Sentinel 节点列表。 |
| `lodsve.redis.sentinel.sentinel-password` | `String` | 无 | `${REDIS_SENTINEL_PASSWORD}` | Sentinel 认证密码。 |
| `lodsve.redis.sentinel.password` | `String` | 无 | `${REDIS_PASSWORD}` | Redis 数据节点密码。 |
| `lodsve.redis.sentinel.database` | `int` | `0` | `0` | Redis 数据库编号。 |
| `lodsve.redis.cluster.nodes` | `List<String>` | 无 | `[127.0.0.1:6379]` | Cluster 初始节点列表，至少一个。 |
| `lodsve.redis.cluster.password` | `String` | 无 | `${REDIS_PASSWORD}` | Cluster 密码。 |
| `lodsve.redis.cluster.max-redirects` | `Integer` | 无 | `5` | Cluster 最大重定向次数。 |

### Redis 客户端池

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.redis.jedis.pool.max-idle` | `int` | `8` | `8` | Jedis 最大空闲连接数。 |
| `lodsve.redis.jedis.pool.min-idle` | `int` | `0` | `2` | Jedis 最小空闲连接数。 |
| `lodsve.redis.jedis.pool.max-active` | `int` | `8` | `16` | Jedis 最大连接数。 |
| `lodsve.redis.jedis.pool.max-wait` | `Duration` | `-1ms` | `2s` | Jedis 获取连接最大等待时间。 |
| `lodsve.redis.jedis.pool.time-between-eviction-runs` | `Duration` | 无 | `60s` | Jedis 空闲连接检查间隔。 |
| `lodsve.redis.lettuce.share-native-connection` | `boolean` | `true` | `true` | 是否共享 Lettuce 原生连接。 |
| `lodsve.redis.lettuce.shutdown-timeout` | `Duration` | `100ms` | `100ms` | Lettuce 关闭超时。 |
| `lodsve.redis.lettuce.pool.max-idle` | `int` | `8` | `8` | Lettuce 最大空闲连接数。 |
| `lodsve.redis.lettuce.pool.min-idle` | `int` | `0` | `2` | Lettuce 最小空闲连接数。 |
| `lodsve.redis.lettuce.pool.max-active` | `int` | `8` | `16` | Lettuce 最大连接数。 |
| `lodsve.redis.lettuce.pool.max-wait` | `Duration` | `-1ms` | `2s` | Lettuce 获取连接最大等待时间。 |
| `lodsve.redis.lettuce.cluster.refresh.period` | `Duration` | 无 | `30s` | Cluster 拓扑刷新间隔。 |
| `lodsve.redis.lettuce.cluster.refresh.adaptive` | `boolean` | `false` | `true` | 是否自适应刷新 Cluster 拓扑。 |
