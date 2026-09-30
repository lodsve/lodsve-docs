---
title: "RPC API 共享接口"
description: "生成 Feign 接口、DTO、路径常量与 API 自动配置。"
weight: 60
---

## 模块职责

`lodsve-archetype-rpc-api` 生成供服务双方共用的 API 包，包含 `UserRpcApi`、请求与响应 DTO、`PathConstant`、`DemoRpcApiAutoConfiguration`，以及 `META-INF/spring.factories`。

API 工程用于被其他工程依赖，不是独立启动的 HTTP 应用，不需要设置 `port` 或 `contextPath`。

## 生成 API

先完成 [RPC 指南](/projects/lodsve-maven-archetype/rpc/)中的模板安装，并在同一终端设置 `ARCHETYPE_VERSION` 与 `LODSVE_BOOT_VERSION`。以下命令在三个业务工程的共同父目录执行。

```bash
: "${ARCHETYPE_VERSION:?请先安装并指定 RPC 模板版本}"
: "${LODSVE_BOOT_VERSION:?请先设置 LODSVE_BOOT_VERSION}"

mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=com.lodsve.archetype \
  -DarchetypeArtifactId=lodsve-archetype-rpc-api \
  -DarchetypeVersion="$ARCHETYPE_VERSION" \
  -DgroupId=com.example \
  -DartifactId=demo-api \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=com.example.rpc \
  -Dauthor=developer \
  -DbootVersion="$LODSVE_BOOT_VERSION" \
  -DserverAppName=demo-server \
  -DserverContextPath=/demo-server
```

## 服务定位

`UserRpcApi` 使用 `@FeignClient`。服务名来自 `serverAppName`，路径前缀由 `serverContextPath` 和模板的 `/rpc/feign/user` 组合。修改 Server 的名称或上下文路径时，需要同步修改 API 契约。

## 安装共享包

先核对生成 POM 的依赖与仓库配置，检查项见 [Quickstart](/projects/lodsve-maven-archetype/quickstart/#构建前检查)，再执行：

```bash
cd demo-api
./mvnw clean install
cd ..
```

接下来[生成 Server](/projects/lodsve-maven-archetype/rpc-server/)。

[API 模板源码](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-rpc-api/src/main/resources)
