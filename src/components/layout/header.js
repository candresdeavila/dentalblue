class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.menu = null;
    this.isDocumentClickBound = false;
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleBlogClick = this.handleBlogClick.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
<header class="w-full bg-white sticky top-0 z-50 shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">

      <!-- Logo -->
      <a href="/" data-link="home" class="flex items-center space-x-2">
        <img src="/assets/icons/logo_transparente.png" alt="Dental Blue Logo" class="h-10 w-10">
        <span class="font-bold text-xl text-gray-900">Dental Blue</span>
      </a>

      <!-- Navigation (desktop) -->
      <nav class="hidden md:flex space-x-8 text-gray-600 font-medium">
        <a href="/about" data-link="about" class="hover:text-blue-500">About Us</a>
        <a href="#services" data-section="services" class="hover:text-blue-500">Our Services</a>
        <a href="#team" data-section="team" class="hover:text-blue-500">Team</a>
        <a href="#blog" data-section="blog" class="hover:text-blue-500">Blog</a>
      </nav>

      <!-- Contact button -->
      <a
        href="https://wa.me/573232050782?text=Hola%20quiero%20agendar%20una%20cita%20en%20Dental%20Blue"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Contact Us
      </a>

      <!-- Mobile menu button -->
      <button id="menu-btn" class="md:hidden flex items-center text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile nav -->
  <div id="menu" class="hidden md:hidden px-4 pb-4 space-y-2 text-gray-600 font-medium bg-white">
    <a href="/about" data-link="about" class="block hover:text-blue-500">About Us</a>
    <a href="#services" data-section="services" class="block hover:text-blue-500">Our Services</a>
    <a href="#team" data-section="team" class="block hover:text-blue-500">Team</a>
    <a href="#blog" data-section="blog" class="block hover:text-blue-500">Blog</a>
    <a
      href="https://wa.me/573012641845?text=Hola%20quiero%20agendar%20una%20cita%20en%20Dental%20Blue"
      target="_blank"
      rel="noopener noreferrer"
      class="block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
    >
      Contact Us
    </a>
  </div>
</header>
`;

    this.menuButton = this.querySelector("#menu-btn");
    this.menu = this.querySelector("#menu");
    this.blogLinks = this.querySelectorAll('a[data-section="blog"]');

    this.blogLinks.forEach((link) => {
      link.addEventListener("click", this.handleBlogClick);
    });

    if (!this.isDocumentClickBound) {
      document.addEventListener("click", this.handleDocumentClick);
      this.isDocumentClickBound = true;
    }
  }

  disconnectedCallback() {
    if (this.blogLinks) {
      this.blogLinks.forEach((link) => {
        link.removeEventListener("click", this.handleBlogClick);
      });
    }

    if (this.isDocumentClickBound) {
      document.removeEventListener("click", this.handleDocumentClick);
      this.isDocumentClickBound = false;
    }
  }

  handleDocumentClick(event) {
    if (!this.menu) return;

    const isMenuOpen = !this.menu.classList.contains("hidden");
    if (isMenuOpen && !this.contains(event.target)) {
      this.menu.classList.add("hidden");
    }
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
