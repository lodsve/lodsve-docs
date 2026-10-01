---
title: 常见问题
description: 开始使用和升级时最常遇到的问题。
weight: 20
---

## 执行 clean 后为什么需要生成源码？

项目使用源码模板优化版本号处理。首次导入或执行 `mvn clean` 后运行：

```bash
./mvnw com.lodsve.maven.plugins:lodsve-javatemplate-maven-plugin:1.0.3:generate-sources
```

## Starter 没有生效怎么办？

确认依赖坐标、Spring Boot 版本、配置前缀和条件 Bean。优先运行对应示例工程缩小问题范围。

## 发布时 Javadoc 失败怎么办？

检查 Javadoc 的 `@see` 引用是否能解析到真实方法签名，并确认 JDK 与 Maven 插件版本一致。

## 升级 JDK 21 后 PMD 报错怎么办？

`Unsupported targetJdk value '21'` 表示 PMD 引擎版本过旧。当前源码在 `lodsve-boot-parent/pom.xml` 中使用 `maven-pmd-plugin:3.28.0`，内置 PMD `7.17.0`，`targetJdk` 跟随项目的 `java.version`。

升级插件时须同时更新 `tools/pmd-ruleset.xml`。PMD 7 已移除部分旧规则，替代关系如下：

| 旧规则 | PMD 7 规则 |
| --- | --- |
| `UnusedImports`、`DontImportJavaLang`、`DuplicateImports`、`ImportFromSamePackage` | `codestyle/UnnecessaryImport` |
| `EmptyFinallyBlock`、`EmptyIfStmt`、`EmptyInitializer`、`EmptyStatementBlock`、`EmptySwitchStatements`、`EmptySynchronizedBlock`、`EmptyTryBlock`、`EmptyWhileStmt` | `codestyle/EmptyControlStatement` |
| `EmptyStatementNotInLoop` | `codestyle/UnnecessarySemicolon` |
| `BooleanInstantiation` | `bestpractices/PrimitiveWrapperInstantiation` |

拉取包含插件和规则文件修复的源码后，在 JDK 21 环境执行 `./mvnw clean install`。如果仍出现规则加载错误，检查是否覆盖了父 POM 的插件版本或引用了旧规则文件。
