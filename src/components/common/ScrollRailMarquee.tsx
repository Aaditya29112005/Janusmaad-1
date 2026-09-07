import React, { useEffect, useRef } from 'react';
import { gsap, Observer } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

export const ScrollRailMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    const container = containerRef.current;
    if (!rail || !container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Infinite horizontal marquee translation
      const totalWidth = rail.scrollWidth / 2;

      const loopTween = gsap.to(rail, {
        x: -totalWidth,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });

      // Observer to accelerate / reverse marquee based on page scroll velocity (from user's CodePen)
      Observer.create({
        target: window,
        type: 'scroll,wheel,touch',
        onChangeY(self) {
          let factor = 2.5;
          if (self.deltaY < 0) {
            factor *= -1;
          }
          gsap
            .timeline({ defaults: { ease: 'none' } })
            .to(loopTween, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
            .to(loopTween, { timeScale: 1, duration: 0.8, ease: 'power1.out' });
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const marqueePhrases = [
    'SILKY-SMOOTH PERFORMANCE',
    '•',
    'JANUSMAAD STOREFRONTS',
    '•',
    'DATA IN. DESIGN OUT.',
    '•',
    'PLUS 62% CVR LIFT',
    '•',
    'ZERO AD BUDGET WASTED',
    '•',
  ];

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-ink text-white py-12 border-y border-hairline select-none">
      <div className="scrolling-text overflow-hidden w-full flex items-center">
        <div ref={railRef} className="rail flex items-center gap-8 whitespace-nowrap will-change-transform">
          {[...marqueePhrases, ...marqueePhrases, ...marqueePhrases, ...marqueePhrases].map((phrase, idx) => (
            <h4
              key={idx}
              className={`font-display text-4xl sm:text-7xl font-extrabold tracking-tight ${
                phrase === '•' ? 'text-teal' : phrase.includes('CVR') ? 'text-teal' : 'text-white'
              }`}
            >
              {phrase}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};
