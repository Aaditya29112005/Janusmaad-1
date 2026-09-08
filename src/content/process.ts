export interface ProcessStep {
  number: string;
  step: string;
  week: string;
  label: string;
  subtitle: string;
  detail: string;
  bullets: string[];
}

export const PROCESS_HEADER = {
  h1: 'HOW WE WORK',
  subtitle: 'A disciplined 3-week framework from initial alignment to full-throttle execution.',
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    step: 'Step 1: Discover & Assess',
    week: 'Week 1',
    label: 'Discover & Assess',
    subtitle: 'Align on goals, spot the gaps and gather what we need.',
    detail: 'Align on goals, spot the gaps and gather what we need.',
    bullets: [
      'Understand goals, pain points and outcomes',
      'Review current setup, tools and strategies',
      'Sign NDA and gather access to key platforms and data',
    ],
  },
  {
    number: '02',
    step: 'Step 2: Analyse & Strategise',
    week: 'Week 2',
    label: 'Analyse & Strategise',
    subtitle: 'Dive into the data to create a tailored game plan.',
    detail: 'Dive into the data to create a tailored game plan.',
    bullets: [
      'Deep dive into data, technology and user behaviour',
      'Identify challenges, gaps and high-impact opportunities',
      'Present a tailored strategy roadmap',
    ],
  },
  {
    number: '03',
    step: 'Step 3: Align & Execute',
    week: 'Week 3',
    label: 'Align & Execute',
    subtitle: 'Bring the plan to life with precision and purpose.',
    detail: 'Bring the plan to life with precision and purpose.',
    bullets: [
      'Define team roles, resources and execution plan',
      'Share clear deliverables and expected outcomes',
      'Finalise agreement and kick off the project',
    ],
  },
];
