import { getLang, setLang, t } from "../../i18n/i18n.js";

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.menu = null;
    this.isDocumentClickBound = false;
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleBlogClick = this.handleBlogClick.bind(this);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleLanguageToggle = this.handleLanguageToggle.bind(this);
  }

  connectedCallback() {
    this.render();
    window.addEventListener("langchange", this.handleLangChange);
  }

  disconnectedCallback() {
    if (this.blogLinks) {
      this.blogLinks.forEach((link) => {
        link.removeEventListener("click", this.handleBlogClick);
      });
    }

    if (this.menuButton) {
      this.menuButton.removeEventListener("click", this.handleMenuToggle);
    }

    if (this.languageToggleButtons) {
      this.languageToggleButtons.forEach((button) => {
        button.removeEventListener("click", this.handleLanguageToggle);
      });
    }

    if (this.isDocumentClickBound) {
      document.removeEventListener("click", this.handleDocumentClick);
      this.isDocumentClickBound = false;
    }

    window.removeEventListener("langchange", this.handleLangChange);
  }

  getLanguageToggleMarkup() {
    const lang = getLang();
    const activeClass = "font-bold text-blue-600";
    const inactiveClass = "text-gray-500 hover:text-blue-500";

    return `
      <div class="inline-flex items-center gap-1.5 md:text-xs lg:text-sm whitespace-nowrap" aria-label="${t("header.languageToggleAria")}">
        <button type="button" data-lang-toggle="es" aria-pressed="${lang === "es"}" class="${lang === "es" ? activeClass : inactiveClass}">
          ${t("language.es")}
        </button>
        <span class="text-gray-300">|</span>
        <button type="button" data-lang-toggle="en" aria-pressed="${lang === "en"}" class="${lang === "en" ? activeClass : inactiveClass}">
          ${t("language.en")}
        </button>
      </div>
    `;
  }

  render() {
    const whatsappMessage = encodeURIComponent(t("common.whatsappMessage"));

    this.innerHTML = `
<header class="w-full bg-white sticky top-0 z-50 shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16 gap-4 lg:gap-6">
      <a href="/" data-link="home" class="flex items-center space-x-2">
        <img src="/assets/icons/logo_transparente.webp" alt="${t("common.dentalBlueLogoAlt")}" loading="lazy" decoding="async" class="h-10 w-10">
        <span class="font-bold text-xl text-gray-900">Dental Blue</span>
      </a>

      <nav class="hidden md:flex md:flex-1 md:justify-center md:gap-4 lg:gap-8 text-gray-600 font-medium md:text-sm lg:text-base">
        <a href="/about" data-link="about" class="hover:text-blue-500 whitespace-nowrap">${t("header.about")}</a>
        <a href="#services" data-section="services" class="hover:text-blue-500 whitespace-nowrap">${t("header.services")}</a>
        <a href="#team" data-section="team" class="hover:text-blue-500 whitespace-nowrap">${t("header.team")}</a>
        <a href="#blog" data-section="blog" class="hover:text-blue-500 whitespace-nowrap">${t("header.blog")}</a>
      </nav>

      <div class="hidden md:flex items-center md:gap-2 lg:gap-4 shrink-0">
        <div class="flex items-center">
          ${this.getLanguageToggleMarkup()}
        </div>

        <a
          href="https://wa.me/573232050782?text=${whatsappMessage}"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-block bg-blue-600 text-white md:px-4 lg:px-5 py-2 rounded-xl hover:bg-blue-700 transition md:text-sm lg:text-base whitespace-nowrap"
        >
          ${t("header.contact")}
        </a>
      </div>

      <button id="menu-btn" aria-label="${t("header.closeMenuAria")}" class="md:hidden flex items-center text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  <div id="menu" class="hidden md:hidden px-4 pb-4 space-y-2 text-gray-600 font-medium bg-white">
    <a href="/about" data-link="about" class="block hover:text-blue-500">${t("header.about")}</a>
    <a href="#services" data-section="services" class="block hover:text-blue-500">${t("header.services")}</a>
    <a href="#team" data-section="team" class="block hover:text-blue-500">${t("header.team")}</a>
    <a href="#blog" data-section="blog" class="block hover:text-blue-500">${t("header.blog")}</a>
    <a
      href="https://wa.me/573232050782?text=${whatsappMessage}"
      target="_blank"
      rel="noopener noreferrer"
      class="block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
    >
      ${t("header.contact")}
    </a>
    <div class="pt-2">
      ${this.getLanguageToggleMarkup()}
    </div>
  </div>
</header>
`;

    this.menuButton = this.querySelector("#menu-btn");
    this.menu = this.querySelector("#menu");
    this.blogLinks = this.querySelectorAll('a[data-section="blog"]');
    this.languageToggleButtons = this.querySelectorAll("[data-lang-toggle]");

    this.blogLinks.forEach((link) => {
      link.addEventListener("click", this.handleBlogClick);
    });

    this.menuButton?.addEventListener("click", this.handleMenuToggle);
    this.languageToggleButtons.forEach((button) => {
      button.addEventListener("click", this.handleLanguageToggle);
    });

    if (!this.isDocumentClickBound) {
      document.addEventListener("click", this.handleDocumentClick);
      this.isDocumentClickBound = true;
    }
  }

  handleLangChange() {
    this.render();
  }

  handleDocumentClick(event) {
    if (!this.menu) return;

    const isMenuOpen = !this.menu.classList.contains("hidden");
    if (isMenuOpen && !this.contains(event.target)) {
      this.menu.classList.add("hidden");
    }
  }

  handleMenuToggle() {
    this.menu?.classList.toggle("hidden");
  }

  handleLanguageToggle(event) {
    event.preventDefault();
    event.stopPropagation();

    const nextLang = event.currentTarget?.dataset?.langToggle;
    if (!nextLang) return;
    if (getLang() === nextLang) return;

    setLang(nextLang);
    document.documentElement.lang = nextLang;
    window.dispatchEvent(new CustomEvent("langchange"));
  }

  handleBlogClick(event) {
    const pathname = window.location.pathname;
    const isHomePath = pathname === "/" || pathname === "/index.html";
    const isAboutView = Boolean(
      document.querySelector('hero-section[variant="about"]'),
    );
    const blogSection = document.getElementById("blog");

    event.preventDefault();
    event.stopPropagation();

    if (isHomePath && !isAboutView && blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.href = "/#blog";
  }
}

customElements.define("app-header", AppHeader);
