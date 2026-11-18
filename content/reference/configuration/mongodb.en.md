---
title: "MongoDB configuration"
description: "Spring Boot default MongoClient and Lodsve MongoDB named data source configuration items."
---

Spring Boot's default MongoDB URI uses `spring.mongodb.uri`. Lodsve's named data source uses `lodsve.mongo.data-source.<name>.uri`; the Starter will not enable the routing client until at least one named data source is configured.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `spring.mongodb.uri` | `String` | Determined by Spring Boot version when not explicitly set | `mongodb://localhost:27017/lodsve` | The default MongoDB client connection URI managed by Spring Boot. |
| `spring.mongodb.database` | `String` | `null`, fallback to database name in URI | `lodsve` | The database name of the default data source; when set, takes precedence over the database name in the URI. |
| `spring.data.mongodb.auto-index-creation` | `boolean` | `false` | `true` | Index auto-creation options for Spring Data MongoDB. |
| `lodsve.mongo.default-data-source-name` | `String` | `default` | `default` | The default connection name used when a named data source is not selected by the routing client. |
| `lodsve.mongo.data-source.<name>.uri` | `String` | None | `mongodb://localhost:27017/lodsve_archive` | MongoDB connection URI for additional data sources; each name corresponds to a separate client. The name cannot be the same as the default data source name. |

The URI of a named data source must contain the database name. For URI support items, authentication methods and connection parameters, please refer to the current MongoDB Java Driver documentation. For an example of a named connection, see [MongoDB configuration example](/examples/configuration/mongodb/).
