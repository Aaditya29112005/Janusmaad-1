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
import { ScrollRailMarquee } from './components/common/ScrollRailMarquee';
import { CursorFollowList } from './components/common/CursorFollowList';
import { ThreeWaysIn } from './components/pricing/ThreeWaysIn';
import { WhoWeDontWorkWith } from './components/fit/WhoWeDontWorkWith';
import { TechPartners } from './components/partners/TechPartners';
import { ClosingCTA } from './components/cta/ClosingCTA';

// Dedicated Capability Page Component
import { CapabilityPage, type CapabilityId } from './components/services/CapabilityPage';

const VALID_CAPABILITIES: CapabilityId[] = [
  'acquire-performance',
  'acquire-seo',
  'acquire-smm',
  'convert-build',
  'convert-cro',
  'retain-marketing',
  'retain-cep',
  'retain-cdp',
  'receipts',
  'about',
  'pricing'
];

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>('audit');
  const [activeCapability, setActiveCapability] = useState<CapabilityId | null>(null);

  useEffect(() => {
    // Listen to hash changes for standalone capability page routing
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (VALID_CAPABILITIES.includes(hash as CapabilityId)) {
        setActiveCapability(hash as CapabilityId);
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setActiveCapability(null);
        if (hash && hash !== 'home') {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        } else if (hash === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger whenever activeCapability changes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    if (prefersReducedMotion()) return () => clearTimeout(timer);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, [activeCapability]);

  const handleOpenAudit = (type?: string) => {
    if (type) setModalType(type);
    setModalOpen(true);
  };

  const handleNavigateHome = () => {
    window.location.hash = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateCapability = (id: CapabilityId) => {
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-bone text-ink font-body selection:bg-violet selection:text-bone">
      {/* Valmax Interactive Fluid Magnetic Cursor */}
      <CustomCursor />

      {/* Global Header */}
      <Header onOpenAudit={handleOpenAudit} />

      {/* Main Content View */}
      <main id="main-content">
        {activeCapability ? (
          /* Dedicated Standalone Capability Page View */
          <CapabilityPage
            capabilityId={activeCapability}
            onNavigateHome={handleNavigateHome}
            onNavigateCapability={handleNavigateCapability}
            onOpenAudit={handleOpenAudit}
          />
        ) : (
          /* Clean Agency Homepage Flow */
          <>
            <Hero onOpenAudit={handleOpenAudit} />
            <ProofStrip />
            <ReceiptsSection />
            <Calculator onOpenAudit={handleOpenAudit} />
            <TestimonialsMarquee />
            <TrustedBy />
            <CursorFollowList />
            <HowWeWork />
            <ScrollRailMarquee />
            <HorizontalMarqueeText />
            <ThreeWaysIn onOpenAudit={handleOpenAudit} />
            <WhoWeDontWorkWith />
            <TechPartners />
            <ClosingCTA onOpenAudit={handleOpenAudit} />
          </>
        )}
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
