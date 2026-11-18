---
title: "Nacos Configuration Center Project"
description: "Generate a basic web project with the Nacos Configuration Center example."
weight: 40
---

## What's included

The template introduces `lodsve-boot-starter-nacos` in the basic project, and demonstrates the connection address, namespace, group and extended configuration file of Nacos Config in `bootstrap.yml`.

## Generate project

Press first [Version preparation steps for Quickstart](/projects/lodsve-maven-archetype/quickstart/) Setting `LODSVE_BOOT_VERSION`:

```bash
# Template release version; when installing from source code, it is changed to the locally installed version.
ARCHETYPE_VERSION=1.0.3
# Set the selected Lodsve Boot version before continuing.
: "${LODSVE_BOOT_VERSION:?Set LODSVE_BOOT_VERSION first}"

mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=com.lodsve.archetype \
  -DarchetypeArtifactId=lodsve-archetype-nacos \
  -DarchetypeVersion="$ARCHETYPE_VERSION" \
  -DgroupId=com.example \
  -DartifactId=demo-nacos \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=com.example.demo \
  -Dauthor=developer \
  -DbootVersion="$LODSVE_BOOT_VERSION" \
  -Dport=8080 \
  -DcontextPath=/demo
```

## Connect with Nacos

Modify `src/main/resources/bootstrap.yml` after generation:

1. Set `spring.cloud.nacos.config.server-addr` as the actual service address.
2. Replace `namespace` and `group` with existing configuration spaces and groups in the environment.
3. The template is set to `file-extension: yml` and the corresponding configuration file is prepared according to the application name; the example also reads `application.yml` of the same group through `extension-configs`.
4. Check the account, network, and configuration read permissions; the template turns off automatic configuration refresh by default.

The default address of the template is `http://localhost:8848`, namespace and group are just example values. It does not create Nacos services or publish remote configurations for you.

## Version adaptation

The current template uses the `bootstrap.yml` method. Whether to enable Bootstrap configuration loading depends on the Spring Cloud / Nacos dependency version used. You cannot just modify `bootVersion` and assume that the configuration loading mechanism will also automatically complete the migration.

Press first [Quickstart](/projects/lodsve-maven-archetype/quickstart/#pre-build-checklist) Check the project build, and then confirm the actual connection address, namespace, group and Data ID from the startup log.

## Further reading

[Nacos Starter](/starters/nacos/) · [Template and configuration source code](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-nacos/src/main/resources)
