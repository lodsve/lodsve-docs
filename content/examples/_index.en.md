---
title: "Example Projects"
description: "See how to configure, start, and combine Lodsve Boot components."
weight: 40
---

[Component Configuration Examples](/examples/configuration/) covers Lodsve properties, their defaults and units, and when they take effect.

The sample source code is located at `lodsve-boot-examples/` in the main repository. Each module corresponds to an external infrastructure or business scenario.

| Example | Module | Required Services |
| --- | --- | --- |
| [Filesystem](/examples/filesystem/) | `lodsve-boot-example-filesystem` | OSS, S3 or MinIO |
| [MongoDB](/examples/configuration/mongodb/) | `lodsve-boot-example-mongodb` | MongoDB with a default database and a named archive data source |
| [MyBatis](/examples/mybatis/) | `lodsve-boot-example-mybatis` | Relational databases such as MySQL |
| [Redis](/examples/configuration/redis/) | `lodsve-boot-example-redis` | Redis |
| [RabbitMQ](/examples/configuration/rabbitmq/) | `lodsve-boot-example-rabbitmq` | RabbitMQ |
| [RocketMQ](/examples/configuration/rocketmq/) | `lodsve-boot-example-rocketmq` | RocketMQ NameServer |
| [RPC](/examples/rpc/) | `lodsve-boot-example-rpc` | Server and client |
| [WebMVC](/examples/configuration/webmvc/) | `lodsve-boot-example-webmvc` | HTTP service |

Before running an example, open its `application.yml` and set the addresses, credentials, and topics for your environment.
