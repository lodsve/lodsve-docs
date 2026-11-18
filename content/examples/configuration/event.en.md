---
title: "Event example"
description: "Event example YAML configuration example."
---

## Event

```yaml
lodsve:
  event:
    # Number of application event executor thread pool core threads.
    core-pool-size: 1
    # Maximum number of threads; the default is Integer.MAX_VALUE. For production environments, it is recommended to set it according to the task load.
    max-pool-size: 32
    # The idle survival time of non-core threads, in seconds.
    keep-alive-seconds: 60
    # Whether to allow core threads to timeout and exit.
    allow-core-thread-time-out: false
    # Waiting queue capacity; default Integer.MAX_VALUE, set according to system capacity evaluation.
    queue-capacity: 500
    # Whether to expose non-configurable Executor wrappers.
    expose-unconfigurable-executor: false
```
