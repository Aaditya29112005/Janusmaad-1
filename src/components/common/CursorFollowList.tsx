import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '../../gsap/register';
import { ALL_38_CLIENTS } from '../../content/clientDatabase';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

const WORK_IMAGES: Record<string, string> = {
  'the-credit-lane': '/work/thecreditlane.jpg',
  'rudrasetu': '/work/rudrasetu.jpg',
  'radboards': '/work/radboards.jpg',
  'espira-gems': '/work/espiragems.jpg',
  'kicky-and-perky': '/work/kickyperky.jpg',
  'paperbark-camp': '/work/paperbarkcamp.jpg',
  'nippon-naturals': '/work/nipponnaturals.jpg',
  'mothers-touch': '/work/motherstouch.jpg',
  'kidzfirstudio': '/work/kidzfirstudio.jpg',
  'yubi1': '/work/yubi1.jpg',
  'the-skin-beneath': '/work/theskinbeneath.jpg',
  'shagun-sweets': '/work/shagunsweets.jpg',
  'frasmetics': '/work/frasmetics.jpg',
  'vanika-jewels': '/work/vanikajewels.jpg',
  'wildmoss': '/work/wildmoss.jpg',
  'himalayan-panacea': '/work/himalayanpanacea.jpg',
  'gaadi-web': '/work/gaadiweb.jpg',
  'the-happy-home-broker': '/work/thehappyhomebroker.jpg',
  'hand-studio': '/work/handstudio.jpg',
  'bombay-bloomers': '/work/bombaybloomers.jpg',
  'isha-and-ishana': '/work/ishaandishana.jpg',
  'pro4security': '/work/pro4security.jpg',
  'soniva': '/work/soniva.jpg',
  'selective-guru': '/work/selectiveguru.jpg',
  'too-bold-to-confirm': '/work/toobold.jpg',
  'kasuti-kavana': '/work/kasutikavana.jpg',
  'shaffa': '/work/shaffa.jpg',
  'caness': '/work/caness.jpg',
  'azoneh-treasures': '/work/azonehtreasures.jpg',
  'mr-jewels': '/work/mrjewels.jpg',
  'ugrashoes': '/work/ugrashoes.jpg',
  'basil-pet-care': '/work/basilpetcare.jpg',
  'clay-and-glaze': '/work/clayandglaze.jpg',
  'rangoli': '/work/rangoli.jpg',
  'qibo': '/work/qibo.jpg',
  'soiree-club': '/work/soireeclub.jpg',
  'ecoo-global': '/work/ecooglobal.jpg',
  'cuddle-buds': '/work/cuddlebuds.jpg',
};

export const CursorFollowList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [activeImage, setActiveImage] = useState<string>('/work/thecreditlane.jpg');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const visibleClients = ALL_38_CLIENTS.slice(0, visibleCount);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper) return;

    // GSAP quickTo cursor tracking setup on wrapper div (opacity 0 initially)
    gsap.set(wrapper, { yPercent: -50, xPercent: -50, opacity: 0, scale: 0.8 });

    const setX = gsap.quickTo(wrapper, 'x', { duration: 0.4, ease: 'power3' });
    const setY = gsap.quickTo(wrapper, 'y', { duration: 0.4, ease: 'power3' });

    let firstEnter = true;

    const align = (e: MouseEvent) => {
      if (firstEnter) {
        setX(e.clientX, e.clientX);
        setY(e.clientY, e.clientY);
        firstEnter = false;
      } else {
        setX(e.clientX);
        setY(e.clientY);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      align(e);
    };

    const items = container.querySelectorAll<HTMLElement>('.cursor-item');
    const cleanupFns: Array<() => void> = [];

    items.forEach((item) => {
      const onMouseEnter = (e: MouseEvent) => {
        firstEnter = true;
        const imgPath = item.getAttribute('data-img');
        if (imgPath) setActiveImage(imgPath);

        gsap.to(wrapper, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
        window.addEventListener('mousemove', handleMouseMove);
        align(e);
      };

      const onMouseLeave = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        gsap.to(wrapper, { opacity: 0, scale: 0.8, duration: 0.3, ease: 'power2.in' });
      };

      item.addEventListener('mouseenter', onMouseEnter);
      item.addEventListener('mouseleave', onMouseLeave);

      cleanupFns.push(() => {
        item.removeEventListener('mouseenter', onMouseEnter);
        item.removeEventListener('mouseleave', onMouseLeave);
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cleanupFns.forEach((fn) => fn());
    };
  }, [visibleCount]);

  return (
    <section className="py-20 px-4 sm:px-8 bg-bone border-b border-hairline relative">
      {/* Floating Cursor Image Wrapper (GSAP quickTo target) */}
      <div
        ref={wrapperRef}
        className="fixed top-0 left-0 pointer-events-none z-50 overflow-hidden shadow-2xl rounded-2xl border-2 border-violet/40 bg-white"
        style={{ width: '320px', height: '200px' }}
      >
        <img
          src={activeImage}
          alt="Live Storefront Preview"
          className="w-full h-full object-cover object-top rounded-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-hairline pb-6">
          <div>
            <div className="text-violet text-xs font-mono font-bold uppercase tracking-widest">
              Interactive Vault
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink">
              Hover Storefront Showcase<span className="text-violet">.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-mute font-mono max-w-sm">
            Hover over any client record to reveal its verified desktop storefront preview in real-time.
          </p>
        </div>

        <div ref={containerRef} className="divide-y divide-hairline border-y border-hairline">
          {visibleClients.map((client, idx) => {
            const imgSrc = WORK_IMAGES[client.id] || '/work/thecreditlane.jpg';
            return (
              <div
                key={client.id}
                data-img={imgSrc}
                className="cursor-item py-5 px-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-violet/5 transition-colors cursor-pointer group rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-mute w-8">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-violet transition-colors">
                      {client.name}
                    </h3>
                    <div className="text-xs text-mute font-mono flex items-center gap-2">
                      <span>{client.category}</span>
                      <span>•</span>
                      <span className="text-violet font-semibold">{client.services.join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-xs font-mono text-mute uppercase">{client.primaryMetric.label}</div>
                    <div className="font-display font-bold text-teal text-base sm:text-lg">
                      {client.primaryMetric.value}
                    </div>
                  </div>

                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2.5 bg-white border border-hairline rounded-xl text-ink hover:text-violet hover:border-violet/40 transition-colors shadow-xs"
                    title={`Visit ${client.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Pagination Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <div className="text-xs font-mono text-mute">
            Showing {visibleClients.length} of {ALL_38_CLIENTS.length} verified live storefronts
          </div>

          {visibleCount < ALL_38_CLIENTS.length ? (
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 12, ALL_38_CLIENTS.length))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet text-white font-display font-bold text-xs rounded-xl shadow-md hover:bg-violet/90 transition-all cursor-pointer"
            >
              <span>Show More (+{Math.min(12, ALL_38_CLIENTS.length - visibleCount)} Clients)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(6)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-hairline text-ink font-display font-bold text-xs rounded-xl shadow-xs hover:border-violet transition-all cursor-pointer"
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
