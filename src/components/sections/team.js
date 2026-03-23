class TeamSection extends HTMLElement {
  constructor() {
    super();
    this.members = [
      {
        name: "Dr. Angelica Cervantes",
        role: "Lead Dentist",
        img: "/assets/images/team/dental_blue_staff1.jpeg",
      },
      {
        name: "Mariana",
        role: "Dental Hygienist",
        img: "/assets/images/team/dental_blue_staff2.jpg",
      },
      {
        name: "Dr. Nicola Lester",
        role: "Dental Surgeon",
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp",
      },
      {
        name: "Dr. Daniel Foster",
        role: "Orthodontist",
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp",
      },
      {
        name: "Dr. Emma Hayes",
        role: "Pediatric Dentist",
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp",
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
    if (this.childElementCount > 0) return;

    this.render();
    this.bindEvents();
    this.visibleCards = this.getVisibleCards();
    this.updateCarousel();
  }

  disconnectedCallback() {
    if (this.nextButton && this.onNext) {
      this.nextButton.removeEventListener("click", this.onNext);
    }

    if (this.prevButton && this.onPrev) {
      this.prevButton.removeEventListener("click", this.onPrev);
    }

    if (this.onResize) {
      window.removeEventListener("resize", this.onResize);
    }

    this.carousel = null;
    this.nextButton = null;
    this.prevButton = null;
    this.onNext = null;
    this.onPrev = null;
    this.onResize = null;
    this.currentIndex = 0;
    this.visibleCards = 3;
  }

  render() {
    this.innerHTML = `
      <style>
        team-section {
          display: block;
        }

        .team-section-root .team-member-card {
          overflow: hidden;
        }

        .team-section-root .team-photo-frame {
          width: 12rem;
          height: 12rem;
          overflow: hidden;
          border-radius: 1rem;
          margin-bottom: 1rem;
          flex-shrink: 0;
        }

        .team-section-root .team-photo-frame img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      </style>
      <section class="team-section-root py-16 bg-blue-500 text-white flex flex-col items-center">
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
                  <div class="team-member-card bg-white rounded-3xl p-6 shadow-lg text-gray-900 w-full flex flex-col items-center hover:scale-105 transition">
                    <div class="team-photo-frame">
                      <img src="${m.img}" alt="${m.name}" loading="lazy" decoding="async" class="w-48 h-48 object-cover rounded-2xl mb-4" />
                    </div>
                    <h3 class="text-lg font-semibold">${m.name}</h3>
                    <p class="text-sm text-gray-600">${m.role}</p>
                  </div>
                </div>
              `,
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

    this.carousel = this.querySelector(".team-carousel");
    this.nextButton = this.querySelector(".next-team");
    this.prevButton = this.querySelector(".prev-team");
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
