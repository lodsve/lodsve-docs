---
title: "File System Example"
description: "File System sample YAML configuration example."
---

## file system

`type` uses enumeration value `AMAZON_S3`, `ALIYUN_OSS`, `TENCENT_COS`, or `MINIO`. Just keep the configuration corresponding to the selected backend.

```yaml
lodsve:
  file-system:
    # The example selects MinIO; optional `AMAZON_S3`, `ALIYUN_OSS`, `TENCENT_COS` or `MINIO`, and configure the corresponding backend information.
    type: MINIO
    access-key-id: ${OBJECT_STORAGE_ACCESS_KEY:}
    access-key-secret: ${OBJECT_STORAGE_SECRET_KEY:}
    # The default validity time of the pre-signed URL, in milliseconds.
    default-expire: 600000
    # Mapping of bucket names to public access flags.
    bucket-acl:
      demo-public: true
      demo-private: false
    aliyun-oss:
      endpoint: ${ALIYUN_OSS_ENDPOINT:}
    aws-s3:
      # AWS SDK Regions enumeration value.
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
      # Timeout in milliseconds for retrieving connections from the connection pool; 0 is the client's default behavior.
      connection-request-timeout: 0
      idle-connection-time: 60000
      max-error-retry: 3
      support-cname: true
      sld-enabled: false
      # Alibaba Cloud OSS protocol configuration, HTTP or HTTPS.
      protocol: HTTP
      user-agent: aliyun-sdk-java
```
