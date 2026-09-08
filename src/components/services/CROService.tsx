import React, { useState } from 'react';
import { Sliders } from 'lucide-react';
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
            <a href="#calculator" className="hover:text-teal transition-colors">#calculator</a>
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

