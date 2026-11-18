---
title: MongoDB 配置
description: Spring Boot 默认 MongoClient 与 Lodsve MongoDB 具名数据源配置项。
---

Spring Boot 的默认 MongoDB URI 使用 `spring.mongodb.uri`。Lodsve 的具名数据源使用 `lodsve.mongo.data-source.<name>.uri`；配置至少一个具名数据源后，Starter 才会启用路由客户端。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `spring.mongodb.uri` | `String` | 未显式设置时由 Spring Boot 版本决定 | `mongodb://localhost:27017/lodsve` | Spring Boot 管理的默认 MongoDB 客户端连接 URI。 |
| `spring.mongodb.database` | `String` | `null`，回退到 URI 中的数据库名 | `lodsve` | 默认数据源的数据库名；设置后优先于 URI 中的数据库名。 |
| `spring.data.mongodb.auto-index-creation` | `boolean` | `false` | `true` | Spring Data MongoDB 的索引自动创建选项。 |
| `lodsve.mongo.default-data-source-name` | `String` | `default` | `default` | 路由客户端未选中具名数据源时使用的默认连接名称。 |
| `lodsve.mongo.data-source.<name>.uri` | `String` | 无 | `mongodb://localhost:27017/lodsve_archive` | 额外数据源的 MongoDB 连接 URI；每个名称对应独立客户端。名称不得与默认数据源名相同。 |

具名数据源的 URI 必须包含数据库名。URI 支持项、认证方式和连接参数请参考当前 MongoDB Java Driver 文档。具名连接示例见[MongoDB 配置示例](/examples/configuration/mongodb/)。
