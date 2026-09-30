---
title: "Java 模板生成"
description: "把 Maven 属性写入 Java 源码，并自动加入主源码或测试源码编译目录。"
weight: 10
---

## 什么时候使用

需要将工程版本等构建信息写入 Java 常量时，将模板保存在专用目录，构建时由插件过滤属性。手写代码和生成代码分开维护，避免直接修改 `target/` 中的结果。

## 配置插件

下面的配置放在应用 `pom.xml` 的 `<build><plugins>` 中：

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

在 POM 的 `<properties>` 中设置 `project.build.sourceEncoding` 为 `UTF-8`。两个 goal 已声明默认生命周期阶段，不需要手动重复指定 phase。

## 一个版本常量模板

创建 `src/main/java-templates/com/example/BuildInfo.java`：

```java
package com.example;

public final class BuildInfo {
    public static final String VERSION = "${project.version}";

    private BuildInfo() {
    }
}
```

执行：

```bash
mvn generate-sources
```

插件将结果写入 `target/generated-sources/com/example/BuildInfo.java`，并将输出目录加入 Maven 主源码路径。执行 `mvn compile` 时也会先经过这个生成阶段。

## Goal 与目录

| Goal | 默认阶段 | 输入目录 | 输出目录 |
| --- | --- | --- | --- |
| `generate-sources` | `generate-sources` | `src/main/java-templates` | `target/generated-sources` |
| `generate-test-sources` | `generate-test-sources` | `src/test/java-templates` | `target/generated-test-sources` |

输出目录分别通过 `addCompileSourceRoot` 与 `addTestCompileSourceRoot` 注册。输入目录不存在时不会生成文件。

## 配置参数

| 参数 | 默认值 | 用途 |
| --- | --- | --- |
| `sourceDirectory` / `outputDirectory` | 上表主源码目录 | 主源码输入与输出 |
| `testSourceDirectory` / `testOutputDirectory` | 上表测试源码目录 | 测试源码输入与输出 |
| `encoding` | `${project.build.sourceEncoding}` | 模板字符编码 |
| `delimiters` | Maven 默认 `${...}` 与 `@...@` | 自定义占位符分隔符 |
| `useDefaultDelimiters` | `true` | 配置自定义分隔符时是否保留默认分隔符 |
| `escapeString` | 未设置 | 防止特定表达式被插值，可通过 `maven.resources.escapeString` 指定 |
| `overwrite` | `false` | 是否覆盖未变化的文件 |
| `skipPoms` | `true` | 是否跳过 `pom` packaging 工程 |

参数写在插件的 `<configuration>` 中。修改输入目录后，同时检查文件的 `package` 声明与目录结构。

## 源码依据

[GenerateSourcesMojo](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/lodsve-javatemplate-maven-plugin/src/main/java/com/lodsve/maven/plugin/javatemplate/GenerateSourcesMojo.java) · [GenerateTestSourcesMojo](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/lodsve-javatemplate-maven-plugin/src/main/java/com/lodsve/maven/plugin/javatemplate/GenerateTestSourcesMojo.java) · [共享过滤实现](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/lodsve-javatemplate-maven-plugin/src/main/java/com/lodsve/maven/plugin/javatemplate/AbstractGenerateSourcesMojo.java)
