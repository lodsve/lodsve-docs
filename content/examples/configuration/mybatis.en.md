---
title: "MyBatis example"
description: "MyBatis YAML configuration example."
---

```yaml
lodsve:
  mybatis:
    # Enumerate the package where the Code type is located. Multiple packages can be configured.
    enums-locations:
      - com.example.domain.enums
    # Whether to map database underscore fields to Java camelCase properties.
    map-underscore-to-camel-case: true
```
