import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }
  };

  const handleNavAnchor = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      const navbarHeight = 64;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'features', label: 'Features' },
    { id: 'themes', label: '8 Exchange Themes' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'tools', label: 'Tools Ecosystem' },
    { id: 'privacy-trust', label: 'Privacy Architecture' },
  ];

  return (
    <footer className="border-t border-dark-border bg-dark-surface pt-4 pb-3 sm:pt-5 sm:pb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-3.5 border-b border-dark-border items-start">
          
          {/* Column 1: Brand & Summary */}
          <div className="space-y-1.5">
            <div className="h-6 flex items-center">
              <Link 
                to="/" 
                onClick={handleLogoClick}
                className="flex items-center gap-2 group" 
                aria-label="TradeGate Home"
              >
                <svg className="w-4 h-4 text-brand-gold group-hover:text-brand-goldHover transition-colors" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
                  <path d="M12 5.5L17.5 8.5V13.5L12 16.5L6.5 13.5V8.5L12 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  <line x1="9" y1="10" x2="9" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="12" y1="8" x2="12" y2="15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="15" y1="10" x2="15" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="font-bold text-xs text-txt-primary tracking-tight group-hover:text-brand-gold transition-colors">TradeGate</span>
              </Link>
            </div>
            <p className="text-[11px] text-txt-secondary leading-relaxed">
              The local-first pre-trade discipline gate, risk calculator, and trading journal for Chromium browsers.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-1.5">
            <div className="h-6 flex items-center">
              <h4 className="text-[11px] font-bold font-mono uppercase tracking-wider text-txt-primary">Product</h4>
            </div>
            <ul className="space-y-1 text-[11px] text-txt-secondary">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`/#${item.id}`}
                    onClick={(e) => handleNavAnchor(e, item.id)}
                    className="hover:text-brand-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Community & Support */}
          <div className="space-y-1.5">
            <div className="h-6 flex items-center">
              <h4 className="text-[11px] font-bold font-mono uppercase tracking-wider text-txt-primary">Community</h4>
            </div>
            <ul className="space-y-1 text-[11px] text-txt-secondary">
              <li>
                <Link to="/support" className="hover:text-brand-gold transition-colors">
                  Support &amp; Donate
                </Link>
              </li>
              <li>
                <a 
                  href="https://chromewebstore.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-brand-gold transition-colors"
                >
                  Chrome Web Store
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@tradegate.app" 
                  className="hover:text-brand-gold transition-colors"
                >
                  support@tradegate.app
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Security */}
          <div className="space-y-1.5">
            <div className="h-6 flex items-center">
              <h4 className="text-[11px] font-bold font-mono uppercase tracking-wider text-txt-primary">Legal</h4>
            </div>
            <ul className="space-y-1 text-[11px] text-txt-secondary">
              <li>
                <Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Clean Copyright Message with precise ultra-compact margin */}
        <div className="mt-2.5 text-[11px] text-txt-muted text-center font-medium">
          &copy; 2026 TradeGate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
