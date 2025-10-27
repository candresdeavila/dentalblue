import './style.css'
import { header } from "./components/header.js";
import { initNavbar } from "./components/navbar.js";
import { renderWelcome } from "./components/welcome.js";
import { createServicesSection } from "./components/services.js";
import { createConfidenceSection } from "./components/confidence.js";
import { renderTeam } from "./components/team.js";
import { createBlogSection } from "./components/blog.js";
import { renderPremiun } from "./components/premiunTreatment.js";
import { Footer } from "./components/footer.js";


document.addEventListener("DOMContentLoaded", () => {
  header();
  initNavbar();
  const root = document.querySelector("#app"); // div contenedor en index.html
  root.appendChild(renderWelcome());
  root.appendChild(createServicesSection());
  root.appendChild(createConfidenceSection());
  root.appendChild(renderTeam());
  root.appendChild(createBlogSection());
  root.appendChild(renderPremiun());
  
  // Crear un contenedor para el footer y agregarlo de manera segura
  const footerContainer = document.createElement('div');
  footerContainer.innerHTML = Footer();
  root.appendChild(footerContainer.firstElementChild);
});