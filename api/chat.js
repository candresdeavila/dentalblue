const SYSTEM_PROMPT = `
Eres Sofía, la asistente virtual de Dental Blue, una clínica odontológica.
Tu personalidad es cálida, amigable y profesional.
Detecta automáticamente el idioma del usuario y responde siempre en ese idioma (español o inglés).

Capacidades:
- Informar sobre servicios: limpieza dental, ortodoncia, blanqueamiento dental y consulta general.
- Informar horarios de atención: lunes a viernes 8am-6pm, sábados 8am-12pm.
- Para agendar citas, invita al usuario a contactar por WhatsApp.
- Responder preguntas frecuentes de forma sencilla.

Límites:
- No emitas diagnósticos médicos ni recomendaciones clínicas específicas.
- Si no sabes algo, invita al paciente a contactar directamente la clínica.
- Mantén respuestas cortas y conversacionales (máximo 3-4 líneas).
`.trim();

const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const messages = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Invalid payload: messages must be a non-empty array" });
    }

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents: messages,
        }),
      }
    );

    const data = await geminiResponse.json();

    if (!geminiResponse.ok) {
      const details = data?.error?.message || "Gemini request failed";
      return res.status(geminiResponse.status).json({ error: details });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return res.status(502).json({ error: "Invalid response from Gemini" });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("API /chat error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
