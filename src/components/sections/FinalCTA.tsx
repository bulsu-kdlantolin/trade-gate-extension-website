import { useEffect, useRef } from 'react';

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-14 sm:py-18 section-divider overflow-hidden flex flex-col justify-center">
      {/* Dynamic Background gold aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 reveal">
        <div className="inline-flex items-center gap-2 bg-brand-goldDim border border-brand-gold/25 rounded-full px-4 py-1.5 text-xs text-brand-gold font-semibold">
          100% Free · Chromium Compatible
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-txt-primary">
          Ready to Build Serious<br/>
          <span className="text-brand-gold">Trading Discipline?</span>
        </h2>

        <p className="text-txt-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Install TradeGate in seconds. No credit card, no sign-up, no servers. Just pure, uncompromised execution discipline.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1">
          <a 
            href="#" 
            className="btn-cta inline-flex items-center gap-2.5 bg-brand-gold text-black font-bold px-8 py-3.5 rounded-xl text-sm sm:text-base w-full sm:w-auto justify-center shadow-xl hover:opacity-95 transition-opacity"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Add to Chrome — It&apos;s Free
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-txt-muted pt-2">
          <span>Compatible with Chrome, Brave, Edge &amp; Opera</span>
        </div>
      </div>
    </section>
  );
}
