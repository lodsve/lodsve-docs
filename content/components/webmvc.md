---
title: WebMVC Web 层
kicker: Component
description: Spring MVC 参数解析、类型转换、请求上下文、响应包装和请求调试增强。
---

## 主要扩展点

WebMVC Component 包含自定义参数解析器、日期与枚举转换、请求上下文辅助、响应包装处理器、统一异常转换及可选请求调试日志。`@Bind`、`WebInput`、`WebOutput` 等扩展点用于承载项目约定的请求/响应映射；启用后要确认控制器签名与绑定规则匹配。

## 请求与响应

将 HTTP DTO 与领域对象分开，明确 JSON、表单和文件输入类型。响应包装不是所有返回值都应强制应用：可按组件提供的跳过/标记方式处理文件下载、流式响应等特殊返回。日期和枚举转换依赖统一格式/编码约定，应在客户端和服务端保持一致。

## 配置与排查

`lodsve.web-mvc.is-debug` 控制调试日志，`debug.exclude-url` 和 `exclude-address` 用于排除路径与来源地址；REST 客户端超时配置单位为毫秒。完整注释示例见[WebMVC 配置](/examples/configuration/webmvc/)，接入见[WebMVC Starter](/starters/webmvc/)。参数解析失败时先核对内容类型、参数注解及转换器注册。

完整配置项请查看[该模块配置参考](/reference/configuration/webmvc/)，带注释示例见[该模块配置示例](/examples/configuration/webmvc/)。
