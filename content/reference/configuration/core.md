---
title: Core 与 Snowflake 配置
description: Lodsve Boot Core 与 Snowflake 配置的完整配置项、默认值、示例值和枚举说明。
---

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.core.i18n-folders` | `Set<String>` | 无 | `[classpath:/i18n]` | 国际化资源目录集合。 |

## Snowflake ID

Snowflake ID 生成器通过 Spring 属性注入配置，键名不在 `lodsve.*` 命名空间下。工作机器 ID 和数据中心 ID 的取值范围均为 `0` 到 `31`（包含边界）；分布式部署时，每个实例应使用唯一的组合。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---:|---:|---|
| `snowflake.worker-id` | `long` | `1` | `3` | 工作机器 ID，范围 `0`–`31`。 |
| `snowflake.data-center-id` | `long` | `1` | `2` | 数据中心 ID，范围 `0`–`31`。 |
