---
title: "Build parameter reference"
description: "Distinguish between template coordinates, engineering coordinates, general application parameters and RPC-specific parameters."
weight: 20
---

## Template and project coordinates

| parameters | meaning | Example |
| --- | --- | --- |
| `archetypeGroupId` | Template groupId | `com.lodsve.archetype` |
| `archetypeArtifactId` | Which template to choose | `lodsve-archetype-quickstart` |
| `archetypeVersion` | template version | Release version `1.0.3` or locally installed `1.0.4-SNAPSHOT` |
| `groupId` | New project groupId | `com.example` |
| `artifactId` | New project artifactId | `demo-app` |
| `version` | New project version | `1.0.0-SNAPSHOT` |
| `interactiveMode` | Whether to confirm interactively | Automated use `false` |

## Common parameters required by templates

| parameters | meaning | Metadata defaults | Applicable template |
| --- | --- | --- | --- |
| `package` | Java base package | Not provided | All |
| `bootVersion` | Generate the Lodsve Boot parent version of the POM | Not provided | All |
| `author` | Author | Not provided | All |
| `port` | Application listening port | `8080` | Except RPC API |
| `contextPath` | Servlet context path | `/` | Except RPC API |

Explicitly pass in all necessary parameters when generating batches. `bootVersion` will not upgrade the Java source code in the template or automatically migrate historical configurations.

## RPC specific parameters

| parameters | Applicable template | meaning |
| --- | --- | --- |
| `serverAppName` | RPC API | `spring.application.name` on the server side, used for Feign service name |
| `serverContextPath` | RPC API | Server context path |
| `apiGroupId` | RPC Server / Client | The groupId of the shared API project |
| `apiArtifactId` | RPC Server / Client | ArtifactId of the shared API project |
| `apiVersion` | RPC Server / Client | Sharing the version of the API project |

The `package` of the three RPC templates should be consistent, or the reference package name should be adjusted uniformly after generation; they need to share the same set of API types. The service name and context path declared by the API must be consistent with the actual configuration of the server.

## Basis

The above default values come from the `META-INF/maven/archetype-metadata.xml` of each module, rather than treating the example values in the README as default values.

[Template repository and metadata](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae)
