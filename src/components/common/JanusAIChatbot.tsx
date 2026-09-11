import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  ChevronRight
} from 'lucide-react';
import gsap from 'gsap';
import { openWhatsApp, DISPLAY_PHONE } from '../../utils/whatsapp';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: { label: string; action: () => void; isPrimary?: boolean }[];
}

interface JanusAIChatbotProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability?: (id: any) => void;
}

// Canvas Background Component rendering floating GSAP social media platform particles
const CanvasParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Render off-screen canvases for social media & growth platform icon badges
    const iconCanvases: HTMLCanvasElement[] = [];

    const iconConfigs = [
      { name: 'Instagram', bg1: '#833ab4', bg2: '#fd1d1d', symbol: '📷' },
      { name: 'Facebook', bg1: '#1877F2', bg2: '#0b51ab', symbol: 'f' },
      { name: 'LinkedIn', bg1: '#0A66C2', bg2: '#004182', symbol: 'in' },
      { name: 'ChatGPT', bg1: '#10a37f', bg2: '#05614a', symbol: '✦' },
      { name: 'Amazon', bg1: '#FF9900', bg2: '#d87d00', symbol: 'a' },
      { name: 'Shopify', bg1: '#95BF47', bg2: '#5e8e19', symbol: 'S' },
      { name: 'Like', bg1: '#EC4899', bg2: '#be185d', symbol: '👍' },
      { name: 'Google', bg1: '#4285F4', bg2: '#1a73e8', symbol: 'G' },
      { name: 'Meta', bg1: '#0081FB', bg2: '#0055b3', symbol: '∞' }
    ];

    iconConfigs.forEach((cfg) => {
      const c = document.createElement('canvas');
      const s = 56;
      c.width = s;
      c.height = s;
      const cctx = c.getContext('2d');
      if (cctx) {
        // Draw rounded box badge
        cctx.beginPath();
        const r = 14;
        cctx.moveTo(r, 0);
        cctx.lineTo(s - r, 0);
        cctx.quadraticCurveTo(s, 0, s, r);
        cctx.lineTo(s, s - r);
        cctx.quadraticCurveTo(s, s, s - r, s);
        cctx.lineTo(r, s);
        cctx.quadraticCurveTo(0, s, 0, s - r);
        cctx.lineTo(0, r);
        cctx.quadraticCurveTo(0, 0, r, 0);
        cctx.closePath();

        const grad = cctx.createLinearGradient(0, 0, s, s);
        grad.addColorStop(0, cfg.bg1);
        grad.addColorStop(1, cfg.bg2);
        cctx.fillStyle = grad;
        cctx.fill();

        // Glossy border
        cctx.strokeStyle = 'rgba(255,255,255,0.4)';
        cctx.lineWidth = 2;
        cctx.stroke();

        // Symbol Text
        cctx.fillStyle = '#FFFFFF';
        cctx.font = `bold ${cfg.symbol === '📷' || cfg.symbol === '👍' ? 24 : 26}px sans-serif`;
        cctx.textAlign = 'center';
        cctx.textBaseline = 'middle';
        cctx.fillText(cfg.symbol, s / 2, s / 2 + (cfg.symbol === 'f' || cfg.symbol === 'in' ? 1 : 0));
      }
      iconCanvases.push(c);
    });

    // Create particles array (inspired by CodePen GSAP flair canvas animation)
    const particleCount = 28;
    interface Particle {
      x: number;
      y: number;
      scale: number;
      rotate: number;
      alpha: number;
      angle: number;
      radiusOffset: number;
      speed: number;
      iconIndex: number;
      baseSize: number;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: width / 2,
        y: height / 2,
        scale: 0.3 + Math.random() * 0.5,
        rotate: Math.random() * Math.PI * 2,
        alpha: 0.2 + Math.random() * 0.5,
        angle: (i / particleCount) * Math.PI * 2,
        radiusOffset: 40 + Math.random() * (Math.max(width, height) * 0.45),
        speed: 0.002 + Math.random() * 0.004,
        iconIndex: i % iconCanvases.length,
        baseSize: 32 + Math.random() * 16
      });
    }

    // GSAP animation controlling particle properties
    particles.forEach((p, i) => {
      gsap.to(p, {
        scale: p.scale * 1.3,
        rotate: p.rotate + Math.PI * 2,
        alpha: p.alpha > 0.4 ? 0.2 : 0.6,
        duration: 4 + (i % 5),
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: (i % 7) * 0.4
      });
    });

    // Continuous Canvas Render Loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.angle += p.speed;
        p.x = width / 2 + Math.cos(p.angle * 3) * p.radiusOffset;
        p.y = height / 2 + Math.sin(p.angle * 2) * (p.radiusOffset * 0.8);

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotate);
        ctx.scale(p.scale, p.scale);

        const img = iconCanvases[p.iconIndex];
        if (img) {
          ctx.drawImage(img, -p.baseSize / 2, -p.baseSize / 2, p.baseSize, p.baseSize);
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      particles.forEach((p) => gsap.killTweensOf(p));
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0 w-full h-full opacity-45"
    />
  );
};

export const JanusAIChatbot: React.FC<JanusAIChatbotProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const initialGreeting: Message = {
    id: 'msg-1',
    sender: 'bot',
    text: "👋 Hi! I'm Janus AI, your 24/7 Digital Growth & Performance Strategist. How can I help scale your revenue today?",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    actions: [
      { label: '🚀 Explore Core Services', action: () => handlePresetQuery('What services do you offer?') },
      { label: '📊 Estimate ROAS & Lift', action: () => handlePresetQuery('How do I estimate my ROAS lift?') },
      { label: '📅 Book Free Growth Audit', action: () => onOpenAudit('acquire-performance'), isPrimary: true },
      { label: '💬 Chat on WhatsApp', action: () => openWhatsApp('Hi JanusMAAD! I need help with growth strategy.') }
    ]
  };

  const [messages, setMessages] = useState<Message[]>([initialGreeting]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // AI Response Matcher Knowledge Base
  const generateBotReply = (userQuery: string): Omit<Message, 'id' | 'timestamp'> => {
    const q = userQuery.toLowerCase();

    // 1. Performance Marketing & Ads
    if (q.includes('performance') || q.includes('ad') || q.includes('meta') || q.includes('google') || q.includes('roas') || q.includes('paid')) {
      return {
        sender: 'bot',
        text: "⚡ **Performance Marketing (Acquire Pillar)**\n\nWe build full-funnel ad campaigns across Meta (Instagram/FB), Google Ads, Performance Max, and Amazon. Our AI-driven bidding and dynamic creative optimization focus strictly on profitable ROAS & lower CAC.\n\nKey Deliverables:\n• Server-side CAPI telemetry (99%+ attribution)\n• Continuous creative testing sprints\n• Dynamic budget re-allocation to winning channels",
        actions: [
          { label: 'Estimate Revenue Lift', action: () => { setIsOpen(false); if (onNavigateCapability) onNavigateCapability('acquire-performance'); else window.location.hash = 'acquire-performance'; } },
          { label: 'Book Ad Audit', action: () => onOpenAudit('acquire-performance'), isPrimary: true },
          { label: 'WhatsApp Strategist', action: () => openWhatsApp('Hi! I want to discuss Performance Marketing campaigns.') }
        ]
      };
    }

    // 2. SEO & Search Everywhere (AEO)
    if (q.includes('seo') || q.includes('search') || q.includes('google rank') || q.includes('ai search') || q.includes('aeo')) {
      return {
        sender: 'bot',
        text: "🔍 **SEO & Search Everywhere Optimisation (Acquire Pillar)**\n\nWe engineer technical SEO and AI Search Optimisation (AEO) to make your brand dominant across Google Search, YouTube, ChatGPT, and Perplexity.\n\nKey Highlights:\n• Technical Core Web Vitals audit\n• Programmatic content & keyword velocity\n• AI Answer Engine Indexing (ChatGPT/Perplexity)",
        actions: [
          { label: 'View SEO Service', action: () => { setIsOpen(false); if (onNavigateCapability) onNavigateCapability('acquire-seo'); else window.location.hash = 'acquire-seo'; } },
          { label: 'Get Free SEO Audit', action: () => onOpenAudit('acquire-seo'), isPrimary: true }
        ]
      };
    }

    // 3. Social Media & Content (SMM)
    if (q.includes('smm') || q.includes('social') || q.includes('instagram') || q.includes('content') || q.includes('reels') || q.includes('ugc')) {
      return {
        sender: 'bot',
        text: "📱 **Social Media Marketing & AI Content (Acquire Pillar)**\n\nWe combine AI content engines with daily social media management and high-converting ad creatives. We test organic hooks at zero risk, then format winners into profitable paid ad units.\n\nKey Deliverables:\n• AI-assisted short-form video hooks & scripts\n• End-to-end publishing & community management\n• Organic-to-Paid creative handoff pipeline",
        actions: [
          { label: 'Explore SMM Strategy', action: () => { setIsOpen(false); if (onNavigateCapability) onNavigateCapability('acquire-smm'); else window.location.hash = 'acquire-smm'; } },
          { label: 'Book Content Audit', action: () => onOpenAudit('acquire-smm'), isPrimary: true }
        ]
      };
    }

    // 4. Web Design, Shopify & Speed (Build)
    if (q.includes('shopify') || q.includes('build') || q.includes('website') || q.includes('speed') || q.includes('dev') || q.includes('landing page')) {
      return {
        sender: 'bot',
        text: "🚀 **Design & Development (Convert Pillar)**\n\nWe build high-speed bespoke landing pages and custom Shopify storefronts tuned to sub-1-second mobile speeds (95+ Core Web Vitals guarantees).\n\nWhy Brands Choose Us:\n• Zero heavy third-party app bloat\n• Custom mobile-first Figma UI/UX\n• Built specifically for paid media landing conversion",
        actions: [
          { label: 'Explore Shopify Builds', action: () => { setIsOpen(false); if (onNavigateCapability) onNavigateCapability('convert-build'); else window.location.hash = 'convert-build'; } },
          { label: 'Request Speed Teardown', action: () => onOpenAudit('convert-build'), isPrimary: true }
        ]
      };
    }

    // 5. CRO & Conversion Rate Optimisation
    if (q.includes('cro') || q.includes('conversion') || q.includes('aov') || q.includes('ab test') || q.includes('heatmaps')) {
      return {
        sender: 'bot',
        text: "📈 **Conversion Rate Optimisation (Convert Pillar)**\n\nWe make the traffic you already pay for worth more through research-led A/B testing, Clarity/Hotjar session science, and slide-cart AOV engineering.\n\nKey Deliverables:\n• Bi-weekly 95%+ confidence split tests\n• Slide-cart upsell & free shipping progress bars\n• Frictionless checkout flow re-architecture",
        actions: [
          { label: 'Calculate CRO Lift', action: () => { setIsOpen(false); if (onNavigateCapability) onNavigateCapability('convert-cro'); else window.location.hash = 'convert-cro'; } },
          { label: 'Get Free CRO Audit', action: () => onOpenAudit('convert-cro'), isPrimary: true }
        ]
      };
    }

    // 6. Retention Marketing, Klaviyo & WhatsApp
    if (q.includes('retention') || q.includes('email') || q.includes('klaviyo') || q.includes('sms') || q.includes('whatsapp') || q.includes('ltv')) {
      return {
        sender: 'bot',
        text: "💌 **Retention & Lifecycle Marketing (Retain Pillar)**\n\nWe automate Email, SMS, and WhatsApp Business API flows that turn 1-time buyers into repeat customers and lift 90-day LTV.\n\nKey Highlights:\n• Klaviyo & WhatsApp automated checkout recovery\n• Predictive RFM customer segmentation\n• 99%+ Primary inbox deliverability guarantees",
        actions: [
          { label: 'Explore Retention Flows', action: () => { setIsOpen(false); if (onNavigateCapability) onNavigateCapability('retain-marketing'); else window.location.hash = 'retain-marketing'; } },
          { label: 'Get Retention Teardown', action: () => onOpenAudit('retain-marketing'), isPrimary: true }
        ]
      };
    }

    // 7. Pricing & Engagement Models
    if (q.includes('price') || q.includes('cost') || q.includes('pricing') || q.includes('retainer') || q.includes('plan')) {
      return {
        sender: 'bot',
        text: "💼 **JanusMAAD Engagement & Pricing Models**\n\nWe offer 3 flexible ways to partner with us:\n\n1. **Growth Retainer**: End-to-end execution across ad management, creative production, and CRO.\n2. **Performance Hybrid**: Base retainer + profit-share tied strictly to verified revenue growth.\n3. **Sprint Projects**: Fixed-scope Shopify storefront builds, CRO teardowns, or custom landing pages.",
        actions: [
          { label: 'Talk Pricing on WhatsApp', action: () => openWhatsApp('Hi! I would like to inquire about pricing and retainers.'), isPrimary: true },
          { label: 'Book Audit Consultation', action: () => onOpenAudit('pricing') }
        ]
      };
    }

    // 8. Contact, Location, Phone
    if (q.includes('contact') || q.includes('phone') || q.includes('number') || q.includes('office') || q.includes('noida') || q.includes('location') || q.includes('email')) {
      return {
        sender: 'bot',
        text: `📍 **JanusMAAD Digital HQ & Direct Contact**\n\n• **Direct Phone / WhatsApp:** ${DISPLAY_PHONE}\n• **Email:** hello@janusmaad.com\n• **Noida Hub Address:** HD77, Sector 135, Noida, UP 201304, India\n• **Working Hours:** Monday – Saturday (9:00 AM – 8:00 PM IST)`,
        actions: [
          { label: 'Chat Direct on WhatsApp', action: () => openWhatsApp('Hi JanusMAAD team!'), isPrimary: true },
          { label: 'Request Call Back', action: () => onOpenAudit('call') }
        ]
      };
    }

    // Default Fallback Response
    return {
      sender: 'bot',
      text: "I can help you analyze your current marketing performance, calculate revenue lifts, or connect you directly with a senior growth strategist!\n\nWhat would you like to explore?",
      actions: [
        { label: '🚀 View All Services', action: () => { setIsOpen(false); if (onNavigateCapability) onNavigateCapability('receipts'); else window.location.hash = 'receipts'; } },
        { label: '📊 Calculate ROAS Lift', action: () => { setIsOpen(false); if (onNavigateCapability) onNavigateCapability('acquire-performance'); else window.location.hash = 'acquire-performance'; } },
        { label: '📅 Book Free Growth Audit', action: () => onOpenAudit('acquire-performance'), isPrimary: true },
        { label: '💬 Chat on WhatsApp', action: () => openWhatsApp('Hi! I need assistance with growth strategy.') }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotReply(query);
      const botMsg: Message = {
        ...botReply,
        id: `bot-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handlePresetQuery = (presetText: string) => {
    handleSendMessage(presetText);
  };

  return (
    <>
      {/* Floating Assistant Orb Trigger Button (Positioned to left of WhatsApp button) */}
      <div className="fixed bottom-6 right-24 sm:right-28 z-50 flex items-center gap-2 group">
        {/* Tooltip */}
        <div className="hidden sm:flex items-center gap-1.5 bg-ink text-white text-xs font-mono font-bold px-3 py-2 rounded-xl shadow-2xl border border-hairline opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none translate-x-2 group-hover:translate-x-0 transition-transform">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>Ask Janus AI</span>
        </div>

        {/* Custom 3D Glowing Sphere Button (Matching user reference image) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Janus AI Assistant"
          className="relative w-16 h-16 sm:w-[68px] sm:h-[68px] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden group animate-orb-glow border-2 border-white/20"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #312e81 0%, #1e1b4b 45%, #070913 90%)'
          }}
        >
          {/* Top-Left Specular Glare Reflection for 3D Sphere Depth */}
          <span className="absolute top-2 left-3 w-5 h-2.5 rounded-full bg-white/30 blur-[1px] transform -rotate-12 pointer-events-none z-20" />

          {/* Outer Glowing Gradient Halo Ring */}
          <span 
            className="absolute inset-0 rounded-full p-[2.5px] pointer-events-none animate-spin-slow"
            style={{
              background: 'linear-gradient(135deg, #00F2FE 0%, #38bdf8 30%, #a855f7 65%, #f43f5e 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }}
          />

          {/* 3D AI Robot Glowing Blinking Eyes */}
          <div className="flex items-center gap-2 z-10 animate-ai-eye-blink">
            {/* Left Eye */}
            <div className="relative w-3 h-5 rounded-full bg-gradient-to-b from-cyan-200 via-purple-300 to-violet-500 shadow-[0_0_14px_#a855f7,0_0_6px_#38bdf8] flex items-start justify-center pt-0.5">
              <span className="w-1 h-1 rounded-full bg-white opacity-90" />
            </div>
            {/* Right Eye */}
            <div className="relative w-3 h-5 rounded-full bg-gradient-to-b from-cyan-200 via-purple-300 to-violet-500 shadow-[0_0_14px_#a855f7,0_0_6px_#38bdf8] flex items-start justify-center pt-0.5">
              <span className="w-1 h-1 rounded-full bg-white opacity-90" />
            </div>
          </div>
        </button>
      </div>

      {/* Expandable Janus AI Glassmorphism Chat Window */}
      {isOpen && (
        <div 
          className="fixed bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[420px] max-h-[82vh] h-[620px] z-50 text-white rounded-3xl border border-white/20 shadow-[0_20px_60px_rgba(124,58,237,0.35)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-250 backdrop-blur-2xl relative"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(30, 27, 75, 0.85) 0%, rgba(10, 13, 29, 0.92) 100%)'
          }}
        >
          {/* Animated Canvas Particle Background with Social Media & Growth Platform Icons */}
          <CanvasParticleBackground />

          {/* Top Glass Specular Reflection Highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10" />

          {/* Header */}
          <div className="relative z-10 p-4 sm:p-5 bg-white/10 border-b border-white/15 flex items-center justify-between backdrop-blur-xl">
            <div className="flex items-center gap-3">
              {/* Glowing Mini 3D Orb */}
              <div 
                className="w-10 h-10 rounded-full relative flex items-center justify-center bg-black border border-violet/50 shadow-[0_0_15px_rgba(168,85,247,0.6)] overflow-hidden shrink-0"
                style={{
                  background: 'radial-gradient(circle at 35% 30%, #312e81 0%, #1e1b4b 50%, #070913 100%)'
                }}
              >
                <span className="absolute top-1 left-1.5 w-3 h-1.5 rounded-full bg-white/30 blur-[0.5px] transform -rotate-12 pointer-events-none" />
                <div className="flex items-center gap-1.5 z-10 animate-ai-eye-blink">
                  <span className="w-2 h-3.5 rounded-full bg-gradient-to-b from-cyan-200 to-violet-400 shadow-[0_0_8px_#a855f7]" />
                  <span className="w-2 h-3.5 rounded-full bg-gradient-to-b from-cyan-200 to-violet-400 shadow-[0_0_8px_#a855f7]" />
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                  <span>Janus AI Strategist</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
                </div>
                <div className="text-[11px] font-mono text-white/70">24/7 Digital Growth Intelligence</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/15 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="relative z-10 flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 font-body text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} space-y-1.5`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-violet to-purple-600 text-white rounded-br-xs shadow-lg font-medium border border-violet-400/40 backdrop-blur-md'
                      : 'bg-black/40 text-white/95 border border-white/20 rounded-bl-xs backdrop-blur-xl shadow-md'
                  }`}
                >
                  {msg.text}
                </div>

                <span className="text-[9px] font-mono text-white/50 px-1">
                  {msg.timestamp}
                </span>

                {/* Optional Interactive Quick Action Buttons */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 max-w-[95%]">
                    {msg.actions.map((act, idx) => (
                      <button
                        key={idx}
                        onClick={act.action}
                        className={`text-xs font-mono font-bold px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1 ${
                          act.isPrimary
                            ? 'bg-violet text-white hover:bg-violet-deep shadow-lg hover:shadow-violet-500/25 border border-violet-400/40'
                            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md'
                        }`}
                      >
                        <span>{act.label}</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 bg-black/40 rounded-2xl rounded-bl-xs w-fit border border-white/20 backdrop-blur-xl">
                <span className="w-2 h-2 rounded-full bg-violet animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 rounded-full bg-violet animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 rounded-full bg-violet animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="relative z-10 px-4 py-2.5 bg-black/30 border-t border-white/15 flex items-center gap-2 overflow-x-auto no-scrollbar text-[11px] font-mono text-white/90 backdrop-blur-xl">
            <span className="text-violet-400 font-bold shrink-0">Ask:</span>
            {[
              'Performance ROAS',
              'Shopify Speed Build',
              'Klaviyo Email Flows',
              'SEO & AI Search',
              'Contact & Pricing'
            ].map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handlePresetQuery(chip)}
                className="shrink-0 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/15 cursor-pointer"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="relative z-10 p-3 sm:p-4 bg-black/40 border-t border-white/15 flex items-center gap-2 backdrop-blur-xl"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask Janus AI anything about performance growth..."
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-violet transition-colors backdrop-blur-md"
            />

            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-violet text-white hover:bg-violet-deep disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-md cursor-pointer border border-violet-400/40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};

