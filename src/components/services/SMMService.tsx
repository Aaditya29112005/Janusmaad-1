import React from 'react';
import { 
  HelpCircle, 
  Flame,
  ImageIcon,
  Play,
  Video
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
    "name": "Social Media Marketing Agency | Content That Feeds Paid",
    "provider": {
      "@type": "Organization",
      "name": "Janusmaad Digital",
      "url": "https://janusmaad.com"
    },
    "serviceType": "Social Media Marketing Agency",
    "areaServed": ["Australia", "India"],
    "description": "Organic content and paid social that compound. Strategy, production and community from $1,800 AUD / ₹1,000,000 INR monthly.",
    "offers": {
      "@type": "Offer",
      "price": "1800",
      "priceCurrency": "AUD"
    }
  };

  const faqJsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the monthly cost for SMM management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SMM packages range from $1,800 AUD / ₹1,00,000 INR monthly for baseline managed organic strategy up to full-service creative engines with onsite shooting pods."
        }
      },
      {
        "@type": "Question",
        "name": "What is the monthly output volume of content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Baseline packages deliver 12 to 16 short-form Reels/TikToks + 20 static graphics/carousels per month, with full content libraries handed over to your brand."
        }
      },
      {
        "@type": "Question",
        "name": "Who shoots the content and where is it filmed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We handle creator sourcing, founder-led script direction, studio production in Sydney or Delhi NCR, and UGC creator network dispatch."
        }
      },
      {
        "@type": "Question",
        "name": "What is the content approval turnaround?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Monthly calendars and raw video cuts are submitted 7 days prior to scheduled posting via a 1-click preview approval dashboard."
        }
      },
      {
        "@type": "Question",
        "name": "Is follower count a primary KPI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Follower count is a vanity metric. We measure SMM success on organic reach, brand engagement rate, and how many organic content winners convert profitably when promoted into paid ad sets."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to the content library if we part ways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You retain 100% full ownership of all raw footage, edited Reels, graphics, and B-roll libraries forever."
        }
      }
    ]
  };

  // Mock vertical video tiles for the feed layout
  const feedTiles = [
    { title: "DTC Skincare UGC Hook", metric: "240k Views", tag: "Organic Winner" },
    { title: "Founder Unboxing Story", metric: "3.8x ROAS", tag: "Promoted to Ad Set" },
    { title: "Apparel Style Reel", metric: "18k Likes", tag: "Reels" },
    { title: "B2B SaaS Teardown", metric: "1.4k Shares", tag: "LinkedIn / IG" },
    { title: "Product ASMR Demo", metric: "450k Reach", tag: "TikTok Winner" },
    { title: "Customer Problem Hook", metric: "5.2x ROAS", tag: "Ad Creative" }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdData) }}
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
              Content That Builds Authority & Feeds the Ad Account<span className="text-teal">.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-body">
              Organic content and paid social engineered to compound. Strategy, production, Reels/UGC, and community management built for brands posting consistently but unable to connect it to revenue, or whose ad creative has gone stale.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="lg" className="bg-teal text-ink font-bold hover:bg-emerald-400 border-none" onClick={() => onOpenAudit('acquire-smm')}>
                Get Free Content Teardown →
              </Button>
              <div className="text-xs text-white/70 font-mono">
                Management & production from <strong className="text-teal">[PRICE: $1,800 AUD / ₹1.0L / mo]</strong>
              </div>
            </div>

            {/* Supporting Keywords */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-white/60">
              <span className="text-teal font-bold">PRIMARY:</span> social media marketing agency |
              <span>Instagram marketing agency</span> |
              <span>content strategy</span> |
              <span>UGC production</span> |
              <span>community management India & Sydney</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Topics Sticky Anchors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-2xl p-4 border border-hairline flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-teal font-bold uppercase">SUB-TOPICS:</span>
          <div className="flex flex-wrap gap-4 text-white/80">
            <a href="#strategy" className="hover:text-teal transition-colors">#strategy</a>
            <a href="#content-calendar" className="hover:text-teal transition-colors">#content-calendar</a>
            <a href="#reels-ugc" className="hover:text-teal transition-colors">#reels-ugc</a>
            <a href="#community" className="hover:text-teal transition-colors">#community</a>
            <a href="#creative-to-paid" className="hover:text-teal transition-colors">#creative-to-paid</a>
            <a href="#reporting" className="hover:text-teal transition-colors">#reporting</a>
          </div>
        </div>
      </div>

      {/* CORE DIFFERENTIATING ARGUMENT: ORGANIC TO PAID CREATIVE HANDOFF PIPELINE */}
      <div id="creative-to-paid" className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 border border-violet/40 space-y-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-teal text-xs font-mono font-bold uppercase">
              <Flame className="w-4 h-4 text-teal" />
              THE JANUSMAAD DIFFERENTIATOR: ORGANIC IS THE TESTING GROUND
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              Why We Never Sell "Follower Count" as the Outcome
            </h2>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Organic social is the cheapest creative testing ground in digital marketing. Instead of burning paid budget testing unverified ad concepts, we test 20 organic hooks weekly. When an organic post blows up, we hand it straight to our performance ad team to scale into profitable ad creative.
            </p>
          </div>

          {/* 4-Step Visual Handoff Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 font-mono text-xs">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-teal font-bold">STEP 01 • ORGANIC TEST</div>
              <div className="font-bold text-white text-sm">Publish 20 Short Reels</div>
              <p className="text-white/60">Test hooks, pain-points & product demos at zero ad cost.</p>
            </div>

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-teal font-bold">STEP 02 • SIGNAL READOUT</div>
              <div className="font-bold text-white text-sm">Identify 3 Viral Winners</div>
              <p className="text-white/60">Filtered by 80%+ retention & high comment engagement.</p>
            </div>

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <div className="text-teal font-bold">STEP 03 • AD HANDOFF</div>
              <div className="font-bold text-white text-sm">Format for Paid Social</div>
              <p className="text-white/60">Add direct response CTAs, end-cards & tracked UTM links.</p>
            </div>

            <div className="p-5 bg-teal/20 rounded-2xl border border-teal/40 space-y-2">
              <div className="text-teal font-bold">STEP 04 • PROFIT SCALE</div>
              <div className="font-bold text-white text-sm">Scale to 4.5x+ ROAS</div>
              <p className="text-white/80">Promote winning creative into Meta ASC & TikTok ad sets.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DELIVERABLES AS A MASONRY GRID (variant="feed", high image count, unequal cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            THE 5 DELIVERABLE GROUPS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Masonry Creative & Social Deliverables
          </h2>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Tall Masonry Item (col-span-7) */}
          <div id="strategy" className="md:col-span-7 bg-white rounded-3xl p-8 border border-hairline space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-violet/10 text-violet text-xs font-mono font-bold rounded-full">DELIVERABLE 01 • STRATEGY</span>
              <h3 className="text-2xl font-display font-bold text-ink">Strategy, Content Pillars & Tone of Voice</h3>
              <p className="text-mute text-sm leading-relaxed">
                Defining brand voice, buyer persona hooks, content buckets (Educational, UGC, Founder-led, Direct Response), and visual aesthetic guides tailored for Australia & India markets.
              </p>
            </div>
            <div className="pt-4 flex gap-2 font-mono text-[10px]">
              <span className="bg-violet/10 text-violet px-2.5 py-1 rounded-full font-bold">#brand-pillars</span>
              <span className="bg-teal/10 text-teal px-2.5 py-1 rounded-full font-bold">#direct-response</span>
            </div>
          </div>

          {/* Card 2: Medium Item (col-span-5) */}
          <div id="content-calendar" className="md:col-span-5 bg-white rounded-3xl p-8 border border-hairline space-y-4 shadow-sm">
            <span className="px-3 py-1 bg-violet/10 text-violet text-xs font-mono font-bold rounded-full">DELIVERABLE 02 • WORKFLOW</span>
            <h3 className="text-xl font-display font-bold text-ink">Monthly Calendar & Approval Workflow</h3>
            <p className="text-mute text-sm leading-relaxed">
              Complete 30-day content calendar submitted 7 days in advance via a 1-click preview dashboard with zero friction.
            </p>
          </div>

          {/* Card 3: Large Feature Item (col-span-8) */}
          <div id="reels-ugc" className="md:col-span-8 bg-gradient-to-br from-violet/5 to-teal/5 rounded-3xl p-8 border border-violet/20 space-y-4 shadow-sm">
            <span className="px-3 py-1 bg-teal/20 text-teal text-xs font-mono font-bold rounded-full">DELIVERABLE 03 • PRODUCTION</span>
            <h3 className="text-2xl font-display font-bold text-ink">Production: Statics, Reels, UGC & Founder Content</h3>
            <p className="text-mute text-sm leading-relaxed">
              Full-service studio shooting, creator dispatch, UGC sourcing, and founder-led video direction producing high-retention 9:16 short-form video assets.
            </p>
            {/* Visual Tiles Preview */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-ink text-white p-4 rounded-2xl text-center space-y-1">
                <Video className="w-5 h-5 text-teal mx-auto" />
                <div className="text-xs font-bold font-mono">16 Reels / Mo</div>
              </div>
              <div className="bg-ink text-white p-4 rounded-2xl text-center space-y-1">
                <ImageIcon className="w-5 h-5 text-violet mx-auto" />
                <div className="text-xs font-bold font-mono">20 Carousels</div>
              </div>
              <div className="bg-ink text-white p-4 rounded-2xl text-center space-y-1">
                <Play className="w-5 h-5 text-emerald-400 mx-auto" />
                <div className="text-xs font-bold font-mono">Raw Footage</div>
              </div>
            </div>
          </div>

          {/* Card 4: Medium Item (col-span-4) */}
          <div id="community" className="md:col-span-4 bg-white rounded-3xl p-8 border border-hairline space-y-4 shadow-sm">
            <span className="px-3 py-1 bg-violet/10 text-violet text-xs font-mono font-bold rounded-full">DELIVERABLE 04 • COMMUNITY</span>
            <h3 className="text-xl font-display font-bold text-ink">Community Management & DM Handling</h3>
            <p className="text-mute text-sm leading-relaxed">
              Converting comment sections into purchase channels. Fast DM responses, comment moderation, and active community outreach.
            </p>
          </div>
        </div>
      </div>

      {/* 3. PRICING TIERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            ENGAGEMENT TIERS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Social Content Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-violet">TIER 01 • DIAGNOSTIC</div>
            <h3 className="text-xl font-bold text-ink">Free Content Audit</h3>
            <div className="text-2xl font-bold text-ink">$0</div>
            <p className="text-xs text-mute leading-relaxed">
              Teardown of current social aesthetic, engagement rates, and paid creative handoff gaps.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('acquire-smm')}>
              Request Teardown
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-violet">TIER 02 • MANAGED</div>
            <h3 className="text-xl font-bold text-ink">Managed Organic</h3>
            <div className="text-2xl font-bold text-ink">[PRICE] <span className="text-xs font-mono text-mute">/ mo</span></div>
            <p className="text-xs text-mute leading-relaxed">
              Strategy, calendar management, static graphics, and community DM management.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('acquire-smm')}>
              Select Managed
            </Button>
          </div>

          <div className="bg-ink text-white rounded-3xl p-6 border-2 border-teal space-y-4 shadow-xl">
            <div className="text-xs font-mono font-bold text-teal">TIER 03 • MANAGED + PROD</div>
            <h3 className="text-xl font-bold text-white">Managed + Studio Production</h3>
            <div className="text-2xl font-bold text-white">[PRICE] <span className="text-xs font-mono text-white/60">/ mo</span></div>
            <p className="text-xs text-white/80 leading-relaxed">
              Includes monthly studio shoot, 16 Reels/TikToks, UGC creator dispatch, and paid handoff.
            </p>
            <Button variant="primary" size="sm" className="bg-teal text-ink font-bold border-none" onClick={() => onOpenAudit('acquire-smm')}>
              Start Production
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-violet">TIER 04 • ENGINE</div>
            <h3 className="text-xl font-bold text-ink">Full Creative Engine</h3>
            <div className="text-2xl font-bold text-ink">Custom</div>
            <p className="text-xs text-mute leading-relaxed">
              Dedicated content creator pod + daily Reel outputs + custom UGC influencer network.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('acquire-smm')}>
              Contact Enterprise
            </Button>
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

      {/* 4. FAQ MUST ANSWER SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="text-xs font-mono font-bold text-violet uppercase tracking-widest">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Clear Answers for Founders
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is the monthly cost for SMM management?",
              a: "SMM packages range from [PRICE]/month ($1,800 AUD / ₹1,00,000 INR) for baseline managed organic strategy up to full-service creative engines with onsite shooting pods."
            },
            {
              q: "What is the monthly output volume of content?",
              a: "Baseline packages deliver 12 to 16 short-form Reels/TikToks + 20 static graphics/carousels per month, with full content libraries handed over to your brand."
            },
            {
              q: "Who shoots the content and where is it filmed?",
              a: "We handle creator sourcing, founder-led script direction, studio production in Sydney or Delhi NCR, and UGC creator network dispatch."
            },
            {
              q: "What is the content approval turnaround?",
              a: "Monthly calendars and raw video cuts are submitted 7 days prior to scheduled posting via a 1-click preview approval dashboard."
            },
            {
              q: "Is follower count a primary KPI?",
              a: "No. Follower count is a vanity metric. We measure SMM success on organic reach, brand engagement rate, and how many organic content winners convert profitably when promoted into paid ad sets."
            },
            {
              q: "What happens to the content library if we part ways?",
              a: "You retain 100% full ownership of all raw footage, edited Reels, graphics, and B-roll libraries forever."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-hairline space-y-2">
              <h3 className="font-display font-bold text-ink text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-violet shrink-0" />
                {faq.q}
              </h3>
              <p className="text-mute text-sm leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CROSS-LINKS SECTION */}
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
