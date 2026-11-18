---
title: "Filesystem"
kicker: Starter
icon: ◫
description: "Unifiedly encapsulates the upload, download and URL capabilities of object storage such as OSS, S3, and MinIO."
weight: 10
---

## Introduce dependencies

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-filesystem</artifactId>
</dependency>
```

## Ability and use

The application performs uploading, downloading, deletion, existence checking and URL generation through `FileSystemServer` without directly relying on the cloud vendor SDK. Use the source enumeration value when selecting a backend: `ALIYUN_OSS`, `AMAZON_S3`, `TENCENT_COS`, or `MINIO`. For a typical example, see `lodsve-boot-examples/lodsve-boot-example-filesystem`, including the `FileSystemServer` calling process.

## Configuration

The custom prefix is `lodsve.file-system` (with a hyphen), not `lodsve.filesystem`. Includes access key, backend Endpoint/Region, Bucket ACL, URL default validity time and HTTP client parameters. For the complete annotated configuration see [File system configuration example](/examples/configuration/filesystem/). Keys should be provided by environment variables or the key system, and private objects should not be configured for public access.
