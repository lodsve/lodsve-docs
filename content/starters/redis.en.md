---
title: Redis
kicker: Starter
icon: ◌
description: "Integrate Redis connections, serialization and business cache access."
weight: 30
---

## Introduce dependencies

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-redis</artifactId>
</dependency>
```

## Connect and access

Lodsve's connection configuration uses `lodsve.redis`, which supports single instance, Sentinel, Cluster and multiple named data sources; do not use `spring.redis` as the configuration entry for these custom data sources. The component provides connection factory and serialization integration based on Spring Data Redis. Ordinary single instances can be injected into `StringRedisTemplate`; complex objects should unify the serialization protocol and design key naming and expiration strategies.

```java
@Service
public class UserCache {
    private final StringRedisTemplate redis;

    public UserCache(StringRedisTemplate redis) {
        this.redis = redis;
    }
}
```

## Configuration and troubleshooting

For a complete example covering connection modes, pools, timeouts, TTL and Lettuce cluster topology refresh, see [Redis configuration example](/examples/configuration/redis/). Production credentials are injected via environment variables. If the connection fails, check the mode and node information, password, database index and client dependencies first; Cache TTL is configured in seconds.
