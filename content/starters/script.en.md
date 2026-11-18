---
title: Script
kicker: Starter
icon: ">"
description: "Run interpreted languages such as Groovy, Python, JavaScript, Ruby, or SpEL in the JVM."
weight: 130
---

```xml
<dependency>
    <groupId>com.lodsve.boot</groupId>
    <artifactId>lodsve-boot-starter-script</artifactId>
</dependency>
```

Script execution should be restricted to sources, timeouts, and accessible objects. For untrusted script input, the execution environment needs to be isolated.
