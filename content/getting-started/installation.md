---
title: 安装与依赖
description: 配置 JDK 21 和 Maven，并通过 BOM 管理 Lodsve Boot 版本。
weight: 10
---

## 环境要求

- JDK 21；
- Maven 3.3 或更高版本；
- Spring Boot 2.6.x 兼容的应用。

## 引入依赖管理

在应用的 `pom.xml` 中导入依赖管理：

```xml
<parent>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-dependencies</artifactId>
    <version>1.0.3</version>
</parent>
```

然后按需添加 Starter。例如启用 WebMVC 增强：

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-webmvc</artifactId>
</dependency>
```

不建议在业务模块重复声明组件版本。版本由 `lodsve-boot-dependencies` 统一管理。

## 快照版本

试用开发中的能力时，可以使用带 `-SNAPSHOT` 后缀的版本，并配置对应的 Snapshot 仓库。生产环境建议使用稳定版本。
