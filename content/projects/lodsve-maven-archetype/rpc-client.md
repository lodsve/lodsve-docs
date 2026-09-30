---
title: "RPC Client 调用工程"
description: "引用共享 API，使用 Feign 调用服务端。"
weight: 80
---

## 模块职责

模板包含 `DemoRpcClientApplication`、`UserWebController` 和客户端使用的数据对象。客户端依赖共享 API 包，通过其中的 Feign 接口访问 Server。

## 生成工程

先完成 [RPC 指南](/projects/lodsve-maven-archetype/rpc/)中的模板安装，并在同一终端设置 `ARCHETYPE_VERSION` 与 `LODSVE_BOOT_VERSION`。以下命令在三个业务工程的共同父目录执行。

```bash
: "${ARCHETYPE_VERSION:?请先安装并指定 RPC 模板版本}"
: "${LODSVE_BOOT_VERSION:?请先设置 LODSVE_BOOT_VERSION}"

mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=com.lodsve.archetype \
  -DarchetypeArtifactId=lodsve-archetype-rpc-client \
  -DarchetypeVersion="$ARCHETYPE_VERSION" \
  -DgroupId=com.example \
  -DartifactId=demo-client \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=com.example.rpc \
  -Dauthor=developer \
  -DbootVersion="$LODSVE_BOOT_VERSION" \
  -Dport=8081 \
  -DcontextPath=/demo-client \
  -DapiGroupId=com.example \
  -DapiArtifactId=demo-api \
  -DapiVersion=1.0.0-SNAPSHOT
```

## 启动前配置

确认 `demo-api` 已安装到本地 Maven 仓库，并与生成 POM 中的 API 依赖坐标一致。修改 `application.yml` 中的 Nacos Discovery 地址、账号、namespace 和 group；Server 与 Client 必须能够在相同的服务发现环境中互相定位。

核对 Boot 版本对应的依赖和 Java 类型，并按 [Quickstart](/projects/lodsve-maven-archetype/quickstart/#构建前检查)处理生成 POM 的仓库声明。

```bash
cd demo-client
./mvnw clean package
./mvnw spring-boot:run
```

回到 [RPC 工程指南](/projects/lodsve-maven-archetype/rpc/)核对整条调用链。

[模板源码](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-rpc-client/src/main/resources)
