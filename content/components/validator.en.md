---
title: "Parameter Validation"
kicker: Component
description: "Customize POJO validation annotations, validation handlers and unified failure exceptions."
---

## Verify model

The component marks the object that needs to be verified through `@ValidateEntity` and maps the annotation to the corresponding `ValidateHandler`. Built-in annotations cover common rules such as mobile phone number, email, ID card, number, Chinese, URL, IP, postal code, QQ, landline, password, regular, non-empty and range. Validation failures are handled by `VerifyFailedException` and exception handlers.

## Usage suggestions

Put input constraints such as format and required fields on the DTO; business rules that cross fields, depend on the database, or involve state changes are placed on the application service layer. The error message should be stable text understandable by the user, and the web layer should uniformly convert the response without returning the internal stack.

You can add a handler for new annotations according to the existing `ValidateHandler` mode, and verify legal values, illegal values, null value handling and error messages. Validator does not have exclusive YAML configuration items; see Starter usage [Validator Starter](/starters/validator/).
