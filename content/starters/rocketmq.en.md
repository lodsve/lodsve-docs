---
title: RocketMQ
kicker: Starter
icon: ◈
description: "Enhanced RocketMQ consumer registration and Spring Boot application integration."
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
        // Returning true indicates successful processing; returning false triggers redelivery.
        return true;
    }
}
```

The consumer class uses Lodsve's `@MessageHandler` to mark the topic, and uses `@MessageListener` to match the tag on the method; the method parameters are deserialized according to the message body type, and `boolean` is returned to represent the processing result. A Handler subscribes to a Topic and can contain multiple Tag processing methods. NameServer, Topic and Consumer Group need to be prepared before sending and consuming. See the consumer default group and number of threads [RocketMQ configuration example](/examples/configuration/rocketmq/), see `lodsve-boot-example-rocketmq` for the complete code.

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/rocketmq/), see annotated examples [Configuration example of this module](/examples/configuration/rocketmq/).
