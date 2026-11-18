---
title: "File System Configuration"
description: "Complete configuration items, default values, sample values, and enumeration descriptions for Lodsve Boot File System configuration."
---

`type` determines the actual Handler created; access keys should not be hardcoded.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.file-system.type` | `FileSystemTypeEnum` | `ALIYUN_OSS` | `MINIO` | Storage backend, see enumeration table. |
| `lodsve.file-system.access-key-id` | `String` | None | `${OBJECT_STORAGE_ACCESS_KEY}` | Access Key ID. |
| `lodsve.file-system.access-key-secret` | `String` | None | `${OBJECT_STORAGE_SECRET_KEY}` | Access Key Secret. |
| `lodsve.file-system.default-expire` | `Long` | `600000` | `600000` | Presigned URL validity period, in milliseconds. |
| `lodsve.file-system.bucket-acl` | `Map<String,Boolean>` | None | `{demo-public: true}` | Mapping of bucket names to public access flags. |
| `lodsve.file-system.aliyun-oss.endpoint` | `String` | None | `https://oss-cn-hangzhou.aliyuncs.com` | Alibaba Cloud OSS Endpoint. |
| `lodsve.file-system.aws-s3.region` | `Regions` | `DEFAULT_REGION` | `US_EAST_1` | AWS SDK region enumeration. |
| `lodsve.file-system.tencent-cos.region` | `String` | None | `ap-nanjing` | Tencent COS area. |
| `lodsve.file-system.tencent-cos.endpoint` | `String` | None | `https://cos.ap-nanjing.myqcloud.com` | Tencent COS Endpoint. |
| `lodsve.file-system.minio.endpoint` | `String` | None | `http://localhost:9000` | MinIO Endpoint. |
| `lodsve.file-system.client.max-connections` | `int` | `1024` | `1024` | Maximum number of HTTP connections. |
| `lodsve.file-system.client.socket-timeout` | `int` | `50000` | `50000` | Socket timeout in milliseconds. |
| `lodsve.file-system.client.connection-timeout` | `int` | `50000` | `50000` | Connection establishment timeout, in milliseconds. |
| `lodsve.file-system.client.connection-request-timeout` | `int` | `0` | `5000` | Get the connection timeout from the connection pool, in milliseconds. |
| `lodsve.file-system.client.idle-connection-time` | `long` | `60000` | `60000` | Idle connection closing threshold, in milliseconds. |
| `lodsve.file-system.client.max-error-retry` | `int` | `3` | `3` | The maximum number of retries after a failed request. |
| `lodsve.file-system.client.support-cname` | `boolean` | `true` | `true` | Whether CNAME Endpoint is supported. |
| `lodsve.file-system.client.sld-enabled` | `boolean` | `false` | `false` | Whether to enable second-level domain name access. |
| `lodsve.file-system.client.protocol` | `String` | `HTTP` | `HTTPS` | Protocol enumeration: `HTTP` (clear text) or `HTTPS` (encrypted). |
| `lodsve.file-system.client.user-agent` | `String` | `aliyun-sdk-java` | `my-service/1.0` | HTTP User-Agent. |

### `FileSystemTypeEnum`

| value | meaning |
|---|---|
| `AMAZON_S3` | Amazon S3. |
| `ALIYUN_OSS` | Alibaba Cloud OSS. |
| `TENCENT_COS` | Tencent Cloud COS. |
| `MINIO` | MinIO. |

### AWS SDK `Regions`

The project currently relies on AWS SDK `1.11.868`, `aws-s3.region` can use all of the following enumeration values. `DEFAULT_REGION` indicates that the default region is selected by the SDK based on the running environment; other values in parentheses are the AWS region names. Please recheck the list after upgrading the AWS SDK.

| value | meaning |
|---|---|
| `DEFAULT_REGION` | SDK default region. |
| `US_GOV_EAST_1` | AWS GovCloud (US-East). |
| `US_EAST_1` | Eastern United States (N. Virginia). |
| `US_EAST_2` | Eastern United States (Ohio). |
| `US_WEST_1` | Western United States (Northern California). |
| `US_WEST_2` | Western United States (Oregon). |
| `EU_WEST_1` | Europe (Ireland). |
| `EU_WEST_2` | Europe (London). |
| `EU_WEST_3` | Europe (Paris). |
| `EU_CENTRAL_1` | Europe (Frankfurt). |
| `EU_NORTH_1` | Europe (Stockholm). |
| `EU_SOUTH_1` | Europe (Milan). |
| `AP_EAST_1` | Asia Pacific (Hong Kong). |
| `AP_SOUTH_1` | Asia Pacific (Mumbai). |
| `AP_SOUTHEAST_1` | Asia Pacific (Singapore). |
| `AP_SOUTHEAST_2` | Asia Pacific (Sydney). |
| `AP_NORTHEAST_1` | Asia Pacific (Tokyo). |
| `AP_NORTHEAST_2` | Asia Pacific (Seoul). |
| `SA_EAST_1` | South America (São Paulo). |
| `CN_NORTH_1` | China (Beijing). |
| `CN_NORTHWEST_1` | China (Ningxia). |
| `CA_CENTRAL_1` | Canada (Central). |
| `ME_SOUTH_1` | Middle East (Bahrain). |
| `AF_SOUTH_1` | Africa (Cape Town). |
