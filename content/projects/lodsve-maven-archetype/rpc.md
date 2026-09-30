---
title: "RPC 工程指南"
description: "按 API → Server → Client 的顺序创建共享接口与调用双方。"
weight: 50
---

## 三个工程如何协作

API 定义接口契约、DTO 与服务路径；Server 实现接口并暴露 HTTP 服务；Client 引用同一 API，通过 Feign 调用 Server。这组模板的 RPC 基于 HTTP / OpenFeign。

| 工程 | 示例坐标 | 角色 |
| --- | --- | --- |
| API | `com.example:demo-api:1.0.0-SNAPSHOT` | 共享接口与 DTO，先安装到 Maven 仓库 |
| Server | `com.example:demo-server:1.0.0-SNAPSHOT` | 端口 `8080`，上下文 `/demo-server` |
| Client | `com.example:demo-client:1.0.0-SNAPSHOT` | 端口 `8081`，上下文 `/demo-client` |

## 先安装 RPC 模板

源码中包含 RPC 的 3 个模块，本次没有确认到它们在 Maven Central 的发布元数据。请从源码安装整个模板工程到本地仓库，而不是直接使用普通模板的 `1.0.3` 版本号。

```bash
git clone https://github.com/lodsve/lodsve-maven-archetype.git
cd lodsve-maven-archetype
# 本文对应的模板源码基线。
git checkout d1450a5767509f1605ce9797a3ac2cd3e5758dae
./mvnw clean install
cd ..
export ARCHETYPE_VERSION=1.0.4-SNAPSHOT
# 设置经过项目选型确认的 Boot 版本。
: "${LODSVE_BOOT_VERSION:?请先设置 LODSVE_BOOT_VERSION}"
```

模板构建成功后，按以下顺序执行各页面的生成命令。

## 创建顺序

1. [生成 RPC API](/projects/lodsve-maven-archetype/rpc-api/)，构建并安装共享 API 包。
2. [生成 RPC Server](/projects/lodsve-maven-archetype/rpc-server/)，引用该 API 包。
3. [生成 RPC Client](/projects/lodsve-maven-archetype/rpc-client/)，引用同版本 API。
4. 在 Server 与 Client 中对齐服务发现配置，再启动 Server 和 Client 验证调用。

## 必须对齐的配置

- 三个工程的基础包在示例中统一为 `com.example.rpc`，避免生成的 Java 导入指向不存在的包。
- API 的 `serverAppName=demo-server` 对应 Server 的 `spring.application.name`；`serverContextPath=/demo-server` 对应 Server 的 Servlet 上下文路径。
- Server 与 Client 使用一致的 `apiGroupId`、`apiArtifactId`、`apiVersion`。
- Server / Client 模板示例的 Nacos Discovery 地址为 `http://localhost:8888`，不是通用默认值。替换地址、账号、namespace 和 group，并确认所选依赖组合实际提供 Nacos 服务发现与 Feign 能力。

## 验证边界

模板包含演示 Controller 和内存构造的响应数据。生成文件成功只验证了脚手架参数替换；API 编译、依赖兼容、服务注册和远程调用仍需在具体环境中验证。

[RPC 模板源码](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae)
