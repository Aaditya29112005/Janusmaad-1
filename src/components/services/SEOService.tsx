import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Send,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  MessageCircle,
  Search,
  Zap,
  Globe,
  Bot
} from 'lucide-react';
import { gsap, ScrollTrigger } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';
import { sendAuditToWhatsApp } from '../../utils/whatsapp';
import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TestimonialsMarquee } from '../testimonials/TestimonialsMarquee';

interface SEOServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const SEOService: React.FC<SEOServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  // SEO Estimator Calculator State
  const [monthlyVisits, setMonthlyVisits] = useState(25000); // 25k monthly visits
  const [avgOrderValue, setAvgOrderValue] = useState(2500); // ₹2500 AOV
  const [trafficLift, setTrafficLift] = useState(120); // +120% traffic growth
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'SEO & AEO Audit Request',
    phone: '',
    message: '',
    optIn: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // GSAP Ref for How We Work Section
  const howWeWorkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = howWeWorkRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set('.seo-how-card', { opacity: 0, y: 30, scale: 0.97 });

      ScrollTrigger.batch('.seo-how-card', {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.09,
            duration: 0.65,
            ease: 'power3.out',
            overwrite: 'auto'
          }),
        once: true
      });
    }, el);

    return () => ctx.revert();
  }, []);

  // Calculation Logic
  const conversionRate = 0.022; // 2.2% baseline conversion
  const projectedVisits = Math.round(monthlyVisits * (1 + trafficLift / 100));
  const currentMonthlyRevenue = monthlyVisits * conversionRate * avgOrderValue;
  const projectedMonthlyRevenue = projectedVisits * conversionRate * avgOrderValue;
  const extraMonthlyRevenue = projectedMonthlyRevenue - currentMonthlyRevenue;
  const annualGain = extraMonthlyRevenue * 12;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  const handleBottomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    sendAuditToWhatsApp(formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: 'SEO & AEO Audit Request', phone: '', message: '', optIn: true });
    }, 4000);
  };

  return (
    <div className="space-y-16 py-6">
      {/* Navigation Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
        <button
          onClick={() => onNavigateCapability('receipts')}
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-violet transition-colors cursor-pointer"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. LIGHT THEME HERO SECTION (LEFT CONTENT + RIGHT INTERACTIVE SEO CALCULATOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-hairline rounded-[32px] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* LEFT COLUMN: HERO HEADLINE & PLATFORMS */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-ink leading-[0.98] tracking-tight uppercase">
                  SEARCH EVERYWHERE<br />
                  OPTIMISATION
                </h1>
              </div>

              {/* SEARCH PLATFORMS */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-violet uppercase block">
                  Search Platforms & AI Engines
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { name: 'Google Search', icon: <Search className="w-4 h-4 text-[#4285F4]" /> },
                    { name: 'YouTube SEO', icon: <Globe className="w-4 h-4 text-[#FF0000]" /> },
                    { name: 'ChatGPT / AEO', icon: <Bot className="w-4 h-4 text-[#10A37F]" /> },
                    { name: 'Perplexity AI', icon: <Zap className="w-4 h-4 text-[#7C3AED]" /> },
                    { name: 'Google Maps', icon: <Search className="w-4 h-4 text-[#34A853]" /> }
                  ].map((tech) => (
                    <div key={tech.name} className="px-2.5 py-1.5 rounded-lg border border-hairline bg-bone text-ink text-xs font-mono font-medium flex items-center gap-1.5">
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE SEO ESTIMATOR */}
            <div className="lg:col-span-6 bg-bone/70 border border-hairline p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink tracking-tight">
                  Estimate Your Organic Traffic & Revenue Lift
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                {/* Sliders Box */}
                <div className="sm:col-span-6 space-y-3.5 bg-white p-4 rounded-2xl border border-hairline shadow-2xs flex flex-col justify-center">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Monthly Organic Visits</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        {monthlyVisits.toLocaleString()}
                      </span>
                    </div>
                    <input 
                      type="range" min={5000} max={250000} step={5000}
                      value={monthlyVisits} onChange={(e) => setMonthlyVisits(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Avg Order Value (AOV)</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        ₹{avgOrderValue}
                      </span>
                    </div>
                    <input 
                      type="range" min={500} max={15000} step={250}
                      value={avgOrderValue} onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Target Traffic Lift</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        +{trafficLift}%
                      </span>
                    </div>
                    <input 
                      type="range" min={30} max={300} step={10}
                      value={trafficLift} onChange={(e) => setTrafficLift(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                  </div>
                </div>

                {/* Output Violet Card */}
                <div className="sm:col-span-6">
                  <div className="rounded-2xl p-4 bg-violet text-white shadow-md h-full flex flex-col justify-between space-y-3">
                    <div className="grid grid-cols-2 gap-2 font-mono">
                      <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">PROJECTED VISITS</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 flex items-baseline gap-1">
                          {(projectedVisits / 1000).toFixed(1)}k <span className="text-[9px] font-mono text-emerald-300 font-bold">+{trafficLift}%</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">EXTRA / MONTH</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 truncate">{formatCurrency(extraMonthlyRevenue)}</div>
                      </div>
                      <div className="col-span-2 bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">12-MO ORGANIC VALUE</div>
                        <div className="text-base font-display font-extrabold text-emerald-300 mt-0.5 truncate">{formatCurrency(annualGain)}</div>
                      </div>
                    </div>

                    <button onClick={() => onOpenAudit('acquire-seo')} className="w-full py-2.5 px-3 rounded-xl bg-white text-ink hover:bg-bone font-display font-bold text-[10px] transition-colors shadow-sm cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1 group">
                      <span>CLAIM THIS ORGANIC GROWTH</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRATEGY & DELIVERABLES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink uppercase tracking-tight text-center">
            WHAT WE DO
          </h2>
        </div>

        <div className="bg-white text-ink border border-hairline rounded-[32px] p-6 sm:p-10 space-y-8 shadow-xl relative overflow-hidden text-center">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-ink leading-[1.12] tracking-tight text-center">
              Organic Search Should Be Your Highest ROI Channel.
            </h3>
            <p className="text-mute text-sm sm:text-base leading-relaxed font-medium text-center">
              At JanusMAAD, we optimize your brand across Google Search, YouTube, ChatGPT, Perplexity, and AI Answer engines to capture high-intent buyers at zero extra ad cost.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-left">
            <div className="bg-bone text-ink rounded-3xl p-5 sm:p-6 space-y-3.5 border border-hairline shadow-2xs">
              <div className="flex items-center gap-2 text-violet font-display font-bold text-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-violet shrink-0" />
                <span>What We Deliver for SEO & AEO Campaigns</span>
              </div>
              
              <div className="space-y-2.5 text-xs sm:text-sm text-mute font-semibold">
                {[
                  { bold: 'Technical SEO & Core Web Vitals', rest: ' for sub-1-second LCP mobile performance' },
                  { bold: 'Schema.org & AEO Optimization', rest: ' so AI engines quote your brand in answers' },
                  { bold: 'High-Intent Keyword Clusters', rest: ' mapped directly to buyer conversion funnels' },
                  { bold: 'Authority Link Building', rest: ' from tier-1 industry publications and media' },
                  { bold: 'Regular Telemetry Audits', rest: ' tracking real keyword rankings and organic revenue' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet mt-2 shrink-0" />
                    <span className="text-ink leading-snug">
                      <strong className="font-bold text-ink">{item.bold}</strong>{item.rest}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW WE WORK (PROCESS BLUEPRINT) */}
      <section ref={howWeWorkRef} className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink uppercase tracking-tight text-center">
            How We Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Audit & Crawl First',
              desc: 'We audit your technical architecture, indexation bottlenecks, Core Web Vitals, and backlink profile to spot high-impact quick wins.'
            },
            {
              step: '02',
              title: 'Fix Technical Foundations',
              desc: 'We resolve schema errors, crawl budget waste, site speed friction, and mobile performance to achieve sub-1-second speed.'
            },
            {
              step: '03',
              title: 'Buyer Intent Mapping',
              desc: 'We research high-converting transactional keywords and AI search prompts where your customers are actively looking to buy.'
            },
            {
              step: '04',
              title: 'Build Content Clusters',
              desc: 'We create authoritative pillar pages and topical clusters that dominate SERPs and answer AI engine search queries.'
            },
            {
              step: '05',
              title: 'AEO & Knowledge Graph',
              desc: 'We structure JSON-LD entity markup so ChatGPT, Perplexity, and Google AI Overviews cite your brand as the primary authority.'
            },
            {
              step: '06',
              title: 'Authority & Link Scaling',
              desc: 'We earn high-grade editorial backlinks from authoritative industry publications to build domain trust and authority.'
            },
            {
              step: '07',
              title: 'Scale Organic Revenue',
              desc: 'We continuously track rankings, organic traffic quality, and conversion revenue to scale your search dominance.'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onMouseEnter={(e) => {
                if (prefersReducedMotion()) return;
                gsap.to(e.currentTarget, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' });
                const num = e.currentTarget.querySelector('.seo-step-num');
                if (num) gsap.to(num, { scale: 1.12, color: '#7C3AED', duration: 0.3, ease: 'back.out(1.7)' });
              }}
              onMouseLeave={(e) => {
                if (prefersReducedMotion()) return;
                gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
                const num = e.currentTarget.querySelector('.seo-step-num');
                if (num) gsap.to(num, { scale: 1, color: 'rgba(124, 58, 237, 0.4)', duration: 0.3, ease: 'power2.out' });
              }}
              className={`seo-how-card bg-white border border-hairline rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm transition-all duration-300 group relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                idx === 6 ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:w-full lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="seo-step-num text-4xl sm:text-5xl font-display font-black text-violet/40 transition-colors origin-left inline-block">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-bone text-mute border border-hairline">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-ink group-hover:text-violet transition-colors">
                  {item.title}
                </h3>
                <p className="text-mute text-xs sm:text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
              
              <div className="pt-4 border-t border-hairline/60 flex items-center gap-1.5 text-[11px] font-mono font-bold text-violet">
                <span className="w-1.5 h-1.5 rounded-full bg-violet" />
                <span>PHASE {item.step} EXECUTION</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR WORK (CASE STUDIES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Our Work
          </h2>
        </div>
        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="SEO" hideHeader={true} />
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="border-t border-hairline pt-8">
        <TestimonialsMarquee />
      </section>

      {/* 6. FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-[11px] font-mono font-bold tracking-widest text-violet uppercase block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'How long does SEO take to generate organic traffic and revenue?',
              a: 'Technical fixes and Core Web Vitals improvements show indexation gains within 14–30 days. Significant ranking climbs for commercial keywords and AI engine answer placements typically materialize within 60–90 days.'
            },
            {
              q: 'What is AEO (Answer Engine Optimisation)?',
              a: 'AEO is the practice of structuring your site content and Schema entity graphs so AI answer engines like ChatGPT, Perplexity, and Google AI Overviews cite and recommend your brand directly to buyers.'
            },
            {
              q: 'Do you guarantee first-page Google rankings?',
              a: 'No ethical agency guarantees exact rank positions due to search engine algorithm updates. However, we focus on high-intent buyer keywords and track organic conversion revenue as our primary metric.'
            },
            {
              q: 'How do you handle technical SEO and Core Web Vitals?',
              a: 'We audit LCP, INP, CLS, JavaScript execution times, and server response speeds to achieve sub-1.0-second mobile performance and eliminate crawl budget waste.'
            },
            {
              q: 'Do you write the content or edit our existing pages?',
              a: 'Both. We produce expert-vetted, SEO-optimized content clusters from scratch and optimize existing landing pages for higher topical authority and conversion rates.'
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white border border-hairline rounded-2xl overflow-hidden shadow-xs transition-all">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-ink hover:text-violet transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-violet shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 sm:px-6 pb-6 text-mute text-sm sm:text-base font-medium leading-relaxed border-t border-hairline/50 pt-4 animate-in fade-in duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. TALK TO US / AUDIT FORM SECTION */}
      <section id="talk-to-us" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white text-ink rounded-[32px] p-8 sm:p-12 space-y-10 shadow-xl border border-hairline relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3 text-center">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink text-center">
              Talk to Our SEO Strategists
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="bg-bone border border-violet/30 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-200">
                  <ShieldCheck className="w-12 h-12 text-violet mx-auto" />
                  <h3 className="text-xl font-display font-bold text-ink">Thank You for Reaching Out!</h3>
                  <p className="text-sm text-mute max-w-md mx-auto">
                    Your message has been submitted successfully. An SEO specialist will review your domain and reach out within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBottomSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-mute uppercase font-bold">Your Name*</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="John Doe" className="w-full px-4 py-3 bg-bone border border-hairline rounded-xl text-sm font-medium text-ink focus:outline-none focus:border-violet transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-mute uppercase font-bold">Work Email*</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="john@company.com" className="w-full px-4 py-3 bg-bone border border-hairline rounded-xl text-sm font-medium text-ink focus:outline-none focus:border-violet transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-mute uppercase font-bold">Website URL / Domain</label>
                    <input type="text" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="https://yourbrand.com" className="w-full px-4 py-3 bg-bone border border-hairline rounded-xl text-sm font-medium text-ink focus:outline-none focus:border-violet transition-colors" />
                  </div>
                  <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-violet text-white font-display font-bold rounded-xl hover:bg-violet-deep transition-colors shadow-lg cursor-pointer">
                    <span>GET FREE SEO AUDIT</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6 bg-bone p-6 sm:p-8 rounded-2xl border border-hairline">
              <h3 className="text-lg font-display font-bold text-ink">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/919818747001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] transition-colors group"
                >
                  <div className="p-2.5 bg-[#25D366] text-white rounded-lg group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <div className="text-xs text-mute">WhatsApp Us</div>
                    <div className="text-sm font-bold text-ink">+91 98187 47001</div>
                  </div>
                </a>

                <a
                  href="tel:+919818747001"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-hairline hover:border-violet/40 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-violet shrink-0" />
                  <span>+91 (987) 654-3210</span>
                </a>
                <a href="mailto:hello@janusmaad.com" className="flex items-center gap-3 text-sm font-medium text-mute hover:text-violet transition-colors">
                  <Mail className="w-4 h-4 text-violet shrink-0" />
                  <span>hello@janusmaad.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm font-medium text-mute">
                  <Clock className="w-4 h-4 text-violet shrink-0" />
                  <span>Mon-Fri: 9:00 AM - 7:00 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
