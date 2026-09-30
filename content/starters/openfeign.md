---
title: OpenFeign
kicker: Starter
icon: ⇄
description: 为声明式 HTTP 客户端提供 Spring Cloud OpenFeign 集成入口。
weight: 80
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-openfeign</artifactId>
</dependency>
```

```java
@FeignClient(name = "user-service")
public interface UserClient {
    @GetMapping("/users/{id}")
    User get(@PathVariable Long id);
}
```

生产环境需要配置超时、重试和错误处理，避免远程调用阻塞业务线程。
