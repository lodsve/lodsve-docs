---
title: "Filesystem Storage"
kicker: Component
description: "Unifiedly encapsulates the object storage implementation of Alibaba Cloud OSS, Amazon S3, Tencent Cloud COS and MinIO."
---

## Layering and Responsibilities

`FileSystemServer` is the application-side entry, `FileSystemHandler` defines the back-end operation contract, and the specific Handler converts unified requests into cloud vendor SDK calls. `FileBean` describes the file input, and `FileSystemResult` carries the operation results. Business code can rely on a unified interface without directly coupling an SDK.

The typical process is to select the backend, configure credentials and Endpoint, call the service to upload the object, and then save the object identifier instead of the temporary signed URL. The access URL is generated when downloading is required; the default validity period is 10 minutes. Public/private access policies are controlled through bucket ACL configuration.

## Backend selection and expansion

Support `ALIYUN_OSS`, `AMAZON_S3`, `TENCENT_COS`, `MINIO`. The fields required for each backend are different, examples and complete properties are in [File system configuration example](/examples/configuration/filesystem/), application access see [Filesystem Starter](/starters/filesystem/). Credentials are injected from environment variables or key management systems. Implement `FileSystemHandler` and follow the initialization and error conversion patterns of existing Handlers when extending a new backend.

## Operation and maintenance attention

When the upload is successful but cannot be accessed, check the bucket, ACL, region, Endpoint and signature validity period; adjust the connection pool/timeout according to SDK and server restrictions for large files and high concurrency scenarios. Don't treat presigned URLs as permanent addresses, and don't make private objects public to bypass authorization.

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/filesystem/), see annotated examples [Configuration example of this module](/examples/configuration/filesystem/).
