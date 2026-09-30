---
title: RocketMQ 示例
description: RocketMQ 示例 YAML 配置示例。
---

## RocketMQ

```yaml
lodsve:
  rocketmq:
    # 消息字符集。
    charset: UTF-8
    consumer:
      # 未在监听器上指定消费组时使用的默认组。
      group: DefaultConsumer
      consume-thread-min: 20
      consume-thread-max: 64
```

NameServer 地址、生产者组和 Topic 等使用当前 RocketMQ Spring 客户端支持的配置属性；具体前缀取决于项目引入的客户端版本。
