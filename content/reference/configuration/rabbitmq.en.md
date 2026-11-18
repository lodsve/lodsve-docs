---
title: "RabbitMQ configuration"
description: "Complete configuration items, default values, example values, and enumeration descriptions for Lodsve Boot RabbitMQ configuration."
---

The Map key for `queues` is the queue name; the Broker connection uses `spring.rabbitmq.*`.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.rabbit.queues.<queue>.exchange-type` | `ExchangeType` | `DIRECT` | `TOPIC` | Switch type. |
| `lodsve.rabbit.queues.<queue>.exchange-name` | `String` | None | `user.events` | Switch name. |
| `lodsve.rabbit.queues.<queue>.routing-key` | `String` | None | `user.created` | DIRECT/TOPIC key binding; FANOUT not used. |
| `lodsve.rabbit.queues.<queue>.durable` | `boolean` | `true` | `true` | Whether the queue is persistent. |
| `lodsve.rabbit.queues.<queue>.exclusive` | `boolean` | `false` | `false` | Whether it is exclusive to the current connection. |
| `lodsve.rabbit.queues.<queue>.auto-delete` | `boolean` | `false` | `false` | Whether to delete automatically after there are no consumers. |

### `ExchangeType`

| value | meaning | Implementation status |
|---|---|---|
| `DIRECT` | Exactly matches the Routing Key. | support |
| `TOPIC` | Wildcard matching Routing Key. | support |
| `FANOUT` | Broadcast to the binding queue. | support |
| `HEADERS` | Match by message header. | The enumeration exists, but is explicitly not supported by the current implementation |
