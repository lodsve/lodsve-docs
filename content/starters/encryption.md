---
title: Encryption
kicker: Starter
icon: ⌁
description: 使用 Base64 或 Jasypt 解密 Spring Boot 配置中的敏感值。
weight: 120
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-encryption</artifactId>
</dependency>
```

```yaml
lodsve:
  encryption:
    enabled: true
    jasypt:
      prefix: ENC(
      suffix: )
      password: ${LODSVE_ENCRYPTION_PASSWORD}
```

密码应通过环境变量或密钥管理系统注入，不要把口令写进配置文件。

完整配置项请查看[该模块配置参考](/reference/configuration/encryption/)，带注释示例见[该模块配置示例](/examples/configuration/encryption/)。
