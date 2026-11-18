---
title: "Application Events"
kicker: Component
description: "Spring in-application event executor configuration and event listening integration."
---

## Capability boundary

Event Starter provides in-application event-related beans and asynchronous executor configuration, suitable for notification and decoupling within the same process. It is not responsible for cross-process delivery, persistence, retries, or message ordering; use RabbitMQ or RocketMQ when reliable cross-service communication is required.

Listeners should be kept as short as possible. Asynchronous execution will change the transaction timing: if the event must be processed after the database is committed, publishing after the transaction is committed should be explicitly scheduled; asynchronous tasks will not automatically inherit the transaction context.

## Thread pool adjustments

Configure core/max thread count, queue capacity, and time-to-live via `lodsve.event`. The default maximum thread and queue capacities are very large. Production deployment should combine peak and downstream capacity settings to avoid unbounded thread creation or unbounded accumulation. For field and annotation examples see [Component Configuration Examples](/examples/configuration/event/).

## Use and troubleshooting

Use Spring's event publishing and listening mechanism to register business events; confirm that the listener bean has entered the component scanning scope. Asynchronous listeners check dependencies when not running, whether the thread pool is exhausted, and whether events are published by the correct ApplicationContext. See you for more access [Event Starter](/starters/event/).

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/event/), see annotated examples [Configuration example of this module](/examples/configuration/event/).
