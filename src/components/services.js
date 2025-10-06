export function createServicesSection() {
  const section = document.createElement("section");
  section.id = "services";
  section.className = "bg-blue-600 py-20 px-6 md:px-16 text-white mt-12";

  section.innerHTML = `
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold mb-12">Our Dental Services</h2>

      <!-- ✅ Contenedor con clase group -->
      <div class="group grid gap-8 md:grid-cols-3 transition-all duration-500">

        <!-- Card -->
        <div class="bg-blue-500 bg-opacity-30 rounded-3xl p-8 text-center transition-all duration-500 
                    group-hover:bg-white group-hover:text-gray-800 group-hover:shadow-2xl group-hover:scale-[1.02]">
          <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all
                      group-hover:bg-blue-700">
            <img src="./clean-teeth.svg" alt="clean-teeth" class="invert w-10 h-10"/>
          </div>
          <h3 class="text-xl font-bold mb-4 group-hover:text-gray-900">Teeth Whitening</h3>
          <p class="text-blue-100 group-hover:text-gray-700 mb-6">
            Teeth whitening is an effective solution to remove stains and discoloration. Perfect way to boost your confidence.
          </p>
          <div class="hidden group-hover:block text-center">
            <a href="#" class="inline-block border border-blue-600 text-blue-600 font-semibold px-5 py-2 rounded-lg
                             hover:bg-blue-600 hover:text-white transition-all">
              Learn More
            </a>
          </div>
        </div>

        <!-- Card -->
        <div class="bg-blue-500 bg-opacity-30 rounded-3xl p-8 text-center transition-all duration-500 
                    group-hover:bg-white group-hover:text-gray-800 group-hover:shadow-2xl group-hover:scale-[1.02]">
          <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all
                      group-hover:bg-blue-700">
            <img src="./implant.svg" alt="teeth-implant" class="invert w-10 h-10"/>
          </div>
          <h3 class="text-xl font-bold mb-4 group-hover:text-gray-900">Dental Implant</h3>
          <p class="text-blue-100 group-hover:text-gray-700 mb-6">
            Dental implants provide a lasting fix for missing teeth. A reliable and long-lasting choice for your dental needs.
          </p>
          <div class="hidden group-hover:block text-center">
            <a href="#" class="inline-block border border-blue-600 text-blue-600 font-semibold px-5 py-2 rounded-lg
                             hover:bg-blue-600 hover:text-white transition-all">
              Learn More
            </a>
          </div>
        </div>

        <!-- Card -->
        <div class="bg-blue-500 bg-opacity-30 rounded-3xl p-8 text-center transition-all duration-500 
                    group-hover:bg-white group-hover:text-gray-800 group-hover:shadow-2xl group-hover:scale-[1.02]">
          <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all
                      group-hover:bg-blue-700">
            <img src="./tooth-_1_.svg" alt="toothexam" class="invert w-10 h-10"/>
          </div>
          <h3 class="text-xl font-bold mb-4 group-hover:text-gray-900">Dental Exams</h3>
          <p class="text-blue-100 group-hover:text-gray-700 mb-6">
            Regular dental exams help protect your teeth and gums, catch problems early, and keep your smile bright and healthy.
          </p>
          <div class="hidden group-hover:block text-center">
            <a href="#" class="inline-block border border-blue-600 text-blue-600 font-semibold px-5 py-2 rounded-lg
                             hover:bg-blue-600 hover:text-white transition-all">
              Learn More
            </a>
          </div>
        </div>

      </div>
    </div>
  `;

  return section;
}
