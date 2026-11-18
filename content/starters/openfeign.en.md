---
title: OpenFeign
kicker: Starter
icon: ⇄
description: "Provides Spring Cloud OpenFeign integration portal for declarative HTTP clients."
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

The production environment needs to configure timeouts, retries and error handling to avoid remote calls blocking business threads.
