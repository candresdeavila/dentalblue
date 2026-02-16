import "./style.css";

// Layout
import { header } from "./components/layout/header.js";
import { initNavbar } from "./components/layout/navbar.js";
import { Footer } from "./components/layout/footer.js";

// UI
import "./components/ui/whatsappButton.js";

// Home page
import { renderWelcome } from "./pages/home/welcome.js";
import { createServicesSection } from "./pages/home/services.js";
import { createConfidenceSection } from "./pages/home/confidence.js";
import "./components/sections/team.js";
import { createBlogSection } from "./pages/home/blog.js";
import { renderPremiun } from "./pages/home/premiunTreatment.js";

// About page
import { renderAboutUs } from "./pages/about/about.js";

const root = document.querySelector("#app");

/* ===============================
   PAGE RENDERER
================================ */
function renderPage(contentFn) {
  root.innerHTML = "";
  root.appendChild(contentFn());
}

/* ===============================
   HOME PAGE
================================ */
function renderHomePage() {
  const fragment = document.createDocumentFragment();
  const team = document.createElement("team-section");

  fragment.append(
    renderWelcome(),
    createServicesSection(),
    createConfidenceSection(),
    team,
    createBlogSection(),
    renderPremiun()
  );

  return fragment;
}

/* ===============================
   APP INIT
================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Header & Navbar
  header();
  initNavbar({
    renderPage,
    renderHomePage,
    renderAboutUs,
  });

  // Initial page
  renderPage(renderHomePage);

  // Footer (global)
  const footerContainer = document.createElement("div");
  footerContainer.innerHTML = Footer();
  document.body.appendChild(footerContainer.firstElementChild);

  // WhatsApp floating button (global)
  document.body.appendChild(document.createElement("whatsapp-button"));
});
