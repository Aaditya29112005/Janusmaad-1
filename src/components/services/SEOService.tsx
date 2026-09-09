import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Search, 
  Bot, 
  Globe2, 
  ArrowRight,
  Zap
} from 'lucide-react';
import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TestimonialsMarquee } from '../testimonials/TestimonialsMarquee';

interface SEOServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const SEOService: React.FC<SEOServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  const [domainInput, setDomainInput] = useState('');
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!domainInput) return;
    setAuditSubmitted(true);
    setTimeout(() => {
      onOpenAudit('acquire-seo');
      setAuditSubmitted(false);
    }, 800);
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Agency India & Delhi NCR | Search Everywhere Optimisation",
    "provider": {
      "@type": "Organization",
      "name": "Janusmaad Digital",
      "url": "https://janusmaad.com"
    },
    "serviceType": "SEO Agency",
    "areaServed": ["Delhi NCR", "India"],
    "description": "Rank on Google, YouTube and AI answers. Technical SEO, content clusters and AEO."
  };

  const SEO_PILLARS = [
    {
      icon: Zap,
      badge: 'SPEED & ARCHITECTURE',
      title: 'Technical SEO & Core Web Vitals',
      desc: 'Sub-second mobile speed, indexation tuning, and rich JSON-LD Knowledge Graph architecture to eliminate crawl waste.',
      bullets: [
        'Sub-1.0s mobile LCP performance',
        'Schema.org entity graph markup',
        'Zero crawl-budget friction'
      ]
    },
    {
      icon: Search,
      badge: 'COMMERCIAL INTENT',
      title: 'Commercial Content Clusters',
      desc: 'Pillar-and-cluster content mapping to capture high-intent bottom-of-funnel searchers and dominate competitive commercial terms.',
      bullets: [
        'High-converting commercial landing pages',
        'Shopify collection tree optimization',
        'Strategic internal linking hierarchy'
      ]
    },
    {
      icon: Bot,
      badge: 'LLM VISIBILITY',
      title: 'AEO & Generative Engine Optimisation',
      desc: 'Format brand data and authority signals so ChatGPT, Perplexity, Gemini and Google AI Overviews cite you as the #1 answer.',
      bullets: [
        'LLM model citation optimization',
        'Zero-click AI summary capture',
        'Brand entity authority verification'
      ]
    },
    {
      icon: Globe2,
      badge: 'DOMAIN POWER',
      title: 'Digital PR & Authority Links',
      desc: 'Earn high-DR contextual editorial links from authoritative Indian and global publications through data-driven PR campaigns.',
      bullets: [
        'Tier-1 editorial media placements',
        'Contextual white-hat backlink velocity',
        'Google Map pack & local NCR dominance'
      ]
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <button
          onClick={() => onNavigateCapability('receipts')}
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-violet transition-colors cursor-pointer"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. HERO SECTION: Litmus Medium Blue Gradient (#5DAFFF -> #1D5B9A) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className="rounded-3xl p-6 sm:p-12 space-y-8 relative overflow-hidden shadow-2xl text-white"
          style={{
            background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
            boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Glass Glare Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-3xl" />
          
          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-white/20 text-white text-xs font-mono font-bold rounded-full border border-white/40 uppercase backdrop-blur-md">
                ACQUIRE PILLAR • SEARCH EVERYWHERE (SEO + AEO + GEO)
              </span>
              <span className="px-3 py-1 bg-black/20 text-white/90 text-xs font-mono rounded-full">
                SLUG: services/seo
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight drop-shadow-xs">
              Get Found on Google, YouTube & Inside AI Answers<span className="text-sky-200">.</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100 font-medium leading-relaxed max-w-3xl">
              Traditional SEO gets your site indexed. JanusMAAD builds full <strong>Search Everywhere Optimisation</strong>: ranking your business at the top of Google search results while ensuring ChatGPT, Perplexity, and Google AI Overviews cite you as the #1 authority.
            </p>

            {/* Embedded Live Audit Check Bar */}
            <form onSubmit={handleAuditSubmit} className="pt-2 max-w-2xl">
              <div className="flex flex-col sm:flex-row gap-2.5 p-2 bg-white/10 backdrop-blur-md rounded-2xl border border-white/25">
                <input
                  type="url"
                  required
                  placeholder="https://yourbrand.com"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white text-ink placeholder:text-mute rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
                <button
                  type="submit"
                  className="py-3 px-6 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-xs hover:bg-white/90 transition-all shadow-md cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 group"
                >
                  <span>{auditSubmitted ? 'Analyzing Footprint...' : 'Run Free Search Audit'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>

            {/* 4 Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/20">
              <div className="bg-white/10 rounded-xl p-3 border border-white/15 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-white">+84%</div>
                <div className="text-[11px] text-sky-100 font-mono">Organic Revenue Lift</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/15 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-white">14+</div>
                <div className="text-[11px] text-sky-100 font-mono">Google Position #1s</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/15 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-white">Sub-1.0s</div>
                <div className="text-[11px] text-sky-100 font-mono">Core Web Vitals LCP</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/15 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-emerald-300">92/100</div>
                <div className="text-[11px] text-sky-100 font-mono">AI Citation Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE DELIVERABLES: Compact, High-Impact 4-Pillar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-violet text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE SEARCH EVERYWHERE BLUEPRINT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-ink tracking-tight">
            How We Capture Search Clicks & AI Citations
          </h2>
          <p className="text-mute text-xs sm:text-sm font-medium">
            Engineering every touchpoint from sub-second infrastructure to LLM knowledge graphs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SEO_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-hairline hover:border-violet/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-violet/10 text-violet flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-violet bg-violet/5 px-2.5 py-1 rounded-full border border-violet/15 uppercase">
                    {pillar.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-display font-bold text-ink group-hover:text-violet transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-mute text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-hairline/60 space-y-2">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs font-medium text-ink/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. VERIFIED SEO CLIENT RESULTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            VERIFIED SEARCH RESULTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink">
            Top SEO & Organic Growth Records
          </h2>
          <p className="text-mute text-xs sm:text-sm">
            Live client proof across D2C, financial services, healthcare & retail.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="SEO" />
      </div>

      {/* 4. TESTIMONIALS */}
      <div className="border-t border-hairline pt-12">
        <TestimonialsMarquee />
      </div>

      {/* 5. CROSS-LINKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-bone rounded-3xl p-6 sm:p-8 border border-hairline">
          <div>
            <div className="text-xs font-mono font-bold text-violet uppercase">EXPLORE ADJACENT CAPABILITIES</div>
            <div className="text-base sm:text-lg font-display font-bold text-ink mt-0.5">Cross-Channel Synergy</div>
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <button 
              onClick={() => onNavigateCapability('acquire-performance')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-violet transition-colors cursor-pointer"
            >
              Performance Marketing →
            </button>
            <button 
              onClick={() => onNavigateCapability('acquire-smm')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-violet transition-colors cursor-pointer"
            >
              SMM Content Engine →
            </button>
            <button 
              onClick={() => onNavigateCapability('convert-build')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-violet transition-colors cursor-pointer"
            >
              Build & Storefronts →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
