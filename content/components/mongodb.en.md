---
title: "MongoDB data access"
kicker: Component
description: "Spring Data MongoDB client routing, named data source switching, and client lifecycle."
---

## Connectivity and Routing

The component is based on the default `MongoClient` created by Spring Boot. The default connection uses `spring.mongodb.uri`; the default database name is preferably `spring.mongodb.database`, and if not set, the database name in the URI is used. After configuring `lodsve.mongo.data-source`, the component will create a client for each named connection and provide access to Spring Data MongoDB through the routing client. Each named connection URI must contain the database name. `lodsve.mongo.default-data-source-name` specifies the default data source name, the default value is `default`; this name is reserved for the default client and can no longer be configured as a named data source.

Method level `@SwitchMongoDataSource` can select a named data source during a Spring Bean call:

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

Annotated methods must be called through the Spring proxy; self-invocations within the same object will not trigger aspects. Asynchronous tasks do not inherit the current thread's data source selection. When you need to manually switch within a code block, use `MongoDataSourceContextHolder.open(name)` and close the scope with try-with-resources.

## Connection configuration and restrictions

Each named data source only needs to provide a MongoDB connection URI; the database name in the URI determines the default database for that data source. For the full YAML of default and named connections see [MongoDB configuration example](/examples/configuration/mongodb/), the attribute table is shown in [Configuration Reference](/reference/configuration/mongodb/). Spring Data Repository, `MongoTemplate` and other APIs are still used in the same way as Spring Data MongoDB; see Starter access [MongoDB Starter](/starters/mongodb/).

`ClientSession` is bound to the `MongoClient` that created it and cannot be reused after switching clients. Therefore, a transaction or session should always use the same data source. The component is responsible for closing the named client it creates; the default client's lifecycle is still managed by Spring Boot.
