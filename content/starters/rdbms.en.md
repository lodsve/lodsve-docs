---
title: "RDBMS dynamic data source"
kicker: Starter
icon: ◉
description: "Unified configuration of relational database connections and support for dynamic data sources and Druid integration."
weight: 40
---

## Introduce dependencies

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-rdbms</artifactId>
</dependency>
```

## Data source configuration

This component uses `lodsve.rdbms.data-source.<name>` to configure the named data source, and `default-data-source-name` can specify the default item; each data source configures the JDBC driver, URL, account password, and connection pool `pool-setting`. The connection pool type is `Hikari` or `Druid`. The standard `spring.datasource` configuration does not replace the multi-data source configuration here.

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

For complete fields, Druid monitoring and Filter configuration, see [RDBMS configuration example](/examples/configuration/rdbms/). Multiple data source switching should occur before a transaction obtains a connection; driver dependencies and connection pool versions are uniformly controlled by project dependency management.
