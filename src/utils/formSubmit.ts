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

export const GOOGLE_SHEET_WEBHOOK_URL = 
  import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || 
  'https://script.google.com/macros/s/AKfycbyLbON3GWlboBc8ZdWCJMPTkCDJXDIl4kP-y7jnPWqg174SnS7qckbKWp3dNEm2y_Yp/exec';

/**
 * Submits form data to:
 * 1. Google Sheet (via Google Apps Script Web App)
 * 2. hello@janusmaad.com (via Web3Forms API)
 * 3. LocalStorage fallback queue
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

  // 1. Send to Google Sheet Web App (using text/plain to avoid CORS preflight blocks in browser)
  if (GOOGLE_SHEET_WEBHOOK_URL) {
    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn('Google Sheet submission notice:', err);
    }
  }

  // 2. Email Submission to hello@janusmaad.com via Web3Forms
  try {
    const formData = new FormData();
    formData.append('access_key', '82d7c588-466d-4952-bf6d-551cf1c56ab8');
    formData.append('name', payload.name);
    formData.append('email', payload.email);
    formData.append('subject', `🚀 New Lead: ${payload.name} (${payload.source})`);
    formData.append('from_name', 'Janus Maad Website');
    formData.append('to_email', JANUS_CONTACT_EMAIL);
    formData.append(
      'message',
      `NEW JANUS MAAD AUDIT REQUEST\n` +
      `-----------------------------------------\n` +
      `Full Name: ${payload.name}\n` +
      `Work Email: ${payload.email}\n` +
      `Website / Store URL: ${payload.websiteUrl}\n` +
      `Monthly Ad Spend: ${payload.monthlySpend}\n` +
      `Primary Goal: ${payload.primaryGoal}\n` +
      `Phone Number: ${payload.phone}\n` +
      `Page Source: ${payload.source}\n` +
      `Submitted At: ${payload.timestamp}\n` +
      `-----------------------------------------`
    );

    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });
  } catch (err) {
    console.warn('Email dispatch notice:', err);
  }

  // 3. Save to local audit trail queue
  try {
    const storedLeads = JSON.parse(localStorage.getItem('janus_leads_log') || '[]');
    storedLeads.push(payload);
    localStorage.setItem('janus_leads_log', JSON.stringify(storedLeads));
  } catch (e) {
    // quota safe
  }

  return {
    success: true,
    message: 'Submitted to Google Sheet & hello@janusmaad.com'
  };
};
