export const WHATSAPP_NUMBER = "2001098396598"; // 🔥 حطي رقم واتساب هنا بدون +

export function openWhatsApp(serviceName: string, lang: "en" | "ar") {
  const message =
    lang === "ar"
      ? `مرحباً، أريد طلب خدمة: ${serviceName}`
      : `Hello, I want to order this service: ${serviceName}`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
