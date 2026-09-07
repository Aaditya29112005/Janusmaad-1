import { ALL_38_CLIENTS } from './clientDatabase';

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

const WORK_IMAGES: Record<string, string> = {
  'the-credit-lane': '/work/thecreditlane.jpg',
  'shagun-sweets': '/work/shagunsweets.jpg',
  'frasmetics': '/work/frasmetics.jpg',
  'vanika-jewels': '/work/vanikajewels.jpg',
  'kicky-and-perky': '/work/kickyperky.jpg',
  'espira-gems': '/work/espiragems.jpg',
  'wildmoss': '/work/wildmoss.jpg',
  'paperbark-camp': '/work/paperbarkcamp.jpg',
  'himalayan-panacea': '/work/himalayanpanacea.jpg',
  'gaadi-web': '/work/gaadiweb.jpg',
  'the-happy-home-broker': '/work/thehappyhomebroker.jpg',
  'nippon-naturals': '/work/nipponnaturals.jpg',
  'hand-studio': '/work/handstudio.jpg',
  'bombay-bloomers': '/work/bombaybloomers.jpg',
  'isha-and-ishana': '/work/ishaandishana.jpg',
  'rudrasetu': '/work/rudrasetu.jpg',
  'pro4security': '/work/pro4security.jpg',
  'mothers-touch': '/work/motherstouch.jpg',
  'kidzfirstudio': '/work/kidzfirstudio.jpg',
  'soniva': '/work/soniva.jpg',
  'selective-guru': '/work/selectiveguru.jpg',
  'radboards': '/work/radboards.jpg',
  'the-skin-beneath': '/work/theskinbeneath.jpg',
  'yubi1': '/work/yubi1.jpg',
  'too-bold-to-confirm': '/work/toobold.jpg',
  'kasuti-kavana': '/work/kasutikavana.jpg',
  'shaffa': '/work/shaffa.jpg',
  'caness': '/work/caness.jpg',
  'azoneh-treasures': '/work/azonehtreasures.jpg',
  'mr-jewels': '/work/mrjewels.jpg',
  'ugrashoes': '/work/ugrashoes.jpg',
  'basil-pet-care': '/work/basilpetcare.jpg',
  'clay-and-glaze': '/work/clayandglaze.jpg',
  'rangoli': '/work/rangoli.jpg',
  'qibo': '/work/qibo.jpg',
  'soiree-club': '/work/soireeclub.jpg',
  'ecoo-global': '/work/ecooglobal.jpg',
  'cuddle-buds': '/work/cuddlebuds.jpg',
};

const DEFAULT_IMAGES = [
  '/work/thecreditlane.jpg',
  '/work/radboards.jpg',
  '/work/kickyperky.jpg',
  '/work/caness.jpg',
  '/work/nipponnaturals.jpg',
  '/work/rudrasetu.jpg',
  '/work/shaffa.jpg',
];

export const LIVE_WORKS: CaseStudy[] = ALL_38_CLIENTS.map((c, idx) => ({
  id: c.id,
  clientName: c.name,
  client: c.name,
  category: c.category,
  metricLabel: c.primaryMetric.label,
  metricValue: c.primaryMetric.value,
  liveUrl: c.url,
  imageSrc: WORK_IMAGES[c.id] || DEFAULT_IMAGES[idx % DEFAULT_IMAGES.length],
  description: `${c.category} growth architecture & performance optimization for ${c.name}. Delivered: ${c.services.join(', ')}.`,
  tags: c.services.map(s => `${s} Optimized`),
  timeframe: 'Real Traffic Window',
  deltas: [{ label: c.primaryMetric.label, value: c.primaryMetric.value }],
}));

export const CASE_STUDIES: CaseStudy[] = LIVE_WORKS;
export const RECEIPTS_CATEGORIES = [
  'ALL', 
  'FINANCIAL SERVICES', 
  'E-COMMERCE & LIFESTYLE', 
  'FINE JEWELRY', 
  'APPAREL & FASHION', 
  'HOSPITALITY', 
  'BEAUTY & WELLNESS', 
  'LOCAL SERVICES'
];
