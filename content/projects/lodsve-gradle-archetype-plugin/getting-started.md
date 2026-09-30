---
title: "Gradle 快速开始"
description: "创建一个生成器工程，准备本地模板，再使用交互或批量方式生成项目。"
weight: 10
---

## 1. 创建生成器工程

准备单独的生成器目录，在其中创建 `settings.gradle`：

```groovy
rootProject.name = 'lodsve-project-generator'
```

创建 `build.gradle`，从 Maven Central 加载已发布的 `1.0.1-RELEASE`：

```groovy
buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath 'com.lodsve:lodsve-gradle-archetype-plugin:1.0.1-RELEASE'
    }
}

apply plugin: 'com.lodsve.archetype'
```

在此目录执行 `gradle tasks --group Archetype`，确认出现 `generate` 和 `cleanArchetype`。如果生成器已经维护 Gradle Wrapper，可将下方的 `gradle` 换为 `./gradlew`。

## 2. 放入一个最小模板

插件默认读取 `src/main/resources/templates`。先通过三个小文件验证替换流程，再扩展为团队自己的 Boot 工程。

`src/main/resources/templates/settings.gradle`：

```groovy
rootProject.name = '@artifactId@'
```

`src/main/resources/templates/build.gradle`：

```groovy
plugins {
    id 'java'
}

group = '@groupId@'
version = '@version@'
```

`src/main/resources/templates/src/main/java/__packagePath__/Application.java`：

```java
package @packageName@;

public class Application {
    public static void main(String[] args) {
        System.out.println("@artifactId@");
    }
}
```

这个示例生成普通 Java 工程，用于理解模板机制。要生成 Lodsve Boot 工程，请将所选版本的 Gradle 构建文件、应用启动类和配置放入模板，并参考 [Boot 安装与依赖](/getting-started/installation/)中的坐标与版本管理说明。

## 3. 执行生成

交互方式会询问缺失参数：

```bash
gradle generate --info
```

在脚本或 CI 中使用批量方式，显式提供所有会被询问的参数，包括有默认值的字段：

```bash
gradle generate --info \
  -Dgroup=com.example \
  -Dname=demo-app \
  -DpackageName=com.example.demo \
  -Dversion=1.0.0-SNAPSHOT \
  -Dauthor=developer \
  -Dport=8080 \
  -DcontextPath=/demo
```

当前实现缺少参数时仍会进入询问流程，所以不能仅凭“有默认值”省略 CI 中的参数。

## 4. 检查生成结果

输出目录固定为当前生成器下的 `generated/`。上述模板输出的文件包括：

```text
generated/
├── settings.gradle
├── build.gradle
└── src/main/java/com/example/demo/Application.java
```

检查包名、坐标与文件内容，再将生成的工程移动到正式开发目录。之后用该应用需要的 Gradle / JDK 环境构建。

## 重新生成

已有同名文件时默认报错。确认 `generated/` 中没有需要保留的修改后，可以删除旧结果再生成：

```bash
gradle cleanArchetype generate --info
```

`cleanArchetype` 会删除整个 `generated/`，不要把持续维护的业务工程留在这个临时输出目录。

## 版本说明

此处使用 Central 发布的插件实现依赖。若使用 `plugins { id 'com.lodsve.archetype' version '...' }` 方式，版本必须从 [Plugin Portal](https://plugins.gradle.org/plugin/com.lodsve.archetype)选择；核对时该渠道展示 `1.0.0-RELEASE`，不同于 Central 的 `1.0.1-RELEASE`。

[任务注册与实现](https://github.com/lodsve/lodsve-gradle-archetype-plugin/tree/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype) · [Central 版本元数据](https://repo.maven.apache.org/maven2/com/lodsve/lodsve-gradle-archetype-plugin/maven-metadata.xml)
