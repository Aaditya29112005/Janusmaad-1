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

        {/* Plain text grid on base background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
          {/* Column 1: Not for you if */}
          <div className="space-y-6 bg-white border border-hairline rounded-3xl p-8 shadow-sm">
            <h3 className="font-display font-bold text-xl text-ink flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <span>Not for you if:</span>
            </h3>
            <ul className="space-y-4 text-ink/80 text-base leading-relaxed">
              {FIT_CONTENT.notForYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 border-l-2 border-red-500/30 pl-4 py-1">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: For you if */}
          <div className="space-y-6 bg-white border border-hairline rounded-3xl p-8 shadow-sm">
            <h3 className="font-display font-bold text-xl text-ink flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-teal" />
              <span>For you if:</span>
            </h3>
            <ul className="space-y-4 text-ink/80 text-base leading-relaxed">
              {FIT_CONTENT.forYou.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 border-l-2 border-teal/40 pl-4 py-1">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
