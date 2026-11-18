---
title: "Installation and dependencies"
description: "Configure JDK 21 and Maven and manage Lodsve Boot versions through BOM."
weight: 10
---

## Environmental requirements

- JDK 21;
- Maven 3.3 or higher;
- Spring Boot 4.1.x compatible applications; Lodsve Boot does not currently provide a Boot 2/3 compatible branch.

## Introduce dependency management

Import dependency management in `pom.xml` of the application:

```xml
<parent>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-dependencies</artifactId>
    <version>1.0.4-SNAPSHOT</version>
</parent>
```

Then add Starters as needed. For example, enable WebMVC enhancements:

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-webmvc</artifactId>
</dependency>
```

It is not recommended to repeatedly declare component versions in business modules. The version is managed uniformly by `lodsve-boot-dependencies`.

Boot 4 uses the Jakarta API. `javax.servlet`, `javax.persistence` and `javax.annotation` in the application source code need to be migrated to the corresponding `jakarta.*` package; Springfox users please use Springdoc OpenAPI 3 provided by Lodsve Boot Swagger Starter instead.

## snapshot version

When trying out the capabilities under development, you can use the version with the `-SNAPSHOT` suffix and configure the corresponding Snapshot repository. It is recommended to use the stable version for production environments.
