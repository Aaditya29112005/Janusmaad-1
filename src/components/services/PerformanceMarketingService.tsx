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
  const [currentROAS, setCurrentROAS] = useState(2.2);
  const [targetLift, setTargetLift] = useState(35); // 35% lift
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // GSAP Ref for How We Work Section
  const howWeWorkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = howWeWorkRef.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set('.pm-how-card', { opacity: 0, y: 30, scale: 0.97 });

      ScrollTrigger.batch('.pm-how-card', {
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
  const projectedROAS = Number((currentROAS * (1 + targetLift / 100)).toFixed(2));
  const currentRevenue = monthlySpend * currentROAS;
  const projectedRevenue = monthlySpend * projectedROAS;
  const extraMonthlyRevenue = projectedRevenue - currentRevenue;
  const annualGain = extraMonthlyRevenue * 12;

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
    const waText = `Hi JanusMAAD!\n\nNew Audit Request:\n• Name: ${formData.name}\n• Email: ${formData.email}\n• Phone: ${formData.phone}\n• Subject: ${formData.subject}\n• Message: ${formData.message}`;
    window.open(`https://wa.me/919818747001?text=${encodeURIComponent(waText)}`, '_blank');
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
        <div className="bg-white border border-hairline rounded-[32px] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* LEFT COLUMN: HERO HEADLINE & TRUSTED TECH */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-ink leading-[0.98] tracking-tight uppercase">
                  PERFORMANCE<br />
                  MARKETING
                </h1>
              </div>

              {/* TRUSTED TECHNOLOGIES */}
              <div className="space-y-2.5 pt-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-violet uppercase block">
                  Campaign Management across Platforms
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    {
                      name: 'Meta',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="6" fill="#1877F2"/>
                          <path d="M6 12C6 9.5 7.5 8 9.5 8C11.5 8 13 12 14 12C15 12 16.5 8 18.5 8C20.5 8 22 9.5 22 12C22 14.5 20.5 16 18.5 16C16.5 16 15 12 14 12C13 12 11.5 16 9.5 16C7.5 16 6 14.5 6 12Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Google',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M21.805 10.023H12.18v3.954h5.546c-.24 1.28-.97 2.365-2.065 3.09v2.568h3.342c1.955-1.84 3.082-4.554 3.082-7.773 0-.61-.055-1.198-.28-1.839z" fill="#4285F4"/>
                          <path d="M12.18 20.002c2.752 0 5.064-.908 6.75-2.474l-3.342-2.568c-.913.614-2.08.977-3.408.977-2.618 0-4.838-1.765-5.63-4.143H3.09v2.646c1.688 3.35 5.144 5.562 9.09 5.562z" fill="#34A853"/>
                          <path d="M6.55 11.794c-.203-.61-.318-1.26-.318-1.928 0-.668.115-1.318.318-1.928V5.292H3.09C2.42 6.63 2.04 8.136 2.04 9.866c0 1.73.38 3.236 1.05 4.574l3.46-2.646z" fill="#FBBC05"/>
                          <path d="M12.18 3.652c1.498 0 2.842.516 3.9 1.522l2.925-2.925C17.238.742 14.926 0 12.18 0 8.234 0 4.778 2.212 3.09 5.562l3.46 2.646c.792-2.378 3.012-4.143 5.63-4.143z" fill="#EA4335"/>
                        </svg>
                      )
                    },
                    {
                      name: 'ChatGPT',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M22.28 9.37a5.97 5.97 0 0 0-.52-4.84 6 6 0 0 0-6.66-2.82 6 6 0 0 0-4.66-2.08 6 6 0 0 0-5.74 4.14 6 6 0 0 0-4.14 2.84 6 6 0 0 0 .82 7.15 5.97 5.97 0 0 0 .52 4.84 6 6 0 0 0 6.66 2.82 6 6 0 0 0 4.66 2.08 6 6 0 0 0 5.74-4.14 6 6 0 0 0 4.14-2.84 6 6 0 0 0-.82-7.15z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )
                    },
                    {
                      name: 'Amazon',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <path d="M15.5 17c-4 2.5-9 2.5-12.5 0M16.5 14.5c.5.8 1.5 2 2.5 2.2-1 .5-2.5.5-3.5 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      )
                    },
                    {
                      name: 'LinkedIn',
                      bg: 'bg-bone border-hairline text-ink',
                      icon: (
                        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="5" fill="#0A66C2"/>
                          <path d="M6.5 8.5H9V17.5H6.5V8.5ZM7.75 5C6.92 5 6.25 5.67 6.25 6.5C6.25 7.33 6.92 8 7.75 8C8.58 8 9.25 7.33 9.25 6.5C9.25 5.67 8.58 5 7.75 5ZM11.5 8.5H13.8V9.75H13.85C14.17 9.14 14.96 8.5 16.12 8.5C18.54 8.5 19 10.09 19 12.16V17.5H16.5V13.08C16.5 12.03 16.48 10.67 15.03 10.67C13.56 10.67 13.34 11.82 13.34 12.99V17.5H10.84V8.5H11.5Z" fill="white"/>
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

            {/* RIGHT COLUMN: INTERACTIVE REVENUE CALCULATOR */}
            <div className="lg:col-span-6 bg-bone/70 border border-hairline p-5 sm:p-6 rounded-3xl space-y-4 shadow-sm">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-ink tracking-tight">
                  Estimate Your Revenue Lift
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

                {/* Output Violet Card (like image copy 3.png) */}
                <div className="sm:col-span-6">
                  <div className="rounded-2xl p-4 bg-violet text-white shadow-md h-full flex flex-col justify-between space-y-3">
                    <div className="grid grid-cols-2 gap-2 font-mono">
                      <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">PROJECTED ROAS</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 flex items-baseline gap-1">
                          {projectedROAS}x <span className="text-[9px] font-mono text-emerald-300 font-bold">+{targetLift}%</span>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">EXTRA / MONTH</div>
                        <div className="text-base font-display font-extrabold text-white mt-0.5 truncate">{formatCurrency(extraMonthlyRevenue)}</div>
                      </div>
                      <div className="col-span-2 bg-white/10 backdrop-blur-xs rounded-xl p-2.5 border border-white/20 space-y-0.5 shadow-2xs">
                        <div className="text-[9px] text-white/70 font-bold uppercase">12-MO GAIN</div>
                        <div className="text-base font-display font-extrabold text-emerald-300 mt-0.5 truncate">{formatCurrency(annualGain)}</div>
                      </div>
                    </div>

                    <button onClick={() => onOpenAudit('acquire-performance')} className="w-full py-2.5 px-3 rounded-xl bg-white text-ink hover:bg-bone font-display font-bold text-[10px] transition-colors shadow-sm cursor-pointer uppercase tracking-wider flex items-center justify-center gap-1 group">
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
              Marketing Should Always Pay for Itself.
            </h3>
            <p className="text-mute text-sm sm:text-base leading-relaxed font-medium text-center">
              At JanusMAAD, we combine AI-powered optimisation with human expertise to continuously improve your campaigns across all platforms; from Google and Meta to LinkedIn, YouTube and beyond.
            </p>
          </div>

          {/* Key Deliverables Card Below */}
          <div className="max-w-3xl mx-auto text-left">
            <div className="bg-bone text-ink rounded-3xl p-5 sm:p-6 space-y-3.5 border border-hairline shadow-2xs">
              <div className="flex items-center gap-2 text-violet font-display font-bold text-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-violet shrink-0" />
                <span>What We Deliver for Performance Campaigns</span>
              </div>
              
              <div className="space-y-2.5 text-xs sm:text-sm text-mute font-semibold">
                {[
                  { bold: 'AI-powered optimisation', rest: ' to uncover patterns and opportunities' },
                  { bold: 'Multi-platform performance', rest: ' across the channels where your customers are' },
                  { bold: 'Regular campaign reviews', rest: ' - no ‘set and forget’ approach' },
                  { bold: 'Continuous testing', rest: ' across audiences, creatives, messaging and landing pages' },
                  { bold: 'Smarter budget allocation', rest: ' based on what’s actually driving business result' },
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
              title: 'Audit First',
              desc: 'We start with what you already have. Campaigns. Data. Tracking. Website. We find what’s working and what’s getting in the way.'
            },
            {
              step: '02',
              title: 'Fix the Measurement',
              desc: 'If you can’t measure it, you can’t improve it. We make sure your analytics, pixels and conversion tracking are set up correctly.'
            },
            {
              step: '03',
              title: 'Know Your Customer',
              desc: 'The right audience matters more than a bigger audience. We study who your customers are, what they want and what makes them act.'
            },
            {
              step: '04',
              title: 'Remove the Friction',
              desc: 'An ad can win the click. Your website has to win the customer. We simplify the journey and optimise every important conversion point.'
            },
            {
              step: '05',
              title: 'Build the Campaign',
              desc: 'We choose the right channels, audiences and messages. Then we put your budget to work across Google, Meta, Amazon and other relevant platforms.'
            },
            {
              step: '06',
              title: 'Test. Learn. Improve.',
              desc: 'We don’t set campaigns and walk away. We test. We learn. We optimise. And we keep moving budget towards what works.'
            },
            {
              step: '07',
              title: 'Scale What Works',
              desc: 'Once we find the winning formula, we scale it. Carefully. Profitably. With the numbers always in view.'
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onMouseEnter={(e) => {
                if (prefersReducedMotion()) return;
                gsap.to(e.currentTarget, { y: -8, scale: 1.02, duration: 0.3, ease: 'power2.out' });
                const num = e.currentTarget.querySelector('.pm-step-num');
                if (num) gsap.to(num, { scale: 1.12, color: '#7C3AED', duration: 0.3, ease: 'back.out(1.7)' });
              }}
              onMouseLeave={(e) => {
                if (prefersReducedMotion()) return;
                gsap.to(e.currentTarget, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
                const num = e.currentTarget.querySelector('.pm-step-num');
                if (num) gsap.to(num, { scale: 1, color: 'rgba(124, 58, 237, 0.4)', duration: 0.3, ease: 'power2.out' });
              }}
              className={`pm-how-card bg-white border border-hairline rounded-3xl p-6 sm:p-7 space-y-4 shadow-sm transition-all duration-300 group relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                idx === 6 ? 'md:col-span-2 md:w-1/2 md:mx-auto lg:w-full lg:col-span-1 lg:col-start-2' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="pm-step-num text-4xl sm:text-5xl font-display font-black text-violet/40 transition-colors origin-left inline-block">
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

      {/* 6. OUR WORK (CATEGORY METRICS EXPLORER) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
            Our Work
          </h2>
        </div>

        <CategoryMetricsExplorer 
          onOpenAudit={onOpenAudit} 
          initialService="PM" 
          hideHeader={true} 
          customClientOrder={[
            'paperbark-camp',
            'soiree-club',
            'radboards',
            'kicky-and-perky',
            'shagun-sweets',
            'rudrasetu'
          ]}
        />
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="border-t border-hairline pt-8">
        <TestimonialsMarquee />
      </section>

      {/* 7.5 FAQ SECTION */}
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
              q: 'How fast can we expect to see measurable results from performance campaigns?',
              a: 'Initial campaign setup and baseline telemetry audits take 3–5 days. Once live, algorithm learning and initial optimization kick in within 7–14 days, with full scaling and ROAS compounding typically achieved by week 3–4.'
            },
            {
              q: 'What platforms do you manage for performance marketing?',
              a: 'We engineer and scale performance campaigns across Meta (Instagram & Facebook), Google Ads (Search, Shopping, Performance Max, YouTube), Amazon, LinkedIn, and emerging AI advertising channels like ChatGPT.'
            },
            {
              q: 'How do you handle budget allocation across channels?',
              a: 'We do not lock spend into static monthly channel budgets. We continuously shift ad budget dynamically toward the highest-performing channels, ad sets, and landing pages based on real-time ROAS and CAC data.'
            },
            {
              q: 'Do you handle creative production and landing page optimization?',
              a: 'Yes. High-converting performance marketing requires relentless creative testing and friction-free landing pages. We produce performance ad creatives, hook variations, and custom speed-optimized landing pages engineered for conversion.'
            },
            {
              q: 'What is your pricing and engagement model?',
              a: 'We work on transparent retainer models or hybrid performance models scaled to your ad spend and growth targets. There are no hidden fees, and all ad accounts and data remain 100% owned by your brand.'
            },
            {
              q: 'How do you ensure accurate conversion tracking post-iOS privacy updates?',
              a: 'We audit and implement server-side tracking (Meta Conversions API, Google Enhanced Conversions, server-side GTM) to bypass browser restrictions and ad blockers, ensuring 99%+ attribution telemetry precision.'
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

      {/* 8. TALK TO US / AUDIT FORM SECTION (LIGHT THEME) */}
      <section id="talk-to-us" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white text-ink rounded-[32px] p-8 sm:p-12 space-y-10 shadow-xl border border-hairline relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3 text-center">
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink text-center">
              Talk to Our Performance Strategists
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
                  href="https://wa.me/919818747001?text=Hi%20JanusMAAD,%20I'd%20like%20to%20discuss%20Performance%20Marketing%20for%20my%20brand."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 transition-colors group shadow-sm"
                >
                  <div className="p-2 bg-white/20 rounded-lg group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/80 font-medium">WhatsApp Direct</div>
                    <div className="text-sm font-bold text-white">+91 98187 47001</div>
                  </div>
                </a>

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
