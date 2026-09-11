import React, { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Send,
  Phone,
  Mail,
  Clock,
  ChevronDown
} from 'lucide-react';
import { gsap, ScrollTrigger } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';

import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TestimonialsMarquee } from '../testimonials/TestimonialsMarquee';

interface RetentionMarketingServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const RetentionMarketingService: React.FC<RetentionMarketingServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  // Retention Estimator State
  const [monthlyOrders, setMonthlyOrders] = useState(3000); // 3k orders/mo
  const [repeatRate, setRepeatRate] = useState(18); // 18% current repeat rate
  const [averageOrderValue, setAverageOrderValue] = useState(3200); // ₹3,200 AOV
  const [targetLift, setTargetLift] = useState(35); // 35% lift on repeat rate
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // GSAP Ref for How We Work Section
  const howWeWorkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = howWeWorkRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set('.retention-how-card', { opacity: 0, y: 30, scale: 0.97 });

      ScrollTrigger.batch('.retention-how-card', {
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

  // Calculation Logic for Retention
  const projectedRepeatRate = Number((repeatRate * (1 + targetLift / 100)).toFixed(1));
  const incrementalRepeatOrders = Math.round(monthlyOrders * ((projectedRepeatRate - repeatRate) / 100));
  const extraMonthlyRevenue = incrementalRepeatOrders * averageOrderValue;
  const annualGain = extraMonthlyRevenue * 12;

  const formatNumber = (val: number) => {
    if (val >= 10000000) return `${(val / 10000000).toFixed(2)}Cr`;
    if (val >= 100000) return `${(val / 100000).toFixed(1)}L`;
    if (val >= 1000) return `${(val / 1000).toFixed(1)}k`;
    return `${Math.round(val).toLocaleString('en-IN')}`;
  };

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  // Bottom Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Retention & Email/SMS Lifecycle Audit',
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
      setFormData({ name: '', email: '', subject: 'Retention & Email/SMS Lifecycle Audit', phone: '', message: '', optIn: true });
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

      {/* 1. LIGHT THEME HERO SECTION (LEFT CONTENT + RIGHT INTERACTIVE RETENTION CALCULATOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-hairline rounded-[32px] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* LEFT COLUMN: HERO HEADLINE & TRUSTED TECH */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-ink leading-[0.98] tracking-tight uppercase">
                  RETENTION<br />
                  MARKETING
                </h1>
              </div>

              {/* TRUSTED STACK */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-violet uppercase block">
                  Automated Lifecycle & LTV Engines
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    {
                      name: 'Klaviyo',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#000000"/>
                          <path d="M6 6h12v12H6z" fill="#FFF"/>
                        </svg>
                      )
                    },
                    {
                      name: 'WhatsApp Business API',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#25D366"/>
                          <path d="M17.5 14.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.6-.4z" fill="white"/>
                        </svg>
                      )
                    },
                    {
                      name: 'SMS Flow Automation',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#7C3AED"/>
                          <path d="M8 10h8M8 14h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )
                    },
                    {
                      name: 'RFM Predictive Analytics',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M4 19h16M4 15l4-5 4 3 5-7 3 3" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )
                    }
                  ].map((tech) => (
                    <div key={tech.name} className={`px-2.5 py-1.5 rounded-lg border text-xs font-mono font-medium flex items-center gap-1.5 ${tech.bg}`}>
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE RETENTION CALCULATOR */}
            <div className="lg:col-span-6 bg-bone/70 border border-hairline p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink tracking-tight">
                  Estimate Your Repeat Revenue & LTV Lift
                </h3>
              </div>

              {/* Compact 2-Column Calculator Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                {/* Sliders Box */}
                <div className="sm:col-span-6 space-y-3.5 bg-white p-4 rounded-2xl border border-hairline shadow-2xs flex flex-col justify-center">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Monthly Orders</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        {formatNumber(monthlyOrders)}
                      </span>
                    </div>
                    <input 
                      type="range" min={500} max={25000} step={250}
                      value={monthlyOrders} onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                    <div className="flex items-center gap-1 flex-wrap pt-0.5">
                      {[1000, 3000, 5000, 10000].map((preset) => (
                        <button key={preset} type="button" onClick={() => setMonthlyOrders(preset)}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all cursor-pointer ${
                            monthlyOrders === preset ? 'bg-violet text-white font-bold shadow-2xs' : 'bg-bone text-mute hover:text-ink border border-hairline'
                          }`}
                        >
                          {formatNumber(preset)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Current Repeat Rate</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        {repeatRate.toFixed(1)}%
                      </span>
                    </div>
                    <input 
                      type="range" min={5} max={45} step={1}
                      value={repeatRate} onChange={(e) => setRepeatRate(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Average Order Value (AOV)</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        {formatCurrency(averageOrderValue)}
                      </span>
                    </div>
                    <input 
                      type="range" min={1000} max={15000} step={500}
                      value={averageOrderValue} onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Target Repeat Lift</span>
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

                {/* Output Violet Card */}
                <div className="sm:col-span-6">
                  <div className="rounded-2xl p-4 bg-violet text-white shadow-md h-full flex flex-col justify-between space-y-3">
                    <div className="grid grid-cols-2 gap-2 font-mono">
                      <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">PROJECTED REPEAT RATE</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 flex items-baseline gap-1">
                          {projectedRepeatRate}% <span className="text-[9px] font-mono text-emerald-300 font-bold">+{targetLift}%</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">EXTRA REVENUE / MO</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 truncate">{formatCurrency(extraMonthlyRevenue)}</div>
                      </div>
                      <div className="col-span-2 bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">12-MO REPEAT REVENUE GAIN</div>
                        <div className="text-base font-display font-extrabold text-emerald-300 mt-0.5 truncate">{formatCurrency(annualGain)}</div>
                      </div>
                    </div>

                    <button onClick={() => onOpenAudit('retain-marketing')} className="w-full py-2.5 px-3 rounded-xl bg-white text-ink hover:bg-bone font-display font-bold text-[10px] transition-colors shadow-sm cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1 group">
                      <span>CLAIM RETENTION REVENUE LIFT</span>
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
        {/* Centered Heading OUTSIDE Top of Box */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink uppercase tracking-tight text-center">
            WHAT WE DO
          </h2>
        </div>

        <div className="bg-white text-ink border border-hairline rounded-[32px] p-6 sm:p-10 space-y-8 shadow-xl relative overflow-hidden text-center">
          
          {/* Centered inside Box */}
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-ink leading-[1.12] tracking-tight text-center">
              Automated Flows That Multiply Customer Lifetime Value.
            </h3>
            <p className="text-mute text-sm sm:text-base leading-relaxed font-medium text-center">
              At JanusMAAD, we design and automate multi-channel Email, SMS, and WhatsApp lifecycle flows that turn one-time buyers into loyal brand advocates and maximize repeat purchase frequency.
            </p>
          </div>

          {/* Key Deliverables Card Below */}
          <div className="max-w-3xl mx-auto text-left">
            <div className="bg-bone text-ink rounded-3xl p-5 sm:p-6 space-y-3.5 border border-hairline shadow-2xs">
              <div className="flex items-center gap-2 text-violet font-display font-bold text-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-violet shrink-0" />
                <span>What We Deliver for Retention & Lifecycle Marketing</span>
              </div>
              
              <div className="space-y-2.5 text-xs sm:text-sm text-mute font-semibold">
                {[
                  { bold: 'Automated Klaviyo & SMS flows', rest: ' including Welcome Series, Abandoned Cart, and Win-backs' },
                  { bold: 'WhatsApp Business API automations', rest: ' for instant order recovery and VIP drops' },
                  { bold: 'Predictive RFM customer segmentation', rest: ' targeting high-value buyers at key repeat windows' },
                  { bold: 'Bespoke email template design & copywriting', rest: ' reflecting your brand voice' },
                  { bold: 'Deliverability & primary inbox monitoring', rest: ' maintaining 99%+ email inbox placement' },
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
              title: 'Lifecycle & Deliverability Audit',
              desc: 'We audit your existing email flows, open rates, inbox deliverability scores, and subscriber list health.'
            },
            {
              step: '02',
              title: 'RFM Customer Segmentation',
              desc: 'We segment your customer database based on Recency, Frequency, and Monetary value to identify VIPs and churn risks.'
            },
            {
              step: '03',
              title: 'Build Core Automated Flows',
              desc: 'We construct high-converting Welcome, Abandoned Checkout, Post-Purchase, and Win-back flow sequences in Klaviyo.'
            },
            {
              step: '04',
              title: 'WhatsApp & SMS Integration',
              desc: 'We layer high-open-rate WhatsApp and SMS reminders into abandoned checkout and delivery update triggers.'
            },
            {
              step: '05',
              title: 'Weekly Campaign Broadcasts',
              desc: 'We design and write engaging weekly email & SMS campaigns aligned with product launches, sales, and educational content.'
            },
            {
              step: '06',
              title: 'A/B Testing Subject Lines & Visuals',
              desc: 'We test email subject lines, preview text, SMS send timings, and CTA designs to continuously push open and click rates higher.'
            },
            {
              step: '07',
              title: 'Scale LTV & Repeat Purchase Rate',
              desc: 'We monitor repeat purchase cohorts monthly, optimizing retention flows to compound long-term customer lifetime value.'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onMouseEnter={(e) => {
                if (prefersReducedMotion()) return;
                gsap.to(e.currentTarget, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' });
                const num = e.currentTarget.querySelector('.retention-step-num');
                if (num) gsap.to(num, { scale: 1.12, color: '#7C3AED', duration: 0.3, ease: 'back.out(1.7)' });
              }}
              onMouseLeave={(e) => {
                if (prefersReducedMotion()) return;
                gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
                const num = e.currentTarget.querySelector('.retention-step-num');
                if (num) gsap.to(num, { scale: 1, color: 'rgba(124, 58, 237, 0.4)', duration: 0.3, ease: 'power2.out' });
              }}
              className={`retention-how-card bg-white border border-hairline rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm transition-all duration-300 group relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                idx === 6 ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:w-full lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="retention-step-num text-4xl sm:text-5xl font-display font-black text-violet/40 transition-colors origin-left inline-block">
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

      {/* 4. OUR WORK (CATEGORY METRICS EXPLORER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Our Work
          </h2>
        </div>

        <CategoryMetricsExplorer 
          onOpenAudit={onOpenAudit} 
          initialService="RETENTION" 
          hideHeader={true} 
          customClientOrder={[
            'shagun-sweets',
            'kicky-and-perky',
            'radboards',
            'rudrasetu',
            'paperbark-camp',
            'soiree-club'
          ]}
        />
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
              q: 'Which platforms do you use for Email, SMS, and WhatsApp automation?',
              a: 'We are certified Klaviyo agency partners and integrate WhatsApp Business API (Wati, Interakt, AISensy) alongside SMS platforms (Attentive, Postscript, SMSBump) for unified cross-channel lifecycle messaging.'
            },
            {
              q: 'How fast can we launch new automated email and SMS flows?',
              a: 'Core lifecycle flows (Welcome, Abandoned Cart, Browse Abandonment, Post-Purchase) take 7–10 business days to design, copywrite, setup, and launch.'
            },
            {
              q: 'How do you prevent emails from going into the Spam or Promotions tab?',
              a: 'We implement SPF, DKIM, and DMARC domain authentication, perform list cleaning to clear unengaged contacts, and enforce strict email template text-to-image ratios to guarantee 99%+ primary inbox deliverability.'
            },
            {
              q: 'Why should we add WhatsApp to our retention stack?',
              a: 'WhatsApp boasts 98%+ open rates and 45%+ click-through rates. Adding automated WhatsApp checkout reminders and VIP drop notifications dramatically lifts instant recovery revenue.'
            },
            {
              q: 'How do you measure retention marketing success?',
              a: 'We track percentage of total revenue generated by owned channels (email/SMS/WhatsApp), repeat purchase rate, customer lifetime value (LTV) over 30/60/90 days, and flow-driven conversion rate.'
            },
            {
              q: 'Do you create the email graphics and write the copy?',
              a: 'Yes. Our team handles 100% of the copywriting, custom graphic design, HTML template coding, segment creation, and flow logic setup.'
            }
          ].map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white border border-hairline rounded-2xl overflow-hidden shadow-xs transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-ink hover:text-violet transition-colors cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-violet shrink-0 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180' : ''
                  }`} 
                />
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
              Talk to Our Retention & Lifecycle Strategists
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="bg-bone border border-violet/30 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-200">
                  <ShieldCheck className="w-12 h-12 text-violet mx-auto" />
                  <h3 className="text-xl font-display font-bold text-ink">Thank You for Reaching Out!</h3>
                  <p className="text-sm text-mute max-w-md mx-auto">
                    Your request has been submitted successfully. A retention marketing specialist will audit your email/SMS flows and reach out within 2 hours.
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
                        placeholder="Retention & Email Audit"
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
                      placeholder="Tell us about your current monthly orders, email platform (Klaviyo, etc.), and retention goals..."
                      className="w-full px-4 py-3 bg-bone border border-hairline rounded-xl text-sm text-ink placeholder:text-mute focus:outline-none focus:border-violet transition-colors resize-none"
                    />
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

            {/* Direct Contact Sidebar */}
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
