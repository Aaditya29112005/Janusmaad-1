import React, { useEffect, useRef } from 'react';
import { HERO_CONTENT } from '../../content/hero';
import { Button } from '../ui/Button';
import { TextRolling } from './TextRolling';
import { ArrowDown, ShieldCheck } from 'lucide-react';
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
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[80vh] pt-36 pb-24 px-4 sm:px-8 flex flex-col justify-center overflow-hidden bg-bone border-b border-hairline">
      <div className="max-w-5xl mx-auto w-full text-center space-y-8 relative z-10">
        {/* Main Display Headline */}
        <h1 className="valmax-headline opacity-0 text-hero-display text-ink font-display tracking-tight leading-[0.91]">
          <span className="inline-block">{HERO_CONTENT.headlineLine1}</span>{' '}
          <br className="hidden sm:inline" />
          <TextRolling text={HERO_CONTENT.headlineLine2} />
        </h1>

        {/* Subheading / Promise Body */}
        <p className="valmax-sub opacity-0 text-ink/85 text-lg sm:text-2xl max-w-[64ch] mx-auto leading-relaxed font-normal">
          {HERO_CONTENT.body}
        </p>

        {/* CTAs and Reassurance Line */}
        <div className="space-y-4 pt-4 flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="valmax-cta opacity-0">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenAudit('call')}
              >
                {HERO_CONTENT.primaryCTA}
              </Button>
            </div>
            <div className="valmax-cta opacity-0">
              <Button
                variant="outline"
                size="lg"
                href="#calculator"
              >
                <span>{HERO_CONTENT.secondaryCTA}</span>
                <ArrowDown className="w-4 h-4 ml-2 text-violet" />
              </Button>
            </div>
          </div>

          {/* Reassurance line */}
          <div className="valmax-cta opacity-0 flex items-center justify-center gap-2 text-mute text-xs sm:text-sm font-medium tracking-wide pt-2">
            <ShieldCheck className="w-4 h-4 text-teal shrink-0" />
            <span>{HERO_CONTENT.reassurance}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

