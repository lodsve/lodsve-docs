---
title: RDBMS 与 Druid 配置
description: Lodsve Boot RDBMS 与 Druid 配置的完整配置项、默认值、示例值和枚举说明。
---

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.rdbms.default-data-source-name` | `String` | 无 | `primary` | 默认数据源名称；不填取第一个。 |
| `lodsve.rdbms.data-source.<name>.pool-name` | `String` | 无 | `primary` | 连接池显示名称。 |
| `lodsve.rdbms.data-source.<name>.driver-class-name` | `String` | 无 | `com.mysql.cj.jdbc.Driver` | JDBC 驱动类名。 |
| `lodsve.rdbms.data-source.<name>.url` | `String` | 无 | `jdbc:mysql://localhost:3306/demo` | JDBC URL。 |
| `lodsve.rdbms.data-source.<name>.username` | `String` | 无 | `${DB_USERNAME}` | 数据库用户名。 |
| `lodsve.rdbms.data-source.<name>.password` | `String` | 无 | `${DB_PASSWORD}` | 数据库密码。 |
| `lodsve.rdbms.data-source.<name>.pool-setting` | `PoolSetting` | 无 | 见下表 | 连接池设置。 |

### `PoolSetting`

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `...pool-setting.type` | `PoolType` | `Hikari` | `Hikari` | 连接池类型。 |
| `...pool-setting.init-size` | `int` | `0` | `5` | 初始化连接数。 |
| `...pool-setting.max-active` | `int` | `0` | `20` | 最大活动连接数。 |
| `...pool-setting.min-idle` | `int` | `0` | `5` | 最小空闲连接数。 |
| `...pool-setting.max-wait` | `int` | `0` | `30000` | 获取连接最大等待时间，单位毫秒。 |
| `...pool-setting.validation-query` | `String` | 无 | `SELECT 1` | 验证连接的 SQL。 |
| `...pool-setting.test-on-borrow` | `boolean` | `false` | `false` | 借连接时验证。 |
| `...pool-setting.test-on-return` | `boolean` | `false` | `false` | 还连接时验证。 |
| `...pool-setting.test-while-idle` | `boolean` | `false` | `true` | 空闲时验证。 |
| `...pool-setting.time-between-eviction-runs-millis` | `int` | `0` | `60000` | 清理间隔，单位毫秒。 |
| `...pool-setting.min-evictable-idle-time-millis` | `int` | `0` | `300000` | 最小空闲生存时间，单位毫秒。 |
| `...pool-setting.remove-abandoned` | `boolean` | `false` | `false` | 是否移除泄漏连接。 |
| `...pool-setting.remove-abandoned-timeout` | `int` | `0` | `300` | 泄漏连接超时时间。 |
| `...pool-setting.log-abandoned` | `boolean` | `false` | `false` | 是否记录泄漏连接日志。 |
| `...pool-setting.ext-properties` | `Properties` | 无 | `{characterEncoding: utf8mb4}` | 连接池/驱动扩展属性。 |

### `PoolType`

| 值 | 含义 |
|---|---|
| `Hikari` | HikariCP，默认值。 |
| `Druid` | Alibaba Druid。 |

## `lodsve.rdbms.druid`

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.rdbms.druid.aop-patterns` | `String[]` | 无 | `[com.example.service.*]` | Druid Spring AOP 统计包模式。 |
| `lodsve.rdbms.druid.stat-view-servlet.enabled` | `boolean` | `false` | `true` | 是否启用监控 Servlet。 |
| `lodsve.rdbms.druid.stat-view-servlet.url-pattern` | `String` | 无 | `/druid/*` | 监控 Servlet URL。 |
| `lodsve.rdbms.druid.stat-view-servlet.allow` | `String` | 无 | `127.0.0.1` | 允许访问 IP。 |
| `lodsve.rdbms.druid.stat-view-servlet.deny` | `String` | 无 | `10.0.0.8` | 拒绝访问 IP。 |
| `lodsve.rdbms.druid.stat-view-servlet.login-username` | `String` | 无 | `${DRUID_USER}` | 监控页用户名。 |
| `lodsve.rdbms.druid.stat-view-servlet.login-password` | `String` | 无 | `${DRUID_PASSWORD}` | 监控页密码。 |
| `lodsve.rdbms.druid.stat-view-servlet.reset-enable` | `String` | 无 | `false` | 是否显示重置按钮，源码类型为 String。 |
| `lodsve.rdbms.druid.web-stat-filter.enabled` | `boolean` | `false` | `true` | 是否启用 Web 统计 Filter。 |
| `lodsve.rdbms.druid.web-stat-filter.url-pattern` | `String` | 无 | `/*` | Web Filter URL 模式。 |
| `lodsve.rdbms.druid.web-stat-filter.exclusions` | `String` | 无 | `*.js,*.css,/druid/*` | 排除资源或路径。 |
| `lodsve.rdbms.druid.web-stat-filter.session-stat-max-count` | `String` | 无 | `1000` | Session 最大统计数，源码类型为 String。 |
| `lodsve.rdbms.druid.web-stat-filter.session-stat-enable` | `String` | 无 | `false` | 是否统计 Session，源码类型为 String。 |
| `lodsve.rdbms.druid.web-stat-filter.principal-session-name` | `String` | 无 | `user` | Session 用户属性名。 |
| `lodsve.rdbms.druid.web-stat-filter.principal-cookie-name` | `String` | 无 | `user` | Cookie 用户名。 |
| `lodsve.rdbms.druid.web-stat-filter.profile-enable` | `String` | 无 | `false` | 是否启用 Profile，源码类型为 String。 |

### Druid Filter

以下 `enabled` 为 `true` 时创建对应 Filter；其余属性直接绑定第三方 Druid JavaBean，字段随 Druid 版本变化。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.rdbms.druid.filter.stat.enabled` | `boolean` | `false`（元数据提示 `true`） | `true` | 创建 StatFilter。 |
| `lodsve.rdbms.druid.filter.config.enabled` | `boolean` | `false` | `false` | 创建 ConfigFilter。 |
| `lodsve.rdbms.druid.filter.encoding.enabled` | `boolean` | `false` | `false` | 创建 EncodingConvertFilter。 |
| `lodsve.rdbms.druid.filter.slf4j.enabled` | `boolean` | `false` | `false` | 创建 Slf4jLogFilter。 |
| `lodsve.rdbms.druid.filter.log4j.enabled` | `boolean` | `false` | `false` | 创建 Log4jFilter。 |
| `lodsve.rdbms.druid.filter.log4j2.enabled` | `boolean` | `false` | `false` | 创建 Log4j2Filter。 |
| `lodsve.rdbms.druid.filter.commons-log.enabled` | `boolean` | `false` | `false` | 创建 CommonsLogFilter。 |
| `lodsve.rdbms.druid.filter.wall.enabled` | `boolean` | `false` | `true` | 创建 WallFilter。 |
| `lodsve.rdbms.druid.filter.wall.config.*` | Druid `WallConfig` | 由 Druid 决定 | `multi-statement-allow: false` | SQL 防火墙规则。 |
| `lodsve.rdbms.druid.filter.stat.*` 等 | 对应 Druid Filter JavaBean | 由 Druid 决定 | `log-slow-sql: true` | 除 `enabled` 外的字段由第三方类定义。 |

Druid 1.2.1 的元数据还为 StatFilter 和 WallConfig 提供了 `db-type` 提示。两个配置项的枚举值相同：

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.rdbms.druid.filter.stat.db-type` | `String` | 由 Druid 决定 | `mysql` | StatFilter 统计时使用的数据库类型。 |
| `lodsve.rdbms.druid.filter.wall.db-type` | `String` | 由 Druid 决定 | `mysql` | WallConfig 使用的数据库类型。 |

### Druid `db-type` 枚举

| 值 | 含义 |
|---|---|
| `db2` | IBM Db2。 |
| `postgresql` | PostgreSQL。 |
| `sqlserver` | Microsoft SQL Server。 |
| `oracle` | Oracle。 |
| `AliOracle` | 阿里云 Oracle 兼容类型。 |
| `mysql` | MySQL。 |
| `mariadb` | MariaDB。 |
| `hive` | Apache Hive。 |
| `h2` | H2。 |
| `dm` | 达梦数据库。 |
| `kingbase` | KingbaseES。 |
| `oceanbase` | OceanBase。 |
| `xugu` | 虚谷数据库。 |
| `odps` | MaxCompute / ODPS。 |
| `teradata` | Teradata。 |
| `log4jdbc` | Log4jdbc 代理数据库类型。 |
| `phoenix` | Apache Phoenix。 |
| `edb` | EDB。 |
| `kylin` | Apache Kylin。 |
| `sqlite` | SQLite。 |
| `other` | 其他数据库。 |
| `jtds` | jTDS。 |
| `hsql` | HSQLDB。 |
| `derby` | Apache Derby。 |
| `gbase` | GBase。 |
| `informix` | IBM Informix。 |
| `ads` | AnalyticDB / ADS。 |
| `presto` | Presto。 |
| `elastic_search` | Elasticsearch。 |
| `hbase` | Apache HBase。 |
| `drds` | DRDS。 |
| `clickhouse` | ClickHouse。 |
| `blink` | Blink。 |
| `antspark` | AntSpark。 |
| `oceanbase_oracle` | OceanBase Oracle 模式。 |
| `polardb` | PolarDB。 |
| `ali_oracle` | 阿里云 Oracle 兼容类型。 |
| `mock` | Mock 数据库。 |
| `sybase` | Sybase。 |
| `ingres` | Ingres。 |
| `cloudscape` | Cloudscape。 |
| `timesten` | TimesTen。 |
| `as400` | IBM AS/400。 |
| `sapdb` | SAP DB。 |
| `kdb` | kdb+。 |
| `firebirdsql` | Firebird。 |
| `JSQLConnect` | JSQLConnect。 |
| `JTurbo` | JTurbo。 |
| `interbase` | InterBase。 |
| `pointbase` | PointBase。 |
| `edbc` | EDBC。 |
| `mimer` | Mimer SQL。 |

`filter.stat.*`、`filter.config.*`、`filter.encoding.*`、`filter.slf4j.*`、`filter.log4j.*`、`filter.log4j2.*`、`filter.commons-log.*` 与 `filter.wall.config.*` 会直接绑定 Druid 1.2.1 对应 JavaBean 的公开 setter。本页的明细表按当前构建元数据展开；这些字段不是 Lodsve 自定义字段，升级 Druid 后应以新版本的 JavaBean 和元数据为准。


### Druid 1.2.1 属性明细

下表根据项目构建生成的 `spring-configuration-metadata.json` 列出 Druid 1.2.1 暴露的每个可绑定属性。默认值为“由 Druid 决定”表示该属性没有由 Lodsve 或元数据声明默认值；示例值仅用于说明格式。

| 配置项 | 类型 | 默认值 | 示例值 | 中文说明 |
|---|---|---|---|---|
| `lodsve.rdbms.druid.filter.commons-log.connection-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.connection-commit-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.connection-connect-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.connection-connect-before-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.connection-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.connection-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.connection-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.commons-log.connection-rollback-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.data-source-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.data-source-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.commons-log.result-set-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.result-set-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.result-set-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.result-set-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.commons-log.result-set-next-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.result-set-open-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-create-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-executable-sql-log-enable` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-execute-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-execute-batch-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-execute-query-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-execute-update-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-parameter-clear-log-enable` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-parameter-set-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-prepare-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-prepare-call-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-sql-format-option` | `Druid sql.SQLUtils$FormatOption` | `由 Druid 决定` | ``pretty-format: true`` | SQL 格式化选项对象。 |
| `lodsve.rdbms.druid.filter.commons-log.statement-sql-pretty-format` | `Boolean` | `由 Druid 决定` | `true` | 是否格式化 SQL 日志。 |
| `lodsve.rdbms.druid.filter.log4j.connection-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.connection-commit-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.connection-connect-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.connection-connect-before-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.connection-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.connection-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.connection-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.log4j.connection-rollback-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.data-source-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.data-source-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.log4j.result-set-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.result-set-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.result-set-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.result-set-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.log4j.result-set-next-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.result-set-open-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-create-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-executable-sql-log-enable` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-execute-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-execute-batch-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-execute-query-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-execute-update-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.log4j.statement-parameter-clear-log-enable` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-parameter-set-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-prepare-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-prepare-call-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j.statement-sql-format-option` | `Druid sql.SQLUtils$FormatOption` | `由 Druid 决定` | ``pretty-format: true`` | SQL 格式化选项对象。 |
| `lodsve.rdbms.druid.filter.log4j.statement-sql-pretty-format` | `Boolean` | `由 Druid 决定` | `true` | 是否格式化 SQL 日志。 |
| `lodsve.rdbms.druid.filter.log4j2.connection-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.connection-commit-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.connection-connect-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.connection-connect-before-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.connection-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.connection-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.connection-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.log4j2.connection-rollback-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.data-source-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.data-source-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.log4j2.result-set-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.result-set-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.result-set-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.result-set-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.log4j2.result-set-next-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.result-set-open-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-create-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-executable-sql-log-enable` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-execute-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-execute-batch-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-execute-query-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-execute-update-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-parameter-clear-log-enable` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-parameter-set-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-prepare-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-prepare-call-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-sql-format-option` | `Druid sql.SQLUtils$FormatOption` | `由 Druid 决定` | ``pretty-format: true`` | SQL 格式化选项对象。 |
| `lodsve.rdbms.druid.filter.log4j2.statement-sql-pretty-format` | `Boolean` | `由 Druid 决定` | `true` | 是否格式化 SQL 日志。 |
| `lodsve.rdbms.druid.filter.slf4j.connection-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.connection-commit-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.connection-connect-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.connection-connect-before-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.connection-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.connection-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.connection-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.slf4j.connection-rollback-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.data-source-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.data-source-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.slf4j.result-set-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.result-set-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.result-set-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.result-set-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.slf4j.result-set-next-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.result-set-open-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-close-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-create-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-executable-sql-log-enable` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-execute-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-execute-batch-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-execute-query-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-execute-update-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-log-error-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-logger-name` | `String` | `由 Druid 决定` | `com.example.sql` | 日志记录器名称。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-parameter-clear-log-enable` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-parameter-set-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-prepare-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-prepare-call-after-log-enabled` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-sql-format-option` | `Druid sql.SQLUtils$FormatOption` | `由 Druid 决定` | ``pretty-format: true`` | SQL 格式化选项对象。 |
| `lodsve.rdbms.druid.filter.slf4j.statement-sql-pretty-format` | `Boolean` | `由 Druid 决定` | `true` | 是否格式化 SQL 日志。 |
| `lodsve.rdbms.druid.filter.stat.connection-stack-trace-enable` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.stat.log-slow-sql` | `Boolean` | `由 Druid 决定` | `true` | Druid JavaBean 配置项。 |
| `lodsve.rdbms.druid.filter.stat.merge-sql` | `Boolean` | `由 Druid 决定` | `true` | Druid JavaBean 配置项。 |
| `lodsve.rdbms.druid.filter.stat.slow-sql-millis` | `Long` | `由 Druid 决定` | `3000` | 慢 SQL 阈值，单位毫秒。 |
| `lodsve.rdbms.druid.filter.wall.config` | `Druid wall.WallConfig` | `由 Druid 决定` | `示例值` | Druid JavaBean 配置项。 |
| `lodsve.rdbms.druid.filter.wall.config.alter-table-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.block-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.call-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.case-condition-const-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.comment-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.commit-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.complete-insert-values-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.condition-and-alway-false-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.condition-and-alway-true-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.condition-double-const-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.condition-like-true-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.condition-op-bitwse-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.condition-op-xor-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.const-arithmetic-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.create-table-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.delete-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.delete-where-alway-true-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.delete-where-none-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.deny-functions` | `Set<String>` | `由 Druid 决定` | `[item]` | 禁止访问的对象集合。 |
| `lodsve.rdbms.druid.filter.wall.config.deny-objects` | `Set<String>` | `由 Druid 决定` | `[item]` | 禁止访问的对象集合。 |
| `lodsve.rdbms.druid.filter.wall.config.deny-schemas` | `Set<String>` | `由 Druid 决定` | `[item]` | 禁止访问的对象集合。 |
| `lodsve.rdbms.druid.filter.wall.config.deny-tables` | `Set<String>` | `由 Druid 决定` | `[item]` | 禁止访问的对象集合。 |
| `lodsve.rdbms.druid.filter.wall.config.deny-variants` | `Set<String>` | `由 Druid 决定` | `[item]` | 禁止访问的对象集合。 |
| `lodsve.rdbms.druid.filter.wall.config.describe-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.dir` | `String` | `由 Druid 决定` | `classpath:/druid` | Druid 配置文件目录。 |
| `lodsve.rdbms.druid.filter.wall.config.do-privileged-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.drop-table-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.function-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.hint-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.inited` | `Boolean` | `由 Druid 决定` | `true` | Druid JavaBean 配置项。 |
| `lodsve.rdbms.druid.filter.wall.config.insert-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.insert-values-check-size` | `Integer` | `由 Druid 决定` | `3000` | INSERT VALUES 检查数量上限。 |
| `lodsve.rdbms.druid.filter.wall.config.intersect-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.limit-zero-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.lock-table-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.merge-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.metadata-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.minus-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.multi-statement-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.must-parameterized` | `Boolean` | `由 Druid 决定` | `true` | 是否要求 SQL 参数化。 |
| `lodsve.rdbms.druid.filter.wall.config.none-base-statement-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.object-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.permit-functions` | `Set<String>` | `由 Druid 决定` | `[item]` | 允许访问的对象集合。 |
| `lodsve.rdbms.druid.filter.wall.config.permit-schemas` | `Set<String>` | `由 Druid 决定` | `[item]` | 允许访问的对象集合。 |
| `lodsve.rdbms.druid.filter.wall.config.permit-tables` | `Set<String>` | `由 Druid 决定` | `[item]` | 允许访问的对象集合。 |
| `lodsve.rdbms.druid.filter.wall.config.permit-variants` | `Set<String>` | `由 Druid 决定` | `[item]` | 允许访问的对象集合。 |
| `lodsve.rdbms.druid.filter.wall.config.read-only-tables` | `Set<String>` | `由 Druid 决定` | `[item]` | 只读表名称集合。 |
| `lodsve.rdbms.druid.filter.wall.config.rename-table-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.replace-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.rollback-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.schema-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.select-all-column-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.select-except-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.select-having-alway-true-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.select-intersect-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.select-into-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.select-into-outfile-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.select-limit` | `Integer` | `由 Druid 决定` | `3000` | 查询返回行数上限。 |
| `lodsve.rdbms.druid.filter.wall.config.select-minus-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.select-union-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.select-where-alway-true-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.selelct-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.set-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.show-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.start-transaction-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.strict-syntax-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.table-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.tenant-column` | `String` | `由 Druid 决定` | `tenant_id` | 租户隔离配置。 |
| `lodsve.rdbms.druid.filter.wall.config.tenant-table-pattern` | `String` | `由 Druid 决定` | `tenant_%` | 租户隔离配置。 |
| `lodsve.rdbms.druid.filter.wall.config.truncate-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.update-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.update-check-handler` | `Druid wall.WallUpdateCheckHandler` | `由 Druid 决定` | `自定义 Bean` | 自定义更新检查处理器。 |
| `lodsve.rdbms.druid.filter.wall.config.update-where-alay-true-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.update-where-none-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.use-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.config.variant-check` | `Boolean` | `由 Druid 决定` | `true` | 是否启用对应检查或日志记录。 |
| `lodsve.rdbms.druid.filter.wall.config.wrap-allow` | `Boolean` | `由 Druid 决定` | `true` | 是否允许对应 SQL 操作。 |
| `lodsve.rdbms.druid.filter.wall.log-violation` | `Boolean` | `由 Druid 决定` | `true` | 是否记录 SQL 防火墙违规。 |
| `lodsve.rdbms.druid.filter.wall.provider-white-list` | `Set<String>` | `由 Druid 决定` | `[item]` | Provider 白名单。 |
| `lodsve.rdbms.druid.filter.wall.tenant-column` | `String` | `由 Druid 决定` | `tenant_id` | 租户隔离配置。 |
| `lodsve.rdbms.druid.filter.wall.throw-exception` | `Boolean` | `由 Druid 决定` | `true` | 发生 SQL 防火墙违规时是否抛出异常。 |
