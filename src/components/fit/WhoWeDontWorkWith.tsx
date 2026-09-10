import React from 'react';
import { FIT_CONTENT } from '../../content/fit';
import { XCircle, CheckCircle } from 'lucide-react';

export const WhoWeDontWorkWith: React.FC = () => {
  return (
    <section id="fit" className="py-24 px-4 sm:px-8 bg-bone border-b border-hairline select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Center-aligned Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-ink tracking-tight">
            {FIT_CONTENT.heading}
          </h2>
          <p className="text-mute text-lg sm:text-xl">
            {FIT_CONTENT.subheading}
          </p>
        </div>

        {/* 2-Column Grid with Premium Consistent Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 items-stretch">
          {/* Column 1: Not for you if */}
          <div className="bg-white border border-red-200/80 rounded-3xl p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink flex items-center gap-3">
                <span className="p-2.5 bg-red-50 border border-red-200 rounded-2xl shrink-0">
                  <XCircle className="w-6 h-6 text-red-600" />
                </span>
                <span>Not for you if:</span>
              </h3>
              <ul className="space-y-5 text-ink/90 text-lg sm:text-xl leading-relaxed font-medium">
                {FIT_CONTENT.notForYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 border-l-2 border-red-300/60 pl-4 py-1">
                    <span className="text-red-500 font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: For you if */}
          <div className="bg-white border border-teal/30 rounded-3xl p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300">
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink flex items-center gap-3">
                <span className="p-2.5 bg-teal/10 border border-teal/30 rounded-2xl shrink-0">
                  <CheckCircle className="w-6 h-6 text-teal" />
                </span>
                <span>For you if:</span>
              </h3>
              <ul className="space-y-5 text-ink/90 text-lg sm:text-xl leading-relaxed font-medium">
                {FIT_CONTENT.forYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 border-l-2 border-teal/40 pl-4 py-1">
                    <span className="text-teal font-bold shrink-0">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
