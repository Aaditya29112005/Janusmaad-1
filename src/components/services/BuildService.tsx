import React from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Gauge, 
  XCircle 
} from 'lucide-react';
import { Button } from '../ui/Button';

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
    "name": "Shopify & Landing Page Development Agency Sydney & Delhi NCR",
    "provider": {
      "@type": "Organization",
      "name": "Janusmaad Digital",
      "url": "https://janusmaad.com"
    },
    "serviceType": "Shopify Development Agency",
    "areaServed": ["Australia", "India"],
    "description": "Fast bespoke landing pages and custom Shopify storefronts, built mobile-first and speed-tuned. From $3,500 AUD / ₹2,000,000 INR.",
    "offers": {
      "@type": "Offer",
      "price": "3500",
      "priceCurrency": "AUD"
    }
  };

  const faqJsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost for a custom Shopify storefront or landing page build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Single high-converting campaign landing pages start from $3,500 AUD / ₹2,00,000 INR. Full bespoke Shopify storefront revamps range from $8,000 to $25,000+ AUD."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical build timeline from kickoff to launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Single landing pages launch within 10 to 14 days. Full Shopify storefront revamps take 4 to 6 weeks including device QA and speed tuning."
        }
      },
      {
        "@type": "Question",
        "name": "What assets does the client need to supply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You supply product imagery, brand guideline logos, and raw copy direction. We handle wireframing, UI/UX design, custom code development, and speed optimization."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the code and Figma design files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You own 100% of all Figma design tokens, Liquid/React source code, and custom component libraries upon final project handover."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if our brand guidelines are not ready?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build a streamlined digital design system & component token library as part of Phase 1 wireframing before writing production code."
        }
      },
      {
        "@type": "Question",
        "name": "Is the site handed over or hosted by Janusmaad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shopify storefronts are transferred directly into your Shopify account. Headless/Next.js builds are deployed to your Vercel or AWS instance with 30 days post-launch care included."
        }
      }
    ]
  };

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdData) }}
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

      {/* 1. HERO SECTION: variant="showcase" (Full-bleed hero, device mockup bleeding past right edge) */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#070b12] text-white py-16 px-4 sm:px-12 border-y border-teal/20 shadow-2xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-teal/15 text-teal text-xs font-mono font-bold rounded-full border border-teal/30 uppercase">
                CONVERT PILLAR • DESIGN & DEVELOPMENT
              </span>
              <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-mono rounded-full">
                SLUG: services/web-design-development
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight">
              Pages & Storefronts Built to Load Fast & Convert<span className="text-teal">.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body">
              Fast bespoke landing pages and custom Shopify storefronts, built mobile-first and speed-tuned to sub-1-second standards. Engineered for brands whose site is slow, off-brand, or actively throttling paid media return.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" className="bg-teal text-ink font-bold hover:bg-emerald-400 border-none" onClick={() => onOpenAudit('convert-build')}>
                Get Free Speed & Conversion Teardown →
              </Button>
              <div className="text-xs text-white/70 font-mono">
                Build packages from <strong className="text-teal">[PRICE: $3,500 AUD / ₹2.0L]</strong>
              </div>
            </div>

            {/* Supporting Keywords */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-white/60">
              <span className="text-teal font-bold">PRIMARY:</span> Shopify development agency |
              <span>landing page design</span> |
              <span>custom Shopify theme</span> |
              <span>headless Shopify</span> |
              <span>WordPress development</span> |
              <span>Core Web Vitals</span>
            </div>
          </div>

          {/* Right Bleeding Device Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="lg:translate-x-12 translate-y-4 bg-ink/90 border-2 border-teal/40 rounded-3xl p-6 shadow-2xl space-y-4 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                <span className="text-teal font-bold">DEVICE MOCKUP PROOF</span>
                <span className="text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">SUB-0.65s MOBILE</span>
              </div>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-white/80">Lighthouse Score</span>
                  <span className="text-emerald-400 font-bold">98 / 100</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-white/80">Largest Contentful Paint</span>
                  <span className="text-teal font-bold">0.62s</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                  <span className="text-white/80">Cumulative Layout Shift</span>
                  <span className="text-teal font-bold">0.000</span>
                </div>
              </div>

              <div className="text-[10px] text-white/60 text-center italic font-mono">
                * Real build snapshot from D2C Skincare & SaaS mobile deployments.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Topics Sticky Anchors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-2xl p-4 border border-hairline flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-teal font-bold uppercase">SUB-TOPICS:</span>
          <div className="flex flex-wrap gap-4 text-white/80">
            <a href="#landing-pages" className="hover:text-teal transition-colors">#landing-pages</a>
            <a href="#shopify-storefronts" className="hover:text-teal transition-colors">#shopify-storefronts</a>
            <a href="#headless" className="hover:text-teal transition-colors">#headless</a>
            <a href="#speed-core-web-vitals" className="hover:text-teal transition-colors">#speed-core-web-vitals</a>
            <a href="#design-system" className="hover:text-teal transition-colors">#design-system</a>
            <a href="#post-launch" className="hover:text-teal transition-colors">#post-launch</a>
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-hairline space-y-2 shadow-xs">
              <div className="text-xs font-mono font-bold text-violet">DTC Beauty & Skincare</div>
              <div className="font-display font-bold text-ink text-base">Custom Shopify Liquid PDP</div>
              <div className="text-xs text-mute">Sub-0.65s PDP load adding ₹1.2Cr monthly revenue.</div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-hairline space-y-2 shadow-xs">
              <div className="text-xs font-mono font-bold text-violet">B2B Enterprise SaaS</div>
              <div className="font-display font-bold text-ink text-base">Next.js 15 Demo Engine</div>
              <div className="text-xs text-mute">Interactive pricing teardown and sub-second demo booking.</div>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-hairline space-y-2 shadow-xs">
              <div className="text-xs font-mono font-bold text-violet">Luxury Apparel E-Com</div>
              <div className="font-display font-bold text-ink text-base">Headless Recharge Funnel</div>
              <div className="text-xs text-mute">Bespoke 1-click cart upsell lifting AOV by ₹1,450.</div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPLICIT PLATFORM MATRIX: WHAT WE BUILD ON VS WHAT WE DO NOT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            ENGINEERING STACK HONESTY
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Platforms We Build On & Platforms We Do Not
          </h2>
          <p className="text-mute text-sm">
            We do not compromise on code performance or speed. Here is our exact platform support matrix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Supported Platforms */}
          <div className="bg-emerald-950/10 border-2 border-emerald-500/40 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-2 text-emerald-600 font-mono font-bold text-sm uppercase">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              SUPPORTED STACK (WE BUILD & OPTIMIZE)
            </div>
            <ul className="space-y-3 font-mono text-xs text-ink">
              <li className="p-3 bg-white rounded-xl border border-emerald-500/30 flex items-center justify-between font-bold">
                <span>Shopify & Shopify Plus (Custom Liquid)</span>
                <span className="text-emerald-600">✓ Primary Flagship</span>
              </li>
              <li className="p-3 bg-white rounded-xl border border-emerald-500/30 flex items-center justify-between font-bold">
                <span>Next.js 15 & React 19 (Headless Storefronts)</span>
                <span className="text-emerald-600">✓ Sub-Second Speed</span>
              </li>
              <li className="p-3 bg-white rounded-xl border border-emerald-500/30 flex items-center justify-between font-bold">
                <span>Custom HTML5 / Tailwind / Vanilla JS Landing Pages</span>
                <span className="text-emerald-600">✓ High Converting</span>
              </li>
              <li className="p-3 bg-white rounded-xl border border-emerald-500/30 flex items-center justify-between font-bold">
                <span>Headless Shopify + Vercel CDNs</span>
                <span className="text-emerald-600">✓ Enterprise Scale</span>
              </li>
              <li className="p-3 bg-white rounded-xl border border-emerald-500/30 flex items-center justify-between font-bold">
                <span>Custom WordPress / WooCommerce (Bespoke Themes)</span>
                <span className="text-emerald-600">✓ Fully Supported</span>
              </li>
            </ul>
          </div>

          {/* Unsupported Platforms */}
          <div className="bg-red-950/10 border-2 border-red-500/40 rounded-3xl p-8 space-y-6">
            <div className="flex items-center gap-2 text-red-600 font-mono font-bold text-sm uppercase">
              <XCircle className="w-5 h-5 text-red-600" />
              UNSUPPORTED PLATFORMS (WE DO NOT BUILD ON)
            </div>
            <ul className="space-y-3 font-mono text-xs text-ink">
              <li className="p-3 bg-white rounded-xl border border-red-500/30 flex items-center justify-between font-bold opacity-80">
                <span>Wix & Wix Studio</span>
                <span className="text-red-500">✕ Bloated Code / Slow</span>
              </li>
              <li className="p-3 bg-white rounded-xl border border-red-500/30 flex items-center justify-between font-bold opacity-80">
                <span>Squarespace</span>
                <span className="text-red-500">✕ Rigid Template Limits</span>
              </li>
              <li className="p-3 bg-white rounded-xl border border-red-500/30 flex items-center justify-between font-bold opacity-80">
                <span>Webflow for E-Commerce</span>
                <span className="text-red-500">✕ Restricted Cart APIs</span>
              </li>
              <li className="p-3 bg-white rounded-xl border border-red-500/30 flex items-center justify-between font-bold opacity-80">
                <span>Generic Page Builders (PageFly / Shogun heavy drag-and-drop)</span>
                <span className="text-red-500">✕ Destroys Mobile Speed</span>
              </li>
            </ul>
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

      {/* 3. PRICING TIERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            ENGAGEMENT TIERS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Development Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-teal">TIER 01 • DIAGNOSTIC</div>
            <h3 className="text-xl font-bold text-ink">Free Speed Teardown</h3>
            <div className="text-2xl font-bold text-ink">$0</div>
            <p className="text-xs text-mute leading-relaxed">
              Lighthouse audit + Core Web Vitals code report exposing speed bottlenecks.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('convert-build')}>
              Request Teardown
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-teal">TIER 02 • SINGLE PAGE</div>
            <h3 className="text-xl font-bold text-ink">Campaign Landing Page</h3>
            <div className="text-2xl font-bold text-ink">[PRICE]</div>
            <p className="text-xs text-mute leading-relaxed">
              Single high-converting direct response campaign landing page built mobile-first.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('convert-build')}>
              Select Single Page
            </Button>
          </div>

          <div className="bg-ink text-white rounded-3xl p-6 border-2 border-teal space-y-4 shadow-xl">
            <div className="text-xs font-mono font-bold text-teal">TIER 03 • MULTI-PAGE</div>
            <h3 className="text-xl font-bold text-white">Multi-Page Funnel</h3>
            <div className="text-2xl font-bold text-white">[PRICE]</div>
            <p className="text-xs text-white/80 leading-relaxed">
              Multi-page lander suite + cart slide upsell + custom liquid theme components.
            </p>
            <Button variant="primary" size="sm" className="bg-teal text-ink font-bold border-none" onClick={() => onOpenAudit('convert-build')}>
              Start Multi-Page
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-teal">TIER 04 • FULL REVAMP</div>
            <h3 className="text-xl font-bold text-ink">Full Store Revamp</h3>
            <div className="text-2xl font-bold text-ink">Custom</div>
            <p className="text-xs text-mute leading-relaxed">
              Bespoke Shopify Plus or Headless Next.js storefront rebuild with speed guarantees.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('convert-build')}>
              Contact Enterprise
            </Button>
          </div>
        </div>
      </div>

      {/* 4. FAQ MUST ANSWER SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Build Specs & Handover Details
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is the cost for a custom Shopify storefront or landing page build?",
              a: "Single high-converting campaign landing pages start from [PRICE] ($3,500 AUD / ₹2,00,000 INR). Full bespoke Shopify storefront revamps range from $8,000 to $25,000+ AUD."
            },
            {
              q: "What is the typical build timeline from kickoff to launch?",
              a: "Single landing pages launch within 10 to 14 days. Full Shopify storefront revamps take 4 to 6 weeks including device QA and speed tuning."
            },
            {
              q: "What assets does the client need to supply?",
              a: "You supply product imagery, brand guideline logos, and raw copy direction. We handle wireframing, UI/UX design, custom code development, and speed optimization."
            },
            {
              q: "Who owns the code and Figma design files?",
              a: "You own 100% of all Figma design tokens, Liquid/React source code, and custom component libraries upon final project handover."
            },
            {
              q: "What happens if our brand guidelines are not ready?",
              a: "We build a streamlined digital design system & component token library as part of Phase 1 wireframing before writing production code."
            },
            {
              q: "Is the site handed over or hosted by Janusmaad?",
              a: "Shopify storefronts are transferred directly into your Shopify account. Headless/Next.js builds are deployed to your Vercel or AWS instance with 30 days post-launch care included."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-hairline space-y-2">
              <h3 className="font-display font-bold text-ink text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal shrink-0" />
                {faq.q}
              </h3>
              <p className="text-mute text-sm leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CROSS-LINKS SECTION */}
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
