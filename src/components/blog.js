export function createBlogSection() {
    const section = document.createElement("section");
    section.id = "blog";
    section.className = "py-20 bg-gray-50";

    section.innerHTML = `
    <!-- 1️⃣ Sub-sección: Estadísticas / Logros -->
    <div class="container mx-auto text-center mb-20">
      <h2 class="text-3xl font-bold mb-10">The Reasons Smile Bright is Unbeatable</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
         <div class="flex flex-col items-center justify-center w-40 h-40 mx-auto rounded-full bg-[#ecf2ff]">
          <p class="text-4xl font-bold text-blue-600">25+</p>
          <p class="text-gray-700 text-sm">Total Branches</p>
        </div>
        <div class="flex flex-col items-center justify-center w-40 h-40 mx-auto rounded-full bg-[#ecf2ff]">
          <p class="text-4xl font-bold text-blue-600">12+</p>
          <p class="text-gray-700 text-sm">Years Experience</p>
        </div>
        <div class="flex flex-col items-center justify-center w-40 h-40 mx-auto rounded-full bg-[#ecf2ff]">
          <p class="text-4xl font-bold text-blue-600">16k+</p>
          <p class="text-gray-700 text-sm">Smiles Restored</p>
        </div>
        <div class="flex flex-col items-center justify-center w-40 h-40 mx-auto rounded-full bg-[#ecf2ff]">
          <p class="text-4xl font-bold text-blue-600">86+</p>
          <p class="text-gray-700 text-sm">Skilled Dentists</p>
        </div>
    </div>

    </div>

    <!-- 2️⃣ Sub-sección: Diferencias / Características -->
<div class="container mx-auto bg-blue-600 text-white rounded-[40px] p-10 md:p-16 mb-20">
  <h2 class="text-2xl md:text-4xl font-semibold text-center mb-10">
    What Makes Us Different From Others
  </h2>

  <div class="grid md:grid-cols-2 gap-10 items-center">
    <!-- Lado izquierdo -->
    <div class="space-y-6">
      <!-- Tarjeta 1 -->
      <div class="bg-white bg-opacity-90 border border-blue-100 rounded-3xl p-6 shadow-sm">
        <div class="flex items-start gap-4">
          <p class="text-blue-600 text-xl font-bold italic">01</p>
          <div>
            <h3 class="font-bold text-lg text-black mb-2">Advanced Technology</h3>
            <p class="text-gray-500 leading-relaxed">
              We use technology such as digital X-rays, intraoral cameras, and 3D imaging. 
              Our goal is to ensure accurate diagnoses, effective treatments, and patient comfort.
            </p>
          </div>
        </div>
      </div>

      <!-- Tarjeta 2 -->
      <div class="bg-white bg-opacity-90 border border-blue-100 rounded-3xl p-6 shadow-sm">
        <div class="flex items-start gap-4">
          <p class="text-blue-600 text-xl font-bold italic">02</p>
          <div>
            <h3 class="font-bold text-lg text-black mb-2">A Dedicated Team</h3>
            <p class="text-gray-500 leading-relaxed">
              Providing outstanding patient care is the top priority for our team of skilled dentists. 
              They are dedicated to delivering personalized and high-quality dental care.
            </p>
          </div>
        </div>
      </div>

      <!-- Tarjeta 3 -->
      <div class="bg-white bg-opacity-90 border border-blue-100 rounded-3xl p-6 shadow-sm">
        <div class="flex items-start gap-4">
          <p class="text-blue-600 text-xl font-bold italic">03</p>
          <div>
            <h3 class="font-bold text-lg text-black mb-2">Personalized Care</h3>
            <p class="text-gray-500 leading-relaxed">
              Our clinic offers personalized care. Our team specializes in creating tailored treatment plans 
              following thorough examinations and thoughtful discussions.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lado derecho -->
    <div class="relative">
      <img
        src="./dentista-con-herramientas-de-odontologia-aislado.jpg"
        alt="Dentist treating patient"
        class="rounded-[40px] shadow-2xl w-full object-cover"
      />
    </div>
  </div>
</div>




    <!-- 3️⃣ Sub-sección: Testimonios -->
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-10">What Our Patients Are Saying</h2>
      <p class="text-gray-600 max-w-2xl mx-auto mb-12">
        We are proud to have gained the trust of countless patients through
        excellent service and professional care.
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-3xl shadow-lg">
          <p class="text-gray-600 italic mb-4">"Amazing experience and friendly staff!"</p>
          <h4 class="font-bold text-blue-600">Ashley Williams</h4>
          <p class="text-sm text-gray-500">Patient</p>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow-lg">
          <p class="text-gray-600 italic mb-4">"They truly care about your smile!"</p>
          <h4 class="font-bold text-blue-600">Renny Thompson</h4>
          <p class="text-sm text-gray-500">Patient</p>
        </div>
        <div class="bg-white p-8 rounded-3xl shadow-lg">
          <p class="text-gray-600 italic mb-4">"State-of-the-art technology and service."</p>
          <h4 class="font-bold text-blue-600">Dr. Lisa Moreno</h4>
          <p class="text-sm text-gray-500">Patient</p>
        </div>
      </div>
    </div>
  `;

    return section;
}
