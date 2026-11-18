---
title: "Shade resource merging"
description: "Configure spring.factories and regular resource combiners for Maven Shade Plugin."
weight: 20
---

## Two Transformers

| Implementation class | function |
| --- | --- |
| `com.lodsve.maven.plugin.shade.SpringFactoriesResourceTransformer` | Process `META-INF/spring.factories` and merge the implementation class list corresponding to the attribute key |
| `com.lodsve.maven.plugin.shade.RegexAppendingTransformer` | Match resource paths according to Java regular rules, and append and merge content with the same path from different dependencies. |

`lodsve-shade-maven-plugin` is an extended dependency of Shade. The actual packaging is still performed by `org.apache.maven.plugins:maven-shade-plugin`.

## Configuration example

First define `maven.shade.plugin.version` in POM `<properties>`, and use the Maven Shade Plugin version that has been verified by the project. The `1.0.3` below is an extended version of Lodsve, and the two are managed independently.

Place the following configuration in `<build><plugins>`:

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

Both converters should be placed in the same `<transformers>` element. Reserve one or both depending on actual resource needs.

## merge behavior

`SpringFactoriesResourceTransformer` reads Java Properties and processes the corresponding implementation list when encountering the same key. It deals exclusively with `spring.factories` and does not implement automatic merging of other Spring metadata paths.

`RegexAppendingTransformer` uses full path matching, retains a separate buffer for each resource path, and appends a newline after each input segment. Therefore `META-INF/error/a.properties` and `META-INF/error/b.properties` will not be merged into the same file. It does text append, does not handle the semantics of duplicate keys in Properties, and does not promise entry deduplication.

## Build and check

```bash
mvn package
```

Check that the actual produced JAR contains the required resources, that the properties with the same names are as expected, and that the autoconfiguration is still discoverable by the application. The converter is responsible for merging resources and will not add application entries to the JAR separately; executable packaging still uses the project's existing solution.

## Source code basis

[README configuration example](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/README.cn.md) · [Transformer source code](https://github.com/lodsve/lodsve-maven-plugins/tree/e1a9195c89fd5a106a9616bc27f31b93399e6611/lodsve-shade-maven-plugin/src/main/java/com/lodsve/maven/plugin/shade)
