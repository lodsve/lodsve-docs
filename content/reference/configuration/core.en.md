---
title: "Core and Snowflake configuration"
description: "Complete configuration items, default values, example values, and enumeration descriptions for Lodsve Boot Core and Snowflake configurations."
---

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.core.i18n-folders` | `Set<String>` | None | `[classpath:/i18n]` | A collection of international resource directories. |

## Snowflake ID

The Snowflake ID generator is configured via Spring property injection and the key name is not under the `lodsve.*` namespace. The value range of both worker machine ID and data center ID is `0` to `31` (inclusive); when deployed in a distributed manner, each instance should use a unique combination.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---:|---:|---|
| `snowflake.worker-id` | `long` | `1` | `3` | Work machine ID, range `0`–`31`. |
| `snowflake.data-center-id` | `long` | `1` | `2` | Datacenter ID, range `0`–`31`. |
