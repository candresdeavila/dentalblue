export function renderTeam() {
  const section = document.createElement("section");
  section.id = "team";
  section.className =
    "py-16 bg-blue-500 text-white flex flex-col items-center";

  section.innerHTML = `
    <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
      Professional and Skilled Dentist Team
    </h2>

    <div class="relative max-w-6xl w-full px-6">
      <!-- Contenedor visible -->
      <div class="overflow-hidden">
        <!-- Carrusel -->
        <div id="team-carousel" class="flex transition-transform duration-500 ease-in-out">
          ${[
            {
              name: "Dr. Shelley Robinson",
              role: "Dental Surgeon",
              img: "dentista-con-herramientas-de-odontologia-aislado.jpg",
            },
            {
              name: "Dr. Ralph Edwards",
              role: "Dental Surgeon",
              img: "dentista-con-herramientas-de-odontologia-aislado.jpg",
            },
            {
              name: "Dr. Nicola Lester",
              role: "Dental Surgeon",
              img: "dentista-con-herramientas-de-odontologia-aislado.jpg",
            },
            {
              name: "Dr. Daniel Foster",
              role: "Orthodontist",
              img: "dentista-con-herramientas-de-odontologia-aislado.jpg",
            },
            {
              name: "Dr. Emma Hayes",
              role: "Pediatric Dentist",
              img: "dentista-con-herramientas-de-odontologia-aislado.jpg",
            },
          ]
            .map(
              (m) => `
            <div class="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 flex justify-center px-2">
              <div class="bg-white rounded-3xl p-6 shadow-lg text-gray-900 w-full flex flex-col items-center hover:scale-105 transition">
                <img src="${m.img}" alt="${m.name}" class="w-48 h-48 object-cover rounded-2xl mb-4" />
                <h3 class="text-lg font-semibold">${m.name}</h3>
                <p class="text-sm text-gray-600">${m.role}</p>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>

      <!-- Botones -->
      <button id="prev-team" class="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-400 hover:bg-blue-600 text-white rounded-full p-3 shadow-md transition">
        &#10094;
      </button>
      <button id="next-team" class="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-400 hover:bg-blue-600 text-white rounded-full p-3 shadow-md transition">
        &#10095;
      </button>
    </div>
  `;

  // ----- Lógica del carrusel -----
  const carousel = section.querySelector("#team-carousel");
  const totalCards = 5;
  let visibleCards = getVisibleCards();
  let currentIndex = 0;

  function getVisibleCards() {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  }

  function updateCarousel() {
    const offset = (currentIndex * 100) / visibleCards;
    carousel.style.transform = `translateX(-${offset}%)`;
  }

  section.querySelector("#next-team").addEventListener("click", () => {
    if (currentIndex < totalCards - visibleCards) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  section.querySelector("#prev-team").addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalCards - visibleCards;
    }
    updateCarousel();
  });

  // Recalcular visibleCards al cambiar el tamaño de pantalla
  window.addEventListener("resize", () => {
    visibleCards = getVisibleCards();
    currentIndex = 0; // reinicia posición
    updateCarousel();
  });

  return section;
}