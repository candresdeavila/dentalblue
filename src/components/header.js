export function header() {
    document.querySelector('#app').innerHTML = `
 <header class="w-full bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-2">
        <img src="./tooth.png" alt="Smile Bright Logo" class="h-10 w-10">
        <span class="font-bold text-xl text-gray-900">Dental Blue</span>
      </a>

      <!-- Navigation (desktop) -->
      <nav class="hidden md:flex space-x-8 text-gray-600 font-medium">
        <a href="#about" class="hover:text-blue-500">About Us</a>
        <a href="#services" class="hover:text-blue-500">Our Services</a>
        <a href="#team" class="hover:text-blue-500">Team</a>
        <a href="#blog" class="hover:text-blue-500">Blog</a>
      </nav>

      <!-- Contact button -->
      <a href="#contact" class="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
        Contact Us
      </a>

      <!-- Mobile menu button -->
      <button id="menu-btn" class="md:hidden flex items-center text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile nav -->
  <div id="menu" class="hidden md:hidden px-4 pb-4 space-y-2 text-gray-600 font-medium">
    <a href="#about" class="block hover:text-blue-500">About Us</a>
    <a href="#services" class="block hover:text-blue-500">Our Services</a>
    <a href="#team" class="block hover:text-blue-500">Team</a>
    <a href="#blog" class="block hover:text-blue-500">Blog</a>
    <a href="#contact" class="block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
      Contact Us
    </a>
  </div>
</header>
`
}