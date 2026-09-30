---
title: Filesystem 文件系统
kicker: Starter
icon: ◫
description: 统一封装 OSS、S3、MinIO 等对象存储的上传、下载和 URL 能力。
weight: 10
---

## 引入依赖

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-filesystem</artifactId>
</dependency>
```

## 能力与使用

应用通过 `FileSystemServer` 执行上传、下载、删除、存在检查和 URL 生成，不必直接依赖云厂商 SDK。选择后端时使用源码枚举值：`ALIYUN_OSS`、`AMAZON_S3`、`TENCENT_COS` 或 `MINIO`。典型示例见 `lodsve-boot-examples/lodsve-boot-example-filesystem`，包含 `FileSystemServer` 调用流程。

## 配置

自定义前缀是 `lodsve.file-system`（带连字符），不是 `lodsve.filesystem`。包含访问密钥、后端 Endpoint/Region、Bucket ACL、URL 默认有效时间及 HTTP 客户端参数。完整带注释配置见[文件系统配置示例](/examples/configuration/filesystem/)。密钥应由环境变量或密钥系统提供，私有对象不要配置为公开访问。
