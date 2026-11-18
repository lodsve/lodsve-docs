---
title: "Swagger configuration"
description: "Complete configuration items, default values, example values, and enumeration descriptions for Lodsve Boot Swagger configuration."
---

Autoconfiguration requires `lodsve.swagger.enabled: true`.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.swagger.enabled` | `boolean` | `false` | `true` | Swagger automatically configures the switch. |
| `lodsve.swagger.version` | `String` | None | `1.0.0` | Interface version. |
| `lodsve.swagger.title` | `String` | `Swagger的Rest接口文档` (Swagger REST API documentation) | `Sample Service API` | Document title. |
| `lodsve.swagger.description` | `String` | None | `Sample service API documentation` | Document description. |
| `lodsve.swagger.terms-of-service-url` | `String` | None | `https://example.com/terms` | Terms of Service Address. |
| `lodsve.swagger.license` | `String` | None | `Apache-2.0` | License name. |
| `lodsve.swagger.license-url` | `String` | None | `https://www.apache.org/licenses/LICENSE-2.0` | License address. |
| `lodsve.swagger.contact.name` | `String` | None | `API Support` | Contact name. |
| `lodsve.swagger.contact.url` | `String` | None | `https://example.com` | Contact homepage. |
| `lodsve.swagger.contact.email` | `String` | None | `api@example.com` | Contact email. |
| `lodsve.swagger.global-parameters[].name` | `String` | None | `X-Request-Id` | Global parameter name. |
| `lodsve.swagger.global-parameters[].description` | `String` | None | `Request trace ID` | Global parameter description. |
| `lodsve.swagger.global-parameters[].type` | `String` | None | `string` | Type values: `integer`, `string`, `boolean`, `number`, `object`. |
| `lodsve.swagger.global-parameters[].scope` | `String` | None | `header` | Position values: `query`, `header`, `path`, `cookie`, `form`, `formData`, `body`. |
| `lodsve.swagger.global-parameters[].required` | `boolean` | `false` | `false` | Is it required? |
| `lodsve.swagger.auth.enabled` | `boolean` | `false` | `false` | Whether to enable Header authentication parameters. |
| `lodsve.swagger.auth.key` | `String` | None | `Authorization` | Authentication header name. |
