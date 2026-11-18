---
title: "Starter Catalog"
description: "Choose the Starter your application needs. The Maven BOM manages Starter versions."
weight: 20
---

Start with a Starter to integrate Lodsve Boot. Spring Boot configures the relevant beans when their conditions are met. The corresponding Component documentation describes the underlying implementation.

| Starter | Use Cases |
| --- | --- |
| [filesystem](/starters/filesystem/) | Upload and download files using OSS, S3, or MinIO |
| [mongodb](/starters/mongodb/) | Spring Data MongoDB and routing between named data sources |
| [mybatis](/starters/mybatis/) | Common CRUD operations, pagination, soft deletes, and optimistic locking |
| [redis](/starters/redis/) | Redis connections, serialization and dynamic data sources |
| [rdbms](/starters/rdbms/) | Dynamic data sources and Druid integration |
| [rabbitmq](/starters/rabbitmq/) / [rocketmq](/starters/rocketmq/) | Message production, consumption and serialization enhancements |
| [nacos](/starters/nacos/) / [openfeign](/starters/openfeign/) | Service configuration, discovery, and remote calls |
| [webmvc](/starters/webmvc/) / [swagger](/starters/swagger/) | Web interface and API documentation enhancements |
| [validator](/starters/validator/) / [security](/starters/security/) | Parameter verification and basic security capabilities |
| [encryption](/starters/encryption/) / [script](/starters/script/) | Configure encryption and JVM script execution |

Each Starter page lists the dependency to add, when to use it, and where to find its configuration. See [Component Configuration Examples](/examples/configuration/) for Lodsve properties. For framework settings, use the documentation for your Spring Boot or Spring Cloud version.
