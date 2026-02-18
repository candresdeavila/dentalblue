export function initNavbar({ renderPage, renderHomePage, renderAboutUs }) {
  const btn = document.querySelector("#menu-btn");
  const menu = document.querySelector("#menu");
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return false;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  };

  // Toggle menú mobile
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Navegación SPA
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link], [data-section]");
    if (!link) return;

    e.preventDefault();

    menu.classList.add("hidden"); // cerrar menú mobile

    const sectionId = link.dataset.section;
    if (sectionId) {
      if (scrollToSection(sectionId)) return;

      renderPage(renderHomePage);
      requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
      return;
    }

    const page = link.dataset.link;

    if (page === "home") {
      renderPage(renderHomePage);
    }

    if (page === "about") {
      renderPage(renderAboutUs);
    }
  });
}
