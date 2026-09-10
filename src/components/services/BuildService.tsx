import React from 'react';
import { Gauge } from 'lucide-react';
import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TestimonialsMarquee } from '../testimonials/TestimonialsMarquee';
import { HowWeWork } from '../process/HowWeWork';
import { ThreeWaysIn } from '../pricing/ThreeWaysIn';
import { Calculator } from '../calculator/Calculator';

interface BuildServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const BuildService: React.FC<BuildServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopify & Landing Page Development Agency India & Delhi NCR",
    "provider": {
      "@type": "Organization",
      "name": "Janusmaad Digital",
      "url": "https://janusmaad.com"
    },
    "serviceType": "Shopify Development Agency",
    "areaServed": ["India", "Global"],
    "description": "Fast bespoke landing pages and custom Shopify storefronts, built mobile-first and speed-tuned."
  };

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <button
          onClick={() => onNavigateCapability('receipts')}
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-teal transition-colors"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. HERO SECTION: Litmus Medium Blue Gradient (#5DAFFF -> #1D5B9A) */}
      <div
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 px-4 sm:px-12 rounded-[24px] text-white overflow-hidden shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
          boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Glass Glare */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-white/20 text-white text-xs font-mono font-bold rounded-full border border-white/40 uppercase backdrop-blur-md">
                CONVERT PILLAR • DESIGN & DEVELOPMENT
              </span>
              <span className="px-3 py-1 bg-black/20 text-white/90 text-xs font-mono rounded-full">
                SLUG: services/web-design-development
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight drop-shadow-xs">
              Pages & Storefronts Built to Load Fast & Convert<span className="text-sky-200">.</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100 font-medium leading-relaxed font-body">
              Fast bespoke landing pages and custom Shopify storefronts, built mobile-first and speed-tuned to sub-1-second standards. Engineered for brands whose site is slow, off-brand, or actively throttling paid media return.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAudit('convert-build')}
                className="py-3.5 px-7 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-sm hover:bg-white/95 transition-all shadow-lg cursor-pointer"
              >
                Get Free Speed & Conversion Teardown →
              </button>
            </div>

            {/* Supporting Keywords */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap gap-2 text-xs font-mono text-sky-100">
              <span className="text-white font-bold">PRIMARY:</span> Shopify development agency |
              <span>landing page design</span> |
              <span>custom Shopify theme</span> |
              <span>headless Shopify</span> |
              <span>WordPress development</span> |
              <span>Core Web Vitals</span>
            </div>
          </div>

          {/* Right Bleeding Device Mockup Card (Dark Blue Litmus #3B7FC3 -> #0D2D5C) */}
          <div className="lg:col-span-5 relative">
            <div
              className="lg:translate-x-12 translate-y-4 rounded-[24px] p-6 space-y-4 shadow-2xl backdrop-blur-xl text-white overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
                boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/20 pb-3 font-mono text-xs">
                  <span className="text-blue-100 font-bold">DEVICE MOCKUP PROOF</span>
                  <span className="text-white bg-white/20 px-2.5 py-0.5 rounded-full font-bold border border-white/30">SUB-0.65s MOBILE</span>
                </div>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-black/20 rounded-xl border border-white/20 flex items-center justify-between">
                    <span className="text-white/90">Lighthouse Score</span>
                    <span className="text-emerald-300 font-bold">98 / 100</span>
                  </div>
                  <div className="p-3 bg-black/20 rounded-xl border border-white/20 flex items-center justify-between">
                    <span className="text-white/90">Largest Contentful Paint</span>
                    <span className="text-sky-200 font-bold">0.62s</span>
                  </div>
                  <div className="p-3 bg-black/20 rounded-xl border border-white/20 flex items-center justify-between">
                    <span className="text-white/90">Cumulative Layout Shift</span>
                    <span className="text-sky-200 font-bold">0.000</span>
                  </div>
                </div>

                <div className="text-[10px] text-sky-100/80 text-center italic font-mono">
                  * Real build snapshot from D2C Skincare & SaaS mobile deployments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 2. SPEED SCOREBOARD INSET PANEL (Dark inset panel with monospace numerals) */}
      <div id="speed-core-web-vitals" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 border-2 border-teal/40 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <div className="text-xs font-mono font-bold text-teal uppercase">REAL BUILD SPEED SCOREBOARD</div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
                Before & After Core Web Vitals Benchmarks
              </h2>
            </div>
            <Gauge className="w-8 h-8 text-teal hidden sm:block" />
          </div>

          {/* Speed Benchmark Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-mono text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/15 text-teal bg-white/5">
                  <th className="p-3">METRIC</th>
                  <th className="p-3">BEFORE JANUSMAAD BUILD</th>
                  <th className="p-3">AFTER SPEED TUNING</th>
                  <th className="p-3">REVENUE LIFT DEMONSTRATED</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white font-mono">
                <tr>
                  <td className="p-3 font-bold">Largest Contentful Paint (LCP)</td>
                  <td className="p-3 text-red-400 font-bold">[PLACEHOLDER: 4.2s]</td>
                  <td className="p-3 text-emerald-400 font-bold">[PLACEHOLDER: 0.65s]</td>
                  <td className="p-3 text-teal font-bold">+38.4% Add-to-Cart Rate</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Cumulative Layout Shift (CLS)</td>
                  <td className="p-3 text-red-400 font-bold">[PLACEHOLDER: 0.28]</td>
                  <td className="p-3 text-emerald-400 font-bold">[PLACEHOLDER: 0.00]</td>
                  <td className="p-3 text-teal font-bold">Zero misclicks at checkout</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold">Mobile Google Lighthouse Score</td>
                  <td className="p-3 text-red-400 font-bold">[PLACEHOLDER: 38 / 100]</td>
                  <td className="p-3 text-emerald-400 font-bold">[PLACEHOLDER: 98 / 100]</td>
                  <td className="p-3 text-teal font-bold">+48.2% Mobile Conversion Rate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH CASE IMAGERY BANNER BETWEEN SECTIONS */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-bone border-y border-hairline py-12 px-4 sm:px-12">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="text-xs font-mono font-bold text-teal uppercase">FULL-WIDTH STOREFRONT CASE SHOWCASE</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Light Blue */}
            <div
              className="litmus-card-1 relative rounded-[24px] p-6 space-y-2 text-[#07101E] overflow-hidden group transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
                boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
              <div className="relative z-10 space-y-2">
                <div className="text-xs font-mono font-bold text-[#07101E]/80 bg-white/50 px-2.5 py-0.5 rounded-full w-fit">
                  DTC Beauty & Skincare
                </div>
                <div className="font-display font-extrabold text-[#07101E] text-lg">Custom Shopify Liquid PDP</div>
                <div className="text-xs text-[#0A2540] font-medium leading-relaxed">Sub-0.65s PDP load adding ₹1.2Cr monthly revenue.</div>
              </div>
            </div>

            {/* Card 2: Medium Blue */}
            <div
              className="litmus-card-2 relative rounded-[24px] p-6 space-y-2 text-white overflow-hidden group transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
              <div className="relative z-10 space-y-2">
                <div className="text-xs font-mono font-bold text-white/90 bg-white/20 px-2.5 py-0.5 rounded-full w-fit">
                  B2B Enterprise SaaS
                </div>
                <div className="font-display font-extrabold text-white text-lg drop-shadow-xs">Next.js 15 Demo Engine</div>
                <div className="text-xs text-sky-100 font-medium leading-relaxed">Interactive pricing teardown and sub-second demo booking.</div>
              </div>
            </div>

            {/* Card 3: Dark Blue */}
            <div
              className="litmus-card-3 relative rounded-[24px] p-6 space-y-2 text-white overflow-hidden group transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
                boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
              <div className="relative z-10 space-y-2">
                <div className="text-xs font-mono font-bold text-blue-100 bg-black/20 px-2.5 py-0.5 rounded-full w-fit">
                  Luxury Apparel E-Com
                </div>
                <div className="font-display font-extrabold text-white text-lg drop-shadow-sm">Headless Recharge Funnel</div>
                <div className="text-xs text-blue-100 font-medium leading-relaxed">Bespoke 1-click cart upsell lifting AOV by ₹1,450.</div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* 2. DELIVERABLE GROUPS (01 - 05) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            THE 5 DELIVERABLE GROUPS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Engineering Deliverables
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div id="landing-pages" className="bg-white rounded-3xl p-6 border border-hairline space-y-3 shadow-sm">
            <span className="text-xs font-mono font-bold text-teal">DELIVERABLE 01</span>
            <h3 className="text-lg font-bold text-ink">Research & Session Wireframes</h3>
            <p className="text-xs text-mute leading-relaxed">
              Informed by real session recordings and heatmap data to remove friction points before design.
            </p>
          </div>

          <div id="design-system" className="bg-white rounded-3xl p-6 border border-hairline space-y-3 shadow-sm">
            <span className="text-xs font-mono font-bold text-teal">DELIVERABLE 02</span>
            <h3 className="text-lg font-bold text-ink">Design System & Component Library</h3>
            <p className="text-xs text-mute leading-relaxed">
              Figma design tokens, typography scale, buttons, and mobile UI components for brand consistency.
            </p>
          </div>

          <div id="shopify-storefronts" className="bg-white rounded-3xl p-6 border border-hairline space-y-3 shadow-sm">
            <span className="text-xs font-mono font-bold text-teal">DELIVERABLE 03</span>
            <h3 id="headless" className="text-lg font-bold text-ink">Build: Shopify, Headless or Bespoke Landing Pages</h3>
            <p className="text-xs text-mute leading-relaxed">
              Clean hand-coded Liquid or React 19 storefronts with zero redundant apps slowing down render times.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-3 shadow-sm">
            <span className="text-xs font-mono font-bold text-teal">DELIVERABLE 04</span>
            <h3 className="text-lg font-bold text-ink">Speed & Core Web Vitals Tuning</h3>
            <p className="text-xs text-mute leading-relaxed">
              Image WebP optimization, lazy loading, edge CDN caching, and JavaScript bundle pruning.
            </p>
          </div>

          <div id="post-launch" className="bg-white rounded-3xl p-6 border border-hairline space-y-3 shadow-sm md:col-span-2">
            <span className="text-xs font-mono font-bold text-teal">DELIVERABLE 05</span>
            <h3 className="text-lg font-bold text-ink">QA on Real Devices, Launch & 30 Days Care</h3>
            <p className="text-xs text-mute leading-relaxed">
              Cross-browser and real mobile device QA testing across iOS and Android, followed by 30 days post-launch support guarantee.
            </p>
          </div>
        </div>
      </div>

      {/* CALCULATOR: DO THE MATH */}
      <Calculator onOpenAudit={onOpenAudit} />

      {/* HOW WE WORK MANIFESTO */}
      <HowWeWork />

      {/* WE BUILD FOR CONVERSIONS */}
      <ThreeWaysIn onOpenAudit={onOpenAudit} />

      {/* SUCCESS METRICS BY CATEGORY & CLIENT VAULT FOR BUILD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 border-t border-hairline pt-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            VERIFIED BUILD PROOF & STOREFRONT CLIENT VAULT
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Top Storefront & Landing Page Builds & Client Work
          </h2>
          <p className="text-mute text-sm">
            Filtered by Build & Design case studies, with full access to all 38 client vault records.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="Build" hideHeader={true} />
      </div>

      {/* VERIFIED TESTIMONIALS CAROUSEL */}
      <div className="border-t border-hairline pt-12">
        <TestimonialsMarquee />
      </div>

      {/* CROSS-LINKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-hairline pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-bone rounded-3xl p-8 border border-hairline">
          <div>
            <div className="text-xs font-mono font-bold text-teal uppercase">EXPLORE ADJACENT CAPABILITIES</div>
            <div className="text-lg font-display font-bold text-ink mt-1">Turn Speed into High Conversion</div>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <button 
              onClick={() => onNavigateCapability('convert-cro')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              CRO Agency →
            </button>
            <button 
              onClick={() => onNavigateCapability('acquire-performance')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              Performance Marketing →
            </button>
            <button 
              onClick={() => onNavigateCapability('acquire-seo')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              SEO & Speed Tuning →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

