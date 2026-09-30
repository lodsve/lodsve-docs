---
title: "Nacos 配置中心工程"
description: "生成带 Nacos 配置中心示例的基础 Web 工程。"
weight: 40
---

## 包含的内容

模板在基础工程中引入 `lodsve-boot-starter-nacos`，并在 `bootstrap.yml` 中演示 Nacos Config 的连接地址、namespace、group 和扩展配置文件。

## 生成工程

先按 [Quickstart 的版本准备步骤](/projects/lodsve-maven-archetype/quickstart/)设置 `LODSVE_BOOT_VERSION`：

```bash
# 模板发布版；使用源码安装时改为本地安装的版本。
ARCHETYPE_VERSION=1.0.3
# 先设置已选定的 Lodsve Boot 版本，再继续执行。
: "${LODSVE_BOOT_VERSION:?请先设置 LODSVE_BOOT_VERSION}"

mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=com.lodsve.archetype \
  -DarchetypeArtifactId=lodsve-archetype-nacos \
  -DarchetypeVersion="$ARCHETYPE_VERSION" \
  -DgroupId=com.example \
  -DartifactId=demo-nacos \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=com.example.demo \
  -Dauthor=developer \
  -DbootVersion="$LODSVE_BOOT_VERSION" \
  -Dport=8080 \
  -DcontextPath=/demo
```

## 对接 Nacos

生成后修改 `src/main/resources/bootstrap.yml`：

1. 设置 `spring.cloud.nacos.config.server-addr` 为实际服务地址。
2. 将 `namespace` 与 `group` 替换为环境中已有的配置空间与分组。
3. 模板设置 `file-extension: yml`，按应用名准备对应配置文件；示例还通过 `extension-configs` 读取同组的 `application.yml`。
4. 核对账号、网络和配置读取权限；模板默认关闭配置自动刷新。

模板默认地址是 `http://localhost:8848`，namespace 和 group 只是示例值。它不会创建 Nacos 服务或替你发布远程配置。

## 版本适配

当前模板使用 `bootstrap.yml` 方式。是否启用 Bootstrap 配置加载取决于使用的 Spring Cloud / Nacos 依赖版本，不能只修改 `bootVersion` 就假定配置加载机制也自动完成迁移。

先按 [Quickstart](/projects/lodsve-maven-archetype/quickstart/#构建前检查)核对工程构建，再从启动日志确认实际连接的地址、namespace、group 和 Data ID。

## 后续阅读

[Nacos Starter](/starters/nacos/) · [模板与配置源码](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-nacos/src/main/resources)
