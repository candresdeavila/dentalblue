export function initNavbar({ renderPage, renderHomePage, renderAboutUs }) {
  const btn = document.querySelector("#menu-btn");
  const menu = document.querySelector("#menu");
  const TOP_NAVIGATION_DELAY_MS = 300;

  const navigateWithTransition = (update) => {
    if (typeof document.startViewTransition === "function") {
      document.startViewTransition(() => {
        update();
      });
      return;
    }

    update();
  };

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return false;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  };

  const isAboutViewActive = () => {
    return Boolean(document.querySelector('hero-section[variant="about"]'));
  };

  const navigateToPage = (page) => {
    if (page === "home") {
      navigateWithTransition(() => {
        renderPage(renderHomePage);
      });
    }

    if (page === "about") {
      navigateWithTransition(() => {
        renderPage(renderAboutUs);
      });
    }
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
      if (sectionId === "blog") {
        return;
      }

      if (scrollToSection(sectionId)) return;

      navigateWithTransition(() => {
        renderPage(renderHomePage);
      });
      requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
      return;
    }

    const page = link.dataset.link;
    if (page === "home" || page === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.setTimeout(() => {
        navigateToPage(page);
      }, TOP_NAVIGATION_DELAY_MS);
    }
  });
}
