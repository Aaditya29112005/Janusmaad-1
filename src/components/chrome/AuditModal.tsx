import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { sendAuditToWhatsApp, openWhatsApp, DISPLAY_PHONE } from '../../utils/whatsapp';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    websiteUrl: '',
    monthlySpend: '₹1L - ₹5L',
    primaryGoal: 'Increase Conversion Rate (CRO)',
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendAuditToWhatsApp(formData);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-white border border-hairline rounded-3xl p-6 sm:p-8 shadow-2xl text-ink overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-mute hover:text-ink p-2 rounded-full border border-hairline hover:border-violet transition-colors focus-visible:outline-violet"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-data-label text-violet font-bold uppercase tracking-widest block">
                BOOK A FREE GROWTH CONSULTATION
              </span>
              <h3 id="modal-title" className="font-display text-2xl sm:text-3xl text-ink font-bold">
                Unlock your growth insights.
              </h3>
              <p className="text-mute text-sm">
                Get a complimentary review of your website and customer journey followed by a focused growth consultation
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-mute mb-1 font-display font-bold">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-bone border border-hairline rounded-xl px-4 py-3 text-ink text-sm focus:border-violet focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-mute mb-1 font-display font-bold">
                  Work Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@brand.com"
                  className="w-full bg-bone border border-hairline rounded-xl px-4 py-3 text-ink text-sm focus:border-violet focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-mute mb-1 font-display font-bold">
                  Website / Store URL *
                </label>
                <input
                  type="url"
                  required
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  placeholder="https://yourbrand.com"
                  className="w-full bg-bone border border-hairline rounded-xl px-4 py-3 text-ink text-sm focus:border-violet focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-mute mb-1 font-display font-bold">
                    Monthly Ad Spend
                  </label>
                  <select
                    value={formData.monthlySpend}
                    onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                    className="w-full bg-bone border border-hairline rounded-xl px-3 py-3 text-ink text-sm focus:border-violet focus:outline-none transition-colors"
                  >
                    <option value="Less than 1 Lakh">Less than 1 Lakh / month</option>
                    <option value="₹1L - ₹5L">₹1L - ₹5L / month</option>
                    <option value="₹5L - ₹20L">₹5L - ₹20L / month</option>
                    <option value="₹20L - ₹50L">₹20L - ₹50L / month</option>
                    <option value="₹50L+">₹50L+ / month</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-mute mb-1 font-display font-bold">
                    Primary Goal
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full bg-bone border border-hairline rounded-xl px-3 py-3 text-ink text-sm focus:border-violet focus:outline-none transition-colors"
                  >
                    <option value="Increase Conversion Rate (CRO)">Increase Conversion Rate</option>
                    <option value="Scale Organic Search (SEO)">Scale Organic Search (SEO)</option>
                    <option value="Full Shopify Store Build">Full Shopify Store Build</option>
                    <option value="Paid Ad Performance">Paid Ad Performance</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 space-y-2.5">
                <Button type="submit" variant="primary" size="lg" className="w-full group font-display font-bold tracking-wider uppercase">
                  <span>SEND VIA WHATSAPP ({DISPLAY_PHONE})</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <button
                  type="button"
                  onClick={() => openWhatsApp()}
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba5a] font-display font-bold text-xs transition-colors cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>DIRECT CHAT ON WHATSAPP ({DISPLAY_PHONE})</span>
                </button>
              </div>

              <p className="text-center text-xs text-mute pt-2 font-medium">
                No sales pitch. Just practical insights you can act on
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-violet/10 text-violet mb-2">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-display text-2xl text-ink font-bold">Audit Request Received!</h3>
            <p className="text-mute text-sm max-w-md mx-auto">
              We have dispatched a confirmation email to <span className="text-violet font-bold">{formData.email}</span>. A senior strategist from Delhi NCR / Noida will review <span className="text-ink font-bold">{formData.websiteUrl}</span> and confirm your call timeslot shortly.
            </p>
            <div className="pt-4">
              <Button onClick={handleReset} variant="outline" size="md">
                Close window
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
