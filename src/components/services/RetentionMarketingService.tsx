import React, { useState, useRef } from 'react';
import { Sliders, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const scrollRailRef = useRef<HTMLDivElement | null>(null);

  // Calculator State
  const [orders, setOrders] = useState(3000); // 3,000 orders/mo
  const [repeatRate, setRepeatRate] = useState(18); // 18% current repeat rate
  const [aov] = useState(3200); // ₹3,200
  const [targetLift, setTargetLift] = useState(35); // 35% lift on repeat rate

  const newRepeatRate = Number((repeatRate * (1 + targetLift / 100)).toFixed(1));
  const incrementalRepeatOrders = Math.round(orders * ((newRepeatRate - repeatRate) / 100));
  const extraMonthlyRevenue = incrementalRepeatOrders * aov;
  const annualGain = extraMonthlyRevenue * 12;

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRailRef.current) {
      const scrollAmount = 360;
      scrollRailRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
                RETAIN PILLAR • LIFECYCLE & RETENTION
              </span>
              <span className="px-3 py-1 bg-black/20 text-white/90 text-xs font-mono rounded-full">
                SLUG: services/retention-marketing
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight drop-shadow-xs">
              Email, SMS & WhatsApp Flows That Lift Lifetime Value<span className="text-sky-200">.</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100 font-medium leading-relaxed font-body">
              Automated lifecycle flows and predictive RFM segmentation engineered for brands where repeat rate is flat, customer acquisition cost (CAC) keeps climbing, and customer subscriber lists are sitting unsegmented.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAudit('retain-marketing')}
                className="py-3.5 px-7 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-sm hover:bg-white/95 transition-all shadow-lg cursor-pointer"
              >
                Get Free Flow & Deliverability Audit →
              </button>
            </div>

            {/* Supporting Keywords */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap gap-2 text-xs font-mono text-sky-100">
              <span className="text-white font-bold font-mono uppercase">PRIMARY:</span>
              <span>retention marketing agency</span> |
              <span>Klaviyo agency</span> |
              <span>WhatsApp marketing API</span> |
              <span>email marketing agency</span> |
              <span>lifecycle marketing</span> |
              <span>customer LTV</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE LIFECYCLE FLOW ARCHITECTURE: Interactive Scroll Rail with 5 Litmus Cards */}
      <div id="core-flows" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-hairline pb-4">
          <div className="space-y-2">
            <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
              THE 5 DELIVERABLE GROUPS
            </div>
            <h2 className="text-3xl font-display font-extrabold text-ink">
              Core Lifecycle Flow Architecture
            </h2>
          </div>

          {/* Interactive Rail Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => handleScroll('left')}
              className="p-3 bg-white border border-hairline hover:border-teal rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all text-ink hover:text-teal cursor-pointer"
              aria-label="Scroll rail left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="p-3 bg-white border border-hairline hover:border-teal rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all text-ink hover:text-teal cursor-pointer"
              aria-label="Scroll rail right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swipe / Drag / Scroll Rail with all 5 Litmus Gradient Cards */}
        <div
          ref={scrollRailRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 scrollbar-none snap-x items-stretch scroll-smooth"
        >
          {/* Flow 01: Light Blue */}
          <div
            className="litmus-card-1 w-80 sm:w-96 shrink-0 relative rounded-[24px] p-7 space-y-4 shadow-2xl snap-start overflow-hidden text-[#07101E] hover:-translate-y-1 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-4">
              <span className="px-3 py-1 bg-white/60 border border-white/80 text-[#07101E] text-xs font-mono font-bold rounded-full w-fit inline-block">
                FLOW 01 • LIGHT BLUE
              </span>
              <h3 id="campaigns" className="text-2xl font-display font-extrabold text-[#07101E]">
                Welcome Series (3-Part)
              </h3>
              <p className="text-xs text-[#0A2540] font-medium leading-relaxed">
                Introducing brand story, zero-party preference quiz, and first-purchase incentive.
              </p>
            </div>
          </div>

          {/* Flow 02: Medium Blue */}
          <div
            className="litmus-card-2 w-80 sm:w-96 shrink-0 relative rounded-[24px] p-7 space-y-4 shadow-2xl snap-start overflow-hidden text-white hover:-translate-y-1 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-4">
              <span className="px-3 py-1 bg-white/20 border border-white/40 text-white text-xs font-mono font-bold rounded-full w-fit inline-block">
                FLOW 02 • MEDIUM BLUE
              </span>
              <h3 id="whatsapp-api" className="text-2xl font-display font-extrabold text-white drop-shadow-xs">
                Abandoned Cart & Checkout
              </h3>
              <p className="text-xs text-sky-100 font-medium leading-relaxed">
                Multi-channel recovery triggers via Email + WhatsApp API within 15 minutes of drop-off.
              </p>
            </div>
          </div>

          {/* Flow 03: Dark Blue */}
          <div
            className="litmus-card-3 w-80 sm:w-96 shrink-0 relative rounded-[24px] p-7 space-y-4 shadow-2xl snap-start overflow-hidden text-white hover:-translate-y-1 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-4">
              <span className="px-3 py-1 bg-white/15 border border-white/30 text-white text-xs font-mono font-bold rounded-full w-fit inline-block">
                FLOW 03 • DARK BLUE
              </span>
              <h3 id="segmentation-rfm" className="text-2xl font-display font-extrabold text-white drop-shadow-sm">
                Post-Purchase & Cross-Sell
              </h3>
              <p className="text-xs text-blue-100 font-medium leading-relaxed">
                Product usage instructions, review capture, and dynamic cross-sell recommendations.
              </p>
            </div>
          </div>

          {/* Flow 04: Cyan Sky Litmus Card */}
          <div
            className="w-80 sm:w-96 shrink-0 relative rounded-[24px] p-7 space-y-4 shadow-2xl snap-start overflow-hidden text-white hover:-translate-y-1 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #60A5FA 0%, #1E40AF 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-4">
              <span className="px-3 py-1 bg-white/20 border border-white/40 text-white text-xs font-mono font-bold rounded-full w-fit inline-block">
                FLOW 04 • CYAN SKY
              </span>
              <h3 id="deliverability" className="text-2xl font-display font-extrabold text-white drop-shadow-xs">
                Winback & Sunset Flow
              </h3>
              <p className="text-xs text-sky-100 font-medium leading-relaxed">
                Re-engaging unengaged contacts before list cleaning to maintain high deliverability and sender reputation.
              </p>
            </div>
          </div>

          {/* Flow 05: Royal Deep Litmus Card */}
          <div
            className="w-80 sm:w-96 shrink-0 relative rounded-[24px] p-7 space-y-4 shadow-2xl snap-start overflow-hidden text-white hover:-translate-y-1 transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #38BDF8 0%, #0369A1 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-4">
              <span className="px-3 py-1 bg-white/20 border border-white/40 text-white text-xs font-mono font-bold rounded-full w-fit inline-block">
                FLOW 05 • ROYAL BLUE
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white drop-shadow-xs">
                VIP Tier & RFM Modeling
              </h3>
              <p className="text-xs text-sky-100 font-medium leading-relaxed">
                Segmenting high-LTV buyers into exclusive early-access drop lists, rewards tiers, and personalized VIP flows.
              </p>
            </div>
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
                    <div className="text-sky-100 font-medium">New Repeat Purchase Rate</div>
                    <div className="text-3xl font-extrabold text-white drop-shadow-xs">{newRepeatRate}%</div>
                  </div>

                  <div>
                    <div className="text-sky-100 font-medium">Incremental Repeat Orders / Mo</div>
                    <div className="text-2xl font-extrabold text-white">+{incrementalRepeatOrders.toLocaleString()} Orders</div>
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
                  onClick={() => onOpenAudit('retain-marketing')}
                  className="w-full py-3.5 px-4 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-xs hover:bg-white/95 transition-all shadow-md cursor-pointer mt-4 uppercase tracking-wider"
                >
                  UNLOCK RETENTION LIFT →
                </button>
              </div>
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

