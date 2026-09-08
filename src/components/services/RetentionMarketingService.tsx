import React, { useState } from 'react';
import { Sliders } from 'lucide-react';
import { Button } from '../ui/Button';
import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TestimonialsMarquee } from '../testimonials/TestimonialsMarquee';

interface RetentionMarketingServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const RetentionMarketingService: React.FC<RetentionMarketingServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  // Calculator State
  const [orders, setOrders] = useState(3000); // 3,000 orders/mo
  const [repeatRate, setRepeatRate] = useState(18); // 18% current repeat rate
  const [aov] = useState(3200); // ₹3,200
  const [targetLift, setTargetLift] = useState(35); // 35% lift on repeat rate

  const newRepeatRate = Number((repeatRate * (1 + targetLift / 100)).toFixed(1));
  const incrementalRepeatOrders = Math.round(orders * ((newRepeatRate - repeatRate) / 100));
  const extraMonthlyRevenue = incrementalRepeatOrders * aov;
  const annualGain = extraMonthlyRevenue * 12;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retention Marketing Agency | Email, SMS & WhatsApp",
    "provider": {
      "@type": "Organization",
      "name": "Janusmaad Digital",
      "url": "https://janusmaad.com"
    },
    "serviceType": "Retention Marketing Agency",
    "areaServed": ["India", "Global"],
    "description": "Automated email, SMS and WhatsApp flows that lift repeat rate and LTV."
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

      {/* 1. HERO SECTION: variant="flow" (Connected node map down left gutter marking lifecycle stages) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#091512] via-[#0d1e1a] to-[#07120f] text-white rounded-3xl p-8 sm:p-14 border border-emerald-500/30 space-y-8 relative overflow-hidden shadow-2xl">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold rounded-full border border-emerald-500/30 uppercase">
              RETAIN PILLAR • LIFECYCLE & RETENTION
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-mono rounded-full">
              SLUG: services/retention-marketing
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight">
            Email, SMS & WhatsApp Flows That Lift Lifetime Value<span className="text-teal">.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed font-body">
            Automated lifecycle flows and predictive RFM segmentation engineered for brands where repeat rate is flat, customer acquisition cost (CAC) keeps climbing, and customer subscriber lists are sitting unsegmented.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" className="bg-teal text-ink font-bold hover:bg-emerald-400 border-none" onClick={() => onOpenAudit('retain-marketing')}>
              Get Free Flow & Deliverability Audit →
            </Button>
          </div>

          {/* Supporting Keywords */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-white/60">
            <span className="text-teal font-bold">PRIMARY:</span> retention marketing agency |
            <span>Klaviyo agency</span> |
            <span>WhatsApp marketing API</span> |
            <span>email marketing agency</span> |
            <span>lifecycle marketing</span> |
            <span>customer LTV</span>
          </div>
        </div>
      </div>

      {/* Sub-Topics Sticky Anchors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-2xl p-4 border border-hairline flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-teal font-bold uppercase">SUB-TOPICS:</span>
          <div className="flex flex-wrap gap-4 text-white/80">
            <a href="#core-flows" className="hover:text-teal transition-colors">#core-flows</a>
            <a href="#campaigns" className="hover:text-teal transition-colors">#campaigns</a>
            <a href="#whatsapp-api" className="hover:text-teal transition-colors">#whatsapp-api</a>
            <a href="#segmentation-rfm" className="hover:text-teal transition-colors">#segmentation-rfm</a>
            <a href="#deliverability" className="hover:text-teal transition-colors">#deliverability</a>
            <a href="#calculator" className="hover:text-teal transition-colors">#calculator</a>
          </div>
        </div>
      </div>

      {/* 2. VERTICAL CONNECTED FLOWS SECTION (Horizontal scroll track on desktop, stacked on mobile) */}
      <div id="core-flows" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            THE 5 DELIVERABLE GROUPS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Core Lifecycle Flow Architecture
          </h2>
        </div>

        {/* Desktop Horizontal Scroll Track / Mobile Stack */}
        <div className="flex flex-col md:flex-row overflow-x-auto gap-6 pb-4 scrollbar-none snap-x">
          
          <div className="md:w-80 shrink-0 bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 01</span>
            <h3 id="campaigns" className="text-xl font-bold text-ink">Welcome Series (3-Part)</h3>
            <p className="text-xs text-mute leading-relaxed">
              Introducing brand story, zero-party preference quiz, and first-purchase incentive.
            </p>
          </div>

          <div className="md:w-80 shrink-0 bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 02</span>
            <h3 id="whatsapp-api" className="text-xl font-bold text-ink">Abandoned Cart & Checkout</h3>
            <p className="text-xs text-mute leading-relaxed">
              Multi-channel recovery triggers via Email + WhatsApp API within 15 minutes of drop-off.
            </p>
          </div>

          <div className="md:w-80 shrink-0 bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 03</span>
            <h3 id="segmentation-rfm" className="text-xl font-bold text-ink">Post-Purchase & Cross-Sell</h3>
            <p className="text-xs text-mute leading-relaxed">
              Product usage instructions, review capture, and dynamic cross-sell recommendations.
            </p>
          </div>

          <div className="md:w-80 shrink-0 bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 04</span>
            <h3 id="deliverability" className="text-xl font-bold text-ink">Winback & Sunset Flow</h3>
            <p className="text-xs text-mute leading-relaxed">
              Re-engaging unengaged contacts before list cleaning to maintain high deliverability.
            </p>
          </div>

          <div className="md:w-80 shrink-0 bg-ink text-white rounded-3xl p-6 border border-teal space-y-4 shadow-2xl snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 05</span>
            <h3 className="text-xl font-bold text-white">VIP Tier & RFM Modeling</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Segmenting high-LTV buyers into exclusive early-access drop lists and rewards.
            </p>
          </div>

        </div>
      </div>

      {/* 3. INTERACTIVE RETENTION CALCULATOR */}
      <div id="calculator" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 border border-teal/40 space-y-8 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/20 text-teal text-xs font-mono font-bold rounded-full">
              <Sliders className="w-3.5 h-3.5" />
              LIFETIME VALUE CALCULATOR
            </div>
            <h2 className="text-3xl font-display font-extrabold text-white">
              Calculate Repeat Rate Revenue Lift
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">Monthly Orders</span>
                  <span className="text-teal font-bold">{orders.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min={500} 
                  max={20000} 
                  step={500}
                  value={orders}
                  onChange={(e) => setOrders(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">Current Repeat Purchase Rate</span>
                  <span className="text-teal font-bold">{repeatRate}%</span>
                </div>
                <input 
                  type="range" 
                  min={5} 
                  max={40} 
                  step={1}
                  value={repeatRate}
                  onChange={(e) => setRepeatRate(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">Target Repeat Rate Lift</span>
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
                  <div className="text-white/60">New Repeat Purchase Rate</div>
                  <div className="text-3xl font-bold text-teal">{newRepeatRate}%</div>
                </div>

                <div>
                  <div className="text-white/60">Incremental Repeat Orders / Mo</div>
                  <div className="text-2xl font-bold text-white">+{incrementalRepeatOrders.toLocaleString()} Orders</div>
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

              <Button variant="primary" size="md" className="bg-teal text-ink font-bold border-none" onClick={() => onOpenAudit('retain-marketing')}>
                Unlock Retention Lift →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS METRICS BY CATEGORY & CLIENT VAULT FOR RETENTION MARKETING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 border-t border-hairline pt-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            VERIFIED RETENTION PROOF & LIFECYCLE CLIENT VAULT
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Top Retention & Lifecycle Clients & LTV Results
          </h2>
          <p className="text-mute text-sm">
            Filtered by Retention Marketing (RM) case studies, with full access to all client vault records.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="RM" />
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
            <div className="text-lg font-display font-bold text-ink mt-1">Scale Customer LTV</div>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <button 
              onClick={() => onNavigateCapability('acquire-performance')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              Performance Marketing →
            </button>
            <button 
              onClick={() => onNavigateCapability('convert-cro')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              CRO Agency →
            </button>
            <button 
              onClick={() => onNavigateCapability('acquire-smm')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              SMM Content Engine →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

