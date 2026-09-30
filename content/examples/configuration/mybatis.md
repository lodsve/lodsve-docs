---
title: MyBatis 示例
description: MyBatis YAML 配置示例。
---

```yaml
lodsve:
  mybatis:
    # 枚举 Code 类型所在包，可配置多个。
    enums-locations:
      - com.example.domain.enums
    # 是否将数据库下划线字段映射为 Java 驼峰属性。
    map-underscore-to-camel-case: true
```
