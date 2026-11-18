---
title: "Countdown"
kicker: Component
description: "Trigger countdown events and business processors based on Redis Key expiration notification."
---

## Capabilities and Workflows

Countdown listens to Redis Key expiration events, parses Redis notifications into component events, and then distributes them to `CountdownEventHandler` registered in the application. The application registers countdown information through `CountdownPublisher`; the processor receives the event after timeout. It is suitable for eventual consistency scenarios such as order retention and verification code expiration, but is not suitable as a timing scheduler accurate to milliseconds.

Before enabling, the Redis service needs to allow Keyspace Notifications and ensure that the database number of the application connection is included in `lodsve.countdown.database`. Automatic configuration is turned off by default and `lodsve.countdown.enabled: true` needs to be explicitly set; countdown automatic configuration requires the existence of a unique `RedisConnectionFactory` in the Spring container. Redis notifications may be repeated or lost due to disconnection, the processor must be idempotent, and the business status itself can be understood.

## Processor and Troubleshooting

Implement `CountdownEventHandler` and register it as a Spring Bean, re-read and verify the business record status in the callback, and then perform the expiration action. Do not rely solely on event payloads to determine business status, and do not perform long-term blocking operations in callbacks.

For complete configuration, see [Component Configuration Examples](/examples/configuration/countdown/), depending on access see [Countdown Starter](/starters/countdown/). Check the Redis notification settings, database number, Starter dependency, auto-configuration switch and Redis connection when the event is not triggered; check the processor idempotence when the event is triggered repeatedly.

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/countdown/), see annotated examples [Configuration example of this module](/examples/configuration/countdown/).
