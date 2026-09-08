import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { Button } from '../ui/Button';
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
    }, 1500);
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
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-violet transition-colors"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. HERO SECTION: Litmus Medium Blue Gradient (#5DAFFF -> #1D5B9A) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className="rounded-[24px] p-8 sm:p-14 space-y-8 relative overflow-hidden shadow-2xl text-white"
          style={{
            background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
            boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Glass Glare Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
          
          <div className="relative z-10 space-y-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-white/20 text-white text-xs font-mono font-bold rounded-full border border-white/40 uppercase backdrop-blur-md">
                ACQUIRE PILLAR • FLAGSHIP DEEP-DIVE SERVICE
              </span>
              <span className="px-3 py-1 bg-black/20 text-white/90 text-xs font-mono rounded-full">
                SLUG: services/seo
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight drop-shadow-xs">
              Get Found on Google, YouTube and Inside AI Answers<span className="text-sky-200">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-sky-100 font-medium leading-relaxed font-body">
              Search has expanded beyond traditional blue links. Brands are watching organic clicks fall while impressions hold — losing customer clicks to Google AI Overviews, Perplexity, and zero-click answer engines. Janusmaad builds full Search Everywhere Optimisation (SEO + AEO + GEO).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAudit('acquire-seo')}
                className="py-3.5 px-7 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-sm hover:bg-white/95 transition-all shadow-lg cursor-pointer"
              >
                Free Search Visibility & AEO Audit →
              </button>
            </div>

            {/* Primary & Supporting Keywords */}
            <div className="pt-6 border-t border-white/20 flex flex-wrap gap-2 text-xs font-mono text-sky-100">
              <span className="text-white font-bold font-mono uppercase">PRIMARY KEYWORD:</span>
              <span>SEO agency India</span> |
              <span>search everywhere optimisation</span> |
              <span>AEO (Answer Engine Optimisation)</span> |
              <span>generative engine optimisation</span> |
              <span>AI SEO</span> |
              <span>technical SEO</span> |
              <span>Shopify SEO</span> |
              <span>local SEO Delhi NCR</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EDITORIAL LAYOUT WITH STICKY LEFT SIDEBAR (visible from 1024px up) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* STICKY LEFT SIDEBAR (lg:col-span-3) */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 bg-white rounded-2xl p-6 border border-hairline space-y-6 shadow-sm">
            <div className="text-xs font-mono font-bold text-violet uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-violet" />
              TABLE OF CONTENTS
            </div>

            <nav className="space-y-3 font-mono text-xs text-mute">
              <a href="#technical-seo" className="block p-2 rounded-lg hover:bg-violet/10 hover:text-violet transition-colors font-bold text-ink">
                01. #technical-seo
              </a>
              <a href="#ai-seo-aeo" className="block p-2 rounded-lg hover:bg-violet/10 hover:text-violet transition-colors font-bold text-ink">
                02. #ai-seo-aeo
              </a>
              <a href="#content-clusters" className="block p-2 rounded-lg hover:bg-violet/10 hover:text-violet transition-colors font-bold text-ink">
                03. #content-clusters
              </a>
              <a href="#local-seo" className="block p-2 rounded-lg hover:bg-violet/10 hover:text-violet transition-colors font-bold text-ink">
                04. #local-seo
              </a>
              <a href="#shopify-seo" className="block p-2 rounded-lg hover:bg-violet/10 hover:text-violet transition-colors font-bold text-ink">
                05. #shopify-seo
              </a>
              <a href="#link-building" className="block p-2 rounded-lg hover:bg-violet/10 hover:text-violet transition-colors font-bold text-ink">
                06. #link-building
              </a>
            </nav>

            <div className="pt-4 border-t border-hairline space-y-3">
              <div className="text-[10px] font-mono text-mute uppercase">NEED A SEARCH DIAGNOSTIC?</div>
              <Button variant="outline" size="sm" className="w-full text-xs" onClick={() => onOpenAudit('acquire-seo')}>
                Request Visibility Audit
              </Button>
            </div>
          </aside>

          {/* MAIN SINGLE WIDE READING COLUMN (lg:col-span-9) - HIGHEST WORD COUNT */}
          <main className="lg:col-span-9 space-y-16">

            {/* PLAIN-LANGUAGE BOARD EXPLANATION OF AEO */}
            <div className="bg-ink text-white rounded-3xl p-8 sm:p-10 border border-violet/30 space-y-6 shadow-2xl">
              <div className="flex items-center gap-2 text-violet text-xs font-mono font-bold uppercase">
                <Sparkles className="w-4 h-4 text-violet" />
                EXECUTIVE BOARD DEFINITION: WHAT IS AEO?
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                How to Explain AEO to Your Board in Plain Language
              </h2>

              <div className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed font-body">
                <p>
                  <strong className="text-violet">Answer Engine Optimisation (AEO)</strong> is the evolution of traditional search engine optimization. For 25 years, search engines like Google functioned as indexing directories: a user typed a query, and Google returned ten blue links to external websites.
                </p>
                <p>
                  Today, conversational AI systems — including <strong className="text-white">ChatGPT, Perplexity, Gemini, and Google AI Overviews</strong> — do not simply display blue links. They read millions of web pages in real-time, synthesize the information, and deliver a single, direct, definitive conversational answer to the buyer.
                </p>
                <p className="p-4 bg-white/5 border-l-4 border-violet rounded-r-xl text-white italic">
                  "Traditional SEO gets your website listed in search results. AEO ensures your brand is the factual answer LLMs cite when a customer asks AI which product or agency to hire."
                </p>
              </div>
            </div>

            {/* AI CITATION CHECK BLOCK TABLE */}
            <div className="bg-white rounded-3xl p-8 border border-violet/20 space-y-8 shadow-md">
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-violet uppercase">INTERACTIVE AI AUDIT BLOCK</div>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink">
                  AI Citation Check: Are LLMs Recommending Your Brand?
                </h2>
                <p className="text-mute text-sm">
                  Below is a real-time sample verification table comparing brand citations across major answer engines.
                </p>
              </div>

              {/* Engine Citation Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-mono text-xs">
                  <thead>
                    <tr className="border-b border-hairline text-mute bg-bone">
                      <th className="p-3">AI ANSWER ENGINE</th>
                      <th className="p-3">CURRENT BRAND CITATION STATUS</th>
                      <th className="p-3">BENCHMARK SCORE</th>
                      <th className="p-3">REASON FOR CITATION GAP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-hairline text-ink">
                    <tr>
                      <td className="p-3 font-bold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> ChatGPT (OpenAI GPT-4o)
                      </td>
                      <td className="p-3 text-emerald-600 font-bold">Cited in Top 3 Answers</td>
                      <td className="p-3 font-bold">[PLACEHOLDER: 88/100]</td>
                      <td className="p-3 text-mute">Rich JSON-LD Schema + Verified Entity Graph</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Perplexity AI
                      </td>
                      <td className="p-3 text-amber-600 font-bold">Partially Cited (Secondary)</td>
                      <td className="p-3 font-bold">[PLACEHOLDER: 54/100]</td>
                      <td className="p-3 text-mute">Missing Reddit & Digital PR citation signals</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Google AI Overviews
                      </td>
                      <td className="p-3 text-emerald-600 font-bold">Featured Answer Snippet</td>
                      <td className="p-3 font-bold">[PLACEHOLDER: 92/100]</td>
                      <td className="p-3 text-mute">High Core Web Vitals + Commercial Intent Hub</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Google Gemini
                      </td>
                      <td className="p-3 text-red-500 font-bold">Uncited / Missing</td>
                      <td className="p-3 font-bold">[PLACEHOLDER: 18/100]</td>
                      <td className="p-3 text-mute">Unindexed Knowledge Graph Organization entity</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Form CTA for Visitor to Run Check */}
              <form onSubmit={handleAuditSubmit} className="p-6 bg-violet/5 border border-violet/20 rounded-2xl space-y-4">
                <div className="text-sm font-display font-bold text-ink">
                  Run a Free AI Citation & Search Visibility Check for Your Website:
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="url"
                    required
                    placeholder="https://yourbrand.com"
                    value={domainInput}
                    onChange={(e) => setDomainInput(e.target.value)}
                    className="flex-1 px-4 py-3 bg-white border border-hairline rounded-xl text-sm focus:outline-none focus:border-violet"
                  />
                  <Button type="submit" variant="primary" size="md" className="bg-violet hover:bg-violet-deep text-white border-none shrink-0">
                    {auditSubmitted ? 'Analyzing AI Citations...' : 'Run Free Citation Check →'}
                  </Button>
                </div>
              </form>
            </div>

            {/* NUMBERED SECTIONS (01 - 05 DELIVERABLE GROUPS) */}
            <div className="space-y-8">
              <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
                THE 5 DELIVERABLE GROUPS
              </div>

              {/* 01. Technical SEO (Light Blue) */}
              <section
                id="technical-seo"
                className="litmus-card-1 relative rounded-[24px] p-6 sm:p-8 space-y-3 overflow-hidden text-[#07101E]"
                style={{
                  background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
                  boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
                <div className="relative z-10 space-y-3">
                  <div className="text-xs font-mono font-bold text-[#07101E]/80 bg-white/50 px-2.5 py-0.5 rounded-full w-fit">
                    DELIVERABLE 01 • LIGHT BLUE
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#07101E]">
                    Technical SEO: Crawlability, Core Web Vitals & Schema
                  </h3>
                  <p className="text-[#0A2540] font-medium leading-relaxed text-sm">
                    Fix indexation bottlenecks, render-blocking scripts, and tune mobile Core Web Vitals to sub-second standards with rich JSON-LD Knowledge Graph schema.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-[#07101E] border-t border-[#07101E]/15">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#07101E] shrink-0" /> Sub-1-second mobile load tuning</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#07101E] shrink-0" /> JSON-LD Knowledge Graph architecture</div>
                  </div>
                </div>
              </section>

              {/* 02. Content Clusters (Medium Blue) */}
              <section
                id="content-clusters"
                className="litmus-card-2 relative rounded-[24px] p-6 sm:p-8 space-y-3 overflow-hidden text-white"
                style={{
                  background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                  boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
                <div className="relative z-10 space-y-3">
                  <div className="text-xs font-mono font-bold text-white/90 bg-white/20 px-2.5 py-0.5 rounded-full w-fit">
                    DELIVERABLE 02 • MEDIUM BLUE
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white drop-shadow-xs">
                    Content Clusters Mapped to Commercial Intent
                  </h3>
                  <p className="text-sky-100 font-medium leading-relaxed text-sm">
                    Build semantic pillar-and-cluster content to capture high-intent bottom-of-funnel searchers and dominate national search indexes.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-white border-t border-white/20">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white shrink-0" /> High-converting commercial landing pages</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-white shrink-0" /> Internal link architecture optimization</div>
                  </div>
                </div>
              </section>

              {/* 03. AEO and GEO (Dark Blue) */}
              <section
                id="ai-seo-aeo"
                className="litmus-card-3 relative rounded-[24px] p-6 sm:p-8 space-y-3 overflow-hidden text-white"
                style={{
                  background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
                  boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
                <div className="relative z-10 space-y-3">
                  <div className="text-xs font-mono font-bold text-blue-100 bg-black/20 px-2.5 py-0.5 rounded-full w-fit">
                    DELIVERABLE 03 • DARK BLUE
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white drop-shadow-sm">
                    AEO & GEO: Getting Cited by ChatGPT, Perplexity & AI Overviews
                  </h3>
                  <p className="text-blue-100 font-medium leading-relaxed text-sm">
                    Format brand data and specs into machine-readable structures so conversational AI models directly cite your brand as the answer.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-white border-t border-white/20">
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#5DAFFF] shrink-0" /> LLM model citation optimization</div>
                    <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#5DAFFF] shrink-0" /> Zero-click AI snippet capture</div>
                  </div>
                </div>
              </section>

              {/* 04. Digital PR & Links */}
              <section id="link-building" className="bg-white rounded-3xl p-6 sm:p-8 border border-hairline space-y-3 shadow-sm">
                <div className="text-2xl font-mono font-bold text-violet">04.</div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-ink">
                  Digital PR & Earned Authority Links
                </h3>
                <p className="text-mute leading-relaxed text-sm">
                  Earn high-DR contextual backlinks from authoritative Indian and global publications via clean, white-hat data PR campaigns.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-mono text-ink/80">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> Tier-1 editorial media placements</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> Clean white-hat link acquisition</div>
                </div>
              </section>

              {/* 05. Local SEO & Shopify SEO */}
              <section id="local-seo" className="bg-white rounded-3xl p-6 sm:p-8 border border-hairline space-y-3 shadow-sm">
                <div className="text-2xl font-mono font-bold text-violet">05.</div>
                <h3 id="shopify-seo" className="text-xl sm:text-2xl font-display font-bold text-ink">
                  Local & National SEO (India & Delhi NCR) + Shopify SEO
                </h3>
                <p className="text-mute leading-relaxed text-sm">
                  Dominate Google Map Packs in Delhi NCR and national search queries while optimizing Shopify collection trees and mega-menus.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-mono text-ink/80">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> Google Business Profile optimization</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> Shopify URL & collection indexing</div>
                </div>
              </section>
            </div>

            {/* SUCCESS METRICS BY CATEGORY & CLIENT VAULT FOR SEO */}
            <div className="space-y-8 border-t border-hairline pt-12">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
                  VERIFIED SEO PROOF & CLIENT WORK
                </div>
                <h2 className="text-3xl font-display font-extrabold text-ink">
                  Top SEO & AEO Clients & Organic Results
                </h2>
                <p className="text-mute text-sm">
                  Filtered by SEO case studies, with full access to all client vault records.
                </p>
              </div>

              <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="SEO" />
            </div>

            {/* VERIFIED TESTIMONIALS CAROUSEL */}
            <div className="border-t border-hairline pt-12">
              <TestimonialsMarquee />
            </div>

            {/* CROSS-LINKS SECTION */}
            <div className="border-t border-hairline pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-bone rounded-3xl p-8 border border-hairline">
                <div>
                  <div className="text-xs font-mono font-bold text-violet uppercase">EXPLORE ADJACENT CAPABILITIES</div>
                  <div className="text-lg font-display font-bold text-ink mt-1">Cross-Channel Synergy</div>
                </div>
                <div className="flex flex-wrap gap-4 font-mono text-xs">
                  <button 
                    onClick={() => onNavigateCapability('acquire-performance')}
                    className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-violet transition-colors"
                  >
                    Performance Marketing →
                  </button>
                  <button 
                    onClick={() => onNavigateCapability('acquire-smm')}
                    className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-violet transition-colors"
                  >
                    SMM Content Engine →
                  </button>
                  <button 
                    onClick={() => onNavigateCapability('convert-build')}
                    className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-violet transition-colors"
                  >
                    Build & Storefronts →
                  </button>
                </div>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};
