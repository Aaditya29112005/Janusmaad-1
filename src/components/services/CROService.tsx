import React, { useState } from 'react';
import { Sliders } from 'lucide-react';
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
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
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
    "areaServed": ["India", "Global"],
    "description": "Make the traffic you already pay for worth more. Research-led A/B testing, session recording analysis, and revenue-per-visitor science."
  };

  return (
    <div className="space-y-20 pb-16">
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
          
          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-white/20 text-white text-xs font-mono font-bold rounded-full border border-white/40 uppercase backdrop-blur-md">
                CONVERT PILLAR • CRO EXPERIMENTATION LAB
              </span>
              <span className="px-3 py-1 bg-black/20 text-white/90 text-xs font-mono rounded-full">
                SLUG: services/conversion-rate-optimisation
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight drop-shadow-xs">
              Make the Traffic You Already Pay For Worth More<span className="text-sky-200">.</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100 font-medium leading-relaxed font-body">
              Research-led A/B testing, session recording analysis, and revenue-per-visitor science. Engineered for D2C & lead-gen brands where traffic is healthy but add-to-cart, checkout, or form completion rates are throttling profit.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAudit('convert-cro')}
                className="py-3.5 px-7 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-sm hover:bg-white/95 transition-all shadow-lg cursor-pointer"
              >
                Get Free Conversion Teardown (60 Min) →
              </button>
            </div>

            {/* Primary & Supporting Keywords */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap gap-2 text-xs font-mono text-sky-100">
              <span className="text-white font-bold font-mono uppercase">PRIMARY:</span>
              <span>conversion rate optimisation agency</span> |
              <span>CRO agency</span> |
              <span>A/B testing</span> |
              <span>Shopify CRO</span> |
              <span>funnel analysis</span> |
              <span>heatmaps</span> |
              <span>PDP optimisation</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 CORE CRO PILLARS WITH LITMUS CARDS */}
      <div id="ab-testing" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            OUR 3 CRO PILLARS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Scientific Conversion Optimization Engine
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Light Blue */}
          <div
            id="research"
            className="litmus-card-1 relative rounded-[24px] p-8 space-y-6 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-2 text-[#07101E]"
            style={{
              background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-4">
              <span className="px-3 py-1 bg-white/60 border border-white/80 text-[#07101E] text-xs font-mono font-bold rounded-full w-fit">
                PILLAR 01 • LIGHT BLUE
              </span>
              <h3 className="text-2xl font-display font-extrabold text-[#07101E] tracking-tight">
                Heatmaps & Session Science
              </h3>
              <p className="text-sm text-[#0A2540] font-medium leading-relaxed">
                Analyzing session recordings, eye-tracking heatmaps, and funnel drop-off points to eliminate user friction before running tests.
              </p>
              <ul className="space-y-2.5 text-xs font-semibold text-[#07101E] pt-2 border-t border-[#07101E]/15">
                <li className="flex items-center gap-2">• Hotjar & Clarity Session Recording Audits</li>
                <li className="flex items-center gap-2">• Drop-Off & Checkout Leak Mapping</li>
                <li className="flex items-center gap-2">• User Friction Teardown Reports</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Medium Blue */}
          <div
            id="hypothesis-backlog"
            className="litmus-card-2 relative rounded-[24px] p-8 space-y-6 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-2 text-white"
            style={{
              background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-4">
              <span className="px-3 py-1 bg-white/20 border border-white/40 text-white text-xs font-mono font-bold rounded-full w-fit">
                PILLAR 02 • MEDIUM BLUE
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white tracking-tight drop-shadow-xs">
                A/B & Multivariate Testing
              </h3>
              <p className="text-sm text-sky-100 font-medium leading-relaxed">
                Deploying statistically sound A/B & multivariate experiments across landing page headlines, PDP offers, and call-to-actions.
              </p>
              <ul className="space-y-2.5 text-xs font-medium text-white pt-2 border-t border-white/20">
                <li className="flex items-center gap-2">• VWO & Optimizely Experimentation</li>
                <li className="flex items-center gap-2">• 95%+ Statistical Confidence Standards</li>
                <li className="flex items-center gap-2">• Continuous Bi-Weekly Iteration Sprints</li>
              </ul>
            </div>
          </div>

          {/* Card 3: Dark Blue */}
          <div
            id="pdp-optimisation"
            className="litmus-card-3 relative rounded-[24px] p-8 space-y-6 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-2 text-white"
            style={{
              background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-4">
              <span className="px-3 py-1 bg-white/15 border border-white/30 text-white text-xs font-mono font-bold rounded-full w-fit">
                PILLAR 03 • DARK BLUE
              </span>
              <h3 id="checkout" className="text-2xl font-display font-extrabold text-white tracking-tight drop-shadow-sm">
                Cart & Checkout Upsells
              </h3>
              <p className="text-sm text-blue-100 font-medium leading-relaxed">
                Rebuilding cart drawers and post-purchase upsell flows to boost Average Order Value (AOV) and reduce cart abandonment.
              </p>
              <ul className="space-y-2.5 text-xs font-medium text-white pt-2 border-t border-white/20">
                <li className="flex items-center gap-2">• 1-Click Post-Purchase Bundle Offers</li>
                <li className="flex items-center gap-2">• Slide-Cart Free Shipping Progress Bars</li>
                <li className="flex items-center gap-2">• Checkout Trust Badges & Express Pay</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CALCULATOR: Sliders for monthly sessions, CVR, AOV, target lift */}
      <div id="calculator" className="max-w-7xl mx-auto px-4 sm:px-8">
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

            <div
              className="lg:col-span-5 rounded-[24px] p-6 space-y-4 font-mono flex flex-col justify-between relative overflow-hidden text-white shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
              <div className="relative z-10 space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3 text-xs">
                  <div>
                    <div className="text-sky-100 font-medium">New Target CVR</div>
                    <div className="text-3xl font-extrabold text-white drop-shadow-xs">{newCVR}%</div>
                  </div>

                  <div>
                    <div className="text-sky-100 font-medium">Extra Monthly Orders</div>
                    <div className="text-2xl font-extrabold text-white">+{extraMonthlyOrders.toLocaleString()} Orders</div>
                  </div>

                  <div>
                    <div className="text-sky-100 font-medium">Extra Monthly Revenue</div>
                    <div className="text-2xl font-extrabold text-emerald-300">{formatCurrency(extraMonthlyRevenue)}</div>
                  </div>

                  <div>
                    <div className="text-sky-100 font-medium">12-Month Cumulative Gain</div>
                    <div className="text-xl font-extrabold text-white">{formatCurrency(annualGain)}</div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenAudit('convert-cro')}
                  className="w-full py-3.5 px-4 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-xs hover:bg-white/95 transition-all shadow-md cursor-pointer mt-4 uppercase tracking-wider"
                >
                  CAPTURE THIS CVR LIFT →
                </button>
              </div>
            </div>
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

      {/* CROSS-LINKS SECTION */}
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

