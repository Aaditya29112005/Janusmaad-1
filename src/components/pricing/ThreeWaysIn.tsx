import React from 'react';
import { ENGAGEMENT_TIERS, PRICING_HEADER } from '../../content/pricing';
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
            {PRICING_HEADER.h1}
          </h1>
          <p className="text-mute text-base sm:text-lg">
            {PRICING_HEADER.subtitle}
          </p>
        </div>

        {/* 3 Litmus Styled Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {ENGAGEMENT_TIERS.map((tier, index) => {
            const cardStyles = [
              {
                className: 'litmus-card-1 text-[#07101E]',
                style: {
                  background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
                  boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
                },
                titleColor: 'text-[#07101E]',
                subtitleColor: 'text-[#0A2540]/90 font-medium',
                borderColor: 'border-[#07101E]/15',
                featureColor: 'text-[#07101E] font-medium',
                checkBg: 'bg-white/60 border-white/80 text-[#0A2540]',
                btnClass: 'bg-[#07101E] text-white hover:bg-[#0A192F]'
              },
              {
                className: 'litmus-card-2 text-white',
                style: {
                  background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                  boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
                },
                titleColor: 'text-white drop-shadow-xs',
                subtitleColor: 'text-sky-100 font-medium',
                borderColor: 'border-white/20',
                featureColor: 'text-white font-medium',
                checkBg: 'bg-white/25 border-white/40 text-white',
                btnClass: 'bg-white text-[#1D5B9A] hover:bg-white/95 font-bold shadow-md'
              },
              {
                className: 'litmus-card-3 text-white',
                style: {
                  background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
                  boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
                },
                titleColor: 'text-white drop-shadow-sm',
                subtitleColor: 'text-blue-100 font-medium',
                borderColor: 'border-white/20',
                featureColor: 'text-white font-medium',
                checkBg: 'bg-white/20 border-white/35 text-[#5DAFFF]',
                btnClass: 'bg-gradient-to-r from-[#5DAFFF] to-[#3B7FC3] text-white hover:brightness-110 font-bold shadow-lg'
              }
            ][index % 3];

            return (
              <div
                key={tier.id}
                style={cardStyles.style}
                className={`relative rounded-[24px] p-8 flex flex-col justify-between space-y-8 transition-all duration-300 hover:-translate-y-2 group overflow-hidden ${cardStyles.className}`}
              >
                {/* Glass Glare Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />

                {/* Optional Badge */}
                {tier.badge && (
                  <div className="absolute -top-1 right-6 bg-white/90 text-[#1D5B9A] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-b-xl shadow-md border border-white/60 z-20">
                    {tier.badge}
                  </div>
                )}

                <div className="relative z-10 space-y-4">
                  <h3 className={`font-display font-extrabold text-2xl sm:text-3xl tracking-tight ${cardStyles.titleColor}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm leading-relaxed ${cardStyles.subtitleColor}`}>
                    {tier.subtitle}
                  </p>

                  <ul className={`space-y-3.5 pt-4 border-t ${cardStyles.borderColor} text-sm`}>
                    {tier.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-3 ${cardStyles.featureColor}`}>
                        <span className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${cardStyles.checkBg}`}>
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 pt-6">
                  <button
                    onClick={() => onOpenAudit(tier.id)}
                    className={`w-full py-3.5 px-6 rounded-xl font-display text-sm transition-all duration-200 cursor-pointer ${cardStyles.btnClass}`}
                  >
                    {tier.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
