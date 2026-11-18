---
title: "Core and Snowflake examples"
description: "Core and Snowflake sample YAML configuration examples."
---

## Snowflake ID and Core

Two properties of the Snowflake ID are outside `lodsve.*`. When deploying multiple instances, please assign unique worker machine IDs and data center IDs to each instance; only `0` to `31` can be filled in for both.

```yaml
snowflake:
  # Working machine ID, value range 0-31.
  worker-id: 3
  # Data center ID, value range 0-31.
  data-center-id: 2
```

```yaml
lodsve:
  core:
    # Collection of internationalized resource directories; can be omitted when component i18n is not used.
    i18n-folders: []
```
