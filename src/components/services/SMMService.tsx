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
import { Button } from '../ui/Button';
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
        <div className="bg-gradient-to-br from-[#12101f] via-[#1a1228] to-[#0c0d16] text-white rounded-3xl p-8 sm:p-14 border border-violet/30 space-y-8 relative overflow-hidden shadow-2xl">
          
          {/* Background Marquee of 9:16 vertical content tiles */}
          <div className="absolute top-0 right-0 w-full sm:w-1/2 h-full opacity-20 pointer-events-none overflow-hidden flex gap-4 -z-0">
            <div className="flex flex-col gap-4 animate-marquee-vertical">
              {feedTiles.concat(feedTiles).map((tile, idx) => (
                <div key={idx} className="w-40 h-64 bg-violet/30 border border-violet/40 rounded-2xl p-3 flex flex-col justify-between shrink-0">
                  <span className="text-[10px] font-mono bg-teal/20 text-teal px-2 py-0.5 rounded-full w-fit">{tile.tag}</span>
                  <div>
                    <div className="text-xs font-bold text-white">{tile.title}</div>
                    <div className="text-[10px] text-teal font-mono">{tile.metric}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 bg-violet/30 text-teal text-xs font-mono font-bold rounded-full border border-violet/40 uppercase">
                ACQUIRE PILLAR • SOCIAL MEDIA MARKETING
              </span>
              <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-mono rounded-full">
                SLUG: services/social-media-marketing
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight">
              AI Content, Social Management & High-ROAS Ad Creatives<span className="text-teal">.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body">
              Engineered social engines blending cutting-edge AI generated content, seamless social media management, and high-converting performance ad creatives that drive measurable brand growth.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" className="bg-teal text-ink font-bold hover:bg-emerald-400 border-none" onClick={() => onOpenAudit('acquire-smm')}>
                Get Free Content & Ad Creative Audit →
              </Button>
            </div>

            {/* Supporting Keywords */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-white/60">
              <span className="text-teal font-bold font-mono uppercase">FOCUS AREAS:</span>
              <span>AI Generated Content</span> |
              <span>Social Media Management</span> |
              <span>Performance Ad Creatives</span> |
              <span>UGC & Video Production</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Topics Sticky Anchors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-2xl p-4 border border-hairline flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-teal font-bold uppercase">CORE PILLARS:</span>
          <div className="flex flex-wrap gap-4 text-white/80">
            <a href="#ai-content" className="hover:text-teal transition-colors">#ai-generated-content</a>
            <a href="#social-management" className="hover:text-teal transition-colors">#social-media-management</a>
            <a href="#ad-creatives" className="hover:text-teal transition-colors">#performance-ad-creatives</a>
            <a href="#organic-to-paid" className="hover:text-teal transition-colors">#organic-to-paid-pipeline</a>
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

        {/* 3 Large Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1: AI Generated Content */}
          <div id="ai-content" className="bg-white rounded-3xl p-8 border border-violet/20 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-violet/10 rounded-2xl flex items-center justify-center text-violet">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-violet/10 text-violet text-xs font-mono font-bold rounded-full w-fit">PILLAR 01</span>
              <h3 className="text-2xl font-display font-bold text-ink">AI Generated Content</h3>
              <p className="text-mute text-sm leading-relaxed">
                Hyper-realistic AI image generation, synthetic video avatars, automated script writing, and rapid AI visual iteration for maximum asset volume at unmatched speed.
              </p>
              <ul className="space-y-2 text-xs font-mono text-ink/80 pt-2">
                <li className="flex items-center gap-2">• Generative AI Visuals & Product Shots</li>
                <li className="flex items-center gap-2">• AI Synthetic Script & Voice Synthesis</li>
                <li className="flex items-center gap-2">• Rapid Multivariant Asset Generation</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-hairline font-mono text-xs text-violet font-bold">
              High-Volume AI Creative →
            </div>
          </div>

          {/* Pillar 2: Social Media Management */}
          <div id="social-management" className="bg-white rounded-3xl p-8 border border-teal/30 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-teal/10 rounded-2xl flex items-center justify-center text-teal">
                <Share2 className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-teal/20 text-teal text-xs font-mono font-bold rounded-full w-fit">PILLAR 02</span>
              <h3 className="text-2xl font-display font-bold text-ink">Social Media Management</h3>
              <p className="text-mute text-sm leading-relaxed">
                Full-service social media strategy, 30-day content calendar execution, cross-platform publishing (Instagram, LinkedIn, YouTube, TikTok), and responsive community DM management.
              </p>
              <ul className="space-y-2 text-xs font-mono text-ink/80 pt-2">
                <li className="flex items-center gap-2">• 1-Click Monthly Approval Workflows</li>
                <li className="flex items-center gap-2">• Multi-Channel Publishing & Analytics</li>
                <li className="flex items-center gap-2">• Community DM & Comment Moderation</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-hairline font-mono text-xs text-teal font-bold">
              Full-Service Social Execution →
            </div>
          </div>

          {/* Pillar 3: Ad Creatives */}
          <div id="ad-creatives" className="bg-white rounded-3xl p-8 border border-violet/20 space-y-6 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-violet/10 rounded-2xl flex items-center justify-center text-violet">
                <Megaphone className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 bg-violet/10 text-violet text-xs font-mono font-bold rounded-full w-fit">PILLAR 03</span>
              <h3 className="text-2xl font-display font-bold text-ink">Performance Ad Creatives</h3>
              <p className="text-mute text-sm leading-relaxed">
                Direct-response Reels, UGC video ads, high-converting hook variations, and promo assets engineered to convert cold traffic on Meta, TikTok, and YouTube Ads.
              </p>
              <ul className="space-y-2 text-xs font-mono text-ink/80 pt-2">
                <li className="flex items-center gap-2">• Direct Response 9:16 Video Ads</li>
                <li className="flex items-center gap-2">• UGC Creator Sourcing & Scripting</li>
                <li className="flex items-center gap-2">• High-ROAS Hook & End-Card Iterations</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-hairline font-mono text-xs text-violet font-bold">
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
