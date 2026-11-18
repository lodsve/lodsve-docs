---
title: "JVM Script Execution"
kicker: Component
description: "Register unified script execution capabilities based on the script engines available on the classpath."
---

## Engine discovery and calling

The Script Starter provides the script execution abstraction `Script` and registers the corresponding beans by the engine implementation present in the runtime classpath, such as Groovy or a dependency-backed JSR-223 engine. Which languages are ultimately supported depends on the actual engine dependencies introduced and the JDK version; do not assume that the language engine is shipped with the JDK.

Explicit language, input bindings, and return types when executing scripts to avoid relying on implicit global variables. It is recommended to treat scripts as application code management: versioning, auditing, restricting access to objects and recording execution time and failure information.

## security boundary

Script execution is not the same as sandboxing. Do not expose arbitrary source code or high-privilege Spring beans, file systems, and database connections to untrusted scripts. Timeouts, isolation, and resource limits need to be implemented by the application based on actual engine capabilities. This module does not have exclusive `lodsve.*` configuration items; see dependencies and calling entries.[Script Starter](/starters/script/).
