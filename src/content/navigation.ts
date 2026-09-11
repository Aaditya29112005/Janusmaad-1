export interface NavDropdownGroup {
  title: string;
  items: { name: string; href: string; description: string }[];
}

export interface NavFlatItem {
  name: string;
  href: string;
}

export const NAV_DROPDOWNS: NavDropdownGroup[] = [
  {
    title: 'Acquire',
    items: [
      { name: 'Performance Marketing', href: '#acquire-performance', description: 'Meta, Google & TikTok campaigns built for high return on ad spend.' },
      { name: 'SEO (Search Everywhere Optimisation)', href: '#acquire-seo', description: 'Scale organic search visibility across Google, YouTube, and AI engines.' },
      { name: 'SMM (Social Media Marketing)', href: '#acquire-smm', description: 'Organic and paid content strategy engineered to build brand authority.' },
    ],
  },
  {
    title: 'Convert',
    items: [
      { name: 'Build (Design and Dev)', href: '#convert-build', description: 'High-speed bespoke landing pages and custom Shopify storefronts.' },
      { name: 'CRO (Conversion Rate Optimisation)', href: '#convert-cro', description: 'Rigorous A/B testing and data science to maximize visitor revenue.' },
    ],
  },
  {
    title: 'Retain',
    items: [
      { name: 'Retention Marketing', href: '#retain-marketing', description: 'Automated email, SMS, and WhatsApp funnels that increase customer LTV.' },
    ],
  },
];

export const NAV_FLAT: NavFlatItem[] = [
  { name: 'Receipts', href: '#receipts' },
  { name: 'About', href: '#about' },
  { name: 'Get Free Growth Audit', href: '#audit-modal' },
];
