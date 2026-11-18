---
title: "Gradle quick start"
description: "Create a generator project, prepare local templates, and then generate projects interactively or in batches."
weight: 10
---

## 1. Create a generator project

Prepare a separate generator directory in which to create `settings.gradle`:

```groovy
rootProject.name = 'lodsve-project-generator'
```

Create `build.gradle` and load the published `1.0.1-RELEASE` from Maven Central:

```groovy
buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath 'com.lodsve:lodsve-gradle-archetype-plugin:1.0.1-RELEASE'
    }
}

apply plugin: 'com.lodsve.archetype'
```

Execute `gradle tasks --group Archetype` in this directory and confirm that `generate` and `cleanArchetype` appear. If the generator already maintains Gradle Wrapper, you can replace `gradle` below with `./gradlew`.

## 2. Put in a minimal template

The plugin reads `src/main/resources/templates` by default. First, verify the replacement process through three small files, and then expand it to the team's own Boot project.

`src/main/resources/templates/settings.gradle`:

```groovy
rootProject.name = '@artifactId@'
```

`src/main/resources/templates/build.gradle`:

```groovy
plugins {
    id 'java'
}

group = '@groupId@'
version = '@version@'
```

`src/main/resources/templates/src/main/java/__packagePath__/Application.java`:

```java
package @packageName@;

public class Application {
    public static void main(String[] args) {
        System.out.println("@artifactId@");
    }
}
```

This example generates a normal Java project for understanding the template mechanism. To generate a Lodsve Boot project, put the selected version of Gradle build files, application startup classes and configuration into the template and refer to [Boot installation and dependencies](/getting-started/installation/) Coordinates and version management instructions in .

## 3. Execute the build

The interactive mode will ask for missing parameters:

```bash
gradle generate --info
```

Using batch mode in a script or CI, explicitly provide all parameters that will be asked, including fields with default values:

```bash
gradle generate --info \
  -Dgroup=com.example \
  -Dname=demo-app \
  -DpackageName=com.example.demo \
  -Dversion=1.0.0-SNAPSHOT \
  -Dauthor=developer \
  -Dport=8080 \
  -DcontextPath=/demo
```

The current implementation still enters the query process when parameters are missing, so parameters in CI cannot be omitted just because they "have default values".

## 4. Check the generated results

The output directory is fixed to `generated/` under the current generator. The files output by the above template include:

```text
generated/
├── settings.gradle
├── build.gradle
└── src/main/java/com/example/demo/Application.java
```

Check the package name, coordinates and file content, and then move the generated project to the official development directory. Then build it with the Gradle/JDK environment required by the application.

## Regenerate

If a file with the same name already exists, an error will be reported by default. After confirming that there are no modifications that need to be retained in `generated/`, you can delete the old results and generate again:

```bash
gradle cleanArchetype generate --info
```

`cleanArchetype` will delete the entire `generated/`. Do not leave ongoing maintenance business projects in this temporary output directory.

## Release Notes

The plugin published by Central is used here to implement dependencies. If using `plugins { id 'com.lodsve.archetype' version '...' }` mode, the version must be from [Plugin Portal](https://plugins.gradle.org/plugin/com.lodsve.archetype) Select; upon checking this channel displays `1.0.0-RELEASE`, which is different from Central's `1.0.1-RELEASE`.

[Task registration and implementation](https://github.com/lodsve/lodsve-gradle-archetype-plugin/tree/aca7077141a0b2201d069bd2925532e26ee26edc/src/main/groovy/com/lodsve/gradle/archetype) · [Central version metadata](https://repo.maven.apache.org/maven2/com/lodsve/lodsve-gradle-archetype-plugin/maven-metadata.xml)
