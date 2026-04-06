import { animate, stagger } from "motion";
import styles from "../../style.css?inline";
import { t } from "../../i18n/i18n.js";

class HeroSection extends HTMLElement {
  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleLangChange = this.handleLangChange.bind(this);
  }

  connectedCallback() {
    this.render({ animateEntrance: true });
    window.addEventListener("langchange", this.handleLangChange);
  }

  disconnectedCallback() {
    window.removeEventListener("langchange", this.handleLangChange);
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render({ animateEntrance = false } = {}) {
    const variant = this.getAttribute("variant") || "home";
    const markup = variant === "about" ? this.renderAbout() : this.renderHome();

    this.shadowRoot.innerHTML = `
      <style>
        ${styles}

        h1,
        p {
          opacity: 0;
          transform: translateY(24px);
        }
      </style>
      ${markup}
    `;

    if (!animateEntrance) return;

    const title = this.shadowRoot.querySelector("h1");
    const paragraph = this.shadowRoot.querySelector("p");

    if (!title || !paragraph) return;

    animate(
      [title, paragraph],
      { opacity: [0, 1], y: [24, 0] },
      {
        duration: 0.7,
        ease: "easeOut",
        delay: stagger(0.15),
      },
    );
  }

  handleLangChange() {
    this.render();
  }

  renderHome() {
    return `
      <section class="bg-white pt-5" aria-label="${t("hero.home.ariaLabel")}">
        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-16 lg:items-start pt-8">
          <div class="relative h-full">
            <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              ${t("hero.home.titleIntro")} <br>Dental <span class="text-blue-600">Blue</span>
            </h1>
            <p class="mt-4 text-lg text-gray-600 max-w-xl">
              ${t("hero.home.paragraph")}
            </p>

            <div class="mt-8 flex items-center space-x-4">
              <a href="#services" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                ${t("hero.home.primaryCta")}
              </a>
              <a href="#contact" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
                ${t("hero.home.secondaryCta")}
              </a>
            </div>

            <div class="mt-12 w-72 relative z-10 md:hidden lg:block">
              <div class="img-card img-card--small h-72">
                <img src="/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp" alt="${t("common.patientAlt")}" class="object-cover" style="object-position: 50% 20%;">
              </div>
            </div>
          </div> 

          <div class="flex justify-center lg:justify-end relative mt-4 h-full md:hidden lg:flex">
            <div class="w-80 lg:w-[520px] img-card img-card--large h-[600px] relative">
              <img src="/assets/images/hero/dentista-haciendo-un-chequeo-al-paciente.webp" alt="${t("common.dentistAlt")}" class="object-cover" style="object-position: 50% 30%;">
              <div class="absolute bottom-6 right-6 z-10">
                <div class="badge">${t("common.yearsExperience")}</div>
              </div>
            </div>
          </div>

          <div class="hidden md:flex lg:hidden w-full items-center justify-center gap-4 mt-8">
            <div class="w-[48%] img-card img-card--small h-[280px] max-h-[280px]">
              <img src="/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp" alt="${t("common.patientAlt")}" class="object-cover" style="object-position: 50% 20%;">
            </div>
            <div class="w-[48%] img-card img-card--large h-[280px] max-h-[280px] relative">
              <img src="/assets/images/hero/dentista-haciendo-un-chequeo-al-paciente.webp" alt="${t("common.dentistAlt")}" class="object-cover" style="object-position: 50% 30%;">
              <div class="absolute bottom-4 right-4 z-10">
                <div class="badge">${t("common.yearsExperience")}</div>
              </div>
            </div>
          </div>
        </div>
      <!--
        <div class="mt-24 max-w-5xl mx-auto px-6">
          <div class="flex justify-center items-center flex-wrap grayscale opacity-60 gap-x-30">
            <img src="/assets/logos/colgate-logo-1.svg" alt="Colgate" class="h-14 w-14">
            <img src="/assets/logos/oral-b.svg" alt="Oral-B" class="h-14 w-14">
            <img src="/assets/logos/polanco.png" alt="Oral-B" class="h-14 w-19">
            <img src="/assets/logos/Logo-Adental.png" alt="Oral-B" class="h-6 w-14">
          </div>
        </div>
      -->
      </section>
    `;
  }

  renderAbout() {
    return `
      <section class="bg-white" aria-label="${t("hero.about.ariaLabel")}">
        <div class="relative py-20 md:py-28 overflow-hidden bg-white">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span class="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">${t("hero.about.eyebrow")}</span>
                <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  ${t("hero.about.titlePrefix")} <span class="text-blue-600">${t("hero.about.titleHighlight")}</span>
                </h1>
                <p class="text-lg text-gray-600 max-w-xl mb-8">
                  ${t("hero.about.paragraph")}
                </p>
                <div class="flex flex-wrap gap-4">
                  <a href="#team" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    ${t("hero.about.primaryCta")}
                  </a>
                  <a href="#contact" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
                    ${t("hero.about.secondaryCta")}
                  </a>
                </div>
              </div>
              <div class="flex justify-center lg:justify-end relative">
                <div class="w-80 lg:w-[520px] img-card img-card--large h-[500px] relative">
                  <img src="/assets/images/about/dental-clinic-interior.webp" alt="${t("common.aboutClinicAlt")}" class="object-cover">
                  <div class="absolute bottom-6 right-6 z-10">
                    <div class="badge">${t("common.yearsExperience")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

if (!customElements.get("hero-section")) {
  customElements.define("hero-section", HeroSection);
}
