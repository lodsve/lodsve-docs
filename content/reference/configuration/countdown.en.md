---
title: "Countdown configuration"
description: "Complete configuration items, default values, example values, and enumeration descriptions for Lodsve Boot Countdown configuration."
---

Autoconfiguration also requires unique `RedisConnectionFactory`, related classes, and Redis Keyspace Notifications.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.countdown.enabled` | `boolean` | `false` | `true` | Countdown auto-configuration switch. |
| `lodsve.countdown.database` | `List<Integer>` | None | `[0]` | Database number that listens for Redis Key expiration events. |

The units of `ttl` for `CountdownPublisher.countdown` are seconds; events may be duplicated or lost, and the processor must be idempotent.
