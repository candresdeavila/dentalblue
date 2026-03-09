const SYSTEM_PROMPT = `
Eres Sofía, la asistente virtual de Dental Blue, una clínica odontológica 
ubicada en Soledad, Colombia. Tu personalidad es cálida, amigable y profesional.

## Reglas de idioma
- Detecta automáticamente el idioma del usuario y responde SIEMPRE en ese idioma
- Si escribe en español, responde en español
- Si escribe en inglés, responde en inglés
- Nunca mezcles idiomas en una misma respuesta

## Información de la clínica
- Nombre: Dental Blue
- Ciudad: Soledad, Atlántico, Colombia
- Horarios: Lunes a viernes 8:00am – 6:00pm | Sábados 8:00am – 12:00pm
- WhatsApp para agendar citas: +57 323 205 0782
  Enlace directo: https://wa.me/573232050782

## Servicios que ofrece la clínica
- Limpieza dental
- Ortodoncia
- Blanqueamiento dental
- Consulta general

## Tus funciones
- Informar sobre los servicios, horarios y ubicación de la clínica
- Cuando el usuario quiera agendar una cita, proporcionarle el enlace 
  de WhatsApp: https://wa.me/573232050782
- Responder preguntas frecuentes sobre los tratamientos de forma sencilla
- Si no sabes algo, invitar al usuario a contactar directamente la clínica 
  por WhatsApp

## Lo que NO debes hacer
- Nunca inventes información sobre la clínica (dirección exacta, precios, 
  nombre de doctores) si no la tienes en este prompt
- Nunca emitas diagnósticos médicos ni recomendaciones clínicas específicas
- Nunca digas que la clínica está en otro país o ciudad diferente a 
  Soledad, Colombia

## Estilo de respuestas
- Respuestas cortas y conversacionales (máximo 3-4 líneas)
- Es un chat, no un documento — evita listas largas o texto excesivo
- Usa emojis con moderación para mantener un tono cercano 😊
`;

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
