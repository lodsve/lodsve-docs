---
title: RDBMS 动态数据源
kicker: Starter
icon: ◉
description: 统一配置关系型数据库连接，并支持动态数据源和 Druid 整合。
weight: 40
---

## 引入依赖

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-rdbms</artifactId>
</dependency>
```

## 数据源配置

本组件使用 `lodsve.rdbms.data-source.<名称>` 配置具名数据源，`default-data-source-name` 可指定默认项；每个数据源配置 JDBC 驱动、URL、账号密码和连接池 `pool-setting`。连接池类型为 `Hikari` 或 `Druid`。标准 `spring.datasource` 配置不能代替这里的多数据源配置。

```yaml
lodsve:
  rdbms:
    default-data-source-name: primary
    data-source:
      primary:
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: ${DB_URL:jdbc:mysql://localhost:3306/demo}
        username: ${DB_USERNAME:root}
        password: ${DB_PASSWORD:}
        pool-setting:
          type: Hikari
          max-active: 20
          min-idle: 5
```

完整字段、Druid 监控与 Filter 配置见[RDBMS 配置示例](/examples/configuration/rdbms/)。多数据源切换应发生在事务获取连接前；驱动依赖和连接池版本由项目依赖管理统一控制。
