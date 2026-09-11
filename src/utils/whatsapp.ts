export const WHATSAPP_NUMBER = '919818747001';
export const DISPLAY_PHONE = '+91 98187 47001';

export interface WhatsAppAuditData {
  name: string;
  email: string;
  phone?: string;
  websiteUrl?: string;
  subject?: string;
  monthlySpend?: string;
  primaryGoal?: string;
  message?: string;
}

export const openWhatsApp = (customMessage?: string) => {
  const defaultText = customMessage || `Hi JanusMAAD! I'm visiting your website and would like to talk to a growth strategist about scaling our brand performance.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const sendAuditToWhatsApp = (data: WhatsAppAuditData) => {
  const parts = [
    `🚀 *New Growth Audit Request (JanusMAAD)*`,
    ``,
    `👤 *Name:* ${data.name || 'Not provided'}`,
    `📧 *Email:* ${data.email || 'Not provided'}`,
  ];

  if (data.phone) parts.push(`📞 *Phone:* ${data.phone}`);
  if (data.websiteUrl) parts.push(`🌐 *Website:* ${data.websiteUrl}`);
  if (data.subject) parts.push(`🏷️ *Subject:* ${data.subject}`);
  if (data.monthlySpend) parts.push(`💰 *Monthly Budget:* ${data.monthlySpend}`);
  if (data.primaryGoal) parts.push(`🎯 *Primary Goal:* ${data.primaryGoal}`);
  if (data.message) parts.push(`💬 *Message:* ${data.message}`);

  parts.push(``, `_Sent via JanusMAAD Website Form_`);

  const fullText = parts.join('\n');
  openWhatsApp(fullText);
};
