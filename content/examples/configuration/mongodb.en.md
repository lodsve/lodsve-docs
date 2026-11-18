---
title: "MongoDB example"
description: "YAML configuration for MongoDB default client and multiple named data sources."
---

## Default connection to archive data source

`spring.mongodb.uri` configures the default client managed by Spring Boot. Each entry in `lodsve.mongo.data-source` represents an additional data source and requires a separate URI; the default value for `default-data-source-name` is `default`, do not reuse this name in a named data source map.

```yaml
spring:
  mongodb:
    # Default data source; for production environments, inject the full URI from an environment variable or key service.
    uri: ${MONGODB_URI:mongodb://localhost:27017/lodsve}
    # The default database name can be specified separately; when set, it takes precedence over the database name in the URI.
    # database: ${MONGODB_DATABASE:lodsve}
  data:
    mongodb:
      # Whether to automatically create entity indexes on startup; this belongs to Spring Data MongoDB.
      auto-index-creation: false

lodsve:
  mongo:
    # @SwitchMongoDataSource uses the default client when no other name is specified.
    default-data-source-name: default
    data-source:
      # Named data source names can be referenced in @SwitchMongoDataSource("archive").
      archive:
        uri: ${MONGODB_ARCHIVE_URI:mongodb://localhost:27017/lodsve_archive}
```

When using only one MongoDB, the entire `lodsve.mongo` configuration can be omitted. The default database name can be specified individually by `spring.mongodb.database`; the URI of each named data source must contain the database name. The URI can contain standard MongoDB URI options such as authentication information, Replica Set, TLS, and connection pooling; the URI syntax is parsed by the MongoDB Java Driver.

Add `@SwitchMongoDataSource("archive")` on the Service's Spring Bean method to switch to `archive`. This method needs to be called via the Spring proxy; the transaction or `ClientSession` should be done on the same data source. For complete component behavior see [MongoDB Component](/components/mongodb/) and [MongoDB Starter](/starters/mongodb/).
