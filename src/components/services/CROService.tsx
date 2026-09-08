import React, { useState } from 'react';
import { 
  HelpCircle, 
  Sliders, 
  AlertTriangle 
} from 'lucide-react';
import { Button } from '../ui/Button';
import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TestimonialsMarquee } from '../testimonials/TestimonialsMarquee';

interface CROServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const CROService: React.FC<CROServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  // Calculator State
  const [sessions, setSessions] = useState(100000); // 100k visitors/mo
  const [currentCVR, setCurrentCVR] = useState(1.8); // 1.8%
  const [aov] = useState(2500); // ₹2,500
  const [targetLift, setTargetLift] = useState(25); // 25% lift

  // Calculations
  const currentOrders = Math.round(sessions * (currentCVR / 100));
  const newCVR = Number((currentCVR * (1 + targetLift / 100)).toFixed(2));
  const newOrders = Math.round(sessions * (newCVR / 100));
  const extraMonthlyOrders = newOrders - currentOrders;
  const extraMonthlyRevenue = extraMonthlyOrders * aov;
  const annualGain = extraMonthlyRevenue * 12;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr ($${(val / 60000).toFixed(1)}k AUD)`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L ($${(val / 60000).toFixed(1)}k AUD)`;
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CRO Agency | Conversion Rate Optimisation for D2C",
    "provider": {
      "@type": "Organization",
      "name": "Janusmaad Digital",
      "url": "https://janusmaad.com"
    },
    "serviceType": "CRO Agency",
    "areaServed": ["Australia", "India"],
    "description": "Make the traffic you already pay for worth more. Research-led A/B testing from $2,200 AUD / ₹1,40,000 INR monthly.",
    "offers": {
      "@type": "Offer",
      "price": "2200",
      "priceCurrency": "AUD"
    }
  };

  const faqJsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the monthly cost for CRO management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CRO retainers start from $2,200 AUD / ₹1,40,000 INR per month for sprint-based A/B testing up to enterprise multi-funnel testing retainers."
        }
      },
      {
        "@type": "Question",
        "name": "What minimum traffic volume is needed for a statistically valid test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend a minimum of 30,000 monthly unique sessions or 500 monthly conversions to reach 95%+ statistical significance within a 14 to 30 day window."
        }
      },
      {
        "@type": "Question",
        "name": "How long does an A/B test run?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tests typically run for 14 to 28 days to capture full weekly purchasing cycles and ensure sample size validity before declaring a winner."
        }
      },
      {
        "@type": "Question",
        "name": "What counts as a winning conversion test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A winning variant must demonstrate a statistically significant lift (minimum 95% confidence) in Net Revenue Per Visitor (RPV), maintaining or increasing average order value and repeat retention."
        }
      },
      {
        "@type": "Question",
        "name": "Are losing tests billed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our monthly sprint retainer covers hypothesis research, design, coding, and analytics execution. In science, a failed hypothesis is valuable data that stops you from making costly permanent mistakes."
        }
      },
      {
        "@type": "Question",
        "name": "Who implements the winning variant into the live theme?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our engineering team deploys every winning variation directly into your live Shopify or custom storefront Liquid/React theme codebase."
        }
      }
    ]
  };

  return (
    <div className="space-y-20 pb-16">
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

      {/* 1. HERO SECTION: variant="lab" (Persistent two-column A vs B structure, purple left, teal right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-14 border border-hairline space-y-8 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 bg-violet/30 text-violet-300 text-xs font-mono font-bold rounded-full border border-violet/40 uppercase">
              CONVERT PILLAR • CRO EXPERIMENTATION LAB
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-mono rounded-full">
              SLUG: services/conversion-rate-optimisation
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight">
            Make the Traffic You Already Pay For Worth More<span className="text-teal">.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed font-body">
            Research-led A/B testing, session recording analysis, and revenue-per-visitor science. Engineered for D2C & lead-gen brands where traffic is healthy but add-to-cart, checkout, or form completion rates are throttling profit.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" className="bg-teal text-ink font-bold hover:bg-emerald-400 border-none" onClick={() => onOpenAudit('convert-cro')}>
              Get Free Conversion Teardown (60 Min) →
            </Button>
            <div className="text-xs text-white/70 font-mono">
              Research & A/B testing baseline from <strong className="text-teal">[PRICE: $2,200 AUD / ₹1.4L / mo]</strong>
            </div>
          </div>

          {/* Primary & Supporting Keywords */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-white/60">
            <span className="text-teal font-bold">PRIMARY:</span> conversion rate optimisation agency |
            <span>CRO agency</span> |
            <span>A/B testing</span> |
            <span>Shopify CRO</span> |
            <span>funnel analysis</span> |
            <span>heatmaps</span> |
            <span>PDP optimisation</span>
          </div>
        </div>
      </div>

      {/* Sub-Topics Sticky Anchors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-2xl p-4 border border-hairline flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-teal font-bold uppercase">SUB-TOPICS:</span>
          <div className="flex flex-wrap gap-4 text-white/80">
            <a href="#research" className="hover:text-teal transition-colors">#research</a>
            <a href="#hypothesis-backlog" className="hover:text-teal transition-colors">#hypothesis-backlog</a>
            <a href="#ab-testing" className="hover:text-teal transition-colors">#ab-testing</a>
            <a href="#pdp-optimisation" className="hover:text-teal transition-colors">#pdp-optimisation</a>
            <a href="#checkout" className="hover:text-teal transition-colors">#checkout</a>
            <a href="#reporting" className="hover:text-teal transition-colors">#reporting</a>
          </div>
        </div>
      </div>

      {/* 2. PERSISTENT TWO-COLUMN A VS B COMPARISON MATRIX (variant="lab", Purple left vs Teal right, Monospace figures) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            PERSISTENT LAB COMPARISON
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Control (A) vs Janusmaad CRO Variant (B)
          </h2>
          <p className="text-mute text-sm font-mono">
            Every figure measured down to monospace statistical precision.
          </p>
        </div>

        {/* Paired Comparisons Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* COLUMN A: LEGACY CONTROL (Purple Accent Border) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-violet/40 space-y-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <span className="text-xs font-mono font-bold text-violet uppercase">COLUMN A • LEGACY CONTROL</span>
              <span className="px-2.5 py-1 bg-violet/10 text-violet text-xs font-mono rounded-full font-bold">UNOPTIMIZED</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-bone rounded-xl space-y-1">
                <div className="text-mute font-bold uppercase">SYMPTOM 01: ADD-TO-CART DROP</div>
                <div className="text-lg font-bold text-ink">1.80% CVR</div>
                <p className="text-mute">Generic buy button, buried review badges, zero urgency triggers.</p>
              </div>

              <div className="p-4 bg-bone rounded-xl space-y-1">
                <div className="text-mute font-bold uppercase">SYMPTOM 02: MOBILE CHECKOUT FRICTION</div>
                <div className="text-lg font-bold text-red-500">62.4% Abandonment</div>
                <p className="text-mute">Mandatory login step, hidden shipping fees at final page.</p>
              </div>

              <div className="p-4 bg-bone rounded-xl space-y-1">
                <div className="text-mute font-bold uppercase">NET REVENUE PER VISITOR (RPV)</div>
                <div className="text-xl font-bold text-ink">₹45.00 RPV</div>
                <p className="text-mute">High ad spend CAC eating away margin per click.</p>
              </div>
            </div>
          </div>

          {/* COLUMN B: JANUSMAAD CRO VARIANT (Teal Accent Border) */}
          <div className="bg-ink text-white rounded-3xl p-8 border-2 border-teal space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <span className="text-xs font-mono font-bold text-teal uppercase">COLUMN B • JANUSMAAD VARIANT</span>
              <span className="px-2.5 py-1 bg-teal/20 text-teal text-xs font-mono rounded-full font-bold">95%+ CONFIDENCE WINNER</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1">
                <div className="text-teal font-bold uppercase">SOLUTION 01: STICKY MOBILE CART SLIDE</div>
                <div className="text-lg font-bold text-emerald-400">2.45% CVR (+36.1% Lift)</div>
                <p className="text-white/70">Sticky CTA bar, verified review snippet, 1-click upsell bundles.</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1">
                <div className="text-teal font-bold uppercase">SOLUTION 02: 1-PAGE EXPRESS CHECKOUT</div>
                <div className="text-lg font-bold text-emerald-400">41.2% Abandonment (-21.2% Reduction)</div>
                <p className="text-white/70">Apple Pay / GPay express checkout buttons + upfront shipping calculator.</p>
              </div>

              <div className="p-4 bg-teal/20 rounded-xl border border-teal/40 space-y-1">
                <div className="text-teal font-bold uppercase">NET REVENUE PER VISITOR (RPV)</div>
                <div className="text-xl font-bold text-white">₹68.75 RPV (+$23.75 Lift)</div>
                <p className="text-white/80">35%+ profit margin expansion on existing paid ad traffic.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. HONEST JANUSMAAD-VOICE TRUTH SECTION: DISCOUNT LIFT CAN BE THE WRONG WIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-amber-950/10 border-2 border-amber-500/40 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="flex items-center gap-2 text-amber-600 font-mono font-bold text-xs uppercase">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            JANUSMAAD REASONING: WHEN A CONVERSION LIFT IS THE WRONG WIN
          </div>

          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-ink">
            Why Discount-Led Conversion Lift Destroys Long-Term Brand Value
          </h2>

          <div className="space-y-4 text-mute text-sm sm:text-base leading-relaxed font-body">
            <p>
              Many CRO agencies slap a aggressive 20% pop-up discount on your homepage, claim a +30% conversion rate lift, and invoice you for a winning test. <strong className="text-ink font-bold">This is a false win.</strong>
            </p>
            <p>
              Discount-led variants artificially boost Day-1 conversion while severely eroding contribution margin, attracting low-intent bargain hunters, lowering 90-day Customer Lifetime Value (LTV), and spiking product return rates.
            </p>
            <p className="p-4 bg-white rounded-xl border border-amber-500/30 text-ink font-mono text-xs sm:text-sm font-bold">
              How Janusmaad Guards Against False Wins: We strictly measure Net Revenue Per Visitor (RPV) and track cohort 90-day LTV repeat retention before declaring any A/B test variant a permanent winner.
            </p>
          </div>
        </div>
      </div>

      {/* 4. CALCULATOR: Sliders for monthly sessions, CVR, AOV, target lift */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 border border-teal/40 space-y-8 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/20 text-teal text-xs font-mono font-bold rounded-full">
              <Sliders className="w-3.5 h-3.5" />
              CRO REVENUE CALCULATOR
            </div>
            <h2 className="text-3xl font-display font-extrabold text-white">
              Calculate Extra Monthly Orders & Revenue Lift
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">Monthly Unique Sessions</span>
                  <span className="text-teal font-bold">{sessions.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min={10000} 
                  max={500000} 
                  step={10000}
                  value={sessions}
                  onChange={(e) => setSessions(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">Current Conversion Rate</span>
                  <span className="text-teal font-bold">{currentCVR}%</span>
                </div>
                <input 
                  type="range" 
                  min={0.5} 
                  max={5.0} 
                  step={0.1}
                  value={currentCVR}
                  onChange={(e) => setCurrentCVR(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">Target CVR Lift</span>
                  <span className="text-teal font-bold">+{targetLift}%</span>
                </div>
                <input 
                  type="range" 
                  min={10} 
                  max={80} 
                  step={5}
                  value={targetLift}
                  onChange={(e) => setTargetLift(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-teal/30 rounded-2xl p-6 space-y-4 font-mono flex flex-col justify-between">
              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-white/60">New Target CVR</div>
                  <div className="text-3xl font-bold text-teal">{newCVR}%</div>
                </div>

                <div>
                  <div className="text-white/60">Extra Monthly Orders</div>
                  <div className="text-2xl font-bold text-white">+{extraMonthlyOrders.toLocaleString()} Orders</div>
                </div>

                <div>
                  <div className="text-white/60">Extra Monthly Revenue</div>
                  <div className="text-2xl font-bold text-emerald-400">{formatCurrency(extraMonthlyRevenue)}</div>
                </div>

                <div>
                  <div className="text-white/60">12-Month Cumulative Gain</div>
                  <div className="text-xl font-bold text-white">{formatCurrency(annualGain)}</div>
                </div>
              </div>

              <Button variant="primary" size="md" className="bg-teal text-ink font-bold border-none" onClick={() => onOpenAudit('convert-cro')}>
                Capture This CVR Lift →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 5. PRICING TIERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            ENGAGEMENT TIERS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            CRO Testing Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-violet">TIER 01 • DIAGNOSTIC</div>
            <h3 className="text-xl font-bold text-ink">Free Live Teardown</h3>
            <div className="text-2xl font-bold text-ink">$0 <span className="text-xs font-mono text-mute">/ 60 Min</span></div>
            <p className="text-xs text-mute leading-relaxed">
              60-minute live UX teardown reviewing session recordings & drop-off friction points.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('convert-cro')}>
              Request 60-Min Audit
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-violet">TIER 02 • SPRINT</div>
            <h3 className="text-xl font-bold text-ink">CRO Sprint</h3>
            <div className="text-2xl font-bold text-ink">[PRICE] <span className="text-xs font-mono text-mute">/ mo</span></div>
            <p className="text-xs text-mute leading-relaxed">
              2 high-impact A/B tests per month + heatmap analytics + live theme rollout.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('convert-cro')}>
              Select Sprint
            </Button>
          </div>

          <div className="bg-ink text-white rounded-3xl p-6 border-2 border-teal space-y-4 shadow-xl">
            <div className="text-xs font-mono font-bold text-teal">TIER 03 • RETAINER</div>
            <h3 className="text-xl font-bold text-white">Full Testing Retainer</h3>
            <div className="text-2xl font-bold text-white">[PRICE] <span className="text-xs font-mono text-white/60">/ mo</span></div>
            <p className="text-xs text-white/80 leading-relaxed">
              4 multivariate A/B tests per month + checkout teardown + full backlog management.
            </p>
            <Button variant="primary" size="sm" className="bg-teal text-ink font-bold border-none" onClick={() => onOpenAudit('convert-cro')}>
              Start Retainer
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-violet">TIER 04 • FULL FUNNEL</div>
            <h3 className="text-xl font-bold text-ink">Enterprise Full Funnel</h3>
            <div className="text-2xl font-bold text-ink">Custom</div>
            <p className="text-xs text-mute leading-relaxed">
              For high-volume multi-storefront platforms requiring continuous data science A/B testing.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('convert-cro')}>
              Contact Enterprise
            </Button>
          </div>
        </div>
      </div>

      {/* SUCCESS METRICS BY CATEGORY & CLIENT VAULT FOR CRO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 border-t border-hairline pt-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            VERIFIED CRO PROOF & EXPERIMENTATION CLIENT VAULT
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Top CRO & A/B Testing Clients & Conversion Results
          </h2>
          <p className="text-mute text-sm">
            Filtered by CRO & conversion optimization case studies, with full access to all client vault records.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="CRO" />
      </div>

      {/* VERIFIED TESTIMONIALS CAROUSEL */}
      <div className="border-t border-hairline pt-12">
        <TestimonialsMarquee />
      </div>

      {/* 6. FAQ MUST ANSWER SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            CRO Testing Principles
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is the monthly cost for CRO management?",
              a: "CRO retainers start from [PRICE]/month ($2,200 AUD / ₹1,40,000 INR) for sprint-based A/B testing up to enterprise multi-funnel testing retainers."
            },
            {
              q: "What minimum traffic volume is needed for a statistically valid test?",
              a: "We recommend a minimum of 30,000 monthly unique sessions or 500 monthly conversions to reach 95%+ statistical significance within a 14 to 30 day window."
            },
            {
              q: "How long does an A/B test run?",
              a: "Tests typically run for 14 to 28 days to capture full weekly purchasing cycles and ensure sample size validity before declaring a winner."
            },
            {
              q: "What counts as a winning conversion test?",
              a: "A winning variant must demonstrate a statistically significant lift (minimum 95% confidence) in Net Revenue Per Visitor (RPV), maintaining or increasing average order value and repeat retention."
            },
            {
              q: "Are losing tests billed?",
              a: "Yes, our monthly sprint retainer covers hypothesis research, design, coding, and analytics execution. In science, a failed hypothesis is valuable data that stops you from making costly permanent mistakes."
            },
            {
              q: "Who implements the winning variant into the live theme?",
              a: "Our engineering team deploys every winning variation directly into your live Shopify or custom storefront Liquid/React theme codebase."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-hairline space-y-2">
              <h3 className="font-display font-bold text-ink text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-violet shrink-0" />
                {faq.q}
              </h3>
              <p className="text-mute text-sm leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. CROSS-LINKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-hairline pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-bone rounded-3xl p-8 border border-hairline">
          <div>
            <div className="text-xs font-mono font-bold text-violet uppercase">EXPLORE ADJACENT CAPABILITIES</div>
            <div className="text-lg font-display font-bold text-ink mt-1">Full-Funnel Optimization</div>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <button 
              onClick={() => onNavigateCapability('convert-build')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              Build & Landing Pages →
            </button>
            <button 
              onClick={() => onNavigateCapability('acquire-performance')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              Performance Marketing →
            </button>
            <button 
              onClick={() => onNavigateCapability('retain-marketing')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              Retention Marketing →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
