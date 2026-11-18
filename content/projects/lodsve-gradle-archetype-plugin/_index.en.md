---
title: "Lodsve Gradle Archetype Plugin"
description: "A local template generation plugin for Gradle users that creates new project skeletons through variable substitution."
weight: 40
kicker: "Gradle scaffolding"
shortTitle: "Gradle Archetype"
project: "lodsve-gradle-archetype-plugin"
repository: "https://github.com/lodsve/lodsve-gradle-archetype-plugin"
cascade: {"project": "lodsve-gradle-archetype-plugin"}
---

## Project positioning

`lodsve-gradle-archetype-plugin` provides a Maven Archetype-like build process for Gradle. It reads the local template directory, replaces the file contents and variables in the path, and writes the results to the generator project's `generated/` directory.

It is suitable for organizing the team's Lodsve Boot / Gradle projects into reusable templates. The current warehouse provides a generation engine and does not have built-in application templates such as Quickstart, MyBatis or Nacos; application dependencies and project structures are provided by the template maintainer.

## Tasks provided

| Task | function |
| --- | --- |
| `generate` | Parse parameters and generate projects from local templates |
| `cleanArchetype` | Delete the entire `generated/` directory in the generator project |

The plugin ID is `com.lodsve.archetype`. The `cleanArch` used in README is the abbreviation of the task name, and the complete name `cleanArchetype` is used in the documents.

## Versions and build environments

The document is compared to the source code `aca7077`, and the version in `gradle.properties` is `1.0.1-RELEASE`. This version can be installed via `com.lodsve:lodsve-gradle-archetype-plugin` from Maven Central, see [quick start](/projects/lodsve-gradle-archetype-plugin/getting-started/). The Plugin Portal version list is managed independently, and the Central version cannot be directly used as the Portal plugin version.

The Wrapper of the source code repository uses Gradle `8.14.3`, the build tool chain uses JDK 21, and the source code compatibility target is still Java 8; this is not a compatibility commitment for all newer Gradle / JDK combinations. When generating Lodsve Boot applications, please use Spring Boot Gradle Plugin `4.1.2`, Java toolchain 21, and include `jakarta.*` API and Springdoc OpenAPI 3 into the template. The generator project and the final generated application can have separate build environments and should be identified separately.

## Source code basis

[README](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/master/README.md) · [Source revision aca7077](https://github.com/lodsve/lodsve-gradle-archetype-plugin/tree/aca7077141a0b2201d069bd2925532e26ee26edc) · [Plugin Portal](https://plugins.gradle.org/plugin/com.lodsve.archetype) · [Report an issue](https://github.com/lodsve/lodsve-gradle-archetype-plugin/issues)
