---
title: "Swagger example"
description: "Swagger YAML configuration example."
---

```yaml
lodsve:
  swagger:
    # Swagger auto-configuration is turned off by default.
    enabled: true
    version: 1.0.0
    title: Sample Service API
    description: Sample service API documentation
    terms-of-service-url: https://example.com/terms
    license: Apache-2.0
    license-url: https://www.apache.org/licenses/LICENSE-2.0
    contact:
      name: API Support
      url: https://example.com
      email: api@example.com
    global-parameters:
      - name: X-Request-Id
        description: Request trace ID
        type: string
        scope: header
        required: false
    auth:
      # Only Header authentication parameters are supported.
      enabled: false
      key: Authorization
```
