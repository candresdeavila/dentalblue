export function createServicesSection() {
  const section = document.createElement("section");
  section.id = "services";
  section.className = "bg-blue-600 py-20 px-6 md:px-16 text-white mt-12";

  section.innerHTML = `
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold mb-12">Our Dental Services</h2>

      <div class="grid gap-8 md:grid-cols-3">
        <!-- Card 1 -->
        <div class="bg-white text-gray-800 rounded-3xl p-8 shadow-lg">
          <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <i class="fa-solid fa-tooth text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold mb-4 text-center">Teeth Whitening</h3>
          <p class="text-gray-600 mb-6 text-center">
            Teeth whitening is an effective solution to remove stains and discoloration. Perfect way to boost your confidence.
          </p>
          <div class="text-center">
            <a href="#"
               class="inline-block border border-blue-600 text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
               Learn More
            </a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="bg-blue-500 bg-opacity-30 rounded-3xl p-8 text-center">
          <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <i class="fa-solid fa-screwdriver-wrench text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Dental Implant</h3>
          <p class="text-blue-100">
            Dental implants provide a lasting fix for missing teeth. A reliable and long-lasting choice for your dental needs.
          </p>
        </div>

        <!-- Card 3 -->
        <div class="bg-blue-500 bg-opacity-30 rounded-3xl p-8 text-center">
          <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
            <i class="fa-solid fa-user-md text-2xl text-white"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">Dental Exams</h3>
          <p class="text-blue-100">
            Regular dental exams help protect your teeth and gums, catch problems early, and keep your smile bright and healthy.
          </p>
        </div>
      </div>
    </div>
  `;

  return section;
}
