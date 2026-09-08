import React, { useEffect, useRef } from 'react';
import { PROCESS_HEADER, PROCESS_STEPS } from '../../content/process';
import { gsap, ScrollTrigger } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

export const HowWeWork: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.process-card', {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power2.out',
          }),
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="py-24 px-4 sm:px-8 bg-bone border-b border-hairline relative">
      <div ref={containerRef} className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="max-w-3xl space-y-3">
          <h1 className="font-display text-3xl sm:text-5xl text-ink tracking-tight leading-[1.1]">
            {PROCESS_HEADER.h1}
          </h1>
          <p className="text-mute text-base sm:text-lg font-medium">
            {PROCESS_HEADER.subtitle}
          </p>
        </div>

        {/* 3 Step Sequence: 01 to 03 with Litmus Card Styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => {
            const cardStyles = [
              {
                className: 'litmus-card-1 text-[#07101E]',
                style: {
                  background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
                  boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
                },
                numColor: 'text-[#07101E]',
                titleColor: 'text-[#07101E]',
                detailColor: 'text-[#0A2540]/90 font-medium',
                barBg: 'bg-[#07101E]/40'
              },
              {
                className: 'litmus-card-2 text-white',
                style: {
                  background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                  boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
                },
                numColor: 'text-white/90',
                titleColor: 'text-white drop-shadow-xs',
                detailColor: 'text-sky-100 font-medium',
                barBg: 'bg-white/40'
              },
              {
                className: 'litmus-card-3 text-white',
                style: {
                  background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
                  boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
                },
                numColor: 'text-[#5DAFFF]',
                titleColor: 'text-white drop-shadow-sm',
                detailColor: 'text-blue-100 font-medium',
                barBg: 'bg-[#5DAFFF]/50'
              }
            ][index % 3];

            return (
              <div
                key={step.number}
                style={cardStyles.style}
                className={`process-card opacity-0 translate-y-6 rounded-[24px] p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative ${cardStyles.className}`}
              >
                {/* Glass Glare Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />

                <div className="relative z-10 space-y-4">
                  <div className={`font-display font-extrabold text-6xl tabular-nums group-hover:scale-105 transition-transform origin-left ${cardStyles.numColor}`}>
                    {step.number}
                  </div>
                  <h3 className={`font-display font-bold text-2xl tracking-tight ${cardStyles.titleColor}`}>
                    {step.label}
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${cardStyles.detailColor}`}>
                    {step.detail}
                  </p>
                </div>
                <div className={`relative z-10 h-1.5 w-16 rounded-full ${cardStyles.barBg}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
