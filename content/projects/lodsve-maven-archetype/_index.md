---
title: "Lodsve Maven Archetype"
description: "为 Maven 工程准备的 Lodsve Boot 脚手架，覆盖基础 Web、MyBatis、Nacos 与 RPC 项目。"
weight: 30
kicker: "Maven 脚手架"
shortTitle: "Maven Archetype"
project: "lodsve-maven-archetype"
repository: "https://github.com/lodsve/lodsve-maven-archetype"
cascade: {"project": "lodsve-maven-archetype"}
---

## 项目定位

`lodsve-maven-archetype` 将 Lodsve Boot 工程约定封装为 Maven Archetype。通过工程坐标、包名、Boot 版本等参数生成 POM、Java 文件与配置，减少手工搭建目录结构的工作。

## 六个模板模块

| 模板 | 用途 | 使用说明 |
| --- | --- | --- |
| `lodsve-archetype-quickstart` | 基础 Web 工程与常见分层 | [Quickstart](/projects/lodsve-maven-archetype/quickstart/) |
| `lodsve-archetype-mybatis` | 数据源、DAO、PO 与 Mapper 示例 | [MyBatis](/projects/lodsve-maven-archetype/mybatis/) |
| `lodsve-archetype-nacos` | 基础 Web 工程与 Nacos 配置中心示例 | [Nacos](/projects/lodsve-maven-archetype/nacos/) |
| `lodsve-archetype-rpc-api` | 共享 Feign 接口、DTO 与路径常量 | [RPC API](/projects/lodsve-maven-archetype/rpc-api/) |
| `lodsve-archetype-rpc-server` | API 接口的服务端实现 | [RPC Server](/projects/lodsve-maven-archetype/rpc-server/) |
| `lodsve-archetype-rpc-client` | 调用共享 API 的客户端工程 | [RPC Client](/projects/lodsve-maven-archetype/rpc-client/) |

全部模板使用 groupId `com.lodsve.archetype`。三个 RPC 模块的协作流程见 [RPC 工程指南](/projects/lodsve-maven-archetype/rpc/)。

## 版本边界

文档结构与参数依据仓库 `d1450a5`，其根 POM 的 `revision` 为 `1.0.4-SNAPSHOT`。Maven Central 可查到 Quickstart、MyBatis、Nacos 的 `1.0.3` 发布版；RPC 模块请先按 [RPC 指南](/projects/lodsve-maven-archetype/rpc/)从源码安装，不能假设它们也发布了同一个版本。

`archetypeVersion` 选择模板版本，`bootVersion` 选择应用依赖的 Lodsve Boot 版本，`version` 则是新业务工程的版本。三者不能互换。模板包含历史依赖与配置，用新的 Boot 版本生成后还需要核对依赖坐标和 API。

## 源码依据

[中文 README](https://github.com/lodsve/lodsve-maven-archetype/blob/master/README.cn.md) · [源码基线 d1450a5](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae) · [问题反馈](https://github.com/lodsve/lodsve-maven-archetype/issues)

各模板内的 README 目前仅保留工程名占位符，本章同时参考各自的 `archetype-metadata.xml`、POM、Java 文件与 YAML 配置。
