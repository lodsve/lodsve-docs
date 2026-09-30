---
title: Validator
kicker: Starter
icon: ✓
description: 基于 AOP 对 POJO 执行统一校验，并提供常用字段校验注解。
weight: 110
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-validator</artifactId>
</dependency>
```

```java
@ValidateEntity
public class CreateUserForm {
    @Mobile
    private String mobile;
}
```

校验失败时应在 Web 层转换为统一错误响应，避免向客户端暴露内部堆栈。
