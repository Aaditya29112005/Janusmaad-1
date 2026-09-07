import React from 'react';
import { Button } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenAudit: (type?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="bg-bone border-t border-hairline pt-20 pb-12 px-4 sm:px-8 text-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Display Headline Statement */}
        <div className="border-b border-hairline pb-12">
          <h2 className="text-footer-display font-display text-ink max-w-4xl">
            Unlock your gateways to growth<span className="text-violet">.</span>
          </h2>
        </div>

        {/* Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
          {/* Left Column: Promise & Primary CTA */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Janusmaad Logo" className="h-8 object-contain" />
              <span className="font-display font-bold text-xl text-ink">Janusmaad Digital</span>
            </div>
            <p className="text-mute max-w-md text-base leading-relaxed">
              Performance marketing and SEO agency operating across Sydney and Delhi NCR. We build high-converting landing pages, scale organic search visibility, and drive sustainable profit.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenAudit('call')}
              >
                Book a call
              </Button>
            </div>
          </div>

          {/* Right Columns: Links & Offices */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {/* Services */}
            <div className="space-y-4">
              <div className="text-data-label text-violet uppercase text-xs font-bold">Capabilities</div>
              <ul className="space-y-2.5 text-mute">
                <li><a href="#acquire-performance" className="hover:text-violet transition-colors">Performance Marketing</a></li>
                <li><a href="#acquire-seo" className="hover:text-violet transition-colors">Search Everywhere SEO</a></li>
                <li><a href="#convert-build" className="hover:text-violet transition-colors">Shopify Build & Dev</a></li>
                <li><a href="#convert-cro" className="hover:text-violet transition-colors">CRO Retainer</a></li>
                <li><a href="#retain-marketing" className="hover:text-violet transition-colors">Retention Marketing</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <div className="text-data-label text-violet uppercase text-xs font-bold">Company</div>
              <ul className="space-y-2.5 text-mute">
                <li><a href="#receipts" className="hover:text-violet transition-colors">Receipts & Case Studies</a></li>
                <li><a href="#calculator" className="hover:text-violet transition-colors">ROI Calculator</a></li>
                <li><a href="#process" className="hover:text-violet transition-colors">How We Work</a></li>
                <li><a href="#fit" className="hover:text-violet transition-colors">Client Fit Check</a></li>
                <li><a href="#blog" className="hover:text-violet transition-colors">Growth Journal</a></li>
              </ul>
            </div>

            {/* Offices & Social */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <div className="text-data-label text-violet uppercase text-xs font-bold">Offices & Social</div>
              <div className="space-y-3 text-mute">
                <div>
                  <div className="text-ink font-bold text-xs uppercase">Sydney Hub</div>
                  <div className="text-xs text-mute">Barangaroo International Towers, NSW 2000</div>
                </div>
                <div>
                  <div className="text-ink font-bold text-xs uppercase">Delhi NCR Hub</div>
                  <div className="text-xs text-mute">Cyber City, Phase II, Gurugram 122002</div>
                </div>
                <div className="pt-2 flex items-center gap-4 text-xs font-display">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors flex items-center gap-1">
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors flex items-center gap-1">
                    <span>Twitter/X</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-hairline flex flex-col sm:flex-row items-center justify-between text-xs text-mute gap-4">
          <div>
            © {new Date().getFullYear()} Janusmaad Digital Pty Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-violet transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-violet transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-violet transition-colors">Security & Data</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
