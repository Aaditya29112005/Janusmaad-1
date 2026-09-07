import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ALL_38_CLIENTS, CATEGORY_PITCHES } from '../../content/clientDatabase';
import { Search, Sparkles, CheckCircle2, Award, ArrowUpRight, ChevronDown } from 'lucide-react';
import { gsap, ScrollTrigger } from '../../gsap/register';
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

interface CategoryMetricsExplorerProps {
  onOpenAudit?: (type?: string) => void;
}

export const CategoryMetricsExplorer: React.FC<CategoryMetricsExplorerProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Jewelry (Ecomm + Retail)');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('ALL');
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const gridRef = useRef<HTMLDivElement | null>(null);

  // Find pitch for selected category
  const activePitch = useMemo(() => {
    return CATEGORY_PITCHES.find(p => p.category === selectedCategory) || CATEGORY_PITCHES[0];
  }, [selectedCategory]);

  // Filter clients by search query and service
  const filteredClients = useMemo(() => {
    return ALL_38_CLIENTS.filter(client => {
      const matchesSearch = 
        client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        client.domain.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesService = 
        selectedService === 'ALL' || 
        client.services.includes(selectedService as any);

      return matchesSearch && matchesService;
    });
  }, [searchQuery, selectedService]);

  const visibleClients = filteredClients.slice(0, visibleCount);
  const remainingClients = filteredClients.length - visibleClients.length;
  const nextChunkSize = Math.min(12, remainingClients);

  // GSAP ScrollTrigger.batch() stagger effect for client cards
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;

    const cards = grid.querySelectorAll('.batch-card');
    if (cards.length === 0) return;

    gsap.set(cards, { opacity: 0, y: 30, scale: 0.96 });

    const batchTriggers = ScrollTrigger.batch(cards, {
      interval: 0.1,
      batchMax: 3,
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'sine.out',
          overwrite: true,
        });
      },
    });

    return () => {
      batchTriggers.forEach((st) => st.kill());
    };
  }, [visibleClients]);

  const handleToggleVisible = () => {
    if (visibleCount < filteredClients.length) {
      setVisibleCount(prev => prev + 12);
    } else {
      setVisibleCount(6);
    }
  };

  return (
    <section id="metrics-database" className="py-20 px-4 sm:px-8 bg-bone border-b border-hairline relative">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-hairline pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet/10 border border-violet/20 rounded-full text-violet text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VERIFIED PERFORMANCE DATABASE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-ink tracking-tight">
              Success Metrics by Category & Client Vault<span className="text-violet">.</span>
            </h2>
            <p className="text-mute text-base sm:text-lg">
              Explore 38+ real client case studies across e-commerce, retail, hospitality, and services. Select your category to see exact benchmark lift metrics.
            </p>
          </div>
          <div className="text-xs font-mono text-violet font-bold bg-white px-4 py-2.5 rounded-xl border border-hairline shrink-0 shadow-xs">
            38 Verified Client Records Live
          </div>
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
            <p className="text-white/70 text-sm sm:text-base">
              Select your category below. If your category is not an exact match, our engine automatically maps to the nearest proven industry benchmark.
            </p>
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
              {activePitch.borrowedFromNote && (
                <div className="p-3 bg-amber-400/10 border border-amber-400/30 rounded-xl text-xs text-amber-300 font-mono">
                  💡 <strong>Nearest Match Rule:</strong> {activePitch.borrowedFromNote}
                </div>
              )}
            </div>

            {/* Metrics Breakdown Grid */}
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

        {/* All 38 Clients Live Database Table */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-2xl text-ink">
                All Client Records ({filteredClients.length})
              </h3>
              <p className="text-xs text-mute font-mono">
                Showing {visibleClients.length} of {filteredClients.length} verified live storefronts
              </p>
            </div>

            {/* Controls: Search & Service Filters */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-mute absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search brand, category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-hairline rounded-xl text-xs text-ink placeholder:text-mute focus:outline-none focus:border-violet"
                />
              </div>

              <div className="flex items-center gap-1 bg-white p-1 border border-hairline rounded-xl text-xs font-mono">
                {['ALL', 'PM', 'SEO', 'CRO', 'Build', 'RM', 'SMM'].map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                      selectedService === service
                        ? 'bg-violet text-white'
                        : 'text-mute hover:text-ink'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Client Table Grid (Showing visibleClients: 6 by default) */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleClients.map((client) => {
              const bannerImg = WORK_IMAGES[client.id] || '/work/thecreditlane.jpg';
              return (
                <div
                  key={client.id}
                  className="batch-card bg-white border border-hairline rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-lg hover:border-violet/40 transition-all duration-300 group overflow-hidden"
                >
                  <div className="space-y-3">
                    {/* Real Desktop Website Screenshot Banner */}
                    <div className="relative w-full h-44 bg-bone rounded-xl overflow-hidden border border-hairline shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
                      <img
                        src={bannerImg}
                        alt={`${client.name} Storefront Banner`}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-ink/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono text-white flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="truncate max-w-[180px]">{client.domain}</span>
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-3 pt-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-bone border border-hairline flex items-center justify-center overflow-hidden shrink-0 shadow-xs">
                          <img
                            src={`https://www.google.com/s2/favicons?domain=${client.domain}&sz=128`}
                            alt={client.name}
                            className="w-6 h-6 object-contain"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-lg text-ink group-hover:text-violet transition-colors">
                            {client.name}
                          </h4>
                          <div className="text-xs font-mono text-mute">{client.category}</div>
                        </div>
                      </div>

                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-bone rounded-lg text-mute hover:text-violet hover:bg-violet/10 transition-colors shrink-0"
                        title={`Visit ${client.name}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                  {/* Primary Metric Highlight */}
                  <div className="p-3 bg-violet/5 border border-violet/15 rounded-xl space-y-0.5">
                    <div className="text-[10px] font-mono text-violet font-bold uppercase">{client.primaryMetric.label}</div>
                    <div className="text-2xl font-display font-bold text-ink">{client.primaryMetric.value}</div>
                  </div>

                  {/* All Metrics Pill List */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {client.allMetrics.map((m, idx) => (
                      <div key={idx} className="p-2 bg-bone rounded-lg text-xs space-y-0.5">
                        <div className="text-[9px] font-mono text-mute uppercase truncate">{m.label}</div>
                        <div className="font-display font-bold text-ink">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivered Service Badges */}
                <div className="pt-3 border-t border-hairline flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {client.services.map((svc) => (
                      <span
                        key={svc}
                        className="px-2 py-0.5 bg-bone border border-hairline rounded-md text-[10px] font-mono font-bold text-ink"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
          </div>

          {/* Show More (+12) / Show Less Toggle Button */}
          {filteredClients.length > 6 && (
            <div className="flex justify-center pt-8">
              <button
                onClick={handleToggleVisible}
                className="px-8 py-3.5 bg-white border border-hairline hover:border-violet text-ink font-display font-bold text-sm rounded-xl shadow-sm hover:shadow-md hover:text-violet transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {visibleCount >= filteredClients.length
                    ? 'Show Less'
                    : `Show More (+${nextChunkSize} Clients)`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    visibleCount >= filteredClients.length ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
