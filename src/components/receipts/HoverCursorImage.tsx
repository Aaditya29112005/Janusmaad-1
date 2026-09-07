import React, { useEffect, useRef } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

interface HoverCursorImageProps {
  imageSrc: string | null;
  isVisible: boolean;
}

export const HoverCursorImage: React.FC<HoverCursorImageProps> = ({ imageSrc, isVisible }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const xTo = useRef<any>(null);
  const yTo = useRef<any>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || prefersReducedMotion()) return;

    // Pointer devices only check (C3 spec)
    if (!window.matchMedia('(hover: hover)').matches) return;

    xTo.current = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
    yTo.current = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

    const handleMouseMove = (e: MouseEvent) => {
      if (xTo.current && yTo.current) {
        xTo.current(e.clientX + 20);
        yTo.current(e.clientY + 20);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isVisible || !imageSrc || window.innerWidth < 768) return null;

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 z-50 pointer-events-none w-64 h-40 rounded-xl overflow-hidden shadow-2xl border border-white/20 transition-opacity duration-200"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <img src={imageSrc} alt="Preview" className="w-full h-full object-cover" />
    </div>
  );
};
