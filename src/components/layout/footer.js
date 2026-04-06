import { getLang, t } from "../../i18n/i18n.js";

class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.handleBlogClick = this.handleBlogClick.bind(this);
    this.handleLangChange = this.handleLangChange.bind(this);
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

    window.removeEventListener("langchange", this.handleLangChange);
  }

  render() {
    const whatsappMessage = encodeURIComponent(t("common.whatsappMessage"));
    this.dataset.lang = getLang();

    this.innerHTML = `
    <footer class="bg-white text-gray-700 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div class="flex items-center mb-4">
             <a href="/" data-link="home" class="flex items-center space-x-2">
              <img src="/assets/icons/logo_transparente.webp" alt="${t("common.dentalBlueLogoAlt")}" loading="lazy" decoding="async" class="h-10 w-10">
              <span class="font-bold text-xl text-gray-900">Dental Blue</span>
             </a>
          </div>
          <p class="text-sm text-gray-600 mb-2">
            <span class="font-semibold text-[#3B68FF]">P:</span> (+57) 323 205 0782
          </p>
          <p class="text-sm text-gray-600">
            <span class="font-semibold text-[#3B68FF]">E:</span> info@dentalbluesoledad.com
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-4">${t("footer.clinicTitle")}</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/about" data-link="about" class="hover:text-[#3B68FF]">${t("header.about")}</a></li>
            <li><a href="#services" data-section="services" class="hover:text-[#3B68FF]">${t("header.services")}</a></li>
            <li><a href="#team" data-section="team" class="hover:text-[#3B68FF]">${t("header.team")}</a></li>
            <li><a href="#blog" data-section="blog" class="hover:text-[#3B68FF]">${t("header.blog")}</a></li>
            <li><a href="https://wa.me/573232050782?text=${whatsappMessage}" class="hover:text-[#3B68FF]" target="_blank" rel="noopener noreferrer">${t("header.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-4">${t("footer.helpfulLinks")}</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#3B68FF]">${t("footer.clinics")}</a></li>
            <li><a href="#" class="hover:text-[#3B68FF]">${t("footer.specialOffers")}</a></li>
            <li><a href="#" class="hover:text-[#3B68FF]">${t("footer.careers")}</a></li>
            <li><a href="#" class="hover:text-[#3B68FF]">${t("footer.complaintsPolicy")}</a></li>
            <li><a href="#" class="hover:text-[#3B68FF]">${t("footer.termsConditions")}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-4">${t("footer.openingTimes")}</h4>
          <ul class="space-y-2 text-sm">
            <li><span class="text-[#3B68FF] font-medium">${t("footer.mondayFriday")}</span> 08:00am - 05:00pm</li>
            <li><span class="text-[#3B68FF] font-medium">${t("footer.saturday")}</span> 08:00am - 12:00pm</li>
            <li><span class="text-[#3B68FF] font-medium">${t("footer.sunday")}</span> ${t("footer.closed")}</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-200 mt-12 pt-8">
        <div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-500">
            ${t("footer.copyright")}
          </p>

          <div class="flex space-x-4 md:mr-20 lg:mr-0">
            <a href="https://www.tiktok.com/@dentalblue_?_r=1&_t=ZS-94kGNRqsJyz" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3B68FF] hover:text-white transition">
              <img src="/assets/logos/tik-tok.webp" alt="${t("footer.tiktokAlt")}" loading="lazy" decoding="async" class="h-10 w-10">
              <i class="fab fa-x-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/dra.angelicacervantes?igsh=MTZscHRpMWJiYWlz" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3B68FF] hover:text-white transition">
              <img src="/assets/logos/instagram.webp" alt="${t("footer.instagramAlt")}" loading="lazy" decoding="async" class="h-10 w-10">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/dental-blue-col" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3B68FF] hover:text-white transition">
              <img src="/assets/logos/linkedin.webp" alt="${t("footer.linkedinAlt")}" loading="lazy" decoding="async" class="h-10 w-10">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;

    this.blogLinks = this.querySelectorAll('a[data-section="blog"]');
    this.blogLinks.forEach((link) => {
      link.addEventListener("click", this.handleBlogClick);
    });
  }

  handleLangChange() {
    this.render();
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

customElements.define("app-footer", AppFooter);
