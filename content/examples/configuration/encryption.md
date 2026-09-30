---
title: 加密配置示例
description: 加密配置示例 YAML 配置示例。
---

## 加密配置

```yaml
lodsve:
  encryption:
    # 总开关；关闭时不处理 BASE64(...) 与 ENC(...) 占位值。
    enabled: true
    base64:
      # 使用 BASE64(文本) 包裹待解码值。
      prefix: 'BASE64('
      suffix: ')'
    jasypt:
      prefix: 'ENC('
      suffix: ')'
      # 密码只从环境变量或密钥服务注入。
      password: ${LODSVE_ENCRYPTION_PASSWORD:}
      algorithm: PBEWithMD5AndDES
      key-obtention-iterations: '1000'
      pool-size: '1'
      provider-name: ''
      provider-class-name: ''
      salt-generator-classname: org.jasypt.salt.RandomSaltGenerator
      iv-generator-classname: org.jasypt.iv.NoIvGenerator
      # 支持 base64 或 hexadecimal。
      string-output-type: base64
```
