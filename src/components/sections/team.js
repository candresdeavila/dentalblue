import { t } from "../../i18n/i18n.js";

class TeamSection extends HTMLElement {
  constructor() {
    super();
    this.onNext = null;
    this.onPrev = null;
    this.handleLangChange = this.handleLangChange.bind(this);
  }

  connectedCallback() {
    this.render();
    this.bindEvents();
    window.addEventListener("langchange", this.handleLangChange);
  }

  disconnectedCallback() {
    if (this.nextButton && this.onNext) {
      this.nextButton.removeEventListener("click", this.onNext);
    }

    if (this.prevButton && this.onPrev) {
      this.prevButton.removeEventListener("click", this.onPrev);
    }

    window.removeEventListener("langchange", this.handleLangChange);
    this.carousel = null;
    this.nextButton = null;
    this.prevButton = null;
    this.onNext = null;
    this.onPrev = null;
  }

  getMembers() {
    return [
      {
        name: "Dr. Angelica Cervantes",
        role: t("team.roles.leadDentist"),
        img: "/assets/images/team/dental_blue_staff1.webp",
        imageStyle:
          "object-fit: contain; object-position: center bottom; background: white;",
      },
      {
        name: "Mariana",
        role: t("team.roles.dentalHygienist"),
        img: "/assets/images/team/dental_blue_staff2.webp",
        imageStyle:
          "object-fit: contain; object-position: center bottom; background: white;",
      },
      {
        name: "Dr. Luis Barros",
        role: t("team.roles.orthodontist"),
        img: "/assets/images/team/dental_blue_staff3.webp",
        imageStyle:
          "object-fit: contain; object-position: center bottom; background: white;",
      },
      {
        name: "Dr. Yolanda Alonso",
        role: t("team.roles.endodontist"),
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp",
      },
      {
        name: "Dr. Joyce Barrios",
        role: t("team.roles.pediatricDentist"),
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp",
      },
    ];
  }

  handleLangChange() {
    this.render();
    this.bindEvents();
  }

  render() {
    if (this.nextButton && this.onNext) {
      this.nextButton.removeEventListener("click", this.onNext);
    }

    if (this.prevButton && this.onPrev) {
      this.prevButton.removeEventListener("click", this.onPrev);
    }

    const members = this.getMembers();

    this.innerHTML = `
      <style>
        team-section {
          display: block;
        }

        .team-section-root .team-member-card {
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow:
            0 20px 45px rgba(15, 23, 42, 0.12),
            0 6px 18px rgba(15, 23, 42, 0.08);
        }

        .team-section-root .team-photo-frame {
          width: 12rem;
          height: 12rem;
          overflow: hidden;
          border-radius: 1.5rem;
          margin-bottom: 1.25rem;
          flex-shrink: 0;
          background:
            linear-gradient(180deg, rgba(239, 246, 255, 0.95), rgba(219, 234, 254, 0.75));
          box-shadow:
            0 14px 28px rgba(15, 23, 42, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.6);
          transition: transform 220ms ease, box-shadow 220ms ease;
        }

        .team-section-root .team-photo-frame img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 260ms ease;
        }

        .team-section-root .team-photo-frame:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 35px rgba(59, 104, 255, 0.18);
        }

        .team-section-root .team-photo-frame:hover img {
          transform: scale(1.04);
        }

        .team-section-root .team-member-content {
          position: relative;
          z-index: 1;
          text-align: center;
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
          ${t("team.title")}
        </h2>

        <div class="relative max-w-6xl w-full px-6">
          <div class="carousel-container">
            <div class="team-carousel">
              ${members
                .map(
                  (member) => `
                <div class="team-card w-full sm:w-1/2 lg:w-1/3 flex justify-center px-2">
                  <div class="team-member-card bg-white rounded-3xl p-6 text-gray-900 w-full flex flex-col items-center">
                    <div class="team-photo-frame">
                      <img src="${member.img}" alt="${member.name}" loading="lazy" decoding="async" class="w-48 h-48 object-cover" style="${member.imageStyle || ""}" />
                    </div>
                    <div class="team-member-content">
                      <h3 class="text-lg font-semibold">${member.name}</h3>
                      <p class="text-sm text-gray-600">${member.role}</p>
                    </div>
                  </div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>

          <button aria-label="${t("team.prevAria")}" class="prev-team absolute left-0 top-1/2 -translate-y-1/2 bg-blue-400 hover:bg-blue-600 text-white rounded-full p-3 shadow-md transition">
            &#10094;
          </button>
          <button aria-label="${t("team.nextAria")}" class="next-team absolute right-0 top-1/2 -translate-y-1/2 bg-blue-400 hover:bg-blue-600 text-white rounded-full p-3 shadow-md transition">
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
