---
title: "Redis example"
description: "Redis sample YAML configuration example."
---

## Redis

The following is a single instance example. The three connection modes `singleton`, `sentinel`, and `cluster` are mutually exclusive; for multiple instances, use the plural form `singletons`, `sentinels`, or `clusters`, and select the default instance through `default-name`.

```yaml
spring:
  mvc:
    # Redis serialization implementation choice; available jackson or gson, is a Spring property.
    converters:
      preferred-json-mapper: jackson
lodsve:
  redis:
    # A default connection name can be specified for dynamic multiple instances.
    default-name: primary
    ssl: false
    timeout: 2s
    client-name: lodsve-app
    singleton:
      host: ${REDIS_HOST:127.0.0.1}
      port: 6379
      password: ${REDIS_PASSWORD:}
      database: 0
    # Mapping of Cache names to TTL in seconds; default-expiration is used if no match is found.
    key-ttl:
      shortCache: 60
    # Default cache TTL, in seconds; 0 means permanent.
    default-expiration: 0
    # Jedis/Lettuce connection pool configuration, set the corresponding branch according to the client actually used by the project.
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

The sentinel mode field is `sentinel.master/nodes/password/sentinel-password/database`; the cluster mode field is `cluster.nodes/password/max-redirects`. Each instance object of a multi-data source mapping uses the same field structure. The client pool fields are `max-idle`, `min-idle`, `max-active`, `max-wait`, `time-between-eviction-runs`.

The multi-instance configuration example is as follows; specifically use one of `singletons`, `sentinels` or `clusters`, which is consistent with the single instance, sentinel or cluster fields respectively:

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

Sentinel connections replace `singleton` with `sentinel`, providing `master`, `nodes`, `password`, `sentinel-password`, and `database`; cluster connections use `cluster.nodes`, `password`, `max-redirects`. These connection modes cannot be mixed in the same instance configuration.

```yaml
lodsve:
  redis:
    sentinel:
      # The name of the master node monitored by Sentinel.
      master: mymaster
      nodes: [${REDIS_SENTINEL_1:127.0.0.1:26379}, ${REDIS_SENTINEL_2:127.0.0.1:26380}]
      # The Redis data node password and Sentinel's own password are two independent properties.
      password: ${REDIS_PASSWORD:}
      sentinel-password: ${REDIS_SENTINEL_PASSWORD:}
      database: 0
```

```yaml
lodsve:
  redis:
    cluster:
      # Configure at least one host:port node.
      nodes: [${REDIS_NODE_1:127.0.0.1:6379}, ${REDIS_NODE_2:127.0.0.1:6380}]
      password: ${REDIS_PASSWORD:}
      max-redirects: 5
```
