---
title: 常见问题
description: 开始使用和升级时最常遇到的问题。
weight: 20
---

## 执行 clean 后为什么需要生成源码？

项目使用源码模板优化版本号处理。首次导入或执行 `mvn clean` 后运行：

```bash
./mvnw com.lodsve.maven.plugins:lodsve-javatemplate-maven-plugin:1.0.3:generate-sources
```

## Starter 没有生效怎么办？

确认依赖坐标、Spring Boot 版本、配置前缀和条件 Bean。优先运行对应示例工程缩小问题范围。

## 发布时 Javadoc 失败怎么办？

检查 Javadoc 的 `@see` 引用是否能解析到真实方法签名，并确认 JDK 与 Maven 插件版本一致。
