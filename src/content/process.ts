export interface ProcessStep {
  number: string;
  label: string;
  detail: string;
}

export const PROCESS_HEADER = {
  h1: 'Data In. Design Out. Start Conversions from Day One.',
  subtitle: 'No creative exploration phase. No Delays. No 40-slide decks. We build for conversions',
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    label: 'Data In',
    detail: 'Mobile first, Conversion first, Perfected',
  },
  {
    number: '02',
    label: 'Design Out',
    detail: "Unlimited rounds of iteration until it's right. Every element earns its place. Conversion architecture built around your customer journey",
  },
  {
    number: '03',
    label: 'Shipped Live',
    detail: "Hand-coded, speed-optimised, QA'd on multiple devices. We don't call it done until the numbers do.",
  },
];
