import React, { useEffect, useRef } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

interface TextRollingProps {
  text: string;
}

export const TextRolling: React.FC<TextRollingProps> = ({ text }) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      // Instant display for reduced motion
      gsap.set(el, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Orchestrated 3D character roll sequence on load
      const chars = el.querySelectorAll('.roll-char');
      
      gsap.fromTo(
        chars,
        {
          rotateX: -90,
          opacity: 0,
          y: 20,
        },
        {
          rotateX: 0,
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.04,
          ease: 'back.out(1.7)',
          delay: 0.2,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(' ');

  return (
    <span
      ref={containerRef}
      className="inline-block text-violet font-display"
      style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="roll-char inline-block"
              style={{
                transformOrigin: '50% 50% -20px',
                willChange: 'transform, opacity',
              }}
            >
              {char}
            </span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="roll-char inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </span>
  );
};
