import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';
import { Sparkles, Star, ZoomIn, X } from 'lucide-react';

const REEL_IMAGES = [
  { id: '6', src: '/testimonials/6.png', title: 'Sub-Second Shopify PDP Upgrade', metric: '+42% CVR Lift' },
  { id: '7', src: '/testimonials/7.png', title: 'Direct Response Landing Page Sprint', metric: '-31% CAC Drop' },
  { id: '8', src: '/testimonials/8.png', title: 'Do The Math Calculator Lift', metric: '+₹2.4Cr Net Revenue' },
  { id: '10', src: '/testimonials/10.png', title: 'Mobile Checkout Friction Teardown', metric: '+34% Checkout Lift' },
  { id: '11', src: '/testimonials/11.png', title: 'Headless Next.js Storefront', metric: '0.62s Load Speed' },
  { id: '13', src: '/testimonials/13.png', title: 'High-Converting UGC Video Funnel', metric: '4.82x ROAS' },
  { id: '14', src: '/testimonials/14.png', title: '1-Click Cart Upsell & AOV Engine', metric: '+38.5% AOV' },
  { id: '15', src: '/testimonials/15.png', title: 'Verified DTC Growth Review', metric: '98/100 Lighthouse' },
];

export const BuildReelsMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; metric: string } | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    const container = containerRef.current;
    if (!rail || !container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Half width translation for infinite loop
      const totalWidth = rail.scrollWidth / 2;

      const loopTween = gsap.to(rail, {
        x: -totalWidth,
        duration: 55,
        ease: 'none',
        repeat: -1,
      });

      // Smooth slow-down on hover
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

  // Double the images to create seamless loop
  const displayItems = [...REEL_IMAGES, ...REEL_IMAGES];

  return (
    <div className="bg-bone border border-hairline rounded-3xl p-6 sm:p-10 space-y-8 shadow-xs overflow-hidden select-none">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-violet uppercase text-xs font-bold font-mono tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CLIENT REELS & VERIFIED REVIEWS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">
            What Founders & CMOs Say About Our Builds
          </h2>
          <p className="text-xs sm:text-sm text-mute max-w-2xl">
            Live reel reviews and verified feedback from DTC founders & growth leaders. Hover over any reel to inspect.
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-violet bg-white border border-hairline px-3.5 py-1.5 rounded-full shadow-xs shrink-0 self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>CONTINUOUS STREAM</span>
        </div>
      </div>

      {/* Marquee Rail Container */}
      <div ref={containerRef} className="relative w-full overflow-hidden py-4">
        <div
          ref={railRef}
          className="rail flex items-center gap-6 whitespace-nowrap will-change-transform"
        >
          {displayItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setSelectedImage(item)}
              className="group relative shrink-0 w-[240px] sm:w-[280px] bg-white border border-hairline rounded-2xl p-3 shadow-md hover:shadow-2xl hover:border-violet transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative w-full h-[340px] sm:h-[400px] bg-bone rounded-xl overflow-hidden border border-hairline flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Overlay gradient & hover button */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-end">
                    <span className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="space-y-1 text-left">
                    <span className="px-2 py-0.5 bg-violet text-white text-[10px] font-mono font-bold rounded-full">
                      {item.metric}
                    </span>
                    <p className="text-xs font-display font-bold line-clamp-2 text-white">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 bg-white/90 backdrop-blur-md text-ink text-[10px] font-mono font-bold rounded-full shadow-xs border border-hairline flex items-center gap-1 group-hover:opacity-0 transition-opacity">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>Verified Proof</span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="pt-3 px-1 flex items-center justify-between">
                <span className="text-xs font-display font-bold text-ink truncate max-w-[170px]">
                  {item.title}
                </span>
                <span className="text-[11px] font-mono font-bold text-violet bg-violet/10 px-2 py-0.5 rounded-md">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for enlarged image viewing */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white border border-hairline rounded-3xl max-w-lg w-full p-4 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-hairline">
              <div>
                <span className="text-[10px] font-mono font-bold text-violet uppercase">Verified Client Reel Proof</span>
                <h3 className="text-base sm:text-lg font-display font-bold text-ink">{selectedImage.title}</h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 bg-bone rounded-xl text-ink hover:bg-violet hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-bone rounded-2xl overflow-hidden border border-hairline max-h-[60vh] flex items-center justify-center">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[55vh]"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="px-3 py-1 bg-violet text-white text-xs font-mono font-bold rounded-full">
                {selectedImage.metric}
              </span>
              <span className="text-xs text-mute font-mono">Click anywhere to close</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
