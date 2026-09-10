import React, { useEffect, useRef } from 'react';
import { GUEST_LIST_LOGOS } from '../../content/trusted';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

export const TrustedBy: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);

  // Split logos into 2 balanced rows of 12 logos each
  const row1Logos = GUEST_LIST_LOGOS.slice(0, 12);
  const row2Logos = GUEST_LIST_LOGOS.slice(12, 24);

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2 || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Row 1: Infinite Glide Left (constant steady speed)
      const row1Width = row1.scrollWidth / 2;
      gsap.to(row1, {
        x: -row1Width,
        duration: 60,
        ease: 'none',
        repeat: -1,
      });

      // Row 2: Infinite Glide Right (constant steady speed)
      const row2Width = row2.scrollWidth / 2;
      gsap.set(row2, { x: -row2Width });
      gsap.to(row2, {
        x: 0,
        duration: 60,
        ease: 'none',
        repeat: -1,
      });
    }, sectionRef);


    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-bone py-16 sm:py-20 border-b border-hairline relative overflow-hidden select-none">
      {/* Title Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10">
        <h1 className="font-display text-4xl sm:text-6xl text-ink tracking-tight">
          Our Clients
        </h1>
      </div>

      {/* Dual Row Continuous Infinite GSAP Marquee Container */}
      <div className="space-y-4 w-full overflow-hidden">
        {/* Row 1 (Glide Left) */}
        <div className="flex w-full overflow-hidden">
          <div
            ref={row1Ref}
            className="flex items-center gap-4 py-2 w-max transition-transform will-change-transform"
          >
            {[...row1Logos, ...row1Logos].map((client, idx) => (
              <div
                key={`r1-${client.id}-${idx}`}
                className="shrink-0 w-48 sm:w-56 h-28 bg-white border border-hairline rounded-2xl p-5 flex items-center justify-center shadow-sm hover:shadow-xl hover:border-violet/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={client.logoSrc}
                  alt={client.name}
                  className="max-h-14 max-w-[150px] w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (Glide Right) */}
        <div className="flex w-full overflow-hidden">
          <div
            ref={row2Ref}
            className="flex items-center gap-4 py-2 w-max transition-transform will-change-transform"
          >
            {[...row2Logos, ...row2Logos].map((client, idx) => (
              <div
                key={`r2-${client.id}-${idx}`}
                className="shrink-0 w-48 sm:w-56 h-28 bg-white border border-hairline rounded-2xl p-5 flex items-center justify-center shadow-sm hover:shadow-xl hover:border-violet/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <img
                  src={client.logoSrc}
                  alt={client.name}
                  className="max-h-14 max-w-[150px] w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
