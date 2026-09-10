import React from 'react';
import { 
  Flame,
  ImageIcon,
  Play,
  Video,
  Sparkles,
  Share2,
  Megaphone
} from 'lucide-react';
import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TestimonialsMarquee } from '../testimonials/TestimonialsMarquee';

interface SMMServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const SMMService: React.FC<SMMServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Marketing Agency | AI Content, Social Management & Ad Creatives",
    "provider": {
      "@type": "Organization",
      "name": "Janusmaad Digital",
      "url": "https://janusmaad.com"
    },
    "serviceType": "Social Media Marketing Agency",
    "areaServed": ["India", "Global"],
    "description": "AI-generated content, end-to-end social media management, and high-converting performance ad creatives."
  };

  // Mock vertical video tiles for the feed layout
  const feedTiles = [
    { title: "AI Generated Visual Hook", metric: "320k Views", tag: "AI Content" },
    { title: "Founder Social Story", metric: "3.8x ROAS", tag: "Social Management" },
    { title: "High-CTR Video Ad", metric: "4.8x ROAS", tag: "Ad Creative" },
    { title: "AI Avatar B-Roll Demo", metric: "18k Shares", tag: "AI Generated" },
    { title: "Community Campaign", metric: "850k Reach", tag: "Social Management" },
    { title: "Direct Response Reel", metric: "5.2x ROAS", tag: "Ad Creative" }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <button
          onClick={() => onNavigateCapability('receipts')}
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-violet transition-colors"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. HERO SECTION: variant="feed" (Slow vertical marquee of 9:16 tiles behind copy) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative overflow-hidden">
        <div
          className="rounded-[24px] p-8 sm:p-14 space-y-8 relative overflow-hidden shadow-2xl text-white"
          style={{
            background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
            boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Glass Glare */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
          
          {/* Background Marquee of 9:16 vertical content tiles */}
          <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full opacity-25 pointer-events-none overflow-hidden flex gap-4 -z-0">
            <div className="flex flex-col gap-4 animate-marquee-vertical">
              {feedTiles.concat(feedTiles).map((tile, idx) => (
                <div key={idx} className="w-40 h-64 bg-white/20 border border-white/30 rounded-2xl p-3 flex flex-col justify-between shrink-0 backdrop-blur-md">
                  <span className="text-[10px] font-mono bg-white/30 text-white font-bold px-2 py-0.5 rounded-full w-fit">{tile.tag}</span>
                  <div>
                    <div className="text-xs font-bold text-white">{tile.title}</div>
                    <div className="text-[10px] text-sky-100 font-mono font-semibold">{tile.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-white/20 text-white text-xs font-mono font-bold rounded-full border border-white/40 uppercase backdrop-blur-md">
                ACQUIRE PILLAR • SOCIAL MEDIA MARKETING
              </span>
              <span className="px-3 py-1 bg-black/20 text-white/90 text-xs font-mono rounded-full">
                SLUG: services/social-media-marketing
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight drop-shadow-xs">
              AI Content, Social Management & High-ROAS Ad Creatives<span className="text-sky-200">.</span>
            </h1>

            <p className="text-base sm:text-lg text-sky-100 font-medium leading-relaxed font-body">
              Engineered social engines blending cutting-edge AI generated content, seamless social media management, and high-converting performance ad creatives that drive measurable brand growth.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAudit('acquire-smm')}
                className="py-3.5 px-7 rounded-xl bg-white text-[#1D5B9A] font-display font-bold text-sm hover:bg-white/95 transition-all shadow-lg cursor-pointer"
              >
                Get Free Content & Ad Creative Audit →
              </button>
            </div>

            {/* Supporting Keywords */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap gap-2 text-xs font-mono text-sky-100">
              <span className="text-white font-bold font-mono uppercase">FOCUS AREAS:</span>
              <span>AI Generated Content</span> |
              <span>Social Media Management</span> |
              <span>Performance Ad Creatives</span> |
              <span>UGC & Video Production</span>
            </div>
          </div>
        </div>
      </div>


      {/* CORE DIFFERENTIATING ARGUMENT: ORGANIC TO PAID CREATIVE HANDOFF PIPELINE */}
      <div id="organic-to-paid" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 border border-violet/40 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-teal text-xs font-mono font-bold uppercase">
              <Flame className="w-4 h-4 text-teal" />
              THE JANUSMAAD DIFFERENTIATOR: CREATIVE TESTING GROUND
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              From AI Generation & Social Management to Scalable Ad Creatives
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              We leverage AI content engines and daily social media management to rapidly test hooks at zero additional ad waste. When an AI or organic creative concept proves out, we immediately format it into high-converting ad creative for paid campaigns.
            </p>
          </div>

          {/* 4-Step Visual Handoff Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 font-mono text-xs">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-teal font-bold">STEP 01 • AI GENERATION</div>
              <div className="font-bold text-white text-sm">Generate AI Hooks & Imagery</div>
              <p className="text-white/60">Produce 20+ synthetic assets & video variations instantly.</p>
            </div>

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-teal font-bold">STEP 02 • SOCIAL MANAGEMENT</div>
              <div className="font-bold text-white text-sm">Publish & Engage</div>
              <p className="text-white/60">Schedule across platforms & manage organic community signals.</p>
            </div>

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-teal font-bold">STEP 03 • AD CREATIVE HANDOFF</div>
              <div className="font-bold text-white text-sm">Format for Paid Ads</div>
              <p className="text-white/60">Transform organic winners into high-converting ad creative units.</p>
            </div>

            <div className="p-5 bg-teal/20 rounded-2xl border border-teal/40 space-y-2">
              <div className="text-teal font-bold">STEP 04 • PROFIT SCALE</div>
              <div className="font-bold text-white text-sm">Scale Meta & TikTok Ads</div>
              <p className="text-white/80">Scale top-performing ad creative across ASC & video campaigns.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. THE 3 CORE FOCUS AREAS (AI CONTENT, SOCIAL MANAGEMENT, AD CREATIVES) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            OUR 3 CORE CAPABILITIES
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Specialized Social & Creative Pillars
          </h2>
        </div>

        {/* 3 Large Litmus Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Pillar 1: AI Generated Content (Light Blue: #A8D5FF -> #5B8FBD) */}
          <div
            id="ai-content"
            className="litmus-card-1 relative rounded-[24px] p-8 space-y-6 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-2 text-[#07101E]"
            style={{
              background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-white/60 border border-white/80 rounded-2xl flex items-center justify-center text-[#07101E] shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-white/60 border border-white/80 text-[#07101E] text-xs font-mono font-bold rounded-full w-fit">
                PILLAR 01 • LIGHT BLUE
              </span>
              <h3 className="text-2xl font-display font-extrabold text-[#07101E] tracking-tight">
                AI Generated Content
              </h3>
              <p className="text-sm text-[#0A2540] font-medium leading-relaxed">
                Hyper-realistic AI image generation, synthetic video avatars, automated script writing, and rapid AI visual iteration for maximum asset volume at unmatched speed.
              </p>
              <ul className="space-y-2.5 text-xs font-semibold text-[#07101E] pt-2 border-t border-[#07101E]/15">
                <li className="flex items-center gap-2">• Generative AI Visuals & Product Shots</li>
                <li className="flex items-center gap-2">• AI Synthetic Script & Voice Synthesis</li>
                <li className="flex items-center gap-2">• Rapid Multivariant Asset Generation</li>
              </ul>
            </div>
            <div className="relative z-10 pt-4 border-t border-[#07101E]/15 font-mono text-xs text-[#07101E] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              High-Volume AI Creative →
            </div>
          </div>

          {/* Pillar 2: Social Media Management (Medium Blue: #5DAFFF -> #1D5B9A) */}
          <div
            id="social-management"
            className="litmus-card-2 relative rounded-[24px] p-8 space-y-6 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-2 text-white"
            style={{
              background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-white/20 border border-white/40 rounded-2xl flex items-center justify-center text-white backdrop-blur-md shadow-xs">
                <Share2 className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-white/20 border border-white/40 text-white text-xs font-mono font-bold rounded-full w-fit">
                PILLAR 02 • MEDIUM BLUE
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white tracking-tight drop-shadow-xs">
                Social Media Management
              </h3>
              <p className="text-sm text-sky-100 font-medium leading-relaxed">
                Full-service social media strategy, 30-day content calendar execution, cross-platform publishing (Instagram, LinkedIn, YouTube, TikTok), and responsive community DM management.
              </p>
              <ul className="space-y-2.5 text-xs font-medium text-white pt-2 border-t border-white/20">
                <li className="flex items-center gap-2">• 1-Click Monthly Approval Workflows</li>
                <li className="flex items-center gap-2">• Multi-Channel Publishing & Analytics</li>
                <li className="flex items-center gap-2">• Community DM & Comment Moderation</li>
              </ul>
            </div>
            <div className="relative z-10 pt-4 border-t border-white/20 font-mono text-xs text-white font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Full-Service Social Execution →
            </div>
          </div>

          {/* Pillar 3: Performance Ad Creatives (Dark Blue: #3B7FC3 -> #0D2D5C) */}
          <div
            id="ad-creatives"
            className="litmus-card-3 relative rounded-[24px] p-8 space-y-6 flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-2 text-white"
            style={{
              background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent pointer-events-none rounded-[24px]" />

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-white/15 border border-white/30 rounded-2xl flex items-center justify-center text-[#5DAFFF] backdrop-blur-md shadow-xs">
                <Megaphone className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-white/15 border border-white/30 text-white text-xs font-mono font-bold rounded-full w-fit">
                PILLAR 03 • DARK BLUE
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white tracking-tight drop-shadow-sm">
                Performance Ad Creatives
              </h3>
              <p className="text-sm text-blue-100 font-medium leading-relaxed">
                Direct-response Reels, UGC video ads, high-converting hook variations, and promo assets engineered to convert cold traffic on Meta, TikTok, and YouTube Ads.
              </p>
              <ul className="space-y-2.5 text-xs font-medium text-white pt-2 border-t border-white/20">
                <li className="flex items-center gap-2">• Direct Response 9:16 Video Ads</li>
                <li className="flex items-center gap-2">• UGC Creator Sourcing & Scripting</li>
                <li className="flex items-center gap-2">• High-ROAS Hook & End-Card Iterations</li>
              </ul>
            </div>
            <div className="relative z-10 pt-4 border-t border-white/20 font-mono text-xs text-[#5DAFFF] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              High-Converting Ad Units →
            </div>
          </div>

        </div>
      </div>

      {/* PRODUCTION & ASSET DISPLAY BOARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-violet/5 to-teal/5 rounded-3xl p-8 border border-violet/20 space-y-6 shadow-sm">
          <div className="space-y-2">
            <span className="px-3 py-1 bg-teal/20 text-teal text-xs font-mono font-bold rounded-full">ASSET PRODUCTION ENGINE</span>
            <h3 className="text-2xl font-display font-bold text-ink">AI + Organic Social + Performance Ad Output</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
            <div className="bg-ink text-white p-5 rounded-2xl text-center space-y-1">
              <Sparkles className="w-5 h-5 text-teal mx-auto" />
              <div className="text-sm font-bold">AI Visual Engine</div>
              <div className="text-[10px] text-white/60">Synthetic Asset Batching</div>
            </div>
            <div className="bg-ink text-white p-5 rounded-2xl text-center space-y-1">
              <Video className="w-5 h-5 text-violet mx-auto" />
              <div className="text-sm font-bold">Short-Form Reels</div>
              <div className="text-[10px] text-white/60">Instagram & TikTok</div>
            </div>
            <div className="bg-ink text-white p-5 rounded-2xl text-center space-y-1">
              <ImageIcon className="w-5 h-5 text-teal mx-auto" />
              <div className="text-sm font-bold">Social Management</div>
              <div className="text-[10px] text-white/60">Calendars & Community</div>
            </div>
            <div className="bg-ink text-white p-5 rounded-2xl text-center space-y-1">
              <Play className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="text-sm font-bold">Ad Creative Units</div>
              <div className="text-[10px] text-white/60">Direct Response Paid</div>
            </div>
          </div>
        </div>
      </div>

      {/* SUCCESS METRICS BY CATEGORY & CLIENT VAULT FOR SMM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 border-t border-hairline pt-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            VERIFIED SMM PROOF & CLIENT WORK
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Top SMM & Social Media Clients & Content Results
          </h2>
          <p className="text-mute text-sm">
            Filtered by Social Media Marketing (SMM) case studies, with full access to all client vault records.
          </p>
        </div>

        <CategoryMetricsExplorer onOpenAudit={onOpenAudit} initialService="SMM" />
      </div>

      {/* VERIFIED TESTIMONIALS CAROUSEL */}
      <div className="border-t border-hairline pt-12">
        <TestimonialsMarquee />
      </div>

      {/* CROSS-LINKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-hairline pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-bone rounded-3xl p-8 border border-hairline">
          <div>
            <div className="text-xs font-mono font-bold text-violet uppercase">EXPLORE ADJACENT CAPABILITIES</div>
            <div className="text-lg font-display font-bold text-ink mt-1">Connect Creative to Conversion</div>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <button 
              onClick={() => onNavigateCapability('acquire-performance')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              Performance Marketing →
            </button>
            <button 
              onClick={() => onNavigateCapability('retain-marketing')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              Retention Marketing →
            </button>
            <button 
              onClick={() => onNavigateCapability('convert-cro')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              CRO Agency →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
