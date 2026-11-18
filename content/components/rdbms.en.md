---
title: "RDBMS data source"
kicker: Component
description: "Multiple data source creation, default data source selection, runtime routing and connection pool adaptation."
---

## Data source life cycle

The RDBMS creates the data source based on the named configuration in `lodsve.rdbms.data-source` and determines the default entry based on `default-data-source-name`; when not specified, the first entry in the configuration map is used. Each item contains JDBC driver, URL, account password and `pool-setting`. The connection pool type supports Hikari and Druid.

## Data source switching

The component provides `@SwitchDataSource`, dynamic switching AOP and thread context Holder. Routing must occur before obtaining the connection; switching after the transaction is started usually cannot replace the already bound connection. Asynchronous tasks do not automatically carry thread context, and you need to specify the routing strategy yourself. The default data source should still satisfy the fallback for unlabeled calls.

## Connection pooling and monitoring

The connection pool setting takes effect in the unit agreed upon by the field name; some properties in `pool-setting` are only applicable to specific connection pools. Filters such as Druid monitoring Servlet, Web Filter and Stat/Wall all have independent enabling conditions. For configuration reference, see [RDBMS and Druid examples](/examples/configuration/rdbms/). Do not expose uncertified monitoring pages on the public network.

If the data source creation fails, first check the driver dependencies, JDBC URL, pool type and placeholder; if the switching is invalid, confirm that the switching aspect takes effect, the method call goes through the proxy and occurs before the transaction. For application configuration, see [RDBMS Starter](/starters/rdbms/).

Please view the complete configuration items [Configuration reference for this module](/reference/configuration/rdbms/), see annotated examples [Configuration example of this module](/examples/configuration/rdbms/).
