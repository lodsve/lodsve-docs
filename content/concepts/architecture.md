---
title: 架构与模块
description: Lodsve Boot 如何把 Component、Starter 和自动配置组织在一起。
weight: 10
---

Lodsve Boot 由依赖管理、基础组件、Starter 和示例工程组成：

```text
业务应用
  └── lodsve-boot-starter-*
        ├── lodsve-boot-component-*
        └── Spring Boot AutoConfiguration
```

`lodsve-boot-dependencies` 负责版本对齐；`lodsve-boot-component-*` 承载可复用实现；`lodsve-boot-starter-*` 组合依赖并提供面向应用的入口；`lodsve-boot-autoconfigure` 负责通用自动配置。

## 为什么分层

- 应用只依赖 Starter，升级和配置入口更稳定；
- Component 可以被 Starter 或高级用户单独复用；
- 自动配置集中处理 Bean 注册、属性绑定和条件判断；
- 示例工程验证每类基础设施的最小用法。

## 从源码定位问题

先看 Starter 的 `pom.xml`，确认它引入的 Component；再看 Component 的 `src/main/java` 和 `src/main/resources/META-INF`，最后对照 `lodsve-boot-examples` 中的运行示例。
