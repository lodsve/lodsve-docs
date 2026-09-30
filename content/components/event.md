---
title: Event 应用事件
kicker: Component
description: Spring 应用内事件执行器配置和事件监听整合。
---

## 能力边界

Event Starter 提供应用内事件相关 Bean 和异步执行器配置，适用于同一进程内的通知和解耦。它不负责跨进程投递、持久化、重试或消息顺序；需要可靠跨服务通信时，使用 RabbitMQ 或 RocketMQ。

监听器应尽量短小。异步执行会改变事务时序：若事件必须在数据库提交后处理，应显式安排事务提交后的发布；异步任务也不会自动继承事务上下文。

## 线程池调整

通过 `lodsve.event` 配置核心/最大线程数、队列容量和存活时间。默认最大线程及队列容量都很大，生产部署应结合峰值和下游容量设置，避免无界创建线程或无界堆积。字段和注释示例见[组件配置示例](/examples/configuration/event/)。

## 使用与排查

使用 Spring 的事件发布和监听机制注册业务事件；确认监听器 Bean 已进入组件扫描范围。异步监听未运行时检查依赖、线程池是否耗尽以及事件是否由正确的 ApplicationContext 发布。更多接入见[Event Starter](/starters/event/)。

完整配置项请查看[该模块配置参考](/reference/configuration/event/)，带注释示例见[该模块配置示例](/examples/configuration/event/)。
