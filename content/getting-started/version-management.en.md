---
title: "Versions and compatibility"
description: "Understand the version relationships of Lodsve Boot, Spring Boot and JDK."
weight: 30
---

The current source code baseline uses JDK 21 and Spring Boot `4.1.2`. Spring Initializr shows this version as `4.1.2.RELEASE`, and Maven Central's parent coordinates use `4.1.2` without the suffix. Lodsve Boot only maintains this Boot 4 line and no longer maintains the Boot 2/3 compatible branches simultaneously.

| Project | current baseline |
| --- | --- |
| Lodsve Boot | 1.0.4-SNAPSHOT (current source code) |
| Spring Boot | 4.1.2 (Initializr is shown as 4.1.2.RELEASE) |
| JDK | 21 (current source code) |
| Build tools | Maven Wrapper |

It is recommended to manage versions through the BOM to avoid upgrading a component individually and causing inconsistency in the dependency tree.

When upgrading an existing application, please read [Spring Boot 4 Migration Guide](/guides/spring-boot-4-migration/).
