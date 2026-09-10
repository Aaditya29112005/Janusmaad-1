import React, { useEffect, useRef } from 'react';
import { TECH_PARTNERS } from '../../content/partners';
import { gsap, ScrollTrigger } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

export const TechPartners: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // CodePen GSAP Spec: ScrollTrigger.batch()
      ScrollTrigger.batch('.tech-card', {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: 'sine.out',
          }),
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="partners" className="py-24 px-4 sm:px-8 bg-bone border-b border-hairline relative">
      <div ref={containerRef} className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-display text-4xl sm:text-6xl text-ink tracking-tight">
            Technology Partners
          </h2>
        </div>

        {/* CodePen GSAP ScrollTrigger.batch() Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {TECH_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="tech-card opacity-0 translate-y-6 scale-95 bg-white border border-hairline rounded-2xl p-4 h-28 sm:h-32 flex items-center justify-center shadow-sm hover:shadow-xl hover:border-violet/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={partner.logoSrc}
                  alt={partner.name}
                  className="max-h-[80%] max-w-[80%] w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
