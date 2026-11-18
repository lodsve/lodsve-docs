---
title: "Encryption configuration"
description: "Complete configuration items, default values, example values, and enumeration descriptions for Lodsve Boot Encryption configuration."
---

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.encryption.enabled` | `boolean` | `false` | `true` | Whether to enable configuration value decryption. |
| `lodsve.encryption.base64.prefix` | `String` | `BASE64(` | `BASE64(` | Base64 value prefix. |
| `lodsve.encryption.base64.suffix` | `String` | `)` | `)` | Base64 value suffix. |
| `lodsve.encryption.jasypt.prefix` | `String` | `ENC(` | `ENC(` | Jasypt ciphertext prefix. |
| `lodsve.encryption.jasypt.suffix` | `String` | `)` | `)` | Jasypt ciphertext suffix. |
| `lodsve.encryption.jasypt.password` | `String` | None | `${LODSVE_ENCRYPTION_PASSWORD}` | Jasypt password, it is recommended to use key service. |
| `lodsve.encryption.jasypt.algorithm` | `String` | `PBEWithMD5AndDES` | `PBEWithMD5AndDES` | Encryption algorithm name. |
| `lodsve.encryption.jasypt.key-obtention-iterations` | `String` | `1000` | `1000` | Gets the number of hash iterations for a key. |
| `lodsve.encryption.jasypt.pool-size` | `String` | `1` | `1` | Encryptor pool size. |
| `lodsve.encryption.jasypt.provider-name` | `String` | `null` | `null` | JCA Provider name. |
| `lodsve.encryption.jasypt.provider-class-name` | `String` | `null` | `null` | JCA Provider class name. |
| `lodsve.encryption.jasypt.salt-generator-classname` | `String` | `org.jasypt.salt.RandomSaltGenerator` | Tongzuo | SaltGenerator implementation class. |
| `lodsve.encryption.jasypt.iv-generator-classname` | `String` | `org.jasypt.iv.NoIvGenerator` | Tongzuo | IvGenerator implementation class. |
| `lodsve.encryption.jasypt.string-output-type` | `String` | `base64` | `base64` | Output encoding: `base64` (Base64) or `hexadecimal` (hex). |
