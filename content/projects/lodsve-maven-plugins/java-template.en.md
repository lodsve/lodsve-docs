---
title: "Java template generation"
description: "Write Maven properties into Java source code and automatically add the main source code or test source code compilation directory."
weight: 10
---

## when to use

When it is necessary to write build information such as project version into Java constants, the template is saved in a dedicated directory, and the properties are filtered by the plugin during construction. Handwritten code and generated code are maintained separately to avoid directly modifying the results in `target/`.

## Configure plugin

The following configuration is placed in `<build><plugins>` of application `pom.xml`:

```xml
<plugin>
    <groupId>com.lodsve.maven.plugins</groupId>
    <artifactId>lodsve-javatemplate-maven-plugin</artifactId>
    <version>1.0.3</version>
    <executions>
        <execution>
            <id>generate-java</id>
            <goals>
                <goal>generate-sources</goal>
                <goal>generate-test-sources</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

Set `project.build.sourceEncoding` to `UTF-8` in `<properties>` of POM. Both goals have declared default life cycle phases, and there is no need to manually specify phases repeatedly.

## a version constant template

Create `src/main/java-templates/com/example/BuildInfo.java`:

```java
package com.example;

public final class BuildInfo {
    public static final String VERSION = "${project.version}";

    private BuildInfo() {
    }
}
```

Execution:

```bash
mvn generate-sources
```

The plugin writes the results to `target/generated-sources/com/example/BuildInfo.java` and adds the output directory to the Maven main source path. Execution of `mvn compile` will also go through this generation phase first.

## Goal and catalog

| Goal | default stage | Enter directory | Output directory |
| --- | --- | --- | --- |
| `generate-sources` | `generate-sources` | `src/main/java-templates` | `target/generated-sources` |
| `generate-test-sources` | `generate-test-sources` | `src/test/java-templates` | `target/generated-test-sources` |

The output directories are registered via `addCompileSourceRoot` and `addTestCompileSourceRoot` respectively. No file will be generated if the input directory does not exist.

## Configuration parameters

| parameters | Default value | Purpose |
| --- | --- | --- |
| `sourceDirectory` / `outputDirectory` | The main source code directory in the above table | Main source code input and output |
| `testSourceDirectory` / `testOutputDirectory` | Test source code directory in the above table | Test source code input and output |
| `encoding` | `${project.build.sourceEncoding}` | Template character encoding |
| `delimiters` | Maven defaults `${...}` and `@...@` | Custom placeholder separator |
| `useDefaultDelimiters` | `true` | Whether to keep the default delimiter when configuring a custom delimiter |
| `escapeString` | not set | Prevent specific expressions from being interpolated, specified by `maven.resources.escapeString` |
| `overwrite` | `false` | Whether to overwrite unchanged files |
| `skipPoms` | `true` | Whether to skip the `pom` packaging project |

The parameters are written in `<configuration>` of the plugin. After modifying the input directory, check the `package` declaration and directory structure of the file at the same time.

## Source code basis

[GenerateSourcesMojo](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/lodsve-javatemplate-maven-plugin/src/main/java/com/lodsve/maven/plugin/javatemplate/GenerateSourcesMojo.java) · [GenerateTestSourcesMojo](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/lodsve-javatemplate-maven-plugin/src/main/java/com/lodsve/maven/plugin/javatemplate/GenerateTestSourcesMojo.java) · [Shared filtering implementation](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/lodsve-javatemplate-maven-plugin/src/main/java/com/lodsve/maven/plugin/javatemplate/AbstractGenerateSourcesMojo.java)
