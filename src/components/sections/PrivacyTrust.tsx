import { useEffect, useRef } from 'react';

export function PrivacyTrust() {
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
      id="privacy-trust" 
      className="relative py-16 sm:py-20 section-divider flex flex-col justify-center scroll-mt-16 overflow-hidden" 
      ref={sectionRef}
    >
      {/* Subtle emerald background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-trade-green/5 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-trade-greenDim border border-trade-green/30 rounded-full px-4 py-1.5 text-xs text-trade-green font-bold mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Zero-Telemetry Guarantee
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-txt-primary">
            Your Trading Data Never Leaves<br/>
            <span className="text-trade-green">Your Machine. Period.</span>
          </h2>
          <p className="mt-4 text-txt-secondary text-base max-w-2xl mx-auto">
            TradeGate is built on strict local-first architecture. We do not operate user servers, track IP addresses, or monetize your journal data.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {/* Card 1 */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-trade-greenDim flex items-center justify-center text-trade-green">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <h3 className="text-lg font-bold text-txt-primary">No External Servers</h3>
            <p className="text-txt-secondary text-xs leading-relaxed">
              All trade journals, formulas, custom checklists, and balances reside exclusively inside <code className="text-brand-gold bg-dark-elevation px-1 py-0.5 rounded font-mono">chrome.storage.local</code> on your device.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-trade-greenDim flex items-center justify-center text-trade-green">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3 className="text-lg font-bold text-txt-primary">No Account Required</h3>
            <p className="text-txt-secondary text-xs leading-relaxed">
              No email registration, no phone numbers, no passwords, and no OAuth trackers. Install and begin enforcing discipline instantly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-trade-greenDim flex items-center justify-center text-trade-green">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            <h3 className="text-lg font-bold text-txt-primary">Zero Tracking &amp; Analytics</h3>
            <p className="text-txt-secondary text-xs leading-relaxed">
              We do not use Google Analytics, Mixpanel, or third-party pixels. Your trades, setup grades, and profits remain strictly your secret.
            </p>
          </div>

          {/* Card 4 */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-trade-greenDim flex items-center justify-center text-trade-green">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            </div>
            <h3 className="text-lg font-bold text-txt-primary">100% Offline Capable</h3>
            <p className="text-txt-secondary text-xs leading-relaxed">
              TradeGate runs fully client-side. You can compute lot sizes and log entries even completely disconnected from the internet.
            </p>
          </div>

          {/* Card 5 */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-trade-greenDim flex items-center justify-center text-trade-green">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <h3 className="text-lg font-bold text-txt-primary">Client-Side Sandboxing</h3>
            <p className="text-txt-secondary text-xs leading-relaxed">
              Runs in an isolated browser sandbox with zero background network socket leaks or external script execution.
            </p>
          </div>

          {/* Card 6 */}
          <div className="card-glow bg-dark-surface border border-dark-border rounded-2xl p-6 space-y-3 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-trade-greenDim flex items-center justify-center text-trade-green">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
            <h3 className="text-lg font-bold text-txt-primary">Export &amp; Portability</h3>
            <p className="text-txt-secondary text-xs leading-relaxed">
              You own your data. Backup, export to clean PDF or CSV, or wipe your local records with a single click at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
