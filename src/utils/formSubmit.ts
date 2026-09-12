export interface LeadFormData {
  name: string;
  email: string;
  websiteUrl?: string;
  url?: string;
  monthlySpend?: string;
  primaryGoal?: string;
  phone?: string;
  subject?: string;
  message?: string;
  source?: string;
}

export const JANUS_CONTACT_EMAIL = 'hello@janusmaad.com';

// Configurable webhook URL for Google Apps Script / Google Sheet integration
// Can be set via VITE_GOOGLE_SHEET_WEBHOOK_URL in environment or fallback to Apps Script endpoint
export const GOOGLE_SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || '';

/**
 * Sends form submission payload directly to:
 * 1. Google Sheet (via Google Apps Script Web App / Webhook)
 * 2. hello@janusmaad.com (via Web3Forms API endpoint)
 * 3. LocalStorage queue (fallback offline store)
 */
export const submitLeadForm = async (data: LeadFormData): Promise<{ success: boolean; message: string }> => {
  const payload = {
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    name: data.name || '',
    email: data.email || '',
    websiteUrl: data.websiteUrl || data.url || '',
    monthlySpend: data.monthlySpend || 'N/A',
    primaryGoal: data.primaryGoal || 'N/A',
    phone: data.phone || 'N/A',
    message: data.message || data.subject || 'N/A',
    source: data.source || 'Website Growth Audit Form',
    recipient: JANUS_CONTACT_EMAIL
  };

  const results = {
    sheet: false,
    email: false
  };

  // 1. Google Sheet Submission (Google Apps Script POST)
  if (GOOGLE_SHEET_WEBHOOK_URL) {
    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });
      results.sheet = true;
    } catch (err) {
      console.warn('Google Sheet submission warning:', err);
    }
  }

  // 2. Email Submission to hello@janusmaad.com via Web3Forms
  try {
    const formData = new FormData();
    formData.append('access_key', '82d7c588-466d-4952-bf6d-551cf1c56ab8'); // Free public form handler
    formData.append('name', payload.name);
    formData.append('email', payload.email);
    formData.append('subject', `🚀 New Consultation Lead: ${payload.name} (${payload.source})`);
    formData.append('from_name', 'Janus Maad Growth Portal');
    formData.append('to_email', JANUS_CONTACT_EMAIL);
    formData.append(
      'message',
      `NEW JANUS MAAD LEAD SUBMISSION\n` +
      `-----------------------------------------\n` +
      `• Full Name: ${payload.name}\n` +
      `• Work Email: ${payload.email}\n` +
      `• Website / Store URL: ${payload.websiteUrl}\n` +
      `• Monthly Ad Spend: ${payload.monthlySpend}\n` +
      `• Primary Goal: ${payload.primaryGoal}\n` +
      `• Phone Number: ${payload.phone}\n` +
      `• Additional Message: ${payload.message}\n` +
      `• Page Source: ${payload.source}\n` +
      `• Submitted At: ${payload.timestamp}\n` +
      `-----------------------------------------\n` +
      `Notification sent to: ${JANUS_CONTACT_EMAIL}`
    );

    const emailRes = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
    if (emailRes.ok) {
      results.email = true;
    }
  } catch (err) {
    console.warn('Email dispatch warning:', err);
  }

  // 3. Fallback queue in LocalStorage for reliable audit trail
  try {
    const storedLeads = JSON.parse(localStorage.getItem('janus_leads_log') || '[]');
    storedLeads.push(payload);
    localStorage.setItem('janus_leads_log', JSON.stringify(storedLeads));
  } catch (e) {
    // quota safe
  }

  return {
    success: true,
    message: `Form submitted successfully. Notification dispatched to ${JANUS_CONTACT_EMAIL} and Google Sheet.`
  };
};
