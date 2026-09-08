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
  const textJanusRef = useRef<HTMLSpanElement | null>(null);
  const textMaadRef = useRef<HTMLSpanElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

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
      timelineRef.current = tl;

      // Prepare SVG path stroke drawing
      const paths = [path1Ref.current, path2Ref.current].filter(Boolean) as SVGPathElement[];
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
        });
      });

      // Progress counter object
      const progressObj = { value: 0 };

      // 1. Kinetic Neon Spline Draw (just like the GSAP demo)
      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power3.inOut',
        stagger: 0.1,
      }, 0);

      // 2. Numeric Counter 0 -> 100%
      tl.to(progressObj, {
        value: 100,
        duration: 1.4,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = `${Math.round(progressObj.value).toString().padStart(2, '0')}%`;
          }
        },
      }, 0);

      // 3. Neon Progress Line Bar Fill
      if (barRef.current) {
        tl.to(barRef.current, {
          width: '100%',
          duration: 1.4,
          ease: 'power2.inOut',
        }, 0);
      }

      // 4. Reveal Typography (Janus in white, MAAD in electric GSAP green)
      tl.fromTo(
        textJanusRef.current,
        { opacity: 0, x: -20, filter: 'blur(8px)' },
        { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power3.out' },
        0.5
      );

      tl.fromTo(
        textMaadRef.current,
        { opacity: 0, scale: 0.8, filter: 'blur(8px)' },
        { 
          opacity: 1, 
          scale: 1, 
          filter: 'blur(0px)', 
          duration: 0.7, 
          ease: 'back.out(1.8)' 
        },
        0.75
      );

      // 5. Subtitle Tagline Reveal
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          0.9
        );
      }

      // 6. GSAP Signature Bloom / Pulse before reveal
      tl.to(logoWrapperRef.current, {
        scale: 1.05,
        duration: 0.35,
        ease: 'power2.out',
      }, 1.45);

      tl.to(logoWrapperRef.current, {
        scale: 0.95,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.4,
        ease: 'power2.in',
      }, 1.75);

      // 7. Cinematic Curtain Wipe Reveal (Dark screen slides up to reveal site)
      tl.to(containerRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: 'power4.inOut',
      }, 1.95);

    }, containerRef);

    // Keyboard listener to skip on ESC or Space
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      ctx.revert();
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (timelineRef.current) {
      timelineRef.current.timeScale(4);
    }
  };

  if (prefersReducedMotion()) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#000000] text-white flex flex-col items-center justify-center p-6 select-none overflow-hidden cursor-pointer"
      onClick={handleSkip}
      title="Click anywhere to skip"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#0ae448]/10 rounded-full blur-[140px] pointer-events-none -z-0 animate-pulse" />

      {/* Centerpiece Container */}
      <div ref={logoWrapperRef} className="relative z-10 flex flex-col items-center gap-8 max-w-lg w-full">
        
        {/* Animated Brand Mark & Text in Row */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          
          {/* GSAP-Style Kinetic Neon Spline Mark */}
          <div className="w-16 h-16 sm:w-24 sm:h-24 relative flex items-center justify-center shrink-0">
            <svg
              viewBox="0 0 120 120"
              className="w-full h-full overflow-visible"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Authentic Neon Tube Glow Filter */}
                <filter id="gsap-neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur2" />
                    <feMergeNode in="blur1" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Underlying Faint Ghost Path for Depth */}
              <path
                d="M 22 56 C 22 42, 34 32, 48 32 C 60 32, 68 40, 68 56 L 68 84 C 68 98, 54 106, 40 106 C 26 106, 16 96, 16 82 C 16 70, 26 64, 36 70 C 42 74, 38 88, 48 90 C 56 90, 62 84, 62 72 L 62 30 C 62 14, 76 10, 86 28 L 98 54 C 104 66, 112 72, 120 72"
                stroke="#0ae448"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.18"
              />

              {/* Primary Kinetic Neon Green Spline (Draws live with GSAP) */}
              <path
                ref={path1Ref}
                d="M 22 56 C 22 42, 34 32, 48 32 C 60 32, 68 40, 68 56 L 68 84 C 68 98, 54 106, 40 106 C 26 106, 16 96, 16 82 C 16 70, 26 64, 36 70 C 42 74, 38 88, 48 90 C 56 90, 62 84, 62 72 L 62 30 C 62 14, 76 10, 86 28 L 98 54 C 104 66, 112 72, 120 72"
                stroke="#0ae448"
                strokeWidth="8.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#gsap-neon-glow)"
              />

              {/* Secondary Accent Kinetic Spark Loop */}
              <path
                ref={path2Ref}
                d="M 44 22 C 54 8, 72 8, 82 22 L 96 48"
                stroke="#00FFA3"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.9"
                filter="url(#gsap-neon-glow)"
              />
            </svg>
          </div>

          {/* JanusMAAD Bold Typography (GSAP-like High Contrast) */}
          <div className="flex items-baseline font-display font-black text-4xl sm:text-6xl tracking-tight leading-none">
            <span ref={textJanusRef} className="text-white drop-shadow-md">
              Janus
            </span>
            <span
              ref={textMaadRef}
              className="text-[#0ae448] ml-1 tracking-wider"
              style={{
                textShadow: '0 0 20px rgba(10, 228, 72, 0.75), 0 0 40px rgba(10, 228, 72, 0.4)'
              }}
            >
              MAAD
            </span>
          </div>
        </div>

        {/* Progress System: Glowing Green Line + Percentage */}
        <div className="w-full max-w-xs space-y-3">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
            <div
              ref={barRef}
              className="h-full w-0 bg-gradient-to-r from-[#00FFA3] to-[#0ae448] rounded-full"
              style={{
                boxShadow: '0 0 12px rgba(10, 228, 72, 0.9)'
              }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <div
              ref={subtitleRef}
              className="text-white/60 tracking-widest uppercase text-[10px] sm:text-xs"
            >
              Past Insights • Future Thinking
            </div>
            <span
              ref={counterRef}
              className="text-[#0ae448] font-bold tabular-nums text-sm tracking-wider"
            >
              00%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Minimal Skip Button (matching the GSAP demo bottom bar button) */}
      <div className="absolute bottom-8 left-8 z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleSkip();
          }}
          className="px-3.5 py-1.5 rounded-md bg-white/5 hover:bg-white/15 text-white/50 hover:text-white border border-white/10 text-xs font-mono transition-colors cursor-pointer"
        >
          Skip [ESC]
        </button>
      </div>
    </div>
  );
};
