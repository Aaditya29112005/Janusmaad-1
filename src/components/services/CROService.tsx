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

interface CROServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const CROService: React.FC<CROServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  // CRO Estimator State
  const [monthlyTraffic, setMonthlyTraffic] = useState(100000); // 100k visitors default
  const [currentConversion, setCurrentConversion] = useState(1.8); // 1.8% conversion rate
  const [targetLift, setTargetLift] = useState(25); // 25% lift
  const [averageOrderValue, setAverageOrderValue] = useState(2500); // ₹2,500 AOV
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // GSAP Ref for How We Work Section
  const howWeWorkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = howWeWorkRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set('.cro-how-card', { opacity: 0, y: 30, scale: 0.97 });

      ScrollTrigger.batch('.cro-how-card', {
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

  // Calculation Logic for CRO
  const projectedConversion = Number((currentConversion * (1 + targetLift / 100)).toFixed(2));
  const currentOrders = Math.round(monthlyTraffic * (currentConversion / 100));
  const projectedOrders = Math.round(monthlyTraffic * (projectedConversion / 100));
  const extraMonthlyOrders = projectedOrders - currentOrders;
  const extraMonthlyRevenue = extraMonthlyOrders * averageOrderValue;
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
    subject: 'CRO & Revenue-Per-Visitor Audit Request',
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
      setFormData({ name: '', email: '', subject: 'CRO & Revenue-Per-Visitor Audit Request', phone: '', message: '', optIn: true });
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

      {/* 1. LIGHT THEME HERO SECTION (LEFT CONTENT + RIGHT INTERACTIVE CRO CALCULATOR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white border border-hairline rounded-[32px] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* LEFT COLUMN: HERO HEADLINE & TRUSTED TECH */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-ink leading-[0.98] tracking-tight uppercase">
                  CONVERSION RATE<br />
                  OPTIMISATION
                </h1>
              </div>

              {/* TRUSTED STACK */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-violet uppercase block">
                  A/B Testing & Revenue-Per-Visitor Science
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    {
                      name: 'VWO',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#1D4ED8"/>
                          <path d="M7 17l5-10 5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Microsoft Clarity',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#0078D4"/>
                          <path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0z" fill="white"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Hotjar Science',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#FD3A4A"/>
                          <path d="M12 6c-3 0-5 2-5 5s2 7 5 7 5-2 5-7-2-5-5-5z" fill="white"/>
                        </svg>
                      )
                    },
                    {
                      name: '95%+ Confidence',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#10B981"/>
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

            {/* RIGHT COLUMN: INTERACTIVE CRO REVENUE CALCULATOR */}
            <div className="lg:col-span-6 bg-bone/70 border border-hairline p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink tracking-tight">
                  Estimate Your CRO Revenue Lift
                </h3>
              </div>

              {/* Compact 2-Column Calculator Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-stretch">
                {/* Sliders Box */}
                <div className="sm:col-span-6 space-y-3.5 bg-white p-4 rounded-2xl border border-hairline shadow-2xs flex flex-col justify-center">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Monthly Visitors</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        {formatNumber(monthlyTraffic)}
                      </span>
                    </div>
                    <input 
                      type="range" min={20000} max={500000} step={10000}
                      value={monthlyTraffic} onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                    <div className="flex items-center gap-1 flex-wrap pt-0.5">
                      {[50000, 100000, 250000, 500000].map((preset) => (
                        <button key={preset} type="button" onClick={() => setMonthlyTraffic(preset)}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all cursor-pointer ${
                            monthlyTraffic === preset ? 'bg-violet text-white font-bold shadow-2xs' : 'bg-bone text-mute hover:text-ink border border-hairline'
                          }`}
                        >
                          {formatNumber(preset)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Current Conversion Rate</span>
                      <span className="text-violet font-bold px-2 py-0.5 rounded bg-bone border border-hairline">
                        {currentConversion.toFixed(1)}%
                      </span>
                    </div>
                    <input 
                      type="range" min={0.5} max={5.0} step={0.1}
                      value={currentConversion} onChange={(e) => setCurrentConversion(Number(e.target.value))}
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
                      type="range" min={500} max={10000} step={250}
                      value={averageOrderValue} onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                      className="w-full accent-violet cursor-pointer h-1.5 bg-hairline rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center text-[11px] font-mono">
                      <span className="text-mute font-medium">Target CVR Lift</span>
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
                        <div className="text-[9px] text-white/70 font-bold uppercase">PROJECTED CVR</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 flex items-baseline gap-1">
                          {projectedConversion}% <span className="text-[9px] font-mono text-emerald-300 font-bold">+{targetLift}%</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">EXTRA REVENUE / MO</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 truncate">{formatCurrency(extraMonthlyRevenue)}</div>
                      </div>
                      <div className="col-span-2 bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">12-MO REVENUE GAIN</div>
                        <div className="text-base font-display font-extrabold text-emerald-300 mt-0.5 truncate">{formatCurrency(annualGain)}</div>
                      </div>
                    </div>

                    <button onClick={() => onOpenAudit('convert-cro')} className="w-full py-2.5 px-3 rounded-xl bg-white text-ink hover:bg-bone font-display font-bold text-[10px] transition-colors shadow-sm cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1 group">
                      <span>CLAIM THIS CRO REVENUE LIFT</span>
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
              Make the Traffic You Already Pay For Worth More.
            </h3>
            <p className="text-mute text-sm sm:text-base leading-relaxed font-medium text-center">
              At JanusMAAD, we combine session recording science, heatmap analysis, and rigorous A/B testing sprints to systematically eliminate checkout friction and increase your revenue-per-visitor.
            </p>
          </div>

          {/* Key Deliverables Card Below */}
          <div className="max-w-3xl mx-auto text-left">
            <div className="bg-bone text-ink rounded-3xl p-5 sm:p-6 space-y-3.5 border border-hairline shadow-2xs">
              <div className="flex items-center gap-2 text-violet font-display font-bold text-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-violet shrink-0" />
                <span>What We Deliver for CRO & Conversion Sprints</span>
              </div>
              
              <div className="space-y-2.5 text-xs sm:text-sm text-mute font-semibold">
                {[
                  { bold: 'Heatmap & session recording teardowns', rest: ' to locate exact drop-off leak points' },
                  { bold: 'Bi-weekly A/B testing sprints', rest: ' with 95%+ statistical confidence validation' },
                  { bold: 'Slide-cart & upsell engine optimisation', rest: ' to systematically boost Average Order Value' },
                  { bold: 'Friction-free checkout flow re-architecture', rest: ' reducing cart abandonment' },
                  { bold: 'Full revenue-per-visitor telemetry', rest: ' proving clear ROI on every experiment' },
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
              title: 'Funnel & Session Audit',
              desc: 'We analyze session recordings, scroll heatmaps, and Google Analytics 4 drop-off points to isolate high-leverage friction areas.'
            },
            {
              step: '02',
              title: 'Formulate Test Hypotheses',
              desc: 'We map out evidence-backed hypotheses prioritized by potential revenue impact and implementation ease.'
            },
            {
              step: '03',
              title: 'Design Experiment Variants',
              desc: 'We design high-converting visual variants in Figma for PDP value propositions, headlines, offer cards, and checkout hooks.'
            },
            {
              step: '04',
              title: 'Deploy A/B Testing Engine',
              desc: 'We code and launch split-tests via VWO or Google Optimize with zero site performance degradation.'
            },
            {
              step: '05',
              title: 'Statistical Confidence Check',
              desc: 'We run experiments until reaching 95%+ statistical significance, ensuring valid data-driven decision making.'
            },
            {
              step: '06',
              title: 'Hardcode Winning Variants',
              desc: 'We permanently implement winning variants into your core Shopify or web codebase to lock in baseline gains.'
            },
            {
              step: '07',
              title: 'Compound Revenue-Per-Visitor',
              desc: 'We continuously layer new testing sprints across cart drawers, post-purchase upsells, and landing pages for ongoing growth.'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onMouseEnter={(e) => {
                if (prefersReducedMotion()) return;
                gsap.to(e.currentTarget, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' });
                const num = e.currentTarget.querySelector('.cro-step-num');
                if (num) gsap.to(num, { scale: 1.12, color: '#7C3AED', duration: 0.3, ease: 'back.out(1.7)' });
              }}
              onMouseLeave={(e) => {
                if (prefersReducedMotion()) return;
                gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
                const num = e.currentTarget.querySelector('.cro-step-num');
                if (num) gsap.to(num, { scale: 1, color: 'rgba(124, 58, 237, 0.4)', duration: 0.3, ease: 'power2.out' });
              }}
              className={`cro-how-card bg-white border border-hairline rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm transition-all duration-300 group relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                idx === 6 ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:w-full lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="cro-step-num text-4xl sm:text-5xl font-display font-black text-violet/40 transition-colors origin-left inline-block">
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
          initialService="CRO" 
          hideHeader={true} 
          customClientOrder={[
            'kicky-and-perky',
            'radboards',
            'shagun-sweets',
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
              q: 'What monthly traffic size do we need to run meaningful CRO A/B tests?',
              a: 'We typically recommend a minimum of 20,000 to 30,000 monthly unique website visitors. For stores with lower traffic, we focus on high-impact heuristic UX improvements and slide-cart offer optimizations.'
            },
            {
              q: 'How long does an A/B test take to reach statistical significance?',
              a: 'A typical A/B test runs for 2 to 4 weeks depending on traffic volume and conversion rate impact. We ensure all winning variations reach a minimum 95% statistical confidence before declaring victory.'
            },
            {
              q: 'Will A/B testing slow down our website speed?',
              a: 'No. We deploy lightweight, asynchronously loaded testing scripts using modern split-testing platforms like VWO or native Shopify split-testing setups to maintain fast site speeds.'
            },
            {
              q: 'How do you increase Average Order Value (AOV) alongside conversion rate?',
              a: 'We re-architect the slide-cart drawer with tiered free shipping progress bars, one-click product add-ons, and post-purchase upsell offers that encourage higher basket sizes without friction.'
            },
            {
              q: 'What happens when an A/B test fails to win?',
              a: 'Failed tests provide valuable empirical data on what your audience does not respond to. We document the learning, refine the hypothesis, and launch a new test variation in the next sprint cycle.'
            },
            {
              q: 'How do we track CRO results and ROI?',
              a: 'We measure revenue-per-visitor (RPV), overall store conversion rate (CVR), and Average Order Value (AOV) before and after each test cohort, presenting clear telemetry reports in your monthly review.'
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
              Talk to Our CRO & Revenue Strategists
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
                    Your request has been submitted successfully. A CRO specialist will analyze your checkout funnel and reach out within 2 hours.
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
                        placeholder="CRO & Revenue Teardown"
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
                      placeholder="Tell us about your current monthly traffic, conversion rate, and store URL..."
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
