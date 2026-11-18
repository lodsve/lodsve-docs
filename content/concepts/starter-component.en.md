---
title: "Starter and Component"
description: "When choosing application dependencies, understand the boundaries of responsibilities at both levels."
weight: 20
---

## Starter

Starter is the entry point for application integration and usually only contains dependency combination and automatic configuration entries. Business projects preferentially rely on Starter, such as `lodsve-boot-starter-mybatis`.

## Component

Components are implementations of specific capabilities, such as MyBatis Repository, file system adapters, or Redis serialization enhancements. When you need more fine-grained control, you can look directly at the Component API, but you're still responsible for more configuration.

## Select suggestions

| scene | Recommended |
| --- | --- |
| Common Spring Boot application | Starter |
| Custom Bean or Adapter | Starter + Component API |
| Develop Lodsve Boot extension | Component |
| Just want to unify the version | dependencies BOM |
