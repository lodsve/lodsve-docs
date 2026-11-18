---
title: MongoDB 示例
description: MongoDB 默认客户端和具名多数据源的 YAML 配置。
---

## 默认连接与 archive 数据源

`spring.mongodb.uri` 配置 Spring Boot 管理的默认客户端。`lodsve.mongo.data-source` 中的每个条目代表一个额外数据源，并需提供独立 URI；`default-data-source-name` 的默认值为 `default`，不要在具名数据源映射中重复使用该名称。

```yaml
spring:
  mongodb:
    # 默认数据源；生产环境请从环境变量或密钥服务注入完整 URI。
    uri: ${MONGODB_URI:mongodb://localhost:27017/lodsve}
    # 可单独指定默认库名；设置后优先于 URI 中的数据库名。
    # database: ${MONGODB_DATABASE:lodsve}
  data:
    mongodb:
      # 是否在启动时自动创建实体索引；此项属于 Spring Data MongoDB。
      auto-index-creation: false

lodsve:
  mongo:
    # @SwitchMongoDataSource 未指定其他名称时使用默认客户端。
    default-data-source-name: default
    data-source:
      # 具名数据源名称可在 @SwitchMongoDataSource("archive") 中引用。
      archive:
        uri: ${MONGODB_ARCHIVE_URI:mongodb://localhost:27017/lodsve_archive}
```

只使用一个 MongoDB 时，可省略整个 `lodsve.mongo` 配置。默认库名可由 `spring.mongodb.database` 单独指定；每个具名数据源的 URI 则必须包含数据库名。URI 可包含认证信息、Replica Set、TLS 和连接池等标准 MongoDB URI 选项；URI 语法由 MongoDB Java Driver 解析。

在 Service 的 Spring Bean 方法上添加 `@SwitchMongoDataSource("archive")` 可切换到 `archive`。该方法需要经由 Spring 代理调用；事务或 `ClientSession` 应在同一个数据源上完成。完整组件行为见[MongoDB Component](/components/mongodb/)及[MongoDB Starter](/starters/mongodb/)。
