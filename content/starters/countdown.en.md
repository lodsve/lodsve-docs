---
title: Countdown
kicker: Starter
icon: ◷
description: "Implement countdown and callback processing based on Redis Key expiration event."
weight: 150
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-countdown</artifactId>
</dependency>
```

The application needs to ensure that Redis Keyspace Notification is configured correctly and design idempotent processing for repeated events. The sample project provides how to use `CountdownTestHandler`.
