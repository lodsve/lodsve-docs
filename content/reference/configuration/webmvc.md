---
title: WebMVC 配置
description: Lodsve Boot WebMVC 配置的完整配置项、默认值、示例值和枚举说明。
---

`is-debug` 是自动配置条件属性，位于 `WebMvcProperties` 之外。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.web-mvc.is-debug` | `boolean` | `false` | `true` | 是否启用 Web 请求调试日志。 |
| `lodsve.web-mvc.debug.exclude-url` | `List<String>` | `[]` | `[/actuator/health]` | 调试日志排除 URL。 |
| `lodsve.web-mvc.debug.exclude-address` | `List<String>` | `[]` | `[127.0.0.1]` | 调试日志排除客户端地址。 |
| `lodsve.web-mvc.rest.connect-timeout` | `int` | `15000` | `5000` | REST 连接超时，单位毫秒。 |
| `lodsve.web-mvc.rest.read-timeout` | `int` | `15000` | `10000` | REST 读取超时，单位毫秒。 |
