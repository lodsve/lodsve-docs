---
title: RabbitMQ
kicker: Starter
icon: ◇
description: "Simplify queue, exchange, binding registration, and enhance generic message serialization."
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

Producers and consumers should agree on message types, retry strategies, and idempotent keys. Complete producer and consumer examples are located in the corresponding example modules.

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/rabbitmq/), see annotated examples [Configuration example of this module](/examples/configuration/rabbitmq/).
