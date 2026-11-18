---
title: "RPC API shared interface"
description: "Generate Feign interfaces, DTOs, path constants and API auto-configuration."
weight: 60
---

## Module responsibilities

`lodsve-archetype-rpc-api` generates an API package shared by both service parties, including `UserRpcApi`, request and response DTO, `PathConstant`, `DemoRpcApiAutoConfiguration`, and `META-INF/spring.factories`.

API projects are used for HTTP applications that are dependent on other projects and are not started independently. There is no need to set `port` or `contextPath`.

## Generate API

finish first [RPC Guide](/projects/lodsve-maven-archetype/rpc/) Install the template in and set up `ARCHETYPE_VERSION` and `LODSVE_BOOT_VERSION` in the same terminal. The following commands are executed in the common parent directory of the three business projects.

```bash
: "${ARCHETYPE_VERSION:?Install the RPC archetypes and specify their version first}"
: "${LODSVE_BOOT_VERSION:?Set LODSVE_BOOT_VERSION first}"

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

## Service positioning

`UserRpcApi` uses `@FeignClient`. The service name comes from `serverAppName` and the path prefix is a combination of `serverContextPath` and the template's `/rpc/feign/user`. When modifying the name or context path of the Server, the API contract needs to be modified simultaneously.

## Install shared packages

First check the dependencies and warehouse configuration of generated POM. For check items, see [Quickstart](/projects/lodsve-maven-archetype/quickstart/#pre-build-checklist), and then execute:

```bash
cd demo-api
./mvnw clean install
cd ..
```

Next [Generate Server](/projects/lodsve-maven-archetype/rpc-server/).

[API template source code](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-rpc-api/src/main/resources)
