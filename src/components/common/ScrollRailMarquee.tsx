import React, { useEffect, useRef } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

interface SpecializationItem {
  id: string;
  name: string;
  isFeatured?: boolean;
}

const ROW_1_FIELDS: SpecializationItem[] = [
  { id: 'jewelry', name: 'Jewelry (Ecomm + Retail)' },
  { id: 'fintech', name: 'Financial Services & Fintech' },
  { id: 'spiritual', name: 'Spiritual, Wellness & Ayurveda' },
  { id: 'fashion', name: 'Fashion, Apparel & Couture' },
  { id: 'hospitality', name: 'Hospitality, Resorts & Dining' },
  { id: 'skincare', name: 'Skincare, Beauty & Cosmetics' },
];

const ROW_2_FIELDS: SpecializationItem[] = [
  { id: 'home', name: 'Home, Decor & Furniture' },
  { id: 'rideables', name: 'Rideables, Footwear & D2C' },
  { id: 'realestate', name: 'Real Estate & Broking' },
  { id: 'petcare', name: 'Pet Products & Accessories' },
  { id: 'food', name: 'Food, Sweets & Confectionery' },
  { id: 'jewelry-2', name: 'Jewelry (Ecomm + Retail)' },
  { id: 'fintech-2', name: 'Financial Services & Fintech' },
];

export const ScrollRailMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rail1Ref = useRef<HTMLDivElement | null>(null);
  const rail2Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rail1 = rail1Ref.current;
    const rail2 = rail2Ref.current;
    const container = containerRef.current;
    if (!rail1 || !container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Calculate half widths for seamless looping
      const width1 = rail1.scrollWidth / 2;
      const width2 = rail2 ? rail2.scrollWidth / 2 : width1;

      // Rail 1 loops leftwards with a calm, readable pace
      gsap.to(rail1, {
        x: -width1,
        duration: 90,
        ease: 'none',
        repeat: -1,
      });

      // Rail 2 loops in opposite direction with a calm, readable pace
      if (rail2) {
        gsap.set(rail2, { x: -width2 });
        gsap.to(rail2, {
          x: 0,
          duration: 90,
          ease: 'none',
          repeat: -1,
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  const renderPills = (items: SpecializationItem[], repeatCount = 4) => {
    const fullList = Array(repeatCount).fill(items).flat();
    return fullList.map((item, idx) => (
      <h4
        key={`${item.id}-${idx}`}
        className="whitespace-nowrap px-6 py-3 rounded-2xl text-sm sm:text-base font-display transition-all duration-300 select-none cursor-default inline-flex items-center gap-2 tracking-wide bg-[#141F32] hover:bg-[#1C2B44] text-[#CBD5E1] hover:text-white font-medium border border-white/10 hover:border-teal/40"
      >
        {item.name}
      </h4>
    ));
  };

  return (
    <section
      ref={containerRef}
      id="specialization-fields"
      className="w-full overflow-hidden bg-[#07101E] text-white py-14 border-y border-hairline/20 select-none relative"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-teal/5 blur-[120px] pointer-events-none rounded-full" />

      {/* Header Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
          OUR SPECIALIZATION FIELDS
        </div>
        <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tailored Growth Engines for High-Stakes Verticals
        </h3>
      </div>

      {/* Scrolling Text Rail Row 1 */}
      <div className="scrolling-text overflow-hidden w-full flex items-center mb-4 relative z-10">
        <div
          ref={rail1Ref}
          className="rail flex items-center gap-4 whitespace-nowrap will-change-transform py-1"
        >
          {renderPills(ROW_1_FIELDS, 5)}
        </div>
      </div>

      {/* Scrolling Text Rail Row 2 */}
      <div className="scrolling-text overflow-hidden w-full flex items-center relative z-10">
        <div
          ref={rail2Ref}
          className="rail flex items-center gap-4 whitespace-nowrap will-change-transform py-1"
        >
          {renderPills(ROW_2_FIELDS, 5)}
        </div>
      </div>
    </section>
  );
};
