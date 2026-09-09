import React, { useEffect, useRef } from 'react';
import { PROOF_STATS } from '../../content/proof';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

export const ProofStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    const container = containerRef.current;
    if (!rail || !container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Continuous horizontal loop of cards - calm, steady luxury pace
      const loopTween = gsap.to(rail, {
        xPercent: -50,
        duration: 55,
        ease: 'none',
        repeat: -1,
      });

      // Smooth slow-down on hover so users can easily read metrics
      const onMouseEnter = () => {
        gsap.to(loopTween, { timeScale: 0.15, duration: 0.5, ease: 'power2.out' });
      };
      const onMouseLeave = () => {
        gsap.to(loopTween, { timeScale: 1, duration: 0.5, ease: 'power2.out' });
      };

      container.addEventListener('mouseenter', onMouseEnter);
      container.addEventListener('mouseleave', onMouseLeave);

      return () => {
        container.removeEventListener('mouseenter', onMouseEnter);
        container.removeEventListener('mouseleave', onMouseLeave);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  // Multiply items for seamless continuous looping rail
  const statLoop = [...PROOF_STATS, ...PROOF_STATS, ...PROOF_STATS, ...PROOF_STATS];

  return (
    <section ref={containerRef} className="w-full bg-bone border-y border-hairline py-8 overflow-hidden select-none relative">
      <div className="scrolling-text overflow-hidden w-full flex items-center">
        <div ref={railRef} className="rail flex items-center gap-5 whitespace-nowrap will-change-transform px-2">
          {statLoop.map((stat, idx) => (
            <div
              key={idx}
              className="w-64 sm:w-72 shrink-0 p-6 card-surface rounded-2xl border border-hairline/60 bg-white/70 backdrop-blur-sm shadow-sm space-y-2 group hover:border-violet/40 hover:shadow-md transition-all"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-violet tabular-nums group-hover:scale-105 transition-transform origin-left">
                {stat.value}
              </div>
              <div className="text-data-label text-ink font-bold text-xs uppercase tracking-wider">
                {stat.label}
              </div>
              {stat.sub && (
                <div className="text-[11px] text-mute font-mono pt-0.5">
                  {stat.sub}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

