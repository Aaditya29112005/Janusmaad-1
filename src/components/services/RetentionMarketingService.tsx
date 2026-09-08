import React, { useState } from 'react';
import { 
  HelpCircle, 
  Sliders, 
  Globe,
  Mail,
  Smartphone,
  MessageSquare
} from 'lucide-react';
import { Button } from '../ui/Button';

interface RetentionMarketingServiceProps {
  onOpenAudit: (type?: string) => void;
  onNavigateCapability: (id: string) => void;
}

export const RetentionMarketingService: React.FC<RetentionMarketingServiceProps> = ({
  onOpenAudit,
  onNavigateCapability
}) => {
  // Calculator State
  const [orders, setOrders] = useState(3000); // 3,000 orders/mo
  const [repeatRate, setRepeatRate] = useState(18); // 18% current repeat rate
  const [aov] = useState(3200); // ₹3,200
  const [targetLift, setTargetLift] = useState(35); // 35% lift on repeat rate

  const newRepeatRate = Number((repeatRate * (1 + targetLift / 100)).toFixed(1));
  const incrementalRepeatOrders = Math.round(orders * ((newRepeatRate - repeatRate) / 100));
  const extraMonthlyRevenue = incrementalRepeatOrders * aov;
  const annualGain = extraMonthlyRevenue * 12;

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)}Cr ($${(val / 60000).toFixed(1)}k AUD)`;
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L ($${(val / 60000).toFixed(1)}k AUD)`;
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retention Marketing Agency | Email, SMS & WhatsApp",
    "provider": {
      "@type": "Organization",
      "name": "Janusmaad Digital",
      "url": "https://janusmaad.com"
    },
    "serviceType": "Retention Marketing Agency",
    "areaServed": ["Australia", "India"],
    "description": "Automated email, SMS and WhatsApp flows that lift repeat rate and LTV. Klaviyo and WhatsApp API builds from $1,900 AUD / ₹1,10,000 INR monthly.",
    "offers": {
      "@type": "Offer",
      "price": "1900",
      "priceCurrency": "AUD"
    }
  };

  const faqJsonLdData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the monthly cost for Retention Marketing management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Core flow setups start from $1,900 AUD / ₹1,10,000 INR. Full managed retention retainers cover weekly campaign creation, list hygiene, and multi-channel optimization."
        }
      },
      {
        "@type": "Question",
        "name": "Which retention platforms do you work in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are certified Klaviyo Master Partners, Attentive SMS experts, and official WhatsApp Business API integration engineers (Interakt, WATI, Aisensy)."
        }
      },
      {
        "@type": "Question",
        "name": "Who owns the Klaviyo/WhatsApp account and customer subscriber list?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You retain 100% full ownership of all accounts, subscriber lists, custom email HTML templates, and flow logic forever."
        }
      },
      {
        "@type": "Question",
        "name": "How are WhatsApp API costs and template approvals handled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meta charges per conversation tier directly to your WhatsApp Business API account. We write and submit high-converting Meta template approvals with guaranteed compliance."
        }
      },
      {
        "@type": "Question",
        "name": "How is retention revenue attributed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We report on clean last-touch flow revenue in Klaviyo/GA4 + cohort 30/60/90-day repeat purchase rate lift."
        }
      },
      {
        "@type": "Question",
        "name": "What is the ideal campaign sending frequency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically 2 to 3 targeted campaign emails/SMS per week based on segment activity + 6 automated core lifecycle flows running 24/7."
        }
      }
    ]
  };

  return (
    <div className="space-y-20 pb-16">
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
          className="inline-flex items-center gap-2 text-xs font-mono text-mute hover:text-teal transition-colors"
        >
          <span>← Back to All Services</span>
        </button>
      </div>

      {/* 1. HERO SECTION: variant="flow" (Connected node map down left gutter marking lifecycle stages) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#091512] via-[#0d1e1a] to-[#07120f] text-white rounded-3xl p-8 sm:p-14 border border-emerald-500/30 space-y-8 relative overflow-hidden shadow-2xl">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold rounded-full border border-emerald-500/30 uppercase">
              RETAIN PILLAR • LIFECYCLE & RETENTION
            </span>
            <span className="px-3 py-1 bg-white/10 text-white/70 text-xs font-mono rounded-full">
              SLUG: services/retention-marketing
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white leading-tight">
            Email, SMS & WhatsApp Flows That Lift Lifetime Value<span className="text-teal">.</span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed font-body">
            Automated lifecycle flows and predictive RFM segmentation engineered for brands where repeat rate is flat, customer acquisition cost (CAC) keeps climbing, and customer subscriber lists are sitting unsegmented.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" className="bg-teal text-ink font-bold hover:bg-emerald-400 border-none" onClick={() => onOpenAudit('retain-marketing')}>
              Get Free Flow & Deliverability Audit →
            </Button>
            <div className="text-xs text-white/70 font-mono">
              Retention setup & management from <strong className="text-teal">[PRICE: $1,900 AUD / ₹1.1L / mo]</strong>
            </div>
          </div>

          {/* Supporting Keywords */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono text-white/60">
            <span className="text-teal font-bold">PRIMARY:</span> retention marketing agency |
            <span>Klaviyo agency</span> |
            <span>WhatsApp marketing API</span> |
            <span>email marketing agency</span> |
            <span>lifecycle marketing</span> |
            <span>customer LTV</span>
          </div>
        </div>
      </div>

      {/* Sub-Topics Sticky Anchors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-2xl p-4 border border-hairline flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <span className="text-teal font-bold uppercase">SUB-TOPICS:</span>
          <div className="flex flex-wrap gap-4 text-white/80">
            <a href="#core-flows" className="hover:text-teal transition-colors">#core-flows</a>
            <a href="#campaigns" className="hover:text-teal transition-colors">#campaigns</a>
            <a href="#whatsapp-api" className="hover:text-teal transition-colors">#whatsapp-api</a>
            <a href="#segmentation-rfm" className="hover:text-teal transition-colors">#segmentation-rfm</a>
            <a href="#deliverability" className="hover:text-teal transition-colors">#deliverability</a>
            <a href="#reporting" className="hover:text-teal transition-colors">#reporting</a>
          </div>
        </div>
      </div>

      {/* 2. DUAL-MARKET MECHANICS SPLIT: AUSTRALIA (EMAIL/SMS) VS INDIA (WHATSAPP API) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            DUAL-MARKET RETENTION MECHANICS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Australia (Email/SMS) vs India (WhatsApp API)
          </h2>
          <p className="text-mute text-sm">
            Retention mechanics differ fundamentally by market. We build native systems for each region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Australia Market Split */}
          <div className="bg-white rounded-3xl p-8 border-2 border-hairline space-y-6 shadow-sm">
            <div className="flex items-center gap-2 font-mono font-bold text-sm text-blue-600 uppercase">
              <Globe className="w-5 h-5 text-blue-600" />
              AUSTRALIA MARKET MECHANICS
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-bone rounded-xl space-y-1">
                <div className="font-bold text-ink flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-600" /> Primary Channel: Klaviyo Email
                </div>
                <p className="text-mute">High-design editorial emails, zero-party preference quizzes, and segmented campaign flows driving 30%+ total revenue.</p>
              </div>

              <div className="p-4 bg-bone rounded-xl space-y-1">
                <div className="font-bold text-ink flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-blue-600" /> Secondary Channel: Attentive / Klaviyo SMS
                </div>
                <p className="text-mute">Time-sensitive VIP drop alerts, abandoned checkout reminders with 98% open rates.</p>
              </div>
            </div>
          </div>

          {/* India Market Split */}
          <div className="bg-ink text-white rounded-3xl p-8 border-2 border-emerald-500 space-y-6 shadow-2xl">
            <div className="flex items-center gap-2 font-mono font-bold text-sm text-emerald-400 uppercase">
              <Globe className="w-5 h-5 text-emerald-400" />
              INDIA MARKET MECHANICS
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" /> Primary Channel: WhatsApp Business API
                </div>
                <p className="text-white/70">Interactive template messages, instant COD order confirmations, WhatsApp Catalog checkout, and zero-drop abandoned cart recovery.</p>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-1">
                <div className="font-bold text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" /> Secondary Channel: Automated Email
                </div>
                <p className="text-white/70">Transactional invoices, shipping tracking updates, and founder-led brand storytelling.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DEVICE THREAD MOCKUPS SIDE BY SIDE (Email preview vs WhatsApp chat) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            LIVE CREATIVE THREAD PREVIEWS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Side-by-Side Channel Mockups
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Preview Mockup */}
          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm font-mono text-xs">
            <div className="flex items-center justify-between border-b border-hairline pb-3">
              <span className="font-bold text-ink flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet" /> Klaviyo Email Flow Mockup
              </span>
              <span className="text-mute text-[10px]">Inbox • 10:42 AM</span>
            </div>
            <div className="p-4 bg-bone rounded-2xl space-y-3">
              <div className="text-ink font-bold text-sm">Subject: You left something behind (Take 15% off)</div>
              <div className="text-mute leading-relaxed text-xs">
                "Hey Sarah, your cart is saved! Complete your checkout in the next 2 hours to get free express shipping + 15% off automatically applied."
              </div>
              <div className="p-3 bg-violet text-white text-center font-bold rounded-xl cursor-pointer">
                Return to My Cart →
              </div>
            </div>
          </div>

          {/* WhatsApp Chat Mockup */}
          <div className="bg-[#0b141a] text-white rounded-3xl p-6 border border-emerald-500/40 space-y-4 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-bold text-emerald-400 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" /> WhatsApp API Chat Mockup
              </span>
              <span className="text-white/60 text-[10px]">WhatsApp Business</span>
            </div>
            <div className="p-4 bg-[#111b21] rounded-2xl space-y-3 border border-white/10">
              <div className="text-emerald-400 font-bold text-xs">Janusmaad Store ⚡</div>
              <div className="text-white/80 leading-relaxed text-xs">
                "Hi Rahul! Your order #8492 has shipped! 🚚 Track your delivery status live on WhatsApp or click below to view items."
              </div>
              <div className="p-2.5 bg-emerald-600 text-white text-center font-bold rounded-xl cursor-pointer">
                Track My Shipment
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. VERTICAL CONNECTED FLOWS SECTION (Horizontal scroll track on desktop, stacked on mobile) */}
      <div id="core-flows" className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            THE 5 DELIVERABLE GROUPS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Core Lifecycle Flow Architecture
          </h2>
        </div>

        {/* Desktop Horizontal Scroll Track / Mobile Stack */}
        <div className="flex flex-col md:flex-row overflow-x-auto gap-6 pb-4 scrollbar-none snap-x">
          
          <div className="md:w-80 shrink-0 bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 01</span>
            <h3 id="campaigns" className="text-xl font-bold text-ink">Welcome Series (3-Part)</h3>
            <p className="text-xs text-mute leading-relaxed">
              Introducing brand story, zero-party preference quiz, and first-purchase incentive.
            </p>
          </div>

          <div className="md:w-80 shrink-0 bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 02</span>
            <h3 id="whatsapp-api" className="text-xl font-bold text-ink">Abandoned Cart & Checkout</h3>
            <p className="text-xs text-mute leading-relaxed">
              Multi-channel recovery triggers via Email + WhatsApp API within 15 minutes of drop-off.
            </p>
          </div>

          <div className="md:w-80 shrink-0 bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 03</span>
            <h3 id="segmentation-rfm" className="text-xl font-bold text-ink">Post-Purchase & Cross-Sell</h3>
            <p className="text-xs text-mute leading-relaxed">
              Product usage instructions, review capture, and dynamic cross-sell recommendations.
            </p>
          </div>

          <div className="md:w-80 shrink-0 bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 04</span>
            <h3 id="deliverability" className="text-xl font-bold text-ink">Winback & Sunset Flow</h3>
            <p className="text-xs text-mute leading-relaxed">
              Re-engaging unengaged contacts before list cleaning to maintain high deliverability.
            </p>
          </div>

          <div className="md:w-80 shrink-0 bg-ink text-white rounded-3xl p-6 border border-teal space-y-4 shadow-2xl snap-start">
            <span className="text-xs font-mono font-bold text-teal">FLOW 05</span>
            <h3 id="reporting" className="text-xl font-bold text-white">VIP Tier & RFM Modeling</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Segmenting high-LTV buyers into exclusive early-access drop lists and rewards.
            </p>
          </div>

        </div>
      </div>

      {/* 5. INTERACTIVE RETENTION CALCULATOR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 border border-teal/40 space-y-8 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/20 text-teal text-xs font-mono font-bold rounded-full">
              <Sliders className="w-3.5 h-3.5" />
              LIFETIME VALUE CALCULATOR
            </div>
            <h2 className="text-3xl font-display font-extrabold text-white">
              Calculate Repeat Rate Revenue Lift
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">Monthly Orders</span>
                  <span className="text-teal font-bold">{orders.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min={500} 
                  max={20000} 
                  step={500}
                  value={orders}
                  onChange={(e) => setOrders(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">Current Repeat Purchase Rate</span>
                  <span className="text-teal font-bold">{repeatRate}%</span>
                </div>
                <input 
                  type="range" 
                  min={5} 
                  max={40} 
                  step={1}
                  value={repeatRate}
                  onChange={(e) => setRepeatRate(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-white/80">Target Repeat Rate Lift</span>
                  <span className="text-teal font-bold">+{targetLift}%</span>
                </div>
                <input 
                  type="range" 
                  min={10} 
                  max={80} 
                  step={5}
                  value={targetLift}
                  onChange={(e) => setTargetLift(Number(e.target.value))}
                  className="w-full accent-teal cursor-pointer"
                />
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-teal/30 rounded-2xl p-6 space-y-4 font-mono flex flex-col justify-between">
              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-white/60">New Repeat Purchase Rate</div>
                  <div className="text-3xl font-bold text-teal">{newRepeatRate}%</div>
                </div>

                <div>
                  <div className="text-white/60">Incremental Repeat Orders / Mo</div>
                  <div className="text-2xl font-bold text-white">+{incrementalRepeatOrders.toLocaleString()} Orders</div>
                </div>

                <div>
                  <div className="text-white/60">Extra Monthly Revenue</div>
                  <div className="text-2xl font-bold text-emerald-400">{formatCurrency(extraMonthlyRevenue)}</div>
                </div>

                <div>
                  <div className="text-white/60">12-Month Cumulative Gain</div>
                  <div className="text-xl font-bold text-white">{formatCurrency(annualGain)}</div>
                </div>
              </div>

              <Button variant="primary" size="md" className="bg-teal text-ink font-bold border-none" onClick={() => onOpenAudit('retain-marketing')}>
                Unlock Retention Lift →
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 6. PRICING TIERS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="space-y-2">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            ENGAGEMENT TIERS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Retention & Lifecycle Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-teal">TIER 01 • DIAGNOSTIC</div>
            <h3 className="text-xl font-bold text-ink">Free Flow Audit</h3>
            <div className="text-2xl font-bold text-ink">$0</div>
            <p className="text-xs text-mute leading-relaxed">
              Deliverability audit + current flow coverage teardown.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('retain-marketing')}>
              Request Audit
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-teal">TIER 02 • FLOW BUILD</div>
            <h3 className="text-xl font-bold text-ink">Core Flow Setup</h3>
            <div className="text-2xl font-bold text-ink">[PRICE]</div>
            <p className="text-xs text-mute leading-relaxed">
              Complete setup of 5 core lifecycle flows in Klaviyo or WhatsApp API.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('retain-marketing')}>
              Select Flow Build
            </Button>
          </div>

          <div className="bg-ink text-white rounded-3xl p-6 border-2 border-teal space-y-4 shadow-xl">
            <div className="text-xs font-mono font-bold text-teal">TIER 03 • MANAGED</div>
            <h3 className="text-xl font-bold text-white">Managed Retainer</h3>
            <div className="text-2xl font-bold text-white">[PRICE] <span className="text-xs font-mono text-white/60">/ mo</span></div>
            <p className="text-xs text-white/80 leading-relaxed">
              Flow optimization + 8 monthly campaigns + WhatsApp API broadcast management.
            </p>
            <Button variant="primary" size="sm" className="bg-teal text-ink font-bold border-none" onClick={() => onOpenAudit('retain-marketing')}>
              Start Retainer
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-hairline space-y-4 shadow-sm">
            <div className="text-xs font-mono font-bold text-teal">TIER 04 • FULL LIFECYCLE</div>
            <h3 className="text-xl font-bold text-ink">Full Lifecycle Engine</h3>
            <div className="text-2xl font-bold text-ink">Custom</div>
            <p className="text-xs text-mute leading-relaxed">
              Enterprise CDP integration, predictive churn modeling, and omnichannel SMS/WhatsApp.
            </p>
            <Button variant="outline" size="sm" onClick={() => onOpenAudit('retain-marketing')}>
              Contact Enterprise
            </Button>
          </div>
        </div>
      </div>

      {/* 7. FAQ MUST ANSWER SECTION */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl font-display font-extrabold text-ink">
            Retention & Platform FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is the monthly cost for Retention Marketing management?",
              a: "Core flow setups start from [PRICE] ($1,900 AUD / ₹1,10,000 INR). Full managed retention retainers cover weekly campaign creation, list hygiene, and multi-channel optimization."
            },
            {
              q: "Which retention platforms do you work in?",
              a: "We are certified Klaviyo Master Partners, Attentive SMS experts, and official WhatsApp Business API integration engineers (Interakt, WATI, Aisensy)."
            },
            {
              q: "Who owns the Klaviyo/WhatsApp account and customer subscriber list?",
              a: "You retain 100% full ownership of all accounts, subscriber lists, custom email HTML templates, and flow logic forever."
            },
            {
              q: "How are WhatsApp API costs and template approvals handled?",
              a: "Meta charges per conversation tier directly to your WhatsApp Business API account. We write and submit high-converting Meta template approvals with guaranteed compliance."
            },
            {
              q: "How is retention revenue attributed?",
              a: "We report on clean last-touch flow revenue in Klaviyo/GA4 + cohort 30/60/90-day repeat purchase rate lift."
            },
            {
              q: "What is the ideal campaign sending frequency?",
              a: "Typically 2 to 3 targeted campaign emails/SMS per week based on segment activity + 6 automated core lifecycle flows running 24/7."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-hairline space-y-2">
              <h3 className="font-display font-bold text-ink text-base flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-teal shrink-0" />
                {faq.q}
              </h3>
              <p className="text-mute text-sm leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. CROSS-LINKS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-hairline pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-bone rounded-3xl p-8 border border-hairline">
          <div>
            <div className="text-xs font-mono font-bold text-teal uppercase">EXPLORE ADJACENT CAPABILITIES</div>
            <div className="text-lg font-display font-bold text-ink mt-1">Scale Customer LTV</div>
          </div>
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <button 
              onClick={() => onNavigateCapability('acquire-performance')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              Performance Marketing →
            </button>
            <button 
              onClick={() => onNavigateCapability('convert-cro')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              CRO Agency →
            </button>
            <button 
              onClick={() => onNavigateCapability('acquire-smm')}
              className="px-4 py-2 bg-white rounded-xl border border-hairline font-bold hover:border-teal transition-colors"
            >
              SMM Content Engine →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
