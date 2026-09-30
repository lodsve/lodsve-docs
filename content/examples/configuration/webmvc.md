---
title: WebMVC 示例
description: WebMVC YAML 配置示例。
---

```yaml
lodsve:
  web-mvc:
    # 是否开启 Web 请求调试日志；生产环境默认关闭。
    is-debug: false
    debug:
      exclude-url: [/actuator/health]
      exclude-address: []
    rest:
      # REST 客户端连接和读取超时，单位毫秒。
      connect-timeout: 15000
      read-timeout: 15000
```
