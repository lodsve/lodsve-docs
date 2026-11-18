---
title: "RDBMS and Druid examples"
description: "RDBMS and Druid sample YAML configuration example."
---

## RDBMS and Druid

```yaml
lodsve:
  rdbms:
    # Must match a name under data-source; when omitted, the first configured data source is selected by default.
    default-data-source-name: primary
    data-source:
      primary:
        # Connection pool display name; primary is used when omitted.
        pool-name: primary
        driver-class-name: com.mysql.cj.jdbc.Driver
        url: ${DB_URL:jdbc:mysql://localhost:3306/demo}
        username: ${DB_USERNAME:root}
        password: ${DB_PASSWORD:}
        pool-setting:
          # Only supports Hikari or Druid.
          type: Hikari
          # The following is a generic configuration for a connection pool; a connection pool implementation may only use the applicable fields within it.
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
          # Connection pool specific extended properties; key values are passed to the connection pool configuration.
          ext-properties: {}
    druid:
      # Configure the package mode that needs to be counted by Druid Spring AOP.
      aop-patterns: []
      stat-view-servlet:
        # Before opening the Druid monitoring page, please configure access control and login credentials.
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
        # Filters are created with their own enabled conditions; do not enable all log filters at the same time.
        stat:
          enabled: true
          # Other properties of StatFilter are bound as Druid StatFilter JavaBean properties.
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
            # WallConfig properties are bound by Druid WallConfig JavaBean properties, such as multi-statement-allow.
            multi-statement-allow: false
```

`init-size`, `max-active` and other parameters of `pool-setting` will be mapped to the corresponding connection pool according to `type`. In addition to `enabled`, Druid Filter can also bind JavaBean properties exposed by the respective Druid classes; WallFilter's rule configuration is located in `filter.wall.config`. The monitoring page is not enabled by default. Do not expose it to the public network without authentication.

## Druid 1.2.1 complete property example

The following example overrides each leaf property in the Druid Filter metadata. In actual use, only the required fields are retained; `enabled` still needs to be opened separately by pressing Filter.

```yaml
lodsve:
  rdbms:
    druid:
      filter:
        commons-log:
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-commit-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-connect-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-connect-before-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          connection-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-rollback-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          data-source-log-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          data-source-logger-name: com.example.sql
          # Whether to create or enable this Druid Filter. Example values; see the configuration reference page for default values and types.
          enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          result-set-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-next-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-open-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-create-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-executable-sql-log-enable: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-batch-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-query-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-update-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          statement-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-parameter-clear-log-enable: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-parameter-set-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-prepare-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-prepare-call-after-log-enabled: false
          # SQL log formatting options object. Example values; see the configuration reference page for default values and types.
          statement-sql-format-option: {}
          # Druid logging behavior configuration. Example values; see the configuration reference page for default values and types.
          statement-sql-pretty-format: false
        config:
          # Whether to create or enable this Druid Filter. Example values; see the configuration reference page for default values and types.
          enabled: false
        encoding:
          # Whether to create or enable this Druid Filter. Example values; see the configuration reference page for default values and types.
          enabled: false
        log4j:
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-commit-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-connect-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-connect-before-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          connection-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-rollback-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          data-source-log-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          data-source-logger-name: com.example.sql
          # Whether to create or enable this Druid Filter. Example values; see the configuration reference page for default values and types.
          enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          result-set-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-next-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-open-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-create-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-executable-sql-log-enable: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-batch-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-query-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-update-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          statement-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-parameter-clear-log-enable: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-parameter-set-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-prepare-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-prepare-call-after-log-enabled: false
          # SQL log formatting options object. Example values; see the configuration reference page for default values and types.
          statement-sql-format-option: {}
          # Druid logging behavior configuration. Example values; see the configuration reference page for default values and types.
          statement-sql-pretty-format: false
        log4j2:
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-commit-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-connect-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-connect-before-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          connection-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-rollback-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          data-source-log-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          data-source-logger-name: com.example.sql
          # Whether to create or enable this Druid Filter. Example values; see the configuration reference page for default values and types.
          enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          result-set-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-next-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-open-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-create-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-executable-sql-log-enable: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-batch-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-query-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-update-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          statement-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-parameter-clear-log-enable: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-parameter-set-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-prepare-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-prepare-call-after-log-enabled: false
          # SQL log formatting options object. Example values; see the configuration reference page for default values and types.
          statement-sql-format-option: {}
          # Druid logging behavior configuration. Example values; see the configuration reference page for default values and types.
          statement-sql-pretty-format: false
        slf4j:
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-commit-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-connect-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-connect-before-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          connection-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-rollback-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          data-source-log-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          data-source-logger-name: com.example.sql
          # Whether to create or enable this Druid Filter. Example values; see the configuration reference page for default values and types.
          enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          result-set-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-next-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          result-set-open-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-close-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-create-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-executable-sql-log-enable: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-batch-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-query-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-execute-update-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-log-error-enabled: false
          # Logger name. Example values; see the configuration reference page for default values and types.
          statement-logger-name: com.example.sql
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-parameter-clear-log-enable: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-parameter-set-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-prepare-after-log-enabled: false
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          statement-prepare-call-after-log-enabled: false
          # SQL log formatting options object. Example values; see the configuration reference page for default values and types.
          statement-sql-format-option: {}
          # Druid logging behavior configuration. Example values; see the configuration reference page for default values and types.
          statement-sql-pretty-format: false
        stat:
          # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
          connection-stack-trace-enable: false
          # The database type recognized by Druid; see the enumeration table on the configuration reference page for available values. Example values; see the configuration reference page for default values and types.
          db-type: null
          # Whether to create or enable this Druid Filter. Example values; see the configuration reference page for default values and types.
          enabled: true
          # Druid JavaBean configuration items. Example values; see the configuration reference page for default values and types.
          log-slow-sql: false
          # Druid JavaBean configuration items. Example values; see the configuration reference page for default values and types.
          merge-sql: false
          # Slow SQL threshold in milliseconds. Example values; see the configuration reference page for default values and types.
          slow-sql-millis: 0
        wall:
          config:
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            alter-table-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            block-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            call-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            case-condition-const-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            comment-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            commit-allow: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            complete-insert-values-check: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            condition-and-alway-false-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            condition-and-alway-true-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            condition-double-const-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            condition-like-true-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            condition-op-bitwse-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            condition-op-xor-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            const-arithmetic-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            create-table-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            delete-allow: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            delete-where-alway-true-check: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            delete-where-none-check: false
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            deny-functions: []
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            deny-objects: []
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            deny-schemas: []
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            deny-tables: []
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            deny-variants: []
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            describe-allow: false
            # Druid configuration file directory. Example values; see the configuration reference page for default values and types.
            dir: classpath:/druid
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            do-privileged-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            drop-table-allow: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            function-check: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            hint-allow: false
            # Druid JavaBean configuration items. Example values; see the configuration reference page for default values and types.
            inited: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            insert-allow: false
            # Druid checks the quantity or returns the upper limit of quantity. Example values; see the configuration reference page for default values and types.
            insert-values-check-size: 0
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            intersect-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            limit-zero-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            lock-table-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            merge-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            metadata-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            minus-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            multi-statement-allow: false
            # Druid JavaBean configuration items. Example values; see the configuration reference page for default values and types.
            must-parameterized: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            none-base-statement-allow: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            object-check: false
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            permit-functions: []
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            permit-schemas: []
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            permit-tables: []
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            permit-variants: []
            # Druid SQL object access control collection. Example values; see the configuration reference page for default values and types.
            read-only-tables: []
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            rename-table-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            replace-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            rollback-allow: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            schema-check: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            select-all-column-allow: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            select-except-check: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            select-having-alway-true-check: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            select-intersect-check: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            select-into-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            select-into-outfile-allow: false
            # Druid checks the quantity or returns the upper limit of quantity. Example values; see the configuration reference page for default values and types.
            select-limit: 0
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            select-minus-check: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            select-union-check: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            select-where-alway-true-check: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            selelct-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            set-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            show-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            start-transaction-allow: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            strict-syntax-check: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            table-check: false
            # Tenant isolation configuration. Example values; see the configuration reference page for default values and types.
            tenant-column: tenant_id
            # Tenant isolation configuration. Example values; see the configuration reference page for default values and types.
            tenant-table-pattern: tenant_%
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            truncate-allow: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            update-allow: false
            # Custom update check handler bean. Example values; see the configuration reference page for default values and types.
            update-check-handler: null
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            update-where-alay-true-check: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            update-where-none-check: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            use-allow: false
            # Whether to enable corresponding checking or logging. Example values; see the configuration reference page for default values and types.
            variant-check: false
            # Whether the corresponding SQL operation is allowed. Example values; see the configuration reference page for default values and types.
            wrap-allow: false
          # The database type recognized by Druid; see the enumeration table on the configuration reference page for available values. Example values; see the configuration reference page for default values and types.
          db-type: mysql
          # Whether to create or enable this Druid Filter. Example values; see the configuration reference page for default values and types.
          enabled: false
          # SQL Firewall violation handling configuration. Example values; see the configuration reference page for default values and types.
          log-violation: false
          # SQL Firewall violation handling configuration. Example values; see the configuration reference page for default values and types.
          provider-white-list: []
          # Tenant isolation configuration. Example values; see the configuration reference page for default values and types.
          tenant-column: tenant_id
          # SQL Firewall violation handling configuration. Example values; see the configuration reference page for default values and types.
          throw-exception: false
```
