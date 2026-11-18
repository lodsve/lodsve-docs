---
title: "MyBatis data access"
kicker: Component
description: "Universal Repository, dynamic SQL Provider, paging, soft delete and optimistic locking implementation."
---

## Component structure

The code is located at `com.lodsve.boot.component.mybatis`. `BaseRepository<T>` aggregates query, insert, update and delete interfaces; Provider generates general SQL based on entity metadata; `EntityHelper`/`EntityTable` caches table, primary key and special field information. The plugin provides paging, Repository routing, SQL monitoring and optimistic locking capabilities in the MyBatis execution chain.

## Entities and Repositories

Entities usually inherit `BasePO` or `BasePropertyPO`, and the Repository interface inherits `BaseRepository<UserPO>` and is scanned and registered by Mapper. Entity table names, primary keys, column mappings, and soft delete/version fields must match the database structure. Before updating, confirm which fields in the entity participate in dynamic SQL to avoid accidentally updating unassigned fields to `NULL`.

The paging interface shares the Mapper execution process with regular queries; the sorting field should come from a controlled whitelist and do not directly splice user input. Optimistic locking relies on the entity version field. When there is a conflict, the business layer needs to handle the number of updates or component exceptions.

## Configuration and troubleshooting

`lodsve.mybatis.enums-locations` specifies the enumeration package, and `map-underscore-to-camel-case` is enabled by default. See the database and sample code [MyBatis Starter](/starters/mybatis/) with [MyBatis example](/examples/mybatis/);For full configuration, see [Configuration example](/examples/configuration/mybatis/). When troubleshooting SQL, check Mapper scans, entity metadata, primary keys, dialects, and data sources, and then check interceptor order.

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/mybatis/), see annotated examples [Configuration example of this module](/examples/configuration/mybatis/).
