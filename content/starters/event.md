---
title: Event
kicker: Starter
icon: ↗
description: 为应用内事件发布和监听提供统一的组件入口。
weight: 160
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-event</artifactId>
</dependency>
```

此 Starter 用于同一 Spring 应用内的事件解耦，不提供消息持久化和跨进程投递。耗时任务交给异步执行器，合理配置线程数与队列容量；事件如需在数据库提交后执行，应显式安排发布时机。完整线程池属性及中文注释见[Event 配置示例](/examples/configuration/event/)。
