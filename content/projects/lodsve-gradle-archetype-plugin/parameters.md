---
title: "任务与参数参考"
description: "区分系统属性、交互默认值、固定输出目录与自定义变量。"
weight: 20
---

## 任务

| 任务 | 行为 |
| --- | --- |
| `generate` | 读取输入参数与模板，生成结果 |
| `cleanArchetype` | 递归删除当前工程下的 `generated/` |

## 会触发询问的参数

这些参数先通过 `System.getProperty` 读取；缺失时调用交互提示。默认值是交互时提供的缺省答案，批量运行仍应显式传入全部字段。

| 系统属性 | 含义 | 源码中的交互默认值 | 模板变量 |
| --- | --- | --- | --- |
| `group` | 工程 group | 无 | `groupId` |
| `name` | 工程名称 | 无 | `artifactId` |
| `packageName` | Java 包名 | 无 | `packageName` |
| `version` | 工程版本 | `1.0.0-SNAPSHOT` | `version` |
| `author` | 作者 | `Administrator` | `author` |
| `port` | 应用端口 | `8080` | `port` |
| `contextPath` | 上下文路径 | `/` | `contextPath` |

`packagePath` 从 `packageName` 派生，例如 `com.example.demo` 对应 `com/example/demo`。

## 不会触发询问的参数

| 系统属性 | 默认值 | 行为 |
| --- | --- | --- |
| `templates` | `src/main/resources/templates` | 模板目录，可指定相对或绝对路径 |
| `failIfFileExist` | 默认开启 | 输出中遇到同名文件时失败；设置 `false` 会允许覆盖 |

README 示例曾传入 `-Dtarget=generated`，当前实现直接使用固定的 `generated/` 常量，并不读取 `target` 作为输出目录设置。

## 通过 gradle.properties 配置

在生成器工程的 `gradle.properties` 中写入：

```properties
systemProp.group=com.example
systemProp.name=demo-app
systemProp.packageName=com.example.demo
systemProp.version=1.0.0-SNAPSHOT
systemProp.author=developer
systemProp.port=8080
systemProp.contextPath=/demo
systemProp.failIfFileExist=true
```

命令行使用 `-Dgroup=...` 这样的系统属性。`-Pgroup=...` 是 Gradle project property，不是插件此处的读取入口。源码没有自行加载任意 `settings.properties` 文件的逻辑。

## README 与当前实现的差异

- README 版本默认值写为 `1.0-SNAPSHOT`，当前任务源码实际使用 `1.0.0-SNAPSHOT`。
- README 列出 `configServerName`、`configServerPort`，当前生成任务没有为这两个字段建立内置询问与默认值；模板需要时请通过[自定义 binding](/projects/lodsve-gradle-archetype-plugin/templates/#自定义变量)传入。
- `name` 是输入参数，模板中的标准工程名变量为 `artifactId`；`group` 对应 `groupId`。

[参数解析源码](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype/ArchetypeGenerateTask.groovy)
