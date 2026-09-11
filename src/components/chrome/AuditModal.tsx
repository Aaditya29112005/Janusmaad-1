import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

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

              <div className="pt-2 space-y-2">
                <Button type="submit" variant="primary" size="lg" className="w-full group font-display font-bold tracking-wider uppercase">
                  <span>GET YOUR FREE GROWTH AUDIT</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <a
                  href={`https://wa.me/919818747001?text=${encodeURIComponent(`Hi JanusMAAD, I'd like a Growth Audit! Name: ${formData.name || 'Prospect'}, Website: ${formData.websiteUrl || 'N/A'}, Spend: ${formData.monthlySpend}, Goal: ${formData.primaryGoal}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md uppercase tracking-wider"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Or Chat Instantly on WhatsApp</span>
                </a>
              </div>

              <p className="text-center text-xs text-mute pt-2 font-medium">
                No sales pitch. Direct access to strategists on +91 98187 47001
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
              We have dispatched your request. A senior strategist will review <span className="text-ink font-bold">{formData.websiteUrl || 'your website'}</span> and reach out to <span className="text-violet font-bold">{formData.email}</span> shortly.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919818747001?text=${encodeURIComponent(`Hi JanusMAAD, I just submitted an audit request! Name: ${formData.name}, Website: ${formData.websiteUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md uppercase tracking-wider"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Connect via WhatsApp Now (+91 98187 47001)</span>
              </a>
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
