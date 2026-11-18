---
title: "Versions and FAQ"
description: "Troubleshoot template parsing, dependency compatibility, database and RPC generation issues."
weight: 90
---

## Archetype not found

Check the three template coordinates, the Maven repository, and the network. The current source code version is `1.0.4-SNAPSHOT`, and it cannot be inferred from "existing in the source code" that "it has been released in the central warehouse". RPC template press [RPC Guide](/projects/lodsve-maven-archetype/rpc/) Install from the source code first, `archetypeVersion` uses the actual installed version.

## Batch generation still requires input

`-DinteractiveMode=false` is used for non-interactive operation, and the parameters required by the template still need to be provided. Especially check `bootVersion`, `author`, `package`, and RPC-specific API coordinates and service location parameters, see [Parameter reference](/projects/lodsve-maven-archetype/parameters/).

## Maven reports that the HTTP repository is blocked

The generated POM of the source code baseline contains the historical HTTP warehouse address. Update it to HTTPS, or remove the redundant Central declaration; don't solve it by turning off Maven's HTTP interception.

## Build successful but compilation failed

Successful parameter replacement does not mean that dependencies or APIs have been migrated. Check the Boot parent version, Starter / Component coordinates and Java imports in the template. New versions of Boot may adopt different dependency structures. First determine the target version and then adjust the generation project.

## MyBatis failed to start

Confirm that the database can be connected, the business table has been prepared, and the Mapper path is consistent with the entity field. The data source and SQL provided by the template are examples, and the actual project is responsible for database initialization.

## RPC cannot find interface or service

API / Server / Client base packages should be consistent; install the shared API first, then build the calling parties. Check whether the service name and context path in the API are consistent with the Server, and confirm the Nacos address, namespace, group and service discovery dependencies.

## Container running version does not match

The Dockerfile baseline of the template uses the Java 21 runtime image and should be replaced according to the actual JDK requirements of the generated project. The source code, POM and image versions in the generated project need to be checked together.

[README and source code baseline](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae)
