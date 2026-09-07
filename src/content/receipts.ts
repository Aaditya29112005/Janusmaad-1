export interface CaseStudyDelta {
  label: string;
  value: string;
}

export interface CaseStudyDetail {
  heroImage: string;
  challenge: string;
  solution: string;
  receipts: string[];
  implementations: string[];
}

export interface CaseStudy {
  id: string;
  clientName: string;
  category: string;
  metricLabel: string;
  metricValue: string;
  liveUrl: string;
  imageSrc: string;
  description: string;
  tags: string[];
  // Legacy aliases
  client?: string;
  timeframe?: string;
  deltas?: CaseStudyDelta[];
  detailView?: CaseStudyDetail;
}

export const LIVE_WORKS: CaseStudy[] = [
  {
    id: 'creditlane',
    clientName: 'The Credit Lane',
    client: 'The Credit Lane',
    category: 'Financial Services',
    metricLabel: 'Lead Conversion',
    metricValue: '+96% HNW Leads',
    liveUrl: 'https://thecreditlane.in/',
    imageSrc: '/work/thecreditlane.jpg',
    description: 'High-converting financial landing page architecture and funnel optimization for credit advisory.',
    tags: ['FinTech', 'Lead Gen', 'Landing Page Dev'],
    timeframe: 'Real Traffic Window',
    deltas: [{ label: 'Lead Conversion', value: '+96%' }],
    detailView: {
      heroImage: '/work/thecreditlane.jpg',
      challenge: 'High cost per lead and low conversion rates on cold traffic.',
      solution: 'Rebuilt landing page architecture with instant credit calculator and interactive lead intake.',
      receipts: ['+96% Qualified Leads', '-42% CPA'],
      implementations: ['Interactive Credit Calculator', 'Custom Shopify / Web App', 'Klaviyo Flow Integration'],
    },
  },
  {
    id: 'radboards',
    clientName: 'Radboards',
    client: 'Radboards',
    category: 'E-Commerce & Lifestyle',
    metricLabel: 'ROAS Lift',
    metricValue: '3.4x ROAS',
    liveUrl: 'https://radboards.in/',
    imageSrc: '/work/radboards.jpg',
    description: 'Custom Shopify theme development with high-converting PDP flow and dynamic bundle engine.',
    tags: ['Shopify Plus', 'D2C', 'CRO Retainer'],
    timeframe: 'Real Traffic Window',
    deltas: [{ label: 'ROAS', value: '3.4x' }],
    detailView: {
      heroImage: '/work/radboards.jpg',
      challenge: 'Low average order value and checkout dropoffs on mobile.',
      solution: 'Custom Shopify theme build featuring dynamic bundle upsells and sub-1.1s page load.',
      receipts: ['3.4x ROAS', '+41% AOV Lift'],
      implementations: ['Shopify Plus Theme Dev', 'Dynamic Cart Upsells', 'Meta Pixel & Conversion API'],
    },
  },
  {
    id: 'kickyandperky',
    clientName: 'Kicky & Perky',
    client: 'Kicky & Perky',
    category: 'Fine Jewelry',
    metricLabel: 'CVR Lift',
    metricValue: '+62.4% CVR',
    liveUrl: 'https://kickyandperky.com/',
    imageSrc: '/work/kickyperky.jpg',
    description: 'Rebuilt storefront PDP hierarchy, mobile checkout flow, and automated Klaviyo retention flows.',
    tags: ['Luxury E-Com', 'Shopify Dev', 'Performance Ads'],
    timeframe: 'Real Traffic Window',
    deltas: [{ label: 'CVR Lift', value: '+62.4%' }],
    detailView: {
      heroImage: '/work/kickyperky.jpg',
      challenge: 'High cart abandonment on mobile traffic.',
      solution: 'Streamlined mobile product detail pages and 3-step friction-free checkout.',
      receipts: ['+62.4% Conversion Rate', '+55% Repeat Customer Rate'],
      implementations: ['Mobile PDP Optimization', 'Klaviyo Retention Flows', 'Headless Storefront Speed'],
    },
  },
  {
    id: 'caness',
    clientName: 'Caness',
    client: 'Caness',
    category: 'Apparel & Fashion',
    metricLabel: 'AOV Increase',
    metricValue: '+41% AOV',
    liveUrl: 'https://caness.com.au/',
    imageSrc: '/work/caness.jpg',
    description: 'Australian luxury brand storefront engineering with interactive fit guide and instant cart upsells.',
    tags: ['Australia', 'Shopify Plus', 'CRO'],
    timeframe: 'Real Traffic Window',
    deltas: [{ label: 'AOV Increase', value: '+41%' }],
    detailView: {
      heroImage: '/work/caness.jpg',
      challenge: 'Scaling Australian D2C sales while maintaining high average cart value.',
      solution: 'Engineered custom size recommendation widget and tiered bundle discount engine.',
      receipts: ['+41% AOV', '2.8x Return on Ad Spend'],
      implementations: ['Custom Fit Recommendation Engine', 'Tiered Discount Cart', 'Search Everywhere SEO'],
    },
  },
  {
    id: 'nipponnaturals',
    clientName: 'Nippon Naturals',
    client: 'Nippon Naturals',
    category: 'Organic Skincare',
    metricLabel: 'Organic Traffic',
    metricValue: '+110% Traffic',
    liveUrl: 'https://nipponnaturals.com/',
    imageSrc: '/work/nipponnaturals.jpg',
    description: 'Search Everywhere SEO strategy and high-intent landing page build dominating organic search.',
    tags: ['SEO Strategy', 'Organic Growth', 'Wellness'],
    timeframe: 'Real Traffic Window',
    deltas: [{ label: 'Organic Traffic', value: '+110%' }],
    detailView: {
      heroImage: '/work/nipponnaturals.jpg',
      challenge: 'Over-reliance on paid customer acquisition.',
      solution: 'Executed Search Everywhere SEO capturing 14 primary transactional keywords in position #1.',
      receipts: ['+110% Organic Revenue', 'Position #1 Google Rankings'],
      implementations: ['Programmatic SEO', 'Schema & Entity Optimization', 'Technical Core Web Vitals Audit'],
    },
  },
  {
    id: 'rudrasetu',
    clientName: 'RudraSetu',
    client: 'RudraSetu',
    category: 'Heritage Crafts',
    metricLabel: 'CAC Reduction',
    metricValue: '-31% CAC',
    liveUrl: 'https://rudrasetu.com/',
    imageSrc: '/work/rudrasetu.jpg',
    description: 'Bespoke heritage store engineering paired with targeted Meta & Google Ads performance campaigns.',
    tags: ['D2C Brand', 'Performance Marketing', 'Shopify'],
    timeframe: 'Real Traffic Window',
    deltas: [{ label: 'CAC Reduction', value: '-31%' }],
    detailView: {
      heroImage: '/work/rudrasetu.jpg',
      challenge: 'Rising acquisition costs on paid Meta campaigns.',
      solution: 'Rebuilt high-converting story landing page and optimized ad creative funnels.',
      receipts: ['-31% Acquisition Cost', '+48% Net Conversion Lift'],
      implementations: ['High-Intent Landing Page', 'Meta Ads Creative Scaling', 'Google Shopping Ads'],
    },
  },
  {
    id: 'shaffa',
    clientName: 'Shaffa',
    client: 'Shaffa',
    category: 'Hospitality & Dining',
    metricLabel: 'Direct Bookings',
    metricValue: '+140% Bookings',
    liveUrl: 'https://shaffa.com.au/',
    imageSrc: '/work/shaffa.jpg',
    description: 'Sydney luxury dining interactive reservation engine and local SEO search domination.',
    tags: ['Sydney', 'Hospitality Tech', 'Local SEO'],
    timeframe: 'Real Traffic Window',
    deltas: [{ label: 'Direct Bookings', value: '+140%' }],
    detailView: {
      heroImage: '/work/shaffa.jpg',
      challenge: 'Dependence on third-party dining booking platforms charging high per-cover fees.',
      solution: 'Built direct reservation web app with instant table booking and VIP event portal.',
      receipts: ['+140% Direct Web Bookings', 'Zero Platform Commission'],
      implementations: ['Direct Reservation System', 'Local Google Maps SEO', 'Fast Web Vitals Build'],
    },
  },
];

export const CASE_STUDIES: CaseStudy[] = LIVE_WORKS;
export const RECEIPTS_CATEGORIES = ['ALL', 'FINANCIAL SERVICES', 'E-COMMERCE & LIFESTYLE', 'FINE JEWELRY', 'APPAREL & FASHION', 'HOSPITALITY'];
