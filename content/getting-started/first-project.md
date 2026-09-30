---
title: 第一个项目
description: 使用 Spring Boot 启动一个最小应用，并添加 Lodsve Boot Starter。
weight: 20
---

## 1. 创建启动类

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

## 2. 添加一个 Starter

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-redis</artifactId>
</dependency>
```

## 3. 启动应用

```bash
./mvnw spring-boot:run
```

Starter 会通过 Spring Boot 自动配置机制注册组件。没有使用某项能力时，不需要添加对应依赖。
