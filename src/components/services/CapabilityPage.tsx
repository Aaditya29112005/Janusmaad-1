import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Code2, 
  RotateCcw, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles,
  ShieldCheck,
  Send,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { sendAuditToWhatsApp } from '../../utils/whatsapp';
import { submitLeadForm } from '../../utils/formSubmit';
import { Button } from '../ui/Button';
import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TextRolling } from '../hero/TextRolling';
import { PerformanceMarketingService } from './PerformanceMarketingService';
import { SEOService } from './SEOService';
import { SMMService } from './SMMService';
import { BuildService } from './BuildService';
import { CROService } from './CROService';
import { RetentionMarketingService } from './RetentionMarketingService';
import { AboutService } from './AboutService';





export type CapabilityId = 
  | 'acquire-performance' 
  | 'acquire-seo' 
  | 'acquire-smm' 
  | 'convert-build' 
  | 'convert-cro' 
  | 'retain-marketing' 
  | 'receipts'
  | 'about'
  | 'pricing';

interface CapabilityPageProps {
  capabilityId: CapabilityId;
  onNavigateHome: () => void;
  onNavigateCapability?: (id: CapabilityId) => void;
  onOpenAudit: (type?: string) => void;
}

export interface CapabilityDetails {
  id: CapabilityId;
  category: 'Acquire' | 'Convert' | 'Retain';
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  bullets: string[];
  kpiLabel: string;
  kpiValue: string;
  kpiSubText: string;
  stats: { label: string; value: string; delta: string; desc: string }[];
  technologies: string[];
  solutions: { num: string; title: string; desc: string }[];
}

const CAPABILITIES_DATA: Record<CapabilityId, CapabilityDetails> = {
  'acquire-performance': {
    id: 'acquire-performance',
    category: 'Acquire',
    badge: 'ACQUIRE CAPABILITIES',
    title: 'Performance Marketing & Performance Max',
    subtitle: 'Meta & Google campaigns built for high return on ad spend (ROAS).',
    description: 'We don’t just run ads — we build a complete performance system. Our Performance Max approach is designed to track, optimize, and scale high-quality leads across Google & Meta inventory with real-time conversion signals.',
    bullets: [
      'Performance Max campaign setup & optimization',
      'Lead quality analysis & funnel optimization',
      'Creative testing across Search, Display, YouTube & Discovery',
      'Continuous performance monitoring & scaling'
    ],
    kpiLabel: 'Blended Target ROAS',
    kpiValue: '4.82x',
    kpiSubText: 'Avg Cost Per Lead: ₹142.50 | Qualified Funnel Rate: 38.4%',
    stats: [
      { label: 'Clicks Generated', value: '120K+', delta: '+140% QoQ', desc: 'High-intent buyer traffic redirected to conversion funnels.' },
      { label: 'Total Impressions', value: '4.8M+', delta: 'Multi-Channel', desc: 'Scale brand authority across Meta, Google & Amazon.' },
      { label: 'Verified Conversions', value: '3.2K+', delta: 'Verified Leads', desc: 'High-converting sales, calls, and qualified enquiries.' }
    ],
    technologies: ['Meta Ads (FB & IG)', 'Google Ads & PMax', 'Amazon Ads', 'Flipkart Ads', 'Meesho Ads', 'Etsy Ads', 'TikTok Ads', 'GA4 & GTM CAPI'],
    solutions: [
      { num: '01', title: 'Conversion Tracking & Analytics', desc: 'End-to-end tracking using GA4, GTM, and offline conversion integrations for 100% clean data accuracy.' },
      { num: '02', title: 'Meta Ads (Facebook & Instagram)', desc: 'Conversion-focused campaigns designed to generate high-intent leads, direct sales, and qualified enquiries.' },
      { num: '03', title: 'Creative Testing & Optimization', desc: 'Continuous testing of ad creatives, copies, and formats to lower CPL and maximize blended ROAS.' },
      { num: '04', title: 'Amazon Ads for High-Intent Buyers', desc: 'Conversion-focused Amazon advertising to increase product sales, Sponsored Products rank, and visibility.' },
      { num: '05', title: 'Google Ads & Performance Max', desc: 'High-intent traffic across Search, Display, YouTube & Discovery — engineered specifically for revenue.' }
    ]
  },

  'acquire-seo': {
    id: 'acquire-seo',
    category: 'Acquire',
    badge: 'ACQUIRE CAPABILITIES',
    title: 'SEO (Search Everywhere Optimisation)',
    subtitle: 'Scale organic search visibility across Google, YouTube, Reddit, and AI engines (ChatGPT, Perplexity, SGE).',
    description: 'Modern SEO is no longer just keywords on Google. We optimize your brand authority across search engine AI overviews, video search, community forums, and generative recommendation engines.',
    bullets: [
      'Entity & Schema Architecture for Knowledge Graphs',
      'Generative Engine Optimization (GEO) for SGE & LLMs',
      'Core Web Vitals & Sub-Second Technical Performance',
      'High-Authority Digital PR & Editorial Placements'
    ],
    kpiLabel: 'Organic Search Growth',
    kpiValue: '+320%',
    kpiSubText: 'Avg Rank 1-3 Placement: 74.2% | Zero-Click AI Wins: 420+',
    stats: [
      { label: 'Organic Monthly Visits', value: '850K+', delta: '+210% YoY', desc: 'High-intent searchers converted into long-term brand traffic.' },
      { label: 'Page 1 Keywords', value: '1.4K+', delta: 'Rank #1-#3', desc: 'Dominate competitive industry terms across Google & Bing.' },
      { label: 'AI Search Overviews', value: '450+', delta: 'GEO Verified', desc: 'Featured recommendations inside ChatGPT, Gemini & Perplexity.' }
    ],
    technologies: ['Google Search Console', 'Ahrefs Enterprise', 'SEMrush', 'Screaming Frog', 'Schema.org JSON-LD', 'Next.js SSR', 'Vercel Analytics'],
    solutions: [
      { num: '01', title: 'Technical SEO & Crawl Budgeting', desc: 'Architecture audits, canonicalization, JS rendering optimization, and Core Web Vitals speed tuning.' },
      { num: '02', title: 'Generative Engine Optimization (GEO)', desc: 'Optimizing structured data and brand citations so AI tools recommend your business first.' },
      { num: '03', title: 'High-Authority Digital PR & Backlinks', desc: 'Earning white-hat editorial backlinks from tier-1 industry news and publication domains.' },
      { num: '04', title: 'Local & Multi-Region Enterprise SEO', desc: 'DOM, Google Business Profile, and localized landing pages for multi-location domination.' },
      { num: '05', title: 'Topical Authority & Content Hubs', desc: 'Clustered content hubs engineered to capture long-tail commercial intent and high-value leads.' }
    ]
  },

  'acquire-smm': {
    id: 'acquire-smm',
    category: 'Acquire',
    badge: 'ACQUIRE CAPABILITIES',
    title: 'SMM (Social Media Marketing)',
    subtitle: 'Organic and paid content strategy engineered to build brand authority and viral engagement.',
    description: 'Turn social impressions into customer trust. We create high-converting short-form video hooks, carousel frameworks, and targeted ad funnels across Instagram, LinkedIn, and TikTok.',
    bullets: [
      'Short-Form Video Hooks & Viral Reels Production',
      'Paid Social Lead Generation & Retargeting Funnels',
      'Creator & UGC Content Creator Partnerships',
      'Brand Authority Architecture & Community Engagement'
    ],
    kpiLabel: 'Social Engagement Rate',
    kpiValue: '6.4%',
    kpiSubText: 'Monthly Reels Views: 2.4M+ | Lead Conversion Rate: 4.2%',
    stats: [
      { label: 'Video Views Generated', value: '18M+', delta: 'Viral Reach', desc: 'High-performing short form video content across Instagram & TikTok.' },
      { label: 'Social Lead Inquiries', value: '4.5K+', delta: '+180% ROAS', desc: 'Direct message and lead form submissions converted into sales.' },
      { label: 'Brand Followers Built', value: '95K+', delta: 'Qualified Community', desc: 'Engaged buyer audience building lasting brand equity.' }
    ],
    technologies: ['Instagram Business', 'TikTok Ads Manager', 'LinkedIn Campaign Manager', 'CapCut Pro', 'Figma Creative Engine', 'Meta Business Suite'],
    solutions: [
      { num: '01', title: 'Short-Form Video Engine', desc: 'Scripting, editing, and publishing high-performing Reels, Shorts, and TikToks designed for viral reach.' },
      { num: '02', title: 'Paid Social Funnel Architecture', desc: 'Multi-stage prospecting and retargeting ad campaigns that convert casual scrollers into paying clients.' },
      { num: '03', title: 'Creator & UGC Strategy', desc: 'Sourcing, vetting, and managing user-generated content from real creators to boost trust and ad response.' },
      { num: '04', title: 'Community & Brand Management', desc: 'Active DM and comment engagement to build hyper-loyal customer relationships.' },
      { num: '05', title: 'Social Commerce & Storefront Sync', desc: 'Integrating Instagram Shop and TikTok Shop to enable instant 1-click in-app purchasing.' }
    ]
  },

  'convert-build': {
    id: 'convert-build',
    category: 'Convert',
    badge: 'CONVERT CAPABILITIES',
    title: 'Build (Bespoke Design & Development)',
    subtitle: 'High-speed bespoke landing pages and custom Shopify storefronts engineered for sub-1-second load times.',
    description: 'Sub-1-second page loads, headless Next.js architectures, and ultra-high converting landing page designs built for maximum ROAS and smooth customer checkout.',
    bullets: [
      'Bespoke React & Next.js Headless Architecture',
      'Custom Shopify Plus Storefront & Liquid Theme Engineering',
      'High-Converting Direct Response Landing Pages',
      'Sub-Second Speed & Core Web Vitals 95+ Score'
    ],
    kpiLabel: 'Avg Mobile Page Load Speed',
    kpiValue: '0.62s',
    kpiSubText: 'Google Lighthouse Score: 98/100 | Checkout Lift: +34%',
    stats: [
      { label: 'Custom Storefronts Built', value: '45+', delta: 'Headless / Shopify', desc: 'Bespoke high-converting e-commerce and SaaS platforms.' },
      { label: 'Avg Speed Improvement', value: '3.4x', delta: 'Sub-1s Load', desc: 'Lightning fast rendering that keeps bounce rates below 20%.' },
      { label: 'Conversion Rate Increase', value: '+42%', delta: 'Post-Launch', desc: 'Immediate lift in visitor-to-customer conversion rates.' }
    ],
    technologies: ['React 19', 'Next.js 15', 'Shopify Liquid', 'Tailwind CSS', 'GSAP Animation Engine', 'TypeScript', 'Vercel App Hosting'],
    solutions: [
      { num: '01', title: 'Custom Shopify Plus Storefronts', desc: 'Tailor-made e-commerce storefronts with bespoke collection filters, custom checkout flows, and high speed.' },
      { num: '02', title: 'High-Converting Campaign Landing Pages', desc: 'Single-purpose direct response pages built specifically for paid ad campaigns to maximize ROAS.' },
      { num: '03', title: 'Headless E-commerce & APIs', desc: 'Decoupled frontend architectures connecting Shopify, Stripe, and custom backends for ultimate flexibility.' },
      { num: '04', title: 'UI/UX Motion & GSAP Interactive Animations', desc: 'Fluid magnetic micro-interactions and smooth scroll experiences that captivate buyers.' },
      { num: '05', title: 'Speed Optimization & CWV Audit', desc: 'Transforming slow legacy websites into sub-second speed powerhouses with perfect 90+ Lighthouse scores.' }
    ]
  },

  'convert-cro': {
    id: 'convert-cro',
    category: 'Convert',
    badge: 'CONVERT CAPABILITIES',
    title: 'CRO (Conversion Rate Optimisation)',
    subtitle: 'Rigorous A/B testing and data science to maximize visitor revenue and checkout completion.',
    description: 'We analyze user session recordings, heatmaps, and funnel drop-offs to systematically increase your site-wide conversion rate by 20% to 50% without increasing ad spend.',
    bullets: [
      'Behavioral Heatmap & Session Recording Analytics',
      'Multivariate & A/B Experimentation Frameworks',
      'Cart Friction Removal & One-Click Checkout Flow',
      'Dynamic On-Page Personalization Engine'
    ],
    kpiLabel: 'Blended Conversion Lift',
    kpiValue: '+36.8%',
    kpiSubText: 'Cart Abandonment Drop: -28.4% | Revenue Per Visitor: +$4.12',
    stats: [
      { label: 'A/B Tests Conducted', value: '380+', delta: '95% Confidence', desc: 'Rigorous scientific testing across landing pages & checkouts.' },
      { label: 'Revenue Lift Generated', value: '$2.8M+', delta: 'Net Added Value', desc: 'Extra top-line revenue created purely through CRO.' },
      { label: 'Avg AOV Lift', value: '+18.5%', delta: 'Upsell Strategy', desc: 'Smart cart bundles and post-purchase offer boosts.' }
    ],
    technologies: ['VWO Enterprise', 'Hotjar Heatmaps', 'Microsoft Clarity', 'GA4 Analytics', 'Klaviyo Dynamic Personalization', 'Google Optimize / Optimizely'],
    solutions: [
      { num: '01', title: 'Data-Driven Funnel Audits', desc: 'Deep dive into drop-off analytics, user friction points, and form fields to identify immediate wins.' },
      { num: '02', title: 'Multivariate A/B Testing', desc: 'Deploying statistically significant experiments on headlines, CTAs, product pages, and checkout flows.' },
      { num: '03', title: 'Cart & Checkout Friction Removal', desc: 'Optimizing cart slides, trust badges, payment options, and single-click checkout steps.' },
      { num: '04', title: 'Dynamic On-Page Personalization', desc: 'Tailoring page content and product recommendations based on traffic source, geography, and buyer history.' },
      { num: '05', title: 'Post-Purchase Upsell Architecture', desc: '1-click post-purchase add-ons that boost Average Order Value (AOV) without ruining customer trust.' }
    ]
  },

  'retain-marketing': {
    id: 'retain-marketing',
    category: 'Retain',
    badge: 'RETAIN CAPABILITIES',
    title: 'Retention Marketing & Lifecycle Automation',
    subtitle: 'Automated email, SMS, and WhatsApp funnels that increase customer LTV and repeat purchase rates.',
    description: 'Turn one-time buyers into lifelong brand advocates. We build automated retention funnels that deliver the right message at the right moment across Email, SMS, and WhatsApp.',
    bullets: [
      'Automated Multi-Stage Lifecycle Email Sequences',
      'Omnichannel SMS & WhatsApp Instant Alerts',
      'VIP Loyalty, Referral & Repeat Order Loops',
      'Customer Cohort LTV & Churn Predictive Modeling'
    ],
    kpiLabel: 'Owned Channel Revenue',
    kpiValue: '34.2%',
    kpiSubText: 'Repeat Customer Rate: 42.8% | Flow Open Rate: 58.4%',
    stats: [
      { label: 'Automated Revenue', value: '$1.9M+', delta: 'Klaviyo / Attentive', desc: 'Hands-free automated flow revenue generated for clients.' },
      { label: 'Repeat Order Rate', value: '42%', delta: '+150% LTV', desc: 'Percentage of existing customers making 2nd and 3rd orders.' },
      { label: 'Avg Email Open Rate', value: '54.5%', delta: 'High Deliverability', desc: 'Inbox-optimized send reputation and hyper-personalized subject lines.' }
    ],
    technologies: ['Klaviyo', 'Attentive SMS', 'WhatsApp Business API', 'Recharge Subscriptions', 'Postscript', 'Gorgias Customer Support'],
    solutions: [
      { num: '01', title: 'Lifecycle Automation & Welcome Flows', desc: 'High-converting welcome series, abandoned cart recovery, browse abandonment, and post-purchase onboarding.' },
      { num: '02', title: 'Win-Back & Churn Prevention Flows', desc: 'Predictive timing automations that re-engage inactive customers right before their estimated depletion date.' },
      { num: '03', title: 'Omnichannel SMS & WhatsApp Funnels', desc: 'Instant 98% open-rate broadcast alerts, order updates, and conversational sales funnels.' },
      { num: '04', title: 'Customer Segmentation & RFM Analytics', desc: 'Segmenting your audience by Recency, Frequency, and Monetary value for targeted messaging.' },
      { num: '05', title: 'VIP Loyalty & Referral Programs', desc: 'Reward structures that gamify repeat purchases and turn happy buyers into brand ambassadors.' }
    ]
  },

  'receipts': {
    id: 'receipts',
    category: 'Acquire',
    badge: 'VERIFIED CASE STUDIES',
    title: 'Receipts & Case Studies Showcase',
    subtitle: 'Verified performance marketing, site speed, and conversion results across leading brands.',
    description: 'We don’t present pitch decks — we present receipts. Explore live storefronts, verified revenue lifts, and sub-second speed benchmarks delivered for DTC and B2B clients.',
    bullets: [
      'Interactive 3D Work & Storefront Showcase',
      'Real-Time Google Lighthouse Speed Benchmarks',
      'Verified Blended ROAS & Conversion Metrics',
      'Full Technology Stack & Architecture Breakdown'
    ],
    kpiLabel: 'Total Client Value Created',
    kpiValue: '$14.2M+',
    kpiSubText: 'Avg Blended Client ROAS: 4.82x | Mobile Speed: 0.62s',
    stats: [
      { label: 'Storefronts & Apps Built', value: '45+', delta: 'Verified', desc: 'Bespoke Shopify storefronts, Next.js web apps, and landing pages.' },
      { label: 'Blended Client ROAS', value: '4.8x', delta: '+140% Lift', desc: 'Proven revenue growth across Meta, Google & Amazon ad channels.' },
      { label: 'Avg Mobile Speed', value: '0.62s', delta: 'Sub-1s', desc: 'Google Lighthouse 95+ score for maximum visitor retention.' }
    ],
    technologies: ['React 19', 'Next.js 15', 'Shopify Liquid', 'Meta CAPI Gateway', 'Google PMax', 'Klaviyo', 'Braze', 'BigQuery'],
    solutions: [
      { num: '01', title: 'Interactive Storefront Showcase', desc: 'Browse our portfolio of custom storefronts and high-converting campaign landing pages.' },
      { num: '02', title: 'Sub-Second Speed Engineering', desc: 'Before & after Lighthouse audits demonstrating sub-1-second mobile load times.' },
      { num: '03', title: 'Multi-Channel Ad Attribution', desc: 'Server-to-server CAPI tracking setups generating 99.1% clean attribution accuracy.' },
      { num: '04', title: 'Retention & Email Flow Receipts', desc: 'Automated Klaviyo & Braze flows driving 30%+ of total store revenue hands-free.' },
      { num: '05', title: 'Enterprise Data Warehouse CDP', desc: 'Unified zero-party data platforms built for GDPR compliance and high ad match rates.' }
    ]
  },

  'about': {
    id: 'about',
    category: 'Convert',
    badge: 'THE JANUSMAAD PHILOSOPHY',
    title: 'JanusMAAD is your full-stack growth partner',
    subtitle: 'Built around a simple belief: what happened yesterday should make tomorrow smarter.',
    description: 'We help businesses acquire customers, convert them and retain them by bringing four disciplines together — Marketing, Advertising, Analytics and Data.',
    bullets: [
      'Marketing: Strategic positioning, narrative & brand momentum',
      'Advertising: High-intent performance media buying & scale',
      'Analytics: Attribution, GA4, CAPI & deep conversion telemetry',
      'Data: Customer lifetime value, RFM segmentation & automation'
    ],
    kpiLabel: 'Growth Framework',
    kpiValue: 'M.A.A.D',
    kpiSubText: 'Marketing • Advertising • Analytics • Data | Past insights. Future thinking.',
    stats: [
      { label: 'Disciplines Integrated', value: '4-in-1', delta: 'MAAD System', desc: 'Marketing, Advertising, Analytics, and Data unified.' },
      { label: 'Onboarding Sprint', value: '3 Weeks', delta: 'Structured', desc: 'From discovery to data forensics to high-speed execution.' },
      { label: 'Philosophy', value: 'Past + Future', delta: 'Janus Ethos', desc: 'Look back to understand, look forward to anticipate.' }
    ],
    technologies: ['GA4 & GTM Server-Side', 'Meta Ads CAPI', 'Google Performance Max', 'Shopify Plus & Headless', 'Klaviyo Enterprise', 'PostgreSQL & CDP'],
    solutions: [
      { num: '01', title: 'Step 1: Discover & Assess (Week 1)', desc: 'Align on goals, spot the gaps and gather what we need. Understand goals, pain points and review current setup and tools.' },
      { num: '02', title: 'Step 2: Analyse & Strategise (Week 2)', desc: 'Dive into the data to create a tailored game plan. Deep dive into data, technology, and user behaviour.' },
      { num: '03', title: 'Step 3: Align & Execute (Week 3)', desc: 'Bring the plan to life with precision and purpose. Define team roles, resources, clear deliverables and kick off.' },
      { num: '04', title: 'Holistic Attribution', desc: 'Growth comes from understanding the whole picture across your numbers, marketing, and technology.' },
      { num: '05', title: 'Two-Faced Vision', desc: 'We look back to understand. We look forward to anticipate. And we use both to make better decisions.' }
    ]
  },

  'pricing': {
    id: 'pricing',
    category: 'Retain',
    badge: 'TRANSPARENT ENGAGEMENT MODELS',
    title: 'Targeted Engagement Models & Pricing',
    subtitle: 'Three clear ways to work with Janusmaad Digital — designed for your stage of growth.',
    description: 'Choose the model that fits your goals: dedicated single-channel capability audits, full-service growth retainers, or custom performance-share partnerships.',
    bullets: [
      'No Long-Term Lock-in Contracts',
      '100% Transparent Weekly Reporting',
      'Dedicated Growth Strategist & Dev Team',
      'Guaranteed Sub-Second Page Speed Standards'
    ],
    kpiLabel: 'Avg ROI Across Models',
    kpiValue: '380%',
    kpiSubText: 'Average Payback Period: 45 Days | Profit Lift Guarantee',
    stats: [
      { label: 'Sprint Audit Time', value: '7 Days', delta: 'Fast Track', desc: 'Complete teardown and growth roadmap delivered within one week.' },
      { label: 'Avg Retainer ROAS', value: '4.5x+', delta: 'Blended', desc: 'Full-funnel media buying and site optimization included.' },
      { label: 'Clients Scaled to 8-Figs', value: '12+', delta: 'Success Rate', desc: 'Brands scaled from early stage to enterprise market leadership.' }
    ],
    technologies: ['Full Stack MarTech', 'Custom Dashboards', 'Stripe Billing', 'Shopify Plus', 'Klaviyo Enterprise', 'GA4 Analytics'],
    solutions: [
      { num: '01', title: 'Capability Sprint Audit (Fixed Fee)', desc: '7-day deep audit of your ad accounts, site speed, and conversion funnel with an actionable 90-day roadmap.' },
      { num: '02', title: 'Full-Service Growth Retainer (Monthly)', desc: 'End-to-end media buying, creative production, landing page development, and retention marketing.' },
      { num: '03', title: 'Performance Share Partnership', desc: 'Shared upside model for high-scale brands where our compensation is directly tied to incremental net revenue.' },
      { num: '04', title: 'Custom Shopify Dev & Headless Build', desc: 'One-off bespoke storefront or landing page engineering with sub-1-second mobile speed guarantees.' },
      { num: '05', title: 'Retention & Klaviyo Setup Package', desc: 'Complete setup of automated email, SMS, and WhatsApp funnels designed to increase customer LTV.' }
    ]
  }
};



export const CapabilityPage: React.FC<CapabilityPageProps> = ({
  capabilityId,
  onNavigateHome,
  onNavigateCapability,
  onOpenAudit
}) => {
  const details = CAPABILITIES_DATA[capabilityId] || CAPABILITIES_DATA['acquire-performance'];

  // Scroll to top whenever capability ID changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [capabilityId]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: `Inquiry regarding ${details.title}`,
    phone: '',
    message: '',
    optIn: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);




  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    await submitLeadForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      source: `Capability Page - ${details.title}`
    });
    sendAuditToWhatsApp(formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: `Inquiry regarding ${details.title}`,
        phone: '',
        message: '',
        optIn: true
      });
    }, 4000);
  };

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'Acquire': return BarChart3;
      case 'Convert': return Code2;
      case 'Retain': return RotateCcw;
      default: return Sparkles;
    }
  };

  const CategoryIcon = getCategoryIcon(details.category);

  const renderCustomPageFeature = (id: CapabilityId) => {
    const navigateHandler = (capId: string) => {
      if (onNavigateCapability) {
        onNavigateCapability(capId as CapabilityId);
      }
    };

    switch (id) {
      case 'acquire-performance':
        return <PerformanceMarketingService onOpenAudit={onOpenAudit} onNavigateCapability={navigateHandler} />;

      case 'acquire-seo':
        return <SEOService onOpenAudit={onOpenAudit} onNavigateCapability={navigateHandler} />;

      case 'acquire-smm':
        return <SMMService onOpenAudit={onOpenAudit} onNavigateCapability={navigateHandler} />;

      case 'convert-build':
        return <BuildService onOpenAudit={onOpenAudit} onNavigateCapability={navigateHandler} />;

      case 'convert-cro':
        return <CROService onOpenAudit={onOpenAudit} onNavigateCapability={navigateHandler} />;

      case 'retain-marketing':
        return <RetentionMarketingService onOpenAudit={onOpenAudit} onNavigateCapability={navigateHandler} />;

      case 'receipts':
        return <CategoryMetricsExplorer onOpenAudit={onOpenAudit} />;

      case 'about':
        return (
          <AboutService 
            onOpenAudit={onOpenAudit} 
            onNavigateCapability={navigateHandler} 
            onNavigateHome={onNavigateHome} 
          />
        );

      default:
        return null;
    }
  };

  const customFeature = renderCustomPageFeature(capabilityId);
  if (customFeature) {
    return (
      <div className="pt-24 sm:pt-28">
        {customFeature}
      </div>
    );
  }

  return (
    <div id={`capability-${capabilityId}`} className="pt-28 pb-20 px-4 sm:px-8 bg-bone text-ink min-h-screen relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Header Navigation Bar */}
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
              {details.category} Capabilities
            </span>
            <span className="text-mute">/</span>
            <span className="text-ink font-bold">{details.title}</span>
          </div>
        </div>

        {/* Main Capability Dedicated Hero Card with Bespoke Page Theme */}
        {(() => {
          const isDarkTheme = [
            'acquire-performance', 
            'acquire-smm', 
            'convert-cro', 
            'retain-marketing'
          ].includes(capabilityId);

          const heroThemeClass = {
            'acquire-performance': 'bg-[#0a0d16] text-white border-teal/40 shadow-2xl',
            'acquire-seo': 'bg-gradient-to-br from-white via-blue-50/40 to-white text-ink border-blue-200 shadow-xl',
            'acquire-smm': 'bg-gradient-to-br from-[#12101f] via-[#1a1228] to-[#0c0d16] text-white border-pink-500/30 shadow-2xl',
            'convert-build': 'bg-gradient-to-br from-white via-bone to-white text-ink border-violet/30 shadow-xl',
            'convert-cro': 'bg-[#0f141f] text-white border-amber-500/30 shadow-2xl',
            'retain-marketing': 'bg-gradient-to-br from-[#091512] via-[#0d1e1a] to-[#07120f] text-white border-emerald-500/30 shadow-2xl',
            'receipts': 'bg-white text-ink border-hairline',
            'about': 'bg-white text-ink border-hairline',
            'pricing': 'bg-white text-ink border-hairline',
          }[capabilityId];

          return (
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border rounded-3xl p-8 sm:p-12 relative overflow-hidden transition-all duration-300 ${heroThemeClass}`}>
              <div className="absolute top-0 right-0 w-96 h-96 bg-violet/10 rounded-full blur-3xl -z-0 pointer-events-none" />

              <div className="lg:col-span-7 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-violet/15 border border-violet/30 rounded-full text-xs font-mono font-bold text-teal uppercase tracking-wider">
                  <CategoryIcon className="w-3.5 h-3.5 text-teal" />
                  <span>{details.badge}</span>
                </div>

                <h1 className={`text-3xl sm:text-5xl font-display font-bold leading-tight ${isDarkTheme ? 'text-white' : 'text-ink'}`}>
                  <TextRolling text={details.title} />
                </h1>

                <p className={`font-display text-lg sm:text-xl font-medium ${isDarkTheme ? 'text-teal' : 'text-violet'}`}>
                  {details.subtitle}
                </p>

                <p className={`text-base sm:text-lg leading-relaxed ${isDarkTheme ? 'text-white/80' : 'text-mute'}`}>
                  {details.description}
                </p>

                {/* Key Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {details.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-teal shrink-0 mt-1" />
                      <span className={`text-sm font-medium ${isDarkTheme ? 'text-white/90' : 'text-ink/90'}`}>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button variant="primary" size="md" onClick={() => onOpenAudit(capabilityId)}>
                    Get Free Capability Audit
                  </Button>
                  <a
                    href="#talk-to-us"
                    className={`inline-flex items-center gap-2 text-sm font-display font-bold transition-colors ${isDarkTheme ? 'text-teal hover:text-white' : 'text-violet hover:text-violet-deep'}`}
                  >
                    <span>Talk to Our Strategists</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Visual KPI Showcase Card */}
              <div className="lg:col-span-5 relative z-10">
                <div className="bg-ink text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl border border-white/15 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs font-mono uppercase text-teal font-bold">{details.category.toUpperCase()} SYSTEM METRICS</span>
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      ACTIVE BENCHMARK
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-white/60">{details.kpiLabel}</div>
                      <div className="text-4xl sm:text-5xl font-display font-bold text-white mt-1">
                        {details.kpiValue}
                      </div>
                    </div>

                    <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 text-xs text-white/80 space-y-1">
                      <div className="font-bold text-teal">Performance Benchmark</div>
                      <div className="text-white/70">{details.kpiSubText}</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
                    <span>• 100% Transparent Data</span>
                    <span>• Weekly Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Real Performance Stats Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-data-label text-violet uppercase text-xs font-bold tracking-widest">
              CAPABILITY STATS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">
              Proven Impact & Scalable Systems
            </h2>
            <p className="text-mute text-sm sm:text-base">
              Aggregated results from our direct implementation across leading brands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
            {details.stats.map((stat, i) => {
              const cardStyles = [
                {
                  className: 'litmus-card-1 text-[#07101E]',
                  style: {
                    background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
                    boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
                  },
                  labelColor: 'text-[#07101E]/80 font-bold',
                  deltaColor: 'text-[#07101E] font-bold bg-white/50 px-2 py-0.5 rounded-full',
                  valueColor: 'text-[#07101E]',
                  descColor: 'text-[#0A2540] font-medium'
                },
                {
                  className: 'litmus-card-2 text-white',
                  style: {
                    background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                    boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
                  },
                  labelColor: 'text-white/80 font-bold',
                  deltaColor: 'text-white font-bold bg-white/20 px-2 py-0.5 rounded-full',
                  valueColor: 'text-white drop-shadow-xs',
                  descColor: 'text-sky-100 font-medium'
                },
                {
                  className: 'litmus-card-3 text-white',
                  style: {
                    background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
                    boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
                  },
                  labelColor: 'text-white/80 font-bold',
                  deltaColor: 'text-[#5DAFFF] font-bold bg-black/20 px-2 py-0.5 rounded-full',
                  valueColor: 'text-white drop-shadow-sm',
                  descColor: 'text-blue-100 font-medium'
                }
              ][i % 3];

              return (
                <div
                  key={i}
                  style={cardStyles.style}
                  className={`relative rounded-[24px] p-6 sm:p-8 space-y-3 overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 ${cardStyles.className}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={cardStyles.labelColor}>{stat.label}</span>
                      <span className={cardStyles.deltaColor}>{stat.delta}</span>
                    </div>
                    <div className={`text-4xl sm:text-5xl font-display font-extrabold ${cardStyles.valueColor}`}>
                      {stat.value}
                    </div>
                    <p className={`text-xs leading-relaxed ${cardStyles.descColor}`}>{stat.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Custom Visual Feature Block Tailored Specific to this Page */}
        {renderCustomPageFeature(capabilityId)}

        {/* Technologies & Frameworks Showcase */}
        <div className="bg-white border border-hairline rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
          <div className="max-w-3xl space-y-2">
            <div className="text-data-label text-violet uppercase text-xs font-bold">TECH & PLATFORMS</div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
              Enterprise Tools & Integrations
            </h2>
            <p className="text-mute text-sm sm:text-base">
              We leverage modern stacks to guarantee high speed, maximum security, and deep attribution.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {details.technologies.map((tech, i) => (
              <div
                key={i}
                className="px-4 py-2.5 bg-bone border border-hairline rounded-xl text-xs font-display font-bold text-ink hover:border-violet hover:text-violet transition-all"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* 01 to 05 Detailed Solutions We Offer */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="text-data-label text-violet uppercase text-xs font-bold">SOLUTIONS</div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">
              What We Deliver for {details.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {details.solutions.map((sol, i) => {
              const cardStyles = [
                {
                  className: 'litmus-card-1 text-[#07101E]',
                  style: {
                    background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
                    boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
                  },
                  numColor: 'text-[#07101E] font-bold bg-white/60 px-2 py-0.5 rounded-full w-fit',
                  titleColor: 'text-[#07101E]',
                  descColor: 'text-[#0A2540] font-medium'
                },
                {
                  className: 'litmus-card-2 text-white',
                  style: {
                    background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                    boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
                  },
                  numColor: 'text-white font-bold bg-white/20 px-2 py-0.5 rounded-full w-fit',
                  titleColor: 'text-white drop-shadow-xs',
                  descColor: 'text-sky-100 font-medium'
                },
                {
                  className: 'litmus-card-3 text-white',
                  style: {
                    background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
                    boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
                  },
                  numColor: 'text-[#5DAFFF] font-bold bg-black/20 px-2 py-0.5 rounded-full w-fit',
                  titleColor: 'text-white drop-shadow-sm',
                  descColor: 'text-blue-100 font-medium'
                }
              ][i % 3];

              return (
                <div
                  key={i}
                  style={cardStyles.style}
                  className={`relative rounded-[24px] p-6 sm:p-8 space-y-4 overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 ${cardStyles.className}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
                  <div className="relative z-10 space-y-3">
                    <div className={`text-xs font-mono ${cardStyles.numColor}`}>{sol.num}</div>
                    <h3 className={`text-lg font-display font-extrabold ${cardStyles.titleColor}`}>
                      {sol.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${cardStyles.descColor}`}>
                      {sol.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reference Industry Case Benchmarks */}
        <div className="bg-bone border border-hairline rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="space-y-2">
            <div className="text-data-label text-violet uppercase text-xs font-bold">BENCHMARK CASE STUDIES</div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
              Proven Playbooks & Execution Standards
            </h2>
            <p className="text-mute text-sm sm:text-base max-w-3xl">
              Inspired by leading growth frameworks across e-commerce, direct-to-consumer, and enterprise tech platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2 items-stretch">
            {[
              { title: 'Performance Ad Engine', source: 'Teckey Performance System', desc: 'Google PMax & Meta CAPI server-side conversion architecture.' },
              { title: 'Sub-Second PDP Speed', source: 'The Landing Page Co Framework', desc: 'Custom Shopify Liquid & Next.js 15 landing page speed optimization.' },
              { title: 'Short-Form Video Engine', source: 'Storyflix Direct Response', desc: 'Reels and TikTok creator UGC funnels driving viral purchase intent.' },
              { title: 'Multi-Channel Attribution', source: 'Visionary Growth Architecture', desc: 'Unified Google, Meta, and owned channel lifecycle attribution.' },
              { title: 'Zero-Party Data CDP', source: 'ShellKode Data Engineering', desc: 'BigQuery & Segment real-time zero-party quiz data warehousing.' },
            ].map((caseItem, idx) => {
              const cardStyles = [
                {
                  className: 'litmus-card-1 text-[#07101E]',
                  style: {
                    background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
                    boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
                  },
                  sourceColor: 'text-[#07101E] font-bold bg-white/60 px-2 py-0.5 rounded-full',
                  titleColor: 'text-[#07101E]',
                  descColor: 'text-[#0A2540] font-medium'
                },
                {
                  className: 'litmus-card-2 text-white',
                  style: {
                    background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
                    boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
                  },
                  sourceColor: 'text-white font-bold bg-white/20 px-2 py-0.5 rounded-full',
                  titleColor: 'text-white drop-shadow-xs',
                  descColor: 'text-sky-100 font-medium'
                },
                {
                  className: 'litmus-card-3 text-white',
                  style: {
                    background: 'linear-gradient(135deg, #3B7FC3 0%, #0D2D5C 100%)',
                    boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.4), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.3)'
                  },
                  sourceColor: 'text-white font-bold bg-black/20 px-2 py-0.5 rounded-full',
                  titleColor: 'text-white drop-shadow-sm',
                  descColor: 'text-blue-100 font-medium'
                }
              ][idx % 3];

              return (
                <div
                  key={idx}
                  style={cardStyles.style}
                  className={`relative rounded-[24px] p-6 space-y-2 overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 ${cardStyles.className}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono ${cardStyles.sourceColor}`}>{caseItem.source}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </div>
                    <div className={`font-display font-extrabold text-base ${cardStyles.titleColor}`}>{caseItem.title}</div>
                    <div className={`text-xs leading-relaxed ${cardStyles.descColor}`}>{caseItem.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dedicated "TALK TO US" Contact Form for this Capability */}
        <div id="talk-to-us" className="bg-ink text-white rounded-3xl p-8 sm:p-12 space-y-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="text-data-label text-teal uppercase text-xs font-bold tracking-widest">
              TALK TO US
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-white">
              How May We Help You!
            </h2>
            <p className="text-white/70 text-sm sm:text-base">
              Get in touch with our specialists for a free campaign audit and custom ROAS roadmap for {details.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="bg-white/10 border border-teal/40 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-200">
                  <ShieldCheck className="w-12 h-12 text-teal mx-auto" />
                  <h3 className="text-xl font-display font-bold text-white">Thank You for Reaching Out!</h3>
                  <p className="text-sm text-white/80 max-w-md mx-auto">
                    Your inquiry regarding {details.title} has been submitted. A strategist will get back to you within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/80 uppercase">Your Name*</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/80 uppercase">Your Email*</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/80 uppercase">Subject*</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={`Inquiry regarding ${details.title}`}
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/80 uppercase">Your Phone*</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98187 47001"
                        className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/80 uppercase">Message*</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={`Tell us about your current targets for ${details.title}...`}
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors resize-none"
                    />
                  </div>

                  {/* Opt-in Checkbox */}
                  <div className="flex items-start gap-3 pt-1">
                    <input
                      type="checkbox"
                      id="optIn"
                      name="optIn"
                      checked={formData.optIn}
                      onChange={handleInputChange}
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-teal focus:ring-teal cursor-pointer"
                    />
                    <label htmlFor="optIn" className="text-xs text-white/70 leading-relaxed cursor-pointer">
                      I would like to opt-in to receive emails about news, trends, offers, or blogs. For more information, please read our{' '}
                      <a href="#privacy" className="text-teal underline hover:text-white">Privacy Policy</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-teal text-ink font-display font-bold rounded-xl hover:bg-emerald-400 transition-colors shadow-lg cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-display font-bold text-white">Direct Contact</h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/919818747001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group border border-emerald-500/30"
                >
                  <div className="p-2.5 bg-[#25D366] text-white rounded-lg group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">WhatsApp Us</div>
                    <div className="text-sm font-bold text-white">+91 98187 47001</div>
                  </div>
                </a>

                <a
                  href="tel:+919818747001"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-2.5 bg-teal/20 text-teal rounded-lg group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Call Now</div>
                    <div className="text-sm font-bold text-white">+91 98187 47001</div>
                  </div>
                </a>

                <a
                  href="mailto:hello@janusmaad.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="p-2.5 bg-teal/20 text-teal rounded-lg group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Email Us</div>
                    <div className="text-sm font-bold text-white">hello@janusmaad.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5">
                  <div className="p-2.5 bg-teal/20 text-teal rounded-lg">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/60">Working Hours</div>
                    <div className="text-sm font-bold text-white">Monday – Saturday: 9am – 8pm</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 space-y-2">
                  <div className="text-xs font-mono text-white/60 uppercase">India Support Hub</div>
                  <div className="text-xs text-white/80 font-mono">
                    <div>🇮🇳 India: +91 98187 47001</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
