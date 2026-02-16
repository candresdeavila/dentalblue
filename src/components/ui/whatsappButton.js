class WhatsAppButton extends HTMLElement {
  connectedCallback() {
    if (this.childElementCount > 0) return;

    this.innerHTML = `
      <a
        href="https://wa.me/573012641845?text=Hola%20quiero%20agendar%20una%20cita%20en%20Dental%20Blue"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat en WhatsApp con Dental Blue"
        class="
          fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50
          w-12 h-12 md:w-14 md:h-14
          flex items-center justify-center
          rounded-full bg-green-500 shadow-lg
          hover:bg-green-600 hover:scale-110
          focus:outline-none focus:ring-4 focus:ring-green-300
          transition-all duration-300
        "
      >
        <img src="/assets/icons/whatsapp.svg" alt="WhatsApp" class="w-6 h-6 md:w-7 md:h-7" />
      </a>
    `;
  }
}

if (!customElements.get("whatsapp-button")) {
  customElements.define("whatsapp-button", WhatsAppButton);
}
