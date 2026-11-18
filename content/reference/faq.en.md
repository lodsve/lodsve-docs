---
title: "FAQ"
description: "The most common questions you encounter when getting started and upgrading."
weight: 20
---

## Why do I need to generate source code after executing clean?

The project uses source code templates to optimize version number processing. Run for the first time after importing or executing `mvn clean`:

```bash
./mvnw com.lodsve.maven.plugins:lodsve-javatemplate-maven-plugin:1.0.3:generate-sources
```

## What should I do if the Starter does not take effect?

Confirm dependency coordinates, Spring Boot version, configuration prefix, and conditional beans. Prioritize running the corresponding sample project to narrow down the scope of the problem.

## What should I do if Javadoc fails when publishing?

Check whether the `@see` reference in Javadoc can resolve the real method signature, and confirm that the JDK and Maven plugin versions are consistent.

## What should I do if PMD errors occur after upgrading JDK 21?

`Unsupported targetJdk value '21'` indicates that the PMD engine version is too old. The current source code uses `maven-pmd-plugin:3.28.0` in `lodsve-boot-parent/pom.xml`, built-in PMD `7.17.0`, and `targetJdk` follows the project's `java.version`.

When upgrading the plugin, `tools/pmd-ruleset.xml` must be updated at the same time. PMD 7 has removed some old rules, and the replacement relationships are as follows:

| old rules | PMD 7 Rules |
| --- | --- |
| `UnusedImports`, `DontImportJavaLang`, `DuplicateImports`, `ImportFromSamePackage` | `codestyle/UnnecessaryImport` |
| `EmptyFinallyBlock`, `EmptyIfStmt`, `EmptyInitializer`, `EmptyStatementBlock`, `EmptySwitchStatements`, `EmptySynchronizedBlock`, `EmptyTryBlock`, `EmptyWhileStmt` | `codestyle/EmptyControlStatement` |
| `EmptyStatementNotInLoop` | `codestyle/UnnecessarySemicolon` |
| `BooleanInstantiation` | `bestpractices/PrimitiveWrapperInstantiation` |

After pulling the source code containing the plugin and rule file repairs, execute `./mvnw clean install` in the JDK 21 environment. If you still get rules loading errors, check to see if the plugin version of the parent POM has been overwritten or an old rules file is referenced.
