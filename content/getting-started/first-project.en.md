---
title: "Your First Project"
description: "Start a minimal application using Spring Boot and add Lodsve Boot Starter."
weight: 20
---

## 1. Create startup class

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

## 2. Add a Starter

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-redis</artifactId>
</dependency>
```

## 3. Start the application

```bash
./mvnw spring-boot:run
```

The Starter will register the component through the Spring Boot automatic configuration mechanism. When a certain capability is not used, there is no need to add corresponding dependencies.
