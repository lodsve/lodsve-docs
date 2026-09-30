---
title: MyBatis 数据访问
kicker: Component
description: 通用 Repository、动态 SQL Provider、分页、逻辑删除与乐观锁实现。
---

## 组件结构

代码位于 `com.lodsve.boot.component.mybatis`。`BaseRepository<T>` 汇总查询、插入、更新和删除接口；Provider 根据实体元数据生成通用 SQL；`EntityHelper`/`EntityTable` 缓存表、主键和特殊字段信息。插件在 MyBatis 执行链中提供分页、Repository 路由、SQL 监控及乐观锁能力。

## 实体和 Repository

实体通常继承 `BasePO` 或 `BasePropertyPO`，Repository 接口继承 `BaseRepository<UserPO>`，并由 Mapper 扫描注册。实体表名、主键、列映射和逻辑删除/版本字段必须与数据库结构匹配。更新前确认实体中哪些字段参与动态 SQL，避免把未赋值字段误更新为 `NULL`。

分页接口与常规查询共享 Mapper 执行流程；排序字段应来自受控白名单，不要直接拼接用户输入。乐观锁依赖实体版本字段，冲突时业务层需要处理更新条数或组件异常。

## 配置与排错

`lodsve.mybatis.enums-locations` 指定枚举包，`map-underscore-to-camel-case` 默认开启。数据库和示例代码见[MyBatis Starter](/starters/mybatis/)与[MyBatis 示例](/examples/mybatis/)；全量配置见[配置示例](/examples/configuration/mybatis/)。排查 SQL 时检查 Mapper 扫描、实体元数据、主键、方言和数据源，再检查拦截器顺序。

完整配置项请查看[该模块配置参考](/reference/configuration/mybatis/)，带注释示例见[该模块配置示例](/examples/configuration/mybatis/)。
