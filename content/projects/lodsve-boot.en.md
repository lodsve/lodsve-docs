---
title: "Lodsve Boot"
description: "A Java development kit based on Spring Boot that provides dependency management, automatic configuration and composable starters."
weight: 10
kicker: "application development"
shortTitle: "Lodsve Boot"
project: "lodsve-boot"
repository: "https://github.com/lodsve/lodsve-boot"
---

## Project positioning

Lodsve Boot organizes common basic capabilities such as database, cache, messaging, file storage and Web into Component, Starter and automatic configuration modules. Business projects select dependencies as needed, and a unified BOM manages relevant versions.

## reading path

| what are you going to do | where to start |
| --- | --- |
| Introducing Lodsve Boot into existing projects | [Installation and dependencies](/getting-started/installation/) |
| Understand version and module boundaries | [Version management](/getting-started/version-management/) · [Architecture description](/concepts/architecture/) |
| Choose database, cache, or web capabilities | [Starter Catalog](/starters/) · [Component documentation](/components/) |
| View code and configuration examples | [Example Projects](/examples/) · [Configuration Reference](/reference/configuration/) |
| Create a new Maven project | [Maven Archetype](/projects/lodsve-maven-archetype/) |
| Use local Gradle templates | [Gradle Archetype Plugin](/projects/lodsve-gradle-archetype-plugin/) |

## Source code and feedback

- [Source code and README](https://github.com/lodsve/lodsve-boot)
- [Report an issue](https://github.com/lodsve/lodsve-boot/issues)

The current source code is based on Spring Boot `4.1.2` (Maven coordinates) and JDK 21. Boot's version requirements are managed separately from the scaffolding and plugin's own build environment; please select JDK and build tools based on the specific version.
