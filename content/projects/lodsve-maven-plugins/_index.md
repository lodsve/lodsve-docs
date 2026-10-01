---
title: "Lodsve Maven Plugins"
description: "为 Lodsve 提供 Java 模板生成与 Shade 资源合并能力，扩展 Maven 构建流程。"
weight: 20
kicker: "构建工具"
shortTitle: "Maven Plugins"
project: "lodsve-maven-plugins"
repository: "https://github.com/lodsve/lodsve-maven-plugins"
cascade: {"project": "lodsve-maven-plugins"}
---

## 项目定位

`lodsve-maven-plugins` 包含两个子模块，分别处理生成源码与合并打包资源。它们作用于现有 Maven 工程；创建新工程请使用 [Maven Archetype](/projects/lodsve-maven-archetype/)。

| 子模块 | 作用 | 接入方式 |
| --- | --- | --- |
| `lodsve-javatemplate-maven-plugin` | 过滤 Java 模板中的 Maven 属性，注册生成的主源码或测试源码目录 | 配置 Maven 插件的两个 goal |
| `lodsve-shade-maven-plugin` | 合并 `spring.factories` 和正则匹配的同路径资源 | 作为 Maven Shade Plugin 的依赖，配置 Transformer |

## 版本与环境

本文以源码版本 `1.0.3` 为基线，两个模块的 groupId 均为 `com.lodsve.maven.plugins`。当前父 POM 的构建 profile 使用 JDK 21，Maven API 依赖为 `3.6.3`；这些信息描述插件自身，不代表 Lodsve Boot 应用的运行要求。

## 源码依据

[中文 README](https://github.com/lodsve/lodsve-maven-plugins/blob/master/README.cn.md) · [源码基线 e1a9195](https://github.com/lodsve/lodsve-maven-plugins/tree/e1a9195c89fd5a106a9616bc27f31b93399e6611) · [问题反馈](https://github.com/lodsve/lodsve-maven-plugins/issues)

README 中的 Java 模板插件说明尚未展开，本章的 goal、目录和参数已对照对应 Mojo 源码补齐。
