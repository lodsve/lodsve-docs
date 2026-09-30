---
title: Core 与 Snowflake 示例
description: Core 与 Snowflake 示例 YAML 配置示例。
---

## Snowflake ID 与 Core

Snowflake ID 的两个属性位于 `lodsve.*` 之外。多实例部署时，请为每个实例分配不重复的工作机器 ID 与数据中心 ID；两者都只能填写 `0` 到 `31`。

```yaml
snowflake:
  # 工作机器 ID，取值范围 0-31。
  worker-id: 3
  # 数据中心 ID，取值范围 0-31。
  data-center-id: 2
```

```yaml
lodsve:
  core:
    # 国际化资源目录集合；不使用组件 i18n 时可省略。
    i18n-folders: []
```
