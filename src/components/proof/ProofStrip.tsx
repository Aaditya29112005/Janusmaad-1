import React, { useEffect, useRef } from 'react';
import { PROOF_STATS } from '../../content/proof';
import { gsap, ScrollTrigger } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

export const ProofStrip: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      const items = el.querySelectorAll('.reveal-stat');
      gsap.set(items, { autoAlpha: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.batch('.reveal-stat', {
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.7,
            ease: 'sine.out',
            overwrite: 'auto',
          }),
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-bone border-y border-hairline py-10 px-4 sm:px-8 relative">
      <div ref={containerRef} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {PROOF_STATS.map((stat, idx) => (
          <div
            key={idx}
            className="reveal-stat opacity-0 translate-y-4 space-y-1.5 p-5 card-surface rounded-2xl group"
          >
            <div className="font-display font-bold text-2xl sm:text-3xl text-violet tabular-nums group-hover:scale-105 transition-transform origin-left">
              {stat.value}
            </div>
            <div className="text-data-label text-ink font-bold text-xs uppercase tracking-wider">
              {stat.label}
            </div>
            {stat.sub && (
              <div className="text-[11px] text-mute font-mono">
                {stat.sub}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
