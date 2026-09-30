---
title: "选择项目脚手架"
description: "比较 Maven Archetype 与 Gradle Archetype Plugin 的模板来源、生成方式和适用场景。"
weight: 10
---

## 两条创建路径

| 维度 | Maven Archetype | Gradle Archetype Plugin |
| --- | --- | --- |
| 项目 | `lodsve-maven-archetype` | `lodsve-gradle-archetype-plugin` |
| 模板来源 | Maven 仓库或已安装到本地仓库的 Archetype | 本地目录，默认 `src/main/resources/templates` |
| 内置内容 | Quickstart、MyBatis、Nacos、RPC API / Server / Client | 插件仓库提供生成引擎；需要自行准备模板 |
| 入口 | `mvn archetype:generate` | Gradle 的 `generate` 任务 |
| 生成结果 | 默认以 `artifactId` 为名的工程目录 | 生成器工程下的 `generated/` |
| 适合谁 | 希望直接使用已有 Boot 工程原型的 Maven 用户 | 希望复用和定制团队 Gradle 工程模板的用户 |

## Maven 用户

从 [Quickstart](/projects/lodsve-maven-archetype/quickstart/)生成一个基础 Web 工程。需要数据库访问时选择 [MyBatis](/projects/lodsve-maven-archetype/mybatis/)，使用配置中心时选择 [Nacos](/projects/lodsve-maven-archetype/nacos/)。分离 API 与实现的服务场景按 [RPC 指南](/projects/lodsve-maven-archetype/rpc/)依次创建 API、Server、Client。

## Gradle 用户

先创建一个应用 `com.lodsve.archetype` 插件的生成器工程，放入团队模板，再执行 `generate`。构建文件、Boot 依赖、Wrapper 和业务代码都来自模板；插件本身不附带一套与 Maven 相同的 Boot 模板。

完整步骤见 [Gradle 快速开始](/projects/lodsve-gradle-archetype-plugin/getting-started/)；变量与文件名规则见[模板编写](/projects/lodsve-gradle-archetype-plugin/templates/)。

## 生成后检查

1. 核对工程坐标、包名、端口和上下文路径。
2. 核对生成的 Boot 依赖版本与 JDK、构建工具版本。
3. 根据环境配置数据库、Nacos 等外部服务。
4. 构建并启动应用，验证一个业务接口后再开始扩展。
