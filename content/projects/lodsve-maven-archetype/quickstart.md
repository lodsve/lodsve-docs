---
title: "Quickstart 基础工程"
description: "生成包含 Web、Service 与数据对象分层的 Maven 应用。"
weight: 10
---

## 准备环境与版本

安装 Maven 和与所选 Boot 版本配套的 JDK。在终端设置 `LODSVE_BOOT_VERSION` 为项目已选定的版本，例如 `export LODSVE_BOOT_VERSION=1.0.3`。这里仅说明版本如何传入；生成后仍需按下方检查项核对模板与该 Boot 版本的依赖兼容性。

模板坐标为 `com.lodsve.archetype:lodsve-archetype-quickstart`，命令在新工程的父目录执行。

## 生成工程

```bash
# 模板发布版；使用源码安装时改为本地安装的版本。
ARCHETYPE_VERSION=1.0.3
# 先设置已选定的 Lodsve Boot 版本，再继续执行。
: "${LODSVE_BOOT_VERSION:?请先设置 LODSVE_BOOT_VERSION}"

mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=com.lodsve.archetype \
  -DarchetypeArtifactId=lodsve-archetype-quickstart \
  -DarchetypeVersion="$ARCHETYPE_VERSION" \
  -DgroupId=com.example \
  -DartifactId=demo-app \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=com.example.demo \
  -Dauthor=developer \
  -DbootVersion="$LODSVE_BOOT_VERSION" \
  -Dport=8080 \
  -DcontextPath=/demo
```

Maven 默认将工程输出到 `demo-app/`。Windows 用户可将命令写为单行，或使用对应终端的续行语法。

## 得到什么

| 位置 | 内容 |
| --- | --- |
| `pom.xml` | 以 `lodsve-boot-dependencies` 为父 POM，包含 Web、Swagger、Actuator 等依赖 |
| `src/main/java` 下的应用包 | `DemoApplication`、Web Controller、Service 与实现 |
| `pojo/bo`、`form`、`query`、`vo` | 常见请求、响应和业务对象分层 |
| `src/main/resources/application.yml` | 端口、上下文路径和示例配置 |
| `mvnw`、`mvnw.cmd`、`.mvn/` | Maven Wrapper |
| `Dockerfile` | 容器构建示例 |

## 构建前检查

1. 模板中的父 POM 和 Starter 必须能在所选仓库解析，依赖坐标应与 `bootVersion` 对齐。
2. 源码基线的生成 POM 含 `http://repo1.maven.org/maven2`；改成 `https://repo.maven.apache.org/maven2` 或移除这个冗余仓库声明，避免现代 Maven 拦截 HTTP 仓库。
3. 源码基线的 Dockerfile 使用 `adoptopenjdk/openjdk11`；按应用实际 JDK 要求调整镜像，不能直接视为 JDK 17 工程配置。
4. 核对应用 YAML 后，在生成目录中构建并启动。

```bash
cd demo-app
./mvnw clean package
./mvnw spring-boot:run
```

Windows 使用 `mvnw.cmd`。Wrapper 缺少执行权限时可运行 `sh mvnw clean package`。

## 下一步

继续阅读[参数参考](/projects/lodsve-maven-archetype/parameters/)，或切换到 [MyBatis](/projects/lodsve-maven-archetype/mybatis/) 和 [Nacos](/projects/lodsve-maven-archetype/nacos/) 模板。

源码：[Quickstart 模板目录](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-quickstart/src/main/resources)。
