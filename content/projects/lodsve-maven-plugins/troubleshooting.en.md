---
title: "Build and Troubleshooting"
description: "Locating issues such as template not being generated, dependencies not being resolved, and Shade resource merging."
weight: 30
---

## Java file not generated

Make sure the plugin is located at `<build><plugins>` and not just declared at `pluginManagement`; check the goal, input directory and lifecycle. The main source code uses `generate-sources`, and the test source code uses `generate-test-sources`. The parent aggregation project is usually the `pom` packaging, which is skipped by `skipPoms=true` by default.

## Attributes are not replaced

First confirm that the property does exist in Maven, and then check the `delimiters`, `useDefaultDelimiters` and escape settings. The output files in `target/generated-sources` are checked, not the input templates. Use `mvn help:evaluate -Dexpression=project.version -q -DforceStdout` to view project version properties.

## Transformer class not found

Put `lodsve-shade-maven-plugin` into the Maven Shade Plugin's own `<dependencies>`. `<dependencies>` placed only in the business project cannot replace the plugin dependency declaration. Check the full name and extended version of the implementation class.

## The merge result is not as expected

Confirm that the regex matches the complete resource path within the JAR. The regular converter appends text to the same path and will not automatically deduplicate or merge different paths; the `spring.factories` converter also does not process other Spring metadata files. Unpack the actual JAR after the build to verify the contents.

## Build the plugin from source

Use Maven Wrapper in the `lodsve-maven-plugins` repository to build and install it to the local repository:

```bash
./mvnw clean install
```

The current build configuration of the plugin source code uses JDK 21, and the quality check is based on the root POM and `tools/` configuration.[Root POM](https://github.com/lodsve/lodsve-maven-plugins/blob/e1a9195c89fd5a106a9616bc27f31b93399e6611/pom.xml) It is the basis for version and build rules; historical releases may use lower versions of JDK.
