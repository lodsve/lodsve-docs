---
title: 版本与兼容性
description: 了解 Lodsve Boot、Spring Boot 和 JDK 的版本关系。
weight: 30
---

当前文档以 `1.0.3` 为例，项目基线为 JDK 17 和 Spring Boot 2.6.3。升级时请同时检查 Starter、底层 Component 和 Spring Boot 的兼容性。

| 项目 | 当前基线 |
| --- | --- |
| Lodsve Boot | 1.0.3 |
| Spring Boot | 2.6.3 |
| JDK | 17 |
| 构建工具 | Maven Wrapper |

推荐通过 BOM 管理版本，避免单独升级某个组件造成依赖树不一致。
