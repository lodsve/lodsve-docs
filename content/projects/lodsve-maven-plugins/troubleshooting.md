---
title: "构建与常见问题"
description: "定位模板未生成、依赖未解析和 Shade 资源合并问题。"
weight: 30
---

## Java 文件没有生成

确认插件位于 `<build><plugins>`，而不是仅声明在 `pluginManagement`；检查 goal、输入目录与生命周期。主源码使用 `generate-sources`，测试源码使用 `generate-test-sources`。父聚合工程通常是 `pom` packaging，默认 `skipPoms=true` 会跳过它。

## 属性没有替换

先确认 Maven 中确实存在该属性，再检查 `delimiters`、`useDefaultDelimiters` 和转义设置。检查的是 `target/generated-sources` 中的输出文件，而不是输入模板。用 `mvn help:evaluate -Dexpression=project.version -q -DforceStdout` 可查看工程版本属性。

## 找不到 Transformer 类

将 `lodsve-shade-maven-plugin` 放入 Maven Shade Plugin 自己的 `<dependencies>`。只放入业务工程的 `<dependencies>` 不能替代插件依赖声明。检查实现类全名与扩展版本。

## 合并结果不符合预期

确认正则匹配完整的 JAR 内资源路径。正则转换器是同路径文本追加，不会自动去重或合并不同路径；`spring.factories` 转换器也不处理其他 Spring 元数据文件。构建后解包实际 JAR 核对内容。

## 从源码构建插件

在 `lodsve-maven-plugins` 仓库中使用 Maven Wrapper 构建并安装到本地仓库：

```bash
./mvnw clean install
```

插件源码的当前构建配置使用 JDK 21，质量检查以根 POM 与 `tools/` 配置为准。[根 POM](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/pom.xml) 是版本与构建规则的依据；历史发布版本可能使用更低版本的 JDK。
