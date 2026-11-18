---
title: MongoDB
kicker: Starter
icon: ◉
description: "Use Spring Data MongoDB to access the default MongoDB or switch to a named data source."
weight: 31
---

## Introduce dependencies

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-mongodb</artifactId>
</dependency>
```

The Starter integrates Spring Data MongoDB and enables Lodsve’s named data source routing. When using only a single database, you only need to configure the Spring Boot default connection. The default database name can be specified separately from `spring.mongodb.database`; when not set, the database name in the URI is used:

```yaml
spring:
  mongodb:
    uri: ${MONGODB_URI:mongodb://localhost:27017/lodsve}
```

Add named URIs under `lodsve.mongo.data-source` when accessing additional databases is required. The named URI must contain the database name and mark the method to be routed with `@SwitchMongoDataSource("name")`. Fields and complete dual data source examples are available in [MongoDB configuration example](/examples/configuration/mongodb/); See component scope, proxy behavior and transaction restrictions [MongoDB Component](/components/mongodb/).

The general usage of Repository and `MongoTemplate` is consistent with Spring Data MongoDB. The sample project shows the saving and query entries of the default database and `archive` database, see `lodsve-boot-example-mongodb`. For production environments, provide the URI via an environment variable or key management service to avoid submitting credentials to the configuration file.
