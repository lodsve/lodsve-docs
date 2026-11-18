---
title: "Configuration Reference"
description: "View Lodsve Boot configuration items, descriptions, default values, example values and enumerations by module."
weight: 10
---

The configuration of Lodsve Boot is split by modules. After selecting a module, you can view the module's complete attribute table, unit description, default values, sample values, and enumeration values.

| module | Configuration prefix | content |
|---|---|---|
| [Core and Snowflake configuration](/reference/configuration/core/) | `lodsve.core、snowflake.*` | Complete configuration items and descriptions. |
| [Event configuration](/reference/configuration/event/) | `lodsve.event` | Complete configuration items and descriptions. |
| [Countdown configuration](/reference/configuration/countdown/) | `lodsve.countdown` | Complete configuration items and descriptions. |
| [Encryption configuration](/reference/configuration/encryption/) | `lodsve.encryption` | Complete configuration items and descriptions. |
| [File System Configuration](/reference/configuration/filesystem/) | `lodsve.file-system` | Complete configuration items and descriptions. |
| [MongoDB configuration](/reference/configuration/mongodb/) | `lodsve.mongo`, `spring.mongodb` | Default connection and named data source configuration. |
| [MyBatis configuration](/reference/configuration/mybatis/) | `lodsve.mybatis` | Complete configuration items and descriptions. |
| [RabbitMQ configuration](/reference/configuration/rabbitmq/) | `lodsve.rabbit` | Complete configuration items and descriptions. |
| [Redis configuration](/reference/configuration/redis/) | `lodsve.redis` | Complete configuration items and descriptions. |
| [RDBMS and Druid configuration](/reference/configuration/rdbms/) | `lodsve.rdbms、lodsve.rdbms.druid` | Complete configuration items and descriptions. |
| [RocketMQ configuration](/reference/configuration/rocketmq/) | `lodsve.rocketmq` | Complete configuration items and descriptions. |
| [Swagger configuration](/reference/configuration/swagger/) | `lodsve.swagger` | Complete configuration items and descriptions. |
| [WebMVC configuration](/reference/configuration/webmvc/) | `lodsve.web-mvc` | Complete configuration items and descriptions. |


The full YAML example has been split by module into [Component Configuration Examples](/examples/configuration/). Modules without dedicated `lodsve.*` configuration (Security, Validator, Script, OpenFeign, Nacos) still use their respective beans, annotations or official Spring properties.

## Configuration troubleshooting

1. Confirm that Starter has entered the dependency tree.
2. Enter the corresponding module page to check the complete key name, type, unit, default value and enumeration value.
3. Check conditional properties such as `enabled`, File System `type`, Druid Filter, etc.
4. Use the Spring Boot condition evaluation report to confirm whether the automatic configuration is taking effect.
5. Sensitive values such as passwords, Access Keys, Tokens, etc. are only injected through environment variables or key services.
