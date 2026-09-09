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
 * Magnetic button hook for primary CTAs
 * Exact physics:
 * - mousemove: mapRange with strength, duration: 0.4, ease: "power2.out", overwrite: true
 * - mouseleave: duration: 0.7, ease: "elastic.out(1, 0.4)", overwrite: true
 */
export const useMagneticButton = <T extends HTMLElement = HTMLButtonElement>(strength = 0.35) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    (el as any).__hasMagnetic = true;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, e.clientX);
      const y = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, e.clientY);

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: true,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)',
        overwrite: true,
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.to(el, { x: 0, y: 0, duration: 0.2, overwrite: true });
    };
  }, [strength]);

  return ref;
};

/**
 * Global magnetic buttons initializer
 * Automatically applies the magnetic tween to EVERY button across the entire application:
 * - mousemove: x * strength, y * strength, duration: 0.4, ease: "power2.out", overwrite: true
 * - mouseleave: x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)", overwrite: true
 */
export const initGlobalMagneticButtons = (strength = 0.35) => {
  if (typeof window === 'undefined') return () => {};
  if (!window.matchMedia('(hover: hover)').matches || prefersReducedMotion()) return () => {};

  let currentBtn: HTMLElement | null = null;

  const handleMouseMove = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const btn = target?.closest('button, [role="button"], a.btn, .mag-btn, .button-magnetic') as HTMLElement | null;

    if (btn) {
      // If element is already handled by useMagneticButton hook, skip to avoid duplicate computation
      if ((btn as any).__hasMagnetic) return;

      if (currentBtn && currentBtn !== btn) {
        gsap.to(currentBtn, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'elastic.out(1, 0.4)',
          overwrite: true,
        });
      }
      currentBtn = btn;
      const rect = btn.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, e.clientX);
      const y = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, e.clientY);

      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: true,
      });
    } else if (currentBtn) {
      gsap.to(currentBtn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)',
        overwrite: true,
      });
      currentBtn = null;
    }
  };

  const handleMouseLeave = () => {
    if (currentBtn) {
      gsap.to(currentBtn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)',
        overwrite: true,
      });
      currentBtn = null;
    }
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  document.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('blur', handleMouseLeave);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseleave', handleMouseLeave);
    window.removeEventListener('blur', handleMouseLeave);
    if (currentBtn) {
      gsap.to(currentBtn, { x: 0, y: 0, duration: 0.1, overwrite: true });
    }
  };
};
