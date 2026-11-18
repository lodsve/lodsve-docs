---
title: "RDBMS and Druid configuration"
description: "Complete configuration items, default values, example values and enumeration descriptions for Lodsve Boot RDBMS and Druid configuration."
---

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.rdbms.default-data-source-name` | `String` | None | `primary` | Default data source name; leave the first one blank. |
| `lodsve.rdbms.data-source.<name>.pool-name` | `String` | None | `primary` | Connection pool display name. |
| `lodsve.rdbms.data-source.<name>.driver-class-name` | `String` | None | `com.mysql.cj.jdbc.Driver` | JDBC driver class name. |
| `lodsve.rdbms.data-source.<name>.url` | `String` | None | `jdbc:mysql://localhost:3306/demo` | JDBC URL. |
| `lodsve.rdbms.data-source.<name>.username` | `String` | None | `${DB_USERNAME}` | Database username. |
| `lodsve.rdbms.data-source.<name>.password` | `String` | None | `${DB_PASSWORD}` | Database password. |
| `lodsve.rdbms.data-source.<name>.pool-setting` | `PoolSetting` | None | See table below | Connection pool settings. |

### `PoolSetting`

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `...pool-setting.type` | `PoolType` | `Hikari` | `Hikari` | Connection pool type. |
| `...pool-setting.init-size` | `int` | `0` | `5` | Initialize the number of connections. |
| `...pool-setting.max-active` | `int` | `0` | `20` | Maximum number of active connections. |
| `...pool-setting.min-idle` | `int` | `0` | `5` | Minimum number of idle connections. |
| `...pool-setting.max-wait` | `int` | `0` | `30000` | Get the maximum waiting time of the connection, in milliseconds. |
| `...pool-setting.validation-query` | `String` | None | `SELECT 1` | SQL to verify the connection. |
| `...pool-setting.test-on-borrow` | `boolean` | `false` | `false` | Verify when connecting. |
| `...pool-setting.test-on-return` | `boolean` | `false` | `false` | Also verify when connecting. |
| `...pool-setting.test-while-idle` | `boolean` | `false` | `true` | Validate at idle. |
| `...pool-setting.time-between-eviction-runs-millis` | `int` | `0` | `60000` | Cleanup interval, in milliseconds. |
| `...pool-setting.min-evictable-idle-time-millis` | `int` | `0` | `300000` | Minimum idle survival time, in milliseconds. |
| `...pool-setting.remove-abandoned` | `boolean` | `false` | `false` | Whether to remove leaking connections. |
| `...pool-setting.remove-abandoned-timeout` | `int` | `0` | `300` | Leak connection timeout. |
| `...pool-setting.log-abandoned` | `boolean` | `false` | `false` | Whether to log leaked connections. |
| `...pool-setting.ext-properties` | `Properties` | None | `{characterEncoding: utf8mb4}` | Connection pool/driver extended properties. |

### `PoolType`

| value | meaning |
|---|---|
| `Hikari` | HikariCP, default value. |
| `Druid` | Alibaba Druid. |

## `lodsve.rdbms.druid`

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.rdbms.druid.aop-patterns` | `String[]` | None | `[com.example.service.*]` | Druid Spring AOP statistics package mode. |
| `lodsve.rdbms.druid.stat-view-servlet.enabled` | `boolean` | `false` | `true` | Whether to enable monitoring servlet. |
| `lodsve.rdbms.druid.stat-view-servlet.url-pattern` | `String` | None | `/druid/*` | Monitor Servlet URLs. |
| `lodsve.rdbms.druid.stat-view-servlet.allow` | `String` | None | `127.0.0.1` | Allow access to IP. |
| `lodsve.rdbms.druid.stat-view-servlet.deny` | `String` | None | `10.0.0.8` | Access Denied IP. |
| `lodsve.rdbms.druid.stat-view-servlet.login-username` | `String` | None | `${DRUID_USER}` | Monitoring page username. |
| `lodsve.rdbms.druid.stat-view-servlet.login-password` | `String` | None | `${DRUID_PASSWORD}` | Monitor page password. |
| `lodsve.rdbms.druid.stat-view-servlet.reset-enable` | `String` | None | `false` | Whether to display the reset button, the source code type is String. |
| `lodsve.rdbms.druid.web-stat-filter.enabled` | `boolean` | `false` | `true` | Whether to enable Web Statistics Filter. |
| `lodsve.rdbms.druid.web-stat-filter.url-pattern` | `String` | None | `/*` | Web Filter URL pattern. |
| `lodsve.rdbms.druid.web-stat-filter.exclusions` | `String` | None | `*.js,*.css,/druid/*` | Exclude resources or paths. |
| `lodsve.rdbms.druid.web-stat-filter.session-stat-max-count` | `String` | None | `1000` | Session maximum statistics, source code type is String. |
| `lodsve.rdbms.druid.web-stat-filter.session-stat-enable` | `String` | None | `false` | Whether to count Sessions, the source code type is String. |
| `lodsve.rdbms.druid.web-stat-filter.principal-session-name` | `String` | None | `user` | Session user attribute name. |
| `lodsve.rdbms.druid.web-stat-filter.principal-cookie-name` | `String` | None | `user` | Cookie username. |
| `lodsve.rdbms.druid.web-stat-filter.profile-enable` | `String` | None | `false` | Whether to enable Profile, the source code type is String. |

### Druid Filter

The corresponding Filter is created when `enabled` is `true` below; the remaining properties are directly bound to the third-party Druid JavaBean, and the fields change with the Druid version.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.rdbms.druid.filter.stat.enabled` | `boolean` | `false` (metadata hint `true`) | `true` | Create StatFilter. |
| `lodsve.rdbms.druid.filter.config.enabled` | `boolean` | `false` | `false` | Create ConfigFilter. |
| `lodsve.rdbms.druid.filter.encoding.enabled` | `boolean` | `false` | `false` | Create EncodingConvertFilter. |
| `lodsve.rdbms.druid.filter.slf4j.enabled` | `boolean` | `false` | `false` | Create Slf4jLogFilter. |
| `lodsve.rdbms.druid.filter.log4j.enabled` | `boolean` | `false` | `false` | Create Log4jFilter. |
| `lodsve.rdbms.druid.filter.log4j2.enabled` | `boolean` | `false` | `false` | Create Log4j2Filter. |
| `lodsve.rdbms.druid.filter.commons-log.enabled` | `boolean` | `false` | `false` | Create CommonsLogFilter. |
| `lodsve.rdbms.druid.filter.wall.enabled` | `boolean` | `false` | `true` | Create WallFilter. |
| `lodsve.rdbms.druid.filter.wall.config.*` | Druid `WallConfig` | Determined by Druid | `multi-statement-allow: false` | SQL firewall rules. |
| `lodsve.rdbms.druid.filter.stat.*` etc. | Corresponds to Druid Filter JavaBean | Determined by Druid | `log-slow-sql: true` | Fields except `enabled` are defined by third-party classes. |

Druid 1.2.1 metadata also provides `db-type` hints for StatFilter and WallConfig. The enumeration values of the two configuration items are the same:

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.rdbms.druid.filter.stat.db-type` | `String` | Determined by Druid | `mysql` | StatFilter The database type used for statistics. |
| `lodsve.rdbms.druid.filter.wall.db-type` | `String` | Determined by Druid | `mysql` | The type of database used by WallConfig. |

### Druid `db-type` enumeration

| value | meaning |
|---|---|
| `db2` | IBM Db2. |
| `postgresql` | PostgreSQL. |
| `sqlserver` | Microsoft SQL Server. |
| `oracle` | Oracle. |
| `AliOracle` | Alibaba Cloud Oracle compatible type. |
| `mysql` | MySQL. |
| `mariadb` | MariaDB. |
| `hive` | Apache Hive. |
| `h2` | H2. |
| `dm` | Dameng database. |
| `kingbase` | KingbaseES. |
| `oceanbase` | OceanBase. |
| `xugu` | Virtual Valley Database. |
| `odps` | MaxCompute / ODPS. |
| `teradata` | Teradata. |
| `log4jdbc` | Log4jdbc proxy database type. |
| `phoenix` | Apache Phoenix. |
| `edb` | EDB. |
| `kylin` | Apache Kylin. |
| `sqlite` | SQLite. |
| `other` | Other databases. |
| `jtds` | jTDS. |
| `hsql` | HSQLDB. |
| `derby` | Apache Derby. |
| `gbase` | GBase. |
| `informix` | IBM Informix. |
| `ads` | AnalyticDB / ADS. |
| `presto` | Presto. |
| `elastic_search` | Elasticsearch. |
| `hbase` | Apache HBase. |
| `drds` | DRDS. |
| `clickhouse` | ClickHouse. |
| `blink` | Blink. |
| `antspark` | AntSpark. |
| `oceanbase_oracle` | OceanBase Oracle mode. |
| `polardb` | PolarDB. |
| `ali_oracle` | Alibaba Cloud Oracle compatible type. |
| `mock` | Mock database. |
| `sybase` | Sybase. |
| `ingres` | Ingres. |
| `cloudscape` | Cloudscape. |
| `timesten` | TimesTen. |
| `as400` | IBM AS/400. |
| `sapdb` | SAP DB. |
| `kdb` | kdb+. |
| `firebirdsql` | Firebird. |
| `JSQLConnect` | JSQLConnect. |
| `JTurbo` | JTurbo. |
| `interbase` | InterBase. |
| `pointbase` | PointBase. |
| `edbc` | EDBC. |
| `mimer` | Mimer SQL. |

`filter.stat.*`, `filter.config.*`, `filter.encoding.*`, `filter.slf4j.*`, `filter.log4j.*`, `filter.log4j2.*`, `filter.commons-log.*` and `filter.wall.config.*` will directly bind the public setter of Druid 1.2.1 corresponding JavaBean. The detailed table on this page is expanded based on the current build metadata; these fields are not Lodsve custom fields, and the new version of JavaBeans and metadata should prevail after upgrading Druid.


### Druid 1.2.1 Property Details

The following table lists each bindable property exposed by Druid 1.2.1 based on the `spring-configuration-metadata.json` generated by the project build. A default value of "Determined by Druid" means that the property has no default value declared by Lodsve or metadata; the example values are only used to illustrate the format.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.rdbms.druid.filter.commons-log.connection-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.connection-commit-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.connection-connect-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.connection-connect-before-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.connection-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.connection-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.connection-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.commons-log.connection-rollback-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.data-source-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.data-source-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.commons-log.result-set-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.result-set-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.result-set-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.result-set-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.commons-log.result-set-next-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.result-set-open-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-create-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-executable-sql-log-enable` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-execute-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-execute-batch-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-execute-query-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-execute-update-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.commons-log.statement-parameter-clear-log-enable` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-parameter-set-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-prepare-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-prepare-call-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.commons-log.statement-sql-format-option` | `Druid sql.SQLUtils$FormatOption` | Determined by Druid | ``pretty-format: true`` | SQL formatting options object. |
| `lodsve.rdbms.druid.filter.commons-log.statement-sql-pretty-format` | `Boolean` | Determined by Druid | `true` | Whether to format the SQL log. |
| `lodsve.rdbms.druid.filter.log4j.connection-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.connection-commit-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.connection-connect-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.connection-connect-before-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.connection-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.connection-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.connection-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.log4j.connection-rollback-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.data-source-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.data-source-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.log4j.result-set-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.result-set-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.result-set-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.result-set-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.log4j.result-set-next-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.result-set-open-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-create-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-executable-sql-log-enable` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-execute-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-execute-batch-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-execute-query-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-execute-update-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.log4j.statement-parameter-clear-log-enable` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-parameter-set-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-prepare-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-prepare-call-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j.statement-sql-format-option` | `Druid sql.SQLUtils$FormatOption` | Determined by Druid | ``pretty-format: true`` | SQL formatting options object. |
| `lodsve.rdbms.druid.filter.log4j.statement-sql-pretty-format` | `Boolean` | Determined by Druid | `true` | Whether to format the SQL log. |
| `lodsve.rdbms.druid.filter.log4j2.connection-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.connection-commit-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.connection-connect-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.connection-connect-before-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.connection-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.connection-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.connection-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.log4j2.connection-rollback-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.data-source-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.data-source-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.log4j2.result-set-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.result-set-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.result-set-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.result-set-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.log4j2.result-set-next-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.result-set-open-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-create-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-executable-sql-log-enable` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-execute-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-execute-batch-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-execute-query-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-execute-update-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.log4j2.statement-parameter-clear-log-enable` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-parameter-set-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-prepare-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-prepare-call-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.log4j2.statement-sql-format-option` | `Druid sql.SQLUtils$FormatOption` | Determined by Druid | ``pretty-format: true`` | SQL formatting options object. |
| `lodsve.rdbms.druid.filter.log4j2.statement-sql-pretty-format` | `Boolean` | Determined by Druid | `true` | Whether to format the SQL log. |
| `lodsve.rdbms.druid.filter.slf4j.connection-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.connection-commit-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.connection-connect-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.connection-connect-before-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.connection-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.connection-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.connection-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.slf4j.connection-rollback-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.data-source-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.data-source-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.slf4j.result-set-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.result-set-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.result-set-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.result-set-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.slf4j.result-set-next-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.result-set-open-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-close-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-create-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-executable-sql-log-enable` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-execute-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-execute-batch-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-execute-query-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-execute-update-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-log-error-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-logger-name` | `String` | Determined by Druid | `com.example.sql` | Logger name. |
| `lodsve.rdbms.druid.filter.slf4j.statement-parameter-clear-log-enable` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-parameter-set-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-prepare-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-prepare-call-after-log-enabled` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.slf4j.statement-sql-format-option` | `Druid sql.SQLUtils$FormatOption` | Determined by Druid | ``pretty-format: true`` | SQL formatting options object. |
| `lodsve.rdbms.druid.filter.slf4j.statement-sql-pretty-format` | `Boolean` | Determined by Druid | `true` | Whether to format the SQL log. |
| `lodsve.rdbms.druid.filter.stat.connection-stack-trace-enable` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.stat.log-slow-sql` | `Boolean` | Determined by Druid | `true` | Druid JavaBean configuration items. |
| `lodsve.rdbms.druid.filter.stat.merge-sql` | `Boolean` | Determined by Druid | `true` | Druid JavaBean configuration items. |
| `lodsve.rdbms.druid.filter.stat.slow-sql-millis` | `Long` | Determined by Druid | `3000` | Slow SQL threshold in milliseconds. |
| `lodsve.rdbms.druid.filter.wall.config` | `Druid wall.WallConfig` | Determined by Druid | Example value | Druid JavaBean configuration items. |
| `lodsve.rdbms.druid.filter.wall.config.alter-table-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.block-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.call-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.case-condition-const-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.comment-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.commit-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.complete-insert-values-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.condition-and-alway-false-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.condition-and-alway-true-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.condition-double-const-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.condition-like-true-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.condition-op-bitwse-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.condition-op-xor-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.const-arithmetic-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.create-table-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.delete-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.delete-where-alway-true-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.delete-where-none-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.deny-functions` | `Set<String>` | Determined by Druid | `[item]` | A collection of forbidden objects. |
| `lodsve.rdbms.druid.filter.wall.config.deny-objects` | `Set<String>` | Determined by Druid | `[item]` | A collection of forbidden objects. |
| `lodsve.rdbms.druid.filter.wall.config.deny-schemas` | `Set<String>` | Determined by Druid | `[item]` | A collection of forbidden objects. |
| `lodsve.rdbms.druid.filter.wall.config.deny-tables` | `Set<String>` | Determined by Druid | `[item]` | A collection of forbidden objects. |
| `lodsve.rdbms.druid.filter.wall.config.deny-variants` | `Set<String>` | Determined by Druid | `[item]` | A collection of forbidden objects. |
| `lodsve.rdbms.druid.filter.wall.config.describe-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.dir` | `String` | Determined by Druid | `classpath:/druid` | Druid configuration file directory. |
| `lodsve.rdbms.druid.filter.wall.config.do-privileged-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.drop-table-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.function-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.hint-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.inited` | `Boolean` | Determined by Druid | `true` | Druid JavaBean configuration items. |
| `lodsve.rdbms.druid.filter.wall.config.insert-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.insert-values-check-size` | `Integer` | Determined by Druid | `3000` | INSERT VALUES checks the upper limit of the number. |
| `lodsve.rdbms.druid.filter.wall.config.intersect-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.limit-zero-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.lock-table-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.merge-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.metadata-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.minus-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.multi-statement-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.must-parameterized` | `Boolean` | Determined by Druid | `true` | Whether to require SQL parameterization. |
| `lodsve.rdbms.druid.filter.wall.config.none-base-statement-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.object-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.permit-functions` | `Set<String>` | Determined by Druid | `[item]` | A collection of objects that are allowed access. |
| `lodsve.rdbms.druid.filter.wall.config.permit-schemas` | `Set<String>` | Determined by Druid | `[item]` | A collection of objects that are allowed access. |
| `lodsve.rdbms.druid.filter.wall.config.permit-tables` | `Set<String>` | Determined by Druid | `[item]` | A collection of objects that are allowed access. |
| `lodsve.rdbms.druid.filter.wall.config.permit-variants` | `Set<String>` | Determined by Druid | `[item]` | A collection of objects that are allowed access. |
| `lodsve.rdbms.druid.filter.wall.config.read-only-tables` | `Set<String>` | Determined by Druid | `[item]` | Read-only collection of table names. |
| `lodsve.rdbms.druid.filter.wall.config.rename-table-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.replace-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.rollback-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.schema-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.select-all-column-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.select-except-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.select-having-alway-true-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.select-intersect-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.select-into-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.select-into-outfile-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.select-limit` | `Integer` | Determined by Druid | `3000` | The maximum number of rows returned by the query. |
| `lodsve.rdbms.druid.filter.wall.config.select-minus-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.select-union-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.select-where-alway-true-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.selelct-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.set-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.show-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.start-transaction-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.strict-syntax-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.table-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.tenant-column` | `String` | Determined by Druid | `tenant_id` | Tenant isolation configuration. |
| `lodsve.rdbms.druid.filter.wall.config.tenant-table-pattern` | `String` | Determined by Druid | `tenant_%` | Tenant isolation configuration. |
| `lodsve.rdbms.druid.filter.wall.config.truncate-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.update-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.update-check-handler` | `Druid wall.WallUpdateCheckHandler` | Determined by Druid | Custom bean | Custom update check handler. |
| `lodsve.rdbms.druid.filter.wall.config.update-where-alay-true-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.update-where-none-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.use-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.config.variant-check` | `Boolean` | Determined by Druid | `true` | Whether to enable corresponding checking or logging. |
| `lodsve.rdbms.druid.filter.wall.config.wrap-allow` | `Boolean` | Determined by Druid | `true` | Whether the corresponding SQL operation is allowed. |
| `lodsve.rdbms.druid.filter.wall.log-violation` | `Boolean` | Determined by Druid | `true` | Whether to log SQL Firewall violations. |
| `lodsve.rdbms.druid.filter.wall.provider-white-list` | `Set<String>` | Determined by Druid | `[item]` | Provider whitelist. |
| `lodsve.rdbms.druid.filter.wall.tenant-column` | `String` | Determined by Druid | `tenant_id` | Tenant isolation configuration. |
| `lodsve.rdbms.druid.filter.wall.throw-exception` | `Boolean` | Determined by Druid | `true` | Whether to throw an exception when a SQL Firewall violation occurs. |
