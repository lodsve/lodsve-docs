---
title: "开源项目"
description: "从应用能力到工程脚手架，按你的开发场景选择 Lodsve 项目。"
---

Lodsve Boot 提供应用组件，Maven 与 Gradle 脚手架负责初始化工程，Maven 插件扩展源码生成与资源打包。各项目独立维护，使用前请阅读对应的版本与环境说明。

## 技术架构

<figure class="architecture-figure">
  <button class="architecture-preview" type="button" data-architecture-image data-architecture-title="Lodsve 工程整体架构" aria-haspopup="dialog" aria-label="放大查看 Lodsve 各项目的技术架构图">
    <img src="/images/lodsve-architecture.svg" alt="Lodsve 各项目的技术架构与协作关系">
  </button>
  <figcaption>点击图片可在覆盖层中查看并缩放。</figcaption>
</figure>

图中实线表示工程生成、运行时依赖和组件装配；虚线表示版本管理关系。图片会完整适配页面宽度，点击后可在覆盖层中缩放查看细节。

Maven Archetype 提供 7 种 Lodsve Boot Maven 项目模板；Gradle Archetype Plugin 包含 MongoDB Boot 参考模板（位于插件源码仓库，需本地复制），也支持读取自定义本地模板。应用通过 Starter 选择运行时能力，MongoDB Starter 可装配具名数据源路由。Maven Plugins 扩展 Maven 源码生成与资源打包阶段，Boot 源码构建当前配置了 JavaTemplate 插件。文档站统一介绍各项目并发布到 GitHub Pages。

Lodsve Boot 的内部模块分层见[架构与模块](/concepts/architecture/)。
