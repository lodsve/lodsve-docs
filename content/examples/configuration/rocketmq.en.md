---
title: "RocketMQ example"
description: "RocketMQ sample YAML configuration example."
---

## RocketMQ

```yaml
lodsve:
  rocketmq:
    # Message character set.
    charset: UTF-8
    consumer:
      # The default group used when no consumer group is specified on the listener.
      group: DefaultConsumer
      consume-thread-min: 20
      consume-thread-max: 64
```

NameServer address, producer group, topic, etc. use the configuration properties supported by the current RocketMQ Spring client; the specific prefix depends on the client version introduced by the project.
