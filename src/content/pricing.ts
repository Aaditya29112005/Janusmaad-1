export interface EngagementTier {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  features: string[];
  ctaText: string;
}

export const PRICING_HEADER = {
  h1: 'We Build for Conversions',
  subtitle: 'Choose the solution that fits your brand journey. Every solution starts with understanding your data, UI and funnel',
};

export const ENGAGEMENT_TIERS: EngagementTier[] = [
  {
    id: 'audit',
    name: 'Live Growth Audit',
    subtitle: "We'll audit your store live on a call. Go through everything in detail. Promise to give you a clear growth roadmap - not a pitch deck",
    features: [
      'Full GA4, Meta Pixel & heatmap audit',
      'Session recording breakdown & funnel leak check',
      '3 actionable conversion layout fixes',
      'Clear growth roadmap report delivered on call',
    ],
    ctaText: 'Book live audit',
  },
  {
    id: 'shopify',
    name: 'Full Shopify Store Development',
    subtitle: 'Bespoke storefront architecture engineered for max speed, mobile conversions, and high AOV.',
    badge: 'Most Booked',
    features: [
      'All tested pre-launch and ready to convert',
      '3-6 week sprint',
      'You share brand guidelines and Digital assets',
      'UI/UX + Sitemap + narrative + Content + Development',
    ],
    ctaText: 'Build your store',
  },
  {
    id: 'cro',
    name: 'CRO Retainer',
    subtitle: 'Reduce the Bounce Rate. Optimise your landing pages for conversion',
    features: [
      'Create a high converting version',
      'Unlimited tasks, one task at a time',
      'A/B tests, heatmaps, funnel audits',
      'From Meta creatives to cross sell message',
      'Weekly catchup, regular updates, cancel anytime',
    ],
    ctaText: 'Start CRO retainer',
  },
];
