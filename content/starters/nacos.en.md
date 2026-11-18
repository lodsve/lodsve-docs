---
title: Nacos
kicker: Starter
icon: ◎
description: "Access Nacos configuration center and service discovery capabilities."
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

Put environment differences in the Nacos configuration data and keep only defaults and safe local development configurations within the application.
