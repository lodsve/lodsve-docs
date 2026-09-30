---
title: OpenFeign Client
kicker: Component
description: Spring Cloud OpenFeign 的自动配置接入及 Lodsve 客户端扩展。
---

## 能力与集成

该模块通过自动配置接入 Spring Cloud OpenFeign，应用仍使用 `@FeignClient` 声明客户端和 Spring MVC 注解描述 HTTP 请求。客户端接口应按远端服务契约定义，DTO 保持稳定，并通过服务名或配置的 URL 定位下游。

## 调用治理

为每个远程调用配置合理连接/读取超时，结合调用链路、错误映射与业务幂等设计重试策略。重试非幂等写请求可能重复产生副作用；网络超时也不代表服务端一定没有处理请求。Feign、负载均衡和服务发现属性沿用所选 Spring Cloud 版本的配置，本组件没有专属 `lodsve.*` 配置类。

## 接入与排查

启用 Feign Client 扫描，检查客户端所在包及服务发现配置。客户端未创建、服务无法解析或响应反序列化失败时，分别检查依赖兼容性、扫描范围、注册中心、HTTP 状态码和 DTO 字段。依赖示例见[OpenFeign Starter](/starters/openfeign/)。
