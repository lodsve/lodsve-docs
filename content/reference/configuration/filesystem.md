---
title: File System 配置
description: Lodsve Boot File System 配置的完整配置项、默认值、示例值和枚举说明。
---

`type` 决定实际创建的 Handler；访问密钥不要硬编码。

| 配置项 | 类型 | 默认值 | 示例值 | 说明 |
|---|---|---|---|---|
| `lodsve.file-system.type` | `FileSystemTypeEnum` | `ALIYUN_OSS` | `MINIO` | 存储后端，见枚举表。 |
| `lodsve.file-system.access-key-id` | `String` | 无 | `${OBJECT_STORAGE_ACCESS_KEY}` | Access Key ID。 |
| `lodsve.file-system.access-key-secret` | `String` | 无 | `${OBJECT_STORAGE_SECRET_KEY}` | Access Key Secret。 |
| `lodsve.file-system.default-expire` | `Long` | `600000` | `600000` | 预签名 URL 有效期，单位毫秒。 |
| `lodsve.file-system.bucket-acl` | `Map<String,Boolean>` | 无 | `{demo-public: true}` | Bucket 名称到公开访问标志的映射。 |
| `lodsve.file-system.aliyun-oss.endpoint` | `String` | 无 | `https://oss-cn-hangzhou.aliyuncs.com` | 阿里云 OSS Endpoint。 |
| `lodsve.file-system.aws-s3.region` | `Regions` | `DEFAULT_REGION` | `US_EAST_1` | AWS SDK 区域枚举。 |
| `lodsve.file-system.tencent-cos.region` | `String` | 无 | `ap-nanjing` | 腾讯 COS 区域。 |
| `lodsve.file-system.tencent-cos.endpoint` | `String` | 无 | `https://cos.ap-nanjing.myqcloud.com` | 腾讯 COS Endpoint。 |
| `lodsve.file-system.minio.endpoint` | `String` | 无 | `http://localhost:9000` | MinIO Endpoint。 |
| `lodsve.file-system.client.max-connections` | `int` | `1024` | `1024` | 最大 HTTP 连接数。 |
| `lodsve.file-system.client.socket-timeout` | `int` | `50000` | `50000` | Socket 超时，单位毫秒。 |
| `lodsve.file-system.client.connection-timeout` | `int` | `50000` | `50000` | 建连超时，单位毫秒。 |
| `lodsve.file-system.client.connection-request-timeout` | `int` | `0` | `5000` | 从连接池获取连接超时，单位毫秒。 |
| `lodsve.file-system.client.idle-connection-time` | `long` | `60000` | `60000` | 空闲连接关闭阈值，单位毫秒。 |
| `lodsve.file-system.client.max-error-retry` | `int` | `3` | `3` | 请求失败后的最大重试次数。 |
| `lodsve.file-system.client.support-cname` | `boolean` | `true` | `true` | 是否支持 CNAME Endpoint。 |
| `lodsve.file-system.client.sld-enabled` | `boolean` | `false` | `false` | 是否开启二级域名访问。 |
| `lodsve.file-system.client.protocol` | `String` | `HTTP` | `HTTPS` | 协议枚举：`HTTP`（明文）或 `HTTPS`（加密）。 |
| `lodsve.file-system.client.user-agent` | `String` | `aliyun-sdk-java` | `my-service/1.0` | HTTP User-Agent。 |

### `FileSystemTypeEnum`

| 值 | 含义 |
|---|---|
| `AMAZON_S3` | Amazon S3。 |
| `ALIYUN_OSS` | 阿里云 OSS。 |
| `TENCENT_COS` | 腾讯云 COS。 |
| `MINIO` | MinIO。 |

### AWS SDK `Regions`

项目当前依赖 AWS SDK `1.11.868`，`aws-s3.region` 可使用以下全部枚举值。`DEFAULT_REGION` 表示由 SDK 根据运行环境选择默认区域；其他值括号内为 AWS 区域名称。升级 AWS SDK 后请重新核对列表。

| 值 | 含义 |
|---|---|
| `DEFAULT_REGION` | SDK 默认区域。 |
| `US_GOV_EAST_1` | AWS GovCloud（美国东部）。 |
| `US_EAST_1` | 美国东部（弗吉尼亚北部）。 |
| `US_EAST_2` | 美国东部（俄亥俄）。 |
| `US_WEST_1` | 美国西部（加利福尼亚北部）。 |
| `US_WEST_2` | 美国西部（俄勒冈）。 |
| `EU_WEST_1` | 欧洲（爱尔兰）。 |
| `EU_WEST_2` | 欧洲（伦敦）。 |
| `EU_WEST_3` | 欧洲（巴黎）。 |
| `EU_CENTRAL_1` | 欧洲（法兰克福）。 |
| `EU_NORTH_1` | 欧洲（斯德哥尔摩）。 |
| `EU_SOUTH_1` | 欧洲（米兰）。 |
| `AP_EAST_1` | 亚太地区（香港）。 |
| `AP_SOUTH_1` | 亚太地区（孟买）。 |
| `AP_SOUTHEAST_1` | 亚太地区（新加坡）。 |
| `AP_SOUTHEAST_2` | 亚太地区（悉尼）。 |
| `AP_NORTHEAST_1` | 亚太地区（东京）。 |
| `AP_NORTHEAST_2` | 亚太地区（首尔）。 |
| `SA_EAST_1` | 南美洲（圣保罗）。 |
| `CN_NORTH_1` | 中国（北京）。 |
| `CN_NORTHWEST_1` | 中国（宁夏）。 |
| `CA_CENTRAL_1` | 加拿大（中部）。 |
| `ME_SOUTH_1` | 中东（巴林）。 |
| `AF_SOUTH_1` | 非洲（开普敦）。 |
