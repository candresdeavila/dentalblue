export function renderAboutUs() {

  const section = document.createElement('section');
  section.className = "bg-white";

  section.innerHTML = `
    <!-- Hero Section -->
    <div class="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">About Us</span>
            <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Transforming Smiles, <span class="text-blue-600">Changing Lives</span>
            </h1>
            <p class="text-lg text-gray-600 max-w-xl mb-8">
              At Dental Blue, we believe everyone deserves a healthy, beautiful smile.
              For over 12 years, we've been dedicated to providing exceptional dental care
              with a personal touch that makes our patients feel like family.
            </p>
            <div class="flex flex-wrap gap-4">
              <a href="#team" class="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                Meet Our Team
              </a>
              <a href="#contact" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
                Schedule a Visit
              </a>
            </div>
          </div>
          <div class="flex justify-center lg:justify-end relative">
            <div class="w-80 lg:w-[520px] img-card img-card--large h-[500px] relative">
              <img src="/assets/images/about/dental-clinic-interior.jpg" alt="Dental Blue Modern Clinic" class="object-cover">
              <div class="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-2xl p-4 shadow-xl z-10">
                <div class="text-3xl font-bold">12+</div>
                <div class="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Our Story Section -->
    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Story</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            From humble beginnings to becoming a trusted name in dental care,
            our journey has been defined by passion and dedication.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <p class="text-gray-600">
              Dental Blue was founded in 2013 by Dr. Maria Santos with a simple yet powerful
              mission: to make quality dental care accessible to everyone while creating a
              warm, welcoming environment that puts patients at ease.
            </p>
            <p class="text-gray-600">
              What started as a single clinic has grown into a network of 25+ branches,
              each maintaining the same commitment to excellence and personalized care
              that defined our first location.
            </p>
            <p class="text-gray-600">
              Today, our team of 86+ skilled dentists continues to uphold the values that
              made Dental Blue a household name, combining cutting-edge technology with
              compassionate care to deliver outstanding results.
            </p>
          </div>

          <!-- Timeline -->
          <div class="space-y-6">
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2013</div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Founded</h4>
                <p class="text-gray-500 text-sm">Dental Blue opened its first clinic with a vision to transform dental care.</p>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2016</div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Expansion</h4>
                <p class="text-gray-500 text-sm">Opened 5 additional branches across the region.</p>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2019</div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Technology</h4>
                <p class="text-gray-500 text-sm">Implemented state-of-the-art 3D imaging and digital X-rays.</p>
              </div>
            </div>
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div class="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">2023</div>
              <div>
                <h4 class="font-bold text-gray-900 mb-1">Recognition</h4>
                <p class="text-gray-500 text-sm">Awarded 'Best Dental Practice' for exceptional patient care.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission & Vision -->
    <div class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="bg-blue-600 text-white rounded-3xl p-10 md:p-16">
          <div class="grid md:grid-cols-2 gap-12">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl">🎯</span>
                <h3 class="text-2xl font-bold">Our Mission</h3>
              </div>
              <p class="text-white/90 leading-relaxed">
                To deliver exceptional dental care that transforms smiles and improves lives,
                making every patient feel valued, comfortable, and confident in their dental health journey.
              </p>
            </div>
            <div>
              <div class="flex items-center gap-3 mb-4">
                <span class="text-2xl">✨</span>
                <h3 class="text-2xl font-bold">Our Vision</h3>
              </div>
              <p class="text-white/90 leading-relaxed">
                To be the most trusted dental care provider, setting the standard for excellence,
                innovation, and patient satisfaction in every community we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Core Values -->
    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Our Core Values</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at Dental Blue
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl">❤️</span>
            </div>
            <h4 class="font-bold text-gray-900 text-lg mb-3">Compassionate Care</h4>
            <p class="text-gray-500 text-sm">We treat every patient with empathy and understanding, ensuring a comfortable experience.</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl">🛡️</span>
            </div>
            <h4 class="font-bold text-gray-900 text-lg mb-3">Excellence & Safety</h4>
            <p class="text-gray-500 text-sm">Our commitment to the highest standards of dental care and patient safety is unwavering.</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl">👥</span>
            </div>
            <h4 class="font-bold text-gray-900 text-lg mb-3">Patient-Centered</h4>
            <p class="text-gray-500 text-sm">Your needs and comfort are at the heart of everything we do at Dental Blue.</p>
          </div>
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div class="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl">🏆</span>
            </div>
            <h4 class="font-bold text-gray-900 text-lg mb-3">Continuous Learning</h4>
            <p class="text-gray-500 text-sm">Our team stays updated with the latest dental advancements and techniques.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">The Reasons We're Unbeatable</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div class="w-36 h-36 rounded-full border-4 border-blue-100 flex flex-col items-center justify-center mx-auto">
            <p class="text-3xl md:text-4xl font-bold text-blue-600">25+</p>
            <p class="text-gray-500 text-sm text-center">Total Branches</p>
          </div>
          <div class="w-36 h-36 rounded-full border-4 border-blue-100 flex flex-col items-center justify-center mx-auto">
            <p class="text-3xl md:text-4xl font-bold text-blue-600">12+</p>
            <p class="text-gray-500 text-sm text-center">Years Experience</p>
          </div>
          <div class="w-36 h-36 rounded-full border-4 border-blue-100 flex flex-col items-center justify-center mx-auto">
            <p class="text-3xl md:text-4xl font-bold text-blue-600">16k+</p>
            <p class="text-gray-500 text-sm text-center">Smiles Restored</p>
          </div>
          <div class="w-36 h-36 rounded-full border-4 border-blue-100 flex flex-col items-center justify-center mx-auto">
            <p class="text-3xl md:text-4xl font-bold text-blue-600">86+</p>
            <p class="text-gray-500 text-sm text-center">Skilled Dentists</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section (reused web component) -->
    <div id="team" class="py-20 bg-white">
      <team-section></team-section>
    </div>

    <!-- What Makes Us Different -->
    <div class="py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="bg-blue-600 text-white rounded-3xl p-10 md:p-16">
          <h2 class="text-2xl md:text-4xl font-semibold text-center mb-10">
            What Makes Us Different
          </h2>

          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="space-y-6">
              <div class="bg-white/10 border border-white/20 rounded-3xl p-6">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold shrink-0">01</div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Advanced Technology</h3>
                    <p class="text-white/80 leading-relaxed">We use digital X-rays, intraoral cameras, and 3D imaging for accurate diagnoses and effective treatments.</p>
                  </div>
                </div>
              </div>
              <div class="bg-white/10 border border-white/20 rounded-3xl p-6">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold shrink-0">02</div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">A Dedicated Team</h3>
                    <p class="text-white/80 leading-relaxed">Our skilled dentists prioritize outstanding patient care with personalized, high-quality dental services.</p>
                  </div>
                </div>
              </div>
              <div class="bg-white/10 border border-white/20 rounded-3xl p-6">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold shrink-0">03</div>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Personalized Care</h3>
                    <p class="text-white/80 leading-relaxed">We create tailored treatment plans following thorough examinations and thoughtful discussions with each patient.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img src="/assets/images/about/dentista-con-herramientas-de-odontologia-aislado.jpg" alt="Dental Blue Team" class="rounded-[40px] shadow-2xl w-full object-cover">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="bg-blue-600 text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 class="text-2xl md:text-4xl font-semibold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p class="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Schedule your consultation today and experience the Dental Blue difference.
            Our team is ready to help you achieve the smile you've always wanted.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
              Book Appointment
            </a>
            <a href="#contact" class="border border-white text-gray-900 bg-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  return section;
}
