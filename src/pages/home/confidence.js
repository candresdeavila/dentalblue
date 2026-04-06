import { getLang, t } from "../../i18n/i18n.js";

export function createConfidenceSection() {
  const benefits = t("confidence.benefits");
  const title = t("confidence.title")
    .replace(" With Us", " <br>With Us")
    .replace(" con Nosotros", " <br>con Nosotros");
  const section = document.createElement("section");
  section.id = "confidence";
  section.className = "bg-white py-20 px-6 md:px-16";
  section.dataset.lang = getLang();

  section.innerHTML = `
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div class="rounded-[2rem] overflow-hidden shadow-lg">
        <img
          src="/assets/images/hero/dentista-haciendo-un-chequeo-al-paciente.webp"
          alt="${t("confidence.imageAlt")}"
          loading="lazy"
          decoding="async"
          class="w-full h-100 object-cover"
        />
      </div>

      <div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          ${title}
        </h2>
        <p class="text-gray-600 mb-6 leading-relaxed">
          ${t("confidence.paragraph")}
        </p>

        <ul class="space-y-3 mb-8">
          ${benefits
            .map(
              (benefit) => `
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-circle-check text-blue-500 text-lg"><img src="/assets/icons/check.png" alt="${t("common.checkAlt")}" loading="lazy" decoding="async" class="h-5 w-5"></i>
            <span class="text-gray-700">${benefit}</span>
          </li>`,
            )
            .join("")}
        </ul>

        <a
          href="#services"
          class="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          ${t("common.learnMore")}
        </a>
      </div>
    </div>
  `;

  return section;
}
