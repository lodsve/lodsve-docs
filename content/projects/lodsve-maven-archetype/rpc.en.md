---
title: "RPC Project Guide"
description: "Create a shared interface and call parties in the order of API → Server → Client."
weight: 50
---

## How the three projects collaborate

API defines interface contract, DTO and service path; Server implements the interface and exposes HTTP service; Client refers to the same API and calls Server through Feign. RPC for this set of templates is based on HTTP / OpenFeign.

| Engineering | Example coordinates | role |
| --- | --- | --- |
| API | `com.example:demo-api:1.0.0-SNAPSHOT` | To share interfaces and DTOs, first install them in the Maven repository |
| Server | `com.example:demo-server:1.0.0-SNAPSHOT` | Port `8080`, context `/demo-server` |
| Client | `com.example:demo-client:1.0.0-SNAPSHOT` | Port `8081`, context `/demo-client` |

## Install the RPC template first

The source code contains three modules of RPC, but their release metadata in Maven Central has not been confirmed this time. Please install the entire template project from source code to the local warehouse instead of directly using the `1.0.3` version number of the ordinary template.

```bash
git clone https://github.com/lodsve/lodsve-maven-archetype.git
cd lodsve-maven-archetype
# The template source code baseline corresponding to this article.
git checkout d1450a5767509f1605ce9797a3ac2cd3e5758dae
./mvnw clean install
cd ..
export ARCHETYPE_VERSION=1.0.4-SNAPSHOT
# Set the Boot version confirmed by project selection.
: "${LODSVE_BOOT_VERSION:?Set LODSVE_BOOT_VERSION first}"
```

After the template is successfully built, execute the generation commands for each page in the following order.

## Creation order

1. [Generate RPC API](/projects/lodsve-maven-archetype/rpc-api/), build and install the shared API package.
2. [Generate RPC Server](/projects/lodsve-maven-archetype/rpc-server/), referencing the API package.
3. [Generate RPC Client](/projects/lodsve-maven-archetype/rpc-client/), referencing the same version of API.
4. Align the service discovery configuration in Server and Client before initiating Server and Client verification calls.

## Configurations that must be aligned

- The basic packages of the three projects are unified as `com.example.rpc` in the example to avoid the generated Java import pointing to non-existent packages.
- `serverAppName=demo-server` of the API corresponds to `spring.application.name` of the Server; `serverContextPath=/demo-server` corresponds to the Servlet context path of the Server.
- Server and Client use the same `apiGroupId`, `apiArtifactId`, and `apiVersion`.
- The Nacos Discovery address for the Server/Client template example is `http://localhost:8888`, which is not the universal default. Replace the address, account, namespace and group, and confirm that the selected dependency combination actually provides Nacos service discovery and Feign capabilities.

## Validation boundaries

The template contains response data that demonstrates the Controller and memory constructs. The successful generation of the file only verifies scaffolding parameter substitution; API compilation, dependency compatibility, service registration and remote calling still need to be verified in the specific environment.

[RPC template source code](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae)
