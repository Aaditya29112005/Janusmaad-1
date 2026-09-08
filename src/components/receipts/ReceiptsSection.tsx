import React, { useEffect, useRef, useState } from 'react';
import { LIVE_WORKS } from '../../content/receipts';
import { ExternalLink, Sparkles, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';
import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { CursorFollowList } from '../common/CursorFollowList';

interface ReceiptsSectionProps {
  className?: string;
  onOpenAudit?: (type?: string) => void;
}

export const ReceiptsSection: React.FC<ReceiptsSectionProps> = ({ className = '', onOpenAudit }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track || prefersReducedMotion()) return;

    const cards = track.querySelectorAll('.work-card-3d');

    const update3DPositions = (progressIndex: number) => {
      cards.forEach((card, idx) => {
        const offset = idx - progressIndex;
        const absOffset = Math.abs(offset);

        // 3D Jesper Landberg perspective calculations
        const rotateY = offset * -20; // 3D cylinder curve angle
        const translateZ = -absOffset * 220; // depth offset
        const translateX = offset * 360; // horizontal separation
        const scale = Math.max(0.72, 1 - absOffset * 0.14);
        const opacity = Math.max(0.25, 1 - absOffset * 0.38);

        gsap.to(card, {
          x: translateX,
          z: translateZ,
          rotateY: rotateY,
          scale: scale,
          opacity: opacity,
          duration: 0.6,
          ease: 'power3.out',
        });
      });
    };

    update3DPositions(activeIndex);
  }, [activeIndex]);

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % LIVE_WORKS.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + LIVE_WORKS.length) % LIVE_WORKS.length);
  };

  return (
    <section id="receipts" className={`py-16 relative overflow-hidden select-none ${className}`}>
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-hairline pb-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-violet text-xs font-display font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Website Showcase</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl text-ink tracking-tight">
              Selected Work & Live Funnels<span className="text-violet">.</span>
            </h1>
            <p className="text-mute text-sm sm:text-base max-w-xl">
              Actual live website pages built and scaled across India. Click any card to visit live URL.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prevCard}
              className="p-4 bg-white border border-hairline rounded-full text-ink hover:bg-violet hover:text-bone transition-all duration-200 focus-visible:outline-violet shadow-sm hover:scale-105"
              aria-label="Previous work showcase"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-mute px-2">
              {activeIndex + 1} / {LIVE_WORKS.length}
            </span>
            <button
              onClick={nextCard}
              className="p-4 bg-white border border-hairline rounded-full text-ink hover:bg-violet hover:text-bone transition-all duration-200 focus-visible:outline-violet shadow-sm hover:scale-105"
              aria-label="Next work showcase"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Jesper Landberg 3D Curved Cylinder Showcase Container */}
        <div
          ref={containerRef}
          className="relative w-full h-[560px] flex items-center justify-center perspective-[1400px] overflow-hidden py-10"
        >
          <div
            ref={trackRef}
            className="relative w-full h-full flex items-center justify-center preserve-3d"
          >
            {LIVE_WORKS.map((work, idx) => (
              <div
                key={work.id}
                onClick={() => setActiveIndex(idx)}
                className={`work-card-3d absolute w-[360px] sm:w-[500px] bg-white border border-hairline rounded-3xl p-5 shadow-2xl transition-shadow duration-300 cursor-pointer overflow-hidden group ${
                  idx === activeIndex ? 'ring-2 ring-violet/40 z-30' : 'z-10'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Browser Frame Header */}
                <div className="bg-bone px-3 py-2 rounded-t-xl border border-hairline flex items-center justify-between text-[11px] font-mono text-mute mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-ink/70 truncate max-w-[240px]">
                    <Globe className="w-3 h-3 text-violet shrink-0" />
                    <span className="truncate">{work.liveUrl}</span>
                  </div>
                  <div className="w-6" />
                </div>

                {/* Actual Live Website Hero Page Screenshot */}
                <div className="relative w-full h-60 sm:h-72 bg-bone rounded-xl overflow-hidden border border-hairline shadow-inner mb-4 group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={work.imageSrc}
                    alt={`${work.clientName} Live Website`}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <a
                      href={work.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-violet text-bone rounded-xl font-display font-bold text-xs shadow-lg hover:bg-violet/90 transition-colors"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Card Information */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-mute block">
                        {work.category}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-ink group-hover:text-violet transition-colors">
                        {work.clientName}
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-teal/10 text-teal font-display font-bold text-xs rounded-xl border border-teal/20 shadow-xs">
                      {work.metricValue}
                    </span>
                  </div>

                  <p className="text-mute text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {LIVE_WORKS.map((work, idx) => (
            <button
              key={work.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-10 bg-violet' : 'w-2.5 bg-ink/20 hover:bg-ink/40'
              }`}
              aria-label={`Show ${work.clientName}`}
            />
          ))}
        </div>

        {/* Interactive Hover Storefront Showcase */}
        <div className="pt-12 border-t border-hairline">
          <CursorFollowList className="py-8 px-0 border-b-0" />
        </div>

        {/* Category Success Metrics Explorer & All 38 Clients Database */}
        <div className="pt-12 border-t border-hairline">
          <CategoryMetricsExplorer onOpenAudit={onOpenAudit} />
        </div>
      </div>
    </section>
  );
};
