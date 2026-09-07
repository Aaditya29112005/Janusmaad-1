import React from 'react';
import { ENGAGEMENT_TIERS, PRICING_HEADER } from '../../content/pricing';
import { Button } from '../ui/Button';
import { Check, Sparkles } from 'lucide-react';

interface ThreeWaysInProps {
  onOpenAudit: (type?: string) => void;
}

export const ThreeWaysIn: React.FC<ThreeWaysInProps> = ({ onOpenAudit }) => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-8 bg-bone border-b border-hairline relative">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-violet text-xs font-display font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Targeted Solutions</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-ink tracking-tight">
            {PRICING_HEADER.h1}<span className="text-violet">.</span>
          </h1>
          <p className="text-mute text-base sm:text-lg">
            {PRICING_HEADER.subtitle}
          </p>
        </div>

        {/* 3 Light Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {ENGAGEMENT_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white border rounded-3xl p-8 flex flex-col justify-between space-y-8 transition-all duration-300 hover:-translate-y-1.5 ${
                tier.badge ? 'border-violet shadow-xl shadow-violet/10' : 'border-hairline shadow-sm'
              }`}
            >
              {/* Optional 'Most Booked' flag */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-8 bg-violet text-bone text-xs font-display font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                  {tier.badge}
                </div>
              )}

              <div className="space-y-4">
                <h3 className="font-display font-bold text-2xl text-ink">
                  {tier.name}
                </h3>
                <p className="text-mute text-sm leading-relaxed">
                  {tier.subtitle}
                </p>

                <ul className="space-y-3.5 pt-4 border-t border-hairline text-sm">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-ink/90">
                      <Check className="w-4 h-4 text-violet shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Button
                  variant={tier.badge ? 'primary' : 'outline'}
                  size="md"
                  className="w-full"
                  onClick={() => onOpenAudit(tier.id)}
                >
                  {tier.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
