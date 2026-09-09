export interface Testimonial {
  id: string;
  brandName: string;
  brandLogo: string;
  stars: number;
  quote: string;
  founderName: string;
  founderRole: string; // Strictly "Founder, Brand" or "Co-founder, Brand"
  avatar: string;
  metric: string;
}

export interface TickerMetricItem {
  brandName: string;
  metric: string;
}

export const TESTIMONIALS_HEADER = {
  h1: 'Things we are happy about',
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    brandName: 'Rudrasetu',
    brandLogo: '/logos/full_brands/1_brand_11.png',
    stars: 5,
    quote: 'Choosing JanusMAAD was hands down the best decision for our brand. The team is responsive, accountable, and truly dedicated to delivering results.',
    founderName: 'Nishant Pandey',
    founderRole: 'Founder, Rudrasetu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    metric: '+53% REVENUE',
  },
  {
    id: '2',
    brandName: 'Kicky & Perky',
    brandLogo: '/logos/full_brands/1_brand_1.png',
    stars: 5,
    quote: 'Professional and genuinely easy to work with. They handled our targeted ad campaigns and online presence with great care and creativity.',
    founderName: 'Yogesh Tiwari',
    founderRole: 'Co-founder, Kicky & Perky',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    metric: '4.0X ROAS',
  },
  {
    id: '3',
    brandName: "Dog Mom's Kitchen",
    brandLogo: '/work/basilpetcare.jpg',
    stars: 5,
    quote: 'The team demonstrated unmatched professionalism and extraordinary talent. Their expert guidance turned our entire vision into a seamless joy.',
    founderName: 'Sakshi Pandey',
    founderRole: "Founder, Dog Mom's Kitchen",
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    metric: '+62% REVENUE',
  },
  {
    id: '4',
    brandName: 'Clay & Glaze',
    brandLogo: '/logos/full_brands/1_brand_5.png',
    stars: 5,
    quote: 'Extremely prompt and punctual with great attention to detail. As a founder, they make sure you never feel your company lacks anything.',
    founderName: 'Anukriti Saraogi',
    founderRole: 'Founder, Clay & Glaze',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    metric: '+44% CVR',
  },
  {
    id: '5',
    brandName: 'Ugra Shoes',
    brandLogo: '/logos/full_brands/2_brand_11.png',
    stars: 5,
    quote: 'Their strategy was holistic, thoughtful, and grounded in real insights. It felt like having a true growth partner, not just a service provider.',
    founderName: 'Debanti Roy',
    founderRole: 'Founder, Ugra Shoes',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    metric: '+38% CVR',
  },
  {
    id: '6',
    brandName: 'True Pillars Realty',
    brandLogo: '/logos/full_brands/2_brand_12.png',
    stars: 5,
    quote: 'Always on top of things, ensuring they delivered on every promise. Their honesty and technical transparency truly helped our firm succeed.',
    founderName: 'Vivek Dwivedi',
    founderRole: 'Founder, True Pillars Realty',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    metric: '4X LEADS',
  },
  {
    id: '7',
    brandName: 'Paperbark Camp',
    brandLogo: '/logos/full_brands/2_brand_2.png',
    stars: 5,
    quote: 'Motivated to keep things on track so we can focus on our business. They made our digital customer bookings transparent and highly profitable.',
    founderName: 'Ben Hutchings',
    founderRole: 'Co-founder, Paperbark Camp',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    metric: '3X BOOKINGS',
  },
  {
    id: '8',
    brandName: 'The Skin Beneath',
    brandLogo: '/logos/full_brands/1_brand_12.png',
    stars: 5,
    quote: 'Search Everywhere SEO put our hero keywords at the top of Google & AI search. Organic revenue quickly surpassed our paid channels.',
    founderName: 'Aarav Sharma',
    founderRole: 'Founder, The Skin Beneath',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    metric: '3X ORGANIC TRAFFIC',
  },
  {
    id: '9',
    brandName: 'Espira Gems',
    brandLogo: '/logos/full_brands/1_brand_7.png',
    stars: 5,
    quote: 'Dynamic bundle upsells increased our Average Order Value significantly in the first month. Flawless Shopify Plus implementation.',
    founderName: 'Rohan Mehta',
    founderRole: 'Co-founder, Espira Gems',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    metric: '+18% AOV',
  },
  {
    id: '10',
    brandName: 'Radboards',
    brandLogo: '/logos/full_brands/1_brand_6.png',
    stars: 5,
    quote: 'Sub-1s mobile storefront architecture cut our bounce rate by 20% and doubled our mobile add-to-cart velocity.',
    founderName: 'Kabir Singhania',
    founderRole: 'Founder, Radboards',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    metric: '-20% BOUNCE RATE',
  },
];

export const TESTIMONIAL_TICKER_ITEMS: TickerMetricItem[] = [
  { brandName: 'RUDRALIFE', metric: '+53% REVENUE' },
  { brandName: 'KICKY & PERKY', metric: '4.0X ROAS' },
  { brandName: "DOG MOM'S KITCHEN", metric: '+62% REVENUE' },
  { brandName: 'CLAY & GLAZE', metric: '+44% CVR' },
  { brandName: 'UGRA SHOES', metric: '+38% CVR' },
  { brandName: 'TRUE PILLARS', metric: '4X LEADS' },
  { brandName: 'PAPERBARK CAMP', metric: '3X BOOKINGS' },
  { brandName: 'THE SKIN BENEATH', metric: '3X ORGANIC TRAFFIC' },
  { brandName: 'ESPIRA GEMS', metric: '+18% AOV' },
  { brandName: 'RADBOARDS', metric: '-20% BOUNCE RATE' },
  { brandName: 'SHAGUN SWEETS', metric: '7.0X ROAS' },
  { brandName: 'THE CREDIT LANE', metric: '-30% CPL' },
];
