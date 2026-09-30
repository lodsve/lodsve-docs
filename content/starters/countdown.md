---
title: Countdown
kicker: Starter
icon: ◷
description: 基于 Redis Key 过期事件实现倒计时和回调处理。
weight: 150
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-countdown</artifactId>
</dependency>
```

应用需要保证 Redis Keyspace Notification 配置正确，并为重复事件设计幂等处理。示例工程提供 `CountdownTestHandler` 的使用方式。
