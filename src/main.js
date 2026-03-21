import "./style.css";

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
  const teamWrapper = document.createElement("div");
  teamWrapper.id = "team";
  teamWrapper.appendChild(document.createElement("team-section"));

  fragment.append(
    renderWelcome(),
    createExpandableServicesSection({ variant: "home" }),
    createConfidenceSection(),
    teamWrapper,
    createBlogSection(),
    renderPremiun()
  );

  return fragment;
}

function handleHashNavigation() {
  if (window.location.hash !== "#blog") return;

  const isAboutView = Boolean(document.querySelector('hero-section[variant="about"]'));
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
  // Header & Navbar
  document.body.insertAdjacentElement(
    "afterbegin",
    document.createElement("app-header")
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

  // Footer (global)
  document.body.appendChild(document.createElement("app-footer"));

  // WhatsApp floating button (global)
  document.body.appendChild(document.createElement("whatsapp-button"));
});
