---
title: Redis
kicker: Starter
icon: ◌
description: 整合 Redis 连接、序列化和业务缓存访问。
weight: 30
---

## 引入依赖

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-redis</artifactId>
</dependency>
```

## 连接与访问

Lodsve 的连接配置使用 `lodsve.redis`，支持单实例、Sentinel、Cluster 和具名多数据源；不要将 `spring.redis` 当作这些自定义数据源的配置入口。组件在 Spring Data Redis 基础上提供连接工厂和序列化整合。普通单实例可注入 `StringRedisTemplate`；复杂对象应统一序列化协议，并设计键命名和过期策略。

```java
@Service
public class UserCache {
    private final StringRedisTemplate redis;

    public UserCache(StringRedisTemplate redis) {
        this.redis = redis;
    }
}
```

## 配置与排错

完整示例覆盖连接模式、池、超时、TTL 和 Lettuce 集群拓扑刷新，见[Redis 配置示例](/examples/configuration/redis/)。生产凭据通过环境变量注入。连接失败先检查模式与节点信息、密码、数据库索引及客户端依赖；Cache TTL 以秒配置。
