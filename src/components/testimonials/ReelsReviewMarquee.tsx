import React, { useEffect, useRef, useState } from 'react';
import { gsap, Observer } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';
import { Sparkles, Maximize2, X } from 'lucide-react';

const REEL_IMAGES = [
  { id: '6', src: '/testimonials/6.png', label: 'CAC Drop & Conversion Lift' },
  { id: '7', src: '/testimonials/7.png', label: 'Direct Revenue Expansion' },
  { id: '8', src: '/testimonials/8.png', label: 'High-Intent Founder Pipeline' },
  { id: '10', src: '/testimonials/10.png', label: 'ROAS Acceleration' },
  { id: '11', src: '/testimonials/11.png', label: 'SEO Organic Search Scale' },
  { id: '13', src: '/testimonials/13.png', label: 'B2B Corporate Lead Volume' },
  { id: '14', src: '/testimonials/14.png', label: 'Retention Flow Profit' },
  { id: '15', src: '/testimonials/15.png', label: 'Sub-Second Shopify Load' },
];

export const ReelsReviewMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const rail = railRef.current;
    const container = containerRef.current;
    if (!rail || !container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Calculate total width of one set of cards
      const totalWidth = rail.scrollWidth / 3;

      const loopTween = gsap.to(rail, {
        x: -totalWidth,
        duration: 25,
        ease: 'none',
        repeat: -1,
      });

      // Observer to accelerate / reverse marquee based on page scroll velocity
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
            .to(loopTween, { timeScale: factor * 2.2, duration: 0.2, overwrite: true })
            .to(loopTween, { timeScale: 1, duration: 0.8, ease: 'power1.out' });
        },
      });

      // Slow down loop tween when hovered for easy reading
      const handleMouseEnter = () => {
        gsap.to(loopTween, { timeScale: 0.2, duration: 0.4 });
      };
      const handleMouseLeave = () => {
        gsap.to(loopTween, { timeScale: 1, duration: 0.4 });
      };

      rail.addEventListener('mouseenter', handleMouseEnter);
      rail.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        rail.removeEventListener('mouseenter', handleMouseEnter);
        rail.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  // Triple items array to guarantee smooth seamless marquee looping on all screen sizes
  const marqueeItems = [...REEL_IMAGES, ...REEL_IMAGES, ...REEL_IMAGES];

  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-8 bg-bone border-b border-hairline relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-6 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-violet text-xs font-display font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>CLIENT PROOF & TESTIMONIALS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight">
              What Founders & CMOs Say About Our Builds<span className="text-violet">.</span>
            </h2>
            <p className="text-mute text-base sm:text-lg font-medium max-w-2xl">
              Verified client reviews & reel case studies scrolling live. Hover over any reel card to inspect or click to expand.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <span className="px-3.5 py-1.5 bg-violet/10 text-violet font-mono text-xs font-bold rounded-full border border-violet/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet animate-pulse" />
              Scroll Velocity Reactive Rail
            </span>
          </div>
        </div>
      </div>

      {/* Velocity Reactive Marquee Rail */}
      <div className="w-full overflow-hidden py-4">
        <div ref={railRef} className="flex items-center gap-6 whitespace-nowrap will-change-transform">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setSelectedImage(item.src)}
              className="group relative shrink-0 w-[280px] sm:w-[360px] h-[360px] sm:h-[440px] bg-white border border-hairline rounded-3xl p-3 shadow-xl hover:shadow-2xl hover:border-violet/40 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
            >
              <div className="relative w-full flex-1 bg-bone rounded-2xl overflow-hidden border border-hairline flex items-center justify-center p-2">
                <img
                  src={item.src}
                  alt={`Verified Reel Review ${item.id}`}
                  className="w-full h-full object-contain rounded-xl pointer-events-none group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl backdrop-blur-[2px]">
                  <div className="px-4 py-2 bg-white/90 text-ink text-xs font-display font-bold rounded-xl shadow-lg flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5 text-violet" />
                    <span>Expand Review</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 px-1 flex items-center justify-between text-xs font-mono text-mute">
                <span className="truncate font-semibold text-ink">{item.label}</span>
                <span className="text-violet font-bold shrink-0">#0{item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl p-4 shadow-2xl border border-hairline overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 p-2.5 bg-ink/80 text-white rounded-full hover:bg-violet transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Expanded Reel Review"
              className="w-full h-full max-h-[80vh] object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ReelsReviewMarquee;
