---
title: Filesystem 文件存储
kicker: Component
description: 统一封装阿里云 OSS、Amazon S3、腾讯云 COS 和 MinIO 的对象存储实现。
---

## 分层与职责

`FileSystemServer` 是应用侧入口，`FileSystemHandler` 定义后端操作契约，具体 Handler 将统一请求转换为云厂商 SDK 调用。`FileBean` 描述文件输入，`FileSystemResult` 承载操作结果。业务代码可以依赖统一接口，而不直接耦合某个 SDK。

典型流程是选择后端、配置凭据与 Endpoint、调用服务上传对象，再保存对象标识而非临时签名 URL。需要下载时再生成访问 URL；默认有效期是 10 分钟。公开/私有访问策略通过 bucket ACL 配置控制。

## 后端选择与扩展

支持 `ALIYUN_OSS`、`AMAZON_S3`、`TENCENT_COS`、`MINIO`。每种后端所需字段不同，示例和完整属性在[文件系统配置示例](/examples/configuration/filesystem/)，应用接入见[Filesystem Starter](/starters/filesystem/)。凭据从环境变量或密钥管理系统注入。扩展新后端时实现 `FileSystemHandler` 并遵循既有 Handler 的初始化和错误转换模式。

## 运维注意

上传成功但无法访问时检查 bucket、ACL、区域、Endpoint 和签名有效期；大文件和高并发场景按 SDK 及服务端限制调整连接池/超时。不要把预签名 URL 当作永久地址，也不要将私有对象设为公开来绕过授权。

完整配置项请查看[该模块配置参考](/reference/configuration/filesystem/)，带注释示例见[该模块配置示例](/examples/configuration/filesystem/)。
