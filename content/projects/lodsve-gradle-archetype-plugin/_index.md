---
title: "Lodsve Gradle Archetype Plugin"
description: "面向 Gradle 用户的本地模板生成插件，通过变量替换创建新的工程骨架。"
weight: 40
kicker: "Gradle 脚手架"
shortTitle: "Gradle Archetype"
project: "lodsve-gradle-archetype-plugin"
repository: "https://github.com/lodsve/lodsve-gradle-archetype-plugin"
cascade: {"project": "lodsve-gradle-archetype-plugin"}
---

## 项目定位

`lodsve-gradle-archetype-plugin` 为 Gradle 提供类似 Maven Archetype 的生成流程。它读取本地模板目录，替换文件内容和路径中的变量，将结果写入生成器工程的 `generated/` 目录。

它适合将团队的 Lodsve Boot / Gradle 工程整理成可重复使用的模板。当前仓库提供生成引擎，没有内置 Quickstart、MyBatis 或 Nacos 等应用模板；应用依赖与工程结构由模板维护者提供。

## 提供的任务

| 任务 | 作用 |
| --- | --- |
| `generate` | 解析参数并从本地模板生成工程 |
| `cleanArchetype` | 删除生成器工程中的整个 `generated/` 目录 |

插件 ID 为 `com.lodsve.archetype`。README 使用的 `cleanArch` 是任务名缩写，文档统一使用完整名称 `cleanArchetype`。

## 版本与构建环境

文档对照源码 `aca7077`，`gradle.properties` 中版本为 `1.0.1-RELEASE`。该版本可通过 Maven Central 的 `com.lodsve:lodsve-gradle-archetype-plugin` 安装，见[快速开始](/projects/lodsve-gradle-archetype-plugin/getting-started/)。Plugin Portal 的版本列表独立管理，不能把 Central 版本直接当作 Portal 插件版本。

源码仓库的 Wrapper 使用 Gradle `5.1.1`，源码兼容目标为 Java 8；这不是对所有较新 Gradle / JDK 组合的兼容承诺。生成器工程和最终生成的应用可有各自的构建环境，应分别确认。

## 源码依据

[README](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/master/README.md) · [源码基线 aca7077](https://github.com/lodsve/lodsve-gradle-archetype-plugin/tree/aca7077141a0b2201d069bd2925532e26ee26edc) · [Plugin Portal](https://plugins.gradle.org/plugin/com.lodsve.archetype) · [问题反馈](https://github.com/lodsve/lodsve-gradle-archetype-plugin/issues)
