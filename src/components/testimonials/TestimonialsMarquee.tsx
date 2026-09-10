import React, { useEffect, useRef } from 'react';
import { TESTIMONIALS, TESTIMONIALS_HEADER, TESTIMONIAL_TICKER_ITEMS } from '../../content/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

export const TestimonialsMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    const container = containerRef.current;
    if (!rail || !container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Half width translation for 100% continuous infinite loop
      const totalWidth = rail.scrollWidth / 2;

      gsap.to(rail, {
        x: -totalWidth,
        duration: 90,
        ease: 'none',
        repeat: -1,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const rail = railRef.current;
    if (!rail) return;
    const shiftAmount = direction === 'left' ? 340 : -340;
    gsap.to(rail, {
      x: `+=${shiftAmount}`,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  // Double testimonials array to ensure 100% seamless infinite loop
  const displayItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section ref={containerRef} className="py-20 bg-bone border-b border-hairline relative overflow-hidden select-none">
      <div className="w-full mx-auto space-y-10">
        {/* Header - Center Aligned */}
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-4xl sm:text-6xl text-ink tracking-tight font-bold">
            {TESTIMONIALS_HEADER.h1}
          </h2>
        </div>

        {/* Testimonials Marquee Container with CodePen Glowing Animation Effect */}
        <div className="relative w-full overflow-hidden">
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 border border-hairline shadow-lg text-ink hover:bg-violet hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center opacity-90 hover:opacity-100"
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 border border-hairline shadow-lg text-ink hover:bg-violet hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center opacity-90 hover:opacity-100"
            aria-label="Scroll testimonials right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Continuous Infinite Marquee Rail */}
          <div className="overflow-hidden w-full py-4">
            <div
              ref={railRef}
              className="rail flex items-center gap-6 whitespace-nowrap will-change-transform px-4"
            >
              {displayItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0 flex flex-col justify-between bg-white border border-[#070B1A]/10 rounded-2xl shadow-sm hover:shadow-xl hover:border-violet/40 transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
                >
                  {/* 1. Brand Logo / Brand Name Header */}
                  <div className="h-20 border-b border-[#070B1A]/10 flex items-center justify-center px-6 bg-white">
                    {item.brandLogo ? (
                      <img
                        src={item.brandLogo}
                        alt={item.brandName}
                        className="max-h-9 max-w-[150px] object-contain transition-transform hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const fallback = document.createElement('span');
                            fallback.className = 'font-display font-bold text-ink text-base tracking-tight uppercase';
                            fallback.innerText = item.brandName;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <span className="font-display font-bold text-ink text-base tracking-tight uppercase">
                        {item.brandName}
                      </span>
                    )}
                  </div>

                  {/* 2. 5 Stars Rating & Review Lines */}
                  <div className="py-7 px-6 flex-1 flex flex-col justify-center bg-white">
                    <div className="flex items-center justify-center gap-1.5 mb-4">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <p className="text-sm sm:text-[15px] font-normal text-ink text-center leading-relaxed whitespace-normal line-clamp-3">
                      {item.quote}
                    </p>
                  </div>

                  {/* 3. Founder Details: Name & Role */}
                  <div className="pb-7 pt-4 px-6 flex flex-col items-center text-center bg-white border-t border-[#070B1A]/05">
                    <div className="text-sm sm:text-base font-bold text-ink leading-snug">
                      {item.founderName}
                    </div>
                    <div className="text-xs text-mute font-medium mt-1">
                      {item.founderRole}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Continuous Horizontal Ticker Banner Right Underneath */}
        <div className="w-full bg-[#0A0A0E] border-y border-white/10 py-3.5 sm:py-4 overflow-hidden relative select-none">
          <div className="animate-ticker-continuous flex items-center">
            {[...TESTIMONIAL_TICKER_ITEMS, ...TESTIMONIAL_TICKER_ITEMS, ...TESTIMONIAL_TICKER_ITEMS].map((ticker, idx) => (
              <div key={idx} className="flex items-center shrink-0">
                <span className="text-white font-display font-bold text-xs sm:text-sm tracking-widest uppercase">
                  {ticker.brandName}
                </span>
                <span className="text-[#E6FE53] font-mono font-bold text-xs sm:text-sm ml-2 tracking-wide">
                  • {ticker.metric}
                </span>
                <span className="text-white/25 mx-6 sm:mx-8 font-light select-none">
                  |
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
