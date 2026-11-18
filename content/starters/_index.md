---
title: Starter 能力地图
description: 按业务场景选择依赖入口，所有 Starter 都由 Maven BOM 统一管理版本。
weight: 20
---

Starter 是应用集成 Lodsve Boot 的推荐入口。选择一个 Starter 后，Spring Boot 会根据条件自动配置相关 Bean；详细实现可以继续阅读对应 Component 文档。

| Starter | 适用场景 |
| --- | --- |
| [filesystem](/starters/filesystem/) | OSS、S3、Minio 等文件上传下载 |
| [mongodb](/starters/mongodb/) | Spring Data MongoDB 和具名多数据源切换 |
| [mybatis](/starters/mybatis/) | 通用 CRUD、分页、逻辑删除和乐观锁 |
| [redis](/starters/redis/) | Redis 连接、序列化和动态数据源 |
| [rdbms](/starters/rdbms/) | 动态数据源和 Druid 整合 |
| [rabbitmq](/starters/rabbitmq/) / [rocketmq](/starters/rocketmq/) | 消息生产、消费和序列化增强 |
| [nacos](/starters/nacos/) / [openfeign](/starters/openfeign/) | 服务配置、注册发现和远程调用 |
| [webmvc](/starters/webmvc/) / [swagger](/starters/swagger/) | Web 接口和 API 文档增强 |
| [validator](/starters/validator/) / [security](/starters/security/) | 参数校验和基础安全能力 |
| [encryption](/starters/encryption/) / [script](/starters/script/) | 配置加密和 JVM 脚本执行 |

各 Starter 页面提供依赖入口、适用场景和组件特定配置链接。Lodsve 自定义属性的完整中文注释示例集中在[组件配置示例](/examples/configuration/)，底层框架配置请按相应 Spring Boot/Spring Cloud 版本参考。
