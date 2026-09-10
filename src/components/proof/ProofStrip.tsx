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
      // Continuous horizontal loop of cards - constant, steady luxury speed
      const loopTween = gsap.to(rail, {
        xPercent: -50,
        duration: 160,
        ease: 'none',
        repeat: -1,
      });
      loopTween.timeScale(0.2);
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
              className="w-72 sm:w-80 shrink-0 p-5 rounded-2xl border border-hairline/80 bg-white/90 backdrop-blur-md shadow-xs hover:shadow-lg hover:border-violet/40 transition-all duration-300 flex flex-col justify-between space-y-3.5 group cursor-default"
            >
              {/* Top Row: Client Logo */}
              <div className="flex items-center justify-start gap-3 border-b border-hairline/60 pb-3">
                <div className="h-7 max-w-[140px] flex items-center">
                  <img
                    src={stat.clientLogo}
                    alt={stat.clientName}
                    className="max-h-7 max-w-[140px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Middle Row: Big Stat & Label */}
              <div className="space-y-1">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-violet tabular-nums tracking-tight group-hover:scale-105 transition-transform origin-left">
                  {stat.value}
                </div>
                <div className="text-ink font-bold text-xs uppercase tracking-wider leading-snug">
                  {stat.label}
                </div>
              </div>

              {/* Bottom Row: Client Name & Category (Black font only, no green) */}
              <div className="pt-2 border-t border-hairline/60 flex items-center justify-between text-[11px] font-mono text-ink">
                <span className="font-semibold text-ink truncate">{stat.clientName}</span>
                <span className="text-ink/85 font-medium text-right shrink-0">
                  {stat.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

