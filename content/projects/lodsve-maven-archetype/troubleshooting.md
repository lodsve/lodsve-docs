---
title: "版本与常见问题"
description: "排查模板解析、依赖兼容、数据库和 RPC 生成问题。"
weight: 90
---

## 找不到 Archetype

检查三个模板坐标、Maven 仓库和网络。当前源码版本是 `1.0.4-SNAPSHOT`，不能从“源码里存在”推断“中央仓库中已经发布”。RPC 模板按 [RPC 指南](/projects/lodsve-maven-archetype/rpc/)先从源码安装，`archetypeVersion` 使用实际安装版本。

## 批量生成仍然要求输入

`-DinteractiveMode=false` 用于非交互运行，仍需提供模板要求的参数。尤其检查 `bootVersion`、`author`、`package`，以及 RPC 特有的 API 坐标和服务定位参数，详见[参数参考](/projects/lodsve-maven-archetype/parameters/)。

## Maven 报 HTTP 仓库被阻止

源码基线的生成 POM 中包含历史 HTTP 仓库地址。将其更新为 HTTPS，或移除冗余的 Central 声明；不要通过关闭 Maven 的 HTTP 拦截解决。

## 生成成功但编译失败

参数替换成功不代表依赖或 API 已迁移。核对 Boot 父版本、模板中的 Starter / Component 坐标和 Java 导入。Boot 的新版本可能采用不同依赖结构，先确定目标版本，再调整生成工程。

## MyBatis 启动失败

确认数据库可连接、业务表已准备、Mapper 路径与实体字段一致。模板提供的数据源和 SQL 是示例，数据库初始化需要由实际工程负责。

## RPC 找不到接口或服务

API / Server / Client 基础包应保持一致；先安装共享 API，再构建调用双方。检查 API 中的服务名和上下文路径是否与 Server 一致，并确认 Nacos 地址、namespace、group 与服务发现依赖。

## 容器运行版本不匹配

模板的 Dockerfile 基线使用 JDK 11 镜像，应按生成工程的实际 JDK 要求更换。生成工程中的源码、POM 与镜像版本需要一并核对。

[README 与源码基线](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae)
