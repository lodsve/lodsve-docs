---
title: Countdown 示例
description: Countdown YAML 配置示例。
---

```yaml
lodsve:
  countdown:
    # 倒计时自动配置默认关闭；需要同时引入 Redis 并启用此项。
    enabled: true
    # 需要监听 Redis Key 过期通知的数据库编号列表。
    database: [0]
```
