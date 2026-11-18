---
title: "Quickstart Project"
description: "Generate Maven applications containing Web, Service and data object layering."
weight: 10
---

## Prepare environment and version

Install Maven and JDK 21 build environment. Set `LODSVE_BOOT_VERSION` in the terminal to the selected version of the project, for example `export LODSVE_BOOT_VERSION=1.0.4-SNAPSHOT`. This only explains how the version is passed in; the runtime JDK used to generate the application should still be checked against the selected Boot version and business dependencies.

The template coordinate is `com.lodsve.archetype:lodsve-archetype-quickstart`, and the command is executed in the parent directory of the new project.

## Generate project

```bash
# Template release version; when installing from source code, it is changed to the locally installed version.
ARCHETYPE_VERSION=1.0.3
# Set the selected Lodsve Boot version before continuing.
: "${LODSVE_BOOT_VERSION:?Set LODSVE_BOOT_VERSION first}"

mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=com.lodsve.archetype \
  -DarchetypeArtifactId=lodsve-archetype-quickstart \
  -DarchetypeVersion="$ARCHETYPE_VERSION" \
  -DgroupId=com.example \
  -DartifactId=demo-app \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=com.example.demo \
  -Dauthor=developer \
  -DbootVersion="$LODSVE_BOOT_VERSION" \
  -Dport=8080 \
  -DcontextPath=/demo
```

Maven outputs the project to `demo-app/` by default. Windows users can write the command as a single line, or use the continuation line syntax of the corresponding terminal.

## what to get

| Module | content |
| --- | --- |
| `pom.xml` | Use `lodsve-boot-dependencies` as the parent POM, including Web, Swagger, Actuator and other dependencies |
| Application package under `src/main/java` | `DemoApplication`, Web Controller, Service and Implementation |
| `pojo/bo`, `form`, `query`, `vo` | Common request, response and business object layering |
| `src/main/resources/application.yml` | Ports, context paths, and sample configuration |
| `mvnw`, `mvnw.cmd`, `.mvn/` | Maven Wrapper |
| `Dockerfile` | Container build example |

## Pre-build Checklist {#pre-build-checklist}

1. The parent POM and Starter in the template must be resolvable in the selected repository, and the dependency coordinates should be aligned with `bootVersion`.
2. The generated POM of the source code baseline contains `http://repo1.maven.org/maven2`; change it to `https://repo.maven.apache.org/maven2` or remove this redundant warehouse declaration to prevent modern Maven from intercepting the HTTP warehouse.
3. The current template Dockerfile uses `eclipse-temurin:21-jre`; if you choose another JDK to generate an application, you need to adjust the source code, POM and image versions simultaneously.
4. After verifying the application YAML, build and launch in the build directory.

```bash
cd demo-app
./mvnw clean package
./mvnw spring-boot:run
```

Windows uses `mvnw.cmd`. Wrapper can run `sh mvnw clean package` when it lacks execute permissions.

## Next step

Continue reading [Parameter reference](/projects/lodsve-maven-archetype/parameters/), or switch to [MyBatis](/projects/lodsve-maven-archetype/mybatis/) and [Nacos](/projects/lodsve-maven-archetype/nacos/) template.

Source code: [Quickstart template directory](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-quickstart/src/main/resources).
