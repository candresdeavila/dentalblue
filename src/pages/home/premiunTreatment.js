import { getLang, t } from "../../i18n/i18n.js";

export function renderPremiun() {
  const title = t("premium.title")
    .replace(" at ", " <br>at ")
    .replace(" a ", " <br>a ");
  const section = document.createElement("section");
  section.className =
    "container mx-auto bg-blue-600 text-white rounded-[40px] p-10 md:p-16 mb-20";
  section.dataset.lang = getLang();

  section.innerHTML = `
<div>
  <h2 class="text-2xl md:text-4xl font-semibold text-center mb-10">
    ${title}
  </h2>
  <p class="text-white/80 max-w-2xl mx-auto mb-10 text-base md:text-lg">
    ${t("premium.paragraph")}
  </p>
  <div class="flex flex-col sm:flex-row justify-center gap-4">
    <a href="#services" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
      ${t("premium.primaryCta")}
    </a>

    <button class="border border-white hover:bg-white hover:text-[#3B68FF] font-semibold px-8 py-3 rounded-xl transition">
      ${t("premium.secondaryCta")}
    </button>
  </div>
</div>
`;

  return section;
}
