---
title: 版本与兼容性
description: 了解 Lodsve Boot、Spring Boot 和 JDK 的版本关系。
weight: 30
---

当前源码基线使用 JDK 21 和 Spring Boot `4.1.2`。Spring Initializr 将该版本显示为 `4.1.2.RELEASE`，Maven Central 的 parent 坐标使用不带后缀的 `4.1.2`。Lodsve Boot 只维护这一条 Boot 4 线，不再同步维护 Boot 2/3 兼容分支。

| 项目 | 当前基线 |
| --- | --- |
| Lodsve Boot | 1.0.4-SNAPSHOT（当前源码） |
| Spring Boot | 4.1.2（Initializr 展示为 4.1.2.RELEASE） |
| JDK | 21（当前源码） |
| 构建工具 | Maven Wrapper |

推荐通过 BOM 管理版本，避免单独升级某个组件造成依赖树不一致。

升级现有应用时，请阅读 [Spring Boot 4 迁移指南](/guides/spring-boot-4-migration/)。
