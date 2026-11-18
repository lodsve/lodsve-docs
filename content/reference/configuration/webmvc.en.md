---
title: "WebMVC configuration"
description: "Complete configuration items, default values, sample values, and enumeration descriptions for Lodsve Boot WebMVC configuration."
---

`is-debug` is an auto-configuration condition property that is outside of `WebMvcProperties`.

| Configuration items | Type | Default value | Example value | Description |
|---|---|---|---|---|
| `lodsve.web-mvc.is-debug` | `boolean` | `false` | `true` | Whether to enable web request debug logging. |
| `lodsve.web-mvc.debug.exclude-url` | `List<String>` | `[]` | `[/actuator/health]` | Debug log exclude URL. |
| `lodsve.web-mvc.debug.exclude-address` | `List<String>` | `[]` | `[127.0.0.1]` | Debug log excludes client address. |
| `lodsve.web-mvc.rest.connect-timeout` | `int` | `15000` | `5000` | REST connection timeout in milliseconds. |
| `lodsve.web-mvc.rest.read-timeout` | `int` | `15000` | `10000` | REST read timeout in milliseconds. |
