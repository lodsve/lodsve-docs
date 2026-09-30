---
title: 配置参考
description: 按模块查看 Lodsve Boot 配置项、中文说明、默认值、示例值和枚举。
weight: 10
---

Lodsve Boot 的配置按模块拆分。选择模块后，可以查看该模块的完整属性表、单位说明、默认值、示例值和枚举取值。

| 模块 | 配置前缀 | 内容 |
|---|---|---|
| [Core 与 Snowflake 配置](/reference/configuration/core/) | `lodsve.core、snowflake.*` | 完整配置项与说明。 |
| [Event 配置](/reference/configuration/event/) | `lodsve.event` | 完整配置项与说明。 |
| [Countdown 配置](/reference/configuration/countdown/) | `lodsve.countdown` | 完整配置项与说明。 |
| [Encryption 配置](/reference/configuration/encryption/) | `lodsve.encryption` | 完整配置项与说明。 |
| [File System 配置](/reference/configuration/filesystem/) | `lodsve.file-system` | 完整配置项与说明。 |
| [MyBatis 配置](/reference/configuration/mybatis/) | `lodsve.mybatis` | 完整配置项与说明。 |
| [RabbitMQ 配置](/reference/configuration/rabbitmq/) | `lodsve.rabbit` | 完整配置项与说明。 |
| [Redis 配置](/reference/configuration/redis/) | `lodsve.redis` | 完整配置项与说明。 |
| [RDBMS 与 Druid 配置](/reference/configuration/rdbms/) | `lodsve.rdbms、lodsve.rdbms.druid` | 完整配置项与说明。 |
| [RocketMQ 配置](/reference/configuration/rocketmq/) | `lodsve.rocketmq` | 完整配置项与说明。 |
| [Swagger 配置](/reference/configuration/swagger/) | `lodsve.swagger` | 完整配置项与说明。 |
| [WebMVC 配置](/reference/configuration/webmvc/) | `lodsve.web-mvc` | 完整配置项与说明。 |


完整 YAML 示例已按模块拆分到[组件配置示例](/examples/configuration/)。没有专属 `lodsve.*` 配置的模块（Security、Validator、Script、OpenFeign、Nacos）仍使用各自的 Bean、注解或 Spring 官方属性。

## 配置排查

1. 确认 Starter 已进入依赖树。
2. 进入对应模块页面核对完整键名、类型、单位、默认值和枚举值。
3. 检查 `enabled`、文件系统 `type`、Druid Filter 等条件属性。
4. 使用 Spring Boot 条件评估报告确认自动配置是否生效。
5. 密码、Access Key、Token 等敏感值只通过环境变量或密钥服务注入。
