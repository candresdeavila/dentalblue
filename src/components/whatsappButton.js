export function renderWhatsappButton() {
  const link = document.createElement("a");

  link.href = "https://wa.me/573012641845?text=Hola%20quiero%20agendar%20una%20cita%20en%20Dental%20Blue";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.setAttribute("aria-label", "Chat en WhatsApp con Dental Blue");

  link.className = `
    fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50
    w-12 h-12 md:w-14 md:h-14
    flex items-center justify-center
    rounded-full bg-green-500 shadow-lg
    hover:bg-green-600 hover:scale-110
    focus:outline-none focus:ring-4 focus:ring-green-300
    transition-all duration-300
  `;

  link.innerHTML = `
    <img src="/whatsapp.svg" alt="WhatsApp" class="w-6 h-6 md:w-7 md:h-7" />
  `;

  return link;
}
