import React from 'react';
import { 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  History, 
  TrendingUp, 
  Compass, 
  Zap
} from 'lucide-react';
import { Button } from '../ui/Button';
import { ReceiptsSection } from '../receipts/ReceiptsSection';

interface AboutServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
  onNavigateHome: () => void;
}

export const AboutService: React.FC<AboutServiceProps> = ({
  onOpenAudit,
  onNavigateCapability,
  onNavigateHome
}) => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About JanusMAAD | Full-Stack Growth Partner",
    "url": "https://janusmaad.com/#about",
    "description": "JanusMAAD is your full-stack growth partner built around a simple belief: what happened yesterday should make tomorrow smarter. Marketing, Advertising, Analytics and Data.",
    "publisher": {
      "@type": "Organization",
      "name": "JanusMAAD Digital",
      "foundingDate": "2023",
      "slogan": "Past insights. Future thinking. Smarter growth."
    }
  };

  const disciplines = [
    {
      letter: 'M',
      title: 'Marketing',
      badge: 'Acquire & Retain',
      desc: 'Strategic brand positioning, narrative framing, high-converting offer design, and omnichannel storytelling that commands attention in crowded markets.',
      gradient: 'from-[#A8D5FF] to-[#5B8FBD]',
      textColor: 'text-[#07101E]'
    },
    {
      letter: 'A',
      title: 'Advertising',
      badge: 'Acquire',
      desc: 'High-intent performance media buying across Meta, Google Ads, Amazon, and marketplaces engineered with relentless testing to lower CAC and scale ROAS.',
      gradient: 'from-[#5DAFFF] to-[#1D5B9A]',
      textColor: 'text-white'
    },
    {
      letter: 'A',
      title: 'Analytics',
      badge: 'Convert',
      desc: 'Clean, server-side data infrastructure, GA4, CAPI telemetry, and attribution modeling that transforms vanity metrics into absolute revenue clarity.',
      gradient: 'from-[#3B7FC3] to-[#0D2D5C]',
      textColor: 'text-white'
    },
    {
      letter: 'D',
      title: 'Data',
      badge: 'Retain',
      desc: 'Zero-party and first-party data architectures, predictive RFM segmentation, customer lifetime value modeling, and automated lifecycle triggers.',
      gradient: 'from-[#1D5B9A] to-[#07101E]',
      textColor: 'text-white'
    }
  ];

  const workSteps = [
    {
      stepNum: '01',
      stepTitle: 'Step 1: Discover & Assess',
      week: 'Week 1',
      subtitle: 'Align on goals, spot the gaps and gather what we need.',
      points: [
        'Understand goals, pain points and outcomes',
        'Review current setup, tools and strategies',
        'Sign NDA and gather access to key platforms and data'
      ],
      style: {
        background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
        boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)',
        textColor: 'text-[#07101E]',
        badgeBg: 'bg-[#07101E]/10 text-[#07101E]',
        pointText: 'text-[#0A2540]',
        iconColor: 'text-[#07101E]'
      }
    },
    {
      stepNum: '02',
      stepTitle: 'Step 2: Analyse & Strategise',
      week: 'Week 2',
      subtitle: 'Dive into the data to create a tailored game plan.',
      points: [
        'Deep dive into data, technology and user behaviour',
        'Identify challenges, gaps and high-impact opportunities',
        'Present a tailored strategy roadmap'
      ],
      style: {
        background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
        boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)',
        textColor: 'text-white',
        badgeBg: 'bg-white/20 text-white',
        pointText: 'text-sky-100',
        iconColor: 'text-white'
      }
    },
    {
      stepNum: '03',
      stepTitle: 'Step 3: Align & Execute',
      week: 'Week 3',
      subtitle: 'Bring the plan to life with precision and purpose.',
      points: [
        'Define team roles, resources and execution plan',
        'Share clear deliverables and expected outcomes',
        'Finalise agreement and kick off the project'
      ],
      style: {
        background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
        boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)',
        textColor: 'text-white',
        badgeBg: 'bg-[#5DAFFF]/30 text-[#5DAFFF]',
        pointText: 'text-blue-100',
        iconColor: 'text-[#5DAFFF]'
      }
    }
  ];

  const capabilitiesList = [
    { label: 'Performance Marketing', id: 'acquire-performance' },
    { label: 'Search Everywhere (SEO)', id: 'acquire-seo' },
    { label: 'Social Media Marketing', id: 'acquire-smm' },
    { label: 'Web Design & Build', id: 'convert-build' },
    { label: 'Conversion Rate Optimisation (CRO)', id: 'convert-cro' },
    { label: 'Retention Marketing', id: 'retain-marketing' },
    { label: 'Customer Engagement (CEP)', id: 'retain-cep' },
    { label: 'Customer Data Platforms (CDP)', id: 'retain-cdp' }
  ];

  return (
    <div className="space-y-20 pb-20 pt-28 px-4 sm:px-8 bg-bone text-ink min-h-screen relative z-10">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-hairline">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-display font-bold text-ink hover:text-violet transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-violet group-hover:-translate-x-1 transition-transform" />
            <span>← Back to Overview</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 bg-violet/10 text-violet font-bold rounded-full uppercase">
              ABOUT US
            </span>
            <span className="text-mute">/</span>
            <span className="text-ink font-bold">THE JANUSMAAD MANIFESTO</span>
          </div>
        </div>

        {/* 1. MASTER HERO CARD */}
        <div
          className="rounded-[32px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl text-white border border-white/10"
          style={{
            background: 'linear-gradient(135deg, #07101E 0%, #10243E 45%, #1D5B9A 100%)',
            boxShadow: '0 32px 64px -16px rgba(7, 16, 30, 0.5), inset 0 1px 2px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          {/* Glass Glare Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/20 pointer-events-none rounded-[32px]" />
          
          {/* Ambient Glow Orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#5DAFFF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1D5B9A]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-white/15 text-white text-xs font-mono font-bold rounded-full border border-white/20 uppercase tracking-wider backdrop-blur-md">
                WHO WE ARE • GROWTH ARCHITECTURE
              </span>
              <span className="px-3 py-1 bg-[#5DAFFF]/20 text-[#A8D5FF] text-xs font-mono font-bold rounded-full border border-[#5DAFFF]/30">
                MARKETING • ADVERTISING • ANALYTICS • DATA
              </span>
            </div>

            {/* Core Master Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.12] tracking-tight">
              JanusMAAD is your full-stack growth partner built around a simple belief:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8D5FF] via-[#5DAFFF] to-white">
                what happened yesterday should make tomorrow smarter.
              </span>
            </h1>

            {/* Core Mission Paragraph */}
            <p className="text-lg sm:text-2xl text-sky-100 font-display font-medium leading-relaxed max-w-3xl">
              We help businesses <span className="text-white font-bold underline decoration-[#5DAFFF] decoration-2 underline-offset-4">acquire customers, convert them and retain them</span> by bringing four disciplines together — <span className="text-white font-extrabold tracking-wide">Marketing, Advertising, Analytics and Data</span>.
            </p>

            {/* Whole Picture Insight Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-black/30 border border-white/15 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-2 text-[#A8D5FF] text-xs font-mono uppercase tracking-wider font-bold">
                <Compass className="w-4 h-4 text-[#5DAFFF]" />
                <span>The Holistic Approach</span>
              </div>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-body">
                Growth is rarely solved by one channel, one campaign or one clever idea. It comes from understanding the whole picture: <strong>what your customers are doing</strong>, <strong>what your numbers are telling you</strong>, <strong>what your marketing is achieving</strong> and <strong>where technology can create an advantage</strong>.
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenAudit('about')}
                className="shadow-xl cursor-pointer"
              >
                Get Free Growth Audit
              </Button>
              <a
                href="#how-we-work"
                className="inline-flex items-center gap-2 text-sm font-display font-bold text-white hover:text-[#A8D5FF] transition-colors py-3 px-5 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm"
              >
                <span>Explore How We Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 2. THE FOUR DISCIPLINES (M.A.A.D) GRID */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
              THE 4 DISCIPLINES (MAAD)
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink">
              Bringing Four Disciplines Together
            </h2>
            <p className="text-mute text-base sm:text-lg font-medium">
              We bridge creative storytelling, rigorous media buying, and deep telemetry under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {disciplines.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 sm:p-8 bg-white border border-hairline shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between space-y-6 group relative overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${item.gradient}`} />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-extrabold text-4xl text-[#07101E] group-hover:text-violet transition-colors">
                      {item.letter}
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-bone text-mute border border-hairline uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-ink tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-mute leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-hairline/80 flex items-center justify-between text-xs font-mono text-mute group-hover:text-violet transition-colors">
                  <span>Pillar: {item.badge}</span>
                  <span className="font-bold">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THE JANUS PHILOSOPHY (TWO FACES: PAST & FUTURE) */}
        <div className="rounded-[28px] bg-gradient-to-b from-white to-bone border border-hairline p-8 sm:p-12 lg:p-14 shadow-xl space-y-10 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet/10 border border-violet/20 rounded-full text-xs font-mono font-bold text-violet uppercase tracking-wider">
              <History className="w-3.5 h-3.5" />
              <span>ROMAN GOD OF TRANSITIONS & NEW BEGINNINGS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink leading-tight">
              Our Name. Our Thinking.
            </h2>

            <p className="text-lg sm:text-xl text-ink/80 font-medium leading-relaxed">
              Our name comes from <strong className="text-ink">Janus, the Roman god of transitions and new beginnings</strong>, traditionally depicted with two faces — one looking to the past and the other towards the future.
            </p>

            <p className="text-base sm:text-lg text-violet font-display font-bold">
              It is more than a name. It is how we think.
            </p>
          </div>

          {/* Two Faces Dual Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {/* Face 1: Look Back to Understand */}
            <div className="rounded-2xl p-8 bg-[#07101E] text-white border border-white/10 shadow-xl space-y-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5DAFFF]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white/10 rounded-xl border border-white/15 text-[#5DAFFF]">
                  <History className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-200">
                  FACE 01 • PAST
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-white">
                  We look back to understand.
                </h3>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-body">
                  Deep historical audits, customer funnel drop-offs, baseline analytics telemetry, and past campaign performance forensics. We uncover why what worked, worked — and where silent profit leaks were occurring.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-sky-200">
                <span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10">Historical Data Audits</span>
                <span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10">Attribution Forensics</span>
                <span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10">Cohort Analysis</span>
              </div>
            </div>

            {/* Face 2: Look Forward to Anticipate */}
            <div className="rounded-2xl p-8 bg-gradient-to-br from-[#1D5B9A] to-[#0D2D5C] text-white border border-white/15 shadow-xl space-y-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A8D5FF]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div className="p-3 bg-white/15 rounded-xl border border-white/20 text-[#A8D5FF]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-100">
                  FACE 02 • FUTURE
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-display font-bold text-white">
                  We look forward to anticipate.
                </h3>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-body">
                  Predictive media scaling, market opportunity mapping, new channel emergence, AI-driven automation, and conversion architectures that preempt tomorrow’s shifting consumer expectations.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-sky-100">
                <span className="px-2.5 py-1 bg-white/10 rounded-md border border-white/20">Predictive Modeling</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-md border border-white/20">Scalable Architecture</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-md border border-white/20">Growth Roadmaps</span>
              </div>
            </div>
          </div>

          {/* Convergence Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-ink text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-hairline">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-mono text-teal font-bold uppercase tracking-wider">
                THE SYNTHESIS
              </div>
              <p className="text-xl sm:text-2xl font-display font-bold text-white">
                And we use both to make better decisions.
              </p>
            </div>
            <div className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 font-mono text-sm sm:text-base text-[#5DAFFF] font-bold text-center tracking-tight">
              Past insights. Future thinking. Smarter growth.
            </div>
          </div>
        </div>

        {/* 4. FULL-STACK CAPABILITIES ECOSYSTEM */}
        <div className="p-8 sm:p-12 rounded-[28px] bg-white border border-hairline shadow-xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
              END-TO-END CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-ink leading-snug">
              Strategy, Technology and Execution Together
            </h2>
            <p className="text-mute text-base sm:text-lg leading-relaxed font-body">
              From performance marketing, SEO, CRO to Martech, Analytics, and Automations, we bring strategy, technology and execution together to create growth that is <strong>measurable</strong>, <strong>adaptable</strong> and <strong>sustainable</strong>.
            </p>
            <p className="text-ink font-display font-extrabold text-xl pt-1">
              That’s JanusMAAD.
            </p>
          </div>

          {/* Interactive Capability Chips */}
          <div className="pt-2">
            <div className="text-xs font-mono font-bold text-mute uppercase mb-3">
              Explore Our Core Capabilities:
            </div>
            <div className="flex flex-wrap gap-2.5">
              {capabilitiesList.map((cap) => (
                <button
                  key={cap.id}
                  onClick={() => onNavigateCapability(cap.id)}
                  className="px-4 py-2.5 rounded-xl bg-bone hover:bg-violet hover:text-white text-ink text-xs sm:text-sm font-display font-bold border border-hairline transition-all cursor-pointer shadow-xs hover:-translate-y-0.5"
                >
                  {cap.label} →
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 5. HOW WE WORK: 3-WEEK PROCESS (MATCHING EXACT USER CONTENT) */}
        <div id="how-we-work" className="space-y-8 pt-4">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 border border-teal/20 rounded-full text-xs font-mono font-bold text-teal uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              <span>THE 3-WEEK ONBOARDING BLUEPRINT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-ink tracking-tight">
              HOW WE WORK
            </h2>
            <p className="text-mute text-base sm:text-lg font-medium">
              A disciplined, three-week sequence designed to uncover insights, establish a clear strategy, and launch execution with zero wasted time.
            </p>
          </div>

          {/* 3 Step Sequence Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {workSteps.map((step) => (
              <div
                key={step.stepNum}
                style={{
                  background: step.style.background,
                  boxShadow: step.style.boxShadow
                }}
                className={`rounded-[24px] p-8 space-y-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative ${step.style.textColor}`}
              >
                {/* Glass Glare Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />

                <div className="relative z-10 space-y-5">
                  {/* Top Bar with Number & Week Pill */}
                  <div className="flex items-center justify-between">
                    <div className="font-display font-extrabold text-5xl tabular-nums group-hover:scale-105 transition-transform origin-left">
                      {step.stepNum}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md ${step.style.badgeBg}`}>
                      {step.week}
                    </span>
                  </div>

                  {/* Step Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl tracking-tight leading-snug">
                      {step.stepTitle}
                    </h3>
                    <p className={`text-sm sm:text-base leading-relaxed font-medium ${step.style.pointText}`}>
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Action Bullet Points */}
                  <div className="pt-2 border-t border-current/15 space-y-3">
                    {step.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${step.style.iconColor}`} />
                        <span className={`text-xs sm:text-sm font-medium leading-normal ${step.style.pointText}`}>
                          {pt}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Accent Bar */}
                <div className="relative z-10 h-1.5 w-16 rounded-full bg-current/40" />
              </div>
            ))}
          </div>
        </div>

        {/* LIVE WORK & FUNNELS SHOWCASE */}
        <div className="pt-4 border-t border-hairline">
          <ReceiptsSection onOpenAudit={onOpenAudit} />
        </div>

        {/* 6. CLOSING SUMMARY & CTA */}
        <div className="rounded-[32px] bg-[#07101E] text-white p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden space-y-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#5DAFFF]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="px-3.5 py-1 bg-white/10 text-white text-xs font-mono font-bold rounded-full border border-white/20 uppercase tracking-wider">
              PARTNER WITH JANUSMAAD
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white leading-tight">
              Past insights. Future thinking. Smarter growth.
            </h2>

            <p className="text-base sm:text-lg text-sky-100 font-medium leading-relaxed font-body">
              Ready to see what happens when Marketing, Advertising, Analytics and Data work as a single unified growth engine? Let’s evaluate your numbers and map your next revenue milestone.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenAudit('about')}
                className="shadow-xl cursor-pointer"
              >
                Book Your Growth Audit
              </Button>
              <button
                onClick={() => onNavigateCapability('receipts')}
                className="py-3 px-6 rounded-xl border border-white/25 text-white font-display font-bold text-sm hover:bg-white/10 transition-colors cursor-pointer"
              >
                View Verified Client Receipts →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
