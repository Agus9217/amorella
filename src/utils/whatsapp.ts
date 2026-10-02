export const WHATSAPP_PHONE = '5491100000000'; // Default phone number for WhatsApp

export function getWhatsAppUrl(message?: string): string {
  const defaultText = 'Hola Estética Amorella, deseo consultar por un tratamiento facial.';
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}

export function getTreatmentWhatsAppUrl(treatmentTitle: string): string {
  const message = `Hola Estética Amorella, me gustaría consultar disponibilidad y detalles sobre el tratamiento "${treatmentTitle}".`;
  return getWhatsAppUrl(message);
}

export function getBookingWhatsAppUrl(details: {
  treatment: string;
  name: string;
  preferredDate?: string;
  preferredShift?: string;
  notes?: string;
}): string {
  let message = `Hola Estética Amorella! Quisiera coordinar un turno:\n`;
  message += `• Nombre: ${details.name}\n`;
  message += `• Tratamiento: ${details.treatment}\n`;
  if (details.preferredDate) {
    message += `• Fecha estimada: ${details.preferredDate}\n`;
  }
  if (details.preferredShift) {
    message += `• Franja horaria: ${details.preferredShift}\n`;
  }
  if (details.notes) {
    message += `• Consulta sobre mi piel: ${details.notes}\n`;
  }
  return getWhatsAppUrl(message);
}

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQTZLPys_ZR-x6Ml2WMIYO1n5Ph71MFOTx4ACeRbUqa7hsGmRSdX-DMiGyLI0trKN-kMqCXp8Ikzk3APfx9nxNIy3felbeXBMee6fYfBmRDsnFCRRLm2KvNJp4E6fb-9p0Iu3L7awzcB8wvX8-m_1-gUW8XEa4xK3-ToFKXUniBfKJL1cmn6QybRrDrzuXXb7cPWODfcn-W2M7XnaIqCuVxpcHqxS7F0d1LQmYU2LCGDMmMIJztWXiWdv7ASWVcLZY6A';

export const SEAL_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnyIUiKklz6IsCge1J4bDOEP_jYKmS_y2lCg4RJ5vF7ssiC49GWVChod-7U76MQ2wUNJ1uRWL0d63tazqjUM9dvQ9M74UtH0Onbc1q6h-I05Vvlj-2DOOlUdUMfXP4kE0AiPfGcnwmmLb3YUDLhLa-Or7oUE_274x8GbWDGDJ4OzeB-9wlKF7WiUY24ARIT60tlgaG2qooKMnfIZgqJxLW92aWzsRBWF7_nsjWAjOlKRN86f5IsFqPZgcVUEVguMjUbw';
