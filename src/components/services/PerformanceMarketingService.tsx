import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Send,
  Phone,
  Mail,
  Clock,
  Layers,
  ChevronRight
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
  const [monthlySpend, setMonthlySpend] = useState(150000); // ₹1.5L default
  const [currentROAS, setCurrentROAS] = useState(2.2); // 2.2x
  const [targetLift, setTargetLift] = useState(35); // 35% lift
  const [activeSolution, setActiveSolution] = useState(0);

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

  // Bottom Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Performance Marketing Audit Request',
    phone: '',
    message: '',
    optIn: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleBottomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Performance Marketing Audit Request', phone: '', message: '', optIn: true });
    }, 4000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12 overflow-hidden select-none">
      
      {/* Navigation Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
        <button
          onClick={() => onNavigateCapability('receipts')}
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-violet transition-colors cursor-pointer"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. LIGHT THEME HERO SECTION (LEFT CONTENT + RIGHT INTERACTIVE REVENUE CALCULATOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white text-ink rounded-[32px] p-6 sm:p-10 border border-hairline shadow-xl relative overflow-hidden">
          {/* Subtle Light Accent Background Glows */}
          <div className="absolute top-[-80px] left-[5%] w-[320px] h-[320px] bg-violet/5 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-[-80px] right-[10%] w-[300px] h-[300px] bg-teal/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* LEFT COLUMN: HERO HEADLINE & TRUSTED TECH */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-ink leading-[1.05] tracking-tight uppercase">
                  PERFORMANCE<br />
                  MARKETING
                </h1>

                <p className="text-base sm:text-lg text-mute font-medium leading-relaxed font-body">
                  Our campaigns should never run on autopilot.
                </p>
              </div>

              {/* TRUSTED TECHNOLOGIES */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-violet uppercase block">
                  TRUSTED TECHNOLOGIES & PLATFORMS
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    {
                      name: 'Meta Ads',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#1877F2"/>
                          <path d="M6 12C6 9.5 7.5 8 9.5 8C11.5 8 13 12 14 12C15 12 16.5 8 18.5 8C20.5 8 22 9.5 22 12C22 14.5 20.5 16 18.5 16C16.5 16 15 12 14 12C13 12 11.5 16 9.5 16C7.5 16 6 14.5 6 12Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Google Ads & PMax',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M21.805 10.023H12.18v3.954h5.546c-.24 1.28-.97 2.365-2.065 3.09v2.568h3.342c1.955-1.84 3.082-4.554 3.082-7.773 0-.61-.055-1.198-.28-1.839z" fill="#4285F4"/>
                          <path d="M12.18 22c2.784 0 5.117-.924 6.823-2.365l-3.342-2.568c-.924.62-2.107.987-3.481.987-2.675 0-4.941-1.805-5.75-4.232H3v2.647A10.002 10.002 0 0 0 12.18 22z" fill="#34A853"/>
                          <path d="M6.43 13.822A6.04 6.04 0 0 1 6.117 12c0-.632.109-1.247.313-1.822V7.53H3a10.002 10.002 0 0 0 0 8.94l3.43-2.648z" fill="#FBBC05"/>
                          <path d="M12.18 5.946c1.506 0 2.858.518 3.922 1.535l2.943-2.943C17.293 2.892 14.96 2 12.18 2A10.002 10.002 0 0 0 3 7.53l3.43 2.648c.809-2.427 3.075-4.232 5.75-4.232z" fill="#EA4335"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Amazon Ads',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#FF9900"/>
                          <path d="M7 15C10 17.5 14 17.5 17 15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                          <path d="M15 14.5L17 15L16.2 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 7C9.8 7 8.5 8.5 8.5 10.5C8.5 12 9.5 13 11 13C12.5 13 13.5 12 13.5 10.5V7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Flipkart Ads',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#FFD700"/>
                          <path d="M9 7H15C16 7 16.5 7.5 16.5 8.5V9.5H11V11H15.5V12.5H11V17H9V7Z" fill="#2874F0"/>
                          <path d="M7 11H9" stroke="#2874F0" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Shopify Plus',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#96BF48"/>
                          <path d="M14.5 7L13.5 16.5L11.5 17.5L8 15L8.8 7H14.5Z" fill="white"/>
                          <path d="M11.5 5.5C10.7 5.5 10 6.2 10 7H13C13 6.2 12.3 5.5 11.5 5.5Z" fill="#5E8E3E"/>
                        </svg>
                      )
                    },
                    {
                      name: 'GA4 & Meta CAPI',
                      bg: 'bg-violet/10 border-violet/20 text-violet',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#E37400"/>
                          <path d="M7 17V13M12 17V7M17 17V10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )
                    },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className={`px-3 py-1 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all hover:border-violet/40 hover:text-violet ${tech.bg}`}
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE REVENUE CALCULATOR */}
            <div className="lg:col-span-7 bg-bone/70 border border-hairline p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink tracking-tight">
                  Estimate Your Revenue Lift & Payback Speed
                </h3>
              </div>

              {/* Compact 2-Column Calculator Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                {/* Sliders Box */}
                <div className="sm:col-span-6 space-y-3.5 bg-white p-4 rounded-2xl border border-hairline shadow-2xs flex flex-col justify-center">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Monthly Ad Spend</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        {formatCurrency(monthlySpend)}
                      </span>
                    </div>
                    <input 
                      type="range" min={50000} max={2000000} step={25000}
                      value={monthlySpend} onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                    <div className="flex items-center gap-1 flex-wrap pt-0.5">
                      {[100000, 250000, 500000, 1000000].map((preset) => (
                        <button key={preset} type="button" onClick={() => setMonthlySpend(preset)}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all cursor-pointer ${
                            monthlySpend === preset ? 'bg-violet text-white font-bold shadow-2xs' : 'bg-bone text-mute hover:text-ink border border-hairline'
                          }`}
                        >
                          {formatCurrency(preset)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Current ROAS</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        {currentROAS.toFixed(1)}x
                      </span>
                    </div>
                    <input 
                      type="range" min={1.0} max={5.0} step={0.1}
                      value={currentROAS} onChange={(e) => setCurrentROAS(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Target ROAS Lift</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        +{targetLift}%
                      </span>
                    </div>
                    <input 
                      type="range" min={10} max={100} step={5}
                      value={targetLift} onChange={(e) => setTargetLift(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                  </div>
                </div>

                {/* Output Gradient Box */}
                <div className="sm:col-span-6">
                  <div className="rounded-2xl p-4 text-white shadow-lg h-full flex flex-col justify-between space-y-3" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)' }}>
                    <div className="grid grid-cols-2 gap-2 font-mono">
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/15">
                        <div className="text-[9px] text-purple-100 font-semibold uppercase">PROJECTED ROAS</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 flex items-baseline gap-1">
                          {projectedROAS}x <span className="text-[9px] font-mono text-emerald-300 font-bold">+{targetLift}%</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/15">
                        <div className="text-[9px] text-purple-100 font-semibold uppercase">EXTRA / MONTH</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 truncate">{formatCurrency(extraMonthlyRevenue)}</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/15">
                        <div className="text-[9px] text-purple-100 font-semibold uppercase">12-MO GAIN</div>
                        <div className="text-base font-display font-extrabold text-emerald-300 mt-0.5 truncate">{formatCurrency(annualGain)}</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-2 border border-white/15">
                        <div className="text-[9px] text-purple-100 font-semibold uppercase">PAYBACK</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5">{paybackDays} <span className="text-[9px] font-normal text-purple-100">Days</span></div>
                      </div>
                    </div>

                    <button onClick={() => onOpenAudit('acquire-performance')} className="w-full py-2.5 px-3 rounded-xl bg-white text-violet font-display font-bold text-[10px] hover:bg-white/95 transition-all shadow-sm cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1 group">
                      <span>CLAIM THIS ROAS GROWTH</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGY & DELIVERABLES SECTION (COMPACT & IMPACTFUL) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white text-ink border border-hairline rounded-[32px] p-6 sm:p-10 space-y-8 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-ink leading-[1.12] tracking-tight">
                Marketing Should Always Pay for Itself.
              </h2>
              <p className="text-mute text-sm sm:text-base leading-relaxed font-medium">
                At JanusMAAD, we focus exclusively on performance-driven campaigns, transparent tracking, and scalable media buying frameworks that help businesses scale without wasting budget.
              </p>
            </div>

            {/* Right Column: Key Deliverables Card */}
            <div className="lg:col-span-6">
              <div className="bg-bone text-ink rounded-3xl p-5 sm:p-6 space-y-3.5 border border-hairline shadow-2xs">
                <div className="flex items-center gap-2 text-violet font-display font-bold text-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 text-violet shrink-0" />
                  <span>What We Deliver for Performance Campaigns</span>
                </div>
                
                <div className="space-y-2.5 text-xs text-mute font-semibold">
                  {[
                    'Performance Max setup & continuous AI bidding optimization',
                    'GA4 & Meta CAPI server-to-server telemetry for 99.1% accuracy',
                    'High-hook video creative testing across Reels, YouTube & Search',
                    'Continuous lead quality monitoring & automated budget scaling'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet mt-1.5 shrink-0" />
                      <span className="text-ink leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4 Core Pillars Grid */}
          <div className="border-t border-hairline pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Data-First Telemetry', desc: 'GA4 & Meta CAPI server-side tracking for 99.1% signal accuracy.' },
                { title: 'Continuous Testing', desc: 'Multivariate ad copy, video hook, and creative variant iteration.' },
                { title: 'Multi-Channel Buying', desc: 'Unified media buying across Search, Shopping, Meta & Amazon.' },
                { title: 'Flat Retainer Scaling', desc: 'No arbitrary ad spend percentage penalties as monthly revenue scales.' },
              ].map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-bone border border-hairline hover:border-violet/40 transition-all duration-300 space-y-1.5">
                  <div className="flex items-center gap-2 text-violet font-display font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-violet" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-[11px] text-mute leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE ANIMATED SOLUTIONS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-violet/10 text-violet text-xs font-mono font-bold rounded-full border border-violet/20 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-violet" />
            <span>SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Performance Marketing Solutions We Offer
          </h2>
          <p className="text-mute text-sm sm:text-base font-medium">
            Click any solution to explore technical scope, verified metrics, and execution deliverables.
          </p>
        </div>

        {/* Dual-Pane Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Navigation Tabs (Compact list with real brand symbols & active indicator) */}
          <div className="lg:col-span-5 space-y-2.5">
            {[
              {
                num: '01',
                title: 'Conversion Tracking & Analytics',
                tag: 'TELEMETRY & ATTRIBUTION',
                desc: 'GA4, GTM & Meta CAPI server-to-server setups for 99.1% attribution accuracy.',
                benchmark: '99.1% Verified Signal Accuracy',
                highlights: ['Server-Side Meta CAPI', 'GA4 Custom E-commerce Events', 'Attribution Loss Shield'],
                icon: (
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#E37400"/>
                    <path d="M7 17V13M12 17V7M17 17V10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                num: '02',
                title: 'Meta Ads (Facebook & Instagram)',
                tag: 'PAID SOCIAL SCALE',
                desc: 'High-converting video hook creative testing and audience segmentation.',
                benchmark: '3.82x Average Campaign ROAS',
                highlights: ['UGC Video Hook Testing', 'Dynamic Advantage+ Scaling', 'Lookalike Audience Funnels'],
                icon: (
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#1877F2"/>
                    <path d="M6 12C6 9.5 7.5 8 9.5 8C11.5 8 13 12 14 12C15 12 16.5 8 18.5 8C20.5 8 22 9.5 22 12C22 14.5 20.5 16 18.5 16C16.5 16 15 12 14 12C13 12 11.5 16 9.5 16C7.5 16 6 14.5 6 12Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                num: '03',
                title: 'Creative Testing & Production',
                tag: 'DIRECT RESPONSE CREATIVES',
                desc: 'Continuous production of high-hook short-form videos, carousels & landing pages.',
                benchmark: '-38% Lower Cost Per Acquisition',
                highlights: ['High-Hook Rate Iterations', 'Short-Form Video Reels', 'Conversion Landing Pages'],
                icon: (
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#7C3AED"/>
                    <path d="M9.5 8.5L16.5 12.5L9.5 16.5V8.5Z" fill="white"/>
                  </svg>
                )
              },
              {
                num: '04',
                title: 'Amazon & Marketplace Ads',
                tag: 'MARKETPLACE DOMINANCE',
                desc: 'Sponsored Products, Sponsored Brands, and Flipkart ad management.',
                benchmark: '4.2x Marketplace ROAS',
                highlights: ['Top Search Rank Bidding', 'A+ Catalog Optimization', 'Sponsored Brand Video Ads'],
                icon: (
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <rect width="24" height="24" rx="6" fill="#FF9900"/>
                    <path d="M7 15C10 17.5 14 17.5 17 15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M15 14.5L17 15L16.2 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                num: '05',
                title: 'Google Ads & Performance Max',
                tag: 'HIGH INTENT SEARCH',
                desc: 'High-intent Search, Shopping, YouTube, and PMax campaigns.',
                benchmark: '5.1x Peak Search ROAS',
                highlights: ['PMax Asset Group Optimization', 'Negative Keyword Shields', 'Smart Bidding Rules'],
                icon: (
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M21.805 10.023H12.18v3.954h5.546c-.24 1.28-.97 2.365-2.065 3.09v2.568h3.342c1.955-1.84 3.082-4.554 3.082-7.773 0-.61-.055-1.198-.28-1.839z" fill="#4285F4"/>
                    <path d="M12.18 22c2.784 0 5.117-.924 6.823-2.365l-3.342-2.568c-.924.62-2.107.987-3.481.987-2.675 0-4.941-1.805-5.75-4.232H3v2.647A10.002 10.002 0 0 0 12.18 22z" fill="#34A853"/>
                    <path d="M6.43 13.822A6.04 6.04 0 0 1 6.117 12c0-.632.109-1.247.313-1.822V7.53H3a10.002 10.002 0 0 0 0 8.94l3.43-2.648z" fill="#FBBC05"/>
                    <path d="M12.18 5.946c1.506 0 2.858.518 3.922 1.535l2.943-2.943C17.293 2.892 14.96 2 12.18 2A10.002 10.002 0 0 0 3 7.53l3.43 2.648c.809-2.427 3.075-4.232 5.75-4.232z" fill="#EA4335"/>
                  </svg>
                )
              },
            ].map((sol, index) => {
              const isActive = activeSolution === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveSolution(index)}
                  className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isActive
                      ? 'bg-white border-violet shadow-md text-ink translate-x-1'
                      : 'bg-bone/80 hover:bg-white border-hairline hover:border-violet/40 text-mute hover:text-ink'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-colors shrink-0 ${
                        isActive
                          ? 'bg-violet text-white shadow-xs'
                          : 'bg-white border border-hairline text-violet group-hover:border-violet/40'
                      }`}
                    >
                      {sol.num}
                    </div>
                    {sol.icon}
                    <div>
                      <div className="text-[10px] font-mono font-bold text-violet uppercase tracking-wider">
                        {sol.tag}
                      </div>
                      <div className={`font-display font-bold text-xs sm:text-sm transition-colors ${
                        isActive ? 'text-ink' : 'text-mute group-hover:text-ink'
                      }`}>
                        {sol.title}
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 shrink-0 ${
                      isActive ? 'text-violet translate-x-1' : 'text-mute/40 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Showcase Card (Animated view change) */}
          <div className="lg:col-span-7">
            {(() => {
              const solList = [
                {
                  num: '01',
                  title: 'Conversion Tracking & Analytics',
                  tag: 'TELEMETRY & ATTRIBUTION',
                  desc: 'GA4, GTM, and Meta CAPI server-to-server setups engineered for 99.1% attribution accuracy across web and mobile funnels without data loss.',
                  benchmark: '99.1% Verified Signal Accuracy',
                  highlights: ['Server-Side Meta CAPI', 'GA4 E-commerce Telemetry', 'Attribution Loss Shield'],
                  icon: (
                    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#E37400"/>
                      <path d="M7 17V13M12 17V7M17 17V10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )
                },
                {
                  num: '02',
                  title: 'Meta Ads (Facebook & Instagram)',
                  tag: 'PAID SOCIAL SCALE',
                  desc: 'High-converting video hook creative testing, dynamic audience segmentation, and direct-response campaign scaling across Reels and Feeds.',
                  benchmark: '3.82x Average Campaign ROAS',
                  highlights: ['UGC Video Hook Testing', 'Dynamic Advantage+ Scaling', 'Lookalike Audience Funnels'],
                  icon: (
                    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#1877F2"/>
                      <path d="M6 12C6 9.5 7.5 8 9.5 8C11.5 8 13 12 14 12C15 12 16.5 8 18.5 8C20.5 8 22 9.5 22 12C22 14.5 20.5 16 18.5 16C16.5 16 15 12 14 12C13 12 11.5 16 9.5 16C7.5 16 6 14.5 6 12Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  num: '03',
                  title: 'Creative Testing & Production',
                  tag: 'DIRECT RESPONSE CREATIVES',
                  desc: 'Continuous production and testing of high-hook short-form videos, carousels, and high-converting landing pages to lower cost per lead.',
                  benchmark: '-38% Lower Cost Per Acquisition',
                  highlights: ['High-Hook Rate Iterations', 'Short-Form Video Reels', 'Conversion Landing Pages'],
                  icon: (
                    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#7C3AED"/>
                      <path d="M9.5 8.5L16.5 12.5L9.5 16.5V8.5Z" fill="white"/>
                    </svg>
                  )
                },
                {
                  num: '04',
                  title: 'Amazon & Marketplace Ads',
                  tag: 'MARKETPLACE DOMINANCE',
                  desc: 'Sponsored Products, Sponsored Brands, and Flipkart ad management designed to dominate top category search rankings and boost organic rank.',
                  benchmark: '4.2x Marketplace ROAS',
                  highlights: ['Top Search Rank Bidding', 'A+ Catalog Optimization', 'Sponsored Brand Video Ads'],
                  icon: (
                    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="6" fill="#FF9900"/>
                      <path d="M7 15C10 17.5 14 17.5 17 15" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                      <path d="M15 14.5L17 15L16.2 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )
                },
                {
                  num: '05',
                  title: 'Google Ads & Performance Max',
                  tag: 'HIGH INTENT SEARCH',
                  desc: 'High-intent Search, Shopping, YouTube, and PMax campaigns engineered specifically for maximum contribution margin and profit efficiency.',
                  benchmark: '5.1x Peak Search ROAS',
                  highlights: ['PMax Asset Group Tuning', 'Negative Keyword Shields', 'Smart Bidding Automation'],
                  icon: (
                    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M21.805 10.023H12.18v3.954h5.546c-.24 1.28-.97 2.365-2.065 3.09v2.568h3.342c1.955-1.84 3.082-4.554 3.082-7.773 0-.61-.055-1.198-.28-1.839z" fill="#4285F4"/>
                      <path d="M12.18 22c2.784 0 5.117-.924 6.823-2.365l-3.342-2.568c-.924.62-2.107.987-3.481.987-2.675 0-4.941-1.805-5.75-4.232H3v2.647A10.002 10.002 0 0 0 12.18 22z" fill="#34A853"/>
                      <path d="M6.43 13.822A6.04 6.04 0 0 1 6.117 12c0-.632.109-1.247.313-1.822V7.53H3a10.002 10.002 0 0 0 0 8.94l3.43-2.648z" fill="#FBBC05"/>
                      <path d="M12.18 5.946c1.506 0 2.858.518 3.922 1.535l2.943-2.943C17.293 2.892 14.96 2 12.18 2A10.002 10.002 0 0 0 3 7.53l3.43 2.648c.809-2.427 3.075-4.232 5.75-4.232z" fill="#EA4335"/>
                    </svg>
                  )
                },
              ];
              const current = solList[activeSolution];
              return (
                <div
                  key={activeSolution}
                  className="bg-white border border-hairline rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden transition-all duration-300"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-display font-extrabold text-violet">
                        {current.num}
                      </span>
                      {current.icon}
                    </div>
                    <span className="px-3.5 py-1 bg-violet/10 border border-violet/20 rounded-full text-xs font-mono font-bold text-violet uppercase tracking-wider">
                      {current.tag}
                    </span>
                  </div>

                  {/* Title & Body */}
                  <div className="space-y-2.5">
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-ink leading-tight">
                      {current.title}
                    </h3>
                    <p className="text-mute text-sm sm:text-base leading-relaxed font-medium">
                      {current.desc}
                    </p>
                  </div>

                  {/* Benchmark Box */}
                  <div className="bg-bone p-4 rounded-2xl border border-hairline flex items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono font-bold text-mute uppercase tracking-wider">JANUSMAAD BENCHMARK</div>
                      <div className="text-sm font-display font-bold text-ink">{current.benchmark}</div>
                    </div>

                  </div>

                  {/* Key Deliverables */}
                  <div className="space-y-3 pt-1">
                    <div className="text-xs font-mono font-bold text-violet uppercase tracking-wider">KEY DELIVERABLES</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {current.highlights.map((feat, i) => (
                        <div key={i} className="p-3 bg-bone border border-hairline rounded-xl text-xs font-semibold text-ink flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenAudit('acquire-performance')}
                      className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-violet via-purple-600 to-indigo-600 text-white font-display font-bold text-xs uppercase tracking-wider hover:opacity-95 active:scale-[0.99] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <span>EXPLORE {current.title.toUpperCase()} ROADMAP</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* 6. OUR WORK (CATEGORY METRICS EXPLORER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Our Work
          </h2>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="PM" hideHeader={true} />
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="border-t border-hairline pt-8">
        <TestimonialsMarquee />
      </section>

      {/* 8. TALK TO US / AUDIT FORM SECTION (LIGHT THEME) */}
      <section id="talk-to-us" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white text-ink rounded-[32px] p-8 sm:p-12 space-y-10 shadow-xl border border-hairline relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
              GET YOUR FREE AUDIT
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink">
              Talk to Our Performance Strategists
            </h2>
            <p className="text-mute text-sm sm:text-base">
              Request a 60-minute live ad account audit and custom ROAS roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="bg-bone border border-violet/30 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-200">
                  <ShieldCheck className="w-12 h-12 text-violet mx-auto" />
                  <h3 className="text-xl font-display font-bold text-ink">Thank You for Reaching Out!</h3>
                  <p className="text-sm text-mute max-w-md mx-auto">
                    Your message has been submitted successfully. A performance strategist will review your requirements and reach out within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBottomSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-mute uppercase font-bold">Your Name*</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-bone border border-hairline rounded-xl text-sm text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-mute uppercase font-bold">Your Email*</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-bone border border-hairline rounded-xl text-sm text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-mute uppercase font-bold">Subject*</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Performance Marketing Audit"
                        className="w-full px-4 py-3 bg-bone border border-hairline rounded-xl text-sm text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-mute uppercase font-bold">Your Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98187 47001"
                        className="w-full px-4 py-3 bg-bone border border-hairline rounded-xl text-sm text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-mute uppercase font-bold">Message*</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current monthly ad spend, target ROAS, and goals..."
                      className="w-full px-4 py-3 bg-bone border border-hairline rounded-xl text-sm text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="optIn"
                      name="optIn"
                      checked={formData.optIn}
                      onChange={(e) => setFormData({ ...formData, optIn: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-hairline bg-bone text-violet focus:ring-violet"
                    />
                    <label htmlFor="optIn" className="text-xs text-mute leading-relaxed cursor-pointer font-medium">
                      I would like to opt-in to receive news and strategic insights. Read our{' '}
                      <a href="#privacy" className="text-violet underline hover:text-violet-deep">Privacy Policy</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-violet text-white font-display font-bold rounded-xl hover:bg-violet-deep transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Send Audit Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Sidebar (Light Mode) */}
            <div className="lg:col-span-5 space-y-6 bg-bone border border-hairline rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-display font-bold text-ink">Direct Contact</h3>

              <div className="space-y-4">
                <a
                  href="tel:+919818747001"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-hairline hover:border-violet/40 transition-colors group"
                >
                  <div className="p-2.5 bg-violet/10 text-violet rounded-lg group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-mute">Call Now</div>
                    <div className="text-sm font-bold text-ink">+91 98187 47001</div>
                  </div>
                </a>

                <a
                  href="mailto:hello@janusmaad.com"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-hairline hover:border-violet/40 transition-colors group"
                >
                  <div className="p-2.5 bg-violet/10 text-violet rounded-lg group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-mute">Email Us</div>
                    <div className="text-sm font-bold text-ink">hello@janusmaad.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-hairline">
                  <div className="p-2.5 bg-violet/10 text-violet rounded-lg">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-mute">Working Hours</div>
                    <div className="text-sm font-bold text-ink">Monday – Saturday: 9am – 8pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
