import './style.css'
import { header } from "./components/header.js";
import { initNavbar } from "./components/navbar.js";
import { renderWelcome } from "./components/welcome.js";
import { createServicesSection } from "./components/services.js";


document.addEventListener("DOMContentLoaded", () => {
  header();
  initNavbar();
  
  
  const root = document.querySelector("#app"); // div contenedor en index.html
  root.appendChild(renderWelcome());
  root.appendChild(createServicesSection());
});