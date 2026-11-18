---
title: "Open source projects"
description: "From application capabilities to engineering scaffolding, choose Lodsve projects according to your development scenarios."
---

Lodsve Boot provides application components, Maven and Gradle scaffolding are responsible for the initialization project, and Maven plugin extension source code generation and resource packaging. Each project is maintained independently. Please read the corresponding version and environment instructions before using it.

## Technical architecture

<figure class="architecture-figure">
  <button class="architecture-preview" type="button" data-architecture-image data-architecture-title="Overall structure of Lodsve project" aria-haspopup="dialog" aria-label="Zoom in to view the technical architecture diagram of each Lodsve project">
    <img src="/images/lodsve-architecture.en.svg" alt="Technical architecture and collaborative relationships of Lodsve projects">
  </button>
  <figcaption>Click on the image to view and zoom in the overlay.</figcaption>
</figure>

The solid lines in the figure represent project generation, runtime dependencies, and component assembly; the dotted lines represent version management relationships. The image will fully fit the width of the page, and you can zoom in to see details in the overlay after clicking it.

Maven Archetype provides 7 Lodsve Boot Maven project templates; the Gradle Archetype Plugin includes the MongoDB Boot reference template (located in the plugin source code repository and needs to be copied locally), and also supports reading custom local templates. Applications select runtime capabilities through the Starter, which can assemble named data source routes. Maven Plugins extends the Maven source code generation and resource packaging phase, and the Boot source code build is currently configured with the JavaTemplate plugin. The documentation station uniformly introduces each project and publishes it to GitHub Pages.

The internal module layering of Lodsve Boot is shown in [Architecture and Modules](/concepts/architecture/).
