export function initNavbar({ renderPage, renderHomePage, renderAboutUs }) {
  const btn = document.querySelector("#menu-btn");
  const menu = document.querySelector("#menu");

  // Toggle menú mobile
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Navegación SPA
  document.addEventListener("click", (e) => {
    const link = e.target.closest("[data-link]");
    if (!link) return;

    e.preventDefault();

    const page = link.dataset.link;

    menu.classList.add("hidden"); // cerrar menú mobile

    if (page === "home") {
      renderPage(renderHomePage);
    }

    if (page === "about") {
      renderPage(renderAboutUs);
    }
  });
}
