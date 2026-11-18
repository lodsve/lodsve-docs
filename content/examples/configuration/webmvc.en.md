---
title: "WebMVC example"
description: "WebMVC YAML configuration example."
---

```yaml
lodsve:
  web-mvc:
    # Whether to turn on Web request debugging log; it is turned off by default in production environment.
    is-debug: false
    debug:
      exclude-url: [/actuator/health]
      exclude-address: []
    rest:
      # REST client connection and read timeout in milliseconds.
      connect-timeout: 15000
      read-timeout: 15000
```
