import { useEffect, useRef } from 'react';

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal, .stagger-children');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div id="features" ref={sectionRef} className="scroll-mt-16">
      {/* Problem Agitation Section */}
      <section className="relative py-20 sm:py-28 border-t border-dark-border min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal w-full">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4">Sound Familiar?</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8 leading-tight text-txt-primary">
            You knew the setup was wrong.<br/>
            <span className="text-txt-muted">You took the trade anyway.</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto stagger-children">
            <div className="bg-dark-surface border border-dark-border rounded-xl p-5 space-y-3 shadow-lg">
              <div className="text-3xl">😤</div>
              <p className="text-sm font-bold text-txt-primary">Revenge Trading</p>
              <p className="text-xs text-txt-muted leading-relaxed">Losing a trade and immediately jumping back in to "make it back" — doubling your drawdown.</p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-xl p-5 space-y-3 shadow-lg">
              <div className="text-3xl">🎰</div>
              <p className="text-sm font-bold text-txt-primary">FOMO Entries</p>
              <p className="text-xs text-txt-muted leading-relaxed">Chasing a green candle that's already moved 5% because you're afraid to miss out.</p>
            </div>
            <div className="bg-dark-surface border border-dark-border rounded-xl p-5 space-y-3 shadow-lg">
              <div className="text-3xl">📏</div>
              <p className="text-sm font-bold text-txt-primary">Broken Rules</p>
              <p className="text-xs text-txt-muted leading-relaxed">You wrote the rules. You know the rules. But in the heat of the moment, discipline vanishes.</p>
            </div>
          </div>
          <p className="mt-10 text-base sm:text-lg text-txt-secondary max-w-2xl mx-auto leading-relaxed">
            What if your trading terminal <strong className="text-txt-primary">physically locked execution</strong> until every single rule was verified?
          </p>
        </div>
      </section>

      {/* Core Features Showcase */}
      <section className="relative py-20 sm:py-28 border-t border-dark-border min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-14 reveal">
            <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3">Core Features</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary">
              Everything You Need.<br/>
              <span className="text-txt-muted">Nothing You Don't.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 stagger-children">
            {/* Pre-Trade Gate */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-goldDim flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-txt-primary">Pre-Trade Gate</h3>
              <p className="text-txt-secondary text-sm leading-relaxed">
                Define strict entry checklists per strategy. The submit button remains <strong className="text-txt-primary">locked</strong> until all mandatory rules are checked green. Zero excuses. Zero impulse orders.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Mandatory Checklist</span>
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Locked Submit</span>
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Custom Rules</span>
              </div>
            </div>

            {/* Risk Calculator */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-goldDim flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <h3 className="text-xl font-bold text-txt-primary">Risk Calculator &amp; Lot Sizing</h3>
              <p className="text-txt-secondary text-sm leading-relaxed">
                Enter your risk percentage, entry price, and stop loss for instantaneous lot sizing, dollar risk, and target R-multiples across Crypto, Forex, Stocks, Indices, and Futures.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Position Sizing</span>
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">R-Multiples</span>
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Multi-Market</span>
              </div>
            </div>

            {/* Trade Journal */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-goldDim flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
              </div>
              <h3 className="text-xl font-bold text-txt-primary">Trade Journal &amp; Calendar</h3>
              <p className="text-txt-secondary text-sm leading-relaxed">
                Every trade logs automatically with full context — symbol, prices, P&amp;L, screenshots, session tags, execution error labels (FOMO, Moved SL), and a quality grade from A+ to C.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Calendar View</span>
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Error Tags</span>
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Grade System</span>
              </div>
            </div>

            {/* Analytics */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-goldDim flex items-center justify-center">
                <svg className="w-6 h-6 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              </div>
              <h3 className="text-xl font-bold text-txt-primary">Analytics Dashboard</h3>
              <p className="text-txt-secondary text-sm leading-relaxed">
                Executive metrics at a glance — Net P&amp;L, Win Rate, Profit Factor, Rule Adherence %, and Grade A+ Win Rate. Plus an equity curve chart and setup quality breakdown to sharpen your edge.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">KPI Cards</span>
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Equity Curve</span>
                <span className="text-xs font-bold bg-dark-elevation text-txt-muted px-2.5 py-1 rounded-lg border border-dark-border">Share Cards</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
