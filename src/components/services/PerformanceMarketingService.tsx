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
  Clock
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

  // Form State
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'Performance Marketing Audit Request', phone: '', message: '', optIn: true });
    }, 4000);
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

  return (
    <div className="space-y-16 sm:space-y-24 pb-12 overflow-hidden select-none">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Navigation Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
        <button
          onClick={() => onNavigateCapability('receipts')}
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-teal transition-colors cursor-pointer"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1 & 2. FIRST HEADING + SHORT & IMPACTFUL KNOWLEDGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#07101E] via-[#0E1E38] to-[#122B4F] text-white rounded-[28px] p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5DAFFF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

          {/* Heading */}
          <div className="space-y-4 max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/10 text-teal text-xs font-mono font-bold rounded-full border border-teal/30 uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-teal" />
              <span>PERFORMANCE MARKETING • HIGH ROAS ENGINE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight tracking-tight">
              Performance Marketing Strategy Built for <span className="text-teal underline decoration-violet/50">Real Conversions</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100/90 font-medium leading-relaxed font-body max-w-3xl">
              At JanusMAAD, we combine AI-powered optimisation with human expertise to continuously improve your campaigns across Meta, Google, LinkedIn, YouTube, and Amazon.
            </p>
          </div>

          {/* Impactful Knowledge Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 relative z-10">
            {[
              { title: 'AI-Powered Optimisation', desc: 'Real-time telemetry to spot micro-conversions, audience shifts, and scaling opportunities.' },
              { title: 'Multi-Channel Scale', desc: 'Unified media buying across Meta, Google PMax, YouTube, and Amazon Ads.' },
              { title: 'Continuous Testing', desc: 'Rigorous multivariate testing across creatives, hooks, headlines, and landing pages.' },
              { title: 'Smarter Budget Allocation', desc: 'Budget shifted dynamically to campaigns driving incremental bottom-line revenue.' },
              { title: 'Server-Side CAPI Data', desc: 'First-party tracking & Meta CAPI setups for 99.1% clean attribution accuracy.' },
              { title: 'Transparent Flat Retainers', desc: 'No arbitrary percentage penalties as you scale your monthly ad spend.' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-teal/40 transition-all duration-300 backdrop-blur-sm space-y-1.5">
                <div className="flex items-center gap-2 text-teal font-display font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-teal" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-sky-100/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-[28px] p-6 sm:p-10 border border-white/15 shadow-2xl relative overflow-hidden space-y-8">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/15 text-teal text-xs font-mono font-bold rounded-full border border-teal/30">
              <Sliders className="w-3.5 h-3.5" />
              <span>ROAS & REVENUE GROWTH CALCULATOR</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
              Estimate Your Revenue Lift & Payback Period
            </h2>
            <p className="text-white/70 text-xs sm:text-sm">
              Adjust your monthly ad spend and target lift to calculate annual projected growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders Column */}
            <div className="lg:col-span-6 space-y-6">
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
      </section>

      {/* 4. WHAT WE DO (PERFORMANCE MARKETING SERVICES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink">
            Comprehensive Performance Marketing Solutions
          </h2>
          <p className="text-mute text-sm sm:text-base">
            End-to-end media buying, creative production, tracking telemetry, and campaign scaling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: '01',
              title: 'Conversion Tracking & CAPI Telemetry',
              desc: 'GA4, GTM, and Meta CAPI server-to-server integrations ensuring 99.1% clean attribution accuracy.'
            },
            {
              num: '02',
              title: 'Meta Ads (Facebook & Instagram)',
              desc: 'High-converting creative testing, audience segmentation, and direct-response campaign scaling.'
            },
            {
              num: '03',
              title: 'Google Ads & Performance Max',
              desc: 'High-intent search, Shopping, and PMax campaigns structured for maximum contribution margin.'
            },
            {
              num: '04',
              title: 'Amazon & Marketplace Ads',
              desc: 'Sponsored Products, Sponsored Brands, and Flipkart ad management to dominate category search.'
            },
            {
              num: '05',
              title: 'Creative Testing & UGC Funnels',
              desc: 'Continuous production and testing of high-hook short-form videos, carousels, and landing pages.'
            },
            {
              num: '06',
              title: 'ROAS Audit & Account Reconstruction',
              desc: 'Granular 60-minute teardowns to eliminate wasted ad spend and fix broken tracking setups.'
            },
          ].map((service, i) => (
            <div key={i} className="card-surface rounded-2xl p-6 sm:p-8 space-y-4 group hover:border-violet/40 transition-all duration-300">
              <div className="text-xs font-mono font-bold text-teal">{service.num}</div>
              <h3 className="text-xl font-display font-bold text-ink group-hover:text-violet transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-mute leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SUCCED MATRIX (SUCCESS MATRIX METRICS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            SUCCESS MATRIX
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink">
            Verified Performance Metrics
          </h2>
          <p className="text-mute text-sm sm:text-base">
            Aggregated performance stats delivered for performance marketing clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Blended Client ROAS', value: '4.82x', delta: '+140% Lift', desc: 'Average verified return on ad spend across Meta & Google.' },
            { label: 'Verified Clicks Generated', value: '120K+', delta: '+165% Traffic', desc: 'High-intent buyer traffic redirected to client storefronts.' },
            { label: 'Multi-Channel Impressions', value: '4.8M+', delta: 'Scale Authority', desc: 'Targeted reach across Search, YouTube & Meta feeds.' },
            { label: 'Qualified Funnel Rate', value: '38.4%', delta: 'High Intent', desc: 'Conversion rate of incoming traffic into qualified leads.' },
          ].map((stat, i) => (
            <div key={i} className="card-surface rounded-2xl p-6 space-y-3 relative overflow-hidden group hover:border-violet/40 transition-all duration-300">
              <div className="flex items-center justify-between text-xs font-mono text-mute">
                <span>{stat.label}</span>
                <span className="text-teal font-bold">{stat.delta}</span>
              </div>
              <div className="text-4xl font-display font-extrabold text-ink group-hover:text-violet transition-colors">
                {stat.value}
              </div>
              <p className="text-xs text-mute leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. THE BEST PM PROJECTS WE WORK (CLIENT WORK VAULT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            THE BEST PM PROJECTS WE WORK ON
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink">
            Featured Performance Marketing Projects
          </h2>
          <p className="text-mute text-sm sm:text-base">
            Explore live performance marketing receipts, ad campaigns, and verified client scale.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="PM" />
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="border-t border-hairline pt-12">
        <TestimonialsMarquee />
      </section>

      {/* 8. CONTACT US FORM / AUDIT FORM */}
      <section id="talk-to-us" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-[28px] p-8 sm:p-12 space-y-10 shadow-2xl relative overflow-hidden">
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
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/80 uppercase">Your Name*</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
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
