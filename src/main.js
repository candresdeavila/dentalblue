import "./style.css";
import { getLang } from "./i18n/i18n.js";

// Layout
import "./components/layout/header.js";
import { initNavbar } from "./components/layout/navbar.js";
import "./components/layout/footer.js";

// UI
import "./components/ui/whatsappButton.js";
import "./components/ui/chat-widget.js";
import "./components/sections/hero.js";

// Home page
import { renderWelcome } from "./pages/home/welcome.js";
import { createExpandableServicesSection } from "./components/sections/servicesExpandable.js";
import { createConfidenceSection } from "./pages/home/confidence.js";
import "./components/sections/team.js";
import { createBlogSection } from "./pages/home/blog.js";
import { renderPremiun } from "./pages/home/premiunTreatment.js";

// About page
import { renderAboutUs } from "./pages/about/about.js";

const root = document.querySelector("#app");
let currentPageRenderer = renderHomePage;

/* ===============================
   PAGE RENDERER
================================ */
function renderPage(contentFn) {
  currentPageRenderer = contentFn;
  root.innerHTML = "";
  root.appendChild(contentFn());
}

function syncDocumentLanguage() {
  document.documentElement.lang = getLang();
}

/* ===============================
   HOME PAGE
================================ */
function renderHomePage() {
  const fragment = document.createDocumentFragment();
  const teamWrapper = document.createElement("div");
  teamWrapper.id = "team";
  teamWrapper.appendChild(document.createElement("team-section"));

  fragment.append(
    renderWelcome(),
    createExpandableServicesSection({ variant: "home" }),
    createConfidenceSection(),
    teamWrapper,
    createBlogSection(),
    renderPremiun(),
  );

  return fragment;
}

function handleHashNavigation() {
  if (window.location.hash !== "#blog") return;

  const isAboutView = Boolean(
    document.querySelector('hero-section[variant="about"]'),
  );
  if (isAboutView || !document.getElementById("blog")) {
    renderPage(renderHomePage);
  }

  requestAnimationFrame(() => {
    document.getElementById("blog")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

/* ===============================
   APP INIT
================================ */
document.addEventListener("DOMContentLoaded", () => {
  syncDocumentLanguage();

  // Header & Navbar
  document.body.insertAdjacentElement(
    "afterbegin",
    document.createElement("app-header"),
  );
  initNavbar({
    renderPage,
    renderHomePage,
    renderAboutUs,
  });

  // Initial page
  renderPage(renderHomePage);
  handleHashNavigation();

  window.addEventListener("hashchange", handleHashNavigation);
  window.addEventListener("langchange", () => {
    syncDocumentLanguage();
    renderPage(currentPageRenderer);
    handleHashNavigation();
  });

  // Footer (global)
  document.body.appendChild(document.createElement("app-footer"));

  // WhatsApp floating button (global)
  document.body.appendChild(document.createElement("whatsapp-button"));
});
