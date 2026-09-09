export interface ProofStat {
  label: string;
  value: string;
  sub?: string;
  clientName: string;
  clientLogo: string;
  serviceTag: string;
}

export const PROOF_STATS: ProofStat[] = [
  {
    label: 'Performance Media ROAS',
    value: '4x',
    clientName: 'Kicky & Perky',
    clientLogo: '/logos/full_brands/1_brand_1.png',
    serviceTag: 'Meta & Google Ads',
  },
  {
    label: 'Cost Per Lead (CPL)',
    value: '-30%',
    clientName: 'The Credit Lane',
    clientLogo: '/logos/full_brands/1_brand_9.png',
    serviceTag: 'Lead Funnel & Ads',
  },
  {
    label: 'Qualified Leads Volume',
    value: '3x',
    clientName: 'Paperbark Camp',
    clientLogo: '/logos/full_brands/2_brand_2.png',
    serviceTag: 'Direct Booking Engine',
  },
  {
    label: 'Retention Media ROAS',
    value: '7x',
    clientName: 'Shagun Sweets',
    clientLogo: '/logos/full_brands/1_brand_4.png',
    serviceTag: 'Klaviyo & Retention',
  },
  {
    label: 'Client Revenue Growth',
    value: '+53%',
    clientName: 'Rudrasetu',
    clientLogo: '/logos/full_brands/1_brand_11.png',
    serviceTag: 'Omnichannel Scale',
  },
  {
    label: 'Average Order Value (AOV)',
    value: '+18%',
    clientName: 'Espira Gems',
    clientLogo: '/logos/full_brands/1_brand_7.png',
    serviceTag: 'Shopify Plus Bundles',
  },
  {
    label: 'Organic Visitor Growth',
    value: '3x',
    clientName: 'The Skin Beneath',
    clientLogo: '/logos/full_brands/1_brand_12.png',
    serviceTag: 'Search Everywhere & AEO',
  },
  {
    label: 'Bounce Rate Reduction',
    value: '-20%',
    clientName: 'Radboards',
    clientLogo: '/logos/full_brands/1_brand_6.png',
    serviceTag: 'Sub-1s Storefront Build',
  },
];
