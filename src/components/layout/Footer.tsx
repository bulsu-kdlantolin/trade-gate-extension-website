import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-dark-border bg-dark-surface py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-6 border-b border-dark-border">
          
          {/* Column 1: Brand & Summary */}
          <div className="space-y-3">
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 group" 
              aria-label="TradeGate Home"
            >
              <svg className="w-6 h-6 text-brand-gold group-hover:text-brand-goldHover transition-colors" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
                <path d="M12 5.5L17.5 8.5V13.5L12 16.5L6.5 13.5V8.5L12 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                <line x1="9" y1="10" x2="9" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="12" y1="8" x2="12" y2="15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="15" y1="10" x2="15" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="font-bold text-base text-txt-primary tracking-tight">TradeGate</span>
            </Link>
            <p className="text-xs text-txt-secondary leading-relaxed">
              The local-first pre-trade discipline gate, risk calculator, and trading journal terminal for Chromium browsers.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-txt-primary">Product</h4>
            <ul className="space-y-1.5 text-xs text-txt-secondary">
              <li>
                <a href="/#features" className="hover:text-brand-gold transition-colors">Features</a>
              </li>
              <li>
                <a href="/#themes" className="hover:text-brand-gold transition-colors">8 Exchange Themes</a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-brand-gold transition-colors">How It Works</a>
              </li>
              <li>
                <a href="/#tools" className="hover:text-brand-gold transition-colors">Tools Ecosystem</a>
              </li>
              <li>
                <a href="/#privacy-trust" className="hover:text-brand-gold transition-colors">Privacy Architecture</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Support */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-txt-primary">Community</h4>
            <ul className="space-y-1.5 text-xs text-txt-secondary">
              <li>
                <Link to="/support" className="hover:text-brand-gold transition-colors">
                  Support / Donate
                </Link>
              </li>
              <li>
                <a href="https://chrome.google.com/webstore" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">
                  Chrome Web Store
                </a>
              </li>
              <li>
                <span className="text-txt-muted">100% Free &amp; Open</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Security */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-txt-primary">Legal</h4>
            <ul className="space-y-1.5 text-xs text-txt-secondary">
              <li>
                <Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
              </li>
              <li>
                <span className="text-txt-muted text-[11px] block">Manifest V3 Audited</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Clean Copyright Message without excess padding */}
        <div className="mt-5 text-xs text-txt-muted text-center font-medium">
          &copy; 2026 TradeGate. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
