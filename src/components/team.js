export function createTeamSection() {
  const section = document.createElement("section");
  section.id = "team";
  section.className = "bg-blue-600 text-white py-20 px-6 md:px-16";

  section.innerHTML = `
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold mb-12 leading-snug">
        Professional and <br /> Skilled Dentist Team
      </h2>

      <div class="grid gap-8 md:grid-cols-3">
        <!-- Card 1 -->
        <div class="bg-white rounded-3xl p-6 shadow-lg text-gray-900">
          <img 
            src="./dentista-con-herramientas-de-odontologia-aislado.jpg" 
            alt="Dr. Shelley Robinson" 
            class="rounded-2xl mb-6 w-full h-auto object-cover"
          />
          <h3 class="text-lg font-bold mb-1">Dr. Shelley Robinson</h3>
          <p class="text-blue-600 font-medium">Dental Surgeon</p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white rounded-3xl p-6 shadow-lg text-gray-900">
          <img 
            src="./dentista-con-herramientas-de-odontologia-aislado.jpg" 
            alt="Dr. Ralph Edwards" 
            class="rounded-2xl mb-6 w-full h-auto object-cover"
          />
          <h3 class="text-lg font-bold mb-1">Dr. Ralph Edwards</h3>
          <p class="text-blue-600 font-medium">Dental Surgeon</p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white rounded-3xl p-6 shadow-lg text-gray-900">
          <img 
            src="./dentista-con-herramientas-de-odontologia-aislado.jpg" 
            alt="Dr. Nicola Lester" 
            class="rounded-2xl mb-6 w-full h-auto object-cover"
          />
          <h3 class="text-lg font-bold mb-1">Dr. Nicola Lester</h3>
          <p class="text-blue-600 font-medium">Dental Surgeon</p>
        </div>
      </div>
    </div>
  `;

  return section;
}
