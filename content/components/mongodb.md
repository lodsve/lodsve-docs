---
title: MongoDB 数据访问
kicker: Component
description: Spring Data MongoDB 客户端路由、具名数据源切换和客户端生命周期。
---

## 连接与路由

组件以 Spring Boot 创建的默认 `MongoClient` 为基础。默认连接使用 `spring.mongodb.uri`；默认数据库名优先取 `spring.mongodb.database`，未设置时取 URI 中的数据库名。配置 `lodsve.mongo.data-source` 后，组件会为每个具名连接创建客户端，并通过路由客户端向 Spring Data MongoDB 提供访问入口。每个具名连接 URI 必须包含数据库名。`lodsve.mongo.default-data-source-name` 指定默认数据源名称，默认值为 `default`；此名称保留给默认客户端，不能再作为具名数据源配置。

方法级 `@SwitchMongoDataSource` 可以在一次 Spring Bean 调用期间选择具名数据源：

```java
@Service
public class ArchiveService {
    private final DemoRepository repository;

    public ArchiveService(DemoRepository repository) {
        this.repository = repository;
    }

    @SwitchMongoDataSource("archive")
    public List<Demo> listArchived() {
        return repository.findAll();
    }
}
```

注解方法必须通过 Spring 代理调用；同一个对象内部的自调用不会触发切面。异步任务不继承当前线程的数据源选择。需要在代码块中手动切换时，可使用 `MongoDataSourceContextHolder.open(name)` 并以 try-with-resources 关闭作用域。

## 连接配置与限制

每个具名数据源只需提供 MongoDB 连接 URI；URI 中的数据库名决定该数据源的默认库。默认连接和具名连接的完整 YAML 见[MongoDB 配置示例](/examples/configuration/mongodb/)，属性表见[配置参考](/reference/configuration/mongodb/)。Spring Data Repository、`MongoTemplate` 等 API 仍按 Spring Data MongoDB 的方式使用；Starter 接入见[MongoDB Starter](/starters/mongodb/)。

`ClientSession` 绑定到创建它的 `MongoClient`，不能在切换客户端后继续复用。因此一次事务或会话应固定使用同一个数据源。组件负责关闭它创建的具名客户端；默认客户端的生命周期仍由 Spring Boot 管理。
