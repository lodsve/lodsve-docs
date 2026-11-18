---
title: MongoDB
kicker: Starter
icon: ◉
description: 使用 Spring Data MongoDB 访问默认 MongoDB 或切换到具名数据源。
weight: 31
---

## 引入依赖

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-mongodb</artifactId>
</dependency>
```

Starter 集成 Spring Data MongoDB，并启用 Lodsve 的具名数据源路由。仅使用单个数据库时，只需配置 Spring Boot 默认连接。默认库名可从 `spring.mongodb.database` 单独指定；未设置时使用 URI 中的数据库名：

```yaml
spring:
  mongodb:
    uri: ${MONGODB_URI:mongodb://localhost:27017/lodsve}
```

需要访问额外数据库时，在 `lodsve.mongo.data-source` 下添加具名 URI。具名 URI 必须包含数据库名，并用 `@SwitchMongoDataSource("name")` 标记需要路由的方法。字段和完整双数据源示例见[MongoDB 配置示例](/examples/configuration/mongodb/)；组件作用域、代理行为和事务限制见[MongoDB Component](/components/mongodb/)。

Repository 和 `MongoTemplate` 的常规使用方式与 Spring Data MongoDB 一致。示例工程展示默认库和 `archive` 库的保存、查询入口，见 `lodsve-boot-example-mongodb`。生产环境请通过环境变量或密钥管理服务提供 URI，避免将凭据提交到配置文件。
