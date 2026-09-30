---
title: Event 示例
description: Event 示例 YAML 配置示例。
---

## Event

```yaml
lodsve:
  event:
    # 应用事件执行器线程池核心线程数。
    core-pool-size: 1
    # 最大线程数；默认 Integer.MAX_VALUE，生产环境建议按任务负载设置。
    max-pool-size: 32
    # 非核心线程空闲存活时间，单位秒。
    keep-alive-seconds: 60
    # 是否允许核心线程超时退出。
    allow-core-thread-time-out: false
    # 等待队列容量；默认 Integer.MAX_VALUE，按系统容量评估后设置。
    queue-capacity: 500
    # 是否暴露不可配置的 Executor 包装。
    expose-unconfigurable-executor: false
```
