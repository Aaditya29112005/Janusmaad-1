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
              className="w-72 sm:w-80 shrink-0 p-5 rounded-2xl border border-hairline/80 bg-white/90 backdrop-blur-md shadow-xs hover:shadow-lg hover:border-violet/40 transition-all duration-300 flex flex-col justify-between space-y-3.5 group cursor-default"
            >
              {/* Top Row: Client Logo & Service Pill */}
              <div className="flex items-center justify-between gap-3 border-b border-hairline/60 pb-3">
                <div className="h-7 max-w-[120px] flex items-center">
                  <img
                    src={stat.clientLogo}
                    alt={stat.clientName}
                    className="max-h-7 max-w-[120px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-violet/10 text-violet border border-violet/20 uppercase tracking-wider shrink-0">
                  {stat.serviceTag}
                </span>
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

              {/* Bottom Row: Verified Attribution */}
              <div className="pt-2 border-t border-hairline/60 flex items-center justify-between text-[11px] font-mono text-mute">
                <span className="font-medium text-ink/70 truncate">{stat.clientName}</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-bold shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified Lift
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

