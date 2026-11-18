---
title: "Redis configuration"
description: "Complete configuration items, default values, example values, and enumeration descriptions of Lodsve Boot Redis configuration."
---

The three single data source modes `singleton`, `sentinel`, and `cluster` are mutually exclusive; multiple data sources use corresponding plural Maps. The unit of Cache's `default-expiration` and `key-ttl` is seconds, and connecting `Duration` supports `2s`, `100ms` and other writing methods.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.redis.default-name` | `String` | None | `primary` | The default name of multiple data sources; do not fill in the first one. |
| `lodsve.redis.ssl` | `boolean` | `false` | `true` | Whether to enable SSL. |
| `lodsve.redis.timeout` | `Duration` | None | `2s` | Redis timeout. |
| `lodsve.redis.client-name` | `String` | None | `lodsve-app` | Redis `CLIENT SETNAME` name. |
| `lodsve.redis.singleton` | object | None | See table below | Single Redis instance. |
| `lodsve.redis.sentinel` | object | None | See table below | Sentinel instance. |
| `lodsve.redis.cluster` | object | None | See table below | Cluster instance. |
| `lodsve.redis.singletons.<name>` | object | None | `cache:` | Multiple single instances. |
| `lodsve.redis.sentinels.<name>` | object | None | `ha:` | Multiple Sentinel instances. |
| `lodsve.redis.clusters.<name>` | object | None | `cluster:` | Multiple Cluster instances. |
| `lodsve.redis.key-ttl.<cache-name>` | `Map<String,Long>` | None | `shortCache: 60` | Specify Cache TTL in seconds. |
| `lodsve.redis.default-expiration` | `long` | `0` | `3600` | Default Cache TTL, in seconds; `0` means permanent. |

### Redis connection object

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.redis.singleton.host` | `String` | None | `127.0.0.1` | Redis host. |
| `lodsve.redis.singleton.password` | `String` | None | `${REDIS_PASSWORD}` | Redis password. |
| `lodsve.redis.singleton.port` | `int` | `6379` | `6379` | Redis port. |
| `lodsve.redis.singleton.database` | `int` | `0` | `0` | Redis database number. |
| `lodsve.redis.sentinel.master` | `String` | None | `mymaster` | Sentinel master node name. |
| `lodsve.redis.sentinel.nodes` | `List<String>` | None | `[127.0.0.1:26379]` | Sentinel node list. |
| `lodsve.redis.sentinel.sentinel-password` | `String` | None | `${REDIS_SENTINEL_PASSWORD}` | Sentinel authentication password. |
| `lodsve.redis.sentinel.password` | `String` | None | `${REDIS_PASSWORD}` | Redis data node password. |
| `lodsve.redis.sentinel.database` | `int` | `0` | `0` | Redis database number. |
| `lodsve.redis.cluster.nodes` | `List<String>` | None | `[127.0.0.1:6379]` | Cluster initial node list, at least one. |
| `lodsve.redis.cluster.password` | `String` | None | `${REDIS_PASSWORD}` | Cluster password. |
| `lodsve.redis.cluster.max-redirects` | `Integer` | None | `5` | Cluster maximum number of redirects. |

### Redis client pool

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.redis.jedis.pool.max-idle` | `int` | `8` | `8` | Jedis maximum number of idle connections. |
| `lodsve.redis.jedis.pool.min-idle` | `int` | `0` | `2` | Jedis minimum number of idle connections. |
| `lodsve.redis.jedis.pool.max-active` | `int` | `8` | `16` | Jedis maximum number of connections. |
| `lodsve.redis.jedis.pool.max-wait` | `Duration` | `-1ms` | `2s` | Jedis gets the maximum waiting time for the connection. |
| `lodsve.redis.jedis.pool.time-between-eviction-runs` | `Duration` | None | `60s` | Jedis idle connection check interval. |
| `lodsve.redis.lettuce.share-native-connection` | `boolean` | `true` | `true` | Whether to share Lettuce native connections. |
| `lodsve.redis.lettuce.shutdown-timeout` | `Duration` | `100ms` | `100ms` | Lettuce shutdown timed out. |
| `lodsve.redis.lettuce.pool.max-idle` | `int` | `8` | `8` | Lettuce maximum number of idle connections. |
| `lodsve.redis.lettuce.pool.min-idle` | `int` | `0` | `2` | Lettuce minimum number of idle connections. |
| `lodsve.redis.lettuce.pool.max-active` | `int` | `8` | `16` | Lettuce maximum number of connections. |
| `lodsve.redis.lettuce.pool.max-wait` | `Duration` | `-1ms` | `2s` | Lettuce gets the maximum waiting time of the connection. |
| `lodsve.redis.lettuce.cluster.refresh.period` | `Duration` | None | `30s` | Cluster topology refresh interval. |
| `lodsve.redis.lettuce.cluster.refresh.adaptive` | `boolean` | `false` | `true` | Whether to adaptively refresh the Cluster topology. |
