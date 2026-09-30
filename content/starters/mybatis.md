---
title: MyBatis 数据访问
kicker: Starter
icon: ▦
description: 提供通用 Repository、分页、逻辑删除、版本控制和 SQL 工具。
weight: 20
---

## 引入依赖

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-mybatis</artifactId>
</dependency>
```

## 基础 Repository

```java
public interface UserRepository extends BaseRepository<UserPO> {
}
```

`BaseRepository` 聚合查询、保存、更新和删除能力。实体通常继承 `BasePO` 或 `BasePropertyPO`，由注解和字段约定推导表结构。

## 能力说明

- `PaginationInterceptor`：处理分页 SQL；
- `LogicDelete`：按字段实现逻辑删除；
- `OptimisticLockInterceptor`：根据版本字段控制并发更新；
- `MapperProvider`：根据 Repository 方法生成 SQL。

错误排查时，先确认实体主键、表名、字段映射和数据源配置，再查看生成 SQL。
