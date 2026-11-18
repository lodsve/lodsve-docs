---
title: Swagger
kicker: Starter
icon: ◍
description: "Improved support for paging, authentication, and common parameters based on Springdoc OpenAPI 3."
weight: 100
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-swagger</artifactId>
</dependency>
```

Swagger automatic configuration is turned off by default and takes effect after setting `lodsve.swagger.enabled: true`. The Starter uses Springdoc OpenAPI 3 and no longer relies on Springfox; the business code uses `@Tag`, `@Operation` and `@Parameter` under `io.swagger.v3.oas.annotations`. Title, description, version, contact person, global parameters and Header authentication information can be set through `lodsve.swagger`. For a complete configuration example, see [Swagger configuration](/examples/configuration/swagger/). It is only recommended to open the documentation page in a development or protected test environment; access must be restricted in the production environment.

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/swagger/), see annotated examples [Configuration example of this module](/examples/configuration/swagger/).
