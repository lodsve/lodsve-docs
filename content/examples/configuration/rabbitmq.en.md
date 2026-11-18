---
title: "RabbitMQ example"
description: "RabbitMQ sample YAML configuration example."
---

## RabbitMQ

The following `lodsve.rabbit` defines the queue and exchanger to be created by the component; the connection address, account, etc. still use the Spring AMQP standard `spring.rabbitmq` attributes. Although `HEADERS` is present in the enumeration, current autoconfiguration explicitly rejects it; available types are `DIRECT`, `TOPIC`, `FANOUT`.

```yaml
spring:
  rabbitmq:
    host: ${RABBITMQ_HOST:localhost}
    port: 5672
    username: ${RABBITMQ_USERNAME:guest}
    password: ${RABBITMQ_PASSWORD:guest}
lodsve:
  rabbit:
    queues:
      # The mapping key is the logical queue name; the exchange type supports DIRECT, TOPIC, and FANOUT.
      user-created:
        exchange-type: TOPIC
        exchange-name: user.events
        routing-key: user.created
        durable: true
        exclusive: false
        auto-delete: false
```
