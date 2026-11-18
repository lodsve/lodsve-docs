---
title: "RPC Client Project"
description: "Reference the shared API and use Feign to call the server."
weight: 80
---

## Module responsibilities

The template contains `DemoRpcClientApplication`, `UserWebController` and data objects used by the client. The client relies on the shared API package and accesses the Server through the Feign interface.

## Generate project

finish first [RPC Guide](/projects/lodsve-maven-archetype/rpc/) Install the template in and set up `ARCHETYPE_VERSION` and `LODSVE_BOOT_VERSION` in the same terminal. The following commands are executed in the common parent directory of the three business projects.

```bash
: "${ARCHETYPE_VERSION:?Install the RPC archetypes and specify their version first}"
: "${LODSVE_BOOT_VERSION:?Set LODSVE_BOOT_VERSION first}"

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

## Pre-start configuration

Confirm that `demo-api` has been installed into the local Maven repository and is consistent with the API dependency coordinates in the generated POM. Modify the Nacos Discovery address, account, namespace and group in `application.yml`; Server and Client must be able to locate each other in the same service discovery environment.

Check the dependencies and Java types corresponding to the Boot version, and press [Quickstart](/projects/lodsve-maven-archetype/quickstart/#pre-build-checklist) Process the warehouse declaration that generates the POM.

```bash
cd demo-client
./mvnw clean package
./mvnw spring-boot:run
```

return to [RPC Engineering Guide](/projects/lodsve-maven-archetype/rpc/) Check the entire call chain.

[Template source code](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-rpc-client/src/main/resources)
