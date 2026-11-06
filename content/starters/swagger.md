---
title: Swagger
kicker: Starter
icon: ◍
description: 基于 Springdoc OpenAPI 3 改进分页、身份验证和通用参数的支持。
weight: 100
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-swagger</artifactId>
</dependency>
```

Swagger 自动配置默认关闭，设置 `lodsve.swagger.enabled: true` 后生效。该 Starter 使用 Springdoc OpenAPI 3，不再依赖 Springfox；业务代码使用 `io.swagger.v3.oas.annotations` 下的 `@Tag`、`@Operation` 和 `@Parameter`。可通过 `lodsve.swagger` 设置标题、描述、版本、联系人、全局参数和 Header 认证信息。完整配置示例见[Swagger 配置](/examples/configuration/swagger/)。只建议在开发或受保护的测试环境开放文档页；生产环境需限制访问。

完整配置项请查看[该模块配置参考](/reference/configuration/swagger/)，带注释示例见[该模块配置示例](/examples/configuration/swagger/)。
