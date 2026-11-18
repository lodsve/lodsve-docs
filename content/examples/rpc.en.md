---
title: "RPC example"
description: "Call sample services via OpenFeign and Nacos."
---

The example is located at `lodsve-boot-examples/lodsve-boot-example-rpc`. `UserRpcApi` in the API module defines the shared interface, the Server module implements the interface, and the Client module calls the server through OpenFeign.

Use JDK 21 to build the server, client and their dependencies in the root directory of the main repository.

```bash
./mvnw -Pinclude-examples -pl :lodsve-boot-example-rpc-server,:lodsve-boot-example-rpc-client -am package
```

Before starting, fill in the Nacos service discovery address and required credentials in the respective `application.yml` of the server and client, and ensure that both parties use the same namespace and group.

Start `ExampleRpcServerApplication` first, confirm that `lodsve-boot-example-rpc-server` has been registered to Nacos, and then start `ExampleRpcClientApplication`. When using the default port and path, when accessing the client's `GET http://localhost:8081/client/user/all`, the client will call the server's `/server/rpc/feign/user/all`.
