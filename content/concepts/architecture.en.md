---
title: "Architecture and Modules"
description: "Lodsve Boot's version management, Starter, automatic configuration, relationship between Component and extension modules."
weight: 10
---

## Component Diagram

<figure class="architecture-figure">
  <button class="architecture-preview" type="button" data-architecture-image data-architecture-title="Lodsve Boot component architecture" aria-haspopup="dialog" aria-label="Zoom in to view the Lodsve Boot component architecture diagram">
    <img src="/images/lodsve-boot-architecture.en.svg" alt="Lodsve Boot Starter, MongoDB multi-data source automatic configuration, Component and infrastructure dependencies">
  </button>
  <figcaption>Click on the image to view and zoom in the overlay.</figcaption>
</figure>

The blue connection in the figure indicates the Starter POM's direct dependence on the shared auto-configuration module; the green connection indicates the mapping between functional configuration and Component or integration capabilities. Third-party dependencies are introduced by Starter or Component and are not necessarily passed through the automatic configuration module. The image will fully fit the width of the page, and you can zoom in to see details in the overlay after clicking it.

## runtime dependency chain

1. Business applications import `lodsve-boot-dependencies` to manage dependency versions and depend on one or more `lodsve-boot-starter-*` as needed.
2. Each Starter depends on the public module `lodsve-boot-autoconfigure`; some Starters also directly introduce the corresponding `lodsve-boot-component-*` and combine Spring Boot, Spring Cloud or third-party integration dependencies.
3. `lodsve-boot-autoconfigure` relies on the basic module `lodsve-boot`, and registers Core, JSON and function configuration classes through `AutoConfiguration.imports`. Each configuration takes effect based on the classpath, bean or attribute conditions declared in the source code.
4. Component provides reusable implementation; most functions of Component depend on `lodsve-boot`. Autoconfiguration creates default beans when needed, supporting the corresponding `@ConditionalOnMissingBean` extension point.
5. The optional Actuator extension registers Versions, Dependencies, and Enums endpoints via a separate `lodsve-boot-actuator-autoconfigure`. The sample project is aggregated by the `include-examples` Profile of the root POM and does not enter the default build.

## Module responsibilities

| module | Responsibilities | Dependencies |
| --- | --- | --- |
| `lodsve-boot-dependencies` | Manage Lodsve and third-party dependent versions | Apply imports BOM; `lodsve-boot-parent` inherits it |
| `lodsve-boot-parent` | Unify Maven compilation, plugins and QA conventions | Parent POM of Boot multi-module project |
| `lodsve-boot` | Provide basic types, exceptions, tools and sharing capabilities | Used by autoconfiguration and most functional Components |
| `lodsve-boot-autoconfigure` | Provide sharing and function automatic configuration registration | Depend on Core; declare multiple Components with optional dependencies |
| `lodsve-boot-component-*` | Carrying specific implementations of Web, SQL/MongoDB data access, Redis, files, verification, etc. | Usually combined by the corresponding Starter, it can also be used alone; the RPC Client module is explicitly dependent on the RPC API |
| `lodsve-boot-starter-*` | Provide application-oriented dependency entry | Introduce shared auto-configuration and combine components or integrated libraries according to capabilities |
| `lodsve-boot-actuator*` | Provide Lodsve exclusive Actuator endpoint | Explicitly added by the application and does not belong to the ordinary Starter chain |
| `lodsve-boot-examples` | Demonstrate usage of various starters and external infrastructure | Join Reactor via `include-examples` Profile |

## Configure boundaries in mappings

- `lodsve-boot-starter-nacos` combines Spring Cloud Alibaba Config and Bootstrap; the current project does not have a corresponding Lodsve Nacos automatic configuration class.
- There is `OpenFeignAutoConfiguration` in the source code, but it is not currently listed for `AutoConfiguration.imports`. The figure marks it as an unregistered item and does not equate class definition with automatic loading.
- `lodsve-boot-component-openfeign-client` provides RPC DTO and Result types; the current POM of OpenFeign Starter does not directly depend on it, and the RPC API example will declare this module separately.
- Capabilities such as file storage, data sources, and Redis also rely on corresponding drivers or services. Lodsve automatic configuration only provides configuration when its declared conditions are met, and specific external dependencies are still selected by the application.

For usage scenarios of Starter, see [Starter Catalog](/starters/), for reusable implementation see [Component Catalog](/components/).

Source code location entry: [Module Aggregation POM](https://github.com/lodsve/lodsve-boot/blob/master/lodsve-boot-project/pom.xml) · [Starter POM](https://github.com/lodsve/lodsve-boot/tree/master/lodsve-boot-project/lodsve-boot-starters) · [Automatically configure the registry](https://github.com/lodsve/lodsve-boot/blob/master/lodsve-boot-project/lodsve-boot-autoconfigure/src/main/resources/META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports)
