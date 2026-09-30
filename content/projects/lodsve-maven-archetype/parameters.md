---
title: "生成参数参考"
description: "区分模板坐标、工程坐标、通用应用参数与 RPC 专用参数。"
weight: 20
---

## 模板与工程坐标

| 参数 | 含义 | 示例 |
| --- | --- | --- |
| `archetypeGroupId` | 模板 groupId | `com.lodsve.archetype` |
| `archetypeArtifactId` | 选择哪个模板 | `lodsve-archetype-quickstart` |
| `archetypeVersion` | 模板版本 | 发布版 `1.0.3` 或已本地安装的 `1.0.4-SNAPSHOT` |
| `groupId` | 新工程 groupId | `com.example` |
| `artifactId` | 新工程 artifactId | `demo-app` |
| `version` | 新工程版本 | `1.0.0-SNAPSHOT` |
| `interactiveMode` | 是否交互确认 | 自动化使用 `false` |

## 模板要求的通用参数

| 参数 | 含义 | 元数据默认值 | 适用模板 |
| --- | --- | --- | --- |
| `package` | Java 基础包 | 未提供 | 全部 |
| `bootVersion` | 生成 POM 的 Lodsve Boot 父版本 | 未提供 | 全部 |
| `author` | 作者 | 未提供 | 全部 |
| `port` | 应用监听端口 | `8080` | 除 RPC API 外 |
| `contextPath` | Servlet 上下文路径 | `/` | 除 RPC API 外 |

批量生成时显式传入全部必要参数。`bootVersion` 不会升级模板内的 Java 源码或自动迁移历史配置。

## RPC 专用参数

| 参数 | 适用模板 | 含义 |
| --- | --- | --- |
| `serverAppName` | RPC API | 服务端的 `spring.application.name`，用于 Feign 服务名 |
| `serverContextPath` | RPC API | 服务端的上下文路径 |
| `apiGroupId` | RPC Server / Client | 共享 API 工程的 groupId |
| `apiArtifactId` | RPC Server / Client | 共享 API 工程的 artifactId |
| `apiVersion` | RPC Server / Client | 共享 API 工程的版本 |

RPC 三个模板的 `package` 应保持一致，或在生成后统一调整引用包名；它们需要共享同一套 API 类型。API 声明的服务名与上下文路径必须与 Server 实际配置一致。

## 依据

上述默认值来自各模块的 `META-INF/maven/archetype-metadata.xml`，而不是把 README 中的示例值视为默认值。

[模板仓库与元数据](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae)
