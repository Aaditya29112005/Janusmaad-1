export interface ProofStat {
  label: string;
  value: string;
  sub?: string;
  clientName: string;
  clientLogo: string;
  serviceTag: string;
  category: string;
}

export const PROOF_STATS: ProofStat[] = [
  {
    label: 'Performance Media ROAS',
    value: '4x',
    clientName: 'Kicky & Perky',
    clientLogo: '/logos/full_brands/1_brand_1.png',
    serviceTag: 'Meta & Google Ads',
    category: 'Jewelry (Ecomm + Retail)',
  },
  {
    label: 'Cost Per Lead (CPL)',
    value: '-30%',
    clientName: 'The Credit Lane',
    clientLogo: '/logos/full_brands/1_brand_9.png',
    serviceTag: 'Lead Funnel & Ads',
    category: 'Financial Services & Fintech',
  },
  {
    label: 'Qualified Leads Volume',
    value: '3x',
    clientName: 'Paperbark Camp',
    clientLogo: '/logos/full_brands/2_brand_2.png',
    serviceTag: 'Direct Booking Engine',
    category: 'Hospitality & Luxury Stays',
  },
  {
    label: 'Retention Media ROAS',
    value: '7x',
    clientName: 'Shagun Sweets',
    clientLogo: '/logos/full_brands/1_brand_4.png',
    serviceTag: 'Klaviyo & Retention',
    category: 'Food, Sweets & Confectionery',
  },
  {
    label: 'Client Revenue Growth',
    value: '+53%',
    clientName: 'Rudrasetu',
    clientLogo: '/logos/full_brands/1_brand_11.png',
    serviceTag: 'Performance Marketing',
    category: 'Spiritual, Wellness & Ayurveda',
  },
  {
    label: 'Average Order Value (AOV)',
    value: '+18%',
    clientName: 'Espira Gems',
    clientLogo: '/logos/full_brands/1_brand_7.png',
    serviceTag: 'Shopify Plus Bundles',
    category: 'Jewelry (Ecomm + Retail)',
  },
  {
    label: 'Organic Visitor Growth',
    value: '3x',
    clientName: 'The Skin Beneath',
    clientLogo: '/logos/full_brands/1_brand_12.png',
    serviceTag: 'SEO & AEO',
    category: 'Skincare, Beauty & Cosmetics',
  },
  {
    label: 'Bounce Rate Reduction',
    value: '-20%',
    clientName: 'Radboards',
    clientLogo: '/logos/full_brands/1_brand_6.png',
    serviceTag: 'Storefront Build & CRO',
    category: 'Rideables, Footwear & D2C',
  },
];
