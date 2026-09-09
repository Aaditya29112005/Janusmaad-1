import React, { useState, useEffect, useRef } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Activity } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0); // 0: Bridge, 1: Ring, 2: Radar
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

      {/* Top Interactive Mode Tabs */}
      <div className="flex items-center justify-between gap-1.5 p-1.5 mb-3 bg-white/80 backdrop-blur-md rounded-2xl border border-hairline shadow-sm">
        {[
          { id: 0, label: '01 Traffic Bridge', icon: Activity },
          { id: 1, label: '02 3D Kinetic Ring', icon: Zap },
          { id: 2, label: '03 Wave Radar', icon: ShieldCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-display font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-ink text-bone shadow-md shadow-ink/10 scale-[1.02]'
                  : 'text-mute hover:text-ink hover:bg-black/5'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#0ae448]' : 'text-mute'}`} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">0{tab.id + 1}</span>
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
        {/* Subtle Card Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-3 border-b border-black/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0ae448] animate-pulse shadow-[0_0_8px_#0ae448]" />
            <span className="text-[11px] font-mono tracking-wider font-bold text-ink uppercase">
              {activeTab === 0 && 'ACQUIRE • HIGH-SPEED DATA BRIDGE'}
              {activeTab === 1 && 'CONVERT • 3D LIQUIDITY FLYWHEEL'}
              {activeTab === 2 && 'RETAIN • CONCENTRIC ORBITAL RADAR'}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-mono text-mute bg-bone px-2.5 py-1 rounded-lg border border-black/5">
            <Sparkles className="w-3 h-3 text-[#0ae448]" />
            <span>LIVE 3D</span>
          </div>
        </div>

        {/* Dynamic 3D Scene Viewport */}
        <div className="relative w-full aspect-[16/11] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-bone/50 to-white border border-black/5 p-2">
          {activeTab === 0 && <AcquireBridgeScene />}
          {activeTab === 1 && <ConvertRingScene />}
          {activeTab === 2 && <RetainRadarScene />}
        </div>

        {/* Card Bottom Meta Description */}
        <div className="pt-5 space-y-2">
          {activeTab === 0 && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-display font-bold text-ink">
                  High-Velocity Acquisition Bridge
                </h3>
                <span className="text-xs font-mono font-bold text-[#0ae448] bg-ink px-2.5 py-0.5 rounded-md">
                  1.2M+ Inbound/mo
                </span>
              </div>
              <p className="text-xs sm:text-sm text-mute leading-relaxed">
                Seamless infrastructure connecting Google, Meta Ads, and AI answer engines directly into high-intent conversion pathways.
              </p>
            </>
          )}

          {activeTab === 1 && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-display font-bold text-ink">
                  3D Conversion Rate Flywheel
                </h3>
                <span className="text-xs font-mono font-bold text-[#0ae448] bg-ink px-2.5 py-0.5 rounded-md">
                  +42% CVR Lift
                </span>
              </div>
              <p className="text-xs sm:text-sm text-mute leading-relaxed">
                Sub-1.2s headless storefront architecture, friction-free checkout loops, and scientific A/B testing maximizing revenue per visit.
              </p>
            </>
          )}

          {activeTab === 2 && (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-display font-bold text-ink">
                  Compounding Retention Radar
                </h3>
                <span className="text-xs font-mono font-bold text-[#0ae448] bg-ink px-2.5 py-0.5 rounded-md">
                  4.8x LTV Multiplier
                </span>
              </div>
              <p className="text-xs sm:text-sm text-mute leading-relaxed">
                Omni-channel customer lifecycle engine running automated predictive flows across Klaviyo Email, SMS, and VIP WhatsApp journeys.
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
              <span>Next Engine</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0ae448]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   SCENE 1: ACQUIRE • The High-Speed Traffic Bridge (Matching image copy.png + image.png Card 1)
   ========================================================================= */
const AcquireBridgeScene: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Perspective Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#070B1A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      {/* SVG Architectural Bridge with Speed Train & 3D Floating Nodes */}
      <svg
        viewBox="0 0 600 360"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="trainGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ae448" stopOpacity="0" />
            <stop offset="60%" stopColor="#0ae448" stopOpacity="0.4" />
            <stop offset="90%" stopColor="#0ae448" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#abff84" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="bridgeSteel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A5568" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1A202C" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="tokenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#070B1A" />
          </linearGradient>
          <linearGradient id="tokenGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sky Birds */}
        <path d="M120 70 Q126 65 132 70 Q138 65 144 70" stroke="#94A3B8" strokeWidth="1.5" fill="none" opacity="0.6" />
        <path d="M480 85 Q485 81 490 85 Q495 81 500 85" stroke="#94A3B8" strokeWidth="1.2" fill="none" opacity="0.5" />

        {/* Water Surface Line with gentle ripples */}
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

        {/* Bridge Deck */}
        <rect x="0" y="248" width="600" height="12" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />

        {/* Stone Pillar Left Tower */}
        <g opacity="0.95">
          <rect x="140" y="110" width="48" height="190" fill="#FFFFFF" stroke="#475569" strokeWidth="2" rx="4" />
          {/* Arch cutout in tower */}
          <path d="M152 250 L152 170 Q164 150 176 170 L176 250 Z" fill="#F8FAFC" stroke="#475569" strokeWidth="1.5" />
          {/* Stonework lines */}
          <line x1="140" y1="140" x2="188" y2="140" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="140" y1="180" x2="188" y2="180" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="140" y1="220" x2="188" y2="220" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="140" y1="260" x2="188" y2="260" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="140" y1="290" x2="188" y2="290" stroke="#CBD5E1" strokeWidth="1" />
        </g>

        {/* Stone Pillar Right Tower */}
        <g opacity="0.95">
          <rect x="420" y="150" width="42" height="150" fill="#FFFFFF" stroke="#475569" strokeWidth="2" rx="4" />
          <path d="M430 250 L430 190 Q441 176 452 190 L452 250 Z" fill="#F8FAFC" stroke="#475569" strokeWidth="1.5" />
          <line x1="420" y1="180" x2="462" y2="180" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="420" y1="210" x2="462" y2="210" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="420" y1="240" x2="462" y2="240" stroke="#CBD5E1" strokeWidth="1" />
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
            LIVE SPEED TRAIN / DATA CAPSULE (Crossing the bridge in a continuous loop)
            ========================================================================= */}
        <g className="animate-transit">
          {/* Luminous Energy Beam / Wake */}
          <path
            d="M0 240 L160 240 L180 244 L160 248 L0 248 Z"
            fill="url(#trainGlow)"
            filter="url(#glow)"
          />
          {/* High Speed Capsule Head */}
          <path
            d="M150 238 L178 244 L150 250 Z"
            fill="#0ae448"
            filter="url(#glow)"
          />
          {/* Segment Notches */}
          <path d="M135 239 L142 244 L135 249" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M145 239 L152 244 L145 249" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
        </g>

        {/* =========================================================================
            3D ISOMETRIC PEDESTAL & WIREFRAME (Inspired by image.png Card 1)
            ========================================================================= */}
        <g transform="translate(250, 80)">
          {/* Isometric Glass Cube Outline */}
          {/* Top Face */}
          <polygon points="50,10 90,30 50,50 10,30" fill="#E0F2FE" fillOpacity="0.4" stroke="#0284C7" strokeWidth="1.2" />
          {/* Left Face */}
          <polygon points="10,30 50,50 50,100 10,80" fill="#BAE6FD" fillOpacity="0.3" stroke="#0284C7" strokeWidth="1.2" />
          {/* Right Face */}
          <polygon points="50,50 90,30 90,80 50,100" fill="#7DD3FC" fillOpacity="0.2" stroke="#0284C7" strokeWidth="1.2" />

          {/* Isometric Cylindrical Turret on Top */}
          <ellipse cx="50" cy="20" rx="18" ry="9" fill="#0ae448" fillOpacity="0.2" stroke="#0ae448" strokeWidth="1.5" />
          <line x1="32" y1="20" x2="32" y2="34" stroke="#0ae448" strokeWidth="1.5" />
          <line x1="68" y1="20" x2="68" y2="34" stroke="#0ae448" strokeWidth="1.5" />
          <ellipse cx="50" cy="34" rx="18" ry="9" fill="none" stroke="#0ae448" strokeWidth="1.5" />

          {/* Central Vertical Axis */}
          <line x1="50" y1="0" x2="50" y2="120" stroke="#0284C7" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
        </g>

        {/* =========================================================================
            FLOATING ORBITAL 3D TOKENS (Hovering in 3D Space)
            ========================================================================= */}
        {/* Token 1: Black 'T' Token (Left) */}
        <g className="animate-bob-slow" transform="translate(195, 95)">
          <circle cx="16" cy="16" r="15" fill="url(#tokenGrad1)" stroke="#334155" strokeWidth="1.5" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">T</text>
        </g>

        {/* Token 2: Black 'T' Token (Lower Left) */}
        <g className="animate-bob-fast" transform="translate(190, 140)">
          <circle cx="14" cy="14" r="13" fill="url(#tokenGrad1)" stroke="#334155" strokeWidth="1.5" />
          <text x="14" y="19" fill="#CBD5E1" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">T</text>
        </g>

        {/* Token 3: Cyan Meta/Google Ads Node (Top Right) */}
        <g className="animate-bob-mid" transform="translate(365, 105)">
          <circle cx="16" cy="16" r="15" fill="url(#tokenGradCyan)" stroke="#38BDF8" strokeWidth="1.5" filter="url(#glow)" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">M</text>
          <circle cx="26" cy="6" r="3" fill="#0ae448" />
        </g>

        {/* Token 4: Blue AI SEO Node (Center Right) */}
        <g className="animate-bob-slow" transform="translate(340, 150)">
          <circle cx="15" cy="15" r="14" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="15" y="20" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">AI</text>
        </g>
      </svg>

      {/* Embedded CSS Keyframes for High-Speed Transit & Bobbing */}
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
   SCENE 2: CONVERT • 3D Kinetic Ring Flywheel (Matching image.png Card 2)
   ========================================================================= */
const ConvertRingScene: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Radial Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#070B1A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      {/* SVG 3D Tilted Kinetic Ring Mechanism */}
      <svg
        viewBox="0 0 600 360"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ringGradOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="40%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="ringGradInner" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="glowMint" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ae448" />
            <stop offset="100%" stopColor="#0E9C97" />
          </linearGradient>
          <filter id="ringGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Speed Motion Streaks Passing Through Center */}
        <line x1="140" y1="120" x2="210" y2="120" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <line x1="160" y1="180" x2="230" y2="180" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
        <line x1="390" y1="160" x2="470" y2="160" stroke="#0ae448" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <line x1="410" y1="210" x2="460" y2="210" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* 3D TILTED ROTATING RING MECHANISM */}
        <g transform="translate(300, 180) rotate(-12)" className="animate-spin-gentle">
          {/* Ring Outer Depth Rim (Back) */}
          <ellipse cx="0" cy="0" rx="64" ry="145" fill="none" stroke="#64748B" strokeWidth="14" opacity="0.4" />
          
          {/* Ring Outer Face */}
          <ellipse cx="-10" cy="0" rx="60" ry="142" fill="none" stroke="url(#ringGradOuter)" strokeWidth="18" />
          <ellipse cx="-10" cy="0" rx="46" ry="126" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />

          {/* Engraved Ring Ticks / Scale Marks */}
          {[-110, -85, -60, -35, -10, 15, 40, 65, 90, 115].map((y) => (
            <line key={y} x1="-16" y1={y} x2="-4" y2={y} stroke="#64748B" strokeWidth="1.5" opacity="0.6" />
          ))}

          {/* Aperture Shadow & Inner Light */}
          <ellipse cx="-10" cy="0" rx="34" ry="105" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <ellipse cx="-14" cy="0" rx="28" ry="95" fill="none" stroke="#0ae448" strokeWidth="1" strokeDasharray="6 4" opacity="0.6" />
        </g>

        {/* =========================================================================
            FLOATING 3D TOKENS (Orbital positions matching image.png Card 2)
            ========================================================================= */}
        {/* Token 1: Black 'T' Token (Left) */}
        <g className="animate-bob-slow" transform="translate(190, 130)">
          <circle cx="18" cy="18" r="17" fill="#070B1A" stroke="#334155" strokeWidth="1.5" />
          <text x="18" y="24" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">T</text>
        </g>

        {/* Token 2: Black 'T' Token (Lower Left) */}
        <g className="animate-bob-fast" transform="translate(220, 175)">
          <circle cx="17" cy="17" r="16" fill="#070B1A" stroke="#334155" strokeWidth="1.5" />
          <text x="17" y="23" fill="#FFFFFF" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">T</text>
        </g>

        {/* Token 3: Muted Gray 'T' Token (Bottom Left) */}
        <g className="animate-bob-mid" transform="translate(190, 215)">
          <circle cx="16" cy="16" r="15" fill="#94A3B8" stroke="#64748B" strokeWidth="1.5" opacity="0.8" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">T</text>
        </g>

        {/* Token 4: Black 'T' Token (Bottom Lower) */}
        <g className="animate-bob-slow" transform="translate(200, 255)">
          <circle cx="16" cy="16" r="15" fill="#070B1A" stroke="#334155" strokeWidth="1.5" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">T</text>
        </g>

        {/* Token 5: Blue Ethereum / CRO Token (Top Right) */}
        <g className="animate-bob-mid" transform="translate(370, 120)">
          <circle cx="17" cy="17" r="16" fill="#4F46E5" stroke="#818CF8" strokeWidth="1.5" filter="url(#ringGlow)" />
          {/* Diamond Eth Logo */}
          <polygon points="17,8 24,18 17,21 10,18" fill="#FFFFFF" />
          <polygon points="17,22 24,19 17,27 10,19" fill="#CBD5E1" />
        </g>

        {/* Token 6: Blue Currency Dollar Token (Mid Right) */}
        <g className="animate-bob-fast" transform="translate(365, 170)">
          <circle cx="16" cy="16" r="15" fill="#0284C7" stroke="#38BDF8" strokeWidth="1.5" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">$</text>
        </g>

        {/* Token 7: Black Cyan 'X' Token (Bottom Right) */}
        <g className="animate-bob-slow" transform="translate(375, 230)">
          <circle cx="17" cy="17" r="16" fill="#070B1A" stroke="#0ae448" strokeWidth="1.5" />
          <path d="M11 11 L23 23 M23 11 L11 23" stroke="#0ae448" strokeWidth="2.5" strokeLinecap="round" />
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
   SCENE 3: RETAIN • 3D Concentric Wave Radar (Matching image.png Card 3)
   ========================================================================= */
const RetainRadarScene: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Radial Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#070B1A_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

      {/* SVG 3D Concentric Wave Radar */}
      <svg
        viewBox="0 0 600 360"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pedestalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
          <filter id="radarGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Base Elliptical Platform / Shadow Pedestal */}
        <g transform="translate(300, 270)">
          {/* Ground Soft Ambient Shadow */}
          <ellipse cx="0" cy="8" rx="65" ry="18" fill="#CBD5E1" opacity="0.5" filter="url(#radarGlow)" />
          {/* Base Pedestal Ring */}
          <ellipse cx="0" cy="0" rx="55" ry="16" fill="url(#pedestalGrad)" stroke="#94A3B8" strokeWidth="1.5" />
          <ellipse cx="0" cy="-3" rx="46" ry="13" fill="#FFFFFF" stroke="#0ae448" strokeWidth="1.5" opacity="0.8" />
        </g>

        {/* =========================================================================
            3 CONCENTRIC ORBITAL WAVE RADAR RINGS (Tilted 3D Isometric View)
            ========================================================================= */}
        {/* Ring 1: Outer Large Dome Wave */}
        <path
          d="M100 270 C100 120, 500 120, 500 270"
          stroke="#94A3B8"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          opacity="0.7"
        />

        {/* Ring 2: Middle Dome Wave */}
        <path
          d="M160 270 C160 160, 440 160, 440 270"
          stroke="#64748B"
          strokeWidth="2"
          fill="none"
          opacity="0.85"
        />

        {/* Ring 3: Inner Core Dome Wave */}
        <path
          d="M220 270 C220 200, 380 200, 380 270"
          stroke="#0ae448"
          strokeWidth="2"
          fill="none"
          filter="url(#radarGlow)"
        />

        {/* Dynamic Expanding Pulse Wave (Animated Sonar Ring) */}
        <path
          d="M160 270 C160 160, 440 160, 440 270"
          stroke="#0ae448"
          strokeWidth="3"
          fill="none"
          className="animate-sonar-pulse"
        />

        {/* =========================================================================
            FLOATING SATELLITES & TOKENS (Positions matching image.png Card 3)
            ========================================================================= */}
        {/* Central Base Core Token 'T' */}
        <g className="animate-bob-slow" transform="translate(283, 245)">
          <circle cx="17" cy="17" r="16" fill="#070B1A" stroke="#334155" strokeWidth="1.5" />
          <text x="17" y="23" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Space Grotesk, sans-serif">T</text>
        </g>

        {/* Satellite 1: Top Apex 'X' Token (Riding on Outer Wave) */}
        <g className="animate-bob-mid" transform="translate(285, 95)">
          <circle cx="15" cy="15" r="14" fill="#070B1A" stroke="#38BDF8" strokeWidth="1.5" />
          <path d="M10 10 L20 20 M20 10 L10 20" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Satellite 2: Left Middle Green Token (Riding on Middle Wave) */}
        <g className="animate-bob-slow" transform="translate(195, 175)">
          <circle cx="14" cy="14" r="13" fill="#070B1A" stroke="#0ae448" strokeWidth="1.5" filter="url(#radarGlow)" />
          <circle cx="14" cy="14" r="5" fill="#0ae448" />
        </g>

        {/* Satellite 3: Center-Right Shield Retention Token (Riding on Middle Wave) */}
        <g className="animate-bob-fast" transform="translate(365, 175)">
          <circle cx="15" cy="15" r="14" fill="#070B1A" stroke="#0284C7" strokeWidth="1.5" />
          {/* Shield Icon */}
          <path d="M15 9 L21 11 V16 C21 19 15 22 15 22 C15 22 9 19 9 16 V11 Z" fill="#38BDF8" />
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
