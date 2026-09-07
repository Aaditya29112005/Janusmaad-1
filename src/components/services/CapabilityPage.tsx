import React, { useState, useEffect, useRef } from 'react';
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
  Play
} from 'lucide-react';
import { Button } from '../ui/Button';
import { CategoryMetricsExplorer } from '../proof/CategoryMetricsExplorer';
import { TextRolling } from '../hero/TextRolling';
import { HoverCursorImage } from '../receipts/HoverCursorImage';
import { gsap } from '../../gsap/register';


// GSAP Magnetic Pull Button component for magnetic hover effects
const MagneticButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.4)',
      overwrite: 'auto'
    });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
};


export type CapabilityId = 
  | 'acquire-performance' 
  | 'acquire-seo' 
  | 'acquire-smm' 
  | 'convert-build' 
  | 'convert-cro' 
  | 'retain-marketing' 
  | 'retain-cep' 
  | 'retain-cdp'
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
    subtitle: 'Meta, Google & TikTok campaigns built for high return on ad spend (ROAS).',
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

  'retain-cep': {
    id: 'retain-cep',
    category: 'Retain',
    badge: 'RETAIN CAPABILITIES',
    title: 'CEP (Customer Engagement Platform)',
    subtitle: 'Klaviyo and Braze architectures setup for hyper-personalised real-time messaging.',
    description: 'Enterprise-grade customer engagement infrastructure. We configure Klaviyo and Braze architectures to process real-time user events, dynamic catalog feeds, and hyper-targeted messages.',
    bullets: [
      'Enterprise Klaviyo & Braze Migration & Architecture',
      'Real-Time Event Triggers & Webhook Synchronization',
      'Hyper-Personalization Dynamic Catalog & Price Drop Alerts',
      'Cross-Channel Messaging Orchestration (Email, Push, In-App)'
    ],
    kpiLabel: 'Real-Time Event Processing',
    kpiValue: '12M+/mo',
    kpiSubText: 'Event Latency: <50ms | Dynamic Personalization Rate: 99.4%',
    stats: [
      { label: 'Real-Time Triggers', value: '12M+', delta: 'Sub-50ms Sync', desc: 'Instant behavioral events triggering personalized messages.' },
      { label: 'In-App & Push Lift', value: '+48%', delta: 'Mobile App Eng', desc: 'Higher engagement on mobile channels via Braze orchestration.' },
      { label: 'Deliverability Score', value: '99.2%', delta: 'Tier-1 Sender', desc: 'Zero spam placement with dedicated IP warming protocols.' }
    ],
    technologies: ['Braze Enterprise', 'Klaviyo Master', 'Segment.io', 'Mixpanel', 'Webhooks API', 'Firebase Cloud Messaging'],
    solutions: [
      { num: '01', title: 'Klaviyo & Braze Enterprise Setup', desc: 'Clean architecture design, custom event schema mapping, and dedicated domain authentication.' },
      { num: '02', title: 'Real-Time Event & Trigger Architecture', desc: 'Wiring custom backend events (e.g. video watch, wishlist add, trial start) directly to messaging triggers.' },
      { num: '03', title: 'Dynamic Predictive Personalization', desc: 'Injecting dynamic product recommendations, custom pricing badges, and localized currency in real-time.' },
      { num: '04', title: 'Cross-Channel Messaging Workflows', desc: 'Unified orchestration across Mobile Push, In-App Messages, Email, and SMS.' },
      { num: '05', title: 'Deliverability & IP Reputation Management', desc: 'Proactive domain health monitoring, inbox placement testing, and warm-up schedules.' }
    ]
  },

  'retain-cdp': {
    id: 'retain-cdp',
    category: 'Retain',
    badge: 'RETAIN CAPABILITIES',
    title: 'CDP (Customer Data Platform)',
    subtitle: 'Unified zero-party data infrastructure for predictive audience targeting and privacy-first compliance.',
    description: 'Take back control of your customer data in the post-cookie era. We build unified zero-party and first-party data platforms that sync real-time customer profiles directly with your ad channels.',
    bullets: [
      'Unified Single Customer View (SCV) Data Warehouse',
      'Zero & First-Party Data Capture via Quizzes & Surveys',
      'Real-Time Meta CAPI & Google Offline Conversion Sync',
      'Privacy-First GDPR & CCPA Compliance Framework'
    ],
    kpiLabel: 'First-Party Data Match Rate',
    kpiValue: '88.6%',
    kpiSubText: 'Attribution Accuracy: 99.1% | Ad Platform Match Boost: +32%',
    stats: [
      { label: 'Unified Profiles', value: '1.2M+', delta: 'Single View', desc: 'Clean aggregated customer profiles across all touchpoints.' },
      { label: 'Ad Match Rate Lift', value: '+35%', delta: 'Meta & Google', desc: 'Higher match rate for custom audiences using server-side sync.' },
      { label: 'Data Accuracy', value: '99.8%', delta: 'Zero-Party Verified', desc: 'Direct survey and quiz preference data captured straight from buyers.' }
    ],
    technologies: ['Segment CDP', 'RudderStack', 'BigQuery Data Warehouse', 'Meta CAPI Gateway', 'Google Ads Offline API', 'Typeform / Octane AI'],
    solutions: [
      { num: '01', title: 'Unified Customer Profile Aggregation', desc: 'Combining website visits, purchase history, customer support tickets, and email clicks into one profile.' },
      { num: '02', title: 'Server-Side Conversions API (CAPI)', desc: 'Bypassing ad blockers and iOS privacy restrictions with bulletproof server-to-server event tracking.' },
      { num: '03', title: 'Zero-Party Quiz & Preference Funnels', desc: 'Interactive recommendation quizzes that collect customer preferences while increasing conversion.' },
      { num: '04', title: 'Predictive Churn & LTV Modeling', desc: 'Using machine learning algorithms to identify high-LTV VIPs and at-risk buyers before they leave.' },
      { num: '05', title: 'Real-Time Ad Platform Audience Sync', desc: 'Pushing dynamic exclusion lists and high-value lookalike seed lists directly into Meta, Google, and TikTok.' }
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
    badge: 'AGENCY PHILOSOPHY & PROCESS',
    title: 'About Janusmaad Digital & How We Work',
    subtitle: 'Performance marketing and engineering operating across Delhi NCR and Noida.',
    description: 'We are a specialized growth studio. We combine direct-response media buying with sub-second frontend engineering to help ambitious brands scale profitably without ad waste.',
    bullets: [
      '01. Deep Audit & Strategy Mapping',
      '02. Rapid Execution & System Build',
      '03. Continuous Optimization & Scaling',
      'India Dual-Hub Operations (Delhi NCR & Noida)'
    ],
    kpiLabel: 'Client Retention Rate',
    kpiValue: '94.2%',
    kpiSubText: 'Average Partnership Duration: 18+ Months | Blended ROAS Target: 4.5x',
    stats: [
      { label: 'Global Team Size', value: '28+', delta: 'Specialists', desc: 'Senior strategists, media buyers, developers, and data engineers.' },
      { label: 'Ad Spend Managed', value: '$8.5M+', delta: 'Annual', desc: 'Optimization across Meta, Google, TikTok, and Amazon inventory.' },
      { label: 'Client Net Satisfaction', value: '98%', delta: 'CSAT', desc: 'Transparent weekly reporting with real-time Slack/Teams access.' }
    ],
    technologies: ['GA4 & GTM', 'Vercel App Hosting', 'Meta Business Suite', 'Google Search Console', 'Klaviyo Enterprise', 'Ahrefs', 'Figma'],
    solutions: [
      { num: '01', title: 'Phase 1: Deep Audit & Data Setup', desc: 'We audit your tracking, funnel drop-offs, and ad accounts to plug revenue leaks immediately.' },
      { num: '02', title: 'Phase 2: High-Speed Build & Ads', desc: 'We deploy sub-second landing pages, high-converting ad creative hooks, and automated email flows.' },
      { num: '03', title: 'Phase 3: Scale & Optimize', desc: 'We run multivariate A/B tests and scale winning ad sets to maximize blended return on ad spend.' },
      { num: '04', title: 'Transparent Communication', desc: 'No fluff reports. You get direct access to our senior strategists via dedicated channels.' },
      { num: '05', title: 'Performance-Aligned Incentives', desc: 'Our growth models are structured around your profit targets, ensuring complete alignment.' }
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

const BUILD_PROOF_CARDS = [
  { category: 'DTC Skincare Brand', metric: '+48.2% CVR', title: 'Sub-0.8s PDP Speed Upgrade', desc: 'Mobile PDP load dropped from 4.2s to 0.65s, adding ₹1.2Cr monthly revenue.' },
  { category: 'B2B Enterprise SaaS', metric: '+310% Leads', title: 'Custom Next.js Demo Engine', desc: 'Interactive pricing teardown and sub-second demo booking architecture.' },
  { category: 'Luxury Apparel E-Com', metric: '+38.5% AOV', title: 'Bespoke 1-Click Cart Upsell', desc: 'Custom cart slide recommendations increasing average order value by ₹1,450.' },
  { category: 'Health & Wellness', metric: '-28.4% CAC', title: 'High-Converting Campaign Page', desc: 'Direct response landing page with UGC video hooks and instant trust badges.' },
  { category: 'Organic Beauty Store', metric: '+64.0% Repeat', title: 'Klaviyo Lifecycle Flow Sync', desc: 'Automated welcome series and win-back flows driving 34% of store revenue.' },
  { category: 'Footwear Brand', metric: '4.82x ROAS', title: 'Meta & Google PMax CAPI', desc: 'Server-side conversion API tracking generating 99.1% match accuracy.' },

  { category: 'Home Decor Brand', metric: '+52.1% Checkout', title: 'Single-Page Checkout Teardown', desc: 'Friction removal on payment gateways and address auto-fill integration.' },
  { category: 'Gourmet Coffee DTC', metric: '+42.0% Subscriptions', title: 'Headless Recharge Funnel', desc: 'Seamless recurring subscription management UI built with custom Liquid.' },
  { category: 'Activewear Apparel', metric: '+85.0% Mobile Rev', title: 'Sub-Second Speed Overhaul', desc: 'React 19 storefront migration dropping bounce rate from 58% to 19%.' },
  { category: 'Electronics & Accessories', metric: '3.4x Conversion', title: 'Multivariate VWO A/B Test', desc: 'Statistically verified headlines and call-to-action button variations.' },
  { category: 'Personal Care Products', metric: '2.8x Target ROAS', title: 'Pre-Launch Campaign Pages', desc: 'Single-purpose landing pages engineered specifically for TikTok ad traffic.' },
  { category: 'Fine Jewelry Retailer', metric: '+54.2% Cart AOV', title: 'Dynamic Cross-Sell Bundling', desc: 'Product matching algorithms recommending pairing items directly in cart.' },

  { category: 'Fitness Tech Platform', metric: '+120% Trials', title: 'Generative AI Overview (GEO)', desc: 'Schema JSON-LD Knowledge Graph architecture for ChatGPT & Perplexity.' },
  { category: 'Organic Snack Foods', metric: '+44.8% First Buyers', title: 'Zero-Party Quiz Engine', desc: 'Interactive flavor finder quiz capturing customer preferences live.' },
  { category: 'Sustainable Fashion', metric: '-34.0% Bounce Rate', title: 'Lighthouse 98/100 CWV Tuning', desc: 'Optimized image loading and edge CDN delivery on Vercel infrastructure.' },
  { category: 'Pet Care E-Commerce', metric: '3.8x ROAS', title: 'Omnichannel SMS & WhatsApp', desc: 'Instant 98% open-rate abandoned cart recovery alerts.' },
  { category: 'Eyewear & Accessories', metric: '+41.2% RPV', title: 'Direct Response UX Design', desc: 'High-contrast typography and sticky bottom conversion bars on mobile.' },
  { category: 'Modern Luggage & Travel', metric: '+210% Organic Traffic', title: 'Search Everywhere SEO', desc: 'Clustered content hubs capturing high-intent commercial keywords.' }
];

export const CapabilityPage: React.FC<CapabilityPageProps> = ({
  capabilityId,
  onNavigateHome,
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

  // Build Page Calculator & Proof Carousel State
  const [buildMonthlyAdSpend, setBuildMonthlyAdSpend] = useState(500000); // ₹5L (min 1L to 1CR)
  const [buildPromiseLift, setBuildPromiseLift] = useState(25); // 25% (10% to 100%)

  // Performance Ad Calculator State
  const [perfAdSpend, setPerfAdSpend] = useState(500000); // ₹5L
  const [perfCPL, setPerfCPL] = useState(180); // ₹180 CPL
  const [perfCVR, setPerfCVR] = useState(3.5); // 3.5%

  const perfTotalLeads = Math.round(perfAdSpend / perfCPL);
  const perfQualifiedLeads = Math.round(perfTotalLeads * (perfCVR / 100));
  const perfProjectedROAS = (perfCVR * 1.35).toFixed(2);

  // CRO Calculator State
  const [croTraffic, setCroTraffic] = useState(100000); // 100k visitors
  const [croCVR, setCroCVR] = useState(1.8); // 1.8% CVR
  const [croAOV, setCroAOV] = useState(3500); // ₹3,500 AOV

  const croCurrentRev = (croTraffic * (croCVR / 100)) * croAOV;
  const croNewCVR = croCVR * 1.3; // +30% lift
  const croNewRev = (croTraffic * (croNewCVR / 100)) * croAOV;
  const croMonthlyGain = croNewRev - croCurrentRev;

  // SMM Calculator State
  const [smmViews, setSmmViews] = useState(500000); // 500k video views
  const [smmConversionRate, setSmmConversionRate] = useState(0.8); // 0.8%
  const [smmAOV, setSmmAOV] = useState(2400); // ₹2,400 AOV

  const smmGeneratedSales = Math.round(smmViews * (smmConversionRate / 100));
  const smmMonthlyRevenue = smmGeneratedSales * smmAOV;

  // Retention Calculator State
  const [retainListSize, setRetainListSize] = useState(50000); // 50k subscribers
  const [retainOpenRate, setRetainOpenRate] = useState(45); // 45% open rate
  const retainMonthlyRev = Math.round(retainListSize * (retainOpenRate / 100) * 0.04 * 2800);

  // SEO Calculator State
  const [seoSearchVolume, setSeoSearchVolume] = useState(250000); // 250k monthly queries
  const [seoRankShare, setSeoRankShare] = useState(28); // 28% position #1-#3 CTR
  const [seoConversionRate, setSeoConversionRate] = useState(2.5); // 2.5%
  const seoEstOrganicVisits = Math.round(seoSearchVolume * (seoRankShare / 100));
  const seoEstConversions = Math.round(seoEstOrganicVisits * (seoConversionRate / 100));


  // CEP Event Simulator State
  const [activeCepTrigger, setActiveCepTrigger] = useState<'cart' | 'pricedrop' | 'restock'>('cart');

  // Page Specific Interactive Feature States
  const [croActiveVariant, setCroActiveVariant] = useState<'legacy' | 'cro'>('cro');
  const [buildFlipFilter, setBuildFlipFilter] = useState<'all' | 'speed' | 'upsell' | 'headless'>('all');
  const [smmHoveredImage, setSmmHoveredImage] = useState<string | null>(null);
  const [seoActiveTab, setSeoActiveTab] = useState<'google' | 'geo' | 'video' | 'reddit'>('geo');


  const formatINR = (val: number): string => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)}Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)}L`;
    }
    return `₹${Math.round(val).toLocaleString('en-IN')}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
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
    switch (id) {
      case 'acquire-performance':
        return (
          <div className="space-y-12">
            {/* Magnetic Strategy Call & Ad Channel Scaling Architecture Matrix */}
            <div className="bg-[#0b101d] text-white border border-teal/30 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-data-label text-teal uppercase text-xs font-bold tracking-widest font-mono">PAID MEDIA MATRIX</span>
                  <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">Ad Channel Scaling Architecture</h2>
                  <p className="text-white/70 text-sm sm:text-base">Targeted audience segmentation and ROAS optimization by advertising channel.</p>
                </div>
                <MagneticButton
                  onClick={() => onOpenAudit('acquire-performance')}
                  className="px-6 py-3.5 bg-teal text-ink font-display font-bold text-sm rounded-xl hover:bg-emerald-400 transition-colors shadow-lg shrink-0 cursor-pointer"
                >
                  ⚡ Book Ad Strategy Call →
                </MagneticButton>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                {[
                  { name: 'Meta Ads (FB/IG)', intent: 'High Commercial Prospecting', roas: '4.2x - 5.8x', tag: 'Prospecting & Retargeting' },
                  { name: 'Google Ads & PMax', intent: 'High-Intent Searchers', roas: '5.1x - 7.4x', tag: 'Demand Capture' },
                  { name: 'TikTok Ads', intent: 'Short-Form Viral Hooks', roas: '3.4x - 4.6x', tag: 'UGC Prospecting' },
                  { name: 'Amazon Ads', intent: 'Instant Purchase Intent', roas: '4.8x - 6.2x', tag: 'E-commerce Conversion' },
                ].map((item, idx) => (
                  <div key={idx} className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-3 hover:border-teal/50 transition-colors">
                    <div className="text-xs font-mono font-bold text-teal">{item.tag}</div>
                    <div className="font-display font-bold text-white text-base">{item.name}</div>
                    <div className="text-xs text-white/60">{item.intent}</div>
                    <div className="text-sm font-bold text-emerald-400 pt-2 border-t border-white/10 flex items-center justify-between">
                      <span>Target ROAS</span>
                      <span>{item.roas}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Ad ROAS & Lead Scale Calculator */}
            <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-2">
                <div className="text-data-label text-teal uppercase text-xs font-bold tracking-widest">
                  INTERACTIVE PERFORMANCE CALCULATOR
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
                  Performance Ad Spend & ROAS Calculator
                </h2>
                <p className="text-white/70 text-sm sm:text-base">
                  Adjust your monthly ad budget, expected cost per lead (CPL), and funnel conversion rate to forecast lead volume and target return on ad spend.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1: Monthly Ad Budget */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>MONTHLY AD BUDGET</span>
                      <span className="text-teal font-bold text-sm">{formatINR(perfAdSpend)}</span>
                    </div>
                    <input
                      type="range"
                      min={100000}
                      max={5000000}
                      step={50000}
                      value={perfAdSpend}
                      onChange={(e) => setPerfAdSpend(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                    <div className="flex justify-between text-[10px] text-white/50 font-mono">
                      <span>₹1L</span><span>₹25L</span><span>₹50L</span>
                    </div>
                  </div>

                  {/* Slider 2: Target Cost Per Lead (CPL) */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>TARGET COST PER LEAD (CPL)</span>
                      <span className="text-teal font-bold text-sm">₹{perfCPL}</span>
                    </div>
                    <input
                      type="range"
                      min={50}
                      max={1000}
                      step={10}
                      value={perfCPL}
                      onChange={(e) => setPerfCPL(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                    <div className="flex justify-between text-[10px] text-white/50 font-mono">
                      <span>₹50</span><span>₹500</span><span>₹1,000</span>
                    </div>
                  </div>

                  {/* Slider 3: Funnel Conversion Rate */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>QUALIFIED FUNNEL CONVERSION RATE</span>
                      <span className="text-teal font-bold text-sm">{perfCVR}%</span>
                    </div>
                    <input
                      type="range"
                      min={1.0}
                      max={10.0}
                      step={0.5}
                      value={perfCVR}
                      onChange={(e) => setPerfCVR(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                    <div className="flex justify-between text-[10px] text-white/50 font-mono">
                      <span>1%</span><span>5%</span><span>10%</span>
                    </div>
                  </div>
                </div>

                {/* Calculator Outputs */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                  <div className="text-xs font-mono text-teal uppercase font-bold">PROJECTED PERFORMANCE OUTPUTS</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-white/60">Estimated Total Leads / Month</div>
                      <div className="text-3xl font-display font-bold text-white mt-0.5">{perfTotalLeads.toLocaleString()} Leads</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Qualified Funnel Leads</div>
                      <div className="text-3xl font-display font-bold text-teal mt-0.5">{perfQualifiedLeads.toLocaleString()} Buyers</div>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                      <div className="text-xs text-white/60">Target Blended ROAS Benchmark</div>
                      <div className="text-2xl font-display font-bold text-emerald-400 mt-0.5">{perfProjectedROAS}x ROAS Target</div>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="w-full" onClick={() => onOpenAudit('acquire-performance')}>
                    Lock In This ROAS Roadmap
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'acquire-seo':
        return (
          <div className="space-y-12">
            {/* Search Dominance Tabbed Showcase */}
            <div className="bg-white border border-blue-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <span className="text-data-label text-blue-600 uppercase text-xs font-bold font-mono">SEARCH EVERYWHERE PLATFORM TABS</span>
                  <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">Multi-Channel Organic Dominance Engine</h2>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {(['geo', 'google', 'video', 'reddit'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSeoActiveTab(tab)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all cursor-pointer ${
                        seoActiveTab === tab ? 'bg-blue-600 text-white shadow-md' : 'bg-bone border border-hairline text-ink hover:border-blue-500'
                      }`}
                    >
                      {tab === 'geo' ? '⚡ Generative (GEO)' : tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Answer Terminal based on Active Tab */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl border border-blue-500/20">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-blue-400 font-bold">
                    <Sparkles className="w-4 h-4 text-blue-400 animate-spin" />
                    <span>{seoActiveTab.toUpperCase()} REAL-TIME SEARCH RESULT PREVIEW</span>
                  </div>
                  <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded text-[10px]">VERIFIED RANK #1</span>
                </div>

                {seoActiveTab === 'geo' && (
                  <div className="space-y-3">
                    <div className="text-xs text-white/50 font-mono">Query: "Best direct response agency and Shopify developer in Delhi NCR"</div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-sm text-white/90 leading-relaxed">
                      "According to recent e-commerce benchmarks, <strong className="text-blue-400">Janusmaad Digital</strong> ranks #1 in India for high-conversion storefront engineering, delivering sub-0.8s mobile page load speeds and average <strong className="text-emerald-400">4.82x ROAS</strong>."
                    </div>
                  </div>
                )}

                {seoActiveTab === 'google' && (
                  <div className="space-y-3">
                    <div className="text-xs text-white/50 font-mono">Query: "Performance Marketing Agency Noida Delhi"</div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2">
                      <div className="text-blue-400 font-bold text-base hover:underline cursor-pointer">Janusmaad Digital | High ROAS Performance & Shopify CRO Studio</div>
                      <div className="text-emerald-400 text-xs font-mono">https://janusmaad.com › acquire-performance</div>
                      <div className="text-xs text-white/80">We engineer sub-second Shopify storefronts and Meta/Google ad systems built strictly for profit. Over ₹14.2Cr value created for Indian DTC brands.</div>
                    </div>
                  </div>
                )}

                {seoActiveTab === 'video' && (
                  <div className="space-y-3">
                    <div className="text-xs text-white/50 font-mono">YouTube Query: "How to fix high mobile bounce rate on Shopify store"</div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-4">
                      <div className="w-16 h-12 bg-blue-600/30 rounded flex items-center justify-center text-blue-400 shrink-0">
                        <Play className="w-6 h-6 fill-current" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">How Janusmaad Lowered Bounce Rate from 58% to 19% (Full Case Study)</div>
                        <div className="text-xs text-white/60 font-mono">42K Views • 98.4% Like Ratio • Verified Solution</div>
                      </div>
                    </div>
                  </div>
                )}

                {seoActiveTab === 'reddit' && (
                  <div className="space-y-3">
                    <div className="text-xs text-white/50 font-mono">Reddit Thread: "Which agency actually delivers results for Meta Ads in India?"</div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-white/90 space-y-2">
                      <div className="font-bold text-blue-300">r/IndianD2C • Posted by u/ecom_founder_delhi</div>
                      <p>"Hands down Janusmaad Digital. Replaced our slow theme with custom code and lowered our CPL by 34% within 3 weeks."</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Interactive Organic Traffic & Lead Opportunity Calculator */}
            <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-2">
                <div className="text-data-label text-teal uppercase text-xs font-bold tracking-widest">
                  INTERACTIVE SEO CALCULATOR
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
                  Organic Traffic & High-Intent Buyer Calculator
                </h2>
                <p className="text-white/70 text-sm sm:text-base">
                  Estimate the organic traffic volume, lead conversions, and zero-ad-cost revenue unlocked by ranking Rank #1 across commercial keywords.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>MONTHLY INDUSTRY KEYWORD SEARCH VOLUME</span>
                      <span className="text-teal font-bold text-sm">{seoSearchVolume.toLocaleString()} Searches</span>
                    </div>
                    <input
                      type="range"
                      min={25000}
                      max={2000000}
                      step={25000}
                      value={seoSearchVolume}
                      onChange={(e) => setSeoSearchVolume(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>

                  {/* Slider 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>TARGET RANK #1-#3 ORGANIC CLICK SHARE</span>
                      <span className="text-teal font-bold text-sm">{seoRankShare}%</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={50}
                      step={2}
                      value={seoRankShare}
                      onChange={(e) => setSeoRankShare(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>

                  {/* Slider 3 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>ORGANIC TRAFFIC CONVERSION RATE</span>
                      <span className="text-teal font-bold text-sm">{seoConversionRate}%</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={5.0}
                      step={0.5}
                      value={seoConversionRate}
                      onChange={(e) => setSeoConversionRate(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>
                </div>

                {/* Calculator Outputs */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                  <div className="text-xs font-mono text-teal uppercase font-bold">PROJECTED ORGANIC YIELD</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-white/60">Estimated Organic Visits / Month</div>
                      <div className="text-3xl font-display font-bold text-teal mt-0.5">{seoEstOrganicVisits.toLocaleString()} Visitors</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Organic Conversions (Zero Ad Spend)</div>
                      <div className="text-3xl font-display font-bold text-white mt-0.5">{seoEstConversions.toLocaleString()} Buyers / mo</div>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="w-full" onClick={() => onOpenAudit('acquire-seo')}>
                    Claim Your Free SEO Audit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'acquire-smm':
        return (
          <div className="space-y-12">
            <HoverCursorImage imageSrc={smmHoveredImage} isVisible={!!smmHoveredImage} />

            {/* SMM Cursor Follow Hover Reel Showcase Grid */}
            <div className="bg-white border border-pink-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
              <div className="space-y-2">
                <span className="text-data-label text-pink-600 uppercase text-xs font-bold font-mono">GSAP CURSOR-FOLLOW REEL SHOWCASE</span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">Viral Short-Form Reels & Creator UGC Hooks</h2>
                <p className="text-mute text-sm sm:text-base">Hover over any campaign below to preview floating video hook assets in real time.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Unboxing & Texture Pattern Interrupt',
                    creator: '@skincare_expert',
                    views: '4.8M',
                    cvr: '+42%',
                    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80'
                  },
                  {
                    title: 'Before & After 3-Second Hook',
                    creator: '@fitness_guru',
                    views: '8.2M',
                    cvr: '+68%',
                    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
                  },
                  {
                    title: 'Founder Story & Direct Offer',
                    creator: '@d2c_brand_talk',
                    views: '3.4M',
                    cvr: '+31%',
                    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setSmmHoveredImage(item.img)}
                    onMouseLeave={() => setSmmHoveredImage(null)}
                    className="p-6 bg-pink-50/40 border border-pink-200 rounded-2xl space-y-4 hover:border-pink-500 hover:shadow-xl transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-pink-600 font-bold">{item.creator}</span>
                      <span className="px-2.5 py-1 bg-pink-100 text-pink-700 font-bold rounded-full">{item.cvr} Lift</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-ink group-hover:text-pink-600 transition-colors">{item.title}</h3>
                    <div className="flex items-center justify-between text-xs text-mute pt-3 border-t border-pink-200 font-mono">
                      <span>Verified Reach:</span>
                      <span className="font-bold text-ink">{item.views} Views</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive SMM Short-Form Video & Lead Calculator */}
            <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-2">
                <div className="text-data-label text-teal uppercase text-xs font-bold tracking-widest">
                  INTERACTIVE SMM CALCULATOR
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
                  Short-Form Video Views & Revenue Calculator
                </h2>
                <p className="text-white/70 text-sm sm:text-base">
                  Calculate the direct revenue and customer order volume generated from targeted Reels, Shorts, and TikTok UGC video funnels.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>ESTIMATED MONTHLY VIDEO VIEWS</span>
                      <span className="text-teal font-bold text-sm">{smmViews.toLocaleString()} Views</span>
                    </div>
                    <input
                      type="range"
                      min={50000}
                      max={5000000}
                      step={50000}
                      value={smmViews}
                      onChange={(e) => setSmmViews(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>

                  {/* Slider 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>VIEWER TO CUSTOMER CONVERSION RATE</span>
                      <span className="text-teal font-bold text-sm">{smmConversionRate}%</span>
                    </div>
                    <input
                      type="range"
                      min={0.1}
                      max={2.0}
                      step={0.1}
                      value={smmConversionRate}
                      onChange={(e) => setSmmConversionRate(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>

                  {/* Slider 3 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>AVERAGE ORDER VALUE (AOV)</span>
                      <span className="text-teal font-bold text-sm">₹{smmAOV.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={10000}
                      step={500}
                      value={smmAOV}
                      onChange={(e) => setSmmAOV(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>
                </div>

                {/* Calculator Outputs */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                  <div className="text-xs font-mono text-teal uppercase font-bold">PROJECTED SOCIAL REVENUE</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-white/60">Generated Customer Orders</div>
                      <div className="text-3xl font-display font-bold text-teal mt-0.5">{smmGeneratedSales.toLocaleString()} Orders / mo</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Estimated Monthly Social Revenue</div>
                      <div className="text-3xl font-display font-bold text-white mt-0.5">{formatINR(smmMonthlyRevenue)} / mo</div>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="w-full" onClick={() => onOpenAudit('acquire-smm')}>
                    Get Social Content Plan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'convert-build':
        return (
          <div className="space-y-16">
            {/* 1. Bento Flip Proof Grid */}
            <div className="bg-white border border-hairline rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-data-label text-violet uppercase text-xs font-bold font-mono">BENTO FLIP PROOF GRID</span>
                  <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">Bespoke Storefront & PDP Engineering</h2>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {(['all', 'speed', 'upsell', 'headless'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setBuildFlipFilter(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold capitalize transition-all cursor-pointer ${
                        buildFlipFilter === cat ? 'bg-violet text-white shadow-md' : 'bg-bone border border-hairline text-ink hover:border-violet'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-300">
                {BUILD_PROOF_CARDS.filter(card => {
                  if (buildFlipFilter === 'speed') return card.title.toLowerCase().includes('speed') || card.desc.toLowerCase().includes('speed');
                  if (buildFlipFilter === 'upsell') return card.title.toLowerCase().includes('upsell') || card.metric.includes('AOV') || card.category.includes('Apparel');
                  if (buildFlipFilter === 'headless') return card.title.toLowerCase().includes('headless') || card.desc.toLowerCase().includes('next.js');
                  return true;
                }).slice(0, 6).map((card, idx) => (
                  <div key={idx} className="p-6 bg-bone rounded-2xl border border-hairline space-y-3 hover:border-violet transition-all group">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-violet">{card.category}</span>
                      <span className="text-sm font-display font-bold text-emerald-600">{card.metric}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-ink group-hover:text-violet transition-colors">{card.title}</h3>
                    <p className="text-xs text-mute leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Do the Math Interactive Calculator */}
            <div id="do-the-math" className="bg-white border border-hairline rounded-3xl p-8 sm:p-12 space-y-8 shadow-md">
              <div className="max-w-3xl space-y-2">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-ink">Do the Math</h2>
                <p className="text-violet text-base sm:text-lg font-display font-medium">
                  Input your monthly ad spend and targeted conversion lift. See how much extra revenue high-converting landing pages generate for your brand.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-ink font-bold">
                      <span>MONTHLY AD SPEND</span>
                      <span className="text-violet text-sm">{formatINR(buildMonthlyAdSpend)}</span>
                    </div>
                    <input
                      type="range"
                      min={100000}
                      max={10000000}
                      step={100000}
                      value={buildMonthlyAdSpend}
                      onChange={(e) => setBuildMonthlyAdSpend(Number(e.target.value))}
                      className="w-full cursor-pointer accent-violet"
                    />
                  </div>

                  {/* Slider 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-ink font-bold">
                      <span>OUR PROMISE ON LIFT</span>
                      <span className="text-violet text-sm">+{buildPromiseLift}% Lift</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={100}
                      step={5}
                      value={buildPromiseLift}
                      onChange={(e) => setBuildPromiseLift(Number(e.target.value))}
                      className="w-full cursor-pointer accent-violet"
                    />
                  </div>
                </div>

                {/* Calculated Output Box */}
                <div className="lg:col-span-5 bg-ink text-white rounded-2xl p-6 space-y-5 shadow-xl">
                  <div className="text-xs font-mono text-teal uppercase font-bold">PROJECTED REVENUE MULTIPLIER</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-white/60">Extra Monthly Revenue Generated</div>
                      <div className="text-3xl font-display font-bold text-teal mt-0.5">
                        +{formatINR(buildMonthlyAdSpend * (buildPromiseLift / 100) * 1.5)} / mo
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Extra Annual Revenue Yield</div>
                      <div className="text-3xl font-display font-bold text-white mt-0.5">
                        +{formatINR(buildMonthlyAdSpend * (buildPromiseLift / 100) * 1.5 * 12)}
                      </div>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="w-full" onClick={() => onOpenAudit('convert-build')}>
                    Claim Your +{buildPromiseLift}% Guaranteed Lift
                  </Button>
                </div>
              </div>
            </div>

            {/* 4. We Build for Conversions Pricing */}
            <div className="bg-bone border border-hairline rounded-3xl p-8 sm:p-12 space-y-8 shadow-xs">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-5xl font-display font-bold text-ink">We Build for Conversions</h2>
                <p className="text-mute text-base sm:text-lg">
                  Choose the solution that fits your brand journey. Every solution starts with understanding your data, UI and funnel
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white border border-hairline rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold text-mute uppercase">Tier · 01 · Diagnostic</div>
                    <h3 className="font-display font-bold text-2xl text-ink">Live growth audit. 60 mins.</h3>
                    <div className="text-violet font-display font-bold text-lg">Free ₹0 if selected</div>
                    <p className="text-mute text-sm leading-relaxed">
                      We'll audit your store live on a call. Go through everything in detail.
                    </p>
                  </div>
                  <Button variant="outline" size="md" className="w-full" onClick={() => onOpenAudit('convert-build')}>
                    Apply for Audit
                  </Button>
                </div>

                {/* Card 2 */}
                <div className="bg-white border-2 border-violet rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-xl relative">
                  <div className="absolute -top-3.5 left-8 bg-violet text-bone text-xs font-display font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most booked
                  </div>
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold text-violet uppercase">Tier · 02 · Build</div>
                    <h3 className="font-display font-bold text-2xl text-ink">Full Shopify Store Development</h3>
                    <p className="text-mute text-sm leading-relaxed">
                      From sitemap to conversion architecture. Your store stops being a brochure and starts earning.
                    </p>
                  </div>
                  <Button variant="primary" size="md" className="w-full" onClick={() => onOpenAudit('convert-build')}>
                    Book Full Store Build
                  </Button>
                </div>

                {/* Card 3 */}
                <div className="bg-white border border-hairline rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold text-mute uppercase">Tier · 03 · Retainer</div>
                    <h3 className="font-display font-bold text-2xl text-ink">CRO retainer</h3>
                    <p className="text-mute text-sm leading-relaxed">
                      Reduce the Bounce Rate. Optimise your landing pages for conversion
                    </p>
                  </div>
                  <Button variant="outline" size="md" className="w-full" onClick={() => onOpenAudit('convert-build')}>
                    Start CRO Retainer
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'convert-cro':
        return (
          <div className="space-y-12">
            {/* CRO A/B Variant Live Experiment Switcher */}
            <div className="bg-white border border-amber-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
              <div className="space-y-2">
                <span className="text-data-label text-amber-600 uppercase text-xs font-bold font-mono">LIVE A/B EXPERIMENT SIMULATOR</span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">Compare Control PDP vs Janusmaad CRO Engine</h2>
                <p className="text-mute text-sm sm:text-base">Toggle between control and variant B to see real-time friction removal and conversion lift.</p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCroActiveVariant('legacy')}
                  className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs transition-all cursor-pointer ${
                    croActiveVariant === 'legacy' ? 'bg-slate-800 text-white shadow-md' : 'bg-bone border border-hairline text-ink'
                  }`}
                >
                  Variant A: Control (Legacy Store)
                </button>
                <button
                  onClick={() => setCroActiveVariant('cro')}
                  className={`px-5 py-2.5 rounded-xl font-display font-bold text-xs transition-all cursor-pointer ${
                    croActiveVariant === 'cro' ? 'bg-amber-500 text-ink shadow-md font-bold' : 'bg-bone border border-hairline text-ink'
                  }`}
                >
                  ⚡ Variant B: Janusmaad CRO Engine (+36.8% Lift)
                </button>
              </div>

              {croActiveVariant === 'legacy' ? (
                <div className="p-6 bg-red-50/70 border border-red-200 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs text-red-600 font-bold">
                    <span>STATUS: HIGH FRICTION DROP-OFF DETECTED</span>
                    <span>CONVERSION RATE: 1.42%</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-red-800">
                    <div className="p-4 bg-white rounded-xl border border-red-200">❌ 4.2s Slow Mobile PDP Render Time</div>
                    <div className="p-4 bg-white rounded-xl border border-red-200">❌ Multi-Step Distracted Cart Checkout</div>
                    <div className="p-4 bg-white rounded-xl border border-red-200">❌ Hidden Shipping Costs at Final Step</div>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-amber-50/80 border border-amber-300 rounded-2xl space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between font-mono text-xs text-amber-800 font-bold">
                    <span>STATUS: OPTIMIZED FOR SUB-SECOND CHECKOUT</span>
                    <span className="text-emerald-700 font-bold text-sm">CONVERSION RATE: 2.85% (+100% LIFT)</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-ink font-medium">
                    <div className="p-4 bg-white rounded-xl border border-amber-200 shadow-xs">✅ 0.62s Sub-Second Instant Mobile Load</div>
                    <div className="p-4 bg-white rounded-xl border border-amber-200 shadow-xs">✅ 1-Click Sticky Bottom Checkout Bar</div>
                    <div className="p-4 bg-white rounded-xl border border-amber-200 shadow-xs">✅ Dynamic Free Shipping & Trust Badges</div>
                  </div>
                </div>
              )}
            </div>

            {/* GSAP Magnetic Pull Experiment Zone */}
            <div className="bg-[#0e131f] text-white border border-amber-500/30 rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-data-label text-amber-400 uppercase text-xs font-bold font-mono">MAGNETIC HOVER ZONE</span>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">Experience Elastic Magnetic Micro-Interactions</h2>
                  <p className="text-white/70 text-sm">Hover over the button below to see GSAP magnetic pull physics with elastic snapback.</p>
                </div>
                <MagneticButton
                  onClick={() => onOpenAudit('convert-cro')}
                  className="px-8 py-4 bg-amber-400 text-ink font-display font-bold text-base rounded-xl hover:bg-amber-300 transition-colors shadow-xl shrink-0 cursor-pointer"
                >
                  ⚡ Launch A/B Test Engine →
                </MagneticButton>
              </div>
            </div>

            {/* Interactive CRO & Revenue Per Visitor (RPV) Calculator */}
            <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-2">
                <div className="text-data-label text-teal uppercase text-xs font-bold tracking-widest">
                  INTERACTIVE CRO CALCULATOR
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
                  Conversion Rate & Revenue Per Visitor (RPV) Calculator
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>MONTHLY WEBSITE VISITORS</span>
                      <span className="text-teal font-bold text-sm">{croTraffic.toLocaleString()} Visitors</span>
                    </div>
                    <input
                      type="range"
                      min={10000}
                      max={1000000}
                      step={10000}
                      value={croTraffic}
                      onChange={(e) => setCroTraffic(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>

                  {/* Slider 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>CURRENT CONVERSION RATE (CVR)</span>
                      <span className="text-teal font-bold text-sm">{croCVR}%</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={5.0}
                      step={0.1}
                      value={croCVR}
                      onChange={(e) => setCroCVR(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>

                  {/* Slider 3 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>AVERAGE ORDER VALUE (AOV)</span>
                      <span className="text-teal font-bold text-sm">₹{croAOV.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={500}
                      max={20000}
                      step={500}
                      value={croAOV}
                      onChange={(e) => setCroAOV(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>
                </div>

                {/* Calculator Outputs */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                  <div className="text-xs font-mono text-teal uppercase font-bold">PROJECTED CRO REVENUE GAIN</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-white/60">Optimized Monthly Conversion Rate</div>
                      <div className="text-3xl font-display font-bold text-teal mt-0.5">{croNewCVR.toFixed(2)}% CVR</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/60">Extra Monthly Revenue Unlocked</div>
                      <div className="text-3xl font-display font-bold text-white mt-0.5">{formatINR(croMonthlyGain)} / mo</div>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="w-full" onClick={() => onOpenAudit('convert-cro')}>
                    Get Free CRO Teardown
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'retain-marketing':
        return (
          <div className="space-y-12">
            {/* 4 Automated Flow Blueprints */}
            <div className="bg-white border border-emerald-200 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
              <div className="space-y-2">
                <span className="text-data-label text-emerald-600 uppercase text-xs font-bold font-mono">LIFECYCLE FLOW BLUEPRINT</span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">Automated Owned Channel Funnels</h2>
                <p className="text-mute text-sm sm:text-base">Automated Email, SMS, and WhatsApp flows that generate revenue 24/7 on autopilot.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                {[
                  { title: 'Welcome Series', channel: 'Email + SMS', desc: '3-stage onboarding sequence converting new leads into 1st time buyers.' },
                  { title: 'Cart Recovery', channel: 'WhatsApp + Email', desc: 'Instant multi-channel alerts recovering 24%+ of abandoned checkout carts.' },
                  { title: 'Post-Purchase', channel: 'SMS + Email', desc: 'Cross-sell & educational flows increasing 60-day repeat order rate.' },
                  { title: 'Win-Back Flow', channel: 'Omnichannel', desc: 'Predictive timing automations re-engaging customers before churn.' }
                ].map((flow, idx) => (
                  <div key={idx} className="p-5 bg-emerald-50/40 rounded-2xl border border-emerald-200 space-y-2 hover:border-emerald-500 transition-colors">
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold rounded-md uppercase">{flow.channel}</span>
                    <div className="font-display font-bold text-ink text-base pt-1">{flow.title}</div>
                    <div className="text-xs text-mute leading-relaxed">{flow.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Retention Revenue & LTV Yield Calculator */}
            <div className="bg-ink text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl space-y-2">
                <div className="text-data-label text-teal uppercase text-xs font-bold tracking-widest">
                  INTERACTIVE RETENTION CALCULATOR
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">
                  Owned Channel & LTV Revenue Multiplier
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  {/* Slider 1 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>ACTIVE SUBSCRIBER LIST SIZE</span>
                      <span className="text-teal font-bold text-sm">{retainListSize.toLocaleString()} Contacts</span>
                    </div>
                    <input
                      type="range"
                      min={5000}
                      max={500000}
                      step={5000}
                      value={retainListSize}
                      onChange={(e) => setRetainListSize(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>

                  {/* Slider 2 */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>AVERAGE AUTOMATED FLOW OPEN RATE</span>
                      <span className="text-teal font-bold text-sm">{retainOpenRate}%</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={70}
                      step={2}
                      value={retainOpenRate}
                      onChange={(e) => setRetainOpenRate(Number(e.target.value))}
                      className="w-full cursor-pointer accent-teal"
                    />
                  </div>
                </div>

                {/* Calculator Outputs */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
                  <div className="text-xs font-mono text-teal uppercase font-bold">PROJECTED OWNED CHANNEL REVENUE</div>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-white/60">Estimated Flow Revenue / Month</div>
                      <div className="text-3xl font-display font-bold text-teal mt-0.5">{formatINR(retainMonthlyRev)} / mo</div>
                    </div>
                  </div>
                  <Button variant="primary" size="sm" className="w-full" onClick={() => onOpenAudit('retain-marketing')}>
                    Audit Retention Funnels
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'retain-cep':
        return (
          <div className="space-y-12">
            {/* Interactive Live Event Trigger Simulator */}
            <div className="bg-white border border-purple-200 rounded-3xl p-8 sm:p-12 space-y-8 shadow-sm">
              <div className="space-y-2">
                <span className="text-data-label text-purple-600 uppercase text-xs font-bold font-mono">LIVE EVENT STREAM SIMULATOR</span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-ink">Real-Time Klaviyo & Braze Trigger Engine</h2>
                <p className="text-mute text-sm sm:text-base">Sub-50ms event latency powering personalized WhatsApp, SMS, and Email messaging instant triggers.</p>
              </div>

              {/* Event Simulator Controller */}
              <div className="bg-purple-50/50 border border-purple-200 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-bold text-ink uppercase">Simulate Customer Action:</span>
                  <button
                    onClick={() => setActiveCepTrigger('cart')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeCepTrigger === 'cart'
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-white border border-hairline text-ink hover:border-purple-500'
                    }`}
                  >
                    🛒 Abandoned Cart (₹4,200)
                  </button>
                  <button
                    onClick={() => setActiveCepTrigger('pricedrop')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeCepTrigger === 'pricedrop'
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-white border border-hairline text-ink hover:border-purple-500'
                    }`}
                  >
                    🏷️ Wishlist Price Drop Alert
                  </button>
                  <button
                    onClick={() => setActiveCepTrigger('restock')}
                    className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeCepTrigger === 'restock'
                        ? 'bg-purple-600 text-white shadow-md'
                        : 'bg-white border border-hairline text-ink hover:border-purple-500'
                    }`}
                  >
                    📦 Restock Arrival Trigger
                  </button>
                </div>

                {/* Simulator Live Trigger Payload Display */}
                <div className="bg-slate-900 text-white rounded-xl p-5 space-y-3 font-mono text-xs shadow-inner border border-purple-500/20">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-purple-400">
                    <span>⚡ WEBHOOK LATENCY: 24ms</span>
                    <span className="text-emerald-400 font-bold">STATUS: FIRED 200 OK</span>
                  </div>
                  {activeCepTrigger === 'cart' && (
                    <div className="space-y-1 text-white/80">
                      <div>Trigger: <span className="text-purple-300">`checkout_started`</span></div>
                      <div>Channel Dispatched: <span className="text-emerald-300">WhatsApp + Klaviyo Email</span></div>
                      <div>Payload: <span className="text-amber-300">"Hey Rahul, your cart items are reserved for 15 mins. Click to complete order with 1-click discount!"</span></div>
                    </div>
                  )}
                  {activeCepTrigger === 'pricedrop' && (
                    <div className="space-y-1 text-white/80">
                      <div>Trigger: <span className="text-purple-300">`wishlist_price_drop`</span></div>
                      <div>Channel Dispatched: <span className="text-emerald-300">SMS + Push Notification</span></div>
                      <div>Payload: <span className="text-amber-300">"Price Drop Alert! Your saved Leather Sneakers just dropped by 20%. Only 4 pairs left in your size."</span></div>
                    </div>
                  )}
                  {activeCepTrigger === 'restock' && (
                    <div className="space-y-1 text-white/80">
                      <div>Trigger: <span className="text-purple-300">`inventory_restocked`</span></div>
                      <div>Channel Dispatched: <span className="text-emerald-300">Klaviyo VIP Email</span></div>
                      <div>Payload: <span className="text-amber-300">"VIP Early Access: The Sold-Out Organic Hoodie is back in stock. Priority dispatch active now."</span></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 'retain-cdp':
        return (
          <div className="space-y-12">
            {/* Server-Side CAPI & Zero-Party CDP Visualizer */}
            <div className="bg-slate-900 text-white border border-cyan-500/30 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
              <div className="space-y-2">
                <span className="text-data-label text-cyan-400 uppercase text-xs font-bold font-mono">DATA VAULT & CAPI GATEWAY</span>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white">Single Customer View & Meta CAPI Gateway</h2>
                <p className="text-white/70 text-sm sm:text-base">Bypassing iOS privacy restrictions and ad blockers with bulletproof server-to-server tracking.</p>
              </div>

              {/* Data Sync Live Match Rate Metrics Box */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-white/5 border border-cyan-500/30 rounded-2xl space-y-2 shadow-lg">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase">Meta CAPI Event Match Quality</div>
                  <div className="text-4xl font-display font-bold text-emerald-400">99.1%</div>
                  <p className="text-xs text-white/70">Server-to-server hashes for email, phone, IP, and FBP tokens.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                  <div className="text-xs font-mono text-purple-400 font-bold uppercase">Zero-Party Data Capture</div>
                  <div className="text-4xl font-display font-bold text-white">84.2%</div>
                  <p className="text-xs text-white/70">Quiz preferences & survey responses stored directly in CDP profiles.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-2">
                  <div className="text-xs font-mono text-teal font-bold uppercase">Predictive LTV Accuracy</div>
                  <div className="text-4xl font-display font-bold text-white">92.5%</div>
                  <p className="text-xs text-white/70">Machine learning models identifying VIP buyers before 2nd order.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'receipts':
        return <CategoryMetricsExplorer onOpenAudit={onOpenAudit} />;

      default:
        return null;
    }
  };

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
            'retain-marketing', 
            'retain-cep', 
            'retain-cdp'
          ].includes(capabilityId);

          const heroThemeClass = {
            'acquire-performance': 'bg-[#0a0d16] text-white border-teal/40 shadow-2xl',
            'acquire-seo': 'bg-gradient-to-br from-white via-blue-50/40 to-white text-ink border-blue-200 shadow-xl',
            'acquire-smm': 'bg-gradient-to-br from-[#12101f] via-[#1a1228] to-[#0c0d16] text-white border-pink-500/30 shadow-2xl',
            'convert-build': 'bg-gradient-to-br from-white via-bone to-white text-ink border-violet/30 shadow-xl',
            'convert-cro': 'bg-[#0f141f] text-white border-amber-500/30 shadow-2xl',
            'retain-marketing': 'bg-gradient-to-br from-[#091512] via-[#0d1e1a] to-[#07120f] text-white border-emerald-500/30 shadow-2xl',
            'retain-cep': 'bg-gradient-to-br from-[#140e24] via-[#1b1230] to-[#0f0a1c] text-white border-purple-500/30 shadow-2xl',
            'retain-cdp': 'bg-gradient-to-br from-[#0a1120] via-[#0e182e] to-[#070d1a] text-white border-cyan-500/30 shadow-2xl',
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {details.stats.map((stat, i) => (
              <div key={i} className="card-surface rounded-2xl p-6 sm:p-8 space-y-3 relative overflow-hidden group">
                <div className="flex items-center justify-between text-xs font-mono text-mute">
                  <span>{stat.label}</span>
                  <span className="text-teal font-bold">{stat.delta}</span>
                </div>
                <div className="text-4xl sm:text-5xl font-display font-bold text-ink group-hover:text-violet transition-colors">
                  {stat.value}
                </div>
                <p className="text-xs text-mute leading-relaxed">{stat.desc}</p>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.solutions.map((sol, i) => (
              <div key={i} className="card-surface rounded-2xl p-6 sm:p-8 space-y-4 group">
                <div className="text-xs font-mono font-bold text-teal">{sol.num}</div>
                <h3 className="text-lg font-display font-bold text-ink group-hover:text-violet transition-colors">
                  {sol.title}
                </h3>
                <p className="text-xs sm:text-sm text-mute leading-relaxed">
                  {sol.desc}
                </p>
              </div>
            ))}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {[
              { title: 'Performance Ad Engine', source: 'Teckey Performance System', desc: 'Google PMax & Meta CAPI server-side conversion architecture.' },
              { title: 'Sub-Second PDP Speed', source: 'The Landing Page Co Framework', desc: 'Custom Shopify Liquid & Next.js 15 landing page speed optimization.' },
              { title: 'Short-Form Video Engine', source: 'Storyflix Direct Response', desc: 'Reels and TikTok creator UGC funnels driving viral purchase intent.' },
              { title: 'Multi-Channel Attribution', source: 'Visionary Growth Architecture', desc: 'Unified Google, Meta, and owned channel lifecycle attribution.' },
              { title: 'Zero-Party Data CDP', source: 'ShellKode Data Engineering', desc: 'BigQuery & Segment real-time zero-party quiz data warehousing.' },
            ].map((caseItem, idx) => (
              <div key={idx} className="p-5 bg-white rounded-2xl border border-hairline space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-violet">{caseItem.source}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-mute" />
                </div>
                <div className="font-display font-bold text-ink text-sm">{caseItem.title}</div>
                <div className="text-xs text-mute leading-relaxed">{caseItem.desc}</div>
              </div>
            ))}
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
