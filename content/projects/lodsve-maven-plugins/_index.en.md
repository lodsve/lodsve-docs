---
title: "Lodsve Maven Plugins"
description: "Provide Java template generation and Shade resource merging capabilities for Lodsve to extend the Maven build process."
weight: 20
kicker: "Build tools"
shortTitle: "Maven Plugins"
project: "lodsve-maven-plugins"
repository: "https://github.com/lodsve/lodsve-maven-plugins"
cascade: {"project": "lodsve-maven-plugins"}
---

## Project positioning

`lodsve-maven-plugins` contains two sub-modules, which handle generating source code and merging and packaging resources respectively. They work on existing Maven projects; to create new projects, use [Maven Archetype](/projects/lodsve-maven-archetype/).

| submodule | function | Access method |
| --- | --- | --- |
| `lodsve-javatemplate-maven-plugin` | Filter Maven properties in Java templates and register the generated main source code or test source code directory | Two goals for configuring the Maven plugin |
| `lodsve-shade-maven-plugin` | Merge `spring.factories` and regular matching resources with the same path | As a dependency of Maven Shade Plugin, configure Transformer |

## Version and environment

This article uses the source code version `1.0.3` as the baseline, and the groupId of both modules is `com.lodsve.maven.plugins`. The current build profile of the parent POM uses JDK 21, and the Maven API dependency is `3.6.3`; this information describes the plugin itself and does not represent the running requirements of the Lodsve Boot application.

## Source code basis

[Chinese README](https://github.com/lodsve/lodsve-maven-plugins/blob/master/README.cn.md) · [Source revision e1a9195](https://github.com/lodsve/lodsve-maven-plugins/tree/e1a9195c89fd5a106a9616bc27f31b93399e6611) · [Report an issue](https://github.com/lodsve/lodsve-maven-plugins/issues)

The Java template plugin description in the README has not yet been expanded. The goal, directory and parameters of this chapter have been completed according to the corresponding Mojo source code.
