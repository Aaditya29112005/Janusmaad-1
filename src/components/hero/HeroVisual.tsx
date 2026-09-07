import React, { useEffect, useRef } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';
import { TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const desktopRef = useRef<HTMLDivElement | null>(null);
  const mobileRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // 1. Sine Wave Floating Motion loop (Continuous Smooth Float Animation)
      gsap.to(desktopRef.current, {
        y: '-=12',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(mobileRef.current, {
        y: '+=14',
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(badgeRef.current, {
        y: '-=8',
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // 2. Interactive Parallax Tilt on Mouse Move
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(desktopRef.current, {
          rotateY: mouseX * 12,
          rotateX: -mouseY * 12,
          duration: 0.5,
          ease: 'power2.out',
        });

        gsap.to(mobileRef.current, {
          rotateY: mouseX * 20,
          rotateX: -mouseY * 20,
          duration: 0.5,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to([desktopRef.current, mobileRef.current], {
          rotateY: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto min-h-[460px] sm:min-h-[520px] flex items-center justify-center select-none perspective-1000"
    >
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet/10 via-teal/15 to-transparent rounded-full blur-3xl opacity-70 pointer-events-none" />

      {/* Main Card 1: Desktop Landing Page UI Showcase */}
      <div
        ref={desktopRef}
        className="relative w-[90%] sm:w-[92%] bg-white border border-hairline rounded-2xl shadow-2xl overflow-hidden group transition-all duration-300 transform-gpu z-10"
      >
        {/* Browser Top Window Frame */}
        <div className="bg-bone border-b border-hairline px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <div className="text-[11px] font-mono text-mute bg-white px-3 py-0.5 rounded-md border border-hairline flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-teal" />
            <span>janusmaad.com/case-study</span>
          </div>
          <div className="w-8" />
        </div>

        {/* High-Resolution Showcase Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
          <img
            src="/hero/hero-desktop.jpg"
            alt="JanusMaad High Converting Landing Page Showcase"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Main Card 2: Floating Mobile Funnel Showcase */}
      <div
        ref={mobileRef}
        className="absolute -bottom-4 -left-2 sm:-left-6 w-[52%] sm:w-[48%] bg-white border border-hairline rounded-3xl shadow-2xl overflow-hidden z-20 group transition-all duration-300 transform-gpu"
      >
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-slate-100">
          <img
            src="/hero/hero-mobile.jpg"
            alt="Mobile Conversion Checkout Mockup"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent flex items-end p-3">
            <span className="text-[11px] font-display font-bold text-bone flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal" />
              <span>Sub-1.2s Mobile LCP</span>
            </span>
          </div>
        </div>
      </div>

      {/* Floating Card 3: Measured CVR Lift Pill Badge */}
      <div
        ref={badgeRef}
        className="absolute top-4 -right-2 sm:-right-6 bg-violet text-bone border border-violet-deep px-4 py-3 rounded-2xl shadow-2xl z-30 flex items-center gap-3 backdrop-blur-md transform-gpu"
      >
        <div className="p-2 rounded-xl bg-teal/20 text-teal">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] text-bone/70 uppercase tracking-wider font-bold">Measured Lift</div>
          <div className="font-display font-bold text-lg text-bone tabular-nums">+62.4% CVR</div>
        </div>
      </div>
    </div>
  );
};
