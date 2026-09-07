export interface ProofStat {
  label: string;
  value: string;
  sub?: string;
}

export const PROOF_STATS: ProofStat[] = [
  { label: 'Client Revenue Generated', value: '$42M+', sub: 'Measured net impact' },
  { label: 'Average CVR Lift', value: '+48%', sub: 'Within 30 days of launch' },
  { label: 'Average Order Value (AOV)', value: '+34%', sub: 'Dynamic bundle upsells' },
  { label: 'CAC Reduction', value: '-31%', sub: 'Paid acquisition efficiency' },
  { label: 'Average ROAS Gain', value: '2.4x', sub: 'Across Meta & Google' },
  { label: 'Mobile LCP Speed', value: 'Sub-1.2s', sub: 'Performance score 95+' },
];
