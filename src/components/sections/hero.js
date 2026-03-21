class HeroSection extends HTMLElement {
  static get observedAttributes() {
    return ["variant"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  render() {
    const variant = this.getAttribute("variant") || "home";
    this.innerHTML =
      variant === "about" ? this.renderAbout() : this.renderHome();
  }

  renderHome() {
    return `
      <section class="bg-white pt-5">
        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-16 lg:items-start pt-8">
          <div class="relative h-full">
            <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Welcome to <span class="text-blue-600">Smile Bright</span> Dental Care
            </h1>
            <p class="mt-4 text-lg text-gray-600 max-w-xl">
              Our experienced dental team offers a blend of extensive knowledge and personalized professional care tailored to your specific needs.
            </p>

            <div class="mt-8 flex items-center space-x-4">
              <a href="#services" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                View Services
              </a>
              <a href="#contact" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
                Schedule a Call
              </a>
            </div>

            <div class="mt-12 w-72 relative z-10 md:hidden lg:block">
              <div class="img-card img-card--small h-72">
                <img src="/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.jpg" alt="Paciente" class="object-cover" style="object-position: 50% 20%;">
              </div>
            </div>
          </div> 

          <div class="flex justify-center lg:justify-end relative mt-4 h-full md:hidden lg:flex">
            <div class="w-80 lg:w-[520px] img-card img-card--large h-[600px] relative">
              <img src="/assets/images/hero/dentista-haciendo-un-chequeo-al-paciente.jpg" alt="Dentista" class="object-cover" style="object-position: 50% 30%;">
              <div class="absolute bottom-6 right-6 z-10">
                <div class="badge">8+ Years Experience</div>
              </div>
            </div>
          </div>

          <div class="hidden md:flex lg:hidden w-full items-center justify-center gap-4 mt-8">
            <div class="w-[48%] img-card img-card--small h-[280px] max-h-[280px]">
              <img src="/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.jpg" alt="Paciente" class="object-cover" style="object-position: 50% 20%;">
            </div>
            <div class="w-[48%] img-card img-card--large h-[280px] max-h-[280px] relative">
              <img src="/assets/images/hero/dentista-haciendo-un-chequeo-al-paciente.jpg" alt="Dentista" class="object-cover" style="object-position: 50% 30%;">
              <div class="absolute bottom-4 right-4 z-10">
                <div class="badge">8+ Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-24 max-w-5xl mx-auto px-6">
          <div class="flex justify-center items-center flex-wrap grayscale opacity-60 gap-x-30">
            <img src="/assets/logos/colgate-logo-1.svg" alt="Colgate" class="h-14 w-14">
            <img src="/assets/logos/oral-b.svg" alt="Oral-B" class="h-14 w-14">
            <img src="/assets/logos/polanco.png" alt="Oral-B" class="h-14 w-19">
            <img src="/assets/logos/Logo-Adental.png" alt="Oral-B" class="h-6 w-14">
          </div>
        </div>
      </section>
    `;
  }

  renderAbout() {
    return `
      <section class="bg-white">
        <div class="relative py-20 md:py-28 overflow-hidden bg-white">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span class="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">About Us</span>
                <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  Transforming Smiles, <span class="text-blue-600">Changing Lives</span>
                </h1>
                <p class="text-lg text-gray-600 max-w-xl mb-8">
                  At Dental Blue, we believe everyone deserves a healthy, beautiful smile.
                  For over 12 years, we've been dedicated to providing exceptional dental care
                  with a personal touch that makes our patients feel like family.
                </p>
                <div class="flex flex-wrap gap-4">
                  <a href="#team" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Meet Our Team
                  </a>
                  <a href="#contact" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
                    Schedule a Visit
                  </a>
                </div>
              </div>
              <div class="flex justify-center lg:justify-end relative">
                <div class="w-80 lg:w-[520px] img-card img-card--large h-[500px] relative">
                  <img src="/assets/images/about/dental-clinic-interior.png" alt="Dental Blue Modern Clinic" class="object-cover">
                  <div class="absolute bottom-6 right-6 z-10">
                    <div class="badge">8+ Years Experience</div>
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
