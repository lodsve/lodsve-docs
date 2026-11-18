---
title: "Development Guide"
description: "Local build, coding style and documentation contribution conventions."
weight: 10
---

The main project uses Maven Wrapper, JDK 21, Checkstyle and license header checking. Perform tests for affected modules before committing code, and keep Java files indented using UTF-8, LF, and 4 spaces.

The documentation station uses Hugo:

```bash
hugo server -D
hugo --minify
```

When adding a new component page, keep the order of "Problem Description → Dependencies → Configuration → Java Example → Troubleshooting Suggestions → Sample Project".
