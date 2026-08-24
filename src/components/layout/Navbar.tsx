import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useThemeMode } from '../../context/ThemeModeContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, toggleMode } = useThemeMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

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
    closeMenu();
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
    closeMenu();
  };

  const navLinks = [
    { id: 'features', label: 'Features' },
    { id: 'themes', label: 'Themes' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'tools', label: 'Tools' },
    { id: 'privacy-trust', label: 'Privacy' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-dark-base/90 backdrop-blur-md border-dark-border shadow-lg' 
          : 'bg-dark-base/50 backdrop-blur-sm border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo and Brand Name */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 group cursor-pointer" 
          aria-label="TradeGate Home"
        >
          <svg className="w-7 h-7 text-brand-gold group-hover:text-brand-goldHover transition-colors duration-150" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.15"/>
            <path d="M12 5.5L17.5 8.5V13.5L12 16.5L6.5 13.5V8.5L12 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
            <line x1="9" y1="10" x2="9" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="12" y1="8" x2="12" y2="15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="15" y1="10" x2="15" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-lg font-bold text-txt-primary tracking-tight group-hover:text-brand-gold transition-colors duration-150">TradeGate</span>
        </Link>

        {/* Desktop Nav with Smooth Hover Underline Effect */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              onClick={(e) => handleNavAnchor(e, link.id)}
              className="group relative py-1 text-txt-muted hover:text-txt-primary font-medium transition-colors duration-150"
            >
              {link.label}
              <span className="absolute bottom-[-1px] left-0 w-0 h-[2px] bg-brand-gold rounded-full transition-all duration-200 group-hover:w-full shadow-[0_0_6px_rgba(229,184,42,0.6)]"></span>
            </a>
          ))}

          {/* Circular Theme Toggle Button */}
          <button
            type="button"
            onClick={(e) => toggleMode(e)}
            className="w-9 h-9 rounded-full border border-dark-border bg-dark-elevation text-brand-gold hover:border-brand-gold/60 hover:bg-dark-surface hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center shadow-md active:scale-95 group"
            aria-label={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} mode`}
            title={`Switch to ${mode === 'dark' ? 'Light' : 'Dark'} mode`}
          >
            {mode === 'dark' ? (
              <Moon className="w-4 h-4 text-brand-gold fill-brand-gold/20 group-hover:rotate-12 transition-transform duration-300" />
            ) : (
              <Sun className="w-4 h-4 text-brand-gold fill-brand-gold/25 group-hover:rotate-45 transition-transform duration-300" />
            )}
          </button>

          {/* Persistent Navbar CTA Button */}
          <a
            href="https://chromewebstore.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-gold hover:bg-brand-goldHover text-black font-bold text-xs shadow-md transition-transform"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Add to Chrome</span>
          </a>
        </div>

        {/* Mobile menu button and circular theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={(e) => toggleMode(e)}
            className="w-8 h-8 rounded-full border border-dark-border bg-dark-elevation text-brand-gold flex items-center justify-center active:scale-90"
            aria-label="Toggle theme"
          >
            {mode === 'dark' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
          </button>
          
          <a
            href="https://chromewebstore.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded bg-brand-gold text-black font-bold text-[11px] flex items-center gap-1 shadow-sm"
          >
            <span>Add</span>
          </a>

          <button onClick={toggleMenu} type="button" className="p-1.5 text-txt-muted hover:text-txt-primary transition-colors" aria-label="Open menu">
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-dark-border bg-dark-base/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={(e) => handleNavAnchor(e, link.id)}
                className="block text-sm py-1.5 text-txt-secondary hover:text-brand-gold font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-dark-border">
              <a
                href="https://chromewebstore.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-brand-gold hover:bg-brand-goldHover text-black font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Add to Chrome — Free</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
