import { getLang, t } from "../../i18n/i18n.js";

export function renderWelcome() {
  const heroSection = document.createElement("hero-section");
  heroSection.setAttribute("variant", "home");
  heroSection.dataset.lang = getLang();
  heroSection.setAttribute("aria-label", t("hero.home.ariaLabel"));
  return heroSection;
}
