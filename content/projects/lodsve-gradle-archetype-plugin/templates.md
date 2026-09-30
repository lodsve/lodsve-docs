---
title: "模板编写与扩展"
description: "使用内容占位符、路径变量、bindingProcessor 和非模板文件清单。"
weight: 30
---

## 模板目录

默认目录为 `src/main/resources/templates`。将项目骨架放入该目录；它的相对目录结构会保留在 `generated/` 中。要切换目录，可在完整的生成命令后加上 `-Dtemplates=path/to/templates`。

## 内容与路径规则

| 位置 | 写法 | 示例 |
| --- | --- | --- |
| 文件内容 | `@variable@` | `package @packageName@;` |
| 文件或目录名 | `__variable__` | `src/main/java/__packagePath__/Application.java` |
| 内容中的表达式 | `@expression@` | `@artifactId.toUpperCase()@` |
| 字面量 `@` | `@@` | 不作为占位符处理 |

变量由 Groovy `GStringTemplateEngine` 求值。模板内容中的 `$` 会经过插件的转义处理，用于保留生成工程自己的 `${...}` 表达式。

## 内置变量

- `groupId`、`artifactId`、`version`：工程坐标。
- `packageName`、`packagePath`：点分包名和斜杠路径。
- `author`、`port`、`contextPath`：作者和应用配置。

完整参数映射见[参数参考](/projects/lodsve-gradle-archetype-plugin/parameters/)。

## 自定义变量

例如要在 Boot 工程模板中使用 `@bootVersion@`，可在生成器的 `gradle.properties` 中增加：

```properties
# 示例版本，应与团队模板中的依赖和代码一起验证。
systemProp.com.lodsve.gradle.archetype.binding.bootVersion=1.0.3
```

也可以在生成命令中使用完整前缀：

```text
-Dcom.lodsve.gradle.archetype.binding.bootVersion=1.0.3
```

源码还尝试从 `sun.java.command` 解析普通命令行 `-D` 参数，但自定义变量使用上述明确的 binding 前缀更容易核对。

## bindingProcessor

参数解析完成后、开始写文件之前，可以在生成器的 `build.gradle` 中补充派生变量：

```groovy
generate {
    bindingProcessor = { bindings ->
        bindings.capitalizedName = bindings.artifactId.capitalize()
    }
}
```

模板可以使用 `@capitalizedName@`。这里使用标准变量 `artifactId`，不依赖 README 示例中未必存在的 `bindings.name`。

## 保留原样的文件

二进制资源、压缩文件和 Wrapper 不应按文本模板解析。在模板根目录创建 `.nontemplates`，列出 Ant 风格匹配规则：

```text
# 二进制与构建工具按原样复制。
**/*.jar
**/*.zip
**/*.png
**/*.jpg
**/*.sh
**/*.bat
gradle/
.gradle/
gradlew
gradlew.bat
```

目录模式保留末尾 `/`。查找顺序是模板目录内的 `.nontemplates`，不存在时才使用生成器工程的 `src/main/resources/.nontemplates`；两份清单不会自动合并。需要保留的图片、字体或证书等文件也应加入清单。

## 生成后的检查

检查是否还有 `@variable@` 或 `__variable__` 未替换，以及源码包名和文件路径是否一致。源码在模板求值失败时会记录错误并尝试复制原文件，不能仅凭任务结束就判断所有模板都已正确替换。

[模板处理源码](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype/util/FileUtils.groovy) · [binding 处理源码](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype/ArchetypeGenerateTask.groovy)
