import { useEffect, useRef } from 'react';

interface MicroUiItem {
  label: string;
  status: string;
  type?: 'check' | 'highlight' | 'risk' | 'profit' | 'grade' | 'clean' | 'storage' | 'sync';
}

interface PlaybookStep {
  num: string;
  phase: string;
  title: string;
  desc: string;
  badge: string;
  badgeColor: string;
  microUi: MicroUiItem[];
  footnote: string;
}

export function HowItWorks() {
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

  const steps: PlaybookStep[] = [
    {
      num: "01",
      phase: "PHASE 01 · DISCIPLINE GATE",
      title: "Pass the Discipline Gate",
      desc: "Your pre-configured rules appear as a mandatory checklist before every entry. The submit button stays physically locked until all mandatory criteria pass.",
      badge: "Zero Impulse Orders",
      badgeColor: "text-brand-gold bg-brand-goldDim border-brand-gold/30",
      microUi: [
        { label: "HTF Trend Confirmed (4H/1H)", status: "PASS", type: "check" },
        { label: "Risk <= 1.0% Account Limit", status: "PASS", type: "check" },
        { label: "Stop Loss at Structural High/Low", status: "PASS", type: "check" },
        { label: "No High-Impact News in 30m", status: "PASS", type: "check" }
      ],
      footnote: "Mandatory gate locks execution until 4/4 rules are verified"
    },
    {
      num: "02",
      phase: "PHASE 02 · POSITION SIZING",
      title: "Calculate Precision Sizing",
      desc: "Enter your entry, stop loss, and target prices. TradeGate calculates exact lot sizes, dollar risk amount, and target R-multiples across Crypto, Forex, and Futures.",
      badge: "Multi-Market Math",
      badgeColor: "text-trade-green bg-trade-greenDim border-trade-green/30",
      microUi: [
        { label: "Calculated Lot Size", status: "0.3125 BTC", type: "highlight" },
        { label: "Dollar Risk Amount", status: "$125.00 (1.0%)", type: "risk" },
        { label: "Target Reward Ratio", status: "1 : 3.25 R", type: "profit" },
        { label: "Target Net Profit", status: "+$406.25", type: "profit" }
      ],
      footnote: "Formula: Lot Size = (Balance × Risk %) / |Entry − SL|"
    },
    {
      num: "03",
      phase: "PHASE 03 · AUDIT & ANALYTICS",
      title: "Log & Master Your Edge",
      desc: "Unlock the gate and log the trade. TradeGate stores your setups locally with screenshot attachments, session tags, behavioral error tags, and automated setup grading.",
      badge: "100% Local-First",
      badgeColor: "text-blue-400 bg-blue-500/10 border-blue-500/30",
      microUi: [
        { label: "Automated Setup Grade", status: "Grade A+", type: "grade" },
        { label: "Execution Error Tagging", status: "None (Clean)", type: "clean" },
        { label: "Data Storage Destination", status: "chrome.storage", type: "storage" },
        { label: "Performance Sync", status: "Live Analytics", type: "sync" }
      ],
      footnote: "Stored exclusively on your device with zero telemetry tracking"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="relative py-20 sm:py-28 min-h-[calc(100vh-4rem)] lg:min-h-screen flex flex-col justify-center section-divider scroll-mt-16 overflow-hidden" 
      ref={sectionRef}
    >
      {/* Dynamic ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-brand-gold/5 blur-[160px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-flex items-center gap-2 bg-brand-goldDim border border-brand-gold/25 rounded-full px-4 py-1.5 text-xs text-brand-gold font-semibold mb-4">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            EXECUTION PLAYBOOK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary leading-tight">
            How TradeGate Works.<br/>
            <span className="text-brand-gold">A 3-Step Playbook for Consistent Execution.</span>
          </h2>
          <p className="mt-4 text-txt-secondary text-sm sm:text-base leading-relaxed">
            From pre-trade discipline checks to automated journal analytics, TradeGate turns messy emotional trading into a mechanical, repeatable execution edge.
          </p>
        </div>

        {/* 3 Playbook Cards with Timeline Flow */}
        <div className="grid md:grid-cols-3 gap-7 stagger-children relative">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 sm:p-7 space-y-5 relative flex flex-col justify-between shadow-xl"
            >
              {/* Header inside card */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-gold opacity-90">
                    {step.num}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${step.badgeColor}`}>
                    {step.badge}
                  </span>
                </div>
                
                <span className="text-[10px] font-mono uppercase tracking-wider text-txt-muted block">
                  {step.phase}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-txt-primary leading-snug">
                  {step.title}
                </h3>
                
                <p className="text-txt-secondary text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Realistic Micro-UI Snippet */}
              <div className="bg-dark-elevation p-3.5 rounded-xl border border-dark-border space-y-2 font-mono text-[11px]">
                {step.microUi.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-0.5 border-b border-dark-border/40 last:border-0">
                    <span className="text-txt-muted text-[10px] flex items-center gap-1.5">
                      {item.type === 'check' && <span className="text-trade-green font-bold">✓</span>}
                      {item.label}
                    </span>
                    <span className={`text-[10px] font-bold ${
                      item.type === 'highlight' ? 'text-brand-gold' :
                      item.type === 'risk' ? 'text-trade-red' :
                      item.type === 'profit' ? 'text-trade-green' :
                      item.type === 'grade' ? 'text-trade-green bg-trade-greenDim px-1.5 py-0.5 rounded' :
                      item.type === 'clean' ? 'text-trade-green' :
                      item.type === 'storage' ? 'text-brand-gold' :
                      'text-txt-primary'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footnote detail */}
              <div className="pt-2 border-t border-dark-border flex items-center gap-2 text-[11px] text-txt-muted">
                <svg className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                <span className="truncate">{step.footnote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Connected Workflow Summary Bar */}
        <div className="reveal bg-dark-surface/80 border border-dark-border rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-lg text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-trade-green animate-pulse"></span>
            <span className="text-txt-primary font-bold">Closed-Loop Execution Cycle</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] text-txt-secondary">
            <span className="text-brand-gold font-bold">01. Checklist Pass</span>
            <span className="text-txt-muted">&rarr;</span>
            <span className="text-brand-gold font-bold">02. Exact Sizing</span>
            <span className="text-txt-muted">&rarr;</span>
            <span className="text-brand-gold font-bold">03. Journal &amp; Audit</span>
            <span className="text-txt-muted">&rarr;</span>
            <span className="text-trade-green font-bold">Edge Compounded</span>
          </div>
        </div>

      </div>
    </section>
  );
}
