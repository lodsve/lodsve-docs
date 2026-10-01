---
title: 参与开发
description: 本地构建、代码风格和文档贡献约定。
weight: 10
---

主项目使用 Maven Wrapper、JDK 21、Checkstyle 和许可证头检查。提交代码前执行受影响模块测试，并保持 Java 文件使用 UTF-8、LF 和 4 空格缩进。

文档站使用 Hugo：

```bash
hugo server -D
hugo --minify
```

新增组件页面时，保持“问题说明 → 依赖 → 配置 → Java 示例 → 排查建议 → 示例工程”的顺序。
