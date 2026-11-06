---
title: Spring Boot 4 迁移指南
description: 将 Lodsve Boot 应用迁移到 Spring Boot 4.1.2。
weight: 25
---

Lodsve Boot 当前只维护 Spring Boot 4 线，目标版本为 `4.1.2`。Spring Initializr 显示为 `4.1.2.RELEASE`，Maven parent 和 Gradle plugin 使用 `4.1.2`。

## 迁移清单

1. 将 JDK、Maven 或 Gradle 构建环境切换到 JDK 21。
2. 将 `javax.servlet`、`javax.persistence`、`javax.annotation` 和 `javax.validation` 导入改为对应的 `jakarta.*` 包。`javax.sql`、`javax.script` 属于 Java SE，无需改名。
3. 删除 Springfox 和 `io.swagger.annotations`，使用 `lodsve-boot-starter-swagger` 提供的 Springdoc OpenAPI 3 注解，例如 `@Tag`、`@Operation`、`@Parameter` 和 `@Schema`。
4. 检查自定义自动配置。Boot 4 使用 `META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports` 注册自动配置类。
5. 重新检查 Spring Cloud、Nacos、MyBatis、Druid 和 RocketMQ 的版本组合，并执行依赖树检查。

## 当前兼容性说明

Lodsve Boot 4 保留 Druid 数据源连接池能力，但 Druid 1.2.28 的监控 Servlet 和 Web Filter 仍基于 `javax.servlet`，因此 Boot 4 自动配置不会注册 Druid 监控页面与 Web 统计过滤器。请使用 Actuator 或单独部署 Jakarta 兼容的监控组件；待 Druid 提供 Jakarta 版本后再恢复注册。

## Maven 示例

```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>4.1.2</version>
</parent>
```

使用 Lodsve Boot 时，优先将 `com.lodsve.boot:lodsve-boot-dependencies` 作为父 POM，由它统一管理 Starter 与第三方依赖。

## 验证

```bash
./mvnw clean verify
./mvnw spring-boot:run
```

确认应用能够启动、自动配置条件生效，并访问 Swagger UI 与 Actuator endpoint。Boot 2/3 应用不能直接复用旧的 `javax.*` 依赖和 Springfox 配置；请在迁移完成后再升级业务代码。
