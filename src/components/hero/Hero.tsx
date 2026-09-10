import React, { useEffect, useRef } from 'react';
import { HERO_CONTENT } from '../../content/hero';
import { Button } from '../ui/Button';
import { TypewriterText } from './TypewriterText';
import { HeroVisual } from './HeroVisual';
import { ShieldCheck } from 'lucide-react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

interface HeroProps {
  onOpenAudit: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.valmax-headline',
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9 }
      )
        .fromTo(
          '.valmax-sub',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          '.valmax-cta',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.valmax-visual',
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0 },
          '-=0.8'
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] pt-32 pb-24 px-4 sm:px-8 flex flex-col justify-center overflow-hidden bg-bone border-b border-hairline">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Content */}
        <div className="lg:col-span-6 space-y-8">
          {/* Main Display Headline with Typewriter Effect */}
          <h1 className="valmax-headline opacity-0 text-hero-display text-ink font-display tracking-tight leading-[0.91]">
            <span className="block">{HERO_CONTENT.headlineLine1}</span>
            <span className="block mt-1 sm:mt-2">
              {HERO_CONTENT.headlinePrefix}{' '}
              <TypewriterText words={HERO_CONTENT.typewriterWords} />
            </span>
          </h1>

          {/* Subheading / Promise Body */}
          <p className="valmax-sub opacity-0 text-ink/85 text-lg sm:text-xl max-w-[64ch] leading-relaxed font-normal">
            {HERO_CONTENT.body}
          </p>

          {/* CTAs and Reassurance Line */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <div className="valmax-cta opacity-0">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onOpenAudit('call')}
                >
                  {HERO_CONTENT.primaryCTA}
                </Button>
              </div>
            </div>

            {/* Reassurance line */}
            <div className="valmax-cta opacity-0 flex items-center gap-2 text-mute text-xs sm:text-sm font-medium tracking-wide">
              <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
              <span>{HERO_CONTENT.reassurance}</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Converting Live Performance Dashboard Visual */}
        <div className="valmax-visual opacity-0 lg:col-span-6 relative flex items-center justify-center lg:justify-end">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};
