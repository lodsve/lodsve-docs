---
title: RDBMS 与 Druid 示例
description: RDBMS 与 Druid 示例 YAML 配置示例。
---

## RDBMS 与 Druid

```yaml
lodsve:
  rdbms:
    # 必须匹配 data-source 下的一个名称；省略时默认选择配置的第一个数据源。
    default-data-source-name: primary
    data-source:
      primary:
        # 连接池显示名称；省略时使用 primary。
        pool-name: primary
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: ${DB_URL:jdbc:mysql://localhost:3306/demo}
        username: ${DB_USERNAME:root}
        password: ${DB_PASSWORD:}
        pool-setting:
          # 仅支持 Hikari 或 Druid。
          type: Hikari
          # 以下是连接池通用配置；连接池实现可能只使用其中适用的字段。
          init-size: 5
          max-active: 20
          min-idle: 5
          max-wait: 30000
          validation-query: SELECT 1
          test-on-borrow: false
          test-on-return: false
          test-while-idle: true
          time-between-eviction-runs-millis: 60000
          min-evictable-idle-time-millis: 300000
          remove-abandoned: false
          remove-abandoned-timeout: 300
          log-abandoned: false
          # 连接池特定扩展属性；键值会传给连接池配置。
          ext-properties: {}
    druid:
      # 配置需要被 Druid Spring AOP 统计的包模式。
      aop-patterns: []
      stat-view-servlet:
        # 开启 Druid 监控页前，请配置访问控制和登录凭据。
        enabled: false
        url-pattern: /druid/*
        allow: 127.0.0.1
        deny: ''
        login-username: ${DRUID_USER:}
        login-password: ${DRUID_PASSWORD:}
        reset-enable: false
      web-stat-filter:
        enabled: false
        url-pattern: /*
        exclusions: '*.js,*.gif,*.jpg,*.png,*.css,*.ico,/druid/*'
        session-stat-max-count: 1000
        session-stat-enable: false
        principal-session-name: ''
        principal-cookie-name: ''
        profile-enable: false
      filter:
        # Filter 通过各自的 enabled 条件创建；不要将所有日志 Filter 同时启用。
        stat:
          enabled: true
          # StatFilter 的其他属性按 Druid StatFilter JavaBean 属性绑定。
          db-type: mysql
          log-slow-sql: true
          slow-sql-millis: 3000
        config:
          enabled: false
        encoding:
          enabled: false
        slf4j:
          enabled: false
        log4j:
          enabled: false
        log4j2:
          enabled: false
        commons-log:
          enabled: false
        wall:
          enabled: false
          db-type: mysql
          config:
            # WallConfig 属性按 Druid WallConfig JavaBean 属性绑定，如 multi-statement-allow。
            multi-statement-allow: false
```

`pool-setting` 的 `init-size`、`max-active` 等参数会根据 `type` 映射到对应连接池。Druid Filter 除 `enabled` 外还可绑定各自 Druid 类公开的 JavaBean 属性；WallFilter 的规则配置位于 `filter.wall.config`。监控页默认不开启，切勿在公网无认证暴露。

## Druid 1.2.1 完整属性示例

下面的示例覆盖 Druid Filter 元数据中的每个叶子属性。实际使用时只保留需要的字段；`enabled` 仍需按 Filter 单独开启。

```yaml
lodsve:
  rdbms:
    druid:
      filter:
        commons-log:
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-commit-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-connect-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-connect-before-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          connection-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-rollback-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          data-source-log-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          data-source-logger-name: com.example.sql
          # 是否创建或启用该 Druid Filter。 示例值；默认值和类型见配置参考页。
          enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          result-set-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-next-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-open-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-create-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-executable-sql-log-enable: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-batch-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-query-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-update-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          statement-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-parameter-clear-log-enable: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-parameter-set-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-prepare-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-prepare-call-after-log-enabled: false
          # SQL 日志格式化选项对象。 示例值；默认值和类型见配置参考页。
          statement-sql-format-option: {}
          # Druid 日志行为配置。 示例值；默认值和类型见配置参考页。
          statement-sql-pretty-format: false
        config:
          # 是否创建或启用该 Druid Filter。 示例值；默认值和类型见配置参考页。
          enabled: false
        encoding:
          # 是否创建或启用该 Druid Filter。 示例值；默认值和类型见配置参考页。
          enabled: false
        log4j:
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-commit-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-connect-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-connect-before-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          connection-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-rollback-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          data-source-log-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          data-source-logger-name: com.example.sql
          # 是否创建或启用该 Druid Filter。 示例值；默认值和类型见配置参考页。
          enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          result-set-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-next-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-open-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-create-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-executable-sql-log-enable: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-batch-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-query-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-update-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          statement-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-parameter-clear-log-enable: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-parameter-set-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-prepare-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-prepare-call-after-log-enabled: false
          # SQL 日志格式化选项对象。 示例值；默认值和类型见配置参考页。
          statement-sql-format-option: {}
          # Druid 日志行为配置。 示例值；默认值和类型见配置参考页。
          statement-sql-pretty-format: false
        log4j2:
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-commit-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-connect-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-connect-before-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          connection-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-rollback-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          data-source-log-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          data-source-logger-name: com.example.sql
          # 是否创建或启用该 Druid Filter。 示例值；默认值和类型见配置参考页。
          enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          result-set-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-next-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-open-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-create-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-executable-sql-log-enable: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-batch-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-query-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-update-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          statement-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-parameter-clear-log-enable: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-parameter-set-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-prepare-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-prepare-call-after-log-enabled: false
          # SQL 日志格式化选项对象。 示例值；默认值和类型见配置参考页。
          statement-sql-format-option: {}
          # Druid 日志行为配置。 示例值；默认值和类型见配置参考页。
          statement-sql-pretty-format: false
        slf4j:
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-commit-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-connect-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-connect-before-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          connection-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-rollback-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          data-source-log-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          data-source-logger-name: com.example.sql
          # 是否创建或启用该 Druid Filter。 示例值；默认值和类型见配置参考页。
          enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          result-set-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-next-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          result-set-open-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-close-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-create-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-executable-sql-log-enable: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-batch-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-query-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-execute-update-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-log-error-enabled: false
          # 日志记录器名称。 示例值；默认值和类型见配置参考页。
          statement-logger-name: com.example.sql
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-parameter-clear-log-enable: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-parameter-set-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-prepare-after-log-enabled: false
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          statement-prepare-call-after-log-enabled: false
          # SQL 日志格式化选项对象。 示例值；默认值和类型见配置参考页。
          statement-sql-format-option: {}
          # Druid 日志行为配置。 示例值；默认值和类型见配置参考页。
          statement-sql-pretty-format: false
        stat:
          # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
          connection-stack-trace-enable: false
          # Druid 识别的数据库类型；可用值见配置参考页枚举表。 示例值；默认值和类型见配置参考页。
          db-type: null
          # 是否创建或启用该 Druid Filter。 示例值；默认值和类型见配置参考页。
          enabled: true
          # Druid JavaBean 配置项。 示例值；默认值和类型见配置参考页。
          log-slow-sql: false
          # Druid JavaBean 配置项。 示例值；默认值和类型见配置参考页。
          merge-sql: false
          # 慢 SQL 阈值，单位毫秒。 示例值；默认值和类型见配置参考页。
          slow-sql-millis: 0
        wall:
          config:
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            alter-table-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            block-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            call-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            case-condition-const-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            comment-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            commit-allow: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            complete-insert-values-check: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            condition-and-alway-false-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            condition-and-alway-true-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            condition-double-const-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            condition-like-true-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            condition-op-bitwse-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            condition-op-xor-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            const-arithmetic-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            create-table-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            delete-allow: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            delete-where-alway-true-check: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            delete-where-none-check: false
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            deny-functions: []
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            deny-objects: []
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            deny-schemas: []
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            deny-tables: []
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            deny-variants: []
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            describe-allow: false
            # Druid 配置文件目录。 示例值；默认值和类型见配置参考页。
            dir: classpath:/druid
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            do-privileged-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            drop-table-allow: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            function-check: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            hint-allow: false
            # Druid JavaBean 配置项。 示例值；默认值和类型见配置参考页。
            inited: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            insert-allow: false
            # Druid 校验数量或返回数量上限。 示例值；默认值和类型见配置参考页。
            insert-values-check-size: 0
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            intersect-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            limit-zero-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            lock-table-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            merge-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            metadata-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            minus-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            multi-statement-allow: false
            # Druid JavaBean 配置项。 示例值；默认值和类型见配置参考页。
            must-parameterized: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            none-base-statement-allow: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            object-check: false
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            permit-functions: []
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            permit-schemas: []
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            permit-tables: []
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            permit-variants: []
            # Druid SQL 对象访问控制集合。 示例值；默认值和类型见配置参考页。
            read-only-tables: []
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            rename-table-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            replace-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            rollback-allow: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            schema-check: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            select-all-column-allow: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            select-except-check: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            select-having-alway-true-check: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            select-intersect-check: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            select-into-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            select-into-outfile-allow: false
            # Druid 校验数量或返回数量上限。 示例值；默认值和类型见配置参考页。
            select-limit: 0
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            select-minus-check: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            select-union-check: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            select-where-alway-true-check: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            selelct-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            set-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            show-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            start-transaction-allow: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            strict-syntax-check: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            table-check: false
            # 租户隔离配置。 示例值；默认值和类型见配置参考页。
            tenant-column: tenant_id
            # 租户隔离配置。 示例值；默认值和类型见配置参考页。
            tenant-table-pattern: tenant_%
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            truncate-allow: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            update-allow: false
            # 自定义更新检查处理器 Bean。 示例值；默认值和类型见配置参考页。
            update-check-handler: null
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            update-where-alay-true-check: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            update-where-none-check: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            use-allow: false
            # 是否启用对应检查或日志记录。 示例值；默认值和类型见配置参考页。
            variant-check: false
            # 是否允许对应 SQL 操作。 示例值；默认值和类型见配置参考页。
            wrap-allow: false
          # Druid 识别的数据库类型；可用值见配置参考页枚举表。 示例值；默认值和类型见配置参考页。
          db-type: mysql
          # 是否创建或启用该 Druid Filter。 示例值；默认值和类型见配置参考页。
          enabled: false
          # SQL 防火墙违规处理配置。 示例值；默认值和类型见配置参考页。
          log-violation: false
          # SQL 防火墙违规处理配置。 示例值；默认值和类型见配置参考页。
          provider-white-list: []
          # 租户隔离配置。 示例值；默认值和类型见配置参考页。
          tenant-column: tenant_id
          # SQL 防火墙违规处理配置。 示例值；默认值和类型见配置参考页。
          throw-exception: false
```
