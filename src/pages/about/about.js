import { createExpandableServicesSection } from "../../components/sections/servicesExpandable.js";
import { getLang, t } from "../../i18n/i18n.js";

export function renderAboutUs() {
  const timeline = t("aboutPage.timeline");
  const values = t("aboutPage.values");
  const stats = t("aboutPage.stats");
  const section = document.createElement("section");
  section.className = "bg-white";
  section.dataset.lang = getLang();

  section.innerHTML = `
    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">${t("aboutPage.storyTitle")}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            ${t("aboutPage.storyIntro")}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <p class="text-gray-600">${t("aboutPage.storyParagraph1")}</p>
            <p class="text-gray-600">${t("aboutPage.storyParagraph2")}</p>
            <p class="text-gray-600">${t("aboutPage.storyParagraph3")}</p>
          </div>

          <div class="space-y-6">
            ${timeline
              .map(
                (item) => `
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">${item.year}</div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">${item.title}</h4>
                <p class="text-gray-500 text-sm">${item.description}</p>
              </div>
            </div>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>

    <div class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="bg-blue-600 text-white rounded-3xl p-10 md:p-16">
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl">🎯</span>
                <h3 class="text-2xl font-bold">${t("aboutPage.missionTitle")}</h3>
              </div>
              <p class="text-white/90 leading-relaxed">
                ${t("aboutPage.missionBody")}
              </p>
            </div>
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl">✨</span>
                <h3 class="text-2xl font-bold">${t("aboutPage.visionTitle")}</h3>
              </div>
              <p class="text-white/90 leading-relaxed">
                ${t("aboutPage.visionBody")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">${t("aboutPage.valuesTitle")}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            ${t("aboutPage.valuesIntro")}
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          ${values
            .map(
              (value) => `
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl">${value.icon}</span>
            </div>
            <h4 class="font-bold text-gray-900 text-lg mb-3">${value.title}</h4>
            <p class="text-gray-500 text-sm">${value.description}</p>
          </div>`,
            )
            .join("")}
        </div>
      </div>
    </div>

    <div class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">${t("aboutPage.statsTitle")}</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          ${stats
            .map(
              (item) => `
          <div class="w-36 h-36 rounded-full border-4 border-blue-100 flex flex-col items-center justify-center mx-auto">
            <p class="text-3xl md:text-4xl font-bold text-blue-600">${item.value}</p>
            <p class="text-gray-500 text-sm text-center">${item.label}</p>
          </div>`,
            )
            .join("")}
        </div>
      </div>
    </div>

    <div id="team" class="py-20 bg-white">
      <team-section></team-section>
    </div>

    <div id="about-services-slot"></div>

    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="bg-blue-600 text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 class="text-2xl md:text-4xl font-semibold mb-6">
            ${t("aboutPage.ctaTitle")}
          </h2>
          <p class="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            ${t("aboutPage.ctaBody")}
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
              ${t("common.bookAppointment")}
            </a>
            <a href="#contact" class="border border-white text-gray-900 bg-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              ${t("common.contactUs")}
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  const heroSection = document.createElement("hero-section");
  heroSection.setAttribute("variant", "about");
  section.prepend(heroSection);

  const servicesSlot = section.querySelector("#about-services-slot");
  if (servicesSlot) {
    servicesSlot.replaceWith(
      createExpandableServicesSection({ variant: "about" }),
    );
  }

  return section;
}
