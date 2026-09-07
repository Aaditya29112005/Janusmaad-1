import React, { useEffect, useRef } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoWrapperRef = useRef<HTMLDivElement | null>(null);
  const path1Ref = useRef<SVGPathElement | null>(null);
  const path2Ref = useRef<SVGPathElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (prefersReducedMotion()) {
      if (onComplete) onComplete();
      return;
    }

    // Lock body scroll during intro
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          if (onComplete) onComplete();
        },
      });

      // Prepare SVG path stroke drawing
      const paths = [path1Ref.current, path2Ref.current].filter(Boolean);
      paths.forEach((path) => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });
      });

      // 1. Draw SVG logo paths dynamically (like GSAP intro demo)
      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power2.inOut',
        stagger: 0.15,
      });

      // 2. Reveal brand text simultaneously
      tl.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.9, letterSpacing: '0.2em' },
        { opacity: 1, scale: 1, letterSpacing: '0.02em', duration: 0.8, ease: 'power3.out' },
        '-=0.8'
      );

      // 3. Pulse scale up logo (GSAP signature exit)
      tl.to(logoWrapperRef.current, {
        scale: 1.12,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in',
        delay: 0.3,
      });

      // 4. Smooth curtain wipe reveal
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
      });
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  if (prefersReducedMotion()) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-[#070B1A] text-[#F6F3EC] flex items-center justify-center p-6 select-none"
    >
      <div ref={logoWrapperRef} className="flex items-center gap-5 sm:gap-6">
        {/* Dynamic Animated SVG Line Art Emblem (GSAP Style) */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 relative flex items-center justify-center">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-[#7C5CFF]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Faceted Geometric Ring */}
            <path
              ref={path1Ref}
              d="M 50 10 L 85 30 L 85 70 L 50 90 L 15 70 L 15 30 Z"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Kinetic Wave Line (GSAP-like crest) */}
            <path
              ref={path2Ref}
              d="M 30 65 C 35 30, 45 30, 50 50 C 55 70, 65 70, 70 35"
              stroke="#00E5D8"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Clean JanusMaad Typography (Zero progress bar/numbers clutter) */}
        <div ref={textRef} className="opacity-0">
          <h1 className="font-display font-bold text-4xl sm:text-6xl text-bone tracking-tight leading-none">
            JanusMaad<span className="text-[#00E5D8]">.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
