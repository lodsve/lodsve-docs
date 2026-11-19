document.querySelectorAll("[data-nav-toggle]").forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  panel.classList.add("nav-collapsed");

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("nav-collapsed", expanded);
  });
});
document.documentElement.classList.add("nav-ready");

(() => {
  const switchers = document.querySelectorAll("[data-language-switch]");
  if (!switchers.length) return;

  function closeSwitchers(except) {
    switchers.forEach((switcher) => {
      if (switcher !== except) switcher.open = false;
    });
  }

  switchers.forEach((switcher) => {
    switcher.addEventListener("toggle", () => {
      if (switcher.open) closeSwitchers(switcher);
    });
  });

  document.addEventListener("click", (event) => {
    switchers.forEach((switcher) => {
      if (switcher.open && !switcher.contains(event.target)) switcher.open = false;
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSwitchers();
  });
})();

(() => {
  const triggers = document.querySelectorAll("[data-architecture-image]");
  const viewer = document.querySelector("[data-architecture-viewer]");

  if (!triggers.length || !viewer) return;

  const image = viewer.querySelector("[data-architecture-viewer-image]");
  const stage = viewer.querySelector("[data-architecture-viewer-stage]");
  const title = viewer.querySelector("[data-architecture-viewer-title]");
  let fitScale = 1;
  let zoom = 1;

  function renderImage() {
    if (!image.naturalWidth || !image.naturalHeight) return;

    const width = Math.max(1, stage.clientWidth - 24);
    const height = Math.max(1, stage.clientHeight - 24);
    fitScale = Math.min(width / image.naturalWidth, height / image.naturalHeight);
    image.style.width = `${Math.round(image.naturalWidth * fitScale * zoom)}px`;
  }

  function openViewer(trigger) {
    const preview = trigger.querySelector("img");
    image.src = preview.currentSrc || preview.src;
    image.alt = preview.alt;
    title.textContent = trigger.dataset.architectureTitle || preview.alt;
    zoom = 1;

    if (!viewer.open) viewer.showModal();

    if (image.complete && image.naturalWidth) {
      requestAnimationFrame(renderImage);
    } else {
      image.addEventListener("load", renderImage, { once: true });
    }
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openViewer(trigger));
  });

  viewer.querySelector("[data-architecture-close]").addEventListener("click", () => viewer.close());
  viewer.querySelector("[data-architecture-fit]").addEventListener("click", () => {
    zoom = 1;
    renderImage();
    stage.scrollTo({ top: 0, left: 0 });
  });
  viewer.querySelector("[data-architecture-zoom-in]").addEventListener("click", () => {
    zoom = Math.min(4, zoom * 1.25);
    renderImage();
  });
  viewer.querySelector("[data-architecture-zoom-out]").addEventListener("click", () => {
    zoom = Math.max(0.5, zoom / 1.25);
    renderImage();
  });
  viewer.addEventListener("click", (event) => {
    if (event.target === viewer) viewer.close();
  });
  window.addEventListener("resize", () => {
    if (viewer.open) renderImage();
  });
})();
