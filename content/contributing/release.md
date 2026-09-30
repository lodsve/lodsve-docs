---
title: 发布说明
description: 版本发布和文档同步的基本流程。
weight: 20
---

发布前确认根 POM 的 `revision` 不是 Snapshot，完成 Maven Verify 和 Javadoc 检查，再发布到 Maven Central。文档首页、版本表、依赖示例和兼容性说明需要同步更新。

文档站的部署方式由承载平台决定，可以把 Hugo 的 `public/` 作为静态站点发布目录。
