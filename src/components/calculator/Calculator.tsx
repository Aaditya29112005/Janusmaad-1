import React, { useState, useEffect, useRef } from 'react';
import { gsap } from '../../gsap/register';
import { prefersReducedMotion } from '../../gsap/utils';
import { Button } from '../ui/Button';
import { TrendingUp, Info, Zap } from 'lucide-react';

interface CalculatorProps {
  onOpenAudit: (type?: string) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenAudit }) => {
  // Inputs: Spend (₹1L to ₹1Cr), ROAS (1 to 20), Lift (10 to 100)
  const [adSpend, setAdSpend] = useState<number>(500000); // Default ₹5L
  const [currentROAS, setCurrentROAS] = useState<number>(3); // Default 3x
  const [expectedLift, setExpectedLift] = useState<number>(20); // Default +20%

  const [displayValues, setDisplayValues] = useState({
    extraMonthly: 0,
    revBefore: 0,
    revAfter: 0,
    netGain12m: 0,
  });

  const proxyRef = useRef({
    extraMonthly: 0,
    revBefore: 0,
    revAfter: 0,
    netGain12m: 0,
  });

  const targetRevBefore = adSpend * currentROAS;
  const targetRevAfter = targetRevBefore * (1 + expectedLift / 100);
  const targetExtraMonthly = targetRevAfter - targetRevBefore;
  const targetNetGain12m = targetExtraMonthly * 12;

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplayValues({
        extraMonthly: targetExtraMonthly,
        revBefore: targetRevBefore,
        revAfter: targetRevAfter,
        netGain12m: targetNetGain12m,
      });
      return;
    }

    gsap.to(proxyRef.current, {
      extraMonthly: targetExtraMonthly,
      revBefore: targetRevBefore,
      revAfter: targetRevAfter,
      netGain12m: targetNetGain12m,
      duration: 0.5,
      ease: 'power2.out',
      onUpdate: () => {
        setDisplayValues({
          extraMonthly: Math.round(proxyRef.current.extraMonthly),
          revBefore: Math.round(proxyRef.current.revBefore),
          revAfter: Math.round(proxyRef.current.revAfter),
          netGain12m: Math.round(proxyRef.current.netGain12m),
        });
      },
    });
  }, [adSpend, currentROAS, expectedLift, targetExtraMonthly, targetRevBefore, targetRevAfter, targetNetGain12m]);

  const formatINR = (val: number): string => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)}Cr`;
    } else if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)}L`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" className="py-24 px-4 sm:px-8 bg-bone border-b border-hairline relative">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Section Heading H1 & Rewritten H2 */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-violet text-xs font-display font-bold uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5 text-teal" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-ink tracking-tight">
            Do the Math
          </h1>
          <h2 className="text-mute text-lg sm:text-xl font-medium">
            Slide your numbers. Watch your revenue unlock. The math speaks before we do.
          </h2>
        </div>

        {/* Dashboard Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-hairline rounded-3xl p-6 sm:p-10 shadow-xl">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-6">
            {/* Slider 1: Monthly Ad Spend (₹1L to ₹1Cr) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="ad-spend-slider" className="font-display font-bold text-ink">
                  Monthly Ad Spend
                </label>
                <span className="text-violet font-display font-bold text-xl tabular-nums">
                  {formatINR(adSpend)}
                </span>
              </div>
              <input
                id="ad-spend-slider"
                type="range"
                min={100000} // ₹1L
                max={10000000} // ₹1Cr
                step={100000} // ₹1L steps
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                aria-valuemin={100000}
                aria-valuemax={10000000}
                aria-valuenow={adSpend}
                aria-valuetext={`${formatINR(adSpend)} monthly ad spend`}
              />
              <div className="flex justify-between text-xs text-mute font-mono">
                <span>₹1L</span>
                <span>₹50L</span>
                <span>₹1Cr</span>
              </div>
            </div>

            {/* Slider 2: Current ROAS */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="roas-slider" className="font-display font-bold text-ink">
                  Current ROAS
                </label>
                <span className="text-violet font-display font-bold text-xl tabular-nums">
                  {currentROAS}x
                </span>
              </div>
              <input
                id="roas-slider"
                type="range"
                min={1}
                max={20}
                step={0.5}
                value={currentROAS}
                onChange={(e) => setCurrentROAS(Number(e.target.value))}
                aria-valuemin={1}
                aria-valuemax={20}
                aria-valuenow={currentROAS}
                aria-valuetext={`${currentROAS}x return on ad spend`}
              />
              <div className="flex justify-between text-xs text-mute font-mono">
                <span>1x</span>
                <span>10x</span>
                <span>20x</span>
              </div>
            </div>

            {/* Slider 3: Our Promise on Lift (10% to 100%) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="lift-slider" className="font-display font-bold text-ink">
                  Our promise on lift
                </label>
                <span className="text-teal font-display font-bold text-xl tabular-nums">
                  +{expectedLift}%
                </span>
              </div>
              <input
                id="lift-slider"
                type="range"
                min={10}
                max={100}
                step={5}
                value={expectedLift}
                onChange={(e) => setExpectedLift(Number(e.target.value))}
                aria-valuemin={10}
                aria-valuemax={100}
                aria-valuenow={expectedLift}
                aria-valuetext={`+${expectedLift}% expected lift`}
              />
              <div className="flex justify-between text-xs text-mute font-mono">
                <span>10%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Right Column: Output Results Panel */}
          <div className="lg:col-span-5 bg-bone border border-hairline rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Extra Revenue Per Month */}
              <div>
                <div className="text-data-label text-mute text-xs uppercase mb-1 font-bold">
                  Extra Revenue / Month
                </div>
                <div className="font-display font-bold text-4xl sm:text-5xl text-violet tabular-nums">
                  {formatINR(displayValues.extraMonthly)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-hairline text-sm">
                <div>
                  <div className="text-mute text-xs">Revenue Before</div>
                  <div className="font-display font-bold text-ink tabular-nums">
                    {formatINR(displayValues.revBefore)}
                  </div>
                </div>
                <div>
                  <div className="text-mute text-xs">Revenue After</div>
                  <div className="font-display font-bold text-ink tabular-nums">
                    {formatINR(displayValues.revAfter)}
                  </div>
                </div>
              </div>

              {/* 12-Month Net Gain */}
              <div className="pt-4 border-t border-hairline">
                <div className="text-data-label text-mute text-xs uppercase mb-1 flex items-center gap-1 font-bold">
                  <TrendingUp className="w-3.5 h-3.5 text-teal" />
                  <span>12-Month Net Revenue Gain</span>
                </div>
                <div className="font-display font-bold text-3xl sm:text-4xl text-teal tabular-nums">
                  +{formatINR(displayValues.netGain12m)}
                </div>
              </div>

              {/* Verdict Line */}
              <div className="bg-white border border-hairline rounded-xl p-4 text-xs text-ink leading-relaxed font-medium">
                At a <span className="text-teal font-bold">+{expectedLift}%</span> lift, your brand unlocks <span className="text-violet font-bold">{formatINR(displayValues.netGain12m)}</span> in extra annual revenue without spending another dollar on ads.
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => onOpenAudit('audit')}
              >
                Claim this growth in your audit
              </Button>
            </div>
          </div>
        </div>

        {/* Honest Disclosure Line */}
        <div className="flex items-center gap-2 text-xs text-mute justify-center text-center">
          <Info className="w-4 h-4 text-violet shrink-0" />
          <span>This is a model, not a forecast. The audit replaces these assumptions with your actual data.</span>
        </div>
      </div>
    </section>
  );
};
