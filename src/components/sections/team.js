class TeamSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.members = [
      {
        name: "Dr. Shelley Robinson",
        role: "Dental Surgeon",
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.jpg",
      },
      {
        name: "Dr. Ralph Edwards",
        role: "Dental Surgeon",
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.jpg",
      },
      {
        name: "Dr. Nicola Lester",
        role: "Dental Surgeon",
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.jpg",
      },
      {
        name: "Dr. Daniel Foster",
        role: "Orthodontist",
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.jpg",
      },
      {
        name: "Dr. Emma Hayes",
        role: "Pediatric Dentist",
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.jpg",
      },
    ];

    this.totalCards = this.members.length;
    this.currentIndex = 0;
    this.visibleCards = 3;
    this.onResize = null;
    this.onNext = null;
    this.onPrev = null;
  }

  connectedCallback() {
    if (this.shadowRoot.childElementCount > 0) return;

    this.render();
    this.bindEvents();
    this.visibleCards = this.getVisibleCards();
    this.updateCarousel();
  }

  disconnectedCallback() {
    if (this.onResize) {
      window.removeEventListener("resize", this.onResize);
    }
  }

  render() {
    const headStyles = Array.from(
      document.head.querySelectorAll('style, link[rel="stylesheet"]')
    )
      .map((node) => node.outerHTML)
      .join("");

    this.shadowRoot.innerHTML = `
      ${headStyles}
      <section id="team" class="py-16 bg-blue-500 text-white flex flex-col items-center">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Professional and Skilled Dentist Team
        </h2>

        <div class="relative max-w-6xl w-full px-6">
          <div class="overflow-hidden">
            <div class="team-carousel flex transition-transform duration-500 ease-in-out">
              ${this.members
                .map(
                  (m) => `
                <div class="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 flex justify-center px-2">
                  <div class="bg-white rounded-3xl p-6 shadow-lg text-gray-900 w-full flex flex-col items-center hover:scale-105 transition">
                    <img src="${m.img}" alt="${m.name}" class="w-48 h-48 object-cover rounded-2xl mb-4" />
                    <h3 class="text-lg font-semibold">${m.name}</h3>
                    <p class="text-sm text-gray-600">${m.role}</p>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>

          <button class="prev-team absolute left-0 top-1/2 -translate-y-1/2 bg-blue-400 hover:bg-blue-600 text-white rounded-full p-3 shadow-md transition">
            &#10094;
          </button>
          <button class="next-team absolute right-0 top-1/2 -translate-y-1/2 bg-blue-400 hover:bg-blue-600 text-white rounded-full p-3 shadow-md transition">
            &#10095;
          </button>
        </div>
      </section>
    `;

    this.carousel = this.shadowRoot.querySelector(".team-carousel");
    this.nextButton = this.shadowRoot.querySelector(".next-team");
    this.prevButton = this.shadowRoot.querySelector(".prev-team");
  }

  bindEvents() {
    this.onNext = () => {
      if (this.currentIndex < this.totalCards - this.visibleCards) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.updateCarousel();
    };

    this.onPrev = () => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.totalCards - this.visibleCards;
      }
      this.updateCarousel();
    };

    this.onResize = () => {
      this.visibleCards = this.getVisibleCards();
      this.currentIndex = 0;
      this.updateCarousel();
    };

    this.nextButton.addEventListener("click", this.onNext);
    this.prevButton.addEventListener("click", this.onPrev);
    window.addEventListener("resize", this.onResize);
  }

  getVisibleCards() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  updateCarousel() {
    const offset = (this.currentIndex * 100) / this.visibleCards;
    this.carousel.style.transform = `translateX(-${offset}%)`;
  }
}

if (!customElements.get("team-section")) {
  customElements.define("team-section", TeamSection);
}

export default TeamSection;
