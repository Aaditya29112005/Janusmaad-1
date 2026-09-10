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
  borrowedCategories?: string[];
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
      { label: 'Lead Volume', value: '3.5X', type: 'LEADS' },
      { label: 'Net Revenue', value: '₹2CR+', type: 'REV' }
    ]
  },
{

    id: 'rudrasetu',
    name: 'Rudrasetu',
    url: 'https://rudrasetu.com/',
    domain: 'rudrasetu.com',
    category: 'Spiritual & Rudraksh Ecomm',
    categoryGroup: 'Spiritual / Rudraksh Ecomm',
    services: ['CRO', 'Build', 'PM', 'RM', 'SMM'],
    primaryMetric: { label: 'Retention ROAS', value: '7.0 ROAS' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-32%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' },
      { label: 'Website Visitors', value: '3.5X Increase', type: 'VISITORS' },
      { label: 'Retention ROAS', value: '7.0 ROAS', type: 'ROAS' },
      { label: 'Social Followers', value: '+45%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'radboards',
    name: 'Radboards',
    url: 'https://radboards.in/',
    domain: 'radboards.in',
    category: 'Rideables & E-Commerce',
    categoryGroup: 'Footwear / Rideables / Other D2C',
    services: ['CRO', 'Build', 'PM', 'RM'],
    primaryMetric: { label: 'Retention ROAS', value: '8.0 ROAS' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-24%', type: 'BOUNCE' },
      { label: 'Website Visitors', value: '3.5X Increase', type: 'VISITORS' },
      { label: 'Performance ROAS', value: '4.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+25%', type: 'REV' },
      { label: 'AOV Increase', value: '+18%', type: 'AOV' },
      { label: 'Retention ROAS', value: '8.0 ROAS', type: 'ROAS' }
    ]
  },
{

    id: 'espira-gems',
    name: 'Espira Gems',
    url: 'https://espiragems.com/',
    domain: 'espiragems.com',
    category: 'Jewelry Ecomm',
    categoryGroup: 'Jewellery',
    services: ['PM', 'CRO'],
    primaryMetric: { label: 'Revenue Lift', value: '+70% Revenue' },
    allMetrics: [
      { label: 'Performance ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+70%', type: 'REV' },
      { label: 'AOV Lift', value: '+15%', type: 'AOV' },
      { label: 'Organic Visitors', value: '+240%', type: 'VISITORS' },
      { label: 'Bounce Reduction', value: '-20%', type: 'BOUNCE' }
    ]
  },
{

    id: 'kicky-and-perky',
    name: 'Kicky and Perky',
    url: 'https://kickyandperky.com/',
    domain: 'kickyandperky.com',
    category: 'Jewelry Ecomm',
    categoryGroup: 'Jewellery',
    services: ['PM', 'RM'],
    primaryMetric: { label: 'Retention ROAS', value: '8+ ROAS' },
    allMetrics: [
      { label: 'Performance ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+35%', type: 'REV' },
      { label: 'AOV Increase', value: '+20%', type: 'AOV' },
      { label: 'Bounce Reduction', value: '-12%', type: 'BOUNCE' },
      { label: 'Retention ROAS', value: '8+ ROAS', type: 'ROAS' }
    ]
  },
{

    id: 'paperbark-camp',
    name: 'Paperbark Camp',
    url: 'https://paperbarkcamp.com.au/',
    domain: 'paperbarkcamp.com.au',
    category: 'Luxury Hospitality & Stays',
    categoryGroup: 'Hospitality: Stays / Resorts',
    services: ['SEO', 'PM'],
    primaryMetric: { label: 'Performance Ad ROAS', value: '8.0 ROAS' },
    allMetrics: [
      { label: 'SEO Visitors', value: '+160%', type: 'VISITORS' },
      { label: 'Performance ROAS', value: '8.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Lift', value: '$120K+', type: 'REV' }
    ]
  },
{

    id: 'nippon-naturals',
    name: 'Nippon Naturals',
    url: 'https://nipponnaturals.com/',
    domain: 'nipponnaturals.com',
    category: 'Wine & Beverage Seller',
    categoryGroup: 'Food / FMCG Retail',
    services: ['SEO', 'CRO'],
    primaryMetric: { label: 'Organic Traffic Lift', value: '+60% Visitors' },
    allMetrics: [
      { label: 'SEO Visitors', value: '+60%', type: 'VISITORS' },
      { label: 'Bounce Reduction', value: '-18%', type: 'BOUNCE' }
    ]
  },
{

    id: 'mothers-touch',
    name: 'Mothers Touch Services',
    url: 'https://www.mothertouchservices.com/',
    domain: 'mothertouchservices.com',
    category: 'Maid & Nanny Services',
    categoryGroup: 'Local / Home Services',
    borrowedCategories: ['Salon', 'Spa', 'Home Cleaning', 'Elderly Care', 'Nanny'],
    services: ['SEO', 'CRO', 'Build', 'PM', 'SMM'],
    primaryMetric: { label: 'Lead Volume Boost', value: '3.5X Leads' },
    allMetrics: [
      { label: 'SEO Organic Visitors', value: '3X Increase', type: 'VISITORS' },
      { label: 'Bounce Reduction', value: '-23%', type: 'BOUNCE' },
      { label: 'Cost Per Lead (CPL)', value: '-25%', type: 'CPL' },
      { label: 'Lead Volume', value: '3.5X Increase', type: 'LEADS' },
      { label: 'Revenue Increase', value: '+16%', type: 'REV' },
      { label: 'Social Followers', value: '+120%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'kidzfirstudio',
    name: 'Kidzfirstudio',
    url: 'https://kidzfitstudio.com/',
    domain: 'kidzfitstudio.com',
    category: 'Kid Gym & Daycare Services',
    categoryGroup: 'Local / Home Services',
    borrowedCategories: ['Sports Club', 'Daycare', 'Kids Fitness', 'Play School'],
    services: ['Build', 'PM', 'SMM'],
    primaryMetric: { label: 'Lead Growth', value: '2X Leads' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-10%', type: 'BOUNCE' },
      { label: 'CPL Decrease', value: '-12%', type: 'CPL' },
      { label: 'Lead Volume', value: '2X Increase', type: 'LEADS' },
      { label: 'Revenue Lift', value: '+15%', type: 'REV' },
      { label: 'Social Followers', value: '+30%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'yubi1',
    name: 'Yubi1',
    url: 'https://yube1.in/',
    domain: 'yube1.in',
    category: 'Real Estate & Co-Living',
    categoryGroup: 'Real Estate',
    services: ['PM'],
    primaryMetric: { label: 'Qualified Property Leads', value: '3X Leads' },
    allMetrics: [
      { label: 'Cost Per Lead (CPL)', value: '-22%', type: 'CPL' },
      { label: 'Lead Volume', value: '3X Increase', type: 'LEADS' },
      { label: 'Ad ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' }
    ]
  },
{

    id: 'the-skin-beneath',
    name: 'The Skin Beneath',
    url: 'https://theskinbeneath.com/',
    domain: 'theskinbeneath.com',
    category: 'Cosmetic & Skincare Ecomm',
    categoryGroup: 'Beauty / Personal Care Ecomm',
    services: ['CRO', 'Build', 'PM', 'RM'],
    primaryMetric: { label: 'Performance ROAS', value: '4.0 ROAS' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-22%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+22%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' }
    ]
  },
{

    id: 'shagun-sweets',
    name: 'Shagun Sweets',
    url: 'https://www.shagunsweets.co/',
    domain: 'shagunsweets.co',
    category: 'Sweets Retail / Bakery',
    categoryGroup: 'Food / FMCG Retail',
    borrowedCategories: ['Bakery', 'Confectionery', 'Sweets', 'Food Retail'],
    services: ['PM'],
    primaryMetric: { label: 'Target Ad ROAS', value: '4.5x ROAS' },
    allMetrics: [
      { label: 'Performance ROAS', value: '4.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Lift', value: '+40%', type: 'REV' },
      { label: 'AOV Increase', value: '+28%', type: 'AOV' }
    ]
  },
{

    id: 'frasmetics',
    name: 'Frasmetics',
    url: 'https://frasmetics.com/',
    domain: 'frasmetics.com',
    category: 'Perfume & Beauty Ecomm',
    categoryGroup: 'Beauty / Personal Care Ecomm',
    services: ['Build', 'PM', 'SMM'],
    primaryMetric: { label: 'Revenue Growth', value: '+65% Revenue' },
    allMetrics: [
      { label: 'Bounce Rate Reduction', value: '-18%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '3+ ROAS', type: 'ROAS' },
      { label: 'Revenue Growth', value: '+65%', type: 'REV' },
      { label: 'AOV Lift', value: '+14%', type: 'AOV' },
      { label: 'Social Followers', value: '+160%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'vanika-jewels',
    name: 'Vanika Jewels',
    url: 'https://vanikajewels.com/',
    domain: 'vanikajewels.com',
    category: 'Jewelry Retail',
    categoryGroup: 'Jewellery',
    services: ['Build', 'SMM', 'PM'],
    primaryMetric: { label: 'Revenue Lift', value: '₹25L+ Net Lift' },
    allMetrics: [
      { label: 'Social Followers', value: '+120%', type: 'FOLLOWERS' },
      { label: 'CPL Reduction', value: '-30%', type: 'CPL' },
      { label: 'Leads Volume', value: '+180%', type: 'LEADS' },
      { label: 'Revenue Increase', value: '₹25L+', type: 'REV' }
    ]
  },
{

    id: 'wildmoss',
    name: 'Wildmoss',
    url: 'https://www.wildmoss.in/',
    domain: 'wildmoss.in',
    category: 'Fashion Ecomm',
    categoryGroup: 'Fashion Ecomm',
    services: ['SEO', 'CRO', 'Build', 'PM'],
    primaryMetric: { label: 'Organic Search Visitors', value: '200% Increase' },
    allMetrics: [
      { label: 'Organic Visitors', value: '200% Increase', type: 'VISITORS' },
      { label: 'Performance ROAS', value: '2+ ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+30%', type: 'REV' }
    ]
  },
{

    id: 'himalayan-panacea',
    name: 'Himalayan Panacea',
    url: 'https://www.himalayanpanacea.com/',
    domain: 'himalayanpanacea.com',
    category: 'Ayurveda & Wellness Ecomm',
    categoryGroup: 'Beauty / Personal Care Ecomm',
    services: ['CRO', 'PM', 'SMM'],
    primaryMetric: { label: 'Revenue Growth', value: '+40% Revenue' },
    allMetrics: [
      { label: 'CRO Bounce Reduction', value: '-18%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'Social Followers', value: '+60%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'gaadi-web',
    name: 'Gaadi Web',
    url: 'https://www.gaadiweb.com/',
    domain: 'gaadiweb.com',
    category: 'Car Parts & Local Service',
    categoryGroup: 'Local / Home Services',
    borrowedCategories: ['Auto Repair', 'Car Service', 'Mechanic', 'Garage'],
    services: ['PM'],
    primaryMetric: { label: 'Revenue Lift', value: '+250% Revenue' },
    allMetrics: [
      { label: 'Cost Per Lead (CPL)', value: '-40%', type: 'CPL' },
      { label: 'Leads Volume', value: '+230%', type: 'LEADS' },
      { label: 'Revenue Increase', value: '+250%', type: 'REV' }
    ]
  },
{

    id: 'the-happy-home-broker',
    name: 'The Happy Home Broker',
    url: 'https://www.thehappyhomebroker.com.au/',
    domain: 'thehappyhomebroker.com.au',
    category: 'Financial Services & Mortgage',
    categoryGroup: 'Financial Services',
    services: ['CRO', 'PM', 'SMM'],
    primaryMetric: { label: 'Social Followers & Leads', value: '200% Increase' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-15%', type: 'BOUNCE' },
      { label: 'CPL Reduction', value: '-30%', type: 'CPL' },
      { label: 'Lead Volume', value: '2X', type: 'LEADS' },
      { label: 'Social Followers', value: '+200%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'hand-studio',
    name: 'HAND Studio',
    url: 'https://www.hand-studio.com.au/',
    domain: 'hand-studio.com.au',
    category: 'Branding & Design Studio',
    categoryGroup: 'Professional / Creative Services',
    borrowedCategories: ['Design Agency', 'Architecture', 'Consulting', 'Studio'],
    services: ['PM'],
    primaryMetric: { label: 'Target ROAS', value: '4.5 ROAS' },
    allMetrics: [
      { label: 'CPL Reduction', value: '-26%', type: 'CPL' },
      { label: 'Lead Volume', value: '3X', type: 'LEADS' },
      { label: 'ROAS', value: '4.5 ROAS', type: 'ROAS' }
    ]
  },
{

    id: 'bombay-bloomers',
    name: 'Bombay Bloomers',
    url: 'https://bombaybloomers.com.au/',
    domain: 'bombaybloomers.com.au',
    category: 'Hospitality & Dining',
    categoryGroup: 'Hospitality: Restaurants',
    borrowedCategories: ['Café', 'Bistro', 'Bakery', 'Fast Food'],
    services: ['SEO', 'Build', 'PM', 'SMM'],
    primaryMetric: { label: 'Performance ROAS', value: '5.5 ROAS' },
    allMetrics: [
      { label: 'SEO Organic Visitors', value: '+300%', type: 'VISITORS' },
      { label: 'Performance ROAS', value: '5.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+42%', type: 'REV' },
      { label: 'AOV Increase', value: '+24%', type: 'AOV' },
      { label: 'Social Followers', value: '+1,800 (+75%)', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'isha-and-ishana',
    name: 'Isha and Ishana',
    url: 'https://ishaandishana.com/',
    domain: 'ishaandishana.com',
    category: 'Fashion & Designer Ecomm',
    categoryGroup: 'Fashion Ecomm',
    services: ['CRO', 'Build', 'PM', 'SMM'],
    primaryMetric: { label: 'Social Media Growth', value: '300% Followers' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-24%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+43%', type: 'REV' },
      { label: 'Social Followers', value: '300% Increase', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'pro4security',
    name: 'Pro4Security Services',
    url: 'https://www.p4ssecurity.com/',
    domain: 'p4ssecurity.com',
    category: 'Security & Facility Services',
    categoryGroup: 'Local / Home Services',
    borrowedCategories: ['Security Guard', 'Facility Management', 'CCTV Services'],
    services: ['PM', 'SMM'],
    primaryMetric: { label: 'CPL Reduction', value: '-42% CPL' },
    allMetrics: [
      { label: 'Cost Per Lead (CPL)', value: '-42%', type: 'CPL' },
      { label: 'Lead Volume', value: '3X Increase', type: 'LEADS' },
      { label: 'Revenue Increase', value: '+12%', type: 'REV' },
      { label: 'Social Followers', value: '+40%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'soniva',
    name: 'Soniva',
    url: 'https://soniva.com.au/',
    domain: 'soniva.com.au',
    category: 'Sound Healing & Yoga Services',
    categoryGroup: 'Wellness / Yoga',
    borrowedCategories: ['Pilates', 'Meditation', 'Wellness Clinic'],
    services: ['Build'],
    primaryMetric: { label: 'Website Visitors', value: '2X Visitors' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-20%', type: 'BOUNCE' },
      { label: 'Visitors Increase', value: '2X Increase', type: 'VISITORS' }
    ]
  },
{

    id: 'selective-guru',
    name: 'Selective Guru',
    url: 'https://www.selectiveguru.com.au/',
    domain: 'selectiveguru.com.au',
    category: 'EdTech & Tutoring Services',
    categoryGroup: 'EdTech',
    borrowedCategories: ['Coaching', 'Online Learning', 'Test Prep'],
    services: ['SEO', 'PM', 'SMM'],
    primaryMetric: { label: 'Lead Expansion', value: '4X Leads' },
    allMetrics: [
      { label: 'SEO Organic Visitors', value: '4X Increase', type: 'VISITORS' },
      { label: 'Lead Volume', value: '4X Increase', type: 'LEADS' },
      { label: 'Ad ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '2.5X Increase', type: 'REV' }
    ]
  },
{

    id: 'too-bold-to-confirm',
    name: 'Too Bold To Confirm',
    url: 'https://teebtc.com/',
    domain: 'teebtc.com',
    category: 'Fashion & Apparel Ecomm',
    categoryGroup: 'Fashion Ecomm',
    services: ['SEO', 'CRO', 'Build', 'PM', 'RM'],
    primaryMetric: { label: 'Net Revenue Multiplier', value: '3X Revenue' },
    allMetrics: [
      { label: 'SEO Visitors', value: '2X Increase', type: 'VISITORS' },
      { label: 'Bounce Reduction', value: '-20%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '3X Increase', type: 'REV' },
      { label: 'AOV Increase', value: '+18%', type: 'AOV' },
      { label: 'Retention ROAS', value: '6.0 ROAS', type: 'ROAS' }
    ]
  },
{

    id: 'kasuti-kavana',
    name: 'Kasuti Kavana',
    url: 'https://kasutikavana.com/',
    domain: 'kasutikavana.com',
    category: 'Fashion Ecomm',
    categoryGroup: 'Fashion Ecomm',
    services: ['CRO', 'Build', 'PM', 'RM'],
    primaryMetric: { label: 'Revenue Growth', value: '+50% Revenue' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-15%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+50%', type: 'REV' }
    ]
  },
{

    id: 'shaffa',
    name: 'Shaffa',
    url: 'https://shaffa.com.au/',
    domain: 'shaffa.com.au',
    category: 'Hospitality & Dining',
    categoryGroup: 'Hospitality: Restaurants',
    services: ['SEO', 'PM'],
    primaryMetric: { label: 'Direct Booking Revenue', value: '+$45,000 Increase' },
    allMetrics: [
      { label: 'SEO Organic Visitors', value: '3X Increase', type: 'VISITORS' },
      { label: 'Cost Per Booking (CPL)', value: '-30%', type: 'CPL' },
      { label: 'Booking Volume', value: '2.5X Increase', type: 'LEADS' },
      { label: 'Ad ROAS', value: '3.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Lift', value: '+$45,000', type: 'REV' }
    ]
  },
{

    id: 'caness',
    name: 'Caness',
    url: 'https://caness.com.au/',
    domain: 'caness.com.au',
    category: 'Hospitality & Dining',
    categoryGroup: 'Hospitality: Restaurants',
    services: ['SEO', 'PM'],
    primaryMetric: { label: 'Revenue Increase', value: '+$23,000' },
    allMetrics: [
      { label: 'SEO Organic Visitors', value: '3X Increase', type: 'VISITORS' },
      { label: 'CPL Decrease', value: '-18%', type: 'CPL' },
      { label: 'Leads Volume', value: '2.5X Increase', type: 'LEADS' },
      { label: 'Ad ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+$23,000', type: 'REV' }
    ]
  },
{

    id: 'azoneh-treasures',
    name: 'Azoneh Treasures',
    url: 'https://azonehtreasures.com/',
    domain: 'azonehtreasures.com',
    category: 'Jewelry Ecomm',
    categoryGroup: 'Jewellery',
    services: ['CRO', 'PM', 'SMM'],
    primaryMetric: { label: 'Revenue Lift', value: '+30% Revenue' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-23%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+30%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' },
      { label: 'Social Followers', value: '+52%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'mr-jewels',
    name: 'MR Jewels',
    url: 'https://mrjewels.in/',
    domain: 'mrjewels.in',
    category: 'Jewelry Ecomm',
    categoryGroup: 'Jewellery',
    services: ['SEO', 'RM'],
    primaryMetric: { label: 'Organic Visitors', value: '3X Visitors' },
    allMetrics: [
      { label: 'SEO Organic Visitors', value: '3X Increase', type: 'VISITORS' },
      { label: 'Retention ROAS', value: '6.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+30%', type: 'REV' },
      { label: 'AOV Increase', value: '+12%', type: 'AOV' }
    ]
  },
{

    id: 'ugrashoes',
    name: 'Ugrashoes',
    url: 'https://ugrashoes.com/',
    domain: 'ugrashoes.com',
    category: 'Shoes & Footwear Ecomm',
    categoryGroup: 'Footwear / Rideables / Other D2C',
    services: ['CRO', 'Build', 'PM'],
    primaryMetric: { label: 'Revenue Growth', value: '+40% Revenue' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-20%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '2.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'AOV Increase', value: '+18%', type: 'AOV' }
    ]
  },
{

    id: 'basil-pet-care',
    name: 'Basil Pet Care',
    url: 'https://basilpetcare.com/',
    domain: 'basilpetcare.com',
    category: 'Pet Products & Care Retail',
    categoryGroup: 'Pet Products',
    services: ['PM', 'RM'],
    primaryMetric: { label: 'Retention ROAS', value: '4.5 ROAS' },
    allMetrics: [
      { label: 'Performance ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+25%', type: 'REV' },
      { label: 'AOV Increase', value: '+20%', type: 'AOV' },
      { label: 'Retention ROAS', value: '4.5 ROAS', type: 'ROAS' }
    ]
  },
{

    id: 'clay-and-glaze',
    name: 'Clay and Glaze',
    url: 'https://clayandglaze.in/',
    domain: 'clayandglaze.in',
    category: 'Home & Lifestyle Brand',
    categoryGroup: 'Home / Lifestyle / Decor Ecomm',
    services: ['SEO', 'CRO', 'Build', 'RM', 'SMM'],
    primaryMetric: { label: 'Retention ROAS', value: '4.0 ROAS' },
    allMetrics: [
      { label: 'SEO Organic Visitors', value: '3X Increase', type: 'VISITORS' },
      { label: 'Bounce Reduction', value: '-18%', type: 'BOUNCE' },
      { label: 'Retention ROAS', value: '4.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+20%', type: 'REV' },
      { label: 'Social Followers', value: '+130%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'rangoli',
    name: 'Rangoli',
    url: 'https://rangoli.it/',
    domain: 'rangoli.it',
    category: 'Hospitality & Dining',
    categoryGroup: 'Hospitality: Restaurants',
    services: ['SEO', 'Build', 'PM', 'SMM'],
    primaryMetric: { label: 'SEO Visitors', value: '4X Organic Visitors' },
    allMetrics: [
      { label: 'SEO Organic Visitors', value: '4X Increase', type: 'VISITORS' },
      { label: 'Bounce Reduction', value: '-23%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '5.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+45%', type: 'REV' },
      { label: 'AOV Increase', value: '+23%', type: 'AOV' },
      { label: 'Social Followers', value: '+75%', type: 'FOLLOWERS' }
    ]
  },
{

    id: 'qibo',
    name: 'Qibo',
    url: 'https://www.qibo.in/',
    domain: 'qibo.in',
    category: 'Interior Design Ecomm',
    categoryGroup: 'Home / Lifestyle / Decor Ecomm',
    services: ['PM'],
    primaryMetric: { label: 'Ad ROAS', value: '4.5 ROAS' },
    allMetrics: [
      { label: 'Performance ROAS', value: '4.5 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+45%', type: 'REV' },
      { label: 'AOV Increase', value: '+18%', type: 'AOV' }
    ]
  },
{

    id: 'soiree-club',
    name: 'Soiree Club',
    url: 'https://www.soireeclub.in/',
    domain: 'soireeclub.in',
    category: 'Luxury Gifting & Stationery',
    categoryGroup: 'Gifting / Stationery',
    services: ['PM'],
    primaryMetric: { label: 'Performance ROAS', value: '5.5 ROAS' },
    allMetrics: [
      { label: 'Performance ROAS', value: '5.5 ROAS', type: 'ROAS' },
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
    primaryMetric: { label: 'Lead Volume Expansion', value: '4X Leads' },
    allMetrics: [
      { label: 'CPL Reduction', value: '-30%', type: 'CPL' },
      { label: 'Lead Volume', value: '4X Increase', type: 'LEADS' }
    ]
  },
{

    id: 'cuddle-buds',
    name: 'Cuddle Buds',
    url: 'https://www.cuddlebuds.in/',
    domain: 'cuddlebuds.in',
    category: 'Pet Products & Ecomm',
    categoryGroup: 'Pet Products',
    services: ['CRO', 'Build', 'PM', 'RM', 'SMM'],
    primaryMetric: { label: 'Retention ROAS', value: '6.0 ROAS' },
    allMetrics: [
      { label: 'Bounce Reduction', value: '-24%', type: 'BOUNCE' },
      { label: 'Performance ROAS', value: '3.0 ROAS', type: 'ROAS' },
      { label: 'Revenue Increase', value: '+40%', type: 'REV' },
      { label: 'AOV Increase', value: '+15%', type: 'AOV' },
      { label: 'Retention ROAS', value: '6.0 ROAS', type: 'ROAS' },
      { label: 'Social Followers', value: '+30%', type: 'FOLLOWERS' }
    ]
  }
];

export const CATEGORY_PITCHES: CategoryMetricPitch[] = [
  {
    category: 'Jewellery',
    topPitch: { metric: 'Retention ROAS', value: '8+ ROAS', brand: 'Kicky and Perky' },
    metrics: [
      { metric: 'Retention ROAS', value: '8+ ROAS', brand: 'Kicky and Perky' },
      { metric: 'Ad ROAS', value: '4.0 ROAS', brand: 'Kicky and Perky' },
      { metric: 'Revenue Increase', value: '+70%', brand: 'Espira Gems' },
      { metric: 'Net Revenue Lift', value: 'INR 25Lakh+', brand: 'Vanika Jewels' },
      { metric: 'SEO Organic Visitors', value: '3X Increase', brand: 'MR Jewels' }
    ]
  },
  {
    category: 'Financial Services & Fintech',
    topPitch: { metric: 'Net Revenue Generated', value: '₹2CR+', brand: 'The Credit Lane' },
    metrics: [
      { metric: 'Net Revenue', value: '₹2CR+', brand: 'The Credit Lane' },
      { metric: 'Cost Per Lead', value: '-50% CPL', brand: 'The Credit Lane' },
      { metric: 'Lead Volume Expansion', value: '4X Leads', brand: 'Ecoo Global' },
      { metric: 'Organic Traffic Lift', value: '+180%', brand: 'Yubi1' }
    ]
  },
  {
    category: 'Spiritual, Wellness & Ayurveda',
    topPitch: { metric: 'Retention ROAS', value: '7.0 ROAS', brand: 'Rudrasetu' },
    metrics: [
      { metric: 'Retention ROAS', value: '7.0 ROAS', brand: 'Rudrasetu' },
      { metric: 'Retention ROAS', value: '5.5 ROAS', brand: 'Himalayan Panacea' },
      { metric: 'Performance ROAS', value: '4.5 ROAS', brand: 'Wildmoss' },
      { metric: 'Revenue Growth', value: '+45%', brand: 'Nippon Naturals' }
    ]
  },
  {
    category: 'Fashion, Apparel & Couture',
    topPitch: { metric: 'Retention ROAS', value: '6.0 ROAS', brand: 'Isha and Ishana' },
    metrics: [
      { metric: 'Retention ROAS', value: '6.0 ROAS', brand: 'Isha and Ishana' },
      { metric: 'Performance ROAS', value: '5.0 ROAS', brand: 'Too Bold to Confirm' },
      { metric: 'Performance ROAS', value: '4.5 ROAS', brand: 'Soniva' }
    ]
  },
  {
    category: 'Hospitality, Resorts & Dining',
    topPitch: { metric: 'Organic Traffic Growth', value: '4X Visitors', brand: 'Paperbark Camp' },
    metrics: [
      { metric: 'SEO Organic Visitors', value: '4X Increase', brand: 'Paperbark Camp' },
      { metric: 'SEO Organic Visitors', value: '4X Increase', brand: 'Rangoli' },
      { metric: 'Performance ROAS', value: '5.0 ROAS', brand: 'Rangoli' },
      { metric: 'Revenue Growth', value: '+45%', brand: 'Rangoli' },
      { metric: 'Revenue Lift', value: '+40%', brand: 'Bombay Bloomers' },
      { metric: 'Revenue Growth', value: '+30%', brand: 'Shaffa' }
    ]
  },
  {
    category: 'Skincare, Beauty & Cosmetics',
    topPitch: { metric: 'Performance ROAS', value: '5.0 ROAS', brand: 'The Skin Beneath' },
    metrics: [
      { metric: 'Performance ROAS', value: '5.0 ROAS', brand: 'The Skin Beneath' },
      { metric: 'Revenue Growth', value: '+50%', brand: 'Frasmetics' },
      { metric: 'Bounce Reduction', value: '-28%', brand: 'The Skin Beneath' }
    ]
  },
  {
    category: 'Home, Decor & Furniture',
    topPitch: { metric: 'Performance ROAS', value: '5.5 ROAS', brand: 'Soiree Club' },
    metrics: [
      { metric: 'Performance ROAS', value: '5.5 ROAS', brand: 'Soiree Club' },
      { metric: 'Ad ROAS', value: '4.5 ROAS', brand: 'Qibo' },
      { metric: 'Retention ROAS', value: '4.0 ROAS', brand: 'Clay and Glaze' },
      { metric: 'SEO Organic Visitors', value: '3X Increase', brand: 'Clay and Glaze' }
    ]
  },
  {
    category: 'Rideables, Footwear & D2C',
    topPitch: { metric: 'Retention ROAS', value: '8.0 ROAS', brand: 'Radboards' },
    metrics: [
      { metric: 'Retention ROAS', value: '8.0 ROAS', brand: 'Radboards' },
      { metric: 'Website Visitors', value: '3.5X Increase', brand: 'Radboards' },
      { metric: 'Performance ROAS', value: '4.0 ROAS', brand: 'Ugra Shoes' }
    ]
  },
  {
    category: 'Real Estate & Broking',
    topPitch: { metric: 'Lead Volume Expansion', value: '4X Leads', brand: 'Gaadi Web' },
    metrics: [
      { metric: 'Lead Volume Expansion', value: '4X Leads', brand: 'Gaadi Web' },
      { metric: 'Qualified Leads', value: '3.5X Increase', brand: 'The Happy Home Broker' },
      { metric: 'CPL Reduction', value: '-30%', brand: 'Gaadi Web' }
    ]
  },
  {
    category: 'Pet Products & Accessories',
    topPitch: { metric: 'Retention ROAS', value: '6.0 ROAS', brand: 'Cuddle Buds' },
    metrics: [
      { metric: 'Retention ROAS', value: '6.0 ROAS', brand: 'Cuddle Buds' },
      { metric: 'Social Followers', value: '+250%', brand: 'Basil Pet Care' },
      { metric: 'Revenue Growth', value: '+40%', brand: 'Cuddle Buds' }
    ]
  },
  {
    category: 'Food, Sweets & Confectionery',
    topPitch: { metric: 'Net Revenue Lift', value: 'INR 15Lakh+', brand: 'Shagun Sweets' },
    metrics: [
      { metric: 'Net Revenue Lift', value: 'INR 15Lakh+', brand: 'Shagun Sweets' },
      { metric: 'Performance ROAS', value: '4.0 ROAS', brand: 'Shagun Sweets' },
      { metric: 'Social Followers', value: '+80%', brand: 'Shagun Sweets' }
    ]
  }
];

