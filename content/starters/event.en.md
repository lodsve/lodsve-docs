---
title: Event
kicker: Starter
icon: ↗
description: "Provides a unified component entrance for in-app event publishing and monitoring."
weight: 160
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-event</artifactId>
</dependency>
```

This Starter is used for event decoupling within the same Spring application and does not provide message persistence and cross-process delivery. Handle time-consuming tasks to the asynchronous executor, and configure the number of threads and queue capacity appropriately; if the event needs to be executed after the database is submitted, the release timing should be explicitly arranged. For complete thread pool attributes and Chinese comments, see [Event configuration example](/examples/configuration/event/).
