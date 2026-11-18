---
title: "RPC Server service implementation"
description: "Implement a shared API and provide HTTP services."
weight: 70
---

## Module responsibilities

The template contains `DemoRpcServerApplication` and `UserRpcController` which implements `UserRpcApi`. The path of the Controller is `/rpc/feign/user`, and the service is provided after superimposing the application context path. The example returns data constructed in memory, and business services can be connected on this basis.

## Generate project

finish first [RPC Guide](/projects/lodsve-maven-archetype/rpc/) Install the template in and set up `ARCHETYPE_VERSION` and `LODSVE_BOOT_VERSION` in the same terminal. The following commands are executed in the common parent directory of the three business projects.

```bash
: "${ARCHETYPE_VERSION:?Install the RPC archetypes and specify their version first}"
: "${LODSVE_BOOT_VERSION:?Set LODSVE_BOOT_VERSION first}"

mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=com.lodsve.archetype \
  -DarchetypeArtifactId=lodsve-archetype-rpc-server \
  -DarchetypeVersion="$ARCHETYPE_VERSION" \
  -DgroupId=com.example \
  -DartifactId=demo-server \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=com.example.rpc \
  -Dauthor=developer \
  -DbootVersion="$LODSVE_BOOT_VERSION" \
  -Dport=8080 \
  -DcontextPath=/demo-server \
  -DapiGroupId=com.example \
  -DapiArtifactId=demo-api \
  -DapiVersion=1.0.0-SNAPSHOT
```

## Pre-start configuration

Confirm that `demo-api` has been installed into the local Maven repository and is consistent with the API dependency coordinates in the generated POM. Modify the Nacos Discovery address, account, namespace and group in `application.yml`; Server and Client must be able to locate each other in the same service discovery environment.

Check the dependencies and Java types corresponding to the Boot version, and press [Quickstart](/projects/lodsve-maven-archetype/quickstart/#pre-build-checklist) Process the warehouse declaration that generates the POM.

```bash
cd demo-server
./mvnw clean package
./mvnw spring-boot:run
```

continue [Generate Client](/projects/lodsve-maven-archetype/rpc-client/).

[Template source code](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-rpc-server/src/main/resources)
