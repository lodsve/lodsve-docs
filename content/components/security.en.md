---
title: "Security Fundamentals"
kicker: Component
description: "Provide basic extension points and unified security exception handling for application access authentication and authorization."
---

## Component responsibilities

Security Component provides basic authentication/authorization extension entry and automatically configures security-related beans provided by dependent applications. It does not preset a complete user directory, role permissions database, OAuth2 processes, or multi-tenant policies; these parts are defined by the business system. Identity sources, credential lifecycles, interface access rules, and unauthenticated/no permission responses should be clarified during integration.

## Application extension

Through the bean access project's own identity verification and authorization judgment, the public path is configured according to the principle of least privilege, and key authentication failures and permission denial events are recorded. The order of security filters will affect request behavior. After adding rules, you need to cover paths such as anonymity, legal identity, expired credentials, and unauthorized access.

This component does not have a separate `@ConfigurationProperties` configuration class. For dependency entry and description, see [Security Starter](/starters/security/);Production configurations are managed by the Spring Security version and application security model used.
