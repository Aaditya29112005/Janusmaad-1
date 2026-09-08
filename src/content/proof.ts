export interface ProofStat {
  label: string;
  value: string;
  sub?: string;
}

export const PROOF_STATS: ProofStat[] = [
  { label: 'Performance Media ROAS', value: '4x' },
  { label: 'Cost Per Lead (CPL)', value: '-30%' },
  { label: 'Qualified Leads Volume', value: '3x' },
  { label: 'Retention Media ROAS', value: '7x' },
  { label: 'Client Revenue Growth', value: '+53%' },
  { label: 'Average Order Value (AOV)', value: '+18%' },
  { label: 'Organic Visitor Growth', value: '3x' },
  { label: 'Bounce Rate Reduction', value: '-20%' },
];
