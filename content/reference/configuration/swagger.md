---
title: Swagger 配置
description: Lodsve Boot Swagger 配置的完整配置项、默认值、示例值和枚举说明。
---

自动配置要求 `lodsve.swagger.enabled: true`。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.swagger.enabled` | `boolean` | `false` | `true` | Swagger 自动配置开关。 |
| `lodsve.swagger.version` | `String` | 无 | `1.0.0` | 接口版本。 |
| `lodsve.swagger.title` | `String` | `Swagger的Rest接口文档` | `示例服务 API` | 文档标题。 |
| `lodsve.swagger.description` | `String` | 无 | `示例服务接口文档` | 文档描述。 |
| `lodsve.swagger.terms-of-service-url` | `String` | 无 | `https://example.com/terms` | 服务条款地址。 |
| `lodsve.swagger.license` | `String` | 无 | `Apache-2.0` | 许可证名称。 |
| `lodsve.swagger.license-url` | `String` | 无 | `https://www.apache.org/licenses/LICENSE-2.0` | 许可证地址。 |
| `lodsve.swagger.contact.name` | `String` | 无 | `API 支持` | 联系人名称。 |
| `lodsve.swagger.contact.url` | `String` | 无 | `https://example.com` | 联系人主页。 |
| `lodsve.swagger.contact.email` | `String` | 无 | `api@example.com` | 联系人邮箱。 |
| `lodsve.swagger.global-parameters[].name` | `String` | 无 | `X-Request-Id` | 全局参数名称。 |
| `lodsve.swagger.global-parameters[].description` | `String` | 无 | `请求追踪 ID` | 全局参数描述。 |
| `lodsve.swagger.global-parameters[].type` | `String` | 无 | `string` | 类型取值：`integer`、`string`、`boolean`、`number`、`object`。 |
| `lodsve.swagger.global-parameters[].scope` | `String` | 无 | `header` | 位置取值：`query`、`header`、`path`、`cookie`、`form`、`formData`、`body`。 |
| `lodsve.swagger.global-parameters[].required` | `boolean` | `false` | `false` | 是否必填。 |
| `lodsve.swagger.auth.enabled` | `boolean` | `false` | `false` | 是否启用 Header 认证参数。 |
| `lodsve.swagger.auth.key` | `String` | 无 | `Authorization` | 认证 Header 名称。 |
