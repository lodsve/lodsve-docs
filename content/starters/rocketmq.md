---
title: RocketMQ
kicker: Starter
icon: ◈
description: 增强 RocketMQ 消费者注册和 Spring Boot 应用集成。
weight: 60
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-rocketmq</artifactId>
</dependency>
```

```java
@Component
@MessageHandler(topic = "demo-topic", group = "${lodsve.rocketmq.consumer.group}")
public class DemoListener {
    @MessageListener(tag = "created")
    public boolean onMessage(DemoMessage message) {
        // 返回 true 表示处理成功；返回 false 会触发重新投递。
        return true;
    }
}
```

消费类使用 Lodsve 的 `@MessageHandler` 标记 Topic，并在方法上通过 `@MessageListener` 匹配 Tag；方法参数按消息体类型反序列化，返回 `boolean` 表示处理结果。一个 Handler 订阅一个 Topic，可包含多个 Tag 处理方法。发送和消费前需要准备 NameServer、Topic 与 Consumer Group。消费者默认组和线程数见[RocketMQ 配置示例](/examples/configuration/rocketmq/)，完整代码见 `lodsve-boot-example-rocketmq`。

完整配置项请查看[该模块配置参考](/reference/configuration/rocketmq/)，带注释示例见[该模块配置示例](/examples/configuration/rocketmq/)。
