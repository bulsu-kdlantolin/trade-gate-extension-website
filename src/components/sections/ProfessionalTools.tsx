import { useEffect, useRef } from 'react';

export function ProfessionalTools() {
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
      const elements = sectionRef.current.querySelectorAll('.reveal, .stagger-children');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="tools" 
      className="relative py-20 sm:py-28 border-t border-dark-border min-h-screen flex flex-col justify-center scroll-mt-16" 
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16 reveal">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3">Tool Ecosystem</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary">
            Built for Serious Execution.<br/>
            <span className="text-txt-muted">A Complete Trader Terminal Inside Your Browser.</span>
          </h2>
          <p className="mt-4 text-txt-secondary text-base max-w-2xl mx-auto">
            Explore authentic interactive snapshots of TradeGate&apos;s professional side panel features.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          
          {/* SNAPSHOT 1: Session Market Clock */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-5 space-y-3.5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-txt-primary">Session Market Clock</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-goldDim text-brand-gold border border-brand-gold/20 font-bold">
                  LIVE STATUS
                </span>
              </div>
              <p className="text-xs text-txt-secondary leading-relaxed mb-3">
                Live visual session status for global currency and futures markets with local UTC conversion.
              </p>
            </div>

            {/* Extension UI Snapshot */}
            <div className="bg-dark-elevation border border-dark-border rounded-xl p-3 space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between p-1.5 rounded bg-dark-base border border-dark-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-trade-green animate-pulse"></span>
                  <span className="font-bold text-txt-primary">London Session</span>
                </div>
                <span className="text-trade-green text-[10px] font-bold">OPEN · 08:00-16:30</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-dark-base border border-dark-border">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-trade-green animate-pulse"></span>
                  <span className="font-bold text-txt-primary">New York Session</span>
                </div>
                <span className="text-trade-green text-[10px] font-bold">OPEN · 13:30-20:00</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-dark-base/50 border border-dark-border/50 text-txt-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-txt-muted"></span>
                  <span>Tokyo Session</span>
                </div>
                <span className="text-[10px]">CLOSED · 00:00 UTC</span>
              </div>
            </div>
          </div>

          {/* SNAPSHOT 2: 10,000+ Asset Database */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-5 space-y-3.5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-txt-primary">10,000+ Asset Database</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-goldDim text-brand-gold border border-brand-gold/20 font-bold">
                  MULTI-MARKET
                </span>
              </div>
              <p className="text-xs text-txt-secondary leading-relaxed mb-3">
                Instant search for Crypto, Forex pairs, US Equities, Global Indices, and Futures with real-time pip and point math.
              </p>
            </div>

            {/* Extension UI Snapshot */}
            <div className="bg-dark-elevation border border-dark-border rounded-xl p-3 space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center justify-between p-1.5 rounded bg-dark-base border border-brand-gold/30 text-txt-primary">
                <span className="font-bold text-brand-gold">BTCUSDT</span>
                <span className="text-txt-muted text-[10px]">Crypto · 0.001 Lot Step</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-dark-base/70 border border-dark-border text-txt-secondary">
                <span className="font-bold">EURUSD</span>
                <span className="text-txt-muted text-[10px]">Forex · $10.00 / Pip</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-dark-base/70 border border-dark-border text-txt-secondary">
                <span className="font-bold">XAUUSD (Gold)</span>
                <span className="text-txt-muted text-[10px]">Commodity · 100oz Contract</span>
              </div>
            </div>
          </div>

          {/* SNAPSHOT 3: Calendar Heatmap */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-5 space-y-3.5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-txt-primary">Calendar Heatmap</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-goldDim text-brand-gold border border-brand-gold/20 font-bold">
                  HEATMAP
                </span>
              </div>
              <p className="text-xs text-txt-secondary leading-relaxed mb-3">
                Visual trading calendar mapping daily P&amp;L, win streaks, and execution discipline at a glance.
              </p>
            </div>

            {/* Extension UI Snapshot */}
            <div className="bg-dark-elevation border border-dark-border rounded-xl p-3 space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-txt-muted">
                <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span>
              </div>
              <div className="grid grid-cols-5 gap-1.5 text-center font-mono text-[10px] font-bold">
                <div className="bg-trade-greenDim border border-trade-green/40 text-trade-green rounded p-1.5">
                  +$420
                </div>
                <div className="bg-trade-greenDim border border-trade-green/40 text-trade-green rounded p-1.5">
                  +$185
                </div>
                <div className="bg-trade-redDim border border-trade-red/40 text-trade-red rounded p-1.5">
                  -$90
                </div>
                <div className="bg-trade-greenDim border border-trade-green/40 text-trade-green rounded p-1.5">
                  +$640
                </div>
                <div className="bg-trade-greenDim border border-trade-green/40 text-trade-green rounded p-1.5">
                  +$310
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-txt-muted pt-1">
                <span>Week Net: <strong className="text-trade-green">+$1,465</strong></span>
                <span>Win Rate: <strong className="text-txt-primary">80% (4/5)</strong></span>
              </div>
            </div>
          </div>

          {/* SNAPSHOT 4: PDF & CSV Exporter */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-5 space-y-3.5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-txt-primary">PDF &amp; CSV Exporter</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-goldDim text-brand-gold border border-brand-gold/20 font-bold">
                  AUDITING
                </span>
              </div>
              <p className="text-xs text-txt-secondary leading-relaxed mb-3">
                One-click clean PDF journals and CSV exports with setup grades, error labels, and full execution timestamps.
              </p>
            </div>

            {/* Extension UI Snapshot */}
            <div className="bg-dark-elevation border border-dark-border rounded-xl p-3 space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between text-xs text-txt-primary font-bold">
                <span>TradeGate_Audit_Log.pdf</span>
                <span className="text-brand-gold text-[10px]">READY</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center pt-1">
                <div className="p-1 rounded bg-dark-base border border-dark-border">
                  <span className="text-txt-muted block text-[9px]">TRADES</span>
                  <span className="font-bold text-txt-primary">142</span>
                </div>
                <div className="p-1 rounded bg-dark-base border border-dark-border">
                  <span className="text-txt-muted block text-[9px]">PROFIT FACTOR</span>
                  <span className="font-bold text-trade-green">2.42</span>
                </div>
                <div className="p-1 rounded bg-dark-base border border-dark-border">
                  <span className="text-txt-muted block text-[9px]">ADHERENCE</span>
                  <span className="font-bold text-brand-gold">94.8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* SNAPSHOT 5: Social Share Performance Cards */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-5 space-y-3.5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-txt-primary">Social Share Cards</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-goldDim text-brand-gold border border-brand-gold/20 font-bold">
                  COMMUNITY
                </span>
              </div>
              <p className="text-xs text-txt-secondary leading-relaxed mb-3">
                Generate clean, branded trade cards formatted for Discord, Telegram, and X (Twitter) with verified P&amp;L proof.
              </p>
            </div>

            {/* Extension UI Snapshot */}
            <div className="bg-dark-elevation border border-brand-gold/30 rounded-xl p-3 space-y-1.5 font-mono text-[11px] shadow-lg">
              <div className="flex items-center justify-between border-b border-dark-border pb-1">
                <span className="font-bold text-brand-gold text-xs">BTCUSDT · LONG</span>
                <span className="text-trade-green font-bold text-xs">+$406.25 (+3.25R)</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-txt-muted pt-0.5">
                <span>Setup: <strong className="text-txt-primary">Grade A+ Confluence</strong></span>
                <span>Rule Pass: <strong className="text-brand-gold">4/4</strong></span>
              </div>
            </div>
          </div>

          {/* SNAPSHOT 6: Deposit & Withdraw Tracker */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-5 space-y-3.5 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-txt-primary">Capital &amp; Balance Tracker</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-goldDim text-brand-gold border border-brand-gold/20 font-bold">
                  CAPITAL MGMT
                </span>
              </div>
              <p className="text-xs text-txt-secondary leading-relaxed mb-3">
                Track external funding, withdrawals, and net portfolio growth with 100% offline local privacy.
              </p>
            </div>

            {/* Extension UI Snapshot */}
            <div className="bg-dark-elevation border border-dark-border rounded-xl p-3 space-y-2 font-mono text-[11px]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-txt-muted">Current Balance:</span>
                <span className="font-bold text-txt-primary text-sm">$15,350.00</span>
              </div>
              <div className="w-full bg-dark-base rounded-full h-1.5 overflow-hidden border border-dark-border">
                <div className="bg-brand-gold h-full rounded-full w-[78%]"></div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-txt-muted">
                <span>Net Growth: <strong className="text-trade-green">+$5,350 (+53.5%)</strong></span>
                <span>Max DD: <strong className="text-trade-red">-4.2%</strong></span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
