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
          <span className="text-data-label text-violet text-xs uppercase tracking-widest font-bold">
            Certified MarTech Architecture
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-ink tracking-tight">
            Technology Partners<span className="text-violet">.</span>
          </h2>
          <p className="text-mute text-sm sm:text-base">
            Deep native integrations with leading enterprise commerce and performance growth platforms.
          </p>
        </div>

        {/* CodePen GSAP ScrollTrigger.batch() Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {TECH_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="tech-card opacity-0 translate-y-6 scale-95 bg-white border border-hairline rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 shadow-sm hover:shadow-xl hover:border-violet/40 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-16 w-full flex items-center justify-center">
                <img
                  src={partner.logoSrc}
                  alt={partner.name}
                  className="max-h-12 max-w-[130px] w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center pt-2 border-t border-hairline w-full">
                <div className="font-display font-bold text-xs text-ink group-hover:text-violet transition-colors">
                  {partner.name}
                </div>
                <div className="text-[10px] text-mute font-mono uppercase tracking-wider">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
