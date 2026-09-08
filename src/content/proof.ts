export interface ProofStat {
  label: string;
  value: string;
  sub?: string;
}

export const PROOF_STATS: ProofStat[] = [
  { label: 'Performance Media ROAS', value: '4x', sub: 'Across Meta, Google & TikTok' },
  { label: 'Cost Per Lead (CPL)', value: '-30%', sub: 'Average CPL reduction' },
  { label: 'Qualified Leads Volume', value: '3x', sub: '3X lead volume increase' },
  { label: 'Retention Media ROAS', value: '7x', sub: 'Klaviyo & WhatsApp API' },
  { label: 'Client Revenue Growth', value: '+53%' },
  { label: 'Average Order Value (AOV)', value: '+18%', sub: 'Dynamic bundle upsells' },
  { label: 'Organic Visitor Growth', value: '3x', sub: '3X traffic & search lift' },
  { label: 'Bounce Rate Reduction', value: '-20%', sub: 'Sub-second speed tuning' },
];
