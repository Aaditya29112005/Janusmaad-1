import React, { useState } from 'react';
import { 
  CheckCircle2, 
  HelpCircle, 
  Sliders,
  Activity
} from 'lucide-react';
import { Button } from '../ui/Button';

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

      {/* 1. HERO SECTION: variant="split" (Hero 60/40, copy left, animated spend-to-return chart right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0a0d16] border border-teal/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -z-0 pointer-events-none" />

          {/* Left Column: 60% (col-span-7) */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-teal/15 text-teal text-xs font-mono font-bold rounded-full border border-teal/40 uppercase">
                ACQUIRE PILLAR • PERFORMANCE MARKETING
              </span>
              <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-mono rounded-full">
                SLUG: services/performance-marketing
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight">
              Paid Media Judged on Return, Not Reach<span className="text-teal">.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body">
              Meta, Google and TikTok campaigns managed strictly to blended ROAS and Contribution Margin. Built for D2C and lead-gen founders spending <strong className="text-teal font-mono">[SPEND_BAND: $10k - $200k+ / mo]</strong> whose ROAS has flattened and who cannot tell which campaign is carrying it.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" onClick={() => onOpenAudit('acquire-performance')}>
                Get Free Live Account Audit (No Obligation) →
              </Button>
              <div className="text-xs text-white/60 font-mono">
                Management baseline from <strong className="text-teal">[PRICE: $2,500 AUD / ₹1.5L / mo]</strong>
              </div>
            </div>

            {/* Supporting Keywords Pills */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-white/60">
              <span className="text-teal font-bold">PRIMARY:</span> performance marketing agency |
              <span>meta ads agency</span> |
              <span>google ads management</span> |
              <span>tiktok ads agency</span> |
              <span>paid media agency Sydney & Delhi NCR</span>
            </div>
          </div>

          {/* Right Column: 40% (col-span-5) Animated Spend-to-Return Chart */}
          <div className="lg:col-span-5 relative z-10">
            <div className="bg-ink/90 border border-teal/40 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal animate-pulse" />
                  <span className="text-xs font-mono font-bold text-teal uppercase">SPEND TO RETURN SIMULATOR</span>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-400/10 px-2.5 py-1 rounded-full">
                  LIVE BENCHMARK
                </span>
              </div>

              {/* Animated Spend Bar Chart */}
              <div className="space-y-4 font-mono">
                <div>
                  <div className="flex justify-between text-xs text-white/70 mb-1">
                    <span>Monthly Ad Spend</span>
                    <span className="text-teal font-bold">$50,000 AUD</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-white/40 w-1/3 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-white/70 mb-1">
                    <span>Legacy Agency Return (2.1x ROAS)</span>
                    <span className="text-red-400 font-bold">$105,000 AUD</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500/60 w-1/2 rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-white/70 mb-1">
                    <span>Janusmaad Rebuild Return (4.82x ROAS)</span>
                    <span className="text-emerald-400 font-bold">$241,000 AUD</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-teal w-[92%] rounded-full animate-pulse" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-teal/10 border border-teal/30 rounded-xl space-y-1">
                <div className="text-xs font-mono font-bold text-teal uppercase">NET LIFT DEMONSTRATED</div>
                <div className="text-2xl font-display font-extrabold text-white">+$136,000 AUD / Mo</div>
                <div className="text-xs text-white/70">Attributable via GA4 + CAPI Server-Side Tagging</div>
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
              <span>TikTok Trend Hook</span>
              <span className="text-teal">➔ Scaled to $5k/day</span>
            </div>
          </div>
        </div>

        {/* Group 4 & 5: Budget, Bid Strategy & Measurement */}
        <div id="tracking-attribution" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div id="tiktok-ads" className="bg-white rounded-3xl p-8 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-teal">DELIVERABLE 04</div>
            <h3 className="text-xl font-display font-bold text-ink">Budget & Bid Strategy (Meta, Google, TikTok)</h3>
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

            {/* Output Side */}
            <div className="lg:col-span-5 bg-white/5 border border-teal/40 rounded-2xl p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4 font-mono">
                <div>
                  <div className="text-xs text-white/60">Projected Blended ROAS</div>
                  <div className="text-3xl font-display font-extrabold text-teal">{projectedROAS}x</div>
                </div>

                <div>
                  <div className="text-xs text-white/60">Extra Monthly Revenue</div>
                  <div className="text-2xl font-display font-bold text-white">{formatCurrency(extraMonthlyRevenue)}</div>
                </div>

                <div>
                  <div className="text-xs text-white/60">12-Month Cumulative Gain</div>
                  <div className="text-2xl font-display font-bold text-emerald-400">{formatCurrency(annualGain)}</div>
                </div>

                <div>
                  <div className="text-xs text-white/60">Estimated Payback Window</div>
                  <div className="text-xl font-bold text-white">{paybackDays} Days</div>
                </div>
              </div>

              <Button variant="primary" size="md" onClick={() => onOpenAudit('acquire-performance')}>
                Claim This ROAS Growth →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PRICING TIERS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            ENGAGEMENT TIERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink">
            Transparent Media Buying Packages
          </h2>
          <p className="text-mute text-base">
            No percentage penalties on ad spend scaling. Pick the tier that matches your spend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tier 1 */}
          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-teal uppercase">TIER 01 • DIAGNOSTIC</div>
              <h3 className="text-xl font-display font-bold text-ink">Free Account Audit</h3>
              <div className="text-3xl font-display font-extrabold text-ink">$0 <span className="text-xs font-mono text-mute">/ 100% Free</span></div>
              <p className="text-xs text-mute leading-relaxed">
                Live account teardown covering tracking, audience overlap, and waste identification.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('acquire-performance')}>
              Request Free Audit
            </Button>
          </div>

          {/* Tier 2 */}
          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-teal uppercase">TIER 02 • LAUNCH</div>
              <h3 className="text-xl font-display font-bold text-ink">Performance Launch</h3>
              <div className="text-3xl font-display font-extrabold text-ink">[PRICE] <span className="text-xs font-mono text-mute">/ mo</span></div>
              <p className="text-xs text-mute leading-relaxed">
                For brands spending up to $25k AUD / ₹15L INR monthly across Meta & Google.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('acquire-performance')}>
              Select Launch
            </Button>
          </div>

          {/* Tier 3: Featured */}
          <div className="bg-ink text-white rounded-3xl p-6 border-2 border-teal space-y-6 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-teal text-ink text-[10px] font-mono font-bold rounded-full uppercase">
              MOST POPULAR
            </div>
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-teal uppercase">TIER 03 • SCALE</div>
              <h3 className="text-xl font-display font-bold text-white">Scale Engine</h3>
              <div className="text-3xl font-display font-extrabold text-white">[PRICE] <span className="text-xs font-mono text-white/60">/ mo</span></div>
              <p className="text-xs text-white/80 leading-relaxed">
                For brands spending $25k - $100k AUD / ₹15L - ₹60L INR. Includes CAPI & creative testing.
              </p>
            </div>
            <Button variant="primary" size="sm" onClick={() => onOpenAudit('acquire-performance')}>
              Start Scaling
            </Button>
          </div>

          {/* Tier 4 */}
          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold text-teal uppercase">TIER 04 • FULL FUNNEL</div>
              <h3 className="text-xl font-display font-bold text-ink">Enterprise Growth</h3>
              <div className="text-3xl font-display font-extrabold text-ink">Custom <span className="text-xs font-mono text-mute">/ Performance Share</span></div>
              <p className="text-xs text-mute leading-relaxed">
                For high-scale brands spending $100k+ AUD / ₹60L+ INR. Includes dedicated creative pod.
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('acquire-performance')}>
              Contact Enterprise
            </Button>
          </div>
        </div>
      </div>

      {/* 5. FAQ MUST ANSWER SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Everything You Need to Know
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Do you charge a flat fee or percentage of spend?",
              a: "We charge a transparent flat monthly retainer aligned to your spend band ([PRICE]/month baseline) or performance-share tiers. We do not punish scaling by taking arbitrary percentages of ad spend."
            },
            {
              q: "What is the minimum monthly ad spend required?",
              a: "Our performance media management is engineered for brands spending between [SPEND_BAND: $10,000 to $200,000+ AUD / ₹5L to ₹1Cr+ INR] per month."
            },
            {
              q: "What is your contract notice period?",
              a: "We operate on flexible 30-day notice periods after an initial 90-day sprint foundation. No long-term handcuffs."
            },
            {
              q: "Who owns the ad account and pixel tracking data?",
              a: "You own 100% of your Meta Business Manager, Google Ads account, TikTok Ads account, GA4, and CAPI pixel data. You retain full ownership forever."
            },
            {
              q: "What is the realistic time to first performance signal?",
              a: "Initial conversion tracking signals and creative test readouts stabilize within 7 to 14 days of launching structured campaigns."
            },
            {
              q: "What is your reporting cadence?",
              a: "Real-time client dashboard access + weekly video breakdown + bi-weekly strategic growth alignment calls."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-hairline space-y-2">
              <h3 className="font-display font-bold text-ink text-lg flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-teal shrink-0" />
                {faq.q}
              </h3>
              <p className="text-mute text-sm leading-relaxed pl-7">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
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
