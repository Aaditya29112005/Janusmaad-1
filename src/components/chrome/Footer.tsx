import React from 'react';
import { Button } from '../ui/Button';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenAudit: (type?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAudit }) => {
  return (
    <footer className="bg-bone border-t border-hairline pt-20 pb-0 text-ink relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 relative z-10">
        {/* Display Headline Statement */}
        <div className="border-b border-hairline pb-12">
          <h2 className="text-[6.2vw] sm:text-footer-display font-display text-ink max-w-none whitespace-normal sm:whitespace-nowrap">
            Unlock gateways to growth
          </h2>
        </div>

        {/* Multi-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-4">
          {/* Left Column: Promise & Primary CTA */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Janusmaad Logo" className="h-8 object-contain" />
            </div>
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
            {/* Capabilities */}
            <div className="space-y-4">
              <div className="text-data-label text-violet uppercase text-xs font-bold">Capabilities</div>
              <ul className="space-y-2.5 text-mute">
                <li><a href="#acquire-performance" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors">Performance Marketing</a></li>
                <li><a href="#acquire-seo" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors">Search Everywhere SEO</a></li>
                <li><a href="#acquire-smm" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors">SMM Strategy</a></li>
                <li><a href="#convert-build" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors">Shopify Build & Dev</a></li>
                <li><a href="#convert-cro" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors">CRO Retainer</a></li>
                <li><a href="#retain-marketing" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors">Retention Marketing</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <div className="text-data-label text-violet uppercase text-xs font-bold">Company</div>
              <ul className="space-y-2.5 text-mute">
                <li><a href="#receipts" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors">Receipts & Case Studies</a></li>
                <li><a href="#calculator" className="hover:text-violet transition-colors">ROI Calculator</a></li>
                <li><a href="#process" className="hover:text-violet transition-colors">How We Work</a></li>
                <li><a href="#fit" className="hover:text-violet transition-colors">Client Fit Check</a></li>
                <li><a href="#about" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors">About Us</a></li>
              </ul>
            </div>

            {/* Offices & Social */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <div className="text-data-label text-violet uppercase text-xs font-bold">Offices & Social</div>
              <div className="space-y-3 text-mute">
                <div>
                  <div className="text-ink font-bold text-xs uppercase">Noida Hub</div>
                  <div className="text-xs text-mute space-y-0.5 pt-0.5">
                    <div>HD77, Sector 135, Noida</div>
                    <div>Uttar Pradesh 201304, India</div>
                    <div className="pt-1">
                      <a href="https://wa.me/919818747001" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline inline-flex items-center gap-1">
                        <span>WhatsApp: +91 98187 47001</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pt-2 flex items-center gap-4 text-xs font-display">
                  <a href="https://www.linkedin.com/company/janusmaad/home/" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors flex items-center gap-1">
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a href="https://www.instagram.com/janusmaad/" target="_blank" rel="noopener noreferrer" className="hover:text-violet transition-colors flex items-center gap-1">
                    <span>Instagram</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Brand Display Footer Block (Matching image.png Reference) */}
      <div className="mt-20 border-t border-hairline/80 pt-6">
        {/* Meta Bar */}
        <div className="max-w-[96vw] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-[0.22em] text-mute uppercase gap-2 mb-6">
          <div>© {new Date().getFullYear()} JANUSMAAD DIGITAL. ALL RIGHTS RESERVED.</div>
        </div>

        {/* Giant Edge-to-Edge JANUSMAAD Text with Top-to-Bottom Fade Gradient */}
        <div className="w-full overflow-hidden text-center leading-none px-2 sm:px-4">
          <h1 className="text-[14.5vw] sm:text-[15.5vw] md:text-[16vw] font-display font-black tracking-tighter leading-none uppercase bg-clip-text text-transparent bg-gradient-to-b from-[#1c202e] via-[#1c202e]/75 to-transparent select-none pointer-events-none transform translate-y-[1vw]">
            JANUSMAAD
          </h1>
        </div>

        {/* Bottom Accent Bar (Brand Navy) */}
        <div className="w-full h-2.5 bg-[#1c202e] mt-0" />
      </div>
    </footer>
  );
};

