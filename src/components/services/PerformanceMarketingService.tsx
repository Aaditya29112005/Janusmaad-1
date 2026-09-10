import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sliders,
  ArrowRight,
  Sparkles,
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

      {/* 1. HERO SECTION (TECKEY-INSPIRED SPLIT LAYOUT: LEFT CONTENT + RIGHT FLOATING AUDIT FORM) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-[32px] p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glowing Orbs */}
          <div className="absolute top-[-100px] left-[10%] w-[350px] h-[350px] bg-violet/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-80px] right-[15%] w-[300px] h-[300px] bg-teal/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* LEFT COLUMN: HERO HEADLINE & TRUSTED TECH */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet/20 border border-violet/40 rounded-full text-xs font-mono font-bold text-teal tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-teal animate-ping" />
                <span>BUILT ON DATA • OPTIMIZED FOR CONVERSIONS</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.1] tracking-tight uppercase">
                  BUILT ON DATA.<br />
                  <span className="bg-gradient-to-r from-teal via-emerald-300 to-sky-300 bg-clip-text text-transparent">
                    OPTIMIZED FOR CONVERSIONS.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-sky-100/80 font-medium leading-relaxed max-w-xl">
                  We don’t guess. We test, track, and scale campaigns using real-time data, conversion signals, and smart automation across Meta, Google, Amazon, and YouTube.
                </p>
              </div>

              {/* TRUSTED TECHNOLOGIES */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono font-bold tracking-widest text-white/50 uppercase block">
                  TRUSTED TECHNOLOGIES & PLATFORMS
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  {[
                    { name: 'Meta Ads', bg: 'bg-[#1877F2]/20 border-[#1877F2]/40 text-blue-200' },
                    { name: 'Google Ads & PMax', bg: 'bg-[#4285F4]/20 border-[#4285F4]/40 text-sky-200' },
                    { name: 'Amazon Ads', bg: 'bg-[#FF9900]/20 border-[#FF9900]/40 text-amber-200' },
                    { name: 'Flipkart Ads', bg: 'bg-[#2874F0]/20 border-[#2874F0]/40 text-blue-300' },
                    { name: 'Shopify Plus', bg: 'bg-[#96BF48]/20 border-[#96BF48]/40 text-lime-200' },
                    { name: 'GA4 & Meta CAPI', bg: 'bg-teal/20 border-teal/40 text-teal' },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className={`px-3.5 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 transition-transform hover:-translate-y-0.5 ${tech.bg}`}
                    >
                      <Sparkles className="w-3 h-3 shrink-0" />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: FLOATING FORM CARD */}
            <div className="lg:col-span-5">
              <div className="bg-white text-ink rounded-3xl p-6 sm:p-8 shadow-2xl border border-hairline relative">
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
                    <div className="w-14 h-14 bg-teal/15 text-teal rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-8 h-8 text-teal" />
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
                        className="w-full px-4 py-3 bg-bone border border-hairline rounded-full text-xs text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        value={heroForm.email}
                        onChange={(e) => setHeroForm({ ...heroForm, email: e.target.value })}
                        placeholder="Work Email Address *"
                        className="w-full px-4 py-3 bg-bone border border-hairline rounded-full text-xs text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors"
                      />
                    </div>

                    <div className="flex gap-2">
                      <select
                        value={heroForm.countryCode}
                        onChange={(e) => setHeroForm({ ...heroForm, countryCode: e.target.value })}
                        className="w-28 px-3 py-3 bg-bone border border-hairline rounded-full text-xs text-ink focus:outline-none focus:border-violet font-mono"
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
                        className="flex-1 px-4 py-3 bg-bone border border-hairline rounded-full text-xs text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        value={heroForm.message}
                        onChange={(e) => setHeroForm({ ...heroForm, message: e.target.value })}
                        placeholder="Tell us about your monthly ad spend & goals..."
                        className="w-full px-4 py-3 bg-bone border border-hairline rounded-2xl text-xs text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors resize-none"
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

      {/* 2. WHERE STRATEGY MEETS EXECUTION SECTION (TECKEY-STYLE SPLIT WITH LEAN OVERVIEW) */}
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

      {/* 3. PERFORMANCE MAX ENGINE & DELIVERABLES (SPLIT GRID) */}
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

          {/* Right Card: Deliverables Checklist */}
          <div className="lg:col-span-6">
            <div className="bg-ink text-white rounded-3xl p-8 space-y-4 shadow-xl border border-white/15">
              <h3 className="text-lg font-display font-bold text-teal flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-teal" />
                <span>What We Deliver for Performance Campaigns</span>
              </h3>
              <ul className="space-y-3.5 text-sm text-sky-100/90 font-medium">
                {[
                  'Performance Max campaign setup & continuous AI optimization',
                  'Lead quality analysis & multi-stage funnel optimization',
                  'Creative testing across Search, Display, YouTube & Discovery',
                  'Continuous performance monitoring, budget reallocation & scale'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. REAL STORIES. REAL RESULTS. (METRICS + CALCULATOR + PLATFORMS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#07101E] via-[#0E1E38] to-[#122B4F] text-white rounded-[32px] p-8 sm:p-12 border border-white/15 shadow-2xl space-y-12 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
              REAL STORIES • REAL RESULTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Verified Performance Metrics
            </h2>
            <p className="text-sky-100/80 text-sm sm:text-base">
              Aggregated performance across multiple campaigns, industries, and media platforms.
            </p>
          </div>

          {/* Top 3-Column Key Metrics Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-y border-white/10 py-8">
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white">4.82x</div>
              <div className="text-xs font-mono text-teal uppercase font-bold">Blended Client ROAS</div>
              <p className="text-[11px] text-sky-100/60 max-w-xs mx-auto">Verified return across Meta & Google ad spend.</p>
            </div>
            <div className="space-y-1 md:border-x border-white/10">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white">120K+</div>
              <div className="text-xs font-mono text-teal uppercase font-bold">Verified Clicks</div>
              <p className="text-[11px] text-sky-100/60 max-w-xs mx-auto">High-intent buyer traffic redirected to storefronts.</p>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-display font-extrabold text-white">4.8M+</div>
              <div className="text-xs font-mono text-teal uppercase font-bold">Multi-Channel Impressions</div>
              <p className="text-[11px] text-sky-100/60 max-w-xs mx-auto">Targeted brand reach across Search, YouTube & Feeds.</p>
            </div>
          </div>

          {/* Content Split: ROAS Calculator HUD Inside Result Card */}
          <div className="space-y-8">
            <div className="space-y-2 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/15 text-teal text-xs font-mono font-bold rounded-full border border-teal/30">
                <Sliders className="w-3.5 h-3.5" />
                <span>INTERACTIVE REVENUE CALCULATOR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Estimate Your Revenue Lift & Payback Speed
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Column */}
              <div className="lg:col-span-6 space-y-6 bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10">
                {/* Monthly Spend */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-white/80 font-medium">Monthly Ad Spend</span>
                    <span className="text-teal font-bold px-2.5 py-1 rounded bg-teal/10 border border-teal/30">
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
                    className="w-full accent-teal cursor-pointer h-2 bg-white/10 rounded-lg"
                  />
                  <div className="flex items-center gap-2 pt-1 flex-wrap">
                    {[100000, 250000, 500000, 1000000, 2000000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setMonthlySpend(preset)}
                        className={`text-xs font-mono px-2.5 py-1 rounded transition-all cursor-pointer ${
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

                {/* Current ROAS */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-white/80 font-medium">Current Blended ROAS</span>
                    <span className="text-teal font-bold px-2.5 py-1 rounded bg-teal/10 border border-teal/30">
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
                    className="w-full accent-teal cursor-pointer h-2 bg-white/10 rounded-lg"
                  />
                </div>

                {/* Target Lift */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-white/80 font-medium">Target ROAS Lift</span>
                    <span className="text-teal font-bold px-2.5 py-1 rounded bg-teal/10 border border-teal/30">
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
                    className="w-full accent-teal cursor-pointer h-2 bg-white/10 rounded-lg"
                  />
                </div>
              </div>

              {/* Output HUD Card */}
              <div className="lg:col-span-6">
                <div
                  className="rounded-2xl p-6 sm:p-8 space-y-6 text-white shadow-2xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                    boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.35), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 font-mono">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                      <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">Projected ROAS</div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 flex items-baseline gap-1">
                        {projectedROAS}x
                        <span className="text-xs font-mono text-emerald-300 font-bold">+{targetLift}%</span>
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                      <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">Extra / Month</div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 truncate">
                        {formatCurrency(extraMonthlyRevenue)}
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                      <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">12-Mo Gain</div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-300 mt-1 truncate">
                        {formatCurrency(annualGain)}
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15">
                      <div className="text-[10px] text-sky-100 font-medium uppercase tracking-wider">Payback Speed</div>
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
                        {paybackDays} <span className="text-xs font-normal text-sky-100">Days</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenAudit('acquire-performance')}
                    className="w-full py-3.5 px-6 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-xs sm:text-sm hover:bg-white/95 active:scale-[0.99] transition-all shadow-md cursor-pointer uppercase tracking-wider flex items-center justify-center gap-2 group"
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

      {/* 5. ALTERNATING SOLUTIONS SHOWCASE (INF-SOLUTIONS TECKEY LAYOUT) */}
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
                    <span className="text-teal font-bold">VERIFIED</span>
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

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="PM" />
      </section>

      {/* 7. TESTIMONIALS (WHAT OUR CLIENTS ARE HAPPY ABOUT) */}
      <section className="border-t border-hairline pt-12 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-1 px-4">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            CLIENT REVIEWS
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-ink">
            What Our Clients Are Happy About
          </h2>
        </div>
        <TestimonialsMarquee />
      </section>

      {/* 8. TALK TO US / AUDIT FORM SECTION */}
      <section id="talk-to-us" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-[32px] p-8 sm:p-12 space-y-10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
              GET YOUR FREE AUDIT
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
              Talk to Our Performance Strategists
            </h2>
            <p className="text-white/70 text-sm sm:text-base">
              Request a 60-minute live ad account audit and custom ROAS roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="bg-white/10 border border-teal/40 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-200">
                  <ShieldCheck className="w-12 h-12 text-teal mx-auto" />
                  <h3 className="text-xl font-display font-bold text-white">Thank You for Reaching Out!</h3>
                  <p className="text-sm text-white/80 max-w-md mx-auto">
                    Your message has been submitted successfully. A performance strategist will review your requirements and reach out within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBottomSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/80 uppercase">Your Name*</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/80 uppercase">Your Email*</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/80 uppercase">Subject*</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Performance Marketing Audit"
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/80 uppercase">Your Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98187 47001"
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/80 uppercase">Message*</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your current monthly ad spend, target ROAS, and goals..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="optIn"
                      name="optIn"
                      checked={formData.optIn}
                      onChange={(e) => setFormData({ ...formData, optIn: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-teal focus:ring-teal"
                    />
                    <label htmlFor="optIn" className="text-xs text-white/70 leading-relaxed cursor-pointer">
                      I would like to opt-in to receive news and strategic insights. Read our{' '}
                      <a href="#privacy" className="text-teal underline hover:text-white">Privacy Policy</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal text-ink font-display font-bold rounded-xl hover:bg-emerald-400 transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Send Audit Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Sidebar */}
            <div className="lg:col-span-5 space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-display font-bold text-white">Direct Contact</h3>

              <div className="space-y-4">
                <a
                  href="tel:+919818747001"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-2.5 bg-teal/20 text-teal rounded-lg group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Call Now</div>
                    <div className="text-sm font-bold text-white">+91 98187 47001</div>
                  </div>
                </a>

                <a
                  href="mailto:hello@janusmaad.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-2.5 bg-teal/20 text-teal rounded-lg group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Email Us</div>
                    <div className="text-sm font-bold text-white">hello@janusmaad.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5">
                  <div className="p-2.5 bg-teal/20 text-teal rounded-lg">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Working Hours</div>
                    <div className="text-sm font-bold text-white">Monday – Saturday: 9am – 8pm</div>
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
