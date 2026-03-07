class ChatWidget extends HTMLElement {
  constructor() {
    super();
    this.isOpen = false;
    this.isTyping = false;
    this.defaultPanelHeight = "min(520px, calc(100vh - 140px))";
    this.defaultPanelMaxHeight = "calc(100vh - 140px)";
    this.keyboardOffset = 80;
    this.messages = [
      {
        role: "model",
        parts: [
          {
            text: "¡Hola! 👋 Soy Sofía, asistente virtual de Dental Blue. ¿En qué puedo ayudarte hoy?",
          },
        ],
      },
    ];
  }

  connectedCallback() {
    if (this.childElementCount > 0) return;

    this.innerHTML = `
      <div class="fixed bottom-[4.75rem] right-4 md:bottom-[6rem] md:right-6 z-50">
        <button
          type="button"
          data-chat-toggle
          aria-label="Abrir chat de Dental Blue"
          class="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1E90FF] text-white shadow-lg hover:brightness-95 transition-all duration-300 flex items-center justify-center text-xl md:text-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          💬
        </button>
      </div>

      <section
        data-chat-panel
        class="hidden fixed bottom-[8.5rem] right-4 md:bottom-[10rem] md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm h-[min(520px,calc(100vh-140px))] max-h-[calc(100vh-140px)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        aria-label="Chat con Sofía"
      >
        <header class="bg-[#1E90FF] text-white px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-white text-[#1E90FF] font-bold flex items-center justify-center">S</div>
            <div>
              <p class="font-semibold leading-tight">Sofía</p>
              <p class="text-xs text-blue-100 leading-tight">Asistente Dental Blue</p>
            </div>
          </div>
          <button
            type="button"
            data-chat-close
            aria-label="Cerrar chat"
            class="text-white/90 hover:text-white text-lg leading-none"
          >
            ×
          </button>
        </header>

        <div data-chat-messages class="flex-1 min-h-0 overflow-y-auto px-3 py-3 bg-slate-50 space-y-2"></div>

        <form data-chat-form class="p-3 border-t border-slate-200 bg-white flex items-center gap-2">
          <input
            data-chat-input
            type="text"
            placeholder="Escribe tu mensaje..."
            class="flex-1 border border-slate-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
            maxlength="500"
            required
          />
          <button
            type="submit"
            class="rounded-full bg-[#1E90FF] text-white px-4 py-2 text-sm font-medium hover:brightness-95 transition-all"
          >
            Enviar
          </button>
        </form>
      </section>
    `;

    this.toggleButton = this.querySelector("[data-chat-toggle]");
    this.panel = this.querySelector("[data-chat-panel]");
    this.closeButton = this.querySelector("[data-chat-close]");
    this.messagesEl = this.querySelector("[data-chat-messages]");
    this.form = this.querySelector("[data-chat-form]");
    this.input = this.querySelector("[data-chat-input]");

    this.toggleButton.addEventListener("click", () => this.openChat());
    this.closeButton.addEventListener("click", () => this.closeChat());
    this.form.addEventListener("submit", (event) => this.handleSubmit(event));
    this.input.addEventListener("focus", () => this.adjustForKeyboard());
    this.input.addEventListener("blur", () => {
      window.setTimeout(() => this.adjustForKeyboard(), 120);
    });

    this.viewportResizeHandler = () => {
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      this.adjustForKeyboard(viewportHeight);
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", this.viewportResizeHandler);
    } else {
      window.addEventListener("resize", this.viewportResizeHandler);
    }

    this.renderMessages();
  }

  disconnectedCallback() {
    if (window.visualViewport && this.viewportResizeHandler) {
      window.visualViewport.removeEventListener("resize", this.viewportResizeHandler);
    } else if (this.viewportResizeHandler) {
      window.removeEventListener("resize", this.viewportResizeHandler);
    }
  }

  openChat() {
    this.isOpen = true;
    this.panel.classList.remove("hidden");
    this.toggleButton.classList.add("hidden");
    this.input.focus();
    this.adjustForKeyboard();
  }

  closeChat() {
    this.isOpen = false;
    this.panel.classList.add("hidden");
    this.toggleButton.classList.remove("hidden");
    this.restorePanelHeight();
  }

  scrollToBottom() {
    this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
  }

  getViewportHeight() {
    return window.visualViewport?.height || window.innerHeight;
  }

  isKeyboardActive(viewportHeight) {
    const screenHeight = window.screen?.height || window.innerHeight;
    const isMobileViewport = window.matchMedia("(max-width: 767px)").matches;
    return isMobileViewport && screenHeight - viewportHeight > 120;
  }

  restorePanelHeight() {
    this.panel.style.height = this.defaultPanelHeight;
    this.panel.style.maxHeight = this.defaultPanelMaxHeight;
  }

  adjustForKeyboard(viewportHeight = this.getViewportHeight()) {
    if (!this.panel) return;

    if (this.isKeyboardActive(viewportHeight)) {
      const dynamicHeight = Math.max(260, Math.floor(viewportHeight - this.keyboardOffset));
      this.panel.style.height = `${dynamicHeight}px`;
      this.panel.style.maxHeight = `${dynamicHeight}px`;
    } else {
      this.restorePanelHeight();
    }

    window.requestAnimationFrame(() => this.scrollToBottom());
  }

  renderMessages() {
    const bubbles = this.messages
      .map((message) => {
        const isUser = message.role === "user";
        const text = message.parts?.[0]?.text ?? "";
        return `
          <div class="flex ${isUser ? "justify-end" : "justify-start"}">
            <div class="${isUser ? "bg-[#1E90FF] text-white" : "bg-white text-slate-800 border border-slate-200"} max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm whitespace-pre-wrap">
              ${this.escapeHTML(text)}
            </div>
          </div>
        `;
      })
      .join("");

    const typing = this.isTyping
      ? `
        <div class="flex justify-start">
          <div class="bg-white text-slate-500 border border-slate-200 max-w-[85%] rounded-2xl px-3 py-2 text-sm shadow-sm">
            Sofía está escribiendo...
          </div>
        </div>
      `
      : "";

    this.messagesEl.innerHTML = `${bubbles}${typing}`;
    this.scrollToBottom();
  }

  escapeHTML(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  async handleSubmit(event) {
    event.preventDefault();
    const value = this.input.value.trim();
    if (!value || this.isTyping) return;

    this.messages.push({
      role: "user",
      parts: [{ text: value }],
    });
    this.input.value = "";
    this.isTyping = true;
    this.renderMessages();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: this.messages }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "No se pudo obtener respuesta del asistente.");
      }

      this.messages.push({
        role: "model",
        parts: [{ text: data.reply || "No recibí respuesta. ¿Puedes intentarlo de nuevo?" }],
      });
    } catch (error) {
      this.messages.push({
        role: "model",
        parts: [
          {
            text: "Lo siento, tuve un problema técnico. Puedes escribirnos por WhatsApp para ayudarte enseguida.",
          },
        ],
      });
      console.error("Chat widget error:", error);
    } finally {
      this.isTyping = false;
      this.renderMessages();
    }
  }
}

if (!customElements.get("chat-widget")) {
  customElements.define("chat-widget", ChatWidget);
}
