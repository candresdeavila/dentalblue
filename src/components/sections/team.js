class TeamSection extends HTMLElement {
  constructor() {
    super();
    this.members = [
      {
        name: "Dr. Angelica Cervantes",
        role: "Lead Dentist",
        img: "/assets/images/team/dental_blue_staff1.webp",
      },
      {
        name: "Mariana",
        role: "Dental Hygienist",
        img: "/assets/images/team/dental_blue_staff2.webp",
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
    this.onNext = null;
    this.onPrev = null;
  }

  connectedCallback() {
    if (this.childElementCount > 0) return;

    this.render();
    this.bindEvents();
  }

  disconnectedCallback() {
    if (this.nextButton && this.onNext) {
      this.nextButton.removeEventListener("click", this.onNext);
    }

    if (this.prevButton && this.onPrev) {
      this.prevButton.removeEventListener("click", this.onPrev);
    }

    this.carousel = null;
    this.nextButton = null;
    this.prevButton = null;
    this.onNext = null;
    this.onPrev = null;
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

        .team-section-root .carousel-container {
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .team-section-root .carousel-container::-webkit-scrollbar {
          display: none;
        }

        .team-section-root .team-carousel {
          display: flex;
        }

        .team-section-root .team-card {
          scroll-snap-align: center;
          flex-shrink: 0;
        }
      </style>
      <section class="team-section-root py-16 bg-blue-500 text-white flex flex-col items-center">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Professional and Skilled Dentist Team
        </h2>

        <div class="relative max-w-6xl w-full px-6">
          <div class="carousel-container">
            <div class="team-carousel">
              ${this.members
                .map(
                  (m) => `
                <div class="team-card w-full sm:w-1/2 lg:w-1/3 flex justify-center px-2">
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

    this.carousel = this.querySelector(".carousel-container");
    this.nextButton = this.querySelector(".next-team");
    this.prevButton = this.querySelector(".prev-team");
  }

  bindEvents() {
    const getCardScrollWidth = () => {
      const firstCard = this.carousel?.querySelector(".team-card");

      if (!firstCard) {
        return 0;
      }

      const styles = window.getComputedStyle(firstCard);
      const marginLeft = parseFloat(styles.marginLeft) || 0;
      const marginRight = parseFloat(styles.marginRight) || 0;

      return firstCard.offsetWidth + marginLeft + marginRight;
    };

    this.onNext = () => {
      const cardWidth = getCardScrollWidth();
      this.carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
    };

    this.onPrev = () => {
      const cardWidth = getCardScrollWidth();
      this.carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
    };

    this.nextButton.addEventListener("click", this.onNext);
    this.prevButton.addEventListener("click", this.onPrev);
  }
}

if (!customElements.get("team-section")) {
  customElements.define("team-section", TeamSection);
}

export default TeamSection;
