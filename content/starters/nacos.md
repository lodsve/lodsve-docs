---
title: Nacos
kicker: Starter
icon: ◎
description: 接入 Nacos 配置中心和服务发现能力。
weight: 70
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-nacos</artifactId>
</dependency>
```

```yaml
spring:
  cloud:
    nacos:
      server-addr: ${NACOS_SERVER_ADDR:127.0.0.1:8848}
```

将环境差异放在 Nacos 配置数据中，应用内只保留默认值和安全的本地开发配置。
