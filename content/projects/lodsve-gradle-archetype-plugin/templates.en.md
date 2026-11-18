---
title: "Author and Extend Templates"
description: "Use content placeholders, path variables, bindingProcessor, and non-template file manifests."
weight: 30
---

## Template directory

The default directory is `src/main/resources/templates`. Place the project skeleton into this directory; its relative directory structure will remain in `generated/`. To switch directories, append `-Dtemplates=path/to/templates` to the complete build command.

## Content and path rules

| Module | Writing method | Example |
| --- | --- | --- |
| File content | `@variable@` | `package @packageName@;` |
| File or directory name | `__variable__` | `src/main/java/__packagePath__/Application.java` |
| expressions in content | `@expression@` | `@artifactId.toUpperCase()@` |
| Literal `@` | `@@` | Not treated as placeholder |

Variables are evaluated by Groovy `GStringTemplateEngine`. `$` in the template content will be escaped by the plugin to retain the `${...}` expression of the generated project.

## built-in variables

- `groupId`, `artifactId`, `version`: engineering coordinates.
- `packageName`, `packagePath`: dot package name and slash path.
- `author`, `port`, `contextPath`: Author and application configuration.

For complete parameter mapping, see [Parameter reference](/projects/lodsve-gradle-archetype-plugin/parameters/).

## Custom Variables {#custom-variables}

For example, to use `@bootVersion@` in the Boot project template, add the following to `gradle.properties` in the generator:

```properties
# Sample version, which should be verified along with dependencies and code in the team template.
systemProp.com.lodsve.gradle.archetype.binding.bootVersion=1.0.3
```

It is also possible to use the full prefix in the build command:

```text
-Dcom.lodsve.gradle.archetype.binding.bootVersion=1.0.3
```

The source code also attempts to parse normal command line `-D` parameters from `sun.java.command`, but custom variables are easier to check using the explicit binding prefix as above.

## bindingProcessor

After parameter parsing is completed and before starting to write files, you can add derived variables in `build.gradle` of the generator:

```groovy
generate {
    bindingProcessor = { bindings ->
        bindings.capitalizedName = bindings.artifactId.capitalize()
    }
}
```

The template can use `@capitalizedName@`. The standard variable `artifactId` is used here and does not rely on `bindings.name` which may not exist in the README example.

## Leave the file as is

Binary resources, compressed files, and wrappers should not be parsed as text templates. Create `.nontemplates` in the template root directory and list the Ant style matching rules:

```text
# Binaries and build tools are copied as-is.
**/*.jar
**/*.zip
**/*.png
**/*.jpg
**/*.sh
**/*.bat
gradle/
.gradle/
gradlew
gradlew.bat
```

Directory mode retains the end `/`. The search order is `.nontemplates` in the template directory, and `src/main/resources/.nontemplates` in the generator project will be used only if it does not exist; the two lists will not be automatically merged. Documents such as images, fonts or certificates that need to be retained should also be added to the list.

## Post-build checks

Check whether there is `@variable@` or `__variable__` that has not been replaced, and whether the source code package name and file path are consistent. When the template evaluation fails, the source code will record an error and try to copy the original file. It cannot be judged that all templates have been replaced correctly just by the end of the task.

[Template processing source code](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype/util/FileUtils.groovy) · [binding processing source code](https://github.com/lodsve/lodsve-gradle-archetype-plugin/blob/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype/ArchetypeGenerateTask.groovy)
