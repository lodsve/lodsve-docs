---
title: 架构与模块
description: Lodsve Boot 的版本管理、Starter、自动配置、Component 与扩展模块关系。
weight: 10
---

## 组件关系图

<figure class="architecture-figure">
  <button class="architecture-preview" type="button" data-architecture-image data-architecture-title="Lodsve Boot 组件架构" aria-haspopup="dialog" aria-label="放大查看 Lodsve Boot 组件架构图">
    <img src="/images/lodsve-boot-architecture.svg" alt="Lodsve Boot Starter、MongoDB 多数据源自动配置、Component 与基础设施依赖关系">
  </button>
  <figcaption>点击图片可在覆盖层中查看并缩放。</figcaption>
</figure>

图中蓝色连线表示 Starter POM 对公共自动配置模块的直接依赖；绿色连线表示功能配置与 Component 或集成能力的映射。第三方依赖由 Starter 或 Component 引入，不一定经自动配置模块传递。图片会完整适配页面宽度，点击后可在覆盖层中缩放查看细节。

## 运行时依赖链

1. 业务应用导入 `lodsve-boot-dependencies` 管理依赖版本，并按需依赖一个或多个 `lodsve-boot-starter-*`。
2. 每个 Starter 都依赖公共模块 `lodsve-boot-autoconfigure`；一部分 Starter 还直接引入对应的 `lodsve-boot-component-*`，并组合 Spring Boot、Spring Cloud 或第三方集成依赖。
3. `lodsve-boot-autoconfigure` 依赖基础模块 `lodsve-boot`，通过 `AutoConfiguration.imports` 注册 Core、JSON 和功能配置类。各配置根据源码声明的类路径、Bean 或属性条件生效。
4. Component 提供可复用实现；多数功能 Component 依赖 `lodsve-boot`。自动配置在需要时创建默认 Bean，支持相应的 `@ConditionalOnMissingBean` 扩展点。
5. 可选的 Actuator 扩展通过独立的 `lodsve-boot-actuator-autoconfigure` 注册 Versions、Dependencies 和 Enums 端点。示例工程由根 POM 的 `include-examples` Profile 聚合，不进入默认构建。

## 模块职责

| 模块 | 职责 | 依赖关系 |
| --- | --- | --- |
| `lodsve-boot-dependencies` | 管理 Lodsve 与第三方依赖版本 | 应用导入 BOM；`lodsve-boot-parent` 继承它 |
| `lodsve-boot-parent` | 统一 Maven 编译、插件和质量检查约定 | Boot 多模块工程的父 POM |
| `lodsve-boot` | 提供基础类型、异常、工具及共享能力 | 被自动配置和多数功能 Component 使用 |
| `lodsve-boot-autoconfigure` | 提供共用及功能自动配置注册 | 依赖 Core；以 optional 依赖声明多种 Component |
| `lodsve-boot-component-*` | 承载 Web、SQL / MongoDB 数据访问、Redis、文件、校验等具体实现 | 通常由相应 Starter 组合，也可单独使用；RPC Client 模块由 RPC API 显式依赖 |
| `lodsve-boot-starter-*` | 提供面向应用的依赖入口 | 引入公共自动配置，并按能力组合 Component 或集成库 |
| `lodsve-boot-actuator*` | 提供 Lodsve 专属 Actuator 端点 | 由应用显式加入，不属于普通 Starter 链 |
| `lodsve-boot-examples` | 展示各 Starter 和外部基础设施用法 | 通过 `include-examples` Profile 加入 Reactor |

## 配置映射中的边界

- `lodsve-boot-starter-nacos` 组合 Spring Cloud Alibaba Config 与 Bootstrap；当前项目没有对应的 Lodsve Nacos 自动配置类。
- 源码中有 `OpenFeignAutoConfiguration`，但当前 `AutoConfiguration.imports` 未列出它。图中将其标为未注册项，不把类定义等同于自动加载。
- `lodsve-boot-component-openfeign-client` 提供 RPC DTO 与 Result 类型；当前 OpenFeign Starter 的 POM 没有直接依赖它，RPC API 示例会单独声明该模块。
- 文件存储、数据源、Redis 等能力还依赖相应驱动或服务。Lodsve 自动配置只在其声明的条件满足时提供配置，具体外部依赖仍由应用选用。

Starter 的使用场景见 [Starter 能力地图](/starters/)，可复用实现见 [Component 目录](/components/)。

源码定位入口：[模块聚合 POM](https://github.com/lodsve/lodsve-boot/blob/master/lodsve-boot-project/pom.xml) · [Starter POM](https://github.com/lodsve/lodsve-boot/tree/master/lodsve-boot-project/lodsve-boot-starters) · [自动配置注册表](https://github.com/lodsve/lodsve-boot/blob/master/lodsve-boot-project/lodsve-boot-autoconfigure/src/main/resources/META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports)
