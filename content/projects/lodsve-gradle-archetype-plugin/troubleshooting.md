---
title: "生成与常见问题"
description: "排查任务发现、无交互环境、重复文件和模板求值问题。"
weight: 40
---

## 找不到插件版本

先区分安装渠道。[快速开始](/projects/lodsve-gradle-archetype-plugin/getting-started/)通过 Maven Central 加载实现 JAR `1.0.1-RELEASE`；Plugin Portal 的 `plugins` DSL 使用另一套插件标记与版本列表，不能直接混用。

## 找不到任务

确认在生成器工程中应用了 `com.lodsve.archetype`。任务完整名称是 `generate` 和 `cleanArchetype`，用 `gradle tasks --group Archetype` 检查。README 中的 `cleanArch` 是缩写，存在歧义时应使用完整任务名。

## CI 中等待输入或提示参数缺失

批量命令需要传入 `group`、`name`、`packageName`、`version`、`author`、`port`、`contextPath`。使用 `-D` 系统属性或 `systemProp.*`，不要误用 `-P` 项目属性。缺失字段即使有交互默认值，也会先触发询问流程。

## 同名文件导致失败

`failIfFileExist` 默认开启。检查并保留已有修改，再决定是否删除旧输出。`cleanArchetype` 删除的是整个 `generated/`；`-DfailIfFileExist=false` 则允许覆盖同名文件，两者都不能用于保留手工修改。

## 变量未替换或文件损坏

检查变量名称、`@...@` 和 `__...__` 写法及生成日志。二进制文件需要列入 `.nontemplates`。源码在模板求值异常时会记录错误并尝试复制原文件，因此还需检查生成结果中是否残留占位符。

README 特别列出了 Properties 中 `https\://...` 这类转义内容的已知问题；遇到该情况先在最小模板中验证字符处理，调整模板或将无需替换的文件列入 `.nontemplates`。

## 生成位置与预期不同

当前输出固定为 `generated/`。模板根目录的内容直接映射进去；只有当模板自身包含额外工程目录时，结果才会多一层目录。`-Dtarget` 不会改变当前实现的输出位置。

## Gradle 或 JDK 不兼容

源码仓库使用 Gradle `8.14.3` Wrapper 和 JDK 21 toolchain，源码目标仍为 Java 8。选择相互兼容的 Gradle / JDK 运行生成器；不要把生成器的环境要求直接套到最终 Boot 应用上。版本升级需单独验证插件任务、模板替换和生成工程构建。

[README 已知问题](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/aca7077141a0b2201d069bd2925532e26ee26edc/README.md) · [源码](https://github.com/lodsve/lodsve-gradle-archetype-plugin/tree/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype)
