---
title: "Countdown example"
description: "Countdown YAML configuration example."
---

```yaml
lodsve:
  countdown:
    # Countdown automatic configuration is turned off by default; Redis needs to be introduced and enabled at the same time.
    enabled: true
    # A list of database numbers that need to listen for Redis Key expiration notifications.
    database: [0]
```
