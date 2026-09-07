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

        {/* 3 Step Sequence: 01 to 03 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="process-card opacity-0 translate-y-6 bg-white border border-hairline rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="font-display font-bold text-6xl text-violet opacity-90 tabular-nums group-hover:scale-105 transition-transform origin-left">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-2xl text-ink">
                  {step.label}
                </h3>
                <p className="text-mute text-sm sm:text-base leading-relaxed">
                  {step.detail}
                </p>
              </div>
              <div className="h-1.5 w-16 bg-violet/30 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
