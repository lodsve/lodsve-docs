---
title: RPC 示例
description: 通过 OpenFeign 和 Nacos 调用示例服务。
---

示例位于 `lodsve-boot-examples/lodsve-boot-example-rpc`。API 模块中的 `UserRpcApi` 定义共享接口，Server 模块实现接口，Client 模块通过 OpenFeign 调用服务端。

使用 JDK 21，在主仓库根目录构建服务端、客户端及其依赖。

```bash
./mvnw -Pinclude-examples -pl :lodsve-boot-example-rpc-server,:lodsve-boot-example-rpc-client -am package
```

启动前，在服务端和客户端各自的 `application.yml` 中填写 Nacos 服务发现地址及所需凭据，并确保双方使用相同的命名空间和分组。

先启动 `ExampleRpcServerApplication`，确认 `lodsve-boot-example-rpc-server` 已注册到 Nacos，再启动 `ExampleRpcClientApplication`。使用默认端口和路径时，访问客户端的 `GET http://localhost:8081/client/user/all`，客户端会调用服务端的 `/server/rpc/feign/user/all`。
