---
title: "Encryption configuration example"
description: "Encryption configuration example YAML configuration example."
---

## Encryption configuration

```yaml
lodsve:
  encryption:
    # Master switch; when closed, BASE64(...) and ENC(...) placeholder values are not processed.
    enabled: true
    base64:
      # Use BASE64 (text) to wrap the value to be decoded.
      prefix: 'BASE64('
      suffix: ')'
    jasypt:
      prefix: 'ENC('
      suffix: ')'
      # Passwords are only injected from environment variables or key services.
      password: ${LODSVE_ENCRYPTION_PASSWORD:}
      algorithm: PBEWithMD5AndDES
      key-obtention-iterations: '1000'
      pool-size: '1'
      provider-name: ''
      provider-class-name: ''
      salt-generator-classname: org.jasypt.salt.RandomSaltGenerator
      iv-generator-classname: org.jasypt.iv.NoIvGenerator
      # Supports base64 or hexadecimal.
      string-output-type: base64
```
