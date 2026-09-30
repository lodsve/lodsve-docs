---
title: "社区与贡献"
description: "通过项目仓库反馈问题、改进代码和完善文档。"
---

## 找到对应仓库

| 项目 | 源码 | 问题反馈 |
| --- | --- | --- |
| Lodsve Boot | [仓库](https://github.com/lodsve/lodsve-boot) | [Issues](https://github.com/lodsve/lodsve-boot/issues) |
| Maven Plugins | [仓库](https://github.com/lodsve/lodsve-maven-plugins) | [Issues](https://github.com/lodsve/lodsve-maven-plugins/issues) |
| Maven Archetype | [仓库](https://github.com/lodsve/lodsve-maven-archetype) | [Issues](https://github.com/lodsve/lodsve-maven-archetype/issues) |
| Gradle Archetype Plugin | [仓库](https://github.com/lodsve/lodsve-gradle-archetype-plugin) | [Issues](https://github.com/lodsve/lodsve-gradle-archetype-plugin/issues) |
| 文档站 | [仓库](https://github.com/lodsve/lodsve-docs) | [Issues](https://github.com/lodsve/lodsve-docs/issues) |

## 反馈一个可复现的问题

请提供项目名称和版本、JDK 与 Maven / Gradle 版本、最小配置、执行命令、预期行为和实际日志。脚手架问题请同时提供模板版本、生成参数及出错的生成文件；日志中移除密码、Token 与内部地址。

## 改进项目

先阅读对应项目 README 和贡献约定。修复范围围绕一个具体问题，说明行为变化与验证方式，通过 Pull Request 提交到对应仓库。

## 贡献文档

文档使用 Markdown 和 Hugo。页面的“编辑此页”链接可以定位到源文件，文档仓库默认分支为 `master`。

```bash
hugo server -D
hugo --minify
```

新增内容应能回溯到项目 README、源码或发布元数据；明确示例适用版本。合并或推送到 `master` 后，GitHub Actions 自动构建静态 HTML 并部署到 GitHub Pages。
