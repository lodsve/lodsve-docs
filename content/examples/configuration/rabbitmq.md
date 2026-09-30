---
title: RabbitMQ 示例
description: RabbitMQ 示例 YAML 配置示例。
---

## RabbitMQ

以下 `lodsve.rabbit` 定义组件要创建的队列与交换器；连接地址、账号等仍使用 Spring AMQP 标准 `spring.rabbitmq` 属性。虽然 `HEADERS` 存在于枚举中，当前自动配置会明确拒绝它；可用类型为 `DIRECT`、`TOPIC`、`FANOUT`。

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
      # 映射键是逻辑队列名称；交换器类型支持 DIRECT、TOPIC、FANOUT。
      user-created:
        exchange-type: TOPIC
        exchange-name: user.events
        routing-key: user.created
        durable: true
        exclusive: false
        auto-delete: false
```
