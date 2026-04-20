import { t } from "../../i18n/i18n.js";

class TeamSection extends HTMLElement {
  constructor() {
    super();
    this.onNext = null;
    this.onPrev = null;
    this.onTeamClick = null;
    this.onModalKeydown = null;
    this.activeModal = null;
    this.modalCloseTimeout = null;
    this.activeMember = null;
    this.bodyOverflow = "";
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

    if (this.onTeamClick) {
      this.removeEventListener("click", this.onTeamClick);
    }

    if (this.onModalKeydown) {
      window.removeEventListener("keydown", this.onModalKeydown);
    }

    this.closeModal(true);
    window.removeEventListener("langchange", this.handleLangChange);
    this.carousel = null;
    this.nextButton = null;
    this.prevButton = null;
    this.onNext = null;
    this.onPrev = null;
    this.onTeamClick = null;
    this.onModalKeydown = null;
    this.activeModal = null;
    this.activeMember = null;
  }

  getMembers() {
    const memberTranslations = t("team.members");

    return [
      {
        name: "Dra. Angelica Cervantes",
        role: t("team.roles.leadDentist"),
        specialty: memberTranslations?.[0]?.specialty,
        img: "/assets/images/team/dental_blue_staff1.webp",
        imageStyle:
          "object-fit: contain; object-position: center bottom; background: white;",
        bio: memberTranslations?.[0]?.bio,
        ctaLabel: memberTranslations?.[0]?.ctaLabel,
        stats: {
          experience: "10+",
          patients: "2k+",
          rating: "5.0",
        },
      },
      {
        name: "Mariana",
        role: t("team.roles.dentalHygienist"),
        specialty: memberTranslations?.[1]?.specialty,
        img: "/assets/images/team/dental_blue_staff2.webp",
        imageStyle:
          "object-fit: contain; object-position: center bottom; background: white;",
        bio: memberTranslations?.[1]?.bio,
        ctaLabel: memberTranslations?.[1]?.ctaLabel,
        stats: {
          experience: "3+",
          patients: "500+",
          rating: "5.0",
        },
      },
      {
        name: "Dr. Luis Barros",
        role: t("team.roles.orthodontist"),
        specialty: memberTranslations?.[2]?.specialty,
        img: "/assets/images/team/dental_blue_staff3.webp",
        imageStyle:
          "object-fit: contain; object-position: center bottom; background: white;",
        bio: memberTranslations?.[2]?.bio,
        ctaLabel: memberTranslations?.[2]?.ctaLabel,
        stats: {
          experience: "10+",
          patients: "2k+",
          rating: "5.0",
        },
      },
      {
        name: "Dr. Yolanda Alonso",
        role: t("team.roles.endodontist"),
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp",
        specialty: memberTranslations?.[3]?.specialty,
        bio: memberTranslations?.[3]?.bio,
        ctaLabel: memberTranslations?.[3]?.ctaLabel,
        stats: {
          experience: "10+",
          patients: "2k+",
          rating: "5.0",
        },
      },
      {
        name: "Dr. Joyce Barrios",
        role: t("team.roles.pediatricDentist"),
        img: "/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp",
        specialty: memberTranslations?.[4]?.specialty,
        bio: memberTranslations?.[4]?.bio,
        ctaLabel: memberTranslations?.[4]?.ctaLabel,
        stats: {
          experience: "10+",
          patients: "2k+",
          rating: "5.0",
        },
      },
    ];
  }

  handleLangChange() {
    const activeMemberName = this.activeMember?.name || null;

    this.render();
    this.bindEvents();

    if (!activeMemberName) {
      return;
    }

    const translatedMember = this.getMembers().find(
      (member) => member.name === activeMemberName,
    );

    if (translatedMember) {
      this.openModal(translatedMember);
    }
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
          cursor: pointer;
          transition: border-color 220ms ease;
        }

        .team-section-root .team-member-card:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.75);
          outline-offset: 4px;
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
                  (member, index) => `
                <div class="team-card w-full sm:w-1/2 lg:w-1/3 flex justify-center px-2">
                  <div
                    class="team-member-card bg-white rounded-3xl p-6 text-gray-900 w-full flex flex-col items-center"
                    data-member-index="${index}"
                    role="button"
                    tabindex="0"
                    aria-label="Ver perfil de ${member.name}"
                  >
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

    if (this.onTeamClick) {
      this.removeEventListener("click", this.onTeamClick);
    }

    this.onTeamClick = (event) => {
      const card = event.target.closest(".team-member-card");

      if (!card || !this.contains(card)) {
        return;
      }

      const memberIndex = Number(card.dataset.memberIndex);
      const selectedMember = this.getMembers()[memberIndex];

      if (!selectedMember) {
        return;
      }

      this.openModal(selectedMember);
    };

    this.addEventListener("click", this.onTeamClick);
    this.nextButton.addEventListener("click", this.onNext);
    this.prevButton.addEventListener("click", this.onPrev);

    this.querySelectorAll(".team-member-card").forEach((card) => {
      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }

        event.preventDefault();
        card.click();
      });
    });
  }

  createElement(tag, className, textContent) {
    const element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    if (typeof textContent === "string") {
      element.textContent = textContent;
    }

    return element;
  }

  createStatItem(value, label, valueClassName = "") {
    const stat = this.createElement(
      "div",
      "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-2 text-center",
    );
    const statValue = this.createElement(
      "span",
      `text-xl font-bold tracking-tight text-slate-900 ${valueClassName}`.trim(),
      value,
    );
    const statLabel = this.createElement(
      "span",
      "text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-[0.7rem]",
      label,
    );

    stat.append(statValue, statLabel);
    return stat;
  }

  createModal(memberData) {
    const whatsappMessage = encodeURIComponent(t("common.whatsappMessage"));
    const whatsappHref = `https://wa.me/573232050782?text=${whatsappMessage}`;
    const overlay = this.createElement(
      "div",
      "fixed inset-0 z-[999] flex items-end justify-center overflow-y-auto bg-slate-950/0 px-0 pb-0 pt-8 opacity-0 backdrop-blur-0 transition-all duration-300 ease-out sm:px-6 sm:py-12 md:items-center",
    );
    overlay.setAttribute("role", "presentation");

    const modal = this.createElement(
      "div",
      "relative w-full translate-y-10 rounded-t-[2rem] bg-white px-6 pb-6 pt-20 text-slate-900 shadow-[0_28px_80px_rgba(15,23,42,0.32)] transition-all duration-300 ease-out sm:mt-16 sm:max-w-[37rem] sm:translate-y-0 sm:scale-95 sm:rounded-[2rem] sm:px-7 sm:pb-7 sm:pt-[4.5rem] md:mt-0 lg:max-w-xl lg:px-10 lg:pb-10 lg:pt-24",
    );
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "team-modal-name");

    const closeButton = this.createElement(
      "button",
      "absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:right-5 sm:top-5",
    );
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", t("team.closeModalAria"));
    closeButton.innerHTML = `
      <svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
      </svg>
    `;

    const avatarWrap = this.createElement(
      "div",
      "absolute left-1/2 top-0 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-1.5 shadow-[0_18px_42px_rgba(59,104,255,0.22)] sm:h-[7rem] sm:w-[7rem] lg:h-32 lg:w-32",
    );
    const avatar = this.createElement(
      "img",
      "h-full w-full rounded-full object-cover object-center bg-slate-100",
    );
    avatar.src = memberData.img;
    avatar.alt = memberData.name;
    avatar.loading = "lazy";
    avatar.decoding = "async";

    if (memberData.imageStyle) {
      avatar.style.cssText = memberData.imageStyle;
    }

    avatarWrap.appendChild(avatar);

    const content = this.createElement(
      "div",
      "flex flex-col items-center text-center",
    );
    const name = this.createElement(
      "h3",
      "text-[1.95rem] font-semibold leading-tight tracking-tight text-slate-950 sm:text-[1.85rem] lg:text-[2.15rem]",
      memberData.name,
    );
    name.id = "team-modal-name";

    const specialty = this.createElement(
      "p",
      "mt-2 text-base font-medium text-blue-600 sm:text-[1rem] lg:text-[1.1rem]",
      memberData.specialty || memberData.role,
    );

    const divider = this.createElement(
      "div",
      "mt-6 h-1.5 w-12 rounded-full bg-blue-100 sm:hidden",
    );

    const bioLabel = this.createElement(
      "p",
      "mt-7 hidden self-start text-xs font-semibold uppercase tracking-[0.28em] text-slate-400 sm:block sm:self-center",
      t("team.bioLabel"),
    );
    const bio = this.createElement(
      "p",
      "mt-6 max-w-md text-base leading-8 text-slate-600 sm:mx-auto sm:mt-4 sm:max-w-[32rem] sm:text-justify sm:text-[0.95rem] sm:leading-7 lg:max-w-md lg:text-base lg:leading-8",
      memberData.bio,
    );

    const cta = this.createElement(
      "a",
      "mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-[0_14px_28px_rgba(37,99,235,0.28)] transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:min-h-12 sm:py-3.5 sm:text-[1.05rem] lg:min-h-14 lg:py-4 lg:text-lg",
      memberData.ctaLabel,
    );
    cta.href = whatsappHref;
    cta.target = "_blank";
    cta.rel = "noopener noreferrer";

    const ctaIcon = this.createElement(
      "span",
      "inline-flex h-5 w-5 items-center justify-center",
    );
    ctaIcon.innerHTML = `
      <svg aria-hidden="true" viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    `;
    cta.appendChild(ctaIcon);

    const stats = this.createElement(
      "div",
      "mt-8 grid w-full grid-cols-3 rounded-2xl border border-blue-100 bg-slate-50 px-3 py-4 sm:px-4 sm:py-4 lg:px-5 lg:py-5",
    );
    const experienceStat = this.createStatItem(
      memberData.stats?.experience || "10+",
      t("team.stats.experience"),
      "text-blue-600",
    );
    const patientsStat = this.createStatItem(
      memberData.stats?.patients || "2k+",
      t("team.stats.patients"),
      "text-blue-600",
    );
    const ratingStat = this.createStatItem(
      `⭐ ${memberData.stats?.rating || "5.0"}`,
      t("team.stats.rating"),
      "text-amber-500",
    );

    experienceStat.classList.add("border-r", "border-slate-200");
    patientsStat.classList.add("border-r", "border-slate-200");
    stats.append(experienceStat, patientsStat, ratingStat);

    content.append(name, specialty, divider, bioLabel, bio, cta, stats);
    modal.append(closeButton, avatarWrap, content);
    overlay.appendChild(modal);

    overlay.addEventListener("click", () => this.closeModal());
    modal.addEventListener("click", (event) => event.stopPropagation());
    closeButton.addEventListener("click", () => this.closeModal());

    return { overlay, modal, closeButton };
  }

  openModal(memberData) {
    if (!memberData) {
      return;
    }

    if (this.activeModal) {
      this.closeModal(true);
    }

    const { overlay, modal, closeButton } = this.createModal(memberData);

    this.activeMember = memberData;
    this.activeModal = overlay;
    this.bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.appendChild(overlay);

    this.onModalKeydown = (event) => {
      if (event.key === "Escape") {
        this.closeModal();
      }
    };

    window.addEventListener("keydown", this.onModalKeydown);

    requestAnimationFrame(() => {
      overlay.classList.remove(
        "bg-slate-950/0",
        "opacity-0",
        "backdrop-blur-0",
      );
      overlay.classList.add(
        "bg-slate-950/45",
        "opacity-100",
        "backdrop-blur-md",
      );
      modal.classList.remove("translate-y-10", "sm:scale-95");
      modal.classList.add("translate-y-0", "sm:scale-100");
      closeButton.focus();
    });
  }

  closeModal(force = false) {
    if (!this.activeModal) {
      return;
    }

    const overlay = this.activeModal;
    const modal = overlay.firstElementChild;

    if (this.onModalKeydown) {
      window.removeEventListener("keydown", this.onModalKeydown);
      this.onModalKeydown = null;
    }

    clearTimeout(this.modalCloseTimeout);
    document.body.style.overflow = this.bodyOverflow;
    this.bodyOverflow = "";
    this.activeModal = null;
    this.activeMember = null;

    if (force) {
      overlay.remove();
      return;
    }

    overlay.classList.remove(
      "bg-slate-950/45",
      "opacity-100",
      "backdrop-blur-md",
    );
    overlay.classList.add("bg-slate-950/0", "opacity-0", "backdrop-blur-0");

    if (modal) {
      modal.classList.remove("translate-y-0", "sm:scale-100");
      modal.classList.add("translate-y-10", "sm:scale-95");
    }

    this.modalCloseTimeout = window.setTimeout(() => {
      overlay.remove();
    }, 280);
  }
}

if (!customElements.get("team-section")) {
  customElements.define("team-section", TeamSection);
}

export default TeamSection;
