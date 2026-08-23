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
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.reveal, .stagger-children');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef} 
      className="relative py-20 sm:py-28 section-divider min-h-screen flex flex-col justify-center scroll-mt-16 overflow-hidden"
    >
      {/* Dynamic ambient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-trade-green/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 bg-brand-goldDim border border-brand-gold/25 rounded-full px-4 py-1.5 text-xs text-brand-gold font-semibold mb-4">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            MECHANICAL DISCIPLINE ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary leading-tight">
            Stop Breaking Your Rules.<br/>
            <span className="text-brand-gold">Enforce Hard Execution Limits.</span>
          </h2>
          <p className="mt-4 text-txt-secondary text-sm sm:text-base leading-relaxed">
            95% of retail trading losses stem from psychological collapse — revenge trading, oversized risk, and breaking your own playbook. TradeGate acts as a physical gate between your impulses and market orders.
          </p>
        </div>

        {/* Psychological Flaw vs TradeGate Mechanical Solution */}
        <div className="grid sm:grid-cols-3 gap-5 stagger-children">
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-2xl">😤</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-trade-redDim border border-trade-red/30 text-trade-red font-bold">
                ELIMINATED
              </span>
            </div>
            <h3 className="text-base font-bold text-txt-primary">Revenge &amp; FOMO Orders</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              Jumping into random setups after a loss or chasing green candles is physically blocked until mandatory checklist rules are verified.
            </p>
            <div className="pt-2 border-t border-dark-border flex items-center gap-1.5 text-[11px] text-trade-green font-semibold">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Hard Pre-Trade Locked Gate</span>
            </div>
          </div>

          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🎰</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-trade-redDim border border-trade-red/30 text-trade-red font-bold">
                ELIMINATED
              </span>
            </div>
            <h3 className="text-base font-bold text-txt-primary">Mental Math Sizing Errors</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              Guessing lot sizes or risking 5% instead of 1% during high volatility is replaced by instant multi-market position calculations.
            </p>
            <div className="pt-2 border-t border-dark-border flex items-center gap-1.5 text-[11px] text-trade-green font-semibold">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>Fixed % &amp; Dollar Formula Sizing</span>
            </div>
          </div>

          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3 shadow-lg relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-2xl">📉</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-trade-redDim border border-trade-red/30 text-trade-red font-bold">
                ELIMINATED
              </span>
            </div>
            <h3 className="text-base font-bold text-txt-primary">Unchecked Repeat Mistakes</h3>
            <p className="text-xs text-txt-secondary leading-relaxed">
              Making the same execution mistakes without realizing it. Automatic error tagging identifies exactly where you leak capital.
            </p>
            <div className="pt-2 border-t border-dark-border flex items-center gap-1.5 text-[11px] text-trade-green font-semibold">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>FOMO &amp; Early Exit Error Tagging</span>
            </div>
          </div>
        </div>

        {/* 6 Core Execution Pillars Bento Grid */}
        <div className="space-y-6">
          <div className="text-center reveal">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-txt-primary tracking-tight">
              A Complete Discipline &amp; Journal Engine
            </h3>
            <p className="text-xs sm:text-sm text-txt-secondary mt-1">
              Engineered from the ground up for serious, profitable execution consistency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            
            {/* Pillar 1: Pre-Trade Gate & Rule Builder */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-goldDim flex items-center justify-center text-brand-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-txt-primary">Pre-Trade Discipline Gate</h4>
                <p className="text-txt-secondary text-xs leading-relaxed">
                  Configure mandatory rules vs confluence criteria per strategy. The execution button stays physically locked until all mandatory conditions are verified green.
                </p>
              </div>
              <div className="bg-dark-elevation p-3 rounded-xl border border-dark-border space-y-1.5 font-mono text-[10px]">
                <div className="flex items-center justify-between text-trade-green font-bold">
                  <span>✓ HTF Trend Alignment</span>
                  <span>MANDATORY</span>
                </div>
                <div className="flex items-center justify-between text-trade-green font-bold">
                  <span>✓ Risk &lt;= 1.0% Confirmed</span>
                  <span>MANDATORY</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: Multi-Market Lot Sizing Calculator */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-goldDim flex items-center justify-center text-brand-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <h4 className="text-lg font-bold text-txt-primary">Multi-Market Lot Sizing</h4>
                <p className="text-txt-secondary text-xs leading-relaxed">
                  Instant position sizing and dollar risk calculation for Crypto, Forex pairs, Equities, Indices, and Futures with accurate pip and point multipliers.
                </p>
              </div>
              <div className="bg-dark-elevation p-3 rounded-xl border border-dark-border space-y-1 font-mono text-[10px]">
                <div className="flex items-center justify-between">
                  <span className="text-txt-muted">Lot Size:</span>
                  <span className="font-bold text-brand-gold">0.3125 BTC</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-txt-muted">Dollar Risk:</span>
                  <span className="font-bold text-trade-red">$125.00 (1.0%)</span>
                </div>
              </div>
            </div>

            {/* Pillar 3: Strategy-Isolated Performance Engine */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-goldDim flex items-center justify-center text-brand-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <h4 className="text-lg font-bold text-txt-primary">Strategy-Isolated Portfolios</h4>
                <p className="text-txt-secondary text-xs leading-relaxed">
                  Never mix scalping stats with swing trades. Create isolated strategy profiles with custom checklists, independent balance tracking, and isolated win rates.
                </p>
              </div>
              <div className="bg-dark-elevation p-3 rounded-xl border border-dark-border flex items-center justify-between font-mono text-[10px]">
                <span className="text-txt-primary font-bold">ICT Silver Bullet</span>
                <span className="text-trade-green font-bold">78.4% Win Rate</span>
              </div>
            </div>

            {/* Pillar 4: Setup Grading & Error Attribution */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-goldDim flex items-center justify-center text-brand-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
                </div>
                <h4 className="text-lg font-bold text-txt-primary">Automated Setup Grading</h4>
                <p className="text-txt-secondary text-xs leading-relaxed">
                  Trades are automatically classified into Grade A+, A, B, or C based on confluence scores. Tag behavioral errors like FOMO, Early Exit, or Moved SL.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] font-bold bg-trade-greenDim text-trade-green px-2 py-0.5 rounded border border-trade-green/30">Grade A+</span>
                <span className="text-[10px] font-bold bg-trade-redDim text-trade-red px-2 py-0.5 rounded border border-trade-red/30">FOMO Tag</span>
                <span className="text-[10px] font-bold bg-dark-elevation text-txt-muted px-2 py-0.5 rounded border border-dark-border">Moved SL</span>
              </div>
            </div>

            {/* Pillar 5: Rich Visual Journal & Lightbox */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-goldDim flex items-center justify-center text-brand-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <h4 className="text-lg font-bold text-txt-primary">Chart Screenshot Lightbox</h4>
                <p className="text-txt-secondary text-xs leading-relaxed">
                  Attach trading charts via Image URL, File Upload, or direct Ctrl+V clipboard paste. Inspect full-resolution setups inside the floating zoom lightbox modal.
                </p>
              </div>
              <div className="bg-dark-elevation p-3 rounded-xl border border-dark-border flex items-center justify-between text-[10px] font-mono">
                <span className="text-brand-gold font-bold">Ctrl+V Chart Paste</span>
                <span className="text-txt-muted">High-Res Zoom</span>
              </div>
            </div>

            {/* Pillar 6: Executive Analytics & Calendar Heatmap */}
            <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-4 shadow-xl flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-goldDim flex items-center justify-center text-brand-gold">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                </div>
                <h4 className="text-lg font-bold text-txt-primary">Executive Analytics Dashboard</h4>
                <p className="text-txt-secondary text-xs leading-relaxed">
                  Comprehensive performance metrics at a glance: Net P&amp;L ($ and R), Profit Factor, Grade A+ Win Rate, Adherence %, dynamic equity curve, and daily calendar heatmap.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-1 text-center font-mono text-[9px]">
                <div className="bg-dark-elevation p-1.5 rounded border border-dark-border">
                  <span className="text-txt-muted block">WIN RATE</span>
                  <span className="font-bold text-trade-green">68.5%</span>
                </div>
                <div className="bg-dark-elevation p-1.5 rounded border border-dark-border">
                  <span className="text-txt-muted block">PROFIT FACTOR</span>
                  <span className="font-bold text-brand-gold">2.42</span>
                </div>
                <div className="bg-dark-elevation p-1.5 rounded border border-dark-border">
                  <span className="text-txt-muted block">ADHERENCE</span>
                  <span className="font-bold text-txt-primary">94.8%</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
