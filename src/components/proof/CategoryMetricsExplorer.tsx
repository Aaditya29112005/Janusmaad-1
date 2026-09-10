import React, { useEffect, useRef } from 'react';
import { ALL_38_CLIENTS, CATEGORY_PITCHES } from '../../content/clientDatabase';
import { ArrowUpRight, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

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
  'vanika-jewels': '/work/vanikajewels.png',
  'wildmoss': '/work/wildmoss.jpg',
  'himalayan-panacea': '/work/himalayanpanacea.png',
  'gaadi-web': '/work/gaadiweb.jpg',
  'the-happy-home-broker': '/work/thehappyhomebroker.jpg',
  'hand-studio': '/work/handstudio.jpg',
  'bombay-bloomers': '/work/bombaybloomers.png',
  'isha-and-ishana': '/work/ishaandishana.png',
  'pro4security': '/work/pro4security.png',
  'soniva': '/work/soniva.jpg',
  'selective-guru': '/work/selectiveguru.jpg',
  'too-bold-to-confirm': '/work/toobold.png',
  'kasuti-kavana': '/work/kasutikavana.png',
  'shaffa': '/work/shaffa.jpg',
  'caness': '/work/caness.jpg',
  'azoneh-treasures': '/work/azonehtreasures.jpg',
  'mr-jewels': '/work/mrjewels.jpg',
  'ugrashoes': '/work/ugrashoes.jpg',
  'basil-pet-care': '/work/basilpetcare.jpg',
  'clay-and-glaze': '/work/clayandglaze.png',
  'rangoli': '/work/rangoli.png',
  'qibo': '/work/qibo.jpg',
  'soiree-club': '/work/soireeclub.jpg',
  'ecoo-global': '/work/ecooglobal.png',
  'cuddle-buds': '/work/cuddlebuds.jpg',
};





interface CategoryMetricsExplorerProps {
  onOpenAudit?: (type?: string) => void;
  initialService?: string;
  showOnlyClientRecords?: boolean;
}

export const CategoryMetricsExplorer: React.FC<CategoryMetricsExplorerProps> = ({
  showOnlyClientRecords = false,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('Jewelry (Ecomm + Retail)');

  const activePitch = React.useMemo(() => {
    return CATEGORY_PITCHES.find(p => p.category === selectedCategory) || CATEGORY_PITCHES[0];
  }, [selectedCategory]);

  useEffect(() => {
    const rail = railRef.current;
    const container = containerRef.current;
    if (!rail || !container || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Half width translation for 100% continuous infinite loop
      const totalWidth = rail.scrollWidth / 2;

      const loopTween = gsap.to(rail, {
        x: -totalWidth,
        duration: 60,
        ease: 'none',
        repeat: -1,
      });
      loopTween.timeScale(0.55);
    }, container);

    return () => ctx.revert();
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const rail = railRef.current;
    if (!rail) return;
    const shiftAmount = direction === 'left' ? 380 : -380;
    gsap.to(rail, {
      x: `+=${shiftAmount}`,
      duration: 0.55,
      ease: 'power2.out',
    });
  };

  // Double client records array to ensure 100% seamless infinite loop
  const displayClients = [...ALL_38_CLIENTS, ...ALL_38_CLIENTS];

  return (
    <section ref={containerRef} id="metrics-database" className="py-20 px-4 sm:px-8 bg-bone border-b border-hairline relative select-none overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {showOnlyClientRecords ? (
          /* Center-aligned "Our Work" Header */
          <div className="text-center max-w-2xl mx-auto space-y-3 border-b border-hairline pb-8">
            <h2 className="font-display text-4xl sm:text-6xl font-bold text-ink tracking-tight">
              Our Work
            </h2>
          </div>
        ) : (
          <>
            {/* Standard Full Section Title */}
            <div className="text-center max-w-3xl mx-auto space-y-3 border-b border-hairline pb-8">
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                Success Metrics by Category & Client Vault
              </h2>
              <p className="text-mute text-base sm:text-lg">
                Explore real client case studies across e-commerce, retail, hospitality, and services.
              </p>
            </div>

            {/* Category Pitch Generator Box */}
            <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-3xl space-y-3 relative z-10">
                <span className="text-xs font-mono text-teal uppercase font-bold tracking-widest">
                  CATEGORY BENCHMARK PITCH FINDER
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-bold text-white">
                  What Metric Should You Benchmark For Your Brand?
                </h3>
              </div>

              {/* Category Selector Pills */}
              <div className="flex flex-wrap items-center gap-2.5 relative z-10">
                {CATEGORY_PITCHES.map((item) => {
                  const isSelected = item.category === selectedCategory;
                  return (
                    <button
                      key={item.category}
                      onClick={() => setSelectedCategory(item.category)}
                      className={`px-4 py-2 rounded-xl text-xs font-display font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-teal text-ink shadow-lg shadow-teal/20 scale-105'
                          : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {item.category}
                    </button>
                  );
                })}
              </div>

              {/* Category Pitch Showcase Result Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 relative z-10">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-teal font-bold uppercase">
                    <Award className="w-4 h-4 text-teal" />
                    <span>PRIMARY PITCH METRIC FOR {activePitch.category.toUpperCase()}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="text-4xl sm:text-5xl font-display font-bold text-white">
                      {activePitch.topPitch.value}
                    </div>
                    <div className="text-lg font-display text-teal font-bold">
                      {activePitch.topPitch.metric} <span className="text-white/60">({activePitch.topPitch.brand})</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-3">
                  <div className="text-xs font-mono text-white/60 uppercase">Full Category Metrics Breakdown</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePitch.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-white/70">{m.metric}</span>
                          <span className="text-xs font-mono text-teal font-bold">{m.brand}</span>
                        </div>
                        <div className="text-xl font-display font-bold text-white">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* GSAP Infinite Marquee Cards Container */}
        <div className="relative w-full overflow-hidden">
          {/* Left Arrow Scroll Button */}
          <button
            onClick={() => handleScroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 border border-hairline shadow-lg text-ink hover:bg-violet hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center opacity-90 hover:opacity-100"
            aria-label="Scroll work left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Scroll Button */}
          <button
            onClick={() => handleScroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/95 border border-hairline shadow-lg text-ink hover:bg-violet hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center opacity-90 hover:opacity-100"
            aria-label="Scroll work right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Continuous Infinite Marquee Rail */}
          <div className="overflow-hidden w-full py-4">
            <div
              ref={railRef}
              className="rail flex items-stretch gap-6 whitespace-nowrap will-change-transform px-4"
            >
              {displayClients.map((client, idx) => {
                const bannerImg = WORK_IMAGES[client.id] || '/work/thecreditlane.jpg';
                const metricsToShow = client.allMetrics.slice(0, 4);

                return (
                  <div
                    key={`${client.id}-${idx}`}
                    className="w-[300px] sm:w-[360px] shrink-0 bg-white border border-hairline rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-2xl hover:border-violet/40 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1"
                  >
                    {/* Real Storefront Screenshot Banner */}
                    <div className="relative w-full h-52 sm:h-56 bg-bone rounded-xl overflow-hidden border border-hairline group-hover:scale-[1.01] transition-transform duration-300">
                      <img
                        src={bannerImg}
                        alt={`${client.name} Storefront Banner`}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.dataset.fallback) {
                            target.dataset.fallback = 'true';
                            target.src = '/work/thecreditlane.jpg';
                          }
                        }}
                      />
                    </div>

                    {/* Top: Brand Name, Website Domain Link, & Service/Category */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display font-bold text-xl text-ink group-hover:text-violet transition-colors truncate">
                          {client.name}
                        </h4>
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-bold text-violet hover:underline flex items-center gap-1 shrink-0"
                        >
                          {client.domain} <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <div className="text-xs font-mono font-medium text-mute">{client.category}</div>
                    </div>

                    {/* Center: Top 2 to 4 Success Metrics (Big Numbers & Clear Labels) */}
                    <div className="grid grid-cols-2 gap-2.5 pt-1 flex-1">
                      {metricsToShow.map((m, mIdx) => (
                        <div key={mIdx} className="p-3 bg-bone rounded-xl border border-hairline/60 space-y-1 flex flex-col justify-center">
                          <div className="text-[10px] font-mono font-bold text-ink uppercase tracking-wider truncate">
                            {m.label}
                          </div>
                          <div className="text-xl sm:text-2xl font-display font-extrabold text-violet tabular-nums">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
