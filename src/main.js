import './style.css'
import { header } from "./components/header.js";
import { initNavbar } from "./components/navbar.js";
import { renderWelcome } from "./components/welcome.js";
import { createServicesSection } from "./components/services.js";
import { createConfidenceSection } from "./components/confidence.js";
import { createTeamSection } from "./components/team.js";


document.addEventListener("DOMContentLoaded", () => {
  header();
  initNavbar();
  
  
  const root = document.querySelector("#app"); // div contenedor en index.html
  root.appendChild(renderWelcome());
  root.appendChild(createServicesSection());
  root.appendChild(createConfidenceSection());
  root.appendChild(createTeamSection());
});