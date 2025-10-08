export function renderWelcome() {
  const section = document.createElement('section');
  section.className = "bg-white pt-5";

  section.innerHTML = `
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 lg:gap-16 lg:items-start pt-8">

      <!-- Columna izquierda: texto + botones + mini foto -->
      <div class="relative h-full">
        <h1 class="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Welcome to <span class="text-blue-600">Smile Bright</span> Dental Care
        </h1>
        <p class="mt-4 text-lg text-gray-600 max-w-xl">
          Our experienced dental team offers a blend of extensive knowledge and personalized professional care tailored to your specific needs.
        </p>

        <div class="mt-8 flex items-center space-x-4">
          <a href="#services" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            View Services
          </a>
          <a href="#contact" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
            Schedule a Call
          </a>
        </div>

        <!-- mini imagen debajo de los botones -->
        <div class="mt-12 w-72 relative z-10">
          <div class="img-card img-card--small h-72">
            <img src="./dentista-con-herramientas-de-odontologia-aislado.jpg" alt="Paciente" class="object-cover" style="object-position: 50% 20%;">
          </div>
        </div>
      </div>

      <!-- Columna derecha: imagen grande con badge -->
      <div class="flex justify-center lg:justify-end relative mt-4 h-full">
        <div class="w-80 lg:w-[520px] img-card img-card--large h-[600px] relative">
          <img src="./dentista-haciendo-un-chequeo-al-paciente.jpg" alt="Dentista" class="object-cover" style="object-position: 50% 30%;">
          <div class="absolute bottom-6 right-6 z-10">
            <div class="badge">12+ Years Experience</div>
          </div>
          <!-- Logo circular 
          <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-20">
            <img src="/public/tooth.svg" alt="Logo" class="w-12 h-12 text-white">
          </div>-->
        </div>
      </div>

    </div>

    <!-- logos -->
    <div class="mt-24 max-w-5xl mx-auto px-6">
      <div class="flex justify-center items-center flex-wrap grayscale opacity-60 gap-x-30">
        <img src="./colgate-logo-1.svg" alt="Colgate" class="h-14 w-14">
        <img src="./oral-b.svg" alt="Oral-B" class="h-14 w-14">
        <img src="./polanco.png" alt="Oral-B" class="h-14 w-19">
        <img src="./Logo-Adental.png" alt="Oral-B" class="h-6 w-14">
      </div>
    </div>
  `;

  return section;
}
