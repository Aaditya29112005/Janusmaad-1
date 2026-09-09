import React, { useEffect, useRef } from 'react';
import { TESTIMONIALS, TESTIMONIALS_HEADER } from '../../content/testimonials';
import { gsap, Draggable } from '../../gsap/register';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { prefersReducedMotion } from '../../gsap/utils';

export const TestimonialsMarquee: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLUListElement | null>(null);
  const proxyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cardsEl = cardsRef.current;
    const proxy = proxyRef.current;
    if (!cardsEl || !proxy || prefersReducedMotion()) return;

    const cards = gsap.utils.toArray<HTMLElement>(cardsEl.querySelectorAll('li'));
    if (cards.length === 0) return;

    // Initial setup: position cards with xPercent and scale
    gsap.set(cards, { xPercent: 400, opacity: 0, scale: 0 });

    const spacing = 0.1;
    const snapTime = gsap.utils.snap(spacing);

    // Animation timeline for each card: opacity/scale curve + position translation from xPercent 400 to -400
    const animateFunc = (element: HTMLElement) => {
      const tl = gsap.timeline();
      tl.fromTo(
        element,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          zIndex: 100,
          duration: 0.5,
          yoyo: true,
          repeat: 1,
          ease: 'power1.in',
          immediateRender: false,
        }
      ).fromTo(
        element,
        { xPercent: 400 },
        { xPercent: -400, duration: 1, ease: 'none', immediateRender: false },
        0
      );
      return tl;
    };

    // Build seamless infinite loop across 3 cycles of items
    function buildSeamlessLoop(items: HTMLElement[], spacing: number, animFunc: (el: HTMLElement) => gsap.core.Timeline) {
      const rawSequence = gsap.timeline({ paused: true });
      const seamlessLoop = gsap.timeline({
        paused: true,
        repeat: -1,
        onRepeat() {
          if (this._time === this._dur) {
            this._prev = this._dur;
          }
        },
      });

      const cycleDuration = spacing * items.length;

      items
        .concat(items)
        .concat(items)
        .forEach((_, i) => {
          const anim = animFunc(items[i % items.length]);
          rawSequence.add(anim, i * spacing);
        });

      seamlessLoop.fromTo(
        rawSequence,
        { time: cycleDuration },
        { time: cycleDuration * 2, duration: cycleDuration, ease: 'none' }
      );
      return seamlessLoop;
    }

    const seamlessLoop = buildSeamlessLoop(cards, spacing, animateFunc);
    const playhead = { offset: 0 };

    function loopTime(offset: number) {
      return ((offset % 1 + 1) % 1);
    }

    const scrub = gsap.to(playhead, {
      offset: 0,
      onUpdate() {
        seamlessLoop.progress(loopTime(playhead.offset));
      },
      duration: 0.6,
      ease: 'power2.out',
      paused: true,
    });

    function movePlayhead(amount: number) {
      const targetOffset = snapTime(playhead.offset + amount);
      scrub.vars.offset = targetOffset;
      scrub.invalidate().restart();
    }

    // Autoplay: automatically move to next testimonial card every 2 seconds
    let autoPlayTimer: ReturnType<typeof setInterval> | null = null;

    const startAutoPlay = () => {
      if (autoPlayTimer) clearInterval(autoPlayTimer);
      autoPlayTimer = setInterval(() => {
        movePlayhead(spacing);
      }, 2000);
    };

    const stopAutoPlay = () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    };

    startAutoPlay();

    // Attach Draggable for smooth touch & cursor drag scrubbing
    const draggableInstance = Draggable.create(proxy, {
      type: 'x',
      trigger: cardsEl,
      onPress() {
        stopAutoPlay();
        gsap.killTweensOf(scrub);
      },
      onDrag() {
        const delta = (this.x - this.startX) * -0.0005;
        playhead.offset += delta;
        seamlessLoop.progress(loopTime(playhead.offset));
        this.startX = this.x;
      },
      onRelease() {
        const snapped = snapTime(playhead.offset);
        scrub.vars.offset = snapped;
        scrub.invalidate().restart();
        startAutoPlay();
      },
    })[0];

    // Pause autoplay on mouse hover so users can comfortably read; resume on leave
    const handleMouseEnter = () => stopAutoPlay();
    const handleMouseLeave = () => startAutoPlay();

    cardsEl.addEventListener('mouseenter', handleMouseEnter);
    cardsEl.addEventListener('mouseleave', handleMouseLeave);

    // Store move function and timer reset on DOM element for Next / Prev buttons
    (cardsEl as any)._movePlayhead = movePlayhead;
    (cardsEl as any)._resetTimer = startAutoPlay;

    // Initial progress render
    seamlessLoop.progress(0.001);

    return () => {
      stopAutoPlay();
      cardsEl.removeEventListener('mouseenter', handleMouseEnter);
      cardsEl.removeEventListener('mouseleave', handleMouseLeave);
      draggableInstance.kill();
      seamlessLoop.kill();
      scrub.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-8 bg-bone border-b border-hairline relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Headings & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-violet text-xs font-display font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Measured Proof</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl text-ink tracking-tight">
              {TESTIMONIALS_HEADER.h1}<span className="text-violet">.</span>
            </h1>
            <h2 className="text-mute text-lg sm:text-xl font-medium">
              {TESTIMONIALS_HEADER.h2}
            </h2>
          </div>

          {/* Action Buttons: Prev & Next */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                const el = cardsRef.current as any;
                if (el && el._movePlayhead) {
                  el._movePlayhead(-0.1);
                  el._resetTimer?.();
                }
              }}
              className="p-4 bg-white border border-hairline rounded-2xl text-ink hover:bg-violet hover:text-white hover:border-violet transition-all shadow-md cursor-pointer group"
              aria-label="Previous Testimonial Card"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => {
                const el = cardsRef.current as any;
                if (el && el._movePlayhead) {
                  el._movePlayhead(0.1);
                  el._resetTimer?.();
                }
              }}
              className="p-4 bg-white border border-hairline rounded-2xl text-ink hover:bg-violet hover:text-white hover:border-violet transition-all shadow-md cursor-pointer group"
              aria-label="Next Testimonial Card"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Gallery Container: Smooth Dragging, Snapping & Infinite Loop */}
        <div className="relative w-full h-[400px] sm:h-[480px] overflow-hidden flex items-center justify-center">
          <ul
            ref={cardsRef}
            className="cards relative w-[280px] sm:w-[360px] h-[340px] sm:h-[420px] list-none p-0 m-0 cursor-grab active:cursor-grabbing"
          >
            {TESTIMONIALS.map((item) => (
              <li
                key={item.id}
                className="absolute inset-0 w-full h-full bg-white border border-hairline rounded-3xl p-3 shadow-2xl overflow-hidden flex items-center justify-center"
              >
                {item.imageCardSrc ? (
                  <div className="w-full h-full bg-bone rounded-2xl overflow-hidden border border-hairline flex items-center justify-center p-2">
                    <img
                      src={item.imageCardSrc}
                      alt={`Client Testimonial ${item.id}`}
                      className="w-full h-full object-contain rounded-xl pointer-events-none"
                    />
                  </div>
                ) : (
                  <div className="p-6 space-y-4 w-full">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-violet text-sm">
                        {item.logo}
                      </span>
                      <span className="px-3 py-1 bg-teal/10 text-teal text-xs font-display font-bold rounded-lg border border-teal/20">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-ink text-sm italic leading-relaxed">
                      "{item.quote}"
                    </p>
                    <div className="pt-3 border-t border-hairline text-xs font-display font-bold text-ink">
                      {item.name} — <span className="text-mute font-normal">{item.role}, {item.company}</span>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div ref={proxyRef} className="drag-proxy hidden" />
        </div>
      </div>
    </section>
  );
};
