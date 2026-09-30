---
title: Security 安全基础
kicker: Component
description: 为应用接入认证授权基础扩展点和统一安全异常处理。
---

## 组件职责

Security Component 提供基础认证/授权扩展入口，自动配置依赖应用提供的安全相关 Bean。它不预设完整的用户目录、角色权限数据库、OAuth2 流程或多租户策略；这些部分由业务系统定义。集成时应明确身份来源、凭证生命周期、接口访问规则和未认证/无权限响应。

## 应用扩展

通过 Bean 接入项目自己的身份校验和授权判断，按最小权限原则配置公开路径，并记录关键认证失败和权限拒绝事件。安全过滤器顺序会影响请求行为，新增规则后需覆盖匿名、合法身份、过期凭证和越权访问等路径。

该组件没有独立的 `@ConfigurationProperties` 配置类。依赖入口和说明见[Security Starter](/starters/security/)；生产配置按使用的 Spring Security 版本和应用安全模型管理。
