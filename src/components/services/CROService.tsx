import React, { useState } from 'react';
import { 
  Sliders, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Activity,
  FlaskConical,
  ShoppingCart
} from 'lucide-react';
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

  const CRO_PILLARS = [
    {
      icon: Activity,
      badge: 'SESSION SCIENCE',
      title: 'Heatmaps & User Session Science',
      desc: 'Analyzing real session recordings, scroll heatmaps, and funnel drop-off points to isolate and remove friction before running tests.',
      bullets: [
        'Hotjar & Clarity session audits',
        'Checkout drop-off leak mapping',
        'Empirical user friction teardowns'
      ]
    },
    {
      icon: FlaskConical,
      badge: 'A/B EXPERIMENTATION',
      title: 'A/B & Multivariate Testing Sprints',
      desc: 'Deploying statistically sound split experiments across landing page hooks, PDP value propositions, and offer architectures.',
      bullets: [
        'VWO & Optimizely testing engine',
        '95%+ statistical confidence thresholds',
        'Bi-weekly rapid iteration cycles'
      ]
    },
    {
      icon: ShoppingCart,
      badge: 'CART & CHECKOUT',
      title: 'Slide-Cart & Checkout AOV Engines',
      desc: 'Re-architecting the slide-cart drawer and post-purchase upsell flows to systematically increase AOV and lower cart abandonment.',
      bullets: [
        '1-click post-purchase upsells',
        'Tiered free-shipping progress bars',
        'Express pay & trust badge placement'
      ]
    }
  ];

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
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-teal transition-colors cursor-pointer"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. HERO SECTION: Litmus Medium Blue Gradient (#5DAFFF -> #1D5B9A) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div
          className="rounded-3xl p-6 sm:p-12 space-y-8 relative overflow-hidden shadow-2xl text-white"
          style={{
            background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
            boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Glass Glare Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-3xl" />
          
          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-white/20 text-white text-xs font-mono font-bold rounded-full border border-white/40 uppercase backdrop-blur-md">
                CONVERT PILLAR • CRO EXPERIMENTATION LAB
              </span>
              <span className="px-3 py-1 bg-black/20 text-white/90 text-xs font-mono rounded-full">
                SLUG: services/conversion-rate-optimisation
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight drop-shadow-xs">
              Make the Traffic You Already Pay For Worth More<span className="text-sky-200">.</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100 font-medium leading-relaxed font-body max-w-2xl">
              Research-led A/B testing, session recording science, and revenue-per-visitor engineering. Built for D2C & high-intent lead brands ready to eliminate checkout friction.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAudit('convert-cro')}
                className="py-3.5 px-7 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-xs hover:bg-white/95 transition-all shadow-lg cursor-pointer uppercase tracking-wider flex items-center gap-2 group"
              >
                <span>Get Free Conversion Teardown (60 Min)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 4 Stat Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/20">
              <div className="bg-white/10 rounded-xl p-3 border border-white/15 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-white">+62%</div>
                <div className="text-[11px] text-sky-100 font-mono">Average CVR Lift</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/15 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-white">95%+</div>
                <div className="text-[11px] text-sky-100 font-mono">Statistical Confidence</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/15 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-white">Sub-0.8s</div>
                <div className="text-[11px] text-sky-100 font-mono">PDP Interaction Speed</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 border border-white/15 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-display font-extrabold text-emerald-300">+38%</div>
                <div className="text-[11px] text-sky-100 font-mono">AOV Lift from Bundles</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 3 CORE CRO PILLARS: High-Impact Responsive Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 text-violet text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR 3 CRO PILLARS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-ink tracking-tight">
            Scientific Conversion Optimization Engine
          </h2>
          <p className="text-mute text-xs sm:text-sm font-medium">
            Systematic experimentation to maximize add-to-cart, checkout, and revenue-per-visitor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {CRO_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-hairline hover:border-violet/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-violet/10 text-violet flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-violet bg-violet/5 px-2.5 py-1 rounded-full border border-violet/15 uppercase">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-display font-bold text-ink group-hover:text-violet transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-mute text-xs leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-hairline/60 space-y-2">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs font-medium text-ink/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. CALCULATOR: Compact, High-Impact Revenue Lift HUD */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-teal/40 space-y-6 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/20 text-teal text-xs font-mono font-bold rounded-full">
              <Sliders className="w-3.5 h-3.5" />
              CRO REVENUE CALCULATOR
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
              Calculate Extra Monthly Orders & Revenue Lift
            </h2>
            <p className="text-white/60 text-xs sm:text-sm font-medium">
              Adjust monthly unique traffic & target conversion improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Sliders Panel */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              {/* Sessions Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/80 font-medium">Monthly Unique Sessions</span>
                  <span className="text-teal font-bold px-2 py-0.5 rounded bg-teal/10 border border-teal/30">
                    {sessions.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min={10000} 
                  max={500000} 
                  step={10000}
                  value={sessions}
                  onChange={(e) => setSessions(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer h-1.5 bg-white/10 rounded-lg"
                />
                {/* Preset Chips */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  {[25000, 50000, 100000, 250000, 500000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setSessions(preset)}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all cursor-pointer ${
                        sessions === preset
                          ? 'bg-teal text-ink font-bold shadow-xs'
                          : 'bg-white/5 text-white/60 hover:bg-white/15 hover:text-white'
                      }`}
                    >
                      {(preset / 1000).toFixed(0)}k
                    </button>
                  ))}
                </div>
              </div>

              {/* Current CVR Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/80 font-medium">Current Conversion Rate</span>
                  <span className="text-teal font-bold px-2 py-0.5 rounded bg-teal/10 border border-teal/30">
                    {currentCVR.toFixed(1)}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min={0.5} 
                  max={5.0} 
                  step={0.1}
                  value={currentCVR}
                  onChange={(e) => setCurrentCVR(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer h-1.5 bg-white/10 rounded-lg"
                />
              </div>

              {/* Target CVR Lift Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/80 font-medium">Target CVR Lift</span>
                  <span className="text-teal font-bold px-2 py-0.5 rounded bg-teal/10 border border-teal/30">
                    +{targetLift}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min={10} 
                  max={80} 
                  step={5}
                  value={targetLift}
                  onChange={(e) => setTargetLift(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer h-1.5 bg-white/10 rounded-lg"
                />
              </div>

              <div className="pt-1 text-[11px] text-white/50 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span>Calculated at conservative ₹2,500 average order value (AOV).</span>
              </div>
            </div>

            {/* Output Panel: Compact 2x2 HUD */}
            <div
              className="lg:col-span-5 rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden text-white shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.35), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 pointer-events-none rounded-2xl" />
              
              <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                {/* 2x2 Metric Matrix */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">New Target CVR</div>
                    <div className="text-2xl font-display font-extrabold text-white mt-0.5 flex items-baseline gap-1">
                      {newCVR}%
                      <span className="text-[10px] font-mono text-emerald-300 font-bold">+{targetLift}%</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">Extra / Month</div>
                    <div className="text-2xl font-display font-extrabold text-white mt-0.5 truncate">
                      +{extraMonthlyOrders.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">Extra Monthly Rev</div>
                    <div className="text-2xl font-display font-extrabold text-emerald-300 mt-0.5 truncate">
                      {formatCurrency(extraMonthlyRevenue)}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">12-Mo Gain</div>
                    <div className="text-2xl font-display font-extrabold text-white mt-0.5 truncate">
                      {formatCurrency(annualGain)}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenAudit('convert-cro')}
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-xs hover:bg-white/90 active:scale-[0.99] transition-all shadow-md cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 group"
                >
                  <span>CAPTURE THIS CVR LIFT</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SUCCESS METRICS BY CATEGORY & CLIENT VAULT FOR CRO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            VERIFIED CONVERSION PROOF
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink">
            Top CRO & A/B Testing Client Records
          </h2>
          <p className="text-mute text-xs sm:text-sm">
            Live client case studies across D2C, e-commerce, and high-stakes lead funnels.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="CRO" />
      </div>

      {/* 5. VERIFIED TESTIMONIALS CAROUSEL */}
      <div className="border-t border-hairline pt-12">
        <TestimonialsMarquee />
      </div>

      {/* 6. CROSS-LINKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-bone rounded-3xl p-6 sm:p-8 border border-hairline">
          <div>
            <div className="text-xs font-mono font-bold text-violet uppercase">EXPLORE ADJACENT CAPABILITIES</div>
            <div className="text-base sm:text-lg font-display font-bold text-ink mt-0.5">Full-Funnel Synergy</div>
          </div>
          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <button 
              onClick={() => onNavigateCapability('convert-build')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors cursor-pointer"
            >
              Build & Landing Pages →
            </button>
            <button 
              onClick={() => onNavigateCapability('acquire-performance')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors cursor-pointer"
            >
              Performance Marketing →
            </button>
            <button 
              onClick={() => onNavigateCapability('retain-marketing')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors cursor-pointer"
            >
              Retention Marketing →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

