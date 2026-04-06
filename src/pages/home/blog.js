import { getLang, t } from "../../i18n/i18n.js";

export function createBlogSection() {
  const stats = t("blog.stats");
  const differences = t("blog.differences");
  const testimonials = t("blog.testimonials");
  const section = document.createElement("section");
  section.id = "blog";
  section.className = "py-20 bg-gray-50";
  section.dataset.lang = getLang();

  section.innerHTML = `
    <div class="container mx-auto text-center mb-20">
      <h2 class="text-3xl font-bold mb-10">${t("blog.statsTitle")}</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        ${stats
          .map(
            (item) => `
        <div class="flex flex-col items-center justify-center w-40 h-40 mx-auto rounded-full bg-[#ecf2ff]">
          <p class="text-4xl font-bold text-blue-600">${item.value}</p>
          <p class="text-gray-700 text-sm">${item.label}</p>
        </div>`,
          )
          .join("")}
      </div>
    </div>

    <div class="container mx-auto bg-blue-600 text-white rounded-[40px] p-10 md:p-16 mb-20">
      <h2 class="text-2xl md:text-4xl font-semibold text-center mb-10">
        ${t("blog.differencesTitle")}
      </h2>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 md:items-stretch">
        <div class="bg-white bg-opacity-90 border border-blue-100 rounded-3xl p-6 shadow-sm md:h-full lg:h-auto lg:order-1">
          <div class="flex items-start gap-4">
            <p class="text-blue-600 text-xl font-bold italic">${differences[0].number}</p>
            <div>
              <h3 class="font-bold text-lg text-black mb-2">${differences[0].title}</h3>
              <p class="text-gray-500 leading-relaxed">${differences[0].description}</p>
            </div>
          </div>
        </div>

        <div class="relative overflow-hidden rounded-[40px] shadow-2xl order-4 md:order-none md:h-full lg:row-span-3 lg:order-2">
          <img
            src="/assets/images/hero/dentista-con-herramientas-de-odontologia-aislado.webp"
            alt="${t("blog.imageAlt")}"
            loading="lazy"
            decoding="async"
            class="h-full w-full object-cover object-center md:min-h-[280px] lg:min-h-full lg:object-[82%_center]"
          />
        </div>

        <div class="bg-white bg-opacity-90 border border-blue-100 rounded-3xl p-6 shadow-sm md:h-full lg:h-auto lg:order-3">
          <div class="flex items-start gap-4">
            <p class="text-blue-600 text-xl font-bold italic">${differences[1].number}</p>
            <div>
              <h3 class="font-bold text-lg text-black mb-2">${differences[1].title}</h3>
              <p class="text-gray-500 leading-relaxed">${differences[1].description}</p>
            </div>
          </div>
        </div>

        <div class="bg-white bg-opacity-90 border border-blue-100 rounded-3xl p-6 shadow-sm md:h-full lg:h-auto lg:order-4">
          <div class="flex items-start gap-4">
            <p class="text-blue-600 text-xl font-bold italic">${differences[2].number}</p>
            <div>
              <h3 class="font-bold text-lg text-black mb-2">${differences[2].title}</h3>
              <p class="text-gray-500 leading-relaxed">${differences[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-10">${t("blog.testimonialsTitle")}</h2>
      <p class="text-gray-600 max-w-2xl mx-auto mb-12">
        ${t("blog.testimonialsIntro")}
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        ${testimonials
          .map(
            (item) => `
        <div class="bg-white p-8 rounded-3xl shadow-lg">
          <p class="text-gray-600 italic mb-4">${item.quote}</p>
          <h4 class="font-bold text-blue-600">${item.name}</h4>
          <p class="text-sm text-gray-500">${item.role}</p>
        </div>`,
          )
          .join("")}
      </div>
    </div>
  `;

  return section;
}
