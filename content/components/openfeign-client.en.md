---
title: OpenFeign Client
kicker: Component
description: "Spring Cloud OpenFeign's automatic configuration access and Lodsve client extension."
---

## Capabilities and Integration

This module is connected to Spring Cloud OpenFeign through automatic configuration, and the application still uses `@FeignClient` to declare the client and Spring MVC annotations to describe HTTP requests. The client interface should be defined according to the remote service contract, the DTO remains stable, and the downstream is located through the service name or configured URL.

## Invoke governance

Configure a reasonable connection/read timeout for each remote call, and design a retry strategy based on call links, error mapping, and business idempotence. Retrying non-idempotent write requests may have repeated side effects; network timeouts do not necessarily mean that the server did not process the request. Feign, load balancing and service discovery properties follow the configuration of the selected Spring Cloud version. This component does not have a dedicated `lodsve.*` configuration class.

## Access and troubleshooting

Enable Feign Client scanning to check the client package and service discovery configuration. When the client is not created, the service cannot be parsed, or the response deserialization fails, the dependency compatibility, scan scope, registry, HTTP status code, and DTO fields are checked respectively. See dependency examples [OpenFeign Starter](/starters/openfeign/).
