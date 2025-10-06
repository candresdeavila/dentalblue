export function createConfidenceSection() {
  const section = document.createElement("section");
  section.id = "confidence";
  section.className = "bg-white py-20 px-6 md:px-16";

  section.innerHTML = `
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
      <!-- 🦷 Imagen -->
      <div class="rounded-[2rem] overflow-hidden shadow-lg">
        <img 
          src="./dentista-haciendo-un-chequeo-al-paciente.jpg" 
          alt="Dentist with patient" 
          class="w-full h-100 object-cover"
        />
      </div>

      <!-- 💬 Texto -->
      <div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Achieve a Confident Smile <br>With Us
        </h2>
        <p class="text-gray-600 mb-6 leading-relaxed">
          At Smile Bright, we’re dedicated to helping you achieve a healthy, radiant smile. 
          Our skilled team provides personalized, gentle care using the latest technology 
          in a welcoming environment. Your smile is our priority. Trust us to care for your dental health.
        </p>

        <!-- ✅ Lista de beneficios -->
        <ul class="space-y-3 mb-8">
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-circle-check text-blue-500 text-lg"><img src="./check.png" alt="check" class="h-5 w-5"></i>
            <span class="text-gray-700">Experienced and Caring Team of Professionals</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-circle-check text-blue-500 text-lg"><img src="./check.png" alt="check" class="h-5 w-5"></i>
            <span class="text-gray-700">Advanced Technology for Optimal Care Solutions</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-circle-check text-blue-500 text-lg"><img src="./check.png" alt="check" class="h-5 w-5"></i>
            <span class="text-gray-700">A Wide Range of Services to Meet All Your Needs</span>
          </li>
          <li class="flex items-center gap-3">
            <i class="fa-solid fa-circle-check text-blue-500 text-lg"><img src="./check.png" alt="check" class="h-5 w-5"></i>
            <span class="text-gray-700">Personalized Care Approaches for Each Patient</span>
          </li>
        </ul>

        <!-- 🔘 Botón -->
        <a 
          href="#services" 
          class="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg 
                 shadow-md hover:bg-blue-700 transition-all">
          Learn More
        </a>
      </div>
    </div>
  `;

  return section;
}
