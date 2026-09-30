---
title: Component 目录
description: Starter 下层的可复用实现，以及它们与自动配置的关系。
weight: 30
---

Component 页面面向需要深入定制、排查行为或开发扩展的用户。普通应用优先从 Starter 页面开始。

| Component | 主要职责 | 对应 Starter |
| --- | --- | --- |
| filesystem | 对象存储适配和文件生命周期 | filesystem |
| mybatis | Repository、分页、逻辑删除和 SQL | mybatis |
| redis | Redis 数据源和序列化增强 | redis |
| rdbms | 动态数据源、连接池和数据库整合 | rdbms |
| countdown | Redis 过期事件倒计时 | countdown |
| event | 应用事件能力 | event |
| openfeign-client | Feign 客户端增强 | openfeign |
| script | JVM 脚本执行 | script |
| security | 认证与授权基础能力 | security |
| validator | POJO 校验和异常处理 | validator |
| webmvc | Spring WebMVC 增强 | webmvc |
