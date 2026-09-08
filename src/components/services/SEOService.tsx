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

      {/* 1. HERO SECTION: variant="editorial" (No hero image. Single column header with purple accent) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-white via-violet/5 to-white border border-violet/20 rounded-3xl p-8 sm:p-14 space-y-8 shadow-xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 bg-violet/15 text-violet text-xs font-mono font-bold rounded-full border border-violet/30 uppercase">
              ACQUIRE PILLAR • FLAGSHIP DEEP-DIVE SERVICE
            </span>
            <span className="px-3 py-1 bg-ink/5 text-ink/70 text-xs font-mono rounded-full">
              SLUG: services/seo
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-ink leading-tight">
            Get Found on Google, YouTube and Inside AI Answers<span className="text-violet">.</span>
          </h1>

          <p className="text-lg sm:text-xl text-mute max-w-4xl leading-relaxed font-body">
            Search has expanded beyond traditional blue links. Brands are watching organic clicks fall while impressions hold — losing customer clicks to Google AI Overviews, Perplexity, and zero-click answer engines. Janusmaad builds full Search Everywhere Optimisation (SEO + AEO + GEO).
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" className="bg-violet hover:bg-violet-deep text-white border-none" onClick={() => onOpenAudit('acquire-seo')}>
              Free Search Visibility & AEO Audit →
            </Button>
          </div>

          {/* Primary & Supporting Keywords */}
          <div className="pt-6 border-t border-hairline flex flex-wrap gap-2 text-xs font-mono text-mute">
            <span className="text-violet font-bold">PRIMARY KEYWORD:</span> SEO agency India |
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

              {/* 01. Technical SEO */}
              <section id="technical-seo" className="bg-white rounded-3xl p-6 sm:p-8 border border-hairline space-y-3 shadow-sm">
                <div className="text-2xl font-mono font-bold text-violet">01.</div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-ink">
                  Technical SEO: Crawlability, Core Web Vitals & Schema
                </h3>
                <p className="text-mute leading-relaxed text-sm">
                  Fix indexation bottlenecks, render-blocking scripts, and tune mobile Core Web Vitals to sub-second standards with rich JSON-LD Knowledge Graph schema.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-mono text-ink/80">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> Sub-1-second mobile load tuning</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> JSON-LD Knowledge Graph architecture</div>
                </div>
              </section>

              {/* 02. Content Clusters */}
              <section id="content-clusters" className="bg-white rounded-3xl p-6 sm:p-8 border border-hairline space-y-3 shadow-sm">
                <div className="text-2xl font-mono font-bold text-violet">02.</div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-ink">
                  Content Clusters Mapped to Commercial Intent
                </h3>
                <p className="text-mute leading-relaxed text-sm">
                  Build semantic pillar-and-cluster content to capture high-intent bottom-of-funnel searchers and dominate national search indexes.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-mono text-ink/80">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> High-converting commercial landing pages</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> Internal link architecture optimization</div>
                </div>
              </section>

              {/* 03. AEO and GEO */}
              <section id="ai-seo-aeo" className="bg-white rounded-3xl p-6 sm:p-8 border border-hairline space-y-3 shadow-sm">
                <div className="text-2xl font-mono font-bold text-violet">03.</div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-ink">
                  AEO & GEO: Getting Cited by ChatGPT, Perplexity & AI Overviews
                </h3>
                <p className="text-mute leading-relaxed text-sm">
                  Format brand data and specs into machine-readable structures so conversational AI models directly cite your brand as the answer.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-mono text-ink/80">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> LLM model citation optimization</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet shrink-0" /> Zero-click AI snippet capture</div>
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
