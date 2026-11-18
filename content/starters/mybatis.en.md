---
title: "MyBatis data access"
kicker: Starter
icon: ▦
description: "Provides common repository, paging, soft deletes, versioning, and SQL tools."
weight: 20
---

## Introduce dependencies

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-mybatis</artifactId>
</dependency>
```

## Basic Repository

```java
public interface UserRepository extends BaseRepository<UserPO> {
}
```

`BaseRepository` aggregates query, save, update and delete capabilities. Entities usually inherit `BasePO` or `BasePropertyPO`, and the table structure is derived from annotations and field conventions.

## Ability description

- `PaginationInterceptor`: Process paging SQL;
- `LogicDelete`: Logical deletion by field;
- `OptimisticLockInterceptor`: Control concurrent updates based on the version field;
- `MapperProvider`: Generate SQL based on Repository methods.

When troubleshooting, first confirm the entity primary key, table name, field mapping and data source configuration, and then check the generated SQL.
