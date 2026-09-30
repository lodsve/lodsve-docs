---
title: File System 示例
description: File System 示例 YAML 配置示例。
---

## 文件系统

`type` 使用枚举值 `AMAZON_S3`、`ALIYUN_OSS`、`TENCENT_COS` 或 `MINIO`。保留所选后端对应的配置即可。

```yaml
lodsve:
  file-system:
    # 示例选择 MinIO；可选 `AMAZON_S3`、`ALIYUN_OSS`、`TENCENT_COS` 或 `MINIO`，并配置对应后端信息。
    type: MINIO
    access-key-id: ${OBJECT_STORAGE_ACCESS_KEY:}
    access-key-secret: ${OBJECT_STORAGE_SECRET_KEY:}
    # 预签名 URL 默认有效时间，单位毫秒。
    default-expire: 600000
    # bucket 名称到公开访问标志的映射。
    bucket-acl:
      demo-public: true
      demo-private: false
    aliyun-oss:
      endpoint: ${ALIYUN_OSS_ENDPOINT:}
    aws-s3:
      # AWS SDK Regions 枚举值。
      region: DEFAULT_REGION
    tencent-cos:
      region: ${TENCENT_COS_REGION:}
      endpoint: ${TENCENT_COS_ENDPOINT:}
    minio:
      endpoint: ${MINIO_ENDPOINT:http://localhost:9000}
    client:
      max-connections: 1024
      socket-timeout: 50000
      connection-timeout: 50000
      # 从连接池取连接的超时毫秒数；0 为客户端默认行为。
      connection-request-timeout: 0
      idle-connection-time: 60000
      max-error-retry: 3
      support-cname: true
      sld-enabled: false
      # 阿里云 OSS 协议配置，HTTP 或 HTTPS。
      protocol: HTTP
      user-agent: aliyun-sdk-java
```
