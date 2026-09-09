export interface Testimonial {
  id: string;
  logo: string;
  metric: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  imageCardSrc?: string;
}

export const TESTIMONIALS_HEADER = {
  h1: 'Things we are happy about',
  h2: "We don't do testimonials until there's a number next to them",
};

export const TESTIMONIALS: Testimonial[] = [
  // Slide 1 (1-6)
  {
    id: '1',
    logo: 'JANUSMAAD REVIEW 1',
    metric: '+62% CVR Lift',
    quote: 'Janusmaad rebuilt our PDP funnel in 3 weeks. Conversion jumped 62% in fortnight one, and ad spend scaled past $100k/month.',
    name: 'Verified Client',
    role: 'Founder & CEO',
    company: 'D2C Brand',
    imageCardSrc: '/testimonials/5.png',
  },
  {
    id: '2',
    logo: 'JANUSMAAD REVIEW 2',
    metric: '-31% CAC',
    quote: 'Delivered a streamlined booking system that cut our CAC by 31% within 90 days. Pure data engineering.',
    name: 'Verified Client',
    role: 'Head of Growth',
    company: 'Health Tech',
    imageCardSrc: '/testimonials/6.png',
  },
  {
    id: '3',
    logo: 'JANUSMAAD REVIEW 3',
    metric: '+114% Direct Rev',
    quote: 'The interactive concierge model doubled our direct bookings, cutting OTA commission dependency overnight.',
    name: 'Verified Client',
    role: 'Marketing Director',
    company: 'Hospitality Brand',
    imageCardSrc: '/testimonials/7.png',
  },
  {
    id: '4',
    logo: 'JANUSMAAD REVIEW 4',
    metric: '+96% HNW Leads',
    quote: 'Their high-intent landing pages transformed our pipeline. 96% more qualified founder leads at lower cost.',
    name: 'Verified Client',
    role: 'Managing Partner',
    company: 'Financial Services',
    imageCardSrc: '/testimonials/8.png',
  },
  {
    id: '5',
    logo: 'JANUSMAAD REVIEW 5',
    metric: '+41% AOV',
    quote: 'The dynamic bundle upsell system increased our Average Order Value from $78 to $110 on launch week.',
    name: 'Verified Client',
    role: 'E-Commerce Lead',
    company: 'Shopify Plus Brand',
    imageCardSrc: '/testimonials/9.png',
  },
  {
    id: '6',
    logo: 'JANUSMAAD REVIEW 6',
    metric: '2.8x ROAS',
    quote: 'Scaled organic search and paid landing pages simultaneously. Our ROAS surged from 1.4x to 2.8x in under 60 days.',
    name: 'Verified Client',
    role: 'Founder',
    company: 'Wellness E-Com',
    imageCardSrc: '/testimonials/10.png',
  },

  // Slide 2 (7-12)
  {
    id: '7',
    logo: 'JANUSMAAD REVIEW 7',
    metric: '+84% Organic Traffic',
    quote: 'Search Everywhere SEO strategy put 14 hero keywords in Google position 1. Organic revenue surpassed paid channels.',
    name: 'Verified Client',
    role: 'CMO',
    company: 'Interiors Brand',
    imageCardSrc: '/testimonials/11.png',
  },
  {
    id: '8',
    logo: 'JANUSMAAD REVIEW 8',
    metric: '-44% Bounce Rate',
    quote: 'Rebuilt our diagnostic booking funnel. Mobile bounce rate dropped 44% and completed patient intake skyrocketed.',
    name: 'Verified Client',
    role: 'Operations Director',
    company: 'Medical Brand',
    imageCardSrc: '/testimonials/12.png',
  },
  {
    id: '9',
    logo: 'JANUSMAAD REVIEW 9',
    metric: '+140% Inquiries',
    quote: 'The bespoke booking calculator generates 35+ high-intent corporate booking leads every week.',
    name: 'Verified Client',
    role: 'VP Sales',
    company: 'B2B Enterprise',
    imageCardSrc: '/testimonials/13.png',
  },
  {
    id: '10',
    logo: 'JANUSMAAD REVIEW 10',
    metric: '+55% Repeat Rate',
    quote: 'Klaviyo retention flows generated $340k extra backend revenue in quarter two with 55% repeat purchase rate.',
    name: 'Verified Client',
    role: 'Co-Founder',
    company: 'Skincare Co.',
    imageCardSrc: '/testimonials/14.png',
  },
  {
    id: '12',
    logo: 'JANUSMAAD REVIEW 12',
    metric: '+72% CVR Lift',
    quote: 'Continuous CRO retainer optimized 14 PDP elements over 6 months, delivering +72% net conversion gain.',
    name: 'Verified Client',
    role: 'Growth Lead',
    company: 'Activewear Brand',
    imageCardSrc: '/testimonials/5.png',
  },

  // Slide 3 (13-18)
  {
    id: '13',
    logo: 'JANUSMAAD REVIEW 13',
    metric: '3.4x ROAS',
    quote: 'Meta ad creatives paired with Janusmaad landing pages doubled our funnel efficiency in 30 days.',
    name: 'Verified Client',
    role: 'Founder',
    company: 'Nutrition Brand',
    imageCardSrc: '/testimonials/6.png',
  },
  {
    id: '14',
    logo: 'JANUSMAAD REVIEW 14',
    metric: '+92% Lead Conversion',
    quote: 'High-converting lander architecture converted cold traffic into booked phone calls with 92% efficiency boost.',
    name: 'Verified Client',
    role: 'Managing Director',
    company: 'Consulting Group',
    imageCardSrc: '/testimonials/7.png',
  },
  {
    id: '15',
    logo: 'JANUSMAAD REVIEW 15',
    metric: '-28% CAC',
    quote: 'Omnichannel SEO + landing page optimization reduced overall customer acquisition cost by 28%.',
    name: 'Verified Client',
    role: 'Head of Marketing',
    company: 'SaaS Platform',
    imageCardSrc: '/testimonials/8.png',
  },
  {
    id: '16',
    logo: 'JANUSMAAD REVIEW 16',
    metric: '+46% AOV Lift',
    quote: 'Cross-sell and bundle engine raised cart size from $62 to $91 in month one post-launch.',
    name: 'Verified Client',
    role: 'E-Com Director',
    company: 'Apparel Store',
    imageCardSrc: '/testimonials/9.png',
  },
  {
    id: '17',
    logo: 'JANUSMAAD REVIEW 17',
    metric: '+110% Organic Traffic',
    quote: 'Google position #1 rankings achieved across core transactional terms in Delhi NCR & Noida markets.',
    name: 'Verified Client',
    role: 'Founder',
    company: 'B2B Logistics',
    imageCardSrc: '/testimonials/10.png',
  },
  {
    id: '18',
    logo: 'JANUSMAAD REVIEW 18',
    metric: '+68% CVR Lift',
    quote: 'Custom Shopify Plus build delivered 68% higher conversion rate compared to our previous theme.',
    name: 'Verified Client',
    role: 'CEO',
    company: 'Beauty Brand',
    imageCardSrc: '/testimonials/11.png',
  },
];
