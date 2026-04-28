import { animate, stagger } from "motion";
import styles from "../../style.css?inline";
import { getLang, t } from "../../i18n/i18n.js";
import { getHeroContent } from "../../lib/getHeroContent.js";

class HeroSection extends HTMLElement {
  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.cmsData = null;
    this.cmsRequestId = 0;
    this.handleLangChange = this.handleLangChange.bind(this);
  }

  connectedCallback() {
    this.render({ animateEntrance: true });
    this.loadCmsData();
    window.addEventListener("langchange", this.handleLangChange);
  }

  disconnectedCallback() {
    window.removeEventListener("langchange", this.handleLangChange);
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.cmsData = null;
      this.render();
      this.loadCmsData();
    }
  }

  render({ animateEntrance = false } = {}) {
    const variant = this.getAttribute("variant") || "home";
    const markup = variant === "about" ? this.renderAbout() : this.renderHome();

    this.shadowRoot.innerHTML = `
      <style>
        ${styles}

        [data-animate] {
          opacity: 0;
          transform: translateY(24px);
        }
      </style>
      ${markup}
    `;

    if (!animateEntrance) return;

    const elements = this.shadowRoot.querySelectorAll("[data-animate]");

    if (!elements.length) return;

    animate(
      elements,
      { opacity: [0, 1], y: [24, 0] },
      {
        duration: 1.1,
        ease: "easeOut",
        delay: stagger(0.22),
      },
    );
  }

  handleLangChange() {
    this.render();
  }

  async loadCmsData() {
    const variant = this.getAttribute("variant") || "home";
    const requestId = ++this.cmsRequestId;
    const cmsData = await getHeroContent(variant);

    if (requestId !== this.cmsRequestId) return;

    this.cmsData = cmsData;

    if (cmsData) {
      this.render();
    }
  }

  isExternalLink(href) {
    return /^https?:\/\//i.test(href);
  }

  getLinkAttributes(href, { external = false } = {}) {
    if (!external) return `href="${href}"`;
    if (!this.isExternalLink(href)) return `href="${href}"`;
    return `href="${href}" target="_blank" rel="noopener noreferrer"`;
  }

  renderHome() {
    const whatsappMessage = encodeURIComponent(t("common.whatsappMessage"));
    const defaultSecondaryCta = `https://wa.me/573232050782?text=${whatsappMessage}`;
    const cmsData = this.cmsData;

    const eyebrowText = cmsData?.eyebrowOverride || t("hero.home.eyebrow");
    const desktopImageUrl =
      cmsData?.desktopImage ||
      "/assets/images/hero/dentista-haciendo-un-chequeo-al-paciente.webp";
    const mobileImageUrl = cmsData?.mobileImage || desktopImageUrl;
    const imageAlt = cmsData?.alt || t("common.dentistAlt");
    const primaryCtaLink = cmsData?.primaryCtaLink || "#services";
    const secondaryCtaLink = cmsData?.secondaryCtaLink || defaultSecondaryCta;

    return `
      <section class="bg-white pt-5" aria-label="${t("hero.home.ariaLabel")}">
        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 pt-8 pb-12 lg:pt-10 lg:pb-24">
          <div class="lg:hidden">
            <div class="max-w-2xl">
              <span class="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3l6 2.5v6.2c0 4.3-2.6 8.2-6 9.8-3.4-1.6-6-5.5-6-9.8V5.5L12 3z" stroke="currentColor" stroke-width="1.8"/>
                  <path d="M9.2 12.2l1.9 1.9 3.8-4.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ${eyebrowText}
              </span>
              <h1 data-animate class="mt-6 text-5xl sm:text-6xl font-extrabold leading-[0.95] text-slate-900">
                ${t("hero.home.title.beforeHighlight")}<br>
                <span class="text-blue-700">${t("hero.home.title.highlight")}</span> ${t("hero.home.title.afterHighlight")}
              </h1>
              <p data-animate class="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                ${t("hero.home.paragraph")}
              </p>
              <div class="mt-8 flex flex-wrap items-center gap-4">
                <a ${this.getLinkAttributes(primaryCtaLink)} class="inline-flex items-center justify-center rounded-2xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-[0_16px_35px_rgba(29,78,216,0.22)] transition-colors hover:bg-blue-800">
                  ${t("hero.home.primaryCta")}
                </a>
                <a ${this.getLinkAttributes(secondaryCtaLink, { external: true })} class="inline-flex items-center justify-center rounded-2xl bg-slate-200 px-8 py-4 font-semibold text-slate-800 transition-colors hover:bg-slate-300">
                  ${t("hero.home.secondaryCta")}
                </a>
              </div>
            </div>

            <div class="mt-10 flex justify-center">
              <div class="relative w-full max-w-md overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
                <img src="${mobileImageUrl}" alt="${imageAlt}" class="block h-[470px] w-full object-cover" style="object-position: 60% 30%;">
                <div class="absolute inset-x-4 bottom-4 rounded-[1.35rem] bg-white/92 p-4 shadow-lg backdrop-blur">
                  <div class="flex items-center gap-3">
                    <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 3l6 2.5v6.2c0 4.3-2.6 8.2-6 9.8-3.4-1.6-6-5.5-6-9.8V5.5L12 3z" stroke="currentColor" stroke-width="1.8"/>
                        <path d="M9.2 12.2l1.9 1.9 3.8-4.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-base font-semibold text-slate-900">${t("common.certifiedClinic")}</p>
                      <p class="text-sm text-slate-500">${t("common.hygieneStandards")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_560px] lg:items-center lg:gap-12">
            <div class="max-w-[560px]">
              <span class="inline-flex items-center gap-2 rounded-full bg-blue-100/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3l6 2.5v6.2c0 4.3-2.6 8.2-6 9.8-3.4-1.6-6-5.5-6-9.8V5.5L12 3z" stroke="currentColor" stroke-width="1.8"/>
                  <path d="M9.2 12.2l1.9 1.9 3.8-4.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                ${eyebrowText}
              </span>

              <h1 data-animate class="mt-8 text-[5.3rem] font-extrabold leading-[0.92] tracking-[-0.05em] text-slate-900">
                ${t("hero.home.title.beforeHighlight")}<br>
                <span class="text-blue-700">${t("hero.home.title.highlight")}</span> ${t("hero.home.title.afterHighlight")}
              </h1>

              <p data-animate class="mt-7 max-w-[540px] text-[1.08rem] leading-9 text-slate-600">
                ${t("hero.home.paragraph")}
              </p>

              <div class="mt-10 flex items-center gap-4">
                <a ${this.getLinkAttributes(primaryCtaLink)} class="inline-flex items-center justify-center gap-3 rounded-[1.7rem] bg-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-[0_16px_40px_rgba(29,78,216,0.22)] transition-colors hover:bg-blue-800">
                  ${t("hero.home.primaryCta")}
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
                <a ${this.getLinkAttributes(secondaryCtaLink, { external: true })} class="inline-flex items-center justify-center rounded-[1.7rem] bg-slate-200 px-8 py-4 text-lg font-semibold text-slate-800 transition-colors hover:bg-slate-300">
                  ${t("hero.home.secondaryCta")}
                </a>
              </div>

              <div class="mt-14 flex items-center gap-6">
                <div class="flex items-center">
                  <img src="/assets/images/hero/generic-avatar-1.jpg" alt="${t("common.patientAlt")}" class="h-11 w-11 rounded-full border-2 border-white object-cover shadow-md">
                  <img src="/assets/images/hero/generic-avatar-2.jpg" alt="${t("common.patientAlt")}" class="-ml-3 h-11 w-11 rounded-full border-2 border-white object-cover shadow-md">
                  <img src="/assets/images/hero/generic-avatar-3.jpg" alt="${t("common.patientAlt")}" class="-ml-3 h-11 w-11 rounded-full border-2 border-white object-cover shadow-md">
                  <div class="-ml-3 flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-sm font-semibold text-white shadow-md">
                    ${t("hero.home.socialProof")}
                  </div>
                </div>
                <div>
                  <div class="flex items-center gap-3">
                    <span class="text-base tracking-[0.2em] text-amber-400">★★★★★</span>
                    <span class="text-xl font-semibold text-slate-900">${t("hero.home.ratingScore")}</span>
                  </div>
                  <p class="mt-1 text-base text-slate-600">${t("common.ratedByPatients")}</p>
                </div>
              </div>
            </div>

            <div class="relative flex justify-end">
              <div class="absolute -left-12 top-10 h-48 w-48 rounded-full bg-blue-200/35 blur-3xl"></div>
              <div class="absolute right-6 bottom-6 h-36 w-36 rounded-full bg-sky-200/40 blur-3xl"></div>
              <div class="relative w-full max-w-[560px] overflow-hidden rounded-[2rem] shadow-[0_28px_90px_rgba(15,23,42,0.18)]">
                <img src="${desktopImageUrl}" alt="${imageAlt}" class="block h-[700px] w-full object-cover" style="object-position: 62% 28%;">
                <div class="absolute inset-x-5 bottom-6 rounded-[1.4rem] bg-white/92 px-6 py-5 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur">
                  <div class="flex items-center gap-4">
                    <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 3l6 2.5v6.2c0 4.3-2.6 8.2-6 9.8-3.4-1.6-6-5.5-6-9.8V5.5L12 3z" stroke="currentColor" stroke-width="1.8"/>
                        <path d="M9.2 12.2l1.9 1.9 3.8-4.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-[1.15rem] font-semibold text-slate-900">${t("common.certifiedClinic")}</p>
                      <p class="text-[0.96rem] text-slate-500">${t("common.hygieneStandards")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderAbout() {
    const aboutHighlightClass =
      getLang() === "en" ? "text-blue-600 md:block lg:inline" : "text-blue-600";
    const whatsappMessage = encodeURIComponent(t("common.whatsappMessage"));
    const defaultSecondaryCta = `https://wa.me/573232050782?text=${whatsappMessage}`;
    const cmsData = this.cmsData;

    const eyebrowText = cmsData?.eyebrowOverride || t("hero.about.eyebrow");
    const desktopImageUrl =
      cmsData?.desktopImage || "/assets/images/about/dental-clinic-interior.webp";
    const mobileImageUrl = cmsData?.mobileImage || desktopImageUrl;
    const imageAlt = cmsData?.alt || t("common.aboutClinicAlt");
    const primaryCtaLink = cmsData?.primaryCtaLink || "#team";
    const secondaryCtaLink = cmsData?.secondaryCtaLink || defaultSecondaryCta;

    return `
      <section class="bg-white" aria-label="${t("hero.about.ariaLabel")}">
        <div class="relative py-20 md:py-28 overflow-hidden bg-white">
          <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span class="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">${eyebrowText}</span>
                <h1 data-animate class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                  ${t("hero.about.title.beforeHighlight")} <span class="${aboutHighlightClass}">${t("hero.about.title.highlight")}</span>
                </h1>
                <p data-animate class="text-lg text-gray-600 max-w-xl mb-8">
                  ${t("hero.about.paragraph")}
                </p>
                <div class="flex flex-wrap gap-4">
                  <a ${this.getLinkAttributes(primaryCtaLink)} class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    ${t("hero.about.primaryCta")}
                  </a>
                  <a ${this.getLinkAttributes(secondaryCtaLink, { external: true })} class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
                    ${t("hero.about.secondaryCta")}
                  </a>
                </div>
              </div>
              <div class="flex justify-center lg:justify-end relative">
                <div class="w-80 lg:w-[520px] img-card img-card--large h-[500px] relative">
                  <picture>
                    <source media="(max-width: 1023px)" srcset="${mobileImageUrl}">
                    <img src="${desktopImageUrl}" alt="${imageAlt}" class="object-cover">
                  </picture>
                  <div class="absolute bottom-6 right-6 z-10">
                    <div class="badge">${t("common.yearsExperience")}</div>
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
