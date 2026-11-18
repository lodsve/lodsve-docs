---
title: "Lodsve Maven Archetype"
description: "Lodsve Boot scaffolding prepared for Maven projects, covering basic Web, MyBatis, Nacos and RPC projects."
weight: 30
kicker: "Maven scaffolding"
shortTitle: "Maven Archetype"
project: "lodsve-maven-archetype"
repository: "https://github.com/lodsve/lodsve-maven-archetype"
cascade: {"project": "lodsve-maven-archetype"}
---

## Project positioning

`lodsve-maven-archetype` encapsulates Lodsve Boot engineering convention as Maven Archetype. Generate POM, Java files and configurations through project coordinates, package names, Boot versions and other parameters to reduce the work of manually building the directory structure.

## Six template modules

| Template | Purpose | Instructions for use |
| --- | --- | --- |
| `lodsve-archetype-quickstart` | Basic Web Engineering and Common Layers | [Quickstart](/projects/lodsve-maven-archetype/quickstart/) |
| `lodsve-archetype-mybatis` | Data source, DAO, PO and Mapper examples | [MyBatis](/projects/lodsve-maven-archetype/mybatis/) |
| `lodsve-archetype-nacos` | Basic Web Project and Nacos Configuration Center Example | [Nacos](/projects/lodsve-maven-archetype/nacos/) |
| `lodsve-archetype-rpc-api` | Shared Feign interface, DTO and path constants | [RPC API](/projects/lodsve-maven-archetype/rpc-api/) |
| `lodsve-archetype-rpc-server` | Server-side implementation of API interface | [RPC Server](/projects/lodsve-maven-archetype/rpc-server/) |
| `lodsve-archetype-rpc-client` | Client project that calls shared API | [RPC Client](/projects/lodsve-maven-archetype/rpc-client/) |

All templates use groupId `com.lodsve.archetype`. For the collaboration process of the three RPC modules, see [RPC Engineering Guide](/projects/lodsve-maven-archetype/rpc/).

## version boundaries

The document structure and parameters are based on the warehouse `d1450a5`, and the `revision` of its root POM is `1.0.4-SNAPSHOT`. Maven Central can find the `1.0.3` releases of Quickstart, MyBatis, and Nacos; for the RPC module, please click [RPC Guide](/projects/lodsve-maven-archetype/rpc/) Installing from source, you cannot assume that they are also released with the same version.

`archetypeVersion` selects the template version, `bootVersion` selects the Lodsve Boot version that the application depends on, and `version` is the version of the new business project. The three are not interchangeable. The current template is for Lodsve Boot 1.0.4-SNAPSHOT / Spring Boot 4.1.2; the generated project uses Jakarta API and Springdoc OpenAPI 3, and is no longer compatible with Boot 2/3's `javax.*` and Springfox annotations.

## Source code basis

[Chinese README](https://github.com/lodsve/lodsve-maven-archetype/blob/master/README.cn.md) · [Source revision d1450a5](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae) · [Report an issue](https://github.com/lodsve/lodsve-maven-archetype/issues)

The README in each template currently only retains the project name placeholder. This chapter also refers to the respective `archetype-metadata.xml`, POM, Java files and YAML configurations.
