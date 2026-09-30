---
title: Swagger 示例
description: Swagger YAML 配置示例。
---

```yaml
lodsve:
  swagger:
    # Swagger 自动配置默认关闭。
    enabled: true
    version: 1.0.0
    title: 示例服务 API
    description: 示例服务接口文档
    terms-of-service-url: https://example.com/terms
    license: Apache-2.0
    license-url: https://www.apache.org/licenses/LICENSE-2.0
    contact:
      name: API 支持
      url: https://example.com
      email: api@example.com
    global-parameters:
      - name: X-Request-Id
        description: 请求追踪 ID
        type: string
        scope: header
        required: false
    auth:
      # 仅支持 Header 认证参数。
      enabled: false
      key: Authorization
```
