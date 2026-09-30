---
title: 示例工程
description: 从真实示例中了解组件如何配置、启动和组合。
weight: 40
---

新增：[组件完整配置示例](/examples/configuration/)，按功能列出 Lodsve 自定义配置属性，并说明默认值、单位和启用条件。

示例源码位于主仓库的 `lodsve-boot-examples/`，每个模块都对应一个外部基础设施或业务场景。

| 示例 | 位置 | 依赖服务 |
| --- | --- | --- |
| Filesystem | `lodsve-boot-example-filesystem` | OSS、S3 或 Minio |
| MyBatis | `lodsve-boot-example-mybatis` | MySQL 等关系型数据库 |
| Redis | `lodsve-boot-example-redis` | Redis |
| RabbitMQ | `lodsve-boot-example-rabbitmq` | RabbitMQ |
| RocketMQ | `lodsve-boot-example-rocketmq` | RocketMQ NameServer |
| RPC | `lodsve-boot-example-rpc` | 服务端与客户端 |
| WebMVC | `lodsve-boot-example-webmvc` | HTTP 服务 |

运行示例前先阅读对应模块的 `application.yml`，将连接地址、凭据和 Topic 等环境参数改为本地值。
