---
title: "Shade 资源合并"
description: "为 Maven Shade Plugin 配置 spring.factories 与正则资源合并器。"
weight: 20
---

## 两种 Transformer

| 实现类 | 作用 |
| --- | --- |
| `com.lodsve.maven.plugin.shade.SpringFactoriesResourceTransformer` | 处理 `META-INF/spring.factories`，合并属性键对应的实现类列表 |
| `com.lodsve.maven.plugin.shade.RegexAppendingTransformer` | 按 Java 正则匹配资源路径，将来自不同依赖的同路径内容追加合并 |

`lodsve-shade-maven-plugin` 是 Shade 的扩展依赖。实际执行打包的仍是 `org.apache.maven.plugins:maven-shade-plugin`。

## 配置示例

先在 POM `<properties>` 中定义 `maven.shade.plugin.version`，值使用项目已经验证的 Maven Shade Plugin 版本。下面的 `1.0.3` 是 Lodsve 扩展版本，两者独立管理。

将以下配置放在 `<build><plugins>` 中：

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-shade-plugin</artifactId>
    <version>${maven.shade.plugin.version}</version>
    <dependencies>
        <dependency>
            <groupId>com.lodsve.maven.plugins</groupId>
            <artifactId>lodsve-shade-maven-plugin</artifactId>
            <version>1.0.3</version>
        </dependency>
    </dependencies>
    <executions>
        <execution>
            <phase>package</phase>
            <goals>
                <goal>shade</goal>
            </goals>
            <configuration>
                <transformers>
                    <transformer implementation="com.lodsve.maven.plugin.shade.SpringFactoriesResourceTransformer"/>
                    <transformer implementation="com.lodsve.maven.plugin.shade.RegexAppendingTransformer">
                        <regex>META-INF/error/.*\.properties</regex>
                    </transformer>
                </transformers>
            </configuration>
        </execution>
    </executions>
</plugin>
```

两个转换器应放在同一个 `<transformers>` 元素中。根据实际资源需求保留其中一个或同时使用。

## 合并行为

`SpringFactoriesResourceTransformer` 读取 Java Properties，遇到相同键时处理对应的实现列表。它专门处理 `spring.factories`，没有实现其他 Spring 元数据路径的自动合并。

`RegexAppendingTransformer` 使用完整路径匹配，为每个资源路径保留独立缓冲区，每段输入后追加换行。因此 `META-INF/error/a.properties` 与 `META-INF/error/b.properties` 不会被合并为同一个文件。它进行文本追加，不处理 Properties 重复键的语义，也不承诺条目去重。

## 构建与检查

```bash
mvn package
```

检查实际产出的 JAR 中是否包含所需资源、同名属性是否符合预期，以及应用是否仍能发现自动配置。转换器的职责是资源合并，不会单独为 JAR 添加应用入口；可执行打包仍沿用项目现有方案。

## 源码依据

[README 配置示例](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/README.cn.md) · [Transformer 源码](https://github.com/lodsve/lodsve-maven-plugins/tree/e1a9195c89fd5a106a9616bc27f31b93399e6611/lodsve-shade-maven-plugin/src/main/java/com/lodsve/maven/plugin/shade)
