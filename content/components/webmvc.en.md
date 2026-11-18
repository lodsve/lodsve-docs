---
title: "WebMVC"
kicker: Component
description: "Spring MVC parameter parsing, type conversion, request context, response wrapping and request debugging enhancements."
---

## Main extension points

The WebMVC Component includes custom parameter parsers, date and enumeration conversions, request context helpers, response wrapper handlers, unified exception conversions, and optional request debug logging. Extension points such as `@Bind`, `WebInput`, and `WebOutput` are used to carry the request/response mapping agreed by the project; after enabling, it is necessary to confirm that the controller signature matches the binding rules.

## Request and response

Separate HTTP DTOs from domain objects and clarify JSON, form and file input types. Response wrapping is not mandatory for all return values: special returns such as file downloads and streaming responses can be handled in the skip/mark manner provided by the component. Date and enumeration conversions rely on a unified format/encoding convention that should be consistent on the client and server.

## Configuration and troubleshooting

`lodsve.web-mvc.is-debug` controls debugging logs, `debug.exclude-url` and `exclude-address` are used to exclude paths and source addresses; the REST client timeout configuration unit is milliseconds. For complete annotation examples see [WebMVC configuration](/examples/configuration/webmvc/), see the access [WebMVC Starter](/starters/webmvc/). When parameter parsing fails, first check the content type, parameter annotation and converter registration.

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/webmvc/), see annotated examples [Configuration example of this module](/examples/configuration/webmvc/).
