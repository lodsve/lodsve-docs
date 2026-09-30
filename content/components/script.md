---
title: Script 脚本执行
kicker: Component
description: 基于 classpath 中可用脚本引擎注册统一脚本执行能力。
---

## 引擎发现与调用

Script Starter 提供脚本执行抽象 `Script`，并按运行时 classpath 中存在的引擎实现注册相应 Bean，例如 Groovy 或受依赖支持的 JSR-223 引擎。最终支持哪些语言取决于实际引入的引擎依赖和 JDK 版本；不要假定语言引擎已随 JDK 提供。

执行脚本时明确语言、输入绑定和返回类型，避免依赖隐式全局变量。建议把脚本视为应用代码管理：版本化、审核、限制访问对象并记录执行耗时和失败信息。

## 安全边界

脚本执行不等同于沙箱。不要将任意来源代码或高权限 Spring Bean、文件系统、数据库连接暴露给不可信脚本。超时、隔离和资源限制需由应用按实际引擎能力实现。该模块没有专属 `lodsve.*` 配置项；依赖及调用入口见[Script Starter](/starters/script/)。
