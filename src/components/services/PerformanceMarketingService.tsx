import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sliders,
  ArrowRight,
  ShieldCheck,
  Send,
  Phone,
  Mail,
  Clock,
  Zap,
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

  // Hero Form State
  const [heroForm, setHeroForm] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: '',
    optIn: true
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

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

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroForm.name || !heroForm.email || !heroForm.phone) return;
    setHeroSubmitted(true);
    setTimeout(() => {
      setHeroSubmitted(false);
      setHeroForm({ name: '', email: '', countryCode: '+91', phone: '', message: '', optIn: true });
    }, 4000);
  };

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

      {/* 1. LIGHT THEME HERO SECTION (SPLIT LAYOUT: LEFT CONTENT + RIGHT FLOATING AUDIT FORM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white text-ink rounded-[32px] p-8 sm:p-12 border border-hairline shadow-xl relative overflow-hidden">
          {/* Subtle Light Accent Background Glows */}
          <div className="absolute top-[-80px] left-[5%] w-[320px] h-[320px] bg-violet/5 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-[-80px] right-[10%] w-[300px] h-[300px] bg-teal/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* LEFT COLUMN: HERO HEADLINE & TRUSTED TECH */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet/10 border border-violet/20 rounded-full text-xs font-mono font-bold text-violet tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-violet animate-ping" />
                <span>BUILT ON DATA • OPTIMIZED FOR CONVERSIONS</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-ink leading-[1.1] tracking-tight uppercase">
                  BUILT ON DATA.<br />
                  <span className="bg-gradient-to-r from-violet via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    OPTIMIZED FOR CONVERSIONS.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-mute font-medium leading-relaxed max-w-xl font-body">
                  We don’t guess. We test, track, and scale campaigns using real-time data, conversion signals, and smart automation across Meta, Google, Amazon, and YouTube.
                </p>
              </div>

              {/* TRUSTED TECHNOLOGIES */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono font-bold tracking-widest text-violet uppercase block">
                  TRUSTED TECHNOLOGIES & PLATFORMS
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
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
                      className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-all hover:border-violet/40 hover:text-violet ${tech.bg}`}
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: FLOATING LIGHT FORM CARD */}
            <div className="lg:col-span-5">
              <div className="bg-bone text-ink rounded-3xl p-6 sm:p-8 shadow-sm border border-hairline relative">
                <div className="text-center space-y-1 mb-6">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-ink">
                    Get Your <span className="text-violet">Free Consultation</span>
                  </h3>
                  <p className="text-xs text-mute font-medium">
                    60-minute ad account teardown & custom growth roadmap
                  </p>
                </div>

                {heroSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-violet/10 text-violet rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-8 h-8 text-violet" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-ink">Request Received!</h4>
                    <p className="text-xs text-mute">
                      A senior performance strategist will contact you within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    <div>
                      <input
                        type="text"
                        required
                        value={heroForm.name}
                        onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                        placeholder="Your Full Name *"
                        className="w-full px-4 py-3 bg-white border border-hairline rounded-full text-xs text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="Work Email Address *"
                        className="w-full px-4 py-3 bg-white border border-hairline rounded-full text-xs text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors shadow-2xs"
                      />
                    </div>

                    <div className="flex gap-2">
                      <select
                        value={heroForm.countryCode}
                        onChange={(e) => setHeroForm({ ...heroForm, countryCode: e.target.value })}
                        className="w-28 px-3 py-3 bg-white border border-hairline rounded-full text-xs text-ink focus:outline-none focus:border-violet font-mono shadow-2xs"
                      >
                        <option value="+91">India +91</option>
                        <option value="+1">USA +1</option>
                        <option value="+44">UK +44</option>
                        <option value="+61">Aus +61</option>
                      </select>
                      <input
                        type="tel"
                        required
                        value={heroForm.phone}
                        onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                        placeholder="Phone Number *"
                        className="flex-1 px-4 py-3 bg-white border border-hairline rounded-full text-xs text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors shadow-2xs"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Tell us about your monthly ad spend & goals..."
                        className="w-full px-4 py-3 bg-white border border-hairline rounded-2xl text-xs text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors resize-none shadow-2xs"
                      />
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="heroOptIn"
                        checked={heroForm.optIn}
                        onChange={(e) => setHeroForm({ ...heroForm, optIn: e.target.checked })}
                        className="mt-0.5 h-3.5 w-3.5 accent-violet cursor-pointer"
                      />
                      <label htmlFor="heroOptIn" className="text-[10px] text-mute leading-tight cursor-pointer">
                        I agree to receive growth insights and audit updates.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-violet via-purple-600 to-indigo-600 text-white font-display font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-opacity shadow-md cursor-pointer flex items-center justify-center gap-2 group"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHERE STRATEGY MEETS EXECUTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-hairline rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
              WHERE STRATEGY MEETS EXECUTION
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink leading-tight">
              Marketing Should Always Pay for Itself
            </h2>
            <p className="text-mute text-base sm:text-lg leading-relaxed">
              At JanusMAAD, we focus exclusively on performance-driven campaigns, transparent tracking, and scalable media buying frameworks that help businesses scale without wasting budget.
            </p>
          </div>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {[
              { title: 'Data-First Telemetry', desc: 'GA4 & Meta CAPI server-side tracking to capture 99.1% clean conversion signals.' },
              { title: 'Continuous Testing', desc: 'Multivariate ad copy, video hook, and creative iteration to slash CPL.' },
              { title: 'Multi-Channel Buying', desc: 'Unified media buying across Search, Shopping, Meta Reels, and Amazon.' },
              { title: 'Flat Retainer Scaling', desc: 'No arbitrary ad spend percentage penalties as your monthly revenue scales.' },
            ].map((pillar, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-bone border border-hairline hover:border-violet/40 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-2 text-violet font-display font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-violet" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs text-mute leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PERFORMANCE MAX ENGINE & DELIVERABLES (LIGHT SPLIT GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-violet/10 text-violet text-xs font-mono font-bold rounded-full border border-violet/20 uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-violet" />
              <span>SERVICES PROVIDED</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink leading-tight">
              A Performance Max Strategy Built for Real Conversions
            </h2>
            <p className="text-mute text-base leading-relaxed">
              We don’t just run ads — we build a complete performance system. Our Performance Max approach is engineered to track, optimize, and scale high-quality leads across Google & Meta inventory.
            </p>
          </div>

          {/* Right Card: Deliverables Checklist (Light Mode) */}
          <div className="lg:col-span-6">
            <div className="bg-bone text-ink rounded-3xl p-8 space-y-4 shadow-sm border border-hairline">
              <h3 className="text-lg font-display font-bold text-violet flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-violet" />
                <span>What We Deliver for Performance Campaigns</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-mute font-medium">
                {[
                  'Performance Max campaign setup & continuous AI optimization',
                  'Lead quality analysis & multi-stage funnel optimization',
                  'Creative testing across Search, Display, YouTube & Discovery',
                  'Continuous performance monitoring, budget reallocation & scale'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL STORIES. REAL RESULTS. (VERIFIED METRICS + INTERACTIVE CALCULATOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white text-ink rounded-[32px] p-6 sm:p-10 border border-hairline shadow-xl space-y-8 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
              REAL STORIES • REAL RESULTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
              Verified Performance Metrics
            </h2>
            <p className="text-mute text-sm sm:text-base font-medium max-w-xl mx-auto">
              Aggregated performance across multiple campaigns, industries, and media platforms.
            </p>
          </div>

          {/* Top 3-Column Key Metrics Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-y border-hairline py-6">
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">4.82x</div>
              <div className="text-[11px] font-mono text-violet uppercase font-bold tracking-wider">BLENDED CLIENT ROAS</div>
              <p className="text-xs text-mute max-w-xs mx-auto font-medium">Verified return across Meta & Google ad spend.</p>
            </div>
            <div className="space-y-1 md:border-x border-hairline px-4">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">120K+</div>
              <div className="text-[11px] font-mono text-violet uppercase font-bold tracking-wider">VERIFIED CLICKS</div>
              <p className="text-xs text-mute max-w-xs mx-auto font-medium">High-intent buyer traffic redirected to storefronts.</p>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">4.8M+</div>
              <div className="text-[11px] font-mono text-violet uppercase font-bold tracking-wider">MULTI-CHANNEL IMPRESSIONS</div>
              <p className="text-xs text-mute max-w-xs mx-auto font-medium">Targeted brand reach across Search, YouTube & Feeds.</p>
            </div>
          </div>

          {/* INTERACTIVE CALCULATOR SECTION */}
          <div className="pt-4 space-y-6">
            {/* Pill Button & Subtitle */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-bone border border-hairline rounded-full text-xs font-mono font-bold text-ink shadow-2xs">
                <Sliders className="w-3.5 h-3.5 text-violet" />
                <span>INTERACTIVE REVENUE CALCULATOR</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-ink tracking-tight">
                Estimate Your Revenue Lift & Payback Speed
              </h3>
            </div>

            {/* OPTIMIZED COMPACT REVENUE CALCULATOR GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch pt-2">
              {/* Left Sliders Column */}
              <div className="lg:col-span-6 space-y-5 bg-bone p-6 sm:p-7 rounded-3xl border border-hairline flex flex-col justify-center">
                
                {/* Monthly Spend Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-mute font-medium">Monthly Ad Spend</span>
                    <span className="text-violet font-bold px-2.5 py-1 rounded-md bg-white border border-hairline shadow-2xs">
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
                    className="w-full accent-violet cursor-pointer h-2 bg-hairline rounded-lg"
                  />
                  <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                    {[100000, 250000, 500000, 1000000, 2000000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setMonthlySpend(preset)}
                        className={`text-[11px] font-mono px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                          monthlySpend === preset
                            ? 'bg-violet text-white font-bold shadow-xs'
                            : 'bg-white text-mute hover:text-ink border border-hairline'
                        }`}
                      >
                        {formatCurrency(preset)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Current ROAS Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-mute font-medium">Current Blended ROAS</span>
                    <span className="text-violet font-bold px-2.5 py-1 rounded-md bg-white border border-hairline shadow-2xs">
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
                    className="w-full accent-violet cursor-pointer h-2 bg-hairline rounded-lg"
                  />
                </div>

                {/* Target Lift Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-mute font-medium">Target ROAS Lift</span>
                    <span className="text-violet font-bold px-2.5 py-1 rounded-md bg-white border border-hairline shadow-2xs">
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
                    className="w-full accent-violet cursor-pointer h-2 bg-hairline rounded-lg"
                  />
                </div>
              </div>

              {/* Right Output Card Column */}
              <div className="lg:col-span-6 flex flex-col">
                <div
                  className="rounded-3xl p-6 sm:p-8 space-y-6 text-white shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
                    boxShadow: '0 20px 40px -15px rgba(124, 58, 237, 0.4), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4)'
                  }}
                >
                  <div className="grid grid-cols-2 gap-3.5 font-mono">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                      <div className="text-[10px] text-purple-100 font-semibold uppercase tracking-wider">PROJECTED ROAS</div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 flex items-baseline gap-1.5">
                        {projectedROAS}x
                        <span className="text-xs font-mono text-emerald-300 font-bold">+{targetLift}%</span>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                      <div className="text-[10px] text-purple-100 font-semibold uppercase tracking-wider">EXTRA / MONTH</div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 truncate">
                        {formatCurrency(extraMonthlyRevenue)}
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                      <div className="text-[10px] text-purple-100 font-semibold uppercase tracking-wider">12-MO GAIN</div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-300 mt-1 truncate">
                        {formatCurrency(annualGain)}
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
                      <div className="text-[10px] text-purple-100 font-semibold uppercase tracking-wider">PAYBACK</div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                        {paybackDays} <span className="text-xs font-normal text-purple-100">Days</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenAudit('acquire-performance')}
                    className="w-full py-3.5 px-6 rounded-2xl bg-white text-violet font-display font-bold text-xs hover:bg-white/95 active:scale-[0.99] transition-all shadow-md cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 group mt-auto"
                  >
                    <span>CLAIM THIS ROAS GROWTH</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALTERNATING SOLUTIONS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-violet/10 text-violet text-xs font-mono font-bold rounded-full border border-violet/20 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-violet" />
            <span>SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink">
            Performance Marketing Solutions We Offer
          </h2>
          <p className="text-mute text-sm sm:text-base">
            End-to-end media buying, creative production, tracking telemetry, and campaign scaling.
          </p>
        </div>

        {/* Alternating Solution Rows */}
        <div className="space-y-8">
          {[
            {
              num: '01',
              title: 'Conversion Tracking & Analytics',
              desc: 'GA4, GTM, and Meta CAPI server-to-server setups for 99.1% attribution accuracy across web and app funnels.',
              tag: 'TELEMETRY & ATTRIBUTION',
              reverse: false
            },
            {
              num: '02',
              title: 'Meta Ads (Facebook & Instagram)',
              desc: 'High-converting video hook creative testing, audience segmentation, and direct-response campaign scaling.',
              tag: 'PAID SOCIAL SCALE',
              reverse: true
            },
            {
              num: '03',
              title: 'Creative Testing & Optimization',
              desc: 'Continuous production and testing of high-hook short-form videos, carousels, and landing pages to reduce CPL.',
              tag: 'DIRECT RESPONSE CREATIVES',
              reverse: false
            },
            {
              num: '04',
              title: 'Amazon & Marketplace Ads',
              desc: 'Sponsored Products, Sponsored Brands, and Flipkart ad management to dominate category search rankings.',
              tag: 'MARKETPLACE DOMINANCE',
              reverse: true
            },
            {
              num: '05',
              title: 'Google Ads & Performance Max',
              desc: 'High-intent Search, Shopping, YouTube, and PMax campaigns engineered specifically for maximum contribution margin.',
              tag: 'HIGH INTENT SEARCH',
              reverse: false
            },
          ].map((sol, index) => (
            <div
              key={index}
              className={`bg-white border border-hairline rounded-3xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-violet/40 transition-all duration-300 shadow-sm ${
                sol.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`lg:col-span-7 space-y-3 ${sol.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-violet">{sol.num}</span>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 bg-violet/10 text-violet rounded-full uppercase">
                    {sol.tag}
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-display font-bold text-ink">
                  {sol.title}
                </h3>
                <p className="text-mute text-sm sm:text-base leading-relaxed">
                  {sol.desc}
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onOpenAudit('acquire-performance')}
                    className="inline-flex items-center gap-2 text-xs font-display font-bold text-violet hover:text-violet-deep transition-colors cursor-pointer group"
                  >
                    <span>Explore Solution Roadmap</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className={`lg:col-span-5 ${sol.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="bg-bone rounded-2xl p-6 border border-hairline space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between text-xs font-mono text-mute">
                    <span>JANUSMAAD BENCHMARK</span>
                    <span className="text-violet font-bold">VERIFIED</span>
                  </div>
                  <div className="text-2xl font-display font-bold text-ink">
                    {sol.title}
                  </div>
                  <p className="text-xs text-mute leading-relaxed">
                    Custom media structure engineered to maximize customer lifetime value (LTV) and lower acquisition cost.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. OUR WORK (CATEGORY METRICS EXPLORER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            OUR WORK
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-ink">
            Featured Performance Marketing Projects
          </h2>
          <p className="text-mute text-xs sm:text-sm">
            Explore live performance marketing receipts, ad campaigns, and verified client scale.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="PM" hideHeader={true} />
      </section>

      {/* 7. TESTIMONIALS (WHAT OUR CLIENTS ARE HAPPY ABOUT) */}
      <section className="border-t border-hairline pt-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-1 px-4">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            CLIENT REVIEWS
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-ink">
            What Our Clients Are Happy About
          </h2>
        </div>
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
