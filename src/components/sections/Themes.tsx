import { useState, useEffect, useRef } from 'react';
import { TerminalMock } from '../ui/TerminalMock';
import { exchangeThemes, ThemeDef } from '../../data/themes';
import { useThemeMode } from '../../context/ThemeModeContext';

function ExchangeIcon({ theme }: { theme: ThemeDef; accent: string }) {
  if (theme.id === 'tradegate') {
    return (
      <svg className="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2"/>
        <path d="M12 5.5L17.5 8.5V13.5L12 16.5L6.5 13.5V8.5L12 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <line x1="9" y1="10" x2="9" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="8" x2="12" y2="15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="15" y1="10" x2="15" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );
  }

  if (theme.id === 'mexc') {
    return (
      <svg className="w-full h-full rounded-full" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#2864FF"/>
        <path d="M6 21.5L11.5 10.5L16 17.5L20.5 10.5L26 21.5H21.5L17.5 14L16 16.5L14.5 14L10.5 21.5H6Z" fill="white"/>
      </svg>
    );
  }

  if (theme.logoUrl) {
    return (
      <img 
        src={theme.logoUrl} 
        alt={`${theme.name} logo`}
        className="w-full h-full object-contain rounded-full"
        loading="eager"
      />
    );
  }

  if (theme.id === 'mochi-web3') {
    return (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="15" fill="#A855F7" fillOpacity="0.2"/>
        <path d="M12 10C10.9 10 10 10.9 10 12V20C10 21.1 10.9 22 12 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10H12ZM16 12.5L19.5 16L16 19.5L12.5 16L16 12.5Z" fill="#A855F7"/>
      </svg>
    );
  }

  return <div className="w-5 h-5 rounded-full bg-brand-gold"></div>;
}

export function Themes() {
  const [activeTheme, setActiveTheme] = useState(exchangeThemes[0]);
  const { mode } = useThemeMode();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-children');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  const activeColors = mode === 'light' ? activeTheme.light : activeTheme.dark;

  return (
    <section 
      id="themes" 
      className="relative py-20 sm:py-24 section-divider overflow-hidden flex flex-col justify-center scroll-mt-16" 
      ref={sectionRef}
    >
      {/* Background accent matching active theme */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] opacity-15 pointer-events-none transition-colors duration-700" 
        style={{ backgroundColor: activeColors.accent }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-14 reveal">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3">8 Authentic Themes</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary">
            Matches Your Exchange.<br/>
            <span className="text-txt-muted">Zero Context Switching.</span>
          </h2>
          <p className="mt-4 text-txt-secondary text-base max-w-2xl mx-auto">
            TradeGate automatically inherits the color schemes, surfaces, and styling of top Tier-1 crypto exchanges with native Dark and Light mode support.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center">
          {/* Swatches Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 stagger-children">
            {exchangeThemes.map((theme) => {
              const isActive = activeTheme.id === theme.id;
              const themeColors = mode === 'light' ? theme.light : theme.dark;

              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setActiveTheme(theme)}
                  className={`theme-swatch group relative flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? 'scale-[1.03] shadow-xl' 
                      : 'hover:border-brand-gold/40 hover:scale-[1.01]'
                  }`}
                  style={{ 
                    backgroundColor: themeColors.bgSurface,
                    borderColor: isActive ? themeColors.accent : undefined,
                    boxShadow: isActive 
                      ? `0 8px 30px ${themeColors.accent}25` 
                      : mode === 'light' ? '0 2px 10px rgba(0,0,0,0.04)' : 'none'
                  }}
                >
                  <div 
                    className="w-11 h-11 rounded-full mb-3 shadow-lg flex items-center justify-center relative p-1.5 transition-transform duration-300 group-hover:scale-110" 
                    style={{ backgroundColor: `${themeColors.accent}20`, border: `1.5px solid ${themeColors.accent}60` }}
                  >
                    <ExchangeIcon theme={theme} accent={themeColors.accent} />
                  </div>
                  <span className="text-sm font-bold text-txt-primary mb-0.5">{theme.name}</span>
                  <span className="text-[11px] text-txt-muted font-medium">{theme.subtitle}</span>
                  
                  {/* Active indicator line */}
                  <div 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 rounded-t-full transition-all duration-300 ${
                      isActive ? 'w-10 opacity-100' : 'w-0 opacity-0'
                    }`}
                    style={{ backgroundColor: themeColors.accent }}
                  ></div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Preview */}
          <div className="reveal-right hidden lg:block">
            <div className="relative">
              {/* Highlight effect behind mock */}
              <div 
                className="absolute inset-0 blur-2xl opacity-25 transition-colors duration-500 rounded-[2rem]"
                style={{ backgroundColor: activeColors.accent }}
              ></div>
              <TerminalMock theme={activeTheme} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
