import React, { useEffect, useRef } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

export const HorizontalMarqueeText: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    if (!section || !text || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const scrollLength = text.scrollWidth - window.innerWidth;

      if (scrollLength > 0 && window.innerWidth >= 768) {
        // Main Horizontal Scroll Pinning (CodePen GSAP spec)
        const scrollTween = gsap.to(text, {
          x: -scrollLength,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 1,
            start: 'top center',
            end: () => `+=${scrollLength + 600}`,
            invalidateOnRefresh: true,
          },
        });

        // Kinetic character animation linked to container scroll
        const words = text.querySelectorAll('.kinetic-word');
        words.forEach((word, idx) => {
          gsap.fromTo(
            word,
            { y: idx % 2 === 0 ? -40 : 40, opacity: 0.4, rotate: idx % 2 === 0 ? -5 : 5 },
            {
              y: 0,
              opacity: 1,
              rotate: 0,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: word,
                containerAnimation: scrollTween,
                start: 'left 90%',
                end: 'left 20%',
                scrub: true,
              },
            }
          );
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const marqueeText = "DATA IN. DESIGN OUT. START CONVERSIONS FROM DAY ONE. BUILD LANDING PAGES THAT EARN THEIR KEEP.";
  const wordsArray = marqueeText.split(' ');

  return (
    <section
      ref={sectionRef}
      className="Horizontal overflow-hidden bg-violet text-bone py-16 sm:py-24 border-y border-hairline relative select-none"
    >
      <div className="w-full flex items-center">
        <h2
          ref={textRef}
          className="Horizontal__text font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl whitespace-nowrap flex items-center gap-6 sm:gap-10 tracking-tight text-bone pl-[10vw] pr-[10vw]"
        >
          {wordsArray.map((word, i) => (
            <span
              key={i}
              className={`kinetic-word inline-block transition-colors ${
                word === 'CONVERSIONS' || word === 'EARN' ? 'text-teal' : 'text-bone'
              }`}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};
