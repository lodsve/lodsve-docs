---
title: RabbitMQ
kicker: Starter
icon: ◇
description: 简化队列、交换器、绑定注册，并增强泛型消息序列化。
weight: 50
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-rabbitmq</artifactId>
</dependency>
```

```yaml
spring:
  rabbitmq:
    host: localhost
    port: 5672
    username: guest
    password: guest
```

生产者与消费者应约定消息类型、重试策略和幂等键。完整的生产者和消费者示例位于对应 example 模块。

完整配置项请查看[该模块配置参考](/reference/configuration/rabbitmq/)，带注释示例见[该模块配置示例](/examples/configuration/rabbitmq/)。
