import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './gsap/register';
import { prefersReducedMotion } from './gsap/utils';

// Chrome
import { Header } from './components/chrome/Header';
import { Footer } from './components/chrome/Footer';
import { AuditModal } from './components/chrome/AuditModal';
import { CustomCursor } from './components/ui/CustomCursor';

// Main Page Sections
import { Hero } from './components/hero/Hero';
import { ProofStrip } from './components/proof/ProofStrip';
import { ReceiptsSection } from './components/receipts/ReceiptsSection';
import { Calculator } from './components/calculator/Calculator';
import { TestimonialsMarquee } from './components/testimonials/TestimonialsMarquee';
import { TrustedBy } from './components/trusted/TrustedBy';
import { HowWeWork } from './components/process/HowWeWork';
import { HorizontalMarqueeText } from './components/common/HorizontalMarqueeText';
import { ThreeWaysIn } from './components/pricing/ThreeWaysIn';
import { WhoWeDontWorkWith } from './components/fit/WhoWeDontWorkWith';
import { TechPartners } from './components/partners/TechPartners';
import { ClosingCTA } from './components/cta/ClosingCTA';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>('audit');

  useEffect(() => {
    // Initialize Lenis smooth scroll synced to ScrollTrigger
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenAudit = (type?: string) => {
    if (type) setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bone text-ink font-body selection:bg-violet selection:text-bone">
      {/* Valmax Interactive Fluid Magnetic Cursor */}
      <CustomCursor />

      {/* Global Header */}
      <Header onOpenAudit={handleOpenAudit} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenAudit={handleOpenAudit} />
        <ProofStrip />
        <ReceiptsSection />
        <Calculator onOpenAudit={handleOpenAudit} />
        <TestimonialsMarquee />
        <TrustedBy />
        <HowWeWork />
        <HorizontalMarqueeText />
        <ThreeWaysIn onOpenAudit={handleOpenAudit} />
        <WhoWeDontWorkWith />
        <TechPartners />
        <ClosingCTA onOpenAudit={handleOpenAudit} />
      </main>

      {/* Global Display Footer */}
      <Footer onOpenAudit={handleOpenAudit} />

      {/* Interactive Growth Audit / Booking Modal */}
      <AuditModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
};

export default App;
