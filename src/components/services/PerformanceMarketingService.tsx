import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sliders,
  ArrowRight
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
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
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
    "description": "Meta & Google campaigns managed to ROAS, not reach. Management baseline from ₹1,50,000 INR per month.",
    "offers": {
      "@type": "Offer",
      "price": "150000",
      "priceCurrency": "INR"
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
          "text": "We charge a transparent flat monthly retainer aligned to your spend band (₹1.5L baseline) or performance-share tiers. We do not punish scaling by taking arbitrary percentages of ad spend."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum monthly ad spend required?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our performance media management is engineered for brands spending between ₹5L to ₹1Cr+ INR per month."
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
    <div className="space-y-12 sm:space-y-16 pb-8 overflow-hidden">
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
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-teal transition-colors cursor-pointer"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. NO AUTOPILOT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#07101E] via-[#0E1E38] to-[#122B4F] text-white rounded-[28px] p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden space-y-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#5DAFFF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3.5 py-1 bg-white/10 text-teal text-xs font-mono font-bold rounded-full border border-teal/30 uppercase tracking-wider backdrop-blur-md">
              CONTINUOUS OPTIMISATION • ZERO AUTOPILOT
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
              Your campaigns should never run on autopilot<span className="text-teal">.</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100 font-medium leading-relaxed font-body">
              At JanusMAAD, we combine AI-powered optimisation with human expertise to continuously improve your campaigns across all platforms; from Google and Meta to LinkedIn, YouTube and beyond.
            </p>
          </div>

          {/* 5 Clean Value Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 relative z-10">
            {[
              {
                title: 'AI-powered optimisation',
                desc: 'to uncover patterns and opportunities'
              },
              {
                title: 'Multi-platform performance',
                desc: 'across the channels where your customers are'
              },
              {
                title: 'Regular campaign reviews',
                desc: 'no ‘set and forget’ approach'
              },
              {
                title: 'Continuous testing',
                desc: 'across audiences, creatives, messaging and landing pages'
              },
              {
                title: 'Smarter budget allocation',
                desc: 'based on what’s actually driving business result'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-teal/40 transition-all duration-300 space-y-2.5 backdrop-blur-sm ${idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-display font-bold text-base sm:text-lg text-white block">
                      {item.title}
                    </span>
                    <span className="text-xs sm:text-sm text-sky-100 font-medium leading-relaxed block">
                      {item.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 relative z-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenAudit('acquire-performance')}
              className="py-3.5 px-7 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-xs sm:text-sm hover:bg-white/95 active:scale-[0.99] transition-all shadow-lg cursor-pointer uppercase tracking-wider flex items-center gap-2 group"
            >
              <span>Get Free Live Account Audit (60 Min)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. CALCULATOR SECTION: Compact, High-Impact Section */}
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-teal text-ink py-10 sm:py-12 px-4 sm:px-8 my-4 shadow-xl">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Streamlined Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-ink text-teal text-xs font-mono font-bold rounded-full">
              <Sliders className="w-3.5 h-3.5" />
              INTERACTIVE PERFORMANCE CALCULATOR
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-ink tracking-tight">
              Estimate Your Extra Revenue & ROAS Lift
            </h2>
            <p className="text-ink/80 text-xs sm:text-sm font-medium">
              Adjust your monthly ad spend & targets to calculate projected growth.
            </p>
          </div>

          {/* Compact Dual-Panel Calculator Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-ink text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 items-stretch">
            {/* Sliders Panel */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              {/* Monthly Spend Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/80 font-medium">Monthly Ad Spend</span>
                  <span className="text-teal font-bold px-2 py-0.5 rounded bg-teal/10 border border-teal/30">
                    {formatCurrency(monthlySpend)}
                  </span>
                </div>
                <input 
                  type="range" 
                  min={50000} 
                  max={2000000} 
                  step={25000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer h-1.5 bg-white/10 rounded-lg"
                />
                {/* Quick Spend Preset Buttons */}
                <div className="flex items-center gap-1.5 pt-0.5">
                  {[100000, 250000, 500000, 1000000, 2000000].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setMonthlySpend(preset)}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all cursor-pointer ${
                        monthlySpend === preset
                          ? 'bg-teal text-ink font-bold shadow-xs'
                          : 'bg-white/5 text-white/60 hover:bg-white/15 hover:text-white'
                      }`}
                    >
                      {formatCurrency(preset)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current ROAS Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/80 font-medium">Current Blended ROAS</span>
                  <span className="text-teal font-bold px-2 py-0.5 rounded bg-teal/10 border border-teal/30">
                    {currentROAS.toFixed(1)}x
                  </span>
                </div>
                <input 
                  type="range" 
                  min={1.0} 
                  max={5.0} 
                  step={0.1}
                  value={currentROAS}
                  onChange={(e) => setCurrentROAS(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer h-1.5 bg-white/10 rounded-lg"
                />
              </div>

              {/* Target Lift Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/80 font-medium">Target ROAS Lift</span>
                  <span className="text-teal font-bold px-2 py-0.5 rounded bg-teal/10 border border-teal/30">
                    +{targetLift}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min={10} 
                  max={100} 
                  step={5}
                  value={targetLift}
                  onChange={(e) => setTargetLift(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer h-1.5 bg-white/10 rounded-lg"
                />
              </div>

              <div className="pt-1 text-[11px] text-white/50 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                <span>Estimates calculated against historical agency campaign benchmarks.</span>
              </div>
            </div>

            {/* Output Side: High-Impact Compact Metric HUD (#5DAFFF -> #1D5B9A) */}
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
                    <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">Projected ROAS</div>
                    <div className="text-2xl font-display font-extrabold text-white mt-0.5 flex items-baseline gap-1">
                      {projectedROAS}x
                      <span className="text-[10px] font-mono text-emerald-300 font-bold">+{targetLift}%</span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">Extra / Mo.</div>
                    <div className="text-2xl font-display font-extrabold text-white mt-0.5 truncate">
                      {formatCurrency(extraMonthlyRevenue)}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">12-Mo Gain</div>
                    <div className="text-2xl font-display font-extrabold text-emerald-300 mt-0.5 truncate">
                      {formatCurrency(annualGain)}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15">
                    <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">Payback Speed</div>
                    <div className="text-2xl font-display font-extrabold text-white mt-0.5">
                      {paybackDays} <span className="text-xs font-normal text-sky-100">Days</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenAudit('acquire-performance')}
                  className="w-full py-3 px-4 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-xs hover:bg-white/90 active:scale-[0.99] transition-all shadow-md cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 group"
                >
                  <span>CLAIM THIS ROAS GROWTH</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SUCCESS METRICS & CLIENT VAULT FOR PERFORMANCE MARKETING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            VERIFIED PERFORMANCE MARKETING PROOF & CLIENT WORK
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-ink">
            Top Performance Marketing Clients & Results
          </h2>
          <p className="text-mute text-xs sm:text-sm">
            Live client case studies across Meta, Google Ads, YouTube, and multi-channel scale.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="PM" />
      </div>

      {/* 4. VERIFIED TESTIMONIALS CAROUSEL */}
      <div className="border-t border-hairline pt-8">
        <TestimonialsMarquee />
      </div>
    </div>
  );
};
