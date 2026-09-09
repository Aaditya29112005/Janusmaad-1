import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NAV_DROPDOWNS, NAV_FLAT } from '../../content/navigation';
import { Button } from '../ui/Button';
import { gsap, ScrollTrigger } from '../../gsap/register';

interface HeaderProps {
  onOpenAudit: (type?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAudit }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -40',
        onEnter: () => {
          gsap.to(el, {
            backgroundColor: 'rgba(246, 243, 236, 0.95)',
            backdropFilter: 'blur(12px)',
            borderColor: 'rgba(7, 11, 26, 0.12)',
            paddingTop: '0.85rem',
            paddingBottom: '0.85rem',
            duration: 0.3,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to(el, {
            backgroundColor: 'transparent',
            backdropFilter: 'blur(0px)',
            borderColor: 'transparent',
            paddingTop: '1.5rem',
            paddingBottom: '1.5rem',
            duration: 0.3,
            ease: 'power2.out',
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-40 py-6 px-4 sm:px-8 border-b border-transparent transition-all duration-300 bg-bone/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Crisp Brand Logo Image Only */}
        <a href="#home" className="group flex items-center focus-visible:outline-violet">
          <img src="/logo.png" alt="Janusmaad Digital" className="h-9 sm:h-10 object-contain hover:scale-105 transition-transform" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm" aria-label="Main Navigation">
          {NAV_DROPDOWNS.map((group) => (
            <div
              key={group.title}
              className="relative"
              onMouseEnter={() => setActiveDropdown(group.title)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className="flex items-center gap-1 text-ink/90 hover:text-violet py-2 font-medium focus-visible:outline-violet transition-colors"
                aria-expanded={activeDropdown === group.title}
              >
                <span>{group.title}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === group.title ? 'rotate-180 text-violet' : 'text-mute'}`} />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === group.title && (
                <div className="absolute top-full left-0 w-80 bg-white border border-hairline rounded-2xl p-4 shadow-xl space-y-3 mt-1 animate-in fade-in duration-150">
                  <div className="text-data-label text-violet uppercase text-xs mb-1 font-bold">
                    {group.title} Capabilities
                  </div>
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group/item p-2.5 rounded-xl hover:bg-bone transition-colors"
                    >
                      <div className="font-display font-medium text-ink group-hover/item:text-violet transition-colors text-sm">
                        {item.name}
                      </div>
                      <div className="text-mute text-xs mt-0.5 line-clamp-2">
                        {item.description}
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Flat Links */}
          {NAV_FLAT.map((item) => {
            if (item.href === '#audit-modal') {
              return (
                <button
                  key={item.name}
                  onClick={() => onOpenAudit('audit')}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-bone hover:bg-violet text-xs font-display font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 border border-ink/20 cursor-pointer"
                  title="Request a Free Growth Audit"
                >
                  <span className="w-2 h-2 rounded-full bg-[#0ae448] animate-pulse shadow-[0_0_8px_#0ae448]" />
                  <span>{item.name}</span>
                  <span className="text-[#0ae448] font-bold">→</span>
                </button>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('#') ? '_blank' : undefined}
                rel={item.href.startsWith('#') ? 'noopener noreferrer' : undefined}
                className="text-ink/90 hover:text-violet font-medium transition-colors focus-visible:outline-violet"
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center space-x-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenAudit('call')}
          >
            Book a call
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-ink focus-visible:outline-violet"
          aria-label="Toggle mobile navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-hairline p-6 space-y-6 animate-in slide-in-from-top duration-200 shadow-xl">
          {NAV_DROPDOWNS.map((group) => (
            <div key={group.title} className="space-y-2">
              <div className="text-data-label text-violet text-xs uppercase font-bold">{group.title}</div>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {group.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-ink/90 text-sm font-medium hover:text-violet py-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-hairline space-y-3">
            {NAV_FLAT.map((item) => {
              if (item.href === '#audit-modal') {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAudit('audit');
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-ink text-bone hover:bg-violet font-display font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0ae448] animate-pulse shadow-[0_0_8px_#0ae448]" />
                    <span>{item.name}</span>
                    <span className="text-[#0ae448] font-bold">→</span>
                  </button>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('#') ? '_blank' : undefined}
                  rel={item.href.startsWith('#') ? 'noopener noreferrer' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-ink text-base font-medium hover:text-violet"
                >
                  {item.name}
                </a>
              );
            })}

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAudit('call');
                }}
              >
                Book a call
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
