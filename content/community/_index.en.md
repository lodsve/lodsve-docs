---
title: "Community and Contribution"
description: "Feedback issues, improve code and improve documentation through the project repository."
---

## Find the corresponding warehouse

| Project | Source code | Report an issue |
| --- | --- | --- |
| Lodsve Boot | [warehouse](https://github.com/lodsve/lodsve-boot) | [Issues](https://github.com/lodsve/lodsve-boot/issues) |
| Maven Plugins | [warehouse](https://github.com/lodsve/lodsve-maven-plugins) | [Issues](https://github.com/lodsve/lodsve-maven-plugins/issues) |
| Maven Archetype | [warehouse](https://github.com/lodsve/lodsve-maven-archetype) | [Issues](https://github.com/lodsve/lodsve-maven-archetype/issues) |
| Gradle Archetype Plugin | [warehouse](https://github.com/lodsve/lodsve-gradle-archetype-plugin) | [Issues](https://github.com/lodsve/lodsve-gradle-archetype-plugin/issues) |
| Documentation station | [warehouse](https://github.com/lodsve/lodsve-docs) | [Issues](https://github.com/lodsve/lodsve-docs/issues) |

## Feedback a reproducible problem

Please provide project name and version, JDK and Maven/Gradle versions, minimum configuration, execution command, expected behavior and actual logs. For scaffolding issues, please provide the template version, generation parameters, and error generated files; remove passwords, tokens, and internal addresses from the logs.

## improvement project

First read the corresponding project README and contribution agreement. The scope of the repair focuses on a specific problem, describes the behavior changes and verification methods, and submits it to the corresponding warehouse through Pull Request.

## Contribute documentation

Documentation uses Markdown and Hugo. The "Edit this page" link on the page can locate the source file, and the default branch of the document warehouse is `master`.

```bash
hugo server -D
hugo --minify
```

New content should be traceable back to the project README, source code, or release metadata; make it clear which version the example is applicable to. After merging or pushing to `master`, GitHub Actions automatically builds static HTML and deploys to GitHub Pages.
