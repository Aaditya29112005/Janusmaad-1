import { useEffect, useRef } from 'react';
import { gsap } from './register';

/**
 * Checks if the user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Magnetic button hook for primary CTAs (C6 spec)
 * Uses overwrite: "auto", power2.out on move, and elastic.out(1, 0.4) on leave.
 */
export const useMagneticButton = <T extends HTMLElement = HTMLButtonElement>() => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    // Gate magnetic effect for pointer devices only
    if (!window.matchMedia('(hover: hover)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      // Magnetic pull up to 14px displacement
      const x = gsap.utils.mapRange(-rect.width / 2, rect.width / 2, -14, 14, distanceX);
      const y = gsap.utils.mapRange(-rect.height / 2, rect.height / 2, -14, 14, distanceY);

      gsap.to(el, {
        x,
        y,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.4)',
        overwrite: 'auto',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};
