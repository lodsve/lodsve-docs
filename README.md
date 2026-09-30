# Lodsve 文档站

这是 Lodsve 组织的中文 Hugo 文档源代码仓库，涵盖 Lodsve Boot、Maven Plugins、Maven Archetype 与 Gradle Archetype Plugin。

## 本地预览

需要安装 Hugo Extended：

```bash
hugo server -D
```

打开 <http://localhost:1313/> 查看站点。

## 生产构建

```bash
hugo --minify
```

构建产物位于 `public/`。
