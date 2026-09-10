export interface Testimonial {
  id: string;
  brandName: string;
  brandLogo: string;
  stars: number;
  quote: string;
  founderName: string;
  founderRole: string;
  avatar?: string;
  metric?: string;
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
    brandLogo: '/testimonials/testimonial_logo_1.png',
    stars: 5,
    quote: 'Choosing JanusMAAD was hands down the best decision I made for my brand.\n\nWith JanusMAAD you can fully rely on Parag and his team - they are responsive, accountable, and truly dedicated to delivering results.\n\nHighly recommended!',
    founderName: 'Nishant Pandey',
    founderRole: 'Founder - Rudrasetu',
    metric: 'BEST PERFORMANCE MARKETING PARTNER',
  },
  {
    id: '2',
    brandName: 'Desert Ship Hospitality',
    brandLogo: '/testimonials/testimonial_logo_2.png',
    stars: 5,
    quote: 'Our experience has been nothing short of a pleasure - effective and seamless!\n\nOur search rankings, organic traffic, and even bookings have all seen a strong lift.\n\nCommunication has been clear, the process well-organised, and the team incredibly responsive.\n\n10/10 would recommend if you’re looking to grow your online visibility.',
    founderName: 'Phoung Pham',
    founderRole: 'Marketing Executive - Desert Ship Hospitality',
    metric: 'STRONG TRAFFIC & BOOKINGS LIFT',
  },
  {
    id: '3',
    brandName: 'Kicky & Perky',
    brandLogo: '/testimonials/testimonial_logo_3.png',
    stars: 5,
    quote: "Professional and genuinely easy to work with.\n\nFrom improving our online presence to running targeted ad campaigns, they’ve handled everything with great care and creativity.\n\nIt's rare to find an agency that combines technical know-how with such a personal touch.",
    founderName: 'Yogesh Tiwari',
    founderRole: 'E-commerce Manager - Kicky & Perky',
    metric: 'HIGH-CONVERTING AD CAMPAIGNS',
  },
  {
    id: '4',
    brandName: "Dog Mom’s Kitchen",
    brandLogo: '/testimonials/testimonial_logo_4.png',
    stars: 5,
    quote: 'The team demonstrated unmatched professionalism and extraordinary talent.\nParag, in particular, was absolute magic to work with - his expert guidance, unwavering support and genuine passion for our success turned the entire journey into a seamless joy.\n\nThank you, Janusmaad, for crafting a masterclass of a website for us.',
    founderName: 'Sakshi Pandey',
    founderRole: "Founder - Dog Mom’s Kitchen",
    metric: 'MASTERCLASS WEBSITE',
  },
  {
    id: '5',
    brandName: 'Clay & Glaze',
    brandLogo: '/testimonials/testimonial_logo_5.png',
    stars: 5,
    quote: 'Extremely prompt and punctual with great attention to detail and understanding what you need. As a founder, they make sure you never feel that your company could lack anything in achieving the results you want.\n\nHighly recommend Janusmaad.',
    founderName: 'Anukriti Saraogi',
    founderRole: 'Founder - Clay & Glaze',
    metric: 'PROMPT & PUNCTUAL RESULTS',
  },
  {
    id: '6',
    brandName: 'Ugra Shoes',
    brandLogo: '/testimonials/testimonial_logo_6.png',
    stars: 5,
    quote: 'Their strategy was holistic and thoughtful, grounded in insights rather than assumptions.\n\nIncredibly supportive in setting up foundational pieces, something most agencies overlook. As a startup founder, I appreciated their responsiveness, patience, and clarity - always available, always collaborative. It felt like having a partner, not just a service provider.',
    founderName: 'Debanti Roy',
    founderRole: 'Founder - Ugra Shoes',
    metric: 'INSIGHT-GROUNDED STRATEGY',
  },
  {
    id: '7',
    brandName: 'True Pillars Realty',
    brandLogo: '/testimonials/testimonial_logo_7.png',
    stars: 5,
    quote: 'The team was always on top of things, ensuring that they delivered on every promise they made. What really stood out to me is their honesty and transparency. Janusmaad never cut corners or misled us in any way.\n\nThey’re reliable, trustworthy, and truly dedicated to helping you succeed.',
    founderName: 'Vivek Dwivedi',
    founderRole: 'Founder - True Pillars Realty',
    metric: 'HONEST & TRUSTWORTHY',
  },
  {
    id: '8',
    brandName: 'PaperBark Camp',
    brandLogo: '/testimonials/testimonial_logo_8.png',
    stars: 5,
    quote: 'Parag and the team at Janus MAAD have been really great to work with, motivated to keep things on track so that we can focus on our business, and really good at shining a light on the complexities of doing digital advertising accurately.\n\nHighly recommend.',
    founderName: 'Ben Hutchings',
    founderRole: 'Co-founder - PaperBark Camp',
    metric: 'ACCURATE DIGITAL ADVERTISING',
  },
  {
    id: '9',
    brandName: 'Wildmoss',
    brandLogo: '/testimonials/testimonial_logo_9.png',
    stars: 5,
    quote: 'The expert team of Janusmaad understands the brand requirement & aesthetics in full depth.\n\nThe conduct is very professional with on-time work, regular updates & self initiatives.\n\nHighly recommended for any startup.',
    founderName: 'Disha Agarwal',
    founderRole: 'Founder - Wildmoss',
    metric: 'DEEP BRAND AESTHETICS',
  },
  {
    id: '10',
    brandName: 'Yube 1',
    brandLogo: '/testimonials/testimonial_logo_10.png',
    stars: 5,
    quote: 'Fantastic service by Janusmaad!\n\nThey were responsive, reliable, and delivered exactly as promised.',
    founderName: 'Dharun Kumar Sathasivam',
    founderRole: 'Sales and Marketing - Yube 1',
    metric: 'DELIVERED AS PROMISED',
  },
];

export const TESTIMONIAL_TICKER_ITEMS: TickerMetricItem[] = [
  { brandName: 'RUDRASETU', metric: 'BEST PERFORMANCE MARKETING PARTNER' },
  { brandName: 'DESERT SHIP HOSPITALITY', metric: 'STRONG TRAFFIC & BOOKINGS LIFT' },
  { brandName: 'KICKY & PERKY', metric: 'HIGH-CONVERTING AD CAMPAIGNS' },
  { brandName: "DOG MOM'S KITCHEN", metric: 'MASTERCLASS WEBSITE' },
  { brandName: 'CLAY & GLAZE', metric: 'PROMPT & PUNCTUAL' },
  { brandName: 'UGRA SHOES', metric: 'HOLISTIC GROWTH STRATEGY' },
  { brandName: 'TRUE PILLARS REALTY', metric: 'HONEST & TRANSPARENT' },
  { brandName: 'PAPERBARK CAMP', metric: 'ACCURATE DIGITAL ADVERTISING' },
  { brandName: 'WILDMOSS', metric: 'DEEP BRAND AESTHETICS' },
  { brandName: 'YUBE 1', metric: 'DELIVERED EXACTLY AS PROMISED' },
];

