---
title: Encryption 配置
description: Lodsve Boot Encryption 配置的完整配置项、默认值、示例值和枚举说明。
---

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.encryption.enabled` | `boolean` | `false` | `true` | 是否启用配置值解密。 |
| `lodsve.encryption.base64.prefix` | `String` | `BASE64(` | `BASE64(` | Base64 值前缀。 |
| `lodsve.encryption.base64.suffix` | `String` | `)` | `)` | Base64 值后缀。 |
| `lodsve.encryption.jasypt.prefix` | `String` | `ENC(` | `ENC(` | Jasypt 密文前缀。 |
| `lodsve.encryption.jasypt.suffix` | `String` | `)` | `)` | Jasypt 密文后缀。 |
| `lodsve.encryption.jasypt.password` | `String` | 无 | `${LODSVE_ENCRYPTION_PASSWORD}` | Jasypt 密码，建议使用密钥服务。 |
| `lodsve.encryption.jasypt.algorithm` | `String` | `PBEWithMD5AndDES` | `PBEWithMD5AndDES` | 加密算法名称。 |
| `lodsve.encryption.jasypt.key-obtention-iterations` | `String` | `1000` | `1000` | 获取密钥的哈希迭代次数。 |
| `lodsve.encryption.jasypt.pool-size` | `String` | `1` | `1` | 加密器池大小。 |
| `lodsve.encryption.jasypt.provider-name` | `String` | `null` | `null` | JCA Provider 名称。 |
| `lodsve.encryption.jasypt.provider-class-name` | `String` | `null` | `null` | JCA Provider 类名。 |
| `lodsve.encryption.jasypt.salt-generator-classname` | `String` | `org.jasypt.salt.RandomSaltGenerator` | 同左 | SaltGenerator 实现类。 |
| `lodsve.encryption.jasypt.iv-generator-classname` | `String` | `org.jasypt.iv.NoIvGenerator` | 同左 | IvGenerator 实现类。 |
| `lodsve.encryption.jasypt.string-output-type` | `String` | `base64` | `base64` | 输出编码：`base64`（Base64）或 `hexadecimal`（十六进制）。 |
