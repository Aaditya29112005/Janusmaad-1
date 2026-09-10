import React, { useEffect, useRef } from 'react';
import { TESTIMONIALS, TESTIMONIALS_HEADER } from '../../content/testimonials';
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

      const loopTween = gsap.to(rail, {
        x: -totalWidth,
        duration: 50,
        ease: 'none',
        repeat: -1,
      });
      loopTween.timeScale(0.75);
    }, container);

    return () => ctx.revert();
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const rail = railRef.current;
    if (!rail) return;
    const shiftAmount = direction === 'left' ? 400 : -400;
    gsap.to(rail, {
      x: `+=${shiftAmount}`,
      duration: 0.55,
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

        {/* Testimonials Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 border border-hairline shadow-lg text-ink hover:bg-violet hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center opacity-90 hover:opacity-100"
            aria-label="Scroll testimonials left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 border border-hairline shadow-lg text-ink hover:bg-violet hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center opacity-90 hover:opacity-100"
            aria-label="Scroll testimonials right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Continuous Infinite Marquee Rail */}
          <div className="overflow-hidden w-full py-4">
            <div
              ref={railRef}
              className="rail flex items-stretch gap-6 whitespace-nowrap will-change-transform px-4"
            >
              {displayItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[340px] sm:w-[380px] md:w-[420px] shrink-0 flex flex-col justify-between bg-white border border-[#070B1A]/15 rounded-2xl shadow-sm hover:shadow-xl hover:border-violet/40 transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-1"
                >
                  {/* 1. Brand Logo Header Section (Enlarged brand logo size) */}
                  <div className="h-28 sm:h-32 border-b border-[#070B1A]/10 flex items-center justify-center px-6 py-4 bg-white">
                    {item.brandLogo ? (
                      <img
                        src={item.brandLogo}
                        alt={item.brandName}
                        className="max-h-16 sm:max-h-20 max-w-[260px] object-contain transition-transform hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent) {
                            const fallback = document.createElement('span');
                            fallback.className = 'font-display font-bold text-ink text-xl tracking-tight uppercase';
                            fallback.innerText = item.brandName;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    ) : (
                      <span className="font-display font-bold text-ink text-xl tracking-tight uppercase">
                        {item.brandName}
                      </span>
                    )}
                  </div>

                  {/* 2. 5 Stars Rating & Full Review Content (Stars aligned at same level across cards) */}
                  <div className="p-6 flex-1 flex flex-col items-center justify-start bg-white text-center min-h-[240px]">
                    <div className="flex items-center justify-center gap-1.5 pt-1 mb-4 shrink-0">
                      {[...Array(item.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#FACC15] text-[#FACC15] drop-shadow-sm"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    <div className="text-sm sm:text-[15px] font-medium text-ink/90 leading-relaxed whitespace-pre-line text-center px-2 my-auto">
                      "{item.quote}"
                    </div>
                  </div>

                  {/* 3. Founder Details: Name & Role (No headshot/avatar image) */}
                  <div className="pb-6 pt-3 px-6 flex flex-col items-center text-center bg-white border-t border-[#070B1A]/05">
                    <div className="text-base sm:text-lg font-bold text-ink leading-snug">
                      {item.founderName}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                      {item.founderRole}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

