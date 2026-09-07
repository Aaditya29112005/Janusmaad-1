import React, { useState } from 'react';
import { TESTIMONIALS, TESTIMONIALS_HEADER } from '../../content/testimonials';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export const TestimonialsMarquee: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = 3;
  const itemsPerSlide = 6;

  const currentItems = TESTIMONIALS.slice(
    currentSlide * itemsPerSlide,
    (currentSlide + 1) * itemsPerSlide
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-24 px-4 sm:px-8 bg-bone border-b border-hairline relative">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Headings H1 & H2 */}
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

        {/* 6 in 1 Frame Grid displaying Real Client Review Cards (Contained cleanly inside cards) */}
        <div className="relative space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="card-surface rounded-3xl p-5 flex flex-col justify-between space-y-4 group overflow-hidden"
              >
                {/* Real Client Review Image Card Display (In-place contained inside card) */}
                {item.imageCardSrc && (
                  <div className="relative w-full h-48 bg-bone rounded-2xl overflow-hidden border border-hairline p-2 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src={item.imageCardSrc}
                      alt={item.company}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>
                )}

                {/* Metric Badge & Quote */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-violet text-sm uppercase tracking-wider">
                      {item.logo}
                    </span>
                    <span className="px-3 py-1 bg-teal/10 text-teal text-xs font-display font-bold rounded-lg border border-teal/20 tabular-nums">
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-ink/80 text-xs sm:text-sm leading-relaxed italic line-clamp-3">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-hairline flex items-center justify-between text-xs">
                  <div>
                    <div className="font-display font-bold text-ink">{item.name}</div>
                    <div className="text-mute text-[11px]">{item.role}, {item.company}</div>
                  </div>
                  <Quote className="w-4 h-4 text-violet/40 shrink-0" />
                </div>
              </div>
            ))}
          </div>

          {/* Swipe Controls (3 swipes) */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-10 bg-violet' : 'w-2.5 bg-ink/20 hover:bg-ink/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
              <span className="text-xs text-mute font-mono ml-2">
                Frame {currentSlide + 1} of {totalSlides}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                className="p-3.5 bg-white border border-hairline rounded-full text-ink hover:bg-violet hover:text-bone transition-colors focus-visible:outline-violet shadow-sm"
                aria-label="Previous testimonials frame"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3.5 bg-white border border-hairline rounded-full text-ink hover:bg-violet hover:text-bone transition-colors focus-visible:outline-violet shadow-sm"
                aria-label="Next testimonials frame"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
