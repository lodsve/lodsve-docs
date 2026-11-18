---
title: Validator
kicker: Starter
icon: ✓
description: "Perform unified verification on POJO based on AOP, and provide common field verification annotations."
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

When validation fails, it should be converted into a unified error response at the web layer to avoid exposing the internal stack to the client.
