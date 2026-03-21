class AppFooter extends HTMLElement {
  constructor() {
    super();
    this.handleBlogClick = this.handleBlogClick.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="bg-white text-gray-700 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <!-- Columna 1: Logo + Contacto -->
        <div>
          <div class="flex items-center mb-4">
            <!-- Logo -->
             <a href="/" data-link="home" class="flex items-center space-x-2">
              <img src="/assets/icons/logo_transparente.png" alt="Dental Blue Logo" class="h-10 w-10">
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

        <!-- Columna 2: Smile Bright Clinic -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Dental Blue Clinic</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/about" data-link="about" class="hover:text-[#3B68FF]">About Us</a></li>
            <li><a href="#services" data-section="services" class="hover:text-[#3B68FF]">Our Services</a></li>
            <li><a href="#team" data-section="team" class="hover:text-[#3B68FF]">Team</a></li>
            <li><a href="#blog" data-section="blog" class="hover:text-[#3B68FF]">Blog</a></li>
            <li><a href="https://wa.me/573232050782?text=Hola%20quiero%20agendar%20una%20cita%20en%20Dental%20Blue" class="hover:text-[#3B68FF]" target="_blank"
        rel="noopener noreferrer">Contact Us</a></li>
          </ul>
        </div>

        <!-- Columna 3: Helpful Links -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Helpful Links</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-[#3B68FF]">Clinics</a></li>
            <li><a href="#" class="hover:text-[#3B68FF]">Special Offers</a></li>
            <li><a href="#" class="hover:text-[#3B68FF]">Careers</a></li>
            <li><a href="#" class="hover:text-[#3B68FF]">Complaints Policy</a></li>
            <li><a href="#" class="hover:text-[#3B68FF]">Terms & Conditions</a></li>
          </ul>
        </div>

        <!-- Columna 4: Opening Times -->
        <div>
          <h4 class="text-lg font-semibold text-gray-900 mb-4">Opening Times</h4>
          <ul class="space-y-2 text-sm">
            <li><span class="text-[#3B68FF] font-medium">Monday – Friday:</span> 08:00am – 05:00pm</li>
            <li><span class="text-[#3B68FF] font-medium">Saturday:</span> 08:00am – 12:00pm</li>
            <li><span class="text-[#3B68FF] font-medium">Sunday:</span> Closed</li>
          </ul>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-gray-200 mt-12 pt-8">
        <div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          <p class="text-sm text-gray-500">
            © 2025 Dental Blue. All Rights Reserved.
          </p>

          <!-- Redes sociales -->
          <div class="flex space-x-4">
           <!-- <a href="#" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3B68FF] hover:text-white transition">
              <i class="fab fa-facebook-f"></i>
            </a>-->
            <a href="https://www.tiktok.com/@dentalblue_?_r=1&_t=ZS-94kGNRqsJyz" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3B68FF] hover:text-white transition">
              <img src="/assets/logos/tik-tok.png" alt="Dental Blue TikTok Logo" class="h-10 w-10">
              <i class="fab fa-x-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/dra.angelicacervantes?igsh=MTZscHRpMWJiYWlz" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3B68FF] hover:text-white transition">
              <img src="/assets/logos/instagram.png" alt="Dental Blue Instagram Logo" class="h-10 w-10">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/dental-blue-col" class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3B68FF] hover:text-white transition">
              <img src="/assets/logos/linkedin.png" alt="Dental Blue LinkedIn Logo" class="h-10 w-10">
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

  disconnectedCallback() {
    if (!this.blogLinks) return;

    this.blogLinks.forEach((link) => {
      link.removeEventListener("click", this.handleBlogClick);
    });
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
