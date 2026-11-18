---
title: "Event configuration"
description: "Complete configuration items, default values, sample values, and enumeration descriptions of Lodsve Boot Event configuration."
---

| Configuration items | Type | Default value | Example value | Description |
|---|---|---:|---:|---|
| `lodsve.event.core-pool-size` | `int` | `1` | `4` | Number of event executor core threads. |
| `lodsve.event.max-pool-size` | `int` | `Integer.MAX_VALUE` | `32` | Maximum number of threads. |
| `lodsve.event.keep-alive-seconds` | `int` | `60` | `60` | Non-core thread survival time, in seconds. |
| `lodsve.event.allow-core-thread-time-out` | `boolean` | `false` | `false` | Whether to allow core threads to timeout and exit. |
| `lodsve.event.queue-capacity` | `int` | `Integer.MAX_VALUE` | `500` | Waiting queue capacity. |
| `lodsve.event.expose-unconfigurable-executor` | `boolean` | `false` | `false` | Whether to expose non-configurable Executors. |
