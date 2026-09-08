import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sliders,
  Activity
} from 'lucide-react';

import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TestimonialsMarquee } from '../testimonials/TestimonialsMarquee';

interface PerformanceMarketingServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const PerformanceMarketingService: React.FC<PerformanceMarketingServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  // Calculator State
  const [monthlySpend, setMonthlySpend] = useState(150000); // ₹1.5L / $2.5k AUD default
  const [currentROAS, setCurrentROAS] = useState(2.2); // 2.2x
  const [targetLift, setTargetLift] = useState(35); // 35% lift

  // Calculation Logic
  const projectedROAS = Number((currentROAS * (1 + targetLift / 100)).toFixed(2));
  const currentRevenue = monthlySpend * currentROAS;
  const projectedRevenue = monthlySpend * projectedROAS;
  const extraMonthlyRevenue = projectedRevenue - currentRevenue;
  const annualGain = extraMonthlyRevenue * 12;
  const paybackDays = Math.max(7, Math.round(30 / (1 + targetLift / 100)));

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr ($${(val / 60000).toFixed(1)}k AUD)`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L ($${(val / 60000).toFixed(1)}k AUD)`;
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Performance Marketing Agency Sydney & Delhi NCR",
    "provider": {
      "@type": "Organization",
      "name": "Janusmaad Digital",
      "url": "https://janusmaad.com"
    },
    "serviceType": "Performance Marketing Agency",
    "areaServed": ["Australia", "India"],
    "description": "Meta, Google and TikTok campaigns managed to ROAS, not reach. Management baseline from $2,500 AUD / ₹1,50,000 INR per month.",
    "offers": {
      "@type": "Offer",
      "price": "2500",
      "priceCurrency": "AUD"
    }
  };

  const faqJsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you charge a flat fee or percentage of spend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We charge a transparent flat monthly retainer aligned to your spend band ($2,500 AUD / ₹1.5L baseline) or performance-share tiers. We do not punish scaling by taking arbitrary percentages of ad spend."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum monthly ad spend required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our performance media management is engineered for brands spending between $10,000 to $200,000+ AUD / ₹5L to ₹1Cr+ INR per month."
        }
      },
      {
        "@type": "Question",
        "name": "What is your contract notice period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate on flexible 30-day notice periods after an initial 90-day sprint foundation. No long-term handcuffs."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the ad account and pixel tracking data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You own 100% of your Meta Business Manager, Google Ads account, TikTok Ads account, GA4, and CAPI pixel data. You retain full ownership forever."
        }
      },
      {
        "@type": "Question",
        "name": "What is the realistic time to first performance signal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initial conversion tracking signals and creative test readouts stabilize within 7 to 14 days of launching structured campaigns."
        }
      },
      {
        "@type": "Question",
        "name": "What is your reporting cadence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Real-time client dashboard access + weekly video breakdown + bi-weekly strategic growth alignment calls."
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

      {/* Back button navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <button
          onClick={() => onNavigateCapability('receipts')}
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-teal transition-colors"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. HERO SECTION: Litmus Medium Blue Gradient (#5DAFFF -> #1D5B9A) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-[24px] p-8 sm:p-12 relative overflow-hidden shadow-2xl text-white"
          style={{
            background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
            boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Glass Glare */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-white/20 text-white text-xs font-mono font-bold rounded-full border border-white/40 uppercase backdrop-blur-md">
                ACQUIRE PILLAR • PERFORMANCE MARKETING
              </span>
              <span className="px-3 py-1 bg-black/20 text-white/90 text-xs font-mono rounded-full">
                SLUG: services/performance-marketing
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight drop-shadow-xs">
              Paid Media Judged on Return, Not Reach<span className="text-sky-200">.</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100 font-medium leading-relaxed font-body">
              Meta & Google campaigns managed strictly to blended ROAS and Contribution Margin. Built for D2C and lead-gen founders spending <strong className="text-white font-mono">[SPEND_BAND: $10k - $200k+ / mo]</strong> whose ROAS has flattened and who cannot tell which campaign is carrying it.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenAudit('acquire-performance')}
                className="py-3.5 px-7 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-sm hover:bg-white/95 transition-all shadow-lg cursor-pointer"
              >
                Get Free Live Account Audit (No Obligation) →
              </button>
            </div>

            {/* Supporting Keywords Pills */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap gap-2 text-xs font-mono text-sky-100">
              <span className="text-white font-bold">PRIMARY:</span> performance marketing agency |
              <span>meta ads agency</span> |
              <span>google ads management</span> |
              <span>tiktok ads agency</span> |
              <span>paid media agency Sydney & Delhi NCR</span>
            </div>
          </div>

          {/* Right Column: Spend-to-Return Simulator (Dark Blue Litmus #3B7FC3 -> #0D2D5C) */}
          <div className="lg:col-span-5 relative z-10">
            <div
              className="rounded-[24px] p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md text-white overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
                boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#5DAFFF] animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white uppercase">SPEND TO RETURN SIMULATOR</span>
                  </div>
                  <span className="text-xs font-mono text-white font-bold bg-white/20 px-2.5 py-1 rounded-full border border-white/30">
                    LIVE BENCHMARK
                  </span>
                </div>

                {/* Animated Spend Bar Chart */}
                <div className="space-y-4 font-mono">
                  <div>
                    <div className="flex justify-between text-xs text-blue-100 mb-1 font-semibold">
                      <span>Monthly Ad Spend</span>
                      <span className="text-white font-bold">₹30L / Mo</span>
                    </div>
                    <div className="h-3 bg-black/20 rounded-full overflow-hidden border border-white/10">
                      <div className="h-full bg-white/50 w-1/3 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-blue-100 mb-1 font-semibold">
                      <span>Legacy Agency Return (2.1x ROAS)</span>
                      <span className="text-red-300 font-bold">₹63L / Mo</span>
                    </div>
                    <div className="h-3 bg-black/20 rounded-full overflow-hidden border border-white/10">
                      <div className="h-full bg-red-400/80 w-1/2 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-blue-100 mb-1 font-semibold">
                      <span>Janusmaad Rebuild Return (4x ROAS)</span>
                      <span className="text-emerald-300 font-bold">₹1.2Cr / Mo</span>
                    </div>
                    <div className="h-3 bg-black/20 rounded-full overflow-hidden border border-white/10">
                      <div className="h-full bg-[#5DAFFF] w-[92%] rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-black/25 border border-white/20 rounded-xl space-y-1">
                  <div className="text-xs font-mono font-bold text-[#5DAFFF] uppercase">NET LIFT DEMONSTRATED</div>
                  <div className="text-2xl font-display font-extrabold text-white">+₹57L / Mo</div>
                  <div className="text-xs text-blue-100">Attributable via GA4 + CAPI Server-Side Tagging</div>
                </div>
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
            <a href="#meta-ads" className="hover:text-teal transition-colors">#meta-ads</a>
            <a href="#google-ads" className="hover:text-teal transition-colors">#google-ads</a>
            <a href="#tiktok-ads" className="hover:text-teal transition-colors">#tiktok-ads</a>
            <a href="#creative-testing" className="hover:text-teal transition-colors">#creative-testing</a>
            <a href="#tracking-attribution" className="hover:text-teal transition-colors">#tracking-attribution</a>
            <a href="#reporting" className="hover:text-teal transition-colors">#reporting</a>
          </div>
        </div>
      </div>

      {/* NO AUTOPILOT PHILOSOPHY SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-ink via-[#0d1424] to-ink text-white rounded-3xl p-8 sm:p-12 border border-teal/30 shadow-2xl relative overflow-hidden space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-teal/20 text-teal text-xs font-mono font-bold rounded-full border border-teal/40 uppercase">
              NO 'SET AND FORGET' MEDIA BUYING
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              Your campaigns should never run on autopilot<span className="text-teal">.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body">
              At JanusMAAD, we combine AI-powered optimisation with human expertise to continuously improve your campaigns across all platforms; from Google and Meta to LinkedIn, YouTube and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 items-stretch">
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
                <div className="text-xs font-mono font-bold text-[#07101E]/90 bg-white/60 px-2.5 py-0.5 rounded-full w-fit">
                  AI-POWERED OPTIMISATION
                </div>
                <h3 className="text-lg font-extrabold text-[#07101E]">Pattern & Opportunity Discovery</h3>
                <p className="text-xs text-[#0A2540] font-medium leading-relaxed">
                  AI-powered optimisation to uncover patterns, arbitrage, and scaling opportunities in real-time.
                </p>
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
                  MULTI-PLATFORM PERFORMANCE
                </div>
                <h3 className="text-lg font-extrabold text-white drop-shadow-xs">Cross-Channel Presence</h3>
                <p className="text-xs text-sky-100 font-medium leading-relaxed">
                  Multi-platform performance across the channels where your highest-LTV buyers actually hang out.
                </p>
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
                  REGULAR CAMPAIGN REVIEWS
                </div>
                <h3 className="text-lg font-extrabold text-white drop-shadow-sm">No 'Set and Forget' Approach</h3>
                <p className="text-xs text-blue-100 font-medium leading-relaxed">
                  Regular campaign reviews with weekly video teardowns — no 'set and forget' agency laziness.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2 hover:border-teal/50 transition-colors">
              <div className="text-teal font-mono font-bold text-xs uppercase">• CONTINUOUS EXPERIMENTATION</div>
              <h3 className="text-lg font-bold text-white">Multivariate Testing</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Continuous testing across audiences, ad creatives, hooks, messaging, and high-converting landing pages.
              </p>
            </div>

            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2 hover:border-teal/50 transition-colors md:col-span-2 lg:col-span-2">
              <div className="text-teal font-mono font-bold text-xs uppercase">• MARGINAL ROAS ALLOCATION</div>
              <h3 className="text-lg font-bold text-white">Smarter Budget Allocation</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Smarter budget allocation based on what’s actually driving net contribution margin and bottom-line business results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. ALTERNATING LEFT / RIGHT DELIVERABLE GROUPS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            THE 5 DELIVERABLE GROUPS
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink">
            How We Rebuild & Scale Paid Media
          </h2>
          <p className="text-mute text-base">
            No lazy broad targeting. No vanity metrics. A complete return-focused performance engine.
          </p>
        </div>

        {/* Group 1: Left Copy, Right Visual */}
        <div id="meta-ads" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 border border-hairline shadow-sm">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-bold text-teal">DELIVERABLE 01</div>
            <h3 className="text-2xl font-display font-bold text-ink">Account & Tracking Audit</h3>
            <p className="text-mute leading-relaxed text-sm">
              We audit your ad account setup, pixel match quality, GA4 configurations, and conversion drop-offs to expose hidden waste and pinpoint high-performing ad sets.
            </p>
            <ul className="space-y-2 text-xs font-mono text-ink/80 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> 100% Data accuracy verification</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> Wastage removal on redundant targeting</li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-bone p-6 rounded-2xl border border-hairline font-mono text-xs space-y-2">
            <div className="text-mute uppercase font-bold">Audit Teardown Sample</div>
            <div className="p-3 bg-white rounded-xl border border-hairline text-red-500 font-bold">
              • 34% ad spend wasted on overlapping audiences
            </div>
            <div className="p-3 bg-white rounded-xl border border-hairline text-emerald-600 font-bold">
              • Server-side CAPI integration missing 42% signals
            </div>
          </div>
        </div>

        {/* Group 2: Right Copy, Left Visual (Alternating) */}
        <div id="google-ads" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 border border-hairline shadow-sm">
          <div className="lg:col-span-5 order-2 lg:order-1 bg-bone p-6 rounded-2xl border border-hairline font-mono text-xs space-y-2">
            <div className="text-mute uppercase font-bold">Architecture Matrix</div>
            <div className="p-3 bg-white rounded-xl border border-hairline text-teal font-bold">
              • Meta ASC (Advantage+ Shopping) + Manual Testing
            </div>
            <div className="p-3 bg-white rounded-xl border border-hairline text-teal font-bold">
              • Google PMax + Exact Intent Search Funnels
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <div className="text-xs font-mono font-bold text-teal">DELIVERABLE 02</div>
            <h3 className="text-2xl font-display font-bold text-ink">Campaign Architecture Rebuild</h3>
            <p className="text-mute leading-relaxed text-sm">
              Consolidating fractured campaign structures into scalable account architectures designed to give platform machine learning enough conversion volume to optimize cleanly.
            </p>
            <ul className="space-y-2 text-xs font-mono text-ink/80 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> Non-overlapping TOFU / MOFU / BOFU structure</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> Algorithmic bidding & budget allocation</li>
            </ul>
          </div>
        </div>

        {/* Group 3: Left Copy, Right Visual */}
        <div id="creative-testing" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 border border-hairline shadow-sm">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-bold text-teal">DELIVERABLE 03</div>
            <h3 className="text-2xl font-display font-bold text-ink">Creative Testing System (Fed by SMM Engine)</h3>
            <p className="text-mute leading-relaxed text-sm">
              We treat organic content as the testing lab for paid media. Top organic winners are automatically formatted, hooked, and promoted into high-budget performance ad sets.
            </p>
            <ul className="space-y-2 text-xs font-mono text-ink/80 pt-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> Weekly creative iteration & hook testing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-teal" /> High-converting UGC & direct response statics</li>
            </ul>
          </div>
          <div className="lg:col-span-5 bg-bone p-6 rounded-2xl border border-hairline font-mono text-xs space-y-2">
            <div className="text-mute uppercase font-bold">Creative Pipeline</div>
            <div className="p-3 bg-white rounded-xl border border-teal/30 text-ink font-bold flex items-center justify-between">
              <span>SMM Winner Reel</span>
              <span className="text-teal">➔ Promoted to Meta ASC</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-teal/30 text-ink font-bold flex items-center justify-between">
              <span>Performance UGC Hook</span>
              <span className="text-teal">➔ Scaled to $5k/day</span>
            </div>
          </div>
        </div>

        {/* Group 4 & 5: Budget, Bid Strategy & Measurement */}
        <div id="tracking-attribution" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div id="tracking-attribution-budget" className="bg-white rounded-3xl p-8 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-teal">DELIVERABLE 04</div>
            <h3 className="text-xl font-display font-bold text-ink">Budget & Bid Strategy (Meta & Google)</h3>
            <p className="text-mute text-sm leading-relaxed">
              Dynamic cross-channel budget allocation based on marginal ROAS — shifting capital live to whichever platform yields the lowest CAC.
            </p>
          </div>
          <div id="reporting" className="bg-white rounded-3xl p-8 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-teal">DELIVERABLE 05</div>
            <h3 className="text-xl font-display font-bold text-ink">Measurement: GA4, CAPI & Offline Conversions</h3>
            <p className="text-mute text-sm leading-relaxed">
              Bypassing iOS privacy blocks with server-side GTM, Meta CAPI Gateway, and offline CRM sync so every single conversion is attributed accurately.
            </p>
          </div>
        </div>
      </div>

      {/* 3. CALCULATOR SECTION: Full-bleed teal band that breaks the container */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-teal text-ink py-16 px-4 sm:px-12 my-12 shadow-2xl">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-teal text-xs font-mono font-bold rounded-full">
              <Sliders className="w-3.5 h-3.5" />
              INTERACTIVE PERFORMANCE CALCULATOR
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink">
              Estimate Your Extra Revenue & ROAS Lift
            </h2>
            <p className="text-ink/80 text-sm sm:text-base font-medium">
              Adjust the sliders below to calculate projected monthly growth based on your brand's actual inputs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-ink text-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-ink/20">
            {/* Sliders Side */}
            <div className="lg:col-span-7 space-y-6">
              {/* Monthly Spend Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-white/80">Monthly Ad Spend</span>
                  <span className="text-teal font-bold">{formatCurrency(monthlySpend)}</span>
                </div>
                <input 
                  type="range" 
                  min={50000} 
                  max={2000000} 
                  step={25000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>

              {/* Current ROAS Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-white/80">Current Blended ROAS</span>
                  <span className="text-teal font-bold">{currentROAS}x</span>
                </div>
                <input 
                  type="range" 
                  min={1.0} 
                  max={5.0} 
                  step={0.1}
                  value={currentROAS}
                  onChange={(e) => setCurrentROAS(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>

              {/* Target Lift Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-mono">
                  <span className="text-white/80">Target ROAS Lift</span>
                  <span className="text-teal font-bold">+{targetLift}%</span>
                </div>
                <input 
                  type="range" 
                  min={10} 
                  max={100} 
                  step={5}
                  value={targetLift}
                  onChange={(e) => setTargetLift(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>

              <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs text-white/60 italic font-mono">
                * Note: This calculation is an estimate derived directly from the user's own inputs and conservative historical agency campaign benchmarks.
              </div>
            </div>

            {/* Output Side: Medium Blue Litmus Card (#5DAFFF -> #1D5B9A) */}
            <div
              className="lg:col-span-5 rounded-[24px] p-6 sm:p-8 space-y-6 flex flex-col justify-between relative overflow-hidden text-white shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
              <div className="relative z-10 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-4 font-mono">
                  <div>
                    <div className="text-xs text-sky-100 font-medium">Projected Blended ROAS</div>
                    <div className="text-3xl font-display font-extrabold text-white drop-shadow-xs">{projectedROAS}x</div>
                  </div>

                  <div>
                    <div className="text-xs text-sky-100 font-medium">Extra Monthly Revenue</div>
                    <div className="text-2xl font-display font-extrabold text-white">{formatCurrency(extraMonthlyRevenue)}</div>
                  </div>

                  <div>
                    <div className="text-xs text-sky-100 font-medium">12-Month Cumulative Gain</div>
                    <div className="text-2xl font-display font-extrabold text-emerald-300">{formatCurrency(annualGain)}</div>
                  </div>

                  <div>
                    <div className="text-xs text-sky-100 font-medium">Estimated Payback Window</div>
                    <div className="text-xl font-bold text-white">{paybackDays} Days</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenAudit('acquire-performance')}
                  className="w-full py-3.5 px-4 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-xs hover:bg-white/95 transition-all shadow-md cursor-pointer uppercase tracking-wider"
                >
                  CLAIM THIS ROAS GROWTH →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* SUCCESS METRICS BY CATEGORY & CLIENT VAULT FOR PERFORMANCE MARKETING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 border-t border-hairline pt-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            VERIFIED PERFORMANCE MARKETING PROOF & CLIENT WORK
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Top Performance Marketing Clients & Results
          </h2>
          <p className="text-mute text-sm">
            Filtered by Performance Marketing (PM) case studies, with full access to all client vault records.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="PM" />
      </div>

      {/* VERIFIED TESTIMONIALS CAROUSEL */}
      <div className="border-t border-hairline pt-12">
        <TestimonialsMarquee />
      </div>



      {/* 6. CROSS-LINKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-hairline pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-bone rounded-3xl p-8 border border-hairline">
          <div>
            <div className="text-xs font-mono font-bold text-teal uppercase">EXPLORE ADJACENT CAPABILITIES</div>
            <div className="text-xl font-display font-bold text-ink mt-1">Amplify Your Paid Traffic Results</div>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <button 
              onClick={() => onNavigateCapability('convert-cro')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              CRO Agency →
            </button>
            <button 
              onClick={() => onNavigateCapability('convert-build')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              Build & Landing Pages →
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
