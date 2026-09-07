import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

interface ClosingCTAProps {
  onOpenAudit: (type?: string) => void;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({ onOpenAudit }) => {
  const [url, setUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setSubmitted(true);
  };

  return (
    <section className="py-32 px-4 sm:px-8 bg-bone border-b border-hairline relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-10 z-10 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-hairline shadow-sm text-violet font-display text-xs font-bold uppercase tracking-widest">
          <Zap className="w-3.5 h-3.5 text-teal" />
          <span>Zero Risk Audit</span>
        </div>

        {/* Display Headline */}
        <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-ink tracking-tight leading-[1.05]">
          Lets BUILD landing pages that earn their keep<span className="text-violet">.</span>
        </h2>

        {/* Input Field + Button */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 bg-white border border-hairline p-2 rounded-2xl shadow-xl focus-within:border-violet transition-colors"
          >
            <input
              type="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Send your URL (e.g. https://yourbrand.com)"
              className="w-full bg-transparent px-4 py-3.5 text-ink placeholder:text-mute text-sm sm:text-base focus:outline-none"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full sm:w-auto shrink-0 group"
            >
              <span>Get audit</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        ) : (
          <div className="max-w-md mx-auto bg-white border border-hairline p-6 rounded-2xl space-y-3 shadow-lg">
            <div className="inline-flex items-center gap-2 text-teal font-display font-bold">
              <CheckCircle2 className="w-5 h-5" />
              <span>URL Submitted for Audit!</span>
            </div>
            <p className="text-mute text-xs">
              We are analyzing <span className="text-ink font-medium">{url}</span>. Click below to complete your time slot selection.
            </p>
            <Button
              onClick={() => onOpenAudit('audit')}
              variant="primary"
              size="sm"
              className="w-full"
            >
              Select Call Timeslot
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
