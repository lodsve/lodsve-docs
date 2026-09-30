---
title: Starter 与 Component
description: 选择应用依赖时，理解两个层次的职责边界。
weight: 20
---

## Starter

Starter 是应用集成入口，通常只包含依赖组合和自动配置入口。业务项目优先依赖 Starter，例如 `lodsve-boot-starter-mybatis`。

## Component

Component 是具体能力实现，例如 MyBatis Repository、文件系统适配器或 Redis 序列化增强。需要更细粒度控制时，可以直接查看 Component API，但仍要自行负责更多配置。

## 选择建议

| 场景 | 推荐 |
| --- | --- |
| 普通 Spring Boot 应用 | Starter |
| 自定义 Bean 或适配器 | Starter + Component API |
| 开发 Lodsve Boot 扩展 | Component |
| 只想统一版本 | dependencies BOM |
