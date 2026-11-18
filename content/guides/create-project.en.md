---
title: "Choose a Project Template"
description: "Compare the template sources, generation methods and applicable scenarios of Maven Archetype and Gradle Archetype Plugin."
weight: 10
---

## Two creation paths

| Dimensions | Maven Archetype | Gradle Archetype Plugin |
| --- | --- | --- |
| Project | `lodsve-maven-archetype` | `lodsve-gradle-archetype-plugin` |
| Template source | Maven repository or Archetype installed to local repository | Local directory, default `src/main/resources/templates` |
| Built-in content | Quickstart, MyBatis, Nacos, RPC API / Server / Client | The plugin repository provides a generation engine; you need to prepare the template yourself |
| entrance | `mvn archetype:generate` | Gradle's `generate` task |
| Generate results | The default project directory is named `artifactId` | `generated/` under the generator project |
| Suitable for whom | Maven users who want to use existing Boot project prototypes directly | Users who want to reuse and customize their team's Gradle project templates |

## Maven user

from [Quickstart](/projects/lodsve-maven-archetype/quickstart/) Generate a basic web project. Select when database access is required [MyBatis](/projects/lodsve-maven-archetype/mybatis/), select when using the configuration center [Nacos](/projects/lodsve-maven-archetype/nacos/). Separate API and implemented service scenarios according to [RPC Guide](/projects/lodsve-maven-archetype/rpc/) Create API, Server, Client in sequence.

## Gradle user

First create a generator project that applies the `com.lodsve.archetype` plugin, put it into the team template, and then execute `generate`. Build files, Boot dependencies, Wrapper and business code all come from templates; the plugin itself does not come with the same set of Boot templates as Maven.

See the complete steps [Gradle quick start](/projects/lodsve-gradle-archetype-plugin/getting-started/);For variable and file name rules, see [Template writing](/projects/lodsve-gradle-archetype-plugin/templates/).

## Post-build check

1. Check the project coordinates, package name, port and context path.
2. Check the generated Boot dependency version with the JDK and build tool versions.
3. Configure external services such as database and Nacos according to the environment.
4. Build and launch the application, verify a business interface, and then start scaling.
