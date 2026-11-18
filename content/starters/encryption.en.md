---
title: Encryption
kicker: Starter
icon: ⌁
description: "Decrypt sensitive values in Spring Boot configuration using Base64 or Jasypt."
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

Passwords should be injected through environment variables or key management systems. Do not write passwords into configuration files.

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/encryption/), see annotated examples [Configuration example of this module](/examples/configuration/encryption/).
