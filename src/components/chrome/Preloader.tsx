import React, { useEffect, useRef } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoWrapperRef = useRef<HTMLDivElement | null>(null);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
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

      // Progress counter object
      const progressObj = { value: 0 };

      // 1. Reveal Official Logo with smooth blur & scale entrance
      if (logoImgRef.current) {
        tl.fromTo(
          logoImgRef.current,
          { opacity: 0, scale: 0.88, filter: 'blur(12px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out' },
          0.1
        );
      }

      // 2. Numeric Counter 0 -> 100%
      tl.to(
        progressObj,
        {
          value: 100,
          duration: 1.4,
          ease: 'power2.inOut',
          onUpdate: () => {
            const val = Math.round(progressObj.value);
            if (counterRef.current) {
              counterRef.current.textContent = `${val.toString().padStart(2, '0')}%`;
            }
          },
        },
        0.1
      );

      // 3. Violet-to-Teal Progress Line Bar Fill (matching brand logo)
      if (barRef.current) {
        tl.to(
          barRef.current,
          {
            width: '100%',
            duration: 1.4,
            ease: 'power2.inOut',
          },
          0.1
        );
      }

      // 4. Subtitle Tagline Reveal
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
          0.6
        );
      }

      // 5. Signature Pulse before reveal
      tl.to(
        logoWrapperRef.current,
        {
          scale: 1.04,
          duration: 0.35,
          ease: 'power2.out',
        },
        1.55
      );

      tl.to(
        logoWrapperRef.current,
        {
          scale: 0.95,
          opacity: 0,
          filter: 'blur(10px)',
          duration: 0.35,
          ease: 'power2.in',
        },
        1.8
      );

      // 6. Curtain Wipe Reveal (Dark screen slides up to reveal site)
      tl.to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.85,
          ease: 'power4.inOut',
        },
        2.0
      );
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
      className="fixed inset-0 z-[9999] bg-[#050914] text-white flex flex-col items-center justify-center p-6 select-none overflow-hidden cursor-pointer"
      onClick={handleSkip}
      title="Click anywhere to skip"
    >
      {/* Background Ambient Radial Glow (Violet & Teal Brand Halo) */}
      <div className="absolute w-[640px] h-[640px] bg-gradient-to-tr from-violet/20 via-teal/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-0 animate-pulse" />

      {/* Centerpiece Container */}
      <div ref={logoWrapperRef} className="relative z-10 flex flex-col items-center gap-8 max-w-lg w-full">
        {/* Official JanusMAAD Logo Showcase */}
        <div className="relative flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gradient-to-r from-violet/25 via-teal/20 to-transparent blur-3xl rounded-full scale-125 pointer-events-none" />
          <img
            ref={logoImgRef}
            src="/logo.png"
            alt="JanusMAAD Logo"
            className="h-14 sm:h-18 md:h-20 w-auto object-contain relative z-10 drop-shadow-[0_12px_36px_rgba(108,56,165,0.4)]"
          />
        </div>

        {/* Progress System: Violet-to-Teal Line + Percentage */}
        <div className="w-full max-w-xs space-y-3">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
            <div
              ref={barRef}
              className="h-full w-0 bg-gradient-to-r from-violet via-[#7B43B5] to-teal rounded-full"
              style={{
                boxShadow: '0 0 14px rgba(0, 229, 216, 0.7)',
              }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <div
              ref={subtitleRef}
              className="text-white/60 tracking-widest uppercase text-[10px] sm:text-xs"
            >
              YOUR GROWTH PARTNER
            </div>
            <span
              ref={counterRef}
              className="text-teal font-bold tabular-nums text-sm tracking-wider"
            >
              00%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Controls: Skip Button */}
      <div className="absolute bottom-8 left-8 z-20 flex items-center pointer-events-auto">
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
