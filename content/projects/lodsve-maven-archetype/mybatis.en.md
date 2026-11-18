---
title: "MyBatis data access project"
description: "Generate DAO, entity, Mapper XML and data source configuration examples."
weight: 30
---

## What's included

Add `lodsve-boot-starter-mybatis`, RDBMS components, MySQL driver and HikariCP to the basic web project. Examples include `DemoPO`, `DemoDAO`, Service, and Mapper XML.

`DemoDAO` inherits `BaseRepository<DemoPO>`; `DemoPO` inherits `BasePropertyPO`. Compatibility of these classes needs to be confirmed with the selected Boot version.

## Generate project

Press first [Version preparation steps for Quickstart](/projects/lodsve-maven-archetype/quickstart/) Set `LODSVE_BOOT_VERSION`, then execute:

```bash
# Template release version; when installing from source code, it is changed to the locally installed version.
ARCHETYPE_VERSION=1.0.3
# Set the selected Lodsve Boot version before continuing.
: "${LODSVE_BOOT_VERSION:?Set LODSVE_BOOT_VERSION first}"

mvn archetype:generate \
  -DinteractiveMode=false \
  -DarchetypeGroupId=com.lodsve.archetype \
  -DarchetypeArtifactId=lodsve-archetype-mybatis \
  -DarchetypeVersion="$ARCHETYPE_VERSION" \
  -DgroupId=com.example \
  -DartifactId=demo-mybatis \
  -Dversion=1.0.0-SNAPSHOT \
  -Dpackage=com.example.demo \
  -Dauthor=developer \
  -DbootVersion="$LODSVE_BOOT_VERSION" \
  -Dport=8080 \
  -DcontextPath=/demo
```

## Configuration database

Template `application.yml` provides a database connection example under `lodsve.rdbms.data-source.demo`. Replace with actual addresses and environment variables, without using the demo credentials from the template:

```yaml
lodsve:
  rdbms:
    data-source:
      demo:
        pool-name: demo-datasource
        url: ${DB_URL}
        username: ${DB_USERNAME}
        password: ${DB_PASSWORD}
        driver-class-name: com.mysql.cj.jdbc.Driver
        pool-setting:
          type: Hikari
```

This is the attribute structure of this template. If there is any discrepancy between the property definitions in the current Boot document, the configuration class of the actual version used shall prevail.

## Check before start

- Prepare the database and business table structure; the template provides DAO and Mapper examples, but does not include a complete migration process that automatically creates demo tables.
- Check the namespace, SQL and entity fields in `DemoDAO.xml` and align them with the real database tables.
- press [Quickstart build checks](/projects/lodsve-maven-archetype/quickstart/#pre-build-checklist) Handle generating POM and image configuration.
- After the build is started, the write and query are verified once, and then the business logic is expanded.

## Further reading

[MyBatis Starter](/starters/mybatis/) · [MyBatis component](/components/mybatis/) · [Template source code](https://github.com/lodsve/lodsve-maven-archetype/tree/d1450a5767509f1605ce9797a3ac2cd3e5758dae/lodsve-archetype-mybatis/src/main/resources)
