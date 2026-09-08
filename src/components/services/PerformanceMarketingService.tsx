import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sliders
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


      {/* 2. NO AUTOPILOT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#07101E] via-[#0E1E38] to-[#122B4F] text-white rounded-[28px] p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden space-y-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#5DAFFF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="px-3.5 py-1 bg-white/10 text-teal text-xs font-mono font-bold rounded-full border border-teal/30 uppercase tracking-wider backdrop-blur-md">
              CONTINUOUS OPTIMISATION • ZERO AUTOPILOT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
              Your campaigns should never run on autopilot<span className="text-teal">.</span>
            </h2>

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
                desc: 'based on what’s actually driving business results'
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
