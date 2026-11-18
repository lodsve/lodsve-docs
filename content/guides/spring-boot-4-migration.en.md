---
title: "Spring Boot 4 Migration Guide"
description: "Migrate Lodsve Boot application to Spring Boot 4.1.2."
weight: 25
---

Lodsve Boot currently only maintains Spring Boot 4 lines, and the target version is `4.1.2`. Spring Initializr appears as `4.1.2.RELEASE`, Maven parent and Gradle plugin use `4.1.2`.

## Migration Checklist

1. Switch your JDK, Maven or Gradle build environment to JDK 21.
2. Change the `javax.servlet`, `javax.persistence`, `javax.annotation` and `javax.validation` imports to the corresponding `jakarta.*` packages. `javax.sql` and `javax.script` belong to Java SE and do not need to be renamed.
3. Remove Springfox and `io.swagger.annotations` and use Springdoc OpenAPI 3 annotations provided by `lodsve-boot-starter-swagger`, such as `@Tag`, `@Operation`, `@Parameter` and `@Schema`.
4. Check for custom auto-configuration. Boot 4 uses `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` to register the autoconfiguration class.
5. Recheck version combinations of Spring Cloud, Nacos, MyBatis, Druid and RocketMQ and perform dependency tree checks.

## Current compatibility notes

Lodsve Boot 4 retains the Druid data source connection pooling capability, but the monitoring Servlet and Web Filter of Druid 1.2.28 are still based on `javax.servlet`, so Boot 4 automatic configuration will not register the Druid monitoring page and Web statistics filter. Please use Actuator or deploy a Jakarta-compatible monitoring component separately; wait until Druid provides the Jakarta version before resuming registration.

## Maven example

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>4.1.2</version>
</parent>
```

When using Lodsve Boot, `com.lodsve.boot:lodsve-boot-dependencies` is preferred as the parent POM, which will uniformly manage Starter and third-party dependencies.

## Verify

```bash
./mvnw clean verify
./mvnw spring-boot:run
```

Confirm that the application can start, auto-configuration conditions take effect, and access the Swagger UI and Actuator endpoint. Boot 2/3 applications cannot directly reuse the old `javax.*` dependencies and Springfox configuration; please upgrade the business code after the migration is completed.
