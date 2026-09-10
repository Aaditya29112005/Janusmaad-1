export interface ClientMetric {
  label: string;
  value: string;
  type: 'ROAS' | 'REV' | 'LEADS' | 'CPL' | 'AOV' | 'BOUNCE' | 'VISITORS' | 'FOLLOWERS';
}

export interface ClientRecord {
  id: string;
  name: string;
  url: string;
  domain: string;
  category: string;
  categoryGroup: string;
  services: ('Build' | 'PM' | 'SEO' | 'CRO' | 'RM' | 'SMM')[];
  primaryMetric: {
    label: string;
    value: string;
  };
  allMetrics: ClientMetric[];
  notes?: string;
}

export interface CategoryMetricPitch {
  category: string;
  borrowedFromNote?: string;
  topPitch: {
    metric: string;
    value: string;
    brand: string;
  };
  metrics: {
    metric: string;
    value: string;
    brand: string;
  }[];
}

export const ALL_38_CLIENTS: ClientRecord[] = [
  {
    id: 'the-credit-lane',
    name: 'The Credit Lane',
    url: 'https://thecreditlane.in/',
    domain: 'thecreditlane.in',
    category: 'Financial Services',
    categoryGroup: 'Financial Services',
    services: ['SMM', 'Build', 'PM'],
    primaryMetric: { label: 'Revenue Generated', value: '₹2CR+ from Leads' },
    allMetrics: [
      { label: 'Followers Increase', value: '+40%', type: 'FOLLOWERS' },
      { label: 'Cost Per Lead (CPL)', value: '-50%', type: 'CPL' },
      { label: 'Leads Increased', value: '3.5X', type: 'LEADS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'Stated Revenue', value: 'INR 2CR+', type: 'REV' }
    ],
    notes: 'Revenue reported as an absolute figure. No metrics recorded for: Build.'
  },
  {
    id: 'shagun-sweets',
    name: 'Shagun Sweets',
    url: 'https://www.shagunsweets.co/',
    domain: 'shagunsweets.co',
    category: 'Sweets / Retail',
    categoryGroup: 'Food / FMCG Retail',
    services: ['PM'],
    primaryMetric: { label: 'PM ROAS', value: '4.5 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '4.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'AOV Increase', value: '+28%', type: 'AOV' }
    ]
  },
  {
    id: 'frasmetics',
    name: 'Frasmetics',
    url: 'https://frasmetics.com/',
    domain: 'frasmetics.com',
    category: 'Perfume / Ecomm',
    categoryGroup: 'Beauty / Personal Care Ecomm',
    services: ['Build', 'PM', 'SMM'],
    primaryMetric: { label: 'Revenue Increase', value: '+65%' },
    allMetrics: [
      { label: 'SMM Followers', value: '+160%', type: 'FOLLOWERS' },
      { label: 'PM ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+65%', type: 'REV' },
      { label: 'AOV Increase', value: '+14%', type: 'AOV' },
      { label: 'Bounce Decrease', value: '-18%', type: 'BOUNCE' }
    ],
    notes: 'PM ROAS stated as 3+ in source.'
  },
  {
    id: 'vanika-jewels',
    name: 'Vanika Jewels',
    url: 'https://vanikajewels.com/',
    domain: 'vanikajewels.com',
    category: 'Jewelry / Retail',
    categoryGroup: 'Jewellery',
    services: ['Build', 'SMM', 'PM'],
    primaryMetric: { label: 'Stated Revenue', value: 'INR 25L+' },
    allMetrics: [
      { label: 'SMM Followers', value: '+120%', type: 'FOLLOWERS' },
      { label: 'CPL Decrease', value: '-30%', type: 'CPL' },
      { label: 'Leads Increased', value: '2.8X', type: 'LEADS' },
      { label: 'Stated Revenue', value: 'INR 25L+', type: 'REV' }
    ],
    notes: 'Revenue reported as an absolute figure. No metrics recorded for: Build.'
  },
  {
    id: 'kicky-and-perky',
    name: 'Kicky and Perky',
    url: 'https://kickyandperky.com/',
    domain: 'kickyandperky.com',
    category: 'Jewelry / Ecomm',
    categoryGroup: 'Jewellery',
    services: ['PM', 'RM'],
    primaryMetric: { label: 'RM ROAS', value: '8.0 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'RM ROAS', value: '8.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+35%', type: 'REV' },
      { label: 'AOV Increase', value: '+20%', type: 'AOV' },
      { label: 'Bounce Decrease', value: '-12%', type: 'BOUNCE' }
    ],
    notes: 'RM ROAS stated as 8+ in source.'
  },
  {
    id: 'espira-gems',
    name: 'Espira Gems',
    url: 'https://espiragems.com/',
    domain: 'espiragems.com',
    category: 'Jewelry / Ecomm',
    categoryGroup: 'Jewellery',
    services: ['PM', 'CRO'],
    primaryMetric: { label: 'Revenue Increase', value: '+70%' },
    allMetrics: [
      { label: 'PM ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+70%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' },
      { label: 'Visitors Increase', value: '2.4X', type: 'VISITORS' },
      { label: 'Bounce Decrease', value: '-20%', type: 'BOUNCE' }
    ]
  },
  {
    id: 'wildmoss',
    name: 'Wildmoss',
    url: 'https://www.wildmoss.in/',
    domain: 'wildmoss.in',
    category: 'Fashion / Ecomm',
    categoryGroup: 'Fashion Ecomm',
    services: ['SEO', 'CRO', 'Build', 'PM'],
    primaryMetric: { label: 'Visitors Increase', value: '2X' },
    allMetrics: [
      { label: 'PM ROAS', value: '2.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+30%', type: 'REV' },
      { label: 'Visitors Increase', value: '2X', type: 'VISITORS' }
    ],
    notes: 'PM ROAS stated as 2+ in source. No metrics recorded for: CRO, Build.'
  },
  {
    id: 'paperbark-camp',
    name: 'Paperbark Camp',
    url: 'https://paperbarkcamp.com.au/',
    domain: 'paperbarkcamp.com.au',
    category: 'Hospitality / Stays',
    categoryGroup: 'Hospitality: Stays / Resorts',
    services: ['SEO', 'PM'],
    primaryMetric: { label: 'PM ROAS', value: '8.0 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '8.0 ROAS', type: 'ROAS' },
      { label: 'Stated Revenue', value: '$120K+', type: 'REV' },
      { label: 'Visitors Increase', value: '1.6X', type: 'VISITORS' }
    ],
    notes: 'Revenue reported as an absolute figure.'
  },
  {
    id: 'himalayan-panacea',
    name: 'Himalayan Panacea',
    url: 'https://www.himalayanpanacea.com/',
    domain: 'himalayanpanacea.com',
    category: 'Ayurved / Ecomm',
    categoryGroup: 'Beauty / Personal Care Ecomm',
    services: ['CRO', 'PM', 'SMM'],
    primaryMetric: { label: 'Revenue Increase', value: '+40%' },
    allMetrics: [
      { label: 'SMM Followers', value: '+60%', type: 'FOLLOWERS' },
      { label: 'PM ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'Bounce Decrease', value: '-18%', type: 'BOUNCE' }
    ],
    notes: 'Bounce recorded twice: CRO 18% decrease, PM 12% decrease. Higher figure shown.'
  },
  {
    id: 'gaadi-web',
    name: 'Gaadi Web',
    url: 'https://www.gaadiweb.com/',
    domain: 'gaadiweb.com',
    category: 'Car Parts & Service',
    categoryGroup: 'Local / Home Services',
    services: ['PM'],
    primaryMetric: { label: 'Revenue Increase', value: '+250%' },
    allMetrics: [
      { label: 'CPL Decrease', value: '-40%', type: 'CPL' },
      { label: 'Leads Increased', value: '3X', type: 'LEADS' },
      { label: 'Revenue Increase', value: '+250%', type: 'REV' }
    ]
  },
  {
    id: 'the-happy-home-broker',
    name: 'The Happy Home Broker',
    url: 'https://www.thehappyhomebroker.com.au/',
    domain: 'thehappyhomebroker.com.au',
    category: 'Financial Services',
    categoryGroup: 'Financial Services',
    services: ['CRO', 'PM', 'SMM'],
    primaryMetric: { label: 'SMM Followers', value: '+200%' },
    allMetrics: [
      { label: 'SMM Followers', value: '+200%', type: 'FOLLOWERS' },
      { label: 'CPL Decrease', value: '-30%', type: 'CPL' },
      { label: 'Leads Increased', value: '2X', type: 'LEADS' },
      { label: 'Bounce Decrease', value: '-15%', type: 'BOUNCE' }
    ]
  },
  {
    id: 'nippon-naturals',
    name: 'Nippon Naturals',
    url: 'https://nipponnaturals.com/',
    domain: 'nipponnaturals.com',
    category: 'Wine Seller',
    categoryGroup: 'Food / FMCG Retail',
    services: ['SEO', 'CRO'],
    primaryMetric: { label: 'Visitors Increase', value: '1.6X' },
    allMetrics: [
      { label: 'Visitors Increase', value: '1.6X', type: 'VISITORS' },
      { label: 'Bounce Decrease', value: '-18%', type: 'BOUNCE' }
    ]
  },
  {
    id: 'hand-studio',
    name: 'HAND Studio',
    url: 'https://www.hand-studio.com.au/',
    domain: 'hand-studio.com.au',
    category: 'Branding & Design Services',
    categoryGroup: 'Professional / Creative Services',
    services: ['PM'],
    primaryMetric: { label: 'PM ROAS', value: '4.5 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '4.5 ROAS', type: 'ROAS' },
      { label: 'CPL Decrease', value: '-26%', type: 'CPL' },
      { label: 'Leads Increased', value: '3X', type: 'LEADS' }
    ]
  },
  {
    id: 'bombay-bloomers',
    name: 'Bombay Bloomers',
    url: 'https://bombaybloomers.com.au/',
    domain: 'bombaybloomers.com.au',
    category: 'Hospitality / Restaurant',
    categoryGroup: 'Hospitality: Restaurants',
    services: ['SEO', 'Build', 'PM', 'SMM'],
    primaryMetric: { label: 'PM ROAS', value: '5.5 ROAS' },
    allMetrics: [
      { label: 'SMM Followers', value: '+75%', type: 'FOLLOWERS' },
      { label: 'PM ROAS', value: '5.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+42%', type: 'REV' },
      { label: 'AOV Increase', value: '+24%', type: 'AOV' },
      { label: 'Visitors Increase', value: '3X', type: 'VISITORS' }
    ],
    notes: 'Followers stated as 1800+ increase / 75% increase. No metrics recorded for: Build.'
  },
  {
    id: 'isha-and-ishana',
    name: 'Isha and Ishana',
    url: 'https://ishaandishana.com/',
    domain: 'ishaandishana.com',
    category: 'Fashion / Ecomm',
    categoryGroup: 'Fashion Ecomm',
    services: ['CRO', 'Build', 'PM', 'SMM'],
    primaryMetric: { label: 'SMM Followers', value: '+300%' },
    allMetrics: [
      { label: 'SMM Followers', value: '+300%', type: 'FOLLOWERS' },
      { label: 'PM ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+43%', type: 'REV' },
      { label: 'Bounce Decrease', value: '-24%', type: 'BOUNCE' }
    ],
    notes: 'No metrics recorded for: Build.'
  },
  {
    id: 'rudrasetu',
    name: 'Rudrasetu',
    url: 'https://rudrasetu.com/',
    domain: 'rudrasetu.com',
    category: 'Rudraksh / Jewelry / Ecomm',
    categoryGroup: 'Spiritual / Rudraksh Ecomm',
    services: ['CRO', 'Build', 'PM', 'RM', 'SMM'],
    primaryMetric: { label: 'RM ROAS', value: '7.0 ROAS' },
    allMetrics: [
      { label: 'SMM Followers', value: '+45%', type: 'FOLLOWERS' },
      { label: 'PM ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'RM ROAS', value: '7.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' },
      { label: 'Leads Increased', value: '3.5X', type: 'LEADS' },
      { label: 'Bounce Decrease', value: '-32%', type: 'BOUNCE' }
    ],
    notes: 'No metrics recorded for: Build.'
  },
  {
    id: 'pro4security',
    name: 'Pro4Security Services',
    url: 'https://www.p4ssecurity.com/',
    domain: 'p4ssecurity.com',
    category: 'Security Services',
    categoryGroup: 'Local / Home Services',
    services: ['PM', 'SMM'],
    primaryMetric: { label: 'CPL Decrease', value: '-42%' },
    allMetrics: [
      { label: 'SMM Followers', value: '+40%', type: 'FOLLOWERS' },
      { label: 'CPL Decrease', value: '-42%', type: 'CPL' },
      { label: 'Leads Increased', value: '3X', type: 'LEADS' },
      { label: 'Revenue Increase', value: '+12%', type: 'REV' }
    ]
  },
  {
    id: 'mothers-touch',
    name: 'Mothers Touch Services',
    url: 'https://www.motherstouchservices.com/',
    domain: 'motherstouchservices.com',
    category: 'Maid / Nanny Services',
    categoryGroup: 'Local / Home Services',
    services: ['SEO', 'CRO', 'Build', 'PM', 'SMM'],
    primaryMetric: { label: 'Leads Increased', value: '3.5X' },
    allMetrics: [
      { label: 'SMM Followers', value: '+120%', type: 'FOLLOWERS' },
      { label: 'CPL Decrease', value: '-25%', type: 'CPL' },
      { label: 'Leads Increased', value: '3.5X', type: 'LEADS' },
      { label: 'Revenue Increase', value: '+16%', type: 'REV' },
      { label: 'Visitors Increase', value: '3X', type: 'VISITORS' },
      { label: 'Bounce Decrease', value: '-23%', type: 'BOUNCE' }
    ],
    notes: 'No metrics recorded for: CRO.'
  },
  {
    id: 'kidzfirstudio',
    name: 'Kidzfirstudio',
    url: 'https://kidzfitstudio.com/',
    domain: 'kidzfitstudio.com',
    category: 'Kid Gym / Daycare Services',
    categoryGroup: 'Local / Home Services',
    services: ['Build', 'PM', 'SMM'],
    primaryMetric: { label: 'Leads Increased', value: '2X' },
    allMetrics: [
      { label: 'SMM Followers', value: '+30%', type: 'FOLLOWERS' },
      { label: 'CPL Decrease', value: '-12%', type: 'CPL' },
      { label: 'Leads Increased', value: '2X', type: 'LEADS' },
      { label: 'Revenue Increase', value: '+15%', type: 'REV' },
      { label: 'Bounce Decrease', value: '-10%', type: 'BOUNCE' }
    ]
  },
  {
    id: 'soniva',
    name: 'Soniva',
    url: 'https://soniva.com.au/',
    domain: 'soniva.com.au',
    category: 'Sound Healing / Yoga Services',
    categoryGroup: 'Wellness / Yoga',
    services: ['Build'],
    primaryMetric: { label: 'Visitors Increase', value: '2X' },
    allMetrics: [
      { label: 'Visitors Increase', value: '2X', type: 'VISITORS' },
      { label: 'Bounce Decrease', value: '-20%', type: 'BOUNCE' }
    ]
  },
  {
    id: 'selective-guru',
    name: 'Selective Guru',
    url: 'https://www.selectiveguru.com.au/',
    domain: 'selectiveguru.com.au',
    category: 'EdTech Services',
    categoryGroup: 'EdTech',
    services: ['SEO', 'PM', 'SMM'],
    primaryMetric: { label: 'Revenue Increase', value: '150%' },
    allMetrics: [
      { label: 'PM ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'Leads Increased', value: '4X', type: 'LEADS' },
      { label: 'Revenue Increase', value: '150%', type: 'REV' },
      { label: 'Visitors Increase', value: '4X', type: 'VISITORS' }
    ],
    notes: 'Revenue stated as a multiple, not a percentage. No metrics recorded for: SMM.'
  },
  {
    id: 'radboards',
    name: 'Radboards',
    url: 'https://radboards.in/',
    domain: 'radboards.in',
    category: 'Hoverboards / Escooter / Unicycle / Ecomm',
    categoryGroup: 'Footwear / Rideables / Other D2C',
    services: ['CRO', 'Build', 'PM', 'RM'],
    primaryMetric: { label: 'RM ROAS', value: '8.0 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '4.5 ROAS', type: 'ROAS' },
      { label: 'RM ROAS', value: '8.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+25%', type: 'REV' },
      { label: 'AOV Increase', value: '+18%', type: 'AOV' },
      { label: 'Visitors Increase', value: '3.5X', type: 'VISITORS' },
      { label: 'Bounce Decrease', value: '-24%', type: 'BOUNCE' }
    ],
    notes: 'No metrics recorded for: Build.'
  },
  {
    id: 'the-skin-beneath',
    name: 'The Skin Beneath',
    url: 'https://theskinbeneath.com/',
    domain: 'theskinbeneath.com',
    category: 'Cosmetic / Skin Care / Ecomm',
    categoryGroup: 'Beauty / Personal Care Ecomm',
    services: ['CRO', 'Build', 'PM', 'RM'],
    primaryMetric: { label: 'PM ROAS', value: '4.0 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+22%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' },
      { label: 'Bounce Decrease', value: '-22%', type: 'BOUNCE' }
    ],
    notes: 'No metrics recorded for: Build, RM.'
  },
  {
    id: 'yube1',
    name: 'Yube1',
    url: 'https://yube1.in/',
    domain: 'yube1.in',
    category: 'Real Estate',
    categoryGroup: 'Real Estate',
    services: ['PM'],
    primaryMetric: { label: 'Leads Increased', value: '3X' },
    allMetrics: [
      { label: 'PM ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'CPL Decrease', value: '-22%', type: 'CPL' },
      { label: 'Leads Increased', value: '3X', type: 'LEADS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' }
    ]
  },
  {
    id: 'too-bold-to-confirm',
    name: 'Too Bold To Confirm',
    url: 'https://tbtc.com/',
    domain: 'teebtc.com',
    category: 'Fashion / Ecomm',
    categoryGroup: 'Fashion Ecomm',
    services: ['SEO', 'CRO', 'Build', 'PM', 'RM'],
    primaryMetric: { label: 'RM ROAS', value: '6.0 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'RM ROAS', value: '6.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '200%', type: 'REV' },
      { label: 'AOV Increase', value: '+18%', type: 'AOV' },
      { label: 'Visitors Increase', value: '2X', type: 'VISITORS' },
      { label: 'Bounce Decrease', value: '-20%', type: 'BOUNCE' }
    ],
    notes: 'Revenue stated as a multiple, not a percentage. No metrics recorded for: Build.'
  },
  {
    id: 'kasuti-kavana',
    name: 'Kasuti Kavana',
    url: 'https://kasutikavana.com/',
    domain: 'kasutikavana.com',
    category: 'Fashion / Ecomm',
    categoryGroup: 'Fashion Ecomm',
    services: ['CRO', 'Build', 'PM', 'RM'],
    primaryMetric: { label: 'Revenue Increase', value: '+50%' },
    allMetrics: [
      { label: 'PM ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+50%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' }
    ],
    notes: 'No metrics recorded for: Build, RM.'
  },
  {
    id: 'shaffa',
    name: 'Shaffa',
    url: 'https://shaffa.com.au/',
    domain: 'shaffa.com.au',
    category: 'Hospitality / Restaurant',
    categoryGroup: 'Hospitality: Restaurants',
    services: ['SEO', 'PM'],
    primaryMetric: { label: 'Stated Revenue', value: '$45,000' },
    allMetrics: [
      { label: 'PM ROAS', value: '3.5 ROAS', type: 'ROAS' },
      { label: 'Leads Increased', value: '2.5X', type: 'LEADS' },
      { label: 'Stated Revenue', value: '$45,000+', type: 'REV' },
      { label: 'Visitors Increase', value: '3X', type: 'VISITORS' },
      { label: 'Bounce Decrease', value: '-30%', type: 'BOUNCE' }
    ],
    notes: 'Revenue reported as an absolute figure.'
  },
  {
    id: 'caness',
    name: 'Caness',
    url: 'https://caness.com.au/',
    domain: 'caness.com.au',
    category: 'Hospitality / Restaurant',
    categoryGroup: 'Hospitality: Restaurants',
    services: ['SEO', 'PM'],
    primaryMetric: { label: 'Stated Revenue', value: '$23,000' },
    allMetrics: [
      { label: 'PM ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'CPL Decrease', value: '-18%', type: 'CPL' },
      { label: 'Leads Increased', value: '2.5X', type: 'LEADS' },
      { label: 'Stated Revenue', value: '$23,000+', type: 'REV' },
      { label: 'Visitors Increase', value: '3X', type: 'VISITORS' }
    ],
    notes: 'Revenue reported as an absolute figure.'
  },
  {
    id: 'azoneh-treasures',
    name: 'Azoreh Treasures',
    url: 'https://azonehtreasures.com/',
    domain: 'azonehtreasures.com',
    category: 'Jewelry / Ecomm',
    categoryGroup: 'Jewellery',
    services: ['CRO', 'PM', 'SMM'],
    primaryMetric: { label: 'Revenue Increase', value: '+30%' },
    allMetrics: [
      { label: 'SMM Followers', value: '+52%', type: 'FOLLOWERS' },
      { label: 'PM ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+30%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' },
      { label: 'Bounce Decrease', value: '-23%', type: 'BOUNCE' }
    ]
  },
  {
    id: 'mr-jewels',
    name: 'MR Jewels',
    url: 'https://mrjewels.in/',
    domain: 'mrjewels.in',
    category: 'Jewelry / Ecomm',
    categoryGroup: 'Jewellery',
    services: ['SEO', 'RM'],
    primaryMetric: { label: 'RM ROAS', value: '6.0 ROAS' },
    allMetrics: [
      { label: 'RM ROAS', value: '6.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+30%', type: 'REV' },
      { label: 'AOV Increase', value: '+12%', type: 'AOV' },
      { label: 'Visitors Increase', value: '3X', type: 'VISITORS' }
    ],
    notes: 'Revenue and AOV come from Retention Marketing, not PM.'
  },
  {
    id: 'ugrashoes',
    name: 'Ugrashoes',
    url: 'https://ugrashoes.com/',
    domain: 'ugrashoes.com',
    category: 'Shoes / Ecomm',
    categoryGroup: 'Footwear / Rideables / Other D2C',
    services: ['CRO', 'Build', 'PM'],
    primaryMetric: { label: 'Revenue Increase', value: '+40%' },
    allMetrics: [
      { label: 'PM ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'AOV Increase', value: '+18%', type: 'AOV' },
      { label: 'Bounce Decrease', value: '-20%', type: 'BOUNCE' }
    ],
    notes: 'No metrics recorded for: Build.'
  },
  {
    id: 'basil-pet-care',
    name: 'Basil Pet Care',
    url: 'https://basilpetcare.com/',
    domain: 'basilpetcare.com',
    category: 'Pet Products / Care / Ecomm Retail',
    categoryGroup: 'Pet Products',
    services: ['PM', 'RM'],
    primaryMetric: { label: 'RM ROAS', value: '4.5 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'RM ROAS', value: '4.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+25%', type: 'REV' },
      { label: 'AOV Increase', value: '+20%', type: 'AOV' }
    ]
  },
  {
    id: 'clay-and-glaze',
    name: 'Clay and Glaze',
    url: 'https://clayandglaze.in/',
    domain: 'clayandglaze.in',
    category: 'Home and Lifestyle / Ecomm Retail',
    categoryGroup: 'Home / Lifestyle / Decor Ecomm',
    services: ['SEO', 'CRO', 'Build', 'RM', 'SMM'],
    primaryMetric: { label: 'RM ROAS', value: '4.0 ROAS' },
    allMetrics: [
      { label: 'SMM Followers', value: '+130%', type: 'FOLLOWERS' },
      { label: 'RM ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+20%', type: 'REV' },
      { label: 'AOV Increase', value: '+18%', type: 'AOV' },
      { label: 'Visitors Increase', value: '3X', type: 'VISITORS' }
    ],
    notes: 'Revenue and AOV come from Retention Marketing, not PM. No metrics recorded for: Build.'
  },
  {
    id: 'rangoli',
    name: 'Rangoli',
    url: 'https://rangoli.it/',
    domain: 'rangoli.it',
    category: 'Hospitality / Restaurant',
    categoryGroup: 'Hospitality: Restaurants',
    services: ['SEO', 'Build', 'PM', 'SMM'],
    primaryMetric: { label: 'PM ROAS', value: '5.0 ROAS' },
    allMetrics: [
      { label: 'SMM Followers', value: '+75%', type: 'FOLLOWERS' },
      { label: 'PM ROAS', value: '5.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+45%', type: 'REV' },
      { label: 'AOV Increase', value: '+23%', type: 'AOV' },
      { label: 'Visitors Increase', value: '4X', type: 'VISITORS' },
      { label: 'Bounce Decrease', value: '-23%', type: 'BOUNCE' }
    ]
  },
  {
    id: 'qibo',
    name: 'Qibo',
    url: 'https://www.qibo.in/',
    domain: 'qibo.in',
    category: 'Interior Design / Ecomm',
    categoryGroup: 'Home / Lifestyle / Decor Ecomm',
    services: ['PM'],
    primaryMetric: { label: 'PM ROAS', value: '4.5 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '4.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+45%', type: 'REV' },
      { label: 'AOV Increase', value: '+18%', type: 'AOV' }
    ]
  },
  {
    id: 'soiree-club',
    name: 'Soiree Club',
    url: 'https://www.soireeclub.in/',
    domain: 'soireeclub.in',
    category: 'Luxury Gifting Stationery / Ecomm',
    categoryGroup: 'Gifting / Stationery',
    services: ['PM'],
    primaryMetric: { label: 'PM ROAS', value: '5.5 ROAS' },
    allMetrics: [
      { label: 'PM ROAS', value: '5.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+28%', type: 'REV' },
      { label: 'AOV Increase', value: '+16%', type: 'AOV' }
    ]
  },
  {
    id: 'ecoo-global',
    name: 'Ecoo Global',
    url: 'https://ecooglobal.com/',
    domain: 'ecooglobal.com',
    category: 'Financial Services',
    categoryGroup: 'Financial Services',
    services: ['PM'],
    primaryMetric: { label: 'Leads Increased', value: '4X' },
    allMetrics: [
      { label: 'CPL Decrease', value: '-30%', type: 'CPL' },
      { label: 'Leads Increased', value: '4X', type: 'LEADS' }
    ]
  },
  {
    id: 'cuddle-buds',
    name: 'Cuddle Buds',
    url: 'https://www.cuddlebuds.in/',
    domain: 'cuddlebuds.in',
    category: 'Pet Products / Care / Ecomm Retail',
    categoryGroup: 'Pet Products',
    services: ['CRO', 'Build', 'PM', 'RM', 'SMM'],
    primaryMetric: { label: 'RM ROAS', value: '6.0 ROAS' },
    allMetrics: [
      { label: 'SMM Followers', value: '+30%', type: 'FOLLOWERS' },
      { label: 'PM ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'RM ROAS', value: '6.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' },
      { label: 'Bounce Decrease', value: '-24%', type: 'BOUNCE' }
    ],
    notes: 'No metrics recorded for: Build.'
  }
];

export const CATEGORY_PITCHES: CategoryMetricPitch[] = [
  {
    category: 'Jewellery',
    topPitch: { metric: 'Retention ROAS', value: '8.0 ROAS', brand: 'Kicky and Perky' },
    metrics: [
      { metric: 'Retention ROAS', value: '8.0 ROAS', brand: 'Kicky and Perky' },
      { metric: 'Performance ROAS', value: '4.0 ROAS', brand: 'Kicky and Perky' },
      { metric: 'Revenue Increase', value: '+70%', brand: 'Espira Gems' },
      { metric: 'Stated Revenue', value: 'INR 25L+', brand: 'Vanika Jewels' },
      { metric: 'Retention ROAS', value: '5.0 ROAS', brand: 'MR Jewels' }
    ]
  },
  {
    category: 'Financial Services & Fintech',
    topPitch: { metric: 'Stated Revenue', value: 'INR 2CR+', brand: 'The Credit Lane' },
    metrics: [
      { metric: 'Stated Revenue', value: 'INR 2CR+', brand: 'The Credit Lane' },
      { metric: 'Cost Per Lead', value: '-50% CPL', brand: 'The Credit Lane' },
      { metric: 'Leads Increased', value: '4X Leads', brand: 'Ecoo Global' },
      { metric: 'Followers Increase', value: '+200%', brand: 'The Happy Home Broker' }
    ]
  },
  {
    category: 'Spiritual, Wellness & Ayurveda',
    topPitch: { metric: 'Retention ROAS', value: '7.0 ROAS', brand: 'Rudrasetu' },
    metrics: [
      { metric: 'Retention ROAS', value: '7.0 ROAS', brand: 'Rudrasetu' },
      { metric: 'Performance ROAS', value: '4.0 ROAS', brand: 'Rudrasetu' },
      { metric: 'Revenue Increase', value: '+40%', brand: 'Himalayan Panacea' },
      { metric: 'Visitors Increase', value: '2X', brand: 'Soniva' }
    ]
  },
  {
    category: 'Fashion, Apparel & Couture',
    topPitch: { metric: 'Retention ROAS', value: '6.0 ROAS', brand: 'Too Bold To Confirm' },
    metrics: [
      { metric: 'Retention ROAS', value: '6.0 ROAS', brand: 'Too Bold To Confirm' },
      { metric: 'Revenue Increase', value: '200%', brand: 'Too Bold To Confirm' },
      { metric: 'Revenue Increase', value: '+60%', brand: 'Kasuti Kavana' },
      { metric: 'Revenue Increase', value: '+43%', brand: 'Isha and Ishana' }
    ]
  },
  {
    category: 'Hospitality, Resorts & Dining',
    topPitch: { metric: 'PM ROAS', value: '6.0 ROAS', brand: 'Paperbark Camp' },
    metrics: [
      { metric: 'PM ROAS', value: '6.0 ROAS', brand: 'Paperbark Camp' },
      { metric: 'PM ROAS', value: '5.5 ROAS', brand: 'Bombay Bloomers' },
      { metric: 'PM ROAS', value: '5.0 ROAS', brand: 'Rangoli' },
      { metric: 'Stated Revenue', value: '$45,000', brand: 'Shaffa' }
    ]
  },
  {
    category: 'Skincare, Beauty & Cosmetics',
    topPitch: { metric: 'PM ROAS', value: '4.0 ROAS', brand: 'The Skin Beneath' },
    metrics: [
      { metric: 'PM ROAS', value: '4.0 ROAS', brand: 'The Skin Beneath' },
      { metric: 'Revenue Increase', value: '+45%', brand: 'The Skin Beneath' }
    ]
  },
  {
    category: 'Home, Decor & Furniture',
    topPitch: { metric: 'PM ROAS', value: '5.5 ROAS', brand: 'Soiree Club' },
    metrics: [
      { metric: 'PM ROAS', value: '5.5 ROAS', brand: 'Soiree Club' },
      { metric: 'PM ROAS', value: '4.5 ROAS', brand: 'Qibo' },
      { metric: 'RM ROAS', value: '4.0 ROAS', brand: 'Clay and Glaze' }
    ]
  },
  {
    category: 'Rideables, Footwear & D2C',
    topPitch: { metric: 'RM ROAS', value: '8.0 ROAS', brand: 'Radboards' },
    metrics: [
      { metric: 'RM ROAS', value: '8.0 ROAS', brand: 'Radboards' },
      { metric: 'PM ROAS', value: '4.5 ROAS', brand: 'Radboards' },
      { metric: 'Revenue Increase', value: '+40%', brand: 'Ugrashoes' }
    ]
  },
  {
    category: 'Real Estate & Services',
    topPitch: { metric: 'Leads Increased', value: '3X', brand: 'Pro4Security' },
    metrics: [
      { metric: 'Leads Increased', value: '3X', brand: 'Pro4Security' },
      { metric: 'CPL Decrease', value: '-40%', brand: 'Gaadi Web' },
      { metric: 'Revenue Increase', value: '+250%', brand: 'Gaadi Web' }
    ]
  },
  {
    category: 'Pet Products & Accessories',
    topPitch: { metric: 'RM ROAS', value: '6.0 ROAS', brand: 'Cuddle Buds' },
    metrics: [
      { metric: 'RM ROAS', value: '6.0 ROAS', brand: 'Cuddle Buds' },
      { metric: 'RM ROAS', value: '4.5 ROAS', brand: 'Basil Pet Care' },
      { metric: 'Revenue Increase', value: '+40%', brand: 'Cuddle Buds' }
    ]
  }
];
