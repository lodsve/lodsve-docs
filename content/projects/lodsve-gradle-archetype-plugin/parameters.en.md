---
title: "Task and parameter reference"
description: "Distinguish between system properties, interactive defaults, fixed output directories and custom variables."
weight: 20
---

## Task

| Task | behavior |
| --- | --- |
| `generate` | Read input parameters and templates and generate results |
| `cleanArchetype` | Recursively delete `generated/` under the current project |

## Parameters that will trigger the query

These parameters are first read through `System.getProperty`; if missing, the interactive prompt is called. The default value is the default answer provided when interacting, batch runs should still pass in all fields explicitly.

| System properties | meaning | Interaction defaults in source code | Template variables |
| --- | --- | --- | --- |
| `group` | engineering group | None | `groupId` |
| `name` | Project name | None | `artifactId` |
| `packageName` | Java package name | None | `packageName` |
| `version` | Engineering version | `1.0.0-SNAPSHOT` | `version` |
| `author` | Author | `Administrator` | `author` |
| `port` | application port | `8080` | `port` |
| `contextPath` | context path | `/` | `contextPath` |

`packagePath` is derived from `packageName`, e.g. `com.example.demo` corresponds to `com/example/demo`.

## Parameters that will not trigger the query

| System properties | Default value | behavior |
| --- | --- | --- |
| `templates` | `src/main/resources/templates` | Template directory, relative or absolute path can be specified |
| `failIfFileExist` | Enabled by default | Fails when a file with the same name is encountered in the output; setting `false` will allow overwriting |

The README example was passed in `-Dtarget=generated`, and the current implementation uses the fixed `generated/` constant directly and does not read `target` as the output directory setting.

## Configure via gradle.properties

In `gradle.properties` of the generator project write:

```properties
systemProp.group=com.example
systemProp.name=demo-app
systemProp.packageName=com.example.demo
systemProp.version=1.0.0-SNAPSHOT
systemProp.author=developer
systemProp.port=8080
systemProp.contextPath=/demo
systemProp.failIfFileExist=true
```

The command line uses system properties like `-Dgroup=...`. `-Pgroup=...` is a Gradle project property, not a reading entry here in the plugin. The source code has no logic to load any `settings.properties` files by itself.

## Differences between README and current implementation

- The default value of the README version is written as `1.0-SNAPSHOT`, and the current task source code actually uses `1.0.0-SNAPSHOT`.
- README lists `configServerName` and `configServerPort`. The current generation task does not have built-in queries and default values for these two fields; please pass the template if required.[Custom binding](/projects/lodsve-gradle-archetype-plugin/templates/#custom-variables) incoming.
- `name` is the input parameter, and the standard project name variable in the template is `artifactId`; `group` corresponds to `groupId`.

[Parameter parsing source code](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype/ArchetypeGenerateTask.groovy)
