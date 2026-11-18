---
title: "Release Notes"
description: "Basic process of version release and document synchronization."
weight: 20
---

Before publishing, confirm that `revision` of the root POM is not a Snapshot, complete Maven Verify and Javadoc checks, and then publish to Maven Central. The document home page, version table, dependency examples and compatibility instructions need to be updated simultaneously.

The deployment method of the document site is determined by the hosting platform. Hugo's `public/` can be used as a static site publishing directory.
