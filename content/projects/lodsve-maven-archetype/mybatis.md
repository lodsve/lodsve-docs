---
title: "MyBatis 数据访问工程"
description: "生成 DAO、实体、Mapper XML 与数据源配置示例。"
weight: 30
---

## 包含的内容

在基础 Web 工程上增加 `lodsve-boot-starter-mybatis`、RDBMS 组件、MySQL 驱动与 HikariCP。示例包括 `DemoPO`、`DemoDAO`、Service 和 Mapper XML。

`DemoDAO` 继承 `BaseRepository<DemoPO>`；`DemoPO` 继承 `BasePropertyPO`。这些类的兼容性需和选定的 Boot 版本一起确认。

## 生成工程

先按 [Quickstart 的版本准备步骤](/projects/lodsve-maven-archetype/quickstart/)设置 `LODSVE_BOOT_VERSION`，然后执行：

```bash
# 模板发布版；使用源码安装时改为本地安装的版本。
ARCHETYPE_VERSION=1.0.3
# 先设置已选定的 Lodsve Boot 版本，再继续执行。
: "${LODSVE_BOOT_VERSION:?请先设置 LODSVE_BOOT_VERSION}"

mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=com.lodsve.archetype \
  -DarchetypeArtifactId=lodsve-archetype-mybatis \
  -DarchetypeVersion="$ARCHETYPE_VERSION" \
  -DgroupId=com.example \
  -DartifactId=demo-mybatis \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=com.example.demo \
  -Dauthor=developer \
  -DbootVersion="$LODSVE_BOOT_VERSION" \
  -Dport=8080 \
  -DcontextPath=/demo
```

## 配置数据库

模板的 `application.yml` 在 `lodsve.rdbms.data-source.demo` 下提供数据库连接示例。替换为实际地址和环境变量，不使用模板中的演示凭据：

```yaml
lodsve:
  rdbms:
    data-source:
      demo:
        pool-name: demo-datasource
        url: ${DB_URL}
        username: ${DB_USERNAME}
        password: ${DB_PASSWORD}
        driver-class-name: com.mysql.cj.jdbc.Driver
        pool-setting:
          type: Hikari
```

这是该模板的属性结构。与现行 Boot 文档的属性定义有差异时，以实际使用版本的配置类为准。

## 启动前检查

- 准备数据库与业务表结构；模板提供 DAO 和 Mapper 示例，不包含自动创建演示表的完整迁移流程。
- 检查 `DemoDAO.xml` 中的命名空间、SQL 与实体字段，并与真实库表对齐。
- 按 [Quickstart 的构建检查](/projects/lodsve-maven-archetype/quickstart/#构建前检查)处理生成 POM 和镜像配置。
- 构建启动后验证一次写入与查询，再扩展业务逻辑。

## 后续阅读

[MyBatis Starter](/starters/mybatis/) · [MyBatis 组件](/components/mybatis/) · [模板源码](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-mybatis/src/main/resources)
