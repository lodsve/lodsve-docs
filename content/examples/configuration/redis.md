---
title: Redis 示例
description: Redis 示例 YAML 配置示例。
---

## Redis

以下是单实例示例。`singleton`、`sentinel`、`cluster` 三种连接模式互斥；多实例则使用复数形式 `singletons`、`sentinels` 或 `clusters`，并通过 `default-name` 选择默认实例。

```yaml
spring:
  mvc:
    # Redis 序列化实现选择；可用 jackson 或 gson，属于 Spring 属性。
    converters:
      preferred-json-mapper: jackson
lodsve:
  redis:
    # 动态多实例时可指定默认连接名。
    default-name: primary
    ssl: false
    timeout: 2s
    client-name: lodsve-app
    singleton:
      host: ${REDIS_HOST:127.0.0.1}
      port: 6379
      password: ${REDIS_PASSWORD:}
      database: 0
    # Cache 名称到 TTL 的映射，单位秒；未匹配时使用 default-expiration。
    key-ttl:
      shortCache: 60
    # 默认缓存 TTL，单位秒；0 表示永久有效。
    default-expiration: 0
    # Jedis/Lettuce 连接池配置，按项目实际使用的客户端设置对应分支。
    jedis:
      pool:
        max-idle: 8
        min-idle: 0
        max-active: 8
        max-wait: -1ms
        time-between-eviction-runs: 60s
    lettuce:
      share-native-connection: true
      shutdown-timeout: 100ms
      pool:
        max-idle: 8
        min-idle: 0
        max-active: 8
        max-wait: -1ms
      cluster:
        refresh:
          period: 30s
          adaptive: true
```

哨兵模式字段为 `sentinel.master/nodes/password/sentinel-password/database`；集群模式字段为 `cluster.nodes/password/max-redirects`。多数据源映射的每个实例对象使用相同字段结构。客户端池字段为 `max-idle`、`min-idle`、`max-active`、`max-wait`、`time-between-eviction-runs`。

多实例配置示例如下；具体使用 `singletons`、`sentinels` 或 `clusters` 中的一种，分别和单实例、哨兵或集群字段一致：

```yaml
lodsve:
  redis:
    default-name: cache
    singletons:
      cache:
        host: ${REDIS_HOST:127.0.0.1}
        port: 6379
        password: ${REDIS_PASSWORD:}
        database: 0
```

哨兵连接可将 `singleton` 替换为 `sentinel`，提供 `master`、`nodes`、`password`、`sentinel-password` 和 `database`；集群连接使用 `cluster.nodes`、`password`、`max-redirects`。这些连接模式不可在同一实例配置中混用。

```yaml
lodsve:
  redis:
    sentinel:
      # Sentinel 监控的主节点名称。
      master: mymaster
      nodes: [${REDIS_SENTINEL_1:127.0.0.1:26379}, ${REDIS_SENTINEL_2:127.0.0.1:26380}]
      # Redis 数据节点密码和 Sentinel 自身密码是两个独立属性。
      password: ${REDIS_PASSWORD:}
      sentinel-password: ${REDIS_SENTINEL_PASSWORD:}
      database: 0
```

```yaml
lodsve:
  redis:
    cluster:
      # 至少配置一个 host:port 节点。
      nodes: [${REDIS_NODE_1:127.0.0.1:6379}, ${REDIS_NODE_2:127.0.0.1:6380}]
      password: ${REDIS_PASSWORD:}
      max-redirects: 5
```
