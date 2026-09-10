import React, { useState, useEffect, useRef } from 'react';
import { MaadAtomStage } from './MaadAtomStage';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';
import { Sparkles, ArrowRight, Zap, Search, Share2 } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  // 0: Performance Marketing, 1: SEO (Search Everywhere), 2: SMM (Social Media Marketing)
  const [activeTab, setActiveTab] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const card3dRef = useRef<HTMLDivElement | null>(null);

  // 3D Parallax Tilt Effect on Mouse Move
  useEffect(() => {
    const container = containerRef.current;
    const card = card3dRef.current;
    if (!container || !card || prefersReducedMotion()) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: mouseX * 18,
        rotateX: -mouseY * 18,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Continuous subtle float animation
  useEffect(() => {
    const card = card3dRef.current;
    if (!card || prefersReducedMotion()) return;

    const floatTween = gsap.to(card, {
      y: '-=10',
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    return () => {
      floatTween.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[530px] mx-auto select-none"
      style={{ perspective: '1200px' }}
    >
      {/* Background Ambient Glowing Halos */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-violet/20 via-[#0ae448]/15 to-teal/20 rounded-[40px] blur-3xl opacity-70 pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Top Interactive Mode Tabs (Performance Marketing, SEO, SMM) */}
      <div className="flex items-center justify-between gap-1.5 p-1.5 mb-3 bg-white/80 backdrop-blur-md rounded-2xl border border-hairline shadow-sm">
        {[
          { id: 0, label: 'Performance Marketing', icon: Zap },
          { id: 1, label: 'SEO (Search Everywhere)', icon: Search },
          { id: 2, label: 'SMM (Social Media)', icon: Share2 },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-display font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-ink text-bone shadow-md shadow-ink/10 scale-[1.02]'
                  : 'text-mute hover:text-ink hover:bg-black/5'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0ae448]' : 'text-mute'}`} />
              <span className="hidden md:inline">{tab.label}</span>
              <span className="md:hidden">
                {tab.id === 0 && 'Perf Ads'}
                {tab.id === 1 && 'SEO / AI'}
                {tab.id === 2 && 'SMM'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main 3D Card Stage */}
      <div
        ref={card3dRef}
        className="relative w-full bg-white/95 backdrop-blur-xl border border-black/10 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-ink/10 transition-shadow duration-500 overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Card Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-3 border-b border-black/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0ae448] animate-pulse shadow-[0_0_8px_#0ae448]" />
            <span className="text-[11px] font-mono tracking-wider font-bold text-ink uppercase">
              {activeTab === 0 && 'ACQUIRE • PERFORMANCE MARKETING ENGINE'}
              {activeTab === 1 && 'ACQUIRE • SEO & ANSWER ENGINE OPTIMISATION'}
              {activeTab === 2 && 'ACQUIRE • SMM & VIRAL BRAND AUTHORITY'}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-mute bg-bone px-2.5 py-1 rounded-lg border border-black/5">
            <Sparkles className="w-3 h-3 text-[#0ae448]" />
            <span>LIVE 3D</span>
          </div>
        </div>

        {/* Dynamic 3D Scene Viewport - M.A.A.D Atom Model */}
        <div className="relative w-full aspect-square max-h-[380px] sm:max-h-[420px] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#F6F3EC]/80 to-white border border-black/5 p-2">
          <MaadAtomStage activeTab={activeTab} onSelectTab={(index) => setActiveTab(index)} />
        </div>

        {/* Card Bottom Meta Description */}
        <div className="pt-5 space-y-2">
          {activeTab === 0 && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-display font-bold text-ink">
                  Performance Marketing Engine
                </h3>
                <span className="text-xs font-mono font-bold text-[#0ae448] bg-ink px-2.5 py-0.5 rounded-md">
                  4.8x Avg ROAS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-mute leading-relaxed">
                Meta, Google Ads & TikTok campaigns built for profit. AI-powered budget allocation and predictive bid management across the platforms where your customers buy.
              </p>
            </>
          )}

          {activeTab === 1 && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-display font-bold text-ink">
                  Search Everywhere (SEO + AEO + GEO)
                </h3>
                <span className="text-xs font-mono font-bold text-[#0ae448] bg-ink px-2.5 py-0.5 rounded-md">
                  1.2M+ Inbound/mo
                </span>
              </div>
              <p className="text-xs sm:text-sm text-mute leading-relaxed">
                Scale organic search visibility across traditional blue links, YouTube, and generative AI engines (Google AI Overviews, Perplexity & Gemini zero-click answers).
              </p>
            </>
          )}

          {activeTab === 2 && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-display font-bold text-ink">
                  SMM (Social Media Marketing)
                </h3>
                <span className="text-xs font-mono font-bold text-[#0ae448] bg-ink px-2.5 py-0.5 rounded-md">
                  14M+ Social Reach
                </span>
              </div>
              <p className="text-xs sm:text-sm text-mute leading-relaxed">
                High-velocity organic & paid content strategy engineered to build authority. AI hooks, creator funnels, and viral short-form distribution across Instagram, TikTok & YouTube.
              </p>
            </>
          )}

          {/* Quick Action Navigation Footer */}
          <div className="pt-2 flex items-center justify-between text-xs text-mute font-medium border-t border-black/5 mt-3">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet" />
              Interactive 3D Stage (Move cursor to tilt)
            </span>
            <button
              onClick={() => setActiveTab((prev) => (prev + 1) % 3)}
              className="flex items-center gap-1 text-ink hover:text-violet font-bold transition-colors cursor-pointer"
            >
              <span>Next Pillar</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0ae448]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   SCENE 1: PERFORMANCE MARKETING (3D Kinetic Flywheel with Meta, Google, TikTok)
   ========================================================================= */
const PerformanceMarketingScene: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Radial Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#070B1A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      {/* SVG 3D Tilted ROAS Flywheel Mechanism */}
      <svg
        viewBox="0 0 600 360"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="roasRingOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="40%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="metaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0081FB" />
            <stop offset="100%" stopColor="#0064E0" />
          </linearGradient>
          <linearGradient id="googleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EA4335" />
            <stop offset="50%" stopColor="#FBBC05" />
            <stop offset="100%" stopColor="#34A853" />
          </linearGradient>
          <linearGradient id="tiktokGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#25F4EE" />
          </linearGradient>
          <filter id="perfGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Speed Motion Streaks Passing Through Flywheel */}
        <line x1="140" y1="120" x2="220" y2="120" stroke="#0ae448" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="160" y1="180" x2="230" y2="180" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="390" y1="160" x2="480" y2="160" stroke="#0ae448" strokeWidth="2.5" strokeLinecap="round" filter="url(#perfGlow)" />
        <line x1="410" y1="210" x2="470" y2="210" stroke="#0081FB" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* 3D TILTED ROTATING FLYWHEEL MECHANISM */}
        <g transform="translate(300, 180) rotate(-12)" className="animate-spin-gentle">
          {/* Ring Outer Depth Rim (Back) */}
          <ellipse cx="0" cy="0" rx="64" ry="145" fill="none" stroke="#64748B" strokeWidth="14" opacity="0.4" />
          
          {/* Ring Outer Face */}
          <ellipse cx="-10" cy="0" rx="60" ry="142" fill="none" stroke="url(#roasRingOuter)" strokeWidth="18" />
          <ellipse cx="-10" cy="0" rx="46" ry="126" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />

          {/* Engraved Ring Ticks / Scale Marks */}
          {[-110, -85, -60, -35, -10, 15, 40, 65, 90, 115].map((y) => (
            <line key={y} x1="-16" y1={y} x2="-4" y2={y} stroke="#64748B" strokeWidth="1.5" opacity="0.6" />
          ))}

          {/* Aperture Shadow & Inner Light */}
          <ellipse cx="-10" cy="0" rx="34" ry="105" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <ellipse cx="-14" cy="0" rx="28" ry="95" fill="none" stroke="#0ae448" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.8" />
        </g>

        {/* =========================================================================
            FLOATING 3D AD PLATFORM TOKENS
            ========================================================================= */}
        {/* Token 1: Meta Ads Token (Left) */}
        <g className="animate-bob-slow" transform="translate(180, 120)">
          <circle cx="20" cy="20" r="19" fill="#070B1A" stroke="#0081FB" strokeWidth="2" filter="url(#perfGlow)" />
          {/* Meta Infinity Icon */}
          <path d="M12 20 C12 16 16 16 20 20 C24 24 28 24 28 20 C28 16 24 16 20 20 C16 24 12 24 12 20 Z" stroke="#0081FB" strokeWidth="2" fill="none" />
        </g>

        {/* Token 2: Google Ads PMax Token (Lower Left) */}
        <g className="animate-bob-fast" transform="translate(210, 175)">
          <circle cx="18" cy="18" r="17" fill="#070B1A" stroke="#34A853" strokeWidth="2" />
          <text x="18" y="24" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">G</text>
        </g>

        {/* Token 3: TikTok Ads Token (Bottom Left) */}
        <g className="animate-bob-mid" transform="translate(180, 225)">
          <circle cx="17" cy="17" r="16" fill="#070B1A" stroke="#25F4EE" strokeWidth="1.5" />
          <text x="17" y="22" fill="#25F4EE" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">TT</text>
        </g>

        {/* Token 4: 4.8x ROAS Multiplier Badge (Top Right) */}
        <g className="animate-bob-mid" transform="translate(365, 115)">
          <rect x="0" y="0" width="62" height="30" rx="15" fill="#070B1A" stroke="#0ae448" strokeWidth="1.5" filter="url(#perfGlow)" />
          <text x="31" y="20" fill="#0ae448" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">4.8x ROAS</text>
        </g>

        {/* Token 5: Budget Dollar Scaling Token (Mid Right) */}
        <g className="animate-bob-fast" transform="translate(370, 170)">
          <circle cx="17" cy="17" r="16" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="17" y="23" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">$</text>
        </g>

        {/* Token 6: YouTube Ads Token (Bottom Right) */}
        <g className="animate-bob-slow" transform="translate(375, 225)">
          <circle cx="18" cy="18" r="17" fill="#070B1A" stroke="#FF0000" strokeWidth="1.5" />
          {/* YouTube Play Icon */}
          <polygon points="15,12 24,18 15,24" fill="#FF0000" />
        </g>
      </svg>

      <style>{`
        @keyframes spinGentle {
          0%, 100% { transform: translate(300px, 180px) rotate(-12deg) scale(1); }
          50% { transform: translate(300px, 180px) rotate(-8deg) scale(1.02); }
        }
        .animate-spin-gentle {
          animation: spinGentle 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

/* =========================================================================
   SCENE 2: SEO (SEARCH EVERYWHERE OPTIMISATION + AEO + GEO)
   ========================================================================= */
const SeoSearchBridgeScene: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Perspective Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#070B1A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      {/* SVG Architectural Search Highway & AI Bridge */}
      <svg
        viewBox="0 0 600 360"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="queryGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ae448" stopOpacity="0" />
            <stop offset="60%" stopColor="#0ae448" stopOpacity="0.4" />
            <stop offset="90%" stopColor="#0ae448" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#abff84" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="tokenGradDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#070B1A" />
          </linearGradient>
          <filter id="seoGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Organic Crawl Lines & Clouds */}
        <path d="M120 70 Q126 65 132 70 Q138 65 144 70" stroke="#94A3B8" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M480 85 Q485 81 490 85 Q495 81 500 85" stroke="#94A3B8" strokeWidth="1.2" fill="none" opacity="0.5" />

        {/* Water Surface / Digital Highway Bed */}
        <path d="M0 320 Q150 318 300 320 T600 320" stroke="#CBD5E1" strokeWidth="1.5" opacity="0.6" />
        <path d="M80 335 Q200 333 320 335" stroke="#E2E8F0" strokeWidth="1" opacity="0.8" />
        <path d="M380 340 Q480 338 560 340" stroke="#E2E8F0" strokeWidth="1" opacity="0.8" />

        {/* Bridge Arches Foundations */}
        <path
          d="M0 260 L600 260"
          stroke="#94A3B8"
          strokeWidth="2"
          strokeDasharray="4 4"
          opacity="0.5"
        />

        {/* Arch 1 (Left to Middle) */}
        <path
          d="M30 320 L70 260 C120 280, 200 280, 250 260 L290 320"
          stroke="#64748B"
          strokeWidth="2"
          fill="#F1F5F9"
          fillOpacity="0.4"
        />
        {/* Arch 2 (Middle to Right) */}
        <path
          d="M290 320 L330 260 C380 280, 460 280, 510 260 L550 320"
          stroke="#64748B"
          strokeWidth="2"
          fill="#F1F5F9"
          fillOpacity="0.4"
        />

        {/* Bridge Road Deck */}
        <rect x="0" y="248" width="600" height="12" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />

        {/* Stone Pillar Left Tower */}
        <g opacity="0.95">
          <rect x="140" y="110" width="48" height="190" fill="#FFFFFF" stroke="#475569" strokeWidth="2" rx="4" />
          <path d="M152 250 L152 170 Q164 150 176 170 L176 250 Z" fill="#F8FAFC" stroke="#475569" strokeWidth="1.5" />
          <line x1="140" y1="140" x2="188" y2="140" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="140" y1="180" x2="188" y2="180" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="140" y1="220" x2="188" y2="220" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="140" y1="260" x2="188" y2="260" stroke="#CBD5E1" strokeWidth="1" />
        </g>

        {/* Stone Pillar Right Tower */}
        <g opacity="0.95">
          <rect x="420" y="150" width="42" height="150" fill="#FFFFFF" stroke="#475569" strokeWidth="2" rx="4" />
          <path d="M430 250 L430 190 Q441 176 452 190 L452 250 Z" fill="#F8FAFC" stroke="#475569" strokeWidth="1.5" />
          <line x1="420" y1="180" x2="462" y2="180" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="420" y1="210" x2="462" y2="210" stroke="#CBD5E1" strokeWidth="1" />
        </g>

        {/* Suspension Cables & Hanger Wires */}
        <path d="M0 120 Q164 240 300 248" stroke="#94A3B8" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M164 120 Q300 248 441 160" stroke="#94A3B8" strokeWidth="1.5" fill="none" opacity="0.7" />
        <path d="M441 160 Q520 248 600 200" stroke="#94A3B8" strokeWidth="1.5" fill="none" opacity="0.7" />

        {/* Vertical Hanger Struts */}
        {[60, 90, 120, 210, 240, 270, 300, 330, 360, 390, 480, 510, 540].map((x) => (
          <line key={x} x1={x} y1="160" x2={x} y2="248" stroke="#E2E8F0" strokeWidth="1" opacity="0.7" />
        ))}

        {/* =========================================================================
            HIGH SPEED SEARCH QUERY CAPSULE (Continuous live transit)
            ========================================================================= */}
        <g className="animate-transit">
          <path
            d="M0 240 L160 240 L180 244 L160 248 L0 248 Z"
            fill="url(#queryGlow)"
            filter="url(#seoGlow)"
          />
          <path
            d="M150 238 L178 244 L150 250 Z"
            fill="#0ae448"
            filter="url(#seoGlow)"
          />
          <path d="M135 239 L142 244 L135 249" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M145 239 L152 244 L145 249" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>

        {/* =========================================================================
            3D ISOMETRIC AI INDEXING ENGINE CUBE
            ========================================================================= */}
        <g transform="translate(250, 80)">
          {/* Isometric Glass Cube */}
          <polygon points="50,10 90,30 50,50 10,30" fill="#E0F2FE" fillOpacity="0.4" stroke="#0284C7" strokeWidth="1.2" />
          <polygon points="10,30 50,50 50,100 10,80" fill="#BAE6FD" fillOpacity="0.3" stroke="#0284C7" strokeWidth="1.2" />
          <polygon points="50,50 90,30 90,80 50,100" fill="#7DD3FC" fillOpacity="0.2" stroke="#0284C7" strokeWidth="1.2" />

          {/* AI Beacon Rings */}
          <ellipse cx="50" cy="20" rx="18" ry="9" fill="#0ae448" fillOpacity="0.2" stroke="#0ae448" strokeWidth="1.5" />
          <line x1="32" y1="20" x2="32" y2="34" stroke="#0ae448" strokeWidth="1.5" />
          <line x1="68" y1="20" x2="68" y2="34" stroke="#0ae448" strokeWidth="1.5" />
          <ellipse cx="50" cy="34" rx="18" ry="9" fill="none" stroke="#0ae448" strokeWidth="1.5" />
          <line x1="50" y1="0" x2="50" y2="120" stroke="#0284C7" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        </g>

        {/* =========================================================================
            FLOATING SEO & AI SEARCH NODES
            ========================================================================= */}
        {/* Token 1: Google Search #1 Rank (Left) */}
        <g className="animate-bob-slow" transform="translate(195, 95)">
          <circle cx="18" cy="18" r="17" fill="url(#tokenGradDark)" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="18" y="24" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">G</text>
        </g>

        {/* Token 2: AEO (Answer Engine Optimisation) Node */}
        <g className="animate-bob-fast" transform="translate(190, 145)">
          <rect x="0" y="0" width="46" height="24" rx="12" fill="#070B1A" stroke="#0ae448" strokeWidth="1.5" />
          <text x="23" y="16" fill="#0ae448" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">AEO</text>
        </g>

        {/* Token 3: Perplexity / AI Answer Engine (Top Right) */}
        <g className="animate-bob-mid" transform="translate(365, 105)">
          <circle cx="18" cy="18" r="17" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" filter="url(#seoGlow)" />
          <text x="18" y="23" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">AI</text>
          <circle cx="28" cy="8" r="3.5" fill="#0ae448" />
        </g>

        {/* Token 4: YouTube Search Everywhere Node */}
        <g className="animate-bob-slow" transform="translate(340, 155)">
          <circle cx="16" cy="16" r="15" fill="#070B1A" stroke="#FF0000" strokeWidth="1.5" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">YT</text>
        </g>
      </svg>

      <style>{`
        @keyframes transitLoop {
          0% { transform: translateX(-200px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(620px); opacity: 0; }
        }
        @keyframes bobSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bobMid {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes bobFast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-transit {
          animation: transitLoop 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-bob-slow {
          animation: bobSlow 3.4s ease-in-out infinite;
        }
        .animate-bob-mid {
          animation: bobMid 2.8s ease-in-out infinite;
        }
        .animate-bob-fast {
          animation: bobFast 2.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

/* =========================================================================
   SCENE 3: SMM (SOCIAL MEDIA MARKETING & VIRAL BROADCAST RADAR)
   ========================================================================= */
const SmmSocialRadarScene: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Radial Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#070B1A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      {/* SVG 3D Concentric Viral Reach Radar */}
      <svg
        viewBox="0 0 600 360"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="smmPedestalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#833AB4" />
            <stop offset="50%" stopColor="#FD1D1D" />
            <stop offset="100%" stopColor="#FCB045" />
          </linearGradient>
          <filter id="smmGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Elliptical Platform / Shadow Pedestal */}
        <g transform="translate(300, 270)">
          <ellipse cx="0" cy="8" rx="65" ry="18" fill="#CBD5E1" opacity="0.5" filter="url(#smmGlow)" />
          <ellipse cx="0" cy="0" rx="55" ry="16" fill="url(#smmPedestalGrad)" stroke="#94A3B8" strokeWidth="1.5" />
          <ellipse cx="0" cy="-3" rx="46" ry="13" fill="#FFFFFF" stroke="#0ae448" strokeWidth="1.5" opacity="0.8" />
        </g>

        {/* =========================================================================
            3 CONCENTRIC VIRAL WAVE RADAR RINGS (Tilted 3D Isometric View)
            ========================================================================= */}
        {/* Ring 1: Outer Viral Wave */}
        <path
          d="M100 270 C100 120, 500 120, 500 270"
          stroke="#94A3B8"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          opacity="0.7"
        />

        {/* Ring 2: Middle Community Wave */}
        <path
          d="M160 270 C160 160, 440 160, 440 270"
          stroke="#64748B"
          strokeWidth="2"
          fill="none"
          opacity="0.85"
        />

        {/* Ring 3: Inner Core Brand Wave */}
        <path
          d="M220 270 C220 200, 380 200, 380 270"
          stroke="#0ae448"
          strokeWidth="2"
          fill="none"
          filter="url(#smmGlow)"
        />

        {/* Dynamic Expanding Pulse Wave (Animated Sonar Beacon) */}
        <path
          d="M160 270 C160 160, 440 160, 440 270"
          stroke="#0ae448"
          strokeWidth="3"
          fill="none"
          className="animate-sonar-pulse"
        />

        {/* =========================================================================
            FLOATING SOCIAL MEDIA SATELLITES
            ========================================================================= */}
        {/* Central Core: Viral JanusMaad Broadcast Node */}
        <g className="animate-bob-slow" transform="translate(283, 245)">
          <circle cx="17" cy="17" r="16" fill="#070B1A" stroke="#0ae448" strokeWidth="2" filter="url(#smmGlow)" />
          <text x="17" y="23" fill="#0ae448" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">JM</text>
        </g>

        {/* Satellite 1: Instagram Reel Satellite (Riding on Outer Wave) */}
        <g className="animate-bob-mid" transform="translate(285, 95)">
          <circle cx="16" cy="16" r="15" fill="url(#igGradient)" stroke="#FFFFFF" strokeWidth="1.5" filter="url(#smmGlow)" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">IG</text>
        </g>

        {/* Satellite 2: TikTok Viral Trends Node (Riding on Middle Wave) */}
        <g className="animate-bob-slow" transform="translate(195, 175)">
          <circle cx="16" cy="16" r="15" fill="#070B1A" stroke="#25F4EE" strokeWidth="2" />
          <text x="16" y="21" fill="#25F4EE" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">TT</text>
        </g>

        {/* Satellite 3: YouTube Shorts / Authority Shield (Riding on Middle Wave) */}
        <g className="animate-bob-fast" transform="translate(365, 175)">
          <circle cx="16" cy="16" r="15" fill="#070B1A" stroke="#FF0000" strokeWidth="1.5" />
          <text x="16" y="21" fill="#FF0000" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">YT</text>
        </g>

        {/* Satellite 4: Viral Reach Metric Pill Badge */}
        <g className="animate-bob-mid" transform="translate(345, 125)">
          <rect x="0" y="0" width="56" height="22" rx="11" fill="#070B1A" stroke="#0ae448" strokeWidth="1.5" />
          <text x="28" y="15" fill="#0ae448" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">14M Reach</text>
        </g>
      </svg>

      <style>{`
        @keyframes sonarPulse {
          0% { stroke-opacity: 1; stroke-width: 2; transform: scale(1); }
          50% { stroke-opacity: 0.6; stroke-width: 4; }
          100% { stroke-opacity: 0; stroke-width: 6; transform: scale(1.08); }
        }
        .animate-sonar-pulse {
          animation: sonarPulse 2.8s ease-out infinite;
          transform-origin: 300px 270px;
        }
      `}</style>
    </div>
  );
};
