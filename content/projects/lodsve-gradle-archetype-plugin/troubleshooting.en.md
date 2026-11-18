---
title: "Build and Troubleshooting"
description: "Troubleshoot task discovery, non-interactive environments, duplicate files, and template evaluation issues."
weight: 40
---

## Plugin version not found

First distinguish the installation channels.[quick start](/projects/lodsve-gradle-archetype-plugin/getting-started/) The implementation JAR `1.0.1-RELEASE` is loaded through Maven Central; the `plugins` DSL of the Plugin Portal uses another set of plugin tags and version lists and cannot be mixed directly.

## Task not found

Confirm that `com.lodsve.archetype` is applied in the generator project. The full names of the tasks are `generate` and `cleanArchetype`, check with `gradle tasks --group Archetype`. `cleanArch` in the README is an abbreviation, the full task name should be used in case of ambiguity.

## Waiting for input or prompting that parameters are missing in CI

Batch commands need to be passed in `group`, `name`, `packageName`, `version`, `author`, `port`, `contextPath`. Use the `-D` system property or `systemProp.*`, and do not misuse the `-P` project property. Even if there is an interactive default value for a missing field, the query process will be triggered first.

## File with the same name causes failure

`failIfFileExist` is enabled by default. Check and retain existing changes before deciding whether to delete the old output. `cleanArchetype` deletes the entire `generated/`; `-DfailIfFileExist=false` allows overwriting files with the same name, and neither can be used to retain manual modifications.

## Variable not replaced or file corrupted

Check the variable name, writing `@...@` and `__...__` and generate logs. Binaries need to be listed in `.nontemplates`. The source code will record an error when the template evaluation is abnormal and try to copy the original file, so you need to check whether there are any remaining placeholders in the generated results.

The README specifically lists known problems with escaped content such as `https\://...` in Properties; when encountering this situation, first verify character processing in the minimal template, adjust the template, or include files that do not need to be replaced to `.nontemplates`.

## Generate location is different than expected

The current output is fixed at `generated/`. The contents of the template root directory are mapped directly; only when the template itself contains additional project directories, the result will be an additional directory. `-Dtarget` does not change the output position of the current implementation.

## Gradle or JDK incompatible

The source code repository uses Gradle `8.14.3` Wrapper and JDK 21 toolchain, and the source code target is still Java 8. Choose a Gradle/JDK runtime generator that is compatible with each other; do not apply the generator's environment requirements directly to the final Boot application. Version upgrades require separate verification of plugin tasks, template replacement, and generation project builds.

[README known issues](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/aca7077141a0b2201d069bd2925532e26ee26edc/README.md) · [Source code](https://github.com/lodsve/lodsve-gradle-archetype-plugin/tree/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype)
