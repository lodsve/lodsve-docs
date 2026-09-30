---
title: "使用指南"
description: "从新建工程、复用模板或扩展构建三个入口开始使用 Lodsve。"
---

## 选择你的路径

| 场景 | 推荐入口 | 接下来做什么 |
| --- | --- | --- |
| 新建基于 Lodsve Boot 的 Maven 应用 | [Maven Quickstart](/projects/lodsve-maven-archetype/quickstart/) | 选择版本，生成工程，检查生成的 POM 与配置 |
| 新建数据库、配置中心或 RPC 示例 | [Maven 模板目录](/projects/lodsve-maven-archetype/) | 选择 MyBatis、Nacos 或 RPC 模板 |
| 团队已有 Gradle 工程模板 | [Gradle 快速开始](/projects/lodsve-gradle-archetype-plugin/getting-started/) | 准备本地模板，再传入项目参数 |
| 在现有 Maven 项目中生成 Java 常量 | [Java Template](/projects/lodsve-maven-plugins/java-template/) | 配置模板目录与生成阶段 |
| 打包时合并资源 | [Shade 扩展](/projects/lodsve-maven-plugins/shade/) | 为 Maven Shade Plugin 配置 Transformer |
| 在现有应用中引入基础能力 | [Boot 快速开始](/getting-started/) | 引入 BOM 与所需 Starter |

## 版本与验证

脚手架版本、Lodsve Boot 版本和业务工程版本是三个不同的值。选择版本时检查模板生成的依赖坐标，再验证生成工程的构建与运行。文档中的代码示例用于说明配置方法，不代表所有模板与任意 Boot、JDK 版本的组合都经过集成验证。
