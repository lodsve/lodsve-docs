---
title: "Redis data access"
kicker: Component
description: "Redis single instance, sentinel and cluster connection configuration, multi-instance switching and serialization support."
---

## Connection model

The component creates single instance, Sentinel or Cluster connections through custom properties, and also supports multiple connection instances. The single-instance field is located at `singleton`, and the high-availability connection is located at `sentinel` or `cluster`; multi-instance uses `singletons`, `sentinels`, `clusters` mapping, and a default name can be set. The connection pool configuration is placed in the corresponding branch according to the Jedis/Lettuce client.

## Dynamic switching and serialization

`SwitchRedis` and the dynamic connection factory support the selection of Redis connections at the business call boundary. To switch to relying on component interception/context mechanisms, async thread boundaries should handle connection names explicitly. Serialization implementations include Jackson/Gson adaptation; applications should use consistent protocols for writes and reads, and consider migration of old cached data.

Properties, TTL units, and multi-instance YAML see [Redis configuration example](/examples/configuration/redis/), see the access [Redis Starter](/starters/redis/). `lodsve.redis` is the component connection configuration; the Spring Data Redis general properties and the custom data source of this component are not the same configuration model.

Connection failure checks schema configuration, node list, password, database index and network; cache TTL discrepancy checks Cache name mapping and seconds unit; switch invalidation checks whether the aspect goes through the Spring proxy and whether the data source is selected before the transaction connection is created.

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/redis/), see annotated examples [Configuration example of this module](/examples/configuration/redis/).
