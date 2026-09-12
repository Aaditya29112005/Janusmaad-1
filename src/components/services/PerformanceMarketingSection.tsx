import React, { useState } from 'react';
import { 
  BarChart3, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles,
  Search,
  Share2,
  Code2,
  RotateCcw,
  ShieldCheck,
  Send
} from 'lucide-react';
import { Button } from '../ui/Button';
import { submitLeadForm } from '../../utils/formSubmit';

interface PerformanceMarketingSectionProps {
  onOpenAudit: (type?: string) => void;
}

export const PerformanceMarketingSection: React.FC<PerformanceMarketingSectionProps> = ({ onOpenAudit }) => {
  const [activeTab, setActiveTab] = useState<'performance' | 'seo' | 'smm' | 'build' | 'cro' | 'retention'>('performance');
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    optIn: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    await submitLeadForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      source: `Performance Marketing Section - ${activeTab}`
    });
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', phone: '', message: '', optIn: true });
    }, 4000);
  };

  return (
    <section id="acquire-performance" className="py-20 px-4 sm:px-8 bg-bone border-t border-hairline relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Navigation Tabs for Services */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 bg-white border border-hairline rounded-2xl shadow-sm max-w-4xl mx-auto">
          {[
            { id: 'performance', label: 'Performance Marketing', icon: BarChart3, badge: 'High ROAS' },
            { id: 'seo', label: 'Search Everywhere SEO', icon: Search, badge: 'Organic' },
            { id: 'smm', label: 'Social Media (SMM)', icon: Share2, badge: 'Brand' },
            { id: 'build', label: 'Build & Dev', icon: Code2, badge: 'Shopify' },
            { id: 'cro', label: 'CRO Optimisation', icon: Zap, badge: 'A/B Testing' },
            { id: 'retention', label: 'Retention Funnels', icon: RotateCcw, badge: 'LTV' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-display font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-violet text-white shadow-md scale-[1.02]'
                    : 'text-mute hover:text-ink hover:bg-bone'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal' : 'text-mute'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Performance Marketing Main View */}
        {activeTab === 'performance' && (
          <div className="space-y-20 animate-in fade-in duration-300">
            
            {/* Hero Banner for Performance Marketing */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-gradient-to-br from-white via-bone to-white border border-hairline rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-violet/5 rounded-full blur-3xl -z-0 pointer-events-none" />
              
              <div className="lg:col-span-7 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet/10 border border-violet/20 rounded-full text-xs font-mono font-bold text-violet uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-violet" />
                  <span>SERVICES PROVIDED — PERFORMANCE MARKETING</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-display font-bold text-ink leading-tight">
                  A Performance Max Strategy Built for <span className="text-violet underline decoration-teal/40">Real Conversions</span>
                </h1>

                <p className="text-mute text-base sm:text-lg leading-relaxed max-w-2xl">
                  We don’t just run ads — we build a complete performance system. Our Performance Max approach is designed to track, optimize, and scale high-quality leads across Google’s entire inventory.
                </p>

                {/* Key Bullet List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Performance Max campaign setup & optimization',
                    'Lead quality analysis & funnel optimization',
                    'Creative testing across Search, Display, YouTube & Discovery',
                    'Continuous performance monitoring & scaling'
                  ].map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                      <span className="text-sm font-medium text-ink/90">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button variant="primary" size="md" onClick={() => onOpenAudit('call')}>
                    Get Your Free Consultation
                  </Button>
                  <a
                    href="#talk-to-us"
                    className="inline-flex items-center gap-2 text-sm font-display font-bold text-violet hover:text-violet-deep transition-colors"
                  >
                    <span>Talk to Our Strategists</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div className="lg:col-span-5 relative z-10">
                <div className="bg-ink text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/10 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs font-mono uppercase text-teal font-bold">LIVE ROAS MONITOR</span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE SYSTEM
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-white/60">Blended Target ROAS</div>
                      <div className="text-4xl font-display font-bold text-white mt-0.5">4.82x</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
                      <div>
                        <div className="text-white/60">Avg Cost Per Lead</div>
                        <div className="text-lg font-bold text-teal">₹142.50</div>
                      </div>
                      <div>
                        <div className="text-white/60">Qualified Funnel Rate</div>
                        <div className="text-lg font-bold text-white">38.4%</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-white/80 space-y-1">
                    <div className="font-bold text-teal">Built on Data. Optimized for Conversions.</div>
                    <div className="text-white/60">We don’t guess. We test, track, and scale campaigns using real-time data & smart automation.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Stats Section */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <div className="text-data-label text-violet uppercase text-xs font-bold tracking-widest">
                  PERFORMANCE STATS
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">
                  Real Stories. Real Results.
                </h2>
                <p className="text-mute text-sm sm:text-base">
                  Aggregated performance across multiple campaigns, industries, and platforms.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: 'Clicks Generated', value: '120K+', delta: '+140% QoQ', desc: 'High-intent buyer traffic redirected to conversion funnels.' },
                  { label: 'Total Impressions', value: '4.8M+', delta: 'Multi-Channel', desc: 'Scale brand authority across Meta, Google & Amazon.' },
                  { label: 'Verified Conversions', value: '3.2K+', delta: 'Verified Leads', desc: 'High-converting sales, calls, and qualified enquiries.' },
                ].map((stat, i) => (
                  <div key={i} className="card-surface rounded-2xl p-6 sm:p-8 space-y-3 relative overflow-hidden group">
                    <div className="flex items-center justify-between text-xs font-mono text-mute">
                      <span>{stat.label}</span>
                      <span className="text-teal font-bold">{stat.delta}</span>
                    </div>
                    <div className="text-4xl sm:text-5xl font-display font-bold text-ink group-hover:text-violet transition-colors">
                      {stat.value}
                    </div>
                    <p className="text-xs text-mute leading-relaxed">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance-Driven Creatives & Supported Ad Platforms */}
            <div className="bg-white border border-hairline rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
              <div className="max-w-3xl space-y-3">
                <div className="text-data-label text-violet uppercase text-xs font-bold">PLATFORMS & CREATIVES</div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">
                  Performance-Driven Creatives That Convert
                </h2>
                <p className="text-mute text-sm sm:text-base leading-relaxed">
                  Having managed multiple performance campaigns across Google, Meta, and Amazon, we understand what makes users click, engage, and convert.
                </p>
              </div>

              {/* Supported Tech Platforms Grid */}
              <div className="space-y-4">
                <div className="text-xs font-mono text-mute uppercase tracking-wider font-bold">
                  Trusted Ad Technologies & Marketplaces
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {[
                    'Meta Ads (FB & IG)', 'Google Ads', 'Amazon Ads', 'Flipkart Ads', 
                    'Meesho Ads', 'Etsy Ads', 'TikTok Ads', 'YouTube Video Ads'
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="px-4 py-2.5 bg-bone border border-hairline rounded-xl text-xs font-display font-bold text-ink hover:border-violet hover:text-violet transition-all"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm font-medium text-ink">
                  Ready to test performance-driven creatives for your brand?
                </div>
                <Button variant="primary" size="md" onClick={() => onOpenAudit('call')}>
                  Let’s Talk Now →
                </Button>
              </div>
            </div>

            {/* Overview Section: Why Performance Matters */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-data-label text-violet uppercase text-xs font-bold">OVERVIEW</div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">
                  Why Performance Matters
                </h2>
                <p className="text-mute text-sm sm:text-base leading-relaxed">
                  Modern businesses need more than impressions and engagement. They need results. Performance marketing is built on data, testing, and continuous optimization — helping brands scale efficiently while keeping costs under control.
                </p>
              </div>

              <div className="lg:col-span-7 bg-bone border border-hairline rounded-2xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-display font-bold text-ink">Where Strategy Meets Execution</h3>
                <p className="text-sm text-mute leading-relaxed">
                  We started with one belief — marketing should pay for itself. That’s why we focus on performance-driven campaigns, clear reporting, and scalable systems that help businesses grow without wasting budget.
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-mono font-bold text-violet">
                  <span>• 100% Transparent Attribution</span>
                  <span>• Daily ROAS Tracking</span>
                  <span>• No Long-term Lock-ins</span>
                </div>
              </div>
            </div>

            {/* 01 to 05 Solutions We Offer Grid */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-data-label text-violet uppercase text-xs font-bold">SERVICES</div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">
                  Performance Marketing Solutions We Offer
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    num: '01',
                    title: 'Conversion Tracking & Analytics',
                    desc: 'End-to-end tracking using GA4, GTM, and offline conversion integrations for 100% clean data accuracy.'
                  },
                  {
                    num: '02',
                    title: 'Meta Ads (Facebook & Instagram)',
                    desc: 'Conversion-focused campaigns designed to generate high-intent leads, direct sales, and qualified enquiries.'
                  },
                  {
                    num: '03',
                    title: 'Creative Testing & Optimization',
                    desc: 'Continuous testing of ad creatives, copies, and formats to lower CPL and maximize blended ROAS.'
                  },
                  {
                    num: '04',
                    title: 'Amazon Ads for High-Intent Buyers',
                    desc: 'Conversion-focused Amazon advertising to increase product sales, Sponsored Products rank, and visibility.'
                  },
                  {
                    num: '05',
                    title: 'Google Ads & Performance Max',
                    desc: 'High-intent traffic across Search, Display, YouTube & Discovery — engineered specifically for revenue.'
                  },
                ].map((service, i) => (
                  <div key={i} className="card-surface rounded-2xl p-6 sm:p-8 space-y-4 group">
                    <div className="text-xs font-mono font-bold text-teal">{service.num}</div>
                    <h3 className="text-lg font-display font-bold text-ink group-hover:text-violet transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-mute leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TALK TO US / Contact Form Section */}
            <div id="talk-to-us" className="bg-ink text-white rounded-3xl p-8 sm:p-12 space-y-12 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-3">
                <div className="text-data-label text-teal uppercase text-xs font-bold tracking-widest">
                  TALK TO US
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
                  How May We Help You!
                </h2>
                <p className="text-white/70 text-sm sm:text-base">
                  Get in touch with our performance strategists for a free campaign audit and custom ROAS roadmap.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
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
                            placeholder="Performance Marketing Inquiry"
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
                            placeholder="+91 7727887117"
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
                          placeholder="Tell us about your current monthly ad spend, goals, and targets..."
                          className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors resize-none"
                        />
                      </div>

                      {/* Opt-in Checkbox */}
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
                          I would like to opt-in to receive emails about news, trends, offers, or blogs. For more information, please read our{' '}
                          <a href="#privacy" className="text-teal underline hover:text-white">Privacy Policy</a>.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal text-ink font-display font-bold rounded-xl hover:bg-emerald-400 transition-colors shadow-lg"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>

                {/* Direct Contact Info Sidebar */}
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

                    <div className="pt-2 border-t border-white/10 space-y-2">
                      <div className="text-xs font-mono text-white/60 uppercase">India Support Hub</div>
                      <div className="text-xs text-white/80 font-mono">
                        <div>🇮🇳 India: +91 98187 47001</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Tab 2: SEO View */}
        {activeTab === 'seo' && (
          <div className="card-surface rounded-3xl p-8 sm:p-12 space-y-6 animate-in fade-in duration-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet/10 text-violet rounded-full text-xs font-mono font-bold uppercase">
              <Search className="w-3.5 h-3.5" />
              <span>SEO (SEARCH EVERYWHERE OPTIMISATION)</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-ink">
              Scale Organic Search Visibility Across Google, YouTube & AI Engines
            </h2>
            <p className="text-mute text-base leading-relaxed max-w-3xl">
              Modern SEO is no longer just keywords. We optimize your entity authority across Google Search, SGE/AI Overviews, YouTube search, and LLM recommendation engines.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-bone rounded-xl border border-hairline space-y-1">
                <div className="font-bold text-ink text-sm">Entity & Technical SEO</div>
                <div className="text-xs text-mute">Schema markup, core web vitals, crawl budgets.</div>
              </div>
              <div className="p-4 bg-bone rounded-xl border border-hairline space-y-1">
                <div className="font-bold text-ink text-sm">Search Everywhere</div>
                <div className="text-xs text-mute">Google, YouTube, Reddit, ChatGPT & Perplexity visibility.</div>
              </div>
              <div className="p-4 bg-bone rounded-xl border border-hairline space-y-1">
                <div className="font-bold text-ink text-sm">High-Authority Backlinks</div>
                <div className="text-xs text-mute">Digital PR and editorial placements that build domain authority.</div>
              </div>
            </div>
            <Button variant="primary" size="md" onClick={() => onOpenAudit('seo')}>
              Request Free SEO Audit →
            </Button>
          </div>
        )}

        {/* Tab 3: SMM View */}
        {activeTab === 'smm' && (
          <div className="card-surface rounded-3xl p-8 sm:p-12 space-y-6 animate-in fade-in duration-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet/10 text-violet rounded-full text-xs font-mono font-bold uppercase">
              <Share2 className="w-3.5 h-3.5" />
              <span>SMM (SOCIAL MEDIA MARKETING)</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-ink">
              Organic & Paid Content Strategy Engineered to Build Brand Authority
            </h2>
            <p className="text-mute text-base leading-relaxed max-w-3xl">
              Turn views into customer trust. We create short-form video hooks, carousel frameworks, and targeted ad funnels across Instagram, LinkedIn, and TikTok.
            </p>
            <Button variant="primary" size="md" onClick={() => onOpenAudit('smm')}>
              Get Social Strategy →
            </Button>
          </div>
        )}

        {/* Tab 4: Build & Dev View */}
        {activeTab === 'build' && (
          <div className="card-surface rounded-3xl p-8 sm:p-12 space-y-6 animate-in fade-in duration-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet/10 text-violet rounded-full text-xs font-mono font-bold uppercase">
              <Code2 className="w-3.5 h-3.5" />
              <span>BUILD (DESIGN & DEV)</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-ink">
              High-Speed Bespoke Landing Pages & Custom Shopify Storefronts
            </h2>
            <p className="text-mute text-base leading-relaxed max-w-3xl">
              Sub-1-second load times, headless React/Next.js architectures, and ultra-high converting landing page designs built for maximum ROAS.
            </p>
            <Button variant="primary" size="md" onClick={() => onOpenAudit('build')}>
              Request Store Build Proposal →
            </Button>
          </div>
        )}

        {/* Tab 5: CRO View */}
        {activeTab === 'cro' && (
          <div className="card-surface rounded-3xl p-8 sm:p-12 space-y-6 animate-in fade-in duration-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet/10 text-violet rounded-full text-xs font-mono font-bold uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>CRO (CONVERSION RATE OPTIMISATION)</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-ink">
              Rigorous A/B Testing & Data Science to Maximize Visitor Revenue
            </h2>
            <p className="text-mute text-base leading-relaxed max-w-3xl">
              We analyze user session recordings, heatmaps, and funnel drop-offs to systematically increase your site-wide conversion rate by 20% to 50%.
            </p>
            <Button variant="primary" size="md" onClick={() => onOpenAudit('cro')}>
              Start CRO Experimentation →
            </Button>
          </div>
        )}

        {/* Tab 6: Retention View */}
        {activeTab === 'retention' && (
          <div className="card-surface rounded-3xl p-8 sm:p-12 space-y-6 animate-in fade-in duration-200">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet/10 text-violet rounded-full text-xs font-mono font-bold uppercase">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>RETENTION MARKETING</span>
            </div>
            <h2 className="text-3xl font-display font-bold text-ink">
              Automated Email, SMS & WhatsApp Funnels That Increase Customer LTV
            </h2>
            <p className="text-mute text-base leading-relaxed max-w-3xl">
              Klaviyo and Attentive architectures setup for hyper-personalised messaging, win-back flows, and VIP loyalty loops.
            </p>
            <Button variant="primary" size="md" onClick={() => onOpenAudit('retention')}>
              Audit Retention Funnels →
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};
