import React from 'react';
import { FIT_CONTENT } from '../../content/fit';
import { XCircle, CheckCircle } from 'lucide-react';

export const WhoWeDontWorkWith: React.FC = () => {
  return (
    <section id="fit" className="py-24 px-4 sm:px-8 bg-bone border-b border-hairline">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-data-label text-violet uppercase tracking-wider font-bold">
            Candour Up Front
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-ink tracking-tight">
            {FIT_CONTENT.heading}
          </h2>
          <p className="text-mute text-base sm:text-lg">
            {FIT_CONTENT.subheading}
          </p>
        </div>

        {/* Litmus styled 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 items-stretch">
          {/* Column 1: Not for you if (Light Blue) */}
          <div
            className="litmus-card-1 relative rounded-[24px] p-8 space-y-6 flex flex-col justify-between overflow-hidden text-[#07101E]"
            style={{
              background: 'linear-gradient(135deg, #A8D5FF 0%, #5B8FBD 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-6">
              <h3 className="font-display font-extrabold text-2xl text-[#07101E] flex items-center gap-3">
                <span className="p-2 bg-red-500/20 border border-red-500/40 rounded-xl">
                  <XCircle className="w-6 h-6 text-red-600" />
                </span>
                <span>Not for you if:</span>
              </h3>
              <ul className="space-y-4 text-[#07101E] text-base leading-relaxed font-medium">
                {FIT_CONTENT.notForYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 border-l-2 border-[#07101E]/30 pl-4 py-1">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: For you if (Medium Blue) */}
          <div
            className="litmus-card-2 relative rounded-[24px] p-8 space-y-6 flex flex-col justify-between overflow-hidden text-white"
            style={{
              background: 'linear-gradient(135deg, #5DAFFF 0%, #1D5B9A 100%)',
              boxShadow: '0 28px 56px -18px rgba(0, 0, 0, 0.30), inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.25)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none rounded-[24px]" />
            <div className="relative z-10 space-y-6">
              <h3 className="font-display font-extrabold text-2xl text-white flex items-center gap-3 drop-shadow-xs">
                <span className="p-2 bg-white/20 border border-white/40 rounded-xl backdrop-blur-md">
                  <CheckCircle className="w-6 h-6 text-white" />
                </span>
                <span>For you if:</span>
              </h3>
              <ul className="space-y-4 text-white text-base leading-relaxed font-medium">
                {FIT_CONTENT.forYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 border-l-2 border-white/40 pl-4 py-1">
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
