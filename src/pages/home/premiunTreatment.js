export function renderPremiun() {
  const section = document.createElement('section');
  section.className = "container mx-auto bg-blue-600 text-white rounded-[40px] p-10 md:p-16 mb-20";

  section.innerHTML = `

<!-- Premiun Section -->
<div>
  <h2 class="text-2xl md:text-4xl font-semibold text-center mb-10">
    Premium Dental Treatment <br> at affordable Prices
  </h2>
  <p class="text-white/80 max-w-2xl mx-auto mb-10 text-base md:text-lg">
        To help keep these treatments as affordable as possible, we have kept our prices
        extremely reasonable when compared to other clinics.
  </p>
  <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#services" class="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-sm">
          Learn More
        </a>

        <button class="border border-white hover:bg-white hover:text-[#3B68FF] font-semibold px-8 py-3 rounded-xl transition">
          Schedule a Call
        </button>
  </div>
    
</div>
`;

  return section;
}
